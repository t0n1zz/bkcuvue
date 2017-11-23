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
    modalExcelData: '',
    modalExcelFields: '',
    modalExcelMeta: '',
    modalExcelFilename: ''
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
    [types.getModalExcelData]: state => {
        return state.modalExcelData;
    },
    [types.getModalExcelFields]: state => {
        return state.modalExcelFields;
    },
    [types.getModalExcelMeta]: state => {
        return state.modalExcelMeta;
    },
    [types.getModalExcelFilename]: state => {
        return state.modalExcelFilename;
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
    },
    [types.mutateModalExcelData]: (state,payload) => {
        state.modalExcelData = payload;
    },
    [types.mutateModalExcelFields]: (state,payload) => {
        state.modalExcelFields = payload;
    },
    [types.mutateModalExcelMeta]: (state,payload) => {
        state.modalExcelMeta = payload;
    },
    [types.mutateModalExcelFilename]: (state,payload) => {
        state.modalExcelFilename = payload;
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