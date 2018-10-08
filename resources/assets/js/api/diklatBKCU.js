export default {
  
  index: function( p ){
    return api.call('get', '/api/diklatBKCU' , {params: p});
  },

  create: function(){
    return api.call('get', '/api/diklatBKCU/create');
  },

  store: function ( form ){
    return api.call('post', '/api/diklatBKCU/store', form);
  },

  edit: function( id ){
    return api.call('get', '/api/diklatBKCU/edit/' + id);
  },

  update: function ( id, form ){
    return api.call('post', '/api/diklatBKCU/update/' + id, form);
  },

  destroy: function( id ){
    return api.call('delete', '/api/diklatBKCU/' + id);
  },

  count: function(){
    return api.call('get','/api/diklatBKCU/count');
  },
}