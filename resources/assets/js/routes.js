import header from './components/header.vue';
import footer from './components/footer.vue';
import login from './views/login.vue';
import dashboard from './views/dashboard.vue';
import notification from './views/sistem/notification.vue';
import changelog from './views/sistem/changelog.vue';
import saran from './views/saran/index.vue';
import errorLog from './views/errorLog/index.vue';
import pengumuman from './views/pengumuman/index.vue';
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
import diklatBKCU_detail from './views/diklatBKCU/detail.vue';
import tempat from './views/tempat/index.vue';
import tempat_form from './views/tempat/form.vue';
import cu from './views/cu/index.vue';
import cu_form from './views/cu/form.vue';
import tp from './views/tp/index.vue';
import tp_form from './views/tp/form.vue';
import aktivis from './views/aktivis/index.vue';
import aktivis_form from './views/aktivis/form.vue';
import aktivis_edit from './views/aktivis/edit.vue';
import aktivis_riwayat from './views/aktivis/riwayat.vue';
import mitraOrang from './views/mitraOrang/index.vue';
import mitraOrang_form from './views/mitraOrang/form.vue';
import mitraLembaga from './views/mitraLembaga/index.vue';
import mitraLembaga_form from './views/mitraLembaga/form.vue';
import anggotaCu from './views/anggotaCu/index.vue';
import anggotaCu_form from './views/anggotaCu/form.vue';
import anggotaCu_produk from './views/anggotaCu/produk.vue';
import saldo from './views/saldo/index.vue';
import jalinanKlaim from './views/jalinanKlaim/index.vue';
import jalinanKlaim_form from './views/jalinanKlaim/form.vue';
import jalinanCair from './views/jalinanCair/index.vue';
import jalinanLaporan_KlaimCair from './views/jalinanLaporan/cair.vue';
import produkCu from './views/produkCu/index.vue';
import produkCu_form from './views/produkCu/form.vue';
import user from './views/user/index.vue';
import user_form from './views/user/form.vue';
import user_aktivitas from './views/user/aktivitas.vue';
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
		components: { default: user, 'header': header, 'footer': footer  }, 
		meta: { requiresAuth: true, mode:'cu' }},
	{ path: '/user/create',
		name: 'userCreate', 
		components: { default: user_form, 'header': header, 'footer': footer },
		meta: { requiresAuth: true }},
	{ path: '/user/edit/:id',
		name: 'userEdit', 
		components: { default: user_form, 'header': header, 'footer': footer }, 
		meta: { requiresAuth: true, mode:'edit' }},
		{ path: '/user/aktivitas/:id',
		name: 'userAktivitas', 
		components: { default: user_aktivitas, 'header': header, 'footer': footer }, 
		meta: { requiresAuth: true }},	
	{ path: '/profile/:id',
		name: 'profile', 
		components: { default: profile, 'header': header, 'footer': footer },
		meta: { requiresAuth: true }},

	// dashboard
	{ path: '/',
		name: 'dashboard', 
		components: { default: dashboard,'header': header, 'footer': footer },
		meta: { requiresAuth: true }},

	// notification center
	{ path: '/notification',
		name: 'notification', 
		components: { default: notification,'header': header, 'footer': footer },
		meta: { requiresAuth: true }},
	
	// changelog
	{ path: '/changelog',
		name: 'changelog', 
		components: { default: changelog,'header': header, 'footer': footer },
		meta: { requiresAuth: true }},

	// saran
	{ path: '/saran',
	name: 'saran', 
	components: { default: saran,'header': header, 'footer': footer },
	meta: { requiresAuth: true }},

	// errorLog
	{ path: '/errorLog',
	name: 'errorLog', 
	components: { default: errorLog,'header': header, 'footer': footer },
	meta: { requiresAuth: true }},

	// pengumuman
	{ path: '/pengumuman/cu/:cu',
		name: 'pengumumanCu', 
		components: { default: pengumuman, 'header': header, 'footer': footer  },
		meta: { requiresAuth: true, mode:'cu' }},

	// not found
	{ path: '/notFound',
		name: 'notFound',
		components: { default: notFound,'header': header, 'footer': footer  },
		meta: { requiresAuth: true }},

	// artikel
	{ path: '/artikel/cu/:cu',
		name: 'artikelCu', 
		components: { default: artikel, 'header': header, 'footer': footer }, 
		meta: { requiresAuth:true, mode:'cu' }},
	{ path: '/artikel/cu/:cu/kategori/:kategori',
		name: 'artikelFilterKategoriCu',
		components: { default: artikel, 'header': header, 'footer': footer  }, 
		meta: { requiresAuth:true, mode:'kategori' }},
	{ path: '/artikel/cu/:cu/penulis/:penulis/',
		name: 'artikelFilterPenulisCu', 
		components: { default: artikel, 'header': header, 'footer': footer  }, 
		meta: { requiresAuth:true, mode:'penulis' }},
	{ path: '/artikel/create',
		name: 'artikelCreate', 
		components: { default: artikel_form, 'header': header, 'footer': footer },
		meta: { requiresAuth: true }},
	{ path: '/artikel/edit/:id',
		name: 'artikelEdit', 
		components: { default: artikel_form, 'header': header, 'footer': footer }, 
		meta: { requiresAuth: true, mode:'edit' } },
	
	// artikel kategori
	{ path: '/artikelKategori/cu/:cu',
		name: 'artikelKategoriCu', 
		components: { default: artikelKategori, 'header': header, 'footer': footer  },
		meta: { requiresAuth: true, mode:'cu' }},
	{ path: '/artikelKategori/create',
		name: 'artikelKategoriCreate', 
		components: { default: artikelKategori_form, 'header': header, 'footer': footer },
		meta: { requiresAuth: true }},
	{ path: '/artikelKategori/edit/:id',
		name: 'artikelKategoriEdit', 
		components: { default: artikelKategori_form, 'header': header, 'footer': footer },
		meta: { requiresAuth: true, mode:'edit' }},

	// artikel penulis
	{ path: '/artikelPenulis/cu/:cu',
		name: 'artikelPenulisCu', 
		components: { default: artikelPenulis, 'header': header, 'footer': footer  },
		meta: { requiresAuth: true, mode:'cu' }},
	{ path: '/artikelPenulis/create',
		name: 'artikelPenulisCreate', 
		components: { default: artikelPenulis_form, 'header': header, 'footer': footer },
		meta: { requiresAuth: true }},
	{ path: '/artikelPenulis/edit/:id',
		name: 'artikelPenulisEdit', 
		components: { default: artikelPenulis_form, 'header': header, 'footer': footer }, 
		meta: { requiresAuth: true, mode:'edit' } },
	
	// diklat 
	{ path: '/diklatBKCU/periode/:periode',
		name: 'diklatBKCU', 
		components: { default: diklatBKCU, 'header': header, 'footer': footer  },
		meta: { requiresAuth: true }},
	{ path: '/diklatBKCU/create',
		name: 'diklatBKCUCreate', 
		components: { default: diklatBKCU_form, 'header': header, 'footer': footer },
		meta: { requiresAuth: true }},
	{ path: '/diklatBKCU/edit/:id',
		name: 'diklatBKCUEdit', 
		components: { default: diklatBKCU_form, 'header': header, 'footer': footer }, 
		meta: { requiresAuth: true, mode:'edit' } },
		{ path: '/diklatBKCU/editDetail/:id',
		name: 'diklatBKCUEditDetail', 
		components: { default: diklatBKCU_form, 'header': header, 'footer': footer }, 
		meta: { requiresAuth: true, mode:'edit', isDetail: true } },	
	{ path: '/diklatBKCU/detail/:id',
		name: 'diklatBKCUDetail', 
		components: { default: diklatBKCU_detail, 'header': header, 'footer': footer }, 
		meta: { requiresAuth: true } },

	// diklat tempat
	{ path: '/tempat',
		name: 'tempat', 
		components: { default: tempat, 'header': header, 'footer': footer  },
		meta: { requiresAuth: true }},
	{ path: '/tempat/create',
		name: 'tempatCreate', 
		components: { default: tempat_form, 'header': header, 'footer': footer } },
	{ path: '/tempat/edit/:id',
		name: 'tempatEdit', 
		components: { default: tempat_form, 'header': header, 'footer': footer }, 
		meta: { requiresAuth: true, mode:'edit' } },	

	// cu
	{ path: '/cu',
		name: 'cu', 
		components: { default: cu, 'header': header, 'footer': footer  },
		meta: { requiresAuth: true }},
	{ path: '/cu/create',
		name: 'cuCreate', 
		components: { default: cu_form, 'header': header, 'footer': footer },
		meta: { requiresAuth: true }},
	{ path: '/cu/edit/:id',
		name: 'cuEdit', 
		components: { default: cu_form, 'header': header, 'footer': footer }, 
		meta: { requiresAuth: true, mode:'edit' } },
	{ path: '/cu/profile/:id',
		name: 'cuProfile', 
		components: { default: cu_form, 'header': header, 'footer': footer },
		meta: { requiresAuth: true, mode:'profile' } },	
		
	// tp cu
	{ path: '/tp/cu/:cu',
		name: 'tpCu', 
		components: { default: tp, 'header': header, 'footer': footer  }, 
		meta: { requiresAuth: true, mode:'cu' }},
	{ path: '/tp/create',
		name: 'tpCreate', 
		components: { default: tp_form, 'header': header, 'footer': footer },
		meta: { requiresAuth: true }},
	{ path: '/tp/edit/:id',
		name: 'tpEdit', 
		components: { default: tp_form, 'header': header, 'footer': footer },
		meta: { requiresAuth: true, mode:'edit' } },

	// produk cu	
	{ path: '/produkCu/cu/:cu',
		name: 'produkCuCu', 
		components: { default: produkCu, 'header': header, 'footer': footer  }, 
		meta: { requiresAuth: true, mode:'cu' }},
	{ path: '/produkCu/create',
		name: 'produkCuCreate', 
		components: { default: produkCu_form, 'header': header, 'footer': footer },
		meta: { requiresAuth: true }},
	{ path: '/produkCu/edit/:id',
		name: 'produkCuEdit', 
		components: { default: produkCu_form, 'header': header, 'footer': footer }, 
		meta: { requiresAuth: true, mode:'edit' } },

	// aktivis cu
	{ path: '/aktivis/cu/:cu/:tingkat',
		name: 'aktivisCu', 
		components: { default: aktivis, 'header': header, 'footer': footer  }, 
		meta: { requiresAuth: true, mode:'cu' }},
	{ path: '/aktivis/create',
		name: 'aktivisCreate', 
		components: { default: aktivis_form, 'header': header, 'footer': footer },
		meta: { requiresAuth: true, mode:'create' }},
	{ path: '/aktivis/edit/:id',
		name: 'aktivisEdit', 
		components: { default: aktivis_form, 'header': header, 'footer': footer },
		meta: { requiresAuth: true, mode:'edit' }},
	{ path: '/aktivis/riwayat/create/:id/cu/:cu',
		name: 'aktivisRiwayatCreate', 
		components: { default: aktivis_riwayat, 'header': header, 'footer': footer },
		meta: { requiresAuth: true, mode:'create' }},		
	{ path: '/aktivis/riwayat/edit/:id/cu/:cu',
		name: 'aktivisRiwayatEdit', 
		components: { default: aktivis_riwayat, 'header': header, 'footer': footer },
		meta: { requiresAuth: true, mode:'edit' }},		

	// mitra perseorangan
	{ path: '/mitraOrang',
		name: 'mitraOrang', 
		components: { default: mitraOrang, 'header': header, 'footer': footer  },
		meta: { requiresAuth: true }},
	{ path: '/mitraOrang/create',
		name: 'mitraOrangCreate', 
		components: { default: mitraOrang_form, 'header': header, 'footer': footer },
		meta: { requiresAuth: true }},
	{ path: '/mitraOrang/edit/:id',
		name: 'mitraOrangEdit', 
		components: { default: mitraOrang_form, 'header': header, 'footer': footer }, 
		meta: { requiresAuth: true, mode:'edit' } },
		
	// mitra lembaga
	{ path: '/mitraLembaga',
		name: 'mitraLembaga', 
		components: { default: mitraLembaga, 'header': header, 'footer': footer  },
		meta: { requiresAuth: true }},
	{ path: '/mitraLembaga/create',
		name: 'mitraLembagaCreate', 
		components: { default: mitraLembaga_form, 'header': header, 'footer': footer },
		meta: { requiresAuth: true }},
	{ path: '/mitraLembaga/edit/:id',
		name: 'mitraLembagaEdit', 
		components: { default: mitraLembaga_form, 'header': header, 'footer': footer }, 
		meta: { requiresAuth: true, mode:'edit' } },

	// anggota cu
	{ path: '/anggotaCu/cu/:cu',
		name: 'anggotaCuCu', 
		components: { default: anggotaCu, 'header': header, 'footer': footer  }, 
		meta: { requiresAuth: true, mode:'cu' }},
	{ path: '/anggotaCu',
		name: 'anggotaCu', 
		components: { default: anggotaCu, 'header': header, 'footer': footer  },
		meta: { requiresAuth: true }},
	{ path: '/anggotaCu/create',
		name: 'anggotaCuCreate', 
		components: { default: anggotaCu_form, 'header': header, 'footer': footer },
		meta: { requiresAuth: true, mode:'create' }},
	{ path: '/anggotaCu/create/:id',
		name: 'anggotaCuCreateEdit', 
		components: { default: anggotaCu_form, 'header': header, 'footer': footer },
		meta: { requiresAuth: true, mode:'createEdit' }},	
	{ path: '/anggotaCu/createjalinan/:nik',
		name: 'anggotaCuCreateJalinan', 
		components: { default: anggotaCu_form, 'header': header, 'footer': footer },
		meta: { requiresAuth: true, mode:'createJalinan' }},
	{ path: '/anggotaCu/createjalinan/:id',
		name: 'anggotaCuCreateJalinanEdit', 
		components: { default: anggotaCu_form, 'header': header, 'footer': footer },
		meta: { requiresAuth: true, mode:'createJalinanEdit' }},		
	{ path: '/anggotaCu/edit/:id',
		name: 'anggotaCuEdit', 
		components: { default: anggotaCu_form, 'header': header, 'footer': footer }, 
		meta: { requiresAuth: true, mode:'edit' } },
	{ path: '/anggotaCu/produk/create/:id/cu/:cu',
		name: 'anggotaCuProdukCreate', 
		components: { default: anggotaCu_produk, 'header': header, 'footer': footer },
		meta: { requiresAuth: true, mode:'create' }},		
	{ path: '/anggotaCu/produk/create/:id/cu/:cu/jalinan',
		name: 'anggotaCuProdukCreateJalinan', 
		components: { default: anggotaCu_produk, 'header': header, 'footer': footer },
		meta: { requiresAuth: true, mode:'createJalinan' }},			
	{ path: '/anggotaCu/produk/edit/:id/cu/:cu',
		name: 'anggotaCuProdukEdit', 
		components: { default: anggotaCu_produk, 'header': header, 'footer': footer },
		meta: { requiresAuth: true, mode:'edit' }},		
		
	// saldo	
	{ path: '/saldo',
		name: 'saldo', 
		components: { default: saldo, 'header': header, 'footer': footer  },
		meta: { requiresAuth: true }},

	// JALINAN
	{ path: '/jalinan/klaim/cu/:cu',
		name: 'jalinanKlaimCu', 
		components: { default: jalinanKlaim, 'header': header, 'footer': footer },
		meta: { requiresAuth: true, mode:'cu' }},
	{ path: '/jalinan/klaim/create',
		name: 'jalinanKlaimCreate', 
		components: { default: jalinanKlaim_form, 'header': header, 'footer': footer },
		meta: { requiresAuth: true, mode:'create' }},
	{ path: '/jalinan/klaim/create/:nik',
		name: 'jalinanKlaimCreateNik', 
		components: { default: jalinanKlaim_form, 'header': header, 'footer': footer },
		meta: { requiresAuth: true, mode:'createNIK' }},	
	{ path: '/jalinan/klaim/create/nik/:nik',
		name: 'jalinanKlaimCreateNIK', 
		components: { default: jalinanKlaim_form, 'header': header, 'footer': footer },
		meta: { requiresAuth: true, mode:'createNIK' }},	
	{ path: '/jalinan/klaim/edit/:nik/cu/:cu',
		name: 'jalinanKlaimEdit', 
		components: { default: jalinanKlaim_form, 'header': header, 'footer': footer }, 
		meta: { requiresAuth: true, mode:'edit' }},	

	// JALINAN PENCAIRAN		
	{ path: '/jalinan/cair',
		name: 'jalinanCair', 
		components: { default: jalinanCair, 'header': header, 'footer': footer },
		meta: { requiresAuth: true }},
	{ path: '/jalinan/cair/:awal/cu/:cu',
		name: 'jalinanCairTanggal', 
		components: { default: jalinanCair, 'header': header, 'footer': footer },
		meta: { requiresAuth: true , mode:'cair' }},
		
	// JALINAN LAPORAN
	{ path: '/jalinan/laporan/klaim/cair',
		name: 'jalinanLaporanKlaimCair', 
		components: { default: jalinanLaporan_KlaimCair, 'header': header, 'footer': footer },
		meta: { requiresAuth: true }},
	{ path: '/jalinan/laporan/klaim/cair/:awal/:akhir/cu/:cu',
		name: 'jalinanLaporanKlaimCairTanggal', 
		components: { default: jalinanLaporan_KlaimCair, 'header': header, 'footer': footer },
		meta: { requiresAuth: true , mode:'laporan' }},

	// laporan cu
	// bkcu default route
	{ path: '/laporancu',
		name: 'laporanCu', 
		components: { default: laporanCu, 'header': header, 'footer': footer  },
		meta: { requiresAuth: true }},
	// bkcu and periode route
	{ path: '/laporancu/periode/:periode',
		name: 'laporanCuPeriode', 
		components: { default: laporanCu, 'header': header, 'footer': footer  },
		meta: { requiresAuth: true, mode:'periode' }},
	// cu and tp route	
	{ path: '/laporancu/cu/:cu/tp/:tp',
		name: 'laporanCuCu', 
		components: { default: laporanCu, 'header': header, 'footer': footer  },
		meta: { requiresAuth: true, mode:'cu' }},
	// cu and periode  route	
	{ path: '/laporancu/cu/:cu/periode/:periode',
		name: 'laporanCuCuPeriode', 
		components: { default: laporanCu, 'header': header, 'footer': footer  },
		meta: { requiresAuth: true, mode:'cuPeriode' }},
	// detail cu and tp route	
	{ path: '/laporancu/detail/:id',
		name: 'laporanCuDetail', 
		components: { default: laporanCu_detail, 'header': header, 'footer': footer  },
		meta: { requiresAuth: true, mode:'detail' }},
	{ path: '/laporancu/detail/cu/:cu/periode/:periode',
		name: 'laporanCuDetailPeriode', 
		components: { default: laporanCu_detail, 'header': header, 'footer': footer  },
		meta: { requiresAuth: true, mode:'detailPeriode' }},
	// detail cu and tp route	
	{ path: '/laporanTp/detail/:id',
		name: 'laporanTpDetail', 
		components: { default: laporanCu_detail, 'header': header, 'footer': footer  },
		meta: { requiresAuth: true, mode:'detailTp' }},
	{ path: '/laporanTp/detail/tp/:tp/periode/:periode',
		name: 'laporanTpDetailPeriode', 
		components: { default: laporanCu_detail, 'header': header, 'footer': footer  },
		meta: { requiresAuth: true, mode:'detailTpPeriode' }},
	// create
	{ path: '/laporancu/create',
		name: 'laporanCuCreate', 
		components: { default: laporanCu_form, 'header': header, 'footer': footer },
		meta: { requiresAuth: true }},	
	// edit konsolidasi	
	{ path: '/laporancu/edit/:id',
		name: 'laporanCuEdit', 
		components: { default: laporanCu_form, 'header': header, 'footer': footer }, 
		meta: { requiresAuth: true, mode:'edit' } },
	// edit tp	
	{ path: '/laporantp/edit/:id',
		name: 'laporanTpEdit', 
		components: { default: laporanCu_form, 'header': header, 'footer': footer }, 
		meta: { requiresAuth: true, mode:'editTp' } },

	// laporan gerakan
	{ path: '/laporangerakan',
		name: 'laporanGerakan', 
		components: { default: laporanGerakan, 'header': header, 'footer': footer  },
		meta: { requiresAuth: true  }},	

	// laporan draft
	{ path: '/laporancu/draft',
		name: 'laporanCuDraft', 
		components: { default: laporanCu_draft, 'header': header, 'footer': footer  },
		meta: { requiresAuth: true }},	
	{ path: '/laporantp/draft',
		name: 'laporanTpDraft', 
		components: { default: laporanTp_draft, 'header': header, 'footer': footer  },
		meta: { requiresAuth: true }},
	// edit konsolidasi draft	
	{ path: '/laporancu/draft/edit/:id',
		name: 'laporanCuEditDraft', 
		components: { default: laporanCu_form, 'header': header, 'footer': footer }, 
		meta: { requiresAuth: true, mode:'editDraft' } },	
	// edit tp draft	
	{ path: '/laporantp/draft/edit/:id',
		name: 'laporanTpEditDraft', 
		components: { default: laporanCu_form, 'header': header, 'footer': footer }, 
		meta: { requiresAuth: true, mode:'editDraftTp' } },		
]

export default routes