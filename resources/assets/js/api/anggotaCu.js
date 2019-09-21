export default {
  
  index: function( p ){
    return axios.get('/api/anggotaCu' ,{params: p});
  },

  indexKeluar: function( p ){
    return axios.get('/api/anggotaCu/keluar' ,{params: p});
  },

  indexCu: function( p, id ){
    return axios.get('/api/anggotaCu/indexCu/' + id, {params: p});
  },

  indexCuKeluar: function( p, id ){
    return axios.get('/api/anggotaCu/indexCuKeluar/' + id, {params: p});
  },

  indexProduk: function( id, cu ){
    return axios.get('/api/anggotaCu/indexProduk/' + id + '/cu/' + cu);
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

  storeCu: function ( id, form ){
    return axios.post('/api/anggotaCu/storeCu/' + id, form);
  },

  storeProduk: function ( id, form ){
    return axios.post('/api/anggotaCu/storeProduk/' + id, form);
  },

  edit: function( id ){
    return axios.get('/api/anggotaCu/edit/' + id);
  },

  update: function ( id, form ){
    return axios.post('/api/anggotaCu/update/' + id, form);
  },

  updateCu: function ( id, form ){
    return axios.post('/api/anggotaCu/updateCu/' + id, form);
  },

  updateProduk: function ( id, form ){
    return axios.post('/api/anggotaCu/updateProduk/' + id, form);
  },

  updateKeluar: function ( id, form ){
    return axios.post('/api/anggotaCu/updateKeluar/' + id, form);
  },

  destroy: function( id, cu ){
    return axios.delete('/api/anggotaCu/' + id + '/cu/' + cu);
  },
  
  destroyCu: function( id ){
    return axios.delete('/api/anggotaCuCu/' + id);
  },

  destroyProduk: function( id ){
    return axios.delete('/api/anggotaProdukCu/' + id);
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

  cariData2: function( idCu, noba ){
    return axios.get('/api/anggotaCu/cariData2/cu/' + idCu + '/noba/' + noba);
  },
}