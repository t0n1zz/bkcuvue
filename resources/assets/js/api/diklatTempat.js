import { BKCU_CONFIG } from '../config.js';

export default {
  
  index: function( p ){
    return axios.get( BKCU_CONFIG.API_URL + '/diklatTempat' , {params: p});
  },

  get: function(){
    return axios.get(BKCU_CONFIG.API_URL + '/diklatTempat/get');
  },

  getId: function( id ){
    return axios.get(BKCU_CONFIG.API_URL + '/diklatTempat/getId/' + id);
  },

  create: function(){
    return axios.get(BKCU_CONFIG.API_URL + '/diklatTempat/create');
  },

  store: function ( form ){
    return axios.post(BKCU_CONFIG.API_URL + '/diklatTempat/store', form);
  },

  edit: function( id ){
    return axios.get(BKCU_CONFIG.API_URL + '/diklatTempat/edit/' + id);
  },

  update: function ( id, form ){
    return axios.post(BKCU_CONFIG.API_URL + '/diklatTempat/update/' + id, form);
  },

  destroy: function( id ){
    return axios.delete(BKCU_CONFIG.API_URL + '/diklatTempat/' + id);
  }
}