import JalinanKlaimAPI from '../../api/jalinanKlaim';

export const jalinanKlaim = {
  namespaced: true,

  // state
  state: {
    data: {}, //single data
    data2: {}, //single data
    periode: {}, //single data
    dataS: [], //collection
    dataS1: [], //collection
    dataS2: [], //collection
    dataS3: [], //collection
    dataS4: [], //collection
    dataS5: [], //collection
    dataS6: [], //collection
    dataVeri1: [], //collection
    dataVeri2: [], //collection
    dataVeri3: [], //collection
    dataDeletedS: [], //collection
    count: {},
    headerDataS: [],
    dataStat: '',
    dataStat2: '',
    periodeStat: '',
    dataStatS: '',
    dataStatS1: '',
    dataStatS2: '',
    dataStatS3: '',
    dataStatS4: '',
    dataStatS5: '',
    dataStatS6: '',
    dataStatVeri: '',
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
    periode: state => state.periode,
    dataS: state => state.dataS,
    dataS1: state => state.dataS1,
    dataS2: state => state.dataS2,
    dataS3: state => state.dataS3,
    dataS4: state => state.dataS4,
    dataS5: state => state.dataS5,
    dataS6: state => state.dataS6,
    dataVeri1: state => state.dataVeri1,
    dataVeri2: state => state.dataVeri2,
    dataVeri3: state => state.dataVeri3,
    dataDeletedS: state => state.dataDeletedS,
    count: state => state.count,
    headerDataS: state => state.headerDataS,
    dataStat: state => state.dataStat,
    dataStat2: state => state.dataStat2,
    periodeStat: state => state.periodeStat,
    dataStatS: state => state.dataStatS,
    dataStatS1: state => state.dataStatS1,
    dataStatS2: state => state.dataStatS2,
    dataStatS3: state => state.dataStatS3,
    dataStatS4: state => state.dataStatS4,
    dataStatS5: state => state.dataStatS5,
    dataStatS6: state => state.dataStatS6,
    dataStatVeri: state => state.dataStatVeri,
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
    index( { commit }, [p, awal, akhir] ){
      commit('setDataStatS', 'loading');
      
      JalinanKlaimAPI.index( p, 0, awal, akhir )
        .then( function( response ){
          commit('setDataS', response.data.model );
          commit('setDataStatS', 'success');
        })
        .catch( error => {
          commit('setDataS', error.response);
          commit('setDataStatS', 'fail');
        });
    },
    index1( { commit }, [p, awal, akhir] ){
      commit('setDataStatS1', 'loading');
      
      JalinanKlaimAPI.index( p, 1, awal, akhir )
        .then( function( response ){
          commit('setDataS1', response.data.model );
          commit('setDataStatS1', 'success');
        })
        .catch( error => {
          commit('setDataS1', error.response);
          commit('setDataStatS1', 'fail');
        });
    },
    index2( { commit }, [p, awal, akhir] ){
      commit('setDataStatS2', 'loading');
      
      JalinanKlaimAPI.index( p, 2, awal, akhir )
        .then( function( response ){
          commit('setDataS2', response.data.model );
          commit('setDataStatS2', 'success');
        })
        .catch( error => {
          commit('setDataS2', error.response);
          commit('setDataStatS2', 'fail');
        });
    },
    index3( { commit }, [p, awal, akhir] ){
      commit('setDataStatS3', 'loading');
      
      JalinanKlaimAPI.index( p, 3, awal, akhir )
        .then( function( response ){
          commit('setDataS3', response.data.model );
          commit('setDataStatS3', 'success');
        })
        .catch( error => {
          commit('setDataS3', error.response);
          commit('setDataStatS3', 'fail');
        });
    },
    index4( { commit }, [p, awal, akhir] ){
      commit('setDataStatS4', 'loading');
      
      JalinanKlaimAPI.index( p, 4, awal, akhir )
        .then( function( response ){
          commit('setDataS4', response.data.model );
          commit('setDataStatS4', 'success');
        })
        .catch( error => {
          commit('setDataS4', error.response);
          commit('setDataStatS4', 'fail');
        });
    },
    index5( { commit }, [p, awal, akhir] ){
      commit('setDataStatS5', 'loading');
      
      JalinanKlaimAPI.index( p, 5, awal, akhir )
        .then( function( response ){
          commit('setDataS5', response.data.model );
          commit('setDataStatS5', 'success');
        })
        .catch( error => {
          commit('setDataS5', error.response);
          commit('setDataStatS5', 'fail');
        });
    },
    index6( { commit }, [p, awal, akhir] ){
      commit('setDataStatS6', 'loading');
      
      JalinanKlaimAPI.index( p, 6, awal, akhir )
        .then( function( response ){
          commit('setDataS6', response.data.model );
          commit('setDataStatS6', 'success');
        })
        .catch( error => {
          commit('setDataS6', error.response);
          commit('setDataStatS6', 'fail');
        });
    },

    // load by cu
    indexCu( { commit }, [p, cu, tp, awal, akhir] ){
      commit('setDataStatS', 'loading');
      
      JalinanKlaimAPI.indexCu( p, cu, tp, 0, awal, akhir )
        .then( function( response ){
          commit('setDataS', response.data.model);
          commit('setDataStatS', 'success');
        })
        .catch( error => {
          commit('setDataS', error.response);
          commit('setDataStatS', 'fail');
        });
    },
    indexCu1( { commit }, [p, cu, tp, awal, akhir] ){
      commit('setDataStatS1', 'loading');
      
      JalinanKlaimAPI.indexCu( p, cu, tp, 1, awal, akhir )
        .then( function( response ){
          commit('setDataS1', response.data.model);
          commit('setDataStatS1', 'success');
        })
        .catch( error => {
          commit('setDataS1', error.response);
          commit('setDataStatS1', 'fail');
        });
    },
    indexCu2( { commit }, [p, cu, tp, awal, akhir] ){
      commit('setDataStatS2', 'loading');
      
      JalinanKlaimAPI.indexCu( p, cu, tp, 2, awal, akhir )
        .then( function( response ){
          commit('setDataS2', response.data.model);
          commit('setDataStatS2', 'success');
        })
        .catch( error => {
          commit('setDataS2', error.response);
          commit('setDataStatS2', 'fail');
        });
    },
    indexCu3( { commit }, [p, cu, tp, awal, akhir] ){
      commit('setDataStatS3', 'loading');
      
      JalinanKlaimAPI.indexCu( p, cu, tp, 3, awal, akhir )
        .then( function( response ){
          commit('setDataS3', response.data.model);
          commit('setDataStatS3', 'success');
        })
        .catch( error => {
          commit('setDataS3', error.response);
          commit('setDataStatS3', 'fail');
        });
    },
    indexCu4( { commit }, [p, cu, tp, awal, akhir] ){
      commit('setDataStatS4', 'loading');
      
      JalinanKlaimAPI.indexCu( p, cu, tp, 4, awal, akhir )
        .then( function( response ){
          commit('setDataS4', response.data.model);
          commit('setDataStatS4', 'success');
        })
        .catch( error => {
          commit('setDataS4', error.response);
          commit('setDataStatS4', 'fail');
        });
    },
    indexCu5( { commit }, [p, cu, tp, awal, akhir] ){
      commit('setDataStatS5', 'loading');
      
      JalinanKlaimAPI.indexCu( p, cu, tp, 5, awal, akhir )
        .then( function( response ){
          commit('setDataS5', response.data.model);
          commit('setDataStatS5', 'success');
        })
        .catch( error => {
          commit('setDataS5', error.response);
          commit('setDataStatS5', 'fail');
        });
    },
    indexCu6( { commit }, [p, cu, tp, awal, akhir] ){
      commit('setDataStatS6', 'loading');
      
      JalinanKlaimAPI.indexCu( p, cu, tp, 6, awal, akhir )
        .then( function( response ){
          commit('setDataS6', response.data.model);
          commit('setDataStatS6', 'success');
        })
        .catch( error => {
          commit('setDataS6', error.response);
          commit('setDataStatS6', 'fail');
        });
    },

    indexCair( { commit }, tanggal ){
      commit('setDataStatS', 'loading');
      
      JalinanKlaimAPI.indexCair( tanggal )
        .then( function( response ){
          commit('setDataS', response.data.model );
          commit('setDataStatS', 'success');
        })
        .catch( error => {
          commit('setDataS', error.response);
          commit('setDataStatS', 'fail');
        });
    },

    indexLaporanCair( { commit }, [awal, akhir] ){
      commit('setDataStatS', 'loading');
      
      JalinanKlaimAPI.indexLaporanCair( awal, akhir )
        .then( function( response ){
          commit('setDataS', response.data.model );
          commit('setDataStatS', 'success');
        })
        .catch( error => {
          commit('setDataS', error.response);
          commit('setDataStatS', 'fail');
        });
    },

    indexLaporanPenyebab( { commit }, [awal, akhir, cu] ){
      commit('setDataStatS', 'loading');
      
      JalinanKlaimAPI.indexLaporanPenyebab( awal, akhir, cu )
        .then( function( response ){
          commit('setDataS', response.data.model );
          commit('setDataStatS', 'success');
        })
        .catch( error => {
          commit('setDataS', error.response);
          commit('setDataStatS', 'fail');
        });
    },

    indexLaporanUsia( { commit }, [awal, akhir, cu] ){
      commit('setDataStatS', 'loading');
      
      JalinanKlaimAPI.indexLaporanUsia( awal, akhir, cu )
        .then( function( response ){
          commit('setDataS', response.data.model );
          commit('setDataStatS', 'success');
        })
        .catch( error => {
          commit('setDataS', error.response);
          commit('setDataStatS', 'fail');
        });
    },

    indexLaporanLama( { commit }, [awal, akhir, cu] ){
      commit('setDataStatS', 'loading');
      
      JalinanKlaimAPI.indexLaporanLama( awal, akhir, cu )
        .then( function( response ){
          commit('setDataS', response.data.model );
          commit('setDataStatS', 'success');
        })
        .catch( error => {
          commit('setDataS', error.response);
          commit('setDataStatS', 'fail');
        });
    },

    getVerifikator( {commit}, [verifikator_pengurus, verifikator_pengawas, verifikator_manajemen] ){
      commit('setDataStatVeri', 'loading');
      
      JalinanKlaimAPI.getVerifikator( verifikator_pengurus, verifikator_pengawas, verifikator_manajemen )
        .then( function( response ){
          commit('setDataVeri1', response.data.model1);
          commit('setDataVeri2', response.data.model2);
          commit('setDataVeri3', response.data.model3);
          commit('setDataStatVeri', 'success');
        })
        .catch(error => {
          commit('setPeriode', error.response);
          commit('setDataStatVeri', 'fail');
        });
    },

    getPencairan( {commit} ){
      commit('setPeriodeStat', 'loading');
      
      JalinanKlaimAPI.getPencairan()
        .then( function( response ){
          commit('setPeriode', response.data.model);
          commit('setPeriodeStat', 'success');
        })
        .catch(error => {
          commit('setPeriode', error.response);
          commit('setPeriodeStat', 'fail');
        });
    },

    cariData( {commit}, nik ){
      commit('setDataStat2', 'loading');
      
    JalinanKlaimAPI.cariData( nik )
        .then( function( response ){
          if(response.data.model){
            commit('setData2', response.data.model);
            commit('setDataStat2', 'success');
          }else{
            commit('setData2', response.data.form);
            commit('setRules', response.data.rules);
            commit('setOptions', response.data.options)
            commit('setDataStat2', 'fail');
          }
        })
        .catch(error => {
          commit('setData2', error.response);
          commit('setDataStat2', 'fail');
        });
    },

    cekData( {commit}, id ){
      commit('setDataStat', 'loading');
      
      JalinanKlaimAPI.cekData( id )
        .then( function( response ){
          commit('setData', response.data.form);
          commit('setDataStat', 'success');
        })
        .catch(error => {
          commit('setData', error.response);
          commit('setDataStat', 'fail');
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
    edit( {commit}, [nik, cu, tipe] ){
      commit('setDataStat', 'loading');
      
      JalinanKlaimAPI.edit( nik, cu, tipe )
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
    
    updateSelesai( {commit, state, dispatch}, id ){
      commit('setUpdateStat', 'loading');

      JalinanKlaimAPI.updateSelesai( id )
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

    updateVerifikasi( {commit, state, dispatch}, [id, user] ){
      commit('setUpdateStat', 'loading');

      JalinanKlaimAPI.updateVerifikasi( id, user )
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

    updateCair( {commit, state, dispatch}, [id, awal, akhir] ){
      commit('setUpdateStat', 'loading');

      JalinanKlaimAPI.updateCair( id, awal, akhir )
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

    updateCairBatal( {commit, state, dispatch}, [id, awal, akhir] ){
      commit('setUpdateStat', 'loading');

      JalinanKlaimAPI.updateCairBatal( id, awal, akhir )
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

    updateCairAll( {commit, state, dispatch}, [ awal, akhir ] ){
      commit('setUpdateStat', 'loading');

      JalinanKlaimAPI.updateCairAll( awal, akhir )
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
    resetData( {commit} ){
      commit('setData', {});
      commit('setDataStat', '');
    },
    resetUpdateStat( {commit} ){
      commit('setUpdateStat', '');
    },
    resetForm( {commit} ){
      commit('setData', {});
      commit('setRules', []);
      commit('setOptions', [])
      commit('setDataStat', '');
    },
  },

  // mutations
  mutations: {
    setData ( state, data ){
      state.data = data;
    },
    setData2 ( state, data ){
      state.data2 = data;
    },
    setPeriode ( state, data ){
      state.periode = data;
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
    setDataVeri1 ( state, data ){
      state.dataVeri1 = data;
    },
    setDataVeri2 ( state, data ){
      state.dataVeri2 = data;
    },
    setDataVeri3 ( state, data ){
      state.dataVeri3 = data;
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
    setPeriodeStat( state, status ){
      state.periodeStat = status;
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
    setDataStatVeri( state, status ){
      state.dataStatVeri = status;
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