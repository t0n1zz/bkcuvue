export default {
  
  index: function( p ){
    return axios.get('/api/assesmentCuleg' , {params: p});
  },

  indexCu: function( p, id ){
    return axios.get('/api/assesmentCuleg/indexCu/' + id, {params: p});
  },

  create: function(){
    return axios.get('/api/assesmentCuleg/create');
  },

  store: function ( form ){
    return axios.post('/api/assesmentCuleg/store', form);
  },

  edit: function( id ){
    return axios.get('/api/assesmentCuleg/edit/' + id);
  },

  editPenilaian: function( id ){
    return axios.get('/api/assesmentCuleg/editPenilaian/' + id);
  },

  update: function ( id, form ){
    return axios.post('/api/assesmentCuleg/update/' + id, form);
  },

  updateSingle: function ( id, perspektif,  form ){
    return axios.post('/api/assesmentCuleg/updateSingle/' + id + '/' + perspektif, form);
  },

  destroy: function( id ){
    return axios.delete('/api/assesmentCuleg/' + id);
  },

  count: function(){
    return axios.get('/api/assesmentCuleg/count');
  },

  history: function(){
    return axios.get('/api/assesmentCuleg/history');
  },

  cariData: function( cu, periode ){
    return axios.get('/api/assesmentCuleg/cariData/' + cu + '/' + periode);
  },
}