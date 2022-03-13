export default {

  indexCu: function( p, cu, periode ){
    return axios.get('/api/surat/indexCu/' + cu + '/' + periode, {params: p});
  },

  getPeriode: function(cu){
    return axios.get('/api/surat/getPeriode/' + cu);
  },

  create: function( tipe ){
    return axios.get('/api/surat/create/' + tipe);
  },

  store: function ( form ){
    return axios.post('/api/surat/store', form);
  },

  edit: function( id ){
    return axios.get('/api/surat/edit/' + id);
  },

  update: function ( id, form ){
    return axios.post('/api/surat/update/' + id, form);
  },

  destroy: function( id ){
    return axios.delete('/api/surat/' + id);
  },

  count: function(){
    return axios.get('/api/surat/count');
  },
}