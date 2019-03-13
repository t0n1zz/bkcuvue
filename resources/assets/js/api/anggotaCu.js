export default {
  
  index: function( p ){
    return axios.get('/api/anggotaCu' ,{params: p});
  },

  indexCu: function( p, id ){
    return axios.get('/api/anggotaCu/indexCu/' + id, {params: p});
  },

  detail: function( id ){
    return axios.get('/api/anggotaCu/detail/' + id);
  },

  create: function(){
    return axios.get('/api/anggotaCu/create');
  },

  store: function ( form ){
    return axios.post('/api/anggotaCu/store', form);
  },

  editIdentitas: function( id ){
    return axios.get('/api/anggotaCu/editIdentitas/' + id);
  },

  updateIdentitas: function ( id, form ){
    return axios.post('/api/anggotaCu/updateIdentitas/' + id, form);
  },

  destroy: function( id ){
    return axios.delete('/api/anggotaCu/' + id);
  },

  uploadExcel: function ( form ){
    return axios.post('/api/anggotaCu/uploadExcel', form);
  },
  
  uploadExcelNew: function ( form ){
    return axios.post('/api/anggotaCu/uploadExcelNew', form);
  },

  history: function(){
    return axios.get('/api/anggotaCu/history');
  },

  cariData: function( nik ){
    return axios.get('/api/anggotaCu/cariData/' + nik);
  },
}