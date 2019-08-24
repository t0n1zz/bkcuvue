import AnggotaCuAPI from '../../api/anggotaCu.js';
import AnggotaCuDraftAPI from '../../api/anggotaCuDraft.js';

export const anggotaCu = {
  namespaced: true,

  // state
  state: {
    data: {}, //single data //single data
    dataS: [],
    dataProduk: [],//collection
    dataDeletedS: [], //collection
    count: {},
    headerDataS: [],
    dataStat: '',
    dataProdukStat: '',
    dataStatS: '',
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
    dataS: state => state.dataS,
    dataProduk: state => state.dataProduk,
    dataDeletedS: state => state.dataDeletedS,
    count: state => state.count,
    headerDataS: state => state.headerDataS,
    dataStat: state => state.dataStat,
    dataProdukStat: state => state.dataProdukStat,
    dataStatS: state => state.dataStatS,
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
      
      AnggotaCuAPI.index( p )
        .then( function( response ){
          commit('setDataS', response.data.model );
          commit('setDataStatS', 'success');
        })
        .catch( error => {
          commit('setDataS', error.response);
          commit('setDataStatS', 'fail');
        });
    },

    indexCu( {commit}, [p, id] ){
      commit('setDataStatS', 'loading');
      
      AnggotaCuAPI.indexCu( p, id )
        .then( function( response ){
          if(response.data.model){
            commit('setDataS', response.data.model );
            commit('setDataStatS', 'success');
          }else{
            commit('setDataS', response );
            commit('setDataStatS', 'fail');
          }
        })
        .catch( error => {
          commit('setDataS', error.response);
          commit('setDataStatS', 'fail');
        });
    }, 

    indexCuDraft( { commit }, id ){
      commit('setDataStatS', 'loading');
      
      AnggotaCuDraftAPI.index( id )
        .then( function( response ){
          commit('setDataS', response.data.model);
          commit('setDataStatS', 'success');
        })
        .catch( error => {
          commit('setDataS', error.response);
          commit('setDataStatS', 'fail');
        });
    },

    indexProduk( { commit }, [id, cu] ){
      commit('setDataProdukStat', 'loading');
      
      AnggotaCuAPI.indexProduk( id, cu )
        .then( function( response ){
          commit('setDataProduk', response.data.model );
          commit('setDataProdukStat', 'success');
        })
        .catch( error => {
          commit('setDataProduk', error.response);
          commit('setDataProdukStat', 'fail');
        });
    },

    cariData( {commit}, nik ){
      commit('setDataStat', 'loading');
      
      AnggotaCuAPI.cariData( nik )
        .then( function( response ){
          if(response.data.model){
            commit('setData', response.data.model);
            commit('setDataStat', 'success');
          }else{
            commit('setData', response.data.form);
            commit('setRules', response.data.rules);
            commit('setOptions', response.data.options)
            commit('setDataStat', 'fail');
          }
        })
        .catch(error => {
          commit('setData', error.response);
          commit('setDataStat', 'fail');
        });
    },

    cariData2( {commit}, [ idCu, noba ] ){
      commit('setDataStat', 'loading');
      
      AnggotaCuAPI.cariData2( idCu, noba )
        .then( function( response ){
          if(response.data.model){
            commit('setData', response.data.model);
            commit('setDataStat', 'success');
          }else{
            commit('setData', response.data.form);
            commit('setRules', response.data.rules);
            commit('setOptions', response.data.options)
            commit('setDataStat', 'fail');
          }
        })
        .catch(error => {
          commit('setData', error.response);
          commit('setDataStat', 'fail');
        });
    },

    // create page
    create( {commit} ){
      commit('setDataStat', 'loading');
      
      AnggotaCuAPI.create()
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

      AnggotaCuAPI.store( form )
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

    storeProduk( {commit, state, dispatch}, [id, form] ){
      commit('setUpdateStat', 'loading');

      AnggotaCuAPI.storeProduk( id, form )
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

    storeDraft( {commit, state, dispatch}, id ){
      commit('setUpdateStat', 'loading');

      AnggotaCuDraftAPI.store( id )
        .then( function( response ){
          if(response.data.saved){
            commit('setUpdateStat', 'success');
          }else{
            commit('setUpdateStat', 'fail');
          }
          commit('setUpdate', response.data);
        })
        .catch(error => {
          commit('setUpdate', error.response);   
          commit('setUpdateStat', 'fail');
        });
    },


    // edit page
    edit( {commit}, id ){
      commit('setDataStat', 'loading');
      
      AnggotaCuAPI.edit( id )
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

    editDraft( {commit}, id ){
      commit('setDataStat', 'loading');
      
      AnggotaCuDraftAPI.edit( id )
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

      AnggotaCuAPI.update( id, form )
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

    updateProduk( {commit, state, dispatch}, [id, form] ){
      commit('setUpdateStat', 'loading');

      AnggotaCuAPI.updateProduk( id, form )
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
    
    updateDraft( {commit, state, dispatch}, [id, form] ){
      commit('setUpdateStat', 'loading');

      AnggotaCuDraftAPI.update( id, form )
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

      AnggotaCuAPI.restore( id )
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
    destroy( {commit, state, dispatch}, [id, cu] ){
      commit('setUpdateStat', 'loading');

      AnggotaCuAPI.destroy( id, cu )
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
    destroyProduk( {commit, state, dispatch}, id ){
      commit('setUpdateStat', 'loading');

      AnggotaCuAPI.destroyProduk( id )
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
    destroyDraft( {commit, state, dispatch}, id ){
      commit('setUpdateStat', 'loading');

      AnggotaCuDraftAPI.destroy( id )
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
    destroyDraftAll( {commit, state, dispatch} ){
      commit('setUpdateStat', 'loading');

      AnggotaCuDraftAPI.destroyAll()
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

    uploadExcel( {commit, state, dispatch}, form ){
      commit('setUpdateStat', 'loading');

      AnggotaCuAPI.uploadExcel( form )
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
          commit('setUpdateStat', 'fail');a
        });
    },

    uploadExcelNew( {commit, state, dispatch}, form ){
      commit('setUpdateStat', 'loading');

      AnggotaCuAPI.uploadExcelNew( form )
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

    count( { commit } ){
      commit('setCountStat', 'loading');
      
      AnggotaCuAPI.count()
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
    setDataProduk ( state, data ){
      state.dataProduk = data;
    },
    setDataS ( state, data ){
      state.dataS = data;
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
    setDataProdukStat( state, status ){
      state.dataProdukStat = status;
    },
    setDataStatS( state, status ){
      state.dataStatS = status;
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