import FormEvaluasiAPI from "../../api/formEvaluasi.js";

export const formEvaluasi = {
    namespaced: true,

    // state
    state: {
        data: {}, //single data
        dataS: [], //collection
        dataS2: [], //collection
        dataStat: "",
        dataStatS: "",
        dataStatS2: "",
        update: [], //update data
        update2: [], //update data
        updateStat: "",
        updateStat2: "",
        rules: [], //laravel rules
        options: [], //laravel options
    },

    // getters
    getters: {
        data: (state) => state.data,
        dataS: (state) => state.dataS,
        dataS2: (state) => state.dataS2,
        dataStat: (state) => state.dataStat,
        dataStatS: (state) => state.dataStatS,
        dataStatS2: (state) => state.dataStatS2,
        update: (state) => state.update,
        update2: (state) => state.update2,
        updateStat: (state) => state.updateStat,
        updateStat2: (state) => state.updateStat2,
        rules: (state) => state.rules,
        options: (state) => state.options,
    },

    actions: {
        //load collection with params
        index({ commit }, p) {
            commit("setDataStatS", "loading");
            FormEvaluasiAPI.index(p)
                .then(function(response) {
                    // console.log(response.data.model);
                    commit("setDataS", response.data.model);
                    commit("setDataStatS", "success");
                })
                .catch((error) => {
                    commit("setDataS", error.response);
                    commit("setDataStatS", "fail");
                });
        },

        //load collection with params
        indexSub({ commit }, p) {
            commit("setDataStatS", "loading");
            FormEvaluasiAPI.index(p)
                .then(function(response) {
                    // console.log(response.data.model);
                    commit("setDataS", response.data.model);
                    commit("setDataStatS", "success");
                })
                .catch((error) => {
                    commit("setDataS", error.response);
                    commit("setDataStatS", "fail");
                });
        },

        //load collection with params
        get({ commit }) {
            commit("setDataStatS2", "loading");
            FormEvaluasiAPI.get()
                .then(function(response) {
                    // console.log(response.data.model);
                    commit("setDataS2", response.data.model);
                    commit("setDataStatS2", "success");
                })
                .catch((error) => {
                    commit("setDataS2", error.response);
                    commit("setDataStatS2", "fail");
                });
        },

        // create page
        create({ commit }) {
            commit("setDataStat", "loading");

            FormEvaluasiAPI.create()
                .then(function(response) {
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
            FormEvaluasiAPI.store(form)
                .then(function(response) {
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

            FormEvaluasiAPI.edit(id)
                .then(function(response) {
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

            FormEvaluasiAPI.update(id, form)
                .then(function(response) {
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

            FormEvaluasiAPI.destroy(id)
                .then(function(response) {
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
        setDataS2(state, data) {
            state.dataS2 = data;
        },
        setDataStat(state, status) {
            state.dataStat = status;
        },
        setDataStatS(state, status) {
            state.dataStatS = status;
        },
        setDataStatS2(state, status) {
            state.dataStatS2 = status;
        },
        setUpdate(state, data) {
            state.update = data;
        },
        setUpdate2(state, data) {
            state.update2 = data;
        },
        setUpdateStat(state, status) {
            state.updateStat = status;
        },
        setUpdateStat2(state, status) {
            state.updateStat2 = status;
        },
        setRules(state, rules) {
            state.rules = rules;
        },
        setOptions(state, options) {
            state.options = options;
        },
    },
};