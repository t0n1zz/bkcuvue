export default {
  
  index: function( p ){
    return api.call('get', '/api/artikelKategori' , {params: p});
  },

  get: function(){
    return api.call('get', '/api/artikelKategori/get');
  },
  
  indexCu: function( p, id ){
    return api.call('get', '/api/artikelKategori/indexCu/' + id, {params: p});
  },

  getCu: function(  id ){
    return api.call('get', '/api/artikelKategori/getCu/' + id);
  },

  create: function(){
    return api.call('get', '/api/artikelKategori/create');
  },

  store: function ( form ){
    return api.call('post', '/api/artikelKategori/store', form);
  },

  edit: function( id ){
    return api.call('get', '/api/artikelKategori/edit/' + id);
  },

  update: function ( id, form ){
    return api.call('post', '/api/artikelKategori/update/' + id, form);
  },

  destroy: function( id ){
    return api.call('delete', '/api/artikelKategori/' + id);
  }
}