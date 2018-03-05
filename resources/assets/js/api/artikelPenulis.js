import { BKCU_CONFIG } from '../config.js';

export default {
  
  getArtikelPenulisS: function( p ){
    return axios.get( BKCU_CONFIG.API_URL + '/artikelPenulis' + `?column=${p.column}&direction=${p.direction}&per_page=${p.per_page}&page=${p.page}&search_column=${p.search_column}&search_operator=${p.search_operator}&search_query_1=${p.search_query_1}&search_query_2=${p.search_query_2}`);
  },

  getArtikelPenulisCUS: function( p , id){
    return axios.get( BKCU_CONFIG.API_URL + '/artikelPenulis/indexCU/' + id + `?column=${p.column}&direction=${p.direction}&per_page=${p.per_page}&page=${p.page}&search_column=${p.search_column}&search_operator=${p.search_operator}&search_query_1=${p.search_query_1}&search_query_2=${p.search_query_2}`);
  },

  getArtikelPenulisAll: function(){
    return axios.get(BKCU_CONFIG.API_URL + '/artikelPenulis_all');
  },

  getArtikelPenulis: function( id ){
    return axios.get(BKCU_CONFIG.API_URL + '/artikelPenulis/' + id);
  },

  getArtikelPenulisCU: function( id ){
    return axios.get(BKCU_CONFIG.API_URL + '/artikelPenulis/cu/' + id);
  },

  createArtikelPenulis: function(){
    return axios.get(BKCU_CONFIG.API_URL + '/artikelPenulis/create');
  },

  storeArtikelPenulis: function ( form ){
    return axios.post(BKCU_CONFIG.API_URL + '/artikelPenulis/store', form);
  },

  editArtikelPenulis: function( id ){
    return axios.get(BKCU_CONFIG.API_URL + '/artikelPenulis/edit/' + id);
  },

  updateArtikelPenulis: function ( id, form ){
    return axios.post(BKCU_CONFIG.API_URL + '/artikelPenulis/update/' + id, form);
  },

  deleteArtikelPenulis: function( id ){
    return axios.delete(BKCU_CONFIG.API_URL + '/artikelPenulis/' + id);
  }
}