interface ImportMetaEnv {
  /** cal.com booking link (user/event), overrides the demo link in src/config/booking.ts. */
  readonly PUBLIC_CAL_LINK?: string;
  /** 'true' makes all pages indexable (launch on the real domain). Default: noindex preview. */
  readonly PUBLIC_INDEXABLE?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
