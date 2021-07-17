export default {
  
  index: function( p ){
    return axios.get('/api/dokumenKategori' , {params: p});
  },

  get: function(){
    return axios.get('/api/dokumenKategori/get');
  },
  
  indexCu: function( p, id ){
    return axios.get('/api/dokumenKategori/indexCu/' + id, {params: p});
  },

  getCu: function(  id ){
    return axios.get('/api/dokumenKategori/getCu/' + id);
  },

  create: function(){
    return axios.get('/api/dokumenKategori/create');
  },

  store: function ( form ){
    return axios.post('/api/dokumenKategori/store', form);
  },

  edit: function( id ){
    return axios.get('/api/dokumenKategori/edit/' + id);
  },

  update: function ( id, form ){
    return axios.post('/api/dokumenKategori/update/' + id, form);
  },

  destroy: function( id ){
    return axios.delete('/api/dokumenKategori/' + id);
  }
}