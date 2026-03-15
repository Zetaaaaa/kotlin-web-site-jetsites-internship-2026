import type { Config } from "@react-router/dev/config";

export default {
  // SSR wyłączone na start, aby Twoje legacy SPA mogło "oddetchnąć"
  ssr: false,
} satisfies Config;