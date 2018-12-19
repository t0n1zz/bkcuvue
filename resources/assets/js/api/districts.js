export default {
  
  index: function( p ){
    return axios.get('/api/districts' , {params: p});
  },

  get: function(){
    return axios.get('/api/districts/get');
  },

  indexRegencies: function( p, id ){
    return axios.get('/api/regencies/indexRegencies/' + id, {params: p});
  },
  
  getRegencies: function( id ){
    return axios.get('/api/districts/getRegencies/' + id);
  },

  create: function(){
    return axios.get('/api/districts/create');
  },

  store: function ( form ){
    return axios.post('/api/districts/store', form);
  },

  edit: function( id ){
    return axios.get('/api/districts/edit/' + id);
  },

  update: function ( id, form ){
    return axios.post('/api/districts/update/' + id, form);
  },

  destroy: function( id ){
    return axios.delete('/api/districts/' + id);
  }
}