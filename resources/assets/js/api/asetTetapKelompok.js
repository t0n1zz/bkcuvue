export default {
  
  index: function( p ){
    return axios.get('/api/asetTetapKelompok' , {params: p});
  },

  get: function(id){
    return axios.get('/api/asetTetapKelompok/get/' + id);
  },
  
  create: function(){
    return axios.get('/api/asetTetapKelompok/create');
  },

  store: function ( form ){
    return axios.post('/api/asetTetapKelompok/store', form);
  },

  edit: function( id ){
    return axios.get('/api/asetTetapKelompok/edit/' + id);
  },

  update: function ( id, form ){
    return axios.post('/api/asetTetapKelompok/update/' + id, form);
  },

  destroy: function( id ){
    return axios.delete('/api/asetTetapKelompok/' + id);
  },

  count: function(){
    return axios.get('/api/asetTetapKelompok/count');
  },
}