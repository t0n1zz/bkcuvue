export default {
  
  index: function( p ){
    return axios.get('/api/fasilitator' , {params: p});
  },

  get: function(){
    return axios.get('/api/fasilitator/get');
  },
  
  indexCu: function( p, id ){
    return axios.get('/api/fasilitator/indexCu/' + id, {params: p});
  },

  indexDiklat: function( id ){
    return axios.get('/api/fasilitator/indexDiklat/' + id);
  },

  getCu: function( id ){
    return axios.get('/api/fasilitator/getCu/' + id);
  },

  create: function(){
    return axios.get('/api/fasilitator/create');
  },

  store: function ( form ){
    return axios.post('/api/fasilitator/store', form);
  },

  edit: function( id ){
    return axios.get('/api/fasilitator/edit/' + id);
  },

  update: function ( id, form ){
    return axios.post('/api/fasilitator/update/' + id, form);
  },

  destroy: function( id ){
    return axios.delete('/api/fasilitator/' + id);
  },

  destroyDiklat: function( id ){
    return axios.delete('/api/fasilitator/destroyDiklat/' + id);
  }
}