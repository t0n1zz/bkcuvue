import Vue from 'vue';
import './helpers/filter.js';
import Api from './helpers/api.js';
import Admin from './admin.vue';
import VueRouter from 'vue-router';
import routes from './routes';
import store from './store';
import Axios from 'axios';
import id from 'vee-validate/dist/locale/id';
import VeeValidate, { Validator } from 'vee-validate';
import { initialize } from './helpers/general';
import moment from 'moment';
import Vue2Filters from 'vue2-filters';
import VueKatex from 'vue-katex';
import VTooltip from 'v-tooltip';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import VueCkeditor from 'vue-ckeditor5';
import VueHtmlToPaper from 'vue-html-to-paper';

Validator.localize('id', id); //localization
Vue.use(VueRouter);
Vue.use(VeeValidate, {
  fieldsBagName: 'formFields'
});
Vue.use(Vue2Filters);
Vue.use(VueKatex);
Vue.use(VTooltip);

const options = {
  editors: {
    classic: ClassicEditor,
  },
  name: 'ckeditor'
}

// ckeditor plugin
Vue.use(VueCkeditor.plugin, options);

// print plugin
const printOpt = {
  name: '_blank',
  specs: [
    'fullscreen=yes',
    'titlebar=yes',
    'scrollbars=yes'
  ],
  styles: [
    'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css',
    'https://unpkg.com/kidlat-css/css/kidlat.css'
  ]
};
Vue.use(VueHtmlToPaper, printOpt);

window.moment = moment; // handling date formating
window.moment.locale('id'); // handling date formating locale
window.axios = Axios; // handling http post
// window.api = new Api(); // handling axios api

const router = new VueRouter({
  base: '/admins',
  mode: 'history',
  routes
});

initialize(store, router);

export const bus = new Vue();

const app = new Vue({
  store,
  router,
  render: h => h(Admin)
}).$mount('#app');