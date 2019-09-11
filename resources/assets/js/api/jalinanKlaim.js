export default {
  
  index: function( p, status ){
    return axios.get('/api/jalinanKlaim/status/' + status ,{params: p});
  },

  indexCu: function( p, id, status ){
    return axios.get('/api/jalinanKlaim/indexCu/' + id + '/status/' + status, {params: p});
  },

  create: function(){
    return axios.get('/api/jalinanKlaim/create');
  },

  store: function ( form ){
    return axios.post('/api/jalinanKlaim/store', form);
  },

  edit: function( nik, cu ){
    return axios.get('/api/jalinanKlaim/edit/' + nik + '/cu/' + cu);
  },

  update: function ( id, form ){
    return axios.post('/api/jalinanKlaim/update/' + id, form);
  },

  updateStatus: function ( id, form ){
    return axios.post('/api/jalinanKlaim/updateStatus/' + id, form);
  },

  destroy: function( id ){
    return axios.delete('/api/jalinanKlaim/' + id);
  },

  history: function(){
    return axios.get('/api/jalinanKlaim/history');
  },

  cariData: function( nik ){
    return axios.get('/api/jalinanKlaim/cariData/' + nik);
  },

  cekData: function( id ){
    return axios.get('/api/jalinanKlaim/cekData/' + id);
  },

}