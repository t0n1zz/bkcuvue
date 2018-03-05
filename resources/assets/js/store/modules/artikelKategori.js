import ArtikelKategoriAPI from '../../api/artikelKategori.js';

export const artikelKategori = {
  state: {
    artikelKategoriS: [],
    artikelKategoriLoadStatS: '',
    artikelKategori: {},
    artikelKategoriLoadStat: '',
    artikelKategoriUpdate: '',
    artikelKategoriUpdateStat: '',
    artikelKategoriRules: [],
    artikelKategoriOption: [],
  },

  actions: {

    // load all
    loadArtikelKategoriS( { commit }, p ){
      commit('setArtikelKategoriLoadStatS', 'loading');
      
      ArtikelKategoriAPI.getArtikelKategoriS( p )
        .then( function( response ){
          commit('setArtikelKategoriS', response.data.model);
          commit('setArtikelKategoriLoadStatS', 'success');
        })
        .catch( error => {
          commit('setArtikelKategoriS', error.response);
          commit('setArtikelKategoriLoadStatS', 'fail');
        });
    },

    // load by cu
    loadArtikelKategoriCUS( { commit }, [p, id] ){
      commit('setArtikelKategoriLoadStatS', 'loading');
      
      ArtikelKategoriAPI.getArtikelKategoriCUS( p, id )
        .then( function( response ){
          commit('setArtikelKategoriS', response.data.model);
          commit('setArtikelKategoriLoadStatS', 'success');
        })
        .catch( error => {
          commit('setArtikelKategoriS', error.response);
          commit('setArtikelKategoriLoadStatS', 'fail');
        });
    },
    loadArtikelKategoriCU( {commit}, id ){
      commit('setArtikelKategoriLoadStat', 'loading');
      
      ArtikelKategoriAPI.getArtikelKategoriCU( id )
        .then( function( response ){
          commit('setArtikelKategoriS', response.data.model);
          commit('setArtikelKategoriLoadStatS', 'success');
        })
        .catch( error => {
          commit('setArtikelKategoriS', error.response);
          commit('setArtikelKategoriLoadStatS', 'fail');
        });
    },

    // load single data
    loadArtikelKategori( {commit}, id ){
      commit('setArtikelKategoriLoadStat', 'loading');
      
      ArtikelKategoriAPI.getArtikelKategori( id )
        .then( function( response ){
          commit('setArtikelKategori', response.data );
          commit('setArtikelKategoriLoadStat', 'success');
        })
        .catch( error => {
          commit('setArtikelKategoriS', error.response);
          commit('setArtikelKategoriLoadStatS', 'fail');
        });
    },

    // create data
    createArtikelKategori( {commit} ){
      commit('setArtikelKategoriLoadStat', 'loading');
      
      ArtikelKategoriAPI.createArtikelKategori()
        .then( function( response ){
          commit('setArtikelKategori', response.data.form );
          commit('setArtikelKategoriRules', response.data.rules);
          commit('setArtikelKategoriOption', response.data.option)
          commit('setArtikelKategoriLoadStat', 'success');
        })
        .catch( function(){
          commit('setArtikelKategori', []);
          commit('setArtikelKategoriRules', []);
          commit('setArtikelKategoriOption', [])
          commit('setArtikelKategoriLoadStat', 'fail');
        });
    },

    // store data
    storeArtikelKategori( {commit, state, dispatch}, form ){
      commit('setArtikelKategoriUpdateStat', 'loading');

      ArtikelKategoriAPI.storeArtikelKategori( form )
        .then( function( response ){
          if(response.data.saved){
            commit('setArtikelKategoriUpdate', response.data);
            commit('setArtikelKategoriUpdateStat', 'success');
          }else{
            commit('setArtikelKategoriUpdateStat', 'fail');
          }
        })
        .catch(error => {
          if (error.response.status) {
            this.errors = error.response.data;
            commit('setArtikelKategoriUpdate', this.errors);         
          }else{
            commit('setArtikelKategoriUpdate', 'Oops terjadi kesalahan :(');
          }
          commit('setArtikelKategoriUpdateStat', 'fail');
        });
    },

    // edit page
    editArtikelKategori( {commit}, id ){
      commit('setArtikelKategoriLoadStat', 'loading');
      
      ArtikelKategoriAPI.editArtikelKategori( id )
        .then( function( response ){
          commit('setArtikelKategori', response.data.form );
          commit('setArtikelKategoriRules', response.data.rules);
          commit('setArtikelKategoriOption', response.data.option)
          commit('setArtikelKategoriLoadStat', 'success');
        })
        .catch( function(){
          commit('setArtikelKategori', []);
          commit('setArtikelKategoriRules', []);
          commit('setArtikelKategoriOption', [])
          commit('setArtikelKategoriLoadStat', 'fail');
        });
    },

    // update data
    updateArtikelKategori( {commit, state, dispatch}, [id, form] ){
      commit('setArtikelKategoriUpdateStat', 'loading');

      ArtikelKategoriAPI.updateArtikelKategori( id, form )
        .then( function( response ){
          if(response.data.saved){
            commit('setArtikelKategoriUpdate', response.data);
            commit('setArtikelKategoriUpdateStat', 'success');
          }else{
            commit('setArtikelKategoriUpdateStat', 'fail');
          }
        })
        .catch(error => {
          if (error.response.status) {
            this.errors = error.response.data;
            commit('setArtikelKategoriUpdate', this.errors);         
          }else{
            commit('setArtikelKategoriUpdate', 'Oops terjadi kesalahan :(');
          }
          commit('setArtikelKategoriUpdateStat', 'fail');
        });
    },

    // delete data
    deleteArtikelKategori( {commit, state, dispatch}, id ){
      commit('setArtikelKategoriUpdateStat', 'loading');

      ArtikelKategoriAPI.deleteArtikelKategori( id )
        .then( function( response ){
          if(response.data.saved){
            commit('setArtikelKategoriUpdate', response.data);
            commit('setArtikelKategoriUpdateStat', 'success');
          }else{
            commit('setArtikelKategoriUpdateStat', 'fail');
          }
        })
        .catch(error => {
          if (error.response.status) {
            this.errors = error.response.data;
            commit('setArtikelKategoriUpdate', this.errors);         
          }else{
            commit('setArtikelKategoriUpdate', 'Oops terjadi kesalahan :(');
          }
          commit('setArtikelKategoriUpdateStat', 'fail');
        });
    },

    // reset status
    resetArtikelKategoriUpdateStat( {commit} ){
      commit('setArtikelKategoriUpdateStat', '');
    }
  },

  mutations: {
    setArtikelKategoriS ( state, artikelKategoriS ){
      state.artikelKategoriS = artikelKategoriS;
    },
    setArtikelKategoriLoadStatS( state, status ){
      state.artikelKategoriLoadStatS = status;
    },
    setArtikelKategori ( state, artikelKategori ){
      state.artikelKategori = artikelKategori;
    },
    setArtikelKategoriLoadStat( state, status ){
      state.artikelKategoriLoadStat = status;
    },
    setArtikelKategoriUpdateStat( state, status ){
      state.artikelKategoriUpdateStat = status;
    },
    setArtikelKategoriUpdate( state, data ){
      state.artikelKategoriUpdate = data;
    },
    setArtikelKategoriRules( state, rules ){
      state.artikelKategoriRules = rules;
    },
    setArtikelKategoriOption( state, option ){
      state.artikelKategoriOption = option;
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
    getArtikelKategoriRules ( state ){
      return state.artikelKategoriRules;
    },
    getArtikelKategoriOption ( state ){
      return state.artikelKategoriOption;
    }
  }
}