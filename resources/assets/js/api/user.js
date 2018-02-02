import { BKCU_CONFIG } from '../config.js';

export default {
  
  getUserData: function(){
    return axios.get(BKCU_CONFIG.API_URL + '/userData');
  },

  getUserS: function( p ){
    return axios.get( BKCU_CONFIG.API_URL + '/user' + `?column=${p.column}&direction=${p.direction}&per_page=${p.per_page}&page=${p.page}&search_column=${p.search_column}&search_operator=${p.search_operator}&search_query_1=${p.search_query_1}&search_query_2=${p.search_query_2}`);
  },

  getUserAll: function(){
    return axios.get(BKCU_CONFIG.API_URL + '/user_all');
  },

  getUser: function( id ){
    return axios.get(BKCU_CONFIG.API_URL + '/user/' + id);
  },

  storeUser: function ( form ){
    return axios.post(BKCU_CONFIG.API_URL + '/user/store', form);
  },

  updateUser: function ( id, form ){
    return axios.put(BKCU_CONFIG.API_URL + '/user/update/' + id, form);
  },

  deleteUser: function( id ){
    return axios.delete(BKCU_CONFIG.API_URL + '/user/' + id);
  }
}