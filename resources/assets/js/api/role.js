export default {
  
  getRoleS: function( p ){
    return axios.get('/api/role', {params: p});
  },

  getRoleAll: function(){
    return axios.get('/api/role_all');
  },

  getRoleTipe: function(tipe){
    return axios.get('/api/role_tipe/' + tipe);
  },


  getRolePermission: function( id ){
    return axios.get('/api/role_permission/' + id);
  },

  getRole: function( id ){
    return axios.get('/api/role/' + id);
  },

  storeRole: function ( form ){
    return axios.post('/api/role/store', form);
  },

  updateRole: function ( id, form ){
    return axios.put('/api/role/update/' + id, form);
  },

  deleteRole: function( id ){
    return axios.delete('/api/role/' + id);
  }
}