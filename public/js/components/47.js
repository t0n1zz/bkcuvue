(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[47],{

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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/laporanCu/form.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/views/laporanCu/form.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_pageHeader_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/pageHeader.vue */ "./resources/assets/js/components/pageHeader.vue");
/* harmony import */ var _components_infoIcon_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/infoIcon.vue */ "./resources/assets/js/components/infoIcon.vue");
/* harmony import */ var _components_message_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/message.vue */ "./resources/assets/js/components/message.vue");
/* harmony import */ var _components_formButton_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/formButton.vue */ "./resources/assets/js/components/formButton.vue");
/* harmony import */ var _components_formInfo_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/formInfo.vue */ "./resources/assets/js/components/formInfo.vue");
/* harmony import */ var vue_cleave_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vue-cleave-component */ "./node_modules/vue-cleave-component/dist/vue-cleave.min.js");
/* harmony import */ var vue_cleave_component__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(vue_cleave_component__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_wajibBadge_vue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/wajibBadge.vue */ "./resources/assets/js/components/wajibBadge.vue");
/* harmony import */ var _components_datePicker_vue__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/datePicker.vue */ "./resources/assets/js/components/datePicker.vue");
/* harmony import */ var _formKonsolidasi__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./formKonsolidasi */ "./resources/assets/js/views/laporanCu/formKonsolidasi.vue");
/* harmony import */ var _formCoa__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./formCoa */ "./resources/assets/js/views/laporanCu/formCoa.vue");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

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












