export default {
  
  index: function( p,status ){
    return axios.get('/api/monitoringCu/status/'+ status , {params: p});
  },

  indexKonsolidasi: function(p,tahun,bulan){
    return axios.get('/api/monitoringCu/indexKonsolidasi/' + tahun +'/'+ bulan, {params: p});
  },

  indexCu: function( p, cu, tp, status ){
    return axios.get('/api/monitoringCu/indexCu/' + cu + '/' + tp + '/' + status,{params: p});
  },

  summary: function( cu ){
    return axios.get('/api/monitoringCu/summary/' + cu);
  },

  create: function(){
    return axios.get('/api/monitoringCu/create');
  },

  get: function( cu ){
    return axios.get('/api/monitoringCu/get/' + cu);
  },

  store: function ( form ){
    return axios.post('/api/monitoringCu/store', form);
  },

  edit: function( id ){
    return axios.get('/api/monitoringCu/edit/' + id);
  },

  update: function ( id, form ){
    return axios.post('/api/monitoringCu/update/' + id, form);
  },

  updateRekom: function ( id ){
    return axios.post('/api/monitoringCu/updateRekom/' + id);
  },

  destroy: function( id ){
    return axios.delete('/api/monitoringCu/' + id);
  },

  count: function(){
    return axios.get('/api/monitoringCu/count');
  },

  history: function(){
    return axios.get('/api/monitoringCu/history');
  },

  getPeriode: function (tipe) {
    return axios.get("/api/monitoringCu/getPeriode/" + tipe);
  },
}