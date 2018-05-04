import { BKCU_CONFIG } from '../config.js';

export default {
  
  index: function( p ){
    return axios.get( BKCU_CONFIG.API_URL + '/laporanTp' ,{params: p});
  },

  indexTp: function( p, id ){
    return axios.get( BKCU_CONFIG.API_URL + '/laporanTp/indexTp/' + id, {params: p});
  },

  indexPeriode: function( p, periode ){
    return axios.get( BKCU_CONFIG.API_URL + '/laporanTp/indexPeriode/' + periode, {params: p});
  },

  listLaporanTp: function( cu, periode ){
    return axios.get( BKCU_CONFIG.API_URL + '/laporanTp/listLaporanTp/' + cu + '/' + periode);
  },

  getPeriode: function(){
    return axios.get( BKCU_CONFIG.API_URL + '/laporanTp/getPeriode');
  },

  indexPearls: function( p ){
    return axios.get( BKCU_CONFIG.API_URL + '/laporanTp/indexPearls' ,{params: p});
  },

  indexPearlsTp: function( p, id ){
    return axios.get( BKCU_CONFIG.API_URL + '/laporanTp/indexPearlsTp/' + id, {params: p});
  },

  indexPearlsPeriode: function( p, periode ){
    return axios.get( BKCU_CONFIG.API_URL + '/laporanTp/indexPearlsPeriode/' + periode, {params: p});
  },

  create: function(){
    return axios.get(BKCU_CONFIG.API_URL + '/laporanTp/create');
  },

  store: function ( form ){
    return axios.post(BKCU_CONFIG.API_URL + '/laporanTp/store', form);
  },

  edit: function( id ){
    return axios.get(BKCU_CONFIG.API_URL + '/laporanTp/edit/' + id);
  },

  update: function ( id, form ){
    return axios.post(BKCU_CONFIG.API_URL + '/laporanTp/update/' + id, form);
  },

  destroy: function( id ){
    return axios.delete(BKCU_CONFIG.API_URL + '/laporanTp/' + id);
  }
}