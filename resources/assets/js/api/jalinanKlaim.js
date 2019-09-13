export default {
  
  index: function( p, status, awal, akhir ){
    return axios.get('/api/jalinanKlaim/status/' + status + '/' + awal + '/' + akhir,{params: p});
  },

  indexCu: function( p, id, status, awal, akhir  ){
    return axios.get('/api/jalinanKlaim/indexCu/' + id + '/status/' + status + '/' + awal + '/' + akhir, {params: p});
  },

  indexCair: function( tanggal){
    return axios.get('/api/jalinanKlaim/indexCair/' + tanggal);
  },

  indexLaporanCair: function( awal, akhir){
    return axios.get('/api/jalinanKlaim/indexLaporanCair/' + awal + '/' + akhir);
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

  edit: function( nik, cu ){
    return axios.get('/api/jalinanKlaim/edit/' + nik + '/cu/' + cu);
  },

  update: function ( id, form ){
    return axios.post('/api/jalinanKlaim/update/' + id, form);
  },

  updateStatus: function ( id, form ){
    return axios.post('/api/jalinanKlaim/updateStatus/' + id, form);
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