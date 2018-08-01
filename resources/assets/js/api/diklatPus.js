import { BKCU_CONFIG } from '../config.js';

export default {
  
  index: function( p ){
    return axios.get(BKCU_CONFIG.API_URL +  '/diklatPus' , {params: p});
  },

  create: function(){
    return axios.get(BKCU_CONFIG.API_URL + '/diklatPus/create');
  },

  store: function ( form ){
    return axios.post(BKCU_CONFIG.API_URL + '/diklatPus/store', form);
  },

  edit: function( id ){
    return axios.get(BKCU_CONFIG.API_URL + '/diklatPus/edit/' + id);
  },

  update: function ( id, form ){
    return axios.post(BKCU_CONFIG.API_URL + '/diklatPus/update/' + id, form);
  },

  destroy: function( id ){
    return axios.delete(BKCU_CONFIG.API_URL + '/diklatPus/' + id);
  }
}