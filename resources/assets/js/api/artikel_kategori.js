import { BKCU_CONFIG } from '../config.js';

export default {
  
  getArtikelKategoriS: function( p ){
    return axios.get( BKCU_CONFIG.API_URL + '/artikel_kategori' + `?column=${p.column}&direction=${p.direction}&per_page=${p.per_page}&page=${p.page}&search_column=${p.search_column}&search_operator=${p.search_operator}&search_query_1=${p.search_query_1}&search_query_2=${p.search_query_2}`);
  },

  getArtikelKategoriAll: function(){
    return axios.get(BKCU_CONFIG.API_URL + '/artikel_kategori_all');
  },

  getArtikelKategori: function( id ){
    return axios.get(BKCU_CONFIG.API_URL + '/artikel_kategori/' + id);
  },

  storeArtikelKategori: function ( form ){
    return axios.post(BKCU_CONFIG.API_URL + '/artikel_kategori/store', form);
  },

  updateArtikelKategori: function ( id, form ){
    return axios.put(BKCU_CONFIG.API_URL + '/artikel_kategori/update/' + id, form);
  },

  deleteArtikelKategori: function( id ){
    return axios.delete(BKCU_CONFIG.API_URL + '/artikel_kategori/' + id);
  }
}