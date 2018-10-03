import { BKCU_CONFIG } from '../config.js';

export default {
  
  indexTp: function( p, id ){
    return api.call('get', BKCU_CONFIG.API_URL + '/laporanTp/indexTp/' + id, {params: p});
  },

  indexPeriode: function( p, id, periode ){
    return api.call('get', BKCU_CONFIG.API_URL + '/laporanTp/indexPeriode/' + id + '/' + periode, {params: p});
  },

  listLaporanTp: function( cu, periode ){
    return api.call('get', BKCU_CONFIG.API_URL + '/laporanTp/listLaporanTp/' + cu + '/' + periode);
  },

  getPeriode: function(){
    return api.call('get', BKCU_CONFIG.API_URL + '/laporanTp/getPeriode');
  },

  getPeriodeTp: function( id, periode){
    return api.call('get', BKCU_CONFIG.API_URL + '/laporanTp/getPeriodeTp/' + id + '/' + periode);
  },

  indexPearls: function( p ){
    return api.call('get', BKCU_CONFIG.API_URL + '/laporanTp/indexPearls' ,{params: p});
  },

  indexPearlsTp: function( p, id ){
    return api.call('get', BKCU_CONFIG.API_URL + '/laporanTp/indexPearlsTp/' + id, {params: p});
  },

  indexPearlsPeriode: function( p, id, periode ){
    return api.call('get', BKCU_CONFIG.API_URL + '/laporanTp/indexPearlsPeriode/' + id + '/' + periode, {params: p});
  },

  detail: function( id ){
    return api.call('get', BKCU_CONFIG.API_URL + '/laporanTp/detail/' + id);
  },

  detailPearls: function( id ){
    return api.call('get', BKCU_CONFIG.API_URL + '/laporanTp/detailPearls/' + id);
  },

  create: function(){
    return api.call('get', BKCU_CONFIG.API_URL + '/laporanTp/create');
  },

  store: function ( form ){
    return api.call('post', BKCU_CONFIG.API_URL + '/laporanTp/store', form);
  },

  edit: function( id ){
    return api.call('get', BKCU_CONFIG.API_URL + '/laporanTp/edit/' + id);
  },

  update: function ( id, form ){
    return api.call('post', BKCU_CONFIG.API_URL + '/laporanTp/update/' + id, form);
  },

  destroy: function( id ){
    return api.call('delete', BKCU_CONFIG.API_URL + '/laporanTp/' + id);
  }
}