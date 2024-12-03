export default {
  
  index: function( p ){
    return axios.get('/api/kubnUsaha' , {params: p});
  },

  get: function(){
    return axios.get('/api/kubnUsaha/get');
  },

  create: function(){
    return axios.get('/api/kubnUsaha/create');
  },

  store: function ( form ){
    return axios.post('/api/kubnUsaha/store', form);
  },

  edit: function( id ){
    return axios.get('/api/kubnUsaha/edit/' + id);
  },

  update: function ( id, form ){
    return axios.post('/api/kubnUsaha/update/' + id, form);
  },

  destroy: function( id ){
    return axios.delete('/api/kubnUsaha/' + id);
  }
}