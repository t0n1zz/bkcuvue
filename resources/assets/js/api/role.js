export default {
  
  getRoleS: function( p ){
    return api.call('get', '/api/role', {params: p});
  },

  getRoleAll: function(){
    return api.call('get', '/api/role_all');
  },

  getRoleTipe: function(tipe){
    return api.call('get', '/api/role_tipe/' + tipe);
  },


  getRolePermission: function( id ){
    return api.call('get', '/api/role_permission/' + id);
  },

  getRole: function( id ){
    return api.call('get', '/api/role/' + id);
  },

  storeRole: function ( form ){
    return api.call('post', '/api/role/store', form);
  },

  updateRole: function ( id, form ){
    return api.call('put', '/api/role/update/' + id, form);
  },

  deleteRole: function( id ){
    return api.call('delete', '/api/role/' + id);
  }
}