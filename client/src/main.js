import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import i18n from "./i18n";
import VueEasyLightBox from 'vue-easy-lightbox'

const app = createApp(App);
app.use(i18n);
app.use(router);
app.use(VueEasyLightBox)

app.mount("#app");