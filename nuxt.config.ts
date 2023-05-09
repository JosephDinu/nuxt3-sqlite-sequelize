// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    components: true,

    ssr: false,

    modules: ["@pinia/nuxt"],

    imports: {
        dirs: ["stores"],
    },

    pinia: {
        autoImports: ["defineStore"],
    },

    css: ["~/assets/scss/index.scss", "vuetify/styles/main.sass"],

    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: "@import '@/assets/variables.scss';"
                }
            }
        }
    },

    // runtimeConfig: {
    //     DB_NAME: process.env.DB_NAME
    // },

    build: {
        transpile: ["vuetify"],
    },
})
