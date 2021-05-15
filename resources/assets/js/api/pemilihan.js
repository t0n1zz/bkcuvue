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

  indexSuara: function(id){
    return axios.get('/api/pemilihan/indexSuara/' + id);
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

  storePilihan: function ( form ){
    return axios.post('/api/pemilihan/storePilihan', form);
  },

  edit: function( id ){
    return axios.get('/api/pemilihan/edit/' + id);
  },

  updateStatus: function ( id, cu ){
    return axios.get('/api/pemilihan/updateStatus/' + id + '/' + cu);
  },

  destroy: function( id ){
    return axios.delete('/api/pemilihan/' + id);
  },

  countCalon: function( id ){
    return axios.get('/api/pemilihan/countCalon/' + id);
  },

  countSuara: function( id ){
    return axios.get('/api/pemilihan/countSuara/' + id);
  },
}