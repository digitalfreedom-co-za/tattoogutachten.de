// Lazy cal.com inline embed. Nothing from cal.com loads until the calendar frame (.booking-frame)
// of a [data-booking] block is in the viewport, not the notice or text around it; then the official embed snippet is installed and the calendar rendered into the
// reserved frame. The skeleton fades out once cal.com reports the booking page as ready.
import { CAL_THEME_VARS } from '../config/booking';

type CalFn = ((...args: unknown[]) => void) & {
  q?: unknown[];
  ns?: Record<string, CalFn>;
  loaded?: boolean;
};

declare global {
  interface Window {
    Cal?: CalFn;
  }
}

/** Gives up waiting for cal.com after this long and offers the direct alternatives. */
const LOAD_TIMEOUT_MS = 15000;

/* eslint-disable */
// Official cal.com embed snippet (calcom/cal.com, packages/embeds/embed-snippet), unchanged apart
// from the types. It defines window.Cal as a queue and appends embed.js on the first call.
function installCalSnippet(src: string): void {
  (function (C: any, A: string, L: string) {
    let p = function (a: any, ar: any) {
      a.q.push(ar);
    };
    let d = C.document;
    C.Cal =
      C.Cal ||
      function () {
        let cal = C.Cal;
        let ar = arguments;
        if (!cal.loaded) {
          cal.ns = {};
          cal.q = cal.q || [];
          d.head.appendChild(d.createElement('script')).src = A;
          cal.loaded = true;
        }
        if (ar[0] === L) {
          const api: any = function () {
            p(api, arguments);
          };
          const namespace = ar[1];
          api.q = api.q || [];
          if (typeof namespace === 'string') {
            cal.ns[namespace] = cal.ns[namespace] || api;
            p(cal.ns[namespace], ar);
            p(cal, ['initNamespace', namespace]);
          } else p(cal, ar);
          return;
        }
        p(cal, ar);
      };
  })(window, src, 'init');
}
/* eslint-enable */

function setState(root: HTMLElement, state: 'pending' | 'loading' | 'ready' | 'failed'): void {
  root.dataset.state = state;
  // A half loaded iframe under the fallback must not stay in the focus order.
  const target = root.dataset.target ? document.getElementById(root.dataset.target) : null;
  if (target) target.inert = state === 'failed';
  if (state === 'pending') return;
  const status = root.querySelector<HTMLElement>('[data-booking-status]');
  if (status) status.textContent = root.dataset[`status${state[0].toUpperCase()}${state.slice(1)}`] ?? '';
}

/** German names of the IANA regions, for the timezone select. */
const REGIONS: Record<string, string> = {
  Africa: 'Afrika',
  America: 'Amerika',
  Antarctica: 'Antarktis',
  Arctic: 'Arktis',
  Asia: 'Asien',
  Atlantic: 'Atlantik',
  Australia: 'Australien',
  Europe: 'Europa',
  Indian: 'Indischer Ozean',
  Pacific: 'Pazifik',
};

/** Selected timezone per booking block; the device timezone until the visitor picks another. */
const timezones = new WeakMap<HTMLElement, string>();
const deviceTimezone = (): string => Intl.DateTimeFormat().resolvedOptions().timeZone || 'Europe/Berlin';

