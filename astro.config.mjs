import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

import icon from "astro-icon";

import sitemap from "@astrojs/sitemap";

export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [
    icon(),
    sitemap({
      i18n: {
        defaultLocale: 'gr',
        locales: {
          gr: 'el-GR',
          en: 'en-US',
        },
      },
    })
  ],

  i18n: {
    locales: ["gr", "en"],
    defaultLocale: "gr",
  }
});