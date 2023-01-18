export default {

    index: function(p) {
        return axios.get('/api/kodeKegiatan', { params: p });
    },

    get: function() {
        return axios.get('/api/kodeKegiatan/get');
    },

    create: function() {
        return axios.get('/api/kodeKegiatan/create');
    },

    store: function(form) {
        return axios.post('/api/kodeKegiatan/store', form);
    },

    edit: function(id) {
        return axios.get('/api/kodeKegiatan/edit/' + id);
    },

    update: function(id, form) {
        return axios.post('/api/kodeKegiatan/update/' + id, form);
    },

    destroy: function(id) {
        return axios.delete('/api/kodeKegiatan/' + id);
    },

}