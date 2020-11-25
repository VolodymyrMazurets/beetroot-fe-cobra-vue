import "./styles/style.scss";
import "ant-design-vue/dist/antd.css";

import Antv from "ant-design-vue";
import App from "./App.vue";
import TheButton from "./components/common/TheButton";
import Vue from "vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

Vue.component('TheButton', TheButton);

Vue.use(Antv);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
