export default {
  
  index: function( p ){
    return axios.get('/api/artikelSimo' ,{params: p});
  },

  create: function(){
    return axios.get('/api/artikelSimo/create');
  },

  get: function(){
    return axios.get('/api/artikelSimo/get');
  },

  store: function ( form ){
    return axios.post('/api/artikelSimo/store', form);
  },

  edit: function( id ){
    return axios.get('/api/artikelSimo/edit/' + id);
  },

  update: function ( id, form ){
    return axios.post('/api/artikelSimo/update/' + id, form);
  },

  updateUtamakan: function( id ){
    return axios.post('/api/artikelSimo/updateUtamakan/' + id);
  },

  destroy: function( id ){
    return axios.delete('/api/artikelSimo/' + id);
  },

  count: function(){
    return axios.get('/api/artikelSimo/count');
  },
}