
export const global = {
  namespaced: true,
  
  // state
  state: {
    data: '',
    idCU: '',
    message: '',
    messageType: '',
  },

  // getters
  getters: {
    data: state => state.data,
    idCU: state => state.idCU,
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
    setData ( state, data ){
      state.data = data;
    },
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