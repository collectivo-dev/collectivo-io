// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxt/ui", "@nuxtjs/google-fonts"],
  ui: {
    icons: ["bx", "bxl"],
  },
  colorMode: {
    preference: "light",
  },
  googleFonts: {
    download: true,
    families: { Poppins: [400, 500, 600, 700, 800, 900] },
  },
});
