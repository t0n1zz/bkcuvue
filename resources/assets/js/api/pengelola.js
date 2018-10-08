export default {
  
  index: function( p ){
    return api.call('get', '/api/pengelola' ,{params: p});
  },

  indexCu: function( p, id ){
    return api.call('get', '/api/pengelola/indexCu/' + id, {params: p});
  },

  indexPekerjaan: function( id ){
    return api.call('get', '/api/pengelola/indexPekerjaan/' + id);
  },

  indexPendidikan: function( id ){
    return api.call('get', '/api/pengelola/indexPendidikan/' + id);
  },

  indexOrganisasi: function( id ){
    return api.call('get', '/api/pengelola/indexOrganisasi/' + id);
  },

  indexKeluarga: function( id ){
    return api.call('get', '/api/pengelola/indexKeluarga/' + id);
  },

  indexAnggotaCu: function( id ){
    return api.call('get', '/api/pengelola/indexAnggotaCu/' + id);
  },

  create: function(){
    return api.call('get', '/api/pengelola/create');
  },

  createPekerjaan: function(){
    return api.call('get', '/api/pengelola/createPekerjaan');
  },

  createPendidikan: function(){
    return api.call('get', '/api/pengelola/createPendidikan');
  },

  createOrganisasi: function(){
    return api.call('get', '/api/pengelola/createOrganisasi');
  },

  createKeluarga: function(){
    return api.call('get', '/api/pengelola/createKeluarga');
  },

  createAnggotaCu: function(){
    return api.call('get', '/api/pengelola/createAnggotaCu');
  },

  store: function ( form ){
    return api.call('post', '/api/pengelola/store', form);
  },

  savePekerjaan: function ( id, form ){
    return api.call('post', '/api/pengelola/savePekerjaan/' + id, form);
  },

  savePendidikan: function ( id, form ){
    return api.call('post', '/api/pengelola/savePendidikan/' + id, form);
  },

  saveOrganisasi: function ( id, form ){
    return api.call('post', '/api/pengelola/saveOrganisasi/' + id, form);
  },

  saveAnggotaCu: function ( id, form ){
    return api.call('post', '/api/pengelola/saveAnggotaCu/' + id, form);
  },
  
  editIdentitas: function( id ){
    return api.call('post', '/api/pengelola/editIdentitas/' + id);
  },

  updateIdentitas: function ( id, form ){
    return api.call('post', '/api/pengelola/updateIdentitas/' + id, form);
  },

  destroy: function( id ){
    return api.call('delete', '/api/pengelola/' + id);
  },

  destroyPekerjaan: function( id ){
    return api.call('delete', '/api/pengelola/pekerjaan/' + id);
  },

  destroyPendidikan: function( id ){
    return api.call('delete', '/api/pengelola/pendidikan/' + id);
  },

  destroyOrganisasi: function( id ){
    return api.call('delete', '/api/pengelola/organisasi/' + id);
  },

  destroyKeluarga: function( id ){
    return api.call('delete', '/api/pengelola/keluarga/' + id);
  },

  destroyAnggotaCu: function( id ){
    return api.call('delete', '/api/pengelola/anggotaCu/' + id);
  },

  count: function(){
    return api.call('get',  '/api/pengelola/count');
  },
}