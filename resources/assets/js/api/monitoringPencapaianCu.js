export default {
  
  get: function( id ){
    return axios.get('/api/monitoringPencapaianCu/get/' + id);
  },

  store: function ( form ){
    return axios.post('/api/monitoringPencapaianCu/store', form);
  },

  update: function ( id, form ){
    return axios.post('/api/monitoringPencapaianCu/update/' + id, form);
  },

  destroy: function( id ){
    return axios.delete('/api/monitoringPencapaianCu/' + id);
  },

  count: function(){
    return axios.get('/api/monitoringPencapaianCu/count');
  },

  history: function(){
    return axios.get('/api/monitoringPencapaianCu/history');
  },
}