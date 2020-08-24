import Vue from "vue";//<script src="vue.js">
import App from "./App.vue";
import router from './router'

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
/*
html�� app������ ã�Ƽ� �� �κ��� vue ���ø����� �����ϵ��� ����Ʈ�Ѵ�.
render ���� h�Լ��� App�������ϸ� ���ʿ��� ���� �����ϵ��� ����ȴ�--> ���⼭ �䰡 ȣ��ȴ�.
*/