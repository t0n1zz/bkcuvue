export default {
  
  index: function( p ){
    return axios.get('/api/mentor' , {params: p});
  },

  get: function(){
    return axios.get('/api/mentor/get');
  },
  
  indexCu: function( p, id ){
    return axios.get('/api/mentor/indexCu/' + id, {params: p});
  },

  indexDiklat: function( id ){
    return axios.get('/api/mentor/indexDiklat/' + id);
  },

  getCu: function( id ){
    return axios.get('/api/mentor/getCu/' + id);
  },

  create: function(){
    return axios.get('/api/mentor/create');
  },

  store: function ( form ){
    return axios.post('/api/mentor/store', form);
  },

  edit: function( id ){
    return axios.get('/api/mentor/edit/' + id);
  },

  update: function ( id, form ){
    return axios.post('/api/mentor/update/' + id, form);
  },

  destroy: function( id ){
    return axios.delete('/api/mentor/' + id);
  },

  destroyDiklat: function( id ){
    return axios.delete('/api/mentor/destroyDiklat/' + id);
  }
}