export default {
  
  index: function( p ){
    return axios.get('/api/asetTetapJenis' , {params: p});
  },

  get: function(){
    return axios.get('/api/asetTetapJenis/get');
  },
  
  create: function(){
    return axios.get('/api/asetTetapJenis/create');
  },

  store: function ( form ){
    return axios.post('/api/asetTetapJenis/store', form);
  },

  edit: function( id ){
    return axios.get('/api/asetTetapJenis/edit/' + id);
  },

  update: function ( id, form ){
    return axios.post('/api/asetTetapJenis/update/' + id, form);
  },

  destroy: function( id ){
    return axios.delete('/api/asetTetapJenis/' + id);
  },

  count: function(){
    return axios.get('/api/asetTetapJenis/count');
  },
}