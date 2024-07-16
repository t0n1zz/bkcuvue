(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[54],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/datatable.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/datatable.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_cleave_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-cleave-component */ "./node_modules/vue-cleave-component/dist/vue-cleave.min.js");
/* harmony import */ var vue_cleave_component__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_cleave_component__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['columnData', 'itemDataStat', 'items'],
  components: {},
  data: function data() {
    return {};
  },
  methods: {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/datePicker.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/datePicker.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue2_datepicker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue2-datepicker */ "./node_modules/vue2-datepicker/index.esm.js");
/* harmony import */ var vue2_datepicker_index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue2-datepicker/index.css */ "./node_modules/vue2-datepicker/index.css");
/* harmony import */ var vue2_datepicker_index_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue2_datepicker_index_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vue2_datepicker_locale_id__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue2-datepicker/locale/id */ "./node_modules/vue2-datepicker/locale/id.js");
/* harmony import */ var vue2_datepicker_locale_id__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vue2_datepicker_locale_id__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['defaultDate'],
  components: {
    DatePicker: vue2_datepicker__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      time: '',
      dateVal: ''
    };
  },
  mounted: function mounted() {
    if (this.defaultDate == '') {
      var today = new Date();
      var date = today.getDate() + '-0' + (today.getMonth() + 1) + '-' + today.getFullYear();
      this.time = date;
      this.dateVal = moment__WEBPACK_IMPORTED_MODULE_3___default()(this.time, "DD-MM-YYYY").format("YYYY-MM-DD");
      this.$emit('dateSelected', this.dateVal);
    } else {
      this.time = moment__WEBPACK_IMPORTED_MODULE_3___default()(this.defaultDate, "YYYY-MM-DD").format("DD-MM-YYYY");
      this.$emit('dateSelected', this.defaultDate);
    }
  },
  watch: {
    defaultDate: function defaultDate(newVal, oldVal) {
      this.time = moment__WEBPACK_IMPORTED_MODULE_3___default()(this.defaultDate, "YYYY-MM-DD").format("DD-MM-YYYY");
    }
  },
  methods: {
    onChanged: function onChanged(event) {
      this.dateVal = moment__WEBPACK_IMPORTED_MODULE_3___default()(this.time, "DD-MM-YYYY").format("YYYY-MM-DD");
      this.$emit('dateSelected', this.dateVal);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/formInfo.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/formInfo.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  props: []
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/infoIcon.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/infoIcon.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    message: {
      "default": ''
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/wajibBadge.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/wajibBadge.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    message: {
      "default": ''
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/jalinanIuran/detail.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/views/jalinanIuran/detail.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_pageHeader_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/pageHeader.vue */ "./resources/assets/js/components/pageHeader.vue");
/* harmony import */ var _components_infoIcon_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/infoIcon.vue */ "./resources/assets/js/components/infoIcon.vue");
/* harmony import */ var _components_wajibBadge_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/wajibBadge.vue */ "./resources/assets/js/components/wajibBadge.vue");
/* harmony import */ var _components_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/modal */ "./resources/assets/js/components/modal.vue");
/* harmony import */ var _components_message_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/message.vue */ "./resources/assets/js/components/message.vue");
/* harmony import */ var _components_formButton_vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/formButton.vue */ "./resources/assets/js/components/formButton.vue");
/* harmony import */ var _components_formInfo_vue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/formInfo.vue */ "./resources/assets/js/components/formInfo.vue");
/* harmony import */ var _components_datatable_vue__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/datatable.vue */ "./resources/assets/js/components/datatable.vue");
/* harmony import */ var _components_datePicker_vue__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/datePicker.vue */ "./resources/assets/js/components/datePicker.vue");
/* harmony import */ var _components_checkValue_vue__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/checkValue.vue */ "./resources/assets/js/components/checkValue.vue");
/* harmony import */ var _tableAnggota_vue__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./tableAnggota.vue */ "./resources/assets/js/views/jalinanIuran/tableAnggota.vue");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//













