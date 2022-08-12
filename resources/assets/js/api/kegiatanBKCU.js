export default {
  
  index: function( p, tipe ){
    return axios.get('/api/kegiatanBKCU/index/' + tipe , {params: p});
  },

  indexBaru: function(){
    return axios.get('/api/kegiatanBKCU/baru');
  },

  indexMulai: function(){
    return axios.get('/api/kegiatanBKCU/mulai');
  },

  indexBuka: function(){
    return axios.get('/api/kegiatanBKCU/buka');
  },

  indexJalan: function( p ){
    return axios.get('/api/kegiatanBKCU/jalan', {params: p});
  },

  indexDiikuti: function( p ){
    return axios.get('/api/kegiatanBKCU/diikuti', {params: p});
  },

  indexPeriode: function( p, tipe, periode ){
    return axios.get('/api/kegiatanBKCU/periode/' + tipe + '/' + periode , {params: p});
  },

  indexSemuaPeserta: function( p, tipe ){
    return axios.get('/api/kegiatanBKCU/indexSemuaPeserta/' + tipe, {params: p});
  },

  indexSemuaPesertaMitra: function( p, tipe ){
    return axios.get('/api/kegiatanBKCU/indexSemuaPesertaMitra/' + tipe, {params: p});
  },

  indexSemuaPesertaCu: function( p, tipe, cu ){
    return axios.get('/api/kegiatanBKCU/indexSemuaPesertaCu/' + tipe + '/cu/' + cu  , {params: p});
  },

  indexPeserta: function( p, id ){
    return axios.get('/api/kegiatanBKCU/indexPeserta/' + id , {params: p});
  },

  indexPesertaCu: function( p, id, cu ){
    return axios.get('/api/kegiatanBKCU/indexPesertaCu/' + id + '/cu/' + cu  , {params: p});
  },

  indexPesertaCountCu: function( id ){
    return axios.get('/api/kegiatanBKCU/indexPesertaCountCu/' + id);
  },

  indexPesertaHadirCountCu: function( id ){
    return axios.get('/api/kegiatanBKCU/indexPesertaHadirCountCu/' + id);
  },

  indexMateri: function( p, id ){
    return axios.get('/api/kegiatanBKCU/indexMateri/' + id , {params: p});
  },

  indexListMateri: function(id) {
    return axios.get('/api/kegiatanBKCU/indexListMateri/' + id);
  },

  indexNilaiListMateri: function(id) {
      return axios.get('/api/kegiatanBKCU/indexNilaiListMateri/' + id);
  },

  editNilai: function(id, kegiatan_id) {
      return axios.get('/api/kegiatanBKCU/editNilai/' + id + '/' + kegiatan_id);
  },

  indexKeputusan: function( p, id ){
    return axios.get('/api/kegiatanBKCU/indexKeputusan/' + id , {params: p});
  },

  indexKeputusanCount: function( id ){
    return axios.get('/api/kegiatanBKCU/indexKeputusanCount/' + id);
  },

  indexKeputusanKomentar: function( p, id ){
    return axios.get('/api/kegiatanBKCU/indexKeputusanKomentar/' + id , {params: p});
  },

  indexPertanyaan: function( p, id ){
    return axios.get('/api/kegiatanBKCU/indexPertanyaan/' + id , {params: p});
  },

  indexPertanyaanKomentar: function( p, id ){
    return axios.get('/api/kegiatanBKCU/indexPertanyaanKomentar/' + id , {params: p});
  },

  indexTugas: function( p, id ){
    return axios.get('/api/kegiatanBKCU/indexTugas/' + id , {params: p});
  },

  indexTugasJawaban: function( p, id ){
    return axios.get('/api/kegiatanBKCU/indexTugasJawaban/' + id , {params: p});
  },

  indexPesertaHadir: function( p, id ){
    return axios.get('/api/kegiatanBKCU/indexPesertaHadir/' + id , {params: p});
  },

  indexPesertaTerdaftar: function(id){
    return axios.get('/api/kegiatanBKCU/indexPesertaTerdaftar/' + id);
  },

  indexPesertaMenunggu: function(id){
    return axios.get('/api/kegiatanBKCU/indexPesertaMenunggu/' + id);
  },

  indexPesertaBerjalan: function(id){
    return axios.get('/api/kegiatanBKCU/indexPesertaBerjalan/' + id);
  },

  indexPesertaBatal: function(id){
    return axios.get('/api/kegiatanBKCU/indexPesertaBatal/' + id);
  },

  indexKegiatan: function(){
    return axios.get('/api/kegiatanBKCU/kegiatan');
  },

  checkPeserta: function( kegiatan_id, aktivis_id ){
    return axios.get('/api/kegiatanBKCU/checkPeserta/' + kegiatan_id + '/' + aktivis_id);
  },

  checkPanitia: function( kegiatan_id, aktivis_id ){
    return axios.get('/api/kegiatanBKCU/checkPanitia/' + kegiatan_id + '/' + aktivis_id);
  },

  getPeriode: function(tipe){
    return axios.get('/api/kegiatanBKCU/getPeriode/' + tipe);
  },

  create: function(){
    return axios.get('/api/kegiatanBKCU/create');
  },

  store: function ( tipe, form ){
    return axios.post('/api/kegiatanBKCU/store/' + tipe, form);
  },

  storePeserta: function ( tipe , id, form ){
    return axios.post('/api/kegiatanBKCU/storePeserta/' + tipe + '/' + id, form);
  },

  storeMateri: function ( tipe, id, form ){
    return axios.post('/api/kegiatanBKCU/storeMateri/' + tipe + '/' + id, form);
  },

  storeListMateri: function(tipe, id, form) {
    return axios.post('/api/kegiatanBKCU/storeListMateri/' + tipe + '/' + id, form);
  },

  saveNilai: function(id, form) {
    return axios.post('/api/kegiatanBKCU/saveNilai/' + id, form);
  },

  storeKeputusan: function ( id, form ){
    return axios.post('/api/kegiatanBKCU/storeKeputusan/' + id, form);
  },

  storeKeputusanKomentar: function ( id, form ){
    return axios.post('/api/kegiatanBKCU/storeKeputusanKomentar/' + id, form);
  },

  storePertanyaan: function ( id, form ){
    return axios.post('/api/kegiatanBKCU/storePertanyaan/' + id, form);
  },

  storePertanyaanKomentar: function ( id, form ){
    return axios.post('/api/kegiatanBKCU/storePertanyaanKomentar/' + id, form);
  },

  storeTugas: function ( tipe, id, form ){
    return axios.post('/api/kegiatanBKCU/storeTugas/' + tipe + '/' + id, form);
  },

  storeTugasJawaban: function ( tipe, form ){
    return axios.post('/api/kegiatanBKCU/storeTugasJawaban/' + tipe, form);
  },

  edit: function( id ){
    return axios.get('/api/kegiatanBKCU/edit/' + id);
  },

  editTugasJawaban: function( id ){
    return axios.get('/api/kegiatanBKCU/editTugasJawaban/' + id);
  },

  update: function ( id, form ){
    return axios.post('/api/kegiatanBKCU/update/' + id, form);
  },

  updatePeserta: function ( id, form ){
    return axios.post('/api/kegiatanBKCU/updatePeserta/' + id, form);
  },

  updateMateri: function ( id, form ){
    return axios.post('/api/kegiatanBKCU/updateMateri/' + id, form);
  },

  updateListMateri: function(id, form) {
    return axios.post('/api/kegiatanBKCU/updateListMateri/' + id, form);
  },

  updateKeputusan: function ( id, form ){
    return axios.post('/api/kegiatanBKCU/updateKeputusan/' + id, form);
  },

  updateKeputusanKomentar: function ( id, form ){
    return axios.post('/api/kegiatanBKCU/updateKeputusanKomentar/' + id, form);
  },

  updatePertanyaan: function ( id, form ){
    return axios.post('/api/kegiatanBKCU/updatePertanyaan/' + id, form);
  },

  updatePertanyaanKomentar: function ( id, form ){
    return axios.post('/api/kegiatanBKCU/updatePertanyaanKomentar/' + id, form);
  },

  updateTugas: function ( id, form ){
    return axios.post('/api/kegiatanBKCU/updateTugas/' + id, form);
  },

  updateTugasJawaban: function ( id, form ){
    return axios.post('/api/kegiatanBKCU/updateTugasJawaban/' + id, form);
  },

  updatePesertaHadir: function ( kegiatan_id, aktivis_id ){
    return axios.post('/api/kegiatanBKCU/updatePesertaHadir/' + kegiatan_id + '/' + aktivis_id);
  },

  updatePanitiaHadir: function ( kegiatan_id, aktivis_id ){
    return axios.post('/api/kegiatanBKCU/updatePanitiaHadir/' + kegiatan_id + '/' + aktivis_id);
  },

  updateStatus: function ( id, form ){
    return axios.post('/api/kegiatanBKCU/updateStatus/' + id, form);
  },

  jawabanPertanyaan: function( id, tipe ){
    return axios.post('/api/kegiatanBKCU/jawabanPertanyaan/' + id + '/' + tipe);
  },

  destroy: function( id ){
    return axios.delete('/api/kegiatanBKCU/' + id);
  },

  destroyPeserta: function( id ){
    return axios.delete('/api/kegiatanBKCU/destroyPeserta/' + id);
  },

  destroyMateri: function( tipe, id ){
    return axios.delete('/api/kegiatanBKCU/destroyMateri/' + tipe + '/' + id);
  },

  destroyListMateri: function(tipe, id) {
    return axios.delete('/api/kegiatanBKCU/destroyListMateri/' + tipe + '/' + id);
  },

  destroyKeputusan: function( id ){
    return axios.delete('/api/kegiatanBKCU/destroyKeputusan/' + id);
  },

  destroyKeputusanKomentar: function( id ){
    return axios.delete('/api/kegiatanBKCU/destroyKeputusanKomentar/' + id);
  },

  destroyPertanyaan: function( id ){
    return axios.delete('/api/kegiatanBKCU/destroyPertanyaan/' + id);
  },

  destroyPertanyaanKomentar: function( id ){
    return axios.delete('/api/kegiatanBKCU/destroyPertanyaanKomentar/' + id);
  },

  destroyTugas: function( tipe, id ){
    return axios.delete('/api/kegiatanBKCU/destroyTugas/' + tipe + '/' + id);
  },

  destroyTugasJawaban: function( tipe, id ){
    return axios.delete('/api/kegiatanBKCU/destroyTugasJawaban/' + tipe + '/' + id);
  },

  batalPeserta: function( tipe, id, form){
    return axios.post('/api/kegiatanBKCU/batalPeserta/' + tipe + '/' + id, form);
  },

  countJalan: function(){
    return axios.get('/api/kegiatanBKCU/countJalan');
  },

  countDiikuti: function(){
    return axios.get('/api/kegiatanBKCU/countDiikuti');
  },

  countPeserta: function( id ){
    return axios.get('/api/kegiatanBKCU/countPeserta/' + id);
  },

  countPesertaHadir: function( id ){
    return axios.get('/api/kegiatanBKCU/countPesertaHadir/' + id);
  },

  countKeputusan: function( id, cu, user ){
    return axios.get('/api/kegiatanBKCU/countKeputusan/' + id + '/' + cu + '/' + user);
  },

  countPertanyaan: function( id, cu, user ){
    return axios.get('/api/kegiatanBKCU/countPertanyaan/' + id + '/' + cu + '/' + user);
  },
}