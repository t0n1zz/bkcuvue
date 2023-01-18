import AsetTetapAPI from '../../api/asetTetap';

export const asetTetap = {
    namespaced: true,

    // state
    state: {
        data: {}, //single data
        kode: {}, //single data
        dataS: [], //collection
        dataS2: [], //collection
        dataS3: [], //collection
        dataS4: [], //collection
        dataStat: '',
        kodeStat: '',
        dataStatS: '',
        dataStatS2: '',
        dataStatS3: '',
        dataStatS4: '',
        update: [], //update data
        updateStat: '',
        rules: [], //laravel rules
        options: [], //laravel options
    },

    // getters
    getters: {
        data: state => state.data,
        kode: state => state.kode,
        dataS: state => state.dataS,
        dataS2: state => state.dataS2,
        dataS3: state => state.dataS3,
        dataS4: state => state.dataS4,
        dataStat: state => state.dataStat,
        kodeStat: state => state.kodeStat,
        dataStatS: state => state.dataStatS,
        dataStatS2: state => state.dataStatS2,
        dataStatS3: state => state.dataStatS3,
        dataStatS4: state => state.dataStatS4,
        update: state => state.update,
        updateStat: state => state.updateStat,
        rules: state => state.rules,
        options: state => state.options,
    },

    actions: {
        //load collection with params
        index({ commit }, p) {
            commit('setDataStatS', 'loading');

            AsetTetapAPI.index(p)
                .then(function(response) {
                    commit('setDataS', response.data.model);
                    commit('setDataStatS', 'success');
                })
                .catch(error => {
                    commit('setDataS', error.response);
                    commit('setDataStatS', 'fail');
                });
        },

        indexSelesai({ commit }, p) {
            commit('setDataStatS3', 'loading');

            AsetTetapAPI.indexSelesai(p)
                .then(function(response) {
                    commit('setDataS3', response.data.model);
                    commit('setDataStatS3', 'success');
                })
                .catch(error => {
                    commit('setDataS3', error.response);
                    commit('setDataStatS3', 'fail');
                });
        },

        indexHapus({ commit }, p) {
            commit('setDataStatS4', 'loading');

            AsetTetapAPI.indexHapus(p)
                .then(function(response) {
                    commit('setDataS4', response.data.model);
                    commit('setDataStatS4', 'success');
                })
                .catch(error => {
                    commit('setDataS4', error.response);
                    commit('setDataStatS4', 'fail');
                });
        },

        indexSub({ commit }, [p, id]) {
            commit('setDataStatS2', 'loading');

            AsetTetapAPI.indexSub(p, id)
                .then(function(response) {
                    commit('setDataS2', response.data.model);
                    commit('setDataStatS2', 'success');
                })
                .catch(error => {
                    commit('setDataS2', error.response);
                    commit('setDataStatS2', 'fail');
                });
        },

        cariData({ commit }, kode) {
            commit('setDataStat', 'loading');

            AsetTetapAPI.cariData(kode)
                .then(function(response) {
                    if (response.data.model) {
                        commit('setData', response.data.model);
                        commit('setDataStat', 'success');
                    } else {
                        commit('setData', response.data.form);
                        commit('setRules', response.data.rules);
                        commit('setOptions', response.data.options)
                        commit('setDataStat', 'fail');
                    }
                })
                .catch(error => {
                    commit('setData', error.response);
                    commit('setDataStat', 'fail');
                });
        },

        // create page
        create({ commit }) {
            commit('setDataStat', 'loading');

            AsetTetapAPI.create()
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

        get({ commit }, kode) {
            commit('setDataStat', 'loading');

            AsetTetapAPI.get(kode)
                .then(function(response) {
                    commit('setData', response.data.model);
                    commit('setDataStat', 'success');
                })
                .catch(error => {
                    commit('setData', error.response);
                    commit('setDataStat', 'fail');
                });
        },

        generate({ commit }, id) {
            commit('setKodeStat', 'loading');

            AsetTetapAPI.generate(id)
                .then(function(response) {
                    commit('setKode', response.data.model);
                    commit('setKodeStat', 'success');
                })
                .catch(error => {
                    commit('setKode', error.response);
                    commit('setKodeStat', 'fail');
                });
        },

        //store data
        store({ commit, state, dispatch }, form) {
            commit('setUpdateStat', 'loading');

            AsetTetapAPI.store(form)
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

            AsetTetapAPI.edit(id)
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

            AsetTetapAPI.update(id, form)
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
        // update data lokasi
        updateLokasi({ commit, state, dispatch }, [id, form]) {
            commit('setUpdateStat', 'loading');
            AsetTetapAPI.updateLokasi(id, form)
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

        hapusDariLaporan({ commit }, id) {
            commit('setUpdateStat', 'loading');

            AsetTetapAPI.hapusDariLaporan(id)
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

        // update data
        updateKondisi({ commit, state, dispatch }, [id, form]) {
            commit('setUpdateStat', 'loading');

            AsetTetapAPI.updateKondisi(id, form)
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

            AsetTetapAPI.destroy(id)
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
        resetData({ commit }) {
            commit('setData', {});
            commit('setDataStat', '');
        },
        resetDataS2({ commit }) {
            commit('setDataS2', []);
            commit('setDataStatS2', '');
        },
        resetDataStat({ commit }) {
            commit('setDataStat', '');
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
        setKode(state, data) {
            state.kode = data;
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
        setDataStat(state, status) {
            state.dataStat = status;
        },
        setKodeStat(state, status) {
            state.kodeStat = status;
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