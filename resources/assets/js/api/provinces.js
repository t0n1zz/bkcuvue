export default {
  
  index: function( p ){
    return axios.get('/api/provinces' , {params: p});
  },

  get: function(){
    return axios.get('/api/provinces/get');
  },

  create: function(){
    return axios.get('/api/provinces/create');
  },

  store: function ( form ){
    return axios.post('/api/provinces/store', form);
  },

  edit: function( id ){
    return axios.get('/api/provinces/edit/' + id);
  },

  update: function ( id, form ){
    return axios.post('/api/provinces/update/' + id, form);
  },

  destroy: function( id ){
    return axios.delete('/api/provinces/' + id);
  }
}