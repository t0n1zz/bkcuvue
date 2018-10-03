import { BKCU_CONFIG } from '../config.js';

export default {
  
  index: function( p ){
    return api.call('get', BKCU_CONFIG.API_URL + '/artikel' ,{params: p});
  },

  indexCu: function( p, id ){
    return api.call('get', BKCU_CONFIG.API_URL + '/artikel/indexCu/' + id, {params: p});
  },

  create: function(){
    return api.call('get', BKCU_CONFIG.API_URL + '/artikel/create');
  },

  store: function ( form ){
    return api.call('post', BKCU_CONFIG.API_URL + '/artikel/store', form);
  },

  edit: function( id ){
    return api.call('get',BKCU_CONFIG.API_URL + '/artikel/edit/' + id);
  },

  update: function ( id, form ){
    return api.call('post',BKCU_CONFIG.API_URL + '/artikel/update/' + id, form);
  },

  updateTerbitkan: function( id ){
    return api.call('post',BKCU_CONFIG.API_URL + '/artikel/updateTerbitkan/' + id);
  },

  updateUtamakan: function( id ){
    return api.call('post',BKCU_CONFIG.API_URL + '/artikel/updateUtamakan/' + id);
  },

  destroy: function( id ){
    return api.call('delete',BKCU_CONFIG.API_URL + '/artikel/' + id);
  },

  count: function(){
    return api.call('get',BKCU_CONFIG.API_URL + '/artikel/count');
  },
}