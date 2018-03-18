
export const global = {
  namespaced: true,
  
  // state
  state: {
    idCU: '',
    idCUUpdate: '', // track which idCU use for update
    message: '',
    messageType: '',
  },

  // getters
  getters: {
    idCU: state => state.idCU,
    idCUUpdate: state => state.idCUUpdate,
    message: state => state.message,
    messageType: state => state.messageType,
  },

  // actions
  actions: {
    // change idcu
    changeIdCU({commit}, id){
      commit('setIdCU', id);
    },

    changeIdCUUpdate({commit}, id){
      commit('setIdCUUpdate', id);
    },

    // reset idcu
    resetIdCU( {commit} ){
      commit('setIdCU', '');
    },
    resetIdCUUpdate( {commit} ){
      commit('setIdCUUpdate', '');
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
    setIdCUUpdate ( state, id ){
      state.idCUUpdate = id;
    },
    setMessage ( state, message ){
      state.message = message;
    },
    setMessageType ( state, type ){
      state.messageType = type;
    },
  }
}