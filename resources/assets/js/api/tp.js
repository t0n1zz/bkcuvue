export default {
  
  index: function( p ){
    return axios.get('/api/tp' , {params: p});
  },

  get: function(){
    return axios.get('/api/tp/get');
  },

  indexCu: function( p, id ){
    return axios.get('/api/tp/indexCu/' + id, {params: p});
  },

  getCu: function( id ){
    return axios.get('/api/tp/getCu/' + id);
  },

  create: function(){
    return axios.get('/api/tp/create');
  },

  store: function ( form ){
    return axios.post('/api/tp/store', form);
  },

  edit: function( id ){
    return axios.get('/api/tp/edit/' + id);
  },

  update: function ( id, form ){
    return axios.post('/api/tp/update/' + id, form);
  },

  destroy: function( id ){
    return axios.delete('/api/tp/' + id);
  },

  count: function( p ){
    return axios.get('/api/tp/count');
  },
}