export default {
  
  index: function( p ){
    return axios.get('/api/mitraLembaga' , {params: p});
  },

  indexCu: function( p, id ){
    return axios.get('/api/mitraLembaga/indexCu/' + id , {params: p});
  },

  create: function(){
    return axios.get('/api/mitraLembaga/create');
  },

  store: function ( form ){
    return axios.post('/api/mitraLembaga/store', form);
  },

  edit: function( id ){
    return axios.get('/api/mitraLembaga/edit/' + id);
  },

  update: function ( id, form ){
    return axios.post('/api/mitraLembaga/update/' + id, form);
  },

  destroy: function( id ){
    return axios.delete('/api/mitraLembaga/' + id);
  },

  count: function(){
    return axios.get('/api/mitraLembaga/count');
  },

  history: function(){
    return axios.get('/api/mitraLembaga/history');
  },
}