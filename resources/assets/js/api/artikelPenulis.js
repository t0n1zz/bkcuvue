import { BKCU_CONFIG } from '../config.js';

export default {
  
  index: function( p ){
    return axios.get( BKCU_CONFIG.API_URL + '/artikelPenulis' , {params: p});
  },

  get: function(){
    return axios.get(BKCU_CONFIG.API_URL + '/artikelPenulis/get');
  },
  
  indexCU: function( p, id ){
    return axios.get(BKCU_CONFIG.API_URL + '/artikelPenulis/indexCU/' + id, {params: p});
  },

  getCU: function( id ){
    return axios.get(BKCU_CONFIG.API_URL + '/artikelPenulis/getCU/' + id);
  },

  create: function(){
    return axios.get(BKCU_CONFIG.API_URL + '/artikelPenulis/create');
  },

  store: function ( form ){
    return axios.post(BKCU_CONFIG.API_URL + '/artikelPenulis/store', form);
  },

  edit: function( id ){
    return axios.get(BKCU_CONFIG.API_URL + '/artikelPenulis/edit/' + id);
  },

  update: function ( id, form ){
    return axios.post(BKCU_CONFIG.API_URL + '/artikelPenulis/update/' + id, form);
  },

  destroy: function( id ){
    return axios.delete(BKCU_CONFIG.API_URL + '/artikelPenulis/' + id);
  }
}