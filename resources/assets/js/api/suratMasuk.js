export default {
  
  indexCu: function( p, cu, periode ){
    return axios.get('/api/suratMasuk/indexCu/' + cu + '/' + periode, {params: p});
  },

  getPeriode: function(cu){
    return axios.get('/api/suratMasuk/getPeriode/' + cu);
  },

  create: function(){
    return axios.get('/api/suratMasuk/create');
  },

  store: function ( form ){
    return axios.post('/api/suratMasuk/store', form);
  },

  edit: function( id ){
    return axios.get('/api/suratMasuk/edit/' + id);
  },

  update: function ( id, form ){
    return axios.post('/api/suratMasuk/update/' + id, form);
  },

  destroy: function( id ){
    return axios.delete('/api/suratMasuk/' + id);
  }
}