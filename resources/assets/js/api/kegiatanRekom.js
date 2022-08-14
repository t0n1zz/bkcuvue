export default {
  
  index: function( p ){
    return axios.get('/api/kegiatanRekom' , {params: p});
  },

  indexKegiatan: function( p, id ){
    return axios.get('/api/kegiatanRekom/indexKegiatan/' + id , {params: p});
  },

  indexHasil: function( p, id ){
    return axios.get('/api/kegiatanRekom/indexHasil/' + id , {params: p});
  },

  get: function(){
    return axios.get('/api/kegiatanRekom/get');
  },
  
  create: function(){
    return axios.get('/api/kegiatanRekom/create');
  },

  store: function ( form ){
    return axios.post('/api/kegiatanRekom/store', form);
  },

  update: function ( id, form ){
    return axios.post('/api/kegiatanRekom/update/' + id, form);
  },

  destroy: function( id ){
    return axios.delete('/api/kegiatanRekom/' + id);
  }
}