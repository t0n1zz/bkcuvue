export default {
  
  index: function( p ){
    return api.call('get', '/api/districts' , {params: p});
  },

  get: function(){
    return api.call('get', '/api/districts/get');
  },

  indexRegencies: function( p, id ){
    return api.call('get', '/api/regencies/indexRegencies/' + id, {params: p});
  },
  
  getRegencies: function( id ){
    return api.call('get', '/api/districts/getRegencies/' + id);
  },

  create: function(){
    return api.call('get', '/api/districts/create');
  },

  store: function ( form ){
    return api.call('post', '/api/districts/store', form);
  },

  edit: function( id ){
    return api.call('get', '/api/districts/edit/' + id);
  },

  update: function ( id, form ){
    return api.call('post', '/api/districts/update/' + id, form);
  },

  destroy: function( id ){
    return api.call('delete', '/api/districts/' + id);
  }
}