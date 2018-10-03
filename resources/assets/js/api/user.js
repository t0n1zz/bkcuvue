import { BKCU_CONFIG } from '../config.js';

export default {
  
  // get user profil
  profile: function(){
    return api.call('get', BKCU_CONFIG.API_URL + '/profile');
  },

  profileActivity: function(){
    return api.call('get', BKCU_CONFIG.API_URL + '/profileActivity');
  },

  index: function( p ){
    return api.call('get', BKCU_CONFIG.API_URL + '/user', {params: p});
  },

  indexCu: function( p, id ){
    return api.call('get', BKCU_CONFIG.API_URL + '/user/indexCu/' + id, {params: p});
  },

  create: function(){
    return api.call('get', BKCU_CONFIG.API_URL + '/user/create');
  },

  store: function ( form ){
    return api.call('post', BKCU_CONFIG.API_URL + '/user/store', form);
  },

  edit: function( id ){
    return api.call('get', BKCU_CONFIG.API_URL + '/user/edit/' + id);
  },
  
  editHakAkses: function( id ){
    return api.call('get', BKCU_CONFIG.API_URL + '/user/editHakAkses/' + id);
  },

  update: function ( id, form ){
    return api.call('post', BKCU_CONFIG.API_URL + '/user/update/' + id, form);
  },

  updateHakAkses: function ( id, form ){
    return api.call('post', BKCU_CONFIG.API_URL + '/user/updateHakAkses/' + id, form);
  },

  updateStatus: function( id ){
    return api.call('post', BKCU_CONFIG.API_URL + '/user/updateStatus/' + id);
  },

  updateFoto: function ( id, form ){
    return api.call('post', BKCU_CONFIG.API_URL + '/user/updateFoto/' + id, form);
  },

  updatePassword: function ( id, form ){
    return api.call('post', BKCU_CONFIG.API_URL + '/user/updatePassword/' + id, form);
  },

  updateResetPassword: function( id ){
    return api.call('post', BKCU_CONFIG.API_URL + '/user/updateResetPassword/' + id);
  },

  destroy: function( id ){
    return api.call('delete', BKCU_CONFIG.API_URL + '/user/' + id);
  },

  markAllNotifRead: function(){
    return api.call('get', BKCU_CONFIG.API_URL + '/markAllNotifRead');
  },

  markNotifRead: function(id){
    return api.call('get', BKCU_CONFIG.API_URL + '/markNotifRead/' + id);
  },

  count: function(){
    return api.call('get', BKCU_CONFIG.API_URL + '/user/count');
  },
}