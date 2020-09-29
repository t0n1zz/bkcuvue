import laporanTpAPI from '../../api/laporanTp.js';
import laporanTpDraftAPI from '../../api/laporanTpDraft.js';

export const laporanTp = {
  namespaced: true,

  // state
  state: {
    data: {}, //single data
    dataS: [], //collection
    data2S: [],
    grafik: [],
    pearls: [],
    periode: [],
    columnData: [],
    dataStat: '',
    dataStatS: '',
    dataStat2S: '',
    grafikStat: '',
    pearlsStat: '',
    periodeStat: '',
    update: [], //update data
    updateStat: '',
    rules: [], //laravel rules
    options: [], //laravel options
  },

  // getters
  getters: {
    data: state => state.data,
    dataS: state => state.dataS,
    data2S: state => state.data2S,
    grafik: state => state.grafik,
    pearls: state => state.pearls,
    periode: state => state.periode,
    columnData: state => state.columnData,
    dataStat: state => state.dataStat,
    dataStatS: state => state.dataStatS,
    dataStat2S: state => state.dataStat2S,
    pearlsStat: state => state.pearlsStat,
    grafikStat: state => state.grafikStat,
    periodeStat: state => state.periodeStat,
    idCU: state => state.idCU,
    update: state => state.update,
    updateStat: state => state.updateStat,
    rules: state => state.rules,
    options: state => state.options,
  },

  actions: {
    //load collection with params
    index({
      commit
    }, [p, id]) {
      commit('setDataStatS', 'loading');

      laporanTpAPI.index(p, id)
        .then(function (response) {
          commit('setDataS', response.data.model);
          commit('setDataStatS', 'success');
        })
        .catch(error => {
          commit('setDataS', error.response);
          commit('setDataStatS', 'fail');
        });
    },

    // load by cu
    indexCu({
      commit
    }, [p, id]) {
      commit('setDataStatS', 'loading');

      laporanTpAPI.indexCu(p, id)
        .then(function (response) {
          commit('setDataS', response.data.model);
          commit('setDataStatS', 'success');
        })
        .catch(error => {
          commit('setDataS', error.response);
          commit('setDataStatS', 'fail');
        });
    },

    // load by periode
    indexPeriode({
      commit
    }, [p, periode]) {
      commit('setDataStatS', 'loading');

      laporanTpAPI.indexPeriode(p, periode)
        .then(function (response) {
          commit('setDataS', response.data.model);
          commit('setDataStatS', 'success');
        })
        .catch(error => {
          commit('setDataS', error.response);
          commit('setDataStatS', 'fail');
        });
    },

    //load collection with params
    indexPearls({
      commit
    }, p) {
      commit('setPearlsStat', 'loading');

      laporanTpAPI.indexPearls(p)
        .then(function (response) {
          commit('setPearls', response.data.model);
          commit('setPearlsStat', 'success');
        })
        .catch(error => {
          commit('setPearls', error.response);
          commit('setPearlsStat', 'fail');
        });
    },

    // load by cu
    indexPearlsCu({
      commit
    }, [p, id]) {
      commit('setPearlsStat', 'loading');

      laporanTpAPI.indexPearlsCu(p, id)
        .then(function (response) {
          commit('setPearls', response.data.model);
          commit('setPearlsStat', 'success');
        })
        .catch(error => {
          commit('setPearls', error.response);
          commit('setPearlsStat', 'fail');
        });
    },

    // load by periode
    indexPearlsPeriode({
      commit
    }, [p, periode]) {
      commit('setPearlsStat', 'loading');

      laporanTpAPI.indexPearlsPeriode(p, periode)
        .then(function (response) {
          commit('setPearls', response.data.model);
          commit('setPearlsStat', 'success');
        })
        .catch(error => {
          commit('setPearls', error.response);
          commit('setPearlsStat', 'fail');
        });
    },

    // get list of laporan tp for laporan cu
    listLaporanTp({
      commit
    }, [cu, periode]) {
      commit('setDataStat2S', 'loading');

      laporanTpAPI.listLaporanTp(cu, periode)
        .then(function (response) {
          commit('setData2S', response.data.model);
          commit('setDataStat2S', 'success');
        })
        .catch(error => {
          commit('setData2S', error.response);
          commit('setDataStat2S', 'fail');
        });
    },

    // load collection of periode
    getPeriode({
      commit
    }) {
      commit('setPeriodeStat', 'loading');

      laporanTpAPI.getPeriode()
        .then(function (response) {
          commit('setPeriode', response.data.model);
          commit('setPeriodeStat', 'success');
        })
        .catch(error => {
          commit('setPeriode', error.response);
          commit('setPeriodeStat', 'fail');
        });
    },

    getPeriodeTp({
      commit
    }, [id, periode]) {
      commit('setDataStatS', 'loading');

      laporanTpAPI.getPeriodeTp(id, periode)
        .then(function (response) {
          commit('setDataS', response.data.model);
          commit('setDataStatS', 'success');
        })
        .catch(error => {
          commit('setDataS', error.response);
          commit('setDataStatS', 'fail');
        });
    },

    // load by periode
    grafikPeriode({
      commit
    }, [p, periode]) {
      commit('setGrafikStat', 'loading');

      laporanTpAPI.indexPeriode(p, periode)
        .then(function (response) {
          commit('setGrafik', response.data.model);
          commit('setGrafikStat', 'success');
        })
        .catch(error => {
          commit('setGrafik', error.response);
          commit('setGrafikStat', 'fail');
        });
    },

    // load by cu
    grafikTp({
      commit
    }, [p, id]) {
      commit('setGrafikStat', 'loading');

      laporanTpAPI.indexTp(p, id)
        .then(function (response) {
          commit('setGrafik', response.data.model);
          commit('setGrafikStat', 'success');
        })
        .catch(error => {
          commit('setGrafik', error.response);
          commit('setGrafikStat', 'fail');
        });
    },

    // load tp draft
    indexTpDraft({
      commit
    }, id) {
      commit('setDataStatS', 'loading');

      laporanTpDraftAPI.index(id)
        .then(function (response) {
          commit('setDataS', response.data.model);
          commit('setDataStatS', 'success');
        })
        .catch(error => {
          commit('setDataS', error.response);
          commit('setDataStatS', 'fail');
        });
    },

    create({
      commit
    }) {
      commit('setDataStat', 'loading');

      laporanTpAPI.create()
        .then(function (response) {
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
    store({
      commit,
      state,
      dispatch
    }, form) {
      commit('setUpdateStat', 'loading');

      laporanTpAPI.store(form)
        .then(function (response) {
          if (response.data.saved) {
            commit('setUpdateStat', 'success');
          } else {
            commit('setUpdateStat', 'fail');
          }
          commit('setUpdate', response.data);
        })
        .catch(error => {
          commit('setUpdate', error.response);
          commit('setUpdateStat', 'fail');
        });
    },


    // edit page
    edit({
      commit
    }, id) {
      commit('setDataStat', 'loading');

      laporanTpAPI.edit(id)
        .then(function (response) {
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
    update({
      commit,
      state,
      dispatch
    }, [id, form]) {
      commit('setUpdateStat', 'loading');

      laporanTpAPI.update(id, form)
        .then(function (response) {
          if (response.data.saved) {
            commit('setUpdateStat', 'success');
          } else {
            commit('setUpdateStat', 'fail');
          }
          commit('setUpdate', response.data);
        })
        .catch(error => {
          commit('setUpdate', error.response);
          commit('setUpdateStat', 'fail');
        });
    },

    updateTerbitkan({
      commit,
      state,
      dispatch
    }, id) {
      commit('setUpdateStat', 'loading');

      laporanTpAPI.updateTerbitkan(id)
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

    updateUtamakan({
      commit,
      state,
      dispatch
    }, id) {
      commit('setUpdateStat', 'loading');

      laporanTpAPI.updateUtamakan(id)
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

    // destroy data
    destroy({
      commit,
      state,
      dispatch
    }, id) {
      commit('setUpdateStat', 'loading');

      laporanTpAPI.destroy(id)
        .then(function (response) {
          if (response.data.deleted) {
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

    addColumnData({
      commit
    }, data) {
      commit('setColumnData', data);
    },

    // reset
    resetUpdateStat({
      commit
    }) {
      commit('setUpdateStat', '');
    },
    resetData({
      commit
    }) {
      commit('setData', '');
      commit('setDataStat', '');
    },
    resetDataS({
      commit
    }) {
      commit('setDataS', '');
      commit('setDataStatS', '');
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
    setData2S(state, data) {
      state.data2S = data;
    },
    setGrafik(state, data) {
      state.grafik = data;
    },
    setPearls(state, data) {
      state.pearls = data;
    },
    setPeriode(state, data) {
      state.periode = data;
    },
    setColumnData(state, data) {
      state.columnData = data;
    },
    setDataStat(state, status) {
      state.dataStat = status;
    },
    setDataStatS(state, status) {
      state.dataStatS = status;
    },
    setDataStat2S(state, status) {
      state.dataStat2S = status;
    },
    setPearlsStat(state, status) {
      state.pearlsStat = status;
    },
    setGrafikStat(state, status) {
      state.grafikStat = status;
    },
    setPeriodeStat(state, status) {
      state.periodeStat = status;
    },
    setIdCU(state, id) {
      state.idCU = id;
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
    }
  }
}