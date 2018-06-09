import { BKCU_CONFIG } from '../config.js';

export default {
  
  index: function( p ){
    return axios.get( BKCU_CONFIG.API_URL + '/laporanCuDiskusi' ,{params: p});
  },

  get: function(id){
    return axios.get( BKCU_CONFIG.API_URL + '/laporanCuDiskusi/get/' + id);
  },

  store: function ( form ){
    return axios.post(BKCU_CONFIG.API_URL + '/laporanCuDiskusi/store', form);
  },

  update: function ( id, form ){
    return axios.post(BKCU_CONFIG.API_URL + '/laporanCuDiskusi/update/' + id, form);
  },

  destroy: function( id, form ){
    return axios.delete(BKCU_CONFIG.API_URL + '/laporanCuDiskusi/' + id, form);
  }
}