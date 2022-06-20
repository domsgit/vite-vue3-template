import { createApp } from "vue";

import 'virtual:windi.css'

import App from "./App.vue";
import router from "./router";
import store from "./store";

const app = createApp(App)
  .use(store).use(router)

app.mount("#app")
