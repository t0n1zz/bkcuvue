export default {
  
  index: function( p, tipe ){
    return axios.get('/api/kombas/index/' + tipe , {params: p});
  },

  get: function(){
    return axios.get('/api/kombas/get');
  },

  indexCu: function( p, id, tipe ){
    return axios.get('/api/kombas/indexCu/' + id + '/' + tipe, {params: p});
  },

  create: function(){
    return axios.get('/api/kombas/create');
  },

  store: function ( form ){
    return axios.post('/api/kombas/store', form);
  },
 
  edit: function( id ){
    return axios.get('/api/kombas/edit/' + id);
  },

  update: function ( id, form ){
    return axios.post('/api/kombas/update/' + id, form);
  },

  destroy: function( id ){
    return axios.delete('/api/kombas/' + id);
  }
}