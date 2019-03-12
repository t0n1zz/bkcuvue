export default {
  
  index: function( p ){
    return axios.get('/api/diklatBKCU' , {params: p});
  },

  indexBaru: function(){
    return axios.get('/api/diklatBKCU/baru');
  },

  indexMulai: function(){
    return axios.get('/api/diklatBKCU/mulai');
  },

  indexBuka: function(){
    return axios.get('/api/diklatBKCU/buka');
  },

  indexJalan: function(){
    return axios.get('/api/diklatBKCU/jalan');
  },

  indexPeriode: function( p, periode ){
    return axios.get('/api/diklatBKCU/periode/' + periode , {params: p});
  },

  indexPeserta: function( p, id ){
    return axios.get('/api/diklatBKCU/indexPeserta/' + id , {params: p});
  },

  indexPesertaTerdaftar: function(id){
    return axios.get('/api/diklatBKCU/indexPesertaTerdaftar/' + id);
  },

  indexPesertaMenunggu: function(id){
    return axios.get('/api/diklatBKCU/indexPesertaMenunggu/' + id);
  },

  indexPesertaBerjalan: function(id){
    return axios.get('/api/diklatBKCU/indexPesertaBerjalan/' + id);
  },

  indexPesertaBatal: function(id){
    return axios.get('/api/diklatBKCU/indexPesertaBatal/' + id);
  },

  indexPesertaCu: function( p, id, cu ){
    return axios.get('/api/diklatBKCU/indexPesertaCu/' + id + '/cu/' + cu  , {params: p});
  },

  getPeriode: function(){
    return axios.get('/api/diklatBKCU/getPeriode');
  },

  create: function(){
    return axios.get('/api/diklatBKCU/create');
  },

  store: function ( form ){
    return axios.post('/api/diklatBKCU/store', form);
  },

  storePeserta: function ( id, form ){
    return axios.post('/api/diklatBKCU/storePeserta/' + id, form);
  },

  edit: function( id ){
    return axios.get('/api/diklatBKCU/edit/' + id);
  },

  update: function ( id, form ){
    return axios.post('/api/diklatBKCU/update/' + id, form);
  },

  updatePeserta: function ( id, form ){
    return axios.post('/api/diklatBKCU/updatePeserta/' + id, form);
  },

  updateStatus: function ( id, form ){
    return axios.post('/api/diklatBKCU/updateStatus/' + id, form);
  },

  destroy: function( id ){
    return axios.delete('/api/diklatBKCU/' + id);
  },

  destroyPeserta: function( id ){
    return axios.delete('/api/diklatBKCU/destroyPeserta/' + id);
  },

  batalPeserta: function( id , form){
    return axios.post('/api/diklatBKCU/batalPeserta/' + id, form);
  },

  countPeserta: function( id ){
    return axios.get('/api/diklatBKCU/countPeserta/' + id);
  },
}