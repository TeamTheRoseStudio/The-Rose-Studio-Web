// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ["@fortawesome/fontawesome-svg-core/styles.css", "assets/css/input.css"],
  modules: [
    "@nuxtjs/tailwindcss",
    ["@storyblok/nuxt", { accessToken: "OfBJYurD1JRpKVUsUP6TsAtt" }],
  ],
  runtimeConfig: {
    public: {
      storyblok: {},
    },
  },
});
