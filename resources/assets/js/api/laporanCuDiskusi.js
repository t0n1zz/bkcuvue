import { BKCU_CONFIG } from '../config.js';

export default {
  
  index: function( p ){
    return axios.get( BKCU_CONFIG.API_URL + '/laporanCuDiskusi' ,{params: p});
  },

  get: function(id){
    return axios.get( BKCU_CONFIG.API_URL + '/laporanCuDiskusi/get/' + id);
  },

}