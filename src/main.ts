/**
 * NOTE - This file only exists for development purpose.
 * It will help me to run and test the form
 */


import Vue from 'vue'
import App from './App.vue'
// @ts-ignore
import {VueFormBuilderPlugin} from "@/index";
import {IRegisterProperties} from "@/interfaces/register-properties.interface";
// @ts-ignore
import { VueMaskDirective } from 'v-mask';

Vue.config.productionTip = false
Vue.directive('mask', VueMaskDirective);

const configOptions : IRegisterProperties = {
  disableControls: [], // ['input', 'number']
  globalInjection: true,
  validationErrorShowAlert: true,
  validationErrorAlertText: "Please check the error messages and solve it."
};

Vue.use(VueFormBuilderPlugin, configOptions)

new Vue({
  render: h => h(App)
}).$mount('#app')
