import { BKCU_CONFIG } from '../config.js';

export default {
  
  index: function( p ){
    return api.call('get', BKCU_CONFIG.API_URL +  '/produkcu' , {params: p});
  },

  indexCu: function( p, id ){
    return api.call('get', BKCU_CONFIG.API_URL + '/produkcu/indexCu/' + id, {params: p});
  },

  create: function(){
    return api.call('get', BKCU_CONFIG.API_URL + '/produkcu/create');
  },

  store: function ( form ){
    return api.call('post', BKCU_CONFIG.API_URL + '/produkcu/store', form);
  },

  edit: function( id ){
    return api.call('get', BKCU_CONFIG.API_URL + '/produkcu/edit/' + id);
  },

  update: function ( id, form ){
    return api.call('post', BKCU_CONFIG.API_URL + '/produkcu/update/' + id, form);
  },

  destroy: function( id ){
    return api.call('delete', BKCU_CONFIG.API_URL + '/produkcu/' + id);
  },

  count: function(){
    return api.call('get', BKCU_CONFIG.API_URL + '/produkcu/count');
  },
}