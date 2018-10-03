import { BKCU_CONFIG } from '../config.js';

export default {
  
  getRoleS: function( p ){
    return api.call('get', BKCU_CONFIG.API_URL + '/role' + `?column=${p.column}&direction=${p.direction}&per_page=${p.per_page}&page=${p.page}&search_column=${p.search_column}&search_operator=${p.search_operator}&search_query_1=${p.search_query_1}&search_query_2=${p.search_query_2}`);
  },

  getRoleAll: function(){
    return api.call('get', BKCU_CONFIG.API_URL + '/role_all');
  },

  getRoleTipe: function(tipe){
    return api.call('get', BKCU_CONFIG.API_URL + '/role_tipe/' + tipe);
  },


  getRolePermission: function( id ){
    return api.call('get', BKCU_CONFIG.API_URL + '/role_permission/' + id);
  },

  getRole: function( id ){
    return api.call('get', BKCU_CONFIG.API_URL + '/role/' + id);
  },

  storeRole: function ( form ){
    return api.call('post', BKCU_CONFIG.API_URL + '/role/store', form);
  },

  updateRole: function ( id, form ){
    return api.call('put', BKCU_CONFIG.API_URL + '/role/update/' + id, form);
  },

  deleteRole: function( id ){
    return api.call('delete', BKCU_CONFIG.API_URL + '/role/' + id);
  }
}