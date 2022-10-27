import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/index";

import "bootstrap/dist/css/bootstrap.min.css";
import "animate.css";

import store from "./store";

const app = createApp(App);

app.use(store);
app.use(router);

app.mount("#app");
