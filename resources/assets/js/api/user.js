export default {
  
  index: function( p ){
    return api.call('get', '/api/user', {params: p});
  },

  indexCu: function( p, id ){
    return api.call('get', '/api/user/indexCu/' + id, {params: p});
  },

  create: function(){
    return api.call('get', '/api/user/create');
  },

  store: function ( form ){
    return api.call('post', '/api/user/store', form);
  },

  edit: function( id ){
    return api.call('get', '/api/user/edit/' + id);
  },
  
  editHakAkses: function( id ){
    return api.call('get', '/api/user/editHakAkses/' + id);
  },

  update: function ( id, form ){
    return api.call('post', '/api/user/update/' + id, form);
  },

  updateHakAkses: function ( id, form ){
    return api.call('post', '/api/user/updateHakAkses/' + id, form);
  },

  updateStatus: function( id ){
    return api.call('post', '/api/user/updateStatus/' + id);
  },

  updateFoto: function ( id, form ){
    return api.call('post', '/api/user/updateFoto/' + id, form);
  },

  updatePassword: function ( id, form ){
    return api.call('post', '/api/user/updatePassword/' + id, form);
  },

  updateResetPassword: function( id ){
    return api.call('post', '/api/user/updateResetPassword/' + id);
  },

  destroy: function( id ){
    return api.call('delete', '/api/user/' + id);
  },

  markAllNotifRead: function(){
    return api.call('get', '/api/markAllNotifRead');
  },

  markNotifRead: function(id){
    return api.call('get', '/api/markNotifRead/' + id);
  },

  count: function(){
    return api.call('get', '/api/user/count');
  },
}