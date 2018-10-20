export default {
  
  index: function( p ){
    return axios.get('/api/laporanTpDiskusi' ,{params: p});
  },

  get: function(id){
    return axios.get('/api/laporanTpDiskusi/get/' + id);
  },

  store: function ( form ){
    return axios.post('/api/laporanTpDiskusi/store', form);
  },

  update: function ( id, form ){
    return axios.post('/api/laporanTpDiskusi/update/' + id, form);
  },

  destroy: function( id ){
    return axios.delete('/api/laporanTpDiskusi/' + id);
  }
}