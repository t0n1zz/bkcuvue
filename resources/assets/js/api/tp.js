import { BKCU_CONFIG } from '../config.js';

export default {
  
  index: function( p ){
    return axios.get(BKCU_CONFIG.API_URL +  '/tp' , {params: p});
  },

  get: function(){
    return axios.get(BKCU_CONFIG.API_URL + '/tp/get');
  },

  indexCu: function( p, id ){
    return axios.get(BKCU_CONFIG.API_URL + '/tp/indexCu/' + id, {params: p});
  },

  getCu: function( id ){
    return axios.get(BKCU_CONFIG.API_URL + '/tp/getCu/' + id);
  },

  create: function(){
    return axios.get(BKCU_CONFIG.API_URL + '/tp/create');
  },

  store: function ( form ){
    return axios.post(BKCU_CONFIG.API_URL + '/tp/store', form);
  },

  edit: function( id ){
    return axios.get(BKCU_CONFIG.API_URL + '/tp/edit/' + id);
  },

  update: function ( id, form ){
    return axios.post(BKCU_CONFIG.API_URL + '/tp/update/' + id, form);
  },

  destroy: function( id ){
    return axios.delete(BKCU_CONFIG.API_URL + '/tp/' + id);
  },

  count: function( p ){
    return axios.get(BKCU_CONFIG.API_URL +  '/tp/count');
  },
}