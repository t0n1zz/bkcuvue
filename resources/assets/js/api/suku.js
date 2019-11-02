export default {
  
  index: function( p ){
    return axios.get('/api/suku' , {params: p});
  },

  get: function(){
    return axios.get('/api/suku/get');
  },

  create: function(){
    return axios.get('/api/suku/create');
  },

  store: function ( form ){
    return axios.post('/api/suku/store', form);
  },

  edit: function( id ){
    return axios.get('/api/suku/edit/' + id);
  },

  update: function ( id, form ){
    return axios.post('/api/suku/update/' + id, form);
  },

  destroy: function( id ){
    return axios.delete('/api/suku/' + id);
  }
}