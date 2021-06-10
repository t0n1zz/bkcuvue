import FILEUPLOADUAPI from '../../api/fileUpload.js';

export const fileUpload={
    namespaced: true,

     // state
  state: {
    dataS:[],
    dataStatS: '',
    update: [], //update data
    updateStat: '',
  },

   // getters
   getters: {
    dataS: state=>state.dataS,
    dataStatS: state => state.dataStatS,
    update: state => state.update,
    updateStat: state => state.updateStat,
  },

  actions: {
      index({commit,state,dispatch}, [id_cu,id_user]){
        commit('setDataStatS', 'loading');
        FILEUPLOADUAPI.index(id_cu,id_user)
        .then( function( response ){
          commit('setDataS', response.data.model);
          commit('setDataStatS', 'success');
        })
        .catch(error => {
          commit('setDataS', error.response);
          commit('setDataStatS', 'fail');
        });
      },

      destroy( {commit, state, dispatch}, id ){
        commit('setUpdateStat', 'loading');
        FILEUPLOADUAPI.destroy( id )
          .then( function( response ){
            if(response.data.deleted){
              commit('setUpdate', response.data);
              commit('setUpdateStat', 'success');
            }else{
              commit('setUpdateStat', 'fail');
            }
          })
          .catch(error => {
            commit('setUpdate', error.response);         
            commit('setUpdateStat', 'fail');
          });
      },

      draft( {commit}, [id_cu, id_user, tipe] ){
        commit('setUpdateStat', 'loading');
        FILEUPLOADUAPI.draft( id_cu, id_user, tipe)
          .then( function( response ){
            if(response.data.processed){
              commit('setUpdateStat', 'loading');
            }else{
              commit('setUpdateStat', 'fail');
            }
          })
          .catch(error => {
            commit('setUpdate', error.response);
            commit('setUpdateStat', 'fail');
          });
      },
  },


    // mutations
    mutations: {

        setDataS ( state, data ){
          state.dataS = data;
        },
        setDataStatS( state, status ){
          state.dataStatS = status;
        },
        setUpdate ( state, data ){
            state.update = data;
        },
        setUpdateStat( state,status ){
            state.updateStat = status;
        },
      }

}