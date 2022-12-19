export default {

    index: function(p) {
        return axios.get('/api/asetTetap', { params: p });
    },

    indexHapus: function(p) {
        return axios.get('/api/asetTetap/asetDihapus/', { params: p });
    },

    indexSelesai: function(p) {
        return axios.get('/api/asetTetap/asetSelesai/', { params: p });
    },

    indexSub: function(p, id) {
        return axios.get('/api/asetTetap/indexSub/' + id, { params: p });
    },

    get: function(kode) {
        return axios.get('/api/asetTetap/get/' + kode);
    },

    generate: function(id) {
        return axios.get('/api/asetTetap/generate/' + id);
    },

    create: function() {
        return axios.get('/api/asetTetap/create');
    },

    store: function(form) {
        return axios.post('/api/asetTetap/store', form);
    },

    edit: function(id) {
        return axios.get('/api/asetTetap/edit/' + id);
    },

    update: function(id, form) {
        return axios.post('/api/asetTetap/update/' + id, form);
    },

    updateKondisi: function(id, form) {
        return axios.post('/api/asetTetap/updateKondisi/' + id, form);
    },

    updateLokasi: function(id, form) {
        return axios.post('/api/asetTetap/updateLokasi/' + id, form);
    },

    destroy: function(id) {
        return axios.delete('/api/asetTetap/' + id);
    },

    hapusDariLaporan: function(id) {
        return axios.post('/api/asetTetap/hapusDariLaporan/' + id);
    },

    count: function() {
        return axios.get('/api/asetTetap/count');
    },

    cariData: function(kode) {
        return axios.get('/api/asetTetap/cariData/' + kode);
    },
}