import ArtikelAPI from '../../api/artikel.js';

export const artikel = {
  state: {
    artikelS: [],
    artikelLoadStatS: '',
    artikel: {},
    artikelLoadStat: '',
    artikelUpdate: '',
    artikelUpdateStat: '',
    artikelRules: [],
    artikelOption: [],
  },

  actions: {
    loadArtikelS( { commit }, p ){
      commit('setArtikelLoadStatS', 'loading');
      
      ArtikelAPI.getArtikelS( p )
        .then( function( response ){
          commit('setArtikelS', response.data.model);
          commit('setArtikelLoadStatS', 'success');
        })
        .catch( error => {
          commit('setArtikelS', error.response);
          commit('setArtikelLoadStatS', 'fail');
        });
    },
    loadArtikel( {commit}, id ){
      commit('setArtikelLoadStat', 'loading');
      
      ArtikelAPI.getArtikel( id )
        .then( function( response ){
          commit('setArtikel', response.data );
          commit('setArtikelLoadStat', 'success');
        })
        .catch( error => {
          commit('setArtikelS', error.response);
          commit('setArtikelLoadStatS', 'fail');
        });
    },
    createArtikel( {commit} ){
      commit('setArtikelLoadStat', 'loading');
      
      ArtikelAPI.createArtikel()
        .then( function( response ){
          commit('setArtikel', response.data.form );
          commit('setArtikelRules', response.data.rules);
          commit('setArtikelOption', response.data.option)
          commit('setArtikelLoadStat', 'success');
        })
        .catch( function(){
          commit('setArtikel', []);
          commit('setArtikelRules', []);
          commit('setArtikelOption', [])
          commit('setArtikelLoadStat', 'fail');
        });
    },
    storeArtikel( {commit, state, dispatch}, form ){
      commit('setArtikelUpdateStat', 'loading');

      ArtikelAPI.storeArtikel( form )
        .then( function( response ){
          if(response.data.saved){
            commit('setArtikelUpdate', response.data);
            commit('setArtikelUpdateStat', 'success');
          }else{
            commit('setArtikelUpdateStat', 'fail');
          }
        })
        .catch(error => {
          if (error.response.status) {
            this.errors = error.response.data;
            commit('setArtikelUpdate', this.errors);         
          }else{
            commit('setArtikelUpdate', 'Oops terjadi kesalahan :(');
          }
          commit('setArtikelUpdateStat', 'fail');
        });
    },
    editArtikel( {commit}, id ){
      commit('setArtikelLoadStat', 'loading');
      
      ArtikelAPI.editArtikel( id )
        .then( function( response ){
          commit('setArtikel', response.data.form );
          commit('setArtikelRules', response.data.rules);
          commit('setArtikelOption', response.data.option)
          commit('setArtikelLoadStat', 'success');
        })
        .catch( function(){
          commit('setArtikel', []);
          commit('setArtikelRules', []);
          commit('setArtikelOption', [])
          commit('setArtikelLoadStat', 'fail');
        });
    },
    updateArtikel( {commit, state, dispatch}, [id, form] ){
      commit('setArtikelUpdateStat', form);

      ArtikelAPI.updateArtikel( id, form )
        .then( function( response ){
          if(response.data.saved){
            commit('setArtikelUpdate', response.data);
            commit('setArtikelUpdateStat', 'success');
          }else{
            commit('setArtikelUpdateStat', 'fail');
          }
        })
        .catch(error => {
          if (error.response.status) {
            this.errors = error.response.data;
            commit('setArtikelUpdate', this.errors);         
          }else{
            commit('setArtikelUpdate', 'Oops terjadi kesalahan :(');
          }
          commit('setArtikelUpdateStat', 'fail');
        });
    },
    updateArtikelTerbitkan( {commit, state, dispatch}, id ){
      commit('setArtikelUpdateStat', 'loading');

      ArtikelAPI.updateTerbitkan( id )
        .then( function( response ){
          commit('setArtikelUpdate', response.data);
          commit('setArtikelUpdateStat', 'success');
        })
        .catch(error => {
          if (error.response.status) {
            this.errors = error.response.data;
            commit('setArtikelUpdate', this.errors);
            commit('setArtikelUpdateStat', 'fail');
          }
        });
    },
    updateArtikelUtamakan( {commit, state, dispatch}, id ){
      commit('setArtikelUpdateStat', 'loading');

      ArtikelAPI.updateUtamakan( id )
        .then( function( response ){
          commit('setArtikelUpdate', response.data);
          commit('setArtikelUpdateStat', 'success');
        })
        .catch( error => {
          commit('setArtikelS', error.response);
          commit('setArtikelLoadStatS', 'fail');
        });
    },
    deleteArtikel( {commit, state, dispatch}, id ){
      commit('setArtikelUpdateStat', 'loading');

      ArtikelAPI.deleteArtikel( id )
        .then( function( response ){
          commit('setArtikelUpdate', response.data);
          commit('setArtikelUpdateStat', 'success');
        })
        .catch( error => {
          commit('setArtikelS', error.response);
          commit('setArtikelLoadStatS', 'fail');
        });
    },
    resetArtikelUpdateStat( {commit} ){
      commit('setArtikelUpdateStat', '');
    }
  },

  mutations: {
    setArtikelS ( state, artikelS ){
      state.artikelS = artikelS;
    },
    setArtikelLoadStatS( state, status ){
      state.artikelLoadStatS = status;
    },
    setArtikel ( state, artikel ){
      state.artikel = artikel;
    },
    setArtikelLoadStat( state, status ){
      state.artikelLoadStat = status;
    },
    setArtikelUpdateStat( state, status ){
      state.artikelUpdateStat = status;
    },
    setArtikelUpdate( state, data ){
      state.artikelUpdate = data;
    },
    setArtikelRules( state, rules ){
      state.artikelRules = rules;
    },
    setArtikelOption( state, option ){
      state.artikelOption = option;
    }
  },

  getters: {
    getArtikelS( state ){
      return state.artikelS;
    },
    getArtikelLoadStatS ( state ){
      return state.artikelLoadStatS;
    },
    getArtikel( state ){
      return state.artikel;
    },
    getArtikelLoadStat ( state ){
      return state.artikelLoadStat;
    },
    getArtikelUpdateStat ( state ){
      return state.artikelUpdateStat;
    },
    getArtikelUpdate ( state ){
      return state.artikelUpdate;
    },
    getArtikelRules ( state ){
      return state.artikelRules;
    },
    getArtikelOption ( state ){
      return state.artikelOption;
    }
  }
}