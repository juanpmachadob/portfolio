import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";
import { DEFAULT_LOCALE, LOCALES } from "./src/i18n";

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
  ],
  i18n: {
    locales: LOCALES,
    defaultLocale: DEFAULT_LOCALE,
    routing: {
      prefixDefaultLocale: true,
    },
  },
});
