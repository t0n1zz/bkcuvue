export default {
  
  getAll: function(){
    return axios.get('/api/notification/getAll');
  },


  get: function(){
    return axios.get('/api/notification/get');
  },

  markAllRead: function(){
    return axios.get('/api/notification/markAllRead');
  },

  markRead: function(id){
    return axios.get('/api/notification/markRead/' + id);
  },

}