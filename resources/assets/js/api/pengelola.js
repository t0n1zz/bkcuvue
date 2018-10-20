export default {
  
  index: function( p ){
    return axios.get('/api/pengelola' ,{params: p});
  },

  indexCu: function( p, id ){
    return axios.get('/api/pengelola/indexCu/' + id, {params: p});
  },

  indexPekerjaan: function( id ){
    return axios.get('/api/pengelola/indexPekerjaan/' + id);
  },

  indexPendidikan: function( id ){
    return axios.get('/api/pengelola/indexPendidikan/' + id);
  },

  indexOrganisasi: function( id ){
    return axios.get('/api/pengelola/indexOrganisasi/' + id);
  },

  indexKeluarga: function( id ){
    return axios.get('/api/pengelola/indexKeluarga/' + id);
  },

  indexAnggotaCu: function( id ){
    return axios.get('/api/pengelola/indexAnggotaCu/' + id);
  },

  create: function(){
    return axios.get('/api/pengelola/create');
  },

  createPekerjaan: function(){
    return axios.get('/api/pengelola/createPekerjaan');
  },

  createPendidikan: function(){
    return axios.get('/api/pengelola/createPendidikan');
  },

  createOrganisasi: function(){
    return axios.get('/api/pengelola/createOrganisasi');
  },

  createKeluarga: function(){
    return axios.get('/api/pengelola/createKeluarga');
  },

  createAnggotaCu: function(){
    return axios.get('/api/pengelola/createAnggotaCu');
  },

  store: function ( form ){
    return axios.post('/api/pengelola/store', form);
  },

  savePekerjaan: function ( id, form ){
    return axios.post('/api/pengelola/savePekerjaan/' + id, form);
  },

  savePendidikan: function ( id, form ){
    return axios.post('/api/pengelola/savePendidikan/' + id, form);
  },

  saveOrganisasi: function ( id, form ){
    return axios.post('/api/pengelola/saveOrganisasi/' + id, form);
  },

  saveAnggotaCu: function ( id, form ){
    return axios.post('/api/pengelola/saveAnggotaCu/' + id, form);
  },
  
  editIdentitas: function( id ){
    return axios.get('/api/pengelola/editIdentitas/' + id);
  },

  updateIdentitas: function ( id, form ){
    return axios.post('/api/pengelola/updateIdentitas/' + id, form);
  },

  destroy: function( id ){
    return axios.delete('/api/pengelola/' + id);
  },

  destroyPekerjaan: function( id ){
    return axios.delete('/api/pengelola/pekerjaan/' + id);
  },

  destroyPendidikan: function( id ){
    return axios.delete('/api/pengelola/pendidikan/' + id);
  },

  destroyOrganisasi: function( id ){
    return axios.delete('/api/pengelola/organisasi/' + id);
  },

  destroyKeluarga: function( id ){
    return axios.delete('/api/pengelola/keluarga/' + id);
  },

  destroyAnggotaCu: function( id ){
    return axios.delete('/api/pengelola/anggotaCu/' + id);
  },

  count: function(){
    return axios.get('/api/pengelola/count');
  },
}