import ANGGOTAIMPORTESCETEAPI from '../../api/anggotaCuImportEscete.js';

export const anggotaCuImportEscete={
    namespaced: true,

     // state
  state: {
    dataS:[],
    dataStatS: '',
    update: [], //update data
    updateStat: '',
    isDraft:''
  },

   // getters
   getters: {
    dataS: state=>state.dataS,
    dataStatS: state => state.dataStatS,
    update: state => state.update,
    updateStat: state => state.updateStat,
    isDraft: state=>state.isDraft
  },

  actions: {
      index({commit}, [id_cu]){
        commit('setDataStatS', 'loading');
        ANGGOTAIMPORTESCETEAPI.index(id_cu)
        .then( function( response ){
          commit('setDataStatS', 'success');
          commit('setIsDraft', response.data.isDraft);
        })
        .catch(error => {
          commit('setDataS', error.response);
          commit('setDataStatS', 'fail');
        });
      },

      draft( {commit}, [id_cu, id_user] ){
        commit('setUpdateStat', 'loading');
        ANGGOTAIMPORTESCETEAPI.draft( id_cu, id_user)
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

       //store data
    simpanDraft( {commit, state, dispatch}, id_cu ){
      commit('setUpdateStat', 'loading');
      ANGGOTAIMPORTESCETEAPI.simpanDraft(id_cu)
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

        setIsDraft(state , isDraft){
          state.isDraft = isDraft
        }
        
      }

}