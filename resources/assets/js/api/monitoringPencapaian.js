export default {
  
  get: function( id ){
    return axios.get('/api/monitoringPencapaian/get/' + id);
  },

  store: function ( form ){
    return axios.post('/api/monitoringPencapaian/store', form);
  },

  update: function ( id, form ){
    return axios.post('/api/monitoringPencapaian/update/' + id, form);
  },

  destroy: function( id ){
    return axios.delete('/api/monitoringPencapaian/' + id);
  },

  count: function(){
    return axios.get('/api/monitoringPencapaian/count');
  },

  history: function(){
    return axios.get('/api/monitoringPencapaian/history');
  },
}