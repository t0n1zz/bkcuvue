export default {
  indexAktivis: function (id_cu) {
    return axios.get("/api/struktur/indexAktivis/" + id_cu);
  },

  indexStruktur: function (id_cu) {
    return axios.get("/api/struktur/index/" + id_cu);
  },

  store: function (id_cu, form) {
    return axios.post("/api/struktur/store/" + id_cu, form);
  },
};