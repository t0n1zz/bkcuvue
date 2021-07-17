export default {
  
  index: function( p ){
    return axios.get('/api/dokumen' ,{params: p});
  },

  indexCu: function( p, id ){
    return axios.get('/api/dokumen/indexCu/' + id, {params: p});
  },

  create: function(){
    return axios.get('/api/dokumen/create');
  },

  store: function ( form ){
    return axios.post('/api/dokumen/store', form);
  },

  edit: function( id ){
    return axios.get('/api/dokumen/edit/' + id);
  },

  update: function ( id, form ){
    return axios.post('/api/dokumen/update/' + id, form);
  },

  destroy: function( id ){
    return axios.delete('/api/dokumen/' + id);
  },

  count: function(){
    return axios.get('/api/dokumen/count');
  },
}