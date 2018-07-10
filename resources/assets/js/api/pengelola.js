import { BKCU_CONFIG } from '../config.js';

export default {
  
  index: function( p ){
    return axios.get( BKCU_CONFIG.API_URL + '/pengelola' ,{params: p});
  },

  indexCu: function( p, id ){
    return axios.get( BKCU_CONFIG.API_URL + '/pengelola/indexCu/' + id, {params: p});
  },

  indexPekerjaan: function( id ){
    return axios.get(BKCU_CONFIG.API_URL + '/pengelola/indexPekerjaan/' + id);
  },

  indexPendidikan: function( id ){
    return axios.get(BKCU_CONFIG.API_URL + '/pengelola/indexPendidikan/' + id);
  },

  indexOrganisasi: function( id ){
    return axios.get(BKCU_CONFIG.API_URL + '/pengelola/indexOrganisasi/' + id);
  },

  indexKeluarga: function( id ){
    return axios.get(BKCU_CONFIG.API_URL + '/pengelola/indexKeluarga/' + id);
  },

  indexAnggotaCu: function( id ){
    return axios.get(BKCU_CONFIG.API_URL + '/pengelola/indexAnggotaCu/' + id);
  },

  create: function(){
    return axios.get(BKCU_CONFIG.API_URL + '/pengelola/create');
  },

  createPekerjaan: function(){
    return axios.get(BKCU_CONFIG.API_URL + '/pengelola/createPekerjaan');
  },

  createPendidikan: function(){
    return axios.get(BKCU_CONFIG.API_URL + '/pengelola/createPendidikan');
  },

  createOrganisasi: function(){
    return axios.get(BKCU_CONFIG.API_URL + '/pengelola/createOrganisasi');
  },

  createKeluarga: function(){
    return axios.get(BKCU_CONFIG.API_URL + '/pengelola/createKeluarga');
  },

  createAnggotaCu: function(){
    return axios.get(BKCU_CONFIG.API_URL + '/pengelola/createAnggotaCu');
  },

  store: function ( form ){
    return axios.post(BKCU_CONFIG.API_URL + '/pengelola/store', form);
  },

  savePekerjaan: function ( id, form ){
    return axios.post(BKCU_CONFIG.API_URL + '/pengelola/savePekerjaan/' + id, form);
  },

  savePendidikan: function ( id, form ){
    return axios.post(BKCU_CONFIG.API_URL + '/pengelola/savePendidikan/' + id, form);
  },

  saveOrganisasi: function ( id, form ){
    return axios.post(BKCU_CONFIG.API_URL + '/pengelola/saveOrganisasi/' + id, form);
  },

  saveAnggotaCu: function ( id, form ){
    return axios.post(BKCU_CONFIG.API_URL + '/pengelola/saveAnggotaCu/' + id, form);
  },
  
  editIdentitas: function( id ){
    return axios.get(BKCU_CONFIG.API_URL + '/pengelola/editIdentitas/' + id);
  },

  updateIdentitas: function ( id, form ){
    return axios.post(BKCU_CONFIG.API_URL + '/pengelola/updateIdentitas/' + id, form);
  },

  destroy: function( id ){
    return axios.delete(BKCU_CONFIG.API_URL + '/pengelola/' + id);
  },

  destroyPekerjaan: function( id ){
    return axios.delete(BKCU_CONFIG.API_URL + '/pengelola/pekerjaan/' + id);
  },

  destroyPendidikan: function( id ){
    return axios.delete(BKCU_CONFIG.API_URL + '/pengelola/pendidikan/' + id);
  },

  destroyOrganisasi: function( id ){
    return axios.delete(BKCU_CONFIG.API_URL + '/pengelola/organisasi/' + id);
  },

  destroyKeluarga: function( id ){
    return axios.delete(BKCU_CONFIG.API_URL + '/pengelola/keluarga/' + id);
  },

  destroyAnggotaCu: function( id ){
    return axios.delete(BKCU_CONFIG.API_URL + '/pengelola/anggotaCu/' + id);
  }
}