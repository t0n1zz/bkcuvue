import sertifikatKegiatanAPI from "../../api/sertifikatKegiatan.js";

export const sertifikatKegiatan = {
  namespaced: true,

  // state
  state: {
    data: {},
    dataS: [], //collection
    dataSS: [],
    dataNomor: [], //collection
    count: {},
    dataNomorStat: "",
    dataStatSS: "",
    dataStatS: "",
    dataStat: "",
    countStat: "",
    update: [], //update data
    updateStat: "",
    rules: [], //laravel rules
    options: [], //laravel options
  },

  // getters
  getters: {
    data: (state) => state.data,
    dataSS: (state) => state.dataSS,
    dataNomor: (state) => state.dataNomor,
    dataS: (state) => state.dataS,
    periode: (state) => state.periode,
    count: (state) => state.count,
    dataNomorStat: (state) => state.dataNomorStat,
    dataStatSS: (state) => state.dataStatSS,
    dataStat: (state) => state.dataStat,
    dataStatS: (state) => state.dataStatS,
    countStat: (state) => state.countStat,
    update: (state) => state.update,
    updateStat: (state) => state.updateStat,
    rules: (state) => state.rules,
    options: (state) => state.options,
  },

  actions: {
    //load collection with params
    index({ commit }, p) {
      commit("setDataStatS", "loading");
      sertifikatKegiatanAPI
        .index(p)
        .then(function (response) {
          commit("setDataS", response.data.model);
          commit("setDataStatS", "success");
        })
        .catch((error) => {
          commit("setDataS", error.response);
          commit("setDataStatS", "fail");
        });
    },

    indexNomorSertifikat({ commit }, p) {
      commit("setDataNomorStat", "loading");
      sertifikatKegiatanAPI
        .indexNomorSertifikat(p)
        .then(function (response) {
          commit("setDataNomor", response.data.model);
          commit("setDataNomorStat", "success");
        })
        .catch((error) => {
          commit("setDataNomor", error.response);
          commit("setDataNomorStat", "fail");
        });
    },

    // create page
    create({ commit }) {
      commit("setDataStat", "loading");

      sertifikatKegiatanAPI
        .create()
        .then(function (response) {
          commit("setData", response.data.form);
          commit("setRules", response.data.rules);
          commit("setOptions", response.data.options);
          commit("setDataStat", "success");
        })
        .catch((error) => {
          commit("setData", error.response);
          commit("setRules", []);
          commit("setOptions", []);
          commit("setDataStat", "fail");
        });
    },

    //store data
    store({ commit, state, dispatch }, form) {
      commit("setUpdateStat", "loading");
      sertifikatKegiatanAPI
        .store(form)
        .then(function (response) {
          if (response.data.saved) {
            commit("setUpdate", response.data);
            commit("setUpdateStat", "success");
          } else {
            commit("setUpdateStat", "fail");
          }
        })
        .catch((error) => {
          commit("setUpdate", error.response);
          commit("setUpdateStat", "fail");
        });
    },

    storeNomorSertifikatKegiatan({ commit }, [id, form]) {
      commit('setUpdateStat', 'loading');
      sertifikatKegiatanAPI.storeNomorSertifikatKegiatan(id, form)
            .then(function (response) {
              if (response.data.saved) {
                commit('setUpdate', response.data);
                commit('setUpdateStat', 'success');
              } else {
                commit('setUpdateStat', 'fail');
              }
            })
            .catch(error => {
              commit('setUpdate', error.response);
              commit('setUpdateStat', 'fail');
            });
        },

    // edit page
    edit({ commit }, id) {
      commit("setDataStat", "loading");
      sertifikatKegiatanAPI
        .edit(id)
        .then(function (response) {
          commit("setData", response.data.form);
          commit("setRules", response.data.rules);
          commit("setOptions", response.data.options);
          commit("setDataStat", "success");
        })
        .catch((error) => {
          commit("setData", error.response);
          commit("setRules", []);
          commit("setOptions", []);
          commit("setDataStat", "fail");
        });
    },

    // edit page
    editFormNomor({ commit }, id) {
      commit("setDataStatSS", "loading");
      sertifikatKegiatanAPI
        .editFormNomor(id)
        .then(function (response) {
          commit("setDataSS", response.data.form);
          commit("setRules", response.data.rules);
          commit("setOptions", response.data.options);
          commit("setDataStatSS", "success");
        })
        .catch((error) => {
          commit("setData", error.response);
          commit("setRules", []);
          commit("setOptions", []);
          commit("setDataStat", "fail");
        });
    },

    // update data
    update({ commit, state, dispatch }, [id, form]) {
      commit("setUpdateStat", "loading");
      sertifikatKegiatanAPI
        .update(id, form)
        .then(function (response) {
          if (response.data.saved) {
            commit("setUpdate", response.data);
            commit("setUpdateStat", "success");
          } else {
            commit("setUpdateStat", "fail");
          }
        })
        .catch((error) => {
          commit("setUpdate", error.response);
          commit("setUpdateStat", "fail");
        });
    },

    uploadExcelPeserta( {commit, state, dispatch}, form ){
          commit('setUpdateStat', 'loading');
    
          sertifikatKegiatanAPI.uploadExcelPeserta( form )
            .then( function( response ){
              if(response.data.saved){
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
    
    updateNomorSertifikatKegiatan({ commit }, [id, form]) {
      commit("setUpdateStat", "loading");
      sertifikatKegiatanAPI
        .updateNomorSertifikatKegiatan(id, form)
        .then(function (response) {
          if (response.data.saved) {
            commit("setUpdate", response.data);
            commit("setUpdateStat", "success");
          } else {
            commit("setUpdateStat", "fail");
          }
        })
        .catch((error) => {
          commit("setUpdate", error.response);
          commit("setUpdateStat", "fail");
        });
    },

    // destroy data
    destroy({ commit, state, dispatch }, id) {
      commit("setUpdateStat", "loading");

      sertifikatKegiatanAPI
        .destroy(id)
        .then(function (response) {
          if (response.data.deleted) {
            commit("setUpdate", response.data);
            commit("setUpdateStat", "success");
          } else {
            commit("setUpdateStat", "fail");
          }
        })
        .catch((error) => {
          commit("setUpdate", error.response);
          commit("setUpdateStat", "fail");
        });
    },
    destroyNomorSertifikatKegiatan({ commit }, id) {
      commit("setUpdateStat", "loading");

      sertifikatKegiatanAPI
        .destroyNomorSertifikatKegiatan(id)
        .then(function (response) {
          if (response.data.deleted) {
            commit("setUpdate", response.data);
            commit("setUpdateStat", "success");
          } else {
            commit("setUpdateStat", "fail");
          }
        })
        .catch((error) => {
          commit("setUpdate", error.response);
          commit("setUpdateStat", "fail");
        });
    },

    // reset
    resetDataS({ commit }) {
      commit("setDataS", []);
      commit("setDataStatS", "success");
    },
    resetUpdateStat({ commit }) {
      commit("setUpdateStat", "");
    },
  },

  // mutations
  mutations: {
    setData(state, data) {
      state.data = data;
    },
    setDataS(state, data) {
      state.dataS = data;
    },
    setDataSS(state, data) {
      state.dataSS = data;
    },
    setDataNomor(state, data) {
      state.dataNomor = data;
    },
    setCount(state, data) {
      state.count = data;
    },
    setDataStat(state, status) {
      state.dataStat = status;
    },
    setDataNomorStat(state, status) {
      state.dataNomorStat = status;
    },
    setDataStatSS(state, status) {
      state.dataStatSS = status;
    },
    setDataStatS(state, status) {
      state.dataStatS = status;
    },
    setCountStat(state, status) {
      state.countStat = status;
    },
    setUpdate(state, data) {
      state.update = data;
    },
    setUpdateStat(state, status) {
      state.updateStat = status;
    },
    setRules(state, rules) {
      state.rules = rules;
    },
    setOptions(state, options) {
      state.options = options;
    },
  },
};
