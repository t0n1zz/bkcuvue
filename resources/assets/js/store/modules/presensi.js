import PRESENSIAPI from "../../api/presensi.js";

export const presensi = {
  namespaced: true,

  // state
  state: {
    data: {}, //single data
    dataS: [], //collection
    dataStat: "",
    dataStatS: "",
    update: [], //update data
    updateStat: "",
    qr: "",
    qrStat: "",
    absenStat: "",
    message: "",
    status: "",
    terlambat: {},
    confirm_pulang: "",
    list_kegiatan: [],
    listKegiatanStat: "",
    qrForm: {},
    pesan: "",
    terlambatS: [],
    terlambatStat: "",
    userS: [],
    updateMessage: "",
    cutiMessage: "",
    cutiStat: "",
    formSeragam: {
      id_user: "",
      id_absen: 0,
      id_aktivis: "",
      id_cu: "",
      id_seragam_kerja: "",
      seragam: [],
      seragamName: "",
    },
    formUpdateAlasan: {
      id: "",
      alasan: "",
      jenis: "",
    },
    formFile: {
      file: null,
    },
    formIzin: {
      id_cu: "",
      id_aktivis: "",
      id_user: "",
      jenis: "",
      alasan: "",
      tanggal_mulai: "",
      tanggal_selesai: "",
      lama: "",
    },
  },

  // getters
  getters: {
    data: (state) => state.data,
    dataS: (state) => state.dataS,
    dataStat: (state) => state.dataStat,
    dataStatS: (state) => state.dataStatS,
    update: (state) => state.update,
    updateStat: (state) => state.updateStat,
    qr: (state) => state.qr,
    qrStat: (state) => state.qrStat,
    absenStat: (state) => state.absenStat,
    message: (state) => state.message,
    status: (state) => state.status,
    terlambat: (state) => state.terlambat,
    confirm_pulang: (state) => state.confirm_pulang,
    list_kegiatan: (state) => state.list_kegiatan,
    listKegiatanStat: (state) => state.listKegiatanStat,
    qrForm: (state) => state.qrForm,
    pesan: (state) => state.pesan,
    terlambatS: (state) => state.terlambatS,
    terlambatStat: (state) => state.terlambatStat,
    userS: (state) => state.userS,
    updateMessage: (state) => state.updateMessage,
    formSeragam: (state) => state.formSeragam,
    formFile: (state) => state.formFile,
    formUpdateAlasan: (state) => state.formUpdateAlasan,
    formIzin: (state) => state.formIzin,
  },

  actions: {
    indexQR({ commit }, id_qr) {
      commit("setQrStat", "loading");
      PRESENSIAPI.indexQR(id_qr)
        .then(function (response) {
          commit("setQr", response.data.qr);
          commit("setQrStat", "success");
        })
        .catch((error) => {
          commit("setData", error.response);
          commit("setQrStat", "fail");
        });
    },

    indexPresensi({ commit }, [p, tahun, bulan, tipe, lingkup]) {
      commit("setTerlambatStat", "loading");
      PRESENSIAPI.indexPresensi(p, tahun, bulan, tipe, lingkup)
        .then(function (response) {
          commit("setTerlambatS", response.data.model);
          commit("setTerlambatStat", "success");
        })
        .catch((error) => {
          commit("setTerlambatS", error.response);
          commit("setTerlambatStat", "fail");
        });
    },

    indexCuti({ commit }, [p, id_cu, tahun, bulan]) {
      commit("setTerlambatStat", "loading");
      PRESENSIAPI.indexCuti(p, id_cu, tahun, bulan)
        .then(function (response) {
          commit("setDataS", response.data.model);
          commit("setDataStatS", "success");
        })
        .catch((error) => {
          commit("setDataS", error.response);
          commit("setDataStatS", "fail");
        });
    },

    getUsers({ commit }, id_cu) {
      commit("setDataStatS", "loading");
      PRESENSIAPI.getUsers(id_cu)
        .then(function (response) {
          commit("setUserS", response.data.model);
          commit("setDataStatS", "success");
        })
        .catch((error) => {
          commit("setUserS", error.response);
          commit("setDAtaStatS", "fail");
        });
    },

    indexQrAll({ commit }, [p, id_cu, id_user, status]) {
      commit("setDataStatS", "loading");
      PRESENSIAPI.indexQrAll(p, id_cu, id_user, status)
        .then(function (response) {
          commit("setDataS", response.data.model);
          commit("setDataStatS", "success");
        })
        .catch((error) => {
          commit("setDataS", error.response);
          commit("setDataStatS", "fail");
        });
    },

    getKegiatan({ commit }, [id_cu, tipe]) {
      PRESENSIAPI.getKegiatan(id_cu, tipe)
        .then(function (response) {
          commit("setListKegiatan", response.data.model);
          commit("setListKegiatanStat", "success");
        })
        .catch((error) => {
          commit("setListKegiatanStat", error.response);
          commit("setListKegiatanStat", "fail");
        });
    },

    storeQR({ commit }, form) {
      commit("setQrStat", "loading");
      PRESENSIAPI.storeQR(form)
        .then(function (response) {
          commit("setAbsenMessage", response.data.message);
          commit("setQrStat", "success");
        })
        .catch((error) => {
          commit("setQrStat", error.response);
          commit("setQrStat", "fail");
        });
    },

    edit({ commit },[tipe,id]) {
      commit("setDataStat", "loading");

      PRESENSIAPI
        .edit(tipe,id)
        .then(function (response) {
          commit("setQRForm", response.data.form);
          commit("setDataStat", "success");
        })
        .catch((error) => {
          commit("setData", error.response);
          commit("setDataStat", "fail");
        });
    },

    updateQR({ commit }, [id, form]) {
      commit("setQrStat", "loading");
      PRESENSIAPI.updateQR(id, form)
        .then(function (response) {
          commit("setAbsenMessage", response.data.message);
          commit("setQrStat", "success");
        })
        .catch((error) => {
          commit("setQrStat", error.response);
          commit("setQrStat", "fail");
        });
    },

    updateCuti({ commit }, [id, form]) {
      commit("setUpdateStat", "loading");
      PRESENSIAPI.updateCuti(id, form)
        .then(function (response) {
          commit("setUpdateMessage", response.data.message);
          commit("setUpdateStat", "success");
        })
        .catch((error) => {
          commit("seUpdateStat", error.response);
          commit("setUpdateStat", "fail");
        });
    },

    storePelanggaranSeragam({ commit }, form) {
      commit("setUpdateStat", "loading");
      PRESENSIAPI.storePelanggaranSeragam(form)
        .then(function (response) {
          commit("setUpdateMessage", response.data.message);
          commit("setUpdateStat", "success");
        })
        .catch((error) => {
          commit("setUpdateStat", error.response);
          commit("setUpdateStat", "fail");
        });
    },

    storeIzin({ commit }, form) {
      commit("setUpdateStat", "loading");
      PRESENSIAPI.storeIzin(form)
        .then(function (response) {
          commit("setUpdateMessage", response.data.message);
          commit("setUpdateStat", "success");
        })
        .catch((error) => {
          commit("setUpdateStat", error.response);
          commit("setUpdateStat", "fail");
        });
    },

    updateAlasan({ commit }, [form, tipe]) {
      commit("setUpdateStat", "loading");
      PRESENSIAPI.updateAlasan(form, tipe)
        .then(function (response) {
          commit("setUpdateMessage", response.data.message);
          commit("setUpdateStat", "success");
        })
        .catch((error) => {
          commit("setUpdateStat", error.response);
          commit("setUpdateStat", "fail");
        });
    },

    verifikasiCuti({ commit }, [form, id]) {
      commit("setUpdateStat", "loading");
      PRESENSIAPI.verifikasiCuti(form, id)
        .then(function (response) {
          commit("setUpdateMessage", response.data.message);
          commit("setUpdateStat", "success");
        })
        .catch((error) => {
          commit("setUpdateStat", error.response);
          commit("setUpdateStat", "fail");
        });
    },

    updateIzin({ commit }, [form, id]) {
      commit("setUpdateStat", "loading");
      PRESENSIAPI.updateIzin(form, id)
        .then(function (response) {
          commit("setUpdateMessage", response.data.message);
          commit("setUpdateStat", "success");
        })
        .catch((error) => {
          commit("setUpdateStat", error.response);
          commit("setUpdateStat", "fail");
        });
    },

    storePresensi({ commit, dispatch, state }, [form, lat, lon]) {
      commit("setAbsenStat", "loading");
      commit("setConfirmPulang", "");
      PRESENSIAPI.storePresensi(form, lat, lon)
        .then(function (response) {
          if (response) {
            commit("setConfirmPulang", response.data.konfirmasi_pulang);
            commit("setStatus", response.data.status);
            commit("setAbsenMessage", response.data.message);
            commit("setAbsenStat", "success");
          } else {
            commit("setAbsenStat", "fail");
          }
        })
        .catch((error) => {
          commit("setUpdate", error.response);
          commit("setUpdateStat", "fail");
        });
    },

    storePresensiLain({ commit, dispatch, state }, [tipe, form]) {
      commit("setAbsenStat", "loading");
      PRESENSIAPI.storePresensiLain(tipe, form)
        .then(function (response) {
          if (response) {
            //  commit("setStatus", response.data.status);
            commit("setAbsenMessage", response.data.message);
            commit("setAbsenStat", "success");
          } else {
            commit("setAbsenStat", "fail");
          }
        })
        .catch((error) => {
          commit("setUpdate", error.response);
          commit("setAbsenStat", "fail");
        });
    },

    storeCuti({ commit }, form) {
      commit("setUpdateStat", "loading");
      PRESENSIAPI.storeCuti(form)
        .then(function (response) {
          if (response) {
            //  commit("setStatus", response.data.status);
            commit("setUpdateMessage", response.data.message);
            commit("setUpdateStat", "success");
          } else {
            commit("setUpdateStat", "fail");
          }
        })
        .catch((error) => {
          commit("setUpdate", error.response);
          commit("setAbsenStat", "fail");
        });
    },

    uploadOffBergilir({ commit, dispatch, state }, [tipe, form]) {
      commit("setUpdateStat", "loading");
      PRESENSIAPI.uploadOffBergilir(tipe, form)
        .then(function (response) {
          if (response) {
            //  commit("setStatus", response.data.status);
            commit("setUpdateMessage", response.data.message);
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

    storeKuliah(
      { commit, dispatch, state },
      [id_cu, id_aktivis, id_user, tanggal, tipe]
    ) {
      commit("setUpdateStat", "loading");
      PRESENSIAPI.storeKuliah(id_cu, id_aktivis, id_user, tanggal, tipe)
        .then(function (response) {
          if (response) {
            //  commit("setStatus", response.data.status);
            commit("setUpdateMessage", response.data.message);
            commit("setUpdateStat", "success");
          } else {
            commit("setUpdateStat", "fail");
          }
        })
        .catch((error) => {
          //  commit("setUpdate", error.response);
          //  commit("setUpdateStat", "fail");
        });
    },

    storeSelesaiIzin({ commit, dispatch, state }, id_user) {
      commit("setAbsenStat", "loading");
      PRESENSIAPI.storeSelesaiIzin(id_user)
        .then(function (response) {
          if (response) {
            commit("setAbsenMessage", response.data.message);
            commit("setAbsenStat", "success");
          } else {
            commit("setAbsenStat", "fail");
          }
        })
        .catch((error) => {
          commit("setUpdate", error.response);
          commit("setUpdateStat", "fail");
        });
    },

    createFormTerlambat({ commit }) {
      commit("setDataStat", "loading");

      PRESENSIAPI.createFormTerlambat()
        .then(function (response) {
          commit("setTerlambat", response.data.form);
          commit("setDataStat", "success");
        })
        .catch((error) => {
          commit("setData", error.response);
          commit("setDataStat", "fail");
        });
    },

    createFormAbsen({ commit }) {
      commit("setDataStat", "loading");

      PRESENSIAPI.createFormAbsen()
        .then(function (response) {
          commit("setData", response.data.form);
          commit("setDataStat", "success");
        })
        .catch((error) => {
          commit("setData", error.response);
          commit("setDataStat", "fail");
        });
    },

    createFormQR({ commit }) {
      commit("setDataStat", "loading");

      PRESENSIAPI.createFormQR()
        .then(function (response) {
          commit("setQRForm", response.data.form);
          commit("setDataStat", "success");
        })
        .catch((error) => {
          commit("setQRForm", error.response);
          commit("setDataStat", "fail");
        });
    },

    aktifQR({ commit }, [id, id_user, status]) {
      commit("setQrStat", "loading");

      PRESENSIAPI.aktifQR(id, id_user, status)
        .then(function (response) {
          commit("setQRMessage", response.data.pesan);
          commit("setQrStat", "success");
        })
        .catch((error) => {
          commit("setQRMessage", error.response);
          commit("setQrStat", "fail");
        });
    },

    destroy({ commit, state, dispatch }, [id, tipe]) {
      commit("setUpdateStat", "loading");

      PRESENSIAPI.destroy(id, tipe)
        .then(function (response) {
          if (response.data.deleted) {
            commit("setUpdate", response.data);
            commit("setUpdateMessage", response.data.message);
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
    setDataStat(state, status) {
      state.dataStat = status;
    },
    setDataStatS(state, status) {
      state.dataStatS = status;
    },
    setUpdate(state, data) {
      state.update = data;
    },
    setUpdateStat(state, status) {
      state.updateStat = status;
    },
    setQr(state, qr) {
      state.qr = qr;
    },
    setQrStat(state, qrStat) {
      state.qrStat = qrStat;
    },
    setAbsenStat(state, status) {
      state.absenStat = status;
    },
    setAbsenMessage(state, message) {
      state.message = message;
    },
    setStatus(state, status) {
      state.status = status;
    },
    setTerlambat(state, terlambat) {
      state.terlambat = terlambat;
    },

    setTerlambatS(state, terlambatS) {
      state.terlambatS = terlambatS;
    },

    setTerlambatStat(state, terlambatStat) {
      state.terlambatStat = terlambatStat;
    },

    setConfirmPulang(state, confirm_pulang) {
      state.confirm_pulang = confirm_pulang;
    },

    setListKegiatan(state, list_kegiatan) {
      state.list_kegiatan = list_kegiatan;
    },

    setListKegiatanStat(state, listKegiatanStat) {
      state.listKegiatanStat = listKegiatanStat;
    },

    setQRForm(state, qrForm) {
      state.qrForm = qrForm;
    },

    setQRMessage(state, pesan) {
      state.pesan = pesan;
    },

    setUserS(state, userS) {
      state.userS = userS;
    },

    setUpdateMessage(state, updateMessage) {
      state.updateMessage = updateMessage;
    },
  },
};
