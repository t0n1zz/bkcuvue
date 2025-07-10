export default {

    index: function(p) {
        return axios.get('/api/sertifikatKegiatan', { params: p });
    },

    indexNomorSertifikat: function (p) { 
        return axios.get('/api/sertifikatKegiatan/index', { params: p });  
    },

    create: function() {
        return axios.get('/api/sertifikatKegiatan/create');
    },

    store: function(form) {
        return axios.post('/api/sertifikatKegiatan/store', form);
    },

    storeNomorSertifikatKegiatan: function (id, form) {
        return axios.post('/api/sertifikatKegiatan/storeNomorSertifikatKegiatan/' + id, form);
    },

    edit: function(id) {
        return axios.get('/api/sertifikatKegiatan/edit/' + id);
    },
    editFormNomor: function (id) {
        return axios.get('/api/sertifikatKegiatan/editFormNomor/' + id);
    },

    update: function(id, form) {
        return axios.post('/api/sertifikatKegiatan/update/' + id, form);
    },

    destroy: function(id) {
        return axios.delete('/api/sertifikatKegiatan/' + id);
    },
    updateNomorSertifikatKegiatan: function (id, form) {
        return axios.post('/api/sertifikatKegiatan/updateNomorSertifikatKegiatan/' + id, form);
    },

    destroyNomorSertifikatKegiatan: function (id) {
        return axios.delete('/api/sertifikatKegiatan/destroyNomorSertifikatKegiatan/' + id);
    },

    uploadExcelPeserta: function (form) {
        return axios.post('/api/sertifikatKegiatan/uploadExcelPeserta', form);
      },

}