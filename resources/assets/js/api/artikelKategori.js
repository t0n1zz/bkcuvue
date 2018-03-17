import { BKCU_CONFIG } from '../config.js';

export default {
  
  index: function( p ){
    return axios.get( BKCU_CONFIG.API_URL + '/artikelKategori' , {params: p});
  },

  get: function(){
    return axios.get(BKCU_CONFIG.API_URL + '/artikelKategori/get');
  },
  
  indexCU: function( p, id ){
    return axios.get(BKCU_CONFIG.API_URL + '/artikelKategori/indexCU/' + id, {params: p});
  },

  getCU: function(  id ){
    return axios.get(BKCU_CONFIG.API_URL + '/artikelKategori/getCU/' + id);
  },

  create: function(){
    return axios.get(BKCU_CONFIG.API_URL + '/artikelKategori/create');
  },

  store: function ( form ){
    return axios.post(BKCU_CONFIG.API_URL + '/artikelKategori/store', form);
  },

  edit: function( id ){
    return axios.get(BKCU_CONFIG.API_URL + '/artikelKategori/edit/' + id);
  },

  update: function ( id, form ){
    return axios.post(BKCU_CONFIG.API_URL + '/artikelKategori/update/' + id, form);
  },

  destroy: function( id ){
    return axios.delete(BKCU_CONFIG.API_URL + '/artikelKategori/' + id);
  }
}