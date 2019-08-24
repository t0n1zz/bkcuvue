import JalinanKlaimAPI from '../../api/jalinanKlaim';

export const jalinanKlaim = {
  namespaced: true,

  // state
  state: {
    data: {}, //single data
    data2: {}, //single data
    dataS: [], //collection
    dataS1: [], //collection
    dataS2: [], //collection
    dataDeletedS: [], //collection
    count: {},
    headerDataS: [],
    dataStat: '',
    dataStat2: '',
    dataStatS: '',
    dataStatS1: '',
    dataStatS2: '',
    dataDeletedStatS: '',
    countStat: '',
    headerDataStatS: '',
    update: [], //update data
    updateStat: '',
    rules: [], //laravel rules
    options: [], //laravel options
  },

  // getters
  getters: {
    data: state => state.data,
    data2: state => state.data2,
    dataS: state => state.dataS,
    dataS1: state => state.dataS1,
    dataS2: state => state.dataS2,
    dataDeletedS: state => state.dataDeletedS,
    count: state => state.count,
    headerDataS: state => state.headerDataS,
    dataStat: state => state.dataStat,
    dataStat2: state => state.dataStat2,
    dataStatS: state => state.dataStatS,
    dataStatS1: state => state.dataStatS1,
    dataStatS2: state => state.dataStatS2,
    dataDeletedStatS: state => state.dataDeletedStatS,
    countStat: state => state.countStat,
    headerDataStatS: state => state.headerDataStatS,
    update: state => state.update,
    updateStat: state => state.updateStat,
    rules: state => state.rules,
    options: state => state.options,
  },

  actions: {
    //load collection with params
    index( { commit }, p ){
      commit('setDataStatS', 'loading');
      
      JalinanKlaimAPI.index( p, 0 )
        .then( function( response ){
          commit('setDataS', response.data.model );
          commit('setDataStatS', 'success');
        })
        .catch( error => {
          commit('setDataS', error.response);
          commit('setDataStatS', 'fail');
        });
    },
    index1( { commit }, p ){
      commit('setDataStatS1', 'loading');
      
      JalinanKlaimAPI.index( p, 1 )
        .then( function( response ){
          commit('setDataS1', response.data.model );
          commit('setDataStatS1', 'success');
        })
        .catch( error => {
          commit('setDataS1', error.response);
          commit('setDataStatS1', 'fail');
        });
    },
    index2( { commit }, p ){
      commit('setDataStatS2', 'loading');
      
      JalinanKlaimAPI.index( p, 2 )
        .then( function( response ){
          commit('setDataS2', response.data.model );
          commit('setDataStatS2', 'success');
        })
        .catch( error => {
          commit('setDataS2', error.response);
          commit('setDataStatS2', 'fail');
        });
    },

    // load by cu
    indexCu( { commit }, [p, id] ){
      commit('setDataStatS', 'loading');
      
      JalinanKlaimAPI.indexCu( p, id, 0 )
        .then( function( response ){
          commit('setDataS', response.data.model);
          commit('setDataStatS', 'success');
        })
        .catch( error => {
          commit('setDataS', error.response);
          commit('setDataStatS', 'fail');
        });
    },
    indexCu1( { commit }, [p, id] ){
      commit('setDataStatS1', 'loading');
      
      JalinanKlaimAPI.indexCu( p, id, 1 )
        .then( function( response ){
          commit('setDataS1', response.data.model);
          commit('setDataStatS1', 'success');
        })
        .catch( error => {
          commit('setDataS1', error.response);
          commit('setDataStatS1', 'fail');
        });
    },
    indexCu2( { commit }, [p, id] ){
      commit('setDataStatS2', 'loading');
      
      JalinanKlaimAPI.indexCu( p, id, 2 )
        .then( function( response ){
          commit('setDataS2', response.data.model);
          commit('setDataStatS2', 'success');
        })
        .catch( error => {
          commit('setDataS2', error.response);
          commit('setDataStatS2', 'fail');
        });
    },

    cariData( {commit}, nik ){
      commit('setDataStat2', 'loading');
      
      JalinanKlaimAPI.cariData( nik )
        .then( function( response ){
          commit('setData2', response.data.model);
          commit('setDataStat2', 'success');
        })
        .catch(error => {
          commit('setData2', error.response);
          commit('setDataStat2', 'fail');
        });
    },

    // create page
    create( {commit} ){
      commit('setDataStat', 'loading');
      
      JalinanKlaimAPI.create()
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

      JalinanKlaimAPI.store( form )
        .then( function( response ){
          if(response.data.saved){
            commit('setUpdate', response.data);
            commit('setUpdateStat', 'success');
          }else{
            commit('setUpdateStat', 'fail');
          }
        })
        .catch(error => {
          commit('setUpdate', error.response);   
          commit('setUpdateStat', 'fail');
        });
    },

    // edit page
    edit( {commit}, id ){
      commit('setDataStat', 'loading');
      
      JalinanKlaimAPI.edit( id )
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

    // update data
    update( {commit, state, dispatch}, [id, form] ){
      commit('setUpdateStat', 'loading');

      JalinanKlaimAPI.update( id, form )
        .then( function( response ){
          if(response.data.saved){
            commit('setUpdate', response.data);
            commit('setUpdateStat', 'success');
          }else{
            commit('setUpdateStat', 'fail');
          }
        })
        .catch(error => {
          commit('setUpdate', error.response);   
          commit('setUpdateStat', 'fail');
        });
    },

    updateStatus( {commit, state, dispatch}, [id, form] ){
      commit('setUpdateStat', 'loading');

      JalinanKlaimAPI.updateStatus( id, form )
        .then( function( response ){
          if(response.data.saved){
            commit('setUpdate', response.data);
            commit('setUpdateStat', 'success');
          }else{
            commit('setUpdateStat', 'fail');
          }
        })
        .catch(error => {
          commit('setUpdate', error.response);   
          commit('setUpdateStat', 'fail');
        });
    },

    restore( {commit, state, dispatch}, id ){
      commit('setUpdateStat', 'loading');

      JalinanKlaimAPI.restore( id )
        .then( function( response ){
          if(response.data.restored){
            commit('setUpdate', response.data);
            commit('setUpdateStat', 'success');
          }else{
            commit('setUpdateStat', 'fail');
          }
        })
        .catch(error => {
          commit('setUpdate', error.response);   
          commit('setUpdateStat', 'fail');
        });
    },

    // destroy data
    destroy( {commit, state, dispatch}, id ){
      commit('setUpdateStat', 'loading');

      JalinanKlaimAPI.destroy( id )
        .then( function( response ){
          if(response.data.deleted){
            commit('setUpdate', response.data);
            commit('setUpdateStat', 'success');
          }else{
            commit('setUpdateStat', 'fail');
          }
        })
        .catch(error => {
          commit('setUpdate', error.response);         
          commit('setUpdateStat', 'fail');
        });
    },

    count( { commit } ){
      commit('setCountStat', 'loading');
      
      JalinanKlaimAPI.count()
        .then( function( response ){
          commit('setCount', response.data.model );
          commit('setCountStat', 'success');
        })
        .catch( error => {
          commit('setCount', error.response);
          commit('setCountStat', 'fail');
        });
    },

    // reset
    resetUpdateStat( {commit} ){
      commit('setUpdateStat', '');
    }
  },

  // mutations
  mutations: {
    setData ( state, data ){
      state.data = data;
    },
    setData2 ( state, data ){
      state.data2 = data;
    },
    setDataS ( state, data ){
      state.dataS = data;
    },
    setDataS1 ( state, data ){
      state.dataS1 = data;
    },
    setDataS2 ( state, data ){
      state.dataS2 = data;
    },
    setDataDeletedS ( state, data ){
      state.dataDeletedS = data;
    },
    setCount ( state, data ){
      state.count = data;
    },
    setHeaderDataS ( state, data ){
      state.headerDataS = data;
    },
    setDataStat( state, status ){
      state.dataStat = status;
    },
    setDataStat2( state, status ){
      state.dataStat2 = status;
    },
    setDataStatS( state, status ){
      state.dataStatS = status;
    },
    setDataStatS1( state, status ){
      state.dataStatS1 = status;
    },
    setDataStatS2( state, status ){
      state.dataStatS2 = status;
    },
    setDataDeletedStatS( state, status ){
      state.dataDeletedStatS = status;
    },
    setHeaderDataStatS( state, status ){
      state.headerDataStatS = status;
    },
    setCountStat( state, status ){
      state.countStat = status;
    },
    setUpdate ( state, data ){
      state.update = data;
    },
    setUpdateStat( state,status ){
      state.updateStat = status;
    },
    setRules( state, rules ){
      state.rules = rules;
    },
    setOptions( state, options ){
      state.options = options;
    }
  }
}