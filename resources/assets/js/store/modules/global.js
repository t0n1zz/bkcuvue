
export const global = {
  namespaced: true,
  
  // state
  state: {
    data: '',
    idCu: '',
    idTp: '',
    message: '',
    messageType: '',
  },

  // getters
  getters: {
    data: state => state.data,
    idCu: state => state.idCu,
    idTp: state => state.idTp,
    message: state => state.message,
    messageType: state => state.messageType,
  },

  // actions
  actions: {

    // change data
    changeData({commit}, data){
      commit('setData', data);
    },

    // change idcu
    changeIdCu({commit}, id){
      commit('setIdCu', id);
    },

    // change idtpcu
    changeIdTp({commit}, id){
      commit('setIdTp', id);
    },

    // reset idcu
    resetIdCu( {commit} ){
      commit('setIdCu', '');
    },

    // reset idcu
    resetIdTp( {commit} ){
      commit('setIdTp', '');
    },

    // create message
    createMessage( {commit}, [message, type]){
      commit('setMessage', message);
      commit('setMessageType', type);
    },

    // reset message
    resetMessage({commit}){
      commit('setMessage','');
      commit('setMessageType','');
    }
  },

  // mutations
  mutations: {
    setData ( state, data ){
      state.data = data;
    },
    setIdCu ( state, id ){
      state.idCu = id;
    },
    setIdTp ( state, id ){
      state.idTp = id;
    },
    setMessage ( state, message ){
      state.message = message;
    },
    setMessageType ( state, type ){
      state.messageType = type;
    },
  }
}