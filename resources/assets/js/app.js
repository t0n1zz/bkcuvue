import Vue from 'vue';
import Admin from './admin.vue';
import VueRouter from 'vue-router';
import routes from './routes';
import { store } from './store/store';
import Axios from 'axios';
import VeeValidate from 'vee-validate';

Vue.use(VueRouter);
Vue.use(VeeValidate, {fieldsBagName: 'formFields'});

window.axios = Axios;
axios.defaults.headers.common = {
    'X-CSRF-TOKEN': window.Laravel.csrfToken,
    'X-Requested-With': 'XMLHttpRequest',
    'Authorization': 'Bearer',
    'Accept': 'application/json',
};

const router = new VueRouter({
	base: '/admin',
    mode: 'history',
    routes
});

router.beforeEach((to, from, next) => {
    if (to.fullPath !== "/login") {
        axios.get('/api/profile').then(response => {
            next();
        }).catch(error => {
            router.push('/login');
        })
    }else{
        next();
    }
})

export const bus = new Vue();

const app = new Vue({
    store,
    router,
    render: h => h(Admin)
}).$mount('#app');

