(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[43],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/checkValue.vue?vue&type=script&lang=js":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/checkValue.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_truncate_collapsed__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-truncate-collapsed */ "./node_modules/vue-truncate-collapsed/dist/vue-truncate-collapsed.es.js");
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal */ "./resources/assets/js/components/modal.vue");


/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    truncate: vue_truncate_collapsed__WEBPACK_IMPORTED_MODULE_0__["default"],
    appModal: _modal__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  props: {
    value: {
      "default": ""
    },
    frontText: {
      "default": ""
    },
    trimLength: {
      "default": 50
    },
    valueType: {
      "default": "trim"
    },
    empty: {
      "default": "-"
    }
  },
  data: function data() {
    return {
      modalShow: false,
      modalState: "",
      modalTitle: "",
      modalContent: "",
      modalButton: ""
    };
  },
  methods: {
    modalOpen: function modalOpen() {
      this.modalShow = true;
      this.modalState = "content-tutup";
      this.modalContent = this.value;
      this.modalButton = "Tutup";
    },
    modalTutup: function modalTutup() {
      this.modalShow = false;
    },
    strip: function strip(html) {
      var tmp = document.createElement("DIV");
      tmp.innerHTML = html;
      return tmp.textContent || tmp.innerText || "";
    }
  },
  computed: {
    isLongEnough: function isLongEnough() {
      return this.value.length > this.trimLength;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/pageHeader.vue?vue&type=script&lang=js":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/pageHeader.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    title: {
      "default": ''
    },
    titleIcon: {
      "default": ''
    },
    titleDesc: {
      "default": ''
    },
    level: {
      "default": 1
    },
    level2Title: {
      "default": ''
    },
    level2Route: {
      "default": ''
    }
  },
  methods: {
    level2Back: function level2Back() {
      this.$emit('level2Back');
    },
    route1: function route1() {
      if (this.btn1RouteParams) {
        this.$router.push({
          name: this.btn1Route,
          params: {
            cu: this.btn1RouteParams
          }
        });
      } else {
        this.$router.push({
          name: this.btn1Route
        });
      }
    },
    route2: function route2() {
      if (this.btn2RouteParams) {
        this.$router.push({
          name: this.btn2Route,
          params: {
            cu: this.btn2RouteParams
          }
        });
      } else {
        this.$router.push({
          name: this.btn2Route
        });
      }
    },
    route3: function route3() {
      if (this.btn3RouteParams) {
        this.$router.push({
          name: this.btn3Route,
          params: {
            cu: this.btn3RouteParams
          }
        });
      } else {
        this.$router.push({
          name: this.btn3Route
        });
      }
    }
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('auth', {
    currentUser: 'currentUser'
  }))
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/laporanCu/detail.vue?vue&type=script&lang=js":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/views/laporanCu/detail.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _components_pageHeader_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/pageHeader.vue */ "./resources/assets/js/components/pageHeader.vue");
/* harmony import */ var _components_message_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/message.vue */ "./resources/assets/js/components/message.vue");
/* harmony import */ var _selectDetail_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./selectDetail.vue */ "./resources/assets/js/views/laporanCu/selectDetail.vue");
/* harmony import */ var _detailLaporanCu_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./detailLaporanCu.vue */ "./resources/assets/js/views/laporanCu/detailLaporanCu.vue");
/* harmony import */ var _detailPearls_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./detailPearls.vue */ "./resources/assets/js/views/laporanCu/detailPearls.vue");
/* harmony import */ var _diskusi_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./diskusi.vue */ "./resources/assets/js/views/laporanCu/diskusi.vue");
/* harmony import */ var _revisi_vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./revisi.vue */ "./resources/assets/js/views/laporanCu/revisi.vue");
/* harmony import */ var _infografis_vue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./infografis.vue */ "./resources/assets/js/views/laporanCu/infografis.vue");
/* harmony import */ var _infografisPearls_vue__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./infografisPearls.vue */ "./resources/assets/js/views/laporanCu/infografisPearls.vue");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }










/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    pageHeader: _components_pageHeader_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    message: _components_message_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    selectData: _selectDetail_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    detailLaporanCu: _detailLaporanCu_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
    detailPearls: _detailPearls_vue__WEBPACK_IMPORTED_MODULE_5__["default"],
    infografisData: _infografis_vue__WEBPACK_IMPORTED_MODULE_8__["default"],
    infografisPearlsData: _infografisPearls_vue__WEBPACK_IMPORTED_MODULE_9__["default"],
    diskusi: _diskusi_vue__WEBPACK_IMPORTED_MODULE_6__["default"],
    revisi: _revisi_vue__WEBPACK_IMPORTED_MODULE_7__["default"]
  },
  data: function data() {
    return {
      title: 'Detail Laporan CU',
      titlePearls: 'P.E.A.R.L.S',
      kelas: 'laporanCu',
      titleDesc: 'Mengelola data perkembangan CU',
      titleIcon: 'icon-stats-bars2',
      level2Title: 'Laporan CU',
      selectCUPath: 'laporanCuCU',
      tabName: 'analisisLaporanCu',
      katax: '\\frac{1.7888}{1,6777}',
      isPearls: false,
      isDiskusi: false,
      isRevisi: false
    };
  },
  methods: {
    changeTab: function changeTab(value) {
      this.tabName = value;
      if (value == 'analisisPearls' && !this.isPearls) {
        this.isPearls = true;
      }
      if (value == 'diskusi' && !this.isDiskusi) {
        this.isDiskusi = true;
      }
      if (value == 'revisi' && !this.isRevisi) {
        this.isRevisi = true;
      }
    },
    back: function back() {
      if (this.itemData.id_cu) {
        if (this.itemData.id_cu != 0) {
          this.$router.push({
            name: this.kelas + 'Cu',
            params: {
              cu: this.itemData.id_cu,
              tp: 'konsolidasi'
            }
          });
        } else {
          this.$router.push({
            name: this.kelas + 'Cu',
            params: {
              cu: this.itemData.id_cu,
              tp: this.itemData.id_tp
            }
          });
        }
      } else {
        if (this.itemData.tp.id_cu != 0) {
          this.$router.push({
            name: this.kelas + 'Cu',
            params: {
              cu: this.itemData.tp.id_cu,
              tp: 'konsolidasi'
            }
          });
        } else {
          this.$router.push({
            name: this.kelas + 'Cu',
            params: {
              cu: this.itemData.tp.id_cu,
              tp: this.itemData.id_tp
            }
          });
        }
      }
    }
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('laporanCu', {
    itemData: 'data',
    itemDataStat: 'dataStat',
    itemPearls: 'pearls',
    itemPearlsStat: 'pearlsStat',
    columnData: 'columnData',
    columnDataPearls: 'columnDataPearls'
  }))
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/laporanCu/detailLaporanCu.vue?vue&type=script&lang=js":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/views/laporanCu/detailLaporanCu.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _widgetLaporanCu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./widgetLaporanCu */ "./resources/assets/js/views/laporanCu/widgetLaporanCu.vue");
/* harmony import */ var _components_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/modal */ "./resources/assets/js/components/modal.vue");
/* harmony import */ var vue_cleave_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vue-cleave-component */ "./node_modules/vue-cleave-component/dist/vue-cleave.min.js");
/* harmony import */ var vue_cleave_component__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(vue_cleave_component__WEBPACK_IMPORTED_MODULE_5__);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }






/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    widgetData: _widgetLaporanCu__WEBPACK_IMPORTED_MODULE_3__["default"],
    appModal: _components_modal__WEBPACK_IMPORTED_MODULE_4__["default"],
    Cleave: vue_cleave_component__WEBPACK_IMPORTED_MODULE_5___default.a
  },
  props: ['kelas', 'columnData'],
  data: function data() {
    return {
      idCu: '',
      idTp: '',
      periode: '',
      periodeTp: '',
      itemDataBefore: [],
      modalShow: false,
      modalState: '',
      modalTitle: '',
      modalSize: '',
      modalColor: '',
      modalButton: '',
      modalDetail: {
        id: '',
        title: '',
        type: '',
        itemData: '',
        itemDataBefore: '',
        grafikData: [],
        form: [],
        analisis1: '',
        tab: 'analisis',
        isUbah: false,
        isOpposite: false,
        isPercent: false,
        canUbah: true
      },
      form: [],
      cleaveOption: {
        numeric: {
          numeral: true,
          numeralThousandsGroupStyle: 'thousand',
          numeralDecimalScale: 2,
          numeralDecimalMark: ',',
          delimiter: '.'
        }
      }
    };
  },
  created: function created() {
    this.fetch();
  },
  watch: {
    '$route': function $route(to, from) {
      // check current page meta
      this.fetch();
    },
    grafikDataStat: function grafikDataStat(value) {
      if (value == 'success') {
        var periodeNow = this.itemData.periode;
        var itemDataSorted = lodash__WEBPACK_IMPORTED_MODULE_1___default.a.orderBy(this.grafikData.data, ['periode'], ['desc']);
        this.itemDataBefore = lodash__WEBPACK_IMPORTED_MODULE_1___default.a.find(itemDataSorted, function (o) {
          return o.periode < periodeNow;
        });
      }
    },
    // when updating data
    updateStat: function updateStat(value) {
      this.modalState = value;
      this.modalButton = 'Ok';
      if (value === "success") {
        this.modalTitle = this.updateMessage.message;
        this.modalContent = '';
        this.fetch();
      } else if (value === "fail") {
        this.modalContent = this.updateMessage;
      } else {
        this.modalContent = '';
      }
    }
  },
  methods: {
    fetch: function fetch() {
      if (this.$route.meta.mode == 'detail') {
        this.$store.dispatch('laporanCu/detail', this.$route.params.id);
      } else {
        this.$store.dispatch('laporanCu/detailTp', this.$route.params.id);
      }
    },
    save: function save() {
      this.form = lodash__WEBPACK_IMPORTED_MODULE_1___default.a.chain(this.modalDetail.form).keyBy('key').mapValues('value').value();
      this.form.periode = this.modalDetail.periode;
      if (this.itemData.id_tp) {
        this.form.id_tp = this.modalDetail.id_tp;
        this.form.no_tp = this.modalDetailpr.no_tp;
        this.form.id_cu = this.itemData.tp.cu.id;
        this.form.no_ba = this.itemData.tp.cu.no_ba;
        this.$store.dispatch('laporanCu/updateTp', [this.modalDetail.id, this.form]);
      } else {
        this.form.id_cu = this.modalDetail.id_cu;
        this.form.no_ba = this.modalDetail.no_ba;
        this.$store.dispatch('laporanCu/update', [this.modalDetail.id, this.form]);
      }
    },
    modalBuka: function modalBuka(title, key, itemData, periode, itemDataBefore, periodeBefore, grafikData, form) {
      var type = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : 'currency';
      var isOpposite = arguments.length > 9 && arguments[9] !== undefined ? arguments[9] : false;
      // modal attribute
      this.modalColor = 'bg-primary';
      this.modalShow = true;
      this.modalState = 'normal1';
      this.modalTitle = 'Detail Akun ' + title;
      this.modalDetail.tab = 'analisis';
      this.modalDetail.title = title.toUpperCase();
      this.modalDetail.type = type;
      this.modalDetail.itemData = itemData;
      this.modalDetail.itemDataBefore = itemDataBefore;
      this.modalDetail.isUbah = false;
      this.modalDetail.isOpposite = isOpposite;
      if (type != 'currency') {
        this.modalDetail.isPercent = true;
      } else {
        this.modalDetail.isPercent = false;
      }

      // analisis view
      var selisih = itemData - itemDataBefore;
      var keterangan = '';
      var selisihView = this.formatCurrency(Math.abs(selisih));
      if (selisih > 0) {
        keterangan = " mengalami peningkatan sebanyak " + selisihView;
      } else if (selisih < 0) {
        keterangan = " mengalami penurunan sebanyak " + selisihView;
      } else {
        keterangan = " tidak mengalami perubahan ";
      }
      var formatedPeriodeBefore = '';
      if (periodeBefore != '') {
        formatedPeriodeBefore = " dari periode " + this.formatPeriode(periodeBefore);
      }
      this.modalDetail.analisis1 = "Akun " + title + " sejumlah " + this.formatCurrency(itemData) + ' periode ' + this.formatPeriode(periode) + keterangan + formatedPeriodeBefore;

      // table view
      this.modalDetail.grafikData = lodash__WEBPACK_IMPORTED_MODULE_1___default.a.orderBy(lodash__WEBPACK_IMPORTED_MODULE_1___default.a.map(grafikData, lodash__WEBPACK_IMPORTED_MODULE_1___default.a.partialRight(lodash__WEBPACK_IMPORTED_MODULE_1___default.a.pick, ['periode', key])), ['periode'], ['desc']);

      // ubah view
      this.modalDetail.id = this.itemData.id;
      if (this.itemData.id_tp) {
        this.modalDetail.id_tp = this.itemData.id_tp;
        this.modalDetail.no_tp = this.itemData.no_tp;
        this.modalDetail.canUbah = true;
      } else {
        if (this.itemData.tp) {
          this.modalDetail.canUbah = false;
        } else {
          this.modalDetail.canUbah = true;
        }
        this.modalDetail.id_cu = this.itemData.id_cu;
        this.modalDetail.no_ba = this.itemData.cu.no_ba;
      }
      this.modalDetail.periode = periode;
      this.modalDetail.form = form;
    },
    modalTutup: function modalTutup() {
      this.modalShow = false;
    },
    formatPeriode: function formatPeriode(value) {
      return vue__WEBPACK_IMPORTED_MODULE_0___default.a.filter('month')(value) + ' ' + vue__WEBPACK_IMPORTED_MODULE_0___default.a.filter('year')(value);
    },
    formatCurrency: function formatCurrency(value) {
      return this.$options.filters.currency(value, '', 0, {
        thousandsSeparator: '.'
      });
    },
    formatPercentage: function formatPercentage(value) {
      return vue__WEBPACK_IMPORTED_MODULE_0___default.a.filter('percentage2')(value, 2);
    },
    countTotal: function countTotal(value1, value2) {
      return value1 - value2;
    },
    countPercentage: function countPercentage(value1, value2) {
      if (value2 > 0) {
        return this.formatPercentage(this.countTotal(value1, value2) / value2);
      } else {
        return this.formatPercentage('0');
      }
    }
  },
  computed: _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_2__["mapGetters"])('auth', {
    currentUser: 'currentUser'
  })), Object(vuex__WEBPACK_IMPORTED_MODULE_2__["mapGetters"])('laporanCu', {
    itemData: 'data',
    itemDataStat: 'dataStat',
    grafikData: 'grafik',
    grafikDataStat: 'grafikStat',
    modelPeriode: 'periode',
    modelPeriodeStat: 'periodeStat',
    updateMessage: 'update',
    updateStat: 'updateStat'
  })), Object(vuex__WEBPACK_IMPORTED_MODULE_2__["mapGetters"])('laporanTp', {
    modelTp: 'dataS',
    modelTpStat: 'dataStatS'
  })), Object(vuex__WEBPACK_IMPORTED_MODULE_2__["mapGetters"])('cu', {
    modelCU: 'dataS',
    modelCUStat: 'dataStatS'
  }))
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/laporanCu/detailPearls.vue?vue&type=script&lang=js":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/views/laporanCu/detailPearls.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _formKatex_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./formKatex.vue */ "./resources/assets/js/views/laporanCu/formKatex.vue");
/* harmony import */ var _components_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/modal */ "./resources/assets/js/components/modal.vue");
/* harmony import */ var vue_cleave_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vue-cleave-component */ "./node_modules/vue-cleave-component/dist/vue-cleave.min.js");
/* harmony import */ var vue_cleave_component__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(vue_cleave_component__WEBPACK_IMPORTED_MODULE_5__);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }






