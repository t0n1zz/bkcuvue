export default {
  
  index: function( p ){
    return axios.get('/api/laporanCu' ,{params: p});
  },

  indexGerakan: function( p ){
    return axios.get('/api/laporanCu/indexGerakan' ,{params: p});
  },

  indexCu: function( p, id ){
    return axios.get('/api/laporanCu/indexCu/' + id, {params: p});
  },

  indexDraft: function( id ){
    return axios.get('/api/laporanCu/indexDraft/' + id);
  },

  indexPeriode: function( p, periode ){
    return axios.get('/api/laporanCu/indexPeriode/' + periode, {params: p});
  },

  getPeriode: function(){
    return axios.get('/api/laporanCu/getPeriode');
  },

  getPeriodeCu: function(id){
    return axios.get('/api/laporanCu/getPeriodeCu/' + id);
  },

  indexPearls: function( p ){
    return axios.get('/api/laporanCu/indexPearls' ,{params: p});
  },

  indexPearlsCu: function( p, id ){
    return axios.get('/api/laporanCu/indexPearlsCu/' + id, {params: p});
  },

  indexPearlsPeriode: function( p, periode ){
    return axios.get('/api/laporanCu/indexPearlsPeriode/' + periode, {params: p});
  },

  detail: function( id ){
    return axios.get('/api/laporanCu/detail/' + id);
  },

  detailPearls: function( id ){
    return axios.get('/api/laporanCu/detailPearls/' + id);
  },

  create: function(){
    return axios.get('/api/laporanCu/create');
  },

  store: function ( form ){
    return axios.post('/api/laporanCu/store', form);
  },

  edit: function( id ){
    return axios.get('/api/laporanCu/edit/' + id);
  },

  update: function ( id, form ){
    return axios.post('/api/laporanCu/update/' + id, form);
  },

  destroy: function( id ){
    return axios.delete('/api/laporanCu/' + id);
  },

  upload_excel: function ( form ){
    return axios.post('/api/laporanCu/upload_excel', form);
  },
}