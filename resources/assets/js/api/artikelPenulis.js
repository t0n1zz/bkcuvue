import { BKCU_CONFIG } from '../config.js';

export default {
  
  index: function( p ){
    return api.call('get', BKCU_CONFIG.API_URL + '/artikelPenulis' , {params: p});
  },

  get: function(){
    return api.call('get', BKCU_CONFIG.API_URL + '/artikelPenulis/get');
  },
  
  indexCu: function( p, id ){
    return api.call('get', BKCU_CONFIG.API_URL + '/artikelPenulis/indexCu/' + id, {params: p});
  },

  getCu: function( id ){
    return api.call('get', BKCU_CONFIG.API_URL + '/artikelPenulis/getCu/' + id);
  },

  create: function(){
    return api.call('get', BKCU_CONFIG.API_URL + '/artikelPenulis/create');
  },

  store: function ( form ){
    return api.call('post', BKCU_CONFIG.API_URL + '/artikelPenulis/store', form);
  },

  edit: function( id ){
    return api.call('get', BKCU_CONFIG.API_URL + '/artikelPenulis/edit/' + id);
  },

  update: function ( id, form ){
    return api.call('post', BKCU_CONFIG.API_URL + '/artikelPenulis/update/' + id, form);
  },

  destroy: function( id ){
    return api.call('delete', BKCU_CONFIG.API_URL + '/artikelPenulis/' + id);
  }
}