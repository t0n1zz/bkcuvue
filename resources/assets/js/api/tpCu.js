import { BKCU_CONFIG } from '../config.js';

export default {
  
  index: function( p ){
    return axios.get(BKCU_CONFIG.API_URL +  '/tpCu' , {params: p});
  },

  get: function(){
    return axios.get(BKCU_CONFIG.API_URL + '/tpCu/get');
  },

  indexCu: function( p, id ){
    return axios.get(BKCU_CONFIG.API_URL + '/tpCu/indexCu/' + id, {params: p});
  },

  getCu: function( id ){
    return axios.get(BKCU_CONFIG.API_URL + '/tpCu/getCu/' + id);
  },

  create: function(){
    return axios.get(BKCU_CONFIG.API_URL + '/tpCu/create');
  },

  store: function ( form ){
    return axios.post(BKCU_CONFIG.API_URL + '/tpCu/store', form);
  },

  edit: function( id ){
    return axios.get(BKCU_CONFIG.API_URL + '/tpCu/edit/' + id);
  },

  update: function ( id, form ){
    return axios.post(BKCU_CONFIG.API_URL + '/tpCu/update/' + id, form);
  },

  destroy: function( id ){
    return axios.delete(BKCU_CONFIG.API_URL + '/tpCu/' + id);
  }
}