(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[120],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/countWidget.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/countWidget.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['title', 'icon', 'color', 'count']
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/jalinanKlaim/form.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/views/jalinanKlaim/form.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_pageHeader_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/pageHeader.vue */ "./resources/assets/js/components/pageHeader.vue");
/* harmony import */ var _components_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/modal */ "./resources/assets/js/components/modal.vue");
/* harmony import */ var _components_message_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/message.vue */ "./resources/assets/js/components/message.vue");
/* harmony import */ var vue_cleave_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vue-cleave-component */ "./node_modules/vue-cleave-component/dist/vue-cleave.min.js");
/* harmony import */ var vue_cleave_component__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(vue_cleave_component__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_checkValue_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/checkValue.vue */ "./resources/assets/js/components/checkValue.vue");
/* harmony import */ var _components_infoIcon_vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/infoIcon.vue */ "./resources/assets/js/components/infoIcon.vue");
/* harmony import */ var _components_wajibBadge_vue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/wajibBadge.vue */ "./resources/assets/js/components/wajibBadge.vue");
/* harmony import */ var _components_countWidget_vue__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/countWidget.vue */ "./resources/assets/js/components/countWidget.vue");
/* harmony import */ var _components_formButton_vue__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/formButton.vue */ "./resources/assets/js/components/formButton.vue");
/* harmony import */ var _components_formInfo_vue__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/formInfo.vue */ "./resources/assets/js/components/formInfo.vue");
/* harmony import */ var _anggotaCu_cariData__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../anggotaCu/cariData */ "./resources/assets/js/views/anggotaCu/cariData.vue");
/* harmony import */ var _components_identitas_vue__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../components/identitas.vue */ "./resources/assets/js/components/identitas.vue");
/* harmony import */ var _components_datatable_vue__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../components/datatable.vue */ "./resources/assets/js/components/datatable.vue");
/* harmony import */ var _components_ImageUpload_vue__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../components/ImageUpload.vue */ "./resources/assets/js/components/ImageUpload.vue");
/* harmony import */ var _helpers_form__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../helpers/form */ "./resources/assets/js/helpers/form.js");
/* harmony import */ var _components_datePicker_vue__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../components/datePicker.vue */ "./resources/assets/js/components/datePicker.vue");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }


















