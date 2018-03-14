import VillagesAPI from '../../api/villages.js';

export const villages = {
  state: {
    villagesS: [],
    villagesLoadStatS: '',
    villages: {},
    villagesLoadStat: '',
    villagesUpdate: '',
    villagesUpdateStat: '',
    villagesRules: [],
    villagesOption: [],
  },

  actions: {

    // load all
    loadVillagesS( { commit }, p ){
      commit('setVillagesLoadStatS', 'loading');
      
      VillagesAPI.getVillagesS( p )
        .then( function( response ){
          commit('setVillagesS', response.data.model);
          commit('setVillagesLoadStatS', 'success');
        })
        .catch( error => {
          commit('setVillagesS', error.response);
          commit('setVillagesLoadStatS', 'fail');
        });
    },
    loadVillagesAll( { commit } ){
      commit('setVillagesLoadStatS', 'loading');
      
      VillagesAPI.getVillagesAll()
        .then( function( response ){
          commit('setVillagesS', response.data.model);
          commit('setVillagesLoadStatS', 'success');
        })
        .catch( function(){
          commit('setVillagesS', []);
          commit('setVillagesLoadStatS', 'fail');
        });
    },

    // load by districts
    loadVillagesDistricts( {commit}, id ){
      commit('setVillagesLoadStat', 'loading');
      
      VillagesAPI.getVillagesDistricts( id )
        .then( function( response ){
          commit('setVillagesS', response.data.model);
          commit('setVillagesLoadStatS', 'success');
        })
        .catch( error => {
          commit('setVillagesS', error.response);
          commit('setVillagesLoadStatS', 'fail');
        });
    },

    // load single data
    loadVillages( {commit}, id ){
      commit('setVillagesLoadStat', 'loading');
      
      VillagesAPI.getVillages( id )
        .then( function( response ){
          commit('setVillages', response.data );
          commit('setVillagesLoadStat', 'success');
        })
        .catch( error => {
          commit('setVillagesS', error.response);
          commit('setVillagesLoadStatS', 'fail');
        });
    },

    // create data
    createVillages( {commit} ){
      commit('setVillagesLoadStat', 'loading');
      
      VillagesAPI.createVillages()
        .then( function( response ){
          commit('setVillages', response.data.form );
          commit('setVillagesRules', response.data.rules);
          commit('setVillagesOption', response.data.option)
          commit('setVillagesLoadStat', 'success');
        })
        .catch( function(){
          commit('setVillages', []);
          commit('setVillagesRules', []);
          commit('setVillagesOption', [])
          commit('setVillagesLoadStat', 'fail');
        });
    },

    // store data
    storeVillages( {commit, state, dispatch}, form ){
      commit('setVillagesUpdateStat', 'loading');

      VillagesAPI.storeVillages( form )
        .then( function( response ){
          if(response.data.saved){
            commit('setVillagesUpdate', response.data);
            commit('setVillagesUpdateStat', 'success');
          }else{
            commit('setVillagesUpdateStat', 'fail');
          }
        })
        .catch(error => {
          if (error.response.status) {
            this.errors = error.response.data;
            commit('setVillagesUpdate', this.errors);         
          }else{
            commit('setVillagesUpdate', 'Oops terjadi kesalahan :(');
          }
          commit('setVillagesUpdateStat', 'fail');
        });
    },

    // edit page
    editVillages( {commit}, id ){
      commit('setVillagesLoadStat', 'loading');
      
      VillagesAPI.editVillages( id )
        .then( function( response ){
          commit('setVillages', response.data.form );
          commit('setVillagesRules', response.data.rules);
          commit('setVillagesOption', response.data.option)
          commit('setVillagesLoadStat', 'success');
        })
        .catch( function(){
          commit('setVillages', []);
          commit('setVillagesRules', []);
          commit('setVillagesOption', [])
          commit('setVillagesLoadStat', 'fail');
        });
    },

    // update data
    updateVillages( {commit, state, dispatch}, [id, form] ){
      commit('setVillagesUpdateStat', 'loading');

      VillagesAPI.updateVillages( id, form )
        .then( function( response ){
          if(response.data.saved){
            commit('setVillagesUpdate', response.data);
            commit('setVillagesUpdateStat', 'success');
          }else{
            commit('setVillagesUpdateStat', 'fail');
          }
        })
        .catch(error => {
          if (error.response.status) {
            this.errors = error.response.data;
            commit('setVillagesUpdate', this.errors);         
          }else{
            commit('setVillagesUpdate', 'Oops terjadi kesalahan :(');
          }
          commit('setVillagesUpdateStat', 'fail');
        });
    },

    // delete data
    deleteVillages( {commit, state, dispatch}, id ){
      commit('setVillagesUpdateStat', 'loading');

      VillagesAPI.deleteVillages( id )
        .then( function( response ){
          if(response.data.saved){
            commit('setVillagesUpdate', response.data);
            commit('setVillagesUpdateStat', 'success');
          }else{
            commit('setVillagesUpdateStat', 'fail');
          }
        })
        .catch(error => {
          if (error.response.status) {
            this.errors = error.response.data;
            commit('setVillagesUpdate', this.errors);         
          }else{
            commit('setVillagesUpdate', 'Oops terjadi kesalahan :(');
          }
          commit('setVillagesUpdateStat', 'fail');
        });
    },

    // reset status
    resetVillagesUpdateStat( {commit} ){
      commit('setVillagesUpdateStat', '');
    },
    resetVillagesLoadStat( {commit} ){
      commit('setVillagesLoadStat', '');
    }
  },

  mutations: {
    setVillagesS ( state, villagesS ){
      state.villagesS = villagesS;
    },
    setVillagesLoadStatS( state, status ){
      state.villagesLoadStatS = status;
    },
    setVillages ( state, villages ){
      state.villages = villages;
    },
    setVillagesLoadStat( state, status ){
      state.villagesLoadStat = status;
    },
    setVillagesUpdateStat( state, status ){
      state.villagesUpdateStat = status;
    },
    setVillagesUpdate( state, data ){
      state.villagesUpdate = data;
    },
    setVillagesRules( state, rules ){
      state.villagesRules = rules;
    },
    setVillagesOption( state, option ){
      state.villagesOption = option;
    }
  },

  getters: {
    getVillagesS( state ){
      return state.villagesS;
    },
    getVillagesLoadStatS ( state ){
      return state.villagesLoadStatS;
    },
    getVillages( state ){
      return state.villages;
    },
    getVillagesLoadStat ( state ){
      return state.villagesLoadStat;
    },
    getVillagesUpdateStat ( state ){
      return state.villagesUpdateStat;
    },
    getVillagesUpdate ( state ){
      return state.villagesUpdate;
    },
    getVillagesRules ( state ){
      return state.villagesRules;
    },
    getVillagesOption ( state ){
      return state.villagesOption;
    }
  }
}