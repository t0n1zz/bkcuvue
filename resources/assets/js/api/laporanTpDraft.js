export default {

  index: function () {
    return axios.get('/api/laporanTpDraft/');
  },

  store: function (id) {
    return axios.post('/api/laporanTpDraft/store/' + id);
  },

  storeAll: function () {
    return axios.post('/api/laporanTpDraft/storeAll');
  },

  edit: function (id) {
    return axios.get('/api/laporanTpDraft/edit/' + id);
  },

  update: function (id, form) {
    return axios.post('/api/laporanTpDraft/update/' + id, form);
  },

  destroy: function (id) {
    return axios.delete('/api/laporanTpDraft/destroy/' + id);
  },

  destroyAll: function () {
    return axios.delete('/api/laporanTpDraft/destroyAll');
  },
}