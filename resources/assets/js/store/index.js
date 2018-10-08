import Vue from 'vue';
import Vuex from 'vuex';

import { auth } from './modules/auth';
import { user } from './modules/user';
import { role } from './modules/role';
import { global } from './modules/global';
import { artikel } from './modules/artikel';
import { artikelKategori } from './modules/artikelKategori';
import { artikelPenulis } from './modules/artikelPenulis';
import { cu } from './modules/cu';
import { tp } from './modules/tp';
import { pus } from './modules/pus';
import { provinces } from './modules/provinces';
import { regencies } from './modules/regencies';
import { districts } from './modules/districts';
import { villages } from './modules/villages';
import { laporanCu } from './modules/laporanCu';
import { laporanCuDiskusi } from './modules/laporanCuDiskusi';
import { laporanTp } from './modules/laporanTp';
import { pengelola } from './modules/pengelola';
import { produkCu } from './modules/produkCu';
import { diklatBKCU } from './modules/diklatBKCU';
import { tempat } from './modules/tempat';

Vue.use(Vuex);

export default new Vuex.Store({
	 modules: {
		 global,
		 auth,
		 user,
		 role,
		 artikel,
		 artikelKategori,
		 artikelPenulis,
		 cu,
		 tp,
		 pus,
		 provinces,
		 regencies,
		 districts,
		 villages,
		 laporanCu,
		 laporanCuDiskusi,
		 laporanTp,
		 pengelola,
		 produkCu,
		 diklatBKCU,
		 tempat
	 }
});