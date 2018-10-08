export default {
  
  index: function( p ){
    return api.call('get', '/api/artikelPenulis' , {params: p});
  },

  get: function(){
    return api.call('get', '/api/artikelPenulis/get');
  },
  
  indexCu: function( p, id ){
    return api.call('get', '/api/artikelPenulis/indexCu/' + id, {params: p});
  },

  getCu: function( id ){
    return api.call('get', '/api/artikelPenulis/getCu/' + id);
  },

  create: function(){
    return api.call('get', '/api/artikelPenulis/create');
  },

  store: function ( form ){
    return api.call('post', '/api/artikelPenulis/store', form);
  },

  edit: function( id ){
    return api.call('get', '/api/artikelPenulis/edit/' + id);
  },

  update: function ( id, form ){
    return api.call('post', '/api/artikelPenulis/update/' + id, form);
  },

  destroy: function( id ){
    return api.call('delete', '/api/artikelPenulis/' + id);
  }
}