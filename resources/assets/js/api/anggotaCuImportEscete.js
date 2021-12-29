export default{
    index: function( id_cu ){
        return axios.get('/api/anggotaCuImportEscete/index/' + id_cu);
      },    
    draft: function ( id_cu, id_user, tipe){
        return axios.post('/api/anggotaCuImportEscete/draft/'+id_cu +'/'+ id_user);
    },
    simpanDraft: function ( id_cu){
        return axios.post('/api/anggotaCuImportEscete/simpandraft/'+id_cu);
    },
}