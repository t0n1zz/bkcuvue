
export const global = {
  namespaced: true,
  
  // state
  state: {
    idCU: '',
    message: '',
    messageType: '',
  },

  // getters
  getters: {
    idCU: state => state.idCU,
    message: state => state.message,
    messageType: state => state.messageType,
  },

  // actions
  actions: {
    // change idcu
    changeIdCU({commit}, id){
      commit('setIdCU', id);
    },

    // reset idcu
    resetIdCU( {commit} ){
      commit('setIdCU', '');
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
    setIdCU ( state, id ){
      state.idCU = id;
    },
    setMessage ( state, message ){
      state.message = message;
    },
    setMessageType ( state, type ){
      state.messageType = type;
    },
  }
}