import { BKCU_CONFIG } from '../config.js';

export default {
  
  index: function( p ){
    return api.call('get',  BKCU_CONFIG.API_URL + '/artikelKategori' , {params: p});
  },

  get: function(){
    return api.call('get', BKCU_CONFIG.API_URL + '/artikelKategori/get');
  },
  
  indexCu: function( p, id ){
    return api.call('get', BKCU_CONFIG.API_URL + '/artikelKategori/indexCu/' + id, {params: p});
  },

  getCu: function(  id ){
    return api.call('get', BKCU_CONFIG.API_URL + '/artikelKategori/getCu/' + id);
  },

  create: function(){
    return api.call('get', BKCU_CONFIG.API_URL + '/artikelKategori/create');
  },

  store: function ( form ){
    return api.call('post', BKCU_CONFIG.API_URL + '/artikelKategori/store', form);
  },

  edit: function( id ){
    return api.call('get', BKCU_CONFIG.API_URL + '/artikelKategori/edit/' + id);
  },

  update: function ( id, form ){
    return api.call('post', BKCU_CONFIG.API_URL + '/artikelKategori/update/' + id, form);
  },

  destroy: function( id ){
    return api.call('delete', BKCU_CONFIG.API_URL + '/artikelKategori/' + id);
  }
}