import { BKCU_CONFIG } from '../config.js';

export default {
  
  index: function( p ){
    return api.call('get', BKCU_CONFIG.API_URL + '/tempat' , {params: p});
  },

  get: function( id ){
    return api.call('get', BKCU_CONFIG.API_URL + '/tempat/get/' + id);
  },

  create: function(){
    return api.call('get', BKCU_CONFIG.API_URL + '/tempat/create');
  },

  store: function ( form ){
    return api.call('post', BKCU_CONFIG.API_URL + '/tempat/store', form);
  },

  edit: function( id ){
    return api.call('get', BKCU_CONFIG.API_URL + '/tempat/edit/' + id);
  },

  update: function ( id, form ){
    return api.call('post', BKCU_CONFIG.API_URL + '/tempat/update/' + id, form);
  },

  destroy: function( id ){
    return api.call('delete', BKCU_CONFIG.API_URL + '/tempat/' + id);
  }
}