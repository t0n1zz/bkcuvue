export default {

    index: function(p) {
        return axios.get('/api/asetTetapLokasi', { params: p });
    },

    get: function() {
        return axios.get('/api/asetTetapLokasi/get');
    },

    create: function() {
        return axios.get('/api/asetTetapLokasi/create');
    },

    store: function(form) {
        return axios.post('/api/asetTetapLokasi/store', form);
    },

    edit: function(id) {
        return axios.get('/api/asetTetapLokasi/edit/' + id);
    },

    update: function(id, form) {
        return axios.post('/api/asetTetapLokasi/update/' + id, form);
    },

    destroy: function(id) {
        return axios.delete('/api/asetTetapLokasi/' + id);
    },

    count: function() {
        return axios.get('/api/asetTetapLokasi/count');
    },
}