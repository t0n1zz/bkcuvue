import DistrictsAPI from '../../api/districts.js';

export const districts = {
  state: {
    districtsS: [],
    districtsLoadStatS: '',
    districts: {},
    districtsLoadStat: '',
    districtsUpdate: '',
    districtsUpdateStat: '',
    districtsRules: [],
    districtsOption: [],
  },

  actions: {

    // load all
    loadDistrictsS( { commit }, p ){
      commit('setDistrictsLoadStatS', 'loading');
      
      DistrictsAPI.getDistrictsS( p )
        .then( function( response ){
          commit('setDistrictsS', response.data.model);
          commit('setDistrictsLoadStatS', 'success');
        })
        .catch( error => {
          commit('setDistrictsS', error.response);
          commit('setDistrictsLoadStatS', 'fail');
        });
    },
    loadDistrictsAll( { commit } ){
      commit('setDistrictsLoadStatS', 'loading');
      
      DistrictsAPI.getDistrictsAll()
        .then( function( response ){
          commit('setDistrictsS', response.data.model);
          commit('setDistrictsLoadStatS', 'success');
        })
        .catch( function(){
          commit('setDistrictsS', []);
          commit('setDistrictsLoadStatS', 'fail');
        });
    },

    // load by regencies
    loadDistrictsRegencies( {commit}, id ){
      commit('setDistrictsLoadStat', 'loading');
      
      DistrictsAPI.getDistrictsRegencies( id )
        .then( function( response ){
          commit('setDistrictsS', response.data.model);
          commit('setDistrictsLoadStatS', 'success');
        })
        .catch( error => {
          commit('setDistrictsS', error.response);
          commit('setDistrictsLoadStatS', 'fail');
        });
    },

    // load single data
    loadDistricts( {commit}, id ){
      commit('setDistrictsLoadStat', 'loading');
      
      DistrictsAPI.getDistricts( id )
        .then( function( response ){
          commit('setDistricts', response.data );
          commit('setDistrictsLoadStat', 'success');
        })
        .catch( error => {
          commit('setDistrictsS', error.response);
          commit('setDistrictsLoadStatS', 'fail');
        });
    },

    // create data
    createDistricts( {commit} ){
      commit('setDistrictsLoadStat', 'loading');
      
      DistrictsAPI.createDistricts()
        .then( function( response ){
          commit('setDistricts', response.data.form );
          commit('setDistrictsRules', response.data.rules);
          commit('setDistrictsOption', response.data.option)
          commit('setDistrictsLoadStat', 'success');
        })
        .catch( function(){
          commit('setDistricts', []);
          commit('setDistrictsRules', []);
          commit('setDistrictsOption', [])
          commit('setDistrictsLoadStat', 'fail');
        });
    },

    // store data
    storeDistricts( {commit, state, dispatch}, form ){
      commit('setDistrictsUpdateStat', 'loading');

      DistrictsAPI.storeDistricts( form )
        .then( function( response ){
          if(response.data.saved){
            commit('setDistrictsUpdate', response.data);
            commit('setDistrictsUpdateStat', 'success');
          }else{
            commit('setDistrictsUpdateStat', 'fail');
          }
        })
        .catch(error => {
          if (error.response.status) {
            this.errors = error.response.data;
            commit('setDistrictsUpdate', this.errors);         
          }else{
            commit('setDistrictsUpdate', 'Oops terjadi kesalahan :(');
          }
          commit('setDistrictsUpdateStat', 'fail');
        });
    },

    // edit page
    editDistricts( {commit}, id ){
      commit('setDistrictsLoadStat', 'loading');
      
      DistrictsAPI.editDistricts( id )
        .then( function( response ){
          commit('setDistricts', response.data.form );
          commit('setDistrictsRules', response.data.rules);
          commit('setDistrictsOption', response.data.option)
          commit('setDistrictsLoadStat', 'success');
        })
        .catch( function(){
          commit('setDistricts', []);
          commit('setDistrictsRules', []);
          commit('setDistrictsOption', [])
          commit('setDistrictsLoadStat', 'fail');
        });
    },

    // update data
    updateDistricts( {commit, state, dispatch}, [id, form] ){
      commit('setDistrictsUpdateStat', 'loading');

      DistrictsAPI.updateDistricts( id, form )
        .then( function( response ){
          if(response.data.saved){
            commit('setDistrictsUpdate', response.data);
            commit('setDistrictsUpdateStat', 'success');
          }else{
            commit('setDistrictsUpdateStat', 'fail');
          }
        })
        .catch(error => {
          if (error.response.status) {
            this.errors = error.response.data;
            commit('setDistrictsUpdate', this.errors);         
          }else{
            commit('setDistrictsUpdate', 'Oops terjadi kesalahan :(');
          }
          commit('setDistrictsUpdateStat', 'fail');
        });
    },

    // delete data
    deleteDistricts( {commit, state, dispatch}, id ){
      commit('setDistrictsUpdateStat', 'loading');

      DistrictsAPI.deleteDistricts( id )
        .then( function( response ){
          if(response.data.saved){
            commit('setDistrictsUpdate', response.data);
            commit('setDistrictsUpdateStat', 'success');
          }else{
            commit('setDistrictsUpdateStat', 'fail');
          }
        })
        .catch(error => {
          if (error.response.status) {
            this.errors = error.response.data;
            commit('setDistrictsUpdate', this.errors);         
          }else{
            commit('setDistrictsUpdate', 'Oops terjadi kesalahan :(');
          }
          commit('setDistrictsUpdateStat', 'fail');
        });
    },

    // reset status
    resetDistrictsUpdateStat( {commit} ){
      commit('setDistrictsUpdateStat', '');
    },
    resetDistrictsLoadStat( {commit} ){
      commit('setDistrictsLoadStat', '');
    }
  },

  mutations: {
    setDistrictsS ( state, districtsS ){
      state.districtsS = districtsS;
    },
    setDistrictsLoadStatS( state, status ){
      state.districtsLoadStatS = status;
    },
    setDistricts ( state, districts ){
      state.districts = districts;
    },
    setDistrictsLoadStat( state, status ){
      state.districtsLoadStat = status;
    },
    setDistrictsUpdateStat( state, status ){
      state.districtsUpdateStat = status;
    },
    setDistrictsUpdate( state, data ){
      state.districtsUpdate = data;
    },
    setDistrictsRules( state, rules ){
      state.districtsRules = rules;
    },
    setDistrictsOption( state, option ){
      state.districtsOption = option;
    }
  },

  getters: {
    getDistrictsS( state ){
      return state.districtsS;
    },
    getDistrictsLoadStatS ( state ){
      return state.districtsLoadStatS;
    },
    getDistricts( state ){
      return state.districts;
    },
    getDistrictsLoadStat ( state ){
      return state.districtsLoadStat;
    },
    getDistrictsUpdateStat ( state ){
      return state.districtsUpdateStat;
    },
    getDistrictsUpdate ( state ){
      return state.districtsUpdate;
    },
    getDistrictsRules ( state ){
      return state.districtsRules;
    },
    getDistrictsOption ( state ){
      return state.districtsOption;
    }
  }
}