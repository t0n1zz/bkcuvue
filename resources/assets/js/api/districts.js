import { BKCU_CONFIG } from '../config.js';

export default {
  
  index: function( p ){
    return api.call('get', BKCU_CONFIG.API_URL + '/districts' , {params: p});
  },

  get: function(){
    return api.call('get', BKCU_CONFIG.API_URL + '/districts/get');
  },

  indexRegencies: function( p, id ){
    return api.call('get', BKCU_CONFIG.API_URL + '/regencies/indexRegencies/' + id, {params: p});
  },
  
  getRegencies: function( id ){
    return api.call('get', BKCU_CONFIG.API_URL + '/districts/getRegencies/' + id);
  },

  create: function(){
    return api.call('get', BKCU_CONFIG.API_URL + '/districts/create');
  },

  store: function ( form ){
    return api.call('post', BKCU_CONFIG.API_URL + '/districts/store', form);
  },

  edit: function( id ){
    return api.call('get', BKCU_CONFIG.API_URL + '/districts/edit/' + id);
  },

  update: function ( id, form ){
    return api.call('post', BKCU_CONFIG.API_URL + '/districts/update/' + id, form);
  },

  destroy: function( id ){
    return api.call('delete', BKCU_CONFIG.API_URL + '/districts/' + id);
  }
}