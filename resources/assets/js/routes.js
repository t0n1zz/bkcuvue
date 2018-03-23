import header from './components/header.vue';
import login from './views/login.vue';
import dashboard from './views/dashboard.vue';
import notFound from './views/notFound.vue';
import artikel from './views/artikel/index.vue';
import artikel_form from './views/artikel/form.vue';
import artikelPenulis from './views/artikelPenulis/index.vue';
import artikelPenulis_form from './views/artikelPenulis/form.vue';
import artikelKategori from './views/artikelKategori/index.vue';
import artikelKategori_form from './views/artikelKategori/form.vue';
import laporanCu from './views/laporanCu/index.vue';
import laporanCu_form from './views/laporanCu/form.vue';
import cu from './views/cu/index.vue';
import cu_form from './views/cu/form.vue';
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

	// not found
	{ path: '/notFound',name: 'notFound', components: { default: notFound,'header': header } },

	// artikel
	{ path: '/artikel',name: 'artikel', 
		components: { default: artikel, 'header': header }},
	{ path: '/artikel/cu/:cu',name: 'artikelCU', 
		components: { default: artikel, 'header': header }, 
		meta: { mode:'cu' }},
	{ path: '/artikel/kategori/:id',name: 'artikelFilterKategori', 
		components: { default: artikel, 'header': header }, 
		meta: { mode:'kategori' }},
	{ path: '/artikel/kategori/:id/cu/:cu',name: 'artikelFilterKategoriCU', 
		components: { default: artikel, 'header': header }, 
		meta: { mode:'kategori' }},
		{ path: '/artikel/penulis/:id',name: 'artikelFilterPenulis', 
		components: { default: artikel, 'header': header }, 
		meta: { mode:'penulis' }},
	{ path: '/artikel/penulis/:id/cu/:cu',name: 'artikelFilterPenulisCU', 
		components: { default: artikel, 'header': header }, 
		meta: { mode:'penulis' }},
	{ path: '/artikel/create',name: 'artikelCreate', 
		components: { default: artikel_form, 'header': header} },
	{ path: '/artikel/edit/:id',name: 'artikelEdit', 
		components: { default: artikel_form, 'header': header}, meta: { mode:'edit' } },
	

	// artikel kategori
	{ path: '/artikelKategori',name: 'artikelKategori', 
		components: { default: artikelKategori, 'header': header }},
	{ path: '/artikelKategori/cu/:cu',name: 'artikelKategoriCU', 
		components: { default: artikelKategori, 'header': header },
		meta: { mode:'cu' }},
	{ path: '/artikelKategori/create',name: 'artikelKategoriCreate', 
		components: { default: artikelKategori_form, 'header': header} },
	{ path: '/artikelKategori/edit/:id',name: 'artikelKategoriEdit', 
		components: { default: artikelKategori_form, 'header': header}, meta: { mode:'edit' } },

	// artikel penulis
	{ path: '/artikelPenulis',name: 'artikelPenulis', 
		components: { default: artikelPenulis, 'header': header }},
	{ path: '/artikelPenulis/cu/:cu',name: 'artikelPenulisCU', 
		components: { default: artikelPenulis, 'header': header },
		meta: { mode:'cu' }},
	{ path: '/artikelPenulis/create',name: 'artikelPenulisCreate', 
		components: { default: artikelPenulis_form, 'header': header} },
	{ path: '/artikelPenulis/edit/:id',name: 'artikelPenulisEdit', 
		components: { default: artikelPenulis_form, 'header': header}, meta: { mode:'edit' } },

	// cu
	{ path: '/cu',name: 'cu', 
		components: { default: cu, 'header': header }},
	{ path: '/cu/create',name: 'cuCreate', 
		components: { default: cu_form, 'header': header} },
	{ path: '/cu/edit/:id',name: 'cuEdit', 
		components: { default: cu_form, 'header': header}, meta: { mode:'edit' } },

	// artikel kategori
	{ path: '/laporancu',name: 'laporanCu', 
		components: { default: laporanCu, 'header': header }},
	{ path: '/laporancu/cu/:cu',name: 'laporanCuCU', 
		components: { default: laporanCu, 'header': header },
		meta: { mode:'cu' }},
	{ path: '/laporancu/create',name: 'laporanCuCreate', 
		components: { default: laporanCu_form, 'header': header} },
	{ path: '/laporancu/edit/:id',name: 'laporanCuEdit', 
		components: { default: laporanCu_form, 'header': header}, meta: { mode:'edit' } },
]

export default routes