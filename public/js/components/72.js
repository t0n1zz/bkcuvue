(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[72],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/collapseButton.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/collapseButton.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************/
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
//
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    id: {
      "default": ''
    }
  },
  data: function data() {
    return {
      clicked: false
    };
  },
  methods: {
    btnClick: function btnClick() {
      var _this = this;

      if (this.clicked) {
        setTimeout(function () {
          return _this.clicked = false;
        }, 400);
      } else {
        this.clicked = true;
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/laporanCu/index.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/views/laporanCu/index.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _components_pageHeader_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/pageHeader.vue */ "./resources/assets/js/components/pageHeader.vue");
/* harmony import */ var _components_message_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/message.vue */ "./resources/assets/js/components/message.vue");
/* harmony import */ var _select_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./select.vue */ "./resources/assets/js/views/laporanCu/select.vue");
/* harmony import */ var _table_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./table.vue */ "./resources/assets/js/views/laporanCu/table.vue");
/* harmony import */ var _tablePearls_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tablePearls.vue */ "./resources/assets/js/views/laporanCu/tablePearls.vue");
/* harmony import */ var _infografis_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./infografis.vue */ "./resources/assets/js/views/laporanCu/infografis.vue");
/* harmony import */ var _infografisPearls_vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./infografisPearls.vue */ "./resources/assets/js/views/laporanCu/infografisPearls.vue");
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








/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    pageHeader: _components_pageHeader_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    message: _components_message_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    selectData: _select_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    tableData: _table_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
    tablePearls: _tablePearls_vue__WEBPACK_IMPORTED_MODULE_5__["default"],
    infografisData: _infografis_vue__WEBPACK_IMPORTED_MODULE_6__["default"],
    infografisPearlsData: _infografisPearls_vue__WEBPACK_IMPORTED_MODULE_7__["default"]
  },
  data: function data() {
    return {
      title: 'Laporan Statistik',
      titlePearls: 'P.E.A.R.L.S',
      kelas: 'laporanCu',
      titleDesc: 'Mengelola data statistik CU',
      titleIcon: 'icon-stats-bars2',
      selectCUPath: 'laporanCuCU',
      tabName: 'table',
      katax: '\\frac{1.7888}{1,6777}',
      isTablePearls: false,
      isInfografis: false,
      isInfografisPearls: false
    };
  },
  created: function created() {
    this.checkTitle();
    this.checkUser('index_laporan_cu', this.$route.params.cu);
  },
  watch: {
    '$route': function $route(to, from) {
      // check current page meta
      this.checkTitle();
    }
  },
  methods: {
    checkUser: function checkUser(permission, id_cu) {
      if (this.currentUser) {
        if (!this.currentUser.can || !this.currentUser.can[permission]) {
          this.$router.push('/notFound');
        }

        if (!id_cu || this.currentUser.id_cu) {
          if (this.currentUser.id_cu != 0 && this.currentUser.id_cu != id_cu) {
            this.$router.push('/notFound');
          }
        }
      }
    },
    checkTitle: function checkTitle() {
      if (this.$route.meta.mode == "periode") {
        this.title = "Laporan Statistik CU";
        this.titleDesc = 'Mengelola data statistik CU';
      } else if (this.$route.meta.mode == "cu") {
        if (this.$route.params.tp == "konsolidasi") {
          this.title = "Laporan Statistik CU";
          this.titleDesc = 'Mengelola data statistik CU';
        } else {
          this.title = "Laporan Statistik TP/KP";
          this.titleDesc = 'Mengelola data statistik TP/KP';
        }
      } else if (this.$route.meta.mode == "cuPeriode") {
        this.title = "Laporan Statistik TP/KP";
        this.titleDesc = 'Mengelola data statistik TP/KP';
      } else {
        this.title = "Laporan Statistik CU";
        this.titleDesc = 'Mengelola data statistik CU';
      }
    },
    changeTab: function changeTab(value) {
      this.tabName = value;

      if (value == 'tablePearls' && !this.isTablePearls) {
        this.isTablePearls = true;
      }

      if (value == 'infografis' && !this.isInfografis) {
        this.isInfografis = true;
      }

      if (value == 'infografisPearls' && !this.isInfografisPearls) {
        this.isInfografisPearls = true;
      }
    }
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('laporanCu', {
    itemData: 'dataS',
    itemDataStat: 'dataStatS',
    itemPearls: 'pearls',
    itemPearlsStat: 'pearlsStat',
    columnData: 'columnData',
    columnDataPearls: 'columnDataPearls'
  }))
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/laporanCu/select.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/views/laporanCu/select.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
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

/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['kelas', 'path'],
  data: function data() {
    return {
      idCu: '',
      idTp: '',
      periode: '',
      periodeTp: ''
    };
  },
  created: function created() {
    if (this.currentUser.id_cu != undefined) {
      this.checkProfileIdCU();
    }
  },
  watch: {
    '$route': function $route(to, from) {
      // check current page meta
      this.checkProfileIdCU();
    },
    modelCuStat: function modelCuStat(value) {
      if (value === "success") {
        if (this.$route.meta.mode == 'cu' || this.$route.meta.mode == 'cuPeriode') {
          this.idCu = this.$route.params.cu;
          this.changeCu(this.idCu);
        } else {
          this.idCu = 'semua';
          this.changeCu(this.idCu);
        }
      }
    },
    modelTpStat: function modelTpStat(value) {
      if (value === "success") {
        if (this.$route.meta.mode == 'cu') {
          this.idTp = this.$route.params.tp;
        } else if (this.$route.meta.mode == 'cuPeriode') {
          this.idTp = 'semua';
          this.changeTp(this.idTp);
        } else {
          this.idTp = 'konsolidasi';
        }
      }
    },
    modelPeriodeStat: function modelPeriodeStat(value) {
      if (value === "success") {
        if (this.$route.meta.mode == 'periode') {
          this.periode = this.$route.params.periode;
        } else {
          this.periode = this.modelPeriode[0].periode;
        }
      }
    },
    modelPeriodeTpStat: function modelPeriodeTpStat(value) {
      if (value === "success") {
        if (this.$route.meta.mode == 'cuPeriode') {
          this.periodeTp = this.$route.params.periode;
        } else {
          this.periodeTp = this.modelPeriodeTp[0].periode;
        }

        this.changeTpPeriode(this.periodeTp);
      }
    }
  },
  methods: {
    checkProfileIdCU: function checkProfileIdCU() {
      if (this.currentUser.id_cu !== 0) {
        this.idCu = this.currentUser.id_cu;
        this.fetchTp();
      } else {
        this.fetchCU();
      }
    },
    fetch: function fetch() {
      if (this.idCu != 'semua') {
        if (this.idTp != 'semua') {
          this.$router.push({
            name: 'laporanCuCu',
            params: {
              cu: this.idCu,
              tp: this.idTp
            }
          });
        } else {
          this.$router.push({
            name: 'laporanCuCuPeriode',
            params: {
              cu: this.idCu,
              periode: this.periodeTp
            }
          });
        }
      } else {
        this.$router.push({
          name: 'laporanCuPeriode',
          params: {
            periode: this.periode
          }
        });
      }
    },
    fetchCU: function fetchCU() {
      if (this.modelCu.length == 0) {
        this.$store.dispatch('cu/getHeader', this.currentUser.id_pus);
      } else {
        if (this.$route.meta.mode == 'cu' || this.$route.meta.mode == 'cuPeriode') {
          this.idCu = this.$route.params.cu;
          this.changeCu(this.idCu);
        } else {
          this.idCu = 'semua';
          this.changeCu(this.idCu);
        }
      }
    },
    fetchPeriode: function fetchPeriode() {
      this.$store.dispatch('laporanCu/getPeriode');
    },
    fetchPeriodeTp: function fetchPeriodeTp() {
      this.$store.dispatch('laporanTp/getPeriode');
    },
    fetchTp: function fetchTp() {
      this.$store.dispatch('tp/getCu', this.idCu);
    },
    changeCu: function changeCu(value) {
      if (value != 'semua') {
        this.fetchTp();
      } else {
        this.fetchPeriode();
      }

      this.idTp = '';
    },
    changeTp: function changeTp(value) {
      if (this.currentUser.id_cu != 0) {
        if (this.idTp != 'semua') {
          this.$router.push({
            name: 'laporanCuCu',
            params: {
              cu: this.currentUser.id_cu,
              tp: value
            }
          });
        } else {
          this.$store.dispatch('laporanTp/getPeriode');
        }
      } else {
        if (this.idTp == 'semua') {
          this.$store.dispatch('laporanTp/getPeriode');
        }
      }
    },
    changeTpPeriode: function changeTpPeriode(value) {
      if (this.currentUser.id_cu != 0) {
        this.$router.push({
          name: 'laporanCuCuPeriode',
          params: {
            cu: this.currentUser.id_cu,
            periode: value
          }
        });
      }
    },
    classTp: function classTp() {
      var className = '';

      if (this.currentUser.id_cu == 0) {
        className = 'col-sm-5';
      } else {
        if (this.idTp == 'semua') {
          className = 'col-sm-6';
        } else {
          className = 'col-sm-12';
        }
      }

      return className;
    }
  },
  computed: _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('auth', {
    currentUser: 'currentUser'
  })), Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('laporanCu', {
    modelPeriode: 'periode',
    modelPeriodeStat: 'periodeStat'
  })), Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('laporanTp', {
    modelPeriodeTp: 'periode',
    modelPeriodeTpStat: 'periodeStat'
  })), Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('cu', {
    modelCu: 'headerDataS',
    modelCuStat: 'headerDataStatS',
    updateMessage: 'update',
    updateStat: 'updateStat'
  })), Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('tp', {
    modelTp: 'dataS',
    modelTpStat: 'dataStatS'
  })), Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('laporanCu', {
    itemDataStat: 'dataStatS'
  }))
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/laporanCu/table.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/views/laporanCu/table.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _components_dataviewer2_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/dataviewer2.vue */ "./resources/assets/js/components/dataviewer2.vue");
/* harmony import */ var _components_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/modal */ "./resources/assets/js/components/modal.vue");
/* harmony import */ var _components_checkValue_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/checkValue.vue */ "./resources/assets/js/components/checkValue.vue");
/* harmony import */ var _components_collapseButton_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/collapseButton.vue */ "./resources/assets/js/components/collapseButton.vue");
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






