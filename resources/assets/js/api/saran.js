export default {
  
  index: function( p ){
    return axios.get('/api/saran' ,{params: p});
  },

  create: function(){
    return axios.get('/api/saran/create');
  },

  store: function ( form ){
    return axios.post('/api/saran/store', form);
  },

  destroy: function( id ){
    return axios.delete('/api/saran/' + id);
  },

  count: function(){
    return axios.get('/api/saran/count');
  },
}