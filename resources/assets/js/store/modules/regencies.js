import RegenciesAPI from '../../api/regencies.js';

export const regencies = {
  state: {
    regenciesS: [],
    regenciesLoadStatS: '',
    regencies: {},
    regenciesLoadStat: '',
    regenciesUpdate: '',
    regenciesUpdateStat: '',
    regenciesRules: [],
    regenciesOption: [],
  },

  actions: {

    // load all
    loadRegenciesS( { commit }, p ){
      commit('setRegenciesLoadStatS', 'loading');
      
      RegenciesAPI.getRegenciesS( p )
        .then( function( response ){
          commit('setRegenciesS', response.data.model);
          commit('setRegenciesLoadStatS', 'success');
        })
        .catch( error => {
          commit('setRegenciesS', error.response);
          commit('setRegenciesLoadStatS', 'fail');
        });
    },
    loadRegenciesAll( { commit } ){
      commit('setRegenciesLoadStatS', 'loading');
      
      RegenciesAPI.getRegenciesAll()
        .then( function( response ){
          commit('setRegenciesS', response.data.model);
          commit('setRegenciesLoadStatS', 'success');
        })
        .catch( function(){
          commit('setRegenciesS', []);
          commit('setRegenciesLoadStatS', 'fail');
        });
    },

    // load by provinces
    loadRegenciesProvinces( {commit}, id ){
      commit('setRegenciesLoadStat', 'loading');
      
      RegenciesAPI.getRegenciesProvinces( id )
        .then( function( response ){
          commit('setRegenciesS', response.data.model);
          commit('setRegenciesLoadStatS', 'success');
        })
        .catch( error => {
          commit('setRegenciesS', error.response);
          commit('setRegenciesLoadStatS', 'fail');
        });
    },

    // load single data
    loadRegencies( {commit}, id ){
      commit('setRegenciesLoadStat', 'loading');
      
      RegenciesAPI.getRegencies( id )
        .then( function( response ){
          commit('setRegencies', response.data );
          commit('setRegenciesLoadStat', 'success');
        })
        .catch( error => {
          commit('setRegenciesS', error.response);
          commit('setRegenciesLoadStatS', 'fail');
        });
    },

    // create data
    createRegencies( {commit} ){
      commit('setRegenciesLoadStat', 'loading');
      
      RegenciesAPI.createRegencies()
        .then( function( response ){
          commit('setRegencies', response.data.form );
          commit('setRegenciesRules', response.data.rules);
          commit('setRegenciesOption', response.data.option)
          commit('setRegenciesLoadStat', 'success');
        })
        .catch( function(){
          commit('setRegencies', []);
          commit('setRegenciesRules', []);
          commit('setRegenciesOption', [])
          commit('setRegenciesLoadStat', 'fail');
        });
    },

    // store data
    storeRegencies( {commit, state, dispatch}, form ){
      commit('setRegenciesUpdateStat', 'loading');

      RegenciesAPI.storeRegencies( form )
        .then( function( response ){
          if(response.data.saved){
            commit('setRegenciesUpdate', response.data);
            commit('setRegenciesUpdateStat', 'success');
          }else{
            commit('setRegenciesUpdateStat', 'fail');
          }
        })
        .catch(error => {
          if (error.response.status) {
            this.errors = error.response.data;
            commit('setRegenciesUpdate', this.errors);         
          }else{
            commit('setRegenciesUpdate', 'Oops terjadi kesalahan :(');
          }
          commit('setRegenciesUpdateStat', 'fail');
        });
    },

    // edit page
    editRegencies( {commit}, id ){
      commit('setRegenciesLoadStat', 'loading');
      
      RegenciesAPI.editRegencies( id )
        .then( function( response ){
          commit('setRegencies', response.data.form );
          commit('setRegenciesRules', response.data.rules);
          commit('setRegenciesOption', response.data.option)
          commit('setRegenciesLoadStat', 'success');
        })
        .catch( function(){
          commit('setRegencies', []);
          commit('setRegenciesRules', []);
          commit('setRegenciesOption', [])
          commit('setRegenciesLoadStat', 'fail');
        });
    },

    // update data
    updateRegencies( {commit, state, dispatch}, [id, form] ){
      commit('setRegenciesUpdateStat', 'loading');

      RegenciesAPI.updateRegencies( id, form )
        .then( function( response ){
          if(response.data.saved){
            commit('setRegenciesUpdate', response.data);
            commit('setRegenciesUpdateStat', 'success');
          }else{
            commit('setRegenciesUpdateStat', 'fail');
          }
        })
        .catch(error => {
          if (error.response.status) {
            this.errors = error.response.data;
            commit('setRegenciesUpdate', this.errors);         
          }else{
            commit('setRegenciesUpdate', 'Oops terjadi kesalahan :(');
          }
          commit('setRegenciesUpdateStat', 'fail');
        });
    },

    // delete data
    deleteRegencies( {commit, state, dispatch}, id ){
      commit('setRegenciesUpdateStat', 'loading');

      RegenciesAPI.deleteRegencies( id )
        .then( function( response ){
          if(response.data.saved){
            commit('setRegenciesUpdate', response.data);
            commit('setRegenciesUpdateStat', 'success');
          }else{
            commit('setRegenciesUpdateStat', 'fail');
          }
        })
        .catch(error => {
          if (error.response.status) {
            this.errors = error.response.data;
            commit('setRegenciesUpdate', this.errors);         
          }else{
            commit('setRegenciesUpdate', 'Oops terjadi kesalahan :(');
          }
          commit('setRegenciesUpdateStat', 'fail');
        });
    },

    // reset status
    resetRegenciesUpdateStat( {commit} ){
      commit('setRegenciesUpdateStat', '');
    },
    resetRegenciesLoadStat( {commit} ){
      commit('setRegenciesLoadStat', '');
    }
  },

  mutations: {
    setRegenciesS ( state, regenciesS ){
      state.regenciesS = regenciesS;
    },
    setRegenciesLoadStatS( state, status ){
      state.regenciesLoadStatS = status;
    },
    setRegencies ( state, regencies ){
      state.regencies = regencies;
    },
    setRegenciesLoadStat( state, status ){
      state.regenciesLoadStat = status;
    },
    setRegenciesUpdateStat( state, status ){
      state.regenciesUpdateStat = status;
    },
    setRegenciesUpdate( state, data ){
      state.regenciesUpdate = data;
    },
    setRegenciesRules( state, rules ){
      state.regenciesRules = rules;
    },
    setRegenciesOption( state, option ){
      state.regenciesOption = option;
    }
  },

  getters: {
    getRegenciesS( state ){
      return state.regenciesS;
    },
    getRegenciesLoadStatS ( state ){
      return state.regenciesLoadStatS;
    },
    getRegencies( state ){
      return state.regencies;
    },
    getRegenciesLoadStat ( state ){
      return state.regenciesLoadStat;
    },
    getRegenciesUpdateStat ( state ){
      return state.regenciesUpdateStat;
    },
    getRegenciesUpdate ( state ){
      return state.regenciesUpdate;
    },
    getRegenciesRules ( state ){
      return state.regenciesRules;
    },
    getRegenciesOption ( state ){
      return state.regenciesOption;
    }
  }
}