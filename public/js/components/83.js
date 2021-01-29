(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[83],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/anggotaCu/create.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/views/anggotaCu/create.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _helpers_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../helpers/form */ "./resources/assets/js/helpers/form.js");
/* harmony import */ var _components_ImageUpload_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/ImageUpload.vue */ "./resources/assets/js/components/ImageUpload.vue");
/* harmony import */ var _components_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/modal */ "./resources/assets/js/components/modal.vue");
/* harmony import */ var _components_message_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/message.vue */ "./resources/assets/js/components/message.vue");
/* harmony import */ var _formCu_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./formCu.vue */ "./resources/assets/js/views/anggotaCu/formCu.vue");
/* harmony import */ var _components_formButton_vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/formButton.vue */ "./resources/assets/js/components/formButton.vue");
/* harmony import */ var _components_formInfo_vue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/formInfo.vue */ "./resources/assets/js/components/formInfo.vue");
/* harmony import */ var vue_cleave_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vue-cleave-component */ "./node_modules/vue-cleave-component/dist/vue-cleave.min.js");
/* harmony import */ var vue_cleave_component__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(vue_cleave_component__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_datatable_vue__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/datatable.vue */ "./resources/assets/js/components/datatable.vue");
/* harmony import */ var _components_checkValue_vue__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/checkValue.vue */ "./resources/assets/js/components/checkValue.vue");
/* harmony import */ var _components_infoIcon_vue__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/infoIcon.vue */ "./resources/assets/js/components/infoIcon.vue");
/* harmony import */ var _components_wajibBadge_vue__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../components/wajibBadge.vue */ "./resources/assets/js/components/wajibBadge.vue");
/* harmony import */ var _components_identitas_vue__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../components/identitas.vue */ "./resources/assets/js/components/identitas.vue");
/* harmony import */ var _components_datePicker_vue__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../components/datePicker.vue */ "./resources/assets/js/components/datePicker.vue");
var _components;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  props: ['mode', 'nik', 'statusNIK'],
  components: (_components = {
    appModal: _components_modal__WEBPACK_IMPORTED_MODULE_4__["default"],
    appImageUpload: _components_ImageUpload_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    message: _components_message_vue__WEBPACK_IMPORTED_MODULE_5__["default"],
    formCu: _formCu_vue__WEBPACK_IMPORTED_MODULE_6__["default"],
    formButton: _components_formButton_vue__WEBPACK_IMPORTED_MODULE_7__["default"],
    formInfo: _components_formInfo_vue__WEBPACK_IMPORTED_MODULE_8__["default"],
    Cleave: vue_cleave_component__WEBPACK_IMPORTED_MODULE_9___default.a,
    dataTable: _components_datatable_vue__WEBPACK_IMPORTED_MODULE_10__["default"],
    checkValue: _components_checkValue_vue__WEBPACK_IMPORTED_MODULE_11__["default"]
  }, _defineProperty(_components, "appImageUpload", _components_ImageUpload_vue__WEBPACK_IMPORTED_MODULE_3__["default"]), _defineProperty(_components, "infoIcon", _components_infoIcon_vue__WEBPACK_IMPORTED_MODULE_12__["default"]), _defineProperty(_components, "wajibBadge", _components_wajibBadge_vue__WEBPACK_IMPORTED_MODULE_13__["default"]), _defineProperty(_components, "identitas", _components_identitas_vue__WEBPACK_IMPORTED_MODULE_14__["default"]), _defineProperty(_components, "DatePicker", _components_datePicker_vue__WEBPACK_IMPORTED_MODULE_15__["default"]), _components),
  data: function data() {
    return {
      kelas: 'anggotaCu',
      confirmIcon: 'icon-arrow-right14',
      confirmTitle: 'Lanjut ke produk',
      cleaveOption: {
        date: {
          date: true,
          datePattern: ['Y', 'm', 'd'],
          delimiter: '-'
        },
        number24: {
          numeral: true,
          numeralIntegerScale: 24,
          numeralDecimalScale: 0,
          stripLeadingZeroes: false,
          delimiter: ''
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
      formCuMode: '',
      selectedItemCu: '',
      itemDataCu: [],
      itemDataCuStat: 'success',
      columnDataCu: [{
        title: 'No.'
      }, {
        title: 'CU'
      }, {
        title: 'TP/KP'
      }, {
        title: 'No. BA'
      }, {
        title: 'Keterangan'
      }, {
        title: 'Tgl. Jadi Anggota'
      }, {
        title: 'Keterangan Keluar'
      }, {
        title: 'Tgl. Keluar Anggota'
      }],
      modalShow: false,
      modalState: '',
      modalTitle: '',
      modalColor: '',
      modalContent: '',
      submited: false
    };
  },
  created: function created() {
    if (this.mode == 'edit' || this.mode == 'edit_jalinan') {
      this.confirmIcon = 'icon-floppy-disk';
      this.confirmTitle = 'Simpan';
    }

    if (this.currentUser.id_cu == 0) {
      if (this.modelCuStat != 'success') {
        this.$store.dispatch('cu/getHeader');
      }
    } else {
      this.fetchTp(this.currentUser.id_cu);
    }

    this.form.id_cu = this.currentUser.id_cu;
    this.$store.dispatch('pekerjaan/get');
    this.$store.dispatch('suku/get');
    this.$store.dispatch('provinces/get');
    this.fetch();
  },
  watch: {
    formStat: function formStat(value) {
      if (value == 'success') {
        if (this.mode == 'edit' || this.mode == 'create_edit' || this.mode == 'create_jalinan_edit' || this.mode == 'edit_jalinan') {
          this.fetchCu();
        } else {
          this.form.tp_id == '';
        }

        if (this.mode == 'create_jalinan') {
          this.form.nik = this.$route.params.nik;
          this.form.statusNIK = this.$route.params.statusNIK;
        }
      } else if (value == 'fail') {
        this.form.tp_id == '';
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
      if (this.mode == 'create_new') {
        this.form.nik = this.nik;
      } else if (this.mode == 'create_jalinan') {
        this.$store.dispatch(this.kelas + '/create');
      } else if (this.mode == 'create_old') {
        this.fetchCu();
      }

      if (this.mode == 'edit' || this.mode == 'create_edit' || this.mode == 'create_jalinan_edit' || this.mode == 'edit_jalinan') {
        this.$store.dispatch(this.kelas + '/edit', this.$route.params.id);
      }
    },
    fetchCu: function fetchCu() {
      if (this.currentUser.id_cu == 0) {
        this.itemDataCu = [];
        var valData;

        if (this.form.anggota_cu_cu) {
          var _iterator = _createForOfIteratorHelper(this.form.anggota_cu_cu),
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
      } else {
        var data = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.find(this.form.anggota_cu_cu, {
          'cu_id': this.currentUser.id_cu
        });

        if (!data.tanggal_keluar) {
          this.form.tp_id = data.tp_id;
          this.form.no_ba = data.no_ba;
          this.form.tanggal_masuk = data.tanggal_masuk;
          this.form.keterangan_masuk = data.keterangan_masuk;
        } else {
          this.itemDataCu = [];
          var valData;

          if (this.form.anggota_cu_cu) {
            var _iterator2 = _createForOfIteratorHelper(this.form.anggota_cu_cu),
                _step2;

            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                valData = _step2.value;
                this.itemDataCu.push(valData);
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }
          }
        }
      }

      if (this.form.id_provinces) {
        this.changeProvinces(this.form.id_provinces);
      }

      if (this.form.id_regencies) {
        this.changeRegencies(this.form.id_regencies);
      }

      if (this.form.id_districts) {
        this.changeDistricts(this.form.id_districts);
      }
    },
    fetchTp: function fetchTp(value) {
      this.$store.dispatch('tp/getCu', value);
    },
    createCu: function createCu(value) {
      this.itemDataCu.push(value);
      this.modalTutup();
    },
    editCu: function editCu(value) {
      lodash__WEBPACK_IMPORTED_MODULE_0___default.a.remove(this.itemDataCu, {
        index: value.index
      });

      this.itemDataCu.push(value);
      this.modalTutup();
    },
    save: function save() {
      var _this = this;

      if (this.currentUser.id_cu == 0) {
        this.form.anggota_cu_cu = this.itemDataCu;
      } else {
        this.form.id_cu = this.currentUser.id_cu;
      }

      if (this.mode != 'create_jalinan') {
        this.form.statusNIK = this.statusNIK;
      }

      var formData = Object(_helpers_form__WEBPACK_IMPORTED_MODULE_2__["toMulipartedForm"])(this.form, this.$route.meta.mode);
      this.$validator.validateAll('form').then(function (result) {
        if (result) {
          if (_this.mode == 'create_new' || _this.mode == 'create_jalinan') {
            _this.$store.dispatch(_this.kelas + '/store', formData);
          } else if (_this.mode == 'create_old' || _this.mode == 'create_edit' || _this.mode == 'edit_jalinan') {
            _this.$store.dispatch(_this.kelas + '/update', [_this.form.id, formData]);
          } else if (_this.mode == 'edit') {
            _this.$store.dispatch(_this.kelas + '/update', [_this.$route.params.id, formData]);
          }

          _this.submited = false;
        } else {
          window.scrollTo(0, 0);
          _this.submited = true;
        }
      });
    },
    changeProvinces: function changeProvinces(id) {
      this.$store.dispatch('regencies/getProvinces', id);
    },
    changeRegencies: function changeRegencies(id) {
      this.$store.dispatch('districts/getRegencies', id);
    },
    changeDistricts: function changeDistricts(id) {
      this.$store.dispatch('villages/getDistricts', id);
    },
    back: function back() {
      if (this.mode == 'edit_jalinan') {
        if (this.currentUser.id_cu == 0) {
          this.$router.push({
            name: 'jalinanKlaimCu',
            params: {
              cu: 'semua',
              tp: 'semua'
            }
          });
        } else {
          this.$router.push({
            name: 'jalinanKlaimCu',
            params: {
              cu: this.currentUser.id_cu,
              tp: 'semua'
            }
          });
        }
      } else {
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
      }
    },
    selectedCuRow: function selectedCuRow(index, item) {
      this.selectedItemCu = item;
      this.selectedItemCu.index = index + 1;
    },
    modalOpen: function modalOpen(state, isMobile, itemMobile) {
      this.modalShow = true;
      this.state = state;

      if (state == 'hapusCu') {
        this.modalState = 'confirm-tutup';
        this.modalColor = '';
        this.modalTitle = 'Hapus CU ' + this.selectedItemCu.cu.name + ' ?';
        this.modalButton = 'Iya, Hapus';
        this.modalSize = '';
      } else if (state == 'ubahCu') {
        this.modalState = 'normal3';
        this.modalColor = 'bg-primary';
        this.modalTitle = 'Ubah CU';
        this.modalButton = 'Ok';
        this.modalSize = 'modal-lg';
        this.formCuMode = 'edit';
      } else if (state == 'tambahCu') {
        this.modalState = 'normal3';
        this.modalColor = 'bg-primary';
        this.modalTitle = 'Tambah CU';
        this.modalButton = 'Ok';
        this.modalSize = 'modal-lg';
        this.formCuMode = 'create';
      }
    },
    modalConfirmOk: function modalConfirmOk() {
      this.modalShow = false;

      if (this.state == 'hapusCu') {
        lodash__WEBPACK_IMPORTED_MODULE_0___default.a.remove(this.itemDataCu, {
          index: this.selectedItemCu.index
        });

        this.selectedItemCu = {};
      }
    },
    modalTutup: function modalTutup() {
      if (this.updateStat == 'success') {
        if (this.mode == 'create_new' || this.mode == 'create_old' || this.mode == 'create_edit') {
          var idcu = '';

          if (this.currentUser.id_cu != 0) {
            idcu = this.currentUser.id_cu;
          } else {
            idcu = 'semua';
          }

          this.$router.push({
            name: this.kelas + "ProdukCreate",
            params: {
              id: this.updateResponse.id,
              cu: idcu
            }
          });
        } else if (this.mode == 'create_jalinan' || this.mode == 'create_jalinan_edit') {
          var _idcu = '';

          if (this.currentUser.id_cu != 0) {
            _idcu = this.currentUser.id_cu;
          } else {
            _idcu = 'semua';
          }

          this.$router.push({
            name: this.kelas + "ProdukCreateJalinan",
            params: {
              id: this.updateResponse.id,
              cu: _idcu
            }
          });
        } else {
          this.back();
        }

        this.$store.dispatch(this.kelas + '/resetUpdateStat');
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
    }
  },
  computed: _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapGetters"])('auth', {
    currentUser: 'currentUser'
  })), Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapGetters"])('anggotaCu', {
    form: 'data',
    formStat: 'dataStat',
    rules: 'rules',
    options: 'options',
    updateResponse: 'update',
    updateStat: 'updateStat'
  })), Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapGetters"])('cu', {
    modelCu: 'headerDataS',
    modelCuStat: 'headerDataStatS'
  })), Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapGetters"])('tp', {
    modelTp: 'dataS',
    modelTpStat: 'dataStatS'
  })), Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapGetters"])('pekerjaan', {
    modelPekerjaan: 'dataS',
    modelPekerjaanStat: 'dataStatS'
  })), Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapGetters"])('suku', {
    modelSuku: 'dataS',
    modelSukuStat: 'dataStatS'
  })), Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapGetters"])('provinces', {
    modelProvinces: 'dataS',
    modelProvincesStat: 'dataStatS'
  })), Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapGetters"])('regencies', {
    modelRegencies: 'dataS',
    modelRegenciesStat: 'dataStatS'
  })), Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapGetters"])('districts', {
    modelDistricts: 'dataS',
    modelDistrictsStat: 'dataStatS'
  })), Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapGetters"])('villages', {
    modelVillages: 'dataS',
    modelVillagesStat: 'dataStatS'
  }))
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/anggotaCu/form.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/views/anggotaCu/form.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _components_pageHeader_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/pageHeader.vue */ "./resources/assets/js/components/pageHeader.vue");
/* harmony import */ var _components_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/modal */ "./resources/assets/js/components/modal.vue");
/* harmony import */ var _api_anggotaCu_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../api/anggotaCu.js */ "./resources/assets/js/api/anggotaCu.js");
/* harmony import */ var vue_cleave_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue-cleave-component */ "./node_modules/vue-cleave-component/dist/vue-cleave.min.js");
/* harmony import */ var vue_cleave_component__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(vue_cleave_component__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _create_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./create.vue */ "./resources/assets/js/views/anggotaCu/create.vue");
/* harmony import */ var _cariData_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cariData.vue */ "./resources/assets/js/views/anggotaCu/cariData.vue");
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







