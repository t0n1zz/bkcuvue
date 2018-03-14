import { BKCU_CONFIG } from '../config.js';

export default {
  
  getProvincesS: function( p ){
    return axios.get( BKCU_CONFIG.API_URL + '/provinces' + `?column=${p.column}&direction=${p.direction}&per_page=${p.per_page}&page=${p.page}&search_column=${p.search_column}&search_operator=${p.search_operator}&search_query_1=${p.search_query_1}&search_query_2=${p.search_query_2}`);
  },

  getProvincesAll: function(){
    return axios.get(BKCU_CONFIG.API_URL + '/provinces/indexAll');
  },

  getProvinces: function( id ){
    return axios.get(BKCU_CONFIG.API_URL + '/provinces/' + id);
  },

  createProvinces: function(){
    return axios.get(BKCU_CONFIG.API_URL + '/provinces/create');
  },

  storeProvinces: function ( form ){
    return axios.post(BKCU_CONFIG.API_URL + '/provinces/store', form);
  },

  editProvinces: function( id ){
    return axios.get(BKCU_CONFIG.API_URL + '/provinces/edit/' + id);
  },

  updateProvinces: function ( id, form ){
    return axios.post(BKCU_CONFIG.API_URL + '/provinces/update/' + id, form);
  },

  deleteProvinces: function( id ){
    return axios.delete(BKCU_CONFIG.API_URL + '/provinces/' + id);
  }
}