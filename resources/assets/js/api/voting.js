export default {
  
  index: function( p ){
    return axios.get('/api/voting', {params: p});
  },

  indexCu: function( p, id ){
    return axios.get('/api/voting/indexCu/' + id, {params: p});
  },

  indexPemilihan: function(){
    return axios.get('/api/voting/indexPemilihan');
  },

  indexPilihan: function(name){
    return axios.get('/api/voting/indexPilihan/' + name);
  },

  indexSuara: function(id){
    return axios.get('/api/voting/indexSuara/' + id);
  },

  checkUser: function(id){
    return axios.get('/api/voting/checkUser/' + id);
  },

  create: function(){
    return axios.get('/api/voting/create');
  },

  store: function (form ){
    return axios.post('/api/voting/store', form);
  },

  storePilihan: function ( form ){
    return axios.post('/api/voting/storePilihan', form);
  },

  edit: function( id ){
    return axios.get('/api/voting/edit/' + id);
  },

  update: function ( id, form ){
    return axios.post('/api/voting/update/' + id, form);
  },

  updateStatus: function ( id ){
    return axios.get('/api/voting/updateStatus/' + id);
  },

  destroy: function( id ){
    return axios.delete('/api/voting/' + id);
  },

  countPilihan: function( id ){
    return axios.get('/api/voting/countPilihan/' + id);
  },

  countSuara: function( id ){
    return axios.get('/api/voting/countSuara/' + id);
  },
}