/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    formKatex: _formKatex_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    appModal: _components_modal__WEBPACK_IMPORTED_MODULE_4__["default"],
    Cleave: vue_cleave_component__WEBPACK_IMPORTED_MODULE_5___default.a
  },
  props: ['kelas', 'columnData'],
  data: function data() {
    return {
      idCu: '',
      idTp: '',
      periode: '',
      periodeTp: '',
      itemDataBefore: [],
      modalShow: false,
      modalState: '',
      modalTitle: '',
      modalSize: '',
      modalColor: '',
      modalButton: '',
      modalKatex: {
        id: '',
        id_cu: '',
        no_ba: '',
        periode: '',
        section: '',
        katex1: [],
        katex2: [],
        form: [],
        indikator: '',
        isUbah: false
      },
      form: [],
      cleaveOption: {
        numeric: {
          numeral: true,
          numeralThousandsGroupStyle: 'thousand',
          numeralDecimalScale: 2,
          numeralDecimalMark: ',',
          delimiter: '.'
        }
      }
    };
  },
  created: function created() {
    this.fetch();
  },
  watch: {
    '$route': function $route(to, from) {
      // check current page meta
      this.fetch();
    },
    grafikDataStat: function grafikDataStat(value) {
      if (value == 'success') {
        var periodeNow = this.itemData.periode;
        var itemDataSorted = lodash__WEBPACK_IMPORTED_MODULE_1___default.a.orderBy(this.grafikData.data, ['periode'], ['desc']);
        this.itemDataBefore = lodash__WEBPACK_IMPORTED_MODULE_1___default.a.find(itemDataSorted, function (o) {
          return o.periode < periodeNow;
        });
      }
    },
    // when updating data
    updateStat: function updateStat(value) {
      this.modalState = value;
      this.modalButton = 'Ok';
      if (value === "success") {
        this.modalTitle = this.updateMessage.message;
        this.modalContent = '';
        this.fetch();
      } else if (value === "fail") {
        this.modalContent = this.updateMessage;
      } else {
        this.modalContent = '';
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
    fetch: function fetch() {
      if (this.$route.meta.mode == 'detail') {
        this.$store.dispatch('laporanCu/detailPearls', this.$route.params.id);
      } else {
        this.$store.dispatch('laporanCu/detailPearlsTp', this.$route.params.id);
      }
    },
    save: function save() {
      this.form = lodash__WEBPACK_IMPORTED_MODULE_1___default.a.chain(this.modalDetail.form).keyBy('key').mapValues('value').value();
      this.form.periode = this.modalDetail.periode;
      if (this.itemData.id_tp) {
        this.form.id_tp = this.modalDetail.id_tp;
        this.form.no_tp = this.modalDetailpr.no_tp;
        this.form.id_cu = this.itemData.tp.cu.id;
        this.form.no_ba = this.itemData.tp.cu.no_ba;
        this.$store.dispatch('laporanCu/updateTp', [this.modalDetail.id, this.form]);
      } else {
        this.form.id_cu = this.modalDetail.id_cu;
        this.form.no_ba = this.modalDetail.no_ba;
        this.$store.dispatch('laporanCu/update', [this.modalDetail.id, this.form]);
      }
    },
    modalBuka: function modalBuka(itemData, type) {
      this.modalSize = 'modal-lg';
      this.modalColor = 'bg-primary';
      this.modalShow = true;
      this.modalState = 'normal1';
      this.modalKatex.id = itemData.id;
      this.modalKatex.periode = itemData.periode;
      if (itemData.id_tp) {
        this.modalKatex.id_cu = itemData.tp.id_cu;
        this.modalKatex.no_ba = itemData.tp.cu.no_ba;
        this.modalKatex.id_tp = itemData.id_tp;
        this.modalKatex.no_tp = itemData.no_tp;
        this.modalKatex.section = 'CU ' + itemData.tp.cu.name + ' periode ' + this.formatPeriode(itemData.periode);
      } else {
        this.modalKatex.id_tp = '';
        this.modalKatex.no_tp = '';
        this.modalKatex.id_cu = itemData.id_cu;
        this.modalKatex.no_ba = itemData.no_ba;
        this.modalKatex.section = 'CU ' + itemData.cu.name + ' periode ' + this.formatPeriode(itemData.periode);
      }
      this.modalKatex.id_cu = itemData.id_cu;
      // p1	
      if (type == 'p1') {
        this.modalTitle = 'P1 - Provisi pinjaman lalai di atas 12 bulan';
        this.modalKatex.form.push({
          title: 'Cadangan Resiko',
          key: 'dcr',
          value: itemData.dcr
        }, {
          title: 'Piutang Lalai Di Atas 12 Bulan',
          key: 'piutang_lalai_12bulan',
          value: itemData.piutang_lalai_12bulan
        });
        this.modalKatex.indikator = '100% provisi tersedia untuk pinjaman lalai di atas 12 bulan dan setiap triwulan dilakukan charge off secara konsisten.';
        var katex1Content1 = '\\text{P1} = \\dfrac{\\text{' + this.modalKatex.form[0].title + '}}{\\text{' + this.modalKatex.form[1].title + '}} \\times \\text{100} \\% = \\text{100} \\% (\\text{IDEAL})';
        var katex2Content1 = '\\text{P1} = \\dfrac{' + this.formatCurrency(this.modalKatex.form[0].value) + '}{\\text{' + this.formatCurrency(this.modalKatex.form[1].value) + '}} \\times \\text{100} \\% = ' + this.formatPercentage(itemData.p1) + ' \\% (\\text{' + (itemData.p1 >= 1 ? 'IDEAL' : 'TIDAK IDEAL') + '})';
        this.modalKatex.katex1.push({
          title: '',
          content: katex1Content1
        });
        this.modalKatex.katex2.push({
          title: '',
          content: katex2Content1
        });

        // p2
      } else if (type == 'p2') {
        this.modalTitle = 'P2 -  Provisi pinjaman lalai 1 - 12 bulan';
        this.modalKatex.form.push({
          title: 'Cadangan Resiko',
          key: 'dcr',
          value: itemData.dcr
        }, {
          title: 'Piutang Lalai Di Atas 12 Bulan',
          key: 'piutang_lalai_12bulan',
          value: itemData.piutang_lalai_12bulan
        }, {
          title: 'Piutang Lalai 1 - 12 Bulan',
          key: 'piutang_lalai_1bulan',
          value: itemData.piutang_lalai_1bulan
        });
        this.modalKatex.indikator = '35% provisi tersedia untuk pinjaman lalai 1 – 12 bulan dan setiap triwulan dilakukan charge off dari waktu ke waktu';
        var _katex1Content = '\\text{P2} = \\dfrac{\\text{Saldo Cadangan Resiko setelah P1}[\\text{' + this.modalKatex.form[0].title + '} - \\text{' + this.modalKatex.form[1].title + '}]}{\\text{' + this.modalKatex.form[2].title + '}} \\times \\text{100} \\% = \\text{Di Atas 35} \\% (\\text{IDEAL})';
        var _katex2Content = '\\text{P2} = \\dfrac{' + this.formatCurrency(this.modalKatex.form[0].value) + ' - \\text{' + this.formatCurrency(this.modalKatex.form[1].value) + '}}{\\text{' + this.formatCurrency(this.modalKatex.form[2].value) + '}} \\times \\text{100} \\% = ' + this.formatPercentage(itemData.p2) + ' \\% (\\text{' + (itemData.p2 >= 0.35 ? 'IDEAL' : 'TIDAK IDEAL') + '})';
        this.modalKatex.katex1.push({
          title: '',
          content: _katex1Content
        });
        if (itemData.p1 >= 1) {
          this.modalKatex.katex2.push({
            title: '',
            content: _katex2Content
          });
        } else {
          this.modalKatex.katex2.push({
            title: 'Karena tidak ada saldo cadangan resiko setelah P1, maka P2 (TIDAK IDEAL)',
            content: _katex2Content
          });
        }

        // e1
      } else if (type == 'e1') {
        this.modalTitle = 'E1 - Piutang bersih / total aset';
        if (itemData.p1 >= 1 && itemData.p2 > 0.35) {
          this.modalKatex.form.push({
            title: 'Piutang Beredar',
            key: 'piutang_beredar',
            value: itemData.piutang_beredar
          }, {
            title: 'Piutang Lalai Di Atas 12 Bulan',
            key: 'piutang_lalai_12bulan',
            value: itemData.piutang_lalai_12bulan
          }, {
            title: 'Piutang Lalai 1 - 12 Bulan',
            key: 'piutang_lalai_1bulan',
            value: itemData.piutang_lalai_1bulan
          }, {
            title: 'Aset',
            key: 'aset',
            value: itemData.aset
          });
        } else {
          this.modalKatex.form.push({
            title: 'Piutang Beredar',
            key: 'piutang_beredar',
            value: itemData.piutang_beredar
          }, {
            title: 'Cadangan Resiko',
            key: 'dcr',
            value: itemData.dcr
          }, {
            title: 'Aset',
            key: 'aset',
            value: itemData.aset
          });
        }
        this.modalKatex.indikator = 'Rasio Piutang Bersih adalah 70% – 80% dari total aset dan portofolio pinjaman beragam dengan setidaknya 5 macam produk pinjaman yang berbeda';
        var _katex1Content2 = '\\text{E1} = \\dfrac{\\text{Piutang Beredar} - ((\\text{100} \\% \\times \\text{Piutang Lalai Di Atas 12 Bulan}) + (\\text{35} \\% \\times \\text{Piutang Lalai 1 - 12 Bulan}))}{\\text{Aset}} \\times \\text{100} \\% = \\text{70} \\% \\text{ Sampai } \\text{80} \\% (\\text{IDEAL})';
        var katex1Content2 = '\\text{E1} = \\dfrac{\\text{Piutang Beredar} - \\text{Cadangan Resiko}}{\\text{Aset}} \\times \\text{100} \\% = \\text{70} \\% \\text{ Sampai } \\text{80} \\% (\\text{IDEAL})';
        var _katex2Content2 = '';
        var katex2Title1 = '';
        if (itemData.p1 >= 1 && itemData.p2 > 0.35) {
          katex2Title1 = 'Dikarenakan P1 dan P2 (IDEAL), maka rumus yang digunakan adalah rumus 1';
          _katex2Content2 = '\\text{E1} = \\dfrac{\\text{' + this.formatCurrency(this.modalKatex.form[0].value) + '} - ((\\text{100} \\% \\times \\text{' + this.formatCurrency(this.modalKatex.form[1].value) + '}) + (\\text{35} \\% \\times \\text{' + this.formatCurrency(this.modalKatex.form[2].value) + '}))}{\\text{' + this.formatCurrency(this.modalKatex.form[3].value) + '}} \\times \\text{100} \\% = ' + this.formatPercentage(itemData.e1) + ' \\% (\\text{' + (itemData.e1 >= 0.7 && itemData.e1 <= 0.8 ? 'IDEAL' : 'TIDAK IDEAL') + '})';
        } else {
          katex2Title1 = 'Dikarenakan P1 dan P2 (TIDAK IDEAL), maka rumus yang digunakan adalah rumus 2';
          _katex2Content2 = '\\text{E1} = \\dfrac{\\text{' + this.formatCurrency(this.modalKatex.form[0].value) + '} - \\text{' + this.formatCurrency(this.modalKatex.form[1].value) + '}}{\\text{' + this.formatCurrency(this.modalKatex.form[2].value) + '}} \\times \\text{100} \\% = ' + this.formatPercentage(itemData.e1) + ' \\% (\\text{' + (itemData.e1 >= 0.7 && itemData.e1 <= 0.8 ? 'IDEAL' : 'TIDAK IDEAL') + '})';
        }
        this.modalKatex.katex1.push({
          title: 'Rumus 1 - apabila P1 dan P2 (IDEAL)',
          content: _katex1Content2
        }, {
          title: 'Rumus 2 - apabila P1 dan P2 (TIDAK IDEAL)',
          content: katex1Content2
        });
        this.modalKatex.katex2.push({
          title: katex2Title1,
          content: _katex2Content2
        });

        // e5
      } else if (type == 'e5') {
        this.modalTitle = 'E5 - Simpanan non saham / total aset';
        this.modalKatex.form.push({
          title: 'Simpanan Non Saham Unggulan',
          key: 'nonsaham_unggulan',
          value: itemData.nonsaham_unggulan
        }, {
          title: 'Simpanan Non Saham Harian',
          key: 'nonsaham_harian',
          value: itemData.nonsaham_harian
        }, {
          title: 'Aset',
          key: 'aset',
          value: itemData.aset
        });
        this.modalKatex.indikator = 'Rasio 70% – 80% dari total aset dan memiliki beragam jenis simpanan minimal 5 jenis produk simpanan yang berbeda.';
        var _katex1Content3 = '\\text{E5} = \\dfrac{\\text{' + this.modalKatex.form[0].title + '} + \\text{' + this.modalKatex.form[1].title + '}}{\\text{' + this.modalKatex.form[2].title + '}} \\times \\text{100} \\% = \\text{70} \\% \\text{ Sampai } \\text{80} \\%(\\text{IDEAL})';
        var _katex2Content3 = '\\text{E5} = \\dfrac{\\text{' + this.formatCurrency(this.modalKatex.form[0].value) + '} + \\text{' + this.formatCurrency(this.modalKatex.form[1].value) + '}}{\\text{' + this.formatCurrency(this.modalKatex.form[2].value) + '}} \\times \\text{100} \\% = ' + this.formatPercentage(itemData.e5) + ' \\% (\\text{' + (itemData.e5 >= 0.7 && itemData.e5 <= 0.8 ? 'IDEAL' : 'TIDAK IDEAL') + '})';
        this.modalKatex.katex1.push({
          title: '',
          content: _katex1Content3
        });
        this.modalKatex.katex2.push({
          title: '',
          content: _katex2Content3
        });

        // e6
      } else if (type == 'e6') {
        this.modalTitle = 'E6 - Pinjaman kepada pihak luar terhadap total aset';
        this.modalKatex.form.push({
          title: 'Total Hutang Pihak Ke-3',
          key: 'total_hutang_pihak3',
          value: itemData.total_hutang_pihak3
        }, {
          title: 'Aset',
          key: 'aset',
          value: itemData.aset
        });
        this.modalKatex.indikator = 'Jumlah pinjaman kepada pihak eksternal 1% – 5% dari total aset.';
        var _katex1Content4 = '\\text{E6} = \\dfrac{\\text{' + this.modalKatex.form[0].title + '}}{\\text{' + this.modalKatex.form[1].title + '}} \\times \\text{100} \\% = \\text{Kurang Dari Sama Dengan 5} \\% (\\text{IDEAL})';
        var _katex2Content4 = '\\text{E6} = \\dfrac{\\text{' + this.formatCurrency(this.modalKatex.form[0].value) + '}}{\\text{' + this.formatCurrency(this.modalKatex.form[1].value) + '}} \\times \\text{100} \\% = ' + this.formatPercentage(itemData.e6) + ' \\% ( \\text{' + (itemData.e6 <= 0.05 ? 'IDEAL' : 'TIDAK IDEAL') + '})';
        this.modalKatex.katex1.push({
          title: '',
          content: _katex1Content4
        });
        this.modalKatex.katex2.push({
          title: '',
          content: _katex2Content4
        });

        // e7
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
        });

        // e9
      } else if (type == 'e9') {
        this.modalTitle = 'E9 - Modal lembaga bersih';
        this.modalKatex.form.push({
          title: 'Cadangan Resiko',
          key: 'dcr',
          value: itemData.dcr
        }, {
          title: 'Cadangan Umum',
          key: 'dcu',
          value: itemData.dcu
        }, {
          title: 'Dana Gedung',
          key: 'dana_gedung',
          value: itemData.dana_gedung
        }, {
          title: 'Donasi',
          key: 'donasi',
          value: itemData.donasi
        }, {
          title: 'SHU Tahun Lalu',
          key: 'shu_lalu',
          value: itemData.shu_lalu
        }, {
          title: 'Piutang Lalai Di Atas 12 Bulan',
          key: 'piutang_lalai_12bulan',
          value: itemData.piutang_lalai_12bulan
        }, {
          title: 'Piutang Lalai 1 - 12 Bulan',
          key: 'piutang_lalai_1bulan',
          value: itemData.piutang_lalai_1bulan
        }, {
          title: 'Aset Bermasalah',
          key: 'aset_masalah',
          value: itemData.aset_masalah
        }, {
          title: 'Aset',
          key: 'aset',
          value: itemData.aset
        });
        this.modalKatex.indikator = 'Modal lembaga bersih sebesar 10% dari total aset.';
        var _katex1Content6 = '\\text{E9} = \\dfrac{(\\text{' + this.modalKatex.form[0].title + '} + \\text{' + this.modalKatex.form[1].title + '} + \\text{' + this.modalKatex.form[2].title + '} + \\text{' + this.modalKatex.form[3].title + '} + \\text{' + this.modalKatex.form[4].title + '}) - ((\\text{100} \\% \\times \\text{' + this.modalKatex.form[5].title + '}) + (\\text{35} \\% \\times \\text{' + this.modalKatex.form[6].title + '}) + \\text{' + this.modalKatex.form[7].title + '})}{\\text{' + this.modalKatex.form[8].title + '}} \\times \\text{100} \\% = \\text{Lebih Dari Sama Dengan 10} \\% (\\text{IDEAL})';
        var _katex2Content6 = '\\text{E9} = \\dfrac{(\\text{' + this.formatCurrency(this.modalKatex.form[0].value) + '} + \\text{' + this.formatCurrency(this.modalKatex.form[1].value) + '} + \\text{' + this.formatCurrency(this.modalKatex.form[2].value) + '} + \\text{' + this.formatCurrency(this.modalKatex.form[3].value) + '} + \\text{' + this.formatCurrency(this.modalKatex.form[4].value) + '}) - ((\\text{100} \\% \\times \\text{' + this.formatCurrency(this.modalKatex.form[5].value) + '}) + (\\text{35} \\% \\times \\text{' + this.formatCurrency(this.modalKatex.form[6].value) + '}) + \\text{' + this.formatCurrency(this.modalKatex.form[7].value) + '})}{\\text{' + this.formatCurrency(this.modalKatex.form[8].value) + '}} \\times \\text{100} \\% = ' + this.formatPercentage(itemData.e9) + ' \\% ( \\text{' + (itemData.e9 >= 0.1 ? 'IDEAL' : 'TIDAK IDEAL') + '})';
        this.modalKatex.katex1.push({
          title: '',
          content: _katex1Content6
        });
        this.modalKatex.katex2.push({
          title: '',
          content: _katex2Content6
        });

        // a1
      } else if (type == 'a1') {
        this.modalTitle = 'A1 - Total pinjaman lalai / total pinjaman beredar';
        this.modalKatex.form.push({
          title: 'Piutang Lalai Di Atas 12 Bulan',
          key: 'piutang_lalai_12bulan',
          value: itemData.piutang_lalai_12bulan
        }, {
          title: 'Piutang Lalai 1 - 12 Bulan',
          key: 'piutang_lalai_1bulan',
          value: itemData.piutang_lalai_1bulan
        }, {
          title: 'Piutang Beredar',
          key: 'piutang_beredar',
          value: itemData.piutang_beredar
        });
        this.modalKatex.indikator = 'Total pinjaman lalai &le; 5% dari total pinjaman beredar.';
        var _katex1Content7 = '\\text{A1} = \\dfrac{\\text{Total Pinjaman Lalai}[\\text{' + this.modalKatex.form[0].title + '} + \\text{' + this.modalKatex.form[1].title + '}]}{\\text{' + this.modalKatex.form[2].title + '}} \\times \\text{100} \\% = \\text{Kurang Dari Sama Dengan 5} \\% (\\text{IDEAL})';
        var _katex2Content7 = '\\text{A1} = \\dfrac{\\text{' + this.formatCurrency(this.modalKatex.form[0].value) + '} + \\text{' + this.formatCurrency(this.modalKatex.form[1].value) + '}}{\\text{' + this.formatCurrency(this.modalKatex.form[2].value) + '}} \\times \\text{100} \\% = ' + this.formatPercentage(itemData.a1) + ' \\% ( \\text{' + (itemData.a1 <= 0.05 ? 'IDEAL' : 'TIDAK IDEAL') + '})';
        this.modalKatex.katex1.push({
          title: '',
          content: _katex1Content7
        });
        this.modalKatex.katex2.push({
          title: '',
          content: _katex2Content7
        });

        // a2	
      } else if (type == 'a2') {
        this.modalTitle = 'A2 - Aset yang tidak menghasilkan / total aset';
        this.modalKatex.form.push({
          title: 'Aset Tidak Menghasilkan',
          key: 'aset_tidak_menghasilkan',
          value: itemData.aset_tidak_menghasilkan
        }, {
          title: 'Aset',
          key: 'aset',
          value: itemData.aset
        });
        this.modalKatex.indikator = 'Aset tidak menghasilkan 5% dari total aset.';
        var _katex1Content8 = '\\text{A2} = \\dfrac{\\text{' + this.modalKatex.form[0].title + '}}{\\text{' + this.modalKatex.form[1].title + '}} \\times \\text{100} \\% = \\text{Kurang Dari Sama Dengan 5} \\% (\\text{IDEAL})';
        var _katex2Content8 = '\\text{A2} = \\dfrac{\\text{' + this.formatCurrency(this.modalKatex.form[0].value) + '}}{\\text{' + this.formatCurrency(this.modalKatex.form[1].value) + '}} \\times \\text{100} \\% = ' + this.formatPercentage(itemData.a2) + ' \\% ( \\text{' + (itemData.a2 <= 0.05 ? 'IDEAL' : 'TIDAK IDEAL') + '})';
        this.modalKatex.katex1.push({
          title: '',
          content: _katex1Content8
        });
        this.modalKatex.katex2.push({
          title: '',
          content: _katex2Content8
        });

        // r7
      } else if (type == 'r7') {
        this.modalTitle = 'R7 - BJS saham terhadap rata-rata aset';
        this.modalKatex.form.push({
          title: 'BJS Saham',
          key: 'bjs_saham',
          value: itemData.bjs_saham
        }, {
          title: 'Simpanan Saham Bulan Desember',
          key: 'simpanan_saham_des',
          value: itemData.aset
        }, {
          title: 'Simpanan Saham Bulan ' + this.formatPeriodeMonth(itemData.periode),
          key: 'simpanan_saham',
          value: itemData.simpanan_saham
        }, {
          title: 'Simpanan Saham Tahun Lalu',
          key: 'simpanan_saham_lalu',
          value: itemData.simpanan_saham_lalu
        }, {
          title: 'Harga Pasar',
          key: 'harga_pasar',
          value: itemData.harga_pasar
        });
        this.modalKatex.indikator = 'Dividen saham dibayar 1% lebih tinggi daripada suku bunga pasar';
        if (itemData.simpanan_saham_des != 0) {
          var _katex1Content9 = '\\text{R7} = \\dfrac{\\text{' + this.modalKatex.form[0].title + '}}{\\text{Simpanan Saham Rata-rata}(\\frac{\\text{' + this.modalKatex.form[1].title + '} + \\text{' + this.modalKatex.form[2].title + '}}{\\text{Jumlah Bulan Berjalan}} \\times \\text{12})} \\times \\text{100} \\% = \\text{Harga Pasar} \\% (\\text{IDEAL})';
          var _katex2Content9 = '\\text{R7} = \\dfrac{\\text{' + this.formatCurrency(this.modalKatex.form[0].value) + '}}{(\\frac{\\text{' + this.formatCurrency(this.modalKatex.form[1].value) + '} + \\text{' + this.formatCurrency(this.modalKatex.form[2].value) + '}}{\\text{' + this.formatPeriodeMonth(itemData.periode) + '}} \\times \\text{12})} \\times \\text{100} \\% = ' + this.formatPercentage(itemData.r7_1) + ' \\% ( \\text{' + (itemData.r7_1 == itemData.harga_pasar ? 'IDEAL' : 'TIDAK IDEAL') + '})';
          this.modalKatex.katex1.push({
            title: 'Jika simpanan saham bersumber dari saldo bulan desember tahun lalu',
            content: _katex1Content9
          });
          this.modalKatex.katex2.push({
            title: '',
            content: _katex2Content9
          });
        }
        if (itemData.simpanan_saham_lalu != 0) {
          var _katex1Content0 = '\\text{R7} = \\dfrac{\\text{' + this.modalKatex.form[0].title + '}}{\\text{Simpanan Saham Rata-rata}(\\frac{\\text{' + this.modalKatex.form[3].title + '} + \\text{' + this.modalKatex.form[2].title + '}}{\\text{2}})} \\times \\text{100} \\% = \\text{Harga Pasar} \\% (\\text{IDEAL})';
          var katex2Content2 = '\\text{R7} = \\dfrac{\\text{' + this.formatCurrency(this.modalKatex.form[0].value) + '}}{(\\frac{\\text{' + this.formatCurrency(this.modalKatex.form[3].value) + '} + \\text{' + this.formatCurrency(this.modalKatex.form[2].value) + '}}{\\text{2}})} \\times \\text{100} \\% = ' + this.formatPercentage(itemData.r7_2) + ' \\% ( \\text{' + (itemData.r7_2 == itemData.harga_pasar ? 'IDEAL' : 'TIDAK IDEAL') + '})';
          this.modalKatex.katex1.push({
            title: 'Jika simpanan saham bersumber dari saldo tahun lalu bulan ' + this.formatPeriodeMonth(itemData.periode),
            content: _katex1Content0
          });
          this.modalKatex.katex2.push({
            title: '',
            content: katex2Content2
          });
        }

        //r9	
      } else if (type == 'r9') {
        this.modalTitle = 'R9 - biaya operasional terhadap rata-rata aset';
        this.modalKatex.form.push({
          title: 'Total Biaya',
          key: 'total_biaya',
          value: itemData.total_biaya
        }, {
          title: 'Beban Penyisihan Cadangan Resiko',
          key: 'beban_penyisihan_dcr',
          value: itemData.beban_penyisihan_dcr
        }, {
          title: 'Aset',
          key: 'aset',
          value: itemData.aset
        }, {
          title: 'Aset Tahun Lalu',
          key: 'aset_lalu',
          value: itemData.aset_lalu
        });
        this.modalKatex.indikator = 'Beban operasional terhadap rata-rata aset sebesar 5%.';
        var _katex1Content1 = '\\text{R9} = \\dfrac{\\text{Beban Operasional}(\\text{' + this.modalKatex.form[0].title + '} - \\text{' + this.modalKatex.form[1].title + '})}{\\text{Rata-rata Aset}(\\frac{\\text{' + this.modalKatex.form[2].title + '} + \\text{' + this.modalKatex.form[3].title + '}}{\\text{2}})} \\times \\text{100} \\% <= \\text{5} \\% (\\text{IDEAL})';
        var _katex2Content0 = '\\text{R9} = \\dfrac{\\text{' + this.formatCurrency(this.modalKatex.form[0].value) + '} - \\text{' + this.formatCurrency(this.modalKatex.form[1].value) + '}}{\\frac{\\text{' + this.formatCurrency(this.modalKatex.form[2].value) + '} + \\text{' + this.formatCurrency(this.modalKatex.form[3].value) + '}}{\\text{2}}} \\times \\text{100} \\% = ' + this.formatPercentage(itemData.e6) + ' \\% ( \\text{' + (itemData.r9 <= 0.05 ? 'IDEAL' : 'TIDAK IDEAL') + '})';
        this.modalKatex.katex1.push({
          title: '',
          content: _katex1Content1
        });
        this.modalKatex.katex2.push({
          title: '',
          content: _katex2Content0
        });

        //l1
      } else if (type == 'l1') {
        this.modalTitle = 'L1 - (investasi likuid + aset-aset likuid - hutang jangka pendek < 30 Hari) / simpanan non saham';
        this.modalKatex.form.push({
          title: 'Investasi Likuid',
          key: 'investasi_likuid',
          value: itemData.investasi_likuid
        }, {
          title: 'Aset Likuid Tidak Menghasilkan',
          key: 'aset_likuid_tidak_menghasilkan',
          value: itemData.aset_likuid_tidak_menghasilkan
        }, {
          title: 'Hutang Tidak Berbiaya < 30 Hari',
          key: 'hutang_tidak_berbiaya_30hari',
          value: itemData.hutang_tidak_berbiaya_30hari
        }, {
          title: 'Total Simpanan Non Saham',
          key: 'tot_nonsaham',
          value: itemData.tot_nonsaham
        });
        this.modalKatex.indikator = 'Likuiditas sebesar 15% dari total simpanan non saham tetapi tidak melampaui 20% dari total aset.';
        var _katex1Content10 = '\\text{L1} = \\dfrac{(\\text{' + this.modalKatex.form[0].title + '} + \\text{' + this.modalKatex.form[1].title + '}) - \\text{' + this.modalKatex.form[2].title + '}}{\\text{' + this.modalKatex.form[3].title + '}} \\times \\text{100} \\% = \\text{15} \\% \\text{ Sampai } \\text{20} \\% (\\text{IDEAL})';
        var _katex2Content1 = '\\text{L1} = \\dfrac{(\\text{' + this.formatCurrency(this.modalKatex.form[0].value) + '} + \\text{' + this.formatCurrency(this.modalKatex.form[1].value) + '}) - \\text{' + this.formatCurrency(this.modalKatex.form[2].value) + '}}{\\text{' + this.formatCurrency(this.modalKatex.form[3].value) + '}} \\times \\text{100} \\% = ' + this.formatPercentage(itemData.l1) + ' \\% (\\text{' + (itemData.l1 >= 0.15 && itemData.l1 <= 0.2 ? 'IDEAL' : 'TIDAK IDEAL') + '})';
        this.modalKatex.katex1.push({
          title: '',
          content: _katex1Content10
        });
        this.modalKatex.katex2.push({
          title: '',
          content: _katex2Content1
        });

        // l2
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
        var _katex1Content11 = "\\text{L1} = \\dfrac{(\\text{" + this.modalKatex.form[0].title + "} + \\text{" + this.modalKatex.form[1].title + "}) - \\text{" + this.modalKatex.form[2].title + "}}{\\text{" + this.modalKatex.form[3].title + "}} \\times \\text{100} \\% = \\text{15} \\% \\text{ Sampai } \\text{20} \\% (\\text{IDEAL})";
        var _katex2Content10 = "\\text{L1} = \\dfrac{(\\text{" + this.formatCurrency(this.modalKatex.form[0].value) + "} + \\text{" + this.formatCurrency(this.modalKatex.form[1].value) + "}) - \\text{" + this.formatCurrency(this.modalKatex.form[2].value) + "}}{\\text{" + this.formatCurrency(this.modalKatex.form[3].value) + "}} \\times \\text{100} \\% = " + this.formatPercentage(itemData.l1) + " \\% (\\text{" + (itemData.l1 >= 0.15 && itemData.l1 <= 0.2 ? "IDEAL" : "TIDAK IDEAL") + "})";
        this.modalKatex.katex1.push({
          title: "",
          content: _katex1Content11
        });
        this.modalKatex.katex2.push({
          title: "",
          content: _katex2Content10
        });

        //s10	
      } else if (type == 's10') {
        this.modalTitle = 'S10 - Pertumbuhan anggota';
        this.modalKatex.form.push({
          title: 'Lelaki Biasa',
          key: 'l_biasa',
          value: itemData.l_biasa
        }, {
          title: 'Lelaki L. Biasa',
          key: 'l_lbiasa',
          value: itemData.l_lbiasa
        }, {
          title: 'Perempuan Biasa',
          key: 'p_biasa',
          value: itemData.p_biasa
        }, {
          title: 'Perempuan L.Biasa',
          key: 'p_lbiasa',
          value: itemData.p_lbiasa
        }, {
          title: 'Total Anggota',
          key: 'total_anggota',
          value: itemData.total_anggota,
          hideForm: true
        }, {
          title: 'Total Anggota Tahun Lalu',
          key: 'total_anggota_lalu',
          value: itemData.total_anggota_lalu
        });
        this.modalKatex.indikator = 'Pertumbuhan anggota di atas 12% per tahun.';
        var _katex1Content12 = '\\text{s10} = \\dfrac{\\text{' + this.modalKatex.form[4].title + '} - \\text{' + this.modalKatex.form[5].title + '}}{\\text{' + this.modalKatex.form[5].title + '}} \\times \\text{100} \\% = \\text{Di Atas 12} \\% (\\text{IDEAL})';
        var _katex2Content11 = '\\text{s10} = \\dfrac{\\text{' + this.formatCurrency(this.modalKatex.form[4].value) + '}} - \\text{' + this.formatCurrency(this.modalKatex.form[5].value) + '}{\\text{' + this.formatCurrency(this.modalKatex.form[5].value) + '}} \\times \\text{100} \\% = ' + this.formatPercentage(itemData.s10) + ' \\% ( \\text{' + (itemData.s10 > 0.12 ? 'IDEAL' : 'TIDAK IDEAL') + '})';
        this.modalKatex.katex1.push({
          title: '',
          content: _katex1Content12
        });
        this.modalKatex.katex2.push({
          title: '',
          content: _katex2Content11
        });

        //s11
      } else if (type == 's11') {
        this.modalTitle = 'S11 - Pertumbuhan aset';
        this.modalKatex.form.push({
          title: 'Aset',
          key: 'aset',
          value: itemData.aset
        }, {
          title: 'Aset Tahun Lalu',
          key: 'aset_lalu',
          value: itemData.aset_lalu
        });
        this.modalKatex.indikator = 'Pertumbuhan aset 10% di atas laju inflasi.';
        var _katex1Content13 = '\\text{s11} = \\dfrac{\\text{' + this.modalKatex.form[0].title + '} - \\text{' + this.modalKatex.form[1].title + '}}{\\text{' + this.modalKatex.form[1].title + '}} \\times \\text{100} \\% = \\text{10} \\% \\text{ Di Atas Laju Inflasi} (\\text{IDEAL})';
        var _katex2Content12 = '\\text{S11} = \\dfrac{\\text{' + this.formatCurrency(this.modalKatex.form[0].value) + '}} - \\text{' + this.formatCurrency(this.modalKatex.form[1].value) + '}{\\text{' + this.formatCurrency(this.modalKatex.form[1].value) + '}} \\times \\text{100} \\% = ' + this.formatPercentage(itemData.s11) + ' \\% ( \\text{' + (itemData.s11 > itemData.laju_inflasi + 0.1 ? 'IDEAL' : 'TIDAK IDEAL') + '})';
        this.modalKatex.katex1.push({
          title: '',
          content: _katex1Content13
        });
        this.modalKatex.katex2.push({
          title: '',
          content: _katex2Content12
        });
      }
    },
    modalKatexReset: function modalKatexReset() {
      this.modalKatex.isUbah = false;
      this.modalKatex.katex1 = [];
      this.modalKatex.katex2 = [];
      this.modalKatex.form = [];
    },
    modalTutup: function modalTutup() {
      this.modalSize = '';
      this.modalShow = false;
      this.modalKatexReset();
    },
    formatPeriode: function formatPeriode(value) {
      return vue__WEBPACK_IMPORTED_MODULE_0___default.a.filter('month')(value) + ' ' + vue__WEBPACK_IMPORTED_MODULE_0___default.a.filter('year')(value);
    },
    formatPeriodeMonth: function formatPeriodeMonth(value) {
      return vue__WEBPACK_IMPORTED_MODULE_0___default.a.filter('month')(value);
    },
    formatCurrency: function formatCurrency(value) {
      return this.$options.filters.currency(value, '', 0, {
        thousandsSeparator: '.'
      });
    },
    formatPercentage: function formatPercentage(value) {
      return vue__WEBPACK_IMPORTED_MODULE_0___default.a.filter('percentage2')(value, 2);
    },
    countTotal: function countTotal(value1, value2) {
      return value1 - value2;
    },
    countPercentage: function countPercentage(value1, value2) {
      if (value2 > 0) {
        return this.formatPercentage(this.countTotal(value1, value2) / value2);
      } else {
        return this.formatPercentage('0');
      }
    }
  },
  computed: _objectSpread(_objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_2__["mapGetters"])('laporanCu', {
    itemData: 'pearls',
    itemDataStat: 'pearlsStat',
    grafikData: 'grafikPearls',
    grafikDataStat: 'grafikPearlsStat',
    modelPeriode: 'periode',
    modelPeriodeStat: 'periodeStat',
    updateMessage: 'update',
    updateStat: 'updateStat'
  })), Object(vuex__WEBPACK_IMPORTED_MODULE_2__["mapGetters"])('laporanTp', {
    modelTp: 'dataS',
    modelTpStat: 'dataStatS',
    updateTpMessage: "update",
    updateTpStat: "updateStat"
  })), Object(vuex__WEBPACK_IMPORTED_MODULE_2__["mapGetters"])('cu', {
    modelCU: 'dataS',
    modelCUStat: 'dataStatS'
  }))
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/laporanCu/diskusi.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/views/laporanCu/diskusi.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _helpers_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../helpers/form */ "./resources/assets/js/helpers/form.js");
/* harmony import */ var _components_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/modal */ "./resources/assets/js/components/modal.vue");
/* harmony import */ var vue_cleave_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vue-cleave-component */ "./node_modules/vue-cleave-component/dist/vue-cleave.min.js");
/* harmony import */ var vue_cleave_component__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(vue_cleave_component__WEBPACK_IMPORTED_MODULE_5__);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }






