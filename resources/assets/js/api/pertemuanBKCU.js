export default {
  
  index: function( p ){
    return axios.get('/api/pertemuanBKCU' , {params: p});
  },

  indexBaru: function(){
    return axios.get('/api/pertemuanBKCU/baru');
  },

  indexMulai: function(){
    return axios.get('/api/pertemuanBKCU/mulai');
  },

  indexBuka: function(){
    return axios.get('/api/pertemuanBKCU/buka');
  },

  indexJalan: function(){
    return axios.get('/api/pertemuanBKCU/jalan');
  },

  indexPeriode: function( p, periode ){
    return axios.get('/api/pertemuanBKCU/periode/' + periode , {params: p});
  },

  indexPeserta: function( p, id ){
    return axios.get('/api/pertemuanBKCU/indexPeserta/' + id , {params: p});
  },

  indexMateri: function( p, id ){
    return axios.get('/api/pertemuanBKCU/indexMateri/' + id , {params: p});
  },

  indexDiskusi: function( p, id ){
    return axios.get('/api/pertemuanBKCU/indexDiskusi/' + id , {params: p});
  },

  indexPesertaHadir: function( p, id ){
    return axios.get('/api/pertemuanBKCU/indexPesertaHadir/' + id , {params: p});
  },

  indexPesertaTerdaftar: function(id){
    return axios.get('/api/pertemuanBKCU/indexPesertaTerdaftar/' + id);
  },

  indexPesertaMenunggu: function(id){
    return axios.get('/api/pertemuanBKCU/indexPesertaMenunggu/' + id);
  },

  indexPesertaBerjalan: function(id){
    return axios.get('/api/pertemuanBKCU/indexPesertaBerjalan/' + id);
  },

  indexPesertaBatal: function(id){
    return axios.get('/api/pertemuanBKCU/indexPesertaBatal/' + id);
  },

  indexPesertaCu: function( p, id, cu ){
    return axios.get('/api/pertemuanBKCU/indexPesertaCu/' + id + '/cu/' + cu  , {params: p});
  },

  checkPeserta: function( kegiatan_id, aktivis_id ){
    return axios.get('/api/pertemuanBKCU/checkPeserta/' + kegiatan_id + '/' + aktivis_id);
  },

  checkPanitia: function( kegiatan_id, aktivis_id ){
    return axios.get('/api/pertemuanBKCU/checkPanitia/' + kegiatan_id + '/' + aktivis_id);
  },

  getPeriode: function(){
    return axios.get('/api/pertemuanBKCU/getPeriode');
  },

  create: function(){
    return axios.get('/api/pertemuanBKCU/create');
  },

  store: function ( form ){
    return axios.post('/api/pertemuanBKCU/store', form);
  },

  storePeserta: function ( id, form ){
    return axios.post('/api/pertemuanBKCU/storePeserta/' + id, form);
  },

  storeMateri: function ( id, form ){
    return axios.post('/api/pertemuanBKCU/storeMateri/' + id, form);
  },

  edit: function( id ){
    return axios.get('/api/pertemuanBKCU/edit/' + id);
  },

  update: function ( id, form ){
    return axios.post('/api/pertemuanBKCU/update/' + id, form);
  },

  updatePeserta: function ( id, form ){
    return axios.post('/api/pertemuanBKCU/updatePeserta/' + id, form);
  },

  updateMateri: function ( id, form ){
    return axios.post('/api/pertemuanBKCU/updateMateri/' + id, form);
  },

  updatePesertaHadir: function ( kegiatan_id, aktivis_id ){
    return axios.post('/api/pertemuanBKCU/updatePesertaHadir/' + kegiatan_id + '/' + aktivis_id);
  },

  updatePanitiaHadir: function ( kegiatan_id, aktivis_id ){
    return axios.post('/api/pertemuanBKCU/updatePanitiaHadir/' + kegiatan_id + '/' + aktivis_id);
  },

  updateStatus: function ( id, form ){
    return axios.post('/api/pertemuanBKCU/updateStatus/' + id, form);
  },

  destroy: function( id ){
    return axios.delete('/api/pertemuanBKCU/' + id);
  },

  destroyPeserta: function( id ){
    return axios.delete('/api/pertemuanBKCU/destroyPeserta/' + id);
  },

  destroyMateri: function( id ){
    return axios.delete('/api/pertemuanBKCU/destroyMateri/' + id);
  },

  batalPeserta: function( id , form){
    return axios.post('/api/pertemuanBKCU/batalPeserta/' + id, form);
  },

  countPeserta: function( id ){
    return axios.get('/api/pertemuanBKCU/countPeserta/' + id);
  },

  countPesertaHadir: function( id ){
    return axios.get('/api/pertemuanBKCU/countPesertaHadir/' + id);
  },
}