export default {
  
  index: function( p ){
    return axios.get('/api/enterpreneur' , {params: p});
  },

  get: function(){
    return axios.get('/api/enterpreneur/get');
  },
  
  indexCu: function( p, id ){
    return axios.get('/api/enterpreneur/indexCu/' + id, {params: p});
  },

  indexDiklat: function( id ){
    return axios.get('/api/enterpreneur/indexDiklat/' + id);
  },

  getCu: function( id ){
    return axios.get('/api/enterpreneur/getCu/' + id);
  },

  create: function(){
    return axios.get('/api/enterpreneur/create');
  },

  store: function ( form ){
    return axios.post('/api/enterpreneur/store', form);
  },

  edit: function( id ){
    return axios.get('/api/enterpreneur/edit/' + id);
  },

  update: function ( id, form ){
    return axios.post('/api/enterpreneur/update/' + id, form);
  },

  destroy: function( id ){
    return axios.delete('/api/enterpreneur/' + id);
  },

  destroyDiklat: function( id ){
    return axios.delete('/api/enterpreneur/destroyDiklat/' + id);
  }
}