/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    appModal: _components_modal__WEBPACK_IMPORTED_MODULE_4__["default"],
    Cleave: vue_cleave_component__WEBPACK_IMPORTED_MODULE_5___default.a
  },
  data: function data() {
    return {
      kelas: 'laporanCuDiskusi',
      idCu: '',
      idTp: '',
      periode: '',
      periodeTp: '',
      modalShow: false,
      modalState: '',
      modalTitle: '',
      modalSize: '',
      modalColor: '',
      modalButton: '',
      modalContent: '',
      form: {
        id: '',
        id_laporan: '',
        id_user: '',
        id_cu: '',
        id_tp: '',
        periode: '',
        content: ''
      },
      formEdit: {
        id: '',
        id_laporan: '',
        id_user: '',
        id_cu: '',
        id_tp: '',
        periode: '',
        content: ''
      },
      ckeditorNoImageConfig: {
        toolbar: {
          items: ['heading', '|', 'bold', 'italic', 'link', 'bulletedList', 'numberedList', 'blockQuote', 'insertTable', 'mediaEmbed', 'undo', 'redo']
        },
        table: {
          contentToolbar: ['tableColumn', 'tableRow', 'mergeTableCells']
        }
      },
      cleaveOption: {
        numeric: {
          numeral: true,
          numeralThousandsGroupStyle: 'thousand',
          numeralDecimalScale: 2,
          numeralDecimalMark: ',',
          delimiter: '.'
        }
      }
    };
  },
  created: function created() {
    this.fetch();
    this.form.id_user = this.currentUser.id;
  },
  watch: {
    '$route': function $route(to, from) {
      // check current page meta
      this.fetch();
    },
    itemDataStat: function itemDataStat(value) {
      if (value == 'success') {}
    },
    // when updating data
    updateStat: function updateStat(value) {
      this.modalState = value;
      this.modalButton = 'Ok';
      if (value === "success") {
        this.modalTitle = this.updateMessage.message;
        this.modalContent = '';
        this.form.content = '';
        this.fetch();
      } else if (value === "fail") {
        this.modalContent = this.updateMessage;
      } else {
        this.modalContent = '';
      }
    }
  },
  methods: {
    fetch: function fetch() {
      if (this.$route.meta.mode == 'detail') {
        this.$store.dispatch(this.kelas + '/get', this.$route.params.id);
      } else if (this.$route.meta.mode == 'detailTp') {
        this.$store.dispatch(this.kelas + '/getTp', this.$route.params.id);
      }
    },
    save: function save(type) {
      if (type == 'create') {
        this.form.id = '';
        this.form.id_laporan = this.$route.params.id;
        this.form.id_user = this.currentUser.id;
        this.form.periode = this.modelLaporan.periode;
        if (this.$route.meta.mode == 'detail') {
          this.form.id_cu = this.modelLaporan.id_cu;
          this.form.id_tp = '';
          this.$store.dispatch(this.kelas + '/store', this.form);
        } else if (this.$route.meta.mode == 'detailTp') {
          this.form.id_cu = this.modelLaporan.tp.id_cu;
          this.form.id_tp = this.modelLaporan.tp.id;
          this.$store.dispatch(this.kelas + '/storeTp', this.form);
        }
        this.modalShow = true;
      } else if (type == 'edit') {
        this.formEdit.periode = this.modelLaporan.periode;
        if (this.$route.meta.mode == 'detail') {
          this.formEdit.id_cu = this.modelLaporan.id_cu;
          this.formEdit.id_tp = '';
          this.$store.dispatch(this.kelas + '/update', [this.formEdit.id, this.formEdit]);
        } else if (this.$route.meta.mode == 'detailTp') {
          this.formEdit.id_cu = this.modelLaporan.tp.id_cu;
          this.formEdit.id_tp = this.modelLaporan.tp.id;
          this.$store.dispatch(this.kelas + '/updateTp', [this.formEdit.id, this.formEdit]);
        }
      }
      this.modalSize = '';
      this.modalColor = '';
    },
    modalTambah: function modalTambah() {
      this.modalShow = true;
      this.modalTitle = 'Tambah Komentar';
      this.modalState = 'normal1';
      this.modalSize = 'modal-lg';
      this.modalColor = 'bg-primary';
    },
    modalUbah: function modalUbah(item) {
      this.modalShow = true;
      this.modalTitle = 'Ubah Komentar';
      this.modalState = 'normal1';
      this.modalSize = 'modal-lg';
      this.modalColor = 'bg-primary';
      this.formEdit.id = item.id;
      this.formEdit.id_user = item.id_user;
      this.formEdit.id_laporan = item.id_laporan;
      this.formEdit.content = item.content;
    },
    modalHapus: function modalHapus(item) {
      this.modalShow = true;
      this.modalTitle = 'Hapus Komentar ini?';
      this.modalState = 'confirm-tutup';
      this.modalSize = '';
      this.modalColor = '';
      this.modalButton = 'Iya, Hapus';
      this.formEdit.id = item.id;
    },
    modalConfirmOk: function modalConfirmOk() {
      // execute destroy
      if (this.$route.meta.mode == 'detail') {
        this.$store.dispatch(this.kelas + '/destroy', this.formEdit.id);
      } else if (this.$route.meta.mode == 'detailTp') {
        this.$store.dispatch(this.kelas + '/destroyTp', this.formEdit.id);
      }
    },
    modalTutup: function modalTutup() {
      this.modalShow = false;
    },
    // formating
    formatPeriode: function formatPeriode(value) {
      return vue__WEBPACK_IMPORTED_MODULE_0___default.a.filter('month')(value) + ' ' + vue__WEBPACK_IMPORTED_MODULE_0___default.a.filter('year')(value);
    },
    formatCurrency: function formatCurrency(value) {
      return this.$options.filters.currency(value, '', 0, {
        thousandsSeparator: '.'
      });
    },
    formatPercentage: function formatPercentage(value) {
      return vue__WEBPACK_IMPORTED_MODULE_0___default.a.filter('percentage2')(value, 2);
    },
    countTotal: function countTotal(value1, value2) {
      return value1 - value2;
    },
    countPercentage: function countPercentage(value1, value2) {
      if (value2 > 0) {
        return this.formatPercentage(this.countTotal(value1, value2) / value2);
      } else {
        return this.formatPercentage('0');
      }
    }
  },
  computed: _objectSpread(_objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_2__["mapGetters"])('auth', {
    currentUser: 'currentUser'
  })), Object(vuex__WEBPACK_IMPORTED_MODULE_2__["mapGetters"])('laporanCuDiskusi', {
    itemData: 'dataS',
    itemDataStat: 'dataStatS',
    updateMessage: 'update',
    updateStat: 'updateStat'
  })), Object(vuex__WEBPACK_IMPORTED_MODULE_2__["mapGetters"])('laporanCu', {
    modelLaporan: 'data',
    modelLaporanStat: 'dataStat'
  }))
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/laporanCu/revisi.vue?vue&type=script&lang=js":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/views/laporanCu/revisi.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _helpers_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../helpers/form */ "./resources/assets/js/helpers/form.js");
/* harmony import */ var _components_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/modal */ "./resources/assets/js/components/modal.vue");
/* harmony import */ var vue_cleave_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vue-cleave-component */ "./node_modules/vue-cleave-component/dist/vue-cleave.min.js");
/* harmony import */ var vue_cleave_component__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(vue_cleave_component__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_checkValue_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/checkValue.vue */ "./resources/assets/js/components/checkValue.vue");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }







/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    appModal: _components_modal__WEBPACK_IMPORTED_MODULE_4__["default"],
    checkValue: _components_checkValue_vue__WEBPACK_IMPORTED_MODULE_6__["default"]
  },
  data: function data() {
    return {
      kelas: 'laporanCuDiskusi',
      idCu: '',
      idTp: '',
      periode: '',
      periodeTp: '',
      modalShow: false,
      modalState: '',
      modalTitle: '',
      modalSize: '',
      modalColor: '',
      modalButton: '',
      modalContent: '',
      form: {
        id: '',
        id_laporan: '',
        id_user: '',
        id_cu: '',
        id_tp: '',
        periode: '',
        content: ''
      },
      formEdit: {
        id: '',
        id_laporan: '',
        id_user: '',
        id_cu: '',
        id_tp: '',
        periode: '',
        content: ''
      },
      cleaveOption: {
        numeric: {
          numeral: true,
          numeralThousandsGroupStyle: 'thousand',
          numeralDecimalScale: 2,
          numeralDecimalMark: ',',
          delimiter: '.'
        }
      }
    };
  },
  created: function created() {
    this.fetch();
    this.form.id_user = this.currentUser.id;
  },
  watch: {
    '$route': function $route(to, from) {
      // check current page meta
      this.fetch();
    },
    // when updating data
    updateStat: function updateStat(value) {
      this.modalState = value;
      this.modalButton = 'Ok';
      if (value === "success") {
        this.modalTitle = this.updateMessage.message;
        this.modalContent = '';
        this.form.content = '';
        this.fetch();
      } else if (value === "fail") {
        this.modalContent = this.updateMessage;
      } else {
        this.modalContent = '';
      }
    }
  },
  methods: {
    fetch: function fetch() {
      if (this.$route.meta.mode == 'detail') {
        this.$store.dispatch(this.kelas + '/get', this.$route.params.id);
      } else if (this.$route.meta.mode == 'detailTp') {
        this.$store.dispatch(this.kelas + '/getTp', this.$route.params.id);
      }
    },
    save: function save(type) {
      if (type == 'create') {
        this.form.id = '';
        this.form.id_laporan = this.$route.params.id;
        this.form.id_user = this.currentUser.id;
        this.form.periode = this.modelLaporan.periode;
        if (this.$route.meta.mode == 'detail') {
          this.form.id_cu = this.modelLaporan.id_cu;
          this.form.id_tp = '';
          this.$store.dispatch(this.kelas + '/store', this.form);
        } else if (this.$route.meta.mode == 'detailTp') {
          this.form.id_cu = this.modelLaporan.tp.id_cu;
          this.form.id_tp = this.modelLaporan.tp.id;
          this.$store.dispatch(this.kelas + '/storeTp', this.form);
        }
        this.modalShow = true;
      } else if (type == 'edit') {
        this.formEdit.periode = this.modelLaporan.periode;
        if (this.$route.meta.mode == 'detail') {
          this.formEdit.id_cu = this.modelLaporan.id_cu;
          this.formEdit.id_tp = '';
          this.$store.dispatch(this.kelas + '/update', [this.formEdit.id, this.formEdit]);
        } else if (this.$route.meta.mode == 'detailTp') {
          this.formEdit.id_cu = this.modelLaporan.tp.id_cu;
          this.formEdit.id_tp = this.modelLaporan.tp.id;
          this.$store.dispatch(this.kelas + '/updateTp', [this.formEdit.id, this.formEdit]);
        }
      }
      this.modalSize = '';
      this.modalColor = '';
    },
    modalTambah: function modalTambah() {
      this.modalShow = true;
      this.modalTitle = 'Tambah Komentar';
      this.modalState = 'normal1';
      this.modalSize = 'modal-lg';
      this.modalColor = 'bg-primary';
    },
    modalUbah: function modalUbah(item) {
      this.modalShow = true;
      this.modalTitle = 'Ubah Komentar';
      this.modalState = 'normal1';
      this.modalSize = 'modal-lg';
      this.modalColor = 'bg-primary';
      this.formEdit.id = item.id;
      this.formEdit.id_user = item.id_user;
      this.formEdit.id_laporan = item.id_laporan;
      this.formEdit.content = item.content;
    },
    modalHapus: function modalHapus(item) {
      this.modalShow = true;
      this.modalTitle = 'Hapus Komentar ini?';
      this.modalState = 'confirm-tutup';
      this.modalSize = '';
      this.modalColor = '';
      this.modalButton = 'Iya, Hapus';
      this.formEdit.id = item.id;
    },
    modalConfirmOk: function modalConfirmOk() {
      // execute destroy
      if (this.$route.meta.mode == 'detail') {
        this.$store.dispatch(this.kelas + '/destroy', this.formEdit.id);
      } else if (this.$route.meta.mode == 'detailTp') {
        this.$store.dispatch(this.kelas + '/destroyTp', this.formEdit.id);
      }
    },
    modalTutup: function modalTutup() {
      this.modalShow = false;
    },
    // formating
    formatPeriode: function formatPeriode(value) {
      return vue__WEBPACK_IMPORTED_MODULE_0___default.a.filter('month')(value) + ' ' + vue__WEBPACK_IMPORTED_MODULE_0___default.a.filter('year')(value);
    },
    formatCurrency: function formatCurrency(value) {
      return this.$options.filters.currency(value, '', 0, {
        thousandsSeparator: '.'
      });
    },
    formatPercentage: function formatPercentage(value) {
      return vue__WEBPACK_IMPORTED_MODULE_0___default.a.filter('percentage2')(value, 2);
    },
    countTotal: function countTotal(value1, value2) {
      return value1 - value2;
    },
    countPercentage: function countPercentage(value1, value2) {
      if (value2 > 0) {
        return this.formatPercentage(this.countTotal(value1, value2) / value2);
      } else {
        return this.formatPercentage('0');
      }
    }
  },
  computed: _objectSpread(_objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_2__["mapGetters"])('auth', {
    currentUser: 'currentUser'
  })), Object(vuex__WEBPACK_IMPORTED_MODULE_2__["mapGetters"])('laporanCu', {
    itemData: 'history',
    itemDataStat: 'dataStat',
    columnData: 'columnData'
  })), {}, {
    history: function history() {
      return lodash__WEBPACK_IMPORTED_MODULE_1___default.a.groupBy(this.itemData, 'created_at');
    },
    revisionField: function revisionField() {
      var newData = {};
      this.columnData.forEach(function (e) {
        newData[e.name] = e.title;
      });
      return newData;
    }
  })
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/laporanCu/selectDetail.vue?vue&type=script&lang=js":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/views/laporanCu/selectDetail.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }


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
    this.checkProfileIdCU();
  },
  watch: {
    itemDataStat: function itemDataStat(value) {
      if (value === "success") {
        if (this.currentUser.id_cu == 0) {
          this.fetchCU();
        }
        this.periode = this.itemData.periode;
        this.changePeriode(this.periode);
      }
    },
    modelCUStat: function modelCUStat(value) {
      if (value === "success") {
        if (this.itemDataStat == 'success') {
          if (this.$route.meta.mode == 'detail') {
            this.idCu = this.itemData.id_cu;
          } else {
            this.idCu = this.itemData.tp.id_cu;
          }
        }
        this.changeCu(this.idCu);
      }
    },
    modelTpStat: function modelTpStat(value) {
      if (value === "success") {
        if (this.$route.meta.mode == 'detail') {
          this.idTp = 'konsolidasi';
        } else {
          this.idTp = this.itemData.id;
        }
      }
    },
    modelPeriodeStat: function modelPeriodeStat(value) {
      if (value === "success") {
        if (this.itemDataStat == 'success') {
          this.periode = this.itemData.periode;
          this.changePeriode(this.periode);
        }
      }
    }
  },
  methods: {
    checkProfileIdCU: function checkProfileIdCU() {
      if (this.currentUser.id_cu !== 0) {
        this.idCu = this.currentUser.id_cu;
        this.changeCu(this.idCu);
      } else {
        this.fetchCU();
      }
    },
    fetch: function fetch() {
      if (this.idTp == 'konsolidasi') {
        var periode = 0;
        periode = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.find(this.modelPeriode, {
          'periode': this.periode
        });
        this.$router.push({
          name: 'laporanCuDetail',
          params: {
            id: periode.id
          }
        });
      } else {
        this.$router.push({
          name: 'laporanTpDetail',
          params: {
            id: this.idTp
          }
        });
      }
    },
    fetchCU: function fetchCU() {
      if (this.modelCuStat != 'success') {
        this.$store.dispatch('cu/getHeader');
      }
    },
    fetchPeriode: function fetchPeriode(id) {
      this.$store.dispatch('laporanCu/getPeriodeCu', id);
    },
    fetchTp: function fetchTp(id, periode) {
      this.$store.dispatch('laporanTp/getPeriodeTp', [id, periode]);
    },
    changeCu: function changeCu(value) {
      if (value) {
        this.fetchPeriode(value);
      }
    },
    changePeriode: function changePeriode(value) {
      if (this.idCu) {
        this.fetchTp(this.idCu, value);
      }
    }
  },
  computed: _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapGetters"])('auth', {
    currentUser: 'currentUser'
  })), Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapGetters"])('laporanCu', {
    itemData: 'data',
    itemDataStat: 'dataStat',
    modelPeriode: 'periode',
    modelPeriodeStat: 'periodeStat'
  })), Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapGetters"])('laporanTp', {
    modelTp: 'dataS',
    modelTpStat: 'dataStatS'
  })), Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapGetters"])('cu', {
    modelCU: 'headerDataS',
    modelCUStat: 'headerDataStatS',
    updateMessage: 'update',
    updateStat: 'updateStat'
  }))
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/laporanCu/widgetLaporanCu.vue?vue&type=script&lang=js":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/views/laporanCu/widgetLaporanCu.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_checkValue_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/checkValue.vue */ "./resources/assets/js/components/checkValue.vue");
/* harmony import */ var _components_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/modal */ "./resources/assets/js/components/modal.vue");


