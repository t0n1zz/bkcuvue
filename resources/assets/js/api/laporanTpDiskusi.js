import { BKCU_CONFIG } from '../config.js';

export default {
  
  index: function( p ){
    return axios.get( BKCU_CONFIG.API_URL + '/laporanTpDiskusi' ,{params: p});
  },

  get: function(id){
    return axios.get( BKCU_CONFIG.API_URL + '/laporanTpDiskusi/get/' + id);
  },

  store: function ( form ){
    return axios.post(BKCU_CONFIG.API_URL + '/laporanTpDiskusi/store', form);
  },

  update: function ( id, form ){
    return axios.post(BKCU_CONFIG.API_URL + '/laporanTpDiskusi/update/' + id, form);
  },

  destroy: function( id ){
    return axios.delete(BKCU_CONFIG.API_URL + '/laporanTpDiskusi/' + id);
  }
}