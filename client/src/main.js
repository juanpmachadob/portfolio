import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import i18n from "./i18n";
import VueEasyLightBox from 'vue-easy-lightbox'
import VueSweetalert2 from "vue-sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

const options = {
  confirmButtonColor: '#008cff',
};

const app = createApp(App).use(i18n).use(i18n);
app.use(i18n);
app.use(router);
app.use(VueEasyLightBox)
app.use(VueSweetalert2, options)

app.mount("#app");