/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    checkValue: _components_checkValue_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    appModal: _components_modal__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  props: {
    title: {
      "default": ''
    },
    itemData: {
      "default": ''
    },
    itemDataBefore: {
      "default": ''
    },
    isPercent: {
      "default": false
    },
    isOpposite: {
      "default": false
    }
  },
  data: function data() {
    return {
      modalShow: false,
      modalState: 'normal1',
      modalColor: 'bg-primary',
      modalTitle: '',
      modalButton: '',
      modalMobileOptionState: ''
    };
  },
  methods: {
    modalOpen: function modalOpen() {},
    modalTutup: function modalTutup() {},
    checkClass: function checkClass() {
      var className = '';
      if (this.isOpposite) {
        if (this.totalData > 0) {
          className = 'bg-danger';
        } else if (this.totalData < 0) {
          className = 'bg-primary';
        } else {
          className = 'bg-orange-300';
        }
      } else {
        if (this.totalData > 0) {
          className = 'bg-primary';
        } else if (this.totalData < 0) {
          className = 'bg-danger';
        } else {
          className = 'bg-orange-300';
        }
      }
      return className;
    }
  },
  computed: {
    totalData: function totalData() {
      return this.itemData - this.itemDataBefore;
    },
    percentageData: function percentageData() {
      if (this.itemDataBefore > 0) {
        return this.totalData / this.itemDataBefore;
      } else {
        return '0';
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/checkValue.vue?vue&type=template&id=56ee5620":
/*!*************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/checkValue.vue?vue&type=template&id=56ee5620 ***!
  \*************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticStyle: {
      display: "inline-block"
    }
  }, [_vm.value ? _c("span", {
    staticStyle: {
      display: "inline-block"
    }
  }, [_vm.valueType == "trim" ? _c("span", {
    staticStyle: {
      display: "inline-block"
    }
  }, [_c("truncate", {
    staticStyle: {
      display: "inline-block"
    },
    attrs: {
      "action-class": "badge bg-blue",
      clamp: "selengkapnya >",
      length: _vm.trimLength,
      less: "< kembali",
      text: _vm.frontText + " " + _vm.value
    }
  })], 1) : _vm.valueType == "modal" ? _c("span", {
    staticStyle: {
      display: "inline-block"
    }
  }, [_vm._v("\n      " + _vm._s(_vm.value.substring(0, 50)) + "\n      "), _vm.isLongEnough ? [_vm._v("\n        ...\n        "), _c("button", {
    staticClass: "btn btn-light",
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.modalOpen();
      }
    }
  }, [_vm._v("\n          Lihat\n        ")])] : _vm._e()], 2) : _vm.valueType == "currency" ? _c("span", {
    staticStyle: {
      display: "inline-block"
    }
  }, [_vm._v(_vm._s(_vm.frontText) + "\n      " + _vm._s(_vm._f("currency")(_vm.value, "", 0, {
    thousandsSeparator: "."
  })))]) : _vm.valueType == "percentage" ? _c("span", {
    staticStyle: {
      display: "inline-block"
    }
  }, [_vm._v(_vm._s(_vm.frontText) + " " + _vm._s(_vm._f("percentage")(_vm.value, 2)))]) : _vm.valueType == "decimal" ? _c("span", {
    staticStyle: {
      display: "inline-block"
    }
  }, [_vm._v(_vm._s(_vm.frontText) + " " + _vm._s(_vm._f("round")(_vm.value, 2)))]) : _c("span", {
    staticStyle: {
      display: "inline-block"
    }
  }, [_c("b", [_vm._v(_vm._s(_vm.frontText))]), _vm._v(" " + _vm._s(_vm.value))])]) : _c("span", {
    staticStyle: {
      display: "inline-block"
    }
  }, [_vm._v(_vm._s(_vm.frontText) + " " + _vm._s(_vm.empty))]), _vm._v(" "), _c("app-modal", {
    attrs: {
      show: _vm.modalShow,
      state: _vm.modalState,
      title: _vm.modalTitle,
      button: _vm.modalButton,
      content: _vm.modalContent
    },
    on: {
      tutup: _vm.modalTutup,
      backgroundClick: _vm.modalTutup
    }
  })], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/pageHeader.vue?vue&type=template&id=0af8ed53":
/*!*************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/pageHeader.vue?vue&type=template&id=0af8ed53 ***!
  \*************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", [_c("div", {
    staticClass: "page-header"
  }, [_c("div", {
    staticClass: "page-header-content header-elements-md-inline"
  }, [_c("div", {
    staticClass: "page-title d-flex"
  }, [_c("h4", [_c("i", {
    staticClass: "mr-2",
    "class": _vm.titleIcon
  }), _vm._v(" "), _c("span", {
    staticClass: "font-weight-semibold"
  }, [_vm._v(_vm._s(_vm.title))]), _vm._v(" "), _c("small", {
    staticClass: "d-block text-muted"
  }, [_vm._v(_vm._s(_vm.titleDesc))])])]), _vm._v(" "), _c("div", {
    staticClass: "header-elements d-none py-0 mb-3 mb-md-0"
  }, [_vm.level === 1 ? _c("div", {
    staticClass: "breadcrumb"
  }, [_c("router-link", {
    staticClass: "breadcrumb-item",
    attrs: {
      to: {
        name: "dashboard"
      }
    }
  }, [_c("i", {
    staticClass: "icon-home4"
  }), _vm._v("  Dashboard ")]), _vm._v(" "), _c("span", {
    staticClass: "breadcrumb-item active"
  }, [_vm._v(_vm._s(_vm.title))])], 1) : _vm._e(), _vm._v(" "), _vm.level === 2 ? _c("div", {
    staticClass: "breadcrumb"
  }, [_c("router-link", {
    staticClass: "breadcrumb-item",
    attrs: {
      to: {
        name: "dashboard"
      }
    }
  }, [_c("i", {
    staticClass: "icon-home4"
  }), _vm._v(" Dashboard ")]), _vm._v(" "), _c("a", {
    staticClass: "breadcrumb-item",
    attrs: {
      href: "#"
    },
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.level2Back();
      }
    }
  }, [_vm._v(_vm._s(_vm.level2Title))]), _vm._v(" "), _c("span", {
    staticClass: "breadcrumb-item active"
  }, [_vm._v(_vm._s(_vm.title))])], 1) : _vm._e(), _vm._v(" "), _vm.level === 3 ? _c("div", {
    staticClass: "breadcrumb"
  }, [_vm._t("breadcrumb")], 2) : _vm._e()])])])]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/laporanCu/detail.vue?vue&type=template&id=984e60d4":
/*!**************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/views/laporanCu/detail.vue?vue&type=template&id=984e60d4 ***!
  \**************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", [_c("page-header", {
    attrs: {
      title: _vm.title,
      titleDesc: _vm.titleDesc,
      titleIcon: _vm.titleIcon,
      level: 2,
      level2Title: _vm.level2Title
    },
    on: {
      level2Back: function level2Back($event) {
        return _vm.back();
      }
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "page-content pt-0"
  }, [_c("div", {
    staticClass: "content-wrapper"
  }, [_c("div", {
    staticClass: "content"
  }, [_vm.itemDataStat === "fail" ? _c("message", {
    attrs: {
      title: "Oops terjadi kesalahan:",
      errorData: _vm.itemData
    }
  }) : _vm._e(), _vm._v(" "), _vm.itemPearlsStat === "fail" ? _c("message", {
    attrs: {
      title: "Oops terjadi kesalahan:",
      errorData: _vm.itemPearls
    }
  }) : _vm._e(), _vm._v(" "), _c("select-data", {
    attrs: {
      kelas: _vm.kelas,
      isPus: false,
      isNo_ba: true
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "nav-tabs-responsive mb-3"
  }, [_c("ul", {
    staticClass: "nav nav-tabs nav-tabs-solid bg-light"
  }, [_c("li", {
    staticClass: "nav-item"
  }, [_c("a", {
    staticClass: "nav-link",
    "class": {
      active: _vm.tabName == "analisisLaporanCu"
    },
    attrs: {
      href: "#"
    },
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.changeTab("analisisLaporanCu");
      }
    }
  }, [_c("i", {
    staticClass: "icon-dots mr-2"
  }), _vm._v(" Laporan CU")])]), _vm._v(" "), _c("li", {
    staticClass: "nav-item"
  }, [_c("a", {
    staticClass: "nav-link",
    "class": {
      active: _vm.tabName == "analisisPearls"
    },
    attrs: {
      href: "#"
    },
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.changeTab("analisisPearls");
      }
    }
  }, [_c("i", {
    staticClass: "icon-dots mr-2"
  }), _vm._v(" P.E.A.R.L.S.")])]), _vm._v(" "), _c("li", {
    staticClass: "nav-item"
  }, [_c("a", {
    staticClass: "nav-link",
    "class": {
      active: _vm.tabName == "diskusi"
    },
    attrs: {
      href: "#"
    },
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.changeTab("diskusi");
      }
    }
  }, [_c("i", {
    staticClass: "icon-bubble2 mr-2"
  }), _vm._v(" Diskusi")])]), _vm._v(" "), _c("li", {
    staticClass: "nav-item"
  }, [_c("a", {
    staticClass: "nav-link",
    "class": {
      active: _vm.tabName == "revisi"
    },
    attrs: {
      href: "#"
    },
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.changeTab("revisi");
      }
    }
  }, [_c("i", {
    staticClass: "icon-copy3 mr-2"
  }), _vm._v(" Revisi")])])])]), _vm._v(" "), _c("transition", {
    attrs: {
      "enter-active-class": "animated fadeIn",
      mode: "out-in"
    }
  }, [_c("div", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.tabName == "analisisLaporanCu",
      expression: "tabName == 'analisisLaporanCu'"
    }]
  }, [_vm.itemDataStat == "success" ? _c("infografis-data", {
    attrs: {
      title: _vm.title,
      kelas: _vm.kelas,
      columnData: _vm.columnData
    }
  }) : _vm._e(), _vm._v(" "), _vm.itemDataStat == "loading" ? _c("div", [_c("div", {
    staticClass: "card"
  }, [_c("div", {
    staticClass: "card-body"
  }, [_c("h4", [_vm._v("Mohon tunggu...")]), _vm._v(" "), _c("div", {
    staticClass: "progress"
  }, [_c("div", {
    staticClass: "progress-bar progress-bar-info progress-bar-striped progress-bar-animated",
    staticStyle: {
      width: "100%"
    }
  }, [_c("span", {
    staticClass: "sr-only"
  }, [_vm._v("100% Complete")])])])])])]) : _vm._e(), _vm._v(" "), _c("detail-laporan-cu", {
    attrs: {
      kelas: _vm.kelas,
      columnData: _vm.columnData
    }
  })], 1)]), _vm._v(" "), _c("transition", {
    attrs: {
      "enter-active-class": "animated fadeIn",
      mode: "out-in"
    }
  }, [_vm.isPearls ? _c("div", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.tabName == "analisisPearls",
      expression: "tabName == 'analisisPearls'"
    }]
  }, [_vm.itemPearlsStat == "success" ? _c("infografis-pearls-data", {
    attrs: {
      title: _vm.titlePearls,
      kelas: _vm.kelas,
      columnData: _vm.columnDataPearls
    }
  }) : _vm._e(), _vm._v(" "), _vm.itemPearlsStat == "loading" ? _c("div", [_c("div", {
    staticClass: "card"
  }, [_c("div", {
    staticClass: "card-body"
  }, [_c("h4", [_vm._v("Mohon tunggu...")]), _vm._v(" "), _c("div", {
    staticClass: "progress"
  }, [_c("div", {
    staticClass: "progress-bar progress-bar-info progress-bar-striped progress-bar-animated",
    staticStyle: {
      width: "100%"
    }
  }, [_c("span", {
    staticClass: "sr-only"
  }, [_vm._v("100% Complete")])])])])])]) : _vm._e(), _vm._v(" "), _c("detail-pearls", {
    attrs: {
      kelas: _vm.kelas,
      columnData: _vm.columnData
    }
  })], 1) : _vm._e()]), _vm._v(" "), _c("transition", {
    attrs: {
      "enter-active-class": "animated fadeIn",
      mode: "out-in"
    }
  }, [_vm.isDiskusi ? _c("div", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.tabName == "diskusi",
      expression: "tabName == 'diskusi'"
    }]
  }, [_c("diskusi")], 1) : _vm._e()]), _vm._v(" "), _c("transition", {
    attrs: {
      "enter-active-class": "animated fadeIn",
      mode: "out-in"
    }
  }, [_vm.isRevisi ? _c("div", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.tabName == "revisi",
      expression: "tabName =='revisi'"
    }]
  }, [_c("revisi")], 1) : _vm._e()])], 1)])])], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/laporanCu/detailLaporanCu.vue?vue&type=template&id=2f6c7ff7":
/*!***********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/views/laporanCu/detailLaporanCu.vue?vue&type=template&id=2f6c7ff7 ***!
  \***********************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", [_c("div", {
    staticClass: "timeline timeline-left content-group"
  }, [_c("div", {
    staticClass: "timeline-container"
  }, [_c("div", {
    staticClass: "timeline-row"
  }, [_vm._m(0), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-sm-3"
  }, [_vm.itemDataBefore ? _c("div", {
    staticStyle: {
      cursor: "pointer"
    },
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.modalBuka("Lelaki Biasa", "l_biasa", _vm.itemData.l_biasa, _vm.itemData.periode, _vm.itemDataBefore.l_biasa, _vm.itemDataBefore.periode, _vm.grafikData.data, [{
          title: "Lelaki Biasa",
          key: "l_biasa",
          value: _vm.itemData.l_biasa
        }]);
      }
    }
  }, [_c("widget-data", {
    attrs: {
      title: "lelaki biasa",
      itemData: _vm.itemData.l_biasa,
      itemDataBefore: _vm.itemDataBefore.l_biasa
    }
  })], 1) : _c("div", {
    staticStyle: {
      cursor: "pointer"
    },
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.modalBuka("Lelaki Biasa", "l_biasa", _vm.itemData.l_biasa, _vm.itemData.periode, "0", "", _vm.grafikData.data, [{
          title: "Lelaki Biasa",
          key: "l_biasa",
          value: _vm.itemData.l_biasa
        }]);
      }
    }
  }, [_c("widget-data", {
    attrs: {
      title: "lelaki biasa",
      itemData: _vm.itemData.l_biasa,
      itemDataBefore: "0"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "col-sm-3"
  }, [_vm.itemDataBefore ? _c("div", {
    staticStyle: {
      cursor: "pointer"
    },
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.modalBuka("Lelaki L.Biasa", "l_lbiasa", _vm.itemData.l_lbiasa, _vm.itemData.periode, _vm.itemDataBefore.l_lbiasa, _vm.itemDataBefore.periode, _vm.grafikData.data, [{
          title: "Lelaki L.Biasa",
          key: "l_lbiasa",
          value: _vm.itemData.l_lbiasa
        }]);
      }
    }
  }, [_c("widget-data", {
    attrs: {
      title: "lelaki l.biasa",
      itemData: _vm.itemData.l_lbiasa,
      itemDataBefore: _vm.itemDataBefore.l_lbiasa
    }
  })], 1) : _c("div", {
    staticStyle: {
      cursor: "pointer"
    },
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.modalBuka("Lelaki L.Biasa", "l_lbiasa", _vm.itemData.l_lbiasa, _vm.itemData.periode, "0", "", _vm.grafikData.data, [{
          title: "Lelaki L.Biasa",
          key: "l_lbiasa",
          value: _vm.itemData.l_lbiasa
        }]);
      }
    }
  }, [_c("widget-data", {
    attrs: {
      title: "lelaki l.biasa",
      itemData: _vm.itemData.l_lbiasa,
      itemDataBefore: "0"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "col-sm-3"
  }, [_vm.itemDataBefore ? _c("div", {
    staticStyle: {
      cursor: "pointer"
    },
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.modalBuka("Perempuan Biasa", "p_biasa", _vm.itemData.p_biasa, _vm.itemData.periode, _vm.itemDataBefore.p_biasa, _vm.itemDataBefore.periode, _vm.grafikData.data, [{
          title: "Perempuan Biasa",
          key: "p_biasa",
          value: _vm.itemData.p_biasa
        }]);
      }
    }
  }, [_c("widget-data", {
    attrs: {
      title: "perempuan biasa",
      itemData: _vm.itemData.p_biasa,
      itemDataBefore: _vm.itemDataBefore.p_biasa
    }
  })], 1) : _c("div", {
    staticStyle: {
      cursor: "pointer"
    },
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.modalBuka("Perempuan Biasa", "p_biasa", _vm.itemData.p_biasa, _vm.itemData.periode, "0", "", _vm.grafikData.data, [{
          title: "Perempuan Biasa",
          key: "p_biasa",
          value: _vm.itemData.p_biasa
        }]);
      }
    }
  }, [_c("widget-data", {
    attrs: {
      title: "perempuan biasa",
      itemData: _vm.itemData.p_biasa,
      itemDataBefore: "0"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "col-sm-3"
  }, [_vm.itemDataBefore ? _c("div", {
    staticStyle: {
      cursor: "pointer"
    },
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.modalBuka("Perempuan L.Biasa", "p_lbiasa", _vm.itemData.p_lbiasa, _vm.itemData.periode, _vm.itemDataBefore.p_lbiasa, _vm.itemDataBefore.periode, _vm.grafikData.data, [{
          title: "Perempuan L.Biasa",
          key: "p_lbiasa",
          value: _vm.itemData.p_lbiasa
        }]);
      }
    }
  }, [_c("widget-data", {
    attrs: {
      title: "perempuan l.biasa",
      itemData: _vm.itemData.p_lbiasa,
      itemDataBefore: _vm.itemDataBefore.p_lbiasa
    }
  })], 1) : _c("div", {
    staticStyle: {
      cursor: "pointer"
    },
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.modalBuka("Perempuan L.Biasa", "p_lbiasa", _vm.itemData.p_lbiasa, _vm.itemData.periode, "0", "", _vm.grafikData.data, [{
          title: "Perempuan L.Biasa",
          key: "p_lbiasa",
          value: _vm.itemData.p_lbiasa
        }]);
      }
    }
  }, [_c("widget-data", {
    attrs: {
      title: "perempuan l.biasa",
      itemData: _vm.itemData.p_lbiasa,
      itemDataBefore: "0"
    }
  })], 1)])]), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-sm-3"
  }, [_vm.itemDataBefore ? _c("div", {
    staticStyle: {
      cursor: "pointer"
    },
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.modalBuka("Total Anggota", "total_anggota", _vm.itemData.total_anggota, _vm.itemData.periode, _vm.itemDataBefore.total_anggota, _vm.itemDataBefore.periode, _vm.grafikData.data, [{
          title: "Lelaki Biasa",
          key: "l_biasa",
          value: _vm.itemData.l_biasa
        }, {
          title: "Lelaki L.Biasa",
          key: "l_lbiasa",
          value: _vm.itemData.l_lbiasa
        }, {
          title: "Perempuan Biasa",
          key: "p_biasa",
          value: _vm.itemData.p_biasa
        }, {
          title: "Perempuan L.Biasa",
          key: "p_lbiasa",
          value: _vm.itemData.p_lbiasa
        }]);
      }
    }
  }, [_c("widget-data", {
    attrs: {
      title: "total anggota",
      itemData: _vm.itemData.total_anggota,
      itemDataBefore: _vm.itemDataBefore.total_anggota
    }
  })], 1) : _c("div", {
    staticStyle: {
      cursor: "pointer"
    },
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.modalBuka("Total Anggota", "total_anggota", _vm.itemData.total_anggota, _vm.itemData.periode, "0", "", _vm.grafikData.data, [{
          title: "Lelaki Biasa",
          key: "l_biasa",
          value: _vm.itemData.l_biasa
        }, {
          title: "Lelaki L.Biasa",
          key: "l_lbiasa",
          value: _vm.itemData.l_lbiasa
        }, {
          title: "Perempuan Biasa",
          key: "p_biasa",
          value: _vm.itemData.p_biasa
        }, {
          title: "Perempuan L.Biasa",
          key: "p_lbiasa",
          value: _vm.itemData.p_lbiasa
        }]);
      }
    }
  }, [_c("widget-data", {
    attrs: {
      title: "total anggota",
      itemData: _vm.itemData.total_anggota,
      itemDataBefore: "0"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "col-sm-3"
  }, [_vm.itemDataBefore ? _c("div", {
    staticStyle: {
      cursor: "pointer"
    },
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.modalBuka("Total Anggota Lalu", "total_anggota_lalu", _vm.itemData.total_anggota_lalu, _vm.itemData.periode, _vm.itemDataBefore.total_anggota_lalu, _vm.itemDataBefore.periode, _vm.grafikData.data, [{
          title: "Total Anggota Lalu",
          key: "total_anggota_lalu",
          value: _vm.itemData.total_anggota_lalu
        }]);
      }
    }
  }, [_c("widget-data", {
    attrs: {
      title: "total anggota lalu",
      itemData: _vm.itemData.total_anggota_lalu,
      itemDataBefore: _vm.itemDataBefore.total_anggota_lalu
    }
  })], 1) : _c("div", {
    staticStyle: {
      cursor: "pointer"
    },
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.modalBuka("Total Anggota Lalu", "total_anggota_lalu", _vm.itemData.total_anggota_lalu, _vm.itemData.periode, "0", "", _vm.grafikData.data, [{
          title: "Total Anggota Lalu",
          key: "total_anggota_lalu",
          value: _vm.itemData.total_anggota_lalu
        }]);
      }
    }
  }, [_c("widget-data", {
    attrs: {
      title: "total anggota lalu",
      itemData: _vm.itemData.total_anggota_lalu,
      itemDataBefore: "0"
    }
  })], 1)])]), _vm._v(" "), _vm._m(1)]), _vm._v(" "), _c("div", {
    staticClass: "timeline-row"
  }, [_vm._m(2), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-sm-3"
  }, [_vm.itemDataBefore ? _c("div", {
    staticStyle: {
      cursor: "pointer"
    },
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.modalBuka("Aset", "aset", _vm.itemData.aset, _vm.itemData.periode, _vm.itemDataBefore.aset, _vm.itemDataBefore.periode, _vm.grafikData.data, [{
          title: "Aset",
          key: "aset",
          value: _vm.itemData.aset
        }]);
      }
    }
  }, [_c("widget-data", {
    attrs: {
      title: "aset",
      itemData: _vm.itemData.aset,
      itemDataBefore: _vm.itemDataBefore.aset
    }
  })], 1) : _c("div", {
    staticStyle: {
      cursor: "pointer"
    },
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.modalBuka("Aset", "aset", _vm.itemData.aset, _vm.itemData.periode, "0", "", _vm.grafikData.data, [{
          title: "Aset",
          key: "aset",
          value: _vm.itemData.aset
        }]);
      }
    }
  }, [_c("widget-data", {
    attrs: {
      title: "aset",
      itemData: _vm.itemData.aset,
      itemDataBefore: "0"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "col-sm-3"
  }, [_vm.itemDataBefore ? _c("div", {
    staticStyle: {
      cursor: "pointer"
    },
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.modalBuka("Aset Lalu", "aset_lalu", _vm.itemData.aset_lalu, _vm.itemData.periode, _vm.itemDataBefore.aset_lalu, _vm.itemDataBefore.periode, _vm.grafikData.data, [{
          title: "Aset Lalu",
          key: "aset_lalu",
          value: _vm.itemData.aset_lalu
        }]);
      }
    }
  }, [_c("widget-data", {
    attrs: {
      title: "aset lalu",
      itemData: _vm.itemData.aset_lalu,
      itemDataBefore: _vm.itemDataBefore.aset_lalu
    }
  })], 1) : _c("div", {
    staticStyle: {
      cursor: "pointer"
    },
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.modalBuka("Aset Lalu", "aset_lalu", _vm.itemData.aset_lalu, _vm.itemData.periode, "0", "", _vm.grafikData.data, [{
          title: "Aset Lalu",
          key: "aset_lalu",
          value: _vm.itemData.aset_lalu
        }]);
      }
    }
  }, [_c("widget-data", {
    attrs: {
      title: "aset lalu",
      itemData: _vm.itemData.aset_lalu,
      itemDataBefore: ""
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "col-sm-3"
  }, [_vm.itemDataBefore ? _c("div", {
    staticStyle: {
      cursor: "pointer"
    },
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.modalBuka("Aset Masalah", "aset_masalah", _vm.itemData.aset_masalah, _vm.itemData.periode, _vm.itemDataBefore.aset_masalah, _vm.itemDataBefore.periode, _vm.grafikData.data, [{
          title: "Aset Masalah",
          key: "aset_masalah",
          value: _vm.itemData.aset_masalah
        }]);
      }
    }
  }, [_c("widget-data", {
    attrs: {
      title: "aset masalah",
      itemData: _vm.itemData.aset_masalah,
      itemDataBefore: _vm.itemDataBefore.aset_masalah,
      isOpposite: true
    }
  })], 1) : _c("div", {
    staticStyle: {
      cursor: "pointer"
    },
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.modalBuka("Aset Masalah", "aset_masalah", _vm.itemData.aset_masalah, _vm.itemData.periode, "0", "", _vm.grafikData.data, [{
          title: "Aset Masalah",
          key: "aset_masalah",
          value: _vm.itemData.aset_masalah
        }]);
      }
    }
  }, [_c("widget-data", {
    attrs: {
      title: "aset masalah",
      itemData: _vm.itemData.aset_masalah,
      itemDataBefore: "0",
      isOpposite: true
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "col-sm-3"
  }, [_vm.itemDataBefore ? _c("div", {
    staticStyle: {
      cursor: "pointer"
    },
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.modalBuka("Aset Tidak Menghasilkan", "aset_tidak_menghasilkan", _vm.itemData.aset_tidak_menghasilkan, _vm.itemData.periode, _vm.itemDataBefore.aset_tidak_menghasilkan, _vm.itemDataBefore.periode, _vm.grafikData.data, [{
          title: "Aset Tidak Menghasilkan",
          key: "aset_tidak_menghasilkan",
          value: _vm.itemData.aset_tidak_menghasilkan
        }]);
      }
    }
  }, [_c("widget-data", {
    attrs: {
      title: "aset tidak menghasilkan",
      itemData: _vm.itemData.aset_tidak_menghasilkan,
      itemDataBefore: _vm.itemDataBefore.aset_tidak_menghasilkan
    }
  })], 1) : _c("div", {
    staticStyle: {
      cursor: "pointer"
    },
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.modalBuka("Aset Tidak Menghasilkan", "aset_tidak_menghasilkan", _vm.itemData.aset_tidak_menghasilkan, _vm.itemData.periode, "0", "", _vm.grafikData.data, [{
          title: "Aset Tidak Menghasilkan",
          key: "aset_tidak_menghasilkan",
          value: _vm.itemData.aset_tidak_menghasilkan
        }]);
      }
    }
  }, [_c("widget-data", {
    attrs: {
      title: "aset tidak menghasilkan",
      itemData: _vm.itemData.aset_tidak_menghasilkan,
      itemDataBefore: "0"
    }
  })], 1)])]), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-sm-3"
  }, [_vm.itemDataBefore ? _c("div", {
    staticStyle: {
      cursor: "pointer"
    },
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.modalBuka("Aktiva Lancar", "aktiva_lancar", _vm.itemData.aktiva_lancar, _vm.itemData.periode, _vm.itemDataBefore.aktiva_lancar, _vm.itemDataBefore.periode, _vm.grafikData.data, [{
          title: "Aktiva Lancar",
          key: "aktiva_lancar",
          value: _vm.itemData.aktiva_lancar
        }]);
      }
    }
  }, [_c("widget-data", {
    attrs: {
      title: "aktiva lancar",
      itemData: _vm.itemData.aktiva_lancar,
      itemDataBefore: _vm.itemDataBefore.aktiva_lancar
    }
  })], 1) : _c("div", {
    staticStyle: {
      cursor: "pointer"
    },
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.modalBuka("Aktiva Lancar", "aktiva_lancar", _vm.itemData.aktiva_lancar, _vm.itemData.periode, "0", "", _vm.grafikData.data, [{
          title: "Aktiva Lancar",
          key: "aktiva_lancar",
          value: _vm.itemData.aktiva_lancar
        }]);
      }
    }
  }, [_c("widget-data", {
    attrs: {
      title: "aktiva lancar",
      itemData: _vm.itemData.aktiva_lancar,
      itemDataBefore: "0"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "col-sm-3"
  }, [_vm.itemDataBefore ? _c("div", {
    staticStyle: {
      cursor: "pointer"
    },
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.modalBuka("Rata-rata Aset", "rata_aset", _vm.itemData.rata_aset, _vm.itemData.periode, _vm.itemDataBefore.rata_aset, _vm.itemDataBefore.periode, _vm.grafikData.data, [{
          title: "Rata-rata Aset",
          key: "rata_aset",
          value: _vm.itemData.rata_aset
        }]);
      }
    }
  }, [_c("widget-data", {
    attrs: {
      title: "rata-rata aset",
      itemData: _vm.itemData.rata_aset,
      itemDataBefore: _vm.itemDataBefore.rata_aset
    }
  })], 1) : _c("div", {
    staticStyle: {
      cursor: "pointer"
    },
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.modalBuka("Rata-rata Aset", "rata_aset", _vm.itemData.rata_aset, _vm.itemData.periode, "0", "", _vm.grafikData.data, [{
          title: "Rata-rata Aset",
          key: "rata_aset",
          value: _vm.itemData.rata_aset
        }]);
      }
    }
  }, [_c("widget-data", {
    attrs: {
      title: "rata-rata aset",
      itemData: _vm.itemData.rata_aset,
      itemDataBefore: "0"
    }
  })], 1)])]), _vm._v(" "), _vm._m(3)]), _vm._v(" "), _c("div", {
    staticClass: "timeline-row"
  }, [_vm._m(4), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-sm-3"
  }, [_vm.itemDataBefore ? _c("div", {
    staticStyle: {
      cursor: "pointer"
    },
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.modalBuka("Simp. Saham", "simpanan_saham", _vm.itemData.simpanan_saham, _vm.itemData.periode, _vm.itemDataBefore.simpanan_saham, _vm.itemDataBefore.periode, _vm.grafikData.data, [{
          title: "Simp. Saham",
          key: "simpanan_saham",
          value: _vm.itemData.simpanan_saham
        }]);
      }
    }
  }, [_c("widget-data", {
    attrs: {
      title: "simp. saham",
      itemData: _vm.itemData.simpanan_saham,
      itemDataBefore: _vm.itemDataBefore.simpanan_saham
    }
  })], 1) : _c("div", {
    staticStyle: {
      cursor: "pointer"
    },
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.modalBuka("Simp. Saham", "simpanan_saham", _vm.itemData.simpanan_saham, _vm.itemData.periode, "0", "", _vm.grafikData.data, [{
          title: "Simp. Saham",
          key: "simpanan_saham",
          value: _vm.itemData.simpanan_saham
        }]);
      }
    }
  }, [_c("widget-data", {
    attrs: {
      title: "simp. saham",
      itemData: _vm.itemData.simpanan_saham,
      itemDataBefore: "0"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "col-sm-3"
  }, [_vm.itemDataBefore ? _c("div", {
    staticStyle: {
      cursor: "pointer"
    },
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.modalBuka("Simp. Saham Lalu", "simpanan_saham_lalu", _vm.itemData.simpanan_saham_lalu, _vm.itemData.periode, _vm.itemDataBefore.simpanan_saham_lalu, _vm.itemDataBefore.periode, _vm.grafikData.data, [{
          title: "Simp. Saham Lalu",
          key: "simpanan_saham_lalu",
          value: _vm.itemData.simpanan_saham_lalu
        }]);
      }
    }
  }, [_c("widget-data", {
    attrs: {
      title: "simp. saham lalu",
      itemData: _vm.itemData.simpanan_saham_lalu,
      itemDataBefore: _vm.itemDataBefore.simpanan_saham_lalu
    }
  })], 1) : _c("div", {
    staticStyle: {
      cursor: "pointer"
    },
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.modalBuka("Simp. Saham Lalu", "simpanan_saham_lalu", _vm.itemData.simpanan_saham_lalu, _vm.itemData.periode, "0", "", _vm.grafikData.data, [{
          title: "Simp. Saham Lalu",
          key: "simpanan_saham_lalu",
          value: _vm.itemData.simpanan_saham_lalu
        }]);
      }
    }
  }, [_c("widget-data", {
    attrs: {
      title: "simp. saham lalu",
      itemData: _vm.itemData.simpanan_saham_lalu,
      itemDataBefore: "0"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "col-sm-3"
  }, [_vm.itemDataBefore ? _c("div", {
    staticStyle: {
      cursor: "pointer"
    },
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.modalBuka("Simp. Saham Des", "simpanan_saham_des", _vm.itemData.simpanan_saham_des, _vm.itemData.periode, _vm.itemDataBefore.simpanan_saham_des, _vm.itemDataBefore.periode, _vm.grafikData.data, [{
          title: "Simp. Saham Des",
          key: "simpanan_saham_des",
          value: _vm.itemData.simpanan_saham_des
        }]);
      }
    }
  }, [_c("widget-data", {
    attrs: {
      title: "simp. saham des",
      itemData: _vm.itemData.simpanan_saham_des,
      itemDataBefore: _vm.itemDataBefore.simpanan_saham_des
    }
  })], 1) : _c("div", {
    staticStyle: {
      cursor: "pointer"
    },
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.modalBuka("Simp. Saham Des", "simpanan_saham_des", _vm.itemData.simpanan_saham_des, _vm.itemData.periode, "0", "", _vm.grafikData.data, [{
          title: "Simp. Saham Des",
          key: "simpanan_saham_des",
          value: _vm.itemData.simpanan_saham_des
        }]);
      }
    }
  }, [_c("widget-data", {
    attrs: {
      title: "simp. saham des",
      itemData: _vm.itemData.simpanan_saham_des,
      itemDataBefore: "0"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "col-sm-3"
  }, [_vm.itemDataBefore ? _c("div", {
    staticStyle: {
      cursor: "pointer"
    },
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.modalBuka("Simp. Nonsaham Unggulan", "nonsaham_unggulan", _vm.itemData.nonsaham_unggulan, _vm.itemData.periode, _vm.itemDataBefore.nonsaham_unggulan, _vm.itemDataBefore.periode, _vm.grafikData.data, [{
          title: "Simp. Nonsaham Unggulan",
          key: "nonsaham_unggulan",
          value: _vm.itemData.nonsaham_unggulan
        }]);
      }
    }
  }, [_c("widget-data", {
    attrs: {
      title: "simp. nonsaham unggulan",
      itemData: _vm.itemData.nonsaham_unggulan,
      itemDataBefore: _vm.itemDataBefore.nonsaham_unggulan
    }
  })], 1) : _c("div", {
    staticStyle: {
      cursor: "pointer"
    },
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.modalBuka("Simp. Nonsaham Unggulan", "nonsaham_unggulan", _vm.itemData.nonsaham_unggulan, _vm.itemData.periode, "0", "", _vm.grafikData.data, [{
          title: "Simp. Nonsaham Unggulan",
          key: "nonsaham_unggulan",
          value: _vm.itemData.nonsaham_unggulan
        }]);
      }
    }
  }, [_c("widget-data", {
    attrs: {
      title: "simp. nonsaham unggulan",
      itemData: _vm.itemData.nonsaham_unggulan,
      itemDataBefore: "0"
    }
  })], 1)])]), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-sm-3"
  }, [_vm.itemDataBefore ? _c("div", {
    staticStyle: {
      cursor: "pointer"
    },
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.modalBuka("Simp. Nonsaham Harian", "nonsaham_harian", _vm.itemData.nonsaham_harian, _vm.itemData.periode, _vm.itemDataBefore.nonsaham_harian, _vm.itemDataBefore.periode, _vm.grafikData.data, [{
          title: "Simp. Nonsaham Harian",
          key: "nonsaham_harian",
          value: _vm.itemData.nonsaham_harian
        }]);
      }
    }
  }, [_c("widget-data", {
    attrs: {
      title: "simp. nonsaham harian",
      itemData: _vm.itemData.nonsaham_harian,
      itemDataBefore: _vm.itemDataBefore.nonsaham_harian
    }
  })], 1) : _c("div", {
    staticStyle: {
      cursor: "pointer"
    },
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.modalBuka("Simp. Nonsaham Harian", "nonsaham_harian", _vm.itemData.nonsaham_harian, _vm.itemData.periode, "0", "", _vm.grafikData.data, [{
          title: "Simp. Nonsaham Harian",
          key: "nonsaham_harian",
          value: _vm.itemData.nonsaham_harian
        }]);
      }
    }
  }, [_c("widget-data", {
    attrs: {
      title: "simp. nonsaham harian",
      itemData: _vm.itemData.nonsaham_harian,
      itemDataBefore: "0"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "col-sm-3"
  }, [_vm.itemDataBefore ? _c("div", {
    staticStyle: {
      cursor: "pointer"
    },
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.modalBuka("Hutang SPD", "hutang_spd", _vm.itemData.hutang_spd, _vm.itemData.periode, _vm.itemDataBefore.hutang_spd, _vm.itemDataBefore.periode, _vm.grafikData.data, [{
          title: "Hutang SPD",
          key: "hutang_spd",
          value: _vm.itemData.hutang_spd
        }]);
      }
    }
  }, [_c("widget-data", {
    attrs: {
      title: "hutang spd",
      itemData: _vm.itemData.hutang_spd,
      itemDataBefore: _vm.itemDataBefore.hutang_spd
    }
  })], 1) : _c("div", {
    staticStyle: {
      cursor: "pointer"
    },
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.modalBuka("Hutang SPD", "hutang_spd", _vm.itemData.hutang_spd, _vm.itemData.periode, "0", "", _vm.grafikData.data, [{
          title: "Hutang SPD",
          key: "hutang_spd",
          value: _vm.itemData.hutang_spd
        }]);
      }
    }
  }, [_c("widget-data", {
    attrs: {
      title: "hutang spd",
      itemData: _vm.itemData.hutang_spd,
      itemDataBefore: "0"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "col-sm-3"
  }, [_vm.itemDataBefore ? _c("div", {
    staticStyle: {
      cursor: "pointer"
    },
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.modalBuka("Hutang Tidak Berbiaya", "hutang_tidak_berbiaya_30hari", _vm.itemData.hutang_tidak_berbiaya_30hari, _vm.itemData.periode, _vm.itemDataBefore.hutang_tidak_berbiaya_30hari, _vm.itemDataBefore.periode, _vm.grafikData.data, [{
          title: "Hutang Tidak Berbiaya",
          key: "hutang_tidak_berbiaya_30hari",
          value: _vm.itemData.hutang_tidak_berbiaya_30hari
        }]);
      }
    }
  }, [_c("widget-data", {
    attrs: {
      title: "hutang tidak berbiaya",
      itemData: _vm.itemData.hutang_tidak_berbiaya_30hari,
      itemDataBefore: _vm.itemDataBefore.hutang_tidak_berbiaya_30hari
    }
  })], 1) : _c("div", {
    staticStyle: {
      cursor: "pointer"
    },
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.modalBuka("Hutang Tidak Berbiaya", "hutang_tidak_berbiaya_30hari", _vm.itemData.hutang_tidak_berbiaya_30hari, _vm.itemData.periode, "0", "", _vm.grafikData.data, [{
          title: "Hutang Tidak Berbiaya",
          key: "hutang_tidak_berbiaya_30hari",
          value: _vm.itemData.hutang_tidak_berbiaya_30hari
        }]);
      }
    }
  }, [_c("widget-data", {
    attrs: {
      title: "hutang tidak berbiaya",
      itemData: _vm.itemData.hutang_tidak_berbiaya_30hari,
      itemDataBefore: "0"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "col-sm-3"
  }, [_vm.itemDataBefore ? _c("div", {
    staticStyle: {
      cursor: "pointer"
    },
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.modalBuka("Total Hutang Pihak Ke-3", "total_hutang_pihak3", _vm.itemData.total_hutang_pihak3, _vm.itemData.periode, _vm.itemDataBefore.total_hutang_pihak3, _vm.itemDataBefore.periode, _vm.grafikData.data, [{
          title: "Total Hutang Pihak Ke-3",
          key: "total_hutang_pihak3",
          value: _vm.itemData.total_hutang_pihak3
        }]);
      }
    }
  }, [_c("widget-data", {
    attrs: {
      title: "total hutang pihak ke-3",
      itemData: _vm.itemData.total_hutang_pihak3,
      itemDataBefore: _vm.itemDataBefore.total_hutang_pihak3
    }
  })], 1) : _c("div", {
    staticStyle: {
      cursor: "pointer"
    },
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.modalBuka("Total Hutang Pihak Ke-3", "total_hutang_pihak3", _vm.itemData.total_hutang_pihak3, _vm.itemData.periode, "0", "", _vm.grafikData.data, [{
          title: "Total Hutang Pihak Ke-3",
          key: "total_hutang_pihak3",
          value: _vm.itemData.total_hutang_pihak3
        }]);
      }
    }
  }, [_c("widget-data", {
    attrs: {
      title: "total hutang pihak ke-3",
      itemData: _vm.itemData.total_hutang_pihak3,
      itemDataBefore: "0"
    }
  })], 1)])]), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-sm-3"
  }, [_vm.itemDataBefore ? _c("div", {
    staticStyle: {
      cursor: "pointer"
    },
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.modalBuka("Piutang Beredar", "piutang_beredar", _vm.itemData.piutang_beredar, _vm.itemData.periode, _vm.itemDataBefore.piutang_beredar, _vm.itemDataBefore.periode, _vm.grafikData.data, [{
          title: "Piutang Beredar",
          key: "piutang_beredar",
          value: _vm.itemData.piutang_beredar
        }]);
      }
    }
  }, [_c("widget-data", {
    attrs: {
      title: "piutang beredar",
      itemData: _vm.itemData.piutang_beredar,
      itemDataBefore: _vm.itemDataBefore.piutang_beredar
    }
  })], 1) : _c("div", {
    staticStyle: {
      cursor: "pointer"
    },
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.modalBuka("Piutang Beredar", "piutang_beredar", _vm.itemData.piutang_beredar, _vm.itemData.periode, "0", "", _vm.grafikData.data, [{
          title: "Piutang Beredar",
          key: "piutang_beredar",
          value: _vm.itemData.piutang_beredar
        }]);
      }
    }
  }, [_c("widget-data", {
    attrs: {
      title: "piutang beredar",
      itemData: _vm.itemData.piutang_beredar,
      itemDataBefore: "0"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "col-sm-3"
  }, [_vm.itemDataBefore ? _c("div", {
    staticStyle: {
      cursor: "pointer"
    },
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.modalBuka("Piutang Bersih", "piutang_bersih", _vm.itemData.piutang_bersih, _vm.itemData.periode, _vm.itemDataBefore.piutang_bersih, _vm.itemDataBefore.periode, _vm.grafikData.data, [{
          title: "Piutang Beredar",
          key: "piutang_beredar",
          value: _vm.itemData.piutang_beredar
        }, {
          title: "Piutang Lalai 1-12 Bulan",
          key: "piutang_lalai_1bulan",
          value: _vm.itemData.piutang_lalai_1bulan
        }, {
          title: "Piutang Lalai > 12 Bulan",
          key: "piutang_lalai_12bulan",
          value: _vm.itemData.piutang_lalai_12bulan
        }]);
      }
    }
  }, [_c("widget-data", {
    attrs: {
      title: "piutang bersih",
      itemData: _vm.itemData.piutang_bersih,
      itemDataBefore: _vm.itemDataBefore.piutang_bersih
    }
  })], 1) : _c("div", {
    staticStyle: {
      cursor: "pointer"
    },
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.modalBuka("Piutang Bersih", "piutang_bersih", _vm.itemData.piutang_bersih, _vm.itemData.periode, "0", "", _vm.grafikData.data, [{
          title: "Piutang Beredar",
          key: "piutang_beredar",
          value: _vm.itemData.piutang_beredar
        }, {
          title: "Piutang Lalai 1-12 Bulan",
          key: "piutang_lalai_1bulan",
          value: _vm.itemData.piutang_lalai_1bulan
        }, {
          title: "Piutang Lalai > 12 Bulan",
          key: "piutang_lalai_12bulan",
          value: _vm.itemData.piutang_lalai_12bulan
        }]);
      }
    }
  }, [_c("widget-data", {
    attrs: {
      title: "piutang bersih",
      itemData: _vm.itemData.piutang_bersih,
      itemDataBefore: "0"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "col-sm-3"
  }, [_vm.itemDataBefore ? _c("div", {
    staticStyle: {
      cursor: "pointer"
    },
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.modalBuka("Piutang Anggota", "piutang_anggota", _vm.itemData.piutang_anggota, _vm.itemData.periode, _vm.itemDataBefore.piutang_anggota, _vm.itemDataBefore.periode, _vm.grafikData.data, [{
          title: "Piutang Anggota",
          key: "piutang_anggota",
          value: _vm.itemData.piutang_anggota
        }]);
      }
    }
  }, [_c("widget-data", {
    attrs: {
      title: "piutang anggota",
      itemData: _vm.itemData.piutang_anggota,
      itemDataBefore: _vm.itemDataBefore.piutang_anggota
    }
  })], 1) : _c("div", {
    staticStyle: {
      cursor: "pointer"
    },
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.modalBuka("Piutang Anggota", "piutang_anggota", _vm.itemData.piutang_anggota, _vm.itemData.periode, _vm.itemDataBefore.piutang_anggota, _vm.itemDataBefore.periode, _vm.grafikData.data, [{
          title: "Piutang Anggota",
          key: "piutang_anggota",
          value: _vm.itemData.piutang_anggota
        }]);
      }
    }
  }, [_c("widget-data", {
    attrs: {
      title: "piutang anggota",
      itemData: _vm.itemData.piutang_anggota,
      itemDataBefore: "0"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "col-sm-3"
  }, [_vm.itemDataBefore ? _c("div", {
    staticStyle: {
      cursor: "pointer"
    },
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.modalBuka("Piutang Lalai 1-12 Bulan", "piutang_lalai_1bulan", _vm.itemData.piutang_lalai_1bulan, _vm.itemData.periode, _vm.itemDataBefore.piutang_lalai_1bulan, _vm.itemDataBefore.periode, _vm.grafikData.data, [{
          title: "Piutang Lalai 1-12 Bulan",
          key: "piutang_lalai_1bulan",
          value: _vm.itemData.piutang_lalai_1bulan
        }], "currency", true);
      }
    }
  }, [_c("widget-data", {
    attrs: {
      title: "piutang lalai 1-12 bulan",
      itemData: _vm.itemData.piutang_lalai_1bulan,
      itemDataBefore: _vm.itemDataBefore.piutang_lalai_1bulan,
      isOpposite: true
    }
  })], 1) : _c("div", {
    staticStyle: {
      cursor: "pointer"
    },
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.modalBuka("Piutang Lalai 1-12 Bulan", "piutang_lalai_1bulan", _vm.itemData.piutang_lalai_1bulan, _vm.itemData.periode, "0", "", _vm.grafikData.data, [{
          title: "Piutang Lalai 1-12 Bulan",
          key: "piutang_lalai_1bulan",
          value: _vm.itemData.piutang_lalai_1bulan
        }], "currency", true);
      }
    }
  }, [_c("widget-data", {
    attrs: {
      title: "piutang lalai 1-12 bulan",
      itemData: _vm.itemData.piutang_lalai_1bulan,
      itemDataBefore: "0",
      isOpposite: true
    }
  })], 1)])]), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-sm-3"
  }, [_vm.itemDataBefore ? _c("div", {
    staticStyle: {
      cursor: "pointer"
    },
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.modalBuka("Piutang Lalai > 12 Bulan", "piutang_lalai_12bulan", _vm.itemData.piutang_lalai_12bulan, _vm.itemData.periode, _vm.itemDataBefore.piutang_lalai_12bulan, _vm.itemDataBefore.periode, _vm.grafikData.data, [{
          title: "Piutang Lalai > 12 Bulan",
          key: "piutang_lalai_12bulan",
          value: _vm.itemData.piutang_lalai_12bulan
        }], "currency", true);
      }
    }
  }, [_vm.itemDataBefore ? _c("widget-data", {
    attrs: {
      title: "piutang lalai > 12 bulan",
      itemData: _vm.itemData.piutang_lalai_12bulan,
      itemDataBefore: _vm.itemDataBefore.piutang_lalai_12bulan,
      isOpposite: true
    }
  }) : _vm._e()], 1) : _vm._e(), _vm._v(" "), _vm.itemDataBefore ? _c("div", {
    staticStyle: {
      cursor: "pointer"
    },
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.modalBuka("Piutang Lalai > 12 Bulan", "piutang_lalai_12bulan", _vm.itemData.piutang_lalai_12bulan, _vm.itemData.periode, "0", "", _vm.grafikData.data, [{
          title: "Piutang Lalai > 12 Bulan",
          key: "piutang_lalai_12bulan",
          value: _vm.itemData.piutang_lalai_12bulan
        }], "currency", true);
      }
    }
  }, [_c("widget-data", {
    attrs: {
      title: "piutang lalai > 12 bulan",
      itemData: _vm.itemData.piutang_lalai_12bulan,
      itemDataBefore: "0",
      isOpposite: true
    }
  })], 1) : _vm._e()]), _vm._v(" "), _c("div", {
    staticClass: "col-sm-3"
  }, [_vm.itemDataBefore ? _c("div", {
    staticStyle: {
      cursor: "pointer"
    },
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.modalBuka("Rasio Piutang Beredar", "rasio_beredar", _vm.itemData.rasio_beredar, _vm.itemData.periode, _vm.itemDataBefore.rasio_beredar, _vm.itemDataBefore.periode, _vm.grafikData.data, [{
          title: "Piutang Beredar",
          key: "piutang_beredar",
          value: _vm.itemData.piutang_beredar
        }, {
          title: "Aset",
          key: "aset",
          value: _vm.itemData.aset
        }], "percent");
      }
    }
  }, [_c("widget-data", {
    attrs: {
      title: "rasio piutang beredar",
      itemData: _vm.itemData.rasio_beredar,
      itemDataBefore: _vm.itemDataBefore.rasio_beredar,
      isPercent: true
    }
  })], 1) : _c("div", {
    staticStyle: {
      cursor: "pointer"
    },
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.modalBuka("Rasio Piutang Beredar", "rasio_beredar", _vm.itemData.rasio_beredar, _vm.itemData.periode, "0", "", _vm.grafikData.data, [{
          title: "Piutang Beredar",
          key: "piutang_beredar",
          value: _vm.itemData.piutang_beredar
        }, {
          title: "Aset",
          key: "aset",
          value: _vm.itemData.aset
        }], "percent");
      }
    }
  }, [_c("widget-data", {
    attrs: {
      title: "rasio piutang beredar",
      itemData: _vm.itemData.rasio_beredar,
      itemDataBefore: "0",
      isPercent: true
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "col-sm-3"
  }, [_vm.itemDataBefore ? _c("div", {
    staticStyle: {
      cursor: "pointer"
    },
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.modalBuka("Rasio Piutang Lalai", "rasio_lalai", _vm.itemData.rasio_lalai, _vm.itemData.periode, _vm.itemDataBefore.rasio_lalai, _vm.itemDataBefore.periode, _vm.grafikData.data, [{
          title: "Piutang Lalai 1-12 Bulan",
          key: "piutang_lalai_1bulan",
          value: _vm.itemData.piutang_lalai_1bulan
        }, {
          title: "Piutang Lalai > 12 Bulan",
          key: "piutang_lalai_12bulan",
          value: _vm.itemData.piutang_lalai_12bulan
        }, {
          title: "Piutang Beredar",
          key: "piutang_beredar",
          value: _vm.itemData.piutang_beredar
        }], "percent", true);
      }
    }
  }, [_c("widget-data", {
    attrs: {
      title: "rasio piutang lalai",
      itemData: _vm.itemData.rasio_lalai,
      itemDataBefore: _vm.itemDataBefore.rasio_lalai,
      isPercent: true,
      isOpposite: true
    }
  })], 1) : _c("div", {
    staticStyle: {
      cursor: "pointer"
    },
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.modalBuka("Rasio Piutang Lalai", "rasio_lalai", _vm.itemData.rasio_lalai, _vm.itemData.periode, "0", "", _vm.grafikData.data, [{
          title: "Piutang Lalai 1-12 Bulan",
          key: "piutang_lalai_1bulan",
          value: _vm.itemData.piutang_lalai_1bulan
        }, {
          title: "Piutang Lalai > 12 Bulan",
          key: "piutang_lalai_12bulan",
          value: _vm.itemData.piutang_lalai_12bulan
        }, {
          title: "Piutang Beredar",
          key: "piutang_beredar",
          value: _vm.itemData.piutang_beredar
        }], "percent", true);
      }
    }
  }, [_c("widget-data", {
    attrs: {
      title: "rasio piutang lalai",
      itemData: _vm.itemData.rasio_lalai,
      itemDataBefore: "0",
      isPercent: true,
      isOpposite: true
    }
  })], 1)])]), _vm._v(" "), _vm._m(5)]), _vm._v(" "), _c("div", {
    staticClass: "timeline-row"
  }, [_vm._m(6), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-sm-3"
  }, [_vm.itemDataBefore ? _c("div", {
    staticStyle: {
      cursor: "pointer"
    },
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.modalBuka("DCR", "dcr", _vm.itemData.dcr, _vm.itemData.periode, _vm.itemDataBefore.dcr, _vm.itemDataBefore.periode, _vm.grafikData.data, [{
          title: "DCR",
          key: "dcr",
          value: _vm.itemData.dcr
        }]);
      }
    }
  }, [_c("widget-data", {
    attrs: {
      title: "dcr",
      itemData: _vm.itemData.dcr,
      itemDataBefore: _vm.itemDataBefore.dcr
    }
  })], 1) : _c("div", {
    staticStyle: {
      cursor: "pointer"
    },
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.modalBuka("DCR", "dcr", _vm.itemData.dcr, _vm.itemData.periode, "0", "", _vm.grafikData.data, [{
          title: "DCR",
          key: "dcr",
          value: _vm.itemData.dcr
        }]);
      }
    }
  }, [_c("widget-data", {
    attrs: {
      title: "dcr",
      itemData: _vm.itemData.dcr,
      itemDataBefore: "0"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "col-sm-3"
  }, [_vm.itemDataBefore ? _c("div", {
    staticStyle: {
      cursor: "pointer"
    },
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.modalBuka("DCU", "dcu", _vm.itemData.dcu, _vm.itemData.periode, _vm.itemDataBefore.dcu, _vm.itemDataBefore.periode, _vm.grafikData.data, [{
          title: "DCU",
          key: "dcu",
          value: _vm.itemData.dcu
        }]);
      }
    }
  }, [_c("widget-data", {
    attrs: {
      title: "dcu",
      itemData: _vm.itemData.dcu,
      itemDataBefore: _vm.itemDataBefore.dcu
    }
  })], 1) : _c("div", {
    staticStyle: {
      cursor: "pointer"
    },
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.modalBuka("DCU", "dcu", _vm.itemData.dcu, _vm.itemData.periode, "0", "", _vm.grafikData.data, [{
          title: "DCU",
          key: "dcu",
          value: _vm.itemData.dcu
        }]);
      }
    }
  }, [_c("widget-data", {
    attrs: {
      title: "dcu",
      itemData: _vm.itemData.dcu,
      itemDataBefore: "0"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "col-sm-3"
  }, [_vm.itemDataBefore ? _c("div", {
    staticStyle: {
      cursor: "pointer"
    },
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.modalBuka("Iuran Gedung", "dana_gedung", _vm.itemData.dana_gedung, _vm.itemData.periode, _vm.itemDataBefore.dana_gedung, _vm.itemDataBefore.periode, _vm.grafikData.data, [{
          title: "Iuran Gedung",
          key: "dana_gedung",
          value: _vm.itemData.dana_gedung
        }]);
      }
    }
  }, [_c("widget-data", {
    attrs: {
      title: "iuran gedung",
      itemData: _vm.itemData.dana_gedung,
      itemDataBefore: _vm.itemDataBefore.dana_gedung
    }
  })], 1) : _c("div", {
    staticStyle: {
      cursor: "pointer"
    },
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.modalBuka("Iuran Gedung", "dana_gedung", _vm.itemData.dana_gedung, _vm.itemData.periode, "0", "", _vm.grafikData.data, [{
          title: "Iuran Gedung",
          key: "dana_gedung",
          value: _vm.itemData.dana_gedung
        }]);
      }
    }
  }, [_c("widget-data", {
    attrs: {
      title: "iuran gedung",
      itemData: _vm.itemData.dana_gedung,
      itemDataBefore: "0"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "col-sm-3"
  }, [_vm.itemDataBefore ? _c("div", {
    staticStyle: {
      cursor: "pointer"
    },
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.modalBuka("Donasi", "donasi", _vm.itemData.donasi, _vm.itemData.periode, _vm.itemDataBefore.donasi, _vm.itemDataBefore.periode, _vm.grafikData.data, [{
          title: "Donasi",
          key: "donasi",
          value: _vm.itemData.donasi
        }]);
      }
    }
  }, [_c("widget-data", {
    attrs: {
      title: "donasi",
      itemData: _vm.itemData.donasi,
      itemDataBefore: _vm.itemDataBefore.donasi
    }
  })], 1) : _c("div", {
    staticStyle: {
      cursor: "pointer"
    },
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.modalBuka("Donasi", "donasi", _vm.itemData.donasi, _vm.itemData.periode, "0", "", _vm.grafikData.data, [{
          title: "Donasi",
          key: "donasi",
          value: _vm.itemData.donasi
        }]);
      }
    }
  }, [_c("widget-data", {
    attrs: {
      title: "donasi",
      itemData: _vm.itemData.donasi,
      itemDataBefore: "0"
    }
  })], 1)])]), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-sm-3"
  }, [_vm.itemDataBefore ? _c("div", {
    staticStyle: {
      cursor: "pointer"
    },
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.modalBuka("BJS Saham", "bjs_saham", _vm.itemData.bjs_saham, _vm.itemData.periode, _vm.itemDataBefore.bjs_saham, _vm.itemDataBefore.periode, _vm.grafikData.data, [{
          title: "BJS Saham",
          key: "bjs_saham",
          value: _vm.itemData.bjs_saham
        }]);
      }
    }
  }, [_c("widget-data", {
    attrs: {
      title: "bjs saham",
      itemData: _vm.itemData.bjs_saham,
      itemDataBefore: _vm.itemDataBefore.bjs_saham
    }
  })], 1) : _c("div", {
    staticStyle: {
      cursor: "pointer"
    },
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.modalBuka("BJS Saham", "bjs_saham", _vm.itemData.bjs_saham, _vm.itemData.periode, "0", "", _vm.grafikData.data, [{
          title: "BJS Saham",
          key: "bjs_saham",
          value: _vm.itemData.bjs_saham
        }]);
      }
    }
  }, [_c("widget-data", {
    attrs: {
      title: "bjs saham",
      itemData: _vm.itemData.bjs_saham,
      itemDataBefore: "0"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "col-sm-3"
  }, [_vm.itemDataBefore ? _c("div", {
    staticStyle: {
      cursor: "pointer"
    },
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.modalBuka("Beban Penyisihan DCR", "beban_penyisihan_dcr", _vm.itemData.beban_penyisihan_dcr, _vm.itemData.periode, _vm.itemDataBefore.beban_penyisihan_dcr, _vm.itemDataBefore.periode, _vm.grafikData.data, [{
          title: "Beban Penyisihan DCR",
          key: "beban_penyisihan_dcr",
          value: _vm.itemData.beban_penyisihan_dcr
        }]);
      }
    }
  }, [_vm.itemDataBefore ? _c("widget-data", {
    attrs: {
      title: "beban penyisihan dcr",
      itemData: _vm.itemData.beban_penyisihan_dcr,
      itemDataBefore: _vm.itemDataBefore.beban_penyisihan_dcr
    }
  }) : _vm._e()], 1) : _c("div", {
    staticStyle: {
      cursor: "pointer"
    },
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.modalBuka("Beban Penyisihan DCR", "beban_penyisihan_dcr", _vm.itemData.beban_penyisihan_dcr, _vm.itemData.periode, "0", "", _vm.grafikData.data, [{
          title: "Beban Penyisihan DCR",
          key: "beban_penyisihan_dcr",
          value: _vm.itemData.beban_penyisihan_dcr
        }]);
      }
    }
  }, [_c("widget-data", {
    attrs: {
      title: "beban penyisihan dcr",
      itemData: _vm.itemData.beban_penyisihan_dcr,
      itemDataBefore: "0"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "col-sm-3"
  }, [_vm.itemDataBefore ? _c("div", {
    staticStyle: {
      cursor: "pointer"
    },
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.modalBuka("Investasi Likuid", "investasi_likuid", _vm.itemData.investasi_likuid, _vm.itemData.periode, _vm.itemDataBefore.investasi_likuid, _vm.itemDataBefore.periode, _vm.grafikData.data, [{
          title: "Investasi Likuid",
          key: "investasi_likuid",
          value: _vm.itemData.investasi_likuid
        }]);
      }
    }
  }, [_vm.itemDataBefore ? _c("widget-data", {
    attrs: {
      title: "investasi likuid",
      itemData: _vm.itemData.investasi_likuid,
      itemDataBefore: _vm.itemDataBefore.investasi_likuid
    }
  }) : _vm._e()], 1) : _c("div", {
    staticStyle: {
      cursor: "pointer"
    },
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.modalBuka("Investasi Likuid", "investasi_likuid", _vm.itemData.investasi_likuid, _vm.itemData.periode, "0", "", _vm.grafikData.data, [{
          title: "Investasi Likuid",
          key: "investasi_likuid",
          value: _vm.itemData.investasi_likuid
        }]);
      }
    }
  }, [_c("widget-data", {
    attrs: {
      title: "investasi likuid",
      itemData: _vm.itemData.investasi_likuid,
      itemDataBefore: "0"
    }
  })], 1)])]), _vm._v(" "), _vm._m(7)]), _vm._v(" "), _c("div", {
    staticClass: "timeline-row"
  }, [_vm._m(8), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-sm-3"
  }, [_vm.itemDataBefore ? _c("div", {
    staticStyle: {
      cursor: "pointer"
    },
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.modalBuka("Total Pendapatan", "total_pendapatan", _vm.itemData.total_pendapatan, _vm.itemData.periode, _vm.itemDataBefore.total_pendapatan, _vm.itemDataBefore.periode, _vm.grafikData.data, [{
          title: "Total Pendapatan",
          key: "total_pendapatan",
          value: _vm.itemData.total_pendapatan
        }]);
      }
    }
  }, [_c("widget-data", {
    attrs: {
      title: "total pendapatan",
      itemData: _vm.itemData.total_pendapatan,
      itemDataBefore: _vm.itemDataBefore.total_pendapatan
    }
  })], 1) : _c("div", {
    staticStyle: {
      cursor: "pointer"
    },
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.modalBuka("Total Pendapatan", "total_pendapatan", _vm.itemData.total_pendapatan, _vm.itemData.periode, "0", "", _vm.grafikData.data, [{
          title: "Total Pendapatan",
          key: "total_pendapatan",
          value: _vm.itemData.total_pendapatan
        }]);
      }
    }
  }, [_c("widget-data", {
    attrs: {
      title: "total pendapatan",
      itemData: _vm.itemData.total_pendapatan,
      itemDataBefore: "0"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "col-sm-3"
  }, [_vm.itemDataBefore ? _c("div", {
    staticStyle: {
      cursor: "pointer"
    },
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.modalBuka("Total Biaya", "total_biaya", _vm.itemData.total_biaya, _vm.itemData.periode, _vm.itemDataBefore.total_biaya, _vm.itemDataBefore.periode, _vm.grafikData.data, [{
          title: "Total Biaya",
          key: "total_biaya",
          value: _vm.itemData.total_biaya
        }]);
      }
    }
  }, [_c("widget-data", {
    attrs: {
      title: "total biaya",
      itemData: _vm.itemData.total_biaya,
      itemDataBefore: _vm.itemDataBefore.total_biaya
    }
  })], 1) : _c("div", {
    staticStyle: {
      cursor: "pointer"
    },
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.modalBuka("Total Biaya", "total_biaya", _vm.itemData.total_biaya, _vm.itemData.periode, "0", "", _vm.grafikData.data, [{
          title: "Total Biaya",
          key: "total_biaya",
          value: _vm.itemData.total_biaya
        }]);
      }
    }
  }, [_c("widget-data", {
    attrs: {
      title: "total biaya",
      itemData: _vm.itemData.total_biaya,
      itemDataBefore: "0"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "col-sm-3"
  }, [_vm.itemDataBefore ? _c("div", {
    staticStyle: {
      cursor: "pointer"
    },
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.modalBuka("SHU", "shu", _vm.itemData.shu, _vm.itemData.periode, _vm.itemDataBefore.shu, _vm.itemDataBefore.periode, _vm.grafikData.data, [{
          title: "SHU",
          key: "shu",
          value: _vm.itemData.shu
        }]);
      }
    }
  }, [_c("widget-data", {
    attrs: {
      title: "shu",
      itemData: _vm.itemData.shu,
      itemDataBefore: _vm.itemDataBefore.shu
    }
  })], 1) : _c("div", {
    staticStyle: {
      cursor: "pointer"
    },
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.modalBuka("SHU", "shu", _vm.itemData.shu, _vm.itemData.periode, "0", "", _vm.grafikData.data, [{
          title: "SHU",
          key: "shu",
          value: _vm.itemData.shu
        }]);
      }
    }
  }, [_c("widget-data", {
    attrs: {
      title: "shu",
      itemData: _vm.itemData.shu,
      itemDataBefore: "0"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "col-sm-3"
  }, [_vm.itemDataBefore ? _c("div", {
    staticStyle: {
      cursor: "pointer"
    },
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.modalBuka("SHU Lalu", "shu_lalu", _vm.itemData.shu_lalu, _vm.itemData.periode, _vm.itemDataBefore.shu_lalu, _vm.itemDataBefore.periode, _vm.grafikData.data, [{
          title: "SHU Lalu",
          key: "shu_lalu",
          value: _vm.itemData.shu_lalu
        }]);
      }
    }
  }, [_c("widget-data", {
    attrs: {
      title: "shu lalu",
      itemData: _vm.itemData.shu_lalu,
      itemDataBefore: _vm.itemDataBefore.shu_lalu
    }
  })], 1) : _c("div", {
    staticStyle: {
      cursor: "pointer"
    },
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.modalBuka("SHU Lalu", "shu_lalu", _vm.itemData.shu_lalu, _vm.itemData.periode, "0", "", _vm.grafikData.data, [{
          title: "SHU Lalu",
          key: "shu_lalu",
          value: _vm.itemData.shu_lalu
        }]);
      }
    }
  }, [_c("widget-data", {
    attrs: {
      title: "shu lalu",
      itemData: _vm.itemData.shu_lalu,
      itemDataBefore: "0"
    }
  })], 1)])]), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-sm-3"
  }, [_vm.itemDataBefore ? _c("div", {
    staticStyle: {
      cursor: "pointer"
    },
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.modalBuka("Laju Inflasi", "laju_inflasi", _vm.itemData.laju_inflasi, _vm.itemData.periode, _vm.itemDataBefore.laju_inflasi, _vm.itemDataBefore.periode, _vm.grafikData.data, [{
          title: "Laju Inflasi",
          key: "laju_inflasi",
          value: _vm.itemData.laju_inflasi
        }]);
      }
    }
  }, [_vm.itemDataBefore ? _c("widget-data", {
    attrs: {
      title: "laju inflasi",
      itemData: _vm.itemData.laju_inflasi,
      itemDataBefore: _vm.itemDataBefore.laju_inflasi,
      isPercent: true
    }
  }) : _vm._e()], 1) : _c("div", {
    staticStyle: {
      cursor: "pointer"
    },
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.modalBuka("Laju Inflasi", "laju_inflasi", _vm.itemData.laju_inflasi, _vm.itemData.periode, "0", "", _vm.grafikData.data, [{
          title: "Laju Inflasi",
          key: "laju_inflasi",
          value: _vm.itemData.laju_inflasi
        }]);
      }
    }
  }, [_c("widget-data", {
    attrs: {
      title: "laju inflasi",
      itemData: _vm.itemData.laju_inflasi,
      itemDataBefore: "0",
      isPercent: true
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "col-sm-3"
  }, [_vm.itemDataBefore ? _c("div", {
    staticStyle: {
      cursor: "pointer"
    },
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.modalBuka("Harga Pasar", "harga_pasar", _vm.itemData.harga_pasar, _vm.itemData.periode, _vm.itemDataBefore.harga_pasar, _vm.itemDataBefore.periode, _vm.grafikData.data, [{
          title: "Harga Pasar",
          key: "harga_pasar",
          value: _vm.itemData.harga_pasar
        }], "percent");
      }
    }
  }, [_vm.itemDataBefore ? _c("widget-data", {
    attrs: {
      title: "harga pasar",
      itemData: _vm.itemData.harga_pasar,
      itemDataBefore: _vm.itemDataBefore.harga_pasar,
      isPercent: true
    }
  }) : _vm._e()], 1) : _c("div", {
    staticStyle: {
      cursor: "pointer"
    },
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.modalBuka("Harga Pasar", "harga_pasar", _vm.itemData.harga_pasar, _vm.itemData.periode, "0", "", _vm.grafikData.data, [{
          title: "Harga Pasar",
          key: "harga_pasar",
          value: _vm.itemData.harga_pasar
        }], "percent");
      }
    }
  }, [_c("widget-data", {
    attrs: {
      title: "harga pasar",
      itemData: _vm.itemData.harga_pasar,
      itemDataBefore: "0",
      isPercent: true
    }
  })], 1)])])])])]), _vm._v(" "), _c("app-modal", {
    attrs: {
      show: _vm.modalShow,
      state: _vm.modalState,
      title: _vm.modalTitle,
      size: _vm.modalSize,
      color: _vm.modalColor,
      button: _vm.modalButton
    },
    on: {
      tutup: _vm.modalTutup,
      successOk: _vm.modalTutup,
      failOk: _vm.modalTutup,
      backgroundClick: _vm.modalTutup
    }
  }, [_c("template", {
    slot: "modal-title"
  }, [_vm._v(_vm._s(_vm.modalTitle))]), _vm._v(" "), _c("template", {
    slot: "modal-body1"
  }, [_c("form", {
    attrs: {
      "data-vv-scope": "form"
    },
    on: {
      submit: function submit($event) {
        $event.preventDefault();
        return _vm.save.apply(null, arguments);
      }
    }
  }, [_c("div", {
    staticClass: "nav-tabs-responsive mb-3"
  }, [_c("ul", {
    staticClass: "nav nav-tabs nav-tabs-bottom flex-nowrap mb-0"
  }, [_c("li", {
    staticClass: "nav-item"
  }, [_c("a", {
    staticClass: "nav-link",
    "class": {
      active: _vm.modalDetail.tab == "analisis"
    },
    attrs: {
      href: "#"
    },
    on: {
      click: function click($event) {
        $event.preventDefault();
        _vm.modalDetail.tab = "analisis";
      }
    }
  }, [_c("i", {
    staticClass: "icon-wave2 mr-2"
  }), _vm._v(" Analisis")])]), _vm._v(" "), _c("li", {
    staticClass: "nav-item"
  }, [_c("a", {
    staticClass: "nav-link",
    "class": {
      active: _vm.modalDetail.tab == "tabel"
    },
    attrs: {
      href: "#"
    },
    on: {
      click: function click($event) {
        $event.preventDefault();
        _vm.modalDetail.tab = "tabel";
      }
    }
  }, [_c("i", {
    staticClass: "icon-list2 mr-2"
  }), _vm._v(" Tabel")])])])]), _vm._v(" "), _c("div", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.modalDetail.tab == "analisis",
      expression: "modalDetail.tab == 'analisis'"
    }]
  }, [_c("widget-data", {
    attrs: {
      title: _vm.modalDetail.title,
      itemData: _vm.modalDetail.itemData,
      itemDataBefore: _vm.modalDetail.itemDataBefore,
      isPercent: _vm.modalDetail.isPercent,
      isOpposite: _vm.modalDetail.isOpposite
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "card card-body border-top-blue"
  }, [_c("h6", {
    domProps: {
      innerHTML: _vm._s(_vm.modalDetail.analisis1)
    }
  })])], 1), _vm._v(" "), _c("div", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.modalDetail.tab == "tabel",
      expression: "modalDetail.tab == 'tabel'"
    }]
  }, [_c("div", {
    staticClass: "pre-scrollable"
  }, [_c("table", {
    staticClass: "table table-striped table-bordered"
  }, [_c("thead", {
    staticClass: "bg-primary"
  }, [_c("tr", [_c("th", [_vm._v("Periode")]), _vm._v(" "), _c("th", [_vm._v("Jumlah ")]), _vm._v(" "), _c("th", [_vm._v("Pertumbuhan")]), _vm._v(" "), !_vm.modalDetail.isPercent ? _c("th", [_vm._v("Pertumbuhan (%)")]) : _vm._e()])]), _vm._v(" "), _c("tbody", _vm._l(_vm.modalDetail.grafikData, function (grafik) {
    return _c("tr", {
      staticClass: "text-nowrap",
      "class": {
        info: Object.values(grafik)[0] == _vm.itemData.periode
      }
    }, [_c("td", [_vm._v(_vm._s(_vm._f("dateMonth")(Object.values(grafik)[0])))]), _vm._v(" "), _vm.modalDetail.isPercent ? _c("td", [_vm._v(_vm._s(_vm._f("percentage")(Object.values(grafik)[1], 2)))]) : _c("td", [_vm._v(_vm._s(_vm._f("currency")(Object.values(grafik)[1], "", 0, {
      thousandsSeparator: "."
    })))]), _vm._v(" "), _vm.itemData.periode != Object.values(grafik)[0] ? _c("td", {
      "class": {
        "text-primary": _vm.countTotal(_vm.modalDetail.itemData, Object.values(grafik)[1]) > 0,
        "text-danger": _vm.countTotal(_vm.modalDetail.itemData, Object.values(grafik)[1]) < 0
      }
    }, [_vm.countTotal(_vm.modalDetail.itemData, Object.values(grafik)[1]) > 0 ? _c("i", {
      staticClass: "icon-chevron-up"
    }) : _vm.countTotal(_vm.modalDetail.itemData, Object.values(grafik)[1]) < 0 ? _c("i", {
      staticClass: "icon-chevron-down"
    }) : _vm._e(), _vm._v(" "), _vm.modalDetail.isPercent ? _c("span", [_vm._v("\n\t\t\t\t\t\t\t\t\t\t" + _vm._s(_vm._f("percentage")(Math.abs(_vm.countTotal(_vm.modalDetail.itemData, Object.values(grafik)[1])), 2)) + "\n\t\t\t\t\t\t\t\t\t")]) : _c("span", [_vm._v("\n\t\t\t\t\t\t\t\t\t\t" + _vm._s(_vm._f("currency")(Math.abs(_vm.countTotal(_vm.modalDetail.itemData, Object.values(grafik)[1])), "", 0, {
      thousandsSeparator: "."
    })) + "\n\t\t\t\t\t\t\t\t\t")])]) : _c("td", {
      staticClass: "text-center",
      attrs: {
        colspan: "2"
      }
    }, [_vm._v("LAPORAN PERIODE INI")]), _vm._v(" "), _vm.itemData.periode != Object.values(grafik)[0] && !_vm.modalDetail.isPercent ? _c("td", [_c("span", {
      staticClass: "badge pull-right",
      "class": {
        "badge-primary": _vm.countTotal(_vm.modalDetail.itemData, Object.values(grafik)[1]) > 0,
        "badge-danger": _vm.countTotal(_vm.modalDetail.itemData, Object.values(grafik)[1]) < 0
      }
    }, [_vm.countTotal(_vm.modalDetail.itemData, Object.values(grafik)[1]) > 0 ? _c("span", [_vm._v("+")]) : _vm.countTotal(_vm.modalDetail.itemData, Object.values(grafik)[1]) < 0 ? _c("span", [_vm._v("-")]) : _vm._e(), _vm._v("\t\n\t\t\t\t\t\t\t\t\t\t" + _vm._s(_vm._f("currency")(Math.abs(_vm.countPercentage(_vm.modalDetail.itemData, Object.values(grafik)[1])), "", 2, {
      thousandsSeparator: ".",
      decimalSeparator: ","
    })) + " %\n\t\t\t\t\t\t\t\t\t")])]) : _vm._e()]);
  }), 0)])]), _vm._v(" "), _c("hr"), _vm._v(" "), _c("div", {
    staticClass: "alert bg-info alert-styled-left mt-2 pt-1 pb-1"
  }, [_c("span", {
    staticClass: "mb-2 text-semibold"
  }, [_c("u", [_vm._v("Bagaimana membaca tabel ini?")])]), _vm._v(" "), _c("p", [_vm._v("Kolom pertumbuhan adalah perbandingan nilai pada laporan periode ini dibandingan dengan periode lainnya sesuai pada tabel")])])]), _vm._v(" "), _vm.modalDetail.isUbah ? _c("div", [_c("hr"), _vm._v(" "), _vm.modalDetail.canUbah ? _c("div", [_c("div", {
    staticClass: "well well-sm border-top-lg border-top-warning"
  }, _vm._l(_vm.modalDetail.form, function (form) {
    return form.title ? _c("div", [_c("div", {
      staticClass: "form-group"
    }, [_c("h5", [_vm._v(_vm._s(form.title))]), _vm._v(" "), _c("cleave", {
      staticClass: "form-control",
      attrs: {
        options: _vm.cleaveOption.numeric,
        placeholder: "Silahkan masukkan " + form.title
      },
      model: {
        value: form.value,
        callback: function callback($$v) {
          _vm.$set(form, "value", $$v);
        },
        expression: "form.value"
      }
    })], 1)]) : _vm._e();
  }), 0)]) : _c("div", [_c("div", {
    staticClass: "alert bg-warning alert-styled-left mt-10 pt-5 pb-5"
  }, [_c("span", {
    staticClass: "mb-5 text-semibold"
  }, [_c("u", [_vm._v("Maaf tidak bisa mengubah data disini.")])]), _vm._v(" "), _c("p", [_vm._v("Laporan berikut merupakan laporan konsolidasi dari beberapa data laporan TP pada periode ini, untuk melakukan pengubahan data silahkan buka laporan TP pada periode ini.")])])])]) : _vm._e(), _vm._v(" "), _c("hr"), _vm._v(" "), _c("div", {
    staticClass: "text-center d-none d-sm-block"
  }, [_c("button", {
    directives: [{
      name: "tooltip",
      rawName: "v-tooltip:top",
      value: "Tutup",
      expression: "'Tutup'",
      arg: "top"
    }],
    staticClass: "btn btn-light",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.modalTutup.apply(null, arguments);
      }
    }
  }, [_c("i", {
    staticClass: "icon-cross"
  }), _vm._v(" Tutup\n\t\t\t\t")]), _vm._v(" "), !_vm.modalDetail.isUbah && _vm.currentUser.can && _vm.currentUser.can["update_laporan_cu"] ? _c("button", {
    directives: [{
      name: "tooltip",
      rawName: "v-tooltip:top",
      value: "Ubah data perhitungan",
      expression: "'Ubah data perhitungan'",
      arg: "top"
    }],
    staticClass: "btn btn-light",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        $event.preventDefault();
        _vm.modalDetail.isUbah = true;
      }
    }
  }, [_c("i", {
    staticClass: "icon-pencil5"
  }), _vm._v(" Ubah\n\t\t\t\t")]) : _vm._e(), _vm._v(" "), _vm.modalDetail.isUbah ? _c("button", {
    directives: [{
      name: "tooltip",
      rawName: "v-tooltip:top",
      value: "Batal mengubah data perhitungan",
      expression: "'Batal mengubah data perhitungan'",
      arg: "top"
    }],
    staticClass: "btn btn-light",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        $event.preventDefault();
        _vm.modalDetail.isUbah = false;
      }
    }
  }, [_c("i", {
    staticClass: "icon-arrow-left13"
  }), _vm._v(" Batal\n\t\t\t\t")]) : _vm._e(), _vm._v(" "), _vm.modalDetail.isUbah && _vm.currentUser.can && _vm.currentUser.can["update_laporan_cu"] && _vm.modalDetail.canUbah ? _c("button", {
    directives: [{
      name: "tooltip",
      rawName: "v-tooltip:top",
      value: "Simpan data perhitungan",
      expression: "'Simpan data perhitungan'",
      arg: "top"
    }],
    staticClass: "btn btn-primary",
    attrs: {
      type: "submit"
    }
  }, [_c("i", {
    staticClass: "icon-floppy-disk"
  }), _vm._v(" Simpan\n\t\t\t\t")]) : _vm._e()]), _vm._v(" "), _c("div", {
    staticClass: "d-block d-sm-none"
  }, [_vm.modalDetail.isUbah && _vm.currentUser.can && _vm.currentUser.can["update_laporan_cu"] && _vm.modalDetail.canUbah ? _c("button", {
    directives: [{
      name: "tooltip",
      rawName: "v-tooltip:top",
      value: "Simpan data perhitungan",
      expression: "'Simpan data perhitungan'",
      arg: "top"
    }],
    staticClass: "btn btn-primary btn-block",
    attrs: {
      type: "submit"
    }
  }, [_c("i", {
    staticClass: "icon-floppy-disk"
  }), _vm._v(" Simpan\n\t\t\t\t")]) : _vm._e(), _vm._v(" "), _vm.modalDetail.isUbah && _vm.currentUser.can && _vm.currentUser.can["update_laporan_cu"] ? _c("button", {
    directives: [{
      name: "tooltip",
      rawName: "v-tooltip:top",
      value: "Batal mengubah data perhitungan",
      expression: "'Batal mengubah data perhitungan'",
      arg: "top"
    }],
    staticClass: "btn btn-light btn-block",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        $event.preventDefault();
        _vm.modalDetail.isUbah = false;
      }
    }
  }, [_c("i", {
    staticClass: "icon-arrow-left13"
  }), _vm._v(" Batal\n\t\t\t\t")]) : _vm._e(), _vm._v(" "), !_vm.modalDetail.isUbah && _vm.currentUser.can && _vm.currentUser.can["update_laporan_cu"] ? _c("button", {
    directives: [{
      name: "tooltip",
      rawName: "v-tooltip:top",
      value: "Ubah data perhitungan",
      expression: "'Ubah data perhitungan'",
      arg: "top"
    }],
    staticClass: "btn btn-light btn-block",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        $event.preventDefault();
        _vm.modalDetail.isUbah = true;
      }
    }
  }, [_c("i", {
    staticClass: "icon-pencil5"
  }), _vm._v(" Ubah\n\t\t\t\t")]) : _vm._e(), _vm._v(" "), _c("button", {
    directives: [{
      name: "tooltip",
      rawName: "v-tooltip:top",
      value: "Tutup",
      expression: "'Tutup'",
      arg: "top"
    }],
    staticClass: "btn btn-light btn-block",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.modalTutup.apply(null, arguments);
      }
    }
  }, [_c("i", {
    staticClass: "icon-cross"
  }), _vm._v(" Tutup\n\t\t\t\t")])])])])], 2)], 1);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "timeline-icon"
  }, [_c("div", {
    staticClass: "bg-blue"
  }, [_c("i", {
    staticClass: "icon-people"
  })])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "row"
  }, [_c("hr")]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "timeline-icon"
  }, [_c("div", {
    staticClass: "bg-orange"
  }, [_c("i", {
    staticClass: "icon-briefcase3"
  })])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "row"
  }, [_c("hr")]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "timeline-icon"
  }, [_c("div", {
    staticClass: "bg-brown"
  }, [_c("i", {
    staticClass: "icon-piggy-bank"
  })])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "row"
  }, [_c("hr")]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "timeline-icon"
  }, [_c("div", {
    staticClass: "bg-danger"
  }, [_c("i", {
    staticClass: "icon-lifebuoy"
  })])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "row"
  }, [_c("hr")]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "timeline-icon"
  }, [_c("div", {
    staticClass: "bg-grey"
  }, [_c("i", {
    staticClass: "icon-cash4"
  })])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/laporanCu/detailPearls.vue?vue&type=template&id=f6a3d8ba":
/*!********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/views/laporanCu/detailPearls.vue?vue&type=template&id=f6a3d8ba ***!
  \********************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-sm-3"
  }, [_c("div", {
    staticClass: "card card-body",
    "class": {
      "bg-primary": _vm.itemData.p1 >= 1,
      "bg-danger": _vm.itemData.p1 < 1
    },
    staticStyle: {
      cursor: "pointer"
    },
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.modalBuka(_vm.itemData, "p1");
      }
    }
  }, [_c("div", {
    staticClass: "media mb-3"
  }, [_c("div", {
    staticClass: "media-body"
  }, [_c("h6", {
    staticClass: "font-weight-semibold mb-8"
  }, [_vm._v(_vm._s(_vm._f("percentage")(_vm.itemData.p1, 2)))]), _vm._v(" "), _vm.itemData.p1 >= 1 ? _c("span", {
    staticClass: "opacity-75"
  }, [_vm._v("\n\t\t\t\t\t\t\tIDEAL\n\t\t\t\t\t\t")]) : _c("span", [_vm._v("\n\t\t\t\t\t\t\tTIDAK IDEAL\n\t\t\t\t\t\t")])]), _vm._v(" "), _vm._m(0)]), _vm._v(" "), _vm._m(1), _vm._v(" "), _c("b", [_vm._v("Provisi pinjaman lalai di atas 12 bulan")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-sm-3"
  }, [_c("div", {
    staticClass: "card card-body",
    "class": {
      "bg-primary": _vm.itemData.p2 > 0.35,
      "bg-danger": _vm.itemData.p2 <= 0.35
    },
    staticStyle: {
      cursor: "pointer"
    },
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.modalBuka(_vm.itemData, "p2");
      }
    }
  }, [_c("div", {
    staticClass: "media no-margin-top content-group"
  }, [_c("div", {
    staticClass: "media-body"
  }, [_c("h6", {
    staticClass: "font-weight-semibold mb-8"
  }, [_vm._v(_vm._s(_vm._f("percentage")(_vm.itemData.p2, 2)))]), _vm._v(" "), _vm.itemData.p2 > 0.35 ? _c("span", {
    staticClass: "opacity-75"
  }, [_vm._v("\n\t\t\t\t\t\t\tIDEAL\n\t\t\t\t\t\t")]) : _c("span", [_vm._v("\n\t\t\t\t\t\t\tTIDAK IDEAL\n\t\t\t\t\t\t")])]), _vm._v(" "), _vm._m(2)]), _vm._v(" "), _vm._m(3), _vm._v(" "), _c("b", [_vm._v("Provisi pinjaman lalai 1-12 bulan")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-sm-3"
  }, [_c("div", {
    staticClass: "card card-body",
    "class": {
      "bg-primary": _vm.itemData.e1 >= 0.7 && _vm.itemData.e1 <= 0.8,
      "bg-danger": _vm.itemData.e1 < 0.7 || _vm.itemData.e1 > 0.8
    },
    staticStyle: {
      cursor: "pointer"
    },
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.modalBuka(_vm.itemData, "e1");
      }
    }
  }, [_c("div", {
    staticClass: "media no-margin-top content-group"
  }, [_c("div", {
    staticClass: "media-body"
  }, [_c("h6", {
    staticClass: "font-weight-semibold mb-8"
  }, [_vm._v(_vm._s(_vm._f("percentage")(_vm.itemData.e1, 2)))]), _vm._v(" "), _vm.itemData.e1 >= 0.7 && _vm.itemData.e1 <= 0.8 ? _c("span", {
    staticClass: "opacity-75"
  }, [_vm._v("\n\t\t\t\t\t\t\tIDEAL\n\t\t\t\t\t\t")]) : _c("span", [_vm._v("\n\t\t\t\t\t\t\tTIDAK IDEAL\n\t\t\t\t\t\t")])]), _vm._v(" "), _vm._m(4)]), _vm._v(" "), _vm._m(5), _vm._v(" "), _c("b", [_vm._v("Piutang bersih / total aset")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-sm-3"
  }, [_c("div", {
    staticClass: "card card-body",
    "class": {
      "bg-primary": _vm.itemData.e5 >= 0.7 && _vm.itemData.e5 <= 0.8,
      "bg-danger": _vm.itemData.e5 < 0.7 || _vm.itemData.e5 > 0.8
    },
    staticStyle: {
      cursor: "pointer"
    },
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.modalBuka(_vm.itemData, "e5");
      }
    }
  }, [_c("div", {
    staticClass: "media no-margin-top content-group"
  }, [_c("div", {
    staticClass: "media-body"
  }, [_c("h6", {
    staticClass: "font-weight-semibold mb-8"
  }, [_vm._v(_vm._s(_vm._f("percentage")(_vm.itemData.e5, 2)))]), _vm._v(" "), _vm.itemData.e5 >= 0.7 && _vm.itemData.e5 <= 0.8 ? _c("span", {
    staticClass: "opacity-75"
  }, [_vm._v("\n\t\t\t\t\t\t\tIDEAL\n\t\t\t\t\t\t")]) : _c("span", [_vm._v("\n\t\t\t\t\t\t\tTIDAK IDEAL\n\t\t\t\t\t\t")])]), _vm._v(" "), _vm._m(6)]), _vm._v(" "), _vm._m(7), _vm._v(" "), _c("b", [_vm._v("Simpanan non saham / total aset")])])])]), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-sm-3"
  }, [_c("div", {
    staticClass: "card card-body",
    "class": {
      "bg-primary": _vm.itemData.e6 <= 0.05,
      "bg-danger": _vm.itemData.e6 > 0.05
    },
    staticStyle: {
      cursor: "pointer"
    },
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.modalBuka(_vm.itemData, "e6");
      }
    }
  }, [_c("div", {
    staticClass: "media no-margin-top content-group"
  }, [_c("div", {
    staticClass: "media-body"
  }, [_c("h6", {
    staticClass: "font-weight-semibold mb-8"
  }, [_vm._v(_vm._s(_vm._f("percentage")(_vm.itemData.e6, 2)))]), _vm._v(" "), _vm.itemData.e6 <= 0.05 ? _c("span", {
    staticClass: "opacity-75"
  }, [_vm._v("\n\t\t\t\t\t\t\tIDEAL\n\t\t\t\t\t\t")]) : _c("span", [_vm._v("\n\t\t\t\t\t\t\tTIDAK IDEAL\n\t\t\t\t\t\t")])]), _vm._v(" "), _vm._m(8)]), _vm._v(" "), _vm._m(9), _vm._v(" "), _c("b", [_vm._v("Pinjaman kepada pihak luar terhadap total aset")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-sm-3"
  }, [_c("div", {
    staticClass: "card card-body",
    "class": {
      "bg-primary": _vm.itemData.e7 >= 0.1 && _vm.itemData.e7 <= 0.2,
      "bg-danger": _vm.itemData.e7 < 0.1 || _vm.itemData.e7 > 0.2
    },
    staticStyle: {
      cursor: "pointer"
    },
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.modalBuka(_vm.itemData, "e7");
      }
    }
  }, [_c("div", {
    staticClass: "media no-margin-top content-group"
  }, [_c("div", {
    staticClass: "media-body"
  }, [_c("h6", {
    staticClass: "font-weight-semibold mb-8"
  }, [_vm._v(_vm._s(_vm._f("percentage")(_vm.itemData.e7, 2)))]), _vm._v(" "), _vm.itemData.e7 >= 0.1 && _vm.itemData.e7 <= 0.2 ? _c("span", {
    staticClass: "opacity-75"
  }, [_vm._v("\n\t\t\t\t\t\t\tIDEAL\n\t\t\t\t\t\t")]) : _c("span", [_vm._v("\n\t\t\t\t\t\t\tTIDAK IDEAL\n\t\t\t\t\t\t")])]), _vm._v(" "), _vm._m(10)]), _vm._v(" "), _vm._m(11), _vm._v(" "), _c("b", [_vm._v("Simpanan saham / total aset")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-sm-3"
  }, [_c("div", {
    staticClass: "card card-body",
    "class": {
      "bg-primary": _vm.itemData.e9 >= 0.1,
      "bg-danger": _vm.itemData.e9 < 0.1
    },
    staticStyle: {
      cursor: "pointer"
    },
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.modalBuka(_vm.itemData, "e9");
      }
    }
  }, [_c("div", {
    staticClass: "media no-margin-top content-group"
  }, [_c("div", {
    staticClass: "media-body"
  }, [_c("h6", {
    staticClass: "font-weight-semibold mb-8"
  }, [_vm._v(_vm._s(_vm._f("percentage")(_vm.itemData.e9, 2)))]), _vm._v(" "), _vm.itemData.e9 >= 0.1 ? _c("span", {
    staticClass: "opacity-75"
  }, [_vm._v("\n\t\t\t\t\t\t\tIDEAL\n\t\t\t\t\t\t")]) : _c("span", [_vm._v("\n\t\t\t\t\t\t\tTIDAK IDEAL\n\t\t\t\t\t\t")])]), _vm._v(" "), _vm._m(12)]), _vm._v(" "), _vm._m(13), _vm._v(" "), _c("b", [_vm._v("Modal lembaga bersih")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-sm-3"
  }, [_c("div", {
    staticClass: "card card-body",
    "class": {
      "bg-primary": _vm.itemData.a1 <= 0.05,
      "bg-danger": _vm.itemData.a1 > 0.05
    },
    staticStyle: {
      cursor: "pointer"
    },
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.modalBuka(_vm.itemData, "a1");
      }
    }
  }, [_c("div", {
    staticClass: "media no-margin-top content-group"
  }, [_c("div", {
    staticClass: "media-body"
  }, [_c("h6", {
    staticClass: "font-weight-semibold mb-8"
  }, [_vm._v(_vm._s(_vm._f("percentage")(_vm.itemData.a1, 2)))]), _vm._v(" "), _vm.itemData.a1 <= 0.05 ? _c("span", {
    staticClass: "opacity-75"
  }, [_vm._v("\n\t\t\t\t\t\t\tIDEAL\n\t\t\t\t\t\t")]) : _c("span", [_vm._v("\n\t\t\t\t\t\t\tTIDAK IDEAL\n\t\t\t\t\t\t")])]), _vm._v(" "), _vm._m(14)]), _vm._v(" "), _vm._m(15), _vm._v(" "), _c("b", [_vm._v("Total pinjaman lalai / total ipnjaman beredar")])])])]), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-sm-3"
  }, [_c("div", {
    staticClass: "card card-body",
    "class": {
      "bg-primary": _vm.itemData.a2 < 0.05,
      "bg-danger": _vm.itemData.a2 >= 0.05
    },
    staticStyle: {
      cursor: "pointer"
    },
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.modalBuka(_vm.itemData, "a2");
      }
    }
  }, [_c("div", {
    staticClass: "media no-margin-top content-group"
  }, [_c("div", {
    staticClass: "media-body"
  }, [_c("h6", {
    staticClass: "font-weight-semibold mb-8"
  }, [_vm._v(_vm._s(_vm._f("percentage")(_vm.itemData.a2, 2)))]), _vm._v(" "), _vm.itemData.a2 < 0.05 ? _c("span", {
    staticClass: "opacity-75"
  }, [_vm._v("\n\t\t\t\t\t\t\tIDEAL\n\t\t\t\t\t\t")]) : _c("span", [_vm._v("\n\t\t\t\t\t\t\tTIDAK IDEAL\n\t\t\t\t\t\t")])]), _vm._v(" "), _vm._m(16)]), _vm._v(" "), _vm._m(17), _vm._v(" "), _c("b", [_vm._v("Aset yang tidak menghasilkan / total aset")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-sm-3"
  }, [_c("div", {
    staticClass: "card card-body",
    "class": {
      "bg-primary": _vm.itemData.r7_1 == _vm.itemData.harga_pasar,
      "bg-danger": _vm.itemData.r7_1 != _vm.itemData.harga_pasar
    },
    staticStyle: {
      cursor: "pointer"
    },
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.modalBuka(_vm.itemData, "r7");
      }
    }
  }, [_c("div", {
    staticClass: "media no-margin-top content-group"
  }, [_c("div", {
    staticClass: "media-body"
  }, [_c("h6", {
    staticClass: "font-weight-semibold mb-8"
  }, [_vm._v(_vm._s(_vm._f("percentage")(_vm.itemData.r7_1, 2)) + " / " + _vm._s(_vm._f("percentage")(_vm.itemData.r7_2, 2)))]), _vm._v(" "), _vm.itemData.r7_1 == _vm.itemData.harga_pasar ? _c("span", {
    staticClass: "opacity-75"
  }, [_vm._v("\n\t\t\t\t\t\t\tIDEAL / \n\t\t\t\t\t\t")]) : _c("span", [_vm._v("\n\t\t\t\t\t\t\tTIDAK IDEAL / \n\t\t\t\t\t\t")]), _vm._v(" "), _vm.itemData.r7_2 == _vm.itemData.harga_pasar ? _c("span", {
    staticClass: "opacity-75"
  }, [_vm._v("\n\t\t\t\t\t\t\tIDEAL  \n\t\t\t\t\t\t")]) : _c("span", [_vm._v("\n\t\t\t\t\t\t\tTIDAK IDEAL \n\t\t\t\t\t\t")])]), _vm._v(" "), _vm._m(18)]), _vm._v(" "), _vm._m(19), _vm._v(" "), _c("b", [_vm._v("BJS saham terhadap rata-rata aset")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-sm-3"
  }, [_c("div", {
    staticClass: "card card-body",
    "class": {
      "bg-primary": _vm.itemData.r9 <= 0.05,
      "bg-danger": _vm.itemData.r9 > 0.05
    },
    staticStyle: {
      cursor: "pointer"
    },
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.modalBuka(_vm.itemData, "r9");
      }
    }
  }, [_c("div", {
    staticClass: "media no-margin-top content-group"
  }, [_c("div", {
    staticClass: "media-body"
  }, [_c("h6", {
    staticClass: "font-weight-semibold mb-8"
  }, [_vm._v(_vm._s(_vm._f("percentage")(_vm.itemData.r9, 2)))]), _vm._v(" "), _vm.itemData.r9 <= 0.05 ? _c("span", {
    staticClass: "opacity-75"
  }, [_vm._v("\n\t\t\t\t\t\t\tIDEAL\n\t\t\t\t\t\t")]) : _c("span", [_vm._v("\n\t\t\t\t\t\t\tTIDAK IDEAL\n\t\t\t\t\t\t")])]), _vm._v(" "), _vm._m(20)]), _vm._v(" "), _vm._m(21), _vm._v(" "), _c("b", [_vm._v("Biaya operasional terhadap rata-rata aset")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-sm-3"
  }, [_c("div", {
    staticClass: "card card-body",
    "class": {
      "bg-primary": _vm.itemData.l1 >= 0.15 && _vm.itemData.l1 <= 0.2,
      "bg-danger": _vm.itemData.l1 < 0.15 || _vm.itemData.l1 > 0.2
    },
    staticStyle: {
      cursor: "pointer"
    },
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.modalBuka(_vm.itemData, "l1");
      }
    }
  }, [_c("div", {
    staticClass: "media no-margin-top content-group"
  }, [_c("div", {
    staticClass: "media-body"
  }, [_c("h6", {
    staticClass: "font-weight-semibold mb-8"
  }, [_vm._v(_vm._s(_vm._f("percentage")(_vm.itemData.l1, 2)))]), _vm._v(" "), _vm.itemData.l1 >= 0.15 && _vm.itemData.l1 <= 0.2 ? _c("span", {
    staticClass: "opacity-75"
  }, [_vm._v("\n\t\t\t\t\t\t\tIDEAL\n\t\t\t\t\t\t")]) : _c("span", [_vm._v("\n\t\t\t\t\t\t\tTIDAK IDEAL\n\t\t\t\t\t\t")])]), _vm._v(" "), _vm._m(22)]), _vm._v(" "), _vm._m(23), _vm._v(" "), _c("b", [_vm._v("(investasi likuid + aset-aset likuid - hutang jangka pendek < 30 hari) / simpanan non saham")])])])]), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-sm-3"
  }, [_c("div", {
    staticClass: "card card-body",
    "class": {
      "bg-primary": _vm.itemData.l2 >= 0.15 && _vm.itemData.l2 <= 0.2,
      "bg-danger": _vm.itemData.l2 < 0.15 || _vm.itemData.l2 > 0.2
    },
    staticStyle: {
      cursor: "pointer"
    },
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.modalBuka(_vm.itemData, "l2");
      }
    }
  }, [_c("div", {
    staticClass: "media no-margin-top content-group"
  }, [_c("div", {
    staticClass: "media-body"
  }, [_c("h6", {
    staticClass: "font-weight-semibold mb-8"
  }, [_vm._v(_vm._s(_vm._f("percentage")(_vm.itemData.l2, 2)))]), _vm._v(" "), _vm.itemData.l2 >= 0.15 && _vm.itemData.l2 <= 0.2 ? _c("span", {
    staticClass: "opacity-75"
  }, [_vm._v("\n\t\t\t\t\t\t\tIDEAL\n\t\t\t\t\t\t")]) : _c("span", [_vm._v("\n\t\t\t\t\t\t\tTIDAK IDEAL\n\t\t\t\t\t\t")])]), _vm._v(" "), _vm._m(24)]), _vm._v(" "), _vm._m(25), _vm._v(" "), _c("b", [_vm._v("(investasi likuid + aset-aset likuid - hutang jangka pendek < 30 hari) / total aset")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-sm-3"
  }, [_c("div", {
    staticClass: "card card-body",
    "class": {
      "bg-primary": _vm.itemData.s10 > 0.12,
      "bg-danger": _vm.itemData.s10 <= 0.12
    },
    staticStyle: {
      cursor: "pointer"
    },
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.modalBuka(_vm.itemData, "s10");
      }
    }
  }, [_c("div", {
    staticClass: "media no-margin-top content-group"
  }, [_c("div", {
    staticClass: "media-body"
  }, [_c("h6", {
    staticClass: "font-weight-semibold mb-8"
  }, [_vm._v(_vm._s(_vm._f("percentage")(_vm.itemData.s10, 2)))]), _vm._v(" "), _vm.itemData.s10 >= 0.12 ? _c("span", {
    staticClass: "opacity-75"
  }, [_vm._v("\n\t\t\t\t\t\t\tIDEAL\n\t\t\t\t\t\t")]) : _c("span", [_vm._v("\n\t\t\t\t\t\t\tTIDAK IDEAL\n\t\t\t\t\t\t")])]), _vm._v(" "), _vm._m(26)]), _vm._v(" "), _vm._m(27), _vm._v(" "), _c("b", [_vm._v("Pertumbuhan anggota")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-sm-3"
  }, [_c("div", {
    staticClass: "card card-body",
    "class": {
      "bg-primary": _vm.itemData.s11 > 0.1 + _vm.itemData.laju_inflasi,
      "bg-danger": _vm.itemData.s11 <= 0.1 + _vm.itemData.laju_inflasi
    },
    staticStyle: {
      cursor: "pointer"
    },
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.modalBuka(_vm.itemData, "s11");
      }
    }
  }, [_c("div", {
    staticClass: "media no-margin-top content-group"
  }, [_c("div", {
    staticClass: "media-body"
  }, [_c("h6", {
    staticClass: "font-weight-semibold mb-8"
  }, [_vm._v(_vm._s(_vm._f("percentage")(_vm.itemData.s11, 2)))]), _vm._v(" "), _vm.itemData.s11 > 0.1 + _vm.itemData.laju_inflasi ? _c("span", {
    staticClass: "opacity-75"
  }, [_vm._v("\n\t\t\t\t\t\t\tIDEAL\n\t\t\t\t\t\t")]) : _c("span", [_vm._v("\n\t\t\t\t\t\t\tTIDAK IDEAL\n\t\t\t\t\t\t")])]), _vm._v(" "), _vm._m(28)]), _vm._v(" "), _vm._m(29), _vm._v(" "), _c("b", [_vm._v("Pertumbuhan aset")])])])]), _vm._v(" "), _c("app-modal", {
    attrs: {
      show: _vm.modalShow,
      state: _vm.modalState,
      title: _vm.modalTitle,
      size: _vm.modalSize,
      color: _vm.modalColor,
      button: _vm.modalButton
    },
    on: {
      tutup: _vm.modalTutup,
      successOk: _vm.modalTutup,
      failOk: _vm.modalTutup,
      backgroundClick: _vm.modalTutup
    }
  }, [_c("template", {
    slot: "modal-title"
  }, [_vm._v(_vm._s(_vm.modalTitle))]), _vm._v(" "), _c("template", {
    slot: "modal-body1"
  }, [_c("form-katex", {
    attrs: {
      kelas: _vm.kelas,
      modalKatex: _vm.modalKatex
    },
    on: {
      tutup: _vm.modalTutup
    }
  })], 1)], 2)], 1);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "ml-3 align-self-center"
  }, [_c("button", {
    staticClass: "btn btn-light btn-icon rounded-round",
    attrs: {
      type: "button"
    }
  }, [_c("b", [_vm._v("P1")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "progress bg-blue mb-2",
    staticStyle: {
      height: "0.125rem"
    }
  }, [_c("div", {
    staticClass: "progress-bar bg-white",
    staticStyle: {
      width: "100%"
    }
  }, [_c("span", {
    staticClass: "sr-only"
  }, [_vm._v("100% Complete")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "ml-3 align-self-center"
  }, [_c("button", {
    staticClass: "btn btn-light btn-icon rounded-round",
    attrs: {
      type: "button"
    }
  }, [_c("b", [_vm._v("P2")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "progress bg-blue mb-2",
    staticStyle: {
      height: "0.125rem"
    }
  }, [_c("div", {
    staticClass: "progress-bar bg-white",
    staticStyle: {
      width: "100%"
    }
  }, [_c("span", {
    staticClass: "sr-only"
  }, [_vm._v("100% Complete")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "ml-3 align-self-center"
  }, [_c("button", {
    staticClass: "btn btn-light btn-icon rounded-round",
    attrs: {
      type: "button"
    }
  }, [_c("b", [_vm._v("E1")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "progress bg-blue mb-2",
    staticStyle: {
      height: "0.125rem"
    }
  }, [_c("div", {
    staticClass: "progress-bar bg-white",
    staticStyle: {
      width: "100%"
    }
  }, [_c("span", {
    staticClass: "sr-only"
  }, [_vm._v("100% Complete")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "ml-3 align-self-center"
  }, [_c("button", {
    staticClass: "btn btn-light btn-icon rounded-round",
    attrs: {
      type: "button"
    }
  }, [_c("b", [_vm._v("E5")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "progress bg-blue mb-2",
    staticStyle: {
      height: "0.125rem"
    }
  }, [_c("div", {
    staticClass: "progress-bar bg-white",
    staticStyle: {
      width: "100%"
    }
  }, [_c("span", {
    staticClass: "sr-only"
  }, [_vm._v("100% Complete")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "ml-3 align-self-center"
  }, [_c("button", {
    staticClass: "btn btn-light btn-icon rounded-round",
    attrs: {
      type: "button"
    }
  }, [_c("b", [_vm._v("E6")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "progress bg-blue mb-2",
    staticStyle: {
      height: "0.125rem"
    }
  }, [_c("div", {
    staticClass: "progress-bar bg-white",
    staticStyle: {
      width: "100%"
    }
  }, [_c("span", {
    staticClass: "sr-only"
  }, [_vm._v("100% Complete")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "ml-3 align-self-center"
  }, [_c("button", {
    staticClass: "btn btn-light btn-icon rounded-round",
    attrs: {
      type: "button"
    }
  }, [_c("b", [_vm._v("E7")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "progress bg-blue mb-2",
    staticStyle: {
      height: "0.125rem"
    }
  }, [_c("div", {
    staticClass: "progress-bar bg-white",
    staticStyle: {
      width: "100%"
    }
  }, [_c("span", {
    staticClass: "sr-only"
  }, [_vm._v("100% Complete")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "ml-3 align-self-center"
  }, [_c("button", {
    staticClass: "btn btn-light btn-icon rounded-round",
    attrs: {
      type: "button"
    }
  }, [_c("b", [_vm._v("E9")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "progress bg-blue mb-2",
    staticStyle: {
      height: "0.125rem"
    }
  }, [_c("div", {
    staticClass: "progress-bar bg-white",
    staticStyle: {
      width: "100%"
    }
  }, [_c("span", {
    staticClass: "sr-only"
  }, [_vm._v("100% Complete")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "ml-3 align-self-center"
  }, [_c("button", {
    staticClass: "btn btn-light btn-icon rounded-round",
    attrs: {
      type: "button"
    }
  }, [_c("b", [_vm._v("A1")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "progress bg-blue mb-2",
    staticStyle: {
      height: "0.125rem"
    }
  }, [_c("div", {
    staticClass: "progress-bar bg-white",
    staticStyle: {
      width: "100%"
    }
  }, [_c("span", {
    staticClass: "sr-only"
  }, [_vm._v("100% Complete")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "ml-3 align-self-center"
  }, [_c("button", {
    staticClass: "btn btn-light btn-icon rounded-round",
    attrs: {
      type: "button"
    }
  }, [_c("b", [_vm._v("A2")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "progress bg-blue mb-2",
    staticStyle: {
      height: "0.125rem"
    }
  }, [_c("div", {
    staticClass: "progress-bar bg-white",
    staticStyle: {
      width: "100%"
    }
  }, [_c("span", {
    staticClass: "sr-only"
  }, [_vm._v("100% Complete")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "ml-3 align-self-center"
  }, [_c("button", {
    staticClass: "btn btn-light btn-icon rounded-round",
    attrs: {
      type: "button"
    }
  }, [_c("b", [_vm._v("R7")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "progress bg-blue mb-2",
    staticStyle: {
      height: "0.125rem"
    }
  }, [_c("div", {
    staticClass: "progress-bar bg-white",
    staticStyle: {
      width: "100%"
    }
  }, [_c("span", {
    staticClass: "sr-only"
  }, [_vm._v("100% Complete")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "ml-3 align-self-center"
  }, [_c("button", {
    staticClass: "btn btn-light btn-icon rounded-round",
    attrs: {
      type: "button"
    }
  }, [_c("b", [_vm._v("R9")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "progress bg-blue mb-2",
    staticStyle: {
      height: "0.125rem"
    }
  }, [_c("div", {
    staticClass: "progress-bar bg-white",
    staticStyle: {
      width: "100%"
    }
  }, [_c("span", {
    staticClass: "sr-only"
  }, [_vm._v("100% Complete")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "ml-3 align-self-center"
  }, [_c("button", {
    staticClass: "btn btn-light btn-icon rounded-round",
    attrs: {
      type: "button"
    }
  }, [_c("b", [_vm._v("L1")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "progress bg-blue mb-2",
    staticStyle: {
      height: "0.125rem"
    }
  }, [_c("div", {
    staticClass: "progress-bar bg-white",
    staticStyle: {
      width: "100%"
    }
  }, [_c("span", {
    staticClass: "sr-only"
  }, [_vm._v("100% Complete")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "ml-3 align-self-center"
  }, [_c("button", {
    staticClass: "btn btn-light btn-icon rounded-round",
    attrs: {
      type: "button"
    }
  }, [_c("b", [_vm._v("L2")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "progress bg-blue mb-2",
    staticStyle: {
      height: "0.125rem"
    }
  }, [_c("div", {
    staticClass: "progress-bar bg-white",
    staticStyle: {
      width: "100%"
    }
  }, [_c("span", {
    staticClass: "sr-only"
  }, [_vm._v("100% Complete")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "ml-3 align-self-center"
  }, [_c("button", {
    staticClass: "btn btn-light btn-icon rounded-round",
    attrs: {
      type: "button"
    }
  }, [_c("b", [_vm._v("S10")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "progress bg-blue mb-2",
    staticStyle: {
      height: "0.125rem"
    }
  }, [_c("div", {
    staticClass: "progress-bar bg-white",
    staticStyle: {
      width: "100%"
    }
  }, [_c("span", {
    staticClass: "sr-only"
  }, [_vm._v("100% Complete")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "ml-3 align-self-center"
  }, [_c("button", {
    staticClass: "btn btn-light btn-icon rounded-round",
    attrs: {
      type: "button"
    }
  }, [_c("b", [_vm._v("S11")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "progress bg-blue mb-2",
    staticStyle: {
      height: "0.125rem"
    }
  }, [_c("div", {
    staticClass: "progress-bar bg-white",
    staticStyle: {
      width: "100%"
    }
  }, [_c("span", {
    staticClass: "sr-only"
  }, [_vm._v("100% Complete")])])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/laporanCu/diskusi.vue?vue&type=template&id=c66cba4e":
/*!***************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/views/laporanCu/diskusi.vue?vue&type=template&id=c66cba4e ***!
  \***************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", [_vm.itemDataStat == "success" ? _c("div", [_vm.itemData.length > 0 ? _c("div", _vm._l(_vm.itemData, function (diskusi, index) {
    return _c("div", {
      staticClass: "card card-body border-left-primary rounded-left-0"
    }, [_c("div", {
      staticClass: "card-header bg-white header-elements-inline"
    }, [_c("h6", {
      staticClass: "card-title"
    }, [_c("b", [_vm._v(_vm._s(diskusi.user.name))]), _vm._v(" "), _c("span", {
      staticClass: "text-muted"
    }, [_c("i", {
      staticClass: "icon-primitive-dot"
    }), _vm._v(" "), _c("small", {
      domProps: {
        innerHTML: _vm._s(_vm.$options.filters.dateTime(diskusi.created_at))
      }
    })])]), _vm._v(" "), _c("div", {
      staticClass: "header-elements"
    }, [_c("div", {
      staticClass: "list-icons"
    }, [diskusi.id_user == _vm.currentUser.id ? _c("a", {
      staticClass: "list-icons-item",
      attrs: {
        href: "#",
        "data-popup": "tooltip",
        "data-container": "body",
        title: "Ubah"
      },
      on: {
        click: function click($event) {
          $event.preventDefault();
          return _vm.modalUbah(diskusi);
        }
      }
    }, [_c("i", {
      staticClass: "icon-pencil5"
    })]) : _vm._e(), _vm._v(" "), diskusi.id_user == _vm.currentUser.id ? _c("a", {
      staticClass: "list-icons-item",
      attrs: {
        href: "#",
        "data-popup": "tooltip",
        "data-container": "body",
        title: "Hapus"
      },
      on: {
        click: function click($event) {
          $event.preventDefault();
          return _vm.modalHapus(diskusi);
        }
      }
    }, [_c("i", {
      staticClass: "icon-bin2"
    })]) : _vm._e()])])]), _vm._v(" "), _c("div", {
      staticClass: "media card-body no-margin"
    }, [_c("div", {
      staticClass: "mr-3"
    }, [diskusi.user.gambar ? _c("img", {
      staticClass: "rounded-circle",
      attrs: {
        src: "/images/user/" + diskusi.user.gambar + ".jpg",
        width: "42",
        height: "42",
        alt: "user image"
      }
    }) : _c("img", {
      staticClass: "rounded-circle",
      attrs: {
        src: "/images/no_image_man.jpg",
        width: "42",
        height: "42",
        alt: "user image"
      }
    })]), _vm._v(" "), _c("div", {
      staticClass: "media-body"
    }, [_c("p", {
      domProps: {
        innerHTML: _vm._s(diskusi.content)
      }
    })])])]);
  }), 0) : _c("div", [_vm._m(0)])]) : _vm._e(), _vm._v(" "), _vm.itemDataStat == "loading" ? _c("div", [_vm._m(1)]) : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "card"
  }, [_c("div", {
    staticClass: "card-body"
  }, [_c("h5", {
    staticClass: "text-semibold"
  }, [_vm._v("Silahkan masukkan komentar anda terhadap laporan keuangan ini")]), _vm._v(" "), _c("ckeditor", {
    attrs: {
      type: "classic",
      config: _vm.ckeditorNoImageConfig
    },
    model: {
      value: _vm.form.content,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "content", $$v);
      },
      expression: "form.content"
    }
  }), _vm._v(" "), _c("hr"), _vm._v(" "), _c("button", {
    directives: [{
      name: "tooltip",
      rawName: "v-tooltip:top",
      value: "Kirim komentar",
      expression: "'Kirim komentar'",
      arg: "top"
    }],
    staticClass: "btn btn-primary btn-block",
    attrs: {
      type: "submit"
    },
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.save("create");
      }
    }
  }, [_c("i", {
    staticClass: "icon-paperplane"
  }), _vm._v(" Kirim\n\t\t\t")])], 1)]), _vm._v(" "), _c("app-modal", {
    attrs: {
      show: _vm.modalShow,
      state: _vm.modalState,
      title: _vm.modalTitle,
      size: _vm.modalSize,
      color: _vm.modalColor,
      button: _vm.modalButton,
      content: _vm.modalContent
    },
    on: {
      confirmOk: _vm.modalConfirmOk,
      tutup: _vm.modalTutup,
      successOk: _vm.modalTutup,
      failOk: _vm.modalTutup,
      backgroundClick: _vm.modalTutup
    }
  }, [_c("template", {
    slot: "modal-title"
  }, [_vm._v(_vm._s(_vm.modalTitle))]), _vm._v(" "), _c("template", {
    slot: "modal-body1"
  }, [_c("h5", {
    staticClass: "text-semibold"
  }, [_vm._v("Komentar terhadap laporan keuangan ini")]), _vm._v(" "), _c("ckeditor", {
    attrs: {
      type: "classic",
      config: _vm.ckeditorNoImageConfig
    },
    model: {
      value: _vm.formEdit.content,
      callback: function callback($$v) {
        _vm.$set(_vm.formEdit, "content", $$v);
      },
      expression: "formEdit.content"
    }
  }), _vm._v(" "), _c("br"), _vm._v(" "), _c("div", {
    staticClass: "d-none d-sm-block text-center"
  }, [_c("button", {
    staticClass: "btn btn-light",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.modalTutup.apply(null, arguments);
      }
    }
  }, [_c("i", {
    staticClass: "icon-cross"
  }), _vm._v(" Tutup\n\t\t\t\t")]), _vm._v(" "), _c("button", {
    staticClass: "btn btn-primary",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.save("edit");
      }
    }
  }, [_c("i", {
    staticClass: "icon-paperplane"
  }), _vm._v(" Kirim\n\t\t\t\t")])]), _vm._v(" "), _c("div", {
    staticClass: "d-block d-sm-none"
  }, [_c("button", {
    staticClass: "btn btn-primary btn-block",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.save("edit");
      }
    }
  }, [_c("i", {
    staticClass: "icon-paperplane"
  }), _vm._v(" Kirim\n\t\t\t\t")]), _vm._v(" "), _c("button", {
    staticClass: "btn btn-light btn-block",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.modalTutup.apply(null, arguments);
      }
    }
  }, [_c("i", {
    staticClass: "icon-cross"
  }), _vm._v(" Tutup\n\t\t\t\t")])])], 1)], 2)], 1);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "panel panel-white"
  }, [_c("div", {
    staticClass: "panel-body"
  }, [_c("h3", [_vm._v("Belum terdapat diskusi apapun...")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "card"
  }, [_c("div", {
    staticClass: "card-body"
  }, [_c("h4", [_vm._v("Mohon tunggu...")]), _vm._v(" "), _c("div", {
    staticClass: "progress"
  }, [_c("div", {
    staticClass: "progress-bar progress-bar-info progress-bar-striped progress-bar-animated",
    staticStyle: {
      width: "100%"
    }
  }, [_c("span", {
    staticClass: "sr-only"
  }, [_vm._v("100% Complete")])])])])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/laporanCu/revisi.vue?vue&type=template&id=d0913a7e":
/*!**************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/views/laporanCu/revisi.vue?vue&type=template&id=d0913a7e ***!
  \**************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", [_vm.itemDataStat == "success" ? _c("div", [_vm.itemData.length > 0 ? _c("div", _vm._l(_vm.revisi, function (revisi, index) {
    return _c("div", {
      key: index,
      staticClass: "card border-left-primary rounded-left-0"
    }, [_c("div", {
      staticClass: "card-header bg-white header-elements-sm-inline"
    }, [_c("h6", {
      staticClass: "card-title"
    }, [_vm._v("\n\t\t\t\t\t\t \n\t\t\t\t\t")]), _vm._v(" "), _c("div", {
      staticClass: "header-elements"
    }, [_c("ul", {
      staticClass: "list-inline mb-0"
    }, [_c("li", {
      staticClass: "list-inline-item"
    }, [_c("i", {
      staticClass: "icon-calendar2"
    }), _vm._v(" "), _c("span", {
      domProps: {
        innerHTML: _vm._s(_vm.$options.filters.date(index))
      }
    })]), _vm._v(" "), _c("li", {
      staticClass: "list-inline-item"
    }, [_c("i"), _c("i", {
      staticClass: "icon-alarm"
    }), _vm._v(" "), _c("span", {
      domProps: {
        innerHTML: _vm._s(_vm.$options.filters.time(index))
      }
    })])])])]), _vm._v(" "), _c("div", {
      staticClass: "card-body"
    }, _vm._l(revisi, function (rev, index) {
      return _c("div", {
        key: index,
        staticClass: "card card-body"
      }, [_c("div", {
        staticClass: "media"
      }, [_c("div", {
        staticClass: "mr-3 position-relative"
      }, [rev.user.gambar ? _c("img", {
        staticClass: "rounded-circle",
        attrs: {
          src: "/images/user/" + rev.user.gambar + ".jpg",
          width: "36",
          height: "36",
          alt: "user image"
        }
      }) : _c("img", {
        staticClass: "rounded-circle",
        attrs: {
          src: "/images/no_image_man.jpg",
          width: "36",
          height: "36",
          alt: "user image"
        }
      })]), _vm._v(" "), _c("div", {
        staticClass: "media-body"
      }, [_c("div", {
        staticClass: "media-title"
      }, [_c("a", {
        attrs: {
          href: "#"
        }
      }, [_c("span", {
        staticClass: "font-weight-semibold"
      }, [_vm._v(_vm._s(rev.user.username))])])]), _vm._v(" "), _c("span", [_vm._v("Telah mengubah nilai pada akun "), _c("mark", [_vm._v(_vm._s(_vm.revisionField[rev.key]))]), _vm._v(" dari "), _c("mark", [_c("check-value", {
        attrs: {
          value: rev.old_value,
          valueType: "currency"
        }
      })], 1), _vm._v(" menjadi "), _c("mark", [_c("check-value", {
        attrs: {
          value: rev.new_value,
          valueType: "currency"
        }
      })], 1)])])])]);
    }), 0)]);
  }), 0) : _c("div", [_vm._m(0)])]) : _vm._e(), _vm._v(" "), _vm.itemDataStat == "loading" ? _c("div", [_vm._m(1)]) : _vm._e(), _vm._v(" "), _c("app-modal", {
    attrs: {
      show: _vm.modalShow,
      state: _vm.modalState,
      title: _vm.modalTitle,
      size: _vm.modalSize,
      color: _vm.modalColor,
      button: _vm.modalButton,
      content: _vm.modalContent
    },
    on: {
      confirmOk: _vm.modalConfirmOk,
      tutup: _vm.modalTutup,
      successOk: _vm.modalTutup,
      failOk: _vm.modalTutup,
      backgroundClick: _vm.modalTutup
    }
  }, [_c("template", {
    slot: "modal-title"
  }, [_vm._v(_vm._s(_vm.modalTitle))]), _vm._v(" "), _c("template", {
    slot: "modal-body1"
  })], 2)], 1);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "card"
  }, [_c("div", {
    staticClass: "card-body"
  }, [_c("h3", [_vm._v("Belum terdapat revisi apapun...")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "card"
  }, [_c("div", {
    staticClass: "card-body"
  }, [_c("h4", [_vm._v("Mohon tunggu...")]), _vm._v(" "), _c("div", {
    staticClass: "progress"
  }, [_c("div", {
    staticClass: "progress-bar progress-bar-info progress-bar-striped progress-bar-animated",
    staticStyle: {
      width: "100%"
    }
  }, [_c("span", {
    staticClass: "sr-only"
  }, [_vm._v("100% Complete")])])])])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/laporanCu/selectDetail.vue?vue&type=template&id=cc65001c":
/*!********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/views/laporanCu/selectDetail.vue?vue&type=template&id=cc65001c ***!
  \********************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", [_c("div", {
    staticClass: "card d-print-none"
  }, [_c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "row"
  }, [this.currentUser.id_cu === 0 ? _c("div", {
    staticClass: "col-sm-5"
  }, [_c("div", {
    staticClass: "input-group"
  }, [_vm._m(0), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.idCu,
      expression: "idCu"
    }],
    staticClass: "form-control",
    attrs: {
      name: "idCu",
      "data-width": "100%",
      disabled: _vm.modelCUStat === "loading"
    },
    on: {
      change: [function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.idCu = $event.target.multiple ? $$selectedVal : $$selectedVal[0];
      }, function ($event) {
        return _vm.changeCu($event.target.value);
      }]
    }
  }, [_c("option", {
    attrs: {
      disabled: "",
      value: ""
    }
  }, [_vm._v("Silahkan pilih data")]), _vm._v(" "), _vm._t("default"), _vm._v(" "), _vm._l(_vm.modelCU, function (cu) {
    return cu ? _c("option", {
      domProps: {
        value: cu.id
      }
    }, [_vm._v(_vm._s(cu.name))]) : _vm._e();
  })], 2), _vm._v(" "), _c("div", {
    staticClass: "input-group-append"
  }, [_c("button", {
    directives: [{
      name: "tooltip",
      rawName: "v-tooltip:top",
      value: "Reload",
      expression: "'Reload'",
      arg: "top"
    }],
    staticClass: "btn btn-light",
    attrs: {
      disabled: _vm.modelCUStat === "loading"
    },
    on: {
      click: _vm.fetchCU
    }
  }, [_c("i", {
    staticClass: "icon-sync",
    "class": {
      spinner: _vm.modelCUStat === "loading"
    }
  })])])])]) : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "col-sm-5"
  }, [_c("div", {
    staticClass: "input-group"
  }, [_vm._m(1), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.periode,
      expression: "periode"
    }],
    staticClass: "form-control",
    attrs: {
      name: "periode",
      "data-width": "100%",
      disabled: _vm.modelPeriodeStat === "loading"
    },
    on: {
      change: [function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.periode = $event.target.multiple ? $$selectedVal : $$selectedVal[0];
      }, function ($event) {
        return _vm.changePeriode($event.target.value);
      }]
    }
  }, [_c("option", {
    attrs: {
      disabled: "",
      value: ""
    }
  }, [_vm._v("Silahkan pilih periode laporan")]), _vm._v(" "), _vm._t("default"), _vm._v(" "), _vm._l(_vm.modelPeriode, function (periode) {
    return periode ? _c("option", {
      domProps: {
        value: periode.periode
      }
    }, [_vm._v(_vm._s(_vm._f("dateMonth")(periode.periode)))]) : _vm._e();
  })], 2), _vm._v(" "), _c("div", {
    staticClass: "input-group-append"
  }, [_c("button", {
    directives: [{
      name: "tooltip",
      rawName: "v-tooltip:top",
      value: "Reload",
      expression: "'Reload'",
      arg: "top"
    }],
    staticClass: "btn btn-light",
    attrs: {
      disabled: _vm.modelPeriodeStat === "loading"
    },
    on: {
      click: function click($event) {
        return _vm.fetchPeriode(_vm.idCu);
      }
    }
  }, [_c("i", {
    staticClass: "icon-sync",
    "class": {
      spinner: _vm.modelPeriodeStat === "loading"
    }
  })])])])]), _vm._v(" "), _c("div", {
    "class": {
      "col-sm-5": this.currentUser.id_cu != 0,
      "col-sm-10 pt-2": this.currentUser.id_cu == 0
    }
  }, [_c("div", {
    staticClass: "input-group"
  }, [_vm._m(2), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.idTp,
      expression: "idTp"
    }],
    staticClass: "form-control",
    attrs: {
      name: "idTp",
      "data-width": "100%",
      disabled: _vm.modelTpStat === "loading"
    },
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.idTp = $event.target.multiple ? $$selectedVal : $$selectedVal[0];
      }
    }
  }, [_c("option", {
    attrs: {
      disabled: "",
      value: ""
    }
  }, [_vm._v("Silahkan pilih TP/KP")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "konsolidasi"
    }
  }, [_vm._v("Konsolidasi")]), _vm._v(" "), _vm.modelTp && _vm.modelTp.length != 0 ? _c("option", {
    attrs: {
      disabled: ""
    }
  }, [_vm._v("----------------")]) : _vm._e(), _vm._v(" "), _vm._l(_vm.modelTp, function (tp) {
    return tp.tp ? _c("option", {
      domProps: {
        value: tp.id
      }
    }, [_vm._v(_vm._s(tp.tp.name))]) : _vm._e();
  })], 2), _vm._v(" "), _c("div", {
    staticClass: "input-group-append"
  }, [_c("button", {
    directives: [{
      name: "tooltip",
      rawName: "v-tooltip:top",
      value: "Reload",
      expression: "'Reload'",
      arg: "top"
    }],
    staticClass: "btn btn-light",
    attrs: {
      disabled: _vm.modelPeriodeStat === "loading"
    },
    on: {
      click: function click($event) {
        return _vm.fetchTp(_vm.idCu, _vm.periode);
      }
    }
  }, [_c("i", {
    staticClass: "icon-sync",
    "class": {
      spinner: _vm.modelCUStat === "loading"
    }
  })])])])]), _vm._v(" "), _c("div", {
    staticClass: "col-sm-2",
    "class": {
      "pt-2": this.currentUser.id_cu == 0
    }
  }, [_vm.itemDataStat != "loading" ? _c("button", {
    directives: [{
      name: "tooltip",
      rawName: "v-tooltip:top",
      value: "Tampilkan data sesuai pilihan",
      expression: "'Tampilkan data sesuai pilihan'",
      arg: "top"
    }],
    staticClass: "btn btn-light btn-icon btn-block",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.fetch();
      }
    }
  }, [_c("i", {
    staticClass: "icon-folder-open3"
  }), _vm._v("  Tampilkan\n\t\t\t\t\t")]) : _c("button", {
    staticClass: "btn btn-light btn-icon btn-block",
    attrs: {
      type: "button"
    }
  }, [_c("i", {
    staticClass: "icon-sync spinner"
  })])])])])])]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "input-group-prepend"
  }, [_c("span", {
    staticClass: "input-group-text"
  }, [_vm._v("Pilih Data")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "input-group-prepend"
  }, [_c("span", {
    staticClass: "input-group-text"
  }, [_vm._v("Pilih Periode")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "input-group-prepend"
  }, [_c("span", {
    staticClass: "input-group-text"
  }, [_vm._v("Pilih TP/KP")])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/laporanCu/widgetLaporanCu.vue?vue&type=template&id=6ba740e4":
/*!***********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/views/laporanCu/widgetLaporanCu.vue?vue&type=template&id=6ba740e4 ***!
  \***********************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", [_c("div", {
    staticClass: "card card-body",
    "class": _vm.checkClass()
  }, [_c("div", {
    staticClass: "media mb-3"
  }, [_c("div", {
    staticClass: "media-body"
  }, [_vm.isPercent ? _c("h6", {
    staticClass: "font-weight-semibold mb-8"
  }, [_vm._v(_vm._s(_vm._f("percentage")(_vm.itemData, 2)))]) : _c("h6", {
    staticClass: "font-weight-semibold mb-8"
  }, [_vm._v(_vm._s(_vm._f("currency")(_vm.itemData, "", 0, {
    thousandsSeparator: "."
  })))]), _vm._v(" "), _vm.isPercent ? _c("span", {
    staticClass: "opacity-75"
  }, [_c("i", {
    "class": {
      "icon-chevron-up": _vm.totalData > 0,
      "icon-chevron-down": _vm.totalData < 0
    }
  }), _vm._v(" " + _vm._s(_vm._f("percentage")(Math.abs(_vm.totalData), 2)) + "\t\t\t\t\r\n\t\t\t\t")]) : _c("span", {
    staticClass: "opacity-75"
  }, [_c("i", {
    "class": {
      "icon-chevron-up": _vm.totalData > 0,
      "icon-chevron-down": _vm.totalData < 0
    }
  }), _vm._v(" " + _vm._s(_vm._f("currency")(Math.abs(_vm.totalData), "", 0, {
    thousandsSeparator: "."
  })) + "\t\t\t\t\r\n\t\t\t\t")])]), _vm._v(" "), _c("div", {
    staticClass: "ml-3 align-self-center"
  }, [_c("i", {
    staticClass: "icon-2x opacity-75",
    "class": {
      "icon-arrow-up16": _vm.totalData > 0,
      "icon-arrow-down16": _vm.totalData < 0
    }
  })])]), _vm._v(" "), _vm._m(0), _vm._v(" "), _c("div", [!_vm.isPercent ? _c("span", {
    staticClass: "float-right"
  }, [_vm.percentageData > 0 ? _c("span", [_vm._v("+")]) : _vm.percentageData < 0 ? _c("span", [_vm._v("-")]) : _vm._e(), _vm._v("\r\n\t\t\t\t" + _vm._s(_vm._f("percentage")(Math.abs(_vm.percentageData), 2)) + "\r\n\t\t\t")]) : _vm._e(), _vm._v(" "), _c("b", [_vm._v(_vm._s(_vm.title.toUpperCase()))])])]), _vm._v(" "), _c("app-modal", {
    attrs: {
      show: _vm.modalShow,
      color: _vm.modalColor,
      state: _vm.modalState,
      title: _vm.modalTitle,
      button: _vm.modalButton
    },
    on: {
      batal: _vm.modalTutup,
      tutup: _vm.modalTutup,
      errorOk: _vm.modalTutup,
      backgroundClick: _vm.modalTutup
    }
  })], 1);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "progress bg-blue mb-2",
    staticStyle: {
      height: "0.125rem"
    }
  }, [_c("div", {
    staticClass: "progress-bar bg-white",
    staticStyle: {
      width: "100%"
    }
  }, [_c("span", {
    staticClass: "sr-only"
  }, [_vm._v("100% Complete")])])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/laporanCu/detail.vue?vue&type=style&index=0&id=984e60d4&lang=css":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/views/laporanCu/detail.vue?vue&type=style&index=0&id=984e60d4&lang=css ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports
exports.i(__webpack_require__(/*! -!../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/katex/dist/katex.min.css */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/katex/dist/katex.min.css"), "");

// module
exports.push([module.i, "\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/laporanCu/detail.vue?vue&type=style&index=0&id=984e60d4&lang=css":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/views/laporanCu/detail.vue?vue&type=style&index=0&id=984e60d4&lang=css ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./detail.vue?vue&type=style&index=0&id=984e60d4&lang=css */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/laporanCu/detail.vue?vue&type=style&index=0&id=984e60d4&lang=css");

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

/***/ "./resources/assets/js/components/checkValue.vue":
/*!*******************************************************!*\
  !*** ./resources/assets/js/components/checkValue.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _checkValue_vue_vue_type_template_id_56ee5620__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./checkValue.vue?vue&type=template&id=56ee5620 */ "./resources/assets/js/components/checkValue.vue?vue&type=template&id=56ee5620");
/* harmony import */ var _checkValue_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./checkValue.vue?vue&type=script&lang=js */ "./resources/assets/js/components/checkValue.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _checkValue_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _checkValue_vue_vue_type_template_id_56ee5620__WEBPACK_IMPORTED_MODULE_0__["render"],
  _checkValue_vue_vue_type_template_id_56ee5620__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/components/checkValue.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/checkValue.vue?vue&type=script&lang=js":
/*!*******************************************************************************!*\
  !*** ./resources/assets/js/components/checkValue.vue?vue&type=script&lang=js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_checkValue_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./checkValue.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/checkValue.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_checkValue_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/checkValue.vue?vue&type=template&id=56ee5620":
/*!*************************************************************************************!*\
  !*** ./resources/assets/js/components/checkValue.vue?vue&type=template&id=56ee5620 ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_checkValue_vue_vue_type_template_id_56ee5620__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../node_modules/vue-loader/lib??vue-loader-options!./checkValue.vue?vue&type=template&id=56ee5620 */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/checkValue.vue?vue&type=template&id=56ee5620");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_checkValue_vue_vue_type_template_id_56ee5620__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_checkValue_vue_vue_type_template_id_56ee5620__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/assets/js/components/pageHeader.vue":
/*!*******************************************************!*\
  !*** ./resources/assets/js/components/pageHeader.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pageHeader_vue_vue_type_template_id_0af8ed53__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pageHeader.vue?vue&type=template&id=0af8ed53 */ "./resources/assets/js/components/pageHeader.vue?vue&type=template&id=0af8ed53");
/* harmony import */ var _pageHeader_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pageHeader.vue?vue&type=script&lang=js */ "./resources/assets/js/components/pageHeader.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _pageHeader_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _pageHeader_vue_vue_type_template_id_0af8ed53__WEBPACK_IMPORTED_MODULE_0__["render"],
  _pageHeader_vue_vue_type_template_id_0af8ed53__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/components/pageHeader.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/pageHeader.vue?vue&type=script&lang=js":
/*!*******************************************************************************!*\
  !*** ./resources/assets/js/components/pageHeader.vue?vue&type=script&lang=js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_pageHeader_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./pageHeader.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/pageHeader.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_pageHeader_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/pageHeader.vue?vue&type=template&id=0af8ed53":
/*!*************************************************************************************!*\
  !*** ./resources/assets/js/components/pageHeader.vue?vue&type=template&id=0af8ed53 ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_pageHeader_vue_vue_type_template_id_0af8ed53__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../node_modules/vue-loader/lib??vue-loader-options!./pageHeader.vue?vue&type=template&id=0af8ed53 */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/pageHeader.vue?vue&type=template&id=0af8ed53");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_pageHeader_vue_vue_type_template_id_0af8ed53__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_pageHeader_vue_vue_type_template_id_0af8ed53__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/assets/js/helpers/form.js":
/*!*********************************************!*\
  !*** ./resources/assets/js/helpers/form.js ***!
  \*********************************************/
/*! exports provided: toMulipartedForm, objectToFormData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toMulipartedForm", function() { return toMulipartedForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "objectToFormData", function() { return objectToFormData; });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function toMulipartedForm(form, mode) {
  if (mode === 'edit' && typeof form.image === 'string') {
    var temp = JSON.parse(JSON.stringify(form));
    delete temp.image;
    return temp;
  } else {
    return objectToFormData(form);
  }
}
function objectToFormData(obj, form, namespace) {
  var fd = form || new FormData();
  var formKey;
  for (var property in obj) {
    if (obj.hasOwnProperty(property)) {
      if (namespace) {
        formKey = namespace + '[' + property + ']';
      } else {
        formKey = property;
      }
      if (obj[property] instanceof Array) {
        for (var i = 0; i < obj[property].length; i++) {
          objectToFormData(obj[property][i], fd, "".concat(property, "[").concat(i, "]"));
        }
      } else if (_typeof(obj[property]) === 'object' && !(obj[property] instanceof File)) {
        objectToFormData(obj[property], fd, property);
      } else {
        fd.append(formKey, obj[property]);
      }
    }
  }
  return fd;
}

/***/ }),

/***/ "./resources/assets/js/views/laporanCu/detail.vue":
/*!********************************************************!*\
  !*** ./resources/assets/js/views/laporanCu/detail.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _detail_vue_vue_type_template_id_984e60d4__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./detail.vue?vue&type=template&id=984e60d4 */ "./resources/assets/js/views/laporanCu/detail.vue?vue&type=template&id=984e60d4");
