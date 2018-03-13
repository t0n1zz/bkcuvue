import { BKCU_CONFIG } from '../config.js';

export default {
  
  getRegenciesS: function( p ){
    return axios.get( BKCU_CONFIG.API_URL + '/regencies' + `?column=${p.column}&direction=${p.direction}&per_page=${p.per_page}&page=${p.page}&search_column=${p.search_column}&search_operator=${p.search_operator}&search_query_1=${p.search_query_1}&search_query_2=${p.search_query_2}`);
  },

  getRegenciesAll: function(){
    return axios.get(BKCU_CONFIG.API_URL + '/regencies_all');
  },

  getRegencies: function( id ){
    return axios.get(BKCU_CONFIG.API_URL + '/regencies/' + id);
  },

  getRegenciesProvinces: function( id ){
    return axios.get(BKCU_CONFIG.API_URL + '/regencies/provinces/' + id);
  },

  createRegencies: function(){
    return axios.get(BKCU_CONFIG.API_URL + '/regencies/create');
  },

  storeRegencies: function ( form ){
    return axios.post(BKCU_CONFIG.API_URL + '/regencies/store', form);
  },

  editRegencies: function( id ){
    return axios.get(BKCU_CONFIG.API_URL + '/regencies/edit/' + id);
  },

  updateRegencies: function ( id, form ){
    return axios.post(BKCU_CONFIG.API_URL + '/regencies/update/' + id, form);
  },

  deleteRegencies: function( id ){
    return axios.delete(BKCU_CONFIG.API_URL + '/regencies/' + id);
  }
}