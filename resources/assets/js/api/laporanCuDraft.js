export default {
  
  index: function(){
    return axios.get('/api/laporanCuDraft/');
  },

  store: function ( id ){
    return axios.post('/api/laporanCuDraft/store/' + id);
  },

  storeAll: function (){
    return axios.post('/api/laporanCuDraft/storeAll');
  },

  edit: function( id ){
    return axios.get('/api/laporanCuDraft/edit/' + id);
  },

  update: function ( id, form ){
    return axios.post('/api/laporanCuDraft/update/' + id, form);
  },

  destroy: function( id ){
    return axios.delete('/api/laporanCuDraft/destroy/' + id);
  },

  destroyAll: function(){
    return axios.delete('/api/laporanCuDraft/destroyAll');
  },
}