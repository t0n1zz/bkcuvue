import { getLocalUser } from "../../helpers/auth";
import Axios from "axios";

const user = getLocalUser();

export const auth = {
  namespaced: true,

  state: {
    currentUser: user,
    isLoggedIn: !!user,
    isLoading: false,
    authError: null,
    notification: {},
    unreadNotification:'',
    markNotifStat:'',
    tokenExp: null,
  },

  getters: {
    isLoading: state => state.isLoading,
    isLoggedIn: state => state.isLoggedIn,
    currentUser: state => state.currentUser,
    authError: state => state.authError,
    notification: state => state.notification,
    unreadNotification: state => state.unreadNotification,
    markNotifStat: state => state.markNotifStat,
    tokenExp: state => state.tokenExp,
  },

  actions: {
    login({commit}){
      commit('setIsLoading', true);
      commit('setAuthError', null);
    },
    loginSuccess({ commit, state }, payload){
      commit('setAuthError', null);
      commit('setIsLoggedIn', true);
      commit('setIsLoading', false);
      commit('setCurrentUser', Object.assign({}, payload.user, {token: payload.access_token}));
      
      localStorage.setItem("user", JSON.stringify(state.currentUser));

    },
    loginFailed({ commit, state }, payload){
      commit('setIsLoading', false);
      commit('setAuthError', payload.error);
    },
    logout({ commit, state }){
      localStorage.removeItem("user");
      commit('setIsLoggedIn', false);
      commit('setCurrentUser', null);
    },
  },

  mutations: {
    setIsLoading ( state, data ){
      state.isLoading = data;
    },
    setAuthError ( state, data ){
      state.authError = data;
    },
    setIsLoggedIn ( state, data ){
      state.isLoggedIn = data;
    },
    setCurrentUser ( state, data ){
      state.currentUser = data;
    },
    setNotification ( state, data ){
      state.notification = data;
    },
    setUnreadNotification ( state, data ){
      state.unreadNotification = data;
    },
    setMarkNotifStat( state, status ){
      state.markNotifStat = status;
    },
    setTokenExp( state, data ){
      state.tokenExp = data;
    },
  } 
}