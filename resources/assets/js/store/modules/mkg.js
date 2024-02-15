import mkgAPI from '../../api/mkg.js';

export const mkg = {
  namespaced: true,

  // state
  state: {
    data: {}, //single data
    dataS: [], //collection
    count: {},
    dataStat: "",
    dataStatS: "",
    countStat: "",
    update: [], //update data
    updateStat: "",
    updateMessage: "",
    rules: [], //laravel rules
    options: [], //laravel options
    aktivisS: [],
  },

  // getters
  getters: {
    data: (state) => state.data,
    dataS: (state) => state.dataS,
    aktivisS: (state) => state.aktivisS,
    count: (state) => state.count,
    dataStat: (state) => state.dataStat,
    dataStatS: (state) => state.dataStatS,
    countStat: (state) => state.countStat,
    update: (state) => state.update,
    updateStat: (state) => state.updateStat,
    updateMessage: (state) => state.updateMessage,
    rules: (state) => state.rules,
    options: (state) => state.options,
  },

  actions: {
    //load collection with params
    index({ commit }, [p, id_cu,tipe]) {
      {
        commit("setDataStatS", "loading");
        mkgAPI
          .index(p, id_cu,tipe)
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

    getAktivis({ commit }, id_cu) {
      commit("setDataStatS", "loading");
      mkgAPI
        .getAktivis(id_cu)
        .then(function (response) {
          commit("setAktivisS", response.data.model);
          commit("setDataStatS", "success");
        })
        .catch((error) => {
          commit("setAktivisS", error.response);
          commit("setDAtaStatS", "fail");
        });
    },

    get({ commit }, id) {
      commit("setDataStatS", "loading");

      mkgAPI
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

      mkgAPI
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
    store({ commit, state, dispatch }, [id_aktivis, form]) {
      commit("setUpdateStat", "loading");
      console.log(form)
      mkgAPI
        .store(id_aktivis,form)
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

      mkgAPI
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
    update({ commit, state, dispatch }, [id, form]) {
      commit("setUpdateStat", "loading");

      mkgAPI
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

    // destroy data
    destroy({ commit, state, dispatch }, id) {
      commit("setUpdateStat", "loading");

      mkgAPI
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
    // detail page
    detail({ commit }, id) {
      commit("setDataStat", "loading");

      mkgAPI
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

    verifikasiMkg({ commit }, [id_user, id]) {
      commit("setUpdateStat", "loading");
      mkgAPI
        .verifikasi(id_user, id)
        .then(function (response) {
          commit("setUpdateMessage", response.data.message);
          commit("setUpdateStat", "success");
        })
        .catch((error) => {
          commit("setUpdateStat", error.response);
          commit("setUpdateStat", "fail");
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

    setAktivisS(state, data) {
      state.aktivisS = data;
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