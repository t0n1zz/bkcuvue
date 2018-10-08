export default {
  
  index: function( p ){
    return api.call('get', '/api/laporanCuDiskusi' ,{params: p});
  },

  get: function(id){
    return api.call('get', '/api/laporanCuDiskusi/get/' + id);
  },

  store: function ( form ){
    return api.call('post', '/api/laporanCuDiskusi/store', form);
  },

  update: function ( id, form ){
    return api.call('post', '/api/laporanCuDiskusi/update/' + id, form);
  },

  destroy: function( id, form ){
    return api.call('delete', '/api/laporanCuDiskusi/' + id, form);
  }
}