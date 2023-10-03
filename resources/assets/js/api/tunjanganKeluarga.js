export default {
  index: function (p, id_cu, jenis) {
    return axios.get("/api/tunjangan/index/" + id_cu + "/" + jenis, {
      params: p,
    });
  },

  create: function () {
    return axios.get("/api/tunjangan/create");
  },

  store: function (form) {
    return axios.post("/api/tunjangan/store", form);
  },

  edit: function (id) {
    return axios.get("/api/tunjangan/edit/" + id);
  },

  update: function (id, form) {
    return axios.post("/api/tunjangan/update/" + id, form);
  },

  destroy: function (id) {
    return axios.delete("/api/tunjangan/" + id);
  },

  detail: function (id) {
    return axios.get("/api/tunjangan/detail/" + id);
  },

  verifikasiTunjangan: function (id_user, id) {
    return axios.post("/api/tunjangan/verifikasiTunjangan/" +id_user+ '/'+ id);
  },
};