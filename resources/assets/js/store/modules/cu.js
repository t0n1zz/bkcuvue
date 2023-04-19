import CUAPI from "../../api/cu.js";

export const cu = {
  namespaced: true,

  // state
  state: {
    data: {}, //single data
    dataS: [], //collection
    dataDeletedS: [], //collection
    count: {},
    headerDataS: [],
    dataStat: "",
    dataStatS: "",
    dataDeletedStatS: "",
    countStat: "",
    headerDataStatS: "",
    update: [], //update data
    updateStat: "",
    rules: [], //laravel rules
    options: [], //laravel options
  },

  // getters
  getters: {
    data: (state) => state.data,
    dataS: (state) => state.dataS,
    dataDeletedS: (state) => state.dataDeletedS,
    count: (state) => state.count,
    headerDataS: (state) => state.headerDataS,
    dataStat: (state) => state.dataStat,
    dataStatS: (state) => state.dataStatS,
    dataDeletedStatS: (state) => state.dataDeletedStatS,
    countStat: (state) => state.countStat,
    headerDataStatS: (state) => state.headerDataStatS,
    update: (state) => state.update,
    updateStat: (state) => state.updateStat,
    rules: (state) => state.rules,
    options: (state) => state.options,
  },

  actions: {
    //load collection with params
    index({ commit }, p) {
      commit("setDataStatS", "loading");
      // console.log(p);
      CUAPI.index(p)
        .then(function (response) {
          // console.log(response);
          commit("setDataS", response.data.model);
          commit("setDataStatS", "success");
        })
        .catch((error) => {
          commit("setDataS", error.response);
          commit("setDataStatS", "fail");
        });
    },

    indexDeleted({ commit }, p) {
      commit("setDataDeletedStatS", "loading");

      CUAPI.indexDeleted(p)
        .then(function (response) {
          commit("setDataDeletedS", response.data.model);
          commit("setDataDeletedStatS", "success");
        })
        .catch((error) => {
          commit("setDataDeletedS", error.response);
          commit("setDataDeletedStatS", "fail");
        });
    },

    //load collection without params
    get({ commit }) {
      commit("setDataStatS", "loading");

      CUAPI.get()
        .then(function (response) {
          commit("setDataS", response.data.model);
          commit("setDataStatS", "success");
        })
        .catch((error) => {
          commit("setDataS", error.response);
          commit("setDataStatS", "fail");
        });
    },

    getHeader({ commit }) {
      commit("setHeaderDataStatS", "loading");

      CUAPI.getHeader()
        .then(function (response) {
          commit("setHeaderDataS", response.data.model);
          commit("setHeaderDataStatS", "success");
        })
        .catch((error) => {
          commit("setHeaderDataS", error.response);
          commit("setHeaderDataStatS", "fail");
        });
    },

    getPus({ commit }, id) {
      commit("setDataStatS", "loading");

      CUAPI.getPus(id)
        .then(function (response) {
          commit("setDataS", response.data.model);
          commit("setDataStatS", "success");
        })
        .catch((error) => {
          commit("setDataS", error.response);
          commit("setDataStatS", "fail");
        });
    },

    escete({ commit }, id) {
      commit("setDataStat", "loading");

      CUAPI.escete(id)
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

    // create page
    create({ commit }) {
      commit("setDataStat", "loading");

      CUAPI.create()
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

      CUAPI.store(form)
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

    // edit page
    edit({ commit }, id) {
      commit("setDataStat", "loading");

      CUAPI.edit(id)
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
    update({ commit, state, dispatch }, [id, form]) {
      commit("setUpdateStat", "loading");

      CUAPI.update(id, form)
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

    restore({ commit, state, dispatch }, id) {
      commit("setUpdateStat", "loading");

      CUAPI.restore(id)
        .then(function (response) {
          if (response.data.restored) {
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

      CUAPI.destroy(id)
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

    count({ commit }) {
      commit("setCountStat", "loading");

      CUAPI.count()
        .then(function (response) {
          commit("setCount", response.data.model);
          commit("setCountStat", "success");
        })
        .catch((error) => {
          commit("setCount", error.response);
          commit("setCountStat", "fail");
        });
    },

    // reset
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
    setDataDeletedS(state, data) {
      state.dataDeletedS = data;
    },
    setCount(state, data) {
      state.count = data;
    },
    setHeaderDataS(state, data) {
      state.headerDataS = data;
    },
    setDataStat(state, status) {
      state.dataStat = status;
    },
    setDataStatS(state, status) {
      state.dataStatS = status;
    },
    setDataDeletedStatS(state, status) {
      state.dataDeletedStatS = status;
    },
    setHeaderDataStatS(state, status) {
      state.headerDataStatS = status;
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
