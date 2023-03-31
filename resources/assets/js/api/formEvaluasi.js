export default {

    index: function(p) {
        return axios.get('/api/formEvaluasi', { params: p });
    },

    indexSub: function(p) {
        return axios.get('/api/formEvaluasi/sub', { params: p });
    },

    get: function() {
        return axios.get('/api/formEvaluasi/get');
    },

    create: function() {
        return axios.get('/api/formEvaluasi/create');
    },

    store: function(form) {
        return axios.post('/api/formEvaluasi/store', form);
    },

    edit: function(id) {
        return axios.get('/api/formEvaluasi/edit/' + id);
    },

    update: function(id, form) {
        return axios.post('/api/formEvaluasi/update/' + id, form);
    },

    destroy: function(id) {
        return axios.delete('/api/formEvaluasi/' + id);
    },

}