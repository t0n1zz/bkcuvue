export default {
  
  index: function( p ){
    return axios.get('/api/suratKategori' , {params: p});
  },

  get: function(){
    return axios.get('/api/suratKategori/get');
  },
  
  indexCu: function( p, id ){
    return axios.get('/api/suratKategori/indexCu/' + id, {params: p});
  },

  getCu: function(  id ){
    return axios.get('/api/suratKategori/getCu/' + id);
  },

  create: function(){
    return axios.get('/api/suratKategori/create');
  },

  store: function ( form ){
    return axios.post('/api/suratKategori/store', form);
  },

  edit: function( id ){
    return axios.get('/api/suratKategori/edit/' + id);
  },

  update: function ( id, form ){
    return axios.post('/api/suratKategori/update/' + id, form);
  },

  destroy: function( id ){
    return axios.delete('/api/suratKategori/' + id);
  }
}