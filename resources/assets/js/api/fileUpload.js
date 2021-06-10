export default{
    index: function( id_cu, id_user ){
        return axios.get('/api/fileUpload/index/' + id_cu + '/'+ id_user);
      },    
    destroy: function(id){
        return axios.delete('/api/fileUpload/destroy/'+id );
    },
    draft: function ( id_cu, id_user, tipe){
        return axios.post('/api/fileUpload/draft/'+id_cu +'/'+ id_user+'/'+ tipe);
    },
}