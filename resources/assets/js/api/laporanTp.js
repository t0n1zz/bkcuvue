export default {
  
  indexTp: function( p, id ){
    return axios.get('/api/laporanTp/indexTp/' + id, {params: p});
  },

  indexDraft: function( id ){
    return axios.get('/api/laporanTp/indexDraft/' + id);
  },

  indexPeriode: function( p, id, periode ){
    return axios.get('/api/laporanTp/indexPeriode/' + id + '/' + periode, {params: p});
  },

  listLaporanTp: function( cu, periode ){
    return axios.get('/api/laporanTp/listLaporanTp/' + cu + '/' + periode);
  },

  getPeriode: function(){
    return axios.get('/api/laporanTp/getPeriode');
  },

  getPeriodeTp: function( id, periode){
    return axios.get('/api/laporanTp/getPeriodeTp/' + id + '/' + periode);
  },

  indexPearls: function( p ){
    return axios.get('/api/laporanTp/indexPearls' ,{params: p});
  },

  indexPearlsTp: function( p, id ){
    return axios.get('/api/laporanTp/indexPearlsTp/' + id, {params: p});
  },

  indexPearlsPeriode: function( p, id, periode ){
    return axios.get('/api/laporanTp/indexPearlsPeriode/' + id + '/' + periode, {params: p});
  },

  detail: function( id ){
    return axios.get('/api/laporanTp/detail/' + id);
  },

  detailPearls: function( id ){
    return axios.get('/api/laporanTp/detailPearls/' + id);
  },

  create: function(){
    return axios.get('/api/laporanTp/create');
  },

  store: function ( form ){
    return axios.post('/api/laporanTp/store', form);
  },

  edit: function( id ){
    return axios.get('/api/laporanTp/edit/' + id);
  },

  update: function ( id, form ){
    return axios.post('/api/laporanTp/update/' + id, form);
  },

  destroy: function( id ){
    return axios.delete('/api/laporanTp/' + id);
  },

  uploadExcel: function ( form ){
    return axios.post('/api/laporanTp/uploadExcel', form);
  },
}