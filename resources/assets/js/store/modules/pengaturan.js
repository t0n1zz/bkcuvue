import pengaturanAPI from '../../api/pengaturan.js';

export const pengaturan = {
  namespaced: true,

  // state
  state: {
    data: {
      cuti: '',
      mkg: '',
      tunjangan:''
    }, //single data
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
    kategoriS: [],
  },

  // getters
  getters: {
    data: (state) => state.data,
    dataS: (state) => state.dataS,
    kategoriS: (state) => state.kategoriS,
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
    index({ commit }, id_cu) {
      {
        commit("setDatatatS", "loading");
        pengaturanAPI
          .index(id_cu)
          .then(function (response) {
            commit("setData", response.data.model);
            commit("setDataStat", "success");
          })
          .catch((error) => {
            commit("setData", error.response);
            commit("setDataStat", "fail");
          });
      }
    },

    getKategori({ commit }, id_cu) {
      commit("setDataStatS", "loading");
      pengaturanAPI
        .getKategori(id_cu)
        .then(function (response) {
          commit("setKategoriS", response.data.model);
          commit("setDataStatS", "success");
        })
        .catch((error) => {
          commit("setKategoriS", error.response);
          commit("setDAtaStatS", "fail");
        });
    },


    //store data
    store({ commit, state, dispatch }, [id_aktivis, form]) {
      commit("setUpdateStat", "loading");
      pengaturanAPI
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


    // update data
    update({ commit, state, dispatch }, [id, form]) {
      commit("setUpdateStat", "loading");

      pengaturanAPI
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

  },

  // mutations
  mutations: {
    setData(state, data) {
      state.data = data;
    },
    setDataS(state, data) {
      state.dataS = data;
    },

    setKategoriS(state, data) {
      state.kategoriS = data;
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