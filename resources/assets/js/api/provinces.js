export default {
  
  index: function( p ){
    return api.call('get', '/api/provinces' , {params: p});
  },

  get: function(){
    return api.call('get', '/api/provinces/get');
  },

  create: function(){
    return api.call('get', '/api/provinces/create');
  },

  store: function ( form ){
    return api.call('post', '/api/provinces/store', form);
  },

  edit: function( id ){
    return api.call('get', '/api/provinces/edit/' + id);
  },

  update: function ( id, form ){
    return api.call('post', '/api/provinces/update/' + id, form);
  },

  destroy: function( id ){
    return api.call('delete', '/api/provinces/' + id);
  }
}