import UserAPI from '../../api/user.js';

export const user = {
  namespaced: true,

  // state
  state: {
    profile: {},
    notification: {},
    profileStat: '',
    markNotifStat:'',
    data: {}, //single data
    dataS: [], //collection
    dataStat: '',
    dataStatS: '',
    update: [], //update data
    updateStat: '',
    rules: [], //laravel rules
    options: [], //laravel options
  },

  // getters
  getters: {
    profile: state => state.profile,
    notification: state => state.notification,
    profileStat: state => state.profileStat,
    markNotifStat: state => state.markNotifStat,
    data: state => state.data,
    dataS: state => state.dataS,
    dataStat: state => state.dataStat,
    dataStatS: state => state.dataStatS,
    update: state => state.update,
    updateStat: state => state.updateStat,
    rules: state => state.rules,
    options: state => state.options,
  },

  actions: {

    //user profil
    profile( { commit }){
      commit('setProfileStat', 'loading');
      
      UserAPI.profile()
        .then( function( response ){
          commit('setProfile', response.data.model );
          commit('setNotification', response.data.notification );
          commit('setProfileStat', 'success');
        })
        .catch( error => {
          commit('setProfile', error.response);
          commit('setProfileStat', 'fail');
        });
    },

    markNotifRead( { commit } ){
      commit('setMarkNotifStat', 'loading');
      
      UserAPI.markNotifRead()
        .then( function( response ){
          commit('setMarkNotifStat', 'success');
        })
        .catch( error => {
          commit('setMarkNotifStat', 'fail');
        });
    },

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

    // reset
    resetUpdateStat( {commit} ){
      commit('setUpdateStat', '');
    },
  },

  // mutations
  mutations: {
    setProfile ( state, profile ){
      state.profile = profile;
    },
    setNotification ( state, notification ){
      state.notification = notification;
    },
    setProfileStat( state, status ){
      state.profileStat = status;
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
    setDataStat( state, status ){
      state.dataStat = status;
    },
    setDataStatS( state, status ){
      state.dataStatS = status;
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