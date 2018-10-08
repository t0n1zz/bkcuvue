export default {
  
  index: function( p ){
    return api.call('get', '/api/regencies' , {params: p});
  },

  get: function(){
    return api.call('get', '/api/regencies/get');
  },
  
  indexProvinces: function( p, id ){
    return api.call('get', '/api/regencies/indexProvinces/' + id, {params: p});
  },

  getProvinces: function( id ){
    return api.call('get', '/api/regencies/getProvinces/' + id);
  },

  create: function(){
    return api.call('get', '/api/regencies/create');
  },

  store: function ( form ){
    return api.call('post', '/api/regencies/store', form);
  },

  edit: function( id ){
    return api.call('get', '/api/regencies/edit/' + id);
  },

  update: function ( id, form ){
    return api.call('post', '/api/regencies/update/' + id, form);
  },

  destroy: function( id ){
    return api.call('delete', '/api/regencies/' + id);
  }
}