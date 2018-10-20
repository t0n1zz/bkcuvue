export default {
  
  index: function( p ){
    return axios.get('/api/laporanCuDiskusi' ,{params: p});
  },

  get: function(id){
    return axios.get('/api/laporanCuDiskusi/get/' + id);
  },

  store: function ( form ){
    return axios.post('/api/laporanCuDiskusi/store', form);
  },

  update: function ( id, form ){
    return axios.post('/api/laporanCuDiskusi/update/' + id, form);
  },

  destroy: function( id, form ){
    return axios.delete('/api/laporanCuDiskusi/' + id, form);
  }
}