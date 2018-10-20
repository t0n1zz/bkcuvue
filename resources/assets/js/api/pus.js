export default {
  
  getPusS: function( p ){
    return axios.get('/api/pus', {params: p});
  },

  getPusAll: function(){
    return axios.get('/api/pus_all');
  },

  getPus: function( id ){
    return axios.get('/api/pus/' + id);
  },

  storePus: function ( form ){
    return axios.post('/api/pus/store', form);
  },

  updatePus: function ( id, form ){
    return axios.put('/api/pus/update/' + id, form);
  },

  deletePus: function( id ){
    return axios.delete('/api/pus/' + id);
  }
}