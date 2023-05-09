import { createVuetify, ThemeDefinition } from "vuetify";
import * as components from "vuetify/components";
// import "@/scss/style.scss";
// import "@mdi/font/css/materialdesignicons.css";

const myCustomLightTheme: ThemeDefinition = {
  dark: false,
  colors: {
    background: "#FFFFFF",
    surface: "#FFFFFF",
    primary: "#023352",
    secondary: "#03DAC6",
    error: "#EA5455",
    info: "#00CFE8",
    success: "#00A252",
    warning: "#FBAC18",
    grey100: "#bbbbbb",
  },
};

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    theme: {
      defaultTheme: "myCustomLightTheme",
      themes: {
        myCustomLightTheme,
      },
    },
    components,
  });
  nuxtApp.vueApp.use(vuetify);
});
