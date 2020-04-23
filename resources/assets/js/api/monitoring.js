export default {
  
  index: function( p ){
    return axios.get('/api/monitoring' , {params: p});
  },

  indexCu: function( p, cu, tp ){
    return axios.get('/api/monitoring/indexCu/' + cu + '/' + tp, {params: p});
  },

  create: function(){
    return axios.get('/api/monitoring/create');
  },

  get: function( cu ){
    return axios.get('/api/monitoring/get/' + cu);
  },

  store: function ( form ){
    return axios.post('/api/monitoring/store', form);
  },

  edit: function( id ){
    return axios.get('/api/monitoring/edit/' + id);
  },

  update: function ( id, form ){
    return axios.post('/api/monitoring/update/' + id, form);
  },

  updateRekom: function ( id ){
    return axios.post('/api/monitoring/updateRekom/' + id);
  },

  destroy: function( id ){
    return axios.delete('/api/monitoring/' + id);
  },

  count: function(){
    return axios.get('/api/monitoring/count');
  },

  history: function(){
    return axios.get('/api/monitoring/history');
  },
}