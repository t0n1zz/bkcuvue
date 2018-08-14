import { BKCU_CONFIG } from '../config.js';

export default {
  
  index: function( p ){
    return axios.get( BKCU_CONFIG.API_URL + '/tempat' , {params: p});
  },

  get: function( id ){
    return axios.get(BKCU_CONFIG.API_URL + '/tempat/get/' + id);
  },

  create: function(){
    return axios.get(BKCU_CONFIG.API_URL + '/tempat/create');
  },

  store: function ( form ){
    return axios.post(BKCU_CONFIG.API_URL + '/tempat/store', form);
  },

  edit: function( id ){
    return axios.get(BKCU_CONFIG.API_URL + '/tempat/edit/' + id);
  },

  update: function ( id, form ){
    return axios.post(BKCU_CONFIG.API_URL + '/tempat/update/' + id, form);
  },

  destroy: function( id ){
    return axios.delete(BKCU_CONFIG.API_URL + '/tempat/' + id);
  }
}