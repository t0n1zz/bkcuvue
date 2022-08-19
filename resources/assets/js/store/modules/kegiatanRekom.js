import KegiatanRekomAPI from '../../api/kegiatanRekom.js';

export const kegiatanRekom = {
  namespaced: true,

  // state
  state: {
    data: {}, //single data
    dataS: [], //collection
    dataS2: [], //collection
    dataStat: '',
    dataStatS: '',
    dataStatS2: '',
    update: [], //update data
    update2: [], //update data
    updateStat: '',
    updateStat2: '',
    rules: [], //laravel rules
    options: [], //laravel options
  },

  // getters
  getters: {
    data: state => state.data,
    dataS: state => state.dataS,
    dataS2: state => state.dataS2,
    dataStat: state => state.dataStat,
    dataStatS: state => state.dataStatS,
    dataStatS2: state => state.dataStatS2,
    update: state => state.update,
    update2: state => state.update2,
    updateStat: state => state.updateStat,
    updateStat2: state => state.updateStat2,
    rules: state => state.rules,
    options: state => state.options,
  },

  actions: {
    //load collection with params
    index( { commit }, p ){
      commit('setDataStatS', 'loading');
      
      KegiatanRekomAPI.index( p )
        .then( function( response ){
          commit('setDataS', response.data.model );
          commit('set pDataStatS', 'success');
        })
        .catch( error => {
          commit('setDataS', error.response);
          commit('setDataStatS', 'fail');
        });
    },

    indexKegiatan( {commit}, [p, id] ){
      commit('setDataStatS', 'loading');
      
      KegiatanRekomAPI.indexKegiatan( p, id )
        .then( function( response ){
          commit('setDataS', response.data.model);
          commit('setDataStatS', 'success');
        })
        .catch( error => {
          commit('setDataS', error.response);
          commit('setDataStatS', 'fail');
        });
    }, 

    indexHasil( {commit}, [p, id] ){
      commit('setDataStatS2', 'loading');
      
      KegiatanRekomAPI.indexHasil( p, id )
        .then( function( response ){
          commit('setDataS2', response.data.model);
          commit('setDataStatS2', 'success');
        })
        .catch( error => {
          commit('setDataS2', error.response);
          commit('setDataStatS2', 'fail');
        });
    }, 

    //load collection without params
    get( { commit } ){
      commit('setDataStatS', 'loading');
      
      KegiatanRekomAPI.get()
        .then( function( response ){
          commit('setDataS', response.data.model );
          commit('setDataStatS', 'success');
        })
        .catch( error => {
          commit('setDataS', error.response);
          commit('setDataStatS', 'fail');
        });
    },

    // create page
    create( {commit} ){
      commit('setDataStat', 'loading');
      
      KegiatanRekomAPI.create()
        .then( function( response ){
          commit('setData', response.data.form);
          commit('setRules', response.data.rules);
          commit('setOptions', response.data.options)
          commit('setDataStat', 'success');
        })
        .catch(error => {
          commit('setData', error.response);
          commit('setRules', []);
          commit('setOptions', [])
          commit('setDataStat', 'fail');
        });
    },

    //store data
    store( {commit, state, dispatch}, form ){
      commit('setUpdateStat', 'loading');

      KegiatanRekomAPI.store( form )
        .then( function( response ){
          if(response.data.saved){
            commit('setUpdate', response.data);
            commit('setUpdateStat', 'success');
          }else{
            commit('setUpdate', response.data);
            commit('setUpdateStat', 'fail');
          }
        })
        .catch(error => {
          commit('setUpdate', error.response);   
          commit('setUpdateStat', 'fail');
        });
    },

    storeHasil( {commit, state, dispatch}, form ){
      commit('setUpdateStat2', 'loading');

      KegiatanRekomAPI.storeHasil( form )
        .then( function( response ){
          if(response.data.saved){
            commit('setUpdate2', response.data);
            commit('setUpdateStat2', 'success');
          }else{
            commit('setUpdate2', response.data);
            commit('setUpdateStat2', 'fail');
          }
        })
        .catch(error => {
          commit('setUpdate', error.response);   
          commit('setUpdateStat2', 'fail');
        });
    },

    // update data
    update( {commit, state, dispatch}, [id, form] ){
      commit('setUpdateStat', 'loading');

      KegiatanRekomAPI.update( id, form )
        .then( function( response ){
          if(response.data.saved){
            commit('setUpdate', response.data);
            commit('setUpdateStat', 'success');
          }else{
            commit('setUpdate', response.data);
            commit('setUpdateStat', 'fail');
          }
        })
        .catch(error => {
          commit('setUpdate', error.response);   
          commit('setUpdateStat', 'fail');
        });
    },

    updateHasil( {commit, state, dispatch}, [id, form] ){
      commit('setUpdateStat2', 'loading');

      KegiatanRekomAPI.updateHasil( id, form )
        .then( function( response ){
          if(response.data.saved){
            commit('setUpdate2', response.data);
            commit('setUpdateStat2', 'success');
          }else{
            commit('setUpdate2', response.data);
            commit('setUpdateStat2', 'fail');
          }
        })
        .catch(error => {
          commit('setUpdate2', error.response);   
          commit('setUpdateStat2', 'fail');
        });
    },

    // destroy data
    destroy( {commit, state, dispatch}, id ){
      commit('setUpdateStat', 'loading');

      KegiatanRekomAPI.destroy( id ) 
        .then( function( response ){
          if(response.data.deleted){
            commit('setUpdate', response.data);
            commit('setUpdateStat', 'success');
          }else{
            commit('setUpdate', response.data);
            commit('setUpdateStat', 'fail');
          }
        })
        .catch(error => {
          commit('setUpdate', error.response);         
          commit('setUpdateStat', 'fail');
        });
    },

    // destroy data
    destroyHasil( {commit, state, dispatch}, id ){
      commit('setUpdateStat2', 'loading');

      KegiatanRekomAPI.destroyHasil( id ) 
        .then( function( response ){
          if(response.data.deleted){
            commit('setUpdate2', response.data);
            commit('setUpdateStat2', 'success');
          }else{
            commit('setUpdate2', response.data);
            commit('setUpdateStat2', 'fail');
          }
        })
        .catch(error => {
          commit('setUpdate2', error.response);         
          commit('setUpdateStat2', 'fail');
        });
    },

    // reset
    resetDataStat( {commit} ){
      commit('setDataStat', '');
    },
    resetUpdateStat( {commit} ){
      commit('setUpdateStat', '');
    },
    resetUpdateStat2( {commit} ){
      commit('setUpdateStat2', '');
    }
  },

  // mutations
  mutations: {
    setData ( state, data ){
      state.data = data;
    },
    setDataS ( state, data ){
      state.dataS = data;
    },
    setDataS2 ( state, data ){
      state.dataS2 = data;
    },
    setDataStat( state, status ){
      state.dataStat = status;
    },
    setDataStatS( state, status ){
      state.dataStatS = status;
    },
    setDataStatS2( state, status ){
      state.dataStatS2 = status;
    },
    setUpdate ( state, data ){
      state.update = data;
    },
    setUpdate2 ( state, data ){
      state.update2 = data;
    },
    setUpdateStat( state,status ){
      state.updateStat = status;
    },
    setUpdateStat2( state,status ){
      state.updateStat2 = status;
    },
    setRules( state, rules ){
      state.rules = rules;
    },
    setOptions( state, options ){
      state.options = options;
    }
  }
}