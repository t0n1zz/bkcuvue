import PusAPI from '../../api/pus.js';

export const pus = {
  state: {
    pusS: [],
    pusLoadStatS: '',
    pus: {},
    pusLoadStat: '',
    pusUpdate: [],
    pusUpdateStat: '',
  },

  actions: {
    loadPusS( { commit }, p ){
      commit('setPusLoadStatS', 'loading');
      
      PusAPI.getPusS( p )
        .then( function( response ){
          commit('setPusS', response.data.model);
          commit('setPusLoadStatS', 'success');
        })
        .catch( function(){
          commit('setPusS', []);
          commit('setPusLoadStatS', 'fail');
        });
    },
    loadPusAll( { commit } ){
      commit('setPusLoadStatS', 'loading');
      
      PusAPI.getPusAll()
        .then( function( response ){
          commit('setPusS', response.data.model);
          commit('setPusLoadStatS', 'success');
        })
        .catch( function(){
          commit('setPusS', []);
          commit('setPusLoadStatS', 'fail');
        });
    },
    loadPus( {commit}, id ){
      commit('setPusLoadStat', 'loading');
      
      PusAPI.getPus( id )
        .then( function( response ){
          commit('setPus', response.data );
          commit('setPusLoadStat', 'success');
        })
        .catch( function(){
          commit('setPus', []);
          commit('setPusLoadStat', 'fail');
        });
    },
    storePus( {commit, state, dispatch}, form ){
      commit('setPusUpdateStat', 'loading');

      PusAPI.storePus( form )
        .then( function( response ){
          commit('setPusUpdate', response.data);
          commit('setPusUpdateStat', 'success');
        })
        .catch( function(){
          commit('setPusUpdate', response.data);
          commit('setPusUpdateStat', 'fail');
        });
    },
    updatePus( {commit, state, dispatch}, form ){
      commit('setPusUpdateStat', 'loading');

      PusAPI.updatePus( form )
        .then( function( response ){
          commit('setPusUpdate', response.data);
          commit('setPusUpdateStat', 'success');
        })
        .catch( function(){
          commit('setPusUpdate', response.data);
          commit('setPusUpdateStat', 'fail');
        });
    },
    deletePus( {commit, state, dispatch}, id ){
      commit('setPusUpdateStat', 'loading');

      PusAPI.deletePus( id )
        .then( function( response ){
          commit('setPusUpdate', response.data);
          commit('setPusUpdateStat', 'success');
        })
        .catch( function(){
          commit('setPusUpdate', response.data);
          commit('setPusUpdateStat', 'fail');
        });
    },
    resetPusUpdateStat( {commit} ){
      commit('setPusUpdateStat', '');
    }
  },

  mutations: {
    setPusS ( state, PusS ){
      state.pusS = PusS;
    },
    setPusLoadStatS( state,status ){
      state.pusLoadStatS = status;
    },
    setPus ( state, Pus ){
      state.pus = Pus;
    },
    setPusLoadStat( state,status ){
      state.pusLoadStat = status;
    },
    setPusUpdate ( state, data ){
      state.pusUpdate = data;
    },
    setPusUpdateStat( state,status ){
      state.pusUpdateStat = status;
    }
  },

  getters: {
    getPusS( state ){
      return state.pusS;
    },
    getPusLoadStatS ( state ){
      return state.pusLoadStatS;
    },
    getPus( state ){
      return state.pus;
    },
    getPusLoadStat ( state ){
      return state.pusLoadStat;
    },
    getPusUpdateStat ( state ){
      return state.pusUpdateStat;
    },
    getPusUpdate ( state ){
      return state.pusUpdate;
    },
  }
}