import { BKCU_CONFIG } from '../config.js';

export default {
  
  getDistrictsS: function( p ){
    return axios.get( BKCU_CONFIG.API_URL + '/districts' + `?column=${p.column}&direction=${p.direction}&per_page=${p.per_page}&page=${p.page}&search_column=${p.search_column}&search_operator=${p.search_operator}&search_query_1=${p.search_query_1}&search_query_2=${p.search_query_2}`);
  },

  getDistrictsAll: function(){
    return axios.get(BKCU_CONFIG.API_URL + '/districts_all');
  },

  getDistricts: function( id ){
    return axios.get(BKCU_CONFIG.API_URL + '/districts/' + id);
  },

  getDistrictsRegencies: function( id ){
    return axios.get(BKCU_CONFIG.API_URL + '/districts/regencies/' + id);
  },

  createDistricts: function(){
    return axios.get(BKCU_CONFIG.API_URL + '/districts/create');
  },

  storeDistricts: function ( form ){
    return axios.post(BKCU_CONFIG.API_URL + '/districts/store', form);
  },

  editDistricts: function( id ){
    return axios.get(BKCU_CONFIG.API_URL + '/districts/edit/' + id);
  },

  updateDistricts: function ( id, form ){
    return axios.post(BKCU_CONFIG.API_URL + '/districts/update/' + id, form);
  },

  deleteDistricts: function( id ){
    return axios.delete(BKCU_CONFIG.API_URL + '/districts/' + id);
  }
}