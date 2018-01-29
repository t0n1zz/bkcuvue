import { BKCU_CONFIG } from '../config.js';

export default {
  
  getArtikelPenulisS: function( p ){
    return axios.get( BKCU_CONFIG.API_URL + '/artikel_penulis' + `?column=${p.column}&direction=${p.direction}&per_page=${p.per_page}&page=${p.page}&search_column=${p.search_column}&search_operator=${p.search_operator}&search_query_1=${p.search_query_1}&search_query_2=${p.search_query_2}`);
  },

  getArtikelPenulisAll: function(){
    return axios.get(BKCU_CONFIG.API_URL + '/artikel_penulis_all');
  },

  getArtikelPenulis: function( id ){
    return axios.get(BKCU_CONFIG.API_URL + '/artikel_penulis/' + id);
  },

  getArtikelPenulisCU: function( id ){
    return axios.get(BKCU_CONFIG.API_URL + '/artikel_penulis/cu/' + id);
  },

  storeArtikelPenulis: function ( form ){
    return axios.post(BKCU_CONFIG.API_URL + '/artikel_penulis/store', form);
  },

  updateArtikelPenulis: function ( id, form ){
    return axios.put(BKCU_CONFIG.API_URL + '/artikel_penulis/update/' + id, form);
  },

  deleteArtikelPenulis: function( id ){
    return axios.delete(BKCU_CONFIG.API_URL + '/artikel_penulis/' + id);
  }
}