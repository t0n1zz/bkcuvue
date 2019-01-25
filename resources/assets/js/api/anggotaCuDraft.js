export default {
  
  index: function(){
    return axios.get('/api/anggotaCuDraft/');
  },

  store: function ( id ){
    return axios.post('/api/anggotaCuDraft/store/' + id);
  },

  storeAll: function (){
    return axios.post('/api/anggotaCuDraft/storeAll');
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

  destroyAll: function(){
    return axios.delete('/api/anggotaCuDraft/destroyAll');
  },
}