/* harmony import */ var _detail_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./detail.vue?vue&type=script&lang=js */ "./resources/assets/js/views/laporanCu/detail.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _detail_vue_vue_type_style_index_0_id_984e60d4_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./detail.vue?vue&type=style&index=0&id=984e60d4&lang=css */ "./resources/assets/js/views/laporanCu/detail.vue?vue&type=style&index=0&id=984e60d4&lang=css");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _detail_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _detail_vue_vue_type_template_id_984e60d4__WEBPACK_IMPORTED_MODULE_0__["render"],
  _detail_vue_vue_type_template_id_984e60d4__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/views/laporanCu/detail.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/views/laporanCu/detail.vue?vue&type=script&lang=js":
/*!********************************************************************************!*\
  !*** ./resources/assets/js/views/laporanCu/detail.vue?vue&type=script&lang=js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_detail_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./detail.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/laporanCu/detail.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_detail_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/views/laporanCu/detail.vue?vue&type=style&index=0&id=984e60d4&lang=css":
/*!****************************************************************************************************!*\
  !*** ./resources/assets/js/views/laporanCu/detail.vue?vue&type=style&index=0&id=984e60d4&lang=css ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_detail_vue_vue_type_style_index_0_id_984e60d4_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./detail.vue?vue&type=style&index=0&id=984e60d4&lang=css */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/laporanCu/detail.vue?vue&type=style&index=0&id=984e60d4&lang=css");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_detail_vue_vue_type_style_index_0_id_984e60d4_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_detail_vue_vue_type_style_index_0_id_984e60d4_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_detail_vue_vue_type_style_index_0_id_984e60d4_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_detail_vue_vue_type_style_index_0_id_984e60d4_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/assets/js/views/laporanCu/detail.vue?vue&type=template&id=984e60d4":
