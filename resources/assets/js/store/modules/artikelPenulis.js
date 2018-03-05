import ArtikelPenulisAPI from '../../api/artikelPenulis.js';

export const artikelPenulis = {
  state: {
    artikelPenulisS: [],
    artikelPenulisLoadStatS: '',
    artikelPenulis: {},
    artikelPenulisLoadStat: '',
    artikelPenulisUpdate: '',
    artikelPenulisUpdateStat: '',
    artikelPenulisRules: [],
    artikelPenulisOption: [],
  },

  actions: {

    // load all
    loadArtikelPenulisS( { commit }, p ){
      commit('setArtikelPenulisLoadStatS', 'loading');
      
      ArtikelPenulisAPI.getArtikelPenulisS( p )
        .then( function( response ){
          commit('setArtikelPenulisS', response.data.model);
          commit('setArtikelPenulisLoadStatS', 'success');
        })
        .catch( error => {
          commit('setArtikelPenulisS', error.response);
          commit('setArtikelPenulisLoadStatS', 'fail');
        });
    },

    // load by cu
    loadArtikelPenulisCUS( { commit }, [p, id] ){
      commit('setArtikelPenulisLoadStatS', 'loading');
      
      ArtikelPenulisAPI.getArtikelPenulisCUS( p, id )
        .then( function( response ){
          commit('setArtikelPenulisS', response.data.model);
          commit('setArtikelPenulisLoadStatS', 'success');
        })
        .catch( error => {
          commit('setArtikelPenulisS', error.response);
          commit('setArtikelPenulisLoadStatS', 'fail');
        });
    },
    loadArtikelPenulisCU( {commit}, id ){
      commit('setArtikelPenulisLoadStat', 'loading');
      
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

    // load single data
    loadArtikelPenulis( {commit}, id ){
      commit('setArtikelPenulisLoadStat', 'loading');
      
      ArtikelPenulisAPI.getArtikelPenulis( id )
        .then( function( response ){
          commit('setArtikelPenulis', response.data );
          commit('setArtikelPenulisLoadStat', 'success');
        })
        .catch( error => {
          commit('setArtikelPenulisS', error.response);
          commit('setArtikelPenulisLoadStatS', 'fail');
        });
    },

    // create data
    createArtikelPenulis( {commit} ){
      commit('setArtikelPenulisLoadStat', 'loading');
      
      ArtikelPenulisAPI.createArtikelPenulis()
        .then( function( response ){
          commit('setArtikelPenulis', response.data.form );
          commit('setArtikelPenulisRules', response.data.rules);
          commit('setArtikelPenulisOption', response.data.option)
          commit('setArtikelPenulisLoadStat', 'success');
        })
        .catch( function(){
          commit('setArtikelPenulis', []);
          commit('setArtikelPenulisRules', []);
          commit('setArtikelPenulisOption', [])
          commit('setArtikelPenulisLoadStat', 'fail');
        });
    },

    // store data
    storeArtikelPenulis( {commit, state, dispatch}, form ){
      commit('setArtikelPenulisUpdateStat', 'loading');

      ArtikelPenulisAPI.storeArtikelPenulis( form )
        .then( function( response ){
          if(response.data.saved){
            commit('setArtikelPenulisUpdate', response.data);
            commit('setArtikelPenulisUpdateStat', 'success');
          }else{
            commit('setArtikelPenulisUpdateStat', 'fail');
          }
        })
        .catch(error => {
          if (error.response.status) {
            this.errors = error.response.data;
            commit('setArtikelPenulisUpdate', this.errors);         
          }else{
            commit('setArtikelPenulisUpdate', 'Oops terjadi kesalahan :(');
          }
          commit('setArtikelPenulisUpdateStat', 'fail');
        });
    },

    // edit page
    editArtikelPenulis( {commit}, id ){
      commit('setArtikelPenulisLoadStat', 'loading');
      
      ArtikelPenulisAPI.editArtikelPenulis( id )
        .then( function( response ){
          commit('setArtikelPenulis', response.data.form );
          commit('setArtikelPenulisRules', response.data.rules);
          commit('setArtikelPenulisOption', response.data.option)
          commit('setArtikelPenulisLoadStat', 'success');
        })
        .catch( function(){
          commit('setArtikelPenulis', []);
          commit('setArtikelPenulisRules', []);
          commit('setArtikelPenulisOption', [])
          commit('setArtikelPenulisLoadStat', 'fail');
        });
    },

    // update data
    updateArtikelPenulis( {commit, state, dispatch}, [id, form] ){
      commit('setArtikelPenulisUpdateStat', 'loading');

      ArtikelPenulisAPI.updateArtikelPenulis( id, form )
        .then( function( response ){
          if(response.data.saved){
            commit('setArtikelPenulisUpdate', response.data);
            commit('setArtikelPenulisUpdateStat', 'success');
          }else{
            commit('setArtikelPenulisUpdateStat', 'fail');
          }
        })
        .catch(error => {
          if (error.response.status) {
            this.errors = error.response.data;
            commit('setArtikelPenulisUpdate', this.errors);         
          }else{
            commit('setArtikelPenulisUpdate', 'Oops terjadi kesalahan :(');
          }
          commit('setArtikelPenulisUpdateStat', 'fail');
        });
    },

    // delete data
    deleteArtikelPenulis( {commit, state, dispatch}, id ){
      commit('setArtikelPenulisUpdateStat', 'loading');

      ArtikelPenulisAPI.deleteArtikelPenulis( id )
        .then( function( response ){
          if(response.data.saved){
            commit('setArtikelPenulisUpdate', response.data);
            commit('setArtikelPenulisUpdateStat', 'success');
          }else{
            commit('setArtikelPenulisUpdateStat', 'fail');
          }
        })
        .catch(error => {
          if (error.response.status) {
            this.errors = error.response.data;
            commit('setArtikelPenulisUpdate', this.errors);         
          }else{
            commit('setArtikelPenulisUpdate', 'Oops terjadi kesalahan :(');
          }
          commit('setArtikelPenulisUpdateStat', 'fail');
        });
    }
  },

  mutations: {
    setArtikelPenulisS ( state, artikelPenulisS ){
      state.artikelPenulisS = artikelPenulisS;
    },
    setArtikelPenulisLoadStatS( state, status ){
      state.artikelPenulisLoadStatS = status;
    },
    setArtikelPenulis ( state, artikelPenulis ){
      state.artikelPenulis = artikelPenulis;
    },
    setArtikelPenulisLoadStat( state, status ){
      state.artikelPenulisLoadStat = status;
    },
    setArtikelPenulisUpdateStat( state, status ){
      state.artikelPenulisUpdateStat = status;
    },
    setArtikelPenulisUpdate( state, data ){
      state.artikelPenulisUpdate = data;
    },
    setArtikelPenulisRules( state, rules ){
      state.artikelPenulisRules = rules;
    },
    setArtikelPenulisOption( state, option ){
      state.artikelPenulisOption = option;
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
    getArtikelPenulisRules ( state ){
      return state.artikelPenulisRules;
    },
    getArtikelPenulisOption ( state ){
      return state.artikelPenulisOption;
    }
  }
}