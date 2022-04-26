export default {

    index: function(p) {
        return axios.get('/api/sertifikatKegiatan', { params: p });
    },

    create: function() {
        return axios.get('/api/sertifikatKegiatan/create');
    },

    store: function(form) {
        return axios.post('/api/sertifikatKegiatan/store', form);
    },

    edit: function(id) {
        return axios.get('/api/sertifikatKegiatan/edit/' + id);
    },

    update: function(id, form) {
        return axios.post('/api/sertifikatKegiatan/update/' + id, form);
    },

    destroy: function(id) {
        return axios.delete('/api/sertifikatKegiatan/' + id);
    },

}