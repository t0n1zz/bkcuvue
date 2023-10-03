export default {
  index: function (p, id_cu, jenis) {
    return axios.get("/api/hariLibur/index",{
      params: p,
    });
  },

  create: function () {
    return axios.get("/api/tunjangan/create");
  },

  store: function (form) {
    return axios.post("/api/hariLibur/store", form);
  },

  edit: function (id) {
    return axios.get("/api/tunjangan/edit/" + id);
  },

  update: function (id, form) {
    return axios.post("/api/hariLibur/update/" + id, form);
  },

  destroy: function (id) {
    return axios.delete("/api/hariLibur/" + id);
  },

  detail: function (id) {
    return axios.get("/api/tunjangan/detail/" + id);
  },

  verifikasiTunjangan: function (id_user, id) {
    return axios.post("/api/tunjangan/verifikasiTunjangan/" +id_user+ '/'+ id);
  },
};