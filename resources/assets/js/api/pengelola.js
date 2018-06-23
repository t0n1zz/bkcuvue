import { BKCU_CONFIG } from '../config.js';

export default {
  
  index: function( p ){
    return axios.get( BKCU_CONFIG.API_URL + '/pengelola' ,{params: p});
  },

  indexCu: function( p, id ){
    return axios.get( BKCU_CONFIG.API_URL + '/pengelola/indexCu/' + id, {params: p});
  },

  create: function(){
    return axios.get(BKCU_CONFIG.API_URL + '/pengelola/create');
  },

  store: function ( form ){
    return axios.post(BKCU_CONFIG.API_URL + '/pengelola/store', form);
  },

  edit: function( id ){
    return axios.get(BKCU_CONFIG.API_URL + '/pengelola/edit/' + id);
  },

  update: function ( id, form ){
    return axios.post(BKCU_CONFIG.API_URL + '/pengelola/update/' + id, form);
  },

  destroy: function( id ){
    return axios.delete(BKCU_CONFIG.API_URL + '/pengelola/' + id);
  }
}