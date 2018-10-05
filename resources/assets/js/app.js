import Vue from 'vue';
import Admin from './admin.vue';
import VueRouter from 'vue-router';
import routes from './routes';
import store from './store';
import Axios from 'axios';
import id from 'vee-validate/dist/locale/id';
import VeeValidate, { Validator } from 'vee-validate';
import { BKCU_CONFIG } from './config.js';
import Auth from './auth.js';
import Api from './api.js';
import moment from 'moment';
import Vue2Filters from 'vue2-filters';
import VueKatex from 'vue-katex';
import VTooltip from 'v-tooltip';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import documentEditor from '@ckeditor/ckeditor5-build-decoupled-document'
import VueCkeditor from 'vue-ckeditor5'

Validator.localize('id',id); //localization
Vue.use(VueRouter);
Vue.use(VeeValidate, {fieldsBagName: 'formFields'});
Vue.use(Vue2Filters);
Vue.use(VueKatex);
Vue.use(VTooltip);

const options = {
  editors: {
    classic: ClassicEditor,
    document: documentEditor
  },
  name: 'ckeditor'
}

Vue.use(VueCkeditor.plugin, options);

window.moment = moment; // handling date formating
window.moment.locale('id'); // handling date formating locale
window.axios = Axios; // handling http post
window.api = new Api(); // handling axios api
window.auth = new Auth(); // handling authentication

const router = new VueRouter({
	base: '/admins',
    mode: 'history',
    routes
});

router.beforeEach((to, from, next) => {
	window.scrollTo(0, 0);
	if (to.matched.some(record => record.meta.loggedIn)) {         
		if (!auth.check()) {
				next({
						path: '/login',
						query: { redirect: to.fullPath }
				});
				return;
		}
	}
	if (to.matched.some(record => record.meta.notLoggedIn)) {         
		if (auth.check()) {
				next({
						path: '/'
				});
				return;
		}
	}
	next();
});

// filters
Vue.filter('dateTime', function(value){
	if(value){
			return window.moment(value).format('DD-MM-YYYY') + '&nbsp; / &nbsp;'  + moment(value).format('kk:mm:ss');
	}else{
			return '-';
	}
});
Vue.filter('date', function(value){
	return window.moment(value).format('DD-MM-YYYY');
});
Vue.filter('time', function(value){
	return window.moment(value).format('kk:mm:ss');
});
Vue.filter('dateMonth', function(value){
	return window.moment(value).format('DD MMMM YYYY');
});
Vue.filter('month', function(value){
	return window.moment(value).format('MMMM');
});
Vue.filter('year', function(value){
	return window.moment(value).format('YYYY');
});
Vue.filter('relativeHour', function(value){
	return window.moment(value).fromNow();
});
Vue.filter('checkStatus', function(value){
	if (value > 0) {
			return '<span class="bg-orange-400 text-highlight"><i class="icon-check"></i></span>';
	} else {
			return '<span class="bg-teal-300 text-highlight"><i class="icon-cross3"></i></span>';
	}
});
Vue.filter('trimString', function(string){
	return string.replace(/<(?:.|\n)*?>/gm, '').replace(/\&nbsp;/g, '').replace(/\&ldquo;/g, '').substring(0, 150) +
				' [...]';
});
Vue.filter('percentage', function(value, decimals) {
	if(!value) {
			value = 0;
	}

	if(!decimals) {
			decimals = 0;
	}

	value = value * 100;
	value = Math.round(value * Math.pow(10, decimals)) / Math.pow(10, decimals);
	value = value + '%';
	return value;
});
Vue.filter('percentage2', function(value, decimals) {
	if(!value) {
			value = 0;
	}

	if(!decimals) {
			decimals = 0;
	}

	value = value * 100;
	value = Math.round(value * Math.pow(10, decimals)) / Math.pow(10, decimals);
	value = value;
	return value;
});
Vue.filter('round', function(value, decimals) {
	if(!value) {
		value = 0;
	}

	if(!decimals) {
		decimals = 0;
	}

	value = Math.round(value * Math.pow(10, decimals)) / Math.pow(10, decimals);
	return value;
});

export const bus = new Vue();

const app = new Vue({
    store,
    router,
    render: h => h(Admin)
}).$mount('#app');

