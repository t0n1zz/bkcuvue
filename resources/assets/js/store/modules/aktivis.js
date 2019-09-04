import aktivisAPI from '../../api/aktivis.js';

export const aktivis = {
  namespaced: true,

  // state
  state: {
    data: {}, //single data
    dataS: [], //collection
    dataS1: [], //collection
    dataS2: [], //collection
    dataS3: [], //collection
    dataS4: [], //collection
    count: {},
    dataStat: '',
    dataStatS: '',
    dataStatS1: '',
    dataStatS2: '',
    dataStatS3: '',
    dataStatS4: '',
    countStat: '',
    update: [], //update data
    updateStat: '',
    rules: [], //laravel rules
    options: [], //laravel options
  },

  // getters
  getters: {
    data: state => state.data,
    dataS: state => state.dataS,
    dataS1: state => state.dataS1,
    dataS2: state => state.dataS2,
    dataS3: state => state.dataS3,
    dataS4: state => state.dataS4,
    count: state => state.count,
    dataStat: state => state.dataStat,
    dataStatS: state => state.dataStatS,
    dataStatS1: state => state.dataStatS1,
    dataStatS2: state => state.dataStatS2,
    dataStatS3: state => state.dataStatS3,
    dataStatS4: state => state.dataStatS4,
    countStat: state => state.countStat,
    update: state => state.update,
    updateStat: state => state.updateStat,
    rules: state => state.rules,
    options: state => state.options,
  },

  actions: {
    //load collection with params
    index( { commit }, [ p, tingkat, status ] ){
      if(status == 'aktif'){
        commit('setDataStatS', 'loading');
        aktivisAPI.index( p, tingkat, status )
          .then( function( response ){
            commit('setDataS', response.data.model );
            commit('setDataStatS', 'success');
          })
          .catch( error => {
            commit('setDataS', error.response);
            commit('setDataStatS', 'fail');
          });
      }else{
        commit('setDataStatS2', 'loading');
        aktivisAPI.index( p, tingkat, status )
          .then( function( response ){
            commit('setDataS2', response.data.model );
            commit('setDataStatS2', 'success');
          })
          .catch( error => {
            commit('setDataS2', error.response);
            commit('setDataStatS2', 'fail');
          });
      }
    },

    // load by cu
    indexCu( { commit }, [p, id, tingkat, status] ){
      if(status == 'aktif'){
        commit('setDataStatS', 'loading');
        aktivisAPI.indexCu( p, id, tingkat, status )
          .then( function( response ){
            commit('setDataS', response.data.model);
            commit('setDataStatS', 'success');
          })
          .catch( error => {
            commit('setDataS', error.response);
            commit('setDataStatS', 'fail');
          });
      }else{
        commit('setDataStatS2', 'loading');
        aktivisAPI.indexCu( p, id, tingkat, status )
          .then( function( response ){
            commit('setDataS2', response.data.model);
            commit('setDataStatS2', 'success');
          })
          .catch( error => {
            commit('setDataS2', error.response);
            commit('setDataStatS2', 'fail');
          });
      }
    },

    indexTingkat( { commit }, [ p, tingkat ] ){
      commit('setDataStatS', 'loading');
      
      aktivisAPI.indexTingkat( p, tingkat )
        .then( function( response ){
          commit('setDataS', response.data.model );
          commit('setDataStatS', 'success');
        })
        .catch( error => {
          commit('setDataS', error.response);
          commit('setDataStatS', 'fail');
        });
    },

    indexLembaga( { commit }, p  ){
      commit('setDataStatS', 'loading');
      
      aktivisAPI.indexLembaga( p )
        .then( function( response ){
          commit('setDataS', response.data.model );
          commit('setDataStatS', 'success');
        })
        .catch( error => {
          commit('setDataS', error.response);
          commit('setDataStatS', 'fail');
        });
    },

 

    // load by pekerjaan
    indexPekerjaan( {commit}, id ){
      commit('setDataStatS1', 'loading');
      
      aktivisAPI.indexPekerjaan( id )
        .then( function( response ){
          commit('setDataS1', response.data.model);
          commit('setDataStatS1', 'success');
        })
        .catch( error => {
          commit('setDataS1', error.response);
          commit('setDataStatS1', 'fail');
        });
    },

    // load by pendidikan
    indexPendidikan( {commit}, id ){
      commit('setDataStatS2', 'loading');
      
      aktivisAPI.indexPendidikan( id )
        .then( function( response ){
          commit('setDataS2', response.data.model);
          commit('setDataStatS2', 'success');
        })
        .catch( error => {
          commit('setDataS2', error.response);
          commit('setDataStatS2', 'fail');
        });
    },

    // load by organisasi
    indexOrganisasi( {commit}, id ){
      commit('setDataStatS3', 'loading');
      
      aktivisAPI.indexOrganisasi( id )
        .then( function( response ){
          commit('setDataS3', response.data.model);
          commit('setDataStatS3', 'success');
        })
        .catch( error => {
          commit('setDataS3', error.response);
          commit('setDataStatS3', 'fail');
        });
    },

    // load by diklat
    indexDiklat( {commit}, id ){
      commit('setDataStatS4', 'loading');
      
      aktivisAPI.indexDiklat( id )
        .then( function( response ){
          commit('setDataS4', response.data.model);
          commit('setDataStatS4', 'success');
        })
        .catch( error => {
          commit('setDataS4', error.response);
          commit('setDataStatS4', 'fail');
        });
    },

    // load by keluarga
    indexKeluarga( {commit}, id ){
      commit('setDataStatS', 'loading');
      
      aktivisAPI.indexKeluarga( id )
        .then( function( response ){
          commit('setDataS', response.data.model);
          commit('setDataStatS', 'success');
        })
        .catch( error => {
          commit('setDataS', error.response);
          commit('setDataStatS', 'fail');
        });
    },

    // load by keluarga
    indexAnggotaCu( {commit}, id ){
      commit('setDataStatS', 'loading');
      
      aktivisAPI.indexAnggotaCu( id )
        .then( function( response ){
          commit('setDataS', response.data.model);
          commit('setDataStatS', 'success');
        })
        .catch( error => {
          commit('setDataS', error.response);
          commit('setDataStatS', 'fail');
        });
    },

    cariData( {commit}, nik ){
      commit('setDataStat', 'loading');
      
      aktivisAPI.cariData( nik )
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

    create( {commit} ){
      commit('setDataStat', 'loading');
      
      aktivisAPI.create()
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

    createPekerjaan( {commit} ){
      commit('setDataStat', 'loading');
      
      aktivisAPI.createPekerjaan()
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

    createPendidikan( {commit} ){
      commit('setDataStat', 'loading');
      
      aktivisAPI.createPendidikan()
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

    createOrganisasi( {commit} ){
      commit('setDataStat', 'loading');
      
      aktivisAPI.createOrganisasi()
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

    createDiklat( {commit} ){
      commit('setDataStat', 'loading');
      
      aktivisAPI.createDiklat()
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

    createKeluarga( {commit} ){
      commit('setDataStat', 'loading');
      
      aktivisAPI.createKeluarga()
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

    createAnggotaCu( {commit} ){
      commit('setDataStat', 'loading');
      
      aktivisAPI.createAnggotaCu()
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

      aktivisAPI.store( form )
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

    savePekerjaan( {commit, state, dispatch}, [id, form] ){
      commit('setUpdateStat', 'loading');

      aktivisAPI.savePekerjaan( id, form )
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

    savePendidikan( {commit, state, dispatch}, [id, form] ){
      commit('setUpdateStat', 'loading');

      aktivisAPI.savePendidikan( id, form )
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

    saveOrganisasi( {commit, state, dispatch}, [id, form] ){
      commit('setUpdateStat', 'loading');

      aktivisAPI.saveOrganisasi( id, form )
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

    saveDiklat( {commit, state, dispatch}, [id, form] ){
      commit('setUpdateStat', 'loading');

      aktivisAPI.saveDiklat( id, form )
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

    saveKeluarga( {commit, state, dispatch}, [id, form] ){
      commit('setUpdateStat', 'loading');

    aktivisAPI.saveKeluarga( id, form )
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

    saveAnggotaCu( {commit, state, dispatch}, [id, form] ){
      commit('setUpdateStat', 'loading');

      aktivisAPI.saveAnggotaCu( id, form )
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
      
      aktivisAPI.edit( id )
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

      aktivisAPI.update( id, form )
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

      aktivisAPI.destroy( id )
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

    destroyPekerjaan( {commit, state, dispatch}, id ){
      commit('setUpdateStat', 'loading');

      aktivisAPI.destroyPekerjaan( id )
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

    destroyPendidikan( {commit, state, dispatch}, id ){
      commit('setUpdateStat', 'loading');

      aktivisAPI.destroyPendidikan( id )
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

    destroyOrganisasi( {commit, state, dispatch}, id ){
      commit('setUpdateStat', 'loading');

      aktivisAPI.destroyOrganisasi( id )
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

    destroyDiklat( {commit, state, dispatch}, id ){
      commit('setUpdateStat', 'loading');

      aktivisAPI.destroyDiklat( id )
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

    destroyKeluarga( {commit, state, dispatch}, id ){
      commit('setUpdateStat', 'loading');

      aktivisAPI.destroyKeluarga( id )
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

    destroyAnggotaCu( {commit, state, dispatch}, id ){
      commit('setUpdateStat', 'loading');

      aktivisAPI.destroyAnggotaCu( id )
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
      
      aktivisAPI.count()
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
    resetData( {commit} ){
      commit('setData', '');
      commit('setDataStat', '');
    },
    resetDataS( {commit} ){
      commit('setDataS', '');
      commit('setDataStatS', '');
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
    setCount ( state, data ){
      state.count = data;
    },
    setDataStat( state, status ){
      state.dataStat = status;
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