import Vue from 'vue';
import Admin from './admin.vue';
import VueRouter from 'vue-router';
import routes from './routes';
import store from './store';
import Axios from 'axios';
import id from 'vee-validate/dist/locale/id';
import VeeValidate, { Validator } from 'vee-validate';
import { BKCU_CONFIG } from './config.js';

Validator.localize('id',id); //localization
Vue.use(VueRouter);
Vue.use(VeeValidate, {fieldsBagName: 'formFields'});

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
        axios.get('/api/v1/profile').then(response => {       
            next();
        }).catch(error => {
            router.push('/login');
        })
    }else{
        next();
    }
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

