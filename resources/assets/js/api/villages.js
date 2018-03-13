import { BKCU_CONFIG } from '../config.js';

export default {
  
  getVillagesS: function( p ){
    return axios.get( BKCU_CONFIG.API_URL + '/villages' + `?column=${p.column}&direction=${p.direction}&per_page=${p.per_page}&page=${p.page}&search_column=${p.search_column}&search_operator=${p.search_operator}&search_query_1=${p.search_query_1}&search_query_2=${p.search_query_2}`);
  },

  getVillagesAll: function(){
    return axios.get(BKCU_CONFIG.API_URL + '/villages_all');
  },

  getVillages: function( id ){
    return axios.get(BKCU_CONFIG.API_URL + '/villages/' + id);
  },

  getVillagesRegencies: function( id ){
    return axios.get(BKCU_CONFIG.API_URL + '/villages/regencies/' + id);
  },

  createVillages: function(){
    return axios.get(BKCU_CONFIG.API_URL + '/villages/create');
  },

  storeVillages: function ( form ){
    return axios.post(BKCU_CONFIG.API_URL + '/villages/store', form);
  },

  editVillages: function( id ){
    return axios.get(BKCU_CONFIG.API_URL + '/villages/edit/' + id);
  },

  updateVillages: function ( id, form ){
    return axios.post(BKCU_CONFIG.API_URL + '/villages/update/' + id, form);
  },

  deleteVillages: function( id ){
    return axios.delete(BKCU_CONFIG.API_URL + '/villages/' + id);
  }
}