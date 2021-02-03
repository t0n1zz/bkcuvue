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

  update: function ( id, form ){
    return axios.post('/api/pemilihan/update/' + id, form);
  },

  updateStatus: function ( id ){
    return axios.get('/api/pemilihan/updateStatus/' + id);
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