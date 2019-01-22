export default {
  
  index: function( p, tingkat ){
    return axios.get('/api/aktivis/index/' + tingkat ,{params: p});
  },

  indexTingkat: function( p ){
    return axios.post('/api/aktivis/indexTingkat/' ,{params: p});
  },

  indexLembaga: function( p ){
    return axios.get('/api/aktivis/indexLembaga' ,{params: p});
  },

  indexCu: function( p, id, tingkat ){
    return axios.get('/api/aktivis/indexCu/' + id + '/' + tingkat, {params: p});
  },

  indexPekerjaan: function( id ){
    return axios.get('/api/aktivis/indexPekerjaan/' + id);
  },

  indexPendidikan: function( id ){
    return axios.get('/api/aktivis/indexPendidikan/' + id);
  },

  indexOrganisasi: function( id ){
    return axios.get('/api/aktivis/indexOrganisasi/' + id);
  },

  indexKeluarga: function( id ){
    return axios.get('/api/aktivis/indexKeluarga/' + id);
  },

  indexAnggotaCu: function( id ){
    return axios.get('/api/aktivis/indexAnggotaCu/' + id);
  },

  create: function(){
    return axios.get('/api/aktivis/create');
  },

  createPekerjaan: function(){
    return axios.get('/api/aktivis/createPekerjaan');
  },

  createPendidikan: function(){
    return axios.get('/api/aktivis/createPendidikan');
  },

  createOrganisasi: function(){
    return axios.get('/api/aktivis/createOrganisasi');
  },

  createKeluarga: function(){
    return axios.get('/api/aktivis/createKeluarga');
  },

  createAnggotaCu: function(){
    return axios.get('/api/aktivis/createAnggotaCu');
  },

  store: function ( form ){
    return axios.post('/api/aktivis/store', form);
  },

  savePekerjaan: function ( id, form ){
    return axios.post('/api/aktivis/savePekerjaan/' + id, form);
  },

  savePendidikan: function ( id, form ){
    return axios.post('/api/aktivis/savePendidikan/' + id, form);
  },

  saveOrganisasi: function ( id, form ){
    return axios.post('/api/aktivis/saveOrganisasi/' + id, form);
  },

  saveKeluarga: function ( id, form ){
    return axios.post('/api/aktivis/saveKeluarga/' + id, form);
  },

  saveAnggotaCu: function ( id, form ){
    return axios.post('/api/aktivis/saveAnggotaCu/' + id, form);
  },
  
  editIdentitas: function( id ){
    return axios.get('/api/aktivis/editIdentitas/' + id);
  },

  updateIdentitas: function ( id, form ){
    return axios.post('/api/aktivis/updateIdentitas/' + id, form);
  },

  destroy: function( id ){
    return axios.delete('/api/aktivis/' + id);
  },

  destroyPekerjaan: function( id ){
    return axios.delete('/api/aktivis/pekerjaan/' + id);
  },

  destroyPendidikan: function( id ){
    return axios.delete('/api/aktivis/pendidikan/' + id);
  },

  destroyOrganisasi: function( id ){
    return axios.delete('/api/aktivis/organisasi/' + id);
  },

  destroyKeluarga: function( id ){
    return axios.delete('/api/aktivis/keluarga/' + id);
  },

  destroyAnggotaCu: function( id ){
    return axios.delete('/api/aktivis/anggotaCu/' + id);
  },

  count: function(){
    return axios.get('/api/aktivis/count');
  },

  history: function(){
    return axios.get('/api/aktivis/history');
  },
}