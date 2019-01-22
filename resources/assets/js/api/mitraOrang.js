export default {
  
  index: function( p ){
    return axios.get('/api/mitraOrang' , {params: p});
  },

  create: function(){
    return axios.get('/api/mitraOrang/create');
  },

  store: function ( form ){
    return axios.post('/api/mitraOrang/store', form);
  },

  edit: function( id ){
    return axios.get('/api/mitraOrang/edit/' + id);
  },

  update: function ( id, form ){
    return axios.post('/api/mitraOrang/update/' + id, form);
  },

  restore: function ( id ){
    return axios.post('/api/mitraOrang/restore/' + id);
  },

  destroy: function( id ){
    return axios.delete('/api/mitraOrang/' + id);
  },

  count: function(){
    return axios.get('/api/mitraOrang/count');
  },

  history: function(){
    return axios.get('/api/mitraOrang/history');
  },
}