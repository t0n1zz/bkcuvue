export default {
  
  index: function( p ){
    return api.call('get', '/api/produkcu' , {params: p});
  },

  indexCu: function( p, id ){
    return api.call('get', '/api/produkcu/indexCu/' + id, {params: p});
  },

  create: function(){
    return api.call('get', '/api/produkcu/create');
  },

  store: function ( form ){
    return api.call('post', '/api/produkcu/store', form);
  },

  edit: function( id ){
    return api.call('get', '/api/produkcu/edit/' + id);
  },

  update: function ( id, form ){
    return api.call('post', '/api/produkcu/update/' + id, form);
  },

  destroy: function( id ){
    return api.call('delete', '/api/produkcu/' + id);
  },

  count: function(){
    return api.call('get', '/api/produkcu/count');
  },
}