/** Fills the timezone select (grouped by region, device zone preselected) and swaps out the static text. */
function setupTimezone(root: HTMLElement): void {
  timezones.set(root, deviceTimezone());
  const select = root.querySelector<HTMLSelectElement>('[data-timezone]');
  if (!select || typeof Intl.supportedValuesOf !== 'function') return;

  const device = deviceTimezone();
  const zones = Intl.supportedValuesOf('timeZone');
  if (!zones.includes(device)) zones.push(device);
  const groups = new Map<string, HTMLOptGroupElement>();
  for (const zone of zones) {
    const [region, ...rest] = zone.split('/');
    const regionLabel = REGIONS[region] ?? region;
    const place = rest.length > 0 ? rest.join(', ').replaceAll('_', ' ') : zone;
    let group = groups.get(regionLabel);
    if (!group) {
      group = document.createElement('optgroup');
      group.label = regionLabel;
      groups.set(regionLabel, group);
    }
    const option = new Option(zone === device ? `${place}, Ihr Gerät` : place, zone, false, zone === device);
    group.append(option);
  }
  select.replaceChildren(...groups.values());
  select.hidden = false;
  root.querySelector<HTMLElement>('[data-timezone-static]')?.setAttribute('hidden', '');

  select.addEventListener('change', () => {
    timezones.set(root, select.value);
    // A loaded calendar is rendered again in the new timezone; before that the choice simply waits.
    if (root.dataset.state === 'ready' || root.dataset.state === 'loading') render(root);
  });
}

/** Installs the embed snippet for a block and wires its events, once. */
function mount(root: HTMLElement): void {
  const { calOrigin, calScript, namespace } = root.dataset;
  if (!calOrigin || !calScript || !namespace) return;

  installCalSnippet(calScript);
  const Cal = window.Cal!;
  Cal('init', namespace, { origin: calOrigin });
  const api = Cal.ns![namespace];

  api('on', {
    action: 'linkReady',
    callback: () => {
      window.clearTimeout(Number(root.dataset.timeout));
      setState(root, 'ready');
    },
  });
  const failed = () => {
    window.clearTimeout(Number(root.dataset.timeout));
    setState(root, 'failed');
  };
  api('on', { action: 'linkFailed', callback: failed });

  // embed.js blocked (content blocker, offline): no cal.com event will ever fire.
  document.querySelector<HTMLScriptElement>(`script[src="${calScript}"]`)?.addEventListener('error', failed);
  render(root);
}

/** Renders (or renders again, after a timezone change) the inline calendar into the reserved frame. */
function render(root: HTMLElement): void {
  const { calLink, namespace, target } = root.dataset;
  const api = namespace ? window.Cal?.ns?.[namespace] : undefined;
  const container = target ? document.getElementById(target) : null;
  if (!calLink || !api || !container) return;

  // cal.com ignores a second inline call while its previous element is still in the page.
  container.replaceChildren();
  setState(root, 'loading');
  window.clearTimeout(Number(root.dataset.timeout));
  root.dataset.timeout = String(window.setTimeout(() => setState(root, 'failed'), LOAD_TIMEOUT_MS));

  api('inline', {
    elementOrSelector: `#${target}`,
    calLink,
    config: { layout: 'month_view', theme: 'light', 'cal.tz': timezones.get(root) ?? deviceTimezone() },
  });
  api('ui', {
    theme: 'light',
    layout: 'month_view',
    // The event details stay hidden in both variants: cal.com renders links in the event description
    // in a fixed blue that fails text contrast on paper, and no embed option restyles them. The page
    // around the calendar states duration, cost and terms of the first consultation instead, and the
    // timezone select of the page replaces the one inside the details.
    hideEventTypeDetails: true,
    cssVarsPerTheme: { light: CAL_THEME_VARS, dark: CAL_THEME_VARS },
  });
}

function init(): void {
  const roots = Array.from(document.querySelectorAll<HTMLElement>('[data-booking]'));
  if (roots.length === 0) return;
  roots.forEach((root) => {
    setState(root, 'pending');
    setupTimezone(root);
  });

  if (!('IntersectionObserver' in window)) {
    roots.forEach(mount);
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        observer.unobserve(entry.target);
        const root = entry.target.closest<HTMLElement>('[data-booking]');
        if (root) mount(root);
      }
    },
    // Load only once the frame is in view; the skeleton holds the height until then, so no layout shift.
    { rootMargin: '0px' },
  );
  roots.forEach((root) => observer.observe(root.querySelector('.booking-frame') ?? root));
}

init();
