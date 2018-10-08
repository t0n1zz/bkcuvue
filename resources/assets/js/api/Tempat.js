export default {
  
  index: function( p ){
    return api.call('get', '/api/tempat' , {params: p});
  },

  get: function( id ){
    return api.call('get', '/api/tempat/get/' + id);
  },

  create: function(){
    return api.call('get', '/api/tempat/create');
  },

  store: function ( form ){
    return api.call('post', '/api/tempat/store', form);
  },

  edit: function( id ){
    return api.call('get', '/api/tempat/edit/' + id);
  },

  update: function ( id, form ){
    return api.call('post', '/api/tempat/update/' + id, form);
  },

  destroy: function( id ){
    return api.call('delete', '/api/tempat/' + id);
  }
}