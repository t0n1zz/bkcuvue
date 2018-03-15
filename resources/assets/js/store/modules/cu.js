import CUAPI from '../../api/cu.js';

export const CU = {
  namespaced: true,

  state: {
    data: {}, //single data
    dataS: [], //collection
    dataStat: '',
    dataStatS: '',
    update: [], //update data
    updateStat: '',
    rules: [], //laravel rules
    options: [], //laravel options
  },

  // getters
  getters: {
    data: state => state.data,
    dataS: state => state.dataS,
    dataStat: state => state.dataStat,
    dataStatS: state => state.dataStatS,
    updateStat: state => state.updateStat,
    rules: state => state.rules,
    options: state => state.options,
  },

  actions: {
    //load collection with params
    index( { commit }, p ){
      commit('setDataStatS', 'loading');
      
      CUAPI.index( p )
        .then( function( response ){
          commit('setDataS', response.data.model );
          commit('setDataStatS', 'success');
        })
        .catch( error => {
          commit('setDataS', error.response.data.message);
          commit('setDataStatS', 'fail');
        });
    },

    //load collection without params
    indexAll( { commit } ){
      commit('setDataStatS', 'loading');
      
      CUAPI.indexAll()
        .then( function( response ){
          commit('setDataS', response.data.model );
          commit('setDataStatS', 'success');
        })
        .catch( error => {
          commit('setDataS', error.response.data.message);
          commit('setDataStatS', 'fail');
        });
    },

    //load cu pus
    indexPus( {commit}, id ){
      commit('setDataStatS', 'loading');
      
      CUAPI.indexPus( id )
        .then( function( response ){
          commit('setDataS', response.data.model);
          commit('setDataStatS', 'success');
        })
        .catch( error => {
          commit('setDataS', error.response);
          commit('setDataStatS', 'fail');
        });
    },

    // create page
    create( {commit} ){
      commit('setDataStat', 'loading');
      
      CUAPI.create()
        .then( function( response ){
          commit('setData', response.data.form);
          commit('setRules', response.data.rules);
          commit('setOptions', response.data.options)
          commit('setDataStat', 'success');
        })
        .catch( function(){
          commit('setData', []);
          commit('setRules', []);
          commit('setOptions', [])
          commit('setDataStat', 'fail');
        });
    },

    //store data
    store( {commit, state, dispatch}, form ){
      commit('setDataUpdateStat', 'loading');

      CUAPI.store( form )
        .then( function( response ){
          if(response.data.saved){
            commit('setDataUpdate', response.data);
            commit('setDataUpdateStat', 'success');
          }else{
            commit('setDataUpdateStat', 'fail');
          }
        })
        .catch(error => {
          if (error.response.status) {
            this.errors = error.response.data;
            commit('setDataUpdate', this.errors);         
          }else{
            commit('setDataUpdate', 'Oops terjadi kesalahan :(');
          }
          commit('setDataUpdateStat', 'fail');
        });
    },


    // edit page
    edit( {commit}, id ){
      commit('setDataStat', 'loading');
      
      CUAPI.edit( id )
        .then( function( response ){
          commit('setData', response.data.form);
          commit('setRules', response.data.rules);
          commit('setOptions', response.data.options)
          commit('setDataStat', 'success');
        })
        .catch( function(){
          commit('setData', []);
          commit('setRules', []);
          commit('setOptions', [])
          commit('setDataStat', 'fail');
        });
    },

    // update data
    update( {commit, state, dispatch}, [id, form] ){
      commit('setDataUpdateStat', 'loading');

      CUAPI.update( id, form )
        .then( function( response ){
          if(response.data.saved){
            commit('setDataUpdate', response.data);
            commit('setDataUpdateStat', 'success');
          }else{
            commit('setDataUpdateStat', 'fail');
          }
        })
        .catch(error => {
          if (error.response.status) {
            this.errors = error.response.data;
            commit('setDataUpdate', this.errors);         
          }else{
            commit('setDataUpdate', 'Oops terjadi kesalahan :(');
          }
          commit('setDataUpdateStat', 'fail');
        });
    },

    // delete data
    delete( {commit, state, dispatch}, id ){
      commit('setDataUpdateStat', 'loading');

      CUAPI.delete( id )
        .then( function( response ){
          if(response.data.saved){
            commit('setDataUpdate', response.data);
            commit('setDataUpdateStat', 'success');
          }else{
            commit('setDataUpdateStat', 'fail');
          }
        })
        .catch(error => {
          if (error.response.status) {
            this.errors = error.response.data;
            commit('setDataUpdate', this.errors);         
          }else{
            commit('setDataUpdate', 'Oops terjadi kesalahan :(');
          }
          commit('setDataUpdateStat', 'fail');
        });
    },

    // reset
    resetUpdateStat( {commit} ){
      commit('setDataUpdateStat', '');
    }
  },

  // mutations
  mutations: {
    setData ( state, data ){
      state.data = data;
    },
    setDataS ( state, data ){
      state.dataS = data;
    },
    setDataStat( state, status ){
      state.dataStat = status;
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
    setRules( state, rules ){
      state.rules = rules;
    },
    setOptions( state, options ){
      state.options = options;
    }
  }
}