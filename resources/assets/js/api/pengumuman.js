export default {
  
  index: function( p ){
    return axios.get('/api/pengumuman' , {params: p});
  },

  indexCu: function( p, id ){
    return axios.get('/api/pengumuman/indexCu/' + id, {params: p});
  },

  create: function(){
    return axios.get('/api/pengumuman/create');
  },

  store: function ( form ){
    return axios.post('/api/pengumuman/store', form);
  },

  edit: function( id ){
    return axios.get('/api/pengumuman/edit/' + id);
  },

  update: function ( id, form ){
    return axios.post('/api/pengumuman/update/' + id, form);
  },

  destroy: function( id ){
    return axios.delete('/api/pengumuman/' + id);
  },

  count: function(){
    return axios.get('/api/pengumuman/count');
  },
}