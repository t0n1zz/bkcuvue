export default {
  
  index: function( p ){
    return axios.get('/api/regencies' , {params: p});
  },

  get: function(){
    return axios.get('/api/regencies/get');
  },
  
  indexProvinces: function( p, id ){
    return axios.get('/api/regencies/indexProvinces/' + id, {params: p});
  },

  getProvinces: function( id ){
    return axios.get('/api/regencies/getProvinces/' + id);
  },

  create: function(){
    return axios.get('/api/regencies/create');
  },

  store: function ( form ){
    return axios.post('/api/regencies/store', form);
  },

  edit: function( id ){
    return axios.get('/api/regencies/edit/' + id);
  },

  update: function ( id, form ){
    return axios.post('/api/regencies/update/' + id, form);
  },

  destroy: function( id ){
    return axios.delete('/api/regencies/' + id);
  }
}