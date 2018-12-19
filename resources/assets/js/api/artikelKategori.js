export default {
  
  index: function( p ){
    return axios.get('/api/artikelKategori' , {params: p});
  },

  get: function(){
    return axios.get('/api/artikelKategori/get');
  },
  
  indexCu: function( p, id ){
    return axios.get('/api/artikelKategori/indexCu/' + id, {params: p});
  },

  getCu: function(  id ){
    return axios.get('/api/artikelKategori/getCu/' + id);
  },

  create: function(){
    return axios.get('/api/artikelKategori/create');
  },

  store: function ( form ){
    return axios.post('/api/artikelKategori/store', form);
  },

  edit: function( id ){
    return axios.get('/api/artikelKategori/edit/' + id);
  },

  update: function ( id, form ){
    return axios.post('/api/artikelKategori/update/' + id, form);
  },

  destroy: function( id ){
    return axios.delete('/api/artikelKategori/' + id);
  }
}