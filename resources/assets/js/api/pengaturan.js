export default {
  index: function (id_cu) {
    return axios.get("/api/pengaturan/index/" + id_cu);
  },

  getKategori: function (id_cu) {
    return axios.get("/api/pengaturan/getKategori/" + id_cu);
  },

  store: function (id_cu, form) {
    return axios.post("/api/pengaturan/store/" + id_cu, form);
  },

  update: function (id, form) {
    return axios.post("/api/pengaturan/update/" + id, form);
  },
};
