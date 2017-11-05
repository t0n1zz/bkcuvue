import * as types from '../types';

const state = {
	modalShow: false,
    modalSize:'',
    modalColor:'',
    modalData: '',
    modalState:'',
    modalTitle:'',
    modalButton:'',
    modalResultType:''
};

const getters = {
    [types.getModalShow]: state => {
        return state.modalShow;
    },
    [types.getModalState]: state => {
        return state.modalState;
    }
};

const mutations = {
    [types.mutateModalShow]: (state,payload) => {
        state.modalShow = payload;
    },
    [types.mutateModalState]: (state,payload) => {
        state.modalState = payload;
    }
};

const actions = {
    [types.actionModalShow]: ({ commit }, payload) => {
        commit(types.mutateModalShow, payload);
    }
};

export default {
	state,
	getters,
	mutations,
	actions
}