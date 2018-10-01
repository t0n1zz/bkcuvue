import { BKCU_CONFIG } from '../config.js';

export default {
  
  index: function( p ){
    return axios.get(BKCU_CONFIG.API_URL +  '/produkcu' , {params: p});
  },

  indexCu: function( p, id ){
    return axios.get(BKCU_CONFIG.API_URL + '/produkcu/indexCu/' + id, {params: p});
  },

  create: function(){
    return axios.get(BKCU_CONFIG.API_URL + '/produkcu/create');
  },

  store: function ( form ){
    return axios.post(BKCU_CONFIG.API_URL + '/produkcu/store', form);
  },

  edit: function( id ){
    return axios.get(BKCU_CONFIG.API_URL + '/produkcu/edit/' + id);
  },

  update: function ( id, form ){
    return axios.post(BKCU_CONFIG.API_URL + '/produkcu/update/' + id, form);
  },

  destroy: function( id ){
    return axios.delete(BKCU_CONFIG.API_URL + '/produkcu/' + id);
  },

  count: function(){
    return axios.get(BKCU_CONFIG.API_URL + '/produkcu/count');
  },
}