import ProvincesAPI from '../../api/provinces.js';

export const provinces = {
  state: {
    provincesS: [],
    provincesLoadStatS: '',
    provinces: {},
    provincesLoadStat: '',
    provincesUpdate: '',
    provincesUpdateStat: '',
    provincesRules: [],
    provincesOption: [],
  },

  actions: {

    // load all
    loadProvincesS( { commit }, p ){
      commit('setProvincesLoadStatS', 'loading');
      
      ProvincesAPI.getProvincesS( p )
        .then( function( response ){
          commit('setProvincesS', response.data.model);
          commit('setProvincesLoadStatS', 'success');
        })
        .catch( error => {
          commit('setProvincesS', error.response);
          commit('setProvincesLoadStatS', 'fail');
        });
    },
    loadProvincesAll( { commit } ){
      commit('setProvincesLoadStatS', 'loading');
      
      ProvincesAPI.getProvincesAll()
        .then( function( response ){
          commit('setProvincesS', response.data.model);
          commit('setProvincesLoadStatS', 'success');
        })
        .catch( function(){
          commit('setProvincesS', []);
          commit('setProvincesLoadStatS', 'fail');
        });
    },

    // load single data
    loadProvinces( {commit}, id ){
      commit('setProvincesLoadStat', 'loading');
      
      ProvincesAPI.getProvinces( id )
        .then( function( response ){
          commit('setProvinces', response.data );
          commit('setProvincesLoadStat', 'success');
        })
        .catch( error => {
          commit('setProvincesS', error.response);
          commit('setProvincesLoadStatS', 'fail');
        });
    },

    // create data
    createProvinces( {commit} ){
      commit('setProvincesLoadStat', 'loading');
      
      ProvincesAPI.createProvinces()
        .then( function( response ){
          commit('setProvinces', response.data.form );
          commit('setProvincesRules', response.data.rules);
          commit('setProvincesOption', response.data.option)
          commit('setProvincesLoadStat', 'success');
        })
        .catch( function(){
          commit('setProvinces', []);
          commit('setProvincesRules', []);
          commit('setProvincesOption', [])
          commit('setProvincesLoadStat', 'fail');
        });
    },

    // store data
    storeProvinces( {commit, state, dispatch}, form ){
      commit('setProvincesUpdateStat', 'loading');

      ProvincesAPI.storeProvinces( form )
        .then( function( response ){
          if(response.data.saved){
            commit('setProvincesUpdate', response.data);
            commit('setProvincesUpdateStat', 'success');
          }else{
            commit('setProvincesUpdateStat', 'fail');
          }
        })
        .catch(error => {
          if (error.response.status) {
            this.errors = error.response.data;
            commit('setProvincesUpdate', this.errors);         
          }else{
            commit('setProvincesUpdate', 'Oops terjadi kesalahan :(');
          }
          commit('setProvincesUpdateStat', 'fail');
        });
    },

    // edit page
    editProvinces( {commit}, id ){
      commit('setProvincesLoadStat', 'loading');
      
      ProvincesAPI.editProvinces( id )
        .then( function( response ){
          commit('setProvinces', response.data.form );
          commit('setProvincesRules', response.data.rules);
          commit('setProvincesOption', response.data.option)
          commit('setProvincesLoadStat', 'success');
        })
        .catch( function(){
          commit('setProvinces', []);
          commit('setProvincesRules', []);
          commit('setProvincesOption', [])
          commit('setProvincesLoadStat', 'fail');
        });
    },

    // update data
    updateProvinces( {commit, state, dispatch}, [id, form] ){
      commit('setProvincesUpdateStat', 'loading');

      ProvincesAPI.updateProvinces( id, form )
        .then( function( response ){
          if(response.data.saved){
            commit('setProvincesUpdate', response.data);
            commit('setProvincesUpdateStat', 'success');
          }else{
            commit('setProvincesUpdateStat', 'fail');
          }
        })
        .catch(error => {
          if (error.response.status) {
            this.errors = error.response.data;
            commit('setProvincesUpdate', this.errors);         
          }else{
            commit('setProvincesUpdate', 'Oops terjadi kesalahan :(');
          }
          commit('setProvincesUpdateStat', 'fail');
        });
    },

    // delete data
    deleteProvinces( {commit, state, dispatch}, id ){
      commit('setProvincesUpdateStat', 'loading');

      ProvincesAPI.deleteProvinces( id )
        .then( function( response ){
          if(response.data.saved){
            commit('setProvincesUpdate', response.data);
            commit('setProvincesUpdateStat', 'success');
          }else{
            commit('setProvincesUpdateStat', 'fail');
          }
        })
        .catch(error => {
          if (error.response.status) {
            this.errors = error.response.data;
            commit('setProvincesUpdate', this.errors);         
          }else{
            commit('setProvincesUpdate', 'Oops terjadi kesalahan :(');
          }
          commit('setProvincesUpdateStat', 'fail');
        });
    },

    // reset status
    resetProvincesUpdateStat( {commit} ){
      commit('setProvincesUpdateStat', '');
    },
    resetProvincesLoadStat( {commit} ){
      commit('setProvincesLoadStat', '');
    }
  },

  mutations: {
    setProvincesS ( state, provincesS ){
      state.provincesS = provincesS;
    },
    setProvincesLoadStatS( state, status ){
      state.provincesLoadStatS = status;
    },
    setProvinces ( state, provinces ){
      state.provinces = provinces;
    },
    setProvincesLoadStat( state, status ){
      state.provincesLoadStat = status;
    },
    setProvincesUpdateStat( state, status ){
      state.provincesUpdateStat = status;
    },
    setProvincesUpdate( state, data ){
      state.provincesUpdate = data;
    },
    setProvincesRules( state, rules ){
      state.provincesRules = rules;
    },
    setProvincesOption( state, option ){
      state.provincesOption = option;
    }
  },

  getters: {
    getProvincesS( state ){
      return state.provincesS;
    },
    getProvincesLoadStatS ( state ){
      return state.provincesLoadStatS;
    },
    getProvinces( state ){
      return state.provinces;
    },
    getProvincesLoadStat ( state ){
      return state.provincesLoadStat;
    },
    getProvincesUpdateStat ( state ){
      return state.provincesUpdateStat;
    },
    getProvincesUpdate ( state ){
      return state.provincesUpdate;
    },
    getProvincesRules ( state ){
      return state.provincesRules;
    },
    getProvincesOption ( state ){
      return state.provincesOption;
    }
  }
}