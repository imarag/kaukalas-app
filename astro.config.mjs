import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

import icon from "astro-icon";

export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [
    icon()
  ],

  i18n: {
    locales: ["gr", "en"],
    defaultLocale: "gr",
  }
});