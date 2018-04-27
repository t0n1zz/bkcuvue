import { BKCU_CONFIG } from '../config.js';

export default {
  
  getPusS: function( p ){
    return axios.get( BKCU_CONFIG.API_URL + '/pus', {params: p});
  },

  getPusAll: function(){
    return axios.get(BKCU_CONFIG.API_URL + '/pus_all');
  },

  getPus: function( id ){
    return axios.get(BKCU_CONFIG.API_URL + '/pus/' + id);
  },

  storePus: function ( form ){
    return axios.post(BKCU_CONFIG.API_URL + '/pus/store', form);
  },

  updatePus: function ( id, form ){
    return axios.put(BKCU_CONFIG.API_URL + '/pus/update/' + id, form);
  },

  deletePus: function( id ){
    return axios.delete(BKCU_CONFIG.API_URL + '/pus/' + id);
  }
}