/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    pageHeader: _components_pageHeader_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    appModal: _components_modal__WEBPACK_IMPORTED_MODULE_5__["default"],
    message: _components_message_vue__WEBPACK_IMPORTED_MODULE_6__["default"],
    formButton: _components_formButton_vue__WEBPACK_IMPORTED_MODULE_7__["default"],
    formInfo: _components_formInfo_vue__WEBPACK_IMPORTED_MODULE_8__["default"],
    dataTable: _components_datatable_vue__WEBPACK_IMPORTED_MODULE_9__["default"],
    infoIcon: _components_infoIcon_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    wajibBadge: _components_wajibBadge_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
    DatePicker: _components_datePicker_vue__WEBPACK_IMPORTED_MODULE_10__["default"],
    checkValue: _components_checkValue_vue__WEBPACK_IMPORTED_MODULE_11__["default"],
    tableAnggota: _tableAnggota_vue__WEBPACK_IMPORTED_MODULE_12__["default"]
  },
  data: function data() {
    return {
      title: 'Detail Setoran Solidaritas Jalinan',
      titleDesc: 'Detail iuran Jalinan',
      titleIcon: 'icon-stack2',
      level: 2,
      level2Title: 'Iuran Jalinan',
      kelas: 'jalinanIuran',
      sasaran: [],
      tempatData: '',
      idCu: '',
      periodeBulan: '',
      periodeTahun: '',
      itemTahun: [],
      tabName: 'iuran',
      anggotaMasukData: [],
      cancelState: 'methods',
      state: '',
      modalShow: false,
      modalState: '',
      modalTitle: '',
      modalColor: '',
      modalContent: '',
      modalSize: '',
      submited: false,
      confirmTitle: '',
      query: {
        order_column: "id",
        order_direction: "asc",
        filter_match: "and",
        limit: 10,
        page: 1
      }
    };
  },
  beforeRouteEnter: function beforeRouteEnter(to, from, next) {
    next(function (vm) {
      return vm.fetch();
    });
  },
  created: function created() {
    this.formStat == '';
    this.anggotaDataStat == '';
  },
  watch: {
    formStat: function formStat(value) {
      if (value == 'success') {
        if (this.currentUser.id_cu == 0) {
          if (this.form.status == 0) {
            this.confirmTitle = 'Konfirmasi Pembayaran';
          } else if (this.form.status == 1) {
            this.confirmTitle = 'Iuran Lunas';
          } else if (this.form.status == 2) {
            this.confirmTitle = 'Batal Lunas';
          }
        } else {
          if (this.form.status == 0) {
            this.confirmTitle = 'Konfirmasi Pembayaran';
          } else if (this.form.status == 1) {
            this.confirmTitle = 'Batal Pembayaran';
          }
        }
      }
    },
    updateStat: function updateStat(value) {
      this.modalShow = true;
      this.modalState = value;
      this.modalColor = '';

      if (value === "success") {
        this.modalTitle = this.updateResponse.message;
      } else {
        this.modalTitle = 'Oops terjadi kesalahan :(';
        this.modalContent = this.updateResponse;
      }
    }
  },
  methods: {
    fetch: function fetch() {
      this.$store.dispatch(this.kelas + '/edit', this.$route.params.id);
    },
    save: function save() {
      var _this = this;

      this.form.id_cu = this.idCu;
      this.state = '';
      this.$validator.validateAll('form').then(function (result) {
        if (result) {
          _this.$store.dispatch(_this.kelas + '/update', [_this.$route.params.id, _this.form]);

          _this.submited = false;
        } else {
          window.scrollTo(0, 0);
          _this.submited = true;
        }
      });
    },
    back: function back() {
      if (this.currentUser.id_cu == 0) {
        this.$router.push({
          name: this.kelas + 'Cu',
          params: {
            cu: 'semua'
          }
        });
      } else {
        this.$router.push({
          name: this.kelas + 'Cu',
          params: {
            cu: this.currentUser.id_cu
          }
        });
      }
    },
    changeTab: function changeTab(value) {
      this.tabName = value;
    },
    selectedRow: function selectedRow(item, index) {
      this.selectedItemCalon = item;
      this.selectedItemCalon.index = index;
    },
    selectedRow2: function selectedRow2(item, index) {
      this.selectedItemSuara = item;
      this.selectedItemSuara.index = index;
    },
    modalOpen: function modalOpen(state, isMobile, itemMobile) {
      this.modalShow = true;
      this.state = state;

      if (isMobile) {
        this.selectedItemCalon = itemMobile;
      }

      if (state == 'hapusCalon') {
        this.modalState = 'confirm-tutup';
        this.modalColor = '';
        this.modalTitle = 'Hapus Calon' + this.selectedItemCalon.name + ' ?';
        this.modalButton = 'Iya, Hapus';
        this.modalSize = '';
      } else if (state == 'ubahCalon') {
        this.modalState = 'normal1';
        this.modalColor = 'bg-primary';
        this.modalTitle = 'Ubah Calon';
        this.modalButton = 'Ok';
        this.modalSize = 'modal-lg';
        this.formCalonMode = 'edit';
      } else if (state == 'tambahCalon') {
        this.modalState = 'normal1';
        this.modalColor = 'bg-primary';
        this.modalTitle = 'Tambah Calon';
        this.modalButton = 'Ok';
        this.modalSize = 'modal-lg';
        this.formCalonMode = 'create';
      }
    },
    modalConfirmOk: function modalConfirmOk() {
      this.modalShow = false;

      if (this.state == 'hapusCalon') {
        lodash__WEBPACK_IMPORTED_MODULE_1___default.a.remove(this.itemDataCalon, {
          index: this.selectedItemCalon.index
        });

        this.selectedItemCalon = {};
      }
    },
    modalTutup: function modalTutup() {
      if (this.updateStat == 'success' && this.state == '') {
        this.$store.dispatch(this.kelas + '/resetUpdateStat');
        this.back();
      }

      this.modalShow = false;
    },
    modalBackgroundClick: function modalBackgroundClick() {
      if (this.modalState === 'success') {
        this.modalTutup;
      } else if (this.modalState === 'loading') {// do nothing
      } else {
        this.modalShow = false;
      }
    },
    momentYear: function momentYear() {
      return moment().year();
    }
  },
  computed: _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('auth', {
    currentUser: 'currentUser'
  })), Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('cu', {
    modelCu: 'headerDataS',
    modelCuStat: 'headerDataStatS'
  })), Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('jalinanIuran', {
    form: 'data',
    formStat: 'dataStat',
    rules: 'rules',
    options: 'options',
    updateResponse: 'update',
    updateStat: 'updateStat'
  })), Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('anggotaCu', {
    anggotaData: 'dataS',
    anggotaDataStat: 'dataStatS',
    anggotaKeluarData: 'dataS2',
    anggotaKeluarDataStat: 'dataStatS2'
  }))
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/jalinanIuran/tableAnggota.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/views/jalinanIuran/tableAnggota.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _components_datatable_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/datatable.vue */ "./resources/assets/js/components/datatable.vue");
/* harmony import */ var _components_checkValue_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/checkValue.vue */ "./resources/assets/js/components/checkValue.vue");
/* harmony import */ var vue_json_excel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue-json-excel */ "./node_modules/vue-json-excel/dist/vue-json-excel.esm.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    dataTable: _components_datatable_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    checkValue: _components_checkValue_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    jsonExcel: vue_json_excel__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  props: ['kelas', 'title', 'deskripsi', 'produkData', 'cu', 'lokasi'],
  data: function data() {
    return {
      selectedItem: [],
      plafon: 0,
      query: {
        order_column: "id",
        order_direction: "asc",
        filter_match: "and",
        limit: 10,
        page: 1
      },
      excelDownloadUrl: '',
      columnData: [{
        title: 'No.',
        name: 'No'
      }, {
        title: 'No. BA',
        name: 'no_ba',
        tipe: 'string',
        sort: false,
        hide: false,
        disable: false,
        filter: true
      }, {
        title: 'No. KTP / NIK',
        name: 'name',
        tipe: 'string',
        sort: true,
        hide: false,
        disable: false,
        filter: true
      }, {
        title: 'Nama',
        name: 'name',
        tipe: 'string',
        sort: true,
        hide: false,
        disable: false,
        filter: true,
        filterDefault: true
      }, {
        title: 'Tgl. Lahir',
        name: 'tanggal_lahir',
        tipe: 'string',
        sort: true,
        hide: false,
        disable: false,
        filter: true
      }, {
        title: 'Umur Masuk',
        name: 'tanggal_masuk',
        tipe: 'string',
        sort: true,
        hide: false,
        disable: false,
        filter: true
      }, {
        title: 'Umur Sekarang',
        name: 'tanggal_lahir',
        tipe: 'string',
        sort: true,
        hide: false,
        disable: false,
        filter: true
      }, {
        title: 'Umur Cair',
        name: 'tanggal_cair',
        tipe: 'string',
        sort: true,
        hide: false,
        disable: false,
        filter: true
      }],
      excel: {
        fields: {},
        data: [],
        meta: [[{
          "key": "charset",
          "value": "utf-8"
        }]]
      }
    };
  },
  created: function created() {
    var produk;

    var _iterator = _createForOfIteratorHelper(this.produkData),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        produk = _step.value;

        if (produk.produk) {
          if (produk.produk.jalinan == 1) {
            if (this.lokasi == 3 || this.lokasi == 4 || this.lokasi == 5 || this.lokasi == 6 || this.lokasi == 7 || this.lokasi == 8 || this.lokasi == 9 || this.lokasi == 10 || this.lokasi == 11) {
              if (produk.produk.tipe == 'Simpanan Wajib' || produk.produk.tipe == 'Simpanan Pokok' || produk.produk.tipe == 'Simpanan Non Saham') {
                this.columnData.push({
                  title: produk.produk.name,
                  name: 'X' + produk.produk_cu_id,
                  id: 'X' + produk.produk_cu_id,
                  tipe: 'numeric'
                });
              }
            } else {
              if (produk.produk.tipe == 'Pinjaman Kapitalisasi' || produk.produk.tipe == 'Pinjaman Umum' || produk.produk.tipe == 'Pinjaman Produktif') {
                this.columnData.push({
                  title: produk.produk.name,
                  name: 'X' + produk.produk_cu_id,
                  id: 'X' + produk.produk_cu_id,
                  tipe: 'numeric'
                });
              }
            }
          }
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    this.columnData.push({
      title: 'Total',
      name: 'total',
      tipe: 'numeric'
    });
    this.columnData.push({
      title: 'Plafon',
      name: 'plafon',
      tipe: 'numeric'
    });
    this.columnData.push({
      title: 'Pengurang',
      name: 'pengurang',
      tipe: 'numeric'
    });
    this.fetch(this.query);
  },
  watch: {
    itemDataStat: function itemDataStat(value) {
      if (value == 'success') {
        this.fieldExcel();
      }
    }
  },
  methods: {
    fetch: function fetch(params) {
      this.$store.dispatch(this.kelas + '/indexAnggota', [params, this.$route.params.id, this.cu, this.lokasi]);
    },
    selectedRow: function selectedRow(item) {
      this.selectedItem = item;
    },
    fieldExcel: function fieldExcel() {
      var vm = this;
      vm.excel.fields = {};
      vm.columnData.forEach(function (column) {
        if (!column.hide && !column.disable && column.tipe) {
          if (column.excelName) {
            vm.excel.fields[column.title] = column.excelName;
          } else {
            vm.excel.fields[column.title] = column.name;
          }
        }
      });
      vm.excel.data = vm.itemData;
    }
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('jalinanIuran', {
    itemData: 'dataS2',
    itemDataStat: 'dataStatS2'
  }))
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/datePicker.vue?vue&type=style&index=0&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/datePicker.vue?vue&type=style&index=0&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.mx-datepicker-popup {\r\n    z-index: 99999;\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/datePicker.vue?vue&type=style&index=0&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/datePicker.vue?vue&type=style&index=0&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./datePicker.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/datePicker.vue?vue&type=style&index=0&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/datatable.vue?vue&type=template&id=80417746&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/datatable.vue?vue&type=template&id=80417746& ***!
  \*******************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "table-responsive table-scrollable",
      staticStyle: { "max-height": "33rem" },
    },
    [
      _c("table", { staticClass: "table table-striped" }, [
        _c("thead", { staticClass: "bg-primary" }, [
          _c(
            "tr",
            { staticClass: "text-nowrap" },
            _vm._l(_vm.columnData, function (item, index) {
              return _c("th", { key: index }, [
                _c("span", { domProps: { innerHTML: _vm._s(item.title) } }),
              ])
            }),
            0
          ),
        ]),
        _vm._v(" "),
        _vm.itemDataStat === "loading"
          ? _c("tbody", [
              _c("tr", [
                _c("td", { attrs: { colspan: _vm.columnData.length } }, [
                  _vm._m(0),
                ]),
              ]),
            ])
          : _vm.itemDataStat === "success"
          ? _c(
              "tbody",
              [
                _vm._l(_vm.items, function (item, index) {
                  return _vm._t("item-desktop", null, {
                    item: item,
                    index: index,
                  })
                }),
                _vm._v(" "),
                _vm.items && _vm.items.length == 0
                  ? _c("tr", [
                      _c("td", { attrs: { colspan: _vm.columnData.length } }, [
                        _vm._v("Belum terdapat data..."),
                      ]),
                    ])
                  : _vm._e(),
              ],
              2
            )
          : _vm.itemDataStat === "fail"
          ? _c("tbody", [
              _c("tr", [
                _c("td", { attrs: { colspan: _vm.columnData.length } }, [
                  _vm._v(
                    "\n\t\t\t\t\tOops.. Terjadi kesalahan, silahkan coba lagi.\n\t\t\t\t"
                  ),
                ]),
              ]),
            ])
          : _c("tbody", [
              _c("tr", [
                _c("td", { attrs: { colspan: _vm.columnData.length } }, [
                  _vm._v("-"),
                ]),
              ]),
            ]),
      ]),
    ]
  )
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "progress" }, [
      _c(
        "div",
        {
          staticClass:
            "progress-bar progress-bar-info progress-bar-striped progress-bar-animated",
          staticStyle: { width: "100%" },
        },
        [_c("span", { staticClass: "sr-only" }, [_vm._v("100% Complete")])]
      ),
    ])
  },
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/datePicker.vue?vue&type=template&id=0e041d33&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/datePicker.vue?vue&type=template&id=0e041d33& ***!
  \********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("DatePicker", {
    staticClass: "w-100",
    attrs: {
      format: "DD-MM-YYYY",
      "value-type": "format",
      placeholder: "Pilih Tanggal",
      editable: true,
    },
    on: { change: _vm.onChanged },
    model: {
      value: _vm.time,
      callback: function ($$v) {
        _vm.time = $$v
      },
      expression: "time",
    },
  })
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/formInfo.vue?vue&type=template&id=77f7efa9&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/formInfo.vue?vue&type=template&id=77f7efa9& ***!
  \******************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm._m(0)
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _c("div", { staticClass: "alert bg-info alert-styled-left" }, [
        _c("h6", [
          _vm._v(
            "Pastikan data yang dimasukkan sudah benar sebelum menyimpan."
          ),
        ]),
      ]),
    ])
  },
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/infoIcon.vue?vue&type=template&id=78a8b7de&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/infoIcon.vue?vue&type=template&id=78a8b7de& ***!
  \******************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticStyle: { display: "inline-block" } }, [
    _c("i", {
      directives: [
        {
          name: "tooltip",
          rawName: "v-tooltip",
          value: _vm.message,
          expression: "message",
        },
      ],
      staticClass: "icon-info22 d-none d-sm-block",
    }),
    _vm._v(" "),
    _c("small", { staticClass: "text-muted d-block d-sm-none" }, [
      _c("i", [_vm._v(_vm._s(_vm.message))]),
    ]),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/wajibBadge.vue?vue&type=template&id=2f7dfb81&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/wajibBadge.vue?vue&type=template&id=2f7dfb81& ***!
  \********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm._m(0)
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticStyle: { display: "inline-block" } }, [
      _c(
        "span",
        { staticClass: "badge bg-danger-400 align-self-center ml-auto" },
        [_vm._v("Wajib diisi")]
      ),
    ])
  },
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/jalinanIuran/detail.vue?vue&type=template&id=e682995e&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/views/jalinanIuran/detail.vue?vue&type=template&id=e682995e& ***!
  \************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("page-header", {
        attrs: {
          title: _vm.title,
          titleDesc: _vm.titleDesc,
          titleIcon: _vm.titleIcon,
          level: _vm.level,
          level2Title: _vm.level2Title,
          level2Route: _vm.kelas,
        },
        on: {
          level2Back: function ($event) {
            return _vm.back()
          },
        },
      }),
      _vm._v(" "),
      _c("div", { staticClass: "page-content pt-0" }, [
        _c("div", { staticClass: "content-wrapper" }, [
          _c(
            "div",
            { staticClass: "content" },
            [
              _vm.errors.any("form") && _vm.submited
                ? _c("message", {
                    attrs: {
                      title: "Oops terjadi kesalahan",
                      errorItem: _vm.errors.items,
                    },
                  })
                : _vm._e(),
              _vm._v(" "),
              _vm.formStat == "success"
                ? _c(
                    "div",
                    [
                      _c("div", { staticClass: "card card-body" }, [
                        _c("div", { staticClass: "input-group" }, [
                          _vm._m(0),
                          _vm._v(" "),
                          _c(
                            "select",
                            {
                              staticClass: "form-control",
                              attrs: { "data-width": "100%" },
                              on: {
                                change: function ($event) {
                                  return _vm.changeTab($event.target.value)
                                },
                              },
                            },
                            [
                              _c("option", { attrs: { value: "iuran" } }, [
                                _vm._v("Setoran Solidaritas"),
                              ]),
                              _vm._v(" "),
                              _c("option", { attrs: { value: "sheet3" } }, [
                                _vm._v("Simp > 5JT"),
                              ]),
                              _vm._v(" "),
                              _c("option", { attrs: { value: "sheet4" } }, [
                                _vm._v("Simp > 50JT | 1 s.d. 70 Thn"),
                              ]),
                              _vm._v(" "),
                              _c("option", { attrs: { value: "sheet5" } }, [
                                _vm._v("Simp > 10JT | 60 s.d. 70 Thn"),
                              ]),
                              _vm._v(" "),
                              _c("option", { attrs: { value: "sheet6" } }, [
                                _vm._v("Simp > 70 Thn | Masuk < 60 Thn"),
                              ]),
                              _vm._v(" "),
                              _c("option", { attrs: { value: "sheet7" } }, [
                                _vm._v("Simp > 70 Thn | Masuk 60 s.d. 70 Thn"),
                              ]),
                              _vm._v(" "),
                              _c("option", { attrs: { value: "sheet8" } }, [
                                _vm._v("Masuk > 70 Thn"),
                              ]),
                              _vm._v(" "),
                              _c("option", { attrs: { value: "sheet9" } }, [
                                _vm._v("Simp Kap < 30 Hari"),
                              ]),
                              _vm._v(" "),
                              _c("option", { attrs: { value: "sheet10" } }, [
                                _vm._v("Simp Kap Lalai 3 Hari"),
                              ]),
                              _vm._v(" "),
                              _c("option", { attrs: { value: "sheet11" } }, [
                                _vm._v("Simp Lembaga"),
                              ]),
                              _vm._v(" "),
                              _c("option", { attrs: { value: "sheet12" } }, [
                                _vm._v("Pinj Non Pro > 150 JT"),
                              ]),
                              _vm._v(" "),
                              _c("option", { attrs: { value: "sheet13" } }, [
                                _vm._v("Pinj > 50 JT"),
                              ]),
                              _vm._v(" "),
                              _c("option", { attrs: { value: "sheet14" } }, [
                                _vm._v("Pinj Kap > 25 JT"),
                              ]),
                              _vm._v(" "),
                              _c("option", { attrs: { value: "sheet15" } }, [
                                _vm._v("Pinj Agt > 70 JT"),
                              ]),
                              _vm._v(" "),
                              _c("option", { attrs: { value: "sheet16" } }, [
                                _vm._v("Pinj Kap < 30 Hari"),
                              ]),
                              _vm._v(" "),
                              _c("option", { attrs: { value: "sheet17" } }, [
                                _vm._v("Pinj Macet > 6 Bln"),
                              ]),
                              _vm._v(" "),
                              _c("option", { attrs: { value: "sheet18" } }, [
                                _vm._v("Pinj Kap Lalai > 3 Bln"),
                              ]),
                              _vm._v(" "),
                              _c("option", { attrs: { value: "sheet21" } }, [
                                _vm._v("Pinj Pro > 300 JT"),
                              ]),
                              _vm._v(" "),
                              _c("option", { attrs: { value: "sheet22" } }, [
                                _vm._v("Pinj Ganda > 300 JT"),
                              ]),
                              _vm._v(" "),
                              _c("option", { attrs: { value: "sheet23" } }, [
                                _vm._v("Piut Kap > 5 Thn"),
                              ]),
                              _vm._v(" "),
                              _c("option", { attrs: { value: "sheet24" } }, [
                                _vm._v("Piut Umum > 15 Thn"),
                              ]),
                              _vm._v(" "),
                              _c("option", { attrs: { value: "sheet25" } }, [
                                _vm._v("Pinj Lain-Lain"),
                              ]),
                            ]
                          ),
                        ]),
                      ]),
                      _vm._v(" "),
                      _c(
                        "transition",
                        {
                          attrs: {
                            "enter-active-class": "animated fadeIn",
                            mode: "out-in",
                          },
                        },
                        [
                          _c(
                            "div",
                            {
                              directives: [
                                {
                                  name: "show",
                                  rawName: "v-show",
                                  value: _vm.tabName == "iuran",
                                  expression: "tabName == 'iuran'",
                                },
                              ],
                            },
                            [
                              _c(
                                "form",
                                {
                                  attrs: { "data-vv-scope": "form" },
                                  on: {
                                    submit: function ($event) {
                                      $event.preventDefault()
                                      return _vm.save.apply(null, arguments)
                                    },
                                  },
                                },
                                [
                                  _c("div", { staticClass: "row" }, [
                                    _c("div", { staticClass: "col-lg-6" }, [
                                      _c("div", { staticClass: "card" }, [
                                        _c(
                                          "div",
                                          {
                                            staticClass: "card-header bg-white",
                                          },
                                          [
                                            _c(
                                              "h5",
                                              { staticClass: "card-title" },
                                              [_vm._v("Santunan Solidaritas")]
                                            ),
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "div",
                                          { staticClass: "card-body" },
                                          [
                                            _c("div", { staticClass: "card" }, [
                                              _c(
                                                "div",
                                                { staticClass: "card-header" },
                                                [
                                                  _c("b", [
                                                    _vm._v(
                                                      "A. Simpanan yang disolidaritaskan"
                                                    ),
                                                  ]),
                                                ]
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "div",
                                                {
                                                  staticClass:
                                                    "table-responsive",
                                                },
                                                [
                                                  _c(
                                                    "table",
                                                    { staticClass: "table" },
                                                    [
                                                      _c(
                                                        "tbody",
                                                        [
                                                          _vm._l(
                                                            _vm.form.produk,
                                                            function (
                                                              produk,
                                                              index
                                                            ) {
                                                              return produk.produk &&
                                                                (produk.produk
                                                                  .tipe ==
                                                                  "Simpanan Pokok" ||
                                                                  produk.produk
                                                                    .tipe ==
                                                                    "Simpanan Wajib" ||
                                                                  produk.produk
                                                                    .tipe ==
                                                                    "Simpanan Non Saham")
                                                                ? _c("tr", [
                                                                    _c("th", [
                                                                      _vm._v(
                                                                        _vm._s(
                                                                          produk
                                                                            .produk
                                                                            .name
                                                                        )
                                                                      ),
                                                                    ]),
                                                                    _vm._v(" "),
                                                                    _c(
                                                                      "td",
                                                                      {
                                                                        staticClass:
                                                                          "text-right",
                                                                      },
                                                                      [
                                                                        _c(
                                                                          "check-value",
                                                                          {
                                                                            attrs:
                                                                              {
                                                                                value:
                                                                                  produk.saldo,
                                                                                valueType:
                                                                                  "currency",
                                                                              },
                                                                          }
                                                                        ),
                                                                      ],
                                                                      1
                                                                    ),
                                                                  ])
                                                                : _vm._e()
                                                            }
                                                          ),
                                                          _vm._v(" "),
                                                          _c("tr", [
                                                            _c("th", [
                                                              _vm._v(
                                                                "Jumlah Simpanan yang disolidaritaskan"
                                                              ),
                                                            ]),
                                                            _vm._v(" "),
                                                            _c(
                                                              "td",
                                                              {
                                                                staticClass:
                                                                  "text-right",
                                                              },
                                                              [
                                                                _c(
                                                                  "check-value",
                                                                  {
                                                                    attrs: {
                                                                      value:
                                                                        _vm.form
                                                                          .total_simpanan,
                                                                      valueType:
                                                                        "currency",
                                                                    },
                                                                  }
                                                                ),
                                                              ],
                                                              1
                                                            ),
                                                          ]),
                                                        ],
                                                        2
                                                      ),
                                                    ]
                                                  ),
                                                ]
                                              ),
                                            ]),
                                            _vm._v(" "),
                                            _c("div", { staticClass: "card" }, [
                                              _c(
                                                "div",
                                                { staticClass: "card-header" },
                                                [
                                                  _c("b", [
                                                    _vm._v(
                                                      "B. Simpanan sebagai pengurang"
                                                    ),
                                                  ]),
                                                ]
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "div",
                                                {
                                                  staticClass:
                                                    "table-responsive",
                                                },
                                                [
                                                  _c(
                                                    "table",
                                                    { staticClass: "table" },
                                                    [
                                                      _c("tbody", [
                                                        _c("tr", [
                                                          _c("th", [
                                                            _vm._v(
                                                              "1. Simpanan usia 0 s.d 1 thn diatas plafon (5.000.000)"
                                                            ),
                                                          ]),
                                                          _vm._v(" "),
                                                          _c(
                                                            "td",
                                                            {
                                                              staticClass:
                                                                "text-right",
                                                            },
                                                            [
                                                              _c(
                                                                "check-value",
                                                                {
                                                                  attrs: {
                                                                    value:
                                                                      _vm.form
                                                                        .kurang_sheet_3,
                                                                    valueType:
                                                                      "currency",
                                                                  },
                                                                }
                                                              ),
                                                            ],
                                                            1
                                                          ),
                                                        ]),
                                                        _vm._v(" "),
                                                        _c("tr", [
                                                          _c("th", [
                                                            _vm._v(
                                                              "2. Simpanan usia > 1 s.d 70 thn diatas plafon (50.000.000)"
                                                            ),
                                                          ]),
                                                          _vm._v(" "),
                                                          _c(
                                                            "td",
                                                            {
                                                              staticClass:
                                                                "text-right",
                                                            },
                                                            [
                                                              _c(
                                                                "check-value",
                                                                {
                                                                  attrs: {
                                                                    value:
                                                                      _vm.form
                                                                        .kurang_sheet_4,
                                                                    valueType:
                                                                      "currency",
                                                                  },
                                                                }
                                                              ),
                                                            ],
                                                            1
                                                          ),
                                                        ]),
                                                        _vm._v(" "),
                                                        _c("tr", [
                                                          _c("th", [
                                                            _vm._v(
                                                              "3. Simpanan usia masuk 60 s.d 70 thn diatas plafon (10.000.000)"
                                                            ),
                                                          ]),
                                                          _vm._v(" "),
                                                          _c(
                                                            "td",
                                                            {
                                                              staticClass:
                                                                "text-right",
                                                            },
                                                            [
                                                              _c(
                                                                "check-value",
                                                                {
                                                                  attrs: {
                                                                    value:
                                                                      _vm.form
                                                                        .kurang_sheet_5,
                                                                    valueType:
                                                                      "currency",
                                                                  },
                                                                }
                                                              ),
                                                            ],
                                                            1
                                                          ),
                                                        ]),
                                                        _vm._v(" "),
                                                        _c("tr", [
                                                          _c("th", [
                                                            _vm._v(
                                                              "4. Pertambahan simpanan usia diatas  70 thn - yang menjadi anggota CU pada usia di bawah 60 tahun (Maks. 50 juta)"
                                                            ),
                                                          ]),
                                                          _vm._v(" "),
                                                          _c(
                                                            "td",
                                                            {
                                                              staticClass:
                                                                "text-right",
                                                            },
                                                            [
                                                              _c(
                                                                "check-value",
                                                                {
                                                                  attrs: {
                                                                    value:
                                                                      _vm.form
                                                                        .kurang_sheet_6,
                                                                    valueType:
                                                                      "currency",
                                                                  },
                                                                }
                                                              ),
                                                            ],
                                                            1
                                                          ),
                                                        ]),
                                                        _vm._v(" "),
                                                        _c("tr", [
                                                          _c("th", [
                                                            _vm._v(
                                                              "5. Pertambahan simpanan usia diatas  70 thn - yang menjadi anggota CU pada usia 60 s.d 70 tahun (Maks. 10 juta)"
                                                            ),
                                                          ]),
                                                          _vm._v(" "),
                                                          _c(
                                                            "td",
                                                            {
                                                              staticClass:
                                                                "text-right",
                                                            },
                                                            [
                                                              _c(
                                                                "check-value",
                                                                {
                                                                  attrs: {
                                                                    value:
                                                                      _vm.form
                                                                        .kurang_sheet_7,
                                                                    valueType:
                                                                      "currency",
                                                                  },
                                                                }
                                                              ),
                                                            ],
                                                            1
                                                          ),
                                                        ]),
                                                        _vm._v(" "),
                                                        _c("tr", [
                                                          _c("th", [
                                                            _vm._v(
                                                              "6. Pertambahan simpanan usia diatas  70 thn - Anggota masuk usia diatas 70 tahun"
                                                            ),
                                                          ]),
                                                          _vm._v(" "),
                                                          _c(
                                                            "td",
                                                            {
                                                              staticClass:
                                                                "text-right",
                                                            },
                                                            [
                                                              _c(
                                                                "check-value",
                                                                {
                                                                  attrs: {
                                                                    value:
                                                                      _vm.form
                                                                        .kurang_sheet_8,
                                                                    valueType:
                                                                      "currency",
                                                                  },
                                                                }
                                                              ),
                                                            ],
                                                            1
                                                          ),
                                                        ]),
                                                        _vm._v(" "),
                                                        _c("tr", [
                                                          _c("th", [
                                                            _vm._v(
                                                              "7. Simpanan Kapitalisasi anggota baru  < 30 hari sejak menjadi anggota"
                                                            ),
                                                          ]),
                                                          _vm._v(" "),
                                                          _c(
                                                            "td",
                                                            {
                                                              staticClass:
                                                                "text-right",
                                                            },
                                                            [
                                                              _c(
                                                                "check-value",
                                                                {
                                                                  attrs: {
                                                                    value:
                                                                      _vm.form
                                                                        .kurang_sheet_9,
                                                                    valueType:
                                                                      "currency",
                                                                  },
                                                                }
                                                              ),
                                                            ],
                                                            1
                                                          ),
                                                        ]),
                                                        _vm._v(" "),
                                                        _c("tr", [
                                                          _c("th", [
                                                            _vm._v(
                                                              "8. Simpanan kapitalisasi  yang piutangnya tidak pernah diangsur 3 bln berturut-turut atau lebih"
                                                            ),
                                                          ]),
                                                          _vm._v(" "),
                                                          _c(
                                                            "td",
                                                            {
                                                              staticClass:
                                                                "text-right",
                                                            },
                                                            [
                                                              _c(
                                                                "check-value",
                                                                {
                                                                  attrs: {
                                                                    value:
                                                                      _vm.form
                                                                        .kurang_sheet_10,
                                                                    valueType:
                                                                      "currency",
                                                                  },
                                                                }
                                                              ),
                                                            ],
                                                            1
                                                          ),
                                                        ]),
                                                        _vm._v(" "),
                                                        _c("tr", [
                                                          _c("th", [
                                                            _vm._v(
                                                              "9. Simpanan lembaga yang diatasnamakan lembaga atau perorangan"
                                                            ),
                                                          ]),
                                                          _vm._v(" "),
                                                          _c(
                                                            "td",
                                                            {
                                                              staticClass:
                                                                "text-right",
                                                            },
                                                            [
                                                              _c(
                                                                "check-value",
                                                                {
                                                                  attrs: {
                                                                    value:
                                                                      _vm.form
                                                                        .kurang_sheet_11,
                                                                    valueType:
                                                                      "currency",
                                                                  },
                                                                }
                                                              ),
                                                            ],
                                                            1
                                                          ),
                                                        ]),
                                                        _vm._v(" "),
                                                        _c("tr", [
                                                          _c("th", [
                                                            _vm._v(
                                                              "Jumlah Simpanan sebagai pengurang"
                                                            ),
                                                          ]),
                                                          _vm._v(" "),
                                                          _c(
                                                            "td",
                                                            {
                                                              staticClass:
                                                                "text-right",
                                                            },
                                                            [
                                                              _c(
                                                                "check-value",
                                                                {
                                                                  attrs: {
                                                                    value:
                                                                      _vm.form
                                                                        .total_simpanan_kurang,
                                                                    valueType:
                                                                      "currency",
                                                                  },
                                                                }
                                                              ),
                                                            ],
                                                            1
                                                          ),
                                                        ]),
                                                      ]),
                                                    ]
                                                  ),
                                                ]
                                              ),
                                            ]),
                                            _vm._v(" "),
                                            _c("div", { staticClass: "card" }, [
                                              _c(
                                                "div",
                                                { staticClass: "card-header" },
                                                [
                                                  _c("b", [
                                                    _vm._v(
                                                      "C. Simpanan Yang Disolidaritaskan"
                                                    ),
                                                  ]),
                                                ]
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "div",
                                                {
                                                  staticClass:
                                                    "table-responsive",
                                                },
                                                [
                                                  _c(
                                                    "table",
                                                    { staticClass: "table" },
                                                    [
                                                      _c("tbody", [
                                                        _c("tr", [
                                                          _c("th", [
                                                            _vm._v("A - B"),
                                                          ]),
                                                          _vm._v(" "),
                                                          _c(
                                                            "td",
                                                            {
                                                              staticClass:
                                                                "text-right",
                                                            },
                                                            [
                                                              _c(
                                                                "check-value",
                                                                {
                                                                  attrs: {
                                                                    value:
                                                                      _vm.form
                                                                        .total_simpanan -
                                                                      _vm.form
                                                                        .total_simpanan_kurang,
                                                                    valueType:
                                                                      "currency",
                                                                  },
                                                                }
                                                              ),
                                                            ],
                                                            1
                                                          ),
                                                        ]),
                                                      ]),
                                                    ]
                                                  ),
                                                ]
                                              ),
                                            ]),
                                            _vm._v(" "),
                                            _c("div", { staticClass: "card" }, [
                                              _c(
                                                "div",
                                                { staticClass: "card-header" },
                                                [_c("b", [_vm._v("D. Iuran")])]
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "div",
                                                {
                                                  staticClass:
                                                    "table-responsive",
                                                },
                                                [
                                                  _c(
                                                    "table",
                                                    { staticClass: "table" },
                                                    [
                                                      _c("tbody", [
                                                        _c("tr", [
                                                          _c("th", [
                                                            _vm._v(
                                                              "Iuran Tunas"
                                                            ),
                                                          ]),
                                                          _vm._v(" "),
                                                          _c(
                                                            "td",
                                                            {
                                                              staticClass:
                                                                "text-right",
                                                            },
                                                            [
                                                              _c(
                                                                "check-value",
                                                                {
                                                                  attrs: {
                                                                    value:
                                                                      ((_vm.form
                                                                        .total_simpanan -
                                                                        _vm.form
                                                                          .total_simpanan_kurang) *
                                                                        0.55) /
                                                                      1000,
                                                                    valueType:
                                                                      "currency",
                                                                  },
                                                                }
                                                              ),
                                                            ],
                                                            1
                                                          ),
                                                        ]),
                                                        _vm._v(" "),
                                                        _c("tr", [
                                                          _c("th", [
                                                            _vm._v(
                                                              "Pembulatan Setoran Solidaritas Tunas"
                                                            ),
                                                          ]),
                                                          _vm._v(" "),
                                                          _c(
                                                            "td",
                                                            {
                                                              staticClass:
                                                                "text-right",
                                                            },
                                                            [
                                                              _c(
                                                                "check-value",
                                                                {
                                                                  attrs: {
                                                                    value:
                                                                      Math.round(
                                                                        ((_vm
                                                                          .form
                                                                          .total_simpanan -
                                                                          _vm
                                                                            .form
                                                                            .total_simpanan_kurang) *
                                                                          0.55) /
                                                                          1000 /
                                                                          50
                                                                      ) * 50,
                                                                    valueType:
                                                                      "currency",
                                                                  },
                                                                }
                                                              ),
                                                            ],
                                                            1
                                                          ),
                                                        ]),
                                                      ]),
                                                    ]
                                                  ),
                                                ]
                                              ),
                                            ]),
                                          ]
                                        ),
                                      ]),
                                    ]),
                                    _vm._v(" "),
                                    _c("div", { staticClass: "col-lg-6" }, [
                                      _c("div", { staticClass: "card" }, [
                                        _c(
                                          "div",
                                          {
                                            staticClass: "card-header bg-white",
                                          },
                                          [
                                            _c(
                                              "h5",
                                              { staticClass: "card-title" },
                                              [
                                                _vm._v(
                                                  "Solidaritas Piutang Anggota"
                                                ),
                                              ]
                                            ),
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "div",
                                          { staticClass: "card-body" },
                                          [
                                            _c("div", { staticClass: "card" }, [
                                              _c(
                                                "div",
                                                { staticClass: "card-header" },
                                                [
                                                  _c("b", [
                                                    _vm._v(
                                                      "A. Piutang yang disolidaritaskan"
                                                    ),
                                                  ]),
                                                ]
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "div",
                                                {
                                                  staticClass:
                                                    "table-responsive",
                                                },
                                                [
                                                  _c(
                                                    "table",
                                                    { staticClass: "table" },
                                                    [
                                                      _c(
                                                        "tbody",
                                                        [
                                                          _vm._l(
                                                            _vm.form.produk,
                                                            function (
                                                              produk,
                                                              index
                                                            ) {
                                                              return produk.produk &&
                                                                (produk.produk
                                                                  .tipe ==
                                                                  "Pinjaman Kapitalisasi" ||
                                                                  produk.produk
                                                                    .tipe ==
                                                                    "Pinjaman Umum" ||
                                                                  produk.produk
                                                                    .tipe ==
                                                                    "Pinjaman Produktif")
                                                                ? _c(
                                                                    "tr",
                                                                    {
                                                                      key: index,
                                                                    },
                                                                    [
                                                                      _c("th", [
                                                                        _vm._v(
                                                                          _vm._s(
                                                                            produk
                                                                              .produk
                                                                              .name
                                                                          )
                                                                        ),
                                                                      ]),
                                                                      _vm._v(
                                                                        " "
                                                                      ),
                                                                      _c(
                                                                        "td",
                                                                        {
                                                                          staticClass:
                                                                            "text-right",
                                                                        },
                                                                        [
                                                                          _c(
                                                                            "check-value",
                                                                            {
                                                                              attrs:
                                                                                {
                                                                                  value:
                                                                                    produk.saldo,
                                                                                  valueType:
                                                                                    "currency",
                                                                                },
                                                                            }
                                                                          ),
                                                                        ],
                                                                        1
                                                                      ),
                                                                    ]
                                                                  )
                                                                : _vm._e()
                                                            }
                                                          ),
                                                          _vm._v(" "),
                                                          _c("tr", [
                                                            _c("th", [
                                                              _vm._v(
                                                                "Jumlah Piutang yang disolidaritaskan"
                                                              ),
                                                            ]),
                                                            _vm._v(" "),
                                                            _c(
                                                              "td",
                                                              {
                                                                staticClass:
                                                                  "text-right",
                                                              },
                                                              [
                                                                _c(
                                                                  "check-value",
                                                                  {
                                                                    attrs: {
                                                                      value:
                                                                        _vm.form
                                                                          .total_pinjaman,
                                                                      valueType:
                                                                        "currency",
                                                                    },
                                                                  }
                                                                ),
                                                              ],
                                                              1
                                                            ),
                                                          ]),
                                                        ],
                                                        2
                                                      ),
                                                    ]
                                                  ),
                                                ]
                                              ),
                                            ]),
                                            _vm._v(" "),
                                            _c("div", { staticClass: "card" }, [
                                              _c(
                                                "div",
                                                { staticClass: "card-header" },
                                                [
                                                  _c("b", [
                                                    _vm._v(
                                                      "B. Piutang sebagai pengurang"
                                                    ),
                                                  ]),
                                                ]
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "div",
                                                {
                                                  staticClass:
                                                    "table-responsive",
                                                },
                                                [
                                                  _c(
                                                    "table",
                                                    { staticClass: "table" },
                                                    [
                                                      _c("tbody", [
                                                        _c("tr", [
                                                          _c("th", [
                                                            _vm._v(
                                                              "1. Saldo piutang cair usia dewasa s.d 60 thn diatas plafon (150.000.000)"
                                                            ),
                                                          ]),
                                                          _vm._v(" "),
                                                          _c(
                                                            "td",
                                                            {
                                                              staticClass:
                                                                "text-right",
                                                            },
                                                            [
                                                              _c(
                                                                "check-value",
                                                                {
                                                                  attrs: {
                                                                    value:
                                                                      _vm.form
                                                                        .kurang_sheet_12,
                                                                    valueType:
                                                                      "currency",
                                                                  },
                                                                }
                                                              ),
                                                            ],
                                                            1
                                                          ),
                                                        ]),
                                                        _vm._v(" "),
                                                        _c("tr", [
                                                          _c("th", [
                                                            _vm._v(
                                                              "2. Saldo piutang cair diatas usia 60 s.d 70 thn diatas plafon (50.000.000)"
                                                            ),
                                                          ]),
                                                          _vm._v(" "),
                                                          _c(
                                                            "td",
                                                            {
                                                              staticClass:
                                                                "text-right",
                                                            },
                                                            [
                                                              _c(
                                                                "check-value",
                                                                {
                                                                  attrs: {
                                                                    value:
                                                                      _vm.form
                                                                        .kurang_sheet_13,
                                                                    valueType:
                                                                      "currency",
                                                                  },
                                                                }
                                                              ),
                                                            ],
                                                            1
                                                          ),
                                                        ]),
                                                        _vm._v(" "),
                                                        _c("tr", [
                                                          _c("th", [
                                                            _vm._v(
                                                              "3. Saldo piutang kapitalisasi diatas plafon (25.000.000)"
                                                            ),
                                                          ]),
                                                          _vm._v(" "),
                                                          _c(
                                                            "td",
                                                            {
                                                              staticClass:
                                                                "text-right",
                                                            },
                                                            [
                                                              _c(
                                                                "check-value",
                                                                {
                                                                  attrs: {
                                                                    value:
                                                                      _vm.form
                                                                        .kurang_sheet_14,
                                                                    valueType:
                                                                      "currency",
                                                                  },
                                                                }
                                                              ),
                                                            ],
                                                            1
                                                          ),
                                                        ]),
                                                        _vm._v(" "),
                                                        _c("tr", [
                                                          _c("th", [
                                                            _vm._v(
                                                              "4. Saldo piutang usia diatas 70 tahun"
                                                            ),
                                                          ]),
                                                          _vm._v(" "),
                                                          _c(
                                                            "td",
                                                            {
                                                              staticClass:
                                                                "text-right",
                                                            },
                                                            [
                                                              _c(
                                                                "check-value",
                                                                {
                                                                  attrs: {
                                                                    value:
                                                                      _vm.form
                                                                        .kurang_sheet_15,
                                                                    valueType:
                                                                      "currency",
                                                                  },
                                                                }
                                                              ),
                                                            ],
                                                            1
                                                          ),
                                                        ]),
                                                        _vm._v(" "),
                                                        _c("tr", [
                                                          _c("th", [
                                                            _vm._v(
                                                              "5. Saldo piutang macet  lebih dari 6 bulan berturut-turut"
                                                            ),
                                                          ]),
                                                          _vm._v(" "),
                                                          _c(
                                                            "td",
                                                            {
                                                              staticClass:
                                                                "text-right",
                                                            },
                                                            [
                                                              _c(
                                                                "check-value",
                                                                {
                                                                  attrs: {
                                                                    value:
                                                                      _vm.form
                                                                        .kurang_sheet_16,
                                                                    valueType:
                                                                      "currency",
                                                                  },
                                                                }
                                                              ),
                                                            ],
                                                            1
                                                          ),
                                                        ]),
                                                        _vm._v(" "),
                                                        _c("tr", [
                                                          _c("th", [
                                                            _vm._v(
                                                              "6. Saldo piutang kapitalisasi anggota baru < 30 hari sejak menjadi anggota"
                                                            ),
                                                          ]),
                                                          _vm._v(" "),
                                                          _c(
                                                            "td",
                                                            {
                                                              staticClass:
                                                                "text-right",
                                                            },
                                                            [
                                                              _c(
                                                                "check-value",
                                                                {
                                                                  attrs: {
                                                                    value:
                                                                      _vm.form
                                                                        .kurang_sheet_17,
                                                                    valueType:
                                                                      "currency",
                                                                  },
                                                                }
                                                              ),
                                                            ],
                                                            1
                                                          ),
                                                        ]),
                                                        _vm._v(" "),
                                                        _c("tr", [
                                                          _c("th", [
                                                            _vm._v(
                                                              "7. Saldo piutang kapitalisasi yang tidak pernah diangsur ≥ 3 bln berturut-turut"
                                                            ),
                                                          ]),
                                                          _vm._v(" "),
                                                          _c(
                                                            "td",
                                                            {
                                                              staticClass:
                                                                "text-right",
                                                            },
                                                            [
                                                              _c(
                                                                "check-value",
                                                                {
                                                                  attrs: {
                                                                    value:
                                                                      _vm.form
                                                                        .kurang_sheet_18,
                                                                    valueType:
                                                                      "currency",
                                                                  },
                                                                }
                                                              ),
                                                            ],
                                                            1
                                                          ),
                                                        ]),
                                                        _vm._v(" "),
                                                        _c("tr", [
                                                          _c("th", [
                                                            _vm._v(
                                                              "8. Saldo piutang dengan tujuan untuk biaya berobat sendiri"
                                                            ),
                                                          ]),
                                                          _vm._v(" "),
                                                          _c(
                                                            "td",
                                                            {
                                                              staticClass:
                                                                "text-right",
                                                            },
                                                            [
                                                              _c(
                                                                "check-value",
                                                                {
                                                                  attrs: {
                                                                    value:
                                                                      _vm.form
                                                                        .kurang_sheet_19,
                                                                    valueType:
                                                                      "currency",
                                                                  },
                                                                }
                                                              ),
                                                            ],
                                                            1
                                                          ),
                                                        ]),
                                                        _vm._v(" "),
                                                        _c("tr", [
                                                          _c("th", [
                                                            _vm._v(
                                                              "9. Saldo piutang lembaga atas nama perorangan atau nama lembaga"
                                                            ),
                                                          ]),
                                                          _vm._v(" "),
                                                          _c(
                                                            "td",
                                                            {
                                                              staticClass:
                                                                "text-right",
                                                            },
                                                            [
                                                              _c(
                                                                "check-value",
                                                                {
                                                                  attrs: {
                                                                    value:
                                                                      _vm.form
                                                                        .kurang_sheet_20,
                                                                    valueType:
                                                                      "currency",
                                                                  },
                                                                }
                                                              ),
                                                            ],
                                                            1
                                                          ),
                                                        ]),
                                                        _vm._v(" "),
                                                        _c("tr", [
                                                          _c("th", [
                                                            _vm._v(
                                                              "10. Saldo piutang produktif  diatas plafon (300.000.000)"
                                                            ),
                                                          ]),
                                                          _vm._v(" "),
                                                          _c(
                                                            "td",
                                                            {
                                                              staticClass:
                                                                "text-right",
                                                            },
                                                            [
                                                              _c(
                                                                "check-value",
                                                                {
                                                                  attrs: {
                                                                    value:
                                                                      _vm.form
                                                                        .kurang_sheet_21,
                                                                    valueType:
                                                                      "currency",
                                                                  },
                                                                }
                                                              ),
                                                            ],
                                                            1
                                                          ),
                                                        ]),
                                                        _vm._v(" "),
                                                        _c("tr", [
                                                          _c("th", [
                                                            _vm._v(
                                                              "11. Saldo piutang produktif dan piutang lain diatas plafon (300.000.000)"
                                                            ),
                                                          ]),
                                                          _vm._v(" "),
                                                          _c(
                                                            "td",
                                                            {
                                                              staticClass:
                                                                "text-right",
                                                            },
                                                            [
                                                              _c(
                                                                "check-value",
                                                                {
                                                                  attrs: {
                                                                    value:
                                                                      _vm.form
                                                                        .kurang_sheet_22,
                                                                    valueType:
                                                                      "currency",
                                                                  },
                                                                }
                                                              ),
                                                            ],
                                                            1
                                                          ),
                                                        ]),
                                                        _vm._v(" "),
                                                        _c("tr", [
                                                          _c("th", [
                                                            _vm._v(
                                                              "12. Saldo piutang kapitalisasi yang umur piutang diatas 5 tahun"
                                                            ),
                                                          ]),
                                                          _vm._v(" "),
                                                          _c(
                                                            "td",
                                                            {
                                                              staticClass:
                                                                "text-right",
                                                            },
                                                            [
                                                              _c(
                                                                "check-value",
                                                                {
                                                                  attrs: {
                                                                    value:
                                                                      _vm.form
                                                                        .kurang_sheet_23,
                                                                    valueType:
                                                                      "currency",
                                                                  },
                                                                }
                                                              ),
                                                            ],
                                                            1
                                                          ),
                                                        ]),
                                                        _vm._v(" "),
                                                        _c("tr", [
                                                          _c("th", [
                                                            _vm._v(
                                                              "13. Saldo piutang selain  kapitalisasi yang umur piutang diatas 15 tahun"
                                                            ),
                                                          ]),
                                                          _vm._v(" "),
                                                          _c(
                                                            "td",
                                                            {
                                                              staticClass:
                                                                "text-right",
                                                            },
                                                            [
                                                              _c(
                                                                "check-value",
                                                                {
                                                                  attrs: {
                                                                    value:
                                                                      _vm.form
                                                                        .kurang_sheet_24,
                                                                    valueType:
                                                                      "currency",
                                                                  },
                                                                }
                                                              ),
                                                            ],
                                                            1
                                                          ),
                                                        ]),
                                                        _vm._v(" "),
                                                        _c("tr", [
                                                          _c("th", [
                                                            _vm._v(
                                                              "14. Saldo piutang yang angsuran ditarik dari simpanan saham (SP dan SW)"
                                                            ),
                                                          ]),
                                                          _vm._v(" "),
                                                          _c(
                                                            "td",
                                                            {
                                                              staticClass:
                                                                "text-right",
                                                            },
                                                            [
                                                              _c(
                                                                "check-value",
                                                                {
                                                                  attrs: {
                                                                    value:
                                                                      _vm.form
                                                                        .kurang_sheet_25,
                                                                    valueType:
                                                                      "currency",
                                                                  },
                                                                }
                                                              ),
                                                            ],
                                                            1
                                                          ),
                                                        ]),
                                                        _vm._v(" "),
                                                        _c("tr", [
                                                          _c("th", [
                                                            _vm._v(
                                                              "15. Saldo piutang luar biasa usia < 17 tahun dan belum menikah"
                                                            ),
                                                          ]),
                                                          _vm._v(" "),
                                                          _c(
                                                            "td",
                                                            {
                                                              staticClass:
                                                                "text-right",
                                                            },
                                                            [
                                                              _c(
                                                                "check-value",
                                                                {
                                                                  attrs: {
                                                                    value:
                                                                      _vm.form
                                                                        .kurang_sheet_26,
                                                                    valueType:
                                                                      "currency",
                                                                  },
                                                                }
                                                              ),
                                                            ],
                                                            1
                                                          ),
                                                        ]),
                                                        _vm._v(" "),
                                                        _c("tr", [
                                                          _c("th", [
                                                            _vm._v(
                                                              "Jumlah Pinjaman sebagai pengurang"
                                                            ),
                                                          ]),
                                                          _vm._v(" "),
                                                          _c(
                                                            "td",
                                                            {
                                                              staticClass:
                                                                "text-right",
                                                            },
                                                            [
                                                              _c(
                                                                "check-value",
                                                                {
                                                                  attrs: {
                                                                    value:
                                                                      _vm.form
                                                                        .total_pinjaman_kurang,
                                                                    valueType:
                                                                      "currency",
                                                                  },
                                                                }
                                                              ),
                                                            ],
                                                            1
                                                          ),
                                                        ]),
                                                      ]),
                                                    ]
                                                  ),
                                                ]
                                              ),
                                            ]),
                                            _vm._v(" "),
                                            _c("div", { staticClass: "card" }, [
                                              _c(
                                                "div",
                                                { staticClass: "card-header" },
                                                [
                                                  _c("b", [
                                                    _vm._v(
                                                      "C. Piutang Yang Disolidaritaskan"
                                                    ),
                                                  ]),
                                                ]
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "div",
                                                {
                                                  staticClass:
                                                    "table-responsive",
                                                },
                                                [
                                                  _c(
                                                    "table",
                                                    { staticClass: "table" },
                                                    [
                                                      _c("tbody", [
                                                        _c("tr", [
                                                          _c("th", [
                                                            _vm._v("A - B"),
                                                          ]),
                                                          _vm._v(" "),
                                                          _c(
                                                            "td",
                                                            {
                                                              staticClass:
                                                                "text-right",
                                                            },
                                                            [
                                                              _c(
                                                                "check-value",
                                                                {
                                                                  attrs: {
                                                                    value:
                                                                      _vm.form
                                                                        .total_pinjaman -
                                                                      _vm.form
                                                                        .total_pinjaman_kurang,
                                                                    valueType:
                                                                      "currency",
                                                                  },
                                                                }
                                                              ),
                                                            ],
                                                            1
                                                          ),
                                                        ]),
                                                      ]),
                                                    ]
                                                  ),
                                                ]
                                              ),
                                            ]),
                                            _vm._v(" "),
                                            _c("div", { staticClass: "card" }, [
                                              _c(
                                                "div",
                                                { staticClass: "card-header" },
                                                [_c("b", [_vm._v("D. Iuran")])]
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "div",
                                                {
                                                  staticClass:
                                                    "table-responsive",
                                                },
                                                [
                                                  _c(
                                                    "table",
                                                    { staticClass: "table" },
                                                    [
                                                      _c("tbody", [
                                                        _c("tr", [
                                                          _c("th", [
                                                            _vm._v(
                                                              "Iuran Lintang"
                                                            ),
                                                          ]),
                                                          _vm._v(" "),
                                                          _c(
                                                            "td",
                                                            {
                                                              staticClass:
                                                                "text-right",
                                                            },
                                                            [
                                                              _c(
                                                                "check-value",
                                                                {
                                                                  attrs: {
                                                                    value:
                                                                      ((_vm.form
                                                                        .total_pinjaman -
                                                                        _vm.form
                                                                          .total_pinjaman_kurang) *
                                                                        0.6) /
                                                                      1000,
                                                                    valueType:
                                                                      "currency",
                                                                  },
                                                                }
                                                              ),
                                                            ],
                                                            1
                                                          ),
                                                        ]),
                                                        _vm._v(" "),
                                                        _c("tr", [
                                                          _c("th", [
                                                            _vm._v(
                                                              "Pembulatan Setoran Solidaritas Lintang (50)"
                                                            ),
                                                          ]),
                                                          _vm._v(" "),
                                                          _c(
                                                            "td",
                                                            {
                                                              staticClass:
                                                                "text-right",
                                                            },
                                                            [
                                                              _c(
                                                                "check-value",
                                                                {
                                                                  attrs: {
                                                                    value:
                                                                      Math.round(
                                                                        ((_vm
                                                                          .form
                                                                          .total_pinjaman -
                                                                          _vm
                                                                            .form
                                                                            .total_pinjaman_kurang) *
                                                                          0.55) /
                                                                          1000 /
                                                                          50
                                                                      ) * 50,
                                                                    valueType:
                                                                      "currency",
                                                                  },
                                                                }
                                                              ),
                                                            ],
                                                            1
                                                          ),
                                                        ]),
                                                      ]),
                                                    ]
                                                  ),
                                                ]
                                              ),
                                            ]),
                                          ]
                                        ),
                                      ]),
                                    ]),
                                    _vm._v(" "),
                                    _c("div", { staticClass: "col-lg-12" }, [
                                      _c("div", { staticClass: "card" }, [
                                        _c(
                                          "div",
                                          {
                                            staticClass: "card-header bg-white",
                                          },
                                          [
                                            _c(
                                              "h5",
                                              { staticClass: "card-title" },
                                              [_vm._v("Total")]
                                            ),
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "div",
                                          { staticClass: "table-responsive" },
                                          [
                                            _c(
                                              "table",
                                              { staticClass: "table" },
                                              [
                                                _c("tbody", [
                                                  _c("tr", [
                                                    _c("th", [
                                                      _vm._v(
                                                        "Jumlah Setoran Solidaritas Jalinan"
                                                      ),
                                                    ]),
                                                    _vm._v(" "),
                                                    _c(
                                                      "td",
                                                      {
                                                        staticClass:
                                                          "text-right",
                                                      },
                                                      [
                                                        _c("check-value", {
                                                          attrs: {
                                                            value:
                                                              Math.round(
                                                                ((_vm.form
                                                                  .total_simpanan -
                                                                  _vm.form
                                                                    .total_simpanan_kurang) *
                                                                  0.55) /
                                                                  1000 /
                                                                  50
                                                              ) *
                                                                50 +
                                                              Math.round(
                                                                ((_vm.form
                                                                  .total_pinjaman -
                                                                  _vm.form
                                                                    .total_pinjaman_kurang) *
                                                                  0.55) /
                                                                  1000 /
                                                                  50
                                                              ) *
                                                                50,
                                                            valueType:
                                                              "currency",
                                                          },
                                                        }),
                                                      ],
                                                      1
                                                    ),
                                                  ]),
                                                  _vm._v(" "),
                                                  _c("tr", [
                                                    _c("th", [
                                                      _vm._v(
                                                        "Jumlah Setoran Solidaritas Jalinan Yang Dibayarkan"
                                                      ),
                                                    ]),
                                                    _vm._v(" "),
                                                    _c(
                                                      "td",
                                                      {
                                                        staticClass:
                                                          "text-right",
                                                      },
                                                      [
                                                        _c("check-value", {
                                                          attrs: {
                                                            value:
                                                              Math.round(
                                                                ((_vm.form
                                                                  .total_simpanan -
                                                                  _vm.form
                                                                    .total_simpanan_kurang) *
                                                                  0.55) /
                                                                  1000 /
                                                                  50
                                                              ) *
                                                                50 +
                                                              Math.round(
                                                                ((_vm.form
                                                                  .total_pinjaman -
                                                                  _vm.form
                                                                    .total_pinjaman_kurang) *
                                                                  0.55) /
                                                                  1000 /
                                                                  50
                                                              ) *
                                                                50,
                                                            valueType:
                                                              "currency",
                                                          },
                                                        }),
                                                      ],
                                                      1
                                                    ),
                                                  ]),
                                                ]),
                                              ]
                                            ),
                                          ]
                                        ),
                                      ]),
                                    ]),
                                  ]),
                                  _vm._v(" "),
                                  _c("form-info"),
                                  _vm._v(" "),
                                  _c("br"),
                                  _vm._v(" "),
                                  _vm.form.status == 0
                                    ? _c(
                                        "button",
                                        {
                                          staticClass:
                                            "btn btn-danger btn-block btn-lg mb-3",
                                          attrs: {
                                            type: "button",
                                            readonly: "",
                                          },
                                        },
                                        [
                                          _c("b", [
                                            _vm._v("STATUS : BELUM BAYAR"),
                                          ]),
                                        ]
                                      )
                                    : _vm._e(),
                                  _vm._v(" "),
                                  _vm.form.status == 1
                                    ? _c(
                                        "button",
                                        {
                                          staticClass:
                                            "btn btn-warning btn-block btn-lg mb-3",
                                          attrs: {
                                            type: "button",
                                            readonly: "",
                                          },
                                        },
                                        [
                                          _c("b", [
                                            _vm._v(
                                              "STATUS : SUDAH BAYAR DAN MENUNGGU KONFIRMASI"
                                            ),
                                          ]),
                                        ]
                                      )
                                    : _vm._e(),
                                  _vm._v(" "),
                                  _vm.form.status == 2
                                    ? _c(
                                        "button",
                                        {
                                          staticClass:
                                            "btn btn-primary btn-block btn-lg mb-3",
                                          attrs: {
                                            type: "button",
                                            readonly: "",
                                          },
                                        },
                                        [
                                          _c("b", [
                                            _vm._v("STATUS : SUDAH LUNAS"),
                                          ]),
                                        ]
                                      )
                                    : _vm._e(),
                                  _vm._v(" "),
                                  _vm.currentUser.id_cu == 0
                                    ? _c(
                                        "div",
                                        { staticClass: "card card-body" },
                                        [
                                          _vm.form.status != 0
                                            ? _c("form-button", {
                                                attrs: {
                                                  cancelState: _vm.cancelState,
                                                  formValidation: "form",
                                                  confirmTitle:
                                                    _vm.confirmTitle,
                                                },
                                                on: { cancelClick: _vm.back },
                                              })
                                            : _c("form-button", {
                                                attrs: {
                                                  cancelState: _vm.cancelState,
                                                  isSingleButton: true,
                                                },
                                                on: { cancelClick: _vm.back },
                                              }),
                                        ],
                                        1
                                      )
                                    : _c(
                                        "div",
                                        { staticClass: "card card-body" },
                                        [
                                          _vm.form.status != 2
                                            ? _c("form-button", {
                                                attrs: {
                                                  cancelState: _vm.cancelState,
                                                  formValidation: "form",
                                                  confirmTitle:
                                                    _vm.confirmTitle,
                                                },
                                                on: { cancelClick: _vm.back },
                                              })
                                            : _c("form-button", {
                                                attrs: {
                                                  cancelState: _vm.cancelState,
                                                  isSingleButton: true,
                                                },
                                                on: { cancelClick: _vm.back },
                                              }),
                                        ],
                                        1
                                      ),
                                ],
                                1
                              ),
                            ]
                          ),
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "transition",
                        {
                          attrs: {
                            "enter-active-class": "animated fadeIn",
                            mode: "out-in",
                          },
                        },
                        [
                          _vm.tabName == "sheet3"
                            ? _c(
                                "div",
                                [
                                  _c("table-anggota", {
                                    attrs: {
                                      kelas: _vm.kelas,
                                      title: "Simp > 5JT",
                                      produkData: _vm.form.produk,
                                      cu: _vm.form.id_cu,
                                      lokasi: 3,
                                      deskripsi:
                                        "Simpanan khusus anggota yang masuk CU berusia 0 s.d. 1 tahun yang jumlah simpanan melebihi plafon Rp5.000.000,00. Simpanan yang disolidaritaskan hanya sebesar maksimal Rp5.000.000,00; kelebihan simpanan tersebut menjadi pengurang setoran solidaritas",
                                    },
                                  }),
                                ],
                                1
                              )
                            : _vm._e(),
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "transition",
                        {
                          attrs: {
                            "enter-active-class": "animated fadeIn",
                            mode: "out-in",
                          },
                        },
                        [
                          _vm.tabName == "sheet4"
                            ? _c(
                                "div",
                                [
                                  _c("table-anggota", {
                                    attrs: {
                                      kelas: _vm.kelas,
                                      title: "Simp > 50JT | 1 s.d. 70 Thn",
                                      produkData: _vm.form.produk,
                                      cu: _vm.form.id_cu,
                                      lokasi: 4,
                                      deskripsi:
                                        "Simpanan khusus anggota yang masuk CU dibawah usia 60 tahun dan sekarang berusia 1 s.d. 70 tahun, yang jumlah simpanannya melebihi plafon Rp50.000.000,00. Simpanan yang disolidaritaskan hanya sebesar maksimal Rp50.000.000,00; kelebihan simpanan tersebut menjadi pengurang setoran solidaritas",
                                    },
                                  }),
                                ],
                                1
                              )
                            : _vm._e(),
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "transition",
                        {
                          attrs: {
                            "enter-active-class": "animated fadeIn",
                            mode: "out-in",
                          },
                        },
                        [
                          _vm.tabName == "sheet5"
                            ? _c(
                                "div",
                                [
                                  _c("table-anggota", {
                                    attrs: {
                                      kelas: _vm.kelas,
                                      title: "Simp > 10JT | 60 s.d. 70 Thn",
                                      produkData: _vm.form.produk,
                                      cu: _vm.form.id_cu,
                                      lokasi: 5,
                                      deskripsi:
                                        "Simpanan khusus anggota yang amsuk CU berusia 60 s.d. 70 tahun yang jumlah simpanannya melebihi plafon Rp10.000.000,00. Simpanan yang disolidaritaskan hanya sebesar maksimal Rp10.000.000,00; Kelebihan simpanan tersebut menjadi pengurang setoran solidaritas",
                                    },
                                  }),
                                ],
                                1
                              )
                            : _vm._e(),
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "transition",
                        {
                          attrs: {
                            "enter-active-class": "animated fadeIn",
                            mode: "out-in",
                          },
                        },
                        [
                          _vm.tabName == "sheet6"
                            ? _c(
                                "div",
                                [
                                  _c("table-anggota", {
                                    attrs: {
                                      kelas: _vm.kelas,
                                      title: "Simp > 70 Thn | Masuk < 60 Thn",
                                      produkData: _vm.form.produk,
                                      cu: _vm.form.id_cu,
                                      lokasi: 6,
                                    },
                                  }),
                                ],
                                1
                              )
                            : _vm._e(),
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "transition",
                        {
                          attrs: {
                            "enter-active-class": "animated fadeIn",
                            mode: "out-in",
                          },
                        },
                        [
                          _vm.tabName == "sheet7"
                            ? _c(
                                "div",
                                [
                                  _c("table-anggota", {
                                    attrs: {
                                      kelas: _vm.kelas,
                                      title:
                                        "Simp > 70 Thn | Masuk 60 s.d. 70 Thn",
                                      produkData: _vm.form.produk,
                                      cu: _vm.form.id_cu,
                                      lokasi: 7,
                                    },
                                  }),
                                ],
                                1
                              )
                            : _vm._e(),
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "transition",
                        {
                          attrs: {
                            "enter-active-class": "animated fadeIn",
                            mode: "out-in",
                          },
                        },
                        [
                          _vm.tabName == "sheet8"
                            ? _c(
                                "div",
                                [
                                  _c("table-anggota", {
                                    attrs: {
                                      kelas: _vm.kelas,
                                      title: "Masuk > 70 Thn<",
                                      produkData: _vm.form.produk,
                                      cu: _vm.form.id_cu,
                                      lokasi: 8,
                                    },
                                  }),
                                ],
                                1
                              )
                            : _vm._e(),
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "transition",
                        {
                          attrs: {
                            "enter-active-class": "animated fadeIn",
                            mode: "out-in",
                          },
                        },
                        [
                          _vm.tabName == "sheet9"
                            ? _c(
                                "div",
                                [
                                  _c("table-anggota", {
                                    attrs: {
                                      kelas: _vm.kelas,
                                      title: "Simp Kap < 30 Hari",
                                      produkData: _vm.form.produk,
                                      cu: _vm.form.id_cu,
                                      lokasi: 9,
                                    },
                                  }),
                                ],
                                1
                              )
                            : _vm._e(),
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "transition",
                        {
                          attrs: {
                            "enter-active-class": "animated fadeIn",
                            mode: "out-in",
                          },
                        },
                        [
                          _vm.tabName == "sheet10"
                            ? _c(
                                "div",
                                [
                                  _c("table-anggota", {
                                    attrs: {
                                      kelas: _vm.kelas,
                                      title: "Simp Kap Lalai 3 Hari",
                                      produkData: _vm.form.produk,
                                      cu: _vm.form.id_cu,
                                      lokasi: 10,
                                    },
                                  }),
                                ],
                                1
                              )
                            : _vm._e(),
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "transition",
                        {
                          attrs: {
                            "enter-active-class": "animated fadeIn",
                            mode: "out-in",
                          },
                        },
                        [
                          _vm.tabName == "sheet11"
                            ? _c(
                                "div",
                                [
                                  _c("table-anggota", {
                                    attrs: {
                                      kelas: _vm.kelas,
                                      title: "Simp Lembaga",
                                      produkData: _vm.form.produk,
                                      cu: _vm.form.id_cu,
                                      lokasi: 11,
                                    },
                                  }),
                                ],
                                1
                              )
                            : _vm._e(),
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "transition",
                        {
                          attrs: {
                            "enter-active-class": "animated fadeIn",
                            mode: "out-in",
                          },
                        },
                        [
                          _vm.tabName == "sheet12"
                            ? _c(
                                "div",
                                [
                                  _c("table-anggota", {
                                    attrs: {
                                      kelas: _vm.kelas,
                                      title: "Pinj Non Pro > 150 JT",
                                      produkData: _vm.form.produk,
                                      cu: _vm.form.id_cu,
                                      lokasi: 12,
                                    },
                                  }),
                                ],
                                1
                              )
                            : _vm._e(),
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "transition",
                        {
                          attrs: {
                            "enter-active-class": "animated fadeIn",
                            mode: "out-in",
                          },
                        },
                        [
                          _vm.tabName == "sheet13"
                            ? _c(
                                "div",
                                [
                                  _c("table-anggota", {
                                    attrs: {
                                      kelas: _vm.kelas,
                                      title: "Pinj > 50 JT",
                                      produkData: _vm.form.produk,
                                      cu: _vm.form.id_cu,
                                      lokasi: 13,
                                    },
                                  }),
                                ],
                                1
                              )
                            : _vm._e(),
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "transition",
                        {
                          attrs: {
                            "enter-active-class": "animated fadeIn",
                            mode: "out-in",
                          },
                        },
                        [
                          _vm.tabName == "sheet14"
                            ? _c(
                                "div",
                                [
                                  _c("table-anggota", {
                                    attrs: {
                                      kelas: _vm.kelas,
                                      title: "Pinj Kap > 25 JT",
                                      produkData: _vm.form.produk,
                                      cu: _vm.form.id_cu,
                                      lokasi: 14,
                                    },
                                  }),
                                ],
                                1
                              )
                            : _vm._e(),
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "transition",
                        {
                          attrs: {
                            "enter-active-class": "animated fadeIn",
                            mode: "out-in",
                          },
                        },
                        [
                          _vm.tabName == "sheet15"
                            ? _c(
                                "div",
                                [
                                  _c("table-anggota", {
                                    attrs: {
                                      kelas: _vm.kelas,
                                      title: "Pinj Agt > 70 JT",
                                      produkData: _vm.form.produk,
                                      cu: _vm.form.id_cu,
                                      lokasi: 15,
                                    },
                                  }),
                                ],
                                1
                              )
                            : _vm._e(),
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "transition",
                        {
                          attrs: {
                            "enter-active-class": "animated fadeIn",
                            mode: "out-in",
                          },
                        },
                        [
                          _vm.tabName == "sheet16"
                            ? _c(
                                "div",
                                [
                                  _c("table-anggota", {
                                    attrs: {
                                      kelas: _vm.kelas,
                                      title: "Pinj Kap > 30 Hari",
                                      produkData: _vm.form.produk,
                                      cu: _vm.form.id_cu,
                                      lokasi: 16,
                                    },
                                  }),
                                ],
                                1
                              )
                            : _vm._e(),
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "transition",
                        {
                          attrs: {
                            "enter-active-class": "animated fadeIn",
                            mode: "out-in",
                          },
                        },
                        [
                          _vm.tabName == "sheet17"
                            ? _c(
                                "div",
                                [
                                  _c("table-anggota", {
                                    attrs: {
                                      kelas: _vm.kelas,
                                      title: "Pinj Macet > 6 Bln",
                                      produkData: _vm.form.produk,
                                      cu: _vm.form.id_cu,
                                      lokasi: 17,
                                    },
                                  }),
                                ],
                                1
                              )
                            : _vm._e(),
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "transition",
                        {
                          attrs: {
                            "enter-active-class": "animated fadeIn",
                            mode: "out-in",
                          },
                        },
                        [
                          _vm.tabName == "sheet18"
                            ? _c(
                                "div",
                                [
                                  _c("table-anggota", {
                                    attrs: {
                                      kelas: _vm.kelas,
                                      title: "Pinj Kap Lalai > 3 Bln",
                                      produkData: _vm.form.produk,
                                      cu: _vm.form.id_cu,
                                      lokasi: 18,
                                    },
                                  }),
                                ],
                                1
                              )
                            : _vm._e(),
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "transition",
                        {
                          attrs: {
                            "enter-active-class": "animated fadeIn",
                            mode: "out-in",
                          },
                        },
                        [
                          _vm.tabName == "sheet21"
                            ? _c(
                                "div",
                                [
                                  _c("table-anggota", {
                                    attrs: {
                                      kelas: _vm.kelas,
                                      title: "Pinj Pro > 300 JT",
                                      produkData: _vm.form.produk,
                                      cu: _vm.form.id_cu,
                                      lokasi: 21,
                                    },
                                  }),
                                ],
                                1
                              )
                            : _vm._e(),
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "transition",
                        {
                          attrs: {
                            "enter-active-class": "animated fadeIn",
                            mode: "out-in",
                          },
                        },
                        [
                          _vm.tabName == "sheet22"
                            ? _c(
                                "div",
                                [
                                  _c("table-anggota", {
                                    attrs: {
                                      kelas: _vm.kelas,
                                      title: "Pinj Ganda > 300 JT",
                                      produkData: _vm.form.produk,
                                      cu: _vm.form.id_cu,
                                      lokasi: 22,
                                    },
                                  }),
                                ],
                                1
                              )
                            : _vm._e(),
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "transition",
                        {
                          attrs: {
                            "enter-active-class": "animated fadeIn",
                            mode: "out-in",
                          },
                        },
                        [
                          _vm.tabName == "sheet23"
                            ? _c(
                                "div",
                                [
                                  _c("table-anggota", {
                                    attrs: {
                                      kelas: _vm.kelas,
                                      title: "Piut Kap > 5 Thn",
                                      produkData: _vm.form.produk,
                                      cu: _vm.form.id_cu,
                                      lokasi: 23,
                                    },
                                  }),
                                ],
                                1
                              )
                            : _vm._e(),
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "transition",
                        {
                          attrs: {
                            "enter-active-class": "animated fadeIn",
                            mode: "out-in",
                          },
                        },
                        [
                          _vm.tabName == "sheet24"
                            ? _c(
                                "div",
                                [
                                  _c("table-anggota", {
                                    attrs: {
                                      kelas: _vm.kelas,
                                      title: "Piut Umum > 15 Thn",
                                      produkData: _vm.form.produk,
                                      cu: _vm.form.id_cu,
                                      lokasi: 24,
                                    },
                                  }),
                                ],
                                1
                              )
                            : _vm._e(),
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "transition",
                        {
                          attrs: {
                            "enter-active-class": "animated fadeIn",
                            mode: "out-in",
                          },
                        },
                        [
                          _vm.tabName == "sheet25"
                            ? _c(
                                "div",
                                [
                                  _c("table-anggota", {
                                    attrs: {
                                      kelas: _vm.kelas,
                                      title: "Pinj Lain-lain",
                                      produkData: _vm.form.produk,
                                      cu: _vm.form.id_cu,
                                      lokasi: 25,
                                    },
                                  }),
                                ],
                                1
                              )
                            : _vm._e(),
                        ]
                      ),
                    ],
                    1
                  )
                : _vm.formStat == "loading"
                ? _c("div", [_vm._m(1)])
                : _c("div", [
                    _c(
                      "div",
                      { staticClass: "card card-body" },
                      [
                        _c("form-button", {
                          attrs: {
                            cancelState: _vm.cancelState,
                            isSingleButton: true,
                          },
                          on: { cancelClick: _vm.back },
                        }),
                      ],
                      1
                    ),
                  ]),
            ],
            1
          ),
        ]),
      ]),
      _vm._v(" "),
      _c(
        "app-modal",
        {
          attrs: {
            show: _vm.modalShow,
            state: _vm.modalState,
            title: _vm.modalTitle,
            content: _vm.modalContent,
            size: _vm.modalSize,
            color: _vm.modalColor,
          },
          on: {
            batal: _vm.modalTutup,
            tutup: _vm.modalTutup,
            confirmOk: _vm.modalConfirmOk,
            successOk: _vm.modalTutup,
            failOk: _vm.modalTutup,
            backgroundClick: _vm.modalBackgroundClick,
          },
        },
        [
          _c("template", { slot: "modal-title" }, [
            _vm._v("\n\t\t\t" + _vm._s(_vm.modalTitle) + "\n\t\t"),
          ]),
          _vm._v(" "),
          _c("template", { slot: "modal-body1" }),
        ],
        2
      ),
    ],
    1
  )
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "input-group-prepend" }, [
      _c("span", { staticClass: "input-group-text" }, [_vm._v("Pilih Jenis")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card" }, [
      _c("div", { staticClass: "card-body" }, [
        _c("h4", [_vm._v("Mohon tunggu...")]),
        _vm._v(" "),
        _c("div", { staticClass: "progress" }, [
          _c(
            "div",
            {
              staticClass:
                "progress-bar progress-bar-info progress-bar-striped progress-bar-animated",
              staticStyle: { width: "100%" },
            },
            [_c("span", { staticClass: "sr-only" }, [_vm._v("100% Complete")])]
          ),
        ]),
      ]),
    ])
  },
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/jalinanIuran/tableAnggota.vue?vue&type=template&id=851568fe&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/views/jalinanIuran/tableAnggota.vue?vue&type=template&id=851568fe& ***!
  \******************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c(
      "div",
      { staticClass: "card" },
      [
        _c("div", { staticClass: "card-header bg-white" }, [
          _c("h5", { staticClass: "card-title" }, [_vm._v(_vm._s(_vm.title))]),
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "card-body d-print-none" }, [
          _c("div", { staticClass: "row" }, [
            _c(
              "div",
              { staticClass: "col-md-7 col-lg-9 pb-2 d-none d-sm-block" },
              [_vm._v("\n\t\t\t\t\t" + _vm._s(_vm.deskripsi) + "\n\t\t\t\t")]
            ),
            _vm._v(" "),
            _c("div", { staticClass: "col-md-12 pb-2 d-block d-sm-none" }, [
              _vm._v("\n\t\t\t\t\t" + _vm._s(_vm.deskripsi) + "\n\t\t\t\t"),
            ]),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "col-md-5 col-lg-3 text-right d-none d-sm-block" },
              [
                _c(
                  "json-excel",
                  {
                    staticClass: "btn bg-green-300 btn-icon mb-1",
                    attrs: {
                      data: _vm.excel.data,
                      exportFields: _vm.excel.fields,
                      meta: _vm.excel.meta,
                      title: "Data " + _vm.title,
                      name: _vm.title + ".xls",
                      disabled: _vm.itemDataStat === "loading",
                    },
                  },
                  [
                    _c("i", { staticClass: "icon-file-excel" }),
                    _vm._v(" Excel"),
                  ]
                ),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass: "btn btn-light btn-icon mb-1",
                    attrs: {
                      type: "button",
                      disabled: _vm.itemDataStat === "loading",
                    },
                    on: {
                      click: function ($event) {
                        $event.preventDefault()
                        return _vm.fetch()
                      },
                    },
                  },
                  [
                    _c("i", {
                      staticClass: "icon-sync",
                      class: { spinner: _vm.itemDataStat === "loading" },
                    }),
                  ]
                ),
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "col-md-12 d-block d-sm-none" },
              [
                _c(
                  "json-excel",
                  {
                    staticClass: "btn bg-green-300 btn-icon btn-block mb-1",
                    attrs: {
                      data: _vm.excel.data,
                      exportFields: _vm.excel.fields,
                      meta: _vm.excel.meta,
                      title: "Data " + _vm.title,
                      name: _vm.title + ".xls",
                      disabled: _vm.itemDataStat === "loading",
                    },
                  },
                  [
                    _c("i", { staticClass: "icon-file-excel" }),
                    _vm._v(" Excel"),
                  ]
                ),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass: "btn btn-light btn-icon btn-block mb-1",
                    attrs: {
                      type: "button",
                      disabled: _vm.itemDataStat === "loading",
                    },
                    on: {
                      click: function ($event) {
                        $event.preventDefault()
                        return _vm.fetch()
                      },
                    },
                  },
                  [
                    _c("i", {
                      staticClass: "icon-sync",
                      class: { spinner: _vm.itemDataStat === "loading" },
                    }),
                    _vm._v(" Reload\n\t\t\t\t\t"),
                  ]
                ),
              ],
              1
            ),
          ]),
        ]),
        _vm._v(" "),
        _c("data-table", {
          attrs: {
            columnData: _vm.columnData,
            items: _vm.itemData,
            itemDataStat: _vm.itemDataStat,
          },
          scopedSlots: _vm._u([
            {
              key: "item-desktop",
              fn: function (props) {
                return [
                  props.item
                    ? _c(
                        "tr",
                        {
                          staticClass: "text-nowrap",
                          class: {
                            "bg-info": _vm.selectedItem.id == props.item.id,
                          },
                          on: {
                            click: function ($event) {
                              return _vm.selectedRow(props.item)
                            },
                          },
                        },
                        [
                          _c("td", [_vm._v(_vm._s(props.index + 1))]),
                          _vm._v(" "),
                          _c(
                            "td",
                            [
                              _c("check-value", {
                                attrs: { value: props.item.no_ba },
                              }),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "td",
                            [
                              _c("check-value", {
                                attrs: { value: props.item.nik },
                              }),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "td",
                            [
                              _c("check-value", {
                                attrs: { value: props.item.name },
                              }),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("td", [
                            props.item.tanggal_lahir
                              ? _c("span", {
                                  domProps: {
                                    innerHTML: _vm._s(
                                      _vm.$options.filters.date(
                                        props.item.tanggal_lahir
                                      )
                                    ),
                                  },
                                })
                              : _c("span", [_vm._v("-")]),
                          ]),
                          _vm._v(" "),
                          _c("td", [
                            props.item.tanggal_masuk
                              ? _c("span", {
                                  domProps: {
                                    innerHTML: _vm._s(
                                      _vm.$options.filters.ageDiff(
                                        props.item.tanggal_masuk,
                                        props.item.tanggal_lahir
                                      )
                                    ),
                                  },
                                })
                              : _c("span", [_vm._v("-")]),
                          ]),
                          _vm._v(" "),
                          _c("td", [
                            props.item.tanggal_lahir
                              ? _c("span", {
                                  domProps: {
                                    innerHTML: _vm._s(
                                      _vm.$options.filters.age(
                                        props.item.tanggal_lahir
                                      )
                                    ),
                                  },
                                })
                              : _c("span", [_vm._v("-")]),
                          ]),
                          _vm._v(" "),
                          _c("td", [
                            props.item.tanggal_cair
                              ? _c("span", {
                                  domProps: {
                                    innerHTML: _vm._s(
                                      _vm.$options.filters.age(
                                        props.item.tanggal_cair
                                      )
                                    ),
                                  },
                                })
                              : _c("span", [_vm._v("-")]),
                          ]),
                          _vm._v(" "),
                          _vm._l(_vm.columnData, function (column) {
                            return column.id
                              ? _c(
                                  "td",
                                  [
                                    _c("check-value", {
                                      attrs: {
                                        value: props.item[column.id],
                                        valueType: "currency",
                                      },
                                    }),
                                  ],
                                  1
                                )
                              : _vm._e()
                          }),
                          _vm._v(" "),
                          _c(
                            "td",
                            [
                              _c("check-value", {
                                attrs: {
                                  value: props.item.total,
                                  valueType: "currency",
                                },
                              }),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "td",
                            [
                              _c("check-value", {
                                attrs: {
                                  value: props.item.plafon,
                                  valueType: "currency",
                                },
                              }),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "td",
                            [
                              _c("check-value", {
                                attrs: {
                                  value: props.item.pengurang,
                                  valueType: "currency",
                                },
                              }),
                            ],
                            1
                          ),
                        ],
                        2
                      )
                    : _vm._e(),
                ]
              },
            },
          ]),
        }),
      ],
      1
    ),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/assets/js/components/datatable.vue":
/*!******************************************************!*\
  !*** ./resources/assets/js/components/datatable.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _datatable_vue_vue_type_template_id_80417746___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./datatable.vue?vue&type=template&id=80417746& */ "./resources/assets/js/components/datatable.vue?vue&type=template&id=80417746&");
/* harmony import */ var _datatable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./datatable.vue?vue&type=script&lang=js& */ "./resources/assets/js/components/datatable.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _datatable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _datatable_vue_vue_type_template_id_80417746___WEBPACK_IMPORTED_MODULE_0__["render"],
  _datatable_vue_vue_type_template_id_80417746___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/components/datatable.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/datatable.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/assets/js/components/datatable.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_datatable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./datatable.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/datatable.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_datatable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/datatable.vue?vue&type=template&id=80417746&":
/*!*************************************************************************************!*\
  !*** ./resources/assets/js/components/datatable.vue?vue&type=template&id=80417746& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_datatable_vue_vue_type_template_id_80417746___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./datatable.vue?vue&type=template&id=80417746& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/datatable.vue?vue&type=template&id=80417746&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_datatable_vue_vue_type_template_id_80417746___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_datatable_vue_vue_type_template_id_80417746___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/assets/js/components/datePicker.vue":
/*!*******************************************************!*\
  !*** ./resources/assets/js/components/datePicker.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _datePicker_vue_vue_type_template_id_0e041d33___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./datePicker.vue?vue&type=template&id=0e041d33& */ "./resources/assets/js/components/datePicker.vue?vue&type=template&id=0e041d33&");
/* harmony import */ var _datePicker_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./datePicker.vue?vue&type=script&lang=js& */ "./resources/assets/js/components/datePicker.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _datePicker_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./datePicker.vue?vue&type=style&index=0&lang=css& */ "./resources/assets/js/components/datePicker.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _datePicker_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _datePicker_vue_vue_type_template_id_0e041d33___WEBPACK_IMPORTED_MODULE_0__["render"],
  _datePicker_vue_vue_type_template_id_0e041d33___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/components/datePicker.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/datePicker.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/assets/js/components/datePicker.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_datePicker_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./datePicker.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/datePicker.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_datePicker_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/datePicker.vue?vue&type=style&index=0&lang=css&":
/*!****************************************************************************************!*\
  !*** ./resources/assets/js/components/datePicker.vue?vue&type=style&index=0&lang=css& ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_datePicker_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./datePicker.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/datePicker.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_datePicker_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_datePicker_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_datePicker_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_datePicker_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/assets/js/components/datePicker.vue?vue&type=template&id=0e041d33&":
/*!**************************************************************************************!*\
  !*** ./resources/assets/js/components/datePicker.vue?vue&type=template&id=0e041d33& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_datePicker_vue_vue_type_template_id_0e041d33___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./datePicker.vue?vue&type=template&id=0e041d33& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/datePicker.vue?vue&type=template&id=0e041d33&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_datePicker_vue_vue_type_template_id_0e041d33___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_datePicker_vue_vue_type_template_id_0e041d33___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/assets/js/components/formInfo.vue":
/*!*****************************************************!*\
  !*** ./resources/assets/js/components/formInfo.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _formInfo_vue_vue_type_template_id_77f7efa9___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./formInfo.vue?vue&type=template&id=77f7efa9& */ "./resources/assets/js/components/formInfo.vue?vue&type=template&id=77f7efa9&");
/* harmony import */ var _formInfo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./formInfo.vue?vue&type=script&lang=js& */ "./resources/assets/js/components/formInfo.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _formInfo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _formInfo_vue_vue_type_template_id_77f7efa9___WEBPACK_IMPORTED_MODULE_0__["render"],
  _formInfo_vue_vue_type_template_id_77f7efa9___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/components/formInfo.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/formInfo.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/assets/js/components/formInfo.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_formInfo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./formInfo.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/formInfo.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_formInfo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/formInfo.vue?vue&type=template&id=77f7efa9&":
/*!************************************************************************************!*\
  !*** ./resources/assets/js/components/formInfo.vue?vue&type=template&id=77f7efa9& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_formInfo_vue_vue_type_template_id_77f7efa9___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./formInfo.vue?vue&type=template&id=77f7efa9& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/formInfo.vue?vue&type=template&id=77f7efa9&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_formInfo_vue_vue_type_template_id_77f7efa9___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_formInfo_vue_vue_type_template_id_77f7efa9___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/assets/js/components/infoIcon.vue":
/*!*****************************************************!*\
  !*** ./resources/assets/js/components/infoIcon.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _infoIcon_vue_vue_type_template_id_78a8b7de___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./infoIcon.vue?vue&type=template&id=78a8b7de& */ "./resources/assets/js/components/infoIcon.vue?vue&type=template&id=78a8b7de&");
/* harmony import */ var _infoIcon_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./infoIcon.vue?vue&type=script&lang=js& */ "./resources/assets/js/components/infoIcon.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _infoIcon_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _infoIcon_vue_vue_type_template_id_78a8b7de___WEBPACK_IMPORTED_MODULE_0__["render"],
  _infoIcon_vue_vue_type_template_id_78a8b7de___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/components/infoIcon.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/infoIcon.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/assets/js/components/infoIcon.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_infoIcon_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./infoIcon.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/infoIcon.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_infoIcon_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/infoIcon.vue?vue&type=template&id=78a8b7de&":
/*!************************************************************************************!*\
  !*** ./resources/assets/js/components/infoIcon.vue?vue&type=template&id=78a8b7de& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_infoIcon_vue_vue_type_template_id_78a8b7de___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./infoIcon.vue?vue&type=template&id=78a8b7de& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/infoIcon.vue?vue&type=template&id=78a8b7de&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_infoIcon_vue_vue_type_template_id_78a8b7de___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_infoIcon_vue_vue_type_template_id_78a8b7de___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/assets/js/components/wajibBadge.vue":
/*!*******************************************************!*\
  !*** ./resources/assets/js/components/wajibBadge.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wajibBadge_vue_vue_type_template_id_2f7dfb81___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wajibBadge.vue?vue&type=template&id=2f7dfb81& */ "./resources/assets/js/components/wajibBadge.vue?vue&type=template&id=2f7dfb81&");
/* harmony import */ var _wajibBadge_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./wajibBadge.vue?vue&type=script&lang=js& */ "./resources/assets/js/components/wajibBadge.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _wajibBadge_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _wajibBadge_vue_vue_type_template_id_2f7dfb81___WEBPACK_IMPORTED_MODULE_0__["render"],
  _wajibBadge_vue_vue_type_template_id_2f7dfb81___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/components/wajibBadge.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/wajibBadge.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/assets/js/components/wajibBadge.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_wajibBadge_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./wajibBadge.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/wajibBadge.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_wajibBadge_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/wajibBadge.vue?vue&type=template&id=2f7dfb81&":
/*!**************************************************************************************!*\
  !*** ./resources/assets/js/components/wajibBadge.vue?vue&type=template&id=2f7dfb81& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_wajibBadge_vue_vue_type_template_id_2f7dfb81___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./wajibBadge.vue?vue&type=template&id=2f7dfb81& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/wajibBadge.vue?vue&type=template&id=2f7dfb81&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_wajibBadge_vue_vue_type_template_id_2f7dfb81___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_wajibBadge_vue_vue_type_template_id_2f7dfb81___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/assets/js/views/jalinanIuran/detail.vue":
/*!***********************************************************!*\
  !*** ./resources/assets/js/views/jalinanIuran/detail.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _detail_vue_vue_type_template_id_e682995e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./detail.vue?vue&type=template&id=e682995e& */ "./resources/assets/js/views/jalinanIuran/detail.vue?vue&type=template&id=e682995e&");
/* harmony import */ var _detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./detail.vue?vue&type=script&lang=js& */ "./resources/assets/js/views/jalinanIuran/detail.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _detail_vue_vue_type_template_id_e682995e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _detail_vue_vue_type_template_id_e682995e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/views/jalinanIuran/detail.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/views/jalinanIuran/detail.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/assets/js/views/jalinanIuran/detail.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./detail.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/jalinanIuran/detail.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/views/jalinanIuran/detail.vue?vue&type=template&id=e682995e&":
/*!******************************************************************************************!*\
  !*** ./resources/assets/js/views/jalinanIuran/detail.vue?vue&type=template&id=e682995e& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_detail_vue_vue_type_template_id_e682995e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./detail.vue?vue&type=template&id=e682995e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/jalinanIuran/detail.vue?vue&type=template&id=e682995e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_detail_vue_vue_type_template_id_e682995e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_detail_vue_vue_type_template_id_e682995e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/assets/js/views/jalinanIuran/tableAnggota.vue":
/*!*****************************************************************!*\
  !*** ./resources/assets/js/views/jalinanIuran/tableAnggota.vue ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tableAnggota_vue_vue_type_template_id_851568fe___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tableAnggota.vue?vue&type=template&id=851568fe& */ "./resources/assets/js/views/jalinanIuran/tableAnggota.vue?vue&type=template&id=851568fe&");
/* harmony import */ var _tableAnggota_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tableAnggota.vue?vue&type=script&lang=js& */ "./resources/assets/js/views/jalinanIuran/tableAnggota.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _tableAnggota_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _tableAnggota_vue_vue_type_template_id_851568fe___WEBPACK_IMPORTED_MODULE_0__["render"],
  _tableAnggota_vue_vue_type_template_id_851568fe___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/views/jalinanIuran/tableAnggota.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/views/jalinanIuran/tableAnggota.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** ./resources/assets/js/views/jalinanIuran/tableAnggota.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_tableAnggota_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./tableAnggota.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/jalinanIuran/tableAnggota.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_tableAnggota_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/views/jalinanIuran/tableAnggota.vue?vue&type=template&id=851568fe&":
/*!************************************************************************************************!*\
  !*** ./resources/assets/js/views/jalinanIuran/tableAnggota.vue?vue&type=template&id=851568fe& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_tableAnggota_vue_vue_type_template_id_851568fe___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./tableAnggota.vue?vue&type=template&id=851568fe& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/jalinanIuran/tableAnggota.vue?vue&type=template&id=851568fe&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_tableAnggota_vue_vue_type_template_id_851568fe___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_tableAnggota_vue_vue_type_template_id_851568fe___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);