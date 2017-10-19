import Vue from 'vue';
import Admin from './admin.vue';
import VueRouter from 'vue-router';
import routes from './routes';
import Axios from 'axios';
import VeeValidate from 'vee-validate';
import {ServerTable, ClientTable, Event} from 'vue-tables-2';

Vue.use(VueRouter);
Vue.use(VeeValidate, {fieldsBagName: 'formFields'});
Vue.use(ServerTable);

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
    router,
    render: h => h(Admin)
}).$mount('#app');

