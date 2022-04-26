import SERTIFIKATKEGIATANAPI from '../../api/sertifikatKegiatan.js';

export const sertifikatKegiatan = {
    namespaced: true,

    // state
    state: {
        data: {},
        data2: {}, //single data
        data3: {}, //single data
        data4: {}, //single data
        dataS: [], //collection
        dataS2: [], //collection
        dataS3: [], //collection
        dataS4: [], //collection
        dataS5: [], //collection
        dataS6: [], //collection
        dataS7: [], //collection
        dataS8: [], //collection
        dataS9: [], //collection
        dataS10: [], //collection
        dataS11: [], //collection
        dataJalan: [], //collection
        periode: [],
        count: {},
        count2: {},
        count3: {},
        count4: {},
        dataStat: '',
        dataStat2: '',
        dataStat3: '',
        dataStat4: '',
        periodeStat: '',
        dataStatS: '',
        dataStatS2: '',
        dataStatS3: '',
        dataStatS4: '',
        dataStatS5: '',
        dataStatS6: '',
        dataStatS7: '',
        dataStatS8: '',
        dataStatS9: '',
        dataStatS10: '',
        dataStatS11: '',
        dataJalanStat: '',
        countStat: '',
        countStat2: '',
        countStat3: '',
        countStat4: '',
        update: [], //update data
        updateStat: '',
        update2: [], //update data
        updateStat2: '',
        rules: [], //laravel rules
        options: [], //laravel options
    },

    // getters
    getters: {
        data: state => state.data,
        data2: state => state.data2,
        data3: state => state.data3,
        data4: state => state.data4,
        dataS: state => state.dataS,
        dataS2: state => state.dataS2,
        dataS3: state => state.dataS3,
        dataS4: state => state.dataS4,
        dataS5: state => state.dataS5,
        dataS6: state => state.dataS6,
        dataS7: state => state.dataS7,
        dataS8: state => state.dataS8,
        dataS9: state => state.dataS9,
        dataS10: state => state.dataS10,
        dataS11: state => state.dataS11,
        dataJalan: state => state.dataJalan,
        periode: state => state.periode,
        count: state => state.count,
        count2: state => state.count2,
        count3: state => state.count3,
        count4: state => state.count4,
        dataStat: state => state.dataStat,
        dataStat2: state => state.dataStat2,
        dataStat3: state => state.dataStat3,
        dataStat4: state => state.dataStat4,
        periodeStat: state => state.periodeStat,
        dataStatS: state => state.dataStatS,
        dataStatS2: state => state.dataStatS2,
        dataStatS3: state => state.dataStatS3,
        dataStatS4: state => state.dataStatS4,
        dataStatS5: state => state.dataStatS5,
        dataStatS6: state => state.dataStatS6,
        dataStatS7: state => state.dataStatS7,
        dataStatS8: state => state.dataStatS8,
        dataStatS9: state => state.dataStatS9,
        dataStatS10: state => state.dataStatS10,
        dataStatS11: state => state.dataStatS11,
        dataJalanStat: state => state.dataJalanStat,
        countStat: state => state.countStat,
        countStat2: state => state.countStat2,
        countStat3: state => state.countStat3,
        countStat4: state => state.countStat4,
        update: state => state.update,
        updateStat: state => state.updateStat,
        update2: state => state.update2,
        updateStat2: state => state.updateStat2,
        rules: state => state.rules,
        options: state => state.options,
    },

    actions: {
        //load collection with params
        index({ commit }, p) {
            commit('setDataStatS', 'loading');
            SERTIFIKATKEGIATANAPI.index(p)
                .then(function(response) {
                    commit('setDataS', response.data.model);
                    commit('setDataStatS', 'success');
                })
                .catch(error => {
                    commit('setDataS', error.response);
                    commit('setDataStatS', 'fail');
                });
        },

        // create page
        create({ commit }) {
            commit('setDataStat', 'loading');

            SERTIFIKATKEGIATANAPI.create()
                .then(function(response) {

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
        store({ commit, state, dispatch }, form) {
            commit('setUpdateStat', 'loading');
            SERTIFIKATKEGIATANAPI.store(form)
                .then(function(response) {
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
            commit('setDataStat', 'loading');
            SERTIFIKATKEGIATANAPI.edit(id)
                .then(function(response) {
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
        update({ commit, state, dispatch }, [id, form]) {
            commit('setUpdateStat', 'loading');
            SERTIFIKATKEGIATANAPI.update(id, form)
                .then(function(response) {
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
        destroy({ commit, state, dispatch }, id) {
            commit('setUpdateStat', 'loading');

            SERTIFIKATKEGIATANAPI.destroy(id)
                .then(function(response) {
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

        // reset
        resetDataS({ commit }) {
            commit('setDataS', []);
            commit('setDataStatS', 'success');
        },
        resetUpdateStat({ commit }) {
            commit('setUpdateStat', '');
        }
    },

    // mutations
    mutations: {
        setData(state, data) {
            state.data = data;
        },
        setData2(state, data) {
            state.data2 = data;
        },
        setData3(state, data) {
            state.data3 = data;
        },
        setData4(state, data) {
            state.data4 = data;
        },
        setPeriode(state, data) {
            state.periode = data;
        },
        setDataS(state, data) {
            state.dataS = data;
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
        setDataS6(state, data) {
            state.dataS6 = data;
        },
        setDataS7(state, data) {
            state.dataS7 = data;
        },
        setDataS8(state, data) {
            state.dataS8 = data;
        },
        setDataS9(state, data) {
            state.dataS9 = data;
        },
        setDataS10(state, data) {
            state.dataS10 = data;
        },
        setDataS11(state, data) {
            state.dataS11 = data;
        },
        setDataJalan(state, data) {
            state.dataJalan = data;
        },
        setCount(state, data) {
            state.count = data;
        },
        setCount2(state, data) {
            state.count2 = data;
        },
        setCount3(state, data) {
            state.count3 = data;
        },
        setCount4(state, data) {
            state.count4 = data;
        },
        setDataStat(state, status) {
            state.dataStat = status;
        },
        setDataStat2(state, status) {
            state.dataStat2 = status;
        },
        setDataStat3(state, status) {
            state.dataStat3 = status;
        },
        setDataStat4(state, status) {
            state.dataStat4 = status;
        },
        setPeriodeStat(state, status) {
            state.periodeStat = status;
        },
        setDataStatS(state, status) {
            state.dataStatS = status;
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
        setDataStatS6(state, status) {
            state.dataStatS6 = status;
        },
        setDataStatS7(state, status) {
            state.dataStatS7 = status;
        },
        setDataStatS8(state, status) {
            state.dataStatS8 = status;
        },
        setDataStatS9(state, status) {
            state.dataStatS9 = status;
        },
        setDataStatS10(state, status) {
            state.dataStatS10 = status;
        },
        setDataStatS11(state, status) {
            state.dataStatS11 = status;
        },
        setDataJalanStat(state, status) {
            state.dataJalanStat = status;
        },
        setCountStat(state, status) {
            state.countStat = status;
        },
        setCountStat2(state, status) {
            state.countStat2 = status;
        },
        setCountStat3(state, status) {
            state.countStat3 = status;
        },
        setCountStat4(state, status) {
            state.countStat4 = status;
        },
        setUpdate(state, data) {
            state.update = data;
        },
        setUpdateStat(state, status) {
            state.updateStat = status;
        },
        setUpdate2(state, data) {
            state.update2 = data;
        },
        setUpdateStat2(state, status) {
            state.updateStat2 = status;
        },
        setRules(state, rules) {
            state.rules = rules;
        },
        setOptions(state, options) {
            state.options = options;
        }
    }
}