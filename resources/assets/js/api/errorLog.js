export default {
  
  index: function( p ){
    return axios.get('/api/errorLog' ,{params: p});
  },

  create: function(){
    return axios.get('/api/errorLog/create');
  },

  store: function ( form ){
    return axios.post('/api/errorLog/store', form);
  },

  destroy: function( id ){
    return axios.delete('/api/errorLog/' + id);
  },

  count: function(){
    return axios.get('/api/errorLog/count');
  },
}