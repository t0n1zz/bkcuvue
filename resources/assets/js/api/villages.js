export default {
  
  index: function( p ){
    return axios.get('/api/villages' , {params: p});
  },

  get: function(){
    return axios.get('/api/villages/get');
  },

  indexDistrics: function( p, id ){
    return axios.get('/api/regencies/indexDistricts/' + id, {params: p});
  },
  
  getDistricts: function( id ){
    return axios.get('/api/villages/getDistricts/' + id);
  },

  create: function(){
    return axios.get('/api/villages/create');
  },

  store: function ( form ){
    return axios.post('/api/villages/store', form);
  },

  edit: function( id ){
    return axios.get('/api/villages/edit/' + id);
  },

  update: function ( id, form ){
    return axios.post('/api/villages/update/' + id, form);
  },

  destroy: function( id ){
    return api.call('delete', '/api/villages/' + id);
  }
}