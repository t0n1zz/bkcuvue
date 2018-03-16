import { BKCU_CONFIG } from '../config.js';

export default {
  
  index: function( p ){
    return axios.get( BKCU_CONFIG.API_URL + '/districts' , {params: p});
  },

  get: function(){
    return axios.get(BKCU_CONFIG.API_URL + '/districts/get');
  },

  indexRegencies: function( p, id ){
    return axios.get(BKCU_CONFIG.API_URL + '/regencies/indexRegencies/' + id, {params: p});
  },
  
  getRegencies: function( id ){
    return axios.get(BKCU_CONFIG.API_URL + '/districts/getRegencies/' + id);
  },

  create: function(){
    return axios.get(BKCU_CONFIG.API_URL + '/districts/create');
  },

  store: function ( form ){
    return axios.post(BKCU_CONFIG.API_URL + '/districts/store', form);
  },

  edit: function( id ){
    return axios.get(BKCU_CONFIG.API_URL + '/districts/edit/' + id);
  },

  update: function ( id, form ){
    return axios.post(BKCU_CONFIG.API_URL + '/districts/update/' + id, form);
  },

  destroy: function( id ){
    return axios.delete(BKCU_CONFIG.API_URL + '/districts/' + id);
  }
}