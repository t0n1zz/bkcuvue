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
import laporanCu_detail from './views/laporanCu/detail.vue';
import laporanCu_draft from './views/laporanCu/draft.vue';
import laporanTp_draft from './views/laporanCu/draftTp.vue';
import laporanGerakan from './views/laporanGerakan/index.vue';
import diklatBKCU from './views/diklatBKCU/index.vue';
import diklatBKCU_form from './views/diklatBKCU/form.vue';
import tempat from './views/tempat/index.vue';
import tempat_form from './views/tempat/form.vue';
import cu from './views/cu/index.vue';
import cu_form from './views/cu/form.vue';
import tp from './views/tp/index.vue';
import tp_form from './views/tp/form.vue';
import pengelola from './views/pengelola/index.vue';
import pengelola_form from './views/pengelola/form.vue';
import pengelola_edit from './views/pengelola/edit.vue';
import produkCu from './views/produkCu/index.vue';
import produkCu_form from './views/produkCu/form.vue';
import user from './views/user/index.vue';
import user_form from './views/user/form.vue';
import profile from './views/user/profile.vue';

const routes = [

	// login
	{ path: '/login',
		name: 'login', 
		components: { default: login },
		meta: { notLoggedIn: true }},
	
	// user
	{ path: '/user/cu/:cu',
		name: 'userCu', 
		components: { default: user, 'header': header }, 
		meta: { requiresAuth: true, mode:'cu' }},
	{ path: '/user/create',
		name: 'userCreate', 
		components: { default: user_form, 'header': header},
		meta: { requiresAuth: true }},
	{ path: '/user/edit/:id',
		name: 'userEdit', 
		components: { default: user_form, 'header': header}, 
		meta: { requiresAuth: true, mode:'edit' }},
	{ path: '/profile/:id',
		name: 'profile', 
		components: { default: profile, 'header': header},
		meta: { requiresAuth: true }},

	// dashboard
	{ path: '/',
		name: 'dashboard', 
		components: { default: dashboard,'header': header },
		meta: { requiresAuth: true }},

	// not found
	{ path: '/notFound',
		name: 'notFound',
		components: { default: notFound,'header': header },
		meta: { requiresAuth: true }},

	// artikel
	{ path: '/artikel/cu/:cu',
		name: 'artikelCu', 
		components: { default: artikel, 'header': header }, 
		meta: { requiresAuth:true, mode:'cu' }},
	{ path: '/artikel/cu/:cu/kategori/:kategori',
		name: 'artikelFilterKategoriCu',
		components: { default: artikel, 'header': header }, 
		meta: { requiresAuth:true, mode:'kategori' }},
	{ path: '/artikel/cu/:cu/penulis/:penulis/',
		name: 'artikelFilterPenulisCu', 
		components: { default: artikel, 'header': header }, 
		meta: { requiresAuth:true, mode:'penulis' }},
	{ path: '/artikel/create',
		name: 'artikelCreate', 
		components: { default: artikel_form, 'header': header},
		meta: { requiresAuth: true }},
	{ path: '/artikel/edit/:id',
		name: 'artikelEdit', 
		components: { default: artikel_form, 'header': header}, 
		meta: { requiresAuth: true, mode:'edit' } },
	
	// artikel kategori
	{ path: '/artikelKategori/cu/:cu',
		name: 'artikelKategoriCu', 
		components: { default: artikelKategori, 'header': header },
		meta: { requiresAuth: true, mode:'cu' }},
	{ path: '/artikelKategori/create',
		name: 'artikelKategoriCreate', 
		components: { default: artikelKategori_form, 'header': header},
		meta: { requiresAuth: true }},
	{ path: '/artikelKategori/edit/:id',
		name: 'artikelKategoriEdit', 
		components: { default: artikelKategori_form, 'header': header},
		meta: { requiresAuth: true, mode:'edit' }},

	// artikel penulis
	{ path: '/artikelPenulis/cu/:cu',
		name: 'artikelPenulisCu', 
		components: { default: artikelPenulis, 'header': header },
		meta: { requiresAuth: true, mode:'cu' }},
	{ path: '/artikelPenulis/create',
		name: 'artikelPenulisCreate', 
		components: { default: artikelPenulis_form, 'header': header},
		meta: { requiresAuth: true }},
	{ path: '/artikelPenulis/edit/:id',
		name: 'artikelPenulisEdit', 
		components: { default: artikelPenulis_form, 'header': header}, 
		meta: { requiresAuth: true, mode:'edit' } },
	
	// diklat pus
	{ path: '/diklatBKCU',
		name: 'diklatBKCU', 
		components: { default: diklatBKCU, 'header': header }},
	{ path: '/diklatBKCU/create',
		name: 'diklatBKCUCreate', 
		components: { default: diklatBKCU_form, 'header': header} },
	{ path: '/diklatBKCU/edit/:id',
		name: 'diklatBKCUEdit', 
		components: { default: diklatBKCU_form, 'header': header}, 
		meta: { requiresAuth: true, mode:'edit' } },

	// diklat tempat
	{ path: '/tempat',
		name: 'tempat', 
		components: { default: tempat, 'header': header }},
	{ path: '/tempat/create',
		name: 'tempatCreate', 
		components: { default: tempat_form, 'header': header} },
	{ path: '/tempat/edit/:id',
		name: 'tempatEdit', 
		components: { default: tempat_form, 'header': header}, 
		meta: { requiresAuth: true, mode:'edit' } },	

	// cu
	{ path: '/cu',
		name: 'cu', 
		components: { default: cu, 'header': header },
		meta: { requiresAuth: true }},
	{ path: '/cu/create',
		name: 'cuCreate', 
		components: { default: cu_form, 'header': header},
		meta: { requiresAuth: true }},
	{ path: '/cu/edit/:id',
		name: 'cuEdit', 
		components: { default: cu_form, 'header': header}, 
		meta: { requiresAuth: true, mode:'edit' } },
	{ path: '/cu/profile/:id',
		name: 'cuProfile', 
		components: { default: cu_form, 'header': header},
		meta: { requiresAuth: true, mode:'profile' } },	
		
	// tp cu
	{ path: '/tp/cu/:cu',
		name: 'tpCu', 
		components: { default: tp, 'header': header }, 
		meta: { requiresAuth: true, mode:'cu' }},
	{ path: '/tp/create',
		name: 'tpCreate', 
		components: { default: tp_form, 'header': header},
		meta: { requiresAuth: true }},
	{ path: '/tp/edit/:id',
		name: 'tpEdit', 
		components: { default: tp_form, 'header': header},
		meta: { requiresAuth: true, mode:'edit' } },

	// produk cu	
	{ path: '/produkCu/cu/:cu',
		name: 'produkCuCu', 
		components: { default: produkCu, 'header': header }, 
		meta: { requiresAuth: true, mode:'cu' }},
	{ path: '/produkCu/create',
		name: 'produkCuCreate', 
		components: { default: produkCu_form, 'header': header},
		meta: { requiresAuth: true }},
	{ path: '/produkCu/edit/:id',
		name: 'produkCuEdit', 
		components: { default: produkCu_form, 'header': header}, 
		meta: { requiresAuth: true, mode:'edit' } },

	// pengelola cu
	{ path: '/pengelola/cu/:cu',
		name: 'pengelolaCu', 
		components: { default: pengelola, 'header': header }, 
		meta: { requiresAuth: true, mode:'cu' }},
	{ path: '/pengelola/create',
		name: 'pengelolaCreate', 
		components: { default: pengelola_form, 'header': header},
		meta: { requiresAuth: true, mode:'create' }},
	{ path: '/pengelola/edit/:id',
		name: 'pengelolaEdit', 
		components: { default: pengelola_edit, 'header': header},
		meta: { requiresAuth: true }},

	// laporan cu
	// bkcu default route
	{ path: '/laporancu',
		name: 'laporanCu', 
		components: { default: laporanCu, 'header': header },
		meta: { requiresAuth: true }},
	// bkcu and periode route
	{ path: '/laporancu/periode/:periode',
		name: 'laporanCuPeriode', 
		components: { default: laporanCu, 'header': header },
		meta: { requiresAuth: true, mode:'periode' }},
	// cu and tp route	
	{ path: '/laporancu/cu/:cu/tp/:tp',
		name: 'laporanCuCu', 
		components: { default: laporanCu, 'header': header },
		meta: { requiresAuth: true, mode:'cu' }},
	// cu and periode  route	
	{ path: '/laporancu/cu/:cu/periode/:periode',
		name: 'laporanCuCuPeriode', 
		components: { default: laporanCu, 'header': header },
		meta: { requiresAuth: true, mode:'cuPeriode' }},
	// detail cu and tp route	
	{ path: '/laporancu/detail/:id',
		name: 'laporanCuDetail', 
		components: { default: laporanCu_detail, 'header': header },
		meta: { requiresAuth: true, mode:'detail' }},
	{ path: '/laporancu/detail/cu/:cu/periode/:periode',
		name: 'laporanCuDetailPeriode', 
		components: { default: laporanCu_detail, 'header': header },
		meta: { requiresAuth: true, mode:'detailPeriode' }},
	// detail cu and tp route	
	{ path: '/laporanTp/detail/:id',
		name: 'laporanTpDetail', 
		components: { default: laporanCu_detail, 'header': header },
		meta: { requiresAuth: true, mode:'detailTp' }},
	{ path: '/laporanTp/detail/tp/:tp/periode/:periode',
		name: 'laporanTpDetailPeriode', 
		components: { default: laporanCu_detail, 'header': header },
		meta: { requiresAuth: true, mode:'detailTpPeriode' }},
	// create
	{ path: '/laporancu/create',
		name: 'laporanCuCreate', 
		components: { default: laporanCu_form, 'header': header},
		meta: { requiresAuth: true }},	
	// edit konsolidasi	
	{ path: '/laporancu/edit/:id',
		name: 'laporanCuEdit', 
		components: { default: laporanCu_form, 'header': header}, 
		meta: { requiresAuth: true, mode:'edit' } },
	// edit tp	
	{ path: '/laporantp/edit/:id',
		name: 'laporanTpEdit', 
		components: { default: laporanCu_form, 'header': header}, 
		meta: { requiresAuth: true, mode:'editTp' } },	

	// laporan gerakan
	{ path: '/laporangerakan',
		name: 'laporanGerakan', 
		components: { default: laporanGerakan, 'header': header },
		meta: { requiresAuth: true  }},	

	// laporan draft
	{ path: '/laporancu/draft',
		name: 'laporanCuDraft', 
		components: { default: laporanCu_draft, 'header': header },
		meta: { requiresAuth: true }},	
	{ path: '/laporantp/draft',
		name: 'laporanTpDraft', 
		components: { default: laporanTp_draft, 'header': header },
		meta: { requiresAuth: true }},		
]

export default routes