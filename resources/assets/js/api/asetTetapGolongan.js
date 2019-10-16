export default {
  
  index: function( p ){
    return axios.get('/api/asetTetapGolongan' , {params: p});
  },

  get: function(){
    return axios.get('/api/asetTetapGolongan/get');
  },
  
  create: function(){
    return axios.get('/api/asetTetapGolongan/create');
  },

  store: function ( form ){
    return axios.post('/api/asetTetapGolongan/store', form);
  },

  edit: function( id ){
    return axios.get('/api/asetTetapGolongan/edit/' + id);
  },

  update: function ( id, form ){
    return axios.post('/api/asetTetapGolongan/update/' + id, form);
  },

  destroy: function( id ){
    return axios.delete('/api/asetTetapGolongan/' + id);
  },

  count: function(){
    return axios.get('/api/asetTetapGolongan/count');
  },
}