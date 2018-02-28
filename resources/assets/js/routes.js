import header from './components/header.vue';
import login from './views/login.vue';
import dashboard from './views/dashboard.vue';
import artikel from './views/artikel/index.vue';
import artikel_form from './views/artikel/form.vue';
import user from './views/user/index.vue';
import user_form from './views/user/form.vue';
import role from './views/role/index.vue';

const routes = [

	// login
	{ path: '/login',name: 'login', components: { default: login } },

	// user
	{ path: '/user',name: 'user', components: { default: user, 'header': header }},
	{ path: '/user/create',name: 'userCreate', components: { default: user_form, 'header': header} },
	{ path: '/user/edit/:id',name: 'userEdit', components: { default: user_form, 'header': header}, meta: { mode:'edit' } },

	// role
	{ path: '/role',name: 'role', components: { default: role, 'header': header }},

	// dashboard
	{ path: '/',name: 'dashboard', components: { default: dashboard,'header': header } },

	// artikel
	{ path: '/artikel',name: 'artikel', components: { default: artikel, 'header': header }},
	{ path: '/artikel/create',name: 'artikelCreate', components: { default: artikel_form, 'header': header} },
	{ path: '/artikel/edit/:id',name: 'artikelEdit', components: { default: artikel_form, 'header': header}, meta: { mode:'edit' } },

	// artikel kategori
	{ path: '/artikel_kategori',name: 'artikelKategori', components: { default: artikel, 'header': header }},

	// artikel penulis
	{ path: '/artikel_penulis',name: 'artikelPenulis', components: { default: artikel, 'header': header }},

]

export default routes