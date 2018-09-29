import { BKCU_CONFIG } from '../config.js';

export default {
  
  index: function( p ){
    return axios.get(BKCU_CONFIG.API_URL +  '/diklatBKCU' , {params: p});
  },

  create: function(){
    return axios.get(BKCU_CONFIG.API_URL + '/diklatBKCU/create');
  },

  store: function ( form ){
    return axios.post(BKCU_CONFIG.API_URL + '/diklatBKCU/store', form);
  },

  edit: function( id ){
    return axios.get(BKCU_CONFIG.API_URL + '/diklatBKCU/edit/' + id);
  },

  update: function ( id, form ){
    return axios.post(BKCU_CONFIG.API_URL + '/diklatBKCU/update/' + id, form);
  },

  destroy: function( id ){
    return axios.delete(BKCU_CONFIG.API_URL + '/diklatBKCU/' + id);
  }
}