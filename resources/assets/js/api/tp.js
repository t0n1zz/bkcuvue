export default {
  
  index: function( p ){
    return api.call('get', '/api/tp' , {params: p});
  },

  get: function(){
    return api.call('get', '/api/tp/get');
  },

  indexCu: function( p, id ){
    return api.call('get', '/api/tp/indexCu/' + id, {params: p});
  },

  getCu: function( id ){
    return api.call('get', '/api/tp/getCu/' + id);
  },

  create: function(){
    return api.call('get', '/api/tp/create');
  },

  store: function ( form ){
    return api.call('post', '/api/tp/store', form);
  },

  edit: function( id ){
    return api.call('get', '/api/tp/edit/' + id);
  },

  update: function ( id, form ){
    return api.call('post', '/api/tp/update/' + id, form);
  },

  destroy: function( id ){
    return api.call('delete', '/api/tp/' + id);
  },

  count: function( p ){
    return api.call('get', '/api/tp/count');
  },
}