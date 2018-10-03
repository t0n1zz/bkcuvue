import { BKCU_CONFIG } from '../config.js';

export default {
  
  index: function( p ){
    return api.call('get', BKCU_CONFIG.API_URL + '/provinces' , {params: p});
  },

  get: function(){
    return api.call('get', BKCU_CONFIG.API_URL + '/provinces/get');
  },

  create: function(){
    return api.call('get', BKCU_CONFIG.API_URL + '/provinces/create');
  },

  store: function ( form ){
    return api.call('post', BKCU_CONFIG.API_URL + '/provinces/store', form);
  },

  edit: function( id ){
    return api.call('get', BKCU_CONFIG.API_URL + '/provinces/edit/' + id);
  },

  update: function ( id, form ){
    return api.call('post', BKCU_CONFIG.API_URL + '/provinces/update/' + id, form);
  },

  destroy: function( id ){
    return api.call('delete', BKCU_CONFIG.API_URL + '/provinces/' + id);
  }
}