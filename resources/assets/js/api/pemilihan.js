export default {
  
  index: function( p ){
    return axios.get('/api/pemilihan', {params: p});
  },

  indexCu: function( p, id ){
    return axios.get('/api/pemilihan/indexCu/' + id, {params: p});
  },

  indexPemilihan: function(){
    return axios.get('/api/pemilihan/indexPemilihan');
  },

  indexPemilihanCu: function(id){
    return axios.get('/api/pemilihan/indexPemilihanCu/' + id);
  },

  indexCalon: function(name){
    return axios.get('/api/pemilihan/indexCalon/' + name);
  },

  indexCalonTerpilih: function(id){
    return axios.get('/api/pemilihan/indexCalonTerpilih/' + id);
  },

  indexDataSuara: function(p, id){
    return axios.get('/api/pemilihan/indexDataSuara/' + id, {params:p});
  },

  checkUser: function(id){
    return axios.get('/api/pemilihan/checkUser/' + id);
  },

  create: function(){
    return axios.get('/api/pemilihan/create');
  },

  store: function (form ){
    return axios.post('/api/pemilihan/store', form);
  },

  storeSuara: function (form ){
    return axios.post('/api/pemilihan/storeSuara', form);
  },

  storePilihan: function ( form ){
    return axios.post('/api/pemilihan/storePilihan', form);
  },

  storeMultiPilihan: function ( form ){
    return axios.post('/api/pemilihan/storeMultiPilihan', form);
  },

  edit: function( id ){
    return axios.get('/api/pemilihan/edit/' + id);
  },

  updateStatus: function ( id, cu ){
    return axios.get('/api/pemilihan/updateStatus/' + id + '/' + cu);
  },

  updateSuara: function ( id, form ){
    return axios.post('/api/pemilihan/updateSuara/' + id, form);
  },

  destroy: function( id ){
    return axios.delete('/api/pemilihan/' + id);
  },

  destroySuara: function( id ){
    return axios.delete('/api/pemilihan/destroySuara/' + id);
  },

  countCalon: function( id ){
    return axios.get('/api/pemilihan/countCalon/' + id);
  },

  countSuara: function( id ){
    return axios.get('/api/pemilihan/countSuara/' + id);
  },
}