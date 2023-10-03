export default {
  indexQR: function (id_qr) {
    return axios.get("/api/presensi/indexQR/" + id_qr);
  },

  getUsers: function (id_cu) {
    return axios.get("/api/presensi/getUsers/" + id_cu);
  },

  indexPresensi: function (p, tahun, bulan, tipe, lingkup) {
    return axios.get(
      "/api/presensi/indexPresensi/" +
        tahun +
        "/" +
        bulan +
        "/" +
        tipe +
        "/" +
        lingkup,
      {
        params: p,
      }
    );
  },

  indexCuti: function (p, id_cu, tahun, bulan) {
    return axios.get(
      "/api/presensi/indexCuti/" + id_cu + "/" + tahun + "/" + bulan,
      {
        params: p,
      }
    );
  },

  indexQrAll: function (p, id_cu, id_user, status) {
    return axios.get(
      "/api/presensi/indexQrAll/" + id_cu + "/" + id_user + "/" + status,
      {
        params: p,
      }
    );
  },

  storeQR: function (form) {
    return axios.post("/api/presensi/storeQR/", form);
  },

  updateQR: function (id, form) {
    return axios.post("/api/presensi/updateQR/" + id, form);
  },

  updateCuti: function (id, form) {
    return axios.post("/api/presensi/updateCuti/" + id, form);
  },

  storePelanggaranSeragam: function (form) {
    return axios.post("/api/presensi/storePelanggaranSeragam/", form);
  },

  storeIzin: function (form) {
    return axios.post("/api/presensi/storeIzin/", form);
  },

  updateAlasan: function (form, tipe) {
    return axios.post("/api/presensi/updateAlasan/" + tipe, form);
  },

  verifikasiCuti: function (form, id) {
    return axios.post("/api/presensi/verifikasiCuti/" + id, form);
  },

  updateIzin: function (form, id) {
    return axios.post("/api/presensi/updateIzin/" + id, form);
  },

  store: function (id_cu, id_kegiatan, kode) {
    return axios.post(
      "/api/presensi/store/" + id_cu + "/" + id_kegiatan + "/" + kode
    );
  },

  storePresensi: function (form, lat, lon) {
    return axios.post("/api/presensi/storePresensi/" + lat + "/" + lon, form);
  },

  storeKuliah: function (id_cu, id_aktivis, id_user, tanggal, tipe) {
    return axios.post(
      "/api/presensi/storeKuliah/" +
        id_cu +
        "/" +
        id_aktivis +
        "/" +
        id_user +
        " /" +
        tanggal +
        "/" +
        tipe
    );
  },

  storePresensiLain: function (tipe, form) {
    return axios.post("/api/presensi/storePresensiLain/" + tipe, form);
  },

  storeCuti: function (form) {
    return axios.post("/api/presensi/storeCuti/", form);
  },

  uploadOffBergilir: function (tipe, form) {
    return axios.post("/api/presensi/uploadOffBergilir/" + tipe, form);
  },

  storeSelesaiIzin: function (id_user) {
    return axios.post("/api/presensi/storeSelesaiIzin/" + id_user);
  },

  aktifQR: function (id, id_user, status) {
    return axios.post(
      "/api/presensi/aktifQR/" + id + "/" + id_user + "/" + status
    );
  },

  createFormTerlambat: function () {
    return axios.get("/api/presensi/createFormTerlambat");
  },

  createFormQR: function () {
    return axios.get("/api/presensi/createFormQR");
  },

  getKegiatan: function (tipe, id_cu) {
    return axios.get("/api/presensi/getKegiatan/" + id_cu + "/" + tipe);
  },

  destroy: function (id, tipe) {
    return axios.delete("/api/presensi/" + id + "/" + tipe);
  },

  edit: function (tipe,id) {
    return axios.get("/api/presensi/edit/"+ tipe+ '/' + id);
  },
};
