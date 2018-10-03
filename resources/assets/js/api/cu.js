import { BKCU_CONFIG } from '../config.js';

export default {
  
  index: function( p ){
    return api.call('get', BKCU_CONFIG.API_URL +  '/cu' , {params: p});
  },

  get: function(){
    return api.call('get', BKCU_CONFIG.API_URL + '/cu/get');
  },

  getHeader: function(){
    return api.call('get', BKCU_CONFIG.API_URL + '/cu/getHeader');
  },

  getPus: function( id ){
    return api.call('get', BKCU_CONFIG.API_URL + '/cu/getPus/' + id);
  },

  create: function(){
    return api.call('get', BKCU_CONFIG.API_URL + '/cu/create');
  },

  store: function ( form ){
    return api.call('post', BKCU_CONFIG.API_URL + '/cu/store', form);
  },

  edit: function( id ){
    return api.call('get', BKCU_CONFIG.API_URL + '/cu/edit/' + id);
  },

  update: function ( id, form ){
    return api.call('post', BKCU_CONFIG.API_URL + '/cu/update/' + id, form);
  },

  destroy: function( id ){
    return api.call('delete', BKCU_CONFIG.API_URL + '/cu/' + id);
  },

  count: function(){
    return api.call('get', BKCU_CONFIG.API_URL +  '/cu/count');
  },
}