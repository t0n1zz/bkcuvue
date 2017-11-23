import header from './components/header.vue';
import login from './views/login.vue';
import dashboard from './views/dashboard.vue';
import artikel from './views/artikel/index.vue';
import artikel_form from './views/artikel/form.vue';

const routes = [
	{ path: '/login',name: 'login', components: { default: login } },
	{ path: '/',name: 'dashboard', components: { default: dashboard,'header': header } },
	{ path: '/artikel',name: 'artikel', components: { default: artikel, 'header': header }},
	{ path: '/artikel/create',name: 'artikelCreate', components: { default: artikel_form, 'header': header} },
	{ path: '/artikel/edit/:id',name: 'artikelEdit', components: { default: artikel_form, 'header': header}, meta: { mode:'edit' } }
]

export default routes