export default {
  
  index: function( p ){
    return axios.get('/api/keahlian' , {params: p});
  },

  get: function(){
    return axios.get('/api/keahlian/get');
  },

  create: function(){
    return axios.get('/api/keahlian/create');
  },

  store: function ( form ){
    return axios.post('/api/keahlian/store', form);
  },

  edit: function( id ){
    return axios.get('/api/keahlian/edit/' + id);
  },

  update: function ( id, form ){
    return axios.post('/api/keahlian/update/' + id, form);
  },

  destroy: function( id ){
    return axios.delete('/api/keahlian/' + id);
  }
}