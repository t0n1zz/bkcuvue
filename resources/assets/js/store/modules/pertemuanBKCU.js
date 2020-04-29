import PERTEMUANBKCUAPI from '../../api/pertemuanBKCU.js';

export const pertemuanBKCU = {
  namespaced: true,

  // state
  state: {
    data: {},
    data2: {}, //single data
    data3: {}, //single data
    dataS: [], //collection
    dataS2: [], //collection
    dataS3: [], //collection
    dataS4: [], //collection
    dataS5: [], //collection
    dataS6: [], //collection
    dataS7: [], //collection
    dataS8: [], //collection
    dataJalan: [], //collection
    periode: [],
    count: {},
    count2: {},
    count3: {},
    dataStat: '',
    dataStat2: '',
    dataStat3: '',
    periodeStat: '',
    dataStatS: '',
    dataStatS2: '',
    dataStatS3: '',
    dataStatS4: '',
    dataStatS5: '',
    dataStatS6: '',
    dataStatS7: '',
    dataStatS8: '',
    dataJalanStat: '',
    countStat: '',
    countStat2: '',
    countStat3: '',
    update: [], //update data
    updateStat: '',
    update2: [], //update data
    updateStat2: '',
    rules: [], //laravel rules
    options: [], //laravel options
  },

  // getters
  getters: {
    data: state => state.data,
    data2: state => state.data2,
    data3: state => state.data3,
    dataS: state => state.dataS,
    dataS2: state => state.dataS2,
    dataS3: state => state.dataS3, 
    dataS4: state => state.dataS4,
    dataS5: state => state.dataS5,
    dataS6: state => state.dataS6,
    dataS7: state => state.dataS7,
    dataS8: state => state.dataS8,
    dataJalan: state => state.dataJalan,
    periode: state => state.periode,
    count: state => state.count,
    count2: state => state.count2,
    count3: state => state.count3,
    dataStat: state => state.dataStat,
    dataStat2: state => state.dataStat2,
    dataStat3: state => state.dataStat3,
    periodeStat: state => state.periodeStat,
    dataStatS: state => state.dataStatS,
    dataStatS2: state => state.dataStatS2,
    dataStatS3: state => state.dataStatS3,
    dataStatS4: state => state.dataStatS4,
    dataStatS5: state => state.dataStatS5,
    dataStatS6: state => state.dataStatS6,
    dataStatS7: state => state.dataStatS7,
    dataStatS8: state => state.dataStatS8,
    dataJalanStat: state => state.dataJalanStat,
    countStat: state => state.countStat,
    countStat2: state => state.countStat2,
    countStat3: state => state.countStat3,
    update: state => state.update,
    updateStat: state => state.updateStat,
    update2: state => state.update2,
    updateStat2: state => state.updateStat2,
    rules: state => state.rules,
    options: state => state.options,
  },

  actions: {
    //load collection with params
    index( { commit }, p ){
      commit('setDataStatS', 'loading');
      
      PERTEMUANBKCUAPI.index( p )
        .then( function( response ){
          commit('setDataS', response.data.model );
          commit('setDataStatS', 'success');
        })
        .catch( error => {
          commit('setDataS', error.response);
          commit('setDataStatS', 'fail');
        });
    },

    indexJalan( { commit }, p ){
      commit('setDataStatS', 'loading');
      
      PERTEMUANBKCUAPI.indexJalan( p )
        .then( function( response ){
          commit('setDataS', response.data.model );
          commit('setDataStatS', 'success');
        })
        .catch( error => {
          commit('setDataS', error.response);
          commit('setDataStatS', 'fail');
        });
    },

    indexJalanHeader( { commit }, p ){
      commit('setDataJalanStat', 'loading');
      
      PERTEMUANBKCUAPI.indexJalan( p )
        .then( function( response ){
          commit('setDataJalan', response.data.model );
          commit('setDataJalanStat', 'success');
        })
        .catch( error => {
          commit('setDataJalan', error.response);
          commit('setDataJalanStat', 'fail');
        });
    },

    indexPeriode( { commit }, [p, periode] ){
      commit('setDataStatS', 'loading');
      
      PERTEMUANBKCUAPI.indexPeriode( p, periode )
        .then( function( response ){
          commit('setDataS', response.data.model );
          commit('setDataStatS', 'success');
        })
        .catch( error => {
          commit('setDataS', error.response);
          commit('setDataStatS', 'fail');
        });
    },

    indexPeserta( { commit }, [p, id] ){
      commit('setDataStatS', 'loading');
      
      PERTEMUANBKCUAPI.indexPeserta( p, id )
        .then( function( response ){
          commit('setDataS', response.data.model );
          commit('setDataStatS', 'success');
        })
        .catch( error => {
          commit('setDataS', error.response);
          commit('setDataStatS', 'fail');
        });
    },

    indexPesertaHadir( { commit }, [p, id] ){
      commit('setDataStatS2', 'loading');
      
      PERTEMUANBKCUAPI.indexPesertaHadir( p, id )
        .then( function( response ){
          commit('setDataS2', response.data.model );
          commit('setDataStatS2', 'success');
        })
        .catch( error => {
          commit('setDataS2', error.response);
          commit('setDataStatS2', 'fail');
        });
    },

    indexPesertaCu( { commit }, [p, id, cu] ){
      commit('setDataStatS', 'loading');
      
      PERTEMUANBKCUAPI.indexPesertaCu( p, id, cu )
        .then( function( response ){
          commit('setDataS', response.data.model );
          commit('setDataStatS', 'success');
        })
        .catch( error => {
          commit('setDataS', error.response);
          commit('setDataStatS', 'fail');
        });
    },

    indexPesertaCountCu( { commit }, id ){
      commit('setDataStatS6', 'loading');
      
      PERTEMUANBKCUAPI.indexPesertaCountCu( id )
        .then( function( response ){
          commit('setDataS6', response.data.model );
          commit('setDataStatS6', 'success');
        })
        .catch( error => {
          commit('setDataS6', error.response);
          commit('setDataStatS6', 'fail');
        });
    },

    indexPesertaHadirCountCu( { commit }, id ){
      commit('setDataStatS7', 'loading');
      
      PERTEMUANBKCUAPI.indexPesertaHadirCountCu( id )
        .then( function( response ){
          commit('setDataS7', response.data.model );
          commit('setDataStatS7', 'success');
        })
        .catch( error => {
          commit('setDataS7', error.response);
          commit('setDataStatS7', 'fail');
        });
    },

    indexMateri( { commit }, [p, id] ){
      commit('setDataStatS3', 'loading');
      
      PERTEMUANBKCUAPI.indexMateri( p, id )
        .then( function( response ){
          commit('setDataS3', response.data.model );
          commit('setDataStatS3', 'success');
        })
        .catch( error => {
          commit('setDataS3', error.response);
          commit('setDataStatS3', 'fail');
        });
    },

    indexTanggapan( { commit }, [p, id] ){
      commit('setDataStatS4', 'loading');
      
      PERTEMUANBKCUAPI.indexTanggapan( p, id )
        .then( function( response ){
          commit('setDataS4', response.data.model );
          commit('setDataStatS4', 'success');
        })
        .catch( error => {
          commit('setDataS4', error.response);
          commit('setDataStatS4', 'fail');
        });
    },

    indexTanggapanCount( { commit }, id ){
      commit('setDataStatS8', 'loading');
      
      PERTEMUANBKCUAPI.indexTanggapanCount( id )
        .then( function( response ){
          commit('setDataS8', response.data.model );
          commit('setDataStatS8', 'success');
        })
        .catch( error => {
          commit('setDataS8', error.response);
          commit('setDataStatS8', 'fail');
        });
    },

    indexKomentar( { commit }, [p, id] ){
      commit('setDataStatS5', 'loading');
      
      PERTEMUANBKCUAPI.indexKomentar( p, id )
        .then( function( response ){
          commit('setDataS5', response.data.model );
          commit('setDataStatS5', 'success');
        })
        .catch( error => {
          commit('setDataS5', error.response);
          commit('setDataStatS5', 'fail');
        });
    },

    checkPeserta( { commit }, [kegiatan_id, aktivis_id] ){
      commit('setDataStat2', 'loading');
      
      PERTEMUANBKCUAPI.checkPeserta(kegiatan_id, aktivis_id)
        .then( function( response ){
          commit('setData2', response.data.model );
          commit('setDataStat2', 'success');
        })
        .catch( error => {
          commit('setData2', error.response);
          commit('setDataStat2', 'fail');
        });
    },

    checkPanitia( { commit }, [kegiatan_id, aktivis_id] ){
      commit('setDataStat3', 'loading');
      
      PERTEMUANBKCUAPI.checkPanitia(kegiatan_id, aktivis_id)
        .then( function( response ){
          commit('setData3', response.data.model );
          commit('setDataStat3', 'success');
        })
        .catch( error => {
          commit('setData3', error.response);
          commit('setDataStat3', 'fail');
        });
    },

    getPeriode( { commit } ){
      commit('setPeriodeStat', 'loading');
      
      PERTEMUANBKCUAPI.getPeriode()
        .then( function( response ){
          commit('setPeriode', response.data.model );
          commit('setPeriodeStat', 'success');
        })
        .catch( error => {
          commit('setPeriode', error.response);
          commit('setPeriodeStat', 'fail');
        });
    },

    // create page
    create( {commit} ){
      commit('setDataStat', 'loading');
      
      PERTEMUANBKCUAPI.create()
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

      PERTEMUANBKCUAPI.store( form )
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

    storePeserta( {commit, state, dispatch}, [id, form] ){
      commit('setUpdateStat', 'loading');

      PERTEMUANBKCUAPI.storePeserta( id, form )
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

    storeMateri( {commit, state, dispatch}, [id, form] ){
      commit('setUpdateStat', 'loading');

      PERTEMUANBKCUAPI.storeMateri( id, form )
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

    storeTanggapan( {commit, state, dispatch}, [id, form] ){
      commit('setUpdateStat', 'loading');

      PERTEMUANBKCUAPI.storeTanggapan( id, form )
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

    storeKomentar( {commit, state, dispatch}, [id, form] ){
      commit('setUpdateStat2', 'loading');

      PERTEMUANBKCUAPI.storeKomentar( id, form )
        .then( function( response ){
          if(response.data.saved){
            commit('setUpdate2', response.data);
            commit('setUpdateStat2', 'success');
          }else{
            commit('setUpdateStat2', 'fail');
          }
        })
        .catch(error => {
          commit('setUpdate2', error.response);   
          commit('setUpdateStat2', 'fail');
        });
    },


    // edit page
    edit( {commit}, id ){
      commit('setDataStat', 'loading');
      
      PERTEMUANBKCUAPI.edit( id )
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

      PERTEMUANBKCUAPI.update( id, form )
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

      PERTEMUANBKCUAPI.updateStatus( id, form )
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

    updatePeserta( {commit, state, dispatch}, [id, form] ){
      commit('setUpdateStat', 'loading');

      PERTEMUANBKCUAPI.updatePeserta( id, form )
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

    updateMateri( {commit, state, dispatch}, [id, form] ){
      commit('setUpdateStat', 'loading');

      PERTEMUANBKCUAPI.updateMateri( id, form )
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

    updateTanggapan( {commit, state, dispatch}, [id, form] ){
      commit('setUpdateStat', 'loading');

      PERTEMUANBKCUAPI.updateTanggapan( id, form )
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

    updateKomentar( {commit, state, dispatch}, [id, form] ){
      commit('setUpdateStat2', 'loading');

      PERTEMUANBKCUAPI.updateKomentar( id, form )
        .then( function( response ){
          if(response.data.saved){
            commit('setUpdate2', response.data);
            commit('setUpdateStat2', 'success');
          }else{
            commit('setUpdateStat2', 'fail');
          }
        })
        .catch(error => {
          commit('setUpdate2', error.response);   
          commit('setUpdateStat2', 'fail');
        });
    },

    updatePesertaHadir( {commit, state, dispatch}, [kegiatan_id, aktivis_id] ){
      commit('setUpdateStat', 'loading');

      PERTEMUANBKCUAPI.updatePesertaHadir( kegiatan_id, aktivis_id )
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

    updatePanitiaHadir( {commit, state, dispatch}, [kegiatan_id, aktivis_id] ){
      commit('setUpdateStat', 'loading');

      PERTEMUANBKCUAPI.updatePanitiaHadir( kegiatan_id, aktivis_id )
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

    // destroy data
    destroy( {commit, state, dispatch}, id ){
      commit('setUpdateStat', 'loading');

      PERTEMUANBKCUAPI.destroy( id )
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

    destroyPeserta( {commit, state, dispatch}, id ){
      commit('setUpdateStat', 'loading');

      PERTEMUANBKCUAPI.destroyPeserta( id )
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

    destroyMateri( {commit, state, dispatch}, id ){
      commit('setUpdateStat', 'loading');

      PERTEMUANBKCUAPI.destroyMateri( id )
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

    destroyTanggapan( {commit, state, dispatch}, id ){
      commit('setUpdateStat', 'loading');

      PERTEMUANBKCUAPI.destroyTanggapan( id )
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

    destroyKomentar( {commit, state, dispatch}, id ){
      commit('setUpdateStat2', 'loading');

      PERTEMUANBKCUAPI.destroyKomentar( id )
        .then( function( response ){
          if(response.data.deleted){
            commit('setUpdate2', response.data);
            commit('setUpdateStat2', 'success');
          }else{
            commit('setUpdateStat2', 'fail');
          }
        })
        .catch(error => {
          commit('setUpdate', error.response);         
          commit('setUpdateStat', 'fail');
        });
    },

    batalPeserta( {commit, state, dispatch}, [id, form] ){
      commit('setUpdateStat', 'loading');

      PERTEMUANBKCUAPI.batalPeserta( id, form )
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

    countPeserta( { commit }, id ){
      commit('setCountStat', 'loading');
      
      PERTEMUANBKCUAPI.countPeserta( id )
        .then( function( response ){
          commit('setCount', response.data.model);
          commit('setCountStat', 'success');
        })
        .catch( error => {
          commit('setCount', error.response);
          commit('setCountStat', 'fail');
        });
    },

    countPesertaHadir( { commit }, id ){
      commit('setCountStat2', 'loading');
      
      PERTEMUANBKCUAPI.countPesertaHadir( id )
        .then( function( response ){
          commit('setCount2', response.data.model);
          commit('setCountStat2', 'success');
        })
        .catch( error => {
          commit('setCount2', error.response);
          commit('setCountStat2', 'fail');
        });
    },

    countTanggapan( { commit }, [ id, cu ] ){
      commit('setCountStat3', 'loading');
      
      PERTEMUANBKCUAPI.countTanggapan( id, cu )
        .then( function( response ){
          commit('setCount3', response.data.model);
          commit('setCountStat3', 'success');
        })
        .catch( error => {
          commit('setCount3', error.response);
          commit('setCountStat3', 'fail');
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
    setData3 ( state, data ){
      state.data3 = data;
    },
    setPeriode ( state, data ){
      state.periode = data;
    },
    setDataS ( state, data ){
      state.dataS = data;
    },
    setDataS2 ( state, data ){
      state.dataS2 = data;
    },
    setDataS3 ( state, data ){
      state.dataS3 = data;
    },
    setDataS4 ( state, data ){
      state.dataS4 = data;
    },
    setDataS5 ( state, data ){
      state.dataS5 = data;
    },
    setDataS6 ( state, data ){
      state.dataS6 = data;
    },
    setDataS7 ( state, data ){
      state.dataS7 = data;
    },
    setDataS8 ( state, data ){
      state.dataS8 = data;
    },
    setDataJalan ( state, data ){
      state.dataJalan = data;
    },
    setCount ( state, data ){
      state.count = data;
    },
    setCount2 ( state, data ){
      state.count2 = data;
    },
    setCount3 ( state, data ){
      state.count3 = data;
    },
    setDataStat( state, status ){
      state.dataStat = status;
    },
    setDataStat2( state, status ){
      state.dataStat2 = status;
    },
    setDataStat3( state, status ){
      state.dataStat3 = status;
    },
    setPeriodeStat( state, status ){
      state.periodeStat = status;
    },
    setDataStatS( state, status ){
      state.dataStatS = status;
    },
    setDataStatS2( state, status ){
      state.dataStatS2 = status;
    },
    setDataStatS3( state, status ){
      state.dataStatS3 = status;
    },
    setDataStatS4( state, status ){
      state.dataStatS4 = status;
    },
    setDataStatS5( state, status ){
      state.dataStatS5 = status;
    },
    setDataStatS6( state, status ){
      state.dataStatS6 = status;
    },
    setDataStatS7( state, status ){
      state.dataStatS7 = status;
    },
    setDataStatS8( state, status ){
      state.dataStatS8 = status;
    },
    setDataJalanStat( state, status ){
      state.dataJalanStat = status;
    },
    setCountStat( state, status ){
      state.countStat = status;
    },
    setCountStat2( state, status ){
      state.countStat2 = status;
    },
    setCountStat3( state, status ){
      state.countStat3 = status;
    },
    setUpdate ( state, data ){
      state.update = data;
    },
    setUpdateStat( state,status ){
      state.updateStat = status;
    },
    setUpdate2 ( state, data ){
      state.update2 = data;
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