/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    pageHeader: _components_pageHeader_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    appModal: _components_modal__WEBPACK_IMPORTED_MODULE_2__["default"],
    formCreate: _create_vue__WEBPACK_IMPORTED_MODULE_5__["default"],
    Cleave: vue_cleave_component__WEBPACK_IMPORTED_MODULE_4___default.a,
    cariData: _cariData_vue__WEBPACK_IMPORTED_MODULE_6__["default"]
  },
  data: function data() {
    return {
      title: '',
      titleDesc: '',
      titleIcon: '',
      kelas: 'anggotaCu',
      level2Title: 'Anggota CU',
      nik: '',
      statusNIK: 'tidak',
      cleaveOption: {
        number16: {
          numeral: true,
          numeralIntegerScale: 16,
          numeralDecimalScale: 0,
          stripLeadingZeroes: false,
          delimiter: ''
        }
      }
    };
  },
  created: function created() {
    this.resetData();

    if (this.$route.meta.mode === 'edit') {
      this.title = 'Ubah ' + this.level2Title;
      this.titleDesc = 'Mengubah ' + this.level2Title;
      this.titleIcon = 'icon-pencil5';
    } else {
      this.title = 'Tambah ' + this.level2Title;
      this.titleDesc = 'Menambah ' + this.level2Title;
      this.titleIcon = 'icon-plus3';
    }
  },
  methods: {
    cariData: function cariData(nik) {
      this.nik = nik;
      this.$store.dispatch(this.kelas + '/cariDataKTP', nik);
    },
    changeStatusNIK: function changeStatusNIK(value) {
      this.nik == '';
      this.statusNIK = value;
      this.$store.dispatch(this.kelas + '/resetData');
    },
    nikNew: function nikNew(value) {
      this.nik = value;
      this.$store.dispatch(this.kelas + '/cariDataKTP', value);
    },
    resetData: function resetData() {
      this.$store.commit(this.kelas + '/setData', {});
      this.$store.commit(this.kelas + '/setDataStat', '');
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
    }
  },
  computed: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('auth', {
    currentUser: 'currentUser'
  })), Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('anggotaCu', {
    itemData: 'data',
    itemDataStat: 'dataStat'
  }))
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/anggotaCu/formCu.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/views/anggotaCu/formCu.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _components_checkValue_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/checkValue.vue */ "./resources/assets/js/components/checkValue.vue");
/* harmony import */ var _components_message_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/message.vue */ "./resources/assets/js/components/message.vue");
/* harmony import */ var vue_cleave_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue-cleave-component */ "./node_modules/vue-cleave-component/dist/vue-cleave.min.js");
/* harmony import */ var vue_cleave_component__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(vue_cleave_component__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _api_produkCu_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../api/produkCu.js */ "./resources/assets/js/api/produkCu.js");
/* harmony import */ var _components_wajibBadge_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/wajibBadge.vue */ "./resources/assets/js/components/wajibBadge.vue");
/* harmony import */ var _components_datePicker_vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/datePicker.vue */ "./resources/assets/js/components/datePicker.vue");
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
  props: ['mode', 'selected'],
  components: {
    checkValue: _components_checkValue_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    Message: _components_message_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    Cleave: vue_cleave_component__WEBPACK_IMPORTED_MODULE_4___default.a,
    wajibBadge: _components_wajibBadge_vue__WEBPACK_IMPORTED_MODULE_6__["default"],
    DatePicker: _components_datePicker_vue__WEBPACK_IMPORTED_MODULE_7__["default"]
  },
  data: function data() {
    return {
      title: '',
      kelas: 'anggotaCu',
      formDataCu: {
        no_ba: '',
        tanggal_masuk: '',
        keterangan_masuk: '',
        cu_id: 0,
        tp_id: '',
        cu: {
          id: '',
          name: ''
        },
        tp: {
          id: '',
          name: ''
        }
      },
      modelProdukCu: [],
      modelProdukCuStat: '',
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
        number16: {
          numeral: true,
          numeralIntegerScale: 16,
          numeralDecimalScale: 0,
          stripLeadingZeroes: false,
          delimiter: ''
        }
      },
      message: {
        show: false,
        content: ''
      },
      submited: false
    };
  },
  created: function created() {
    this.fetchCU();

    if (this.mode == 'edit') {
      if (this.modelCUStat == 'success') {
        this.formDataCu = Object.assign({}, this.selected);
      }
    }
  },
  watch: {
    modelCUStat: function modelCUStat(value) {
      if (value === "success") {
        if (this.mode == 'edit') {
          this.formDataCu = Object.assign({}, this.selected);
          this.fetchTp(this.formDataCu.cu_id);
        }
      }
    }
  },
  methods: {
    changeCu: function changeCu(id) {
      var cu;

      if (id != 0) {
        cu = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.find(this.modelCU, function (o) {
          return o.id == id;
        });
      }

      this.formDataCu.cu.id = cu.id;
      this.formDataCu.cu.name = cu.name;
      this.fetchTp(cu.id);
    },
    changeTp: function changeTp(id) {
      var tp;

      if (id != 0) {
        tp = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.find(this.modelTp, function (o) {
          return o.id == id;
        });
      }

      if (this.formDataCu.tp != null) {
        this.formDataCu.tp.id = tp.id;
        this.formDataCu.tp.name = tp.name;
      } else {
        var tpdata = {};
        tpdata.id = tp.id;
        tpdata.name = tp.name;
        this.formDataCu.tp = tpdata;
      }
    },
    fetchCU: function fetchCU() {
      if (this.modelCuStat != 'success') {
        this.$store.dispatch('cu/getHeader');
      } else {
        this.idCu = this.$route.params.cu;
        this.tingkat = this.$route.params.tingkat;
      }
    },
    fetchTp: function fetchTp(value) {
      this.$store.dispatch('tp/getCu', value);
    },
    save: function save() {
      var _this = this;

      this.$validator.validateAll('formDataCu').then(function (result) {
        if (result) {
          if (_this.mode == 'edit') {
            _this.$emit('editCu', _this.formDataCu);
          } else {
            _this.$emit('createCu', _this.formDataCu);
          }
        } else {
          _this.submited = true;
        }
      });
    },
    messageClose: function messageClose() {
      this.message.show = false;
    },
    tutup: function tutup() {
      this.$emit('tutup');
    }
  },
  computed: _objectSpread(_objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapGetters"])('auth', {
    currentUser: 'currentUser'
  })), Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapGetters"])('cu', {
    modelCU: 'headerDataS',
    modelCUStat: 'headerDataStatS',
    updateMessage: 'update',
    updateStat: 'updateStat'
  })), Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapGetters"])('tp', {
    modelTp: 'dataS',
    modelTpStat: 'dataStatS'
  }))
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/anggotaCu/create.vue?vue&type=template&id=3e661706&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/views/anggotaCu/create.vue?vue&type=template&id=3e661706& ***!
  \*********************************************************************************************************************************************************************************************************************/
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
          attrs: { "data-vv-scope": "form" },
          on: {
            submit: function($event) {
              $event.preventDefault()
              return _vm.save($event)
            }
          }
        },
        [
          _vm.mode == "create_old"
            ? _c("div", { staticClass: "card" }, [
                _vm._m(0),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "card-body" },
                  [_c("identitas", { attrs: { itemData: _vm.form } })],
                  1
                )
              ])
            : _vm._e(),
          _vm._v(" "),
          _vm.mode != "create_old"
            ? _c("div", { staticClass: "card" }, [
                _vm._m(1),
                _vm._v(" "),
                _c("div", { staticClass: "card-body" }, [
                  _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "col-md-12" }, [
                      _c(
                        "div",
                        { staticClass: "form-group" },
                        [
                          _c("h6", [_vm._v("Foto:")]),
                          _vm._v(" "),
                          _c("app-image-upload", {
                            attrs: {
                              image_loc: "/images/anggotaCu/",
                              image_temp: _vm.form.gambar
                            },
                            model: {
                              value: _vm.form.gambar,
                              callback: function($$v) {
                                _vm.$set(_vm.form, "gambar", $$v)
                              },
                              expression: "form.gambar"
                            }
                          })
                        ],
                        1
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-4" }, [
                      _c(
                        "div",
                        {
                          staticClass: "form-group",
                          class: { "has-error": _vm.errors.has("form.nik") }
                        },
                        [
                          _c(
                            "h6",
                            {
                              class: {
                                "text-danger": _vm.errors.has("form.nik")
                              }
                            },
                            [
                              _vm.errors.has("form.nik")
                                ? _c("i", { staticClass: "icon-cross2" })
                                : _vm._e(),
                              _vm._v("\n\t\t\t\t\t\t\t\tNo. KTP: "),
                              _c("wajib-badge")
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "validate",
                                rawName: "v-validate",
                                value: "required",
                                expression: "'required'"
                              },
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.form.nik,
                                expression: "form.nik"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: {
                              type: "text",
                              name: "nik",
                              placeholder: "Silahkan masukkan no. KTP",
                              "data-vv-as": "No. KTP",
                              readonly: ""
                            },
                            domProps: { value: _vm.form.nik },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(_vm.form, "nik", $event.target.value)
                              }
                            }
                          }),
                          _vm._v(" "),
                          _vm.errors.has("form.nik")
                            ? _c(
                                "small",
                                { staticClass: "text-muted text-danger" },
                                [
                                  _c("i", {
                                    staticClass: "icon-arrow-small-right"
                                  }),
                                  _vm._v(
                                    " " +
                                      _vm._s(_vm.errors.first("form.nik")) +
                                      "\n\t\t\t\t\t\t\t"
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
                        { staticClass: "form-group" },
                        [
                          _c("h6", [_vm._v("No. KK:")]),
                          _vm._v(" "),
                          _c("cleave", {
                            staticClass: "form-control",
                            attrs: {
                              name: "kk",
                              options: _vm.cleaveOption.number16,
                              placeholder: "Silahkan masukkan no KK"
                            },
                            model: {
                              value: _vm.form.kk,
                              callback: function($$v) {
                                _vm.$set(_vm.form, "kk", $$v)
                              },
                              expression: "form.kk"
                            }
                          })
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
                          _c("h6", [_vm._v("\n\t\t\t\t\t\t\t\tNPWP:")]),
                          _vm._v(" "),
                          _c("cleave", {
                            staticClass: "form-control",
                            attrs: {
                              name: "npwp",
                              options: _vm.cleaveOption.number24,
                              placeholder: "Silahkan masukkan npwp"
                            },
                            model: {
                              value: _vm.form.npwp,
                              callback: function($$v) {
                                _vm.$set(_vm.form, "npwp", $$v)
                              },
                              expression: "form.npwp"
                            }
                          })
                        ],
                        1
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-4" }, [
                      _c(
                        "div",
                        {
                          staticClass: "form-group",
                          class: { "has-error": _vm.errors.has("form.name") }
                        },
                        [
                          _c(
                            "h6",
                            {
                              class: {
                                "text-danger": _vm.errors.has("form.name")
                              }
                            },
                            [
                              _vm.errors.has("form.name")
                                ? _c("i", { staticClass: "icon-cross2" })
                                : _vm._e(),
                              _vm._v("\n\t\t\t\t\t\t\t\tNama: "),
                              _c("wajib-badge")
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "validate",
                                rawName: "v-validate",
                                value: "required",
                                expression: "'required'"
                              },
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.form.name,
                                expression: "form.name"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: {
                              type: "text",
                              name: "name",
                              placeholder: "Silahkan masukkan nama",
                              "data-vv-as": "Nama"
                            },
                            domProps: { value: _vm.form.name },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(_vm.form, "name", $event.target.value)
                              }
                            }
                          }),
                          _vm._v(" "),
                          _vm.errors.has("form.name")
                            ? _c(
                                "small",
                                { staticClass: "text-muted text-danger" },
                                [
                                  _c("i", {
                                    staticClass: "icon-arrow-small-right"
                                  }),
                                  _vm._v(
                                    " " +
                                      _vm._s(_vm.errors.first("form.name")) +
                                      "\n\t\t\t\t\t\t\t"
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
                          class: {
                            "has-error": _vm.errors.has("form.ahli_waris")
                          }
                        },
                        [
                          _c(
                            "h6",
                            {
                              class: {
                                "text-danger": _vm.errors.has("form.ahli_waris")
                              }
                            },
                            [
                              _vm.errors.has("form.ahli_waris")
                                ? _c("i", { staticClass: "icon-cross2" })
                                : _vm._e(),
                              _vm._v("\n\t\t\t\t\t\t\t\tNama Ahli Waris: "),
                              _c("wajib-badge")
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "validate",
                                rawName: "v-validate",
                                value: "required",
                                expression: "'required'"
                              },
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.form.ahli_waris,
                                expression: "form.ahli_waris"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: {
                              type: "text",
                              name: "ahli_waris",
                              placeholder: "Silahkan masukkan nama ahli waris",
                              "data-vv-as": "Nama ahli waris"
                            },
                            domProps: { value: _vm.form.ahli_waris },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.form,
                                  "ahli_waris",
                                  $event.target.value
                                )
                              }
                            }
                          }),
                          _vm._v(" "),
                          _vm.errors.has("form.ahli_waris")
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
                                        _vm.errors.first("form.ahli_waris")
                                      ) +
                                      "\n\t\t\t\t\t\t\t"
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
                      _c("div", { staticClass: "form-group" }, [
                        _c("h6", [_vm._v("Nama Ibu: ")]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.form.nama_ibu,
                              expression: "form.nama_ibu"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: {
                            type: "text",
                            name: "nama_ibu",
                            placeholder: "Silahkan masukkan nama ibu"
                          },
                          domProps: { value: _vm.form.nama_ibu },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.form,
                                "nama_ibu",
                                $event.target.value
                              )
                            }
                          }
                        })
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-4" }, [
                      _c(
                        "div",
                        {
                          staticClass: "form-group",
                          class: { "has-error": _vm.errors.has("form.kelamin") }
                        },
                        [
                          _c(
                            "h6",
                            {
                              class: {
                                "text-danger": _vm.errors.has("form.kelamin")
                              }
                            },
                            [
                              _vm.errors.has("form.kelamin")
                                ? _c("i", { staticClass: "icon-cross2" })
                                : _vm._e(),
                              _vm._v("\n\t\t\t\t\t\t\t\tGender: "),
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
                                  value: _vm.form.kelamin,
                                  expression: "form.kelamin"
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
                                name: "kelamin",
                                "data-width": "100%",
                                "data-vv-as": "Gender"
                              },
                              on: {
                                change: function($event) {
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
                                    "kelamin",
                                    $event.target.multiple
                                      ? $$selectedVal
                                      : $$selectedVal[0]
                                  )
                                }
                              }
                            },
                            [
                              _c(
                                "option",
                                { attrs: { disabled: "", value: "" } },
                                [_vm._v("Silahkan pilih gender")]
                              ),
                              _vm._v(" "),
                              _c("option", { attrs: { value: "LAKI-LAKI" } }, [
                                _vm._v("Laki-laki")
                              ]),
                              _vm._v(" "),
                              _c("option", { attrs: { value: "PEREMPUAN" } }, [
                                _vm._v("Perempuan")
                              ])
                            ]
                          ),
                          _vm._v(" "),
                          _vm.errors.has("form.kelamin")
                            ? _c(
                                "small",
                                { staticClass: "text-muted text-danger" },
                                [
                                  _c("i", {
                                    staticClass: "icon-arrow-small-right"
                                  }),
                                  _vm._v(
                                    " " +
                                      _vm._s(_vm.errors.first("form.kelamin")) +
                                      "\n\t\t\t\t\t\t\t"
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
                          class: {
                            "has-error": _vm.errors.has("form.tanggal_lahir")
                          }
                        },
                        [
                          _c(
                            "h6",
                            {
                              class: {
                                "text-danger": _vm.errors.has(
                                  "form.tanggal_lahir"
                                )
                              }
                            },
                            [
                              _vm.errors.has("form.tanggal_lahir")
                                ? _c("i", { staticClass: "icon-cross2" })
                                : _vm._e(),
                              _vm._v("\n\t\t\t\t\t\t\t\tTgl. Lahir: "),
                              _c("wajib-badge")
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("date-picker", {
                            attrs: { defaultDate: _vm.form.tanggal_lahir },
                            on: {
                              dateSelected: function($event) {
                                _vm.form.tanggal_lahir = $event
                              }
                            }
                          }),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.form.tanggal_lahir,
                                expression: "form.tanggal_lahir"
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
                            attrs: { "data-vv-as": "Tanggal lahir" },
                            domProps: { value: _vm.form.tanggal_lahir },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.form,
                                  "tanggal_lahir",
                                  $event.target.value
                                )
                              }
                            }
                          }),
                          _vm._v(" "),
                          _vm.errors.has("form.tanggal_lahir")
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
                                        _vm.errors.first("form.tanggal_lahir")
                                      ) +
                                      "\n\t\t\t\t\t\t\t"
                                  )
                                ]
                              )
                            : _c("small", { staticClass: "text-muted" }, [
                                _vm._v(" ")
                              ])
                        ],
                        1
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-4" }, [
                      _c(
                        "div",
                        {
                          staticClass: "form-group",
                          class: {
                            "has-error": _vm.errors.has("form.tempat_lahir")
                          }
                        },
                        [
                          _c(
                            "h6",
                            {
                              class: {
                                "text-danger": _vm.errors.has(
                                  "form.tempat_lahir"
                                )
                              }
                            },
                            [
                              _vm.errors.has("form.tempat_lahir")
                                ? _c("i", { staticClass: "icon-cross2" })
                                : _vm._e(),
                              _vm._v("Tempat Lahir: "),
                              _c("wajib-badge")
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.form.tempat_lahir,
                                expression: "form.tempat_lahir"
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
                              type: "text",
                              name: "tempat_lahir",
                              placeholder: "Silahkan masukkan tempat lahir",
                              "data-vv-as": "Tempat Lahir"
                            },
                            domProps: { value: _vm.form.tempat_lahir },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.form,
                                  "tempat_lahir",
                                  $event.target.value
                                )
                              }
                            }
                          }),
                          _vm._v(" "),
                          _vm.errors.has("form.tempat_lahir")
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
                                        _vm.errors.first("form.tempat_lahir")
                                      ) +
                                      "\n\t\t\t\t\t\t\t"
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
                      _c("div", { staticClass: "form-group" }, [
                        _c("h6", [_vm._v("Suku: ")]),
                        _vm._v(" "),
                        _c(
                          "select",
                          {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.form.suku,
                                expression: "form.suku"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: {
                              name: "suku",
                              "data-width": "100%",
                              disabled: _vm.modelSuku.length == 0
                            },
                            on: {
                              change: function($event) {
                                var $$selectedVal = Array.prototype.filter
                                  .call($event.target.options, function(o) {
                                    return o.selected
                                  })
                                  .map(function(o) {
                                    var val = "_value" in o ? o._value : o.value
                                    return val
                                  })
                                _vm.$set(
                                  _vm.form,
                                  "suku",
                                  $event.target.multiple
                                    ? $$selectedVal
                                    : $$selectedVal[0]
                                )
                              }
                            }
                          },
                          [
                            _c(
                              "option",
                              { attrs: { disabled: "", value: "" } },
                              [
                                _vm.modelSukuStat === "loading"
                                  ? _c("span", [_vm._v("Mohon tunggu...")])
                                  : _c("span", [_vm._v("Silahkan pilih suku")])
                              ]
                            ),
                            _vm._v(" "),
                            _vm._l(_vm.modelSuku, function(suku, index) {
                              return _c(
                                "option",
                                { key: index, domProps: { value: suku.name } },
                                [_vm._v(_vm._s(suku.name))]
                              )
                            })
                          ],
                          2
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-4" }, [
                      _c("div", { staticClass: "form-group" }, [
                        _c("h6", [
                          _vm._v(
                            "\n\t\t\t\t\t\t\t\tGol. Darah:\n\t\t\t\t\t\t\t"
                          )
                        ]),
                        _vm._v(" "),
                        _c(
                          "select",
                          {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.form.darah,
                                expression: "form.darah"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: { name: "darah", "data-width": "100%" },
                            on: {
                              change: function($event) {
                                var $$selectedVal = Array.prototype.filter
                                  .call($event.target.options, function(o) {
                                    return o.selected
                                  })
                                  .map(function(o) {
                                    var val = "_value" in o ? o._value : o.value
                                    return val
                                  })
                                _vm.$set(
                                  _vm.form,
                                  "darah",
                                  $event.target.multiple
                                    ? $$selectedVal
                                    : $$selectedVal[0]
                                )
                              }
                            }
                          },
                          [
                            _c(
                              "option",
                              { attrs: { disabled: "", value: "" } },
                              [_vm._v("Silahkan pilih golongan darah")]
                            ),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "A" } }, [
                              _vm._v("A")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "B" } }, [
                              _vm._v("B")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "AB" } }, [
                              _vm._v("AB")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "O" } }, [
                              _vm._v("O")
                            ])
                          ]
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-4" }, [
                      _c(
                        "div",
                        { staticClass: "form-group" },
                        [
                          _vm._m(2),
                          _vm._v(" "),
                          _c("cleave", {
                            staticClass: "form-control",
                            attrs: {
                              name: "tinggi",
                              options: _vm.cleaveOption.number3,
                              placeholder: "Silahkan masukkan tinggi"
                            },
                            model: {
                              value: _vm.form.tinggi,
                              callback: function($$v) {
                                _vm.$set(_vm.form, "tinggi", $$v)
                              },
                              expression: "form.tinggi"
                            }
                          })
                        ],
                        1
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-4" }, [
                      _c("div", { staticClass: "form-group" }, [
                        _c("h6", [_vm._v("Agama:")]),
                        _vm._v(" "),
                        _c(
                          "select",
                          {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.form.agama,
                                expression: "form.agama"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: { name: "agama", "data-width": "100%" },
                            on: {
                              change: function($event) {
                                var $$selectedVal = Array.prototype.filter
                                  .call($event.target.options, function(o) {
                                    return o.selected
                                  })
                                  .map(function(o) {
                                    var val = "_value" in o ? o._value : o.value
                                    return val
                                  })
                                _vm.$set(
                                  _vm.form,
                                  "agama",
                                  $event.target.multiple
                                    ? $$selectedVal
                                    : $$selectedVal[0]
                                )
                              }
                            }
                          },
                          [
                            _c(
                              "option",
                              { attrs: { disabled: "", value: "" } },
                              [_vm._v("Silahkan pilih agama")]
                            ),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "BUDDHA" } }, [
                              _vm._v("Buddha")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "HINDU" } }, [
                              _vm._v("Hindu")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "ISLAM" } }, [
                              _vm._v("Islam")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "KATOLIK" } }, [
                              _vm._v("Katolik")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "KONG HU CU" } }, [
                              _vm._v("Kong Hu Cu")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "PROTESTAN" } }, [
                              _vm._v("Protestan")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "LAIN-LAIN" } }, [
                              _vm._v("Lain-lain")
                            ])
                          ]
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-4" }, [
                      _c("div", { staticClass: "form-group" }, [
                        _c("h6", [
                          _vm._v("\n\t\t\t\t\t\t\t\tStatus:\n\t\t\t\t\t\t\t")
                        ]),
                        _vm._v(" "),
                        _c(
                          "select",
                          {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.form.status,
                                expression: "form.status"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: { name: "status", "data-width": "100%" },
                            on: {
                              change: function($event) {
                                var $$selectedVal = Array.prototype.filter
                                  .call($event.target.options, function(o) {
                                    return o.selected
                                  })
                                  .map(function(o) {
                                    var val = "_value" in o ? o._value : o.value
                                    return val
                                  })
                                _vm.$set(
                                  _vm.form,
                                  "status",
                                  $event.target.multiple
                                    ? $$selectedVal
                                    : $$selectedVal[0]
                                )
                              }
                            }
                          },
                          [
                            _c(
                              "option",
                              { attrs: { disabled: "", value: "" } },
                              [_vm._v("Silahkan pilih status pernikahan")]
                            ),
                            _vm._v(" "),
                            _c(
                              "option",
                              { attrs: { value: "BELUM MENIKAH" } },
                              [_vm._v("Belum menikah")]
                            ),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "MENIKAH" } }, [
                              _vm._v("Menikah")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "JANDA/DUDA" } }, [
                              _vm._v("Janda/Duda")
                            ])
                          ]
                        )
                      ])
                    ])
                  ])
                ])
              ])
            : _vm._e(),
          _vm._v(" "),
          _vm.mode != "create_old"
            ? _c("div", { staticClass: "card" }, [
                _vm._m(3),
                _vm._v(" "),
                _c("div", { staticClass: "card-body" }, [
                  _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "col-md-4" }, [
                      _c("div", { staticClass: "form-group" }, [
                        _c("h6", [_vm._v("Lembaga:")]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.form.lembaga,
                              expression: "form.lembaga"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: {
                            type: "text",
                            name: "lembaga",
                            placeholder: "Silahkan masukkan lembaga"
                          },
                          domProps: { value: _vm.form.lembaga },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(_vm.form, "lembaga", $event.target.value)
                            }
                          }
                        })
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-4" }, [
                      _c("div", { staticClass: "form-group" }, [
                        _c("h6", [_vm._v("Jabatan:")]),
                        _vm._v(" "),
                        _c(
                          "select",
                          {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.form.jabatan,
                                expression: "form.jabatan"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: { name: "jabatan", "data-width": "100%" },
                            on: {
                              change: function($event) {
                                var $$selectedVal = Array.prototype.filter
                                  .call($event.target.options, function(o) {
                                    return o.selected
                                  })
                                  .map(function(o) {
                                    var val = "_value" in o ? o._value : o.value
                                    return val
                                  })
                                _vm.$set(
                                  _vm.form,
                                  "jabatan",
                                  $event.target.multiple
                                    ? $$selectedVal
                                    : $$selectedVal[0]
                                )
                              }
                            }
                          },
                          [
                            _c(
                              "option",
                              { attrs: { disabled: "", value: "" } },
                              [_vm._v("Silahkan pilih jabatan")]
                            ),
                            _vm._v(" "),
                            _c(
                              "option",
                              { attrs: { value: "SENIOR MANAJER" } },
                              [
                                _vm._v(
                                  "Senior Manajer (General Manager, CEO, Deputy)"
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "MANAJER" } }, [
                              _vm._v("Manajer")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "SUPERVISOR" } }, [
                              _vm._v(
                                "Supervisor (Kepala Bagian, Kepala Divisi, Kepala/Koordinator TP, Kepala Bidang)"
                              )
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "STAF" } }, [
                              _vm._v("Staf")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "KONTRAK" } }, [
                              _vm._v("Kontrak")
                            ])
                          ]
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-4" }, [
                      _c("div", { staticClass: "form-group" }, [
                        _c("h6", [_vm._v("Pekerjaan: ")]),
                        _vm._v(" "),
                        _c(
                          "select",
                          {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.form.pekerjaan,
                                expression: "form.pekerjaan"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: {
                              name: "pekerjaan",
                              "data-width": "100%",
                              disabled: _vm.modelPekerjaan.length == 0
                            },
                            on: {
                              change: function($event) {
                                var $$selectedVal = Array.prototype.filter
                                  .call($event.target.options, function(o) {
                                    return o.selected
                                  })
                                  .map(function(o) {
                                    var val = "_value" in o ? o._value : o.value
                                    return val
                                  })
                                _vm.$set(
                                  _vm.form,
                                  "pekerjaan",
                                  $event.target.multiple
                                    ? $$selectedVal
                                    : $$selectedVal[0]
                                )
                              }
                            }
                          },
                          [
                            _c(
                              "option",
                              { attrs: { disabled: "", value: "" } },
                              [_vm._v("Silahkan pilih pekerjaan")]
                            ),
                            _vm._v(" "),
                            _vm._l(_vm.modelPekerjaan, function(
                              pekerjaan,
                              index
                            ) {
                              return _c(
                                "option",
                                {
                                  key: index,
                                  domProps: { value: pekerjaan.name }
                                },
                                [_vm._v(_vm._s(pekerjaan.name))]
                              )
                            })
                          ],
                          2
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-4" }, [
                      _c(
                        "div",
                        { staticClass: "form-group" },
                        [
                          _c("h6", [_vm._v("Rata-rata Penghasilan Perbulan:")]),
                          _vm._v(" "),
                          _c("cleave", {
                            staticClass: "form-control",
                            attrs: {
                              options: _vm.cleaveOption.numeric,
                              placeholder:
                                "Silahkan masukkan rata-rata pengeluaran"
                            },
                            model: {
                              value: _vm.form.penghasilan,
                              callback: function($$v) {
                                _vm.$set(_vm.form, "penghasilan", $$v)
                              },
                              expression: "form.penghasilan"
                            }
                          })
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
                          _c("h6", [_vm._v("Rata-rata Pengeluaran Perbulan:")]),
                          _vm._v(" "),
                          _c("cleave", {
                            staticClass: "form-control",
                            attrs: {
                              options: _vm.cleaveOption.numeric,
                              placeholder:
                                "Silahkan masukkan rata-rata pengeluaran"
                            },
                            model: {
                              value: _vm.form.pengeluaran,
                              callback: function($$v) {
                                _vm.$set(_vm.form, "pengeluaran", $$v)
                              },
                              expression: "form.pengeluaran"
                            }
                          })
                        ],
                        1
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-sm-4" }, [
                      _c("div", { staticClass: "form-group" }, [
                        _c("h6", [_vm._v("Pendidikan:")]),
                        _vm._v(" "),
                        _c(
                          "select",
                          {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.form.pendidikan,
                                expression: "form.pendidikan"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: { name: "pendidikan", "data-width": "100%" },
                            on: {
                              change: function($event) {
                                var $$selectedVal = Array.prototype.filter
                                  .call($event.target.options, function(o) {
                                    return o.selected
                                  })
                                  .map(function(o) {
                                    var val = "_value" in o ? o._value : o.value
                                    return val
                                  })
                                _vm.$set(
                                  _vm.form,
                                  "pendidikan",
                                  $event.target.multiple
                                    ? $$selectedVal
                                    : $$selectedVal[0]
                                )
                              }
                            }
                          },
                          [
                            _c(
                              "option",
                              { attrs: { disabled: "", value: "" } },
                              [_vm._v("Silahkan pilih tingkat pendidikan")]
                            ),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "TK" } }, [
                              _vm._v("TK")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "SD" } }, [
                              _vm._v("SD")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "SMP" } }, [
                              _vm._v("SMP")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "SMA/SMK" } }, [
                              _vm._v("SMA/SMK")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "D1" } }, [
                              _vm._v("D1")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "D2" } }, [
                              _vm._v("D2")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "D3" } }, [
                              _vm._v("D3")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "D4" } }, [
                              _vm._v("D4")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "S1" } }, [
                              _vm._v("S1")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "S2" } }, [
                              _vm._v("S2")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "S3" } }, [
                              _vm._v("S3")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "LAIN-LAIN" } }, [
                              _vm._v("Lain-lain")
                            ])
                          ]
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-4" }, [
                      _c("div", { staticClass: "form-group" }, [
                        _c(
                          "h6",
                          [
                            _vm._v("Organisasi: "),
                            _c("info-icon", {
                              attrs: {
                                message:
                                  "Silahkan isi dengan jabatan dan tempat/nama organisasi jika anda ikut dalam sebuah organisasi"
                              }
                            })
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.form.organisasi,
                              expression: "form.organisasi"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: {
                            type: "text",
                            name: "organisasi",
                            placeholder: "Silahkan masukkan organisasi"
                          },
                          domProps: { value: _vm.form.organisasi },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.form,
                                "organisasi",
                                $event.target.value
                              )
                            }
                          }
                        })
                      ])
                    ])
                  ])
                ])
              ])
            : _vm._e(),
          _vm._v(" "),
          _vm.mode != "create_old"
            ? _c("div", { staticClass: "card" }, [
                _vm._m(4),
                _vm._v(" "),
                _c("div", { staticClass: "card-body" }, [
                  _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "col-md-4" }, [
                      _c("div", { staticClass: "form-group" }, [
                        _c(
                          "h6",
                          {
                            class: {
                              "text-danger": _vm.errors.has("form.id_provinces")
                            }
                          },
                          [
                            _vm.errors.has("form.id_provinces")
                              ? _c("i", { staticClass: "icon-cross2" })
                              : _vm._e(),
                            _vm._v("\n\t\t\t\t\t\t\t\tProvinsi: "),
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
                                value: _vm.form.id_provinces,
                                expression: "form.id_provinces"
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
                              name: "id_provinces",
                              "data-width": "100%",
                              "data-vv-as": "Provinsi",
                              disabled: _vm.modelProvinces.length == 0
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
                                    "id_provinces",
                                    $event.target.multiple
                                      ? $$selectedVal
                                      : $$selectedVal[0]
                                  )
                                },
                                function($event) {
                                  return _vm.changeProvinces(
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
                              [_vm._v("Silahkan pilih provinsi")]
                            ),
                            _vm._v(" "),
                            _vm._l(_vm.modelProvinces, function(
                              provinces,
                              index
                            ) {
                              return _c(
                                "option",
                                {
                                  key: index,
                                  domProps: { value: provinces.id }
                                },
                                [_vm._v(_vm._s(provinces.name))]
                              )
                            })
                          ],
                          2
                        ),
                        _vm._v(" "),
                        _vm.errors.has("form.id_provinces")
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
                                      _vm.errors.first("form.id_provinces")
                                    ) +
                                    "\n\t\t\t\t\t\t\t"
                                )
                              ]
                            )
                          : _c("small", { staticClass: "text-muted" }, [
                              _vm._v(" ")
                            ])
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-4" }, [
                      _c(
                        "div",
                        {
                          staticClass: "form-group",
                          class: {
                            "has-error": _vm.errors.has("form.id_regencies")
                          }
                        },
                        [
                          _c(
                            "h6",
                            {
                              class: {
                                "text-danger": _vm.errors.has(
                                  "form.id_regencies"
                                )
                              }
                            },
                            [
                              _vm.errors.has("form.id_regencies")
                                ? _c("i", { staticClass: "icon-cross2" })
                                : _vm._e(),
                              _vm._v("\n\t\t\t\t\t\t\t\tKabupaten: "),
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
                                  value: _vm.form.id_regencies,
                                  expression: "form.id_regencies"
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
                                name: "id_regencies",
                                "data-width": "100%",
                                "data-vv-as": "Kabupaten",
                                disabled: _vm.modelRegencies.length === 0
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
                                      "id_regencies",
                                      $event.target.multiple
                                        ? $$selectedVal
                                        : $$selectedVal[0]
                                    )
                                  },
                                  function($event) {
                                    return _vm.changeRegencies(
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
                                  _vm.modelRegenciesStat === "loading"
                                    ? _c("span", [_vm._v("Mohon tunggu...")])
                                    : _c("span", [
                                        _vm._v("Silahkan pilih kabupaten")
                                      ])
                                ]
                              ),
                              _vm._v(" "),
                              _vm._l(_vm.modelRegencies, function(
                                regencies,
                                index
                              ) {
                                return _c(
                                  "option",
                                  {
                                    key: index,
                                    domProps: { value: regencies.id }
                                  },
                                  [_vm._v(_vm._s(regencies.name))]
                                )
                              })
                            ],
                            2
                          ),
                          _vm._v(" "),
                          _vm.errors.has("form.id_regencies")
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
                                        _vm.errors.first("form.id_regencies")
                                      ) +
                                      "\n\t\t\t\t\t\t\t"
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
                          class: {
                            "has-error": _vm.errors.has("form.id_districts")
                          }
                        },
                        [
                          _c(
                            "h6",
                            {
                              class: {
                                "text-danger": _vm.errors.has(
                                  "form.id_districts"
                                )
                              }
                            },
                            [
                              _vm.errors.has("form.id_districts")
                                ? _c("i", { staticClass: "icon-cross2" })
                                : _vm._e(),
                              _vm._v("\n\t\t\t\t\t\t\t\tKecamatan: "),
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
                                  value: _vm.form.id_districts,
                                  expression: "form.id_districts"
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
                                name: "id_districts",
                                "data-width": "100%",
                                "data-vv-as": "Kabupaten",
                                disabled: _vm.modelDistricts.length === 0
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
                                      "id_districts",
                                      $event.target.multiple
                                        ? $$selectedVal
                                        : $$selectedVal[0]
                                    )
                                  },
                                  function($event) {
                                    return _vm.changeDistricts(
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
                                  _vm.modelDistrictsStat === "loading"
                                    ? _c("span", [_vm._v("Mohon tunggu...")])
                                    : _c("span", [
                                        _vm._v("Silahkan pilih kecamatan")
                                      ])
                                ]
                              ),
                              _vm._v(" "),
                              _vm._l(_vm.modelDistricts, function(
                                districts,
                                index
                              ) {
                                return _c(
                                  "option",
                                  {
                                    key: index,
                                    domProps: { value: districts.id }
                                  },
                                  [_vm._v(_vm._s(districts.name))]
                                )
                              })
                            ],
                            2
                          ),
                          _vm._v(" "),
                          _vm.errors.has("form.id_regency")
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
                                        _vm.errors.first("form.id_regency")
                                      ) +
                                      "\n\t\t\t\t\t\t\t"
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
                          class: {
                            "has-error": _vm.errors.has("form.id_villages")
                          }
                        },
                        [
                          _c(
                            "h6",
                            {
                              class: {
                                "text-danger": _vm.errors.has(
                                  "form.id_villages"
                                )
                              }
                            },
                            [
                              _vm.errors.has("form.id_villages")
                                ? _c("i", { staticClass: "icon-cross2" })
                                : _vm._e(),
                              _vm._v("\n\t\t\t\t\t\t\t\tKelurahan: "),
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
                                  value: _vm.form.id_villages,
                                  expression: "form.id_villages"
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
                                name: "id_villages",
                                "data-width": "100%",
                                "data-vv-as": "Desa",
                                disabled: _vm.modelVillages.length === 0
                              },
                              on: {
                                change: function($event) {
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
                                    "id_villages",
                                    $event.target.multiple
                                      ? $$selectedVal
                                      : $$selectedVal[0]
                                  )
                                }
                              }
                            },
                            [
                              _c(
                                "option",
                                { attrs: { disabled: "", value: "" } },
                                [
                                  _vm.modelVillagesStat === "loading"
                                    ? _c("span", [
                                        _vm._v("Mohon tunggu... mohon tunggu")
                                      ])
                                    : _c("span", [
                                        _vm._v("Silahkan pilih kelurahan")
                                      ])
                                ]
                              ),
                              _vm._v(" "),
                              _vm._l(_vm.modelVillages, function(
                                villages,
                                index
                              ) {
                                return _c(
                                  "option",
                                  {
                                    key: index,
                                    domProps: { value: villages.id }
                                  },
                                  [_vm._v(_vm._s(villages.name))]
                                )
                              })
                            ],
                            2
                          ),
                          _vm._v(" "),
                          _vm.errors.has("form.id_villages")
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
                                        _vm.errors.first("form.id_villages")
                                      ) +
                                      "\n\t\t\t\t\t\t\t"
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
                        { staticClass: "form-group" },
                        [
                          _c("h6", [_vm._v("No. RW:")]),
                          _vm._v(" "),
                          _c("cleave", {
                            staticClass: "form-control",
                            attrs: {
                              options: _vm.cleaveOption.number3,
                              placeholder: "Silahkan masukkan no rw"
                            },
                            model: {
                              value: _vm.form.rw,
                              callback: function($$v) {
                                _vm.$set(_vm.form, "rw", $$v)
                              },
                              expression: "form.rw"
                            }
                          }),
                          _vm._v(" "),
                          _c("small", { staticClass: "text-muted" }, [
                            _vm._v(" ")
                          ])
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
                          _c("h6", [_vm._v("No. RT:")]),
                          _vm._v(" "),
                          _c("cleave", {
                            staticClass: "form-control",
                            attrs: {
                              options: _vm.cleaveOption.number3,
                              placeholder: "Silahkan masukkan no rt"
                            },
                            model: {
                              value: _vm.form.rt,
                              callback: function($$v) {
                                _vm.$set(_vm.form, "rt", $$v)
                              },
                              expression: "form.rt"
                            }
                          }),
                          _vm._v(" "),
                          _c("small", { staticClass: "text-muted" }, [
                            _vm._v(" ")
                          ])
                        ],
                        1
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-8" }, [
                      _c(
                        "div",
                        {
                          staticClass: "form-group",
                          class: { "has-error": _vm.errors.has("form.alamat") }
                        },
                        [
                          _c(
                            "h6",
                            {
                              class: {
                                "text-danger": _vm.errors.has("form.alamat")
                              }
                            },
                            [
                              _vm.errors.has("form.alamat")
                                ? _c("i", { staticClass: "icon-cross2" })
                                : _vm._e(),
                              _vm._v("\n\t\t\t\t\t\t\t\tAlamat: "),
                              _c("wajib-badge")
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "validate",
                                rawName: "v-validate",
                                value: "required|min:5",
                                expression: "'required|min:5'"
                              },
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.form.alamat,
                                expression: "form.alamat"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: {
                              type: "text",
                              name: "alamat",
                              placeholder: "Silahkan masukkan alamat",
                              "data-vv-as": "Alamat"
                            },
                            domProps: { value: _vm.form.alamat },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.form,
                                  "alamat",
                                  $event.target.value
                                )
                              }
                            }
                          }),
                          _vm._v(" "),
                          _vm.errors.has("form.alamat")
                            ? _c(
                                "small",
                                { staticClass: "text-muted text-danger" },
                                [
                                  _c("i", {
                                    staticClass: "icon-arrow-small-right"
                                  }),
                                  _vm._v(
                                    " " +
                                      _vm._s(_vm.errors.first("form.alamat")) +
                                      "\n\t\t\t\t\t\t\t"
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
                        { staticClass: "form-group" },
                        [
                          _c("h6", [_vm._v("No. Hp:")]),
                          _vm._v(" "),
                          _c("cleave", {
                            staticClass: "form-control",
                            attrs: {
                              options: _vm.cleaveOption.number12,
                              placeholder: "Silahkan masukkan no hp"
                            },
                            model: {
                              value: _vm.form.hp,
                              callback: function($$v) {
                                _vm.$set(_vm.form, "hp", $$v)
                              },
                              expression: "form.hp"
                            }
                          }),
                          _vm._v(" "),
                          _c("small", { staticClass: "text-muted" }, [
                            _vm._v(" ")
                          ])
                        ],
                        1
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-4" }, [
                      _c(
                        "div",
                        {
                          staticClass: "form-group",
                          class: { "has-error": _vm.errors.has("form.email") }
                        },
                        [
                          _c(
                            "h6",
                            {
                              class: {
                                "text-danger": _vm.errors.has("form.email")
                              }
                            },
                            [
                              _vm.errors.has("form.email")
                                ? _c("i", { staticClass: "icon-cross2" })
                                : _vm._e(),
                              _vm._v("\n\t\t\t\t\t\t\t\tEmail:")
                            ]
                          ),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "validate",
                                rawName: "v-validate",
                                value: "email",
                                expression: "'email'"
                              },
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.form.email,
                                expression: "form.email"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: {
                              type: "text",
                              name: "email",
                              placeholder: "Silahkan masukkan alamat email",
                              "data-vv-as": "Email"
                            },
                            domProps: { value: _vm.form.email },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(_vm.form, "email", $event.target.value)
                              }
                            }
                          }),
                          _vm._v(" "),
                          _vm.errors.has("form.email")
                            ? _c(
                                "small",
                                { staticClass: "text-muted text-danger" },
                                [
                                  _c("i", {
                                    staticClass: "icon-arrow-small-right"
                                  }),
                                  _vm._v(
                                    " " +
                                      _vm._s(_vm.errors.first("form.email")) +
                                      "\n\t\t\t\t\t\t\t"
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
                      _c("div", { staticClass: "form-group" }, [
                        _c("h6", [_vm._v("Kontak Ahli Waris:")]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.form.kontak_ahli_waris,
                              expression: "form.kontak_ahli_waris"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: {
                            type: "text",
                            name: "kontak",
                            placeholder: "Silahkan masukkan kontak ahli waris"
                          },
                          domProps: { value: _vm.form.kontak_ahli_waris },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.form,
                                "kontak_ahli_waris",
                                $event.target.value
                              )
                            }
                          }
                        })
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-4" }, [
                      _c("div", { staticClass: "form-group" }, [
                        _c("h6", [_vm._v("Kontak Lainnya:")]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.form.kontak,
                              expression: "form.kontak"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: {
                            type: "text",
                            name: "kontak",
                            placeholder: "Silahkan masukkan kontak lainnya"
                          },
                          domProps: { value: _vm.form.kontak },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(_vm.form, "kontak", $event.target.value)
                            }
                          }
                        })
                      ])
                    ])
                  ])
                ])
              ])
            : _vm._e(),
          _vm._v(" "),
          _vm.currentUser && _vm.currentUser.id_cu != 0
            ? _c("div", [
                _c(
                  "div",
                  { staticClass: "card" },
                  [
                    _vm._m(5),
                    _vm._v(" "),
                    _c("data-table", {
                      attrs: {
                        items: _vm.itemDataCu,
                        columnData: _vm.columnDataCu,
                        itemDataStat: _vm.itemDataCuStat
                      },
                      scopedSlots: _vm._u(
                        [
                          {
                            key: "item-desktop",
                            fn: function(props) {
                              return [
                                props.item
                                  ? _c(
                                      "tr",
                                      {
                                        staticClass: "text-nowrap",
                                        class: {
                                          "bg-info":
                                            _vm.selectedItemCu.index ===
                                            props.index + 1
                                        },
                                        on: {
                                          click: function($event) {
                                            return _vm.selectedCuRow(
                                              props.index,
                                              props.item
                                            )
                                          }
                                        }
                                      },
                                      [
                                        _c("td", [
                                          _vm._v(_vm._s(props.index + 1))
                                        ]),
                                        _vm._v(" "),
                                        _c(
                                          "td",
                                          [
                                            props.item.cu
                                              ? _c("check-value", {
                                                  attrs: {
                                                    value: props.item.cu.name
                                                  }
                                                })
                                              : _c("span", [_vm._v("-")])
                                          ],
                                          1
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "td",
                                          [
                                            props.item.tp
                                              ? _c("check-value", {
                                                  attrs: {
                                                    value: props.item.tp.name
                                                  }
                                                })
                                              : _c("span", [_vm._v("-")])
                                          ],
                                          1
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "td",
                                          [
                                            _c("check-value", {
                                              attrs: { value: props.item.no_ba }
                                            })
                                          ],
                                          1
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "td",
                                          [
                                            _c("check-value", {
                                              attrs: {
                                                value:
                                                  props.item.keterangan_masuk
                                              }
                                            })
                                          ],
                                          1
                                        ),
                                        _vm._v(" "),
                                        _c("td", {
                                          staticClass: "text-nowrap",
                                          domProps: {
                                            innerHTML: _vm._s(
                                              _vm.$options.filters.date(
                                                props.item.tanggal_masuk
                                              )
                                            )
                                          }
                                        }),
                                        _vm._v(" "),
                                        _c(
                                          "td",
                                          [
                                            _c("check-value", {
                                              attrs: {
                                                value:
                                                  props.item.keterangan_keluar
                                              }
                                            })
                                          ],
                                          1
                                        ),
                                        _vm._v(" "),
                                        _c("td", {
                                          staticClass: "text-nowrap",
                                          domProps: {
                                            innerHTML: _vm._s(
                                              _vm.$options.filters.date(
                                                props.item.tanggal_keluar
                                              )
                                            )
                                          }
                                        })
                                      ]
                                    )
                                  : _vm._e()
                              ]
                            }
                          }
                        ],
                        null,
                        false,
                        1573384605
                      )
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _c("div", { staticClass: "card" }, [
                  _vm._m(6),
                  _vm._v(" "),
                  _c("div", { staticClass: "card-body" }, [
                    _c("div", { staticClass: "row" }, [
                      _c("div", { staticClass: "col-sm-4" }, [
                        _c(
                          "div",
                          {
                            staticClass: "form-group",
                            class: { "has-error": _vm.errors.has("form.tp_id") }
                          },
                          [
                            _c(
                              "h6",
                              {
                                class: {
                                  "text-danger": _vm.errors.has("form.tp_id")
                                }
                              },
                              [
                                _vm.errors.has("form.tp_id")
                                  ? _c("i", { staticClass: "icon-cross2" })
                                  : _vm._e(),
                                _vm._v("\n\t\t\t\t\t\t\t\t\t\tTP/KP: "),
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
                                    value: _vm.form.tp_id,
                                    expression: "form.tp_id"
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
                                  "data-vv-as": "TP/KP"
                                },
                                on: {
                                  change: function($event) {
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
                                      "tp_id",
                                      $event.target.multiple
                                        ? $$selectedVal
                                        : $$selectedVal[0]
                                    )
                                  }
                                }
                              },
                              [
                                _c(
                                  "option",
                                  { attrs: { disabled: "", value: "" } },
                                  [_vm._v("Silahkan pilih TP/KP")]
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
                            _vm.errors.has("form.tp_id")
                              ? _c(
                                  "small",
                                  { staticClass: "text-muted text-danger" },
                                  [
                                    _c("i", {
                                      staticClass: "icon-arrow-small-right"
                                    }),
                                    _vm._v(
                                      " " +
                                        _vm._s(_vm.errors.first("form.tp_id")) +
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
                            class: { "has-error": _vm.errors.has("form.no_ba") }
                          },
                          [
                            _c(
                              "h6",
                              {
                                class: {
                                  "text-danger": _vm.errors.has("form.no_ba")
                                }
                              },
                              [
                                _vm.errors.has("form.no_ba")
                                  ? _c("i", { staticClass: "icon-cross2" })
                                  : _vm._e(),
                                _vm._v("\n\t\t\t\t\t\t\t\t\tNo. BA: "),
                                _c("wajib-badge")
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c("cleave", {
                              directives: [
                                {
                                  name: "validate",
                                  rawName: "v-validate",
                                  value: "required",
                                  expression: "'required'"
                                }
                              ],
                              staticClass: "form-control",
                              attrs: {
                                name: "no_ba",
                                options: _vm.cleaveOption.number16,
                                placeholder:
                                  "Silahkan masukkan no buku anggota",
                                "data-vv-as": "No. Buku Anggota"
                              },
                              model: {
                                value: _vm.form.no_ba,
                                callback: function($$v) {
                                  _vm.$set(_vm.form, "no_ba", $$v)
                                },
                                expression: "form.no_ba"
                              }
                            }),
                            _vm._v(" "),
                            _vm.errors.has("form.no_ba")
                              ? _c(
                                  "small",
                                  { staticClass: "text-muted text-danger" },
                                  [
                                    _c("i", {
                                      staticClass: "icon-arrow-small-right"
                                    }),
                                    _vm._v(
                                      " " +
                                        _vm._s(_vm.errors.first("form.no_ba")) +
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
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-md-4" }, [
                        _c(
                          "div",
                          {
                            staticClass: "form-group",
                            class: {
                              "has-error": _vm.errors.has("form.tanggal_masuk")
                            }
                          },
                          [
                            _c(
                              "h6",
                              {
                                class: {
                                  "text-danger": _vm.errors.has(
                                    "form.tanggal_masuk"
                                  )
                                }
                              },
                              [
                                _vm.errors.has("form.tanggal_masuk")
                                  ? _c("i", { staticClass: "icon-cross2" })
                                  : _vm._e(),
                                _vm._v(
                                  "\n\t\t\t\t\t\t\t\t\tTgl. Jadi Anggota: "
                                ),
                                _c("wajib-badge")
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c("date-picker", {
                              attrs: { defaultDate: _vm.form.tanggal_masuk },
                              on: {
                                dateSelected: function($event) {
                                  _vm.form.tanggal_masuk = $event
                                }
                              }
                            }),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.form.tanggal_masuk,
                                  expression: "form.tanggal_masuk"
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
                              attrs: { "data-vv-as": "Tgl. Jadi Anggota" },
                              domProps: { value: _vm.form.tanggal_masuk },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.form,
                                    "tanggal_masuk",
                                    $event.target.value
                                  )
                                }
                              }
                            }),
                            _vm._v(" "),
                            _vm.errors.has("form.tanggal_masuk")
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
                                          _vm.errors.first("form.tanggal_masuk")
                                        ) +
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
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-md-12" }, [
                        _c("div", { staticClass: "form-group" }, [
                          _c("h6", [
                            _vm._v(
                              "\n\t\t\t\t\t\t\t\t\tKeterangan Jadi Anggota:"
                            )
                          ]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.form.keterangan_masuk,
                                expression: "form.keterangan_masuk"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: {
                              type: "text",
                              name: "keterangan_masuk",
                              placeholder: "Silahkan masukkan keterangan masuk"
                            },
                            domProps: { value: _vm.form.keterangan_masuk },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.form,
                                  "keterangan_masuk",
                                  $event.target.value
                                )
                              }
                            }
                          })
                        ])
                      ]),
                      _vm._v(" "),
                      _vm._m(7)
                    ])
                  ])
                ])
              ])
            : _vm._e(),
          _vm._v(" "),
          _vm.currentUser && _vm.currentUser.id_cu == 0
            ? _c(
                "div",
                { staticClass: "card" },
                [
                  _c("div", { staticClass: "card-header bg-white" }, [
                    _c(
                      "h5",
                      { staticClass: "card-title" },
                      [_vm._v("CU "), _c("wajib-badge")],
                      1
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "card-body pb-2" }, [
                    _c("div", { staticClass: "row" }, [
                      _vm.form.status_jalinan != 1 &&
                      _vm.form.status_jalinan != 2
                        ? _c("div", { staticClass: "col-md-12" }, [
                            _c(
                              "button",
                              {
                                staticClass: "btn btn-light mb-1",
                                on: {
                                  click: function($event) {
                                    $event.preventDefault()
                                    return _vm.modalOpen("tambahCu")
                                  }
                                }
                              },
                              [
                                _c("i", { staticClass: "icon-plus22" }),
                                _vm._v(" Tambah\n\t\t\t\t\t\t")
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "button",
                              {
                                staticClass: "btn btn-light mb-1",
                                attrs: { disabled: !_vm.selectedItemCu.index },
                                on: {
                                  click: function($event) {
                                    $event.preventDefault()
                                    return _vm.modalOpen("ubahCu")
                                  }
                                }
                              },
                              [
                                _c("i", { staticClass: "icon-pencil5" }),
                                _vm._v(" Ubah\n\t\t\t\t\t\t")
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "button",
                              {
                                staticClass: "btn btn-light mb-1",
                                attrs: { disabled: !_vm.selectedItemCu.index },
                                on: {
                                  click: function($event) {
                                    $event.preventDefault()
                                    return _vm.modalOpen("hapusCu")
                                  }
                                }
                              },
                              [
                                _c("i", { staticClass: "icon-bin2" }),
                                _vm._v(" Hapus\n\t\t\t\t\t\t")
                              ]
                            )
                          ])
                        : _vm._e()
                    ])
                  ]),
                  _vm._v(" "),
                  _c("data-table", {
                    attrs: {
                      items: _vm.itemDataCu,
                      columnData: _vm.columnDataCu,
                      itemDataStat: _vm.itemDataCuStat
                    },
                    scopedSlots: _vm._u(
                      [
                        {
                          key: "item-desktop",
                          fn: function(props) {
                            return [
                              props.item
                                ? _c(
                                    "tr",
                                    {
                                      staticClass: "text-nowrap",
                                      class: {
                                        "bg-info":
                                          _vm.selectedItemCu.index ===
                                          props.index + 1
                                      },
                                      on: {
                                        click: function($event) {
                                          return _vm.selectedCuRow(
                                            props.index,
                                            props.item
                                          )
                                        }
                                      }
                                    },
                                    [
                                      _c("td", [
                                        _vm._v(_vm._s(props.index + 1))
                                      ]),
                                      _vm._v(" "),
                                      _c(
                                        "td",
                                        [
                                          props.item.cu
                                            ? _c("check-value", {
                                                attrs: {
                                                  value: props.item.cu.name
                                                }
                                              })
                                            : _c("span", [_vm._v("-")])
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "td",
                                        [
                                          props.item.tp
                                            ? _c("check-value", {
                                                attrs: {
                                                  value: props.item.tp.name
                                                }
                                              })
                                            : _c("span", [_vm._v("-")])
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "td",
                                        [
                                          _c("check-value", {
                                            attrs: { value: props.item.no_ba }
                                          })
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "td",
                                        [
                                          _c("check-value", {
                                            attrs: {
                                              value: props.item.keterangan_masuk
                                            }
                                          })
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c("td", {
                                        staticClass: "text-nowrap",
                                        domProps: {
                                          innerHTML: _vm._s(
                                            _vm.$options.filters.date(
                                              props.item.tanggal_masuk
                                            )
                                          )
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c(
                                        "td",
                                        [
                                          _c("check-value", {
                                            attrs: {
                                              value:
                                                props.item.keterangan_keluar
                                            }
                                          })
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c("td", {
                                        staticClass: "text-nowrap",
                                        domProps: {
                                          innerHTML: _vm._s(
                                            _vm.$options.filters.date(
                                              props.item.tanggal_keluar
                                            )
                                          )
                                        }
                                      })
                                    ]
                                  )
                                : _vm._e()
                            ]
                          }
                        }
                      ],
                      null,
                      false,
                      1573384605
                    )
                  })
                ],
                1
              )
            : _vm._e(),
          _vm._v(" "),
          _c("form-info"),
          _vm._v(" "),
          _c("br"),
          _vm._v(" "),
          _vm.form.status_jalinan != 1 && _vm.form.status_jalinan != 2
            ? _c(
                "div",
                { staticClass: "card card-body" },
                [
                  _c("form-button", {
                    attrs: {
                      cancelState: "methods",
                      formValidation: "form",
                      confirmIcon: _vm.confirmIcon,
                      confirmTitle: _vm.confirmTitle
                    },
                    on: { cancelClick: _vm.back }
                  })
                ],
                1
              )
            : _vm._e()
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "app-modal",
        {
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
        },
        [
          _c("template", { slot: "modal-title" }, [
            _vm._v("\n\t\t\t" + _vm._s(_vm.modalTitle) + "\n\t\t")
          ]),
          _vm._v(" "),
          _c(
            "template",
            { slot: "modal-body3" },
            [
              _c("form-cu", {
                attrs: { mode: _vm.formCuMode, selected: _vm.selectedItemCu },
                on: {
                  createCu: _vm.createCu,
                  editCu: _vm.editCu,
                  tutup: _vm.modalTutup
                }
              })
            ],
            1
          )
        ],
        2
      )
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header bg-white" }, [
      _c("h5", { staticClass: "card-title" }, [_vm._v("Identitas")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header bg-white" }, [
      _c("h5", { staticClass: "card-title" }, [_vm._v("Identitas Anggota")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h6", [
      _vm._v(" Tinggi "),
      _c("small", [_vm._v("(cm)")]),
      _vm._v(":")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header bg-white" }, [
      _c("h5", { staticClass: "card-title" }, [_vm._v("Riwayat")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header bg-white" }, [
      _c("h5", { staticClass: "card-title" }, [_vm._v("Alamat & Kontak")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header bg-white" }, [
      _c("h5", { staticClass: "card-title" }, [
        _vm._v("Keanggotaan Sebelumnya")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header bg-white" }, [
      _c("h5", { staticClass: "card-title" }, [_vm._v("CU")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-sm-12" }, [_c("hr")])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/anggotaCu/form.vue?vue&type=template&id=3f3e3af6&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/views/anggotaCu/form.vue?vue&type=template&id=3f3e3af6& ***!
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
          level2Title: _vm.level2Title,
          level2Route: _vm.kelas
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
              _vm.$route.meta.mode == "create"
                ? _c(
                    "div",
                    [
                      _c("cari-data", {
                        attrs: { itemDataStat: _vm.itemDataStat, isBack: true },
                        on: {
                          cariData: _vm.cariData,
                          changeStatusNIK: _vm.changeStatusNIK,
                          nikNew: _vm.nikNew,
                          resetData: _vm.resetData,
                          back: _vm.back
                        }
                      }),
                      _vm._v(" "),
                      _vm.itemDataStat == "fail"
                        ? _c(
                            "div",
                            {
                              staticClass:
                                "alert bg-success text-whi te alert-styled-left "
                            },
                            [
                              _c(
                                "span",
                                { staticClass: "font-weight-semibold" },
                                [
                                  _vm._v(
                                    "No. KTP tidak terdaftar di SIMO, maka silahkan menambahkan data anggota CU baru.\n\t\t\t\t\t\t"
                                  )
                                ]
                              )
                            ]
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.itemDataStat == "fail"
                        ? _c("form-create", {
                            attrs: {
                              nik: _vm.nik,
                              statusNIK: _vm.statusNIK,
                              mode: "create_new"
                            }
                          })
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.itemDataStat == "success"
                        ? _c("div", [
                            _vm.itemData.status_jalinan == 1 ||
                            _vm.itemData.status_jalinan == 2
                              ? _c(
                                  "div",
                                  {
                                    staticClass:
                                      "alert bg-danger text-white alert-styled-left "
                                  },
                                  [
                                    _c(
                                      "span",
                                      { staticClass: "font-weight-semibold" },
                                      [
                                        _vm._v("Anggota ini sudah dinyatakan "),
                                        _c("b", {
                                          domProps: {
                                            innerHTML: _vm._s(
                                              _vm.$options.filters.statusJalinan(
                                                _vm.itemData.status_jalinan
                                              )
                                            )
                                          }
                                        }),
                                        _vm._v(
                                          ", maka tidak bisa dilakukan penambahan, pengubahan dan penghapusan data produk.\n\t\t\t\t\t\t\t"
                                        )
                                      ]
                                    )
                                  ]
                                )
                              : _c(
                                  "div",
                                  {
                                    staticClass:
                                      "alert bg-warning text-white alert-styled-left"
                                  },
                                  [
                                    _c(
                                      "span",
                                      { staticClass: "font-weight-semibold" },
                                      [
                                        _vm._v(
                                          "No. KTP sudah terdaftar di SIMO. Apabila ingin menambahkan anggota tersebut menjadi anggota cu maka silahkan tambahkan no. ba dan tgl. jadi anggota. \n\t\t\t\t\t\t\t"
                                        )
                                      ]
                                    )
                                  ]
                                )
                          ])
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.itemDataStat == "success"
                        ? _c("form-create", { attrs: { mode: "create_old" } })
                        : _vm._e()
                    ],
                    1
                  )
                : _vm._e(),
              _vm._v(" "),
              _vm.$route.meta.mode == "edit"
                ? _c("form-create", { attrs: { mode: "edit" } })
                : _vm._e(),
              _vm._v(" "),
              _vm.$route.meta.mode == "editJalinan"
                ? _c("form-create", { attrs: { mode: "edit_jalinan" } })
                : _vm._e(),
              _vm._v(" "),
              _vm.$route.meta.mode == "createEdit"
                ? _c("form-create", { attrs: { mode: "create_edit" } })
                : _vm._e(),
              _vm._v(" "),
              _vm.$route.meta.mode == "createJalinan"
                ? _c("form-create", { attrs: { mode: "create_jalinan" } })
                : _vm._e(),
              _vm._v(" "),
              _vm.$route.meta.mode == "createJalinanEdit"
                ? _c("form-create", { attrs: { mode: "create_jalinan_edit" } })
                : _vm._e()
            ],
            1
          )
        ])
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/anggotaCu/formCu.vue?vue&type=template&id=6f5a0ad7&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/views/anggotaCu/formCu.vue?vue&type=template&id=6f5a0ad7& ***!
  \*********************************************************************************************************************************************************************************************************************/
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
  return _c("div", [
    _c(
      "form",
      {
        attrs: { "data-vv-scope": "formDataCu" },
        on: {
          submit: function($event) {
            $event.preventDefault()
            return _vm.save($event)
          }
        }
      },
      [
        _vm.message.show
          ? _c("message", {
              attrs: {
                title: "Oops terjadi kesalahan",
                errorData: _vm.message.content,
                showDebug: false
              },
              on: { close: _vm.messageClose }
            })
          : _vm._e(),
        _vm._v(" "),
        _c("div", { staticClass: "row" }, [
          _vm.currentUser.id_cu === 0
            ? _c("div", { staticClass: "col-md-6" }, [
                _c(
                  "div",
                  {
                    staticClass: "form-group",
                    class: { "has-error": _vm.errors.has("formDataCu.cu_id") }
                  },
                  [
                    _c(
                      "h5",
                      {
                        class: {
                          "text-danger": _vm.errors.has("formDataCu.cu_id")
                        }
                      },
                      [
                        _vm.errors.has("formDataCu.cu_id")
                          ? _c("i", { staticClass: "icon-cross2" })
                          : _vm._e(),
                        _vm._v("\n\t\t\t\t\tCU: "),
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
                            value: _vm.formDataCu.cu_id,
                            expression: "formDataCu.cu_id"
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
                          name: "cu_id",
                          "data-width": "100%",
                          "data-vv-as": "CU",
                          disabled: _vm.modelCU.length === 0
                        },
                        on: {
                          change: [
                            function($event) {
                              var $$selectedVal = Array.prototype.filter
                                .call($event.target.options, function(o) {
                                  return o.selected
                                })
                                .map(function(o) {
                                  var val = "_value" in o ? o._value : o.value
                                  return val
                                })
                              _vm.$set(
                                _vm.formDataCu,
                                "cu_id",
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
                        _c("option", { attrs: { disabled: "", value: "0" } }, [
                          _vm.modelCUStat === "loading"
                            ? _c("span", [_vm._v("Mohon tunggu...")])
                            : _c("span", [_vm._v("Silahkan pilih CU")])
                        ]),
                        _vm._v(" "),
                        _vm._l(_vm.modelCU, function(cu, index) {
                          return _c(
                            "option",
                            { key: index, domProps: { value: cu.id } },
                            [_vm._v(_vm._s(cu.name))]
                          )
                        })
                      ],
                      2
                    ),
                    _vm._v(" "),
                    _vm.errors.has("formDataCu.cu_id")
                      ? _c("small", { staticClass: "text-muted text-danger" }, [
                          _c("i", { staticClass: "icon-arrow-small-right" }),
                          _vm._v(
                            " " +
                              _vm._s(_vm.errors.first("formDataCu.cu_id")) +
                              "\n\t\t\t\t"
                          )
                        ])
                      : _c("small", { staticClass: "text-muted" }, [
                          _vm._v(" ")
                        ])
                  ]
                )
              ])
            : _vm._e(),
          _vm._v(" "),
          _c("div", { staticClass: "col-md-6" }, [
            _c(
              "div",
              {
                staticClass: "form-group",
                class: { "has-error": _vm.errors.has("formDataCu.tp_id") }
              },
              [
                _c(
                  "h6",
                  {
                    class: { "text-danger": _vm.errors.has("formDataCu.tp_id") }
                  },
                  [
                    _vm.errors.has("formDataCu.tp_id")
                      ? _c("i", { staticClass: "icon-cross2" })
                      : _vm._e(),
                    _vm._v("\n\t\t\t\t\tTP/KP: "),
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
                        value: _vm.formDataCu.tp_id,
                        expression: "formDataCu.tp_id"
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
                      "data-vv-as": "TP/KP"
                    },
                    on: {
                      change: [
                        function($event) {
                          var $$selectedVal = Array.prototype.filter
                            .call($event.target.options, function(o) {
                              return o.selected
                            })
                            .map(function(o) {
                              var val = "_value" in o ? o._value : o.value
                              return val
                            })
                          _vm.$set(
                            _vm.formDataCu,
                            "tp_id",
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
                    _c("option", { attrs: { disabled: "", value: "" } }, [
                      _vm.modelTpStat === "loading"
                        ? _c("span", [_vm._v("Mohon tunggu...")])
                        : _c("span", [_vm._v("Silahkan pilih TP/KP")])
                    ]),
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
                _vm.errors.has("formDataCu.tp_id")
                  ? _c("small", { staticClass: "text-muted text-danger" }, [
                      _c("i", { staticClass: "icon-arrow-small-right" }),
                      _vm._v(
                        " " +
                          _vm._s(_vm.errors.first("formDataCu.tp_id")) +
                          "\n\t\t\t\t"
                      )
                    ])
                  : _c("small", { staticClass: "text-muted" }, [_vm._v(" ")])
              ]
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-md-6" }, [
            _c(
              "div",
              {
                staticClass: "form-group",
                class: { "has-error": _vm.errors.has("formDataCu.no_ba") }
              },
              [
                _c(
                  "h5",
                  {
                    class: { "text-danger": _vm.errors.has("formDataCu.no_ba") }
                  },
                  [
                    _vm.errors.has("formDataCu.no_ba")
                      ? _c("i", { staticClass: "icon-cross2" })
                      : _vm._e(),
                    _vm._v("\n\t\t\t\t\tNo. BA: "),
                    _c("wajib-badge")
                  ],
                  1
                ),
                _vm._v(" "),
                _c("cleave", {
                  directives: [
                    {
                      name: "validate",
                      rawName: "v-validate",
                      value: "required",
                      expression: "'required'"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: {
                    name: "anggota_no_ba",
                    options: _vm.cleaveOption.number16,
                    placeholder: "Silahkan masukkan no buku anggota",
                    "data-vv-as": "No. Buku Anggota"
                  },
                  model: {
                    value: _vm.formDataCu.no_ba,
                    callback: function($$v) {
                      _vm.$set(_vm.formDataCu, "no_ba", $$v)
                    },
                    expression: "formDataCu.no_ba"
                  }
                }),
                _vm._v(" "),
                _vm.errors.has("formDataCu.no_ba")
                  ? _c("small", { staticClass: "text-muted text-danger" }, [
                      _c("i", { staticClass: "icon-arrow-small-right" }),
                      _vm._v(
                        " " +
                          _vm._s(_vm.errors.first("formDataCu.no_ba")) +
                          "\n\t\t\t\t"
                      )
                    ])
                  : _c("small", { staticClass: "text-muted" }, [
                      _vm._v(" \n\t\t\t\t")
                    ])
              ],
              1
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-md-6" }, [
            _c(
              "div",
              {
                staticClass: "form-group",
                class: {
                  "has-error": _vm.errors.has("formDataCu.tanggal_masuk")
                }
              },
              [
                _c(
                  "h5",
                  {
                    class: {
                      "text-danger": _vm.errors.has("formDataCu.tanggal_masuk")
                    }
                  },
                  [
                    _vm.errors.has("formDataCu.tanggal_masuk")
                      ? _c("i", { staticClass: "icon-cross2" })
                      : _vm._e(),
                    _vm._v("\n\t\t\t\t\tTgl. Jadi Anggota: "),
                    _c("wajib-badge")
                  ],
                  1
                ),
                _vm._v(" "),
                _c("date-picker", {
                  attrs: { defaultDate: _vm.formDataCu.tanggal_masuk },
                  on: {
                    dateSelected: function($event) {
                      _vm.formDataCu.tanggal_masuk = $event
                    }
                  }
                }),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.formDataCu.tanggal_masuk,
                      expression: "formDataCu.tanggal_masuk"
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
                  attrs: { "data-vv-as": "Tgl. jadi anggota" },
                  domProps: { value: _vm.formDataCu.tanggal_masuk },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(
                        _vm.formDataCu,
                        "tanggal_masuk",
                        $event.target.value
                      )
                    }
                  }
                }),
                _vm._v(" "),
                _vm.errors.has("formDataCu.tanggal_masuk")
                  ? _c("small", { staticClass: "text-muted text-danger" }, [
                      _c("i", { staticClass: "icon-arrow-small-right" }),
                      _vm._v(
                        " " +
                          _vm._s(_vm.errors.first("formDataCu.tanggal_masuk")) +
                          "\n\t\t\t\t"
                      )
                    ])
                  : _c("small", { staticClass: "text-muted" }, [
                      _vm._v(" \n\t\t\t\t")
                    ])
              ],
              1
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-md-12" }, [
            _c("div", { staticClass: "form-group" }, [
              _c("h6", [_vm._v("Keterangan Jadi Anggota:")]),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.formDataCu.keterangan_masuk,
                    expression: "formDataCu.keterangan_masuk"
                  }
                ],
                staticClass: "form-control",
                attrs: {
                  type: "text",
                  name: "keterangan_masuk",
                  placeholder: "Silahkan masukkan keterangan masuk"
                },
                domProps: { value: _vm.formDataCu.keterangan_masuk },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(
                      _vm.formDataCu,
                      "keterangan_masuk",
                      $event.target.value
                    )
                  }
                }
              })
            ])
          ])
        ]),
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
                click: function($event) {
                  $event.preventDefault()
                  return _vm.tutup($event)
                }
              }
            },
            [_c("i", { staticClass: "icon-cross" }), _vm._v(" Tutup")]
          ),
          _vm._v(" "),
          _c(
            "button",
            {
              staticClass: "btn btn-primary",
              attrs: { type: "submit", disabled: _vm.formDataCu.cu_id == "" }
            },
            [_c("i", { staticClass: "icon-floppy-disk" }), _vm._v(" Simpan")]
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "d-block d-md-none" }, [
          _c(
            "button",
            {
              staticClass: "btn btn-primary btn-block pb-2",
              attrs: { type: "submit", disabled: _vm.formDataCu.cu_id == "" }
            },
            [_c("i", { staticClass: "icon-floppy-disk" }), _vm._v(" Simpan")]
          ),
          _vm._v(" "),
          _c(
            "button",
            {
              staticClass: "btn btn-light btn-block pb-2",
              attrs: { type: "button" },
              on: {
                click: function($event) {
                  $event.preventDefault()
                  return _vm.tutup($event)
                }
              }
            },
            [_c("i", { staticClass: "icon-cross" }), _vm._v(" Tutup")]
          )
        ])
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/assets/js/views/anggotaCu/create.vue":
/*!********************************************************!*\
  !*** ./resources/assets/js/views/anggotaCu/create.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _create_vue_vue_type_template_id_3e661706___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create.vue?vue&type=template&id=3e661706& */ "./resources/assets/js/views/anggotaCu/create.vue?vue&type=template&id=3e661706&");
/* harmony import */ var _create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create.vue?vue&type=script&lang=js& */ "./resources/assets/js/views/anggotaCu/create.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _create_vue_vue_type_template_id_3e661706___WEBPACK_IMPORTED_MODULE_0__["render"],
  _create_vue_vue_type_template_id_3e661706___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/views/anggotaCu/create.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/views/anggotaCu/create.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/assets/js/views/anggotaCu/create.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./create.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/anggotaCu/create.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/views/anggotaCu/create.vue?vue&type=template&id=3e661706&":
/*!***************************************************************************************!*\
  !*** ./resources/assets/js/views/anggotaCu/create.vue?vue&type=template&id=3e661706& ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_template_id_3e661706___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./create.vue?vue&type=template&id=3e661706& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/anggotaCu/create.vue?vue&type=template&id=3e661706&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_template_id_3e661706___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_template_id_3e661706___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/assets/js/views/anggotaCu/form.vue":
/*!******************************************************!*\
  !*** ./resources/assets/js/views/anggotaCu/form.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _form_vue_vue_type_template_id_3f3e3af6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form.vue?vue&type=template&id=3f3e3af6& */ "./resources/assets/js/views/anggotaCu/form.vue?vue&type=template&id=3f3e3af6&");
/* harmony import */ var _form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form.vue?vue&type=script&lang=js& */ "./resources/assets/js/views/anggotaCu/form.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _form_vue_vue_type_template_id_3f3e3af6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _form_vue_vue_type_template_id_3f3e3af6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/views/anggotaCu/form.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/views/anggotaCu/form.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/assets/js/views/anggotaCu/form.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./form.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/anggotaCu/form.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/views/anggotaCu/form.vue?vue&type=template&id=3f3e3af6&":
/*!*************************************************************************************!*\
  !*** ./resources/assets/js/views/anggotaCu/form.vue?vue&type=template&id=3f3e3af6& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_template_id_3f3e3af6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./form.vue?vue&type=template&id=3f3e3af6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/anggotaCu/form.vue?vue&type=template&id=3f3e3af6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_template_id_3f3e3af6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_template_id_3f3e3af6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/assets/js/views/anggotaCu/formCu.vue":
/*!********************************************************!*\
  !*** ./resources/assets/js/views/anggotaCu/formCu.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _formCu_vue_vue_type_template_id_6f5a0ad7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./formCu.vue?vue&type=template&id=6f5a0ad7& */ "./resources/assets/js/views/anggotaCu/formCu.vue?vue&type=template&id=6f5a0ad7&");
/* harmony import */ var _formCu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./formCu.vue?vue&type=script&lang=js& */ "./resources/assets/js/views/anggotaCu/formCu.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _formCu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _formCu_vue_vue_type_template_id_6f5a0ad7___WEBPACK_IMPORTED_MODULE_0__["render"],
  _formCu_vue_vue_type_template_id_6f5a0ad7___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/views/anggotaCu/formCu.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/views/anggotaCu/formCu.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/assets/js/views/anggotaCu/formCu.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_formCu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./formCu.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/anggotaCu/formCu.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_formCu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/views/anggotaCu/formCu.vue?vue&type=template&id=6f5a0ad7&":
/*!***************************************************************************************!*\
  !*** ./resources/assets/js/views/anggotaCu/formCu.vue?vue&type=template&id=6f5a0ad7& ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_formCu_vue_vue_type_template_id_6f5a0ad7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./formCu.vue?vue&type=template&id=6f5a0ad7& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/anggotaCu/formCu.vue?vue&type=template&id=6f5a0ad7&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_formCu_vue_vue_type_template_id_6f5a0ad7___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_formCu_vue_vue_type_template_id_6f5a0ad7___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);