import { BKCU_CONFIG } from '../config.js';

export default {
  
  getCUS: function( p ){
    return axios.get(BKCU_CONFIG.API_URL +  '/cu' , {params: p});
  },

  getCUAll: function(){
    return axios.get(BKCU_CONFIG.API_URL + '/cu_all');
  },

  getCU: function( id ){
    return axios.get(BKCU_CONFIG.API_URL + '/cu/' + id);
  },

  getCUPus: function( id ){
    return axios.get(BKCU_CONFIG.API_URL + '/cu/pus/' + id);
  },

  createCU: function(){
    return axios.get(BKCU_CONFIG.API_URL + '/cu/create');
  },

  storeCU: function ( form ){
    return axios.post(BKCU_CONFIG.API_URL + '/cu/store', form);
  },

  editCU: function( id ){
    return axios.get(BKCU_CONFIG.API_URL + '/cu/edit/' + id);
  },

  updateCU: function ( id, form ){
    return axios.post(BKCU_CONFIG.API_URL + '/cu/update/' + id, form);
  },

  deleteCU: function( id ){
    return axios.delete(BKCU_CONFIG.API_URL + '/cu/' + id);
  }
}