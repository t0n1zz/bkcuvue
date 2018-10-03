import { BKCU_CONFIG } from '../config.js';

export default {
  
  index: function( p ){
    return api.call('get', BKCU_CONFIG.API_URL + '/villages' , {params: p});
  },

  get: function(){
    return api.call('get', BKCU_CONFIG.API_URL + '/villages/get');
  },

  indexDistrics: function( p, id ){
    return api.call('get', BKCU_CONFIG.API_URL + '/regencies/indexDistricts/' + id, {params: p});
  },
  
  getDistricts: function( id ){
    return api.call('get', BKCU_CONFIG.API_URL + '/villages/getDistricts/' + id);
  },

  create: function(){
    return api.call('get', BKCU_CONFIG.API_URL + '/villages/create');
  },

  store: function ( form ){
    return api.call('post', BKCU_CONFIG.API_URL + '/villages/store', form);
  },

  edit: function( id ){
    return api.call('get', BKCU_CONFIG.API_URL + '/villages/edit/' + id);
  },

  update: function ( id, form ){
    return api.call('post', BKCU_CONFIG.API_URL + '/villages/update/' + id, form);
  },

  destroy: function( id ){
    return api.call('delete', BKCU_CONFIG.API_URL + '/villages/' + id);
  }
}