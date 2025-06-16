import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

import icon from "astro-icon";

import sitemap from "@astrojs/sitemap";

export default defineConfig({
  build: {
    format: 'preserve'
  },
  site: "https://poolcleaningkaukalas.gr",
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [
    icon(),
    sitemap({
      i18n: {
        defaultLocale: 'el',
        locales: {
          en: 'en-US',
          el: 'el-GR',
        },
      },
    }),
  ],
  i18n: {
    locales: ["el", "en"],
    defaultLocale: "el",
    fallback: {
      en: "el",
    },
  }
});