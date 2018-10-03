import { BKCU_CONFIG } from '../config.js';

export default {
  
  index: function( p ){
    return api.call('get', BKCU_CONFIG.API_URL +  '/tp' , {params: p});
  },

  get: function(){
    return api.call('get', BKCU_CONFIG.API_URL + '/tp/get');
  },

  indexCu: function( p, id ){
    return api.call('get', BKCU_CONFIG.API_URL + '/tp/indexCu/' + id, {params: p});
  },

  getCu: function( id ){
    return api.call('get', BKCU_CONFIG.API_URL + '/tp/getCu/' + id);
  },

  create: function(){
    return api.call('get', BKCU_CONFIG.API_URL + '/tp/create');
  },

  store: function ( form ){
    return api.call('post', BKCU_CONFIG.API_URL + '/tp/store', form);
  },

  edit: function( id ){
    return api.call('get', BKCU_CONFIG.API_URL + '/tp/edit/' + id);
  },

  update: function ( id, form ){
    return api.call('post', BKCU_CONFIG.API_URL + '/tp/update/' + id, form);
  },

  destroy: function( id ){
    return api.call('delete', BKCU_CONFIG.API_URL + '/tp/' + id);
  },

  count: function( p ){
    return api.call('get', BKCU_CONFIG.API_URL +  '/tp/count');
  },
}