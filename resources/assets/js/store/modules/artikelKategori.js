import ArtikelKategoriAPI from '../../api/artikelKategori.js';

export const artikelKategori = {
  state: {
    artikelKategoriS: [],
    artikelKategoriLoadStatS: '',
    artikelKategori: {},
    artikelKategoriLoadStat: '',
    artikelKategoriUpdate: [],
    artikelKategoriUpdateStat: '',
  },

  actions: {
    loadArtikelKategoriS( { commit }, p ){
      commit('setArtikelKategoriLoadStatS', 'loading');
      
      ArtikelKategoriAPI.getArtikelKategoriS( p )
        .then( function( response ){
          commit('setArtikelKategoriS', response.data.model);
          commit('setArtikelKategoriLoadStatS', 'success');
        })
        .catch( function(){
          commit('setArtikelKategoriS', []);
          commit('setArtikelKategoriLoadStatS', 'fail');
        });
    },
    loadArtikelKategoriAll( { commit } ){
      commit('setArtikelKategoriLoadStatS', 'loading');
      
      ArtikelKategoriAPI.getArtikelKategoriAll()
        .then( function( response ){
          commit('setArtikelKategoriS', response.data.model);
          commit('setArtikelKategoriLoadStatS', 'success');
        })
        .catch( function(){
          commit('setArtikelKategoriS', []);
          commit('setArtikelKategoriLoadStatS', 'fail');
        });
    },
    loadArtikelKategori( {commit}, id ){
      commit('setArtikelKategoriLoadStat', 'loading');
      
      ArtikelKategoriAPI.getArtikelKategori( id )
        .then( function( response ){
          commit('setArtikelKategori', response.data );
          commit('setArtikelKategoriLoadStat', 'success');
        })
        .catch( function(){
          commit('setArtikelKategori', []);
          commit('setArtikelKategoriLoadStat', 'fail');
        });
    },
    loadArtikelKategoriCU( {commit}, id ){
      commit('setArtikelKategoriLoadStatS', 'loading');
      
      ArtikelKategoriAPI.getArtikelKategoriCU( id )
        .then( function( response ){
          commit('setArtikelKategoriS', response.data.model );
          commit('setArtikelKategoriLoadStatS', 'success');
        })
        .catch( error => {
          commit('setArtikelKategoriS', error.response);
          commit('setArtikelKategoriLoadStatS', 'fail');
        });
    },
    storeArtikelKategori( {commit, state, dispatch}, form ){
      commit('setArtikelKategoriUpdateStat', 'loading');

      ArtikelKategoriAPI.storeArtikelKategori( form )
        .then( function( response ){
          commit('setArtikelKategoriUpdate', response.data);
          commit('setArtikelKategoriUpdateStat', 'success');
        })
        .catch( function(){
          commit('setArtikelKategoriUpdate', response.data);
          commit('setArtikelKategoriUpdateStat', 'fail');
        });
    },
    updateArtikelKategori( {commit, state, dispatch}, form ){
      commit('setArtikelKategoriUpdateStat', 'loading');

      ArtikelKategoriAPI.updateArtikelKategori( form )
        .then( function( response ){
          commit('setArtikelKategoriUpdate', response.data);
          commit('setArtikelKategoriUpdateStat', 'success');
        })
        .catch( function(){
          commit('setArtikelKategoriUpdate', response.data);
          commit('setArtikelKategoriUpdateStat', 'fail');
        });
    },
    deleteArtikelKategori( {commit, state, dispatch}, id ){
      commit('setArtikelKategoriUpdateStat', 'loading');

      ArtikelKategoriAPI.deleteArtikelKategori( id )
        .then( function( response ){
          commit('setArtikelKategoriUpdate', response.data);
          commit('setArtikelKategoriUpdateStat', 'success');
        })
        .catch( function(){
          commit('setArtikelKategoriUpdate', response.data);
          commit('setArtikelKategoriUpdateStat', 'fail');
        });
    },
    resetArtikelKategoriUpdateStat( {commit} ){
      commit('setArtikelKategoriUpdateStat', '');
    }
  },

  mutations: {
    setArtikelKategoriS ( state, artikelKategoriS ){
      state.artikelKategoriS = artikelKategoriS;
    },
    setArtikelKategoriLoadStatS( state,status ){
      state.artikelKategoriLoadStatS = status;
    },
    setArtikelKategori ( state, artikelKategori ){
      state.artikelKategori = artikelKategori;
    },
    setArtikelKategoriLoadStat( state,status ){
      state.artikelKategoriLoadStat = status;
    },
    setArtikelKategoriUpdate ( state, data ){
      state.artikelKategoriUpdate = data;
    },
    setArtikelKategoriUpdateStat( state,status ){
      state.artikelKategoriUpdateStat = status;
    }
  },

  getters: {
    getArtikelKategoriS( state ){
      return state.artikelKategoriS;
    },
    getArtikelKategoriLoadStatS ( state ){
      return state.artikelKategoriLoadStatS;
    },
    getArtikelKategori( state ){
      return state.artikelKategori;
    },
    getArtikelKategoriLoadStat ( state ){
      return state.artikelKategoriLoadStat;
    },
    getArtikelKategoriUpdateStat ( state ){
      return state.artikelKategoriUpdateStat;
    },
    getArtikelKategoriUpdate ( state ){
      return state.artikelKategoriUpdate;
    },
  }
}