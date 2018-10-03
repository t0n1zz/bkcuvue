import { BKCU_CONFIG } from '../config.js';

export default {
  
  index: function( p ){
    return api.call('get', BKCU_CONFIG.API_URL +  '/diklatBKCU' , {params: p});
  },

  create: function(){
    return api.call('get', BKCU_CONFIG.API_URL + '/diklatBKCU/create');
  },

  store: function ( form ){
    return api.call('post', BKCU_CONFIG.API_URL + '/diklatBKCU/store', form);
  },

  edit: function( id ){
    return api.call('get', BKCU_CONFIG.API_URL + '/diklatBKCU/edit/' + id);
  },

  update: function ( id, form ){
    return api.call('post', BKCU_CONFIG.API_URL + '/diklatBKCU/update/' + id, form);
  },

  destroy: function( id ){
    return api.call('delete', BKCU_CONFIG.API_URL + '/diklatBKCU/' + id);
  }
}