/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    pageHeader: _components_pageHeader_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    message: _components_message_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
    formButton: _components_formButton_vue__WEBPACK_IMPORTED_MODULE_5__["default"],
    formInfo: _components_formInfo_vue__WEBPACK_IMPORTED_MODULE_6__["default"],
    infoIcon: _components_infoIcon_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    wajibBadge: _components_wajibBadge_vue__WEBPACK_IMPORTED_MODULE_8__["default"],
    DatePicker: _components_datePicker_vue__WEBPACK_IMPORTED_MODULE_9__["default"],
    formKonsolidasi: _formKonsolidasi__WEBPACK_IMPORTED_MODULE_10__["default"],
    formCoa: _formCoa__WEBPACK_IMPORTED_MODULE_11__["default"]
  },
  data: function data() {
    return {
      title: '',
      titleDesc: '',
      titleIcon: '',
      level2Title: 'Laporan CU',
      kelas: 'laporanCu',
      tabName: 'coa',
      idLaporanTp: '',
      isModelTp: false,
      submited: false,
      cleaveOption: {
        date: {
          date: true,
          datePattern: ['Y', 'm', 'd'],
          delimiter: '-'
        },
        numeric: {
          numeral: true,
          numeralThousandsGroupStyle: 'thousand',
          numeralDecimalScale: 2,
          numeralDecimalMark: ',',
          delimiter: '.'
        },
        numeric2: {
          numeral: true,
          numeralIntegerScale: 2,
          numeralDecimalScale: 2,
          numeralDecimalMark: ',',
          delimiter: '.'
        }
      }
    };
  },
  beforeRouteEnter: function beforeRouteEnter(to, from, next) {
    next(function (vm) {
      return vm.fetch();
    });
  },
  created: function created() {
    if (this.currentUser.id_cu != undefined) {
      this.checkProfileIdCU();
    }
  },
  watch: {
    // check route changes
    '$route': function $route(to, from) {
      this.fetch();
    },
    formStat: function formStat(value) {
      if (value == "success") {
        if (this.$route.meta.mode == 'edit' && this.modelCUStat == "success") {
          this.changeCu(this.form.id_cu);
          this.checkUser('update_laporan_cu', this.form.id_cu);
        } else if (this.$route.meta.mode == 'editTp' && this.modelCUStat == "success") {
          this.checkMetaEditTp();
          this.checkUser('update_laporan_tp', this.form.id_cu);
        } else if (this.$route.meta.mode !== 'edit') {
          if (this.currentUser.id_cu == 0) {
            this.form.id_cu = this.currentUser.id_cu;
          }
        }
      }
    },
    modelCUStat: function modelCUStat(value) {
      if (value == "success") {
        if (this.$route.meta.mode == 'edit' || this.$route.meta.mode == 'editDraft') {
          this.changeCu(this.form.id_cu);
        } else if (this.$route.meta.mode == 'editTp') {
          this.checkMetaEditTp();
        } else {
          if (this.currentUser.id_cu != 0) this.changeCu(this.currentUser.id_cu);
        }
      }
    },
    modelTpStat: function modelTpStat(value) {
      if (value == "success") {
        if (this.$route.meta.mode == 'edit') {
          this.form.id_tp = 'konsolidasi';
        } else if (this.$route.meta.mode == 'editTp') {
          this.changeTp(this.form.id_tp);
        }

        this.isModelTp = true;
      }
    },
    listLaporanTpDataStat: function listLaporanTpDataStat(value) {
      if (value == "success") {
        this.idLaporanTp = this.form.id;
      }
    }
  },
  methods: {
    checkProfileIdCU: function checkProfileIdCU() {
      if (this.currentUser.id_cu == 0) {
        if (this.modelCuStat != 'success') {
          this.$store.dispatch('cu/getHeader');
        }
      } else {
        this.form.id_cu = this.currentUser.id_cu;
        this.$store.dispatch('tp/getCu', this.currentUser.id_cu);
        this.isModelTp = true;
      }
    },
    fetch: function fetch() {
      if (this.$route.meta.mode === 'edit') {
        this.$store.dispatch(this.kelas + '/edit', this.$route.params.id);
        this.title = 'Ubah ' + this.level2Title;
        this.titleDesc = 'Mengubah ' + this.level2Title;
        this.titleIcon = 'icon-pencil5';
      } else if (this.$route.meta.mode === 'editTp') {
        this.$store.dispatch(this.kelas + '/editTp', this.$route.params.id);
        this.title = 'Ubah ' + this.level2Title;
        this.titleDesc = 'Mengubah ' + this.level2Title;
        this.titleIcon = 'icon-pencil5';
      } else if (this.$route.meta.mode === 'editDraft') {
        this.$store.dispatch(this.kelas + '/editDraft', this.$route.params.id);
        this.level2Title = 'Laporan Cu [Draft]';
        this.title = 'Ubah ' + this.level2Title;
        this.titleDesc = 'Mengubah ' + this.level2Title;
        this.titleIcon = 'icon-pencil5';
      } else if (this.$route.meta.mode === 'editTpDraft') {
        this.$store.dispatch(this.kelas + '/editTpDraft', this.$route.params.id);
        this.level2Title = 'Laporan Tp [Draft]';
        this.title = 'Ubah ' + this.level2Title;
        this.titleDesc = 'Mengubah ' + this.level2Title;
        this.titleIcon = 'icon-pencil5';
      } else {
        this.title = 'Tambah ' + this.level2Title;
        this.titleDesc = 'Menambah ' + this.level2Title;
        this.titleIcon = 'icon-plus3';
        this.$store.dispatch(this.kelas + '/create');
      }

      this.fetchCu();
      this.$store.dispatch('coa/get');
    },
    fetchCu: function fetchCu() {
      if (this.modelCuStat != 'success') {
        this.$store.dispatch('cu/getHeader');
      }
    },
    checkMetaEditTp: function checkMetaEditTp() {
      this.form.id_cu = this.form.tp.id_cu;
      this.changeCu(this.form.tp.id_cu);
      this.$store.dispatch('laporanTp/listLaporanTp', [this.form.tp.id_cu, this.form.periode]);
    },
    changeTab: function changeTab(value) {
      this.tabName = value;
    },
    changeCu: function changeCu(id) {
      this.$store.dispatch('tp/getCu', id);

      var model = lodash__WEBPACK_IMPORTED_MODULE_1___default.a.find(this.modelCU, function (o) {
        return o.id == id;
      });

      this.form.no_ba = model ? model.no_ba : '';
    },
    changeTp: function changeTp(id) {
      if (id == 0) {
        this.form.no_tp = 0;
      } else {
        var model = lodash__WEBPACK_IMPORTED_MODULE_1___default.a.find(this.modelTp, function (o) {
          return o.id == id;
        });

        this.form.no_tp = model.no_tp;
      }
    },
    changeLaporanTp: function changeLaporanTp(id, tp) {
      this.$router.push({
        name: 'laporanTpEdit',
        params: {
          id: id
        }
      });
    },
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
    back: function back() {
      if (this.$route.meta.mode === 'edit') {
        this.$router.push({
          name: this.kelas + 'Cu',
          params: {
            cu: this.form.id_cu,
            tp: 'konsolidasi'
          }
        });
      } else if (this.$route.meta.mode === 'editTp') {
        this.$router.push({
          name: this.kelas + 'Cu',
          params: {
            cu: this.form.id_cu,
            tp: this.form.id_tp
          }
        });
      } else if (this.$route.meta.mode === 'editDraft') {
        this.$router.push({
          name: 'laporanCuDraft'
        });
      } else if (this.$route.meta.mode === 'editTpDraft') {
        this.$router.push({
          name: 'laporanTpDraft'
        });
      } else {
        if (this.currentUser.id_cu == 0) {
          if (this.form.id_cu == 0) {
            this.$router.push({
              name: this.kelas
            });
          } else {
            if (this.form.id_tp == 0) {
              this.$router.push({
                name: this.kelas + 'Cu',
                params: {
                  cu: this.form.id_cu,
                  tp: 0
                }
              });
            } else {
              this.$router.push({
                name: this.kelas + 'Cu',
                params: {
                  cu: this.form.id_cu,
                  tp: this.form.id_tp
                }
              });
            }
          }
        } else {
          this.$router.push({
            name: this.kelas + 'Cu',
            params: {
              cu: this.currentUser.id_cu,
              tp: this.form.id_tp
            }
          });
        }
      }
    }
  },
  computed: _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('auth', {
    currentUser: 'currentUser'
  })), Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('laporanCu', {
    form: 'data',
    formStat: 'dataStat',
    rules: 'rules',
    options: 'options',
    updateResponse: 'update',
    updateStat: 'updateStat'
  })), Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('laporanTp', {
    listLaporanTpData: 'data2S',
    listLaporanTpDataStat: 'dataStat2S'
  })), Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('cu', {
    modelCU: 'headerDataS',
    modelCUStat: 'headerDataStatS'
  })), Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('tp', {
    modelTp: 'dataS',
    modelTpStat: 'dataStatS'
  })), Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('coa', {
    modelCoa: 'dataS2',
    modelCoaStat: 'dataStatS2'
  }))
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/laporanCu/formCoa.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/views/laporanCu/formCoa.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_infoIcon_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/infoIcon.vue */ "./resources/assets/js/components/infoIcon.vue");
/* harmony import */ var _components_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/modal */ "./resources/assets/js/components/modal.vue");
/* harmony import */ var _components_message_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/message.vue */ "./resources/assets/js/components/message.vue");
/* harmony import */ var _components_formButton_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/formButton.vue */ "./resources/assets/js/components/formButton.vue");
/* harmony import */ var _components_formInfo_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/formInfo.vue */ "./resources/assets/js/components/formInfo.vue");
/* harmony import */ var vue_cleave_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vue-cleave-component */ "./node_modules/vue-cleave-component/dist/vue-cleave.min.js");
/* harmony import */ var vue_cleave_component__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(vue_cleave_component__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_wajibBadge_vue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/wajibBadge.vue */ "./resources/assets/js/components/wajibBadge.vue");
/* harmony import */ var _components_datePicker_vue__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/datePicker.vue */ "./resources/assets/js/components/datePicker.vue");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  props: ['modelCoa', 'modelCoaStat'],
  components: {
    message: _components_message_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
    formButton: _components_formButton_vue__WEBPACK_IMPORTED_MODULE_5__["default"],
    formInfo: _components_formInfo_vue__WEBPACK_IMPORTED_MODULE_6__["default"],
    Cleave: vue_cleave_component__WEBPACK_IMPORTED_MODULE_7___default.a,
    infoIcon: _components_infoIcon_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    wajibBadge: _components_wajibBadge_vue__WEBPACK_IMPORTED_MODULE_8__["default"],
    DatePicker: _components_datePicker_vue__WEBPACK_IMPORTED_MODULE_9__["default"],
    appModal: _components_modal__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  data: function data() {
    return {
      kelas: 'laporanCu',
      idLaporanTp: '',
      isModelTp: false,
      modalShow: false,
      modalState: '',
      modalTitle: '',
      modalColor: '',
      modalContent: '',
      modelCoaTransformed: {},
      submited: false,
      formCoa: {},
      cleaveOption: {
        date: {
          date: true,
          datePattern: ['Y', 'm', 'd'],
          delimiter: '-'
        },
        numeric: {
          numeral: true,
          numeralThousandsGroupStyle: 'thousand',
          numeralDecimalScale: 2,
          numeralDecimalMark: ',',
          delimiter: '.'
        },
        numeric2: {
          numeral: true,
          numeralIntegerScale: 2,
          numeralDecimalScale: 2,
          numeralDecimalMark: ',',
          delimiter: '.'
        }
      }
    };
  },
  created: function created() {
    for (var _i = 0, _Object$entries = Object.entries(this.modelCoa); _i < _Object$entries.length; _i++) {
      var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
          key = _Object$entries$_i[0],
          itemCoaInduk = _Object$entries$_i[1];

      this.modelCoaTransformed[itemCoaInduk.id] = itemCoaInduk; // this.formCoa[itemCoaInduk.id] = 0;
    }
  },
  watch: {
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
    save: function save() {
      var _this = this;

      if (this.currentUser.id_cu != 0) {
        this.form.id_cu = this.currentUser.id_cu;
      }

      this.$validator.validateAll('form').then(function (result) {
        if (result) {
          if (_this.$route.meta.mode === 'edit') {
            _this.$store.dispatch(_this.kelas + '/update', [_this.$route.params.id, _this.form]);
          } else if (_this.$route.meta.mode === 'editTp') {
            _this.$store.dispatch(_this.kelas + '/updateTp', [_this.$route.params.id, _this.form]);
          } else if (_this.$route.meta.mode === 'editDraft') {
            _this.$store.dispatch(_this.kelas + '/updateDraft', [_this.$route.params.id, _this.form]);
          } else if (_this.$route.meta.mode === 'editTpDraft') {
            _this.$store.dispatch(_this.kelas + '/updateTpDraft', [_this.$route.params.id, _this.form]);
          } else {
            if (_this.form.id_tp == 'konsolidasi') {
              _this.$store.dispatch(_this.kelas + '/store', _this.form);
            } else {
              _this.$store.dispatch(_this.kelas + '/storeTp', _this.form);
            }
          }

          _this.submited = false;
        } else {
          window.scrollTo(0, 0);
          _this.submited = true;
        }
      });
    },
    calculate: function calculate(id, increment) {
      // for (const [key, itemCoaInduk] of Object.entries(this.modelCoa)) {
      // 	if(itemCoaInduk.tipe == 'G'){
      // 		this.form[itemCoaInduk.kode] = 0;
      // 	}
      // 	for (const [key, itemCoaAnak] of Object.entries(this.modelCoa)) {
      // 		if(itemCoaInduk.id == itemCoaAnak.id_induk){
      // 			this.form[itemCoaInduk.kode] = Number(this.form[itemCoaInduk.kode]) + Number(this.form[itemCoaAnak.kode]);
      // 			console.log(itemCoaInduk.kode, this.form[itemCoaInduk.kode]);
      // 		}
      // 	}
      // };
      // if(id == 0)return;
      // this.form[id] = increment;
      console.log(id, increment);
      this.calculateInduk(this.modelCoaTransformed[id].id_induk, increment);
    },
    calculateInduk: function calculateInduk(id, increment) {
      if (id == 0) return;
      var induk = Number(this.formCoa[id]);
      induk += Number(increment);
      this.formCoa[id] = induk;
      this.calculateInduk(this.modelCoaTransformed[id].id_induk, increment);
    },
    back: function back() {
      this.$emit('back');
    },
    modalTutup: function modalTutup() {
      if (this.updateStat === 'success') {
        this.back();
      }

      this.modalShow = false;
      this.submitedKategori = false;
      this.submitedPenulis = false;
    },
    modalBackgroundClick: function modalBackgroundClick() {
      if (this.modalState === 'success') {
        this.modalTutup;
      } else if (this.modalState === 'loading') {// do nothing
      } else {
        this.modalShow = false;
      }
    }
  },
  computed: _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('auth', {
    currentUser: 'currentUser'
  })), Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('laporanCu', {
    form: 'data',
    formStat: 'dataStat',
    rules: 'rules',
    options: 'options',
    updateResponse: 'update',
    updateStat: 'updateStat'
  })), Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('laporanTp', {
    listLaporanTpData: 'data2S',
    listLaporanTpDataStat: 'dataStat2S'
  })), Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('cu', {
    modelCU: 'headerDataS',
    modelCUStat: 'headerDataStatS'
  })), Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('tp', {
    modelTp: 'dataS',
    modelTpStat: 'dataStatS'
  }))
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/laporanCu/formKonsolidasi.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/views/laporanCu/formKonsolidasi.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_infoIcon_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/infoIcon.vue */ "./resources/assets/js/components/infoIcon.vue");
/* harmony import */ var _components_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/modal */ "./resources/assets/js/components/modal.vue");
/* harmony import */ var _components_message_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/message.vue */ "./resources/assets/js/components/message.vue");
/* harmony import */ var _components_formButton_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/formButton.vue */ "./resources/assets/js/components/formButton.vue");
/* harmony import */ var _components_formInfo_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/formInfo.vue */ "./resources/assets/js/components/formInfo.vue");
/* harmony import */ var vue_cleave_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vue-cleave-component */ "./node_modules/vue-cleave-component/dist/vue-cleave.min.js");
/* harmony import */ var vue_cleave_component__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(vue_cleave_component__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_wajibBadge_vue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/wajibBadge.vue */ "./resources/assets/js/components/wajibBadge.vue");
/* harmony import */ var _components_datePicker_vue__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/datePicker.vue */ "./resources/assets/js/components/datePicker.vue");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    message: _components_message_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
    formButton: _components_formButton_vue__WEBPACK_IMPORTED_MODULE_5__["default"],
    formInfo: _components_formInfo_vue__WEBPACK_IMPORTED_MODULE_6__["default"],
    Cleave: vue_cleave_component__WEBPACK_IMPORTED_MODULE_7___default.a,
    infoIcon: _components_infoIcon_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    wajibBadge: _components_wajibBadge_vue__WEBPACK_IMPORTED_MODULE_8__["default"],
    DatePicker: _components_datePicker_vue__WEBPACK_IMPORTED_MODULE_9__["default"],
    appModal: _components_modal__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  data: function data() {
    return {
      kelas: 'laporanCu',
      idLaporanTp: '',
      isModelTp: false,
      modalShow: false,
      modalState: '',
      modalTitle: '',
      modalColor: '',
      modalContent: '',
      submited: false,
      cleaveOption: {
        date: {
          date: true,
          datePattern: ['Y', 'm', 'd'],
          delimiter: '-'
        },
        numeric: {
          numeral: true,
          numeralThousandsGroupStyle: 'thousand',
          numeralDecimalScale: 2,
          numeralDecimalMark: ',',
          delimiter: '.'
        },
        numeric2: {
          numeral: true,
          numeralIntegerScale: 2,
          numeralDecimalScale: 2,
          numeralDecimalMark: ',',
          delimiter: '.'
        }
      }
    };
  },
  watch: {
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
    save: function save() {
      var _this = this;

      if (this.currentUser.id_cu != 0) {
        this.form.id_cu = this.currentUser.id_cu;
      }

      this.$validator.validateAll('form').then(function (result) {
        if (result) {
          if (_this.$route.meta.mode === 'edit') {
            _this.$store.dispatch(_this.kelas + '/update', [_this.$route.params.id, _this.form]);
          } else if (_this.$route.meta.mode === 'editTp') {
            _this.$store.dispatch(_this.kelas + '/updateTp', [_this.$route.params.id, _this.form]);
          } else if (_this.$route.meta.mode === 'editDraft') {
            _this.$store.dispatch(_this.kelas + '/updateDraft', [_this.$route.params.id, _this.form]);
          } else if (_this.$route.meta.mode === 'editTpDraft') {
            _this.$store.dispatch(_this.kelas + '/updateTpDraft', [_this.$route.params.id, _this.form]);
          } else {
            if (_this.form.id_tp == 'konsolidasi') {
              _this.$store.dispatch(_this.kelas + '/store', _this.form);
            } else {
              _this.$store.dispatch(_this.kelas + '/storeTp', _this.form);
            }
          }

          _this.submited = false;
        } else {
          window.scrollTo(0, 0);
          _this.submited = true;
        }
      });
    },
    back: function back() {
      this.$emit('back');
    },
    modalTutup: function modalTutup() {
      if (this.updateStat === 'success') {
        this.back();
      }

      this.modalShow = false;
      this.submitedKategori = false;
      this.submitedPenulis = false;
    },
    modalBackgroundClick: function modalBackgroundClick() {
      if (this.modalState === 'success') {
        this.modalTutup;
      } else if (this.modalState === 'loading') {// do nothing
      } else {
        this.modalShow = false;
      }
    }
  },
  computed: _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('auth', {
    currentUser: 'currentUser'
  })), Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('laporanCu', {
    form: 'data',
    formStat: 'dataStat',
    rules: 'rules',
    options: 'options',
    updateResponse: 'update',
    updateStat: 'updateStat'
  })), Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('laporanTp', {
    listLaporanTpData: 'data2S',
    listLaporanTpDataStat: 'dataStat2S'
  })), Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('cu', {
    modelCU: 'headerDataS',
    modelCUStat: 'headerDataStatS'
  })), Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('tp', {
    modelTp: 'dataS',
    modelTpStat: 'dataStatS'
  }))
});

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
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("DatePicker", {
    staticClass: "w-100",
    attrs: {
      format: "DD-MM-YYYY",
      "value-type": "format",
      placeholder: "Pilih Tanggal",
      editable: true
    },
    on: { change: _vm.onChanged },
    model: {
      value: _vm.time,
      callback: function($$v) {
        _vm.time = $$v
      },
      expression: "time"
    }
  })
}
var staticRenderFns = []
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
var render = function() {
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
          expression: "message"
        }
      ],
      staticClass: "icon-info22 d-none d-sm-block"
    }),
    _vm._v(" "),
    _c("small", { staticClass: "text-muted d-block d-sm-none" }, [
      _c("i", [_vm._v(_vm._s(_vm.message))])
    ])
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
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm._m(0)
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticStyle: { display: "inline-block" } }, [
      _c(
        "span",
        { staticClass: "badge bg-danger-400 align-self-center ml-auto" },
        [_vm._v("Wajib diisi")]
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/laporanCu/form.vue?vue&type=template&id=4ce6b9c9&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/views/laporanCu/form.vue?vue&type=template&id=4ce6b9c9& ***!
  \*******************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
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
          level: 2,
          level2Title: _vm.level2Title
        },
        on: {
          level2Back: function($event) {
            return _vm.back()
          }
        }
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
                      title: "Oops, terjadi kesalahan",
                      errorItem: _vm.errors.items
                    }
                  })
                : _vm._e(),
              _vm._v(" "),
              _vm.$route.meta.mode == "editTp"
                ? _c("div", { staticClass: "card" }, [
                    _c("div", { staticClass: "card-body" }, [
                      _vm._m(0),
                      _vm._v(" "),
                      _c("div", { staticClass: "input-group" }, [
                        _vm._m(1),
                        _vm._v(" "),
                        _c(
                          "select",
                          {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.idLaporanTp,
                                expression: "idLaporanTp"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: {
                              name: "idLaporanTp",
                              "data-width": "100%",
                              disabled: _vm.listLaporanTpDataStat === "loading"
                            },
                            on: {
                              change: [
                                function($event) {
                                  var $$selectedVal = Array.prototype.filter
                                    .call($event.target.options, function(o) {
                                      return o.selected
                                    })
                                    .map(function(o) {
                                      var val =
                                        "_value" in o ? o._value : o.value
                                      return val
                                    })
                                  _vm.idLaporanTp = $event.target.multiple
                                    ? $$selectedVal
                                    : $$selectedVal[0]
                                },
                                function($event) {
                                  return _vm.changeLaporanTp(
                                    $event.target.value
                                  )
                                }
                              ]
                            }
                          },
                          [
                            _c(
                              "option",
                              { attrs: { disabled: "", value: "" } },
                              [
                                _vm.listLaporanTpDataStat === "loading"
                                  ? _c("span", [_vm._v("Mohon tunggu...")])
                                  : _c("span", [
                                      _vm._v("Silahkan pilih laporan")
                                    ])
                              ]
                            ),
                            _vm._v(" "),
                            _vm._l(_vm.listLaporanTpData, function(tp, index) {
                              return _c(
                                "option",
                                { key: index, domProps: { value: tp.id } },
                                [_vm._v(_vm._s(tp.tp.name))]
                              )
                            })
                          ],
                          2
                        )
                      ])
                    ])
                  ])
                : _vm._e(),
              _vm._v(" "),
              _c("div", { staticClass: "card" }, [
                _c("div", { staticClass: "card-body" }, [
                  _c("div", { staticClass: "row" }, [
                    _vm.currentUser.id_cu === 0
                      ? _c("div", { staticClass: "col-md-4" }, [
                          _c(
                            "div",
                            {
                              staticClass: "form-group",
                              class: {
                                "has-error": _vm.errors.has("form.id_cu")
                              }
                            },
                            [
                              _c(
                                "h5",
                                {
                                  class: {
                                    "text-danger": _vm.errors.has("form.id_cu")
                                  }
                                },
                                [
                                  _vm.errors.has("form.id_cu")
                                    ? _c("i", { staticClass: "icon-cross2" })
                                    : _vm._e(),
                                  _vm._v("\n\t\t\t\t\t\t\t\t\t\tCU: "),
                                  _c("wajib-badge")
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "select",
                                {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.form.id_cu,
                                      expression: "form.id_cu"
                                    },
                                    {
                                      name: "validate",
                                      rawName: "v-validate",
                                      value: "required",
                                      expression: "'required'"
                                    }
                                  ],
                                  staticClass: "form-control",
                                  attrs: {
                                    name: "id_cu",
                                    "data-width": "100%",
                                    "data-vv-as": "CU",
                                    disabled: _vm.modelCU.length === 0
                                  },
                                  on: {
                                    change: [
                                      function($event) {
                                        var $$selectedVal = Array.prototype.filter
                                          .call($event.target.options, function(
                                            o
                                          ) {
                                            return o.selected
                                          })
                                          .map(function(o) {
                                            var val =
                                              "_value" in o ? o._value : o.value
                                            return val
                                          })
                                        _vm.$set(
                                          _vm.form,
                                          "id_cu",
                                          $event.target.multiple
                                            ? $$selectedVal
                                            : $$selectedVal[0]
                                        )
                                      },
                                      function($event) {
                                        return _vm.changeCu($event.target.value)
                                      }
                                    ]
                                  }
                                },
                                [
                                  _c(
                                    "option",
                                    { attrs: { disabled: "", value: "0" } },
                                    [_vm._v("Silahkan pilih CU")]
                                  ),
                                  _vm._v(" "),
                                  _vm._l(_vm.modelCU, function(cu, index) {
                                    return _c(
                                      "option",
                                      {
                                        key: index,
                                        domProps: { value: cu.id }
                                      },
                                      [_vm._v(_vm._s(cu.name))]
                                    )
                                  })
                                ],
                                2
                              ),
                              _vm._v(" "),
                              _vm.errors.has("form.id_cu")
                                ? _c(
                                    "small",
                                    { staticClass: "text-muted text-danger" },
                                    [
                                      _c("i", {
                                        staticClass: "icon-arrow-small-right"
                                      }),
                                      _vm._v(
                                        " " +
                                          _vm._s(
                                            _vm.errors.first("form.id_cu")
                                          ) +
                                          "\n\t\t\t\t\t\t\t\t\t"
                                      )
                                    ]
                                  )
                                : _c("small", { staticClass: "text-muted" }, [
                                    _vm._v(" ")
                                  ])
                            ]
                          )
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-4" }, [
                      _c(
                        "div",
                        {
                          staticClass: "form-group",
                          class: { "has-error": _vm.errors.has("form.id_tp") }
                        },
                        [
                          _c(
                            "h5",
                            {
                              class: {
                                "text-danger": _vm.errors.has("form.id_tp")
                              }
                            },
                            [
                              _vm.errors.has("form.id_tp")
                                ? _c("i", { staticClass: "icon-cross2" })
                                : _vm._e(),
                              _vm._v("\n\t\t\t\t\t\t\t\t\t\tTP: "),
                              _c("wajib-badge")
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "select",
                            {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.form.id_tp,
                                  expression: "form.id_tp"
                                },
                                {
                                  name: "validate",
                                  rawName: "v-validate",
                                  value: "required",
                                  expression: "'required'"
                                }
                              ],
                              staticClass: "form-control",
                              attrs: {
                                name: "id_tp",
                                "data-width": "100%",
                                "data-vv-as": "TP",
                                disabled: !_vm.isModelTp
                              },
                              on: {
                                change: [
                                  function($event) {
                                    var $$selectedVal = Array.prototype.filter
                                      .call($event.target.options, function(o) {
                                        return o.selected
                                      })
                                      .map(function(o) {
                                        var val =
                                          "_value" in o ? o._value : o.value
                                        return val
                                      })
                                    _vm.$set(
                                      _vm.form,
                                      "id_tp",
                                      $event.target.multiple
                                        ? $$selectedVal
                                        : $$selectedVal[0]
                                    )
                                  },
                                  function($event) {
                                    return _vm.changeTp($event.target.value)
                                  }
                                ]
                              }
                            },
                            [
                              _c(
                                "option",
                                { attrs: { disabled: "", value: "" } },
                                [
                                  _vm.modelTpStat === "loading"
                                    ? _c("span", [_vm._v("Mohon tunggu...")])
                                    : _c("span", [
                                        _vm._v("Silahkan pilih TP/KP")
                                      ])
                                ]
                              ),
                              _vm._v(" "),
                              _vm.$route.meta.mode != "editTp"
                                ? _c(
                                    "option",
                                    { attrs: { value: "konsolidasi" } },
                                    [_vm._v("Konsolidasi")]
                                  )
                                : _vm._e(),
                              _vm._v(" "),
                              _c(
                                "option",
                                { attrs: { disabled: "", value: "" } },
                                [_vm._v("----------------")]
                              ),
                              _vm._v(" "),
                              _vm._l(_vm.modelTp, function(tp, index) {
                                return _c(
                                  "option",
                                  { key: index, domProps: { value: tp.id } },
                                  [_vm._v(_vm._s(tp.name))]
                                )
                              })
                            ],
                            2
                          ),
                          _vm._v(" "),
                          _vm.errors.has("form.id_tp")
                            ? _c(
                                "small",
                                { staticClass: "text-muted text-danger" },
                                [
                                  _c("i", {
                                    staticClass: "icon-arrow-small-right"
                                  }),
                                  _vm._v(
                                    " " +
                                      _vm._s(_vm.errors.first("form.id_tp")) +
                                      "\n\t\t\t\t\t\t\t\t\t"
                                  )
                                ]
                              )
                            : _c("small", { staticClass: "text-muted" }, [
                                _vm._v(" ")
                              ])
                        ]
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-4" }, [
                      _c(
                        "div",
                        {
                          staticClass: "form-group",
                          class: { "has-error": _vm.errors.has("form.periode") }
                        },
                        [
                          _c(
                            "h5",
                            {
                              class: {
                                "text-danger": _vm.errors.has("form.periode")
                              }
                            },
                            [
                              _vm.errors.has("form.periode")
                                ? _c("i", {
                                    staticClass: "icon-cross2 d-none d-sm-block"
                                  })
                                : _vm._e(),
                              _vm._v("\n\t\t\t\t\t\t\t\t\t\tPeriode: "),
                              _c("wajib-badge")
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("date-picker", {
                            attrs: { defaultDate: _vm.form.periode },
                            on: {
                              dateSelected: function($event) {
                                _vm.form.periode = $event
                              }
                            }
                          }),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.form.periode,
                                expression: "form.periode"
                              },
                              {
                                name: "show",
                                rawName: "v-show",
                                value: false,
                                expression: "false"
                              },
                              {
                                name: "validate",
                                rawName: "v-validate",
                                value: "required",
                                expression: "'required'"
                              }
                            ],
                            attrs: { name: "periode", "data-vv-as": "Periode" },
                            domProps: { value: _vm.form.periode },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.form,
                                  "periode",
                                  $event.target.value
                                )
                              }
                            }
                          }),
                          _vm._v(" "),
                          _vm.errors.has("form.periode")
                            ? _c(
                                "small",
                                { staticClass: "text-muted text-danger" },
                                [
                                  _c("i", {
                                    staticClass: "icon-arrow-small-right"
                                  }),
                                  _vm._v(
                                    " " +
                                      _vm._s(_vm.errors.first("form.periode")) +
                                      "\n\t\t\t\t\t\t\t\t\t"
                                  )
                                ]
                              )
                            : _c("small", { staticClass: "text-muted" }, [
                                _vm._v(" ")
                              ])
                        ],
                        1
                      )
                    ])
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("form-konsolidasi", { on: { back: _vm.back } })
            ],
            1
          )
        ])
      ])
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "alert bg-info alert-styled-left" }, [
      _c("p", [
        _vm._v(
          "Laporan ini merupakan bagian dari laporan konsolidasi, maka anda dapat melihat/mengubah laporan TP lain yang juga termasuk dalam laporan konsolidasi pada CU ini sesuai periode laporannya."
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "input-group-prepend" }, [
      _c("span", { staticClass: "input-group-text" }, [_vm._v("Pilih Laporan")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/laporanCu/formCoa.vue?vue&type=template&id=5f8de89c&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/views/laporanCu/formCoa.vue?vue&type=template&id=5f8de89c& ***!
  \**********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _vm.errors.any("form") && _vm.submited
        ? _c("message", {
            attrs: {
              title: "Oops, terjadi kesalahan",
              errorItem: _vm.errors.items
            }
          })
        : _vm._e(),
      _vm._v(" "),
      _c(
        "form",
        {
          attrs: { enctype: "multipart/form-data", "data-vv-scope": "form" },
          on: {
            submit: function($event) {
              $event.preventDefault()
              return _vm.save($event)
            }
          }
        },
        [
          _c("div", { staticClass: "timeline timeline-left" }, [
            _c(
              "div",
              { staticClass: "timeline-container" },
              _vm._l(_vm.modelCoa, function(formCoaInduk, index) {
                return _c("div", { key: index, staticClass: "timeline-row" }, [
                  formCoaInduk.tipe == "G"
                    ? _c("div", { staticClass: "timeline-icon" }, [
                        _c("div", { staticClass: "bg-white" }, [
                          _vm._v(
                            "\n\t\t\t\t\t\t" +
                              _vm._s(formCoaInduk.kode.charAt(0)) +
                              "\n\t\t\t\t\t"
                          )
                        ])
                      ])
                    : _vm._e(),
                  _vm._v(" "),
                  formCoaInduk.tipe == "G"
                    ? _c("div", { staticClass: "card card-body" }, [
                        _c(
                          "div",
                          { staticClass: "row" },
                          [
                            _c("div", { staticClass: "col-sm-6 col-lg-10" }, [
                              _c("div", { staticClass: "input-group" }, [
                                _c(
                                  "div",
                                  { staticClass: "input-group-prepend" },
                                  [
                                    _c(
                                      "span",
                                      { staticClass: "input-group-text" },
                                      [_vm._v(_vm._s(formCoaInduk.kode))]
                                    )
                                  ]
                                ),
                                _vm._v(" "),
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: formCoaInduk.name,
                                      expression: "formCoaInduk.name"
                                    }
                                  ],
                                  staticClass: "form-control",
                                  attrs: {
                                    type: "text",
                                    name: formCoaInduk.name,
                                    readonly: ""
                                  },
                                  domProps: { value: formCoaInduk.name },
                                  on: {
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        formCoaInduk,
                                        "name",
                                        $event.target.value
                                      )
                                    }
                                  }
                                })
                              ])
                            ]),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "col-sm-6 col-lg-2 text-right" },
                              [
                                _c("cleave", {
                                  staticClass: "form-control",
                                  attrs: {
                                    name: formCoaInduk.name,
                                    options: _vm.cleaveOption.numeric,
                                    readonly: ""
                                  },
                                  model: {
                                    value: _vm.formCoa[formCoaInduk.id],
                                    callback: function($$v) {
                                      _vm.$set(
                                        _vm.formCoa,
                                        formCoaInduk.id,
                                        $$v
                                      )
                                    },
                                    expression: "formCoa[formCoaInduk.id]"
                                  }
                                })
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _vm._l(_vm.modelCoa, function(formCoaAnak, index) {
                              return [
                                formCoaAnak.id_induk == formCoaInduk.id &&
                                formCoaAnak.tipe == "P"
                                  ? _c(
                                      "div",
                                      {
                                        key: index,
                                        staticClass: "col-lg-4 col-md-6"
                                      },
                                      [
                                        _c(
                                          "div",
                                          {
                                            key: index,
                                            staticClass:
                                              "card card-body mt-3 mb-0"
                                          },
                                          [
                                            _c("h5", [
                                              _c(
                                                "span",
                                                {
                                                  staticClass:
                                                    "badge bg-blue-400 align-self-center ml-auto mr-1"
                                                },
                                                [
                                                  _vm._v(
                                                    _vm._s(formCoaAnak.kode)
                                                  )
                                                ]
                                              ),
                                              _vm._v(
                                                " " +
                                                  _vm._s(formCoaAnak.name) +
                                                  "\n\t\t\t\t\t\t\t\t\t"
                                              )
                                            ]),
                                            _vm._v(" "),
                                            _c("cleave", {
                                              staticClass: "form-control",
                                              attrs: {
                                                name: formCoaAnak.name,
                                                options:
                                                  _vm.cleaveOption.numeric,
                                                placeholder:
                                                  "Silahkan masukkan " +
                                                  formCoaAnak.name
                                              },
                                              nativeOn: {
                                                blur: function($event) {
                                                  return _vm.calculate(
                                                    formCoaAnak.id,
                                                    _vm.formCoa[formCoaAnak.id]
                                                  )
                                                }
                                              },
                                              model: {
                                                value:
                                                  _vm.formCoa[formCoaAnak.id],
                                                callback: function($$v) {
                                                  _vm.$set(
                                                    _vm.formCoa,
                                                    formCoaAnak.id,
                                                    $$v
                                                  )
                                                },
                                                expression:
                                                  "formCoa[formCoaAnak.id]"
                                              }
                                            })
                                          ],
                                          1
                                        )
                                      ]
                                    )
                                  : _vm._e()
                              ]
                            })
                          ],
                          2
                        )
                      ])
                    : _vm._e()
                ])
              }),
              0
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "card mt-2" }, [
            _c("div", { staticClass: "card-body" }, [
              _c("div", { staticClass: "row" }, [
                _c(
                  "div",
                  { staticClass: "col-md-6" },
                  [
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-light btn-block pb-2",
                        attrs: { type: "button" },
                        on: {
                          click: function($event) {
                            $event.preventDefault()
                            return _vm.calculate(5, 500)
                          }
                        }
                      },
                      [_vm._v(" calculate")]
                    ),
                    _vm._v(" "),
                    _c("h5", [_vm._v("Inflasi")]),
                    _vm._v(" "),
                    _c("cleave", {
                      staticClass: "form-control",
                      attrs: {
                        options: _vm.cleaveOption.numeric2,
                        placeholder: "Silahkan masukkan jumlah inflasi"
                      },
                      model: {
                        value: _vm.form.laju_inflasi,
                        callback: function($$v) {
                          _vm.$set(_vm.form, "laju_inflasi", $$v)
                        },
                        expression: "form.laju_inflasi"
                      }
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "col-md-6" },
                  [
                    _c("h5", [_vm._v("Harga Pasar")]),
                    _vm._v(" "),
                    _c("cleave", {
                      staticClass: "form-control",
                      attrs: {
                        options: _vm.cleaveOption.numeric2,
                        placeholder: "Silahkan masukkan harga pasar"
                      },
                      model: {
                        value: _vm.form.harga_pasar,
                        callback: function($$v) {
                          _vm.$set(_vm.form, "harga_pasar", $$v)
                        },
                        expression: "form.harga_pasar"
                      }
                    })
                  ],
                  1
                )
              ])
            ])
          ]),
          _vm._v(" "),
          _c("form-info"),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "card card-body" },
            [
              _c("form-button", {
                attrs: { cancelState: "methods", formValidation: "form" },
                on: { cancelClick: _vm.back }
              })
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c("app-modal", {
        attrs: {
          show: _vm.modalShow,
          state: _vm.modalState,
          title: _vm.modalTitle,
          content: _vm.modalContent,
          color: _vm.modalColor
        },
        on: {
          batal: _vm.modalTutup,
          tutup: _vm.modalTutup,
          successOk: _vm.modalTutup,
          failOk: _vm.modalTutup,
          backgroundClick: _vm.modalBackgroundClick
        }
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/laporanCu/formKonsolidasi.vue?vue&type=template&id=1e7175c6&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/views/laporanCu/formKonsolidasi.vue?vue&type=template&id=1e7175c6& ***!
  \******************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _vm.errors.any("form") && _vm.submited
        ? _c("message", {
            attrs: {
              title: "Oops, terjadi kesalahan",
              errorItem: _vm.errors.items
            }
          })
        : _vm._e(),
      _vm._v(" "),
      _c(
        "form",
        {
          attrs: { enctype: "multipart/form-data", "data-vv-scope": "form" },
          on: {
            submit: function($event) {
              $event.preventDefault()
              return _vm.save($event)
            }
          }
        },
        [
          _c("div", { staticClass: "card" }, [
            _c("div", { staticClass: "card-body" }, [
              _c("div", { staticClass: "row" }, [
                _c("div", { staticClass: "col-md-4" }, [
                  _c(
                    "div",
                    { staticClass: "form-group" },
                    [
                      _c("h5", [_vm._v("Lelaki Biasa")]),
                      _vm._v(" "),
                      _c("cleave", {
                        staticClass: "form-control",
                        attrs: {
                          options: _vm.cleaveOption.numeric,
                          placeholder: "Silahkan masukkan jumlah lelaki biasa"
                        },
                        model: {
                          value: _vm.form.l_biasa,
                          callback: function($$v) {
                            _vm.$set(_vm.form, "l_biasa", $$v)
                          },
                          expression: "form.l_biasa"
                        }
                      }),
                      _vm._v(" "),
                      _c("small", { staticClass: "text-muted" }, [_vm._v(" ")])
                    ],
                    1
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-md-4" }, [
                  _c(
                    "div",
                    { staticClass: "form-group" },
                    [
                      _c("h5", [_vm._v("Lelaki Luar Biasa")]),
                      _vm._v(" "),
                      _c("cleave", {
                        staticClass: "form-control",
                        attrs: {
                          options: _vm.cleaveOption.numeric,
                          placeholder:
                            "Silahkan masukkan jumlah lelaki luar biasa"
                        },
                        model: {
                          value: _vm.form.l_lbiasa,
                          callback: function($$v) {
                            _vm.$set(_vm.form, "l_lbiasa", $$v)
                          },
                          expression: "form.l_lbiasa"
                        }
                      }),
                      _vm._v(" "),
                      _c("small", { staticClass: "text-muted" }, [_vm._v(" ")])
                    ],
                    1
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-md-4" }, [
                  _c(
                    "div",
                    { staticClass: "form-group" },
                    [
                      _c("h5", [_vm._v("Perempuan Biasa")]),
                      _vm._v(" "),
                      _c("cleave", {
                        staticClass: "form-control",
                        attrs: {
                          options: _vm.cleaveOption.numeric,
                          placeholder:
                            "Silahkan masukkan jumlah perempuan biasa"
                        },
                        model: {
                          value: _vm.form.p_biasa,
                          callback: function($$v) {
                            _vm.$set(_vm.form, "p_biasa", $$v)
                          },
                          expression: "form.p_biasa"
                        }
                      }),
                      _vm._v(" "),
                      _c("small", { staticClass: "text-muted" }, [_vm._v(" ")])
                    ],
                    1
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-md-4" }, [
                  _c(
                    "div",
                    { staticClass: "form-group" },
                    [
                      _c("h5", [_vm._v("Perempuan Luar Biasa")]),
                      _vm._v(" "),
                      _c("cleave", {
                        staticClass: "form-control",
                        attrs: {
                          options: _vm.cleaveOption.numeric,
                          placeholder:
                            "Silahkan masukkan jumlah anggota perempuan luar biasa"
                        },
                        model: {
                          value: _vm.form.p_lbiasa,
                          callback: function($$v) {
                            _vm.$set(_vm.form, "p_lbiasa", $$v)
                          },
                          expression: "form.p_lbiasa"
                        }
                      }),
                      _vm._v(" "),
                      _c("small", { staticClass: "text-muted" }, [_vm._v(" ")])
                    ],
                    1
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-md-4" }, [
                  _c(
                    "div",
                    { staticClass: "form-group" },
                    [
                      _c(
                        "h5",
                        [
                          _vm._v("Total Anggota Tahun Lalu "),
                          _c("info-icon", {
                            attrs: {
                              message:
                                "Anggota tahun lalu dari bulan yang sama dengan periode laporan ini."
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("cleave", {
                        staticClass: "form-control",
                        attrs: {
                          options: _vm.cleaveOption.numeric,
                          placeholder:
                            "Silahkan masukkan total anggota tahun lalu"
                        },
                        model: {
                          value: _vm.form.total_anggota_lalu,
                          callback: function($$v) {
                            _vm.$set(_vm.form, "total_anggota_lalu", $$v)
                          },
                          expression: "form.total_anggota_lalu"
                        }
                      }),
                      _vm._v(" "),
                      _c("small", { staticClass: "text-muted" }, [_vm._v(" ")])
                    ],
                    1
                  )
                ]),
                _vm._v(" "),
                _vm._m(0),
                _vm._v(" "),
                _c("div", { staticClass: "col-md-4" }, [
                  _c(
                    "div",
                    { staticClass: "form-group" },
                    [
                      _c("h5", [_vm._v("Aset")]),
                      _vm._v(" "),
                      _c("cleave", {
                        staticClass: "form-control",
                        attrs: {
                          options: _vm.cleaveOption.numeric,
                          placeholder: "Silahkan masukkan jumlah aset"
                        },
                        model: {
                          value: _vm.form.aset,
                          callback: function($$v) {
                            _vm.$set(_vm.form, "aset", $$v)
                          },
                          expression: "form.aset"
                        }
                      }),
                      _vm._v(" "),
                      _c("small", { staticClass: "text-muted" }, [_vm._v(" ")])
                    ],
                    1
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-md-4" }, [
                  _c(
                    "div",
                    { staticClass: "form-group" },
                    [
                      _c(
                        "h5",
                        [
                          _vm._v("Aset Tahun Lalu "),
                          _c("info-icon", {
                            attrs: {
                              message:
                                "Aset tahun lalu dari periode laporan ini."
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("cleave", {
                        staticClass: "form-control",
                        attrs: {
                          options: _vm.cleaveOption.numeric,
                          placeholder: "Silahkan masukkan jumlah aset"
                        },
                        model: {
                          value: _vm.form.aset_lalu,
                          callback: function($$v) {
                            _vm.$set(_vm.form, "aset_lalu", $$v)
                          },
                          expression: "form.aset_lalu"
                        }
                      }),
                      _vm._v(" "),
                      _c("small", { staticClass: "text-muted" }, [_vm._v(" ")])
                    ],
                    1
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-md-4" }, [
                  _c(
                    "div",
                    { staticClass: "form-group" },
                    [
                      _c(
                        "h5",
                        [
                          _vm._v("Aset Masalah "),
                          _c("info-icon", {
                            attrs: {
                              message:
                                "Nilai dari investasi CU Primer yang sudah tidak menghasilkan dan atau saldo dari piutang anggota yang sudah berhenti tetapi simpanannya tidak tersedia untuk pelunasan piutang tersebut."
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("cleave", {
                        staticClass: "form-control",
                        attrs: {
                          options: _vm.cleaveOption.numeric,
                          placeholder: "Silahkan masukkan jumlah aset masalah"
                        },
                        model: {
                          value: _vm.form.aset_masalah,
                          callback: function($$v) {
                            _vm.$set(_vm.form, "aset_masalah", $$v)
                          },
                          expression: "form.aset_masalah"
                        }
                      }),
                      _vm._v(" "),
                      _c("small", { staticClass: "text-muted" }, [_vm._v(" ")])
                    ],
                    1
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-md-4" }, [
                  _c(
                    "div",
                    { staticClass: "form-group" },
                    [
                      _c("h5", [_vm._v("Aset Tidak Menghasilkan")]),
                      _vm._v(" "),
                      _c("cleave", {
                        staticClass: "form-control",
                        attrs: {
                          options: _vm.cleaveOption.numeric,
                          placeholder:
                            "Silahkan masukkan jumlah aset tidak menghasilkan"
                        },
                        model: {
                          value: _vm.form.aset_tidak_menghasilkan,
                          callback: function($$v) {
                            _vm.$set(_vm.form, "aset_tidak_menghasilkan", $$v)
                          },
                          expression: "form.aset_tidak_menghasilkan"
                        }
                      }),
                      _vm._v(" "),
                      _c("small", { staticClass: "text-muted" }, [_vm._v(" ")])
                    ],
                    1
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-md-4" }, [
                  _c(
                    "div",
                    { staticClass: "form-group" },
                    [
                      _c("h5", [_vm._v("Aset Likuid Tidak Menghasilkan")]),
                      _vm._v(" "),
                      _c("cleave", {
                        staticClass: "form-control",
                        attrs: {
                          options: _vm.cleaveOption.numeric,
                          placeholder:
                            "Silahkan masukkan jumlah aset tidak menghasilkan"
                        },
                        model: {
                          value: _vm.form.aset_likuid_tidak_menghasilkan,
                          callback: function($$v) {
                            _vm.$set(
                              _vm.form,
                              "aset_likuid_tidak_menghasilkan",
                              $$v
                            )
                          },
                          expression: "form.aset_likuid_tidak_menghasilkan"
                        }
                      }),
                      _vm._v(" "),
                      _c("small", { staticClass: "text-muted" }, [_vm._v(" ")])
                    ],
                    1
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-md-4" }, [
                  _c(
                    "div",
                    { staticClass: "form-group" },
                    [
                      _c("h5", [_vm._v("Investasi Likuid")]),
                      _vm._v(" "),
                      _c("cleave", {
                        staticClass: "form-control",
                        attrs: {
                          options: _vm.cleaveOption.numeric,
                          placeholder:
                            "Silahkan masukkan jumlah investasi likuid"
                        },
                        model: {
                          value: _vm.form.investasi_likuid,
                          callback: function($$v) {
                            _vm.$set(_vm.form, "investasi_likuid", $$v)
                          },
                          expression: "form.investasi_likuid"
                        }
                      }),
                      _vm._v(" "),
                      _c("small", { staticClass: "text-muted" }, [_vm._v(" ")])
                    ],
                    1
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-md-4" }, [
                  _c(
                    "div",
                    { staticClass: "form-group" },
                    [
                      _c("h5", [_vm._v("Aktiva Lancar")]),
                      _vm._v(" "),
                      _c("cleave", {
                        staticClass: "form-control",
                        attrs: {
                          options: _vm.cleaveOption.numeric,
                          placeholder: "Silahkan masukkan jumlah aktiva lancar"
                        },
                        model: {
                          value: _vm.form.aktiva_lancar,
                          callback: function($$v) {
                            _vm.$set(_vm.form, "aktiva_lancar", $$v)
                          },
                          expression: "form.aktiva_lancar"
                        }
                      }),
                      _vm._v(" "),
                      _c("small", { staticClass: "text-muted" }, [_vm._v(" ")])
                    ],
                    1
                  )
                ]),
                _vm._v(" "),
                _vm._m(1),
                _vm._v(" "),
                _c("div", { staticClass: "col-md-4" }, [
                  _c(
                    "div",
                    { staticClass: "form-group" },
                    [
                      _c("h5", [_vm._v("Simp. Saham")]),
                      _vm._v(" "),
                      _c("cleave", {
                        staticClass: "form-control",
                        attrs: {
                          options: _vm.cleaveOption.numeric,
                          placeholder: "Silahkan masukkan jumlah simp. saham"
                        },
                        model: {
                          value: _vm.form.simpanan_saham,
                          callback: function($$v) {
                            _vm.$set(_vm.form, "simpanan_saham", $$v)
                          },
                          expression: "form.simpanan_saham"
                        }
                      }),
                      _vm._v(" "),
                      _c("small", { staticClass: "text-muted" }, [_vm._v(" ")])
                    ],
                    1
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-md-4" }, [
                  _c(
                    "div",
                    { staticClass: "form-group" },
                    [
                      _c("h5", [_vm._v("Simp. Non Saham (Unggulan)")]),
                      _vm._v(" "),
                      _c("cleave", {
                        staticClass: "form-control",
                        attrs: {
                          options: _vm.cleaveOption.numeric,
                          placeholder:
                            "Silahkan masukkan jumlah simp. non saham (unggulan)"
                        },
                        model: {
                          value: _vm.form.nonsaham_unggulan,
                          callback: function($$v) {
                            _vm.$set(_vm.form, "nonsaham_unggulan", $$v)
                          },
                          expression: "form.nonsaham_unggulan"
                        }
                      }),
                      _vm._v(" "),
                      _c("small", { staticClass: "text-muted" }, [_vm._v(" ")])
                    ],
                    1
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-md-4" }, [
                  _c(
                    "div",
                    { staticClass: "form-group" },
                    [
                      _c(
                        "h5",
                        [
                          _vm._v("Simp. Non Saham (Harian & Deposito) "),
                          _c("info-icon", {
                            attrs: {
                              message:
                                "Seluruh simpanan non-saham (Harian & Deposito) kecuali simpanan unggulan."
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("cleave", {
                        staticClass: "form-control",
                        attrs: {
                          options: _vm.cleaveOption.numeric,
                          placeholder:
                            "Silahkan masukkan jumlah simp. non saham (harian & deposito)"
                        },
                        model: {
                          value: _vm.form.nonsaham_harian,
                          callback: function($$v) {
                            _vm.$set(_vm.form, "nonsaham_harian", $$v)
                          },
                          expression: "form.nonsaham_harian"
                        }
                      }),
                      _vm._v(" "),
                      _c("small", { staticClass: "text-muted" }, [_vm._v(" ")])
                    ],
                    1
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-md-4" }, [
                  _c(
                    "div",
                    { staticClass: "form-group" },
                    [
                      _c(
                        "h5",
                        [
                          _vm._v("Simp. Saham Tahun Lalu "),
                          _c("info-icon", {
                            attrs: {
                              message:
                                "Simpanan saham tahun lalu dari bulan yang sama/bulan ini."
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("cleave", {
                        staticClass: "form-control",
                        attrs: {
                          options: _vm.cleaveOption.numeric,
                          placeholder:
                            "Silahkan masukkan jumlah simp. saham tahun lalu"
                        },
                        model: {
                          value: _vm.form.simpanan_saham_lalu,
                          callback: function($$v) {
                            _vm.$set(_vm.form, "simpanan_saham_lalu", $$v)
                          },
                          expression: "form.simpanan_saham_lalu"
                        }
                      }),
                      _vm._v(" "),
                      _c("small", { staticClass: "text-muted" }, [_vm._v(" ")])
                    ],
                    1
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-md-4" }, [
                  _c(
                    "div",
                    { staticClass: "form-group" },
                    [
                      _c(
                        "h5",
                        [
                          _vm._v("Simp. Saham Tahun Lalu Bulan Des "),
                          _c("info-icon", {
                            attrs: {
                              message:
                                "Simpanan saham bulan desember tahun lalu."
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("cleave", {
                        staticClass: "form-control",
                        attrs: {
                          options: _vm.cleaveOption.numeric,
                          placeholder:
                            "Silahkan masukkan jumlah simp. saham tahun lalu bulan desember"
                        },
                        model: {
                          value: _vm.form.simpanan_saham_des,
                          callback: function($$v) {
                            _vm.$set(_vm.form, "simpanan_saham_des", $$v)
                          },
                          expression: "form.simpanan_saham_des"
                        }
                      }),
                      _vm._v(" "),
                      _c("small", { staticClass: "text-muted" }, [_vm._v(" ")])
                    ],
                    1
                  )
                ]),
                _vm._v(" "),
                _vm._m(2),
                _vm._v(" "),
                _c("div", { staticClass: "col-md-4" }, [
                  _c(
                    "div",
                    { staticClass: "form-group" },
                    [
                      _c("h5", [_vm._v("Hutang SPD")]),
                      _vm._v(" "),
                      _c("cleave", {
                        staticClass: "form-control",
                        attrs: {
                          options: _vm.cleaveOption.numeric,
                          placeholder: "Silahkan masukkan jumlah hutang spd"
                        },
                        model: {
                          value: _vm.form.hutang_spd,
                          callback: function($$v) {
                            _vm.$set(_vm.form, "hutang_spd", $$v)
                          },
                          expression: "form.hutang_spd"
                        }
                      }),
                      _vm._v(" "),
                      _c("small", { staticClass: "text-muted" }, [_vm._v(" ")])
                    ],
                    1
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-md-4" }, [
                  _c(
                    "div",
                    { staticClass: "form-group" },
                    [
                      _c(
                        "h5",
                        [
                          _vm._v("Total Hutang Pihak Ke-3 "),
                          _c("info-icon", {
                            attrs: {
                              message: "Hutang di PUSKOPCUINA dan lembaga lain."
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("cleave", {
                        staticClass: "form-control",
                        attrs: {
                          options: _vm.cleaveOption.numeric,
                          placeholder:
                            "Silahkan masukkan total hutang pihak ke-3"
                        },
                        model: {
                          value: _vm.form.total_hutang_pihak3,
                          callback: function($$v) {
                            _vm.$set(_vm.form, "total_hutang_pihak3", $$v)
                          },
                          expression: "form.total_hutang_pihak3"
                        }
                      }),
                      _vm._v(" "),
                      _c("small", { staticClass: "text-muted" }, [_vm._v(" ")])
                    ],
                    1
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-md-4" }, [
                  _c(
                    "div",
                    { staticClass: "form-group" },
                    [
                      _c("h5", [_vm._v("Hutang Tidak Berbiaya < 30 Hari ")]),
                      _vm._v(" "),
                      _c("cleave", {
                        staticClass: "form-control",
                        attrs: {
                          options: _vm.cleaveOption.numeric,
                          placeholder:
                            "Silahkan masukkan jumlah hutang tidak berbiaya < 30 hari"
                        },
                        model: {
                          value: _vm.form.hutang_tidak_berbiaya_30hari,
                          callback: function($$v) {
                            _vm.$set(
                              _vm.form,
                              "hutang_tidak_berbiaya_30hari",
                              $$v
                            )
                          },
                          expression: "form.hutang_tidak_berbiaya_30hari"
                        }
                      }),
                      _vm._v(" "),
                      _c("small", { staticClass: "text-muted" }, [_vm._v(" ")])
                    ],
                    1
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-md-4" }, [
                  _c(
                    "div",
                    { staticClass: "form-group" },
                    [
                      _c("h5", [_vm._v("Piutang Beredar ")]),
                      _vm._v(" "),
                      _c("cleave", {
                        staticClass: "form-control",
                        attrs: {
                          options: _vm.cleaveOption.numeric,
                          placeholder:
                            "Silahkan masukkan jumlah piutang beredar"
                        },
                        model: {
                          value: _vm.form.piutang_beredar,
                          callback: function($$v) {
                            _vm.$set(_vm.form, "piutang_beredar", $$v)
                          },
                          expression: "form.piutang_beredar"
                        }
                      }),
                      _vm._v(" "),
                      _c("small", { staticClass: "text-muted" }, [_vm._v(" ")])
                    ],
                    1
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-md-4" }, [
                  _c(
                    "div",
                    { staticClass: "form-group" },
                    [
                      _c("h5", [_vm._v("Piutang Lalai 1-12 Bulan ")]),
                      _vm._v(" "),
                      _c("cleave", {
                        staticClass: "form-control",
                        attrs: {
                          options: _vm.cleaveOption.numeric,
                          placeholder:
                            "Silahkan masukkan jumlah piutang lalai 1-12 bulan"
                        },
                        model: {
                          value: _vm.form.piutang_lalai_1bulan,
                          callback: function($$v) {
                            _vm.$set(_vm.form, "piutang_lalai_1bulan", $$v)
                          },
                          expression: "form.piutang_lalai_1bulan"
                        }
                      }),
                      _vm._v(" "),
                      _c("small", { staticClass: "text-muted" }, [_vm._v(" ")])
                    ],
                    1
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-md-4" }, [
                  _c(
                    "div",
                    { staticClass: "form-group" },
                    [
                      _c("h5", [_vm._v("Piutang Lalai > 12 Bulan")]),
                      _vm._v(" "),
                      _c("cleave", {
                        staticClass: "form-control",
                        attrs: {
                          options: _vm.cleaveOption.numeric,
                          placeholder:
                            "Silahkan masukkan jumlah piutang lalai > 12 bulan"
                        },
                        model: {
                          value: _vm.form.piutang_lalai_12bulan,
                          callback: function($$v) {
                            _vm.$set(_vm.form, "piutang_lalai_12bulan", $$v)
                          },
                          expression: "form.piutang_lalai_12bulan"
                        }
                      }),
                      _vm._v(" "),
                      _c("small", { staticClass: "text-muted" }, [_vm._v(" ")])
                    ],
                    1
                  )
                ]),
                _vm._v(" "),
                _vm._m(3),
                _vm._v(" "),
                _c("div", { staticClass: "col-md-4" }, [
                  _c(
                    "div",
                    { staticClass: "form-group" },
                    [
                      _c("h5", [_vm._v("Cadangan Umum")]),
                      _vm._v(" "),
                      _c("cleave", {
                        staticClass: "form-control",
                        attrs: {
                          options: _vm.cleaveOption.numeric,
                          placeholder: "Silahkan masukkan jumlah cadangan umum"
                        },
                        model: {
                          value: _vm.form.dcu,
                          callback: function($$v) {
                            _vm.$set(_vm.form, "dcu", $$v)
                          },
                          expression: "form.dcu"
                        }
                      }),
                      _vm._v(" "),
                      _c("small", { staticClass: "text-muted" }, [_vm._v(" ")])
                    ],
                    1
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-md-4" }, [
                  _c(
                    "div",
                    { staticClass: "form-group" },
                    [
                      _c("h5", [_vm._v("Cadangan Resiko")]),
                      _vm._v(" "),
                      _c("cleave", {
                        staticClass: "form-control",
                        attrs: {
                          options: _vm.cleaveOption.numeric,
                          placeholder:
                            "Silahkan masukkan jumlah cadangan resiko"
                        },
                        model: {
                          value: _vm.form.dcr,
                          callback: function($$v) {
                            _vm.$set(_vm.form, "dcr", $$v)
                          },
                          expression: "form.dcr"
                        }
                      }),
                      _vm._v(" "),
                      _c("small", { staticClass: "text-muted" }, [_vm._v(" ")])
                    ],
                    1
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-md-4" }, [
                  _c(
                    "div",
                    { staticClass: "form-group" },
                    [
                      _c("h5", [_vm._v("Dana Gedung")]),
                      _vm._v(" "),
                      _c("cleave", {
                        staticClass: "form-control",
                        attrs: {
                          options: _vm.cleaveOption.numeric,
                          placeholder: "Silahkan masukkan jumlah dana gedung"
                        },
                        model: {
                          value: _vm.form.dana_gedung,
                          callback: function($$v) {
                            _vm.$set(_vm.form, "dana_gedung", $$v)
                          },
                          expression: "form.dana_gedung"
                        }
                      }),
                      _vm._v(" "),
                      _c("small", { staticClass: "text-muted" }, [_vm._v(" ")])
                    ],
                    1
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-md-4" }, [
                  _c(
                    "div",
                    { staticClass: "form-group" },
                    [
                      _c("h5", [_vm._v("Donasi")]),
                      _vm._v(" "),
                      _c("cleave", {
                        staticClass: "form-control",
                        attrs: {
                          options: _vm.cleaveOption.numeric,
                          placeholder: "Silahkan masukkan jumlah donasi"
                        },
                        model: {
                          value: _vm.form.donasi,
                          callback: function($$v) {
                            _vm.$set(_vm.form, "donasi", $$v)
                          },
                          expression: "form.donasi"
                        }
                      }),
                      _vm._v(" "),
                      _c("small", { staticClass: "text-muted" }, [_vm._v(" ")])
                    ],
                    1
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-md-4" }, [
                  _c(
                    "div",
                    { staticClass: "form-group" },
                    [
                      _c("h5", [_vm._v("Beban Peny. Cadangan Resiko")]),
                      _vm._v(" "),
                      _c("cleave", {
                        staticClass: "form-control",
                        attrs: {
                          options: _vm.cleaveOption.numeric,
                          placeholder:
                            "Silahkan masukkan jumlah beban peny. cadangan resiko"
                        },
                        model: {
                          value: _vm.form.beban_penyisihan_dcr,
                          callback: function($$v) {
                            _vm.$set(_vm.form, "beban_penyisihan_dcr", $$v)
                          },
                          expression: "form.beban_penyisihan_dcr"
                        }
                      }),
                      _vm._v(" "),
                      _c("small", { staticClass: "text-muted" }, [_vm._v(" ")])
                    ],
                    1
                  )
                ]),
                _vm._v(" "),
                _vm._m(4),
                _vm._v(" "),
                _c("div", { staticClass: "col-md-4" }, [
                  _c(
                    "div",
                    { staticClass: "form-group" },
                    [
                      _c("h5", [_vm._v("Total pendapatan")]),
                      _vm._v(" "),
                      _c("cleave", {
                        staticClass: "form-control",
                        attrs: {
                          options: _vm.cleaveOption.numeric,
                          placeholder: "Silahkan masukkan total pendapatan"
                        },
                        model: {
                          value: _vm.form.total_pendapatan,
                          callback: function($$v) {
                            _vm.$set(_vm.form, "total_pendapatan", $$v)
                          },
                          expression: "form.total_pendapatan"
                        }
                      }),
                      _vm._v(" "),
                      _c("small", { staticClass: "text-muted" }, [_vm._v(" ")])
                    ],
                    1
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-md-4" }, [
                  _c(
                    "div",
                    { staticClass: "form-group" },
                    [
                      _c("h5", [_vm._v("Total Biaya")]),
                      _vm._v(" "),
                      _c("cleave", {
                        staticClass: "form-control",
                        attrs: {
                          options: _vm.cleaveOption.numeric,
                          placeholder: "Silahkan masukkan total biaya"
                        },
                        model: {
                          value: _vm.form.total_biaya,
                          callback: function($$v) {
                            _vm.$set(_vm.form, "total_biaya", $$v)
                          },
                          expression: "form.total_biaya"
                        }
                      }),
                      _vm._v(" "),
                      _c("small", { staticClass: "text-muted" }, [_vm._v(" ")])
                    ],
                    1
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-md-4" }, [
                  _c(
                    "div",
                    { staticClass: "form-group" },
                    [
                      _c("h5", [_vm._v("Sisa Hasil Usaha (SHU)")]),
                      _vm._v(" "),
                      _c("cleave", {
                        staticClass: "form-control",
                        attrs: {
                          options: _vm.cleaveOption.numeric,
                          placeholder:
                            "Silahkan masukkan jumlah sisa hasil usaha (SHU)"
                        },
                        model: {
                          value: _vm.form.shu,
                          callback: function($$v) {
                            _vm.$set(_vm.form, "shu", $$v)
                          },
                          expression: "form.shu"
                        }
                      }),
                      _vm._v(" "),
                      _c("small", { staticClass: "text-muted" }, [_vm._v(" ")])
                    ],
                    1
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-md-4" }, [
                  _c(
                    "div",
                    { staticClass: "form-group" },
                    [
                      _c("h5", [_vm._v("Sisa Hasil Usaha (SHU) Tahun Lalu")]),
                      _vm._v(" "),
                      _c("cleave", {
                        staticClass: "form-control",
                        attrs: {
                          options: _vm.cleaveOption.numeric,
                          placeholder:
                            "Silahkan masukkan jumlah sisa hasil usaha (SHU) tahun lalu"
                        },
                        model: {
                          value: _vm.form.shu_lalu,
                          callback: function($$v) {
                            _vm.$set(_vm.form, "shu_lalu", $$v)
                          },
                          expression: "form.shu_lalu"
                        }
                      }),
                      _vm._v(" "),
                      _c("small", { staticClass: "text-muted" }, [_vm._v(" ")])
                    ],
                    1
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-md-4" }, [
                  _c(
                    "div",
                    { staticClass: "form-group" },
                    [
                      _c("h5", [_vm._v("BJS Saham")]),
                      _vm._v(" "),
                      _c("cleave", {
                        staticClass: "form-control",
                        attrs: {
                          options: _vm.cleaveOption.numeric,
                          placeholder: "Silahkan masukkan jumlah bsj saham"
                        },
                        model: {
                          value: _vm.form.bjs_saham,
                          callback: function($$v) {
                            _vm.$set(_vm.form, "bjs_saham", $$v)
                          },
                          expression: "form.bjs_saham"
                        }
                      }),
                      _vm._v(" "),
                      _c("small", { staticClass: "text-muted" }, [_vm._v(" ")])
                    ],
                    1
                  )
                ]),
                _vm._v(" "),
                _vm._m(5),
                _vm._v(" "),
                _c("div", { staticClass: "col-md-4" }, [
                  _c(
                    "div",
                    { staticClass: "form-group" },
                    [
                      _c("h5", [_vm._v("Inflasi")]),
                      _vm._v(" "),
                      _c("cleave", {
                        staticClass: "form-control",
                        attrs: {
                          options: _vm.cleaveOption.numeric2,
                          placeholder: "Silahkan masukkan jumlah inflasi"
                        },
                        model: {
                          value: _vm.form.laju_inflasi,
                          callback: function($$v) {
                            _vm.$set(_vm.form, "laju_inflasi", $$v)
                          },
                          expression: "form.laju_inflasi"
                        }
                      }),
                      _vm._v(" "),
                      _c("small", { staticClass: "text-muted" }, [_vm._v(" ")])
                    ],
                    1
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-md-4" }, [
                  _c(
                    "div",
                    { staticClass: "form-group" },
                    [
                      _c("h5", [_vm._v("Harga Pasar")]),
                      _vm._v(" "),
                      _c("cleave", {
                        staticClass: "form-control",
                        attrs: {
                          options: _vm.cleaveOption.numeric2,
                          placeholder: "Silahkan masukkan harga pasar"
                        },
                        model: {
                          value: _vm.form.harga_pasar,
                          callback: function($$v) {
                            _vm.$set(_vm.form, "harga_pasar", $$v)
                          },
                          expression: "form.harga_pasar"
                        }
                      }),
                      _vm._v(" "),
                      _c("small", { staticClass: "text-muted" }, [_vm._v(" ")])
                    ],
                    1
                  )
                ])
              ])
            ])
          ]),
          _vm._v(" "),
          _c("form-info"),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "card card-body" },
            [
              _c("form-button", {
                attrs: { cancelState: "methods", formValidation: "form" },
                on: { cancelClick: _vm.back }
              })
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c("app-modal", {
        attrs: {
          show: _vm.modalShow,
          state: _vm.modalState,
          title: _vm.modalTitle,
          content: _vm.modalContent,
          color: _vm.modalColor
        },
        on: {
          batal: _vm.modalTutup,
          tutup: _vm.modalTutup,
          successOk: _vm.modalTutup,
          failOk: _vm.modalTutup,
          backgroundClick: _vm.modalBackgroundClick
        }
      })
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-12" }, [_c("hr")])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-12" }, [_c("hr")])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-12" }, [_c("hr")])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-12" }, [_c("hr")])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-12" }, [_c("hr")])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-12" }, [_c("hr")])
  }
]
render._withStripped = true



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
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
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

/***/ "./resources/assets/js/views/laporanCu/form.vue":
/*!******************************************************!*\
  !*** ./resources/assets/js/views/laporanCu/form.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _form_vue_vue_type_template_id_4ce6b9c9___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form.vue?vue&type=template&id=4ce6b9c9& */ "./resources/assets/js/views/laporanCu/form.vue?vue&type=template&id=4ce6b9c9&");
/* harmony import */ var _form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form.vue?vue&type=script&lang=js& */ "./resources/assets/js/views/laporanCu/form.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _form_vue_vue_type_template_id_4ce6b9c9___WEBPACK_IMPORTED_MODULE_0__["render"],
  _form_vue_vue_type_template_id_4ce6b9c9___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/views/laporanCu/form.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/views/laporanCu/form.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/assets/js/views/laporanCu/form.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./form.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/laporanCu/form.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/views/laporanCu/form.vue?vue&type=template&id=4ce6b9c9&":
/*!*************************************************************************************!*\
  !*** ./resources/assets/js/views/laporanCu/form.vue?vue&type=template&id=4ce6b9c9& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_template_id_4ce6b9c9___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./form.vue?vue&type=template&id=4ce6b9c9& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/laporanCu/form.vue?vue&type=template&id=4ce6b9c9&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_template_id_4ce6b9c9___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_template_id_4ce6b9c9___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/assets/js/views/laporanCu/formCoa.vue":
/*!*********************************************************!*\
  !*** ./resources/assets/js/views/laporanCu/formCoa.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _formCoa_vue_vue_type_template_id_5f8de89c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./formCoa.vue?vue&type=template&id=5f8de89c& */ "./resources/assets/js/views/laporanCu/formCoa.vue?vue&type=template&id=5f8de89c&");
/* harmony import */ var _formCoa_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./formCoa.vue?vue&type=script&lang=js& */ "./resources/assets/js/views/laporanCu/formCoa.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _formCoa_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _formCoa_vue_vue_type_template_id_5f8de89c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _formCoa_vue_vue_type_template_id_5f8de89c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/views/laporanCu/formCoa.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/views/laporanCu/formCoa.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/assets/js/views/laporanCu/formCoa.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_formCoa_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./formCoa.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/laporanCu/formCoa.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_formCoa_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/views/laporanCu/formCoa.vue?vue&type=template&id=5f8de89c&":
/*!****************************************************************************************!*\
  !*** ./resources/assets/js/views/laporanCu/formCoa.vue?vue&type=template&id=5f8de89c& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_formCoa_vue_vue_type_template_id_5f8de89c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./formCoa.vue?vue&type=template&id=5f8de89c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/laporanCu/formCoa.vue?vue&type=template&id=5f8de89c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_formCoa_vue_vue_type_template_id_5f8de89c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_formCoa_vue_vue_type_template_id_5f8de89c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/assets/js/views/laporanCu/formKonsolidasi.vue":
/*!*****************************************************************!*\
  !*** ./resources/assets/js/views/laporanCu/formKonsolidasi.vue ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _formKonsolidasi_vue_vue_type_template_id_1e7175c6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./formKonsolidasi.vue?vue&type=template&id=1e7175c6& */ "./resources/assets/js/views/laporanCu/formKonsolidasi.vue?vue&type=template&id=1e7175c6&");
/* harmony import */ var _formKonsolidasi_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./formKonsolidasi.vue?vue&type=script&lang=js& */ "./resources/assets/js/views/laporanCu/formKonsolidasi.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _formKonsolidasi_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _formKonsolidasi_vue_vue_type_template_id_1e7175c6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _formKonsolidasi_vue_vue_type_template_id_1e7175c6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/views/laporanCu/formKonsolidasi.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/views/laporanCu/formKonsolidasi.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** ./resources/assets/js/views/laporanCu/formKonsolidasi.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_formKonsolidasi_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./formKonsolidasi.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/laporanCu/formKonsolidasi.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_formKonsolidasi_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/views/laporanCu/formKonsolidasi.vue?vue&type=template&id=1e7175c6&":
/*!************************************************************************************************!*\
  !*** ./resources/assets/js/views/laporanCu/formKonsolidasi.vue?vue&type=template&id=1e7175c6& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_formKonsolidasi_vue_vue_type_template_id_1e7175c6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./formKonsolidasi.vue?vue&type=template&id=1e7175c6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/laporanCu/formKonsolidasi.vue?vue&type=template&id=1e7175c6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_formKonsolidasi_vue_vue_type_template_id_1e7175c6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_formKonsolidasi_vue_vue_type_template_id_1e7175c6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);