export default {
  
  index: function(p, cu, tp){
    return axios.get('/api/anggotaCuDraft/index/' + cu + '/' + tp, {params: p});
  },

  store: function ( id ){
    return axios.post('/api/anggotaCuDraft/store/' + id);
  },

  storeAll: function ( cu ){
    return axios.post('/api/anggotaCuDraft/storeAll/' + cu);
  },

  edit: function( id ){
    return axios.get('/api/anggotaCuDraft/edit/' + id);
  },

  update: function ( id, form ){
    return axios.post('/api/anggotaCuDraft/update/' + id, form);
  },

  destroy: function( id ){
    return axios.delete('/api/anggotaCuDraft/destroy/' + id);
  },

  destroyAll: function( cu ){
    return axios.delete('/api/anggotaCuDraft/destroyAll/' + cu);
  },
}