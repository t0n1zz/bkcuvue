import { BKCU_CONFIG } from '../config.js';

export default {
  
  index: function( p ){
    return api.call('get', BKCU_CONFIG.API_URL + '/laporanTpDiskusi' ,{params: p});
  },

  get: function(id){
    return api.call('get', BKCU_CONFIG.API_URL + '/laporanTpDiskusi/get/' + id);
  },

  store: function ( form ){
    return api.call('post', BKCU_CONFIG.API_URL + '/laporanTpDiskusi/store', form);
  },

  update: function ( id, form ){
    return api.call('post', BKCU_CONFIG.API_URL + '/laporanTpDiskusi/update/' + id, form);
  },

  destroy: function( id ){
    return api.call('delete', BKCU_CONFIG.API_URL + '/laporanTpDiskusi/' + id);
  }
}