/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    DataViewer: _components_dataviewer2_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    appModal: _components_modal__WEBPACK_IMPORTED_MODULE_3__["default"],
    checkValue: _components_checkValue_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
    collapseButton: _components_collapseButton_vue__WEBPACK_IMPORTED_MODULE_5__["default"]
  },
  props: ["title", "kelas", "columnData"],
  data: function data() {
    return {
      query: {
        order_column: "periode",
        order_direction: "desc",
        filter_match: "and",
        limit: 50,
        page: 1
      },
      excelDownloadUrl: '',
      excelUploads: [{
        enabled: true,
        url: 'laporanCu/uploadExcel',
        format_url: 'formatLaporanCu.xlsx',
        next_page_route: 'laporanCuDraft',
        button: 'Upload Laporan Konsolidasi CU'
      }, {
        enabled: true,
        url: 'laporanCu/uploadExcelTp',
        format_url: 'formatLaporanTpSemua.xlsx',
        next_page_route: 'laporanTpDraft',
        button: 'Upload Laporan Tp'
      }],
      laporanCuDraftCount: [],
      laporanCuDraftCountStat: '',
      laporanTpDraftCount: [],
      laporanTpDraftCountStat: '',
      periode: '',
      selectedItem: [],
      state: '',
      modalShow: false,
      modalState: "",
      modalTitle: "",
      modalColor: "",
      modalButton: "",
      modalContent: ""
    };
  },
  created: function created() {
    this.checkProfile();
    this.fetch(this.query);
    this.columnGroup('semua');
  },
  watch: {
    // check route changes
    $route: function $route(to, from) {
      this.isFirstLoad = true;
      this.fetch(this.query);
    },
    modelPeriodeStat: function modelPeriodeStat(value) {
      if (value === "success") {
        if (this.$route.meta.mode == 'periode') {
          this.periode = this.$route.params.periode;
        } else {
          this.periode = this.modelPeriode[0].periode;
        }
      }
    },
    // when updating data
    updateStat: function updateStat(value) {
      this.modalState = value;
      this.modalButton = "Ok";

      if (value === "success") {
        this.modalTitle = this.updateMessage.message;
        this.modalContent = "";
        this.fetch();
      } else if (value === "fail") {
        this.modalContent = this.updateMessage;
      } else {
        this.modalContent = "";
      }
    },
    updateStatTp: function updateStatTp(value) {
      this.modalState = value;
      this.modalButton = "Ok";

      if (value === "success") {
        this.modalTitle = this.updateMessageTp.message;
        this.modalContent = "";
        this.fetch();
      } else if (value === "fail") {
        this.modalContent = this.updateMessageTp;
      } else {
        this.modalContent = "";
      }
    }
  },
  methods: {
    fetch: function fetch(params) {
      var i;
      this.checkProfile();

      if (this.$route.meta.mode == "periode") {
        // laporan cu with periode
        for (i = 0; i < this.columnData.length; i++) {
          if ([2].includes(i)) {
            this.columnData[i].disable = true;
          } else {
            this.columnData[i].disable = false;
          }
        }

        this.$store.dispatch(this.kelas + "/indexPeriode", [params, this.$route.params.periode]);
        this.excelDownloadUrl = this.kelas + '/indexPeriode/' + this.$route.params.periode;
        this.periode = this.$route.params.periode;
      } else if (this.$route.meta.mode == "cu") {
        for (i = 0; i < this.columnData.length; i++) {
          if ([1, 2, 3, 4].includes(i)) {
            this.columnData[i].disable = true;
          } else {
            this.columnData[i].disable = false;
          }
        }

        if (this.$route.params.tp == "konsolidasi") {
          //laporan cu konsolidasi per cu
          this.$store.dispatch(this.kelas + "/indexCu", [params, this.$route.params.cu]);
          this.excelDownloadUrl = this.kelas + '/indexCu/' + this.$route.params.cu;
          this.periode = '';
        } else {
          // laporan tp/kp per tp
          for (i = 0; i < this.columnData.length; i++) {
            if ([1, 2, 3, 4, 6].includes(i)) {
              this.columnData[i].disable = true;
            } else {
              this.columnData[i].disable = false;
            }
          }

          this.$store.dispatch(this.kelas + "/indexTp", [params, this.$route.params.tp]);
          this.excelDownloadUrl = 'laporanTp' + '/indexTp/' + this.$route.params.tp;
          this.periode = '';
        }
      } else if (this.$route.meta.mode == "cuPeriode") {
        // laporan tp/kp semua tp
        for (i = 0; i < this.columnData.length; i++) {
          if ([1, 3, 4, 6].includes(i)) {
            this.columnData[i].disable = true;
          } else {
            this.columnData[i].disable = false;
          }
        }

        this.$store.dispatch(this.kelas + "/indexTpPeriode", [params, this.$route.params.cu, this.$route.params.periode]);
        this.excelDownloadUrl = 'laporanTp' + '/indexCu/' + this.$route.params.cu + '/' + this.$route.params.periode;
        this.periode = this.$route.params.periode;
      } else {
        // laporan cu default
        for (i = 0; i < this.columnData.length; i++) {
          if ([2].includes(i)) {
            this.columnData[i].disable = true;
          } else {
            this.columnData[i].disable = false;
          }
        }

        this.$store.dispatch(this.kelas + "/index", params); // this.$store.dispatch(this.kelas + "/indexTotal");

        this.excelDownloadUrl = this.kelas;
      }
    },
    fetchLaporanCuDraft: function fetchLaporanCuDraft() {
      var _this = this;

      if (this.currentUser.can['upload_laporan_cu']) {
        axios.get('/api/laporanCuDraft/count').then(function (response) {
          _this.laporanCuDraftCount = response.data.model;
          _this.laporanCuDraftCountStat = 'success';
        })["catch"](function (error) {
          _this.laporanCuDraftCount = error.response;
          _this.laporanCuDraftCountStat = 'fail';
        });
      }
    },
    fetchLaporanTpDraft: function fetchLaporanTpDraft() {
      var _this2 = this;

      if (this.currentUser.can['upload_laporan_tp']) {
        axios.get('/api/laporanTpDraft/count').then(function (response) {
          _this2.laporanTpDraftCount = response.data.model;
          _this2.laporanTpDraftCountStat = 'success';
        })["catch"](function (error) {
          _this2.laporanTpDraftCount = error.response;
          _this2.laporanTpDraftCountStat = 'fail';
        });
      }
    },
    checkProfile: function checkProfile() {
      if (this.currentUser.id_cu != 0) {
        if (this.$route.meta.mode == "cu" || this.$route.meta.mode == "cuPeriode") {
          if (this.currentUser.id_cu != this.$route.params.cu) {
            this.$router.push({
              name: "notFound"
            });
          }
        } else if (this.$route.meta.mode == "periode") {
          this.$router.push({
            name: "notFound"
          });
        } else {
          this.$router.push({
            name: "notFound"
          });
        }

        this.excelUploads[0].url = 'laporanCu/uploadExcel';
        this.excelUploads[0].format_url = 'formatLaporanCu.xlsx';
        this.excelUploads[1].url = 'laporanTp/uploadExcel';
        this.excelUploads[1].format_url = 'formatLaporanTp.xlsx';
      } else {
        this.excelUploads[0].url = 'laporanCu/uploadExcelAll';
        this.excelUploads[0].format_url = 'formatLaporanCuSemua.xlsx';
        this.excelUploads[1].url = 'laporanTp/uploadExcelAll';
        this.excelUploads[1].format_url = 'formatLaporanTpSemua.xlsx';
      }

      if (this.currentUser.can['upload_laporan_cu']) {
        this.excelUploads[0].enabled = true;
      } else {
        this.excelUploads[0].enabled = false;
      }

      if (this.currentUser.can['upload_laporan_tp']) {
        this.excelUploads[1].enabled = true;
      } else {
        this.excelUploads[1].enabled = false;
      }
    },
    selectedRow: function selectedRow(item) {
      this.selectedItem = item;
    },
    ubahData: function ubahData(id, tp) {
      if (tp) {
        if (tp.id) {
          this.ubahLaporanTp(id);
        } else {
          this.modalShow = true;
          this.modalState = "normal1";
          this.modalColor = "bg-primary";
          this.modalTitle = "Ubah Laporan Konsolidasi";
          this.$store.dispatch("laporanTp/listLaporanTp", [this.selectedItem.id_cu, this.selectedItem.periode]);
        }
      } else {
        this.$router.push({
          name: this.kelas + "Edit",
          params: {
            id: id
          }
        });
      }
    },
    ubahLaporanTp: function ubahLaporanTp(id, tp) {
      this.modalShow = false;
      this.$router.push({
        name: "laporanTpEdit",
        params: {
          id: id
        }
      });
    },
    detailData: function detailData(id, tp) {
      if (tp && tp.id) {
        this.$router.push({
          name: "laporanTpDetail",
          params: {
            id: id
          }
        });
      } else {
        this.$router.push({
          name: "laporanCuDetail",
          params: {
            id: id
          }
        });
      }
    },
    columnGroup: function columnGroup(value) {
      var i;

      if (value == 'anggota') {
        for (i = 0; i < this.columnData.length; i++) {
          if ([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 48, 49].includes(i)) {
            this.columnData[i].hide = false;
          } else {
            this.columnData[i].hide = true;
          }
        }
      } else if (value == 'aset') {
        for (i = 0; i < this.columnData.length; i++) {
          if ([0, 1, 2, 3, 4, 5, 6, 13, 14, 15, 16, 17, 19, 22, 23, 45, 48, 49].includes(i)) {
            this.columnData[i].hide = false;
          } else {
            this.columnData[i].hide = true;
          }
        }
      } else if (value == 'shu') {
        for (i = 0; i < this.columnData.length; i++) {
          if ([0, 1, 2, 3, 4, 5, 6, 34, 35, 41, 42, 43, 44, 48, 49].includes(i)) {
            this.columnData[i].hide = false;
          } else {
            this.columnData[i].hide = true;
          }
        }
      } else if (value == 'piutang') {
        for (i = 0; i < this.columnData.length; i++) {
          if ([0, 1, 2, 3, 4, 5, 6, 27, 28, 29, 30, 31, 32, 33, 48, 49].includes(i)) {
            this.columnData[i].hide = false;
          } else {
            this.columnData[i].hide = true;
          }
        }
      } else if (value == 'semua') {
        for (i = 0; i < this.columnData.length; i++) {
          this.columnData[i].hide = false;
        }
      }
    },
    modalConfirmOpen: function modalConfirmOpen(state, isMobile, itemMobile) {
      this.modalShow = true;
      this.modalColor = "";
      this.modalState = "confirm-tutup";
      this.state = state;

      if (isMobile) {
        this.selectedItem = itemMobile;
      }

      if (state == "hapus") {
        this.modalTitle = "Hapus " + this.title + " ?";
        this.modalButton = "Iya, Hapus";
      }
    },
    modalTutup: function modalTutup() {
      this.modalShow = false;
      this.$store.dispatch(this.kelas + "/resetUpdateStat");
    },
    modalConfirmOk: function modalConfirmOk() {
      if (this.state == "hapus") {
        if (this.selectedItem.id_tp) {
          this.$store.dispatch("laporanTp/destroy", this.selectedItem.id);
        } else {
          this.$store.dispatch(this.kelas + "/destroy", this.selectedItem.id);
        }
      }
    },
    formatPeriode: function formatPeriode(value) {
      return vue__WEBPACK_IMPORTED_MODULE_0___default.a.filter("dateMonth")(value);
    }
  },
  computed: _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapGetters"])("auth", {
    currentUser: "currentUser"
  })), Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapGetters"])("global", {
    idCu: "idCu",
    idTp: "idTp",
    selectData: "data"
  })), Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapGetters"])("cu", {
    modelCU: "dataS",
    modelCUStat: "dataStatS"
  })), Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapGetters"])("tp", {
    modelTp: "dataS",
    modelTpStat: "dataStatS"
  })), Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapGetters"])("laporanCu", {
    totalData: "data",
    totalDataStat: "dataStat",
    itemData: "dataS",
    itemDataStat: "dataStatS",
    modelPeriode: "periode",
    modelPeriodeStat: "periodeStat",
    updateMessage: "update",
    updateStat: "updateStat"
  })), Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapGetters"])("laporanTp", {
    updateMessageTp: "update",
    updateStatTp: "updateStat"
  })), Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapGetters"])("laporanTp", {
    listLaporanTpData: "data2S",
    listLaporanTpDataStat: "dataStat2S"
  }))
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/laporanCu/tablePearls.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/views/laporanCu/tablePearls.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _components_dataviewer2_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/dataviewer2.vue */ "./resources/assets/js/components/dataviewer2.vue");
/* harmony import */ var _components_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/modal */ "./resources/assets/js/components/modal.vue");
/* harmony import */ var _components_checkValue_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/checkValue.vue */ "./resources/assets/js/components/checkValue.vue");
/* harmony import */ var _components_collapseButton_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/collapseButton.vue */ "./resources/assets/js/components/collapseButton.vue");
/* harmony import */ var _formKatex_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./formKatex.vue */ "./resources/assets/js/views/laporanCu/formKatex.vue");
/* harmony import */ var _itemPearls_vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./itemPearls.vue */ "./resources/assets/js/views/laporanCu/itemPearls.vue");
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








