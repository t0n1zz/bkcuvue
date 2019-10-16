export default {
  
  index: function( p, status, awal, akhir ){
    return axios.get('/api/jalinanKlaim/status/' + status + '/' + awal + '/' + akhir,{params: p});
  },

  indexCu: function( p, cu, status, awal, akhir  ){
    return axios.get('/api/jalinanKlaim/indexCu/' + cu + '/status/' + status + '/' + awal + '/' + akhir, {params: p});
  },

  indexCair: function( tanggal){
    return axios.get('/api/jalinanKlaim/indexCair/' + tanggal);
  },

  indexLaporanCair: function( awal, akhir){
    return axios.get('/api/jalinanKlaim/indexLaporanCair/' + awal + '/' + akhir);
  },

  indexLaporanPenyebab: function( awal, akhir, cu){
    return axios.get('/api/jalinanKlaim/indexLaporanPenyebab/' + awal + '/' + akhir + '/' + cu);
  },

  indexLaporanUsia: function( awal, akhir, cu){
    return axios.get('/api/jalinanKlaim/indexLaporanUsia/' + awal + '/' + akhir + '/' + cu);
  },

  indexLaporanLama: function( awal, akhir, cu){
    return axios.get('/api/jalinanKlaim/indexLaporanLama/' + awal + '/' + akhir + '/' + cu);
  },

  getPencairan: function(){
    return axios.get('/api/jalinanKlaim/getPencairan');
  },

  create: function(){
    return axios.get('/api/jalinanKlaim/create');
  },

  store: function ( form ){
    return axios.post('/api/jalinanKlaim/store', form);
  },

  edit: function( nik, cu, tipe ){
    return axios.get('/api/jalinanKlaim/edit/' + nik + '/cu/' + cu + '/tipe/' + tipe);
  },

  update: function ( id, form ){
    return axios.post('/api/jalinanKlaim/update/' + id, form);
  },

  updateStatus: function ( id, form ){
    return axios.post('/api/jalinanKlaim/updateStatus/' + id, form);
  },

  updateSelesai: function ( id ){
    return axios.post('/api/jalinanKlaim/updateSelesai/' + id);
  },

  updateVerifikasi: function ( id, user ){
    return axios.post('/api/jalinanKlaim/updateVerifikasi/' + id, user);
  },

  updateCair: function ( id, awal, akhir ){
    return axios.post('/api/jalinanKlaim/updateCair/' + id + '/' + awal + '/' + akhir);
  },

  updateCairBatal: function ( id, awal, akhir ){
    return axios.post('/api/jalinanKlaim/updateCairBatal/' + id + '/' + awal + '/' + akhir);
  },

  updateCairAll: function ( awal, akhir ){
    return axios.post('/api/jalinanKlaim/updateCairAll/' + awal + '/' + akhir);
  },

  destroy: function( id ){
    return axios.delete('/api/jalinanKlaim/' + id);
  },

  history: function(){
    return axios.get('/api/jalinanKlaim/history');
  },

  cariData: function( nik ){
    return axios.get('/api/jalinanKlaim/cariData/' + nik);
  },

  cekData: function( id ){
    return axios.get('/api/jalinanKlaim/cekData/' + id);
  },

}