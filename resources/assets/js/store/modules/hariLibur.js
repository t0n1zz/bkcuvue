import hariLiburAPI from '../../api/hariLibur.js';

export const hariLibur = {
  namespaced: true,

  // state
  state: {
    data: {}, //single data
    dataS: [], //collection
    dataS1: [], //collection
    dataS2: [], //collection
    dataS3: [], //collection
    dataS4: [], //collection
    dataS5: [], //collection
    count: {},
    dataStat: "",
    dataStatS: "",
    dataStatS1: "",
    dataStatS2: "",
    dataStatS3: "",
    dataStatS4: "",
    dataStatS5: "",
    countStat: "",
    update: [], //update data
    updateStat: "",
    updateMessage: "",
    rules: [], //laravel rules
    options: [], //laravel options
  },

  // getters
  getters: {
    data: (state) => state.data,
    dataS: (state) => state.dataS,
    dataS1: (state) => state.dataS1,
    dataS2: (state) => state.dataS2,
    dataS3: (state) => state.dataS3,
    dataS4: (state) => state.dataS4,
    dataS5: (state) => state.dataS5,
    count: (state) => state.count,
    dataStat: (state) => state.dataStat,
    dataStatS: (state) => state.dataStatS,
    dataStatS1: (state) => state.dataStatS1,
    dataStatS2: (state) => state.dataStatS2,
    dataStatS3: (state) => state.dataStatS3,
    dataStatS4: (state) => state.dataStatS4,
    dataStatS5: (state) => state.dataStatS5,
    countStat: (state) => state.countStat,
    update: (state) => state.update,
    updateStat: (state) => state.updateStat,
    updateMessage: (state) => state.updateMessage,
    rules: (state) => state.rules,
    options: (state) => state.options,
  },

  actions: {
    //load collection with params
    index({ commit }, p) {
      {
        commit("setDataStatS", "loading");
        hariLiburAPI
          .index(p)
          .then(function (response) {
            commit("setDataS", response.data.model);
            commit("setDataStatS", "success");
          })
          .catch((error) => {
            commit("setDataS", error.response);
            commit("setDataStatS", "fail");
          });
      }
    },

    get({ commit }, id) {
      commit("setDataStatS", "loading");

      hariLiburAPI
        .get(id)
        .then(function (response) {
          commit("setDataS", response.data.model);
          commit("setDataStatS", "success");
        })
        .catch((error) => {
          commit("setDataS", error.response);
          commit("setDataStatS", "fail");
        });
    },

    create({ commit }) {
      commit("setDataStat", "loading");

      hariLiburAPI
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
    store({ commit}, form) {
      commit("setUpdateStat", "loading");

      hariLiburAPI
        .store(form)
        .then(function (response) {
          if (response.data.saved) {
            commit("setUpdate", response.data.message);
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

    // edit page
    edit({ commit }, id) {
      commit("setDataStat", "loading");

      hariLiburAPI
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

    // update data
    update({ commit}, [id, form]) {
      commit("setUpdateStat", "loading");

      hariLiburAPI
        .update(id, form)
        .then(function (response) {
          if (response.data.saved) {
            commit("setUpdate", response.data.message);
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

      hariLiburAPI
        .destroy(id)
        .then(function (response) {
          if (response.data.deleted) {
            commit("setUpdate", response.data.message);
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
    // detail page
    detail({ commit }, id) {
      commit("setDataStat", "loading");

      hariLiburAPI
        .detail(id)
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
  },

  // mutations
  mutations: {
    setData(state, data) {
      state.data = data;
    },
    setDataS(state, data) {
      state.dataS = data;
    },
    setDataS1(state, data) {
      state.dataS1 = data;
    },
    setDataS2(state, data) {
      state.dataS2 = data;
    },
    setDataS3(state, data) {
      state.dataS3 = data;
    },
    setDataS4(state, data) {
      state.dataS4 = data;
    },
    setDataS5(state, data) {
      state.dataS5 = data;
    },
    setCount(state, data) {
      state.count = data;
    },
    setDataStat(state, status) {
      state.dataStat = status;
    },
    setDataStatS(state, status) {
      state.dataStatS = status;
    },
    setDataStatS1(state, status) {
      state.dataStatS1 = status;
    },
    setDataStatS2(state, status) {
      state.dataStatS2 = status;
    },
    setDataStatS3(state, status) {
      state.dataStatS3 = status;
    },
    setDataStatS4(state, status) {
      state.dataStatS4 = status;
    },
    setDataStatS5(state, status) {
      state.dataStatS5 = status;
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
    setUpdateMessage(state, updateMessage) {
      state.updateMessage = updateMessage;
    },
  },
};