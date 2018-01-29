import ArtikelPenulisAPI from '../../api/artikel_penulis.js';

export const artikelPenulis = {
  state: {
    artikelPenulisS: [],
    artikelPenulisLoadStatS: '',
    artikelPenulis: {},
    artikelPenulisLoadStat: '',
    artikelPenulisUpdate: [],
    artikelPenulisUpdateStat: '',
  },

  actions: {
    loadArtikelPenulisS( { commit }, p ){
      commit('setArtikelPenulisLoadStatS', 'loading');
      
      ArtikelPenulisAPI.getArtikelPenulisS( p )
        .then( function( response ){
          commit('setArtikelPenulisS', response.data.model);
          commit('setArtikelPenulisLoadStatS', 'success');
        })
        .catch( function(){
          commit('setArtikelPenulisS', []);
          commit('setArtikelPenulisLoadStatS', 'fail');
        });
    },
    loadArtikelPenulisAll( { commit } ){
      commit('setArtikelPenulisLoadStatS', 'loading');
      
      ArtikelPenulisAPI.getArtikelPenulisAll()
        .then( function( response ){
          commit('setArtikelPenulisS', response.data.model);
          commit('setArtikelPenulisLoadStatS', 'success');
        })
        .catch( function(){
          commit('setArtikelPenulisS', []);
          commit('setArtikelPenulisLoadStatS', 'fail');
        });
    },
    loadArtikelPenulis( {commit}, id ){
      commit('setArtikelPenulisLoadStat', 'loading');
      
      ArtikelPenulisAPI.getArtikelPenulis( id )
        .then( function( response ){
          commit('setArtikelPenulis', response.data );
          commit('setArtikelPenulisLoadStat', 'success');
        })
        .catch( function(){
          commit('setArtikelPenulis', []);
          commit('setArtikelPenulisLoadStat', 'fail');
        });
    },
    loadArtikelPenulisCU( {commit}, id ){
      commit('setArtikelPenulisLoadStatS', 'loading');
      
      ArtikelPenulisAPI.getArtikelPenulisCU( id )
        .then( function( response ){
          commit('setArtikelPenulisS', response.data.model);
          commit('setArtikelPenulisLoadStatS', 'success');
        })
        .catch( error => {
          commit('setArtikelPenulisS', error.response);
          commit('setArtikelPenulisLoadStatS', 'fail');
        });
    },
    storeArtikelPenulis( {commit, state, dispatch}, form ){
      commit('setArtikelPenulisUpdateStat', 'loading');

      ArtikelPenulisAPI.storeArtikelPenulis( form )
        .then( function( response ){
          commit('setArtikelPenulisUpdate', response.data);
          commit('setArtikelPenulisUpdateStat', 'success');
        })
        .catch( function(){
          commit('setArtikelPenulisUpdate', response.data);
          commit('setArtikelPenulisUpdateStat', 'fail');
        });
    },
    updateArtikelPenulis( {commit, state, dispatch}, form ){
      commit('setArtikelPenulisUpdateStat', 'loading');

      ArtikelPenulisAPI.updateArtikelPenulis( form )
        .then( function( response ){
          commit('setArtikelPenulisUpdate', response.data);
          commit('setArtikelPenulisUpdateStat', 'success');
        })
        .catch( function(){
          commit('setArtikelPenulisUpdate', response.data);
          commit('setArtikelPenulisUpdateStat', 'fail');
        });
    },
    deleteArtikelPenulis( {commit, state, dispatch}, id ){
      commit('setArtikelPenulisUpdateStat', 'loading');

      ArtikelPenulisAPI.deleteArtikelPenulis( id )
        .then( function( response ){
          commit('setArtikelPenulisUpdate', response.data);
          commit('setArtikelPenulisUpdateStat', 'success');
        })
        .catch( function(){
          commit('setArtikelPenulisUpdate', response.data);
          commit('setArtikelPenulisUpdateStat', 'fail');
        });
    },
    resetArtikelPenulisUpdateStat( {commit} ){
      commit('setArtikelPenulisUpdateStat', '');
    }
  },

  mutations: {
    setArtikelPenulisS ( state, ArtikelPenulisS ){
      state.artikelPenulisS = ArtikelPenulisS;
    },
    setArtikelPenulisLoadStatS( state,status ){
      state.artikelPenulisLoadStatS = status;
    },
    setArtikelPenulis ( state, ArtikelPenulis ){
      state.artikelPenulis = ArtikelPenulis;
    },
    setArtikelPenulisLoadStat( state,status ){
      state.artikelPenulisLoadStat = status;
    },
    setArtikelPenulisUpdate ( state, data ){
      state.artikelPenulisUpdate = data;
    },
    setArtikelPenulisUpdateStat( state,status ){
      state.artikelPenulisUpdateStat = status;
    }
  },

  getters: {
    getArtikelPenulisS( state ){
      return state.artikelPenulisS;
    },
    getArtikelPenulisLoadStatS ( state ){
      return state.artikelPenulisLoadStatS;
    },
    getArtikelPenulis( state ){
      return state.artikelPenulis;
    },
    getArtikelPenulisLoadStat ( state ){
      return state.artikelPenulisLoadStat;
    },
    getArtikelPenulisUpdateStat ( state ){
      return state.artikelPenulisUpdateStat;
    },
    getArtikelPenulisUpdate ( state ){
      return state.artikelPenulisUpdate;
    },
  }
}