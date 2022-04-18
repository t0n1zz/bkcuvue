export default {
  
  index: function( p ){
    return axios.get('/api/suratKode' , {params: p});
  },

  get: function(){
    return axios.get('/api/suratKode/get');
  },
  
  indexCu: function( p, id ){
    return axios.get('/api/suratKode/indexCu/' + id, {params: p});
  },

  getCu: function(  id ){
    return axios.get('/api/suratKode/getCu/' + id);
  },

  create: function(){
    return axios.get('/api/suratKode/create');
  },

  store: function ( form ){
    return axios.post('/api/suratKode/store', form);
  },

  edit: function( id ){
    return axios.get('/api/suratKode/edit/' + id);
  },

  update: function ( id, form ){
    return axios.post('/api/suratKode/update/' + id, form);
  },

  destroy: function( id ){
    return axios.delete('/api/suratKode/' + id);
  }
}