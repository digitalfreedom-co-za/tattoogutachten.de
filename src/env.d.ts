interface ImportMetaEnv {
  /** cal.com booking link (user/event), overrides the demo link in src/config/booking.ts. */
  readonly PUBLIC_CAL_LINK?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
