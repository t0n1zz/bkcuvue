export default {
  
  countOrganisasi: function(){
    return axios.get('/api/countOrganisasi');
  },
}