/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    pageHeader: _components_pageHeader_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    appModal: _components_modal__WEBPACK_IMPORTED_MODULE_3__["default"],
    message: _components_message_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
    Cleave: vue_cleave_component__WEBPACK_IMPORTED_MODULE_5___default.a,
    checkValue: _components_checkValue_vue__WEBPACK_IMPORTED_MODULE_6__["default"],
    infoIcon: _components_infoIcon_vue__WEBPACK_IMPORTED_MODULE_7__["default"],
    wajibBadge: _components_wajibBadge_vue__WEBPACK_IMPORTED_MODULE_8__["default"],
    countWidget: _components_countWidget_vue__WEBPACK_IMPORTED_MODULE_9__["default"],
    formButton: _components_formButton_vue__WEBPACK_IMPORTED_MODULE_10__["default"],
    formInfo: _components_formInfo_vue__WEBPACK_IMPORTED_MODULE_11__["default"],
    cariData: _anggotaCu_cariData__WEBPACK_IMPORTED_MODULE_12__["default"],
    identitas: _components_identitas_vue__WEBPACK_IMPORTED_MODULE_13__["default"],
    dataTable: _components_datatable_vue__WEBPACK_IMPORTED_MODULE_14__["default"],
    appImageUpload: _components_ImageUpload_vue__WEBPACK_IMPORTED_MODULE_15__["default"],
    DatePicker: _components_datePicker_vue__WEBPACK_IMPORTED_MODULE_17__["default"]
  },
  data: function data() {
    return {
      title: 'Tambah Bantuan Solidaritas Jalinan',
      titleDesc: 'Menambah bantuan solidaritas Jalinan',
      titleIcon: 'icon-plus3',
      level2Title: 'Bantuan Solidaritas Jalinan',
      kelas: 'jalinanKlaim',
      isEdit: false,
      nik: '',
      statusNIK: 'tidak',
      anggota_cu_cu_id: '',
      cu_id: '',
      tipe: '',
      tabName: 'ktp',
      cleaveOption: {
        date: {
          date: true,
          datePattern: ['Y', 'm', 'd'],
          delimiter: '-'
        },
        number16: {
          numeral: true,
          numeralIntegerScale: 16,
          numeralDecimalScale: 0,
          stripLeadingZeroes: false,
          delimiter: ''
        },
        number12: {
          numeral: true,
          numeralIntegerScale: 12,
          numeralDecimalScale: 0,
          stripLeadingZeroes: false,
          delimiter: ''
        },
        number3: {
          numeral: true,
          numeralIntegerScale: 3,
          numeralDecimalScale: 0,
          stripLeadingZeroes: false
        },
        numeric: {
          numeral: true,
          numeralThousandsGroupStyle: 'thousand',
          numeralDecimalScale: 2,
          numeralDecimalMark: ',',
          delimiter: '.'
        }
      },
      selectedItem: {},
      columnData: [{
        title: 'No.'
      }, {
        title: 'No. Rek'
      }, {
        title: 'Nama'
      }, {
        title: 'Jenis'
      }, {
        title: 'Saldo Awal'
      }, {
        title: 'Lama Pinjaman (Bulan)'
      }, {
        title: 'Lama Sisa Pinjaman (Bulan)'
      }, {
        title: 'Tgl. Buat'
      }, {
        title: 'Usia Saat Membuka'
      }],
      selectedItemCu: '',
      itemDataCu: [],
      itemDataProduk: [],
      itemDataCuStat: 'success',
      modalShow: false,
      modalState: '',
      modalTitle: '',
      modalColor: '',
      modalContent: '',
      submited: false
    };
  },
  created: function created() {
    if (this.currentUser.id_cu == 0) {
      if (this.modelCuStat != 'success') {
        this.$store.dispatch('cu/getHeader');
      }
    }
    this.fetch();
  },
  watch: {
    // check route changes
    '$route': function $route(to, from) {
      this.fetch();
    },
    itemDataStat: function itemDataStat(value) {
      if (value == "success") {
        this.itemDataCu = [];
        this.itemDataProduk = [];

        // cu
        if (this.itemData) {
          if (this.itemData.anggota_cu_cu) {
            var valData;
            var _iterator = _createForOfIteratorHelper(this.itemData.anggota_cu_cu),
              _step;
            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                valData = _step.value;
                this.itemDataCu.push(valData);
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }
          }
          // get form
          this.fetchForm();
        }
      }
    },
    formStat: function formStat(value) {
      if (value == 'success') {
        if (this.$route.meta.mode == 'koreksi') {
          if (this.form.status_klaim == 5 || this.form.status_klaim == 6) {
            this.form.id_koreksi = this.form.id;
            this.form.status_klaim = 7;
            this.form.id = '';
          } else {
            this.form.status_klaim = 1;
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
      this.resetData();
      if (this.$route.meta.mode == 'edit') {
        this.title = 'Ubah Bantuan Solidaritas Jalinan';
        this.titleDesc = 'Mengubah bantuan solidaritas Jalinan';
        this.titleIcon = 'icon-pencil5';
        this.cariData(this.$route.params.nik);
      } else if (this.$route.meta.mode == 'koreksi') {
        this.title = 'Koreksi Bantuan Solidaritas Jalinan';
        this.titleDesc = 'Mengoreksi bantuan solidaritas Jalinan';
        this.titleIcon = 'icon-pencil5';
        this.cariData(this.$route.params.nik);
      } else {
        this.title = 'Tambah Bantuan Solidaritas Jalinan';
        this.titleDesc = 'Menambah Bantuan Solidaritas Jalinan';
        this.titleIcon = 'icon-plus3';
        this.isEdit = false;
        if (this.$route.meta.mode == 'createNIK') {
          this.cariData(this.$route.params.nik);
          this.isEdit = true;
        } else if (this.$route.meta.mode == 'createId') {
          this.cariDataId(this.$route.params.id);
          this.isEdit = true;
        }
      }
    },
    fetchForm: function fetchForm() {
      if (this.$route.meta.mode == 'edit' || this.$route.meta.mode == 'koreksi') {
        this.$store.dispatch(this.kelas + '/edit', [this.$route.params.nik, this.$route.params.cu, this.$route.params.tipe]);
        this.isEdit = true;
        this.anggota_cu_cu_id = this.$route.params.cu;
        this.tipe = this.$route.params.tipe;
      }
    },
    cariData: function cariData(nik) {
      this.nik = nik;
      this.$store.dispatch(this.kelas + '/cariData', nik);
    },
    cariDataId: function cariDataId(id) {
      this.$store.dispatch(this.kelas + '/cariDataId', id);
    },
    changeStatusNIK: function changeStatusNIK(value) {
      this.nik == '';
      this.statusNIK = value;
      this.$store.dispatch(this.kelas + '/resetData');
    },
    nikNew: function nikNew(value) {
      this.nik = value;
      this.$store.dispatch(this.kelas + '/cariData', value);
    },
    selectedRow: function selectedRow(item) {
      this.selectedItem = item;
    },
    changeTab: function changeTab(value) {
      this.tabName = value;
    },
    changeTipe: function changeTipe(value) {
      if (value == 'cacat') {
        this.form.tunas_diajukan = 0;
      }
      this.$store.dispatch(this.kelas + '/resetForm');
    },
    changeCU: function changeCU(value) {
      this.$store.dispatch('anggotaCu/resetDataProduk');
      this.$store.dispatch(this.kelas + '/resetForm');
    },
    cekData: function cekData() {
      var _nik = '';
      if (this.$route.meta.mode === 'edit') {
        _nik = this.$route.params.nik;
      } else if (this.$route.meta.mode === 'createId') {
        _nik = this.itemData.nik;
      } else {
        _nik = this.nik;
      }
      var _cu = '';
      _cu = lodash__WEBPACK_IMPORTED_MODULE_1___default.a.find(this.itemDataCu, {
        'id': parseInt(this.anggota_cu_cu_id, 10)
      });
      this.cu_id = _cu.cu_id;
      this.$store.dispatch(this.kelas + '/edit', [_nik, _cu.id, this.tipe]);
      this.$store.dispatch('anggotaCu/indexProduk', [this.itemData.id, _cu.cu_id]);
      // this.$store.dispatch(this.kelas + '/getKlaimLama',[_nik,_cu.id]);
    },
    resetData: function resetData() {
      this.itemDataCu = [];
      this.itemDataProduk = [];
      this.$store.commit(this.kelas + '/setData2', {});
      this.$store.commit(this.kelas + '/setDataStat2', '');
      this.$store.dispatch('anggotaCu/resetDataProduk');
      this.$store.dispatch(this.kelas + '/resetForm');
    },
    classCu: function classCu() {
      if (this.currentUser.id_cu == 0) {
        return 'col-8';
      } else {
        return 'col-12';
      }
    },
    save: function save() {
      var _this = this;
      this.form.anggota_cu_id = this.itemData.id;
      this.form.anggota_cu_cu_id = this.anggota_cu_cu_id;
      this.form.tipe = this.tipe;
      this.form.cu_id = this.cu_id;
      if (this.tipe == 'CACAT') {
        this.form.tunas_diajukan = 0;
      }
      var formData = Object(_helpers_form__WEBPACK_IMPORTED_MODULE_16__["toMulipartedForm"])(this.form, this.$route.meta.mode);
      this.$validator.validateAll('form').then(function (result) {
        if (result) {
          if (_this.form.id) {
            _this.$store.dispatch(_this.kelas + '/update', [_this.form.id, formData]);
          } else {
            _this.$store.dispatch(_this.kelas + '/store', formData);
          }
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
            cu: 'semua',
            tp: 'semua'
          }
        });
      } else {
        this.$router.push({
          name: this.kelas + 'Cu',
          params: {
            cu: this.currentUser.id_cu,
            tp: 'semua'
          }
        });
      }
    },
    modalOpen: function modalOpen(state, isMobile, itemMobile) {},
    modalConfirmOk: function modalConfirmOk() {},
    modalTutup: function modalTutup() {
      if (this.updateStat === 'success') {
        this.back();
      }
      this.modalShow = false;
    },
    modalBackgroundClick: function modalBackgroundClick() {
      if (this.modalState === 'success') {
        this.modalTutup;
      } else if (this.modalState === 'loading') {
        // do nothing
      } else {
        this.modalShow = false;
      }
    }
  },
  computed: _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('auth', {
    currentUser: 'currentUser'
  })), Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('jalinanKlaim', {
    itemData: 'data2',
    itemDataStat: 'dataStat2',
    message: 'message',
    messageStat: 'messageStat',
    form: 'data',
    formStat: 'dataStat',
    rules: 'rules',
    options: 'options',
    updateResponse: 'update',
    updateStat: 'updateStat'
  })), Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('anggotaCu', {
    dataProduk: 'dataProduk',
    dataProdukStat: 'dataProdukStat'
  })), Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('cu', {
    modelCu: 'headerDataS',
    modelCuStat: 'headerDataStatS'
  })), Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('provinces', {
    modelProvinces: 'dataS',
    modelProvincesStat: 'dataStatS'
  })), Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('regencies', {
    modelRegencies: 'dataS',
    modelRegenciesStat: 'dataStatS'
  })), Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('districts', {
    modelDistricts: 'dataS',
    modelDistrictsStat: 'dataStatS'
  })), Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('villages', {
    modelVillages: 'dataS',
    modelVillagesStat: 'dataStatS'
  }))
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/countWidget.vue?vue&type=template&id=b9608b28&":
/*!***************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/countWidget.vue?vue&type=template&id=b9608b28& ***!
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
  return _c("div", {
    staticClass: "card card-body has-bg-image",
    "class": _vm.color
  }, [_c("div", {
    staticClass: "media"
  }, [_c("div", {
    staticClass: "media-body"
  }, [_vm.count ? _c("h3", {
    staticClass: "mb-0"
  }, [_vm._v(_vm._s(_vm.count))]) : _vm._e(), _vm._v(" "), _c("span", {
    staticClass: "text-uppercase font-size-xs"
  }, [_vm._v(_vm._s(_vm.title))])]), _vm._v(" "), _c("div", {
    staticClass: "ml-3 align-self-center"
  }, [_c("i", {
    staticClass: "icon-3x opacity-75",
    "class": _vm.icon
  })])])]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/jalinanKlaim/form.vue?vue&type=template&id=a5ee5ada&":
/*!****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/views/jalinanKlaim/form.vue?vue&type=template&id=a5ee5ada& ***!
  \****************************************************************************************************************************************************************************************************************************************************/
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
      level2Title: _vm.level2Title,
      level2Route: _vm.kelas
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
  }, [_vm.errors.any("form") && _vm.submited ? _c("message", {
    attrs: {
      title: "Oops, terjadi kesalahan",
      errorItem: _vm.errors.items
    }
  }) : _vm._e(), _vm._v(" "), !_vm.isEdit ? _c("cari-data", {
    attrs: {
      itemDataStat: _vm.itemDataStat,
      isBack: true
    },
    on: {
      cariData: _vm.cariData,
      changeStatusNIK: _vm.changeStatusNIK,
      nikNew: _vm.nikNew,
      resetData: _vm.resetData,
      back: _vm.back
    }
  }) : _vm._e(), _vm._v(" "), _vm.itemDataStat == "fail" ? _c("div", {
    staticClass: "alert bg-danger text-white alert-styled-left"
  }, [_vm.currentUser.can["create_anggota_cu"] ? _c("span", {
    staticClass: "font-weight-semibold"
  }, [_vm._v("No. KTP anggota CU tidak terdaftar di SIMO, silahkan menambahkan terlebih dahulu data anggota dengan menekan tombol tambah anggota CU dibawah.\n\t\t\t\t\t")]) : _c("span", [_vm._v("\n\t\t\t\t\t\tNo. KTP anggota CU tidak terdaftar di SIMO, silahkan meminta user yang memiliki akses untuk menambah anggota CU untuk menambahkan terlebih dahulu data anggota atau meminta akses untuk menambah anggota CU kepada user lain yang bisa mengelola data user.\n\t\t\t\t\t")])]) : _vm._e(), _vm._v(" "), _vm.itemDataStat == "fail" && _vm.currentUser.can["create_anggota_cu"] ? _c("router-link", {
    staticClass: "btn btn-light btn-lg btn-block",
    attrs: {
      type: "button",
      to: {
        name: "anggotaCuCreateJalinan",
        params: {
          nik: _vm.nik,
          statusNIK: _vm.statusNIK
        }
      }
    }
  }, [_c("i", {
    staticClass: "icon-plus22"
  }), _vm._v(" Tambah Anggota CU\n\t\t\t\t")]) : _vm._e(), _vm._v(" "), _vm.itemDataStat == "success" && _vm.itemData ? _c("div", [_c("div", {
    staticClass: "card"
  }, [_vm._m(0), _vm._v(" "), _c("div", {
    staticClass: "card-body"
  }, [_c("identitas", {
    attrs: {
      itemData: _vm.itemData
    }
  })], 1)]), _vm._v(" "), _c("form", {
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
    staticClass: "card card-body"
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-md-5 mb-2"
  }, [_c("div", {
    staticClass: "input-group"
  }, [_vm._m(1), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.anggota_cu_cu_id,
      expression: "anggota_cu_cu_id"
    }],
    staticClass: "form-control",
    attrs: {
      name: "anggota_cu_cu_id",
      "data-width": "100%",
      disabled: _vm.itemData.anggota_cu_cu.length == 0 || _vm.$route.meta.mode == "edit"
    },
    on: {
      change: [function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.anggota_cu_cu_id = $event.target.multiple ? $$selectedVal : $$selectedVal[0];
      }, function ($event) {
        return _vm.changeCU($event.target.value);
      }]
    }
  }, [_c("option", {
    attrs: {
      disabled: "",
      value: ""
    }
  }, [_vm.itemData === "loading" ? _c("span", [_vm._v("Mohon tunggu...")]) : _c("span", [_vm._v("Silahkan pilih keanggotaan CU")])]), _vm._v(" "), _vm._l(_vm.itemData.anggota_cu_cu, function (anggota_cu_cu, index) {
    return _c("option", {
      key: index,
      domProps: {
        value: anggota_cu_cu.id
      }
    }, [_vm._v("CU " + _vm._s(anggota_cu_cu.cu.name) + " " + _vm._s(anggota_cu_cu.tp ? " | " + anggota_cu_cu.tp.name : "") + " | No. BA: " + _vm._s(anggota_cu_cu.no_ba) + " | Tanggal Jadi Anggota: "), anggota_cu_cu.tanggal_masuk ? _c("span", {
      domProps: {
        innerHTML: _vm._s(_vm.$options.filters.date(anggota_cu_cu.tanggal_masuk))
      }
    }) : _vm._e()]);
  })], 2)])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-5 mb-2"
  }, [_c("div", {
    staticClass: "input-group"
  }, [_vm._m(2), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.tipe,
      expression: "tipe"
    }],
    staticClass: "form-control",
    attrs: {
      name: "tipe"
    },
    on: {
      change: [function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.tipe = $event.target.multiple ? $$selectedVal : $$selectedVal[0];
      }, function ($event) {
        return _vm.changeTipe($event.target.value);
      }]
    }
  }, [_c("option", {
    attrs: {
      disabled: "",
      value: ""
    }
  }, [_vm._v("Silahkan pilih tipe")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "CACAT"
    }
  }, [_vm._v("Cacat")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "MENINGGAL"
    }
  }, [_vm._v("Meninggal")])])])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-2"
  }, [_c("button", {
    staticClass: "btn btn-light btn-block",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.cekData();
      }
    }
  }, [_vm._v("Cek Data")])])])]), _vm._v(" "), _vm.formStat == "" ? _c("div", {
    staticClass: "card card-body"
  }, [_c("form-button", {
    attrs: {
      isSingleButton: true,
      cancelState: "methods"
    },
    on: {
      cancelClick: _vm.back
    }
  })], 1) : _vm._e(), _vm._v(" "), (_vm.$route.meta.mode == "create" || _vm.$route.meta.mode == "createNIK") && _vm.formStat == "success" && _vm.form.id ? _c("div", [_c("div", {
    staticClass: "alert bg-warning text-white alert-styled-left"
  }, [_c("span", {
    staticClass: "font-weight-semibold"
  }, [_vm._v("Anggota ini sudah mengajukan Bantuan Solidaritas Jalinan  "), _c("b", [_vm._v("pada tanggal " + _vm._s(_vm.$options.filters.date(_vm.form.created_at)))]), _vm._v(" dengan "), _c("b", [_vm._v("status " + _vm._s(_vm.$options.filters.statusJalinan(_vm.form.status_klaim)))]), _vm._v(", mohon periksa kembali.\n\t\t\t\t\t\t\t\t")])]), _vm._v(" "), _c("div", {
    staticClass: "card card-body"
  }, [_c("form-button", {
    attrs: {
      isSingleButton: true,
      cancelState: "methods"
    },
    on: {
      cancelClick: _vm.back
    }
  })], 1)]) : _c("div", [_vm.formStat == "success" ? _c("div", [_vm.dataProdukStat == "success" ? _c("div", {
    staticClass: "card"
  }, [_vm._m(3), _vm._v(" "), _c("data-table", {
    attrs: {
      items: _vm.dataProduk,
      columnData: _vm.columnData,
      itemDataStat: _vm.dataProdukStat
    },
    scopedSlots: _vm._u([{
      key: "item-desktop",
      fn: function fn(props) {
        return [props.item ? _c("tr", {
          staticClass: "text-nowrap",
          "class": {
            "bg-info": _vm.selectedItem.id === props.item.id
          },
          on: {
            click: function click($event) {
              return _vm.selectedRow(props.item);
            }
          }
        }, [_c("td", [_vm._v(_vm._s(props.index + 1))]), _vm._v(" "), _c("td", [_c("check-value", {
          attrs: {
            value: props.item.no_rek
          }
        })], 1), _vm._v(" "), _c("td", [props.item.produk_cu ? _c("check-value", {
          attrs: {
            value: props.item.produk_cu.name
          }
        }) : _c("span", [_vm._v("-")])], 1), _vm._v(" "), _c("td", [props.item.produk_cu ? _c("check-value", {
          attrs: {
            value: props.item.produk_cu.tipe
          }
        }) : _c("span", [_vm._v("-")])], 1), _vm._v(" "), _c("td", [_c("check-value", {
          attrs: {
            value: props.item.saldo,
            valueType: "currency"
          }
        })], 1), _vm._v(" "), _c("td", [_c("check-value", {
          attrs: {
            value: props.item.lama_pinjaman
          }
        })], 1), _vm._v(" "), _c("td", [_c("check-value", {
          attrs: {
            value: props.item.lama_sisa_pinjaman
          }
        })], 1), _vm._v(" "), _c("td", [props.item.tanggal ? _c("span", {
          domProps: {
            innerHTML: _vm._s(_vm.$options.filters.date(props.item.tanggal))
          }
        }) : _c("span", [_vm._v("-")])]), _vm._v(" "), _c("td", [props.item.tanggal ? _c("span", {
          domProps: {
            innerHTML: _vm._s(_vm.$options.filters.ageDiff(props.item.tanggal, _vm.itemData.tanggal_lahir))
          }
        }) : _c("span", [_vm._v("-")])])]) : _vm._e()];
      }
    }], null, false, 2413839719)
  })], 1) : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "card"
  }, [_vm._m(4), _vm._v(" "), _c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-md-3"
  }, [_c("div", {
    staticClass: "form-group",
    "class": {
      "has-error": _vm.errors.has("form.kategori_penyakit")
    }
  }, [_c("h6", {
    "class": {
      "text-danger": _vm.errors.has("form.kategori_penyakit")
    }
  }, [_vm.errors.has("form.kategori_penyakit") ? _c("i", {
    staticClass: "icon-cross2"
  }) : _vm._e(), _vm._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tKategori Penyakit/Penyebab: "), _c("wajib-badge")], 1), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.kategori_penyakit,
      expression: "form.kategori_penyakit"
    }, {
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }],
    staticClass: "form-control",
    attrs: {
      name: "kategori_penyakit",
      "data-width": "100%",
      "data-vv-as": "Kategori penyakit"
    },
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.form, "kategori_penyakit", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c("option", {
    attrs: {
      disabled: "",
      value: ""
    }
  }, [_vm._v("Silahkan pilih kategori penyakit")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "asma"
    }
  }, [_vm._v("Asma")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "demam berdarah"
    }
  }, [_vm._v("Demam Berdarah")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "diabetes melitus"
    }
  }, [_vm._v("Diabetes Melitus")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "diare"
    }
  }, [_vm._v("Diare")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "ginjal"
    }
  }, [_vm._v("Ginjal")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "hepatitis"
    }
  }, [_vm._v("Hepatitis")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "hipertensi"
    }
  }, [_vm._v("Hipertensi")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "jantung"
    }
  }, [_vm._v("Jantung")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "kanker"
    }
  }, [_vm._v("Kanker")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "liver"
    }
  }, [_vm._v("Liver")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "maag"
    }
  }, [_vm._v("Maag")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "paru-paru"
    }
  }, [_vm._v("Paru-paru")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "stroke"
    }
  }, [_vm._v("Stroke")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "tbc"
    }
  }, [_vm._v("TBC")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "tumor"
    }
  }, [_vm._v("Tumor")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "malaria"
    }
  }, [_vm._v("Malaria")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "kecelakaan"
    }
  }, [_vm._v("Kecelakaan")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "komplikasi"
    }
  }, [_vm._v("Komplikasi")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "lain-lain"
    }
  }, [_vm._v("Lain-lain")])]), _vm._v(" "), _vm.errors.has("form.kategori_penyakit") ? _c("small", {
    staticClass: "text-muted text-danger"
  }, [_c("i", {
    staticClass: "icon-arrow-small-right"
  }), _vm._v(" " + _vm._s(_vm.errors.first("form.kategori_penyakit")) + "\n\t\t\t\t\t\t\t\t\t\t\t\t\t")]) : _c("small", {
    staticClass: "text-muted"
  }, [_vm._v(" ")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-3"
  }, [_c("div", {
    staticClass: "form-group",
    "class": {
      "has-error": _vm.errors.has("form.tanggal_mati")
    }
  }, [_c("h6", {
    "class": {
      "text-danger": _vm.errors.has("form.tanggal_mati")
    }
  }, [_vm.errors.has("form.tanggal_mati") ? _c("i", {
    staticClass: "icon-cross2"
  }) : _vm._e(), _vm._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tTgl. Cacat/Meninggal: "), _c("wajib-badge")], 1), _vm._v(" "), _c("date-picker", {
    attrs: {
      defaultDate: _vm.form.tanggal_mati
    },
    on: {
      dateSelected: function dateSelected($event) {
        _vm.form.tanggal_mati = $event;
      }
    }
  }), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.tanggal_mati,
      expression: "form.tanggal_mati"
    }, {
      name: "show",
      rawName: "v-show",
      value: false,
      expression: "false"
    }, {
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }],
    attrs: {
      "data-vv-as": "Tgl. cacat/meninggal"
    },
    domProps: {
      value: _vm.form.tanggal_mati
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "tanggal_mati", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm.errors.has("form.tanggal_mati") ? _c("small", {
    staticClass: "text-muted text-danger"
  }, [_c("i", {
    staticClass: "icon-arrow-small-right"
  }), _vm._v(" " + _vm._s(_vm.errors.first("form.tanggal_mati")) + "\n\t\t\t\t\t\t\t\t\t\t\t\t\t")]) : _c("small", {
    staticClass: "text-muted"
  }, [_vm._v(" ")])], 1)]), _vm._v(" "), _c("div", {
    staticClass: "col-md-3"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("h6", [_vm._v("Keterangan Cacat/Meninggal:")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.keterangan_mati,
      expression: "form.keterangan_mati"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      name: "keterangan_mati",
      placeholder: "Silahkan masukkan keterangan cacat/meninggal"
    },
    domProps: {
      value: _vm.form.keterangan_mati
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "keterangan_mati", $event.target.value);
      }
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-3"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("h6", {
    "class": {
      "text-danger": _vm.errors.has("form.tanggal_mati")
    }
  }, [_vm.errors.has("form.tanggal_mati") ? _c("i", {
    staticClass: "icon-cross2"
  }) : _vm._e(), _vm._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tKeterangan Lain:\n\t\t\t\t\t\t\t\t\t\t\t\t\t")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.keterangan,
      expression: "form.keterangan"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      name: "keterangan",
      placeholder: "Silahkan masukkan keterangan lain"
    },
    domProps: {
      value: _vm.form.keterangan
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "keterangan", $event.target.value);
      }
    }
  })])]), _vm._v(" "), _vm.formStat == "success" && _vm.tipe != "CACAT" ? _c("div", {
    staticClass: "col-md-6"
  }, [_c("div", {
    staticClass: "form-group",
    "class": {
      "has-error": _vm.errors.has("form.tunas_diajukan")
    }
  }, [_c("h5", [_vm._v("Nilai pengajuan bantuan solidaritas TUNAS "), _c("wajib-badge")], 1), _vm._v(" "), _c("cleave", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }],
    staticClass: "form-control",
    attrs: {
      name: "tunas_diajukan",
      options: _vm.cleaveOption.numeric,
      placeholder: "Silahkan masukkan jumlah nilai pengajuan bantuan solidaritas TUNAS",
      "data-vv-as": "Nilai pengajuan bantuan solidaritas TUNAS"
    },
    model: {
      value: _vm.form.tunas_diajukan,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "tunas_diajukan", $$v);
      },
      expression: "form.tunas_diajukan"
    }
  }), _vm._v(" "), _vm.errors.has("form.tunas_diajukan") ? _c("small", {
    staticClass: "text-muted text-danger"
  }, [_c("i", {
    staticClass: "icon-arrow-small-right"
  }), _vm._v(" " + _vm._s(_vm.errors.first("form.tunas_diajukan")) + "\n\t\t\t\t\t\t\t\t\t\t\t\t\t")]) : _c("small", {
    staticClass: "text-muted"
  }, [_vm._v(" ")])], 1)]) : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "col-md-6"
  }, [_c("div", {
    staticClass: "form-group",
    "class": {
      "has-error": _vm.errors.has("form.lintang_diajukan")
    }
  }, [_c("h5", [_vm._v("Nilai pengajuan bantuan solidaritas LINTANG "), _c("wajib-badge")], 1), _vm._v(" "), _c("cleave", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }],
    staticClass: "form-control",
    attrs: {
      name: "lintang_diajukan",
      options: _vm.cleaveOption.numeric,
      placeholder: "Silahkan masukkan jumlah nilai pengajuan bantuan solidaritas LINTANG",
      "data-vv-as": "Nilai pengajuan bantuan solidaritas LINTANG"
    },
    model: {
      value: _vm.form.lintang_diajukan,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "lintang_diajukan", $$v);
      },
      expression: "form.lintang_diajukan"
    }
  }), _vm._v(" "), _vm.errors.has("form.lintang_diajukan") ? _c("small", {
    staticClass: "text-muted text-danger"
  }, [_c("i", {
    staticClass: "icon-arrow-small-right"
  }), _vm._v(" " + _vm._s(_vm.errors.first("form.lintang_diajukan")) + "\n\t\t\t\t\t\t\t\t\t\t\t\t\t")]) : _c("small", {
    staticClass: "text-muted"
  }, [_vm._v(" ")])], 1)])])])]), _vm._v(" "), _c("div", {
    staticClass: "card"
  }, [_vm._m(5), _vm._v(" "), _c("div", {
    staticClass: "card-body"
  }, [_vm.tipe == "MENINGGAL" ? _c("div", {
    staticClass: "alert bg-warning alert-styled-left"
  }, [_vm._m(6)]) : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "nav-tabs-responsive mb-3"
  }, [_c("ul", {
    staticClass: "nav nav-tabs nav-tabs-solid bg-light"
  }, [_c("li", {
    staticClass: "nav-item"
  }, [_c("a", {
    staticClass: "nav-link",
    "class": {
      active: _vm.tabName == "ktp"
    },
    attrs: {
      href: "#"
    },
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.changeTab("ktp");
      }
    }
  }, [_c("i", {
    staticClass: "icon-vcard mr-2"
  }), _vm._v(" Identitas diri (Kartu tanda penduduk (KTP) atau Surat Keterangan Kependudukan) ")])]), _vm._v(" "), _vm.tipe == "MENINGGAL" ? _c("li", {
    staticClass: "nav-item"
  }, [_c("a", {
    staticClass: "nav-link",
    "class": {
      active: _vm.tabName == "meninggal"
    },
    attrs: {
      href: "#"
    },
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.changeTab("meninggal");
      }
    }
  }, [_c("i", {
    staticClass: "icon-person mr-2"
  }), _vm._v(" Keterangan meninggal dunia")])]) : _vm._e(), _vm._v(" "), _c("li", {
    staticClass: "nav-item"
  }, [_c("a", {
    staticClass: "nav-link",
    "class": {
      active: _vm.tabName == "spma"
    },
    attrs: {
      href: "#"
    },
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.changeTab("spma");
      }
    }
  }, [_c("i", {
    staticClass: "icon-magazine mr-2"
  }), _vm._v(" Surat Permohonan Menjadi Anggota ")])]), _vm._v(" "), _vm.tipe == "MENINGGAL" ? _c("li", {
    staticClass: "nav-item"
  }, [_c("a", {
    staticClass: "nav-link",
    "class": {
      active: _vm.tabName == "bukusimpanan"
    },
    attrs: {
      href: "#"
    },
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.changeTab("bukusimpanan");
      }
    }
  }, [_c("i", {
    staticClass: "icon-credit-card mr-2"
  }), _vm._v(" Buku Simpanan ")])]) : _vm._e(), _vm._v(" "), _c("li", {
    staticClass: "nav-item"
  }, [_c("a", {
    staticClass: "nav-link",
    "class": {
      active: _vm.tabName == "bukupinjaman"
    },
    attrs: {
      href: "#"
    },
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.changeTab("bukupinjaman");
      }
    }
  }, [_c("i", {
    staticClass: "icon-credit-card2 mr-2"
  }), _vm._v(" Buku Pinjaman ")])]), _vm._v(" "), _c("li", {
    staticClass: "nav-item"
  }, [_c("a", {
    staticClass: "nav-link",
    "class": {
      active: _vm.tabName == "pinjaman"
    },
    attrs: {
      href: "#"
    },
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.changeTab("pinjaman");
      }
    }
  }, [_c("i", {
    staticClass: "icon-clipboard3 mr-2"
  }), _vm._v(" Permohonan dan perjanjian pinjaman")])])])]), _vm._v(" "), _c("transition", {
    attrs: {
      "enter-active-class": "animated fadeIn",
      mode: "out-in"
    }
  }, [_c("div", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.tabName == "meninggal",
      expression: "tabName == 'meninggal'"
    }]
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("h5", [_vm._v("Keterangan meninggal dunia:")]), _vm._v(" "), _c("app-image-upload", {
    attrs: {
      image_loc: "/images/jalinan/",
      image_temp: _vm.form.dokumen_meninggal
    },
    model: {
      value: _vm.form.dokumen_meninggal,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "dokumen_meninggal", $$v);
      },
      expression: "form.dokumen_meninggal"
    }
  })], 1)])]), _vm._v(" "), _c("transition", {
    attrs: {
      "enter-active-class": "animated fadeIn",
      mode: "out-in"
    }
  }, [_c("div", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.tabName == "ktp",
      expression: "tabName == 'ktp'"
    }]
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("h5", [_vm._v("Identitas diri (Kartu tanda penduduk (KTP) atau Surat Keterangan Kependudukan) :")]), _vm._v(" "), _c("app-image-upload", {
    attrs: {
      image_loc: "/images/jalinan/",
      image_temp: _vm.form.dokumen_ktp
    },
    model: {
      value: _vm.form.dokumen_ktp,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "dokumen_ktp", $$v);
      },
      expression: "form.dokumen_ktp"
    }
  })], 1)])]), _vm._v(" "), _c("transition", {
    attrs: {
      "enter-active-class": "animated fadeIn",
      mode: "out-in"
    }
  }, [_c("div", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.tabName == "spma",
      expression: "tabName == 'spma'"
    }]
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-6"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("h5", [_vm._v("Surat Permohonan Menjadi Anggota 1:")]), _vm._v(" "), _c("app-image-upload", {
    attrs: {
      image_loc: "/images/jalinan/",
      image_temp: _vm.form.spma_1
    },
    model: {
      value: _vm.form.spma_1,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "spma_1", $$v);
      },
      expression: "form.spma_1"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "col-6"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("h5", [_vm._v("Surat Permohonan Menjadi Anggota 2:")]), _vm._v(" "), _c("app-image-upload", {
    attrs: {
      image_loc: "/images/jalinan/",
      image_temp: _vm.form.spma_2
    },
    model: {
      value: _vm.form.spma_2,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "spma_2", $$v);
      },
      expression: "form.spma_2"
    }
  })], 1)])])])]), _vm._v(" "), _c("transition", {
    attrs: {
      "enter-active-class": "animated fadeIn",
      mode: "out-in"
    }
  }, [_c("div", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.tabName == "bukusimpanan",
      expression: "tabName == 'bukusimpanan'"
    }]
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-6"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("h5", [_vm._v("Buku Simpanan 1:")]), _vm._v(" "), _c("app-image-upload", {
    attrs: {
      image_loc: "/images/jalinan/",
      image_temp: _vm.form.buku_simpanan_1
    },
    model: {
      value: _vm.form.buku_simpanan_1,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "buku_simpanan_1", $$v);
      },
      expression: "form.buku_simpanan_1"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "col-6"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("h5", [_vm._v("Buku Simpanan 2:")]), _vm._v(" "), _c("app-image-upload", {
    attrs: {
      image_loc: "/images/jalinan/",
      image_temp: _vm.form.buku_simpanan_2
    },
    model: {
      value: _vm.form.buku_simpanan_2,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "buku_simpanan_2", $$v);
      },
      expression: "form.buku_simpanan_2"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "col-6"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("h5", [_vm._v("Buku Simpanan 3:")]), _vm._v(" "), _c("app-image-upload", {
    attrs: {
      image_loc: "/images/jalinan/",
      image_temp: _vm.form.buku_simpanan_3
    },
    model: {
      value: _vm.form.buku_simpanan_3,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "buku_simpanan_3", $$v);
      },
      expression: "form.buku_simpanan_3"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "col-6"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("h5", [_vm._v("Buku Simpanan 4:")]), _vm._v(" "), _c("app-image-upload", {
    attrs: {
      image_loc: "/images/jalinan/",
      image_temp: _vm.form.buku_simpanan_4
    },
    model: {
      value: _vm.form.buku_simpanan_4,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "buku_simpanan_4", $$v);
      },
      expression: "form.buku_simpanan_4"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "col-6"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("h5", [_vm._v("Buku Simpanan 5:")]), _vm._v(" "), _c("app-image-upload", {
    attrs: {
      image_loc: "/images/jalinan/",
      image_temp: _vm.form.buku_simpanan_5
    },
    model: {
      value: _vm.form.buku_simpanan_5,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "buku_simpanan_5", $$v);
      },
      expression: "form.buku_simpanan_5"
    }
  })], 1)])])])]), _vm._v(" "), _c("transition", {
    attrs: {
      "enter-active-class": "animated fadeIn",
      mode: "out-in"
    }
  }, [_c("div", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.tabName == "bukupinjaman",
      expression: "tabName == 'bukupinjaman'"
    }]
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-6"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("h5", [_vm._v("Buku Pinjaman 1:")]), _vm._v(" "), _c("app-image-upload", {
    attrs: {
      image_loc: "/images/jalinan/",
      image_temp: _vm.form.buku_pinjaman_1
    },
    model: {
      value: _vm.form.buku_pinjaman_1,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "buku_pinjaman_1", $$v);
      },
      expression: "form.buku_pinjaman_1"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "col-6"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("h5", [_vm._v("Buku Pinjaman 2:")]), _vm._v(" "), _c("app-image-upload", {
    attrs: {
      image_loc: "/images/jalinan/",
      image_temp: _vm.form.buku_pinjaman_2
    },
    model: {
      value: _vm.form.buku_pinjaman_2,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "buku_pinjaman_2", $$v);
      },
      expression: "form.buku_pinjaman_2"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "col-6"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("h5", [_vm._v("Buku Pinjaman 3:")]), _vm._v(" "), _c("app-image-upload", {
    attrs: {
      image_loc: "/images/jalinan/",
      image_temp: _vm.form.buku_pinjaman_3
    },
    model: {
      value: _vm.form.buku_pinjaman_3,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "buku_pinjaman_3", $$v);
      },
      expression: "form.buku_pinjaman_3"
    }
  })], 1)])])])]), _vm._v(" "), _c("transition", {
    attrs: {
      "enter-active-class": "animated fadeIn",
      mode: "out-in"
    }
  }, [_c("div", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.tabName == "pinjaman",
      expression: "tabName == 'pinjaman'"
    }]
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-6"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("h5", [_vm._v("Dokumen Pinjaman 1:")]), _vm._v(" "), _c("app-image-upload", {
    attrs: {
      image_loc: "/images/jalinan/",
      image_temp: _vm.form.dokumen_pinjaman_1
    },
    model: {
      value: _vm.form.dokumen_pinjaman_1,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "dokumen_pinjaman_1", $$v);
      },
      expression: "form.dokumen_pinjaman_1"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "col-6"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("h5", [_vm._v("Dokumen Pinjaman 2:")]), _vm._v(" "), _c("app-image-upload", {
    attrs: {
      image_loc: "/images/jalinan/",
      image_temp: _vm.form.dokumen_pinjaman_2
    },
    model: {
      value: _vm.form.dokumen_pinjaman_2,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "dokumen_pinjaman_2", $$v);
      },
      expression: "form.dokumen_pinjaman_2"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "col-6"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("h5", [_vm._v("Dokumen Pinjaman 3:")]), _vm._v(" "), _c("app-image-upload", {
    attrs: {
      image_loc: "/images/jalinan/",
      image_temp: _vm.form.dokumen_pinjaman_3
    },
    model: {
      value: _vm.form.dokumen_pinjaman_3,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "dokumen_pinjaman_3", $$v);
      },
      expression: "form.dokumen_pinjaman_3"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "col-6"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("h5", [_vm._v("Dokumen Pinjaman 4:")]), _vm._v(" "), _c("app-image-upload", {
    attrs: {
      image_loc: "/images/jalinan/",
      image_temp: _vm.form.dokumen_pinjaman_4
    },
    model: {
      value: _vm.form.dokumen_pinjaman_4,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "dokumen_pinjaman_4", $$v);
      },
      expression: "form.dokumen_pinjaman_4"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "col-6"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("h5", [_vm._v("Dokumen Pinjaman 5:")]), _vm._v(" "), _c("app-image-upload", {
    attrs: {
      image_loc: "/images/jalinan/",
      image_temp: _vm.form.dokumen_pinjaman_5
    },
    model: {
      value: _vm.form.dokumen_pinjaman_5,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "dokumen_pinjaman_5", $$v);
      },
      expression: "form.dokumen_pinjaman_5"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "col-6"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("h5", [_vm._v("Dokumen Pinjaman 6:")]), _vm._v(" "), _c("app-image-upload", {
    attrs: {
      image_loc: "/images/jalinan/",
      image_temp: _vm.form.dokumen_pinjaman_6
    },
    model: {
      value: _vm.form.dokumen_pinjaman_6,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "dokumen_pinjaman_6", $$v);
      },
      expression: "form.dokumen_pinjaman_6"
    }
  })], 1)])])])])], 1)]), _vm._v(" "), _c("form-info"), _vm._v(" "), _c("div", {
    staticClass: "card card-body"
  }, [_c("form-button", {
    attrs: {
      cancelState: "methods",
      formValidation: "form"
    },
    on: {
      cancelClick: _vm.back
    }
  })], 1)], 1) : _vm._e()])])]) : _vm._e()], 1)])]), _vm._v(" "), _c("app-modal", {
    attrs: {
      show: _vm.modalShow,
      state: _vm.modalState,
      title: _vm.modalTitle,
      content: _vm.modalContent,
      color: _vm.modalColor
    },
    on: {
      batal: _vm.modalTutup,
      confirmOk: _vm.modalConfirmOk,
      tutup: _vm.modalTutup,
      successOk: _vm.modalTutup,
      failOk: _vm.modalTutup,
      backgroundClick: _vm.modalBackgroundClick
    }
  }, [_c("template", {
    slot: "modal-title"
  }, [_vm._v("\n\t\t\t" + _vm._s(_vm.modalTitle) + "\n\t\t")]), _vm._v(" "), _c("template", {
    slot: "modal-body1"
  }), _vm._v(" "), _c("template", {
    slot: "modal-body2"
  })], 2)], 1);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "card-header bg-white"
  }, [_c("h5", {
    staticClass: "card-title"
  }, [_vm._v("Identitas")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("span", {
    staticClass: "input-group-prepend"
  }, [_c("span", {
    staticClass: "input-group-text"
  }, [_vm._v("Keanggotaan CU")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("span", {
    staticClass: "input-group-prepend"
  }, [_c("span", {
    staticClass: "input-group-text"
  }, [_vm._v("Tipe")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "card-header bg-white"
  }, [_c("h5", {
    staticClass: "card-title"
  }, [_vm._v("Daftar Produk")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "card-header bg-white"
  }, [_c("h5", {
    staticClass: "card-title"
  }, [_vm._v("Form Bantuan Solidaritas ")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "card-header bg-white"
  }, [_c("h5", {
    staticClass: "card-title"
  }, [_vm._v("Dokumen")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("h6", [_vm._v("Anggota yang meninggal dengan usia diatas 70 tahun "), _c("b", [_vm._v("WAJIB UPLOAD dan KIRIM BERKAS FISIK")]), _vm._v(" untuk buku simpanan / buku pinjaman / SPP perjanjian")]);
}];
render._withStripped = true;


/***/ }),

/***/ "./resources/assets/js/components/countWidget.vue":
/*!********************************************************!*\
  !*** ./resources/assets/js/components/countWidget.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _countWidget_vue_vue_type_template_id_b9608b28___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./countWidget.vue?vue&type=template&id=b9608b28& */ "./resources/assets/js/components/countWidget.vue?vue&type=template&id=b9608b28&");
/* harmony import */ var _countWidget_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./countWidget.vue?vue&type=script&lang=js& */ "./resources/assets/js/components/countWidget.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _countWidget_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _countWidget_vue_vue_type_template_id_b9608b28___WEBPACK_IMPORTED_MODULE_0__["render"],
  _countWidget_vue_vue_type_template_id_b9608b28___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/components/countWidget.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/countWidget.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/assets/js/components/countWidget.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_countWidget_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./countWidget.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/countWidget.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_countWidget_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/countWidget.vue?vue&type=template&id=b9608b28&":
/*!***************************************************************************************!*\
  !*** ./resources/assets/js/components/countWidget.vue?vue&type=template&id=b9608b28& ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_countWidget_vue_vue_type_template_id_b9608b28___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../node_modules/vue-loader/lib??vue-loader-options!./countWidget.vue?vue&type=template&id=b9608b28& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/countWidget.vue?vue&type=template&id=b9608b28&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_countWidget_vue_vue_type_template_id_b9608b28___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_countWidget_vue_vue_type_template_id_b9608b28___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/assets/js/views/jalinanKlaim/form.vue":
/*!*********************************************************!*\
  !*** ./resources/assets/js/views/jalinanKlaim/form.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _form_vue_vue_type_template_id_a5ee5ada___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form.vue?vue&type=template&id=a5ee5ada& */ "./resources/assets/js/views/jalinanKlaim/form.vue?vue&type=template&id=a5ee5ada&");
/* harmony import */ var _form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form.vue?vue&type=script&lang=js& */ "./resources/assets/js/views/jalinanKlaim/form.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _form_vue_vue_type_template_id_a5ee5ada___WEBPACK_IMPORTED_MODULE_0__["render"],
  _form_vue_vue_type_template_id_a5ee5ada___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/views/jalinanKlaim/form.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/views/jalinanKlaim/form.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/assets/js/views/jalinanKlaim/form.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./form.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/jalinanKlaim/form.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/views/jalinanKlaim/form.vue?vue&type=template&id=a5ee5ada&":
/*!****************************************************************************************!*\
  !*** ./resources/assets/js/views/jalinanKlaim/form.vue?vue&type=template&id=a5ee5ada& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_template_id_a5ee5ada___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../node_modules/vue-loader/lib??vue-loader-options!./form.vue?vue&type=template&id=a5ee5ada& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/jalinanKlaim/form.vue?vue&type=template&id=a5ee5ada&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_template_id_a5ee5ada___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_template_id_a5ee5ada___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);