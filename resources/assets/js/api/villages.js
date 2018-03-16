import { BKCU_CONFIG } from '../config.js';

export default {
  
  index: function( p ){
    return axios.get( BKCU_CONFIG.API_URL + '/villages' , {params: p});
  },

  get: function(){
    return axios.get(BKCU_CONFIG.API_URL + '/villages/get');
  },

  indexDistrics: function( p, id ){
    return axios.get(BKCU_CONFIG.API_URL + '/regencies/indexDistricts/' + id, {params: p});
  },
  
  getDistricts: function( id ){
    return axios.get(BKCU_CONFIG.API_URL + '/villages/getDistricts/' + id);
  },

  create: function(){
    return axios.get(BKCU_CONFIG.API_URL + '/villages/create');
  },

  store: function ( form ){
    return axios.post(BKCU_CONFIG.API_URL + '/villages/store', form);
  },

  edit: function( id ){
    return axios.get(BKCU_CONFIG.API_URL + '/villages/edit/' + id);
  },

  update: function ( id, form ){
    return axios.post(BKCU_CONFIG.API_URL + '/villages/update/' + id, form);
  },

  destroy: function( id ){
    return axios.delete(BKCU_CONFIG.API_URL + '/villages/' + id);
  }
}