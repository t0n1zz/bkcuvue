export default {
  
  index: function( p ){
    return axios.get('/api/user', {params: p});
  },

  indexCu: function( p, id ){
    return axios.get('/api/user/indexCu/' + id, {params: p});
  },

  indexCuPermission: function( id ){
    return axios.get('/api/user/indexCuPermission/' + id);
  },

  indexActivity: function( page ){
    return axios.get('/api/user/indexActivity?page=' + page);
  },

  getActivity: function( page, id ){
    return axios.get('/api/user/getActivity/' + id + '?page=' + page);
  },

  create: function(){
    return axios.get('/api/user/create');
  },

  store: function ( form ){
    return axios.post('/api/user/store', form);
  },

  edit: function( id ){
    return axios.get('/api/user/edit/' + id);
  },
  
  editHakAkses: function( id ){
    return axios.get('/api/user/editHakAkses/' + id);
  },

  update: function ( id, form ){
    return axios.post('/api/user/update/' + id, form);
  },

  updateHakAkses: function ( id, form ){
    return axios.post('/api/user/updateHakAkses/' + id, form);
  },

  updateStatus: function( id ){
    return axios.post('/api/user/updateStatus/' + id);
  },

  updateFoto: function ( id, form ){
    return axios.post('/api/user/updateFoto/' + id, form);
  },

  updateIdentitas: function ( id, form ){
    return axios.post('/api/user/updateIdentitas/' + id, form);
  },

  updatePassword: function ( id, form ){
    return axios.post('/api/user/updatePassword/' + id, form);
  },

  updateResetPassword: function( id ){
    return axios.post('/api/user/updateResetPassword/' + id);
  },

  destroy: function( id ){
    return axios.delete('/api/user/' + id);
  },

  getNotif: function(){
    return axios.get('/api/getNotif');
  },

  markAllNotifRead: function(){
    return axios.get('/api/markAllNotifRead');
  },

  markNotifRead: function(id){
    return axios.get('/api/markNotifRead/' + id);
  },

  count: function(){
    return axios.get('/api/user/count');
  },
}