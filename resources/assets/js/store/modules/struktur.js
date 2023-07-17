import strukturAPI from '../../api/struktur.js';

export const struktur = {
  namespaced: true,

  // state
  state: {
    data: {}, //single data
    managerS: [], //collection
    bidang:[],
    staffS: [], //collection
    dataS: [], //collection
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
    rules: [], //laravel rules
    options: [], //laravel options
  },

  // getters
  getters: {
    data: (state) => state.data,
    managerS: (state) => state.managerS,
    staffS: (state) => state.staffS,
    bidang: (state) =>state.bidang,
    dataS: (state) => state.dataS,
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
    rules: (state) => state.rules,
    options: (state) => state.options,
  },

  actions: {
    indexAktivis({ commit }, id_cu) {
      commit("setDataStatS", "loading");

      strukturAPI
        .indexAktivis(id_cu)
        .then(function (response) {
          commit("setManagerS", response.data.manager);
          commit("setStaffS", response.data.staff);
          commit("setBidang", response.data.bidang);
          commit("setDataStatS", "success");
        })
        .catch((error) => {
          commit("setManagerS", error.response);
          commit("setDataStatS", "fail");
        });
    },

    index({ commit }, id_cu) {
      commit("setDataStatS", "loading");

      strukturAPI
        .indexStruktur(id_cu)
        .then(function (response) {
          commit("setDataS", response.data.model);
          commit("setDataStatS", "success");
        })
        .catch((error) => {
          commit("setManagerS", error.response);
          commit("setDataStatS", "fail");
        });
    },

    store({ commit, state, dispatch }, [id_cu, form]) {
      commit("setUpdateStat", "loading");

      strukturAPI
        .store(id_cu, form)
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

    removeDivision({ commit }, divisionId) {
      commit("REMOVE_DIVISION", divisionId);
    },
    addDivision({ commit }) {
      commit("ADD_DIVISION");
    },
  },

  // mutations
  mutations: {
    setData(state, data) {
      state.data = data;
    },
    setManagerS(state, data) {
      state.managerS = data;
    },
    setStaffS(state, data) {
      state.staffS = data;
    },
    setDataS(state, data) {
      state.dataS = data;
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
    setBidang(state, bidang) {
      state.bidang = bidang;
    },

    removeDivision (state, divisionIndex) {
      const divisions = Object.values(state.dataS);
      divisions.splice(divisionIndex, 1);
      state.dataS = divisions
    },

    ADD_DIVISION (state) {
      const divisions = Object.values(state.dataS);
      divisions.push({
        divisi: '',
        manager: '',
        staff: []
      });
      state.dataS = divisions;
    }
  },
};