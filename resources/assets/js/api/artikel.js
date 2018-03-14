import { BKCU_CONFIG } from '../config.js';

export default {
  
  getArtikelS: function( p ){
    return axios.get( BKCU_CONFIG.API_URL + '/artikel' ,{params: p});
  },

  getArtikelCUS: function( p, id ){
    return axios.get( BKCU_CONFIG.API_URL + '/artikel/indexCU/' + id, {params: p});
  },

  getArtikel: function( id ){
    return axios.get(BKCU_CONFIG.API_URL + '/artikel/' + id);
  },

  createArtikel: function(){
    return axios.get(BKCU_CONFIG.API_URL + '/artikel/create');
  },

  storeArtikel: function ( form ){
    return axios.post(BKCU_CONFIG.API_URL + '/artikel/store', form);
  },

  editArtikel: function( id ){
    return axios.get(BKCU_CONFIG.API_URL + '/artikel/edit/' + id);
  },

  updateArtikel: function ( id, form ){
    return axios.post(BKCU_CONFIG.API_URL + '/artikel/update/' + id, form);
  },

  updateTerbitkan: function( id ){
    return axios.post(BKCU_CONFIG.API_URL + '/artikel/updateTerbitkan/' + id);
  },

  updateUtamakan: function( id ){
    return axios.post(BKCU_CONFIG.API_URL + '/artikel/updateUtamakan/' + id);
  },

  deleteArtikel: function( id ){
    return axios.delete(BKCU_CONFIG.API_URL + '/artikel/' + id);
  }
}