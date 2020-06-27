import UserAPI from '../../api/user.js';

export const user = {
  namespaced: true,

  // state
  state: {
    notification: {},
    unreadNotification:'',
    notifStat: '',
    markNotifStat:'',
    data: {}, //single data
    dataS: [], //collection
    dataS1: [], //collection
    dataS2: [], //collection
    dataS3: [], //collection
    count: {},
    dataStat: '',
    dataStatS: '',
    dataStatS1: '',
    dataStatS2: '',
    dataStatS3: '',
    countStat: '',
    update: [], //update data
    updateStat: '',
    rules: [], //laravel rules
    options: [], //laravel options
  },

  // getters
  getters: {
    notification: state => state.notification,
    unreadNotification: state => state.unreadNotification,
    notifStat: state => state.notifStat,
    markNotifStat: state => state.markNotifStat,
    data: state => state.data,
    dataS: state => state.dataS,
    dataS1: state => state.dataS1,
    dataS2: state => state.dataS2,
    dataS3: state => state.dataS3,
    count: state => state.count,
    dataStat: state => state.dataStat,
    dataStatS: state => state.dataStatS,
    dataStatS1: state => state.dataStatS1,
    dataStatS2: state => state.dataStatS2,
    dataStatS3: state => state.dataStatS3,
    countStat: state => state.countStat,
    update: state => state.update,
    updateStat: state => state.updateStat,
    rules: state => state.rules,
    options: state => state.options,
  },

  actions: {

    //load collection with params
    index( { commit }, p ){
      commit('setDataStatS', 'loading');
      
      UserAPI.index( p )
        .then( function( response ){
          commit('setDataS', response.data.model );
          commit('setDataStatS', 'success');
        })
        .catch( error => {
          commit('setDataS', error.response);
          commit('setDataStatS', 'fail');
        });
    },

    indexActivity( { commit }, page ){
      commit('setDataStatS', 'loading');
      
      UserAPI.indexActivity( page )
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
      
      UserAPI.indexCu( p, id )
        .then( function( response ){
          commit('setDataS', response.data.model);
          commit('setDataStatS', 'success');
        })
        .catch( error => {
          commit('setDataS', error.response);
          commit('setDataStatS', 'fail');
        });
    },

    indexCuPermission( { commit }, id ){
      commit('setDataStatS1', 'loading');
      commit('setDataStatS2', 'loading');
      commit('setDataStatS3', 'loading');
      
      UserAPI.indexCuPermission( id )
        .then( function( response ){
          commit('setDataS1', response.data.model1);
          commit('setDataS2', response.data.model2);
          commit('setDataS3', response.data.model3);
          commit('setDataStatS1', 'success');
          commit('setDataStatS2', 'success');
          commit('setDataStatS3', 'success');
        })
        .catch( error => {
          commit('setDataS1', error.response);
          commit('setDataS2', error.response);
          commit('setDataS3', error.response);
          commit('setDataStatS1', 'fail');
          commit('setDataStatS2', 'fail');
          commit('setDataStatS3', 'fail');
        });
    },

    //load collection without params
    indexAll( { commit } ){
      commit('setDataStatS', 'loading');
      
      UserAPI.indexAll()
        .then( function( response ){
          commit('setDataS', response.data.model );
          commit('setDataStatS', 'success');
        })
        .catch( error => {
          commit('setDataS', error.response);
          commit('setDataStatS', 'fail');
        });
    },

    //load cu pus
    indexPus( {commit}, id ){
      commit('setDataStatS', 'loading');
      
      UserAPI.indexPus( id )
        .then( function( response ){
          commit('setDataS', response.data.model);
          commit('setDataStatS', 'success');
        })
        .catch( error => {
          commit('setDataS', error.response);
          commit('setDataStatS', 'fail');
        });
    },

    getActivity( { commit }, [ page, id ] ){
      commit('setDataStatS', 'loading');
      
      UserAPI.getActivity( page, id )
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
      
      UserAPI.create()
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

      UserAPI.store( form )
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
      
      UserAPI.edit( id )
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

    editHakAkses( {commit, state, dispatch}, id ){
      commit('setDataStat', 'loading');
      
      UserAPI.editHakAkses( id )
        .then( function( response ){
          commit('setData', response.data.model);
          commit('setDataStat', 'success');
        })
        .catch(error => {
          commit('setData', error.response);
          commit('setDataStat', 'fail');
        });
    },

    // update data
    update( {commit, state, dispatch}, [id, form] ){
      commit('setUpdateStat', 'loading');

      UserAPI.update( id, form )
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

    updateFoto( {commit, state, dispatch}, [id, form] ){
      commit('setUpdateStat', 'loading');

      UserAPI.updateFoto( id, form )
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

    updateIdentitas( {commit, state, dispatch}, [id, form] ){
      commit('setUpdateStat', 'loading');

      UserAPI.updateIdentitas( id, form )
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

    updatePassword( {commit, state, dispatch}, [id, form] ){
      commit('setUpdateStat', 'loading');

      UserAPI.updatePassword( id, form )
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

    updateResetPassword( {commit, state, dispatch}, id ){
      commit('setUpdateStat', 'loading');

      UserAPI.updateResetPassword( id )
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

    updateStatus( {commit, state, dispatch}, id ){
      commit('setUpdateStat', 'loading');

      UserAPI.updateStatus( id )
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

    updateHakAkses( {commit, state, dispatch}, [id, form] ){
      commit('setUpdateStat', 'loading');

      UserAPI.updateHakAkses( id, form )
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

      UserAPI.destroy( id )
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

    getNotif( { commit }){
      commit('setNotifStat', 'loading');
      
      UserAPI.getNotif()
        .then( function( response ){
          commit('setNotification', response.data.notification );
          commit('setUnreadNotification', response.data.unreadNotification );
          commit('setNotifStat', 'success');
        })
        .catch( error => {
          commit('setNotification', error.response);
          commit('setNotifStat', 'fail');
        });
    },

    markAllNotifRead( { commit } ){
      commit('setMarkNotifStat', 'loading');
      
      UserAPI.markAllNotifRead()
        .then( function( response ){
          commit('setMarkNotifStat', 'success');
        })
        .catch( error => {
          commit('setMarkNotifStat', 'fail');
        });
    },

    markNotifRead( { commit }, id){
      commit('setMarkNotifStat', 'loading');
      
      UserAPI.markNotifRead(id)
        .then( function( response ){
          commit('setMarkNotifStat', 'success');
        })
        .catch( error => {
          commit('setMarkNotifStat', 'fail');
        });
    },

    count( { commit } ){
      commit('setCountStat', 'loading');
      
      UserAPI.count()
        .then( function( response ){
          commit('setCount', response.data.model);
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
  },

  // mutations
  mutations: {
    setNotification ( state, data ){
      state.notification = data;
    },
    setUnreadNotification ( state, data ){
      state.unreadNotification = data;
    },
    setNotifStat ( state, data ){
      state.notifStat = data;
    },
    setMarkNotifStat( state, status ){
      state.markNotifStat = status;
    },
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
    setHakAkses( state, [key, value]){
      state.data[key] = value;
    }
  }

}