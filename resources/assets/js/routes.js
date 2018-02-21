import header from './components/header.vue';
import login from './views/login.vue';
import dashboard from './views/dashboard.vue';
import artikel from './views/artikel/index.vue';
import artikel_form from './views/artikel/form.vue';
import user from './views/user/index.vue';

const routes = [

	// login
	{ path: '/login',name: 'login', components: { default: login } },

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

	// admin
	{ path: '/user',name: 'user', components: { default: user, 'header': header }},
	{ path: '/user/create',name: 'userCreate', components: { default: artikel_form, 'header': header} },
]

export default routes