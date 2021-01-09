import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;

const vm = new Vue({
  render: (h) => h(App),
  data: () => ({ a: "" })
});

vm.$mount("#app");

console.log(vm);

vm.$watch("a", (a) => {
  console.log("changed", a);
});
vm.$data.a = "abc";
