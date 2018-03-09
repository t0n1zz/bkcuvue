import CUAPI from '../../api/cu.js';

export const CU = {
  state: {
    CUS: [],
    CULoadStatS: '',
    CU: {},
    CULoadStat: '',
    CUUpdate: [],
    CUUpdateStat: '',
    CURules: [],
    CUOption: [],
  },

  actions: {
    // load all
    loadCUS( { commit }, p ){
      commit('setCULoadStatS', 'loading');
      
      CUAPI.getCUS( p )
        .then( function( response ){
          commit('setCUS', response.data.model);
          commit('setCULoadStatS', 'success');
        })
        .catch( error => {
          commit('setCUS', error.response);
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

    //load single data
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


    //load cu pus
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

    // create page
    createCU( {commit} ){
      commit('setCULoadStat', 'loading');
      
      CUAPI.createCU()
        .then( function( response ){
          commit('setCU', response.data.form );
          commit('setCURules', response.data.rules);
          commit('setCUOption', response.data.option)
          commit('setCULoadStat', 'success');
        })
        .catch( function(){
          commit('setCU', []);
          commit('setCURules', []);
          commit('setCUOption', [])
          commit('setCULoadStat', 'fail');
        });
    },

    //store data
    storeCU( {commit, state, dispatch}, form ){
      commit('setCUUpdateStat', 'loading');

      CUAPI.storeCU( form )
        .then( function( response ){
          if(response.data.saved){
            commit('setCUUpdate', response.data);
            commit('setCUUpdateStat', 'success');
          }else{
            commit('setCUUpdateStat', 'fail');
          }
        })
        .catch(error => {
          if (error.response.status) {
            this.errors = error.response.data;
            commit('setCUUpdate', this.errors);         
          }else{
            commit('setCUUpdate', 'Oops terjadi kesalahan :(');
          }
          commit('setCUUpdateStat', 'fail');
        });
    },


    // edit page
    editCU( {commit}, id ){
      commit('setCULoadStat', 'loading');
      
      CUAPI.editCU( id )
        .then( function( response ){
          commit('setCU', response.data.form );
          commit('setCURules', response.data.rules);
          commit('setCUOption', response.data.option)
          commit('setCULoadStat', 'success');
        })
        .catch( function(){
          commit('setCU', []);
          commit('setCURules', []);
          commit('setCUOption', [])
          commit('setCULoadStat', 'fail');
        });
    },

    // update data
    updateCU( {commit, state, dispatch}, [id, form] ){
      commit('setCUUpdateStat', 'loading');

      CUAPI.updateCU( id, form )
        .then( function( response ){
          if(response.data.saved){
            commit('setCUUpdate', response.data);
            commit('setCUUpdateStat', 'success');
          }else{
            commit('setCUUpdateStat', 'fail');
          }
        })
        .catch(error => {
          if (error.response.status) {
            this.errors = error.response.data;
            commit('setCUUpdate', this.errors);         
          }else{
            commit('setCUUpdate', 'Oops terjadi kesalahan :(');
          }
          commit('setCUUpdateStat', 'fail');
        });
    },

    // delete data
    deleteCU( {commit, state, dispatch}, id ){
      commit('setCUUpdateStat', 'loading');

      CUAPI.deleteCU( id )
        .then( function( response ){
          if(response.data.saved){
            commit('setCUUpdate', response.data);
            commit('setCUUpdateStat', 'success');
          }else{
            commit('setCUUpdateStat', 'fail');
          }
        })
        .catch(error => {
          if (error.response.status) {
            this.errors = error.response.data;
            commit('setCUUpdate', this.errors);         
          }else{
            commit('setCUUpdate', 'Oops terjadi kesalahan :(');
          }
          commit('setCUUpdateStat', 'fail');
        });
    },


    // reset
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