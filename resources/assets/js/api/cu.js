export default {
  
  index: function( p ){
    return api.call('get', '/api/cu' , {params: p});
  },

  get: function(){
    return api.call('get', '/api/cu/get');
  },

  getHeader: function(){
    return api.call('get', '/api/cu/getHeader');
  },

  getPus: function( id ){
    return api.call('get', '/api/cu/getPus/' + id);
  },

  create: function(){
    return api.call('get', '/api/cu/create');
  },

  store: function ( form ){
    return api.call('post', '/api/cu/store', form);
  },

  edit: function( id ){
    return api.call('get', '/api/cu/edit/' + id);
  },

  update: function ( id, form ){
    return api.call('post', '/api/cu/update/' + id, form);
  },

  destroy: function( id ){
    return api.call('delete', '/api/cu/' + id);
  },

  count: function(){
    return api.call('get', '/api/cu/count');
  },
}