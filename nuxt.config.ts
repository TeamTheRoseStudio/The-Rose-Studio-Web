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
      link: [
        {
          rel: "preload",
          as: "font",
          crossorigin: "anonymous",
          href: "/fonts/Poppins-Regular.ttf",
        },
        {
          rel: "preload",
          as: "font",
          crossorigin: "anonymous",
          href: "/fonts/Rubik-Regular.ttf",
        },
      ],
    },
  },
  css: [
    "@fortawesome/fontawesome-svg-core/styles.css",
    "assets/css/input.css",
    "assets/css/globals.css",
  ],
  modules: ["@nuxtjs/tailwindcss", "@storyblok/nuxt", "@nuxt/image-edge"],
  storyblok: {
    accessToken: "OfBJYurD1JRpKVUsUP6TsAtt",
  },
  image: {
    provider: "storyblok",
    storyblok: {
      baseURL: "https://a.storyblok.com/",
    },
  },
  build: {
    transpile: [
      "@fortawesome/fontawesome-svg-core",
      "@fortawesome/free-brands-svg-icons",
      "@fortawesome/free-solid-svg-icons",
      "@fortawesome/vue-fontawesome",
    ],
  },
});
