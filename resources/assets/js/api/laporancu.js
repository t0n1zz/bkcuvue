import { BKCU_CONFIG } from '../config.js';

export default {
  
  index: function( p ){
    return axios.get( BKCU_CONFIG.API_URL + '/laporancu' ,{params: p});
  },

  indexCU: function( p, id ){
    return axios.get( BKCU_CONFIG.API_URL + '/laporancu/indexCU/' + id, {params: p});
  },

  create: function(){
    return axios.get(BKCU_CONFIG.API_URL + '/laporancu/create');
  },

  store: function ( form ){
    return axios.post(BKCU_CONFIG.API_URL + '/laporancu/store', form);
  },

  edit: function( id ){
    return axios.get(BKCU_CONFIG.API_URL + '/laporancu/edit/' + id);
  },

  update: function ( id, form ){
    return axios.post(BKCU_CONFIG.API_URL + '/laporancu/update/' + id, form);
  },

  destroy: function( id ){
    return axios.delete(BKCU_CONFIG.API_URL + '/laporancu/' + id);
  }
}