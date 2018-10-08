export default {
  
  indexTp: function( p, id ){
    return api.call('get', '/api/laporanTp/indexTp/' + id, {params: p});
  },

  indexPeriode: function( p, id, periode ){
    return api.call('get', '/api/laporanTp/indexPeriode/' + id + '/' + periode, {params: p});
  },

  listLaporanTp: function( cu, periode ){
    return api.call('get', '/api/laporanTp/listLaporanTp/' + cu + '/' + periode);
  },

  getPeriode: function(){
    return api.call('get', '/api/laporanTp/getPeriode');
  },

  getPeriodeTp: function( id, periode){
    return api.call('get', '/api/laporanTp/getPeriodeTp/' + id + '/' + periode);
  },

  indexPearls: function( p ){
    return api.call('get', '/api/laporanTp/indexPearls' ,{params: p});
  },

  indexPearlsTp: function( p, id ){
    return api.call('get', '/api/laporanTp/indexPearlsTp/' + id, {params: p});
  },

  indexPearlsPeriode: function( p, id, periode ){
    return api.call('get', '/api/laporanTp/indexPearlsPeriode/' + id + '/' + periode, {params: p});
  },

  detail: function( id ){
    return api.call('get', '/api/laporanTp/detail/' + id);
  },

  detailPearls: function( id ){
    return api.call('get', '/api/laporanTp/detailPearls/' + id);
  },

  create: function(){
    return api.call('get', '/api/laporanTp/create');
  },

  store: function ( form ){
    return api.call('post', '/api/laporanTp/store', form);
  },

  edit: function( id ){
    return api.call('get', '/api/laporanTp/edit/' + id);
  },

  update: function ( id, form ){
    return api.call('post', '/api/laporanTp/update/' + id, form);
  },

  destroy: function( id ){
    return api.call('delete', '/api/laporanTp/' + id);
  }
}