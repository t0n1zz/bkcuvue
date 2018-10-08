export default {
  
  index: function( p ){
    return api.call('get', '/api/laporanCu' ,{params: p});
  },

  indexGerakan: function( p ){
    return api.call('get', '/api/laporanCu/indexGerakan' ,{params: p});
  },

  indexCu: function( p, id ){
    return api.call('get', '/api/laporanCu/indexCu/' + id, {params: p});
  },

  indexPeriode: function( p, periode ){
    return api.call('get', '/api/laporanCu/indexPeriode/' + periode, {params: p});
  },

  getPeriode: function(){
    return api.call('get', '/api/laporanCu/getPeriode');
  },

  getPeriodeCu: function(id){
    return api.call('get', '/api/laporanCu/getPeriodeCu/' + id);
  },

  indexPearls: function( p ){
    return api.call('get', '/api/laporanCu/indexPearls' ,{params: p});
  },

  indexPearlsCu: function( p, id ){
    return api.call('get', '/api/laporanCu/indexPearlsCu/' + id, {params: p});
  },

  indexPearlsPeriode: function( p, periode ){
    return api.call('get', '/api/laporanCu/indexPearlsPeriode/' + periode, {params: p});
  },

  detail: function( id ){
    return api.call('get', '/api/laporanCu/detail/' + id);
  },

  detailPearls: function( id ){
    return api.call('get', '/api/laporanCu/detailPearls/' + id);
  },

  create: function(){
    return api.call('get', '/api/laporanCu/create');
  },

  store: function ( form ){
    return api.call('post', '/api/laporanCu/store', form);
  },

  edit: function( id ){
    return api.call('get', '/api/laporanCu/edit/' + id);
  },

  update: function ( id, form ){
    return api.call('post', '/api/laporanCu/update/' + id, form);
  },

  destroy: function( id ){
    return api.call('delete', '/api/laporanCu/' + id);
  },

  upload_excel: function ( form ){
    return api.call('post', '/api/laporanCu/upload_excel', form);
  },
}