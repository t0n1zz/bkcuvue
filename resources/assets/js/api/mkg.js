export default {
  index: function (p, id_cu,tipe) {
    return axios.get("/api/mkg/index/" + id_cu + '/'+ tipe, {
      params: p,
    });
  },

  getAktivis: function (id_cu) {
    return axios.get("/api/mkg/getAktivis/" + id_cu);
  },

  create: function () {
    return axios.get("/api/mkg/create");
  },

  store: function (id_aktivis,form) {
    return axios.post("/api/mkg/store/"+ id_aktivis, form);
  },

  edit: function (id) {
    return axios.get("/api/mkg/edit/" + id);
  },

  update: function (id, form) {
    return axios.post("/api/mkg/update/" + id, form);
  },

  destroy: function (id) {
    return axios.delete("/api/mkg/" + id);
  },

  detail: function (id) {
    return axios.get("/api/tunjangan/mkg/" + id);
  },

  verifikasi: function (id_user, id) {
    return axios.post("/api/mkg/verifikasiMkg/" + id_user + "/" + id);
  },
};