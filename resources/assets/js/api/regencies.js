import { BKCU_CONFIG } from '../config.js';

export default {
  
  index: function( p ){
    return api.call('get', BKCU_CONFIG.API_URL + '/regencies' , {params: p});
  },

  get: function(){
    return api.call('get', BKCU_CONFIG.API_URL + '/regencies/get');
  },
  
  indexProvinces: function( p, id ){
    return api.call('get', BKCU_CONFIG.API_URL + '/regencies/indexProvinces/' + id, {params: p});
  },

  getProvinces: function( id ){
    return api.call('get', BKCU_CONFIG.API_URL + '/regencies/getProvinces/' + id);
  },

  create: function(){
    return api.call('get', BKCU_CONFIG.API_URL + '/regencies/create');
  },

  store: function ( form ){
    return api.call('post', BKCU_CONFIG.API_URL + '/regencies/store', form);
  },

  edit: function( id ){
    return api.call('get', BKCU_CONFIG.API_URL + '/regencies/edit/' + id);
  },

  update: function ( id, form ){
    return api.call('post', BKCU_CONFIG.API_URL + '/regencies/update/' + id, form);
  },

  destroy: function( id ){
    return api.call('delete', BKCU_CONFIG.API_URL + '/regencies/' + id);
  }
}