import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

import icon from "astro-icon";

import sitemap from "@astrojs/sitemap";

export default defineConfig({
  build: {
    format: 'file'
  },
  site: "https://poolcleaningkaukalas.gr",
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [
    icon()
  ],
  i18n: {
    locales: ["gr", "en"],
    defaultLocale: "gr",
    routing: {
      prefixDefaultLocale: true
    }
  }
});