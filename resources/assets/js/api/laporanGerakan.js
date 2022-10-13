export default {
  
  index: function( p ){
    return axios.get('/api/laporanGerakan' , {params: p});
  },

  create: function(){
    return axios.get('/api/laporanGerakan/create');
  },

  store: function ( form ){
    return axios.post('/api/laporanGerakan/store', form);
  },

  edit: function( id ){
    return axios.get('/api/laporanGerakan/edit/' + id);
  },

  update: function ( id, form ){
    return axios.post('/api/laporanGerakan/update/' + id, form);
  },

  destroy: function( id ){
    return axios.delete('/api/laporanGerakan/' + id);
  }
}