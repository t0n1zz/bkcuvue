import Vue from 'vue';
import Vuex from 'vuex';

import { user } from './modules/user';
import { global } from './modules/global';
import { artikel } from './modules/artikel';
import { artikelKategori } from './modules/artikel_kategori';
import { artikelPenulis } from './modules/artikel_penulis';
import { CU } from './modules/cu';
import { pus } from './modules/pus';

import getters from './getters';
import mutations from './mutations';
import actions from './actions';

Vue.use(Vuex);

export const store = new Vuex.Store({
	 state: {

	 },
	 getters,
	 mutations,
	 actions,
	 modules: {
		 global,
		 user,
		 artikel,
		 artikelKategori,
		 artikelPenulis,
		 CU,
		 pus
	 }
});