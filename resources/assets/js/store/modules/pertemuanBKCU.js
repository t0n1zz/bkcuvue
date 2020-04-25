import PERTEMUANBKCUAPI from '../../api/pertemuanBKCU.js';

export const pertemuanBKCU = {
  namespaced: true,

  // state
  state: {
    data: {},
    data2: {}, //single data
    dataS: [], //collection
    dataS2: [], //collection
    periode: [],
    count: {},
    count2: {},
    dataStat: '',
    dataStat2: '',
    periodeStat: '',
    dataStatS: '',
    dataStatS2: '',
    countStat: '',
    countStat2: '',
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
    dataS2: state => state.dataS2,
    periode: state => state.periode,
    count: state => state.count,
    count2: state => state.count2,
    dataStat: state => state.dataStat,
    dataStat2: state => state.dataStat2,
    periodeStat: state => state.periodeStat,
    dataStatS: state => state.dataStatS,
    dataStatS2: state => state.dataStatS2,
    countStat: state => state.countStat,
    countStat2: state => state.countStat2,
    update: state => state.update,
    updateStat: state => state.updateStat,
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
      commit('setDataStat2', 'loading');
      
      PERTEMUANBKCUAPI.checkPanitia(kegiatan_id, aktivis_id)
        .then( function( response ){
          commit('setData2', response.data.model );
          commit('setDataStat2', 'success');
        })
        .catch( error => {
          commit('setData2', error.response);
          commit('setDataStat2', 'fail');
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

    updatePesertaHadir( {commit, state, dispatch}, id ){
      commit('setUpdateStat', 'loading');

      PERTEMUANBKCUAPI.updatePesertaHadir( id )
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
    setPeriode ( state, data ){
      state.periode = data;
    },
    setDataS ( state, data ){
      state.dataS = data;
    },
    setDataS2 ( state, data ){
      state.dataS2 = data;
    },
    setCount ( state, data ){
      state.count = data;
    },
    setCount2 ( state, data ){
      state.count2 = data;
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
    setDataStatS2( state, status ){
      state.dataStatS2 = status;
    },
    setCountStat( state, status ){
      state.countStat = status;
    },
    setCountStat2( state, status ){
      state.countStat2 = status;
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