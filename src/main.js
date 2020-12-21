import "./styles/style.scss";
import "./styles/libs/antd.scss";

import Antv from "ant-design-vue";
import App from "./App.vue";
import TheButton from "./components/common/TheButton";
import TheLoader from "./components/common/TheLoader";
import TheTitle from "./components/common/TheTitle";
import TheTransition from "./components/common/TheTransition";
import Vue from "vue";
import VueCarousel from "vue-carousel";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;
// Vue.prototype.$author = 'Vova'

Vue.component("TheButton", TheButton);
Vue.component("TheTransition", TheTransition);
Vue.component("TheLoader", TheLoader);
Vue.component("TheTitle", TheTitle);

Vue.use(Antv);
Vue.use(VueCarousel);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
