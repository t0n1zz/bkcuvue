
export const global = {
  namespaced: true,
  
  // state
  state: {
    data: '',
    idCu: '',
    idTpCu: '',
    message: '',
    messageType: '',
  },

  // getters
  getters: {
    data: state => state.data,
    idCu: state => state.idCu,
    idTpCu: state => state.idTpCu,
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
    changeIdTpCu({commit}, id){
      commit('setIdTpCu', id);
    },

    // reset idcu
    resetIdCu( {commit} ){
      commit('setIdCu', '');
    },

    // reset idcu
    resetIdTpCu( {commit} ){
      commit('setIdTpCu', '');
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
    setIdTpCu ( state, id ){
      state.idTpCu = id;
    },
    setMessage ( state, message ){
      state.message = message;
    },
    setMessageType ( state, type ){
      state.messageType = type;
    },
  }
}