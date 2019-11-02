export default {
  
  index: function( p ){
    return axios.get('/api/pekerjaan' , {params: p});
  },

  get: function(){
    return axios.get('/api/pekerjaan/get');
  },

  create: function(){
    return axios.get('/api/pekerjaan/create');
  },

  store: function ( form ){
    return axios.post('/api/pekerjaan/store', form);
  },

  edit: function( id ){
    return axios.get('/api/pekerjaan/edit/' + id);
  },

  update: function ( id, form ){
    return axios.post('/api/pekerjaan/update/' + id, form);
  },

  destroy: function( id ){
    return axios.delete('/api/pekerjaan/' + id);
  }
}