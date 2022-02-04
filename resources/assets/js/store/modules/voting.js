import VotingAPI from '../../api/voting.js';

export const voting = {
  namespaced: true,

  // state
  state: {
    data: {}, //single data
    dataS: [], //collection
    dataS2: [], //collection
    dataS3: [], //collection
    dataS4: [], //collection
    count: {},
    dataStat: '',
    dataStatS: '',
    dataStatS2: '',
    dataStatS3: '',
    dataStatS4: '',
    countStat: '',
    update: [], //update data
    updateStat: '',
    rules: [], //laravel rules
    options: [], //laravel options
  },

  // getters
  getters: {
    data: state => state.data,
    dataS: state => state.dataS,
    dataS2: state => state.dataS2,
    dataS3: state => state.dataS3,
    dataS4: state => state.dataS4,
    count: state => state.count,
    dataStat: state => state.dataStat,
    dataStatS: state => state.dataStatS,
    dataStatS2: state => state.dataStatS2,
    dataStatS3: state => state.dataStatS3,
    dataStatS4: state => state.dataStatS4,
    countStat: state => state.countStat,
    update: state => state.update,
    updateStat: state => state.updateStat,
    rules: state => state.rules,
    options: state => state.options,
  },

  actions: {
    //load collection with params
    index( { commit }, p ){
      commit('setDataStatS', 'loading');
      
      
      VotingAPI.index( p )
        .then( function( response ){
          commit('setDataS', response.data.model );
          commit('setDataStatS', 'success');
        })
        .catch( error => {
          commit('setDataS', error.response);
          commit('setDataStatS', 'fail');
        });
    },

    indexCu( { commit }, [p, id] ){
      commit('setDataStatS', 'loading');
      
      
      VotingAPI.indexCu( p , id )
        .then( function( response ){
          commit('setDataS', response.data.model );
          commit('setDataStatS', 'success');
        })
        .catch( error => {
          commit('setDataS', error.response);
          commit('setDataStatS', 'fail');
        });
    },

    indexVoting( { commit } ){
      commit('setDataStatS2', 'loading');
      
      VotingAPI.indexVoting()
        .then( function( response ){
          commit('setDataS2', response.data.model );
          commit('setDataStatS2', 'success');
        })
        .catch( error => {
          commit('setDataS2', error.response);
          commit('setDataStatS2', 'fail');
        });
    },

    indexVotingCu( { commit } , id ){
      commit('setDataStatS2', 'loading');
      
      VotingAPI.indexVotingCu( id )
        .then( function( response ){
          commit('setDataS2', response.data.model );
          commit('setDataStatS2', 'success');
        })
        .catch( error => {
          commit('setDataS2', error.response);
          commit('setDataStatS2', 'fail');
        });
    },

    indexPilihan( { commit }, name ){
      commit('setDataStatS', 'loading');
      commit('setDataStat', 'loading');
      
      VotingAPI.indexPilihan( name )
        .then( function( response ){
          commit('setDataS', response.data.model);
          commit('setData', response.data.form);
          commit('setDataStatS', 'success');
          commit('setDataStat', 'success');
        })
        .catch( error => {
          commit('setDataS', error.response);
          commit('setData', error.response);
          commit('setDataStatS', 'fail');
          commit('setDataStat', 'fail');
        });
    },

    indexSuara( { commit }, id ){
      commit('setDataStatS2', 'loading');
      
      VotingAPI.indexSuara( id )
        .then( function( response ){
          commit('setDataS2', response.data.model );
          commit('setDataStatS2', 'success');
        })
        .catch( error => {
          commit('setDataS2', error.response);
          commit('setDataStatS2', 'fail');
        });
    },

    indexDataSuara( { commit }, [ p, id ] ){
      commit('setDataStatS3', 'loading');
      
      VotingAPI.indexDataSuara( p, id )
        .then( function( response ){
          commit('setDataS3', response.data.model );
          commit('setDataStatS3', 'success');
        })
        .catch( error => {
          commit('setDataS3', error.response);
          commit('setDataStatS3', 'fail');
        });
    },

    indexDataTanggapan( { commit }, [ p, id ] ){
      commit('setDataStatS4', 'loading');
      
      VotingAPI.indexDataTanggapan( p, id )
        .then( function( response ){
          commit('setDataS4', response.data.model );
          commit('setDataStatS4', 'success');
        })
        .catch( error => {
          commit('setDataS4', error.response);
          commit('setDataStatS4', 'fail');
        });
    },

    create( {commit} ){
      commit('setDataStat', 'loading');
      
      VotingAPI.create()
        .then( function( response ){
          commit('setData', response.data.form);
          commit('setRules', response.data.rules);
          commit('setOptions', response.data.options)
          commit('setDataStat', 'success');
        })
        .catch(error => {
          commit('setData', error.response);
          commit('setRules', []);
          commit('setOptions', [])
          commit('setDataStat', 'fail');
        });
    },

    //store data
    store( {commit, state, dispatch}, form ){
      commit('setUpdateStat', 'loading');

      VotingAPI.store( form )
        .then( function( response ){
          if(response.data.saved){
            commit('setUpdate', response.data);
            commit('setUpdateStat', 'success');
          }else{
            commit('setUpdate', response.data);
            commit('setUpdateStat', 'fail');
          }
        })
        .catch(error => {
          commit('setUpdate', error.response);   
          commit('setUpdateStat', 'fail');
        });
    },

    storeSuara( {commit, state, dispatch}, form ){
      commit('setUpdateStat', 'loading');

      VotingAPI.storeSuara( form )
        .then( function( response ){
          if(response.data.saved){
            commit('setUpdate', response.data);
            commit('setUpdateStat', 'success');
          }else{
            commit('setUpdate', response.data);
            commit('setUpdateStat', 'fail');
          }
        })
        .catch(error => {
          commit('setUpdate', error.response);   
          commit('setUpdateStat', 'fail');
        });
    },

    storePilihan( {commit, state, dispatch}, form ){
      commit('setUpdateStat', 'loading');

      VotingAPI.storePilihan( form )
        .then( function( response ){
          if(response.data.saved){
            commit('setUpdate', response.data);
            commit('setUpdateStat', 'success');
          }else{
            commit('setUpdate', response.data);
            commit('setUpdateStat', 'fail');
          }
        })
        .catch(error => {
          commit('setUpdate', error.response);   
          commit('setUpdateStat', 'fail');
        });
    },

    checkUser( { commit }, id ){
      commit('setDataStat2', 'loading');
      
      KEGIATANBKCUAPI.checkUser(id)
        .then( function( response ){
          commit('setData2', response.data.model );
          commit('setDataStat2', 'success');
        })
        .catch( error => {
          commit('setData2', error.response);
          commit('setDataStat2', 'fail');
        });
    },

    // edit page
    edit( {commit}, id ){
      commit('setDataStat', 'loading');
      
      VotingAPI.edit( id )
        .then( function( response ){
          commit('setData', response.data.form);
          commit('setRules', response.data.rules);
          commit('setOptions', response.data.options)
          commit('setDataStat', 'success');
        })
        .catch(error => {
          commit('setData', error.response);
          commit('setRules', []);
          commit('setOptions', [])
          commit('setDataStat', 'fail');
        });
    },

    // update data
    updateStatus( {commit, state, dispatch}, [id, cu] ){
      commit('setUpdateStat', 'loading');

      VotingAPI.updateStatus( id, cu )
        .then( function( response ){
          if(response.data.saved){
            commit('setUpdate', response.data);
            commit('setUpdateStat', 'success');
          }else{
            commit('setUpdate', response.data);
            commit('setUpdateStat', 'fail');
          }
        })
        .catch(error => {
          commit('setUpdate', error.response);   
          commit('setUpdateStat', 'fail');
        });
    },

    updateSuara( {commit, state, dispatch}, [ id, form ] ){
      commit('setUpdateStat', 'loading');

      VotingAPI.updateSuara( id, form )
        .then( function( response ){
          if(response.data.saved){
            commit('setUpdate', response.data);
            commit('setUpdateStat', 'success');
          }else{
            commit('setUpdate', response.data);
            commit('setUpdateStat', 'fail');
          }
        })
        .catch(error => {
          commit('setUpdate', error.response);   
          commit('setUpdateStat', 'fail');
        });
    },

    updateSuaraCu( {commit, state, dispatch}, form ){
      commit('setUpdateStat', 'loading');

      VotingAPI.updateSuaraCu( form )
        .then( function( response ){
          if(response.data.saved){
            commit('setUpdate', response.data);
            commit('setUpdateStat', 'success');
          }else{
            commit('setUpdate', response.data);
            commit('setUpdateStat', 'fail');
          }
        })
        .catch(error => {
          commit('setUpdate', error.response);   
          commit('setUpdateStat', 'fail');
        });
    },

    // destroy data
    destroy( {commit, state, dispatch}, id ){
      commit('setUpdateStat', 'loading');

      VotingAPI.destroy( id )
        .then( function( response ){
          if(response.data.deleted){
            commit('setUpdate', response.data);
            commit('setUpdateStat', 'success');
          }else{
            commit('setUpdate', response.data);
            commit('setUpdateStat', 'fail');
          }
        })
        .catch(error => {
          commit('setUpdate', error.response);         
          commit('setUpdateStat', 'fail');
        });
    },

    destroySuara( {commit, state, dispatch}, id ){
      commit('setUpdateStat', 'loading');

      VotingAPI.destroySuara( id )
        .then( function( response ){
          if(response.data.deleted){
            commit('setUpdate', response.data);
            commit('setUpdateStat', 'success');
          }else{
            commit('setUpdate', response.data);
            commit('setUpdateStat', 'fail');
          }
        })
        .catch(error => {
          commit('setUpdate', error.response);         
          commit('setUpdateStat', 'fail');
        });
    },

    countCalon( { commit }, id ){
      commit('setCountStat', 'loading');
      
      VotingAPI.countCalon( id )
        .then( function( response ){
          commit('setCount', response.data.model);
          commit('setCountStat', 'success');
        })
        .catch( error => {
          commit('setCount', error.response);
          commit('setCountStat', 'fail');
        });
    },

    countSuara( { commit }, id ){
      commit('setCountStat', 'loading');
      
      VotingAPI.countSuara( id )
        .then( function( response ){
          commit('setCount', response.data.model);
          commit('setCountStat', 'success');
        })
        .catch( error => {
          commit('setCount', error.response);
          commit('setCountStat', 'fail');
        });
    },

    // reset
    resetUpdateStat( {commit} ){
      commit('setUpdateStat', '');
    },
    resetData( {commit} ){
      commit('setData', '');
      commit('setDataStat', '');
    },
    resetDataS( {commit} ){
      commit('setDataS', '');
      commit('setDataStatS', '');
    },
    
  },

  // mutations
  mutations: {
    setData ( state, data ){
      state.data = data;
    },
    setDataS ( state, data ){
      state.dataS = data;
    },
    setDataS2 ( state, data ){
      state.dataS2 = data;
    },
    setDataS3 ( state, data ){
      state.dataS3 = data;
    },
    setDataS4 ( state, data ){
      state.dataS4 = data;
    },
    setCount ( state, data ){
      state.count = data;
    },
    setDataStat( state, status ){
      state.dataStat = status;
    },
    setDataStatS( state, status ){
      state.dataStatS = status;
    },
    setDataStatS2( state, status ){
      state.dataStatS2 = status;
    },
    setDataStatS3( state, status ){
      state.dataStatS3 = status;
    },
    setDataStatS4( state, status ){
      state.dataStatS4 = status;
    },
    setCountStat( state, status ){
      state.countStat = status;
    },
    setUpdate ( state, data ){
      state.update = data;
    },
    setUpdateStat( state,status ){
      state.updateStat = status;
    },
    setRules( state, rules ){
      state.rules = rules;
    },
    setOptions( state, options ){
      state.options = options;
    }
  }
}