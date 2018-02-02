
export const global = {
  state: {
    globalMessage: '',
    globalMessageType: '',
    globalMessageClass: ''
  },

  actions: {
    createGlobalMessage( {commit, state, dispatch}, [message, type, classname]){
      commit('setGlobalMessage', message);
      commit('setGlobalMessageType', type);
      commit('setGlobalMessageClass', classname);
    },
    deleteGlobalMessage( {commit, state, dispatch}){
      commit('setGlobalMessage','');
      commit('setGlobalMessageType','');
      commit('setGlobalMessageClass','');
    }
  },

  mutations: {
    setGlobalMessage ( state, message ){
      state.globalMessage = message;
    },
    setGlobalMessageType ( state, type ){
      state.globalMessageType = type;
    },
    setGlobalMessageClass ( state, classname ){
      state.globalMessageClass = classname;
    }
  },

  getters: {
    getGlobalMessage ( state ){
      return state.globalMessage;
    },
    getGlobalMessageType ( state ){
      return state.globalMessageType;
    },
    getGlobalMessageClass ( state ){
      return state.globalMessageClass;
    },
  }
}