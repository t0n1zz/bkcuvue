export default {
  
  index: function( p ){
    return axios.get('/api/artikelPenulis' , {params: p});
  },

  get: function(){
    return axios.get('/api/artikelPenulis/get');
  },
  
  indexCu: function( p, id ){
    return axios.get('/api/artikelPenulis/indexCu/' + id, {params: p});
  },

  getCu: function( id ){
    return axios.get('/api/artikelPenulis/getCu/' + id);
  },

  create: function(){
    return axios.get('/api/artikelPenulis/create');
  },

  store: function ( form ){
    return axios.post('/api/artikelPenulis/store', form);
  },

  edit: function( id ){
    return axios.get('/api/artikelPenulis/edit/' + id);
  },

  update: function ( id, form ){
    return axios.post('/api/artikelPenulis/update/' + id, form);
  },

  destroy: function( id ){
    return axios.delete('/api/artikelPenulis/' + id);
  },

  count: function(){
    return axios.get('/api/artikelPenulis/count');
  },
}