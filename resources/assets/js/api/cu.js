import { BKCU_CONFIG } from '../config.js';

export default {
  
  index: function( p ){
    return axios.get(BKCU_CONFIG.API_URL +  '/cu' , {params: p});
  },

  get: function(){
    return axios.get(BKCU_CONFIG.API_URL + '/cu/get');
  },

  getHeader: function(){
    return axios.get(BKCU_CONFIG.API_URL + '/cu/getHeader');
  },

  getPus: function( id ){
    return axios.get(BKCU_CONFIG.API_URL + '/cu/getPus/' + id);
  },

  create: function(){
    return axios.get(BKCU_CONFIG.API_URL + '/cu/create');
  },

  store: function ( form ){
    return axios.post(BKCU_CONFIG.API_URL + '/cu/store', form);
  },

  edit: function( id ){
    return axios.get(BKCU_CONFIG.API_URL + '/cu/edit/' + id);
  },

  update: function ( id, form ){
    return axios.post(BKCU_CONFIG.API_URL + '/cu/update/' + id, form);
  },

  destroy: function( id ){
    return axios.delete(BKCU_CONFIG.API_URL + '/cu/' + id);
  }
}