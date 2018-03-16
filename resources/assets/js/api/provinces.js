import { BKCU_CONFIG } from '../config.js';

export default {
  
  index: function( p ){
    return axios.get( BKCU_CONFIG.API_URL + '/provinces' , {params: p});
  },

  get: function(){
    return axios.get(BKCU_CONFIG.API_URL + '/provinces/get');
  },

  create: function(){
    return axios.get(BKCU_CONFIG.API_URL + '/provinces/create');
  },

  store: function ( form ){
    return axios.post(BKCU_CONFIG.API_URL + '/provinces/store', form);
  },

  edit: function( id ){
    return axios.get(BKCU_CONFIG.API_URL + '/provinces/edit/' + id);
  },

  update: function ( id, form ){
    return axios.post(BKCU_CONFIG.API_URL + '/provinces/update/' + id, form);
  },

  destroy: function( id ){
    return axios.delete(BKCU_CONFIG.API_URL + '/provinces/' + id);
  }
}