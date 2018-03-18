import { BKCU_CONFIG } from '../config.js';

export default {
  
  // get user profil
  userData: function(){
    return axios.get(BKCU_CONFIG.API_URL + '/userData');
  },

  index: function( p ){
    return axios.get( BKCU_CONFIG.API_URL + '/user', {params: p});
  },

  indexCU: function( p, id ){
    return axios.get( BKCU_CONFIG.API_URL + '/user/indexCU/' + id, {params: p});
  },

  create: function(){
    return axios.get(BKCU_CONFIG.API_URL + '/user/create');
  },

  store: function ( form ){
    return axios.post(BKCU_CONFIG.API_URL + '/user/store', form);
  },

  edit: function( id ){
    return axios.get(BKCU_CONFIG.API_URL + '/user/edit/' + id);
  },

  update: function ( id, form ){
    return axios.post(BKCU_CONFIG.API_URL + '/user/update/' + id, form);
  },

  updateStatus: function( id ){
    return axios.post(BKCU_CONFIG.API_URL + '/user/updateStatus/' + id);
  },

  updateResetPassword: function( id ){
    return axios.post(BKCU_CONFIG.API_URL + '/user/resetPassword/' + id);
  },

  destroy: function( id ){
    return axios.delete(BKCU_CONFIG.API_URL + '/user/' + id);
  }
}