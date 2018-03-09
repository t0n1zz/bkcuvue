import UserAPI from '../../api/user.js';

export const user = {
  state: {
    userData: [],
    userDataLoad:'',
    userS: [],
    userLoadStatS: '',
    user: {},
    userLoadStat: '',
    userUpdate: '',
    userUpdateStat: '',
    userRules: [],
    userOption: []
  },

  actions: {
    // load single user
    loadUserData({commit}){
      commit('setUserDataLoadStat', 'loading');

      UserAPI.getUserData( )
        .then( function( response ){
          commit('setUserData', response.data.model);
          commit('setUserDataLoadStat', 'success');
        })
        .catch( error => {
          commit('setUserData', error.response);
          commit('setUserDataLoadStat', 'fail');
        });
    },

    // load all
    loadUserS( { commit }, p ){
      commit('setUserLoadStatS', 'loading');
      
      UserAPI.getUserS( p )
        .then( function( response ){
          commit('setUserS', response.data.model);
          commit('setUserLoadStatS', 'success');
        })
        .catch( error => {
          commit('setUserS', error.response);
          commit('setUserLoadStatS', 'fail');
        });
    },

    // load by cu
    loadUserCUS( { commit }, [p, id] ){
      commit('setUserLoadStatS', 'loading');
      
      UserAPI.getUserCUS( p, id )
        .then( function( response ){
          commit('setUserS', response.data.model);
          commit('setUserLoadStatS', 'success');
        })
        .catch( error => {
          commit('setUserS', error.response);
          commit('setUserLoadStatS', 'fail');
        });
    },

    // load single data
    loadUser( {commit}, id ){
      commit('setUserLoadStat', 'loading');
      
      UserAPI.getUser( id )
        .then( function( response ){
          commit('setUser', response.data );
          commit('setUserLoadStat', 'success');
        })
        .catch( error => {
          commit('setUserS', error.response);
          commit('setUserLoadStatS', 'fail');
        });
    },

    // create page
    createUser( {commit} ){
      commit('setUserLoadStat', 'loading');
      
      UserAPI.createUser()
        .then( function( response ){
          commit('setUser', response.data.form );
          commit('setUserRules', response.data.rules);
          commit('setUserOption', response.data.option)
          commit('setUserLoadStat', 'success');
        })
        .catch( function(){
          commit('setUser', []);
          commit('setUserRules', []);
          commit('setUserOption', [])
          commit('setUserLoadStat', 'fail');
        });
    },

    // store data
    storeUser( {commit, state, dispatch}, form ){
      commit('setUserUpdateStat', 'loading');

      UserAPI.storeUser( form )
        .then( function( response ){
          if(response.data.saved){
            commit('setUserUpdate', response.data);
            commit('setUserUpdateStat', 'success');
          }else{
            commit('setUserUpdateStat', 'fail');
          }
        })
        .catch(error => {
          if (error.response.status) {
            this.errors = error.response.data;
            commit('setUserUpdate', this.errors);         
          }else{
            commit('setUserUpdate', 'Oops terjadi kesalahan :(');
          }
          commit('setUserUpdateStat', 'fail');
        });
    },

    // edit page
    editUser( {commit}, id ){
      commit('setUserLoadStat', 'loading');
      
      UserAPI.editUser( id )
        .then( function( response ){
          commit('setUser', response.data.form );
          commit('setUserRules', response.data.rules);
          commit('setUserOption', response.data.option)
          commit('setUserLoadStat', 'success');
        })
        .catch( function(){
          commit('setUser', []);
          commit('setUserRules', []);
          commit('setUserOption', [])
          commit('setUserLoadStat', 'fail');
        });
    },

    // update data
    updateUser( {commit, state, dispatch}, [id, form] ){
      commit('setUserUpdateStat', form);

      UserAPI.updateUser( id, form )
        .then( function( response ){
          if(response.data.saved){
            commit('setUserUpdate', response.data);
            commit('setUserUpdateStat', 'success');
          }else{
            commit('setUserUpdateStat', 'fail');
          }
        })
        .catch(error => {
          if (error.response.status) {
            this.errors = error.response.data;
            commit('setUserUpdate', this.errors);         
          }else{
            commit('setUserUpdate', 'Oops terjadi kesalahan :(');
          }
          commit('setUserUpdateStat', 'fail');
        });
    },

    // reset password
    updateUserResetPassword( {commit, state, dispatch}, id ){
      commit('setUserUpdateStat', 'loading');

      UserAPI.updateResetPassword( id )
        .then( function( response ){
          commit('setUserUpdate', response.data);
          commit('setUserUpdateStat', 'success');
        })
        .catch(error => {
          if (error.response.status) {
            this.errors = error.response.data;
            commit('setUserUpdate', this.errors);
            commit('setUserUpdateStat', 'fail');
          }
        });
    },

    // update status
    updateUserStatus( {commit, state, dispatch}, id ){
      commit('setUserUpdateStat', 'loading');

      UserAPI.updateStatus( id )
        .then( function( response ){
          commit('setUserUpdate', response.data);
          commit('setUserUpdateStat', 'success');
        })
        .catch(error => {
          if (error.response.status) {
            this.errors = error.response.data;
            commit('setUserUpdate', this.errors);
            commit('setUserUpdateStat', 'fail');
          }
        });
    },

    // delete user
    deleteUser( {commit, state, dispatch}, id ){
      commit('setUserUpdateStat', 'loading');

      UserAPI.deleteUser( id )
        .then( function( response ){
          commit('setUserUpdate', response.data);
          commit('setUserUpdateStat', 'success');
        })
        .catch( error => {
          commit('setUserS', error.response);
          commit('setUserLoadStatS', 'fail');
        });
    },

    // reset
    resetUserUpdateStat( {commit} ){
      commit('setUserUpdateStat', '');
    }
  },

  mutations: {
    setUserData ( state, data ){
      state.userData = data;
    },
    setUserDataLoadStat( state, status ){
      state.userDataLoad = status;
    },
    setUserS ( state, userS ){
      state.userS = userS;
    },
    setUserLoadStatS( state, status ){
      state.userLoadStatS = status;
    },
    setUser ( state, user ){
      state.user = user;
    },
    setUserLoadStat( state, status ){
      state.userLoadStat = status;
    },
    setUserUpdateStat( state, status ){
      state.userUpdateStat = status;
    },
    setUserUpdate( state, data ){
      state.userUpdate = data;
    },
    setUserRules( state, rules ){
      state.userRules = rules;
    },
    setUserOption( state, option ){
      state.userOption = option;
    }
  },

  getters: {
    getUserData( state ){
      return state.userData;
    },
    getUserDataLoadStat( state ){
      return state.userDataLoad;
    },
    getUserS( state ){
      return state.userS;
    },
    getUserLoadStatS ( state ){
      return state.userLoadStatS;
    },
    getUser( state ){
      return state.user;
    },
    getUserLoadStat ( state ){
      return state.userLoadStat;
    },
    getUserUpdateStat ( state ){
      return state.userUpdateStat;
    },
    getUserUpdate ( state ){
      return state.userUpdate;
    },
    getUserRules ( state ){
      return state.userRules;
    },
    getUserOption ( state ){
      return state.userOption;
    }
  }
}