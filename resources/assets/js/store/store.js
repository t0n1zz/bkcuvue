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
		 role,
		 artikel,
		 artikelKategori,
		 artikelPenulis,
		 CU,
		 pus
	 }
});