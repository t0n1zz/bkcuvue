import { BKCU_CONFIG } from '../config.js';

export default {
  
  getRoleS: function( p ){
    return axios.get( BKCU_CONFIG.API_URL + '/role' + `?column=${p.column}&direction=${p.direction}&per_page=${p.per_page}&page=${p.page}&search_column=${p.search_column}&search_operator=${p.search_operator}&search_query_1=${p.search_query_1}&search_query_2=${p.search_query_2}`);
  },

  getRoleAll: function(){
    return axios.get(BKCU_CONFIG.API_URL + '/role_all');
  },

  getRole: function( id ){
    return axios.get(BKCU_CONFIG.API_URL + '/role/' + id);
  },

  storeRole: function ( form ){
    return axios.post(BKCU_CONFIG.API_URL + '/role/store', form);
  },

  updateRole: function ( id, form ){
    return axios.put(BKCU_CONFIG.API_URL + '/role/update/' + id, form);
  },

  deleteRole: function( id ){
    return axios.delete(BKCU_CONFIG.API_URL + '/role/' + id);
  }
}