/*!**************************************************************************************!*\
  !*** ./resources/assets/js/views/laporanCu/detail.vue?vue&type=template&id=984e60d4 ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_detail_vue_vue_type_template_id_984e60d4__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../node_modules/vue-loader/lib??vue-loader-options!./detail.vue?vue&type=template&id=984e60d4 */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/laporanCu/detail.vue?vue&type=template&id=984e60d4");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_detail_vue_vue_type_template_id_984e60d4__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_detail_vue_vue_type_template_id_984e60d4__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/assets/js/views/laporanCu/detailLaporanCu.vue":
/*!*****************************************************************!*\
  !*** ./resources/assets/js/views/laporanCu/detailLaporanCu.vue ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _detailLaporanCu_vue_vue_type_template_id_2f6c7ff7__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./detailLaporanCu.vue?vue&type=template&id=2f6c7ff7 */ "./resources/assets/js/views/laporanCu/detailLaporanCu.vue?vue&type=template&id=2f6c7ff7");
/* harmony import */ var _detailLaporanCu_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./detailLaporanCu.vue?vue&type=script&lang=js */ "./resources/assets/js/views/laporanCu/detailLaporanCu.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _detailLaporanCu_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _detailLaporanCu_vue_vue_type_template_id_2f6c7ff7__WEBPACK_IMPORTED_MODULE_0__["render"],
  _detailLaporanCu_vue_vue_type_template_id_2f6c7ff7__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/views/laporanCu/detailLaporanCu.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/views/laporanCu/detailLaporanCu.vue?vue&type=script&lang=js":