/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    DataViewer: _components_dataviewer2_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    appModal: _components_modal__WEBPACK_IMPORTED_MODULE_3__["default"],
    checkValue: _components_checkValue_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
    collapseButton: _components_collapseButton_vue__WEBPACK_IMPORTED_MODULE_5__["default"],
    formKatex: _formKatex_vue__WEBPACK_IMPORTED_MODULE_6__["default"],
    itemPearls: _itemPearls_vue__WEBPACK_IMPORTED_MODULE_7__["default"]
  },
  props: ["title", "kelas", "columnData"],
  data: function data() {
    return {
      query: {
        order_column: "periode",
        order_direction: "desc",
        filter_match: "and",
        limit: 50,
        page: 1
      },
      excelDownloadUrl: '',
      selectedItem: [],
      modalShow: false,
      modalState: "",
      modalTitle: "",
      modalSize: "",
      modalColor: "",
      modalButton: "",
      modalKatex: {
        id: "",
        id_cu: "",
        no_ba: "",
        periode: "",
        section: "",
        katex1: [],
        katex2: [],
        form: [],
        indikator: "",
        isUbah: false
      }
    };
  },
  created: function created() {
    this.fetch(this.query);
  },
  watch: {
    // check route changes
    $route: function $route(to, from) {
      this.isFirstLoad = true;
      this.fetch(this.query);
    },
    // when updating data
    updateStat: function updateStat(value) {
      this.modalState = value;
      this.modalButton = "Ok";

      if (value === "success") {
        this.modalTitle = this.updateMessage.message;
        this.modalContent = "";
        this.fetch(this.query);
      } else if (value === "fail") {
        this.modalContent = this.updateMessage;
      } else {
        this.modalContent = "";
      }
    },
    updateTpStat: function updateTpStat(value) {
      this.modalState = value;
      this.modalButton = "Ok";

      if (value === "success") {
        this.modalTitle = this.updateTpMessage.message;
        this.modalContent = "";
        this.fetch(this.query);
      } else if (value === "fail") {
        this.modalContent = this.updateTpMessage;
      } else {
        this.modalContent = "";
      }
    }
  },
  methods: {
    fetch: function fetch(params) {
      this.columnData[7].disable = false;
      this.columnData[20].disable = false;
      this.columnData[21].disable = false;
      this.columnData[22].disable = false;
      this.columnData[23].disable = false;
      this.columnData[24].disable = false;
      this.columnData[25].disable = false;
      this.columnData[26].disable = false;

      if (this.$route.meta.mode == "periode") {
        this.columnData[1].disable = false;
        this.columnData[3].disable = false;
        this.columnData[4].disable = false;
        this.columnData[5].disable = false;
        this.columnData[6].disable = false;
        this.columnData[2].disable = true;
        this.$store.dispatch(this.kelas + "/indexPearlsPeriode", [params, this.$route.params.periode]); // default route
      } else if (this.$route.meta.mode == "cu") {
        this.columnData[1].disable = true;
        this.columnData[3].disable = true;
        this.columnData[4].disable = true;

        if (this.$route.params.tp == "konsolidasi") {
          this.columnData[2].disable = false;
          this.columnData[5].disable = false;
          this.columnData[7].disable = false;
          this.columnData[1].disable = true;
          this.columnData[3].disable = true;
          this.columnData[4].disable = true;
          this.columnData[6].disable = true;
          this.disableColumnTpName(true);
          this.$store.dispatch(this.kelas + "/indexPearlsCu", [params, this.$route.params.cu]);
        } else {
          this.columnData[5].disable = false;
          this.columnData[7].disable = false;
          this.columnData[1].disable = true;
          this.columnData[2].disable = true;
          this.columnData[3].disable = true;
          this.columnData[4].disable = true;
          this.columnData[6].disable = true;
          this.$store.dispatch(this.kelas + "/indexPearlsTp", [params, this.$route.params.tp]);
        }
      } else if (this.$route.meta.mode == "cuPeriode") {
        this.columnData[2].disable = false;
        this.columnData[5].disable = false;
        this.columnData[7].disable = false;
        this.columnData[1].disable = true;
        this.columnData[3].disable = true;
        this.columnData[4].disable = true;
        this.columnData[6].disable = true;
        this.$store.dispatch(this.kelas + "/indexPearlsTpPeriode", [params, this.$route.params.cu, this.$route.params.periode]);
      } else {
        this.columnData[1].disable = false;
        this.columnData[3].disable = false;
        this.columnData[4].disable = false;
        this.columnData[5].disable = false;
        this.columnData[6].disable = false;
        this.columnData[2].disable = true;
        this.$store.dispatch(this.kelas + "/indexPearls", params);
      }
    },
    disableColumnCU: function disableColumnCU(status) {
      this.columnData[1].disable = status;
      this.columnData[3].disable = status;
      this.columnData[4].disable = status;
    },
    disableColumnTp: function disableColumnTp(status) {
      this.columnData[6].disable = status;
    },
    disableColumnTpName: function disableColumnTpName(status) {
      this.columnData[2].disable = status;
    },
    selectedRow: function selectedRow(item) {
      this.selectedItem = item;
    },
    ubahData: function ubahData(id, id_cu) {
      this.$router.push({
        name: this.kelas + "Edit",
        params: {
          id: id
        }
      });
    },
    modelKatexOpen: function modelKatexOpen(itemData, type) {
      this.modalSize = "modal-lg";
      this.modalColor = "bg-primary";
      this.modalShow = true;
      this.modalState = "normal1";
      this.modalKatex.id = itemData.id;
      this.modalKatex.periode = itemData.periode;

      if (itemData.id_tp) {
        this.modalKatex.id_cu = itemData.tp.id_cu;
        this.modalKatex.no_ba = itemData.tp.cu.no_ba;
        this.modalKatex.id_tp = itemData.id_tp;
        this.modalKatex.no_tp = itemData.no_tp;
        this.modalKatex.section = itemData.tp.name + ' periode ' + this.formatPeriode(itemData.periode);
      } else {
        this.modalKatex.id_tp = '';
        this.modalKatex.no_tp = '';
        this.modalKatex.id_cu = itemData.id_cu;
        this.modalKatex.no_ba = itemData.no_ba;

        if (itemData.cu) {
          this.modalKatex.section = 'CU ' + itemData.cu.name + ' periode ' + this.formatPeriode(itemData.periode);
        } else {
          this.modalKatex.section = 'CU ' + itemData.cu_name + ' periode ' + this.formatPeriode(itemData.periode);
        }
      } // p1


      if (type == "p1") {
        this.modalTitle = "P1 - Provisi pinjaman lalai di atas 12 bulan";
        this.modalKatex.form.push({
          title: "Cadangan Resiko",
          key: "dcr",
          value: itemData.dcr
        }, {
          title: "Piutang Lalai Di Atas 12 Bulan",
          key: "piutang_lalai_12bulan",
          value: itemData.piutang_lalai_12bulan
        });
        this.modalKatex.indikator = "100% provisi tersedia untuk pinjaman lalai di atas 12 bulan dan setiap triwulan dilakukan charge off secara konsisten.";
        var katex1Content1 = "\\text{P1} = \\dfrac{\\text{" + this.modalKatex.form[0].title + "}}{\\text{" + this.modalKatex.form[1].title + "}} \\times \\text{100} \\% = \\text{100} \\% (\\text{IDEAL})";
        var katex2Content1 = "\\text{P1} = \\dfrac{" + this.formatCurrency(this.modalKatex.form[0].value) + "}{\\text{" + this.formatCurrency(this.modalKatex.form[1].value) + "}} \\times \\text{100} \\% = " + this.formatPercentage(itemData.p1) + " \\% (\\text{" + (itemData.p1 >= 1 ? "IDEAL" : "TIDAK IDEAL") + "})";
        this.modalKatex.katex1.push({
          title: "",
          content: katex1Content1
        });
        this.modalKatex.katex2.push({
          title: "",
          content: katex2Content1
        }); // p2
      } else if (type == "p2") {
        this.modalTitle = "P2 -  Provisi pinjaman lalai 1 - 12 bulan";
        this.modalKatex.form.push({
          title: "Cadangan Resiko",
          key: "dcr",
          value: itemData.dcr
        }, {
          title: "Piutang Lalai Di Atas 12 Bulan",
          key: "piutang_lalai_12bulan",
          value: itemData.piutang_lalai_12bulan
        }, {
          title: "Piutang Lalai 1 - 12 Bulan",
          key: "piutang_lalai_1bulan",
          value: itemData.piutang_lalai_1bulan
        });
        this.modalKatex.indikator = "35% provisi tersedia untuk pinjaman lalai 1 – 12 bulan dan setiap triwulan dilakukan charge off dari waktu ke waktu";

        var _katex1Content = "\\text{P2} = \\dfrac{\\text{Saldo Cadangan Resiko setelah P1}[\\text{" + this.modalKatex.form[0].title + "} - \\text{" + this.modalKatex.form[1].title + "}]}{\\text{" + this.modalKatex.form[2].title + "}} \\times \\text{100} \\% = \\text{Di Atas 35} \\% (\\text{IDEAL})";

        var _katex2Content = "\\text{P2} = \\dfrac{" + this.formatCurrency(this.modalKatex.form[0].value) + " - \\text{" + this.formatCurrency(this.modalKatex.form[1].value) + "}}{\\text{" + this.formatCurrency(this.modalKatex.form[2].value) + "}} \\times \\text{100} \\% = " + this.formatPercentage(itemData.p2) + " \\% (\\text{" + (itemData.p2 >= 0.35 ? "IDEAL" : "TIDAK IDEAL") + "})";

        this.modalKatex.katex1.push({
          title: "",
          content: _katex1Content
        });

        if (itemData.p1 >= 1) {
          this.modalKatex.katex2.push({
            title: "",
            content: _katex2Content
          });
        } else {
          this.modalKatex.katex2.push({
            title: "Karena tidak ada saldo cadangan resiko setelah P1, maka P2 (TIDAK IDEAL)",
            content: _katex2Content
          });
        } // e1

      } else if (type == "e1") {
        this.modalTitle = "E1 - Piutang bersih / total aset";

        if (itemData.p1 >= 1 && itemData.p2 > 0.35) {
          this.modalKatex.form.push({
            title: "Piutang Beredar",
            key: "piutang_beredar",
            value: itemData.piutang_beredar
          }, {
            title: "Piutang Lalai Di Atas 12 Bulan",
            key: "piutang_lalai_12bulan",
            value: itemData.piutang_lalai_12bulan
          }, {
            title: "Piutang Lalai 1 - 12 Bulan",
            key: "piutang_lalai_1bulan",
            value: itemData.piutang_lalai_1bulan
          }, {
            title: "Aset",
            key: "aset",
            value: itemData.aset
          });
        } else {
          this.modalKatex.form.push({
            title: "Piutang Beredar",
            key: "piutang_beredar",
            value: itemData.piutang_beredar
          }, {
            title: "Cadangan Resiko",
            key: "dcr",
            value: itemData.dcr
          }, {
            title: "Aset",
            key: "aset",
            value: itemData.aset
          });
        }

        this.modalKatex.indikator = "Rasio Piutang Bersih adalah 70% – 80% dari total aset dan portofolio pinjaman beragam dengan setidaknya 5 macam produk pinjaman yang berbeda";
        var _katex1Content2 = "\\text{E1} = \\dfrac{\\text{Piutang Beredar} - ((\\text{100} \\% \\times \\text{Piutang Lalai Di Atas 12 Bulan}) + (\\text{35} \\% \\times \\text{Piutang Lalai 1 - 12 Bulan}))}{\\text{Aset}} \\times \\text{100} \\% = \\text{70} \\% \\text{ Sampai } \\text{80} \\% (\\text{IDEAL})";
        var katex1Content2 = "\\text{E1} = \\dfrac{\\text{Piutang Beredar} - \\text{Cadangan Resiko}}{\\text{Aset}} \\times \\text{100} \\% = \\text{70} \\% \\text{ Sampai } \\text{80} \\% (\\text{IDEAL})";
        var _katex2Content2 = "";
        var katex2Title1 = "";

        if (itemData.p1 >= 1 && itemData.p2 > 0.35) {
          katex2Title1 = "Dikarenakan P1 dan P2 (IDEAL), maka rumus yang digunakan adalah rumus 1";
          _katex2Content2 = "\\text{E1} = \\dfrac{\\text{" + this.formatCurrency(this.modalKatex.form[0].value) + "} - ((\\text{100} \\% \\times \\text{" + this.formatCurrency(this.modalKatex.form[1].value) + "}) + (\\text{35} \\% \\times \\text{" + this.formatCurrency(this.modalKatex.form[2].value) + "}))}{\\text{" + this.formatCurrency(this.modalKatex.form[3].value) + "}} \\times \\text{100} \\% = " + this.formatPercentage(itemData.e1) + " \\% (\\text{" + (itemData.e1 >= 0.7 && itemData.e1 <= 0.8 ? "IDEAL" : "TIDAK IDEAL") + "})";
        } else {
          katex2Title1 = "Dikarenakan P1 dan P2 (TIDAK IDEAL), maka rumus yang digunakan adalah rumus 2";
          _katex2Content2 = "\\text{E1} = \\dfrac{\\text{" + this.formatCurrency(this.modalKatex.form[0].value) + "} - \\text{" + this.formatCurrency(this.modalKatex.form[1].value) + "}}{\\text{" + this.formatCurrency(this.modalKatex.form[2].value) + "}} \\times \\text{100} \\% = " + this.formatPercentage(itemData.e1) + " \\% (\\text{" + (itemData.e1 >= 0.7 && itemData.e1 <= 0.8 ? "IDEAL" : "TIDAK IDEAL") + "})";
        }

        this.modalKatex.katex1.push({
          title: "Rumus 1 - apabila P1 dan P2 (IDEAL)",
          content: _katex1Content2
        }, {
          title: "Rumus 2 - apabila P1 dan P2 (TIDAK IDEAL)",
          content: katex1Content2
        });
        this.modalKatex.katex2.push({
          title: katex2Title1,
          content: _katex2Content2
        }); // e5
      } else if (type == "e5") {
        this.modalTitle = "E5 - Simpanan non saham / total aset";
        this.modalKatex.form.push({
          title: "Simpanan Non Saham Unggulan",
          key: "nonsaham_unggulan",
          value: itemData.nonsaham_unggulan
        }, {
          title: "Simpanan Non Saham Harian",
          key: "nonsaham_harian",
          value: itemData.nonsaham_harian
        }, {
          title: "Aset",
          key: "aset",
          value: itemData.aset
        });
        this.modalKatex.indikator = "Rasio 70% – 80% dari total aset dan memiliki beragam jenis simpanan minimal 5 jenis produk simpanan yang berbeda.";

        var _katex1Content3 = "\\text{E5} = \\dfrac{\\text{" + this.modalKatex.form[0].title + "} + \\text{" + this.modalKatex.form[1].title + "}}{\\text{" + this.modalKatex.form[2].title + "}} \\times \\text{100} \\% = \\text{70} \\% \\text{ Sampai } \\text{80} \\%(\\text{IDEAL})";

        var _katex2Content3 = "\\text{E5} = \\dfrac{\\text{" + this.formatCurrency(this.modalKatex.form[0].value) + "} + \\text{" + this.formatCurrency(this.modalKatex.form[1].value) + "}}{\\text{" + this.formatCurrency(this.modalKatex.form[2].value) + "}} \\times \\text{100} \\% = " + this.formatPercentage(itemData.e5) + " \\% (\\text{" + (itemData.e5 >= 0.7 && itemData.e5 <= 0.8 ? "IDEAL" : "TIDAK IDEAL") + "})";

        this.modalKatex.katex1.push({
          title: "",
          content: _katex1Content3
        });
        this.modalKatex.katex2.push({
          title: "",
          content: _katex2Content3
        }); // e6
      } else if (type == "e6") {
        this.modalTitle = "E6 - Pinjaman kepada pihak luar terhadap total aset";
        this.modalKatex.form.push({
          title: "Total Hutang Pihak Ke-3",
          key: "total_hutang_pihak3",
          value: itemData.total_hutang_pihak3
        }, {
          title: "Aset",
          key: "aset",
          value: itemData.aset
        });
        this.modalKatex.indikator = "Jumlah pinjaman kepada pihak eksternal 1% – 5% dari total aset.";

        var _katex1Content4 = "\\text{E6} = \\dfrac{\\text{" + this.modalKatex.form[0].title + "}}{\\text{" + this.modalKatex.form[1].title + "}} \\times \\text{100} \\% = \\text{Kurang Dari Sama Dengan 5} \\% (\\text{IDEAL})";

        var _katex2Content4 = "\\text{E6} = \\dfrac{\\text{" + this.formatCurrency(this.modalKatex.form[0].value) + "}}{\\text{" + this.formatCurrency(this.modalKatex.form[1].value) + "}} \\times \\text{100} \\% = " + this.formatPercentage(itemData.e6) + " \\% ( \\text{" + (itemData.e6 <= 0.05 ? "IDEAL" : "TIDAK IDEAL") + "})";

        this.modalKatex.katex1.push({
          title: "",
          content: _katex1Content4
        });
        this.modalKatex.katex2.push({
          title: "",
          content: _katex2Content4
        }); // e7
      } else if (type == "e7") {
        this.modalTitle = "E7 - Persentase total aset yang didanai dari simpanan saham";
        this.modalKatex.form.push({
          title: "Simpanan Saham",
          key: "simpanan_saham",
          value: itemData.simpanan_saham
        }, {
          title: "Aset",
          key: "aset",
          value: itemData.aset
        });
        this.modalKatex.indikator = "10-20% total aset yang didanai dari simpanan saham";

        var _katex1Content5 = "\\text{E7} = \\dfrac{\\text{" + this.modalKatex.form[0].title + "}}{\\text{" + this.modalKatex.form[1].title + "}} \\times \\text{100} \\% = \\text{10} \\% \\text{ Sampai } \\text{20} \\%(\\text{IDEAL})";

        var _katex2Content5 = "\\text{E7} = \\dfrac{" + this.formatCurrency(this.modalKatex.form[0].value) + "}{\\text{" + this.formatCurrency(this.modalKatex.form[1].value) + "}} \\times \\text{100} \\% = " + this.formatPercentage(itemData.e7) + " \\% (\\text{" + (itemData.e7 >= 0.1 && itemData.e7 <= 0.2 ? "IDEAL" : "TIDAK IDEAL") + "})";

        this.modalKatex.katex1.push({
          title: "",
          content: _katex1Content5
        });
        this.modalKatex.katex2.push({
          title: "",
          content: _katex2Content5
        }); // e9
      } else if (type == "e9") {
        this.modalTitle = "E9 - Modal lembaga bersih";
        this.modalKatex.form.push({
          title: "Cadangan Resiko",
          key: "dcr",
          value: itemData.dcr
        }, {
          title: "Cadangan Umum",
          key: "dcu",
          value: itemData.dcu
        }, {
          title: "Dana Gedung",
          key: "dana_gedung",
          value: itemData.dana_gedung
        }, {
          title: "Donasi",
          key: "donasi",
          value: itemData.donasi
        }, {
          title: "SHU Tahun Lalu",
          key: "shu_lalu",
          value: itemData.shu_lalu
        }, {
          title: "Piutang Lalai Di Atas 12 Bulan",
          key: "piutang_lalai_12bulan",
          value: itemData.piutang_lalai_12bulan
        }, {
          title: "Piutang Lalai 1 - 12 Bulan",
          key: "piutang_lalai_1bulan",
          value: itemData.piutang_lalai_1bulan
        }, {
          title: "Aset Bermasalah",
          key: "aset_masalah",
          value: itemData.aset_masalah
        }, {
          title: "Aset",
          key: "aset",
          value: itemData.aset
        });
        this.modalKatex.indikator = "Modal lembaga bersih sebesar 10% dari total aset.";

        var _katex1Content6 = "\\text{E9} = \\dfrac{(\\text{" + this.modalKatex.form[0].title + "} + \\text{" + this.modalKatex.form[1].title + "} + \\text{" + this.modalKatex.form[2].title + "} + \\text{" + this.modalKatex.form[3].title + "} + \\text{" + this.modalKatex.form[4].title + "}) - ((\\text{100} \\% \\times \\text{" + this.modalKatex.form[5].title + "}) + (\\text{35} \\% \\times \\text{" + this.modalKatex.form[6].title + "}) + \\text{" + this.modalKatex.form[7].title + "})}{\\text{" + this.modalKatex.form[8].title + "}} \\times \\text{100} \\% = \\text{Lebih Dari Sama Dengan 10} \\% (\\text{IDEAL})";

        var _katex2Content6 = "\\text{E9} = \\dfrac{(\\text{" + this.formatCurrency(this.modalKatex.form[0].value) + "} + \\text{" + this.formatCurrency(this.modalKatex.form[1].value) + "} + \\text{" + this.formatCurrency(this.modalKatex.form[2].value) + "} + \\text{" + this.formatCurrency(this.modalKatex.form[3].value) + "} + \\text{" + this.formatCurrency(this.modalKatex.form[4].value) + "}) - ((\\text{100} \\% \\times \\text{" + this.formatCurrency(this.modalKatex.form[5].value) + "}) + (\\text{35} \\% \\times \\text{" + this.formatCurrency(this.modalKatex.form[6].value) + "}) + \\text{" + this.formatCurrency(this.modalKatex.form[7].value) + "})}{\\text{" + this.formatCurrency(this.modalKatex.form[8].value) + "}} \\times \\text{100} \\% = " + this.formatPercentage(itemData.e9) + " \\% ( \\text{" + (itemData.e9 >= 0.1 ? "IDEAL" : "TIDAK IDEAL") + "})";

        this.modalKatex.katex1.push({
          title: "",
          content: _katex1Content6
        });
        this.modalKatex.katex2.push({
          title: "",
          content: _katex2Content6
        }); // a1
      } else if (type == "a1") {
        this.modalTitle = "A1 - Total pinjaman lalai / total pinjaman beredar";
        this.modalKatex.form.push({
          title: "Piutang Lalai Di Atas 12 Bulan",
          key: "piutang_lalai_12bulan",
          value: itemData.piutang_lalai_12bulan
        }, {
          title: "Piutang Lalai 1 - 12 Bulan",
          key: "piutang_lalai_1bulan",
          value: itemData.piutang_lalai_1bulan
        }, {
          title: "Piutang Beredar",
          key: "piutang_beredar",
          value: itemData.piutang_beredar
        });
        this.modalKatex.indikator = "Total pinjaman lalai &le; 5% dari total pinjaman beredar.";

        var _katex1Content7 = "\\text{A1} = \\dfrac{\\text{Total Pinjaman Lalai}[\\text{" + this.modalKatex.form[0].title + "} + \\text{" + this.modalKatex.form[1].title + "}]}{\\text{" + this.modalKatex.form[2].title + "}} \\times \\text{100} \\% = \\text{Kurang Dari Sama Dengan 5} \\% (\\text{IDEAL})";

        var _katex2Content7 = "\\text{A1} = \\dfrac{\\text{" + this.formatCurrency(this.modalKatex.form[0].value) + "} + \\text{" + this.formatCurrency(this.modalKatex.form[1].value) + "}}{\\text{" + this.formatCurrency(this.modalKatex.form[2].value) + "}} \\times \\text{100} \\% = " + this.formatPercentage(itemData.a1) + " \\% ( \\text{" + (itemData.a1 <= 0.05 ? "IDEAL" : "TIDAK IDEAL") + "})";

        this.modalKatex.katex1.push({
          title: "",
          content: _katex1Content7
        });
        this.modalKatex.katex2.push({
          title: "",
          content: _katex2Content7
        }); // a2
      } else if (type == "a2") {
        this.modalTitle = "A2 - Aset yang tidak menghasilkan / total aset";
        this.modalKatex.form.push({
          title: "Aset Tidak Menghasilkan",
          key: "aset_tidak_menghasilkan",
          value: itemData.aset_tidak_menghasilkan
        }, {
          title: "Aset",
          key: "aset",
          value: itemData.aset
        });
        this.modalKatex.indikator = "Aset tidak menghasilkan 5% dari total aset.";

        var _katex1Content8 = "\\text{A2} = \\dfrac{\\text{" + this.modalKatex.form[0].title + "}}{\\text{" + this.modalKatex.form[1].title + "}} \\times \\text{100} \\% = \\text{Kurang Dari Sama Dengan 5} \\% (\\text{IDEAL})";

        var _katex2Content8 = "\\text{A2} = \\dfrac{\\text{" + this.formatCurrency(this.modalKatex.form[0].value) + "}}{\\text{" + this.formatCurrency(this.modalKatex.form[1].value) + "}} \\times \\text{100} \\% = " + this.formatPercentage(itemData.a2) + " \\% ( \\text{" + (itemData.a2 <= 0.05 ? "IDEAL" : "TIDAK IDEAL") + "})";

        this.modalKatex.katex1.push({
          title: "",
          content: _katex1Content8
        });
        this.modalKatex.katex2.push({
          title: "",
          content: _katex2Content8
        }); // r7
      } else if (type == "r7") {
        this.modalTitle = "R7 - BJS saham terhadap rata-rata aset";
        this.modalKatex.form.push({
          title: "BJS Saham",
          key: "bjs_saham",
          value: itemData.bjs_saham
        }, {
          title: "Simpanan Saham Bulan Desember",
          key: "simpanan_saham_des",
          value: itemData.simpanan_saham_des
        }, {
          title: "Simpanan Saham Bulan " + this.formatPeriodeMonth(itemData.periode),
          key: "simpanan_saham",
          value: itemData.simpanan_saham
        }, {
          title: "Simpanan Saham Tahun Lalu",
          key: "simpanan_saham_lalu",
          value: itemData.simpanan_saham_lalu
        }, {
          title: "Harga Pasar",
          key: "harga_pasar",
          value: itemData.harga_pasar
        });
        this.modalKatex.indikator = "Dividen saham dibayar 1% lebih tinggi daripada suku bunga pasar";

        if (itemData.simpanan_saham_des != 0) {
          var _katex1Content9 = "\\text{R7} = \\dfrac{\\text{" + this.modalKatex.form[0].title + "}}{\\text{Simpanan Saham Rata-rata}(\\frac{\\text{" + this.modalKatex.form[1].title + "} + \\text{" + this.modalKatex.form[2].title + "}}{\\text{Jumlah Bulan Berjalan}} \\times \\text{12})} \\times \\text{100} \\% = \\text{Harga Pasar} \\% (\\text{IDEAL})";

          var _katex2Content9 = "\\text{R7} = \\dfrac{\\text{" + this.formatCurrency(this.modalKatex.form[0].value) + "}}{(\\frac{\\text{" + this.formatCurrency(this.modalKatex.form[1].value) + "} + \\text{" + this.formatCurrency(this.modalKatex.form[2].value) + "}}{\\text{" + this.formatPeriodeMonth(itemData.periode) + "}} \\times \\text{12})} \\times \\text{100} \\% = " + this.formatPercentage(itemData.r7_1) + " \\% ( \\text{" + (itemData.r7_1 == itemData.harga_pasar ? "IDEAL" : "TIDAK IDEAL") + "})";

          this.modalKatex.katex1.push({
            title: "Jika simpanan saham bersumber dari saldo bulan desember tahun lalu",
            content: _katex1Content9
          });
          this.modalKatex.katex2.push({
            title: "",
            content: _katex2Content9
          });
        }

        if (itemData.simpanan_saham_lalu != 0) {
          var _katex1Content10 = "\\text{R7} = \\dfrac{\\text{" + this.modalKatex.form[0].title + "}}{\\text{Simpanan Saham Rata-rata}(\\frac{\\text{" + this.modalKatex.form[3].title + "} + \\text{" + this.modalKatex.form[2].title + "}}{\\text{2}})} \\times \\text{100} \\% = \\text{Harga Pasar} \\% (\\text{IDEAL})";

          var katex2Content2 = "\\text{R7} = \\dfrac{\\text{" + this.formatCurrency(this.modalKatex.form[0].value) + "}}{(\\frac{\\text{" + this.formatCurrency(this.modalKatex.form[3].value) + "} + \\text{" + this.formatCurrency(this.modalKatex.form[2].value) + "}}{\\text{2}})} \\times \\text{100} \\% = " + this.formatPercentage(itemData.r7_2) + " \\% ( \\text{" + (itemData.r7_2 == itemData.harga_pasar ? "IDEAL" : "TIDAK IDEAL") + "})";
          this.modalKatex.katex1.push({
            title: "Jika simpanan saham bersumber dari saldo tahun lalu bulan " + this.formatPeriodeMonth(itemData.periode),
            content: _katex1Content10
          });
          this.modalKatex.katex2.push({
            title: "",
            content: katex2Content2
          });
        } //r9

      } else if (type == "r9") {
        this.modalTitle = "R9 - Biaya operasional terhadap rata-rata aset";
        this.modalKatex.form.push({
          title: "Total Biaya",
          key: "total_biaya",
          value: itemData.total_biaya
        }, {
          title: "Beban Penyisihan Cadangan Resiko",
          key: "beban_penyisihan_dcr",
          value: itemData.beban_penyisihan_dcr
        }, {
          title: "Aset",
          key: "aset",
          value: itemData.aset
        }, {
          title: "Aset Tahun Lalu",
          key: "aset_lalu",
          value: itemData.aset_lalu
        });
        this.modalKatex.indikator = "Beban operasional terhadap rata-rata aset sebesar 5%.";

        var _katex1Content11 = "\\text{R9} = \\dfrac{\\text{Beban Operasional}(\\text{" + this.modalKatex.form[0].title + "} - \\text{" + this.modalKatex.form[1].title + "})}{\\text{Rata-rata Aset}(\\frac{\\text{" + this.modalKatex.form[2].title + "} + \\text{" + this.modalKatex.form[3].title + "}}{\\text{2}})} \\times \\text{100} \\% <= \\text{5} \\% (\\text{IDEAL})";

        var _katex2Content10 = "\\text{R9} = \\dfrac{\\text{" + this.formatCurrency(this.modalKatex.form[0].value) + "} - \\text{" + this.formatCurrency(this.modalKatex.form[1].value) + "}}{\\frac{\\text{" + this.formatCurrency(this.modalKatex.form[2].value) + "} + \\text{" + this.formatCurrency(this.modalKatex.form[3].value) + "}}{\\text{2}}} \\times \\text{100} \\% = " + this.formatPercentage(itemData.r9) + " \\% ( \\text{" + (itemData.r9 <= 0.05 ? "IDEAL" : "TIDAK IDEAL") + "})";

        this.modalKatex.katex1.push({
          title: "",
          content: _katex1Content11
        });
        this.modalKatex.katex2.push({
          title: "",
          content: _katex2Content10
        }); //l1
      } else if (type == "l1") {
        this.modalTitle = "L1 - (investasi likuid + aset-aset likuid - hutang jangka pendek < 30 hari) / simpanan non saham";
        this.modalKatex.form.push({
          title: "Investasi Likuid",
          key: "investasi_likuid",
          value: itemData.investasi_likuid
        }, {
          title: "Aset Likuid Tidak Menghasilkan",
          key: "aset_likuid_tidak_menghasilkan",
          value: itemData.aset_likuid_tidak_menghasilkan
        }, {
          title: "Hutang Tidak Berbiaya < 30 Hari",
          key: "hutang_tidak_berbiaya_30hari",
          value: itemData.hutang_tidak_berbiaya_30hari
        }, {
          title: "Total Simpanan Non Saham",
          key: "tot_nonsaham",
          value: itemData.tot_nonsaham
        });
        this.modalKatex.indikator = "Likuiditas sebesar 15% dari total simpanan non saham tetapi tidak melampaui 20% dari total aset.";

        var _katex1Content12 = "\\text{L1} = \\dfrac{(\\text{" + this.modalKatex.form[0].title + "} + \\text{" + this.modalKatex.form[1].title + "}) - \\text{" + this.modalKatex.form[2].title + "}}{\\text{" + this.modalKatex.form[3].title + "}} \\times \\text{100} \\% = \\text{15} \\% \\text{ Sampai } \\text{20} \\% (\\text{IDEAL})";

        var _katex2Content11 = "\\text{L1} = \\dfrac{(\\text{" + this.formatCurrency(this.modalKatex.form[0].value) + "} + \\text{" + this.formatCurrency(this.modalKatex.form[1].value) + "}) - \\text{" + this.formatCurrency(this.modalKatex.form[2].value) + "}}{\\text{" + this.formatCurrency(this.modalKatex.form[3].value) + "}} \\times \\text{100} \\% = " + this.formatPercentage(itemData.l1) + " \\% (\\text{" + (itemData.l1 >= 0.15 && itemData.l1 <= 0.2 ? "IDEAL" : "TIDAK IDEAL") + "})";

        this.modalKatex.katex1.push({
          title: "",
          content: _katex1Content12
        });
        this.modalKatex.katex2.push({
          title: "",
          content: _katex2Content11
        }); //l2
      } else if (type == "l2") {
        this.modalTitle = "L2 - Likuiditas untuk memenuhi permintaan penarikan setelah membayar semua kewajiban < 30 hari";
        this.modalKatex.form.push({
          title: "Investasi Likuid",
          key: "investasi_likuid",
          value: itemData.investasi_likuid
        }, {
          title: "Aset Likuid Tidak Menghasilkan",
          key: "aset_likuid_tidak_menghasilkan",
          value: itemData.aset_likuid_tidak_menghasilkan
        }, {
          title: "Hutang Tidak Berbiaya < 30 Hari",
          key: "hutang_tidak_berbiaya_30hari",
          value: itemData.hutang_tidak_berbiaya_30hari
        }, {
          title: "Aset",
          key: "aset",
          value: itemData.aset
        });
        this.modalKatex.indikator = "Likuiditas sebesar 15% dari total simpanan non saham tetapi tidak melampaui 20% dari total aset.";

        var _katex1Content13 = "\\text{L1} = \\dfrac{(\\text{" + this.modalKatex.form[0].title + "} + \\text{" + this.modalKatex.form[1].title + "}) - \\text{" + this.modalKatex.form[2].title + "}}{\\text{" + this.modalKatex.form[3].title + "}} \\times \\text{100} \\% = \\text{15} \\% \\text{ Sampai } \\text{20} \\% (\\text{IDEAL})";

        var _katex2Content12 = "\\text{L1} = \\dfrac{(\\text{" + this.formatCurrency(this.modalKatex.form[0].value) + "} + \\text{" + this.formatCurrency(this.modalKatex.form[1].value) + "}) - \\text{" + this.formatCurrency(this.modalKatex.form[2].value) + "}}{\\text{" + this.formatCurrency(this.modalKatex.form[3].value) + "}} \\times \\text{100} \\% = " + this.formatPercentage(itemData.l1) + " \\% (\\text{" + (itemData.l1 >= 0.15 && itemData.l1 <= 0.2 ? "IDEAL" : "TIDAK IDEAL") + "})";

        this.modalKatex.katex1.push({
          title: "",
          content: _katex1Content13
        });
        this.modalKatex.katex2.push({
          title: "",
          content: _katex2Content12
        }); //s10
      } else if (type == "s10") {
        this.modalTitle = "S10 - Pertumbuhan anggota";
        this.modalKatex.form.push({
          title: "Lelaki Biasa",
          key: "l_biasa",
          value: itemData.l_biasa
        }, {
          title: "Lelaki L. Biasa",
          key: "l_lbiasa",
          value: itemData.l_lbiasa
        }, {
          title: "Perempuan Biasa",
          key: "p_biasa",
          value: itemData.p_biasa
        }, {
          title: "Perempuan L.Biasa",
          key: "p_lbiasa",
          value: itemData.p_lbiasa
        }, {
          title: "Total Anggota",
          key: "total_anggota",
          value: itemData.total_anggota,
          hideForm: true
        }, {
          title: "Total Anggota Tahun Lalu",
          key: "total_anggota_lalu",
          value: itemData.total_anggota_lalu
        });
        this.modalKatex.indikator = "Pertumbuhan anggota di atas 12% per tahun.";

        var _katex1Content14 = "\\text{s10} = \\dfrac{\\text{" + this.modalKatex.form[4].title + "} - \\text{" + this.modalKatex.form[5].title + "}}{\\text{" + this.modalKatex.form[5].title + "}} \\times \\text{100} \\% = \\text{Di Atas 12} \\% (\\text{IDEAL})";

        var _katex2Content13 = "\\text{s10} = \\dfrac{\\text{" + this.formatCurrency(this.modalKatex.form[4].value) + "} - \\text{" + this.formatCurrency(this.modalKatex.form[5].value) + "}}{\\text{" + this.formatCurrency(this.modalKatex.form[5].value) + "}} \\times \\text{100} \\% = " + this.formatPercentage(itemData.s10) + " \\% ( \\text{" + (itemData.s10 > 0.12 ? "IDEAL" : "TIDAK IDEAL") + "})";

        this.modalKatex.katex1.push({
          title: "",
          content: _katex1Content14
        });
        this.modalKatex.katex2.push({
          title: "",
          content: _katex2Content13
        }); //s11
      } else if (type == "s11") {
        this.modalTitle = "S11 - Pertumbuhan aset";
        this.modalKatex.form.push({
          title: "Aset",
          key: "aset",
          value: itemData.aset
        }, {
          title: "Aset Tahun Lalu",
          key: "aset_lalu",
          value: itemData.aset_lalu
        });
        this.modalKatex.indikator = "Pertumbuhan aset 10% di atas laju inflasi.";

        var _katex1Content15 = "\\text{s11} = \\dfrac{\\text{" + this.modalKatex.form[0].title + "} - \\text{" + this.modalKatex.form[1].title + "}}{\\text{" + this.modalKatex.form[1].title + "}} \\times \\text{100} \\% = \\text{10} \\% \\text{ Di Atas Laju Inflasi} (\\text{IDEAL})";

        var _katex2Content14 = "\\text{S11} = \\dfrac{\\text{" + this.formatCurrency(this.modalKatex.form[0].value) + "} - \\text{" + this.formatCurrency(this.modalKatex.form[1].value) + "}}{\\text{" + this.formatCurrency(this.modalKatex.form[1].value) + "}} \\times \\text{100} \\% = " + this.formatPercentage(itemData.s11) + " \\% ( \\text{" + (itemData.s11 > itemData.laju_inflasi + 0.1 ? "IDEAL" : "TIDAK IDEAL") + "})";

        this.modalKatex.katex1.push({
          title: "",
          content: _katex1Content15
        });
        this.modalKatex.katex2.push({
          title: "",
          content: _katex2Content14
        });
      }
    },
    modalKatexReset: function modalKatexReset() {
      this.modalKatex.isUbah = false;
      this.modalKatex.katex1 = [];
      this.modalKatex.katex2 = [];
      this.modalKatex.form = [];
    },
    modalConfirmOpen: function modalConfirmOpen(source, isMobile, itemMobile) {
      this.modalShow = true;
      this.modalState = "confirm-tutup";
      this.source = source;

      if (isMobile) {
        this.selectedItem = itemMobile;
      }

      if (source == "hapus") {
        this.modalTitle = "Hapus " + this.title + " " + this.selectedItem.name + " ?";
        this.modalButton = "Iya, Hapus";
      }
    },
    modalTutup: function modalTutup() {
      this.modalSize = "";
      this.modalShow = false;
      this.modalKatexReset(); //reset modal katex

      this.$store.dispatch(this.kelas + "/resetUpdateStat");
    },
    modalConfirmOk: function modalConfirmOk() {
      if (this.source == "hapus") {
        this.$store.dispatch(this.kelas + "/destroy", this.selectedItem.id);
      }

      this.modalSize = "";
    },
    formatPeriode: function formatPeriode(value) {
      return vue__WEBPACK_IMPORTED_MODULE_0___default.a.filter("dateMonth")(value);
    },
    formatPeriodeMonth: function formatPeriodeMonth(value) {
      return vue__WEBPACK_IMPORTED_MODULE_0___default.a.filter("month")(value);
    },
    formatCurrency: function formatCurrency(value) {
      if (value) {
        return this.$options.filters.currency(value, "", 0, {
          thousandsSeparator: "."
        });
      } else {
        return "(-)";
      }
    },
    formatPercentage: function formatPercentage(value) {
      return vue__WEBPACK_IMPORTED_MODULE_0___default.a.filter("percentage2")(value, 2);
    }
  },
  computed: _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapGetters"])("global", {
    idCu: "idCu",
    idTp: "idTp",
    selectData: "data"
  })), Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapGetters"])("cu", {
    modelCU: "dataS",
    modelCUStat: "dataStatS"
  })), Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapGetters"])("tp", {
    modelTp: "dataS",
    modelTpStat: "dataStatS"
  })), Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapGetters"])("laporanCu", {
    itemData: "pearls",
    itemDataStat: "pearlsStat",
    periodeData: "periode",
    periodeStat: "periodeStat",
    updateMessage: "update",
    updateStat: "updateStat"
  })), Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapGetters"])("laporanTp", {
    updateTpMessage: "update",
    updateTpStat: "updateStat"
  }))
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/laporanCu/index.vue?vue&type=style&index=0&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/views/laporanCu/index.vue?vue&type=style&index=0&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports
exports.i(__webpack_require__(/*! -!../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/katex/dist/katex.min.css */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/katex/dist/katex.min.css"), "");

// module
exports.push([module.i, "\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/file-saver/dist/FileSaver.min.js":
/*!*******************************************************!*\
  !*** ./node_modules/file-saver/dist/FileSaver.min.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function(a,b){if(true)!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (b),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else {}})(this,function(){"use strict";function b(a,b){return"undefined"==typeof b?b={autoBom:!1}:"object"!=typeof b&&(console.warn("Deprecated: Expected third argument to be a object"),b={autoBom:!b}),b.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(a.type)?new Blob(["\uFEFF",a],{type:a.type}):a}function c(a,b,c){var d=new XMLHttpRequest;d.open("GET",a),d.responseType="blob",d.onload=function(){g(d.response,b,c)},d.onerror=function(){console.error("could not download file")},d.send()}function d(a){var b=new XMLHttpRequest;b.open("HEAD",a,!1);try{b.send()}catch(a){}return 200<=b.status&&299>=b.status}function e(a){try{a.dispatchEvent(new MouseEvent("click"))}catch(c){var b=document.createEvent("MouseEvents");b.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),a.dispatchEvent(b)}}var f="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof global&&global.global===global?global:void 0,a=f.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),g=f.saveAs||("object"!=typeof window||window!==f?function(){}:"download"in HTMLAnchorElement.prototype&&!a?function(b,g,h){var i=f.URL||f.webkitURL,j=document.createElement("a");g=g||b.name||"download",j.download=g,j.rel="noopener","string"==typeof b?(j.href=b,j.origin===location.origin?e(j):d(j.href)?c(b,g,h):e(j,j.target="_blank")):(j.href=i.createObjectURL(b),setTimeout(function(){i.revokeObjectURL(j.href)},4E4),setTimeout(function(){e(j)},0))}:"msSaveOrOpenBlob"in navigator?function(f,g,h){if(g=g||f.name||"download","string"!=typeof f)navigator.msSaveOrOpenBlob(b(f,h),g);else if(d(f))c(f,g,h);else{var i=document.createElement("a");i.href=f,i.target="_blank",setTimeout(function(){e(i)})}}:function(b,d,e,g){if(g=g||open("","_blank"),g&&(g.document.title=g.document.body.innerText="downloading..."),"string"==typeof b)return c(b,d,e);var h="application/octet-stream"===b.type,i=/constructor/i.test(f.HTMLElement)||f.safari,j=/CriOS\/[\d]+/.test(navigator.userAgent);if((j||h&&i||a)&&"undefined"!=typeof FileReader){var k=new FileReader;k.onloadend=function(){var a=k.result;a=j?a:a.replace(/^data:[^;]*;/,"data:attachment/file;"),g?g.location.href=a:location=a,g=null},k.readAsDataURL(b)}else{var l=f.URL||f.webkitURL,m=l.createObjectURL(b);g?g.location=m:location.href=m,g=null,setTimeout(function(){l.revokeObjectURL(m)},4E4)}});f.saveAs=g.saveAs=g, true&&(module.exports=g)});

//# sourceMappingURL=FileSaver.min.js.map
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/laporanCu/index.vue?vue&type=style&index=0&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/views/laporanCu/index.vue?vue&type=style&index=0&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/laporanCu/index.vue?vue&type=style&index=0&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/collapseButton.vue?vue&type=template&id=3ad758d4&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/collapseButton.vue?vue&type=template&id=3ad758d4& ***!
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
  return _c("div", [
    _c(
      "button",
      {
        staticClass: "btn btn-link btn-block",
        attrs: { "data-toggle": "collapse", "data-target": ".collap" + _vm.id },
        on: { click: _vm.btnClick },
      },
      [
        _vm.clicked
          ? _c("span", [
              _c("i", { staticClass: "icon-arrow-up12" }),
              _vm._v(" Kembali "),
              _c("i", { staticClass: "icon-arrow-up12" }),
            ])
          : _c("span", [
              _c("i", { staticClass: "icon-arrow-down12" }),
              _vm._v(" Selengkapnya "),
              _c("i", { staticClass: "icon-arrow-down12" }),
            ]),
      ]
    ),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/laporanCu/index.vue?vue&type=template&id=92de98c6&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/views/laporanCu/index.vue?vue&type=template&id=92de98c6& ***!
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
  return _c(
    "div",
    [
      _c("page-header", {
        attrs: {
          title: _vm.title,
          titleDesc: _vm.titleDesc,
          titleIcon: _vm.titleIcon,
        },
      }),
      _vm._v(" "),
      _c("div", { staticClass: "page-content pt-0" }, [
        _c("div", { staticClass: "content-wrapper" }, [
          _c(
            "div",
            { staticClass: "content" },
            [
              _vm.itemDataStat === "fail"
                ? _c("message", {
                    attrs: {
                      title: "Oops terjadi kesalahan:",
                      errorData: _vm.itemData,
                    },
                  })
                : _vm._e(),
              _vm._v(" "),
              _vm.itemPearlsStat === "fail"
                ? _c("message", {
                    attrs: {
                      title: "Oops terjadi kesalahan:",
                      errorData: _vm.itemPearls,
                    },
                  })
                : _vm._e(),
              _vm._v(" "),
              _c("select-data", {
                attrs: { kelas: _vm.kelas, isPus: false, isNo_ba: true },
              }),
              _vm._v(" "),
              _c("div", { staticClass: "nav-tabs-responsive mb-3" }, [
                _c(
                  "ul",
                  { staticClass: "nav nav-tabs nav-tabs-solid bg-light" },
                  [
                    _c("li", { staticClass: "nav-item" }, [
                      _c(
                        "a",
                        {
                          staticClass: "nav-link",
                          class: { active: _vm.tabName == "table" },
                          attrs: { href: "#" },
                          on: {
                            click: function ($event) {
                              $event.preventDefault()
                              return _vm.changeTab("table")
                            },
                          },
                        },
                        [
                          _c("i", { staticClass: "icon-table2 mr-2" }),
                          _vm._v(" Tabel Statistik"),
                        ]
                      ),
                    ]),
                    _vm._v(" "),
                    _c("li", { staticClass: "nav-item" }, [
                      _c(
                        "a",
                        {
                          staticClass: "nav-link",
                          class: { active: _vm.tabName == "tablePearls" },
                          attrs: { href: "#" },
                          on: {
                            click: function ($event) {
                              $event.preventDefault()
                              return _vm.changeTab("tablePearls")
                            },
                          },
                        },
                        [
                          _c("i", { staticClass: "icon-table2 mr-2" }),
                          _vm._v(" Tabel P.E.A.R.L.S"),
                        ]
                      ),
                    ]),
                    _vm._v(" "),
                    _c("li", { staticClass: "nav-item" }, [
                      _c(
                        "a",
                        {
                          staticClass: "nav-link",
                          class: { active: _vm.tabName == "infografis" },
                          attrs: { href: "#" },
                          on: {
                            click: function ($event) {
                              $event.preventDefault()
                              return _vm.changeTab("infografis")
                            },
                          },
                        },
                        [
                          _c("i", { staticClass: "icon-graph mr-2" }),
                          _vm._v(" Infografis Statistik"),
                        ]
                      ),
                    ]),
                    _vm._v(" "),
                    _c("li", { staticClass: "nav-item" }, [
                      _c(
                        "a",
                        {
                          staticClass: "nav-link",
                          class: { active: _vm.tabName == "infografisPearls" },
                          attrs: { href: "#" },
                          on: {
                            click: function ($event) {
                              $event.preventDefault()
                              return _vm.changeTab("infografisPearls")
                            },
                          },
                        },
                        [
                          _c("i", { staticClass: "icon-graph mr-2" }),
                          _vm._v(" Infografis P.E.A.R.L.S"),
                        ]
                      ),
                    ]),
                  ]
                ),
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
                          value: _vm.tabName == "table",
                          expression: "tabName == 'table'",
                        },
                      ],
                    },
                    [
                      _c("table-data", {
                        attrs: {
                          title: _vm.title,
                          kelas: _vm.kelas,
                          columnData: _vm.columnData,
                        },
                      }),
                    ],
                    1
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
                  _vm.isTablePearls
                    ? _c(
                        "div",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: _vm.tabName == "tablePearls",
                              expression: "tabName == 'tablePearls'",
                            },
                          ],
                        },
                        [
                          _c("table-pearls", {
                            attrs: {
                              title: _vm.titlePearls,
                              kelas: _vm.kelas,
                              columnData: _vm.columnDataPearls,
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
                  _vm.isInfografis
                    ? _c(
                        "div",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: _vm.tabName == "infografis",
                              expression: "tabName == 'infografis'",
                            },
                          ],
                        },
                        [
                          _c("infografis-data", {
                            attrs: {
                              title: _vm.title,
                              kelas: _vm.kelas,
                              columnData: _vm.columnData,
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
                  _vm.isInfografisPearls
                    ? _c(
                        "div",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: _vm.tabName == "infografisPearls",
                              expression: "tabName == 'infografisPearls'",
                            },
                          ],
                        },
                        [
                          _c("infografis-pearls-data", {
                            attrs: {
                              title: _vm.titlePearls,
                              kelas: _vm.kelas,
                              columnData: _vm.columnDataPearls,
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
          ),
        ]),
      ]),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/laporanCu/select.vue?vue&type=template&id=e22cc27e&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/views/laporanCu/select.vue?vue&type=template&id=e22cc27e& ***!
  \*********************************************************************************************************************************************************************************************************************/
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
    _c("div", { staticClass: "card d-print-none" }, [
      _c("div", { staticClass: "card-body" }, [
        _c("div", { staticClass: "row" }, [
          this.currentUser.id_cu === 0
            ? _c("div", { staticClass: "col-sm-5" }, [
                this.currentUser.id_cu === 0
                  ? _c("div", { staticClass: "input-group" }, [
                      _vm._m(0),
                      _vm._v(" "),
                      _c(
                        "select",
                        {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.idCu,
                              expression: "idCu",
                            },
                          ],
                          staticClass: "form-control",
                          attrs: {
                            name: "idCu",
                            "data-width": "100%",
                            disabled: _vm.modelCuStat === "loading",
                          },
                          on: {
                            change: [
                              function ($event) {
                                var $$selectedVal = Array.prototype.filter
                                  .call($event.target.options, function (o) {
                                    return o.selected
                                  })
                                  .map(function (o) {
                                    var val = "_value" in o ? o._value : o.value
                                    return val
                                  })
                                _vm.idCu = $event.target.multiple
                                  ? $$selectedVal
                                  : $$selectedVal[0]
                              },
                              function ($event) {
                                return _vm.changeCu($event.target.value)
                              },
                            ],
                          },
                        },
                        [
                          _c("option", { attrs: { disabled: "", value: "" } }, [
                            _vm._v("Silahkan pilih data"),
                          ]),
                          _vm._v(" "),
                          _vm._t("default"),
                          _vm._v(" "),
                          _c("option", { attrs: { value: "semua" } }, [
                            _vm._v("Semua CU"),
                          ]),
                          _vm._v(" "),
                          _c("option", { attrs: { disabled: "", value: "" } }, [
                            _vm._v("----------------"),
                          ]),
                          _vm._v(" "),
                          _vm._l(_vm.modelCu, function (cu) {
                            return cu
                              ? _c("option", { domProps: { value: cu.id } }, [
                                  _vm._v(_vm._s(cu.name)),
                                ])
                              : _vm._e()
                          }),
                        ],
                        2
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "input-group-append" }, [
                        _c(
                          "button",
                          {
                            staticClass: "btn btn-light",
                            attrs: { disabled: _vm.modelCuStat === "loading" },
                            on: { click: _vm.fetchCU },
                          },
                          [
                            _c("i", {
                              staticClass: "icon-sync",
                              class: { spinner: _vm.modelCuStat === "loading" },
                            }),
                          ]
                        ),
                      ]),
                    ])
                  : _vm._e(),
              ])
            : _vm._e(),
          _vm._v(" "),
          _vm.idCu == "semua"
            ? _c("div", { staticClass: "col-sm-5" }, [
                this.currentUser.id_cu === 0
                  ? _c("div", { staticClass: "input-group" }, [
                      _vm._m(1),
                      _vm._v(" "),
                      _c(
                        "select",
                        {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.periode,
                              expression: "periode",
                            },
                          ],
                          staticClass: "form-control",
                          attrs: {
                            name: "periode",
                            "data-width": "100%",
                            disabled: _vm.modelPeriodeStat === "loading",
                          },
                          on: {
                            change: function ($event) {
                              var $$selectedVal = Array.prototype.filter
                                .call($event.target.options, function (o) {
                                  return o.selected
                                })
                                .map(function (o) {
                                  var val = "_value" in o ? o._value : o.value
                                  return val
                                })
                              _vm.periode = $event.target.multiple
                                ? $$selectedVal
                                : $$selectedVal[0]
                            },
                          },
                        },
                        [
                          _c("option", { attrs: { disabled: "", value: "" } }, [
                            _vm._v("Silahkan pilih periode laporan"),
                          ]),
                          _vm._v(" "),
                          _vm._t("default"),
                          _vm._v(" "),
                          _vm._l(_vm.modelPeriode, function (periode) {
                            return periode
                              ? _c(
                                  "option",
                                  { domProps: { value: periode.periode } },
                                  [
                                    _vm._v(
                                      _vm._s(
                                        _vm._f("dateMonth")(periode.periode)
                                      )
                                    ),
                                  ]
                                )
                              : _vm._e()
                          }),
                        ],
                        2
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "input-group-append" }, [
                        _c(
                          "button",
                          {
                            staticClass: "btn btn-light",
                            attrs: {
                              disabled: _vm.modelPeriodeStat === "loading",
                            },
                            on: { click: _vm.fetchPeriode },
                          },
                          [
                            _c("i", {
                              staticClass: "icon-sync",
                              class: {
                                spinner: _vm.modelPeriodeStat === "loading",
                              },
                            }),
                          ]
                        ),
                      ]),
                    ])
                  : _vm._e(),
              ])
            : _c("div", { class: _vm.classTp() }, [
                _c("div", { staticClass: "input-group" }, [
                  _vm._m(2),
                  _vm._v(" "),
                  _c(
                    "select",
                    {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.idTp,
                          expression: "idTp",
                        },
                      ],
                      staticClass: "form-control",
                      attrs: {
                        name: "tp",
                        "data-width": "100%",
                        disabled: _vm.modelTpStat === "loading",
                      },
                      on: {
                        change: [
                          function ($event) {
                            var $$selectedVal = Array.prototype.filter
                              .call($event.target.options, function (o) {
                                return o.selected
                              })
                              .map(function (o) {
                                var val = "_value" in o ? o._value : o.value
                                return val
                              })
                            _vm.idTp = $event.target.multiple
                              ? $$selectedVal
                              : $$selectedVal[0]
                          },
                          function ($event) {
                            return _vm.changeTp($event.target.value)
                          },
                        ],
                      },
                    },
                    [
                      _c("option", { attrs: { disabled: "", value: "" } }, [
                        _vm._v("Silahkan pilih TP/KP"),
                      ]),
                      _vm._v(" "),
                      _c("option", { attrs: { value: "konsolidasi" } }, [
                        _vm._v("Konsolidasi"),
                      ]),
                      _vm._v(" "),
                      _c("option", { attrs: { value: "semua" } }, [
                        _vm._v("Semua Tp"),
                      ]),
                      _vm._v(" "),
                      _c("option", { attrs: { disabled: "", value: "" } }, [
                        _vm._v("----------------"),
                      ]),
                      _vm._v(" "),
                      _vm._l(_vm.modelTp, function (tp) {
                        return tp
                          ? _c("option", { domProps: { value: tp.id } }, [
                              _vm._v(_vm._s(tp.name)),
                            ])
                          : _vm._e()
                      }),
                    ],
                    2
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "input-group-append" }, [
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-light",
                        attrs: { disabled: _vm.modelPeriodeStat === "loading" },
                        on: { click: _vm.fetchPeriode },
                      },
                      [
                        _c("i", {
                          staticClass: "icon-sync",
                          class: { spinner: _vm.modelCuStat === "loading" },
                        }),
                      ]
                    ),
                  ]),
                ]),
              ]),
          _vm._v(" "),
          _vm.idTp == "semua" && _vm.idCu != "semua"
            ? _c(
                "div",
                {
                  class: [
                    {
                      "col-sm-10":
                        _vm.currentUser.id_cu == 0 && _vm.idTp == "semua",
                      "col-sm-6":
                        _vm.currentUser.id_cu != 0 && _vm.idTp == "semua",
                    },
                    { "pt-2": _vm.currentUser.id_cu == 0 },
                  ],
                },
                [
                  _c("div", { staticClass: "input-group" }, [
                    _vm._m(3),
                    _vm._v(" "),
                    _c(
                      "select",
                      {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.periodeTp,
                            expression: "periodeTp",
                          },
                        ],
                        staticClass: "form-control",
                        attrs: {
                          name: "periodeTp",
                          "data-width": "100%",
                          disabled: _vm.modelPeriodeTpStat === "loading",
                        },
                        on: {
                          change: [
                            function ($event) {
                              var $$selectedVal = Array.prototype.filter
                                .call($event.target.options, function (o) {
                                  return o.selected
                                })
                                .map(function (o) {
                                  var val = "_value" in o ? o._value : o.value
                                  return val
                                })
                              _vm.periodeTp = $event.target.multiple
                                ? $$selectedVal
                                : $$selectedVal[0]
                            },
                            function ($event) {
                              return _vm.changeTpPeriode($event.target.value)
                            },
                          ],
                        },
                      },
                      [
                        _c("option", { attrs: { disabled: "", value: "" } }, [
                          _vm._v("Silahkan pilih periode laporan Tp"),
                        ]),
                        _vm._v(" "),
                        _vm._t("default"),
                        _vm._v(" "),
                        _vm._l(_vm.modelPeriodeTp, function (periode) {
                          return periode
                            ? _c(
                                "option",
                                { domProps: { value: periode.periode } },
                                [
                                  _vm._v(
                                    _vm._s(_vm._f("dateMonth")(periode.periode))
                                  ),
                                ]
                              )
                            : _vm._e()
                        }),
                      ],
                      2
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "input-group-append" }, [
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-light",
                          attrs: {
                            disabled: _vm.modelPeriodeTpStat === "loading",
                          },
                          on: { click: _vm.fetchPeriodeTp },
                        },
                        [
                          _c("i", {
                            staticClass: "icon-sync",
                            class: {
                              spinner: _vm.modelPeriodeTpStat === "loading",
                            },
                          }),
                        ]
                      ),
                    ]),
                  ]),
                ]
              )
            : _vm._e(),
          _vm._v(" "),
          this.currentUser.id_cu === 0
            ? _c(
                "div",
                {
                  staticClass: "col-sm-2",
                  class: { "pt-2": _vm.idCu != "semua" && _vm.idTp == "semua" },
                },
                [
                  _vm.itemDataStat != "loading"
                    ? _c(
                        "button",
                        {
                          staticClass: "btn btn-light btn-icon btn-block",
                          attrs: { type: "button" },
                          on: {
                            click: function ($event) {
                              $event.preventDefault()
                              return _vm.fetch()
                            },
                          },
                        },
                        [
                          _c("i", { staticClass: "icon-folder-open3" }),
                          _vm._v("  Tampilkan\n\t\t\t\t\t"),
                        ]
                      )
                    : _c(
                        "button",
                        {
                          staticClass: "btn btn-light btn-icon btn-block",
                          attrs: { type: "button" },
                        },
                        [_c("i", { staticClass: "icon-sync spinner" })]
                      ),
                ]
              )
            : _vm._e(),
        ]),
      ]),
    ]),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "input-group-prepend" }, [
      _c("span", { staticClass: "input-group-text" }, [_vm._v("Pilih Data")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "input-group-prepend" }, [
      _c("span", { staticClass: "input-group-text" }, [
        _vm._v("Pilih Periode"),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "input-group-prepend" }, [
      _c("span", { staticClass: "input-group-text" }, [_vm._v("Pilih TP/KP")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "input-group-prepend" }, [
      _c("span", { staticClass: "input-group-text" }, [
        _vm._v("Pilih Periode"),
      ]),
    ])
  },
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/laporanCu/table.vue?vue&type=template&id=702be899&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/views/laporanCu/table.vue?vue&type=template&id=702be899& ***!
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
  return _c(
    "div",
    [
      _c(
        "data-viewer",
        {
          attrs: {
            title: _vm.title,
            columnData: _vm.columnData,
            itemData: _vm.itemData,
            query: _vm.query,
            itemDataStat: _vm.itemDataStat,
            excelDownloadUrl: _vm.excelDownloadUrl,
            excelUploads: _vm.excelUploads,
          },
          on: { fetch: _vm.fetch },
          scopedSlots: _vm._u([
            {
              key: "item-desktop",
              fn: function (props) {
                return [
                  _c(
                    "tr",
                    {
                      staticClass: "text-nowrap",
                      class: {
                        "bg-info": _vm.selectedItem.id === props.item.id,
                        "bg-warning":
                          props.item.periode < _vm.periode &&
                          _vm.selectedItem.id !== props.item.id,
                      },
                      on: {
                        click: function ($event) {
                          return _vm.selectedRow(props.item)
                        },
                      },
                    },
                    [
                      !_vm.columnData[0].hide
                        ? _c("td", [
                            _vm._v(
                              "\n\t\t\t\t\t\t" +
                                _vm._s(
                                  props.index +
                                    1 +
                                    (+_vm.itemData.current_page - 1) *
                                      +_vm.itemData.per_page +
                                    "."
                                ) +
                                "\n\t\t\t\t\t"
                            ),
                          ])
                        : _vm._e(),
                      _vm._v(" "),
                      !_vm.columnData[1].hide && !_vm.columnData[1].disable
                        ? _c(
                            "td",
                            [
                              _c("check-value", {
                                attrs: { value: props.item.cu_name },
                              }),
                            ],
                            1
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      !_vm.columnData[2].hide && !_vm.columnData[2].disable
                        ? _c(
                            "td",
                            [
                              _c("check-value", {
                                attrs: { value: props.item.tp_name },
                              }),
                            ],
                            1
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      !_vm.columnData[3].hide && !_vm.columnData[3].disable
                        ? _c(
                            "td",
                            [
                              _c("check-value", {
                                attrs: { value: props.item.no_ba },
                              }),
                            ],
                            1
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      !_vm.columnData[4].hide && !_vm.columnData[4].disable
                        ? _c(
                            "td",
                            [
                              _c("check-value", {
                                attrs: { value: props.item.provinces_name },
                              }),
                            ],
                            1
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      !_vm.columnData[5].hide
                        ? _c("td", [
                            props.item.periode < _vm.periode
                              ? _c(
                                  "span",
                                  {
                                    directives: [
                                      {
                                        name: "tooltip",
                                        rawName: "v-tooltip:top",
                                        value:
                                          "Laporan ini bukanlah laporan periode " +
                                          _vm.formatPeriode(_vm.periode),
                                        expression:
                                          "'Laporan ini bukanlah laporan periode ' + formatPeriode(periode)",
                                        arg: "top",
                                      },
                                    ],
                                    staticClass: "label label-warning",
                                  },
                                  [
                                    _c("i", {
                                      staticClass: "icon-alert text-size-base",
                                    }),
                                  ]
                                )
                              : _vm._e(),
                            _vm._v(
                              "\n\t\t\t\t\t\t \n\t\t\t\t\t\t" +
                                _vm._s(
                                  _vm._f("dateMonth")(props.item.periode)
                                ) +
                                "\n\t\t\t\t\t"
                            ),
                          ])
                        : _vm._e(),
                      _vm._v(" "),
                      !_vm.columnData[6].hide && !_vm.columnData[6].disable
                        ? _c(
                            "td",
                            [
                              _c("check-value", {
                                attrs: { value: props.item.tp },
                              }),
                            ],
                            1
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      !_vm.columnData[7].hide
                        ? _c(
                            "td",
                            [
                              _c("check-value", {
                                attrs: {
                                  value: props.item.l_biasa,
                                  valueType: "currency",
                                },
                              }),
                            ],
                            1
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      !_vm.columnData[8].hide
                        ? _c(
                            "td",
                            [
                              _c("check-value", {
                                attrs: {
                                  value: props.item.l_lbiasa,
                                  valueType: "currency",
                                },
                              }),
                            ],
                            1
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      !_vm.columnData[9].hide
                        ? _c(
                            "td",
                            [
                              _c("check-value", {
                                attrs: {
                                  value: props.item.p_biasa,
                                  valueType: "currency",
                                },
                              }),
                            ],
                            1
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      !_vm.columnData[10].hide
                        ? _c(
                            "td",
                            [
                              _c("check-value", {
                                attrs: {
                                  value: props.item.p_lbiasa,
                                  valueType: "currency",
                                },
                              }),
                            ],
                            1
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      !_vm.columnData[11].hide
                        ? _c(
                            "td",
                            [
                              _c("check-value", {
                                attrs: {
                                  value: props.item.total_anggota,
                                  valueType: "currency",
                                },
                              }),
                            ],
                            1
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      !_vm.columnData[12].hide
                        ? _c(
                            "td",
                            [
                              _c("check-value", {
                                attrs: {
                                  value: props.item.total_anggota_lalu,
                                  valueType: "currency",
                                },
                              }),
                            ],
                            1
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      !_vm.columnData[13].hide
                        ? _c(
                            "td",
                            [
                              _c("check-value", {
                                attrs: {
                                  value: props.item.aset,
                                  valueType: "currency",
                                },
                              }),
                            ],
                            1
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      !_vm.columnData[14].hide
                        ? _c(
                            "td",
                            [
                              _c("check-value", {
                                attrs: {
                                  value: props.item.aset_lalu,
                                  valueType: "currency",
                                },
                              }),
                            ],
                            1
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      !_vm.columnData[15].hide
                        ? _c(
                            "td",
                            [
                              _c("check-value", {
                                attrs: {
                                  value: props.item.aset_masalah,
                                  valueType: "currency",
                                },
                              }),
                            ],
                            1
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      !_vm.columnData[16].hide
                        ? _c(
                            "td",
                            [
                              _c("check-value", {
                                attrs: {
                                  value: props.item.aset_tidak_menghasilkan,
                                  valueType: "currency",
                                },
                              }),
                            ],
                            1
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      !_vm.columnData[17].hide
                        ? _c(
                            "td",
                            [
                              _c("check-value", {
                                attrs: {
                                  value:
                                    props.item.aset_likuid_tidak_menghasilkan,
                                  valueType: "currency",
                                },
                              }),
                            ],
                            1
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      !_vm.columnData[18].hide
                        ? _c(
                            "td",
                            [
                              _c("check-value", {
                                attrs: {
                                  value: props.item.aktiva_lancar,
                                  valueType: "currency",
                                },
                              }),
                            ],
                            1
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      !_vm.columnData[19].hide
                        ? _c(
                            "td",
                            [
                              _c("check-value", {
                                attrs: {
                                  value: props.item.simpanan_saham,
                                  valueType: "currency",
                                },
                              }),
                            ],
                            1
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      !_vm.columnData[20].hide
                        ? _c(
                            "td",
                            [
                              _c("check-value", {
                                attrs: {
                                  value: props.item.simpanan_saham_lalu,
                                  valueType: "currency",
                                },
                              }),
                            ],
                            1
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      !_vm.columnData[21].hide
                        ? _c(
                            "td",
                            [
                              _c("check-value", {
                                attrs: {
                                  value: props.item.simpanan_saham_des,
                                  valueType: "currency",
                                },
                              }),
                            ],
                            1
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      !_vm.columnData[22].hide
                        ? _c(
                            "td",
                            [
                              _c("check-value", {
                                attrs: {
                                  value: props.item.nonsaham_unggulan,
                                  valueType: "currency",
                                },
                              }),
                            ],
                            1
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      !_vm.columnData[23].hide
                        ? _c(
                            "td",
                            [
                              _c("check-value", {
                                attrs: {
                                  value: props.item.nonsaham_harian,
                                  valueType: "currency",
                                },
                              }),
                            ],
                            1
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      !_vm.columnData[24].hide
                        ? _c(
                            "td",
                            [
                              _c("check-value", {
                                attrs: {
                                  value: props.item.hutang_spd,
                                  valueType: "currency",
                                },
                              }),
                            ],
                            1
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      !_vm.columnData[25].hide
                        ? _c(
                            "td",
                            [
                              _c("check-value", {
                                attrs: {
                                  value:
                                    props.item.hutang_tidak_berbiaya_30hari,
                                  valueType: "currency",
                                },
                              }),
                            ],
                            1
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      !_vm.columnData[26].hide
                        ? _c(
                            "td",
                            [
                              _c("check-value", {
                                attrs: {
                                  value: props.item.total_hutang_pihak3,
                                  valueType: "currency",
                                },
                              }),
                            ],
                            1
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      !_vm.columnData[27].hide
                        ? _c(
                            "td",
                            [
                              _c("check-value", {
                                attrs: {
                                  value: props.item.piutang_beredar,
                                  valueType: "currency",
                                },
                              }),
                            ],
                            1
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      !_vm.columnData[28].hide
                        ? _c(
                            "td",
                            [
                              _c("check-value", {
                                attrs: {
                                  value: props.item.piutang_bersih,
                                  valueType: "currency",
                                },
                              }),
                            ],
                            1
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      !_vm.columnData[29].hide
                        ? _c(
                            "td",
                            [
                              _c("check-value", {
                                attrs: {
                                  value: props.item.piutang_anggota,
                                  valueType: "currency",
                                },
                              }),
                            ],
                            1
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      !_vm.columnData[30].hide
                        ? _c(
                            "td",
                            [
                              _c("check-value", {
                                attrs: {
                                  value: props.item.piutang_lalai_1bulan,
                                  valueType: "currency",
                                },
                              }),
                            ],
                            1
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      !_vm.columnData[31].hide
                        ? _c(
                            "td",
                            [
                              _c("check-value", {
                                attrs: {
                                  value: props.item.piutang_lalai_12bulan,
                                  valueType: "currency",
                                },
                              }),
                            ],
                            1
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      !_vm.columnData[32].hide
                        ? _c(
                            "td",
                            [
                              _c("check-value", {
                                attrs: {
                                  value: props.item.rasio_beredar,
                                  valueType: "percentage",
                                },
                              }),
                            ],
                            1
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      !_vm.columnData[33].hide
                        ? _c(
                            "td",
                            [
                              _c("check-value", {
                                attrs: {
                                  value: props.item.rasio_lalai,
                                  valueType: "percentage",
                                },
                              }),
                            ],
                            1
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      !_vm.columnData[34].hide
                        ? _c(
                            "td",
                            [
                              _c("check-value", {
                                attrs: {
                                  value: props.item.dcr,
                                  valueType: "currency",
                                },
                              }),
                            ],
                            1
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      !_vm.columnData[35].hide
                        ? _c(
                            "td",
                            [
                              _c("check-value", {
                                attrs: {
                                  value: props.item.dcu,
                                  valueType: "currency",
                                },
                              }),
                            ],
                            1
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      !_vm.columnData[36].hide
                        ? _c(
                            "td",
                            [
                              _c("check-value", {
                                attrs: {
                                  value: props.item.dana_gedung,
                                  valueType: "currency",
                                },
                              }),
                            ],
                            1
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      !_vm.columnData[37].hide
                        ? _c(
                            "td",
                            [
                              _c("check-value", {
                                attrs: {
                                  value: props.item.donasi,
                                  valueType: "currency",
                                },
                              }),
                            ],
                            1
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      !_vm.columnData[38].hide
                        ? _c(
                            "td",
                            [
                              _c("check-value", {
                                attrs: {
                                  value: props.item.bjs_saham,
                                  valueType: "currency",
                                },
                              }),
                            ],
                            1
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      !_vm.columnData[39].hide
                        ? _c(
                            "td",
                            [
                              _c("check-value", {
                                attrs: {
                                  value: props.item.beban_penyisihan_dcr,
                                  valueType: "currency",
                                },
                              }),
                            ],
                            1
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      !_vm.columnData[40].hide
                        ? _c(
                            "td",
                            [
                              _c("check-value", {
                                attrs: {
                                  value: props.item.investasi_likuid,
                                  valueType: "currency",
                                },
                              }),
                            ],
                            1
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      !_vm.columnData[41].hide
                        ? _c(
                            "td",
                            [
                              _c("check-value", {
                                attrs: {
                                  value: props.item.total_pendapatan,
                                  valueType: "currency",
                                },
                              }),
                            ],
                            1
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      !_vm.columnData[42].hide
                        ? _c(
                            "td",
                            [
                              _c("check-value", {
                                attrs: {
                                  value: props.item.total_biaya,
                                  valueType: "currency",
                                },
                              }),
                            ],
                            1
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      !_vm.columnData[43].hide
                        ? _c(
                            "td",
                            [
                              _c("check-value", {
                                attrs: {
                                  value: props.item.shu,
                                  valueType: "currency",
                                },
                              }),
                            ],
                            1
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      !_vm.columnData[44].hide
                        ? _c(
                            "td",
                            [
                              _c("check-value", {
                                attrs: {
                                  value: props.item.shu_lalu,
                                  valueType: "currency",
                                },
                              }),
                            ],
                            1
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      !_vm.columnData[45].hide
                        ? _c(
                            "td",
                            [
                              _c("check-value", {
                                attrs: {
                                  value: props.item.rata_aset,
                                  valueType: "currency",
                                },
                              }),
                            ],
                            1
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      !_vm.columnData[46].hide
                        ? _c(
                            "td",
                            [
                              _c("check-value", {
                                attrs: {
                                  value: props.item.laju_inflasi / 100,
                                  valueType: "percentage",
                                },
                              }),
                            ],
                            1
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      !_vm.columnData[47].hide
                        ? _c(
                            "td",
                            [
                              _c("check-value", {
                                attrs: {
                                  value: props.item.harga_pasar / 100,
                                  valueType: "percentage",
                                },
                              }),
                            ],
                            1
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      !_vm.columnData[48].hide
                        ? _c("td", {
                            domProps: {
                              innerHTML: _vm._s(
                                _vm.$options.filters.dateTime(
                                  props.item.created_at
                                )
                              ),
                            },
                          })
                        : _vm._e(),
                      _vm._v(" "),
                      !_vm.columnData[49].hide
                        ? _c("td", [
                            props.item.created_at !== props.item.updated_at
                              ? _c("span", {
                                  domProps: {
                                    innerHTML: _vm._s(
                                      _vm.$options.filters.dateTime(
                                        props.item.updated_at
                                      )
                                    ),
                                  },
                                })
                              : _c("span", [_vm._v("-")]),
                          ])
                        : _vm._e(),
                    ]
                  ),
                ]
              },
            },
          ]),
        },
        [
          _c("template", { slot: "button-kolom" }, [
            _c(
              "button",
              {
                staticClass: "btn btn-light btn-block btn-icon mb-1",
                attrs: {
                  type: "button",
                  disabled: _vm.itemDataStat === "loading",
                },
                on: {
                  click: function ($event) {
                    $event.preventDefault()
                    return _vm.columnGroup("anggota")
                  },
                },
              },
              [_vm._v("\n\t\t\t\t\tAnggota\n\t\t\t\t")]
            ),
            _vm._v(" "),
            _c(
              "button",
              {
                staticClass: "btn btn-light btn-block btn-icon mb-1",
                attrs: {
                  type: "button",
                  disabled: _vm.itemDataStat === "loading",
                },
                on: {
                  click: function ($event) {
                    $event.preventDefault()
                    return _vm.columnGroup("aset")
                  },
                },
              },
              [_vm._v("\n\t\t\t\t\tAset\n\t\t\t\t")]
            ),
            _vm._v(" "),
            _c(
              "button",
              {
                staticClass: "btn btn-light btn-block btn-icon mb-1",
                attrs: {
                  type: "button",
                  disabled: _vm.itemDataStat === "loading",
                },
                on: {
                  click: function ($event) {
                    $event.preventDefault()
                    return _vm.columnGroup("shu")
                  },
                },
              },
              [_vm._v("\n\t\t\t\t\tSHU\n\t\t\t\t")]
            ),
            _vm._v(" "),
            _c(
              "button",
              {
                directives: [
                  {
                    name: "tooltip",
                    rawName: "v-tooltip:top",
                    value: "Kolom Piutang",
                    expression: "'Kolom Piutang'",
                    arg: "top",
                  },
                ],
                staticClass: "btn btn-light btn-block btn-icon mb-1",
                attrs: {
                  type: "button",
                  disabled: _vm.itemDataStat === "loading",
                },
                on: {
                  click: function ($event) {
                    $event.preventDefault()
                    return _vm.columnGroup("piutang")
                  },
                },
              },
              [_vm._v("\n\t\t\t\t\tPiutang\n\t\t\t\t")]
            ),
          ]),
          _vm._v(" "),
          _c(
            "template",
            { slot: "button-desktop" },
            [
              _vm.currentUser.can && _vm.currentUser.can["create_laporan_cu"]
                ? _c(
                    "router-link",
                    {
                      staticClass: "btn btn-light btn-icon mb-1",
                      attrs: { to: { name: _vm.kelas + "Create" } },
                    },
                    [
                      _c("i", { staticClass: "icon-plus3" }),
                      _vm._v(" Tambah\n\t\t\t\t"),
                    ]
                  )
                : _vm._e(),
              _vm._v(" "),
              _vm.currentUser.can && _vm.currentUser.can["update_laporan_cu"]
                ? _c(
                    "button",
                    {
                      staticClass: "btn btn-light btn-icon mb-1",
                      attrs: { disabled: !_vm.selectedItem.id },
                      on: {
                        click: function ($event) {
                          $event.preventDefault()
                          return _vm.ubahData(
                            _vm.selectedItem.id,
                            _vm.selectedItem.tp
                          )
                        },
                      },
                    },
                    [
                      _c("i", { staticClass: "icon-pencil5" }),
                      _vm._v(" Ubah\n\t\t\t\t"),
                    ]
                  )
                : _vm._e(),
              _vm._v(" "),
              _vm.currentUser.can && _vm.currentUser.can["destroy_laporan_cu"]
                ? _c(
                    "button",
                    {
                      staticClass: "btn btn-light btn-icon mb-1",
                      attrs: { disabled: !_vm.selectedItem.id },
                      on: {
                        click: function ($event) {
                          $event.preventDefault()
                          return _vm.modalConfirmOpen("hapus")
                        },
                      },
                    },
                    [
                      _c("i", { staticClass: "icon-bin2" }),
                      _vm._v(" Hapus\n\t\t\t\t"),
                    ]
                  )
                : _vm._e(),
              _vm._v(" "),
              _vm.currentUser.can && _vm.currentUser.can["update_laporan_cu"]
                ? _c(
                    "button",
                    {
                      staticClass: "btn btn-light btn-icon mb-1",
                      attrs: { disabled: !_vm.selectedItem.id },
                      on: {
                        click: function ($event) {
                          $event.preventDefault()
                          return _vm.detailData(
                            _vm.selectedItem.id,
                            _vm.selectedItem.tp
                          )
                        },
                      },
                    },
                    [
                      _c("i", { staticClass: "icon-stack2" }),
                      _vm._v(" Detail\n\t\t\t\t"),
                    ]
                  )
                : _vm._e(),
              _vm._v(" "),
              _vm.currentUser.can["upload_laporan_cu"] &&
              _vm.laporanCuDraftCountStat == "success" &&
              _vm.laporanCuDraftCount > 0
                ? _c(
                    "router-link",
                    {
                      staticClass: "btn btn-light btn-icon mb-1",
                      attrs: { to: { name: "laporanCuDraft" } },
                    },
                    [
                      _c("i", { staticClass: "icon-table2" }),
                      _vm._v(" Laporan Statistik CU [DRAFT]\n\t\t\t\t"),
                    ]
                  )
                : _vm._e(),
              _vm._v(" "),
              _vm.currentUser.can["upload_laporan_tp"] &&
              _vm.laporanTpDraftCountStat == "success" &&
              _vm.laporanTpDraftCount > 0
                ? _c(
                    "router-link",
                    {
                      staticClass: "btn btn-light btn-icon mb-1",
                      attrs: { to: { name: "laporanTpDraft" } },
                    },
                    [
                      _c("i", { staticClass: "icon-table2" }),
                      _vm._v(" Laporan Statistik TP/KP [DRAFT]\n\t\t\t\t"),
                    ]
                  )
                : _vm._e(),
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "template",
            { slot: "button-mobile" },
            [
              _vm.currentUser.can && _vm.currentUser.can["create_laporan_cu"]
                ? _c(
                    "router-link",
                    {
                      staticClass: "btn btn-light btn-icon btn-block mb-1",
                      attrs: { to: { name: _vm.kelas + "Create" } },
                    },
                    [
                      _c("i", { staticClass: "icon-plus3" }),
                      _vm._v(" Tambah\n\t\t\t\t"),
                    ]
                  )
                : _vm._e(),
              _vm._v(" "),
              _vm.currentUser.can && _vm.currentUser.can["update_laporan_cu"]
                ? _c(
                    "button",
                    {
                      staticClass: "btn btn-light btn-icon btn-block mb-1",
                      attrs: { disabled: !_vm.selectedItem.id },
                      on: {
                        click: function ($event) {
                          $event.preventDefault()
                          return _vm.ubahData(
                            _vm.selectedItem.id,
                            _vm.selectedItem.tp
                          )
                        },
                      },
                    },
                    [
                      _c("i", { staticClass: "icon-pencil5" }),
                      _vm._v(" Ubah\n\t\t\t\t"),
                    ]
                  )
                : _vm._e(),
              _vm._v(" "),
              _vm.currentUser.can && _vm.currentUser.can["destroy_laporan_cu"]
                ? _c(
                    "button",
                    {
                      staticClass: "btn btn-light btn-icon btn-block mb-1",
                      attrs: { disabled: !_vm.selectedItem.id },
                      on: {
                        click: function ($event) {
                          $event.preventDefault()
                          return _vm.modalConfirmOpen("hapus")
                        },
                      },
                    },
                    [
                      _c("i", { staticClass: "icon-bin2" }),
                      _vm._v(" Hapus\n\t\t\t\t"),
                    ]
                  )
                : _vm._e(),
              _vm._v(" "),
              _vm.currentUser.can && _vm.currentUser.can["update_laporan_cu"]
                ? _c(
                    "button",
                    {
                      staticClass: "btn btn-light btn-icon btn-block mb-1",
                      attrs: { disabled: !_vm.selectedItem.id },
                      on: {
                        click: function ($event) {
                          $event.preventDefault()
                          return _vm.detailData(
                            _vm.selectedItem.id,
                            _vm.selectedItem.tp
                          )
                        },
                      },
                    },
                    [
                      _c("i", { staticClass: "icon-stack2" }),
                      _vm._v(" Detail\n\t\t\t\t"),
                    ]
                  )
                : _vm._e(),
              _vm._v(" "),
              _vm.currentUser.can["upload_laporan_cu"] &&
              _vm.laporanCuDraftCountStat == "success" &&
              _vm.laporanCuDraftCount > 0
                ? _c(
                    "router-link",
                    {
                      staticClass: "btn btn-light btn-icon btn-block mb-1",
                      attrs: { to: { name: "laporanCuDraft" } },
                    },
                    [
                      _c("i", { staticClass: "icon-table2" }),
                      _vm._v(" Laporan Statistik CU [DRAFT]\n\t\t\t\t"),
                    ]
                  )
                : _vm._e(),
              _vm._v(" "),
              _vm.currentUser.can["upload_laporan_tp"] &&
              _vm.laporanTpDraftCountStat == "success" &&
              _vm.laporanTpDraftCount > 0
                ? _c(
                    "router-link",
                    {
                      staticClass: "btn btn-light btn-icon btn-block mb-1",
                      attrs: { to: { name: "laporanTpDraft" } },
                    },
                    [
                      _c("i", { staticClass: "icon-table2" }),
                      _vm._v(" Laporan Statistik TP/KP [DRAFT]\n\t\t\t\t"),
                    ]
                  )
                : _vm._e(),
            ],
            1
          ),
        ],
        2
      ),
      _vm._v(" "),
      _c(
        "app-modal",
        {
          attrs: {
            show: _vm.modalShow,
            state: _vm.modalState,
            title: _vm.modalTitle,
            color: _vm.modalColor,
            button: _vm.modalButton,
            content: _vm.modalContent,
          },
          on: {
            tutup: _vm.modalTutup,
            confirmOk: _vm.modalConfirmOk,
            successOk: _vm.modalTutup,
            failOk: _vm.modalTutup,
            backgroundClick: _vm.modalTutup,
          },
        },
        [
          _c("template", { slot: "modal-title" }, [
            _vm._v(_vm._s(_vm.modalTitle)),
          ]),
          _vm._v(" "),
          _c("template", { slot: "modal-body1" }, [
            _c(
              "div",
              { staticClass: "alert bg-info alert-styled-left mt-1 pt-1 pb-1" },
              [
                _c("p", [
                  _vm._v(
                    "Laporan ini merupakan laporan konsolidasi dari beberapa laporan di Tp. Oleh karena hal tersebut maka untuk\n\t\t\t\t\t\tmelakukan perubahan pada laporan konsolidasi mesti melakukan perubahan pada laporan Tp yang dapat dipilih\n\t\t\t\t\t\tdibawah:"
                  ),
                ]),
              ]
            ),
            _vm._v(" "),
            _c("hr"),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "row" },
              _vm._l(_vm.listLaporanTpData, function (index, laporanTp) {
                return _c(
                  "div",
                  { key: index, staticClass: "col-md-6  pt-1 pb-1" },
                  [
                    _c(
                      "a",
                      {
                        staticClass: "btn btn-light btn-block",
                        on: {
                          click: function ($event) {
                            $event.preventDefault()
                            return _vm.ubahLaporanTp(laporanTp.id)
                          },
                        },
                      },
                      [
                        _c("i", { staticClass: "icon-pencil5" }),
                        _vm._v(
                          "\n\t\t\t\t\t\t\tUbah Laporan " +
                            _vm._s(laporanTp.tp.name)
                        ),
                      ]
                    ),
                  ]
                )
              }),
              0
            ),
            _vm._v(" "),
            _c("hr"),
            _vm._v(" "),
            _c("div", { staticClass: "text-center d-none d-md-block" }, [
              _c(
                "button",
                {
                  staticClass: "btn btn-light",
                  attrs: { type: "button" },
                  on: {
                    click: function ($event) {
                      $event.preventDefault()
                      return _vm.modalTutup.apply(null, arguments)
                    },
                  },
                },
                [
                  _c("i", { staticClass: "icon-cross" }),
                  _vm._v(" Tutup\n\t\t\t\t\t"),
                ]
              ),
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "d-block d-md-none" }, [
              _c(
                "button",
                {
                  directives: [
                    {
                      name: "tooltip",
                      rawName: "v-tooltip:top",
                      value: "Tutup",
                      expression: "'Tutup'",
                      arg: "top",
                    },
                  ],
                  staticClass: "btn btn-light btn-block",
                  attrs: { type: "button" },
                  on: {
                    click: function ($event) {
                      $event.preventDefault()
                      return _vm.modalTutup.apply(null, arguments)
                    },
                  },
                },
                [
                  _c("i", { staticClass: "icon-cross" }),
                  _vm._v(" Tutup\n\t\t\t\t\t"),
                ]
              ),
            ]),
          ]),
        ],
        2
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/laporanCu/tablePearls.vue?vue&type=template&id=dd85c334&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/views/laporanCu/tablePearls.vue?vue&type=template&id=dd85c334& ***!
  \**************************************************************************************************************************************************************************************************************************/
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
      _c("data-viewer", {
        attrs: {
          title: _vm.title,
          columnData: _vm.columnData,
          itemData: _vm.itemData,
          query: _vm.query,
          itemDataStat: _vm.itemDataStat,
          excelDownloadUrl: _vm.excelDownloadUrl,
          isUploadExcel: true,
        },
        on: { fetch: _vm.fetch },
        scopedSlots: _vm._u([
          {
            key: "item-desktop",
            fn: function (props) {
              return [
                _c(
                  "tr",
                  {
                    staticClass: "text-nowrap",
                    class: {
                      "bg-info": _vm.selectedItem.id === props.item.id,
                      "bg-warning":
                        props.item.periode < _vm.selectData &&
                        _vm.selectedItem.id !== props.item.id &&
                        _vm.idCu == "semua",
                    },
                    on: {
                      click: function ($event) {
                        return _vm.selectedRow(props.item)
                      },
                    },
                  },
                  [
                    !_vm.columnData[0].hide
                      ? _c("td", [
                          _vm._v(
                            "\n\t\t\t\t\t\t" +
                              _vm._s(
                                props.index +
                                  1 +
                                  (+_vm.itemData.current_page - 1) *
                                    +_vm.itemData.per_page +
                                  "."
                              ) +
                              "\n\t\t\t\t\t"
                          ),
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    !_vm.columnData[1].hide && !_vm.columnData[1].disable
                      ? _c(
                          "td",
                          [
                            _c("check-value", {
                              attrs: { value: props.item.cu_name },
                            }),
                          ],
                          1
                        )
                      : _vm._e(),
                    _vm._v(" "),
                    !_vm.columnData[2].hide && !_vm.columnData[2].disable
                      ? _c(
                          "td",
                          [
                            _c("check-value", {
                              attrs: { value: props.item.tp_name },
                            }),
                          ],
                          1
                        )
                      : _vm._e(),
                    _vm._v(" "),
                    !_vm.columnData[3].hide && !_vm.columnData[3].disable
                      ? _c(
                          "td",
                          [
                            _c("check-value", {
                              attrs: { value: props.item.no_ba },
                            }),
                          ],
                          1
                        )
                      : _vm._e(),
                    _vm._v(" "),
                    !_vm.columnData[4].hide && !_vm.columnData[4].disable
                      ? _c(
                          "td",
                          [
                            _c("check-value", {
                              attrs: { value: props.item.provinces_name },
                            }),
                          ],
                          1
                        )
                      : _vm._e(),
                    _vm._v(" "),
                    !_vm.columnData[5].hide
                      ? _c("td", [
                          props.item.periode < _vm.selectData &&
                          _vm.idCu == "semua"
                            ? _c(
                                "span",
                                {
                                  directives: [
                                    {
                                      name: "tooltip",
                                      rawName: "v-tooltip:top",
                                      value:
                                        "Laporan ini bukanlah laporan periode " +
                                        _vm.formatPeriode(_vm.selectData),
                                      expression:
                                        "'Laporan ini bukanlah laporan periode ' + formatPeriode(selectData)",
                                      arg: "top",
                                    },
                                  ],
                                  staticClass: "label label-warning",
                                },
                                [
                                  _c("i", {
                                    staticClass: "icon-alert text-size-base",
                                  }),
                                ]
                              )
                            : _vm._e(),
                          _vm._v(
                            "\n\t\t\t\t\t\t \n\t\t\t\t\t\t" +
                              _vm._s(_vm._f("dateMonth")(props.item.periode)) +
                              "\n\t\t\t\t\t"
                          ),
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    !_vm.columnData[6].hide && !_vm.columnData[6].disable
                      ? _c(
                          "td",
                          [
                            _c("check-value", {
                              attrs: { value: props.item.tp },
                            }),
                          ],
                          1
                        )
                      : _vm._e(),
                    _vm._v(" "),
                    !_vm.columnData[7].hide && !_vm.columnData[7].disable
                      ? _c(
                          "td",
                          [
                            _c("check-value", {
                              attrs: { value: props.item.tot_ideal },
                            }),
                          ],
                          1
                        )
                      : _vm._e(),
                    _vm._v(" "),
                    !_vm.columnData[8].hide
                      ? _c(
                          "td",
                          {
                            staticStyle: { cursor: "pointer" },
                            on: {
                              click: function ($event) {
                                $event.preventDefault()
                                return _vm.modelKatexOpen(props.item, "p1")
                              },
                            },
                          },
                          [
                            _c("item-pearls", {
                              attrs: { type: "p1", props: props.item },
                            }),
                          ],
                          1
                        )
                      : _vm._e(),
                    _vm._v(" "),
                    !_vm.columnData[9].hide
                      ? _c(
                          "td",
                          {
                            staticStyle: { cursor: "pointer" },
                            on: {
                              click: function ($event) {
                                $event.preventDefault()
                                return _vm.modelKatexOpen(props.item, "p2")
                              },
                            },
                          },
                          [
                            _c("item-pearls", {
                              attrs: { type: "p2", props: props.item },
                            }),
                          ],
                          1
                        )
                      : _vm._e(),
                    _vm._v(" "),
                    !_vm.columnData[10].hide
                      ? _c(
                          "td",
                          {
                            staticStyle: { cursor: "pointer" },
                            on: {
                              click: function ($event) {
                                $event.preventDefault()
                                return _vm.modelKatexOpen(props.item, "e1")
                              },
                            },
                          },
                          [
                            _c("item-pearls", {
                              attrs: { type: "e1", props: props.item },
                            }),
                          ],
                          1
                        )
                      : _vm._e(),
                    _vm._v(" "),
                    !_vm.columnData[11].hide
                      ? _c(
                          "td",
                          {
                            staticStyle: { cursor: "pointer" },
                            on: {
                              click: function ($event) {
                                $event.preventDefault()
                                return _vm.modelKatexOpen(props.item, "e5")
                              },
                            },
                          },
                          [
                            _c("item-pearls", {
                              attrs: { type: "e5", props: props.item },
                            }),
                          ],
                          1
                        )
                      : _vm._e(),
                    _vm._v(" "),
                    !_vm.columnData[12].hide
                      ? _c(
                          "td",
                          {
                            staticStyle: { cursor: "pointer" },
                            on: {
                              click: function ($event) {
                                $event.preventDefault()
                                return _vm.modelKatexOpen(props.item, "e6")
                              },
                            },
                          },
                          [
                            _c("item-pearls", {
                              attrs: { type: "e6", props: props.item },
                            }),
                          ],
                          1
                        )
                      : _vm._e(),
                    _vm._v(" "),
                    !_vm.columnData[13].hide
                      ? _c(
                          "td",
                          {
                            staticStyle: { cursor: "pointer" },
                            on: {
                              click: function ($event) {
                                $event.preventDefault()
                                return _vm.modelKatexOpen(props.item, "e7")
                              },
                            },
                          },
                          [
                            _c("item-pearls", {
                              attrs: { type: "e7", props: props.item },
                            }),
                          ],
                          1
                        )
                      : _vm._e(),
                    _vm._v(" "),
                    !_vm.columnData[14].hide
                      ? _c(
                          "td",
                          {
                            staticStyle: { cursor: "pointer" },
                            on: {
                              click: function ($event) {
                                $event.preventDefault()
                                return _vm.modelKatexOpen(props.item, "e9")
                              },
                            },
                          },
                          [
                            _c("item-pearls", {
                              attrs: { type: "e9", props: props.item },
                            }),
                          ],
                          1
                        )
                      : _vm._e(),
                    _vm._v(" "),
                    !_vm.columnData[15].hide
                      ? _c(
                          "td",
                          {
                            staticStyle: { cursor: "pointer" },
                            on: {
                              click: function ($event) {
                                $event.preventDefault()
                                return _vm.modelKatexOpen(props.item, "a1")
                              },
                            },
                          },
                          [
                            _c("item-pearls", {
                              attrs: { type: "a1", props: props.item },
                            }),
                          ],
                          1
                        )
                      : _vm._e(),
                    _vm._v(" "),
                    !_vm.columnData[16].hide
                      ? _c(
                          "td",
                          {
                            staticStyle: { cursor: "pointer" },
                            on: {
                              click: function ($event) {
                                $event.preventDefault()
                                return _vm.modelKatexOpen(props.item, "a2")
                              },
                            },
                          },
                          [
                            _c("item-pearls", {
                              attrs: { type: "a2", props: props.item },
                            }),
                          ],
                          1
                        )
                      : _vm._e(),
                    _vm._v(" "),
                    !_vm.columnData[17].hide
                      ? _c(
                          "td",
                          {
                            staticStyle: { cursor: "pointer" },
                            on: {
                              click: function ($event) {
                                $event.preventDefault()
                                return _vm.modelKatexOpen(props.item, "r7")
                              },
                            },
                          },
                          [
                            _c("item-pearls", {
                              attrs: { type: "r7", props: props.item },
                            }),
                          ],
                          1
                        )
                      : _vm._e(),
                    _vm._v(" "),
                    !_vm.columnData[18].hide
                      ? _c(
                          "td",
                          {
                            staticStyle: { cursor: "pointer" },
                            on: {
                              click: function ($event) {
                                $event.preventDefault()
                                return _vm.modelKatexOpen(props.item, "r9")
                              },
                            },
                          },
                          [
                            _c("item-pearls", {
                              attrs: { type: "r9", props: props.item },
                            }),
                          ],
                          1
                        )
                      : _vm._e(),
                    _vm._v(" "),
                    !_vm.columnData[19].hide
                      ? _c(
                          "td",
                          {
                            staticStyle: { cursor: "pointer" },
                            on: {
                              click: function ($event) {
                                $event.preventDefault()
                                return _vm.modelKatexOpen(props.item, "l1")
                              },
                            },
                          },
                          [
                            _c("item-pearls", {
                              attrs: { type: "l1", props: props.item },
                            }),
                          ],
                          1
                        )
                      : _vm._e(),
                    _vm._v(" "),
                    !_vm.columnData[20].hide
                      ? _c(
                          "td",
                          {
                            staticStyle: { cursor: "pointer" },
                            on: {
                              click: function ($event) {
                                $event.preventDefault()
                                return _vm.modelKatexOpen(props.item, "l2")
                              },
                            },
                          },
                          [
                            _c("item-pearls", {
                              attrs: { type: "l2", props: props.item },
                            }),
                          ],
                          1
                        )
                      : _vm._e(),
                    _vm._v(" "),
                    !_vm.columnData[21].hide
                      ? _c(
                          "td",
                          {
                            staticStyle: { cursor: "pointer" },
                            on: {
                              click: function ($event) {
                                $event.preventDefault()
                                return _vm.modelKatexOpen(props.item, "s10")
                              },
                            },
                          },
                          [
                            _c("item-pearls", {
                              attrs: { type: "s10", props: props.item },
                            }),
                          ],
                          1
                        )
                      : _vm._e(),
                    _vm._v(" "),
                    !_vm.columnData[22].hide
                      ? _c(
                          "td",
                          {
                            staticStyle: { cursor: "pointer" },
                            on: {
                              click: function ($event) {
                                $event.preventDefault()
                                return _vm.modelKatexOpen(props.item, "s11")
                              },
                            },
                          },
                          [
                            _c("item-pearls", {
                              attrs: { type: "s11", props: props.item },
                            }),
                          ],
                          1
                        )
                      : _vm._e(),
                    _vm._v(" "),
                    !_vm.columnData[23].hide
                      ? _c(
                          "td",
                          [
                            _c("check-value", {
                              attrs: {
                                value: props.item.harga_pasar / 100,
                                valueType: "percentage",
                              },
                            }),
                          ],
                          1
                        )
                      : _vm._e(),
                    _vm._v(" "),
                    !_vm.columnData[24].hide
                      ? _c(
                          "td",
                          [
                            _c("check-value", {
                              attrs: {
                                value: props.item.laju_inflasi / 100,
                                valueType: "percentage",
                              },
                            }),
                          ],
                          1
                        )
                      : _vm._e(),
                    _vm._v(" "),
                    !_vm.columnData[25].hide
                      ? _c("td", {
                          domProps: {
                            innerHTML: _vm._s(
                              _vm.$options.filters.dateTime(
                                props.item.created_at
                              )
                            ),
                          },
                        })
                      : _vm._e(),
                    _vm._v(" "),
                    !_vm.columnData[26].hide
                      ? _c("td", [
                          props.item.created_at !== props.item.updated_at
                            ? _c("span", {
                                domProps: {
                                  innerHTML: _vm._s(
                                    _vm.$options.filters.dateTime(
                                      props.item.updated_at
                                    )
                                  ),
                                },
                              })
                            : _c("span", [_vm._v("-")]),
                        ])
                      : _vm._e(),
                  ]
                ),
              ]
            },
          },
        ]),
      }),
      _vm._v(" "),
      _c(
        "app-modal",
        {
          attrs: {
            show: _vm.modalShow,
            state: _vm.modalState,
            title: _vm.modalTitle,
            size: _vm.modalSize,
            color: _vm.modalColor,
            button: _vm.modalButton,
          },
          on: {
            tutup: _vm.modalTutup,
            confirmOk: _vm.modalConfirmOk,
            successOk: _vm.modalTutup,
            failOk: _vm.modalTutup,
            backgroundClick: _vm.modalTutup,
          },
        },
        [
          _c("template", { slot: "modal-title" }, [
            _vm._v(_vm._s(_vm.modalTitle)),
          ]),
          _vm._v(" "),
          _c(
            "template",
            { slot: "modal-body1" },
            [
              _c("form-katex", {
                attrs: { kelas: _vm.kelas, modalKatex: _vm.modalKatex },
                on: { tutup: _vm.modalTutup },
              }),
            ],
            1
          ),
        ],
        2
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/assets/js/components/collapseButton.vue":
/*!***********************************************************!*\
  !*** ./resources/assets/js/components/collapseButton.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _collapseButton_vue_vue_type_template_id_3ad758d4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./collapseButton.vue?vue&type=template&id=3ad758d4& */ "./resources/assets/js/components/collapseButton.vue?vue&type=template&id=3ad758d4&");
/* harmony import */ var _collapseButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./collapseButton.vue?vue&type=script&lang=js& */ "./resources/assets/js/components/collapseButton.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _collapseButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _collapseButton_vue_vue_type_template_id_3ad758d4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _collapseButton_vue_vue_type_template_id_3ad758d4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/components/collapseButton.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/collapseButton.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/assets/js/components/collapseButton.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_collapseButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./collapseButton.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/collapseButton.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_collapseButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/collapseButton.vue?vue&type=template&id=3ad758d4&":
/*!******************************************************************************************!*\
  !*** ./resources/assets/js/components/collapseButton.vue?vue&type=template&id=3ad758d4& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_collapseButton_vue_vue_type_template_id_3ad758d4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./collapseButton.vue?vue&type=template&id=3ad758d4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/collapseButton.vue?vue&type=template&id=3ad758d4&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_collapseButton_vue_vue_type_template_id_3ad758d4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_collapseButton_vue_vue_type_template_id_3ad758d4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/assets/js/views/laporanCu/index.vue":
/*!*******************************************************!*\
  !*** ./resources/assets/js/views/laporanCu/index.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_92de98c6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=92de98c6& */ "./resources/assets/js/views/laporanCu/index.vue?vue&type=template&id=92de98c6&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/assets/js/views/laporanCu/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&lang=css& */ "./resources/assets/js/views/laporanCu/index.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_92de98c6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_92de98c6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/views/laporanCu/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/views/laporanCu/index.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/assets/js/views/laporanCu/index.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/laporanCu/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/views/laporanCu/index.vue?vue&type=style&index=0&lang=css&":
/*!****************************************************************************************!*\
  !*** ./resources/assets/js/views/laporanCu/index.vue?vue&type=style&index=0&lang=css& ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/laporanCu/index.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/assets/js/views/laporanCu/index.vue?vue&type=template&id=92de98c6&":
/*!**************************************************************************************!*\
  !*** ./resources/assets/js/views/laporanCu/index.vue?vue&type=template&id=92de98c6& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_92de98c6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=92de98c6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/laporanCu/index.vue?vue&type=template&id=92de98c6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_92de98c6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_92de98c6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/assets/js/views/laporanCu/select.vue":
/*!********************************************************!*\
  !*** ./resources/assets/js/views/laporanCu/select.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _select_vue_vue_type_template_id_e22cc27e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./select.vue?vue&type=template&id=e22cc27e& */ "./resources/assets/js/views/laporanCu/select.vue?vue&type=template&id=e22cc27e&");
/* harmony import */ var _select_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./select.vue?vue&type=script&lang=js& */ "./resources/assets/js/views/laporanCu/select.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _select_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _select_vue_vue_type_template_id_e22cc27e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _select_vue_vue_type_template_id_e22cc27e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/views/laporanCu/select.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/views/laporanCu/select.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/assets/js/views/laporanCu/select.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_select_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./select.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/laporanCu/select.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_select_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/views/laporanCu/select.vue?vue&type=template&id=e22cc27e&":
/*!***************************************************************************************!*\
  !*** ./resources/assets/js/views/laporanCu/select.vue?vue&type=template&id=e22cc27e& ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_select_vue_vue_type_template_id_e22cc27e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./select.vue?vue&type=template&id=e22cc27e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/laporanCu/select.vue?vue&type=template&id=e22cc27e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_select_vue_vue_type_template_id_e22cc27e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_select_vue_vue_type_template_id_e22cc27e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/assets/js/views/laporanCu/table.vue":
/*!*******************************************************!*\
  !*** ./resources/assets/js/views/laporanCu/table.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _table_vue_vue_type_template_id_702be899___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./table.vue?vue&type=template&id=702be899& */ "./resources/assets/js/views/laporanCu/table.vue?vue&type=template&id=702be899&");
/* harmony import */ var _table_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./table.vue?vue&type=script&lang=js& */ "./resources/assets/js/views/laporanCu/table.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _table_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _table_vue_vue_type_template_id_702be899___WEBPACK_IMPORTED_MODULE_0__["render"],
  _table_vue_vue_type_template_id_702be899___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/views/laporanCu/table.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/views/laporanCu/table.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/assets/js/views/laporanCu/table.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_table_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./table.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/laporanCu/table.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_table_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/views/laporanCu/table.vue?vue&type=template&id=702be899&":
/*!**************************************************************************************!*\
  !*** ./resources/assets/js/views/laporanCu/table.vue?vue&type=template&id=702be899& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_table_vue_vue_type_template_id_702be899___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./table.vue?vue&type=template&id=702be899& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/laporanCu/table.vue?vue&type=template&id=702be899&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_table_vue_vue_type_template_id_702be899___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_table_vue_vue_type_template_id_702be899___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/assets/js/views/laporanCu/tablePearls.vue":
/*!*************************************************************!*\
  !*** ./resources/assets/js/views/laporanCu/tablePearls.vue ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tablePearls_vue_vue_type_template_id_dd85c334___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tablePearls.vue?vue&type=template&id=dd85c334& */ "./resources/assets/js/views/laporanCu/tablePearls.vue?vue&type=template&id=dd85c334&");
/* harmony import */ var _tablePearls_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tablePearls.vue?vue&type=script&lang=js& */ "./resources/assets/js/views/laporanCu/tablePearls.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _tablePearls_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _tablePearls_vue_vue_type_template_id_dd85c334___WEBPACK_IMPORTED_MODULE_0__["render"],
  _tablePearls_vue_vue_type_template_id_dd85c334___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/views/laporanCu/tablePearls.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/views/laporanCu/tablePearls.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/assets/js/views/laporanCu/tablePearls.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_tablePearls_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./tablePearls.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/laporanCu/tablePearls.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_tablePearls_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/views/laporanCu/tablePearls.vue?vue&type=template&id=dd85c334&":
/*!********************************************************************************************!*\
  !*** ./resources/assets/js/views/laporanCu/tablePearls.vue?vue&type=template&id=dd85c334& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_tablePearls_vue_vue_type_template_id_dd85c334___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./tablePearls.vue?vue&type=template&id=dd85c334& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/laporanCu/tablePearls.vue?vue&type=template&id=dd85c334&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_tablePearls_vue_vue_type_template_id_dd85c334___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_tablePearls_vue_vue_type_template_id_dd85c334___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);