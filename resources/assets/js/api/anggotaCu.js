export default {
  
  index: function( p ){
    return axios.get('/api/anggotaCu' ,{params: p});
  },

  indexKeluar: function( p ){
    return axios.get('/api/anggotaCu/keluar' ,{params: p});
  },

  indexMeninggal: function( p ){
    return axios.get('/api/anggotaCu/indexMeninggal' ,{params: p});
  },

  indexCu: function( p, cu, tp ){
    return axios.get('/api/anggotaCu/indexCu/' + cu + '/' + tp, {params: p});
  },

  indexCuKeluar: function( p, cu, tp ){
    return axios.get('/api/anggotaCu/indexCuKeluar/' + cu + '/' + tp, {params: p});
  },

  indexCuMeninggal: function( p, cu, tp ){
    return axios.get('/api/anggotaCu/indexCuMeninggal/' + cu + '/' + tp, {params: p});
  },

  indexProduk: function( id, cu ){
    return axios.get('/api/anggotaCu/indexProduk/' + id + '/cu/' + cu);
  },

  indexProdukSaldo: function( p, id ){
    return axios.get('/api/anggotaCu/indexProdukSaldo/' + id, {params: p});
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

  updatePindahTp: function ( id, form ){
    return axios.post('/api/anggotaCu/updatePindahTp/' + id, form);
  },

  updateKeluar: function ( id, form ){
    return axios.post('/api/anggotaCu/updateKeluar/' + id, form);
  },

  updateBatalKeluar: function ( id ){
    return axios.post('/api/anggotaCu/updateBatalKeluar/' + id);
  },

  updateNik: function ( id, form ){
    return axios.post('/api/anggotaCu/updateNik/' + id, form);
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

  cariDataKTP: function( nik ){
    return axios.get('/api/anggotaCu/cariDataKTP/' + nik);
  },

  cariDataBA: function( id, ba ){
    return axios.get('/api/anggotaCu/cariDataBA/' + id + '/' + ba);
  },
}