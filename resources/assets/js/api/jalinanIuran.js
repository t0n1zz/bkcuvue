export default {
  
  index: function( p ){
    return axios.get('/api/jalinanIuran', {params: p});
  },

  indexCu: function( p, id ){
    return axios.get('/api/jalinanIuran/indexCu/' + id, {params: p});
  },

  indexAnggota: function( p, id, lokasi ){
    return axios.get('/api/jalinanIuran/indexAnggota/' + id + '/' + lokasi, {params: p});
  },

  create: function( idCu, periodeBulan, periodeTahun){
    return axios.get('/api/jalinanIuran/create/' + idCu + '/' + periodeBulan + '/' + periodeTahun);
  },

  store: function (form ){
    return axios.post('/api/jalinanIuran/store', form);
  },

  edit: function( id ){
    return axios.get('/api/jalinanIuran/edit/' + id);
  },

  update: function ( id, form ){
    return axios.post('/api/jalinanIuran/update/' + id, form);
  },

  destroy: function( id ){
    return axios.delete('/api/jalinanIuran/' + id);
  },
}