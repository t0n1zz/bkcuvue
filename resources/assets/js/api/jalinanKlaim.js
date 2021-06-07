export default {
  
  index: function( p, status, awal, akhir ){
    return axios.get('/api/jalinanKlaim/status/' + status + '/' + awal + '/' + akhir,{params: p});
  },

  indexCu: function( p, cu, tp, status, awal, akhir  ){
    return axios.get('/api/jalinanKlaim/indexCu/' + cu + '/tp/' + tp + '/status/' + status + '/' + awal + '/' + akhir, {params: p});
  },

  indexCair: function( tanggal){
    return axios.get('/api/jalinanKlaim/indexCair/' + tanggal);
  },
  
  indexLaporanCu: function( status, awal, akhir){
    return axios.get('/api/jalinanKlaim/indexLaporanCu/' + status + '/' + awal + '/' + akhir);
  },

  indexLaporanCuDetail: function( p, cu, status, awal, akhir  ){
    return axios.get('/api/jalinanKlaim/indexLaporanCuDetail/' + cu + '/' + status + '/' + awal + '/' + akhir, {params: p});
  },

  indexLaporanPenyebab: function( status, cu, awal, akhir){
    return axios.get('/api/jalinanKlaim/indexLaporanPenyebab/' + cu + '/' + status + '/' + awal + '/' + akhir);
  },

  indexLaporanPenyebabDetail: function( p, cu, status, kategori, awal, akhir ){
    return axios.get('/api/jalinanKlaim/indexLaporanPenyebabDetail/' + cu +  '/' + status + '/' + kategori + '/' + awal + '/' + akhir , {params: p});
  },

  indexLaporanUsia: function( status, cu, awal, akhir){
    return axios.get('/api/jalinanKlaim/indexLaporanUsia/' + cu + '/' + status + '/' + awal + '/' + akhir);
  },

  indexLaporanUsiaDetail: function( p, cu, status, dari, ke, awal, akhir ){
    return axios.get('/api/jalinanKlaim/indexLaporanUsiaDetail/' + cu +  '/' + status + '/' + dari + '/' + ke + '/' + awal + '/' + akhir , {params: p});
  },

  indexLaporanLama: function( status, cu, awal, akhir){
    return axios.get('/api/jalinanKlaim/indexLaporanLama/' + cu + '/' + status + '/' + awal + '/' + akhir);
  },

  indexLaporanLamaDetail: function( p, cu, status, dari, ke, awal, akhir ){
    return axios.get('/api/jalinanKlaim/indexLaporanLamaDetail/' + cu +  '/' + status + '/' + dari + '/' + ke + '/' + awal + '/' + akhir , {params: p});
  },

  getPencairan: function(){
    return axios.get('/api/jalinanKlaim/getPencairan');
  },

  getStatus: function( status_klaim ){
    return axios.get('/api/jalinanKlaim/getStatus/' + status_klaim);
  },

  getVerifikator: function( verifikator_pengurus,verifikator_pengawas, verifikator_manajemen ){
    return axios.get('/api/jalinanKlaim/getVerifikator/' + verifikator_pengurus + '/' + verifikator_pengawas + '/' + verifikator_manajemen);
  },

  getHistory: function( id ){
    return axios.get('/api/jalinanKlaim/getHistory/' + id);
  },

  create: function(){
    return axios.get('/api/jalinanKlaim/create');
  },

  store: function ( form ){
    return axios.post('/api/jalinanKlaim/store', form);
  },

  getKlaim: function( id ){
    return axios.get('/api/jalinanKlaim/getKlaim/' + id);
  },

  edit: function( nik, cu, tipe ){
    return axios.get('/api/jalinanKlaim/edit/' + nik + '/cu/' + cu + '/tipe/' + tipe);
  },

  update: function ( id, form ){
    return axios.post('/api/jalinanKlaim/update/' + id, form);
  },

  periksaKoreksi: function ( id, form ){
    return axios.post('/api/jalinanKlaim/periksaKoreksi/' + id, form);
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

  cariDataId: function( id ){
    return axios.get('/api/jalinanKlaim/cariDataId/' + id);
  },

  cekData: function( id ){
    return axios.get('/api/jalinanKlaim/cekData/' + id);
  },

}