export default {
  
  index: function( p ){
    return axios.get('/api/umkm' , {params: p});
  },

  get: function(){
    return axios.get('/api/umkm/get');
  },
  
  indexCu: function( p, id ){
    return axios.get('/api/umkm/indexCu/' + id, {params: p});
  },

  indexDiklat: function( id ){
    return axios.get('/api/umkm/indexDiklat/' + id);
  },

  getCu: function( id ){
    return axios.get('/api/umkm/getCu/' + id);
  },

  create: function(){
    return axios.get('/api/umkm/create');
  },

  store: function ( form ){
    return axios.post('/api/umkm/store', form);
  },

  edit: function( id ){
    return axios.get('/api/umkm/edit/' + id);
  },

  update: function ( id, form ){
    return axios.post('/api/umkm/update/' + id, form);
  },

  destroy: function( id ){
    return axios.delete('/api/umkm/' + id);
  },

  destroyDiklat: function( id ){
    return axios.delete('/api/umkm/destroyDiklat/' + id);
  }
}