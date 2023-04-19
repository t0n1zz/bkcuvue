export default {
  index: function (p) {
    console.log(p);
    return axios.get("/api/cu", { params: p });
  },

  indexDeleted: function (p) {
    return axios.get("/api/cu/deleted", { params: p });
  },

  get: function () {
    return axios.get("/api/cu/get");
  },

  getHeader: function () {
    return axios.get("/api/cu/getHeader");
  },

  getBirthday: function () {
    return axios.get("/api/cu/getBirthday");
  },

  getPus: function (id) {
    return axios.get("/api/cu/getPus/" + id);
  },

  escete: function (id) {
    return axios.get("/api/cu/escete/" + id);
  },

  create: function () {
    return axios.get("/api/cu/create");
  },

  store: function (form) {
    return axios.post("/api/cu/store", form);
  },

  edit: function (id) {
    return axios.get("/api/cu/edit/" + id);
  },

  update: function (id, form) {
    return axios.post("/api/cu/update/" + id, form);
  },

  restore: function (id) {
    return axios.post("/api/cu/restore/" + id);
  },

  destroy: function (id) {
    return axios.delete("/api/cu/" + id);
  },

  count: function () {
    return axios.get("/api/cu/count");
  },

  history: function () {
    return axios.get("/api/cu/history");
  },
};
