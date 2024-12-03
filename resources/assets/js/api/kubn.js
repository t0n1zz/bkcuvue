export default {
  
  index: function( p ){
    return axios.get('/api/kubn' , {params: p});
  },

  get: function(){
    return axios.get('/api/kubn/get');
  },
  
  indexCu: function( p, id ){
    return axios.get('/api/kubn/indexCu/' + id, {params: p});
  },

  indexAnggota: function( id ){
    return axios.get('/api/kubn/indexAnggota/' + id);
  },

  indexDiklat: function( id ){
    return axios.get('/api/kubn/indexDiklat/' + id);
  },

  getCu: function( id ){
    return axios.get('/api/kubn/getCu/' + id);
  },

  create: function(){
    return axios.get('/api/kubn/create');
  },

  store: function ( form ){
    return axios.post('/api/kubn/store', form);
  },

  storeAnggota: function ( form ){
    return axios.post('/api/kubn/storeAnggota', form);
  },
  
  storeDiklat: function ( form ){
    return axios.post('/api/kubn/storeDiklat', form);
  },

  edit: function( id ){
    return axios.get('/api/kubn/edit/' + id);
  },

  update: function ( id, form ){
    return axios.post('/api/kubn/update/' + id, form);
  },

  updateAnggota: function ( id, form ){
    return axios.post('/api/kubn/updateAnggota/' + id, form);
  },

  updateDiklat: function ( id, form ){
    return axios.post('/api/kubn/updateDiklat/' + id, form);
  },

  destroy: function( id ){
    return axios.delete('/api/kubn/' + id);
  },

  destroyAnggota: function( id ){
    return axios.delete('/api/kubn/destroyAnggota/' + id);
  },

  destroyDiklat: function( id ){
    return axios.delete('/api/kubn/destroyDiklat/' + id);
  }
}