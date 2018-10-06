import { BKCU_CONFIG } from '../config.js';

export default {
  
  index: function( p ){
    return api.call('get', BKCU_CONFIG.API_URL + '/laporanCu' ,{params: p});
  },

  indexGerakan: function( p ){
    return api.call('get', BKCU_CONFIG.API_URL + '/laporanCu/indexGerakan' ,{params: p});
  },

  indexCu: function( p, id ){
    return api.call('get', BKCU_CONFIG.API_URL + '/laporanCu/indexCu/' + id, {params: p});
  },

  indexPeriode: function( p, periode ){
    return api.call('get', BKCU_CONFIG.API_URL + '/laporanCu/indexPeriode/' + periode, {params: p});
  },

  getPeriode: function(){
    return api.call('get', BKCU_CONFIG.API_URL + '/laporanCu/getPeriode');
  },

  getPeriodeCu: function(id){
    return api.call('get', BKCU_CONFIG.API_URL + '/laporanCu/getPeriodeCu/' + id);
  },

  indexPearls: function( p ){
    return api.call('get', BKCU_CONFIG.API_URL + '/laporanCu/indexPearls' ,{params: p});
  },

  indexPearlsCu: function( p, id ){
    return api.call('get', BKCU_CONFIG.API_URL + '/laporanCu/indexPearlsCu/' + id, {params: p});
  },

  indexPearlsPeriode: function( p, periode ){
    return api.call('get', BKCU_CONFIG.API_URL + '/laporanCu/indexPearlsPeriode/' + periode, {params: p});
  },

  detail: function( id ){
    return api.call('get', BKCU_CONFIG.API_URL + '/laporanCu/detail/' + id);
  },

  detailPearls: function( id ){
    return api.call('get', BKCU_CONFIG.API_URL + '/laporanCu/detailPearls/' + id);
  },

  create: function(){
    return api.call('get', BKCU_CONFIG.API_URL + '/laporanCu/create');
  },

  store: function ( form ){
    return api.call('post', BKCU_CONFIG.API_URL + '/laporanCu/store', form);
  },

  edit: function( id ){
    return api.call('get', BKCU_CONFIG.API_URL + '/laporanCu/edit/' + id);
  },

  update: function ( id, form ){
    return api.call('post', BKCU_CONFIG.API_URL + '/laporanCu/update/' + id, form);
  },

  destroy: function( id ){
    return api.call('delete', BKCU_CONFIG.API_URL + '/laporanCu/' + id);
  },

  upload_excel: function ( form ){
    return api.call('post', BKCU_CONFIG.API_URL + '/laporanCu/upload_excel', form);
  },
}