export default {
  
  getPusS: function( p ){
    return api.call('get', '/api/pus', {params: p});
  },

  getPusAll: function(){
    return api.call('get', '/api/pus_all');
  },

  getPus: function( id ){
    return api.call('get', '/api/pus/' + id);
  },

  storePus: function ( form ){
    return api.call('post', '/api/pus/store', form);
  },

  updatePus: function ( id, form ){
    return api.call('put', '/api/pus/update/' + id, form);
  },

  deletePus: function( id ){
    return api.call('delete', '/api/pus/' + id);
  }
}