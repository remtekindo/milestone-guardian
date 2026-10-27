// Fresh scaffold, 27 Oct 2026. No Soluntir files were copied into this repo.
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2026-10-27",
  css: ["~/assets/css/main.css"],
  nitro: {
    preset: "cloudflare_module",
  },
  typescript: {
    strict: true,
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
