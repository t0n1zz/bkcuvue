export default {
  
  index: function( p ){
    return axios.get('/api/coa' , {params: p});
  },

  get: function(){
    return axios.get('/api/coa/get');
  },

  create: function(){
    return axios.get('/api/coa/create');
  },

  store: function ( form ){
    return axios.post('/api/coa/store', form);
  },

  edit: function( id ){
    return axios.get('/api/coa/edit/' + id);
  },

  update: function ( id, form ){
    return axios.post('/api/coa/update/' + id, form);
  },

  destroy: function( id ){
    return axios.delete('/api/coa/' + id);
  }
}