export default {
  
  index: function( p ){
    return api.call('get', '/api/artikel' ,{params: p});
  },

  indexCu: function( p, id ){
    return api.call('get', '/api/artikel/indexCu/' + id, {params: p});
  },

  create: function(){
    return api.call('get', '/api/artikel/create');
  },

  store: function ( form ){
    return api.call('post', '/api/artikel/store', form);
  },

  edit: function( id ){
    return api.call('get','/api/artikel/edit/' + id);
  },

  update: function ( id, form ){
    return api.call('post','/api/artikel/update/' + id, form);
  },

  updateTerbitkan: function( id ){
    return api.call('post','/api/artikel/updateTerbitkan/' + id);
  },

  updateUtamakan: function( id ){
    return api.call('post','/api/artikel/updateUtamakan/' + id);
  },

  destroy: function( id ){
    return api.call('delete','/api/artikel/' + id);
  },

  count: function(){
    return api.call('get','/api/artikel/count');
  },
}