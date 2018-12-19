import RoleAPI from '../../api/role.js';

export const role = {
  state: {
    roleData: [],
    roleDataLoad:'',
    roleS: [],
    roleLoadStatS: '',
    role: {},
    roleLoadStat: '',
    roleUpdate: '',
    roleUpdateStat: '',
    roleRules: [],
    roleOption: []
  },

  actions: {
    loadRoleS( { commit }, p ){
      commit('setRoleLoadStatS', 'loading');
      
      RoleAPI.getRoleS( p )
        .then( function( response ){
          commit('setRoleS', response.data.model);
          commit('setRoleLoadStatS', 'success');
        })
        .catch( error => {
          commit('setRoleS', error.response);
          commit('setRoleLoadStatS', 'fail');
        });
    },
    loadRoleAll( { commit } ){
      commit('setRoleLoadStatS', 'loading');
      
      RoleAPI.getRoleAll()
        .then( function( response ){
          commit('setRoleS', response.data.model);
          commit('setRoleLoadStatS', 'success');
        })
        .catch( function(){
          commit('setRoleS', []);
          commit('setRoleLoadStatS', 'fail');
        });
    },
    loadRoleTipe( { commit }, tipe ){
      commit('setRoleLoadStatS', 'loading');
      
      RoleAPI.getRoleTipe( tipe )
        .then( function( response ){
          commit('setRoleS', response.data.model);
          commit('setRoleLoadStatS', 'success');
        })
        .catch( function(){
          commit('setRoleS', []);
          commit('setRoleLoadStatS', 'fail');
        });
    },
    loadRolePermission( {commit}, id ){
      commit('setRoleLoadStat', 'loading');
      
      RoleAPI.getRolePermission( id )
        .then( function( response ){
          commit('setRoleData', response.data.model );
          commit('setRoleDataLoadStat', 'success');
        })
        .catch( error => {
          commit('setRoleData', error.response);
          commit('setRoleDataLoadStat', 'fail');
        });
    },
    loadRole( {commit}, id ){
      commit('setRoleLoadStat', 'loading');
      
      RoleAPI.getRole( id )
        .then( function( response ){
          commit('setRole', response.data );
          commit('setRoleLoadStat', 'success');
        })
        .catch( error => {
          commit('setRoleS', error.response);
          commit('setRoleLoadStatS', 'fail');
        });
    },
    createRole( {commit} ){
      commit('setRoleLoadStat', 'loading');
      
      RoleAPI.createRole()
        .then( function( response ){
          commit('setRole', response.data.form );
          commit('setRoleRules', response.data.rules);
          commit('setRoleOption', response.data.option)
          commit('setRoleLoadStat', 'success');
        })
        .catch( function(){
          commit('setRole', []);
          commit('setRoleRules', []);
          commit('setRoleOption', [])
          commit('setRoleLoadStat', 'fail');
        });
    },
    storeRole( {commit, state, dispatch}, form ){
      commit('setRoleUpdateStat', 'loading');

      RoleAPI.storeRole( form )
        .then( function( response ){
          if(response.data.saved){
            commit('setRoleUpdate', response.data);
            commit('setRoleUpdateStat', 'success');
          }else{
            commit('setRoleUpdateStat', 'fail');
          }
        })
        .catch(error => {
          if (error.response.status) {
            this.errors = error.response.data;
            commit('setRoleUpdate', this.errors);         
          }else{
            commit('setRoleUpdate', 'Oops terjadi kesalahan :(');
          }
          commit('setRoleUpdateStat', 'fail');
        });
    },
    editRole( {commit}, id ){
      commit('setRoleLoadStat', 'loading');
      
      RoleAPI.editRole( id )
        .then( function( response ){
          commit('setRole', response.data.form );
          commit('setRoleRules', response.data.rules);
          commit('setRoleOption', response.data.option)
          commit('setRoleLoadStat', 'success');
        })
        .catch( function(){
          commit('setRole', []);
          commit('setRoleRules', []);
          commit('setRoleOption', [])
          commit('setRoleLoadStat', 'fail');
        });
    },
    updateRole( {commit, state, dispatch}, [id, form] ){
      commit('setRoleUpdateStat', form);

      RoleAPI.updateRole( id, form )
        .then( function( response ){
          if(response.data.saved){
            commit('setRoleUpdate', response.data);
            commit('setRoleUpdateStat', 'success');
          }else{
            commit('setRoleUpdateStat', 'fail');
          }
        })
        .catch(error => {
          if (error.response.status) {
            this.errors = error.response.data;
            commit('setRoleUpdate', this.errors);         
          }else{
            commit('setRoleUpdate', 'Oops terjadi kesalahan :(');
          }
          commit('setRoleUpdateStat', 'fail');
        });
    },
    deleteRole( {commit, state, dispatch}, id ){
      commit('setRoleUpdateStat', 'loading');

      RoleAPI.deleteRole( id )
        .then( function( response ){
          commit('setRoleUpdate', response.data);
          commit('setRoleUpdateStat', 'success');
        })
        .catch( error => {
          commit('setRoleS', error.response);
          commit('setRoleLoadStatS', 'fail');
        });
    },
    resetRoleUpdateStat( {commit} ){
      commit('setRoleUpdateStat', '');
    }
  },

  mutations: {
    setRoleData ( state, data ){
      state.roleData = data;
    },
    setRoleDataLoadStat( state, status ){
      state.roleDataLoad = status;
    },
    setRoleS ( state, RoleS ){
      state.roleS = RoleS;
    },
    setRoleLoadStatS( state, status ){
      state.roleLoadStatS = status;
    },
    setRole ( state, Role ){
      state.role = Role;
    },
    setRoleLoadStat( state, status ){
      state.roleLoadStat = status;
    },
    setRoleUpdateStat( state, status ){
      state.roleUpdateStat = status;
    },
    setRoleUpdate( state, data ){
      state.roleUpdate = data;
    },
    setRoleRules( state, rules ){
      state.roleRules = rules;
    },
    setRoleOption( state, option ){
      state.roleOption = option;
    }
  },

  getters: {
    getRoleData( state ){
      return state.roleData;
    },
    getRoleDataLoadStat( state ){
      return state.roleDataLoad;
    },
    getRoleS( state ){
      return state.roleS;
    },
    getRoleLoadStatS ( state ){
      return state.roleLoadStatS;
    },
    getRole( state ){
      return state.Role;
    },
    getRoleLoadStat ( state ){
      return state.roleLoadStat;
    },
    getRoleUpdateStat ( state ){
      return state.roleUpdateStat;
    },
    getRoleUpdate ( state ){
      return state.roleUpdate;
    },
    getRoleRules ( state ){
      return state.roleRules;
    },
    getRoleOption ( state ){
      return state.roleOption;
    }
  }
}