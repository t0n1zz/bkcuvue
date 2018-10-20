export default {
  
  index: function( p ){
    return axios.get('/api/cu' , {params: p});
  },

  get: function(){
    return axios.get('/api/cu/get');
  },

  getHeader: function(){
    return axios.get('/api/cu/getHeader');
  },

  getPus: function( id ){
    return axios.get('/api/cu/getPus/' + id);
  },

  create: function(){
    return axios.get('/api/cu/create');
  },

  store: function ( form ){
    return axios.post('/api/cu/store', form);
  },

  edit: function( id ){
    return axios.get('/api/cu/edit/' + id);
  },

  update: function ( id, form ){
    return axios.post('/api/cu/update/' + id, form);
  },

  destroy: function( id ){
    return axios.delete('/api/cu/' + id);
  },

  count: function(){
    return axios.get('/api/cu/count');
  },
}