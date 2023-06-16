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
      link: [],
      script: [
        {
          hid: "tawk.to",
          src: "https://embed.tawk.to/64883f71cc26a871b02238fa/1h2q3fll0",
          defer: true,
        },
      ],
    },
  },
  css: [
    "@fortawesome/fontawesome-svg-core/styles.css",
    "assets/css/input.css",
    "assets/css/globals.css",
  ],
  modules: [
    "@nuxtjs/tailwindcss",
    "@storyblok/nuxt",
    "@nuxt/image-edge",
    "@formkit/nuxt",
    "@nuxtjs/google-fonts",
  ],

  storyblok: {
    accessToken: "OfBJYurD1JRpKVUsUP6TsAtt",
  },
  image: {
    provider: "storyblok",
    storyblok: {
      baseURL: "https://a.storyblok.com/",
    },
  },
  googleFonts: {
    preload: true,
    download: true,
    families: {
      Rubik: true,
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
  //   plugins: [
  //     '~/plugins/calendly.client.js'
  // ]
});
