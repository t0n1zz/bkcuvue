export default {
  
  index: function( p ){
    return axios.get('/api/artikel' ,{params: p});
  },

  indexCu: function( p, id ){
    return axios.get('/api/artikel/indexCu/' + id, {params: p});
  },

  create: function(){
    return axios.get('/api/artikel/create');
  },

  store: function ( form ){
    return axios.post('/api/artikel/store', form);
  },

  edit: function( id ){
    return axios.get('/api/artikel/edit/' + id);
  },

  update: function ( id, form ){
    return axios.post('/api/artikel/update/' + id, form);
  },

  updateTerbitkan: function( id ){
    return axios.post('/api/artikel/updateTerbitkan/' + id);
  },

  updateUtamakan: function( id ){
    return axios.post('/api/artikel/updateUtamakan/' + id);
  },

  destroy: function( id ){
    return axios.delete('/api/artikel/' + id);
  },

  count: function(){
    return axios.get('/api/artikel/count');
  },
}