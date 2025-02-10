import AssesmentCulegAPI from '../../api/assesmentCuleg.js';

export const assesmentCuleg = {
  namespaced: true,

  // state
  state: {
    data: {}, //single data
    dataS: [], //collection
    periode: {},
    dataDeletedS: [], //collection
    count: {},
    headerDataS: [],
    dataStat: '',
    dataStatS: '',
    periodeStat: '',
    dataDeletedStatS: '',
    countStat: '',
    headerDataStatS: '',
    update: [], //update data
    updateStat: '',
    updateSingle: [], //update data
    updateSingleStat: '',
    rules: [], //laravel rules
    options: [], //laravel options
  },

  // getters
  getters: {
    data: state => state.data,
    dataS: state => state.dataS,
    periode: state => state.periode,
    dataDeletedS: state => state.dataDeletedS,
    count: state => state.count,
    headerDataS: state => state.headerDataS,
    dataStat: state => state.dataStat,
    dataStatS: state => state.dataStatS,
    periodeStat: state => state.periodeStat,
    dataDeletedStatS: state => state.dataDeletedStatS,
    countStat: state => state.countStat,
    headerDataStatS: state => state.headerDataStatS,
    update: state => state.update,
    updateStat: state => state.updateStat,
    updateSingle: state => state.updateSingle,
    updateSingleStat: state => state.updateSingleStat,
    rules: state => state.rules,
    options: state => state.options,
  },

  actions: {
    //load collection with params
    index( { commit }, p ){
      commit('setDataStatS', 'loading');
      
      AssesmentCulegAPI.index( p )
        .then( function( response ){
          commit('setDataS', response.data.model );
          commit('setDataStatS', 'success');
        })
        .catch( error => {
          commit('setDataS', error.response);
          commit('setDataStatS', 'fail');
        });
    },

    // load by cu
    indexCu( { commit }, [p, id] ){
      commit('setDataStatS', 'loading');
      
      AssesmentCulegAPI.indexCu( p, id )
        .then( function( response ){
          commit('setDataS', response.data.model);
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
      
      AssesmentCulegAPI.create()
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

      AssesmentCulegAPI.store( form )
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
      
      AssesmentCulegAPI.edit( id )
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

    editPenilaian( {commit}, id ){
      commit('setDataStat', 'loading');
      
      AssesmentCulegAPI.editPenilaian( id )
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

      AssesmentCulegAPI.update( id, form )
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

    updateSingle( {commit, state, dispatch}, [id, perspektif, form] ){
      commit('setUpdateSingleStat', 'loading');

      AssesmentCulegAPI.updateSingle( id, perspektif, form )
        .then( function( response ){
          if(response.data.saved){
            commit('setUpdateSingle', response.data);
            commit('setUpdateSingleStat', 'success');
          }else{
            commit('setUpdateSingleStat', 'fail');
          }
        })
        .catch(error => {
          commit('setUpdateSingle', error.response);   
          commit('setUpdateSingleStat', 'fail');
        });
    },

    restore( {commit, state, dispatch}, id ){
      commit('setUpdateStat', 'loading');

      AssesmentCulegAPI.restore( id )
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

      AssesmentCulegAPI.destroy( id )
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

    // cari data
    cariData( {commit}, [ cu, periode ] ){
      commit('setPeriodeStat', 'loading');
      
      AssesmentCulegAPI.cariData( cu, periode )
        .then( function( response ){
          commit('setPeriode', response.data.periode);
          commit('setPeriodeStat', 'success');
        })
        .catch(error => {
          commit('setPeriode', error.response);
          commit('setPeriodeStat', 'fail');
        });
    },

    count( { commit } ){
      commit('setCountStat', 'loading');
      
      AssesmentCulegAPI.count()
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
    },

    resetPeriode( {commit} ){
      commit('setPeriode', {});
      commit('setPeriodeStat', '');
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
    setPeriode ( state, data ){
      state.periode = data;
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
    setDataStatS( state, status ){
      state.dataStatS = status;
    },
    setPeriodeStat( state, status ){
      state.periodeStat = status;
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
    setUpdateSingle ( state, data ){
      state.updateSingle = data;
    },
    setUpdateSingleStat( state,status ){
      state.updateSingleStat = status;
    },
    setRules( state, rules ){
      state.rules = rules;
    },
    setOptions( state, options ){
      state.options = options;
    }
  }
}