/*!*****************************************************************************************!*\
  !*** ./resources/assets/js/views/laporanCu/detailLaporanCu.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_detailLaporanCu_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./detailLaporanCu.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/laporanCu/detailLaporanCu.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_detailLaporanCu_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/views/laporanCu/detailLaporanCu.vue?vue&type=template&id=2f6c7ff7":
/*!***********************************************************************************************!*\
  !*** ./resources/assets/js/views/laporanCu/detailLaporanCu.vue?vue&type=template&id=2f6c7ff7 ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_detailLaporanCu_vue_vue_type_template_id_2f6c7ff7__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../node_modules/vue-loader/lib??vue-loader-options!./detailLaporanCu.vue?vue&type=template&id=2f6c7ff7 */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/laporanCu/detailLaporanCu.vue?vue&type=template&id=2f6c7ff7");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_detailLaporanCu_vue_vue_type_template_id_2f6c7ff7__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_detailLaporanCu_vue_vue_type_template_id_2f6c7ff7__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/assets/js/views/laporanCu/detailPearls.vue":
/*!**************************************************************!*\
  !*** ./resources/assets/js/views/laporanCu/detailPearls.vue ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _detailPearls_vue_vue_type_template_id_f6a3d8ba__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./detailPearls.vue?vue&type=template&id=f6a3d8ba */ "./resources/assets/js/views/laporanCu/detailPearls.vue?vue&type=template&id=f6a3d8ba");
