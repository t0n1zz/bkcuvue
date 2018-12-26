export default {
  
  index: function( p ){
    return axios.get('/api/diklatBKCU' , {params: p});
  },

  indexPeriode: function( p, periode ){
    return axios.get('/api/diklatBKCU/periode/' + periode , {params: p});
  },

  getPeriode: function(){
    return axios.get('/api/diklatBKCU/getPeriode');
  },

  create: function(){
    return axios.get('/api/diklatBKCU/create');
  },

  store: function ( form ){
    return axios.post('/api/diklatBKCU/store', form);
  },

  edit: function( id ){
    return axios.get('/api/diklatBKCU/edit/' + id);
  },

  update: function ( id, form ){
    return axios.post('/api/diklatBKCU/update/' + id, form);
  },

  destroy: function( id ){
    return axios.delete('/api/diklatBKCU/' + id);
  },

  count: function(){
    return axios.get('/api/diklatBKCU/count');
  },
}