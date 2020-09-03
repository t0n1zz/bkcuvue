import NotificationAPI from '../../api/notification.js';

export const notification = {
  namespaced: true,

  // state
  state: {
    notification: {},
    unreadNotification:'',
    notifStat: '',
    markNotifStat:'',
    dataS: [], //collection
    count: {},
    dataStatS: '',
    countStat: '',
  },

  // getters
  getters: {
    notification: state => state.notification,
    unreadNotification: state => state.unreadNotification,
    notifStat: state => state.notifStat,
    markNotifStat: state => state.markNotifStat,
    dataS: state => state.dataS,
    count: state => state.count,
    dataStatS: state => state.dataStatS,
    countStat: state => state.countStat,
  },

  actions: {

    get( { commit }){
      commit('setNotifStat', 'loading');
      
      NotificationAPI.get()
        .then( function( response ){
          commit('setNotification', response.data.notification );
          commit('setUnreadNotification', response.data.unreadNotification );
          commit('setNotifStat', 'success');
        })
        .catch( error => {
          commit('setNotification', error.response);
          commit('setNotifStat', 'fail');
        });
    },

    getAll( { commit } ){
      commit('setDataStatS', 'loading');
      
      NotificationAPI.getAll()
        .then( function( response ){
          commit('setDataS', response.data.notification );
          commit('setUnreadNotification', response.data.unreadNotification );
          commit('setDataStatS', 'success');
        })
        .catch( error => {
          commit('setDataS', error.response);
          commit('setDataStatS', 'fail');
        });
    },

    markAllRead( { commit } ){
      commit('setMarkNotifStat', 'loading');
      
      NotificationAPI.markAllRead()
        .then( function( response ){
          commit('setMarkNotifStat', 'success');
        })
        .catch( error => {
          commit('setMarkNotifStat', 'fail');
        });
    },

    markRead( { commit }, id){
      commit('setMarkNotifStat', 'loading');
      
      NotificationAPI.markRead(id)
        .then( function( response ){
          commit('setMarkNotifStat', 'success');
        })
        .catch( error => {
          commit('setMarkNotifStat', 'fail');
        });
    },
  },

  // mutations
  mutations: {
    setNotification ( state, data ){
      state.notification = data;
    },
    setUnreadNotification ( state, data ){
      state.unreadNotification = data;
    },
    setNotifStat ( state, data ){
      state.notifStat = data;
    },
    setMarkNotifStat( state, status ){
      state.markNotifStat = status;
    },
    setDataS ( state, data ){
      state.dataS = data;
    },
    setCount ( state, data ){
      state.count = data;
    },
    setDataStatS( state, status ){
      state.dataStatS = status;
    },
    setCountStat( state, status ){
      state.countStat = status;
    },
    pushNotif(state, data){
      state.notification.unshift(data);
    }
  }

}