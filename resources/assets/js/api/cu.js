import { BKCU_CONFIG } from '../config.js';

export default {
  
  index: function( p ){
    return axios.get(BKCU_CONFIG.API_URL +  '/cu' , {params: p});
  },

  indexAll: function(){
    return axios.get(BKCU_CONFIG.API_URL + '/cu/indexAll');
  },

  indexPus: function( id ){
    return axios.get(BKCU_CONFIG.API_URL + '/cu/pus/' + id);
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