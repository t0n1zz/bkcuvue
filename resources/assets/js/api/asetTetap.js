export default {
  
  index: function( p ){
    return axios.get('/api/asetTetap' , {params: p});
  },
  
  create: function(){
    return axios.get('/api/asetTetap/create');
  },

  store: function ( form ){
    return axios.post('/api/asetTetap/store', form);
  },

  edit: function( id ){
    return axios.get('/api/asetTetap/edit/' + id);
  },

  update: function ( id, form ){
    return axios.post('/api/asetTetap/update/' + id, form);
  },

  updateKondisi: function ( id, form ){
    return axios.post('/api/asetTetap/updateKondisi/' + id, form);
  },

  destroy: function( id ){
    return axios.delete('/api/asetTetap/' + id);
  },

  count: function(){
    return axios.get('/api/asetTetap/count');
  },

  cariData: function( kode ){
    return axios.get('/api/asetTetap/cariData/' + kode);
  },
}