import CUAPI from '../../api/cu.js';

export const CU = {
  state: {
    CUS: [],
    CULoadStatS: '',
    CU: {},
    CULoadStat: '',
    CUUpdate: [],
    CUUpdateStat: '',
  },

  actions: {
    loadCUS( { commit }, p ){
      commit('setCULoadStatS', 'loading');
      
      CUAPI.getCUS( p )
        .then( function( response ){
          commit('setCUS', response.data.model);
          commit('setCULoadStatS', 'success');
        })
        .catch( function(){
          commit('setCUS', []);
          commit('setCULoadStatS', 'fail');
        });
    },
    loadCUAll( { commit } ){
      commit('setCULoadStatS', 'loading');
      
      CUAPI.getCUAll()
        .then( function( response ){
          commit('setCUS', response.data.model);
          commit('setCULoadStatS', 'success');
        })
        .catch( function(){
          commit('setCUS', []);
          commit('setCULoadStatS', 'fail');
        });
    },
    loadCU( {commit}, id ){
      commit('setCULoadStat', 'loading');
      
      CUAPI.getCU( id )
        .then( function( response ){
          commit('setCU', response.data );
          commit('setCULoadStat', 'success');
        })
        .catch( function(){
          commit('setCU', []);
          commit('setCULoadStat', 'fail');
        });
    },
    loadCUPus( {commit}, id ){
      commit('setCULoadStatS', 'loading');
      
      CUAPI.getCUPus( id )
        .then( function( response ){
          commit('setCUS', response.data.model );
          commit('setCULoadStatS', 'success');
        })
        .catch( error => {
          commit('setCUS', error.response);
          commit('setCULoadStatS', 'fail');
        });
    },
    storeCU( {commit, state, dispatch}, form ){
      commit('setCUUpdateStat', 'loading');

      CUAPI.storeCU( form )
        .then( function( response ){
          commit('setCUUpdate', response.data);
          commit('setCUUpdateStat', 'success');
        })
        .catch( function(){
          commit('setCUUpdate', response.data);
          commit('setCUUpdateStat', 'fail');
        });
    },
    updateCU( {commit, state, dispatch}, form ){
      commit('setCUUpdateStat', 'loading');

      CUAPI.updateCU( form )
        .then( function( response ){
          commit('setCUUpdate', response.data);
          commit('setCUUpdateStat', 'success');
        })
        .catch( function(){
          commit('setCUUpdate', response.data);
          commit('setCUUpdateStat', 'fail');
        });
    },
    deleteCU( {commit, state, dispatch}, id ){
      commit('setCUUpdateStat', 'loading');

      CUAPI.deleteCU( id )
        .then( function( response ){
          commit('setCUUpdate', response.data);
          commit('setCUUpdateStat', 'success');
        })
        .catch( function(){
          commit('setCUUpdate', response.data);
          commit('setCUUpdateStat', 'fail');
        });
    },
    resetCUUpdateStat( {commit} ){
      commit('setCUUpdateStat', '');
    }
  },

  mutations: {
    setCUS ( state, CUS ){
      state.CUS = CUS;
    },
    setCULoadStatS( state,status ){
      state.CULoadStatS = status;
    },
    setCU ( state, CU ){
      state.CU = CU;
    },
    setCULoadStat( state,status ){
      state.CULoadStat = status;
    },
    setCUUpdate ( state, data ){
      state.CUUpdate = data;
    },
    setCUUpdateStat( state,status ){
      state.CUUpdateStat = status;
    }
  },

  getters: {
    getCUS( state ){
      return state.CUS;
    },
    getCULoadStatS ( state ){
      return state.CULoadStatS;
    },
    getCU( state ){
      return state.CU;
    },
    getCULoadStat ( state ){
      return state.CULoadStat;
    },
    getCUUpdateStat ( state ){
      return state.CUUpdateStat;
    },
    getCUUpdate ( state ){
      return state.CUUpdate;
    },
  }
}