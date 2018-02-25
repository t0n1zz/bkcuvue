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
    setUserS ( state, UserS ){
      state.userS = UserS;
    },
    setUserLoadStatS( state, status ){
      state.userLoadStatS = status;
    },
    setUser ( state, User ){
      state.user = User;
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
      return state.User;
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