import Vue from 'vue';
import Admin from './admin.vue';
import VueRouter from 'vue-router';
import routes from './routes';
import store from './store';
import Axios from 'axios';
import id from 'vee-validate/dist/locale/id';
import VeeValidate, { Validator } from 'vee-validate';
import { BKCU_CONFIG } from './config.js';
import moment from 'moment';
import Vue2Filters from 'vue2-filters';
import VueKatex from 'vue-katex';

Validator.localize('id',id); //localization
Vue.use(VueRouter);
Vue.use(VeeValidate, {fieldsBagName: 'formFields'});
Vue.use(Vue2Filters);
Vue.use(VueKatex);

window.moment = moment;
window.axios = Axios;
axios.defaults.headers.common = {
    'X-Requested-With': 'XMLHttpRequest',
};
let token = document.head.querySelector('meta[name="csrf-token"]');
      
if (token) {
    window.axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content;
} else {
    console.error('CSRF token not found: https://laravel.com/docs/csrf#csrf-x-csrf-token');
}

const router = new VueRouter({
	base: '/admins',
    mode: 'history',
    routes
});

router.beforeEach((to, from, next) => {
    window.scrollTo(0, 0);
    if (to.fullPath !== "/login") {
        axios.get('/api/v1/userId').then(response => {
            next(vm => vm.$store.dispatch('user/profile'));
        }).catch(error => {
            router.push('/login');
        })
    }else{
        next(vm => vm.$store.dispatch('user/profile'));
    }
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
Vue.filter('dateMonth', function(value){
    return window.moment(value).format('DD MMMM YYYY');
});
Vue.filter('month', function(value){
    return window.moment(value).format('MMMM');
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


Vue.directive('tooltip', function(el, binding){
    $(el).tooltip({
            title: binding.value,
            placement: binding.arg,
            trigger: 'hover'             
        })
});

export const bus = new Vue();

const app = new Vue({
    store,
    router,
    render: h => h(Admin)
}).$mount('#app');

