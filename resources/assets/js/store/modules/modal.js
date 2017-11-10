import * as types from '../types';

const state = {
	modalShow: false,
    modalSize:'',
    modalColor:'',
    modalState:'',
    modalTitle:'',
    modalContent:'',
    modalButton:'',
    modalData: '',
};

const getters = {
    [types.getModalShow]: state => {
        return state.modalShow;
    },
    [types.getModalState]: state => {
        return state.modalState;
    },
    [types.getModalSize]: state => {
        return state.modalSize;
    },
    [types.getModalColor]: state => {
        return state.modalColor;
    },
    [types.getModalTitle]: state => {
        return state.modalTitle;
    },
    [types.getModalContent]: state => {
        return state.modalContent;
    },
    [types.getModalButton]: state => {
        return state.modalButton;
    },
    [types.getModalData]: state => {
        return state.modalData;
    },
};

const mutations = {
    [types.mutateModalShow]: (state,payload) => {
        state.modalShow = payload;
    },
    [types.mutateModalState]: (state,payload) => {
        state.modalState = payload;
    },
    [types.mutateModalSize]: (state,payload) => {
        state.modalSize = payload;
    },
    [types.mutateModalColor]: (state,payload) => {
        state.modalColor = payload;
    },
    [types.mutateModalTitle]: (state,payload) => {
        state.modalTitle = payload;
    },
    [types.mutateModalContent]: (state,payload) => {
        state.modalContent = payload;
    },
    [types.mutateModalButton]: (state,payload) => {
        state.modalButton = payload;
    },
    [types.mutateModalData]: (state,payload) => {
        state.modalData = payload;
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