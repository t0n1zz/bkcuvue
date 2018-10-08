export default {
  
  index: function( p ){
    return api.call('get', '/api/laporanTpDiskusi' ,{params: p});
  },

  get: function(id){
    return api.call('get', '/api/laporanTpDiskusi/get/' + id);
  },

  store: function ( form ){
    return api.call('post', '/api/laporanTpDiskusi/store', form);
  },

  update: function ( id, form ){
    return api.call('post', '/api/laporanTpDiskusi/update/' + id, form);
  },

  destroy: function( id ){
    return api.call('delete', '/api/laporanTpDiskusi/' + id);
  }
}