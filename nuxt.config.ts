// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: "The Rose Studio",
      meta: [
        {
          name: "description",
          content:
            "Bienvenido a la Web de The Rose Studio, agencia de servicios digitales",
        },
      ],
      htmlAttrs: {
        lang: "es",
      },
    },
  },
  css: ["@fortawesome/fontawesome-svg-core/styles.css", "assets/css/input.css"],
  modules: ["@nuxtjs/tailwindcss", "@storyblok/nuxt"],
  storyblok: {
    accessToken: "OfBJYurD1JRpKVUsUP6TsAtt",
  },
});
