import { BKCU_CONFIG } from '../config.js';

export default {
  
  getCUS: function( p ){
    return axios.get( BKCU_CONFIG.API_URL + '/pus' + `?column=${p.column}&direction=${p.direction}&per_page=${p.per_page}&page=${p.page}&search_column=${p.search_column}&search_operator=${p.search_operator}&search_query_1=${p.search_query_1}&search_query_2=${p.search_query_2}`);
  },

  getCUAll: function(){
    return axios.get(BKCU_CONFIG.API_URL + '/pus_all');
  },

  getCU: function( id ){
    return axios.get(BKCU_CONFIG.API_URL + '/pus/' + id);
  },

  storeCU: function ( form ){
    return axios.post(BKCU_CONFIG.API_URL + '/pus/store', form);
  },

  updateCU: function ( id, form ){
    return axios.put(BKCU_CONFIG.API_URL + '/pus/update/' + id, form);
  },

  deleteCU: function( id ){
    return axios.delete(BKCU_CONFIG.API_URL + '/pus/' + id);
  }
}