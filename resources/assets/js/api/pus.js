import { BKCU_CONFIG } from '../config.js';

export default {
  
  getPusS: function( p ){
    return api.call('get', BKCU_CONFIG.API_URL + '/pus', {params: p});
  },

  getPusAll: function(){
    return api.call('get', BKCU_CONFIG.API_URL + '/pus_all');
  },

  getPus: function( id ){
    return api.call('get', BKCU_CONFIG.API_URL + '/pus/' + id);
  },

  storePus: function ( form ){
    return api.call('post', BKCU_CONFIG.API_URL + '/pus/store', form);
  },

  updatePus: function ( id, form ){
    return api.call('put', BKCU_CONFIG.API_URL + '/pus/update/' + id, form);
  },

  deletePus: function( id ){
    return api.call('delete', BKCU_CONFIG.API_URL + '/pus/' + id);
  }
}