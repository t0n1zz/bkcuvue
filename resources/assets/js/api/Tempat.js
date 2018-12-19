export default {
  
  index: function( p ){
    return axios.get('/api/tempat' , {params: p});
  },

  get: function( id ){
    return axios.get('/api/tempat/get/' + id);
  },

  create: function(){
    return axios.get('/api/tempat/create');
  },

  store: function ( form ){
    return axios.post('/api/tempat/store', form);
  },

  edit: function( id ){
    return axios.get('/api/tempat/edit/' + id);
  },

  update: function ( id, form ){
    return axios.post('/api/tempat/update/' + id, form);
  },

  destroy: function( id ){
    return axios.delete('/api/tempat/' + id);
  }
}