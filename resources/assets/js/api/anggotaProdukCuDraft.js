export default {
  
  index: function(p, cu){
    return axios.get('/api/anggotaProdukCuDraft/index/' + cu, {params: p});
  },

  store: function ( id ){
    return axios.post('/api/anggotaProdukCuDraft/store/' + id);
  },

  storeAll: function ( cu ){
    return axios.post('/api/anggotaProdukCuDraft/storeAll/' + cu);
  },

  edit: function( id ){
    return axios.get('/api/anggotaProdukCuDraft/edit/' + id);
  },

  update: function ( id, form ){
    return axios.post('/api/anggotaProdukCuDraft/update/' + id, form);
  },

  destroy: function( id ){
    return axios.delete('/api/anggotaProdukCuDraft/destroy/' + id);
  },

  destroyAll: function( cu ){
    return axios.delete('/api/anggotaProdukCuDraft/destroyAll/' + cu);
  },
}