/* harmony import */ var _detailPearls_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./detailPearls.vue?vue&type=script&lang=js */ "./resources/assets/js/views/laporanCu/detailPearls.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _detailPearls_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _detailPearls_vue_vue_type_template_id_f6a3d8ba__WEBPACK_IMPORTED_MODULE_0__["render"],
  _detailPearls_vue_vue_type_template_id_f6a3d8ba__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/views/laporanCu/detailPearls.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/views/laporanCu/detailPearls.vue?vue&type=script&lang=js":
/*!**************************************************************************************!*\
  !*** ./resources/assets/js/views/laporanCu/detailPearls.vue?vue&type=script&lang=js ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_detailPearls_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./detailPearls.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/laporanCu/detailPearls.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_detailPearls_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/views/laporanCu/detailPearls.vue?vue&type=template&id=f6a3d8ba":
/*!********************************************************************************************!*\
  !*** ./resources/assets/js/views/laporanCu/detailPearls.vue?vue&type=template&id=f6a3d8ba ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_detailPearls_vue_vue_type_template_id_f6a3d8ba__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../node_modules/vue-loader/lib??vue-loader-options!./detailPearls.vue?vue&type=template&id=f6a3d8ba */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/laporanCu/detailPearls.vue?vue&type=template&id=f6a3d8ba");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_detailPearls_vue_vue_type_template_id_f6a3d8ba__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_detailPearls_vue_vue_type_template_id_f6a3d8ba__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/assets/js/views/laporanCu/diskusi.vue":
/*!*********************************************************!*\
  !*** ./resources/assets/js/views/laporanCu/diskusi.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _diskusi_vue_vue_type_template_id_c66cba4e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./diskusi.vue?vue&type=template&id=c66cba4e */ "./resources/assets/js/views/laporanCu/diskusi.vue?vue&type=template&id=c66cba4e");
/* harmony import */ var _diskusi_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./diskusi.vue?vue&type=script&lang=js */ "./resources/assets/js/views/laporanCu/diskusi.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _diskusi_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _diskusi_vue_vue_type_template_id_c66cba4e__WEBPACK_IMPORTED_MODULE_0__["render"],
  _diskusi_vue_vue_type_template_id_c66cba4e__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/views/laporanCu/diskusi.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/views/laporanCu/diskusi.vue?vue&type=script&lang=js":
/*!*********************************************************************************!*\
  !*** ./resources/assets/js/views/laporanCu/diskusi.vue?vue&type=script&lang=js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_diskusi_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./diskusi.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/laporanCu/diskusi.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_diskusi_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/views/laporanCu/diskusi.vue?vue&type=template&id=c66cba4e":
/*!***************************************************************************************!*\
  !*** ./resources/assets/js/views/laporanCu/diskusi.vue?vue&type=template&id=c66cba4e ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_diskusi_vue_vue_type_template_id_c66cba4e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../node_modules/vue-loader/lib??vue-loader-options!./diskusi.vue?vue&type=template&id=c66cba4e */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/laporanCu/diskusi.vue?vue&type=template&id=c66cba4e");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_diskusi_vue_vue_type_template_id_c66cba4e__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_diskusi_vue_vue_type_template_id_c66cba4e__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/assets/js/views/laporanCu/revisi.vue":
/*!********************************************************!*\
  !*** ./resources/assets/js/views/laporanCu/revisi.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _revisi_vue_vue_type_template_id_d0913a7e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./revisi.vue?vue&type=template&id=d0913a7e */ "./resources/assets/js/views/laporanCu/revisi.vue?vue&type=template&id=d0913a7e");
/* harmony import */ var _revisi_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./revisi.vue?vue&type=script&lang=js */ "./resources/assets/js/views/laporanCu/revisi.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _revisi_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _revisi_vue_vue_type_template_id_d0913a7e__WEBPACK_IMPORTED_MODULE_0__["render"],
  _revisi_vue_vue_type_template_id_d0913a7e__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/views/laporanCu/revisi.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/views/laporanCu/revisi.vue?vue&type=script&lang=js":
/*!********************************************************************************!*\
  !*** ./resources/assets/js/views/laporanCu/revisi.vue?vue&type=script&lang=js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_revisi_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./revisi.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/laporanCu/revisi.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_revisi_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/views/laporanCu/revisi.vue?vue&type=template&id=d0913a7e":
/*!**************************************************************************************!*\
  !*** ./resources/assets/js/views/laporanCu/revisi.vue?vue&type=template&id=d0913a7e ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_revisi_vue_vue_type_template_id_d0913a7e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../node_modules/vue-loader/lib??vue-loader-options!./revisi.vue?vue&type=template&id=d0913a7e */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/laporanCu/revisi.vue?vue&type=template&id=d0913a7e");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_revisi_vue_vue_type_template_id_d0913a7e__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_revisi_vue_vue_type_template_id_d0913a7e__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/assets/js/views/laporanCu/selectDetail.vue":
/*!**************************************************************!*\
  !*** ./resources/assets/js/views/laporanCu/selectDetail.vue ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _selectDetail_vue_vue_type_template_id_cc65001c__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./selectDetail.vue?vue&type=template&id=cc65001c */ "./resources/assets/js/views/laporanCu/selectDetail.vue?vue&type=template&id=cc65001c");
/* harmony import */ var _selectDetail_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./selectDetail.vue?vue&type=script&lang=js */ "./resources/assets/js/views/laporanCu/selectDetail.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _selectDetail_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _selectDetail_vue_vue_type_template_id_cc65001c__WEBPACK_IMPORTED_MODULE_0__["render"],
  _selectDetail_vue_vue_type_template_id_cc65001c__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/views/laporanCu/selectDetail.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/views/laporanCu/selectDetail.vue?vue&type=script&lang=js":
/*!**************************************************************************************!*\
  !*** ./resources/assets/js/views/laporanCu/selectDetail.vue?vue&type=script&lang=js ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_selectDetail_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./selectDetail.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/laporanCu/selectDetail.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_selectDetail_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/views/laporanCu/selectDetail.vue?vue&type=template&id=cc65001c":
/*!********************************************************************************************!*\
  !*** ./resources/assets/js/views/laporanCu/selectDetail.vue?vue&type=template&id=cc65001c ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_selectDetail_vue_vue_type_template_id_cc65001c__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../node_modules/vue-loader/lib??vue-loader-options!./selectDetail.vue?vue&type=template&id=cc65001c */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/laporanCu/selectDetail.vue?vue&type=template&id=cc65001c");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_selectDetail_vue_vue_type_template_id_cc65001c__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_selectDetail_vue_vue_type_template_id_cc65001c__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/assets/js/views/laporanCu/widgetLaporanCu.vue":
/*!*****************************************************************!*\
  !*** ./resources/assets/js/views/laporanCu/widgetLaporanCu.vue ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _widgetLaporanCu_vue_vue_type_template_id_6ba740e4__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./widgetLaporanCu.vue?vue&type=template&id=6ba740e4 */ "./resources/assets/js/views/laporanCu/widgetLaporanCu.vue?vue&type=template&id=6ba740e4");
/* harmony import */ var _widgetLaporanCu_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./widgetLaporanCu.vue?vue&type=script&lang=js */ "./resources/assets/js/views/laporanCu/widgetLaporanCu.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _widgetLaporanCu_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _widgetLaporanCu_vue_vue_type_template_id_6ba740e4__WEBPACK_IMPORTED_MODULE_0__["render"],
  _widgetLaporanCu_vue_vue_type_template_id_6ba740e4__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/views/laporanCu/widgetLaporanCu.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/views/laporanCu/widgetLaporanCu.vue?vue&type=script&lang=js":
/*!*****************************************************************************************!*\
  !*** ./resources/assets/js/views/laporanCu/widgetLaporanCu.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_widgetLaporanCu_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./widgetLaporanCu.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/laporanCu/widgetLaporanCu.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_widgetLaporanCu_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/views/laporanCu/widgetLaporanCu.vue?vue&type=template&id=6ba740e4":
/*!***********************************************************************************************!*\
  !*** ./resources/assets/js/views/laporanCu/widgetLaporanCu.vue?vue&type=template&id=6ba740e4 ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_widgetLaporanCu_vue_vue_type_template_id_6ba740e4__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../node_modules/vue-loader/lib??vue-loader-options!./widgetLaporanCu.vue?vue&type=template&id=6ba740e4 */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/laporanCu/widgetLaporanCu.vue?vue&type=template&id=6ba740e4");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_widgetLaporanCu_vue_vue_type_template_id_6ba740e4__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_widgetLaporanCu_vue_vue_type_template_id_6ba740e4__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);