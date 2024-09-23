import MonitoringAPI from '../../api/monitoring.js';

export const monitoring = {
  namespaced: true,

  // state
  state: {
    data: {}, //single data
    data2: {}, //single data
    dataS: [], //collection
    dataS2: [], //collection
    dataSKonsolidasi: [],
    periode: {},
    dataDeletedS: [], //collection
    count: {},
    dataStat: '',
    dataStat2: '',
    dataStatS: '',
    dataStatS2: '',
    dataStatSKonsolidasi: '',
    periodeStat: '',
    dataDeletedStatS: '',
    countStat: '',
    update: [], //update data
    updateStat: '',
    rules: [], //laravel rules
    options: [], //laravel options
    summary:[]
  },

  // getters
  getters: {
    data: state => state.data,
    dataS: state => state.dataS,
    dataSKonsolidasi: state => state.dataSKonsolidasi,
    periode: state => state.periode,
    dataDeletedS: state => state.dataDeletedS,
    count: state => state.count,
    dataStat: state => state.dataStat,
    dataStatS: state => state.dataStatS,
    dataStatSKonsolidasi: state => state.dataStatSKonsolidasi,
    periodeStat: state => state.periodeStat,
    dataDeletedStatS: state => state.dataDeletedStatS,
    countStat: state => state.countStat,
    update: state => state.update,
    updateStat: state => state.updateStat,
    rules: state => state.rules,
    options: state => state.options,
    summary: state => state.summary,
  },

  actions: {
    //load collection with params
    index( { commit }, p ){
      commit('setDataStatS', 'loading');
      
      MonitoringAPI.index( p )
        .then( function( response ){
          commit('setDataS', response.data.model );
          commit('setDataStatS', 'success');
        })
        .catch( error => {
          commit('setDataS', error.response);
          commit('setDataStatS', 'fail');
        });
    },

    indexKonsolidasi( { commit }, [p, tahun, bulan]){
      commit('setDataStatS', 'loading');
      MonitoringAPI.indexKonsolidasi( p,tahun,bulan )
        .then( function( response ){
          commit('setDataSKonsolidasi', response.data.model );
          commit('setSummary', response.data.summary);
          commit('setDataStatSKonsolidasi', 'success');
        })
        .catch( error => {
          commit('setDataSKonsolidasi', error.response);
          commit('setDataStatSKonsolidasi', 'fail');
        });
    },

    // load by cu
    indexCu( { commit }, [p, cu, tp] ){
      commit('setDataStatS', 'loading');
      
      MonitoringAPI.indexCu( p, cu, tp )
        .then( function( response ){
          commit('setDataS', response.data.model);
          commit('setDataStatS', 'success');
        })
        .catch( error => {
          commit('setDataS', error.response);
          commit('setDataStatS', 'fail');
        });
    },

    get( { commit }, cu ){
      commit('setDataStatS', 'loading');
      
      MonitoringAPI.get( cu )
        .then( function( response ){
          commit('setDataS', response.data.model );
          commit('setDataStatS', 'success');
        })
        .catch( error => {
          commit('setDataS', error.response);
          commit('setDataStatS', 'fail');
        });
    },

    detail( { commit }, id ){
      commit('setDataStat', 'loading');
      
      MonitoringAPI.detail( id )
        .then( function( response ){
          commit('setData', response.data.model );
          commit('setDataStat', 'success');
        })
        .catch( error => {
          commit('setData', error.response);
          commit('setDataStat', 'fail');
        });
    },

    // create page
    create( {commit} ){
      commit('setDataStat', 'loading');
      
      MonitoringAPI.create()
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

      MonitoringAPI.store( form )
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
      
      MonitoringAPI.edit( id )
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

      MonitoringAPI.update( id, form )
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

    updateRekom( {commit, state, dispatch}, id ){
      commit('setUpdateStat', 'loading');

      MonitoringAPI.updateRekom( id )
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

      MonitoringAPI.restore( id )
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

      MonitoringAPI.destroy( id )
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
      
      MonitoringAPI.count()
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
    },

    getPeriode( { commit }, tipe ){
      commit('setPeriodeStat', 'loading');
      
      MonitoringAPI.getPeriode( tipe )
        .then( function( response ){
          commit('setPeriode', response.data.model );
          commit('setPeriodeStat', 'success');
        })
        .catch( error => {
          commit('setPeriode', error.response);
          commit('setPeriodeStat', 'fail');
        });
    },
  },

  // mutations
  mutations: {
    setData ( state, data ){
      state.data = data;
    },
    setDataS ( state, data ){
      state.dataS = data;
    },
    setDataSKonsolidasi ( state, data ){
      state.dataSKonsolidasi = data;
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
    setDataStat( state, status ){
      state.dataStat = status;
    },
    setDataStatS( state, status ){
      state.dataStatS = status;
    },
    setDataStatSKonsolidasi( state, status ){
      state.dataStatSKonsolidasi = status;
    },
    setPeriodeStat( state, status ){
      state.periodeStat = status;
    },
    setDataDeletedStatS( state, status ){
      state.dataDeletedStatS = status;
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
    },
    setSummary( state, summary ){
      state.summary = summary;
    }
  }
}