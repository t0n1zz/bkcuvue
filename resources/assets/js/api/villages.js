export default {
  
  index: function( p ){
    return api.call('get', '/api/villages' , {params: p});
  },

  get: function(){
    return api.call('get', '/api/villages/get');
  },

  indexDistrics: function( p, id ){
    return api.call('get', '/api/regencies/indexDistricts/' + id, {params: p});
  },
  
  getDistricts: function( id ){
    return api.call('get', '/api/villages/getDistricts/' + id);
  },

  create: function(){
    return api.call('get', '/api/villages/create');
  },

  store: function ( form ){
    return api.call('post', '/api/villages/store', form);
  },

  edit: function( id ){
    return api.call('get', '/api/villages/edit/' + id);
  },

  update: function ( id, form ){
    return api.call('post', '/api/villages/update/' + id, form);
  },

  destroy: function( id ){
    return api.call('delete', '/api/villages/' + id);
  }
}