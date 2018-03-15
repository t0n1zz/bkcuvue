import Vue from 'vue';
import Vuex from 'vuex';

import { user } from './modules/user';
import { role } from './modules/role';
import { global } from './modules/global';
import { artikel } from './modules/artikel';
import { artikelKategori } from './modules/artikelKategori';
import { artikelPenulis } from './modules/artikelPenulis';
import { CU } from './modules/cu';
import { pus } from './modules/pus';
import { provinces } from './modules/provinces';
import { regencies } from './modules/regencies';
import { districts } from './modules/districts';
import { villages } from './modules/villages';

Vue.use(Vuex);

export default new Vuex.Store({
	 modules: {
		 global,
		 user,
		 role,
		 artikel,
		 artikelKategori,
		 artikelPenulis,
		 CU,
		 pus,
		 provinces,
		 regencies,
		 districts,
		 villages
	 }
});