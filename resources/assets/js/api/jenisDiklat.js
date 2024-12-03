export default {
  
  index: function( p ){
    return axios.get('/api/jenisDiklat' , {params: p});
  },

  get: function(){
    return axios.get('/api/jenisDiklat/get');
  },

  create: function(){
    return axios.get('/api/jenisDiklat/create');
  },

  store: function ( form ){
    return axios.post('/api/jenisDiklat/store', form);
  },

  edit: function( id ){
    return axios.get('/api/jenisDiklat/edit/' + id);
  },

  update: function ( id, form ){
    return axios.post('/api/jenisDiklat/update/' + id, form);
  },

  destroy: function( id ){
    return axios.delete('/api/jenisDiklat/' + id);
  }
}