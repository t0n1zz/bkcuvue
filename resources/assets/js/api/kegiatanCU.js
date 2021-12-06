export default {
  
    index: function( p, tipe ){
      return axios.get('/api/kegiatanCU/index/' + tipe , {params: p});
    },
  
    indexBaru: function(){
      return axios.get('/api/kegiatanCU/baru');
    },
  
    indexMulai: function(){
      return axios.get('/api/kegiatanCU/mulai');
    },
  
    indexBuka: function(){
      return axios.get('/api/kegiatanCU/buka');
    },
  
    indexJalan: function( p ){
      return axios.get('/api/kegiatanCU/jalan', {params: p});
    },
  
    indexPeriode: function( p, tipe, periode ){
      return axios.get('/api/kegiatanCU/periode/' + tipe + '/' + periode , {params: p});
    },
  
    indexPeserta: function( p, id ){
      return axios.get('/api/kegiatanCU/indexPeserta/' + id , {params: p});
    },
  
    indexPesertaCountCu: function( id ){
      return axios.get('/api/kegiatanCU/indexPesertaCountCu/' + id);
    },
  
    indexPesertaHadirCountCu: function( id ){
      return axios.get('/api/kegiatanCU/indexPesertaHadirCountCu/' + id);
    },
  
    indexMateri: function( p, id ){
      return axios.get('/api/kegiatanCU/indexMateri/' + id , {params: p});
    },
  
    indexKeputusan: function( p, id ){
      return axios.get('/api/kegiatanCU/indexKeputusan/' + id , {params: p});
    },
  
    indexKeputusanCount: function( id ){
      return axios.get('/api/kegiatanCU/indexKeputusanCount/' + id);
    },
  
    indexKeputusanKomentar: function( p, id ){
      return axios.get('/api/kegiatanCU/indexKeputusanKomentar/' + id , {params: p});
    },
  
    indexPertanyaan: function( p, id ){
      return axios.get('/api/kegiatanCU/indexPertanyaan/' + id , {params: p});
    },
  
    indexPertanyaanKomentar: function( p, id ){
      return axios.get('/api/kegiatanCU/indexPertanyaanKomentar/' + id , {params: p});
    },
  
    indexTugas: function( p, id ){
      return axios.get('/api/kegiatanCU/indexTugas/' + id , {params: p});
    },
  
    indexTugasJawaban: function( p, id ){
      return axios.get('/api/kegiatanCU/indexTugasJawaban/' + id , {params: p});
    },
  
    indexPesertaHadir: function( p, id ){
      return axios.get('/api/kegiatanCU/indexPesertaHadir/' + id , {params: p});
    },
  
    indexPesertaTerdaftar: function(id){
      return axios.get('/api/kegiatanCU/indexPesertaTerdaftar/' + id);
    },
  
    indexPesertaMenunggu: function(id){
      return axios.get('/api/kegiatanCU/indexPesertaMenunggu/' + id);
    },
  
    indexPesertaBerjalan: function(id){
      return axios.get('/api/kegiatanCU/indexPesertaBerjalan/' + id);
    },
  
    indexPesertaBatal: function(id){
      return axios.get('/api/kegiatanCU/indexPesertaBatal/' + id);
    },
  
    indexPesertaCu: function( p, id, cu ){
      return axios.get('/api/kegiatanCU/indexPesertaCu/' + id + '/cu/' + cu  , {params: p});
    },
  
    checkPeserta: function( kegiatan_id, aktivis_id ){
      return axios.get('/api/kegiatanCU/checkPeserta/' + kegiatan_id + '/' + aktivis_id);
    },
  
    checkPanitia: function( kegiatan_id, aktivis_id ){
      return axios.get('/api/kegiatanCU/checkPanitia/' + kegiatan_id + '/' + aktivis_id);
    },
  
    getPeriode: function(tipe){
      return axios.get('/api/kegiatanCU/getPeriode/' + tipe);
    },
  
    create: function(){
      return axios.get('/api/kegiatanCU/create');
    },
  
    store: function ( tipe, form ){
      return axios.post('/api/kegiatanCU/store/' + tipe, form);
    },
  
    storePeserta: function ( tipe , id, form ){
      return axios.post('/api/kegiatanCU/storePeserta/' + tipe + '/' + id, form);
    },
  
    storeMateri: function ( tipe, id, form ){
      return axios.post('/api/kegiatanCU/storeMateri/' + tipe + '/' + id, form);
    },
  
    storeKeputusan: function ( id, form ){
      return axios.post('/api/kegiatanCU/storeKeputusan/' + id, form);
    },
  
    storeKeputusanKomentar: function ( id, form ){
      return axios.post('/api/kegiatanCU/storeKeputusanKomentar/' + id, form);
    },
  
    storePertanyaan: function ( id, form ){
      return axios.post('/api/kegiatanCU/storePertanyaan/' + id, form);
    },
  
    storePertanyaanKomentar: function ( id, form ){
      return axios.post('/api/kegiatanCU/storePertanyaanKomentar/' + id, form);
    },
  
    storeTugas: function ( tipe, id, form ){
      return axios.post('/api/kegiatanCU/storeTugas/' + tipe + '/' + id, form);
    },
  
    storeTugasJawaban: function ( tipe, form ){
      return axios.post('/api/kegiatanCU/storeTugasJawaban/' + tipe, form);
    },
  
    edit: function( id ){
      return axios.get('/api/kegiatanCU/edit/' + id);
    },
  
    editTugasJawaban: function( id ){
      return axios.get('/api/kegiatanCU/editTugasJawaban/' + id);
    },
  
    update: function ( id, form ){
      return axios.post('/api/kegiatanCU/update/' + id, form);
    },
  
    updatePeserta: function ( id, form ){
      return axios.post('/api/kegiatanCU/updatePeserta/' + id, form);
    },
  
    updateMateri: function ( id, form ){
      return axios.post('/api/kegiatanCU/updateMateri/' + id, form);
    },
  
    updateKeputusan: function ( id, form ){
      return axios.post('/api/kegiatanCU/updateKeputusan/' + id, form);
    },
  
    updateKeputusanKomentar: function ( id, form ){
      return axios.post('/api/kegiatanCU/updateKeputusanKomentar/' + id, form);
    },
  
    updatePertanyaan: function ( id, form ){
      return axios.post('/api/kegiatanCU/updatePertanyaan/' + id, form);
    },
  
    updatePertanyaanKomentar: function ( id, form ){
      return axios.post('/api/kegiatanCU/updatePertanyaanKomentar/' + id, form);
    },
  
    updateTugas: function ( id, form ){
      return axios.post('/api/kegiatanCU/updateTugas/' + id, form);
    },
  
    updateTugasJawaban: function ( id, form ){
      return axios.post('/api/kegiatanCU/updateTugasJawaban/' + id, form);
    },
  
    updatePesertaHadir: function ( kegiatan_id, aktivis_id ){
      return axios.post('/api/kegiatanCU/updatePesertaHadir/' + kegiatan_id + '/' + aktivis_id);
    },
  
    updatePanitiaHadir: function ( kegiatan_id, aktivis_id ){
      return axios.post('/api/kegiatanCU/updatePanitiaHadir/' + kegiatan_id + '/' + aktivis_id);
    },
  
    updateStatus: function ( id, form ){
      return axios.post('/api/kegiatanCU/updateStatus/' + id, form);
    },
  
    jawabanPertanyaan: function( id, tipe ){
      return axios.post('/api/kegiatanCU/jawabanPertanyaan/' + id + '/' + tipe);
    },
  
    destroy: function( id ){
      return axios.delete('/api/kegiatanCU/' + id);
    },
  
    destroyPeserta: function( id ){
      return axios.delete('/api/kegiatanCU/destroyPeserta/' + id);
    },
  
    destroyMateri: function( tipe, id ){
      return axios.delete('/api/kegiatanCU/destroyMateri/' + tipe + '/' + id);
    },
  
    destroyKeputusan: function( id ){
      return axios.delete('/api/kegiatanCU/destroyKeputusan/' + id);
    },
  
    destroyKeputusanKomentar: function( id ){
      return axios.delete('/api/kegiatanCU/destroyKeputusanKomentar/' + id);
    },
  
    destroyPertanyaan: function( id ){
      return axios.delete('/api/kegiatanCU/destroyPertanyaan/' + id);
    },
  
    destroyPertanyaanKomentar: function( id ){
      return axios.delete('/api/kegiatanCU/destroyPertanyaanKomentar/' + id);
    },
  
    destroyTugas: function( tipe, id ){
      return axios.delete('/api/kegiatanCU/destroyTugas/' + tipe + '/' + id);
    },
  
    destroyTugasJawaban: function( tipe, id ){
      return axios.delete('/api/kegiatanCU/destroyTugasJawaban/' + tipe + '/' + id);
    },
  
    batalPeserta: function( tipe, id, form){
      return axios.post('/api/kegiatanCU/batalPeserta/' + tipe + '/' + id, form);
    },
  
    countPeserta: function( id ){
      return axios.get('/api/kegiatanCU/countPeserta/' + id);
    },
  
    countPesertaHadir: function( id ){
      return axios.get('/api/kegiatanCU/countPesertaHadir/' + id);
    },
  
    countKeputusan: function( id, cu, user ){
      return axios.get('/api/kegiatanCU/countKeputusan/' + id + '/' + cu + '/' + user);
    },
  
    countPertanyaan: function( id, cu, user ){
      return axios.get('/api/kegiatanCU/countPertanyaan/' + id + '/' + cu + '/' + user);
    },
  }