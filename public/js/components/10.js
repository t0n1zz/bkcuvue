(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[10],{

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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/identitasAnggotaCu.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/identitasAnggotaCu.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  props: ['itemData']
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/jalinanKlaim/dokumen.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/views/jalinanKlaim/dokumen.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/dist/FileSaver.min.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_1__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  props: ['image', 'name'],
  methods: {
    print: function print() {
      this.$htmlToPaper('printable');
    },
    download: function download() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var options;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                options = {
                  type: 'dataURL'
                };
                _context.next = 3;
                return _this.$html2canvas(_this.$refs.printable, options);

              case 3:
                _this.output = _context.sent;
                file_saver__WEBPACK_IMPORTED_MODULE_1___default.a.saveAs(_this.output, _this.name);

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    tutup: function tutup() {
      this.$emit('tutup');
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/jalinanKlaim/formPeriksaKoreksi.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/views/jalinanKlaim/formPeriksaKoreksi.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var vue_cleave_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-cleave-component */ "./node_modules/vue-cleave-component/dist/vue-cleave.min.js");
/* harmony import */ var vue_cleave_component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_cleave_component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_message_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/message.vue */ "./resources/assets/js/components/message.vue");
/* harmony import */ var _components_formInfo_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/formInfo.vue */ "./resources/assets/js/components/formInfo.vue");
/* harmony import */ var _components_identitas_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/identitas.vue */ "./resources/assets/js/components/identitas.vue");
/* harmony import */ var _components_checkValue_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/checkValue.vue */ "./resources/assets/js/components/checkValue.vue");
/* harmony import */ var _components_datatable_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/datatable.vue */ "./resources/assets/js/components/datatable.vue");
/* harmony import */ var _components_infoIcon_vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/infoIcon.vue */ "./resources/assets/js/components/infoIcon.vue");
/* harmony import */ var _dokumen_vue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dokumen.vue */ "./resources/assets/js/views/jalinanKlaim/dokumen.vue");
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









/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['kelas', 'selected'],
  components: {
    formInfo: _components_formInfo_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    message: _components_message_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    identitas: _components_identitas_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
    checkValue: _components_checkValue_vue__WEBPACK_IMPORTED_MODULE_5__["default"],
    Cleave: vue_cleave_component__WEBPACK_IMPORTED_MODULE_1___default.a,
    dataTable: _components_datatable_vue__WEBPACK_IMPORTED_MODULE_6__["default"],
    infoIcon: _components_infoIcon_vue__WEBPACK_IMPORTED_MODULE_7__["default"],
    dokumen: _dokumen_vue__WEBPACK_IMPORTED_MODULE_8__["default"]
  },
  data: function data() {
    return {
      title: '',
      tabName: 'pengajuan',
      tabNameDokumen: 'meninggal',
      isVerifikator: false,
      isDokumen: false,
      selectedData: {},
      formKoreksi: {
        cu_id: '',
        status: '',
        keterangan_klaim: '',
        tunas_diajukan: '',
        tunas_disetujui: '',
        lintang_diajukan: '',
        lintang_disetujui: '',
        tanggal_pencairan: '',
        surat_tanggal: '',
        surat_nomor: ''
      },
      cleaveOption: {
        numeric: {
          numeral: true,
          numeralThousandsGroupStyle: 'thousand',
          numeralDecimalScale: 2,
          numeralDecimalMark: ',',
          delimiter: '.'
        },
        date: {
          date: true,
          datePattern: ['Y', 'm', 'd'],
          delimiter: '-'
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
        title: 'Tgl. Buat'
      }, {
        title: 'Usia Saat Membuka'
      }],
      penjelasanStatus: '',
      submited: false
    };
  },
  created: function created() {
    this.selectedData = Object.assign({}, this.selected);
    this.formKoreksi.status = this.selectedData.status_klaim;
    this.formKoreksi.keterangan_klaim = this.selectedData.keterangan_klaim;
    this.formKoreksi.tunas_disetujui = this.selectedData.tunas_disetujui;
    this.formKoreksi.lintang_disetujui = this.selectedData.lintang_disetujui;
    this.formKoreksi.tanggal_pencairan = this.selectedData.tanggal_pencairan;
    this.formKoreksi.surat_tanggal = this.selectedData.surat_tanggal;
    this.formKoreksi.surat_nomor = this.selectedData.surat_nomor;
    this.formKoreksi.cu_id = this.selectedData.anggota_cu_cu.cu_id;
    this.$store.dispatch('anggotaCu/indexProduk', [this.selectedData.anggota_cu_id, this.selectedData.anggota_cu_cu.cu_id]);
    this.$store.dispatch(this.kelas + '/getKlaim', this.selectedData.id_koreksi);
  },
  watch: {},
  methods: {
    selectedRow: function selectedRow(item) {
      this.selectedItem = item;
    },
    changeTab: function changeTab(value) {
      this.tabName = value;

      if (value == 'verifikator' && !this.isVerifikator) {
        this.isVerifikator = true;
        this.fetchVerifikator();
      }

      if (value == 'dokumen' && !this.isDokumen) {
        this.isDokumen = true;
      }
    },
    changeTabDokumen: function changeTabDokumen(value) {
      this.tabNameDokumen = value;
    },
    fetchVerifikator: function fetchVerifikator() {
      // get verifikator yang dipilih
      this.$store.dispatch('user/indexCuPermission', this.selectedData.anggota_cu_cu.cu_id); // get verifikator

      this.$store.dispatch('jalinanKlaim/getVerifikator', [this.selectedData.verifikasi_pengurus, this.selectedData.verifikasi_pengawas, this.selectedData.verifikasi_manajemen]);
    },
    save: function save() {
      var _this = this;

      this.formKoreksi.status = 1;
      this.formKoreksi.tunas_diajukan = this.selectedData.tunas_diajukan - this.itemDataJalinan.tunas_diajukan;
      this.formKoreksi.lintang_diajukan = this.selectedData.lintang_diajukan - this.itemDataJalinan.lintang_diajukan;
      this.$validator.validateAll('formKoreksi').then(function (result) {
        if (result) {
          _this.$store.dispatch(_this.kelas + '/periksaKoreksi', [_this.selected.id, _this.formKoreksi]);
        } else {
          _this.submited = true;
        }
      });
    },
    tutup: function tutup() {
      this.$emit('tutup');
    }
  },
  computed: _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('auth', {
    currentUser: 'currentUser'
  })), Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('anggotaCu', {
    itemData: 'dataProduk',
    itemDataStat: 'dataProdukStat'
  })), Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('user', {
    modelVeriPilihPengurus: "dataS1",
    modelVeriPilihPengawas: "dataS2",
    modelVeriPilihManajemen: "dataS3",
    modelVeriPilihPengurusStat: "dataStatS1",
    modelVeriPilihPengawasStat: "dataStatS2",
    modelVeriPilihManajemenStat: "dataStatS3"
  })), Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('jalinanKlaim', {
    itemDataJalinan: 'data',
    itemDataJalinanStat: 'dataStat',
    modelVeriPengurus: "dataVeri1",
    modelVeriPengawas: "dataVeri2",
    modelVeriManajemen: "dataVeri3",
    modelVeriStat: "dataStatVeri"
  })), {}, {
    selisihTunas: function selisihTunas() {
      // `this` points to the vm instance
      return this.formKoreksi.tunas_disetujui - this.selectedData.tunas_diajukan;
    },
    selisihLintang: function selisihLintang() {
      // `this` points to the vm instance
      return this.formKoreksi.lintang_disetujui - this.selectedData.lintang_diajukan;
    },
    usiaMasukCU: function usiaMasukCU() {
      // `this` points to the vm instance
      return this.formKoreksi.lintang_disetujui - this.selectedData.lintang_diajukan;
    }
  })
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/jalinanKlaim/formStatus.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/views/jalinanKlaim/formStatus.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var vue_cleave_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-cleave-component */ "./node_modules/vue-cleave-component/dist/vue-cleave.min.js");
/* harmony import */ var vue_cleave_component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_cleave_component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_message_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/message.vue */ "./resources/assets/js/components/message.vue");
/* harmony import */ var _components_formInfo_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/formInfo.vue */ "./resources/assets/js/components/formInfo.vue");
/* harmony import */ var _components_identitasAnggotaCu_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/identitasAnggotaCu.vue */ "./resources/assets/js/components/identitasAnggotaCu.vue");
/* harmony import */ var _components_checkValue_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/checkValue.vue */ "./resources/assets/js/components/checkValue.vue");
/* harmony import */ var _components_datatable_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/datatable.vue */ "./resources/assets/js/components/datatable.vue");
/* harmony import */ var _components_infoIcon_vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/infoIcon.vue */ "./resources/assets/js/components/infoIcon.vue");
/* harmony import */ var _verifikator_vue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./verifikator.vue */ "./resources/assets/js/views/jalinanKlaim/verifikator.vue");
/* harmony import */ var _dokumen_vue__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./dokumen.vue */ "./resources/assets/js/views/jalinanKlaim/dokumen.vue");
/* harmony import */ var _riwayatKlaim_vue__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./riwayatKlaim.vue */ "./resources/assets/js/views/jalinanKlaim/riwayatKlaim.vue");
/* harmony import */ var _components_datePicker_vue__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/datePicker.vue */ "./resources/assets/js/components/datePicker.vue");
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  props: ['kelas', 'selected', 'tipe'],
  components: {
    formInfo: _components_formInfo_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    message: _components_message_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    identitas: _components_identitasAnggotaCu_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
    checkValue: _components_checkValue_vue__WEBPACK_IMPORTED_MODULE_5__["default"],
    Cleave: vue_cleave_component__WEBPACK_IMPORTED_MODULE_1___default.a,
    dataTable: _components_datatable_vue__WEBPACK_IMPORTED_MODULE_6__["default"],
    infoIcon: _components_infoIcon_vue__WEBPACK_IMPORTED_MODULE_7__["default"],
    verifikator: _verifikator_vue__WEBPACK_IMPORTED_MODULE_8__["default"],
    dokumen: _dokumen_vue__WEBPACK_IMPORTED_MODULE_9__["default"],
    DatePicker: _components_datePicker_vue__WEBPACK_IMPORTED_MODULE_11__["default"],
    riwayatKlaim: _riwayatKlaim_vue__WEBPACK_IMPORTED_MODULE_10__["default"]
  },
  data: function data() {
    return {
      title: '',
      tabName: 'pengajuan',
      tabNameDokumen: '',
      isVerifikator: false,
      isDokumen: false,
      isHistory: false,
      selectedData: {},
      formStatus: {
        cu_id: '',
        status: '',
        keterangan_klaim: '',
        tunas_disetujui: '',
        lintang_disetujui: '',
        tanggal_pencairan: '',
        surat_tanggal: '',
        surat_nomor: ''
      },
      cleaveOption: {
        numeric: {
          numeral: true,
          numeralThousandsGroupStyle: 'thousand',
          numeralDecimalScale: 2,
          numeralDecimalMark: ',',
          delimiter: '.'
        },
        date: {
          date: true,
          datePattern: ['Y', 'm', 'd'],
          delimiter: '-'
        }
      },
      selectedItem: {},
      selectedProduk: {},
      pagesSaldo: [],
      querySaldo: {
        order_column: "created_at",
        order_direction: "desc",
        filter_match: "and",
        limit: 10,
        page: 1
      },
      tipeProduk: '',
      columnDataSaldo: [],
      penjelasanStatus: '',
      submited: false
    };
  },
  created: function created() {
    this.$store.dispatch('anggotaCu/resetDataProdukSaldo');
    this.selectedData = Object.assign({}, this.selected);
    this.formStatus.status = this.selectedData.status_klaim;
    this.formStatus.keterangan_klaim = this.selectedData.keterangan_klaim;
    this.formStatus.tunas_disetujui = this.selectedData.tunas_disetujui;
    this.formStatus.lintang_disetujui = this.selectedData.lintang_disetujui;
    this.formStatus.tanggal_pencairan = this.selectedData.tanggal_pencairan;
    this.formStatus.surat_tanggal = this.selectedData.surat_tanggal;
    this.formStatus.surat_nomor = this.selectedData.surat_nomor;
    this.formStatus.cu_id = this.selectedData.anggota_cu_cu.cu_id;
    this.$store.dispatch('anggotaCu/indexProduk', [this.selectedData.anggota_cu_id, this.selectedData.anggota_cu_cu.cu_id]);
  },
  watch: {
    itemDataSaldoStat: function itemDataSaldoStat(value) {
      if (value == 'success') {
        this.calculatePagination();
      }
    }
  },
  methods: {
    selectedRow: function selectedRow(item) {
      this.selectedItem = item;
    },
    changeTab: function changeTab(value) {
      this.tabName = value;

      if (value == 'verifikator' && !this.isVerifikator) {
        this.isVerifikator = true;
        this.fetchVerifikator();
      }

      if (value == 'dokumen' && !this.isDokumen) {
        this.isDokumen = true;
      }

      if (value == 'history' && !this.isHistory) {
        this.isHistory = true;
        this.$store.dispatch('jalinanKlaim/getHistory', this.selectedData.id);
      }
    },
    changeTabDokumen: function changeTabDokumen(value) {
      this.tabNameDokumen = value;
    },
    fetchVerifikator: function fetchVerifikator() {
      // get verifikator yang dipilih
      this.$store.dispatch('user/indexCuPermission', this.selectedData.anggota_cu_cu.cu_id); // get verifikator

      this.$store.dispatch('jalinanKlaim/getVerifikator', [this.selectedData.verifikasi_pengurus, this.selectedData.verifikasi_pengawas, this.selectedData.verifikasi_manajemen]);
    },
    fetchProdukSaldo: function fetchProdukSaldo(value) {
      this.selectedProduk = value;

      if (value.produk_cu.tipe == 'Simpanan Pokok' || value.produk_cu.tipe == 'Simpanan Wajib' || value.produk_cu.tipe == 'Simpanan Non Saham') {
        this.tipeProduk = 'simpanan';
        this.columnDataSaldo = [{
          title: 'No.'
        }, {
          title: 'Nominal'
        }, {
          title: 'Tgl. Transaksi'
        }];
      } else {
        this.tipeProduk = 'pinjaman';
        this.columnDataSaldo = [{
          title: 'No.'
        }, {
          title: 'Nominal'
        }, {
          title: 'Bulan Angsuran'
        }, {
          title: 'Tgl. Transaksi'
        }];
      }

      this.$store.dispatch('anggotaCu/indexProdukSaldo', [this.querySaldo, value.id]);
    },
    calculatePagination: function calculatePagination() {
      var i = 0;
      var startPage = 0;
      var endPage = 0;
      var diffPage = 0;
      startPage = this.querySaldo.page < 3 ? 1 : this.querySaldo.page - 1;
      endPage = 4 + startPage;
      endPage = this.itemDataSaldo.last_page < endPage ? this.itemDataSaldo.last_page : endPage;
      diffPage = startPage - endPage + 4;
      startPage -= startPage - diffPage > 0 ? diffPage : 0;
      this.pagesSaldo.length = 0;

      for (i = startPage; i <= endPage; i++) {
        this.pagesSaldo.push(i);
      }
    },
    prevPageSaldo: function prevPageSaldo() {
      if (this.itemDataSaldo.prev_page_url) {
        this.querySaldo.page = Number(this.querySaldo.page) - 1;
        this.fetchProdukSaldo(this.selectedProduk);
      }
    },
    goToPageSaldo: function goToPageSaldo(value) {
      if (this.querySaldo.page != value) {
        this.querySaldo.page = value;
        this.fetchProdukSaldo(this.selectedProduk);
      }
    },
    nextPageSaldo: function nextPageSaldo() {
      if (this.itemDataSaldo.next_page_url) {
        this.querySaldo.page = Number(this.querySaldo.page) + 1;
        this.fetchProdukSaldo(this.selectedProduk);
      }
    },
    save: function save() {
      var _this = this;

      if (this.formStatus != '1') {
        this.tunas_disetujui = '';
        this.lintang_disetujui = '';
      }

      if (this.formStatus != '2' && this.formStatus != '3') {
        this.keterangan_klaim = '';
      }

      if (this.tipe == 'selesai') {
        this.$store.dispatch(this.kelas + "/updateSelesai", this.selected.id);
      } else if (this.tipe == 'verifikasi') {
        this.$store.dispatch(this.kelas + "/updateVerifikasi", [this.selected.id, this.currentUser]);
      } else {
        this.$validator.validateAll('formStatus').then(function (result) {
          if (result) {
            _this.$store.dispatch(_this.kelas + '/updateStatus', [_this.selected.id, _this.formStatus]);
          } else {
            _this.submited = true;
          }
        });
      }
    },
    tutup: function tutup() {
      this.$emit('tutup');
    }
  },
  computed: _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('auth', {
    currentUser: 'currentUser'
  })), Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('anggotaCu', {
    itemData: 'dataProduk',
    itemDataSaldo: 'dataProdukSaldo',
    itemDataStat: 'dataProdukStat',
    itemDataSaldoStat: 'dataProdukSaldoStat'
  })), Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('user', {
    modelVeriPilihPengurus: "dataS1",
    modelVeriPilihPengawas: "dataS2",
    modelVeriPilihManajemen: "dataS3",
    modelVeriPilihPengurusStat: "dataStatS1",
    modelVeriPilihPengawasStat: "dataStatS2",
    modelVeriPilihManajemenStat: "dataStatS3"
  })), Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('jalinanKlaim', {
    history: "history",
    historyStat: "historyStat",
    modelVeriPengurus: "dataVeri1",
    modelVeriPengawas: "dataVeri2",
    modelVeriManajemen: "dataVeri3",
    modelVeriStat: "dataStatVeri"
  })), {}, {
    selisihTunas: function selisihTunas() {
      // `this` points to the vm instance
      return this.formStatus.tunas_disetujui - this.selectedData.tunas_diajukan;
    },
    selisihLintang: function selisihLintang() {
      // `this` points to the vm instance
      return this.formStatus.lintang_disetujui - this.selectedData.lintang_diajukan;
    },
    usiaMasukCU: function usiaMasukCU() {
      // `this` points to the vm instance
      return this.formStatus.lintang_disetujui - this.selectedData.lintang_diajukan;
    }
  })
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/jalinanKlaim/riwayatKlaim.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/views/jalinanKlaim/riwayatKlaim.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_checkValue_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/checkValue.vue */ "./resources/assets/js/components/checkValue.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  props: ['itemData', 'itemDataStat'],
  components: {
    checkValue: _components_checkValue_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {};
  },
  created: function created() {},
  watch: {},
  methods: {
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
  computed: {
    history: function history() {
      return lodash__WEBPACK_IMPORTED_MODULE_1___default.a.groupBy(this.itemData, 'created_at');
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/jalinanKlaim/surat.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/views/jalinanKlaim/surat.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _components_checkValue_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/checkValue.vue */ "./resources/assets/js/components/checkValue.vue");
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


/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    checkValue: _components_checkValue_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  props: ['selectedItem', 'tipe'],
  created: function created() {
    this.$store.dispatch('provinces/edit', this.selectedItem.anggota_cu_cu.cu.id_provinces);
    this.$store.dispatch('regencies/edit', this.selectedItem.anggota_cu_cu.cu.id_regencies);
    this.$store.dispatch('districts/edit', this.selectedItem.anggota_cu_cu.cu.id_districts);
    this.$store.dispatch('villages/edit', this.selectedItem.anggota_cu_cu.cu.id_villages);
  },
  methods: {
    print: function print() {
      this.$htmlToPaper('printable');
    },
    tutup: function tutup() {
      this.$emit('tutup');
    }
  },
  filters: {
    capitalize: function capitalize(value) {
      if (!value) return '';
      var splitValue = value.toLowerCase().split(' ');

      for (var i = 0; i < splitValue.length; i++) {
        splitValue[i] = splitValue[i].charAt(0).toUpperCase() + splitValue[i].substring(1);
      }

      return splitValue.join(' ');
    }
  },
  computed: _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('provinces', {
    modelProvinces: 'data',
    modelProvincesStat: 'dataStat'
  })), Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('regencies', {
    modelRegencies: 'data',
    modelRegenciesStat: 'dataStat'
  })), Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('districts', {
    modelDistricts: 'data',
    modelDistrictsStat: 'dataStat'
  })), Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('villages', {
    modelVillages: 'data',
    modelVillagesStat: 'dataStat'
  }))
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/jalinanKlaim/table.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/views/jalinanKlaim/table.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _components_dataviewer2_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/dataviewer2.vue */ "./resources/assets/js/components/dataviewer2.vue");
/* harmony import */ var _components_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/modal */ "./resources/assets/js/components/modal.vue");
/* harmony import */ var _components_collapseButton_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/collapseButton.vue */ "./resources/assets/js/components/collapseButton.vue");
/* harmony import */ var _components_checkValue_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/checkValue.vue */ "./resources/assets/js/components/checkValue.vue");
/* harmony import */ var _formStatus_vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./formStatus.vue */ "./resources/assets/js/views/jalinanKlaim/formStatus.vue");
/* harmony import */ var _formPeriksaKoreksi_vue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./formPeriksaKoreksi.vue */ "./resources/assets/js/views/jalinanKlaim/formPeriksaKoreksi.vue");
/* harmony import */ var _surat_vue__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./surat.vue */ "./resources/assets/js/views/jalinanKlaim/surat.vue");
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










/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    DataViewer: _components_dataviewer2_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    appModal: _components_modal__WEBPACK_IMPORTED_MODULE_4__["default"],
    collapseButton: _components_collapseButton_vue__WEBPACK_IMPORTED_MODULE_5__["default"],
    checkValue: _components_checkValue_vue__WEBPACK_IMPORTED_MODULE_6__["default"],
    formStatus: _formStatus_vue__WEBPACK_IMPORTED_MODULE_7__["default"],
    formPeriksaKoreksi: _formPeriksaKoreksi_vue__WEBPACK_IMPORTED_MODULE_8__["default"],
    surat: _surat_vue__WEBPACK_IMPORTED_MODULE_9__["default"]
  },
  props: ["title", "kelas", "status", "itemData", "itemDataStat", "isSimple"],
  data: function data() {
    return {
      selectedItem: [],
      tipeSurat: '',
      query: {
        order_column: "created_at",
        order_direction: "asc",
        filter_match: "and",
        limit: 10,
        page: 1
      },
      provinces: '',
      regencies: '',
      districts: '',
      villages: '',
      excelDownloadUrl: '',
      columnData: [{
        title: 'No.',
        name: 'No.'
      }, {
        title: 'Keterangan',
        name: 'keterangan_klaim',
        tipe: 'string',
        sort: false,
        hide: false,
        disable: false,
        filter: true
      }, {
        title: 'No. KTP / NIK',
        name: 'anggota_cu.nik',
        tipe: 'string',
        sort: true,
        hide: false,
        disable: false,
        filter: true
      }, {
        title: 'No. BA',
        name: 'anggota_cu_cu.no_ba',
        tipe: 'string',
        sort: false,
        hide: false,
        disable: false,
        filter: true
      }, {
        title: 'CU',
        name: 'anggota_cu_cu.cu.name',
        tipe: 'string',
        sort: false,
        hide: false,
        disable: false,
        filter: false
      }, {
        title: 'TP/KP',
        name: 'anggota_cu_cu.tp.name',
        tipe: 'string',
        sort: false,
        hide: false,
        disable: false,
        filter: false
      }, {
        title: 'Nama',
        name: 'anggota_cu.name',
        tipe: 'string',
        sort: true,
        hide: false,
        disable: false,
        filter: true,
        filterDefault: true
      }, {
        title: 'Tipe',
        name: 'tipe',
        tipe: 'string',
        sort: true,
        hide: false,
        disable: false,
        filter: true
      }, {
        title: 'Kategori Penyakit',
        name: 'kategori_penyakit',
        tipe: 'string',
        sort: true,
        hide: false,
        disable: false,
        filter: true
      }, {
        title: 'Verifikasi Pengurus',
        name: 'verifikasi_pengurus',
        tipe: 'string',
        sort: false,
        hide: false,
        disable: false,
        filter: false
      }, {
        title: 'Verifikasi Pengawas',
        name: 'verifikasi_pengawas',
        tipe: 'string',
        sort: false,
        hide: false,
        disable: false,
        filter: false
      }, {
        title: 'Verifikasi Manajemen',
        name: 'verifikasi_manajemen',
        tipe: 'string',
        sort: false,
        hide: false,
        disable: false,
        filter: false
      }, {
        title: 'Keterangan Cacat/Meninggal',
        name: 'keterangan_mati',
        tipe: 'string',
        sort: false,
        hide: false,
        disable: false,
        filter: true
      }, {
        title: 'TUNAS diajukan',
        name: 'tunas_diajukan',
        tipe: 'numeric',
        sort: true,
        hide: false,
        disable: false,
        filter: true
      }, {
        title: 'LINTANG diajukan',
        name: 'lintang_diajukan',
        tipe: 'numeric',
        sort: true,
        hide: false,
        disable: false,
        filter: true
      }, {
        title: 'TUNAS disetujui',
        name: 'tunas_disetujui',
        tipe: 'numeric',
        sort: true,
        hide: false,
        disable: false,
        filter: true
      }, {
        title: 'LINTANG disetujui',
        name: 'lintang_disetujui',
        tipe: 'numeric',
        sort: true,
        hide: false,
        disable: false,
        filter: true
      }, {
        title: 'Tgl. Cacat/Meninggal',
        name: 'tanggal_mati',
        tipe: 'datetime',
        sort: true,
        hide: false,
        disable: false,
        filter: true
      }, {
        title: 'Tgl. Lahir',
        name: 'anggota_cu.tanggal_lahir',
        tipe: 'datetime',
        sort: true,
        hide: false,
        disable: false,
        filter: true
      }, {
        title: 'Tgl. Jadi Anggota',
        name: 'anggota_cu_cu.tanggal_masuk',
        tipe: 'datetime',
        sort: false,
        hide: false,
        disable: false,
        filter: true
      }, {
        title: 'Tgl. Pencairan',
        name: 'tanggal_pencairan',
        tipe: 'datetime',
        sort: true,
        hide: false,
        disable: false,
        filter: true
      }, {
        title: 'Usia Meninggal',
        name: 'anggota_cu.usia_meninggal',
        tipe: 'string',
        sort: false,
        hide: false,
        disable: false,
        filter: false
      }, {
        title: 'Usia Cacat',
        name: 'anggota_cu.usia_cacat',
        tipe: 'string',
        sort: false,
        hide: false,
        disable: false,
        filter: false
      }, {
        title: 'Lama Menjadi Anggota (BULAN)',
        name: 'anggota_cu_cu.lama_menjadi_anggota',
        tipe: 'string',
        sort: false,
        hide: false,
        disable: false,
        filter: false
      }, {
        title: 'Keterangan Lain',
        name: 'keterangan',
        tipe: 'string',
        sort: false,
        hide: false,
        disable: false,
        filter: true
      }, {
        title: 'Gender',
        name: 'anggota_cu.kelamin',
        tipe: 'string',
        sort: false,
        hide: false,
        disable: false,
        filter: true
      }, {
        title: 'Alih Waris',
        name: 'anggota_cu.ahli_waris',
        tipe: 'string',
        sort: false,
        hide: false,
        disable: false,
        filter: true
      }, {
        title: 'Provinsi',
        name: 'anggota_cu.provinces.name',
        tipe: 'string',
        sort: false,
        hide: false,
        disable: false,
        filter: true
      }, {
        title: 'Alamat',
        name: 'anggota_cu.alamat',
        tipe: 'string',
        sort: false,
        hide: false,
        disable: false,
        filter: true
      }, {
        title: 'Hp',
        name: 'anggota_cu.hp',
        tipe: 'string',
        sort: false,
        hide: false,
        disable: false,
        filter: true
      }, {
        title: 'Tgl. / Waktu Buat',
        name: 'created_at',
        tipe: 'datetime',
        sort: true,
        hide: false,
        disable: false,
        filter: true
      }, {
        title: 'Tgl. / Waktu Ubah',
        name: 'updated_at',
        tipe: 'datetime',
        sort: true,
        hide: false,
        disable: false,
        filter: true
      }],
      state: '',
      modalShow: false,
      modalState: "",
      modalColor: "",
      modalSize: "",
      modalTitle: "",
      modalContent: "",
      modalButton: ""
    };
  },
  created: function created() {
    if (this.status == 1 || this.status == 2 || this.status == 3) {
      this.columnData[1].disable = false;
      this.columnData[9].disable = true;
      this.columnData[10].disable = true;
      this.columnData[11].disable = true;
      this.columnData[15].disable = true;
      this.columnData[16].disable = true;
      this.columnData[20].disable = true;
    } else if (this.status == 4 || this.status == 5 || this.status == 6 || this.status == 7) {
      this.columnData[1].disable = false;
      this.columnData[9].disable = true;
      this.columnData[10].disable = true;
      this.columnData[11].disable = true;
      this.columnData[15].disable = false;
      this.columnData[16].disable = false;
      this.columnData[20].disable = false;
    } else {
      this.columnData[9].disable = false;
      this.columnData[10].disable = false;
      this.columnData[11].disable = false;
      this.columnData[1].disable = true;
      this.columnData[15].disable = true;
      this.columnData[16].disable = true;
      this.columnData[20].disable = true;
    }

    this.fetch(this.query);
  },
  watch: {
    // check route changes
    '$route': function $route(to, from) {
      this.fetch(this.query);
    },
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
    }
  },
  methods: {
    fetch: function fetch(params) {
      if (this.$route.params.cu == 'semua') {
        this.$store.dispatch(this.kelas + '/index' + this.status, [params, this.$route.params.jenis, this.$route.params.kategori, this.$route.params.dari, this.$route.params.ke, this.$route.params.awal, this.$route.params.akhir]);

        if (this.$route.params.jenis == 'usia') {
          this.excelDownloadUrl = this.kelas + '/indexLaporanUsiaDetail/semua/' + this.status + '/' + this.$route.params.dari + '/' + this.$route.params.ke + '/' + this.$route.params.awal + '/' + this.$route.params.akhir;
        } else if (this.$route.params.jenis == 'penyebab') {
          this.excelDownloadUrl = this.kelas + '/indexLaporanPenyebabDetail/semua/' + this.status + '/' + this.$route.params.kategori + '/' + this.$route.params.awal + '/' + this.$route.params.akhir;
        } else if (this.$route.params.jenis == 'cu') {
          this.excelDownloadUrl = this.kelas + '/indexLaporanCuDetail/semua/' + this.status + '/' + this.$route.params.awal + '/' + this.$route.params.akhir;
        } else {
          this.excelDownloadUrl = this.kelas + '/status/' + this.status + '/' + this.$route.params.awal + '/' + this.$route.params.akhir;
        }

        this.columnData[4].disable = false;
      } else {
        this.$store.dispatch(this.kelas + '/indexCu' + this.status, [params, this.$route.params.cu, this.$route.params.tp, this.$route.params.jenis, this.$route.params.kategori, this.$route.params.dari, this.$route.params.ke, this.$route.params.awal, this.$route.params.akhir]);

        if (this.$route.params.jenis == 'usia') {
          this.excelDownloadUrl = this.kelas + '/indexLaporanUsiaDetail/' + this.$route.params.cu + '/' + this.status + '/' + this.$route.params.dari + '/' + this.$route.params.ke + '/' + this.$route.params.awal + '/' + this.$route.params.akhir;
        } else if (this.$route.params.jenis == 'penyebab') {
          this.excelDownloadUrl = this.kelas + '/indexLaporanPenyebabDetail/' + this.$route.params.cu + '/' + this.status + '/' + this.$route.params.kategori + '/' + this.$route.params.awal + '/' + this.$route.params.akhir;
        } else if (this.$route.params.jenis == 'cu') {
          this.excelDownloadUrl = this.kelas + '/indexLaporanCuDetail/' + this.$route.params.cu + '/' + this.status + '/' + this.$route.params.awal + '/' + this.$route.params.akhir;
        } else {
          this.excelDownloadUrl = this.kelas + '/indexCu/' + this.$route.params.cu + '/' + this.$route.params.tp + '/status/' + this.status + '/' + this.$route.params.awal + '/' + this.$route.params.akhir;
          this.$store.dispatch('user/indexCuPermission', this.$route.params.cu);
        }

        this.columnData[4].disable = true;
      }
    },
    selectedRow: function selectedRow(item) {
      this.selectedItem = item;
    },
    ubahData: function ubahData(nik, cu, tipe) {
      this.$router.push({
        name: this.kelas + "Edit",
        params: {
          nik: nik,
          cu: cu,
          tipe: tipe
        }
      });
    },
    ubahDataAnggota: function ubahDataAnggota(id, type) {
      if (type == 'identitas') {
        this.$router.push({
          name: "anggotaCuEditJalinan",
          params: {
            id: id
          }
        });
      } else if (type == 'produk') {
        this.$router.push({
          name: "anggotaCuProdukEditJalinan",
          params: {
            id: id,
            cu: this.$route.params.cu
          }
        });
      }
    },
    koreksiData: function koreksiData(nik, cu, tipe) {
      this.$router.push({
        name: this.kelas + "Koreksi",
        params: {
          nik: nik.replace(/[\s\/]/g, ''),
          cu: cu,
          tipe: tipe
        }
      });
    },
    modalOpen: function modalOpen(state, isMobile, itemMobile) {
      this.modalShow = true;
      this.state = state;

      if (state == "hapus") {
        this.modalState = "confirm-tutup";
        this.modalTitle = "Hapus " + this.title + " atas nama: " + this.selectedItem.anggota_cu.name + " ?";
        this.modalButton = "Iya, Hapus";
        this.modalSize = "''";
      } else if (state == "lihat") {
        this.modalState = 'normal1';
        this.modalTitle = 'Lihat Klaim ' + this.title + ' atas nama: ' + this.selectedItem.anggota_cu.name;
        this.modalColor = 'bg-primary';
        this.modalSize = "modal-full";
      } else if (state == "analisis") {
        this.modalState = 'normal1';
        this.modalTitle = 'Analisis ' + this.title + ' atas nama: ' + this.selectedItem.anggota_cu.name;
        this.modalColor = 'bg-primary';
        this.modalSize = "modal-full";
      } else if (state == "selesai") {
        this.modalState = "normal1";
        this.modalColor = 'bg-primary';
        this.modalSize = "modal-full";

        if (this.status == '4') {
          this.modalTitle = "Selesaikan " + this.title + " atas nama: " + this.selectedItem.anggota_cu.name + " ?";
        } else {
          this.modalTitle = "Batal selesaikan " + this.title + " atas nama: " + this.selectedItem.anggota_cu.name + " ?";
        }
      } else if (state == "verifikasi") {
        this.modalState = 'normal1';
        this.modalTitle = 'Verifikasi ' + this.title + ' atas nama: ' + this.selectedItem.anggota_cu.name;
        this.modalColor = 'bg-primary';
        this.modalSize = "modal-full";
      } else if (state == "surat_cair") {
        this.modalState = 'normal2';
        this.modalTitle = 'Surat Pencairan ' + this.title + ' atas nama: ' + this.selectedItem.anggota_cu.name;
        this.modalColor = 'bg-primary';
        this.modalSize = "modal-lg";
        this.tipeSurat = 'cair';
      } else if (state == "surat_tolak") {
        this.modalState = 'normal2';
        this.modalTitle = 'Surat Penolakan ' + this.title + ' atas nama: ' + this.selectedItem.anggota_cu.name;
        this.modalColor = 'bg-primary';
        this.modalSize = "modal-lg";
        this.tipeSurat = 'tolak';
      } else if (state == "surat_kurang") {
        this.modalState = 'normal2';
        this.modalTitle = 'Surat Pernyataan dokumen ' + this.title + ' tidak lengkap atas nama: ' + this.selectedItem.anggota_cu.name;
        this.modalColor = 'bg-primary';
        this.modalSize = "modal-lg";
        this.tipeSurat = 'kurang';
      } else if (state == "periksa_koreksi") {
        this.modalState = 'normal3';
        this.modalTitle = 'Koreksi ' + this.title + ' atas nama: ' + this.selectedItem.anggota_cu.name;
        this.modalColor = 'bg-primary';
        this.modalSize = "modal-full";
      }
    },
    modalTutup: function modalTutup() {
      this.modalShow = false;
      this.$store.dispatch(this.kelas + "/resetUpdateStat");
    },
    modalConfirmOk: function modalConfirmOk() {
      if (this.state == "hapus") {
        this.$store.dispatch(this.kelas + "/destroy", this.selectedItem.id);
      } else if (this.state == 'selesai') {
        this.$store.dispatch(this.kelas + "/updateSelesai", this.selectedItem.id);
      }
    }
  },
  computed: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_2__["mapGetters"])("jalinanKlaim", {
    updateMessage: "update",
    updateStat: "updateStat"
  })), Object(vuex__WEBPACK_IMPORTED_MODULE_2__["mapGetters"])("auth", {
    currentUser: "currentUser"
  }))
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/jalinanKlaim/verifikator.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/views/jalinanKlaim/verifikator.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  props: ["title", "itemData", "itemDataStat", "isSingle"],
  methods: {}
});

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
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c(
      "button",
      {
        staticClass: "btn btn-link btn-block",
        attrs: { "data-toggle": "collapse", "data-target": ".collap" + _vm.id },
        on: { click: _vm.btnClick }
      },
      [
        _vm.clicked
          ? _c("span", [
              _c("i", { staticClass: "icon-arrow-up12" }),
              _vm._v(" Kembali "),
              _c("i", { staticClass: "icon-arrow-up12" })
            ])
          : _c("span", [
              _c("i", { staticClass: "icon-arrow-down12" }),
              _vm._v(" Selengkapnya "),
              _c("i", { staticClass: "icon-arrow-down12" })
            ])
      ]
    )
  ])
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
    return _c("div", [
      _c("div", { staticClass: "alert bg-info alert-styled-left" }, [
        _c("h6", [
          _vm._v("Pastikan data yang dimasukkan sudah benar sebelum menyimpan.")
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/identitasAnggotaCu.vue?vue&type=template&id=eac68d6a&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/identitasAnggotaCu.vue?vue&type=template&id=eac68d6a& ***!
  \****************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "media flex-column flex-sm-row mt-0 mb-3" }, [
    _c("div", { staticClass: "mr-sm-3 mb-2 mb-sm-0" }, [
      _c("div", { staticClass: "card-img-actions" }, [
        _vm.itemData.gambar
          ? _c("img", {
              staticClass: "img-fluid img-preview rounded",
              attrs: {
                src: "/images/anggotaCu/" + _vm.itemData.gambar + ".jpg"
              }
            })
          : _c("img", {
              staticClass: "img-fluid img-preview rounded",
              attrs: { src: "/images/no_image.jpg" }
            })
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "media-body" }, [
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-sm-4" }, [
          _c("ul", { staticClass: "list list-unstyled mb-0" }, [
            _c("li", [
              _c("b", [_vm._v("No. KTP:")]),
              _vm._v(" " + _vm._s(_vm.itemData.nik))
            ]),
            _vm._v(" "),
            _c("li", [
              _c("b", [_vm._v("No. KK:")]),
              _vm._v(" " + _vm._s(_vm.itemData.kk))
            ]),
            _vm._v(" "),
            _c("li", [
              _c("b", [_vm._v("Nama:")]),
              _vm._v(" " + _vm._s(_vm.itemData.name))
            ]),
            _vm._v(" "),
            _c("li", [
              _c("b", [_vm._v("Suku:")]),
              _vm._v(" " + _vm._s(_vm.itemData.suku))
            ]),
            _vm._v(" "),
            _c("li", [
              _c("b", [_vm._v("Gender:")]),
              _vm._v(" " + _vm._s(_vm.itemData.kelamin))
            ]),
            _vm._v(" "),
            _c("li", [
              _c("b", [_vm._v("Tinggi:")]),
              _vm._v(" " + _vm._s(_vm.itemData.tinggi))
            ]),
            _vm._v(" "),
            _c("li", [
              _c("b", [_vm._v("Agama:")]),
              _vm._v(" " + _vm._s(_vm.itemData.agama))
            ]),
            _vm._v(" "),
            _c("li", [
              _c("b", [_vm._v("Gol. Darah:")]),
              _vm._v(" " + _vm._s(_vm.itemData.darah))
            ]),
            _vm._v(" "),
            _vm.itemData.tanggal_meninggal == null
              ? _c("li", [
                  _c("b", [_vm._v("Usia:")]),
                  _vm._v(" "),
                  _vm.itemData.tanggal_lahir
                    ? _c("span", {
                        domProps: {
                          innerHTML: _vm._s(
                            _vm.$options.filters.age(_vm.itemData.tanggal_lahir)
                          )
                        }
                      })
                    : _vm._e()
                ])
              : _c("li", [
                  _c("b", [_vm._v("Usia Saat Meninggal:")]),
                  _vm._v(" "),
                  _vm.itemData.tanggal_lahir
                    ? _c("span", {
                        domProps: {
                          innerHTML: _vm._s(
                            _vm.$options.filters.ageDiff(
                              _vm.itemData.tanggal_meninggal,
                              _vm.itemData.tanggal_lahir
                            )
                          )
                        }
                      })
                    : _vm._e()
                ]),
            _vm._v(" "),
            _c("li", [
              _c("b", [_vm._v("Status:")]),
              _vm._v(" " + _vm._s(_vm.itemData.status))
            ])
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-sm-4" }, [
          _c("ul", { staticClass: "list list-unstyled mb-0" }, [
            _c("li", [
              _c("b", [_vm._v("Tgl. Lahir:")]),
              _vm._v(" "),
              _vm.itemData.tanggal_lahir
                ? _c("span", {
                    domProps: {
                      innerHTML: _vm._s(
                        _vm.$options.filters.date(_vm.itemData.tanggal_lahir)
                      )
                    }
                  })
                : _vm._e()
            ]),
            _vm._v(" "),
            _c("li", [
              _c("b", [_vm._v("Tempat Lahir:")]),
              _vm._v(" " + _vm._s(_vm.itemData.tempat_lahir))
            ]),
            _vm._v(" "),
            _c("li", [
              _c("b", [_vm._v("Nama Ibu:")]),
              _vm._v(" " + _vm._s(_vm.itemData.nama_ibu))
            ]),
            _vm._v(" "),
            _c("li", [
              _c("b", [_vm._v("Lembaga:")]),
              _vm._v(" " + _vm._s(_vm.itemData.lembaga))
            ]),
            _vm._v(" "),
            _c("li", [
              _c("b", [_vm._v("Jabatan:")]),
              _vm._v(
                " " +
                  _vm._s(
                    _vm.$options.filters.checkTingkatAktivis(
                      _vm.itemData.jabatan
                    )
                  )
              )
            ]),
            _vm._v(" "),
            _c("li", [
              _c("b", [_vm._v("Pekerjaan:")]),
              _vm._v(" " + _vm._s(_vm.itemData.pekerjaan))
            ]),
            _vm._v(" "),
            _c("li", [
              _c("b", [_vm._v("Pendidikan:")]),
              _vm._v(" " + _vm._s(_vm.itemData.pendidikan))
            ]),
            _vm._v(" "),
            _c("li", [
              _c("b", [_vm._v("Email:")]),
              _vm._v(" " + _vm._s(_vm.itemData.email))
            ]),
            _vm._v(" "),
            _c("li", [
              _c("b", [_vm._v("No. Hp:")]),
              _vm._v(" " + _vm._s(_vm.itemData.hp))
            ]),
            _vm._v(" "),
            _c("li", [
              _c("b", [_vm._v("Kontak Lainnya:")]),
              _vm._v(" " + _vm._s(_vm.itemData.kontak))
            ])
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-sm-4" }, [
          _c("ul", { staticClass: "list list-unstyled mb-0" }, [
            _vm.itemData.anggota_cu_cu
              ? _c("li", [
                  _c("b", [_vm._v("Asal TP/KP:")]),
                  _vm._v(
                    " " +
                      _vm._s(
                        _vm.itemData.anggota_cu_cu[0].tp
                          ? _vm.itemData.anggota_cu_cu[0].tp.name
                          : ""
                      )
                  )
                ])
              : _vm._e(),
            _vm._v(" "),
            _c("li", [
              _c("b", [_vm._v("Provinsi:")]),
              _vm._v(
                " " +
                  _vm._s(
                    _vm.itemData.provinces ? _vm.itemData.provinces.name : ""
                  )
              )
            ]),
            _vm._v(" "),
            _c("li", [
              _c("b", [_vm._v("Kabupaten:")]),
              _vm._v(
                " " +
                  _vm._s(
                    _vm.itemData.regencies ? _vm.itemData.regencies.name : ""
                  )
              )
            ]),
            _vm._v(" "),
            _c("li", [
              _c("b", [_vm._v("Kecamatan:")]),
              _vm._v(
                " " +
                  _vm._s(
                    _vm.itemData.districts ? _vm.itemData.districts.name : ""
                  )
              )
            ]),
            _vm._v(" "),
            _c("li", [
              _c("b", [_vm._v("Kelurahan:")]),
              _vm._v(
                " " +
                  _vm._s(
                    _vm.itemData.villages ? _vm.itemData.villages.name : ""
                  )
              )
            ]),
            _vm._v(" "),
            _c("li", [
              _c("b", [_vm._v("Alamat:")]),
              _vm._v(" " + _vm._s(_vm.itemData.alamat))
            ])
          ])
        ])
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/jalinanKlaim/dokumen.vue?vue&type=template&id=243e1002&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/views/jalinanKlaim/dokumen.vue?vue&type=template&id=243e1002& ***!
  \*************************************************************************************************************************************************************************************************************************/
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
    _c("div", { staticClass: "card card-body d-flex align-items-center" }, [
      _c("div", { ref: "printable", attrs: { id: "printable" } }, [
        _vm.image
          ? _c("img", {
              staticClass: "img-fluid",
              attrs: { src: "/images/jalinan/" + _vm.image + ".jpg" }
            })
          : _c("img", {
              staticStyle: { width: "15em" },
              attrs: { src: "/images/no_image.jpg" }
            })
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "text-center d-none d-md-block" }, [
      _c(
        "button",
        {
          staticClass: "btn btn-light",
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
          staticClass: "btn btn-light",
          attrs: { type: "button" },
          on: {
            click: function($event) {
              $event.preventDefault()
              return _vm.download()
            }
          }
        },
        [_c("i", { staticClass: "icon-file-download" }), _vm._v(" Download")]
      ),
      _vm._v(" "),
      _c(
        "button",
        {
          staticClass: "btn btn-light",
          attrs: { type: "button" },
          on: {
            click: function($event) {
              $event.preventDefault()
              return _vm.print()
            }
          }
        },
        [_c("i", { staticClass: "icon-printer" }), _vm._v(" Print")]
      )
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "d-block d-md-none" }, [
      _c(
        "button",
        {
          staticClass: "btn btn-light btn-block pb-2",
          attrs: { type: "button" },
          on: {
            click: function($event) {
              $event.preventDefault()
              return _vm.print()
            }
          }
        },
        [_c("i", { staticClass: "icon-printer" }), _vm._v(" Print")]
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
              return _vm.download()
            }
          }
        },
        [_c("i", { staticClass: "icon-file-download" }), _vm._v(" Download")]
      ),
      _vm._v(" "),
      _c(
        "button",
        {
          staticClass: "btn btn-light btn-block pb-2",
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
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/jalinanKlaim/formPeriksaKoreksi.vue?vue&type=template&id=425d80b0&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/views/jalinanKlaim/formPeriksaKoreksi.vue?vue&type=template&id=425d80b0& ***!
  \************************************************************************************************************************************************************************************************************************************/
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
        attrs: { "data-vv-scope": "formKoreksi" },
        on: {
          submit: function($event) {
            $event.preventDefault()
            return _vm.save($event)
          }
        }
      },
      [
        _vm.errors.any("formKoreksi") && _vm.submited
          ? _c("message", {
              attrs: {
                title: "Oops, terjadi kesalahan",
                errorItem: _vm.errors.items
              }
            })
          : _vm._e(),
        _vm._v(" "),
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-md-6" }, [
            _c("div", { staticClass: "card" }, [
              _vm._m(0),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "card-body" },
                [
                  _c("identitas", {
                    attrs: { itemData: _vm.selectedData.anggota_cu }
                  })
                ],
                1
              )
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-md-6" }, [
            _c(
              "div",
              { staticClass: "card" },
              [
                _vm._m(1),
                _vm._v(" "),
                _c("data-table", {
                  attrs: {
                    items: _vm.itemData,
                    columnData: _vm.columnData,
                    itemDataStat: _vm.itemDataStat
                  },
                  scopedSlots: _vm._u([
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
                                      _vm.selectedItem.id === props.item.id
                                  },
                                  on: {
                                    click: function($event) {
                                      return _vm.selectedRow(props.item)
                                    }
                                  }
                                },
                                [
                                  _c("td", [_vm._v(_vm._s(props.index + 1))]),
                                  _vm._v(" "),
                                  _c(
                                    "td",
                                    [
                                      _c("check-value", {
                                        attrs: { value: props.item.no_rek }
                                      })
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "td",
                                    [
                                      props.item.produk_cu
                                        ? _c("check-value", {
                                            attrs: {
                                              value: props.item.produk_cu.name
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
                                      props.item.produk_cu
                                        ? _c("check-value", {
                                            attrs: {
                                              value: props.item.produk_cu.tipe
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
                                        attrs: {
                                          value: props.item.saldo,
                                          valueType: "currency"
                                        }
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
                                          value: props.item.lama_pinjaman
                                        }
                                      })
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c("td", [
                                    props.item.tanggal
                                      ? _c("span", {
                                          domProps: {
                                            innerHTML: _vm._s(
                                              _vm.$options.filters.date(
                                                props.item.tanggal
                                              )
                                            )
                                          }
                                        })
                                      : _c("span", [_vm._v("-")])
                                  ]),
                                  _vm._v(" "),
                                  _c("td", [
                                    props.item.tanggal
                                      ? _c("span", {
                                          domProps: {
                                            innerHTML: _vm._s(
                                              _vm.$options.filters.ageDiff(
                                                props.item.tanggal,
                                                _vm.selectedData.anggota_cu
                                                  .tanggal_lahir
                                              )
                                            )
                                          }
                                        })
                                      : _c("span", [_vm._v("-")])
                                  ])
                                ]
                              )
                            : _vm._e()
                        ]
                      }
                    }
                  ])
                })
              ],
              1
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-md-6" }, [
            _c("div", { staticClass: "card" }, [
              _vm._m(2),
              _vm._v(" "),
              _c("div", { staticClass: "card-body" }, [
                _vm.itemDataJalinanStat == "success"
                  ? _c("div", { staticClass: "row" }, [
                      _c("div", { staticClass: "col-sm-6" }, [
                        _c("ul", { staticClass: "list list-unstyled mb-0" }, [
                          _c("li", [
                            _c("b", [_vm._v("Jenis klaim:")]),
                            _vm._v(" "),
                            _c("br"),
                            _vm._v(" "),
                            _c(
                              "label",
                              {
                                staticClass:
                                  "badge badge-warning ml-1 font-size-lg"
                              },
                              [
                                _c("check-value", {
                                  attrs: { value: _vm.itemDataJalinan.tipe }
                                })
                              ],
                              1
                            )
                          ]),
                          _vm._v(" "),
                          _c(
                            "li",
                            [
                              _c("b", [_vm._v("Kategori penyakit/penyebab:")]),
                              _vm._v(" "),
                              _c("br"),
                              _vm._v(" "),
                              _c("check-value", {
                                attrs: {
                                  value: _vm.itemDataJalinan.kategori_penyakit
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "li",
                            [
                              _c("b", [_vm._v("Keterangan cacat/meninggal:")]),
                              _vm._v(" "),
                              _c("br"),
                              _vm._v(" "),
                              _c("check-value", {
                                attrs: { value: _vm.itemDataJalinan.keterangan }
                              })
                            ],
                            1
                          )
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-sm-6" }, [
                        _c("ul", { staticClass: "list list-unstyled mb-0" }, [
                          _c("li", [
                            _c("b", [_vm._v("Tanggal cacat/meninggal:")]),
                            _vm._v(" "),
                            _c("br"),
                            _vm._v(" "),
                            _c("span", {
                              domProps: {
                                innerHTML: _vm._s(
                                  _vm.$options.filters.date(
                                    _vm.itemDataJalinan.tanggal_mati
                                  )
                                )
                              }
                            })
                          ]),
                          _vm._v(" "),
                          _c("li", [
                            _c("b", [_vm._v("Tanggal buat/pengajuan:")]),
                            _vm._v(" "),
                            _c("br"),
                            _vm._v(" "),
                            _c("span", {
                              domProps: {
                                innerHTML: _vm._s(
                                  _vm.$options.filters.dateTime(
                                    _vm.itemDataJalinan.created_at
                                  )
                                )
                              }
                            })
                          ]),
                          _vm._v(" "),
                          _c("li", [
                            _c("b", [_vm._v("Tanggal ubah :")]),
                            _vm._v(" "),
                            _c("br"),
                            _vm._v(" "),
                            _c("span", {
                              domProps: {
                                innerHTML: _vm._s(
                                  _vm.$options.filters.dateTime(
                                    _vm.itemDataJalinan.updated_at
                                  )
                                )
                              }
                            })
                          ])
                        ])
                      ]),
                      _vm._v(" "),
                      _vm._m(3),
                      _vm._v(" "),
                      _vm.itemDataJalinan.tipe != "cacat"
                        ? _c("div", { staticClass: "col-sm-6" }, [
                            _c("div", { staticClass: "card card-body mb-1" }, [
                              _c("div", { staticClass: "media" }, [
                                _c("div", { staticClass: "media-body" }, [
                                  _c(
                                    "h3",
                                    { staticClass: "mb-0" },
                                    [
                                      _c("check-value", {
                                        attrs: {
                                          value:
                                            _vm.itemDataJalinan.tunas_diajukan,
                                          valueType: "currency"
                                        }
                                      })
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "span",
                                    { staticClass: "text-uppercase" },
                                    [
                                      _vm._v(
                                        "\n                        nilai pengajuan klaim tunas\n                      "
                                      )
                                    ]
                                  )
                                ])
                              ])
                            ])
                          ])
                        : _vm._e(),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-sm-6" }, [
                        _c("div", { staticClass: "card card-body mb-1" }, [
                          _c("div", { staticClass: "media" }, [
                            _c("div", { staticClass: "media-body" }, [
                              _c(
                                "h3",
                                { staticClass: "mb-0" },
                                [
                                  _c("check-value", {
                                    attrs: {
                                      value:
                                        _vm.itemDataJalinan.lintang_diajukan,
                                      valueType: "currency"
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c("span", { staticClass: "text-uppercase" }, [
                                _vm._v(
                                  "\n                        nilai pengajuan klaim lintang\n                      "
                                )
                              ])
                            ])
                          ])
                        ])
                      ])
                    ])
                  : _vm.itemDataJalinanStat == "loading"
                  ? _c("div", { staticClass: "progress" }, [_vm._m(4)])
                  : _c("div", [
                      _c("p", [
                        _vm._v("Oops.. Terjadi kesalahan, silahkan coba lagi.")
                      ])
                    ])
              ])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-md-6" }, [
            _c("div", { staticClass: "card" }, [
              _vm._m(5),
              _vm._v(" "),
              _c("div", { staticClass: "card-body" }, [
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col-sm-6" }, [
                    _c("ul", { staticClass: "list list-unstyled mb-0" }, [
                      _c("li", [
                        _c("b", [_vm._v("Jenis klaim:")]),
                        _vm._v(" "),
                        _c("br"),
                        _vm._v(" "),
                        _c(
                          "label",
                          {
                            staticClass: "badge badge-warning ml-1 font-size-lg"
                          },
                          [
                            _c("check-value", {
                              attrs: { value: _vm.selectedData.tipe }
                            })
                          ],
                          1
                        )
                      ]),
                      _vm._v(" "),
                      _c(
                        "li",
                        [
                          _c("b", [_vm._v("Kategori penyakit/penyebab:")]),
                          _vm._v(" "),
                          _c("br"),
                          _vm._v(" "),
                          _c("check-value", {
                            attrs: { value: _vm.selectedData.kategori_penyakit }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "li",
                        [
                          _c("b", [_vm._v("Keterangan cacat/meninggal:")]),
                          _vm._v(" "),
                          _c("br"),
                          _vm._v(" "),
                          _c("check-value", {
                            attrs: { value: _vm.selectedData.keterangan }
                          })
                        ],
                        1
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-sm-6" }, [
                    _c("ul", { staticClass: "list list-unstyled mb-0" }, [
                      _c("li", [
                        _c("b", [_vm._v("Tanggal cacat/meninggal:")]),
                        _vm._v(" "),
                        _c("br"),
                        _vm._v(" "),
                        _c("span", {
                          domProps: {
                            innerHTML: _vm._s(
                              _vm.$options.filters.date(
                                _vm.selectedData.tanggal_mati
                              )
                            )
                          }
                        })
                      ]),
                      _vm._v(" "),
                      _c("li", [
                        _c("b", [_vm._v("Tanggal buat/pengajuan:")]),
                        _vm._v(" "),
                        _c("br"),
                        _vm._v(" "),
                        _c("span", {
                          domProps: {
                            innerHTML: _vm._s(
                              _vm.$options.filters.dateTime(
                                _vm.selectedData.created_at
                              )
                            )
                          }
                        })
                      ]),
                      _vm._v(" "),
                      _c("li", [
                        _c("b", [_vm._v("Tanggal ubah:")]),
                        _vm._v(" "),
                        _c("br"),
                        _vm._v(" "),
                        _c("span", {
                          domProps: {
                            innerHTML: _vm._s(
                              _vm.$options.filters.dateTime(
                                _vm.selectedData.updated_at
                              )
                            )
                          }
                        })
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _vm._m(6),
                  _vm._v(" "),
                  _vm.selectedData.tipe != "cacat"
                    ? _c("div", { staticClass: "col-sm-6" }, [
                        _c("div", { staticClass: "card card-body mb-1" }, [
                          _c("div", { staticClass: "media" }, [
                            _c("div", { staticClass: "media-body" }, [
                              _c(
                                "h3",
                                { staticClass: "mb-0" },
                                [
                                  _c("check-value", {
                                    attrs: {
                                      value: _vm.selectedData.tunas_diajukan,
                                      valueType: "currency"
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c("span", { staticClass: "text-uppercase" }, [
                                _vm._v(
                                  "\n                        nilai pengajuan klaim tunas\n                      "
                                )
                              ])
                            ])
                          ])
                        ])
                      ])
                    : _vm._e(),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-sm-6" }, [
                    _c("div", { staticClass: "card card-body mb-1" }, [
                      _c("div", { staticClass: "media" }, [
                        _c("div", { staticClass: "media-body" }, [
                          _c(
                            "h3",
                            { staticClass: "mb-0" },
                            [
                              _c("check-value", {
                                attrs: {
                                  value: _vm.selectedData.lintang_diajukan,
                                  valueType: "currency"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("span", { staticClass: "text-uppercase" }, [
                            _vm._v(
                              "\n                        nilai pengajuan klaim lintang\n                      "
                            )
                          ])
                        ])
                      ])
                    ])
                  ])
                ])
              ])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-md-12" }, [
            _c("hr"),
            _vm._v(" "),
            _c("h5", [_vm._v("Data yang dikoreksi:")]),
            _vm._v(" "),
            _vm.itemDataJalinan.tipe != _vm.selectedData.tipe
              ? _c("div", { staticClass: "card card-body" }, [
                  _c("span", [
                    _vm._v("\n            Jenis klaim dari "),
                    _c(
                      "mark",
                      [
                        _c("check-value", {
                          attrs: { value: _vm.itemDataJalinan.tipe }
                        })
                      ],
                      1
                    ),
                    _vm._v(" menjadi "),
                    _c(
                      "mark",
                      [
                        _c("check-value", {
                          attrs: { value: _vm.selectedData.tipe }
                        })
                      ],
                      1
                    )
                  ])
                ])
              : _vm._e(),
            _vm._v(" "),
            _vm.itemDataJalinan.kategori_penyakit !=
            _vm.selectedData.kategori_penyakit
              ? _c("div", { staticClass: "card card-body" }, [
                  _c("span", [
                    _vm._v("\n            Kategori penyakit/penyebab dari "),
                    _c(
                      "mark",
                      [
                        _c("check-value", {
                          attrs: {
                            value: _vm.itemDataJalinan.kategori_penyakit
                          }
                        })
                      ],
                      1
                    ),
                    _vm._v(" menjadi "),
                    _c(
                      "mark",
                      [
                        _c("check-value", {
                          attrs: { value: _vm.selectedData.kategori_penyakit }
                        })
                      ],
                      1
                    )
                  ])
                ])
              : _vm._e(),
            _vm._v(" "),
            _vm.itemDataJalinan.keterangan != _vm.selectedData.keterangan
              ? _c("div", { staticClass: "card card-body" }, [
                  _c("span", [
                    _vm._v("\n            Keterangan cacat/meninggal dari "),
                    _c(
                      "mark",
                      [
                        _c("check-value", {
                          attrs: { value: _vm.itemDataJalinan.keterangan }
                        })
                      ],
                      1
                    ),
                    _vm._v(" menjadi "),
                    _c(
                      "mark",
                      [
                        _c("check-value", {
                          attrs: { value: _vm.selectedData.keterangan }
                        })
                      ],
                      1
                    )
                  ])
                ])
              : _vm._e(),
            _vm._v(" "),
            _vm.itemDataJalinan.tanggal_mati != _vm.selectedData.tanggal_mati
              ? _c("div", { staticClass: "card card-body" }, [
                  _c("span", [
                    _vm._v("\n            Tanggal cacat/meninggal dari "),
                    _c("mark", {
                      domProps: {
                        innerHTML: _vm._s(
                          _vm.$options.filters.date(
                            _vm.itemDataJalinan.tanggal_mati
                          )
                        )
                      }
                    }),
                    _vm._v(" menjadi "),
                    _c("mark", {
                      domProps: {
                        innerHTML: _vm._s(
                          _vm.$options.filters.date(
                            _vm.selectedData.tanggal_mati
                          )
                        )
                      }
                    })
                  ])
                ])
              : _vm._e(),
            _vm._v(" "),
            _vm.itemDataJalinan.tunas_diajukan !=
            _vm.selectedData.tunas_diajukan
              ? _c("div", { staticClass: "card card-body" }, [
                  _c("span", [
                    _vm._v("\n            Nilai pengajuan klaim tunas dari "),
                    _c(
                      "mark",
                      [
                        _c("check-value", {
                          attrs: {
                            value: _vm.itemDataJalinan.tunas_diajukan,
                            valueType: "currency"
                          }
                        })
                      ],
                      1
                    ),
                    _vm._v(" menjadi "),
                    _c(
                      "mark",
                      [
                        _c("check-value", {
                          attrs: {
                            value: _vm.selectedData.tunas_diajukan,
                            valueType: "currency"
                          }
                        })
                      ],
                      1
                    )
                  ])
                ])
              : _vm._e(),
            _vm._v(" "),
            _vm.itemDataJalinan.lintang_diajukan !=
            _vm.selectedData.lintang_diajukan
              ? _c("div", { staticClass: "card card-body" }, [
                  _c("span", [
                    _vm._v("\n            Nilai pengajuan klaim lintang dari "),
                    _c(
                      "mark",
                      [
                        _c("check-value", {
                          attrs: {
                            value: _vm.itemDataJalinan.lintang_diajukan,
                            valueType: "currency"
                          }
                        })
                      ],
                      1
                    ),
                    _vm._v(" menjadi "),
                    _c(
                      "mark",
                      [
                        _c("check-value", {
                          attrs: {
                            value: _vm.selectedData.lintang_diajukan,
                            valueType: "currency"
                          }
                        })
                      ],
                      1
                    )
                  ])
                ])
              : _vm._e()
          ])
        ]),
        _vm._v(" "),
        _vm._m(7),
        _vm._v(" "),
        _c("div", { staticClass: "text-center d-none d-md-block" }, [
          _c(
            "button",
            {
              staticClass: "btn btn-light",
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
          _vm._m(8)
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "d-block d-md-none" }, [
          _vm._m(9),
          _vm._v(" "),
          _c(
            "button",
            {
              staticClass: "btn btn-light btn-block pb-2",
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
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header bg-white" }, [
      _c("h5", { staticClass: "card-title" }, [_vm._v("Identitas Anggota CU")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header bg-white" }, [
      _c("h5", { staticClass: "card-title" }, [_vm._v("Daftar Produk")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "card-header bg-white header-elements-inline" },
      [
        _c("h5", { staticClass: "card-title" }, [_vm._v("Klaim JALINAN")]),
        _vm._v(" "),
        _c("div", { staticClass: "header-elements" }, [
          _c("span", { staticClass: "badge badge-info" }, [
            _vm._v("DATA SEBELUMNYA")
          ])
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-sm-12" }, [_c("hr")])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass:
          "progress-bar progress-bar-info progress-bar-striped progress-bar-animated",
        staticStyle: { width: "100%" }
      },
      [_c("span", { staticClass: "sr-only" }, [_vm._v("100% Complete")])]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "card-header bg-white header-elements-inline" },
      [
        _c("h5", { staticClass: "card-title" }, [_vm._v("Klaim JALINAN")]),
        _vm._v(" "),
        _c("div", { staticClass: "header-elements" }, [
          _c("span", { staticClass: "badge badge-danger" }, [
            _vm._v("DATA KOREKSI")
          ])
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-sm-12" }, [_c("hr")])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "alert bg-info alert-styled-left" }, [
      _c("h6", [
        _vm._v("Pastikan data yang dimasukkan sudah benar sebelum menyimpan.")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "button",
      { staticClass: "btn btn-primary", attrs: { type: "submit" } },
      [
        _c("span", [
          _c("i", { staticClass: "icon-paint-format" }),
          _vm._v(" Koreksi\n        ")
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "button",
      {
        staticClass: "btn btn-primary btn-block pb-2",
        attrs: { type: "submit" }
      },
      [
        _c("span", [
          _c("i", { staticClass: "icon-paint-format" }),
          _vm._v(" Koreksi\n        ")
        ])
      ]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/jalinanKlaim/formStatus.vue?vue&type=template&id=1837e536&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/views/jalinanKlaim/formStatus.vue?vue&type=template&id=1837e536& ***!
  \****************************************************************************************************************************************************************************************************************************/
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
      _c("div", { staticClass: "nav-tabs-responsive mb-3" }, [
        _c(
          "ul",
          { staticClass: "nav nav-tabs nav-tabs-solid nav-justified bg-light" },
          [
            _c("li", { staticClass: "nav-item" }, [
              _c(
                "a",
                {
                  staticClass: "nav-link",
                  class: { active: _vm.tabName == "pengajuan" },
                  attrs: { href: "#" },
                  on: {
                    click: function($event) {
                      $event.preventDefault()
                      return _vm.changeTab("pengajuan")
                    }
                  }
                },
                [
                  _c("i", { staticClass: "icon-profile mr-2" }),
                  _vm._v(" Pengajuan")
                ]
              )
            ]),
            _vm._v(" "),
            _vm.selected.status_klaim != 0
              ? _c("li", { staticClass: "nav-item" }, [
                  _c(
                    "a",
                    {
                      staticClass: "nav-link",
                      class: { active: _vm.tabName == "verifikator" },
                      attrs: { href: "#" },
                      on: {
                        click: function($event) {
                          $event.preventDefault()
                          return _vm.changeTab("verifikator")
                        }
                      }
                    },
                    [
                      _c("i", { staticClass: "icon-file-check mr-2" }),
                      _vm._v(" Verifikator")
                    ]
                  )
                ])
              : _vm._e(),
            _vm._v(" "),
            _c("li", { staticClass: "nav-item" }, [
              _c(
                "a",
                {
                  staticClass: "nav-link",
                  class: { active: _vm.tabName == "dokumen" },
                  attrs: { href: "#" },
                  on: {
                    click: function($event) {
                      $event.preventDefault()
                      return _vm.changeTab("dokumen")
                    }
                  }
                },
                [
                  _c("i", { staticClass: "icon-stack mr-2" }),
                  _vm._v(" Dokumen")
                ]
              )
            ]),
            _vm._v(" "),
            _c("li", { staticClass: "nav-item" }, [
              _c(
                "a",
                {
                  staticClass: "nav-link",
                  class: { active: _vm.tabName == "history" },
                  attrs: { href: "#" },
                  on: {
                    click: function($event) {
                      $event.preventDefault()
                      return _vm.changeTab("history")
                    }
                  }
                },
                [
                  _c("i", { staticClass: "icon-copy3 mr-2" }),
                  _vm._v(" Riwayat Klaim")
                ]
              )
            ])
          ]
        )
      ]),
      _vm._v(" "),
      _c(
        "transition",
        { attrs: { "enter-active-class": "animated fadeIn", mode: "out-in" } },
        [
          _c(
            "div",
            {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: _vm.tabName == "pengajuan",
                  expression: "tabName == 'pengajuan'"
                }
              ]
            },
            [
              _c(
                "form",
                {
                  attrs: { "data-vv-scope": "formStatus", autocomplete: "off" },
                  on: {
                    submit: function($event) {
                      $event.preventDefault()
                      return _vm.save($event)
                    }
                  }
                },
                [
                  _vm.errors.any("formStatus") && _vm.submited
                    ? _c("message", {
                        attrs: {
                          title: "Oops, terjadi kesalahan",
                          errorItem: _vm.errors.items
                        }
                      })
                    : _vm._e(),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "row" },
                    [
                      _c("div", { staticClass: "col-md-6" }, [
                        _c("div", { staticClass: "card" }, [
                          _c("div", { staticClass: "card-header bg-white" }, [
                            _c("h5", { staticClass: "card-title" }, [
                              _vm._v("Identitas Anggota CU")
                            ])
                          ]),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "card-body" },
                            [
                              _c("identitas", {
                                attrs: { itemData: _vm.selectedData.anggota_cu }
                              })
                            ],
                            1
                          )
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-md-6" }, [
                        _c("div", { staticClass: "card" }, [
                          _c("div", { staticClass: "card-header bg-white" }, [
                            _c("h5", { staticClass: "card-title" }, [
                              _vm._v("Klaim JALINAN")
                            ])
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "card-body" }, [
                            _c("div", { staticClass: "row" }, [
                              _c("div", { staticClass: "col-sm-6" }, [
                                _c(
                                  "ul",
                                  { staticClass: "list list-unstyled mb-0" },
                                  [
                                    _c("li", [
                                      _c("b", [_vm._v("Jenis klaim:")]),
                                      _vm._v(" "),
                                      _c("br"),
                                      _vm._v(" "),
                                      _c(
                                        "label",
                                        {
                                          staticClass:
                                            "badge badge-warning ml-1 font-size-lg"
                                        },
                                        [
                                          _c("check-value", {
                                            attrs: {
                                              value: _vm.selectedData.tipe
                                            }
                                          })
                                        ],
                                        1
                                      )
                                    ]),
                                    _vm._v(" "),
                                    _c(
                                      "li",
                                      [
                                        _c("b", [
                                          _vm._v("Kategori penyakit/penyebab:")
                                        ]),
                                        _vm._v(" "),
                                        _c("br"),
                                        _vm._v(" "),
                                        _c("check-value", {
                                          attrs: {
                                            value:
                                              _vm.selectedData.kategori_penyakit
                                          }
                                        })
                                      ],
                                      1
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "li",
                                      [
                                        _c("b", [
                                          _vm._v("Keterangan cacat/meninggal:")
                                        ]),
                                        _vm._v(" "),
                                        _c("br"),
                                        _vm._v(" "),
                                        _c("check-value", {
                                          attrs: {
                                            value: _vm.selectedData.keterangan
                                          }
                                        })
                                      ],
                                      1
                                    )
                                  ]
                                )
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "col-sm-6" }, [
                                _c(
                                  "ul",
                                  { staticClass: "list list-unstyled mb-0" },
                                  [
                                    _c("li", [
                                      _c("b", [
                                        _vm._v("Tanggal cacat/meninggal:")
                                      ]),
                                      _vm._v(" "),
                                      _c("br"),
                                      _vm._v(" "),
                                      _c("span", {
                                        domProps: {
                                          innerHTML: _vm._s(
                                            _vm.$options.filters.date(
                                              _vm.selectedData.tanggal_mati
                                            )
                                          )
                                        }
                                      })
                                    ]),
                                    _vm._v(" "),
                                    _c("li", [
                                      _c("b", [
                                        _vm._v("Tanggal buat/pengajuan:")
                                      ]),
                                      _vm._v(" "),
                                      _c("br"),
                                      _vm._v(" "),
                                      _c("span", {
                                        domProps: {
                                          innerHTML: _vm._s(
                                            _vm.$options.filters.dateTime(
                                              _vm.selectedData.created_at
                                            )
                                          )
                                        }
                                      })
                                    ]),
                                    _vm._v(" "),
                                    _c("li", [
                                      _c("b", [_vm._v("Tanggal ubah:")]),
                                      _vm._v(" "),
                                      _c("br"),
                                      _vm._v(" "),
                                      _c("span", {
                                        domProps: {
                                          innerHTML: _vm._s(
                                            _vm.$options.filters.dateTime(
                                              _vm.selectedData.updated_at
                                            )
                                          )
                                        }
                                      })
                                    ])
                                  ]
                                )
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "col-sm-12" }, [
                                _c("hr")
                              ]),
                              _vm._v(" "),
                              _vm.selectedData.tipe != "cacat"
                                ? _c("div", { staticClass: "col-sm-6" }, [
                                    _c(
                                      "div",
                                      { staticClass: "card card-body mb-1" },
                                      [
                                        _c("div", { staticClass: "media" }, [
                                          _c(
                                            "div",
                                            { staticClass: "media-body" },
                                            [
                                              _c(
                                                "h3",
                                                { staticClass: "mb-0" },
                                                [
                                                  _c("check-value", {
                                                    attrs: {
                                                      value:
                                                        _vm.selectedData
                                                          .tunas_diajukan,
                                                      valueType: "currency"
                                                    }
                                                  })
                                                ],
                                                1
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "span",
                                                {
                                                  staticClass: "text-uppercase"
                                                },
                                                [
                                                  _vm._v(
                                                    "\n                            nilai pengajuan klaim tunas\n                          "
                                                  )
                                                ]
                                              )
                                            ]
                                          )
                                        ])
                                      ]
                                    )
                                  ])
                                : _vm._e(),
                              _vm._v(" "),
                              _c("div", { staticClass: "col-sm-6" }, [
                                _c(
                                  "div",
                                  { staticClass: "card card-body mb-1" },
                                  [
                                    _c("div", { staticClass: "media" }, [
                                      _c("div", { staticClass: "media-body" }, [
                                        _c(
                                          "h3",
                                          { staticClass: "mb-0" },
                                          [
                                            _c("check-value", {
                                              attrs: {
                                                value:
                                                  _vm.selectedData
                                                    .lintang_diajukan,
                                                valueType: "currency"
                                              }
                                            })
                                          ],
                                          1
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "span",
                                          { staticClass: "text-uppercase" },
                                          [
                                            _vm._v(
                                              "\n                            nilai pengajuan klaim lintang\n                          "
                                            )
                                          ]
                                        )
                                      ])
                                    ])
                                  ]
                                )
                              ])
                            ])
                          ])
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-md-12" }, [
                        _c("h5", [
                          _vm._v("Daftar Produk \n              "),
                          _c("br"),
                          _vm.itemData.length > 0
                            ? _c("small", { staticClass: "text-muted" }, [
                                _vm._v(
                                  "Tekan kotak dibawah untuk melihat transaksi masing-masing produk"
                                )
                              ])
                            : _vm._e()
                        ]),
                        _vm._v(" "),
                        _vm.itemDataStat == "success" && _vm.itemData.length > 0
                          ? _c(
                              "div",
                              { staticClass: "row" },
                              _vm._l(_vm.itemData, function(item, index) {
                                return _c(
                                  "div",
                                  {
                                    key: index,
                                    staticClass:
                                      "col-sm-6 col-xl-3 cursor-pointer",
                                    on: {
                                      click: function($event) {
                                        $event.preventDefault()
                                        return _vm.fetchProdukSaldo(item)
                                      }
                                    }
                                  },
                                  [
                                    item.produk_cu
                                      ? _c(
                                          "div",
                                          {
                                            staticClass:
                                              "card card-body has-bg-image",
                                            class: {
                                              "bg-success-400":
                                                item.produk_cu.tipe ==
                                                  "Simpanan Pokok" ||
                                                item.produk_cu.tipe ==
                                                  "Simpanan Wajib" ||
                                                item.produk_cu.tipe ==
                                                  "Simpanan Non Saham",
                                              "bg-indigo-400":
                                                item.produk_cu.tipe ==
                                                  "Pinjaman Kapitalisasi" ||
                                                item.produk_cu.tipe ==
                                                  "Pinjaman Umum" ||
                                                item.produk_cu.tipe ==
                                                  "Pinjaman Produktif"
                                            }
                                          },
                                          [
                                            _c(
                                              "div",
                                              { staticClass: "media mb-2" },
                                              [
                                                _c(
                                                  "div",
                                                  { staticClass: "media-body" },
                                                  [
                                                    _c(
                                                      "h6",
                                                      {
                                                        staticClass:
                                                          "font-weight-semibold mb-0"
                                                      },
                                                      [
                                                        _c("check-value", {
                                                          attrs: {
                                                            value: item.saldo,
                                                            valueType:
                                                              "currency"
                                                          }
                                                        })
                                                      ],
                                                      1
                                                    ),
                                                    _vm._v(" "),
                                                    _c(
                                                      "span",
                                                      {
                                                        staticClass:
                                                          "opacity-75"
                                                      },
                                                      [
                                                        _c("b", [
                                                          _vm._v("No. Rek:")
                                                        ]),
                                                        _vm._v(
                                                          " " +
                                                            _vm._s(item.no_rek)
                                                        )
                                                      ]
                                                    ),
                                                    _vm._v(" "),
                                                    _c("br"),
                                                    _vm._v(" "),
                                                    _c(
                                                      "span",
                                                      {
                                                        staticClass:
                                                          "opacity-75"
                                                      },
                                                      [
                                                        _c("b", [
                                                          _vm._v(
                                                            "Usia Saat membuka:"
                                                          )
                                                        ]),
                                                        _vm._v(" "),
                                                        item.tanggal
                                                          ? _c("span", {
                                                              domProps: {
                                                                innerHTML: _vm._s(
                                                                  _vm.$options.filters.ageDiff(
                                                                    item.tanggal,
                                                                    _vm
                                                                      .selectedData
                                                                      .anggota_cu
                                                                      .tanggal_lahir
                                                                  )
                                                                )
                                                              }
                                                            })
                                                          : _c("span", [
                                                              _vm._v("-")
                                                            ])
                                                      ]
                                                    )
                                                  ]
                                                )
                                              ]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "div",
                                              {
                                                staticClass:
                                                  "progress bg-blue mb-2",
                                                staticStyle: {
                                                  height: "0.125rem"
                                                }
                                              },
                                              [
                                                _c(
                                                  "div",
                                                  {
                                                    staticClass:
                                                      "progress-bar bg-white",
                                                    staticStyle: {
                                                      width: "100%"
                                                    }
                                                  },
                                                  [
                                                    _c(
                                                      "span",
                                                      {
                                                        staticClass: "sr-only"
                                                      },
                                                      [_vm._v("100% Complete")]
                                                    )
                                                  ]
                                                )
                                              ]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "div",
                                              [
                                                _c("b", [_vm._v("Jenis:")]),
                                                _vm._v(" "),
                                                item.produk_cu
                                                  ? _c("check-value", {
                                                      attrs: {
                                                        value:
                                                          item.produk_cu.tipe
                                                      }
                                                    })
                                                  : _c("span", [_vm._v("-")]),
                                                _vm._v(" "),
                                                _c("br"),
                                                _vm._v(" "),
                                                _c("b", [_vm._v("Nama:")]),
                                                _vm._v(" "),
                                                item.produk_cu
                                                  ? _c("check-value", {
                                                      attrs: {
                                                        value:
                                                          item.produk_cu.name
                                                      }
                                                    })
                                                  : _c("span", [_vm._v("-")]),
                                                _vm._v(" "),
                                                item.produk_cu.tipe ==
                                                  "Pinjaman Kapitalisasi" ||
                                                item.produk_cu.tipe ==
                                                  "Pinjaman Umum" ||
                                                item.produk_cu.tipe ==
                                                  "Pinjaman Produktif"
                                                  ? _c(
                                                      "span",
                                                      [
                                                        _c("br"),
                                                        _vm._v(" "),
                                                        _c("b", [
                                                          _vm._v(
                                                            "Lama Pinjaman (Bulan):"
                                                          )
                                                        ]),
                                                        _vm._v(" "),
                                                        _c("check-value", {
                                                          attrs: {
                                                            value:
                                                              item.lama_pinjaman
                                                          }
                                                        }),
                                                        _vm._v(" "),
                                                        _c("br"),
                                                        _vm._v(" "),
                                                        _c("b", [
                                                          _vm._v(
                                                            "Lama Sisa Pinjaman (Bulan):"
                                                          )
                                                        ]),
                                                        _vm._v(" "),
                                                        _c("check-value", {
                                                          attrs: {
                                                            value:
                                                              item.lama_sisa_pinjaman
                                                          }
                                                        })
                                                      ],
                                                      1
                                                    )
                                                  : _c("span", [
                                                      _c("br"),
                                                      _vm._v(
                                                        "\n                       \n                    "
                                                      )
                                                    ])
                                              ],
                                              1
                                            )
                                          ]
                                        )
                                      : _vm._e()
                                  ]
                                )
                              }),
                              0
                            )
                          : _c("div", { staticClass: "card card-body" }, [
                              _vm._v(
                                "\n              Belum terdapat produk pada anggota ini...\n            "
                              )
                            ]),
                        _vm._v(" "),
                        _vm.itemDataSaldoStat != ""
                          ? _c(
                              "div",
                              { staticClass: "card" },
                              [
                                _c(
                                  "div",
                                  { staticClass: "card-header bg-white" },
                                  [
                                    _c("h5", { staticClass: "card-title" }, [
                                      _vm._v(
                                        "Tabel Transaksi " +
                                          _vm._s(
                                            _vm.selectedProduk.produk_cu.name
                                          ) +
                                          " dengan no rek: " +
                                          _vm._s(_vm.selectedProduk.no_rek)
                                      )
                                    ])
                                  ]
                                ),
                                _vm._v(" "),
                                _c("data-table", {
                                  attrs: {
                                    items: _vm.itemDataSaldo.data,
                                    columnData: _vm.columnDataSaldo,
                                    itemDataStat: _vm.itemDataSaldoStat
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
                                                        _vm.selectedItem.id ===
                                                        props.item.id
                                                    },
                                                    on: {
                                                      click: function($event) {
                                                        return _vm.selectedRow(
                                                          props.item
                                                        )
                                                      }
                                                    }
                                                  },
                                                  [
                                                    _c("td", [
                                                      _vm._v(
                                                        _vm._s(props.index + 1)
                                                      )
                                                    ]),
                                                    _vm._v(" "),
                                                    _c(
                                                      "td",
                                                      [
                                                        _c("check-value", {
                                                          attrs: {
                                                            value:
                                                              props.item.saldo,
                                                            valueType:
                                                              "currency"
                                                          }
                                                        })
                                                      ],
                                                      1
                                                    ),
                                                    _vm._v(" "),
                                                    _vm.tipeProduk == "pinjaman"
                                                      ? _c(
                                                          "td",
                                                          [
                                                            _c("check-value", {
                                                              attrs: {
                                                                value:
                                                                  props.item
                                                                    .lama_sisa_pinjaman
                                                              }
                                                            })
                                                          ],
                                                          1
                                                        )
                                                      : _vm._e(),
                                                    _vm._v(" "),
                                                    _c("td", [
                                                      props.item.tanggal
                                                        ? _c("span", {
                                                            domProps: {
                                                              innerHTML: _vm._s(
                                                                _vm.$options.filters.dateTime(
                                                                  props.item
                                                                    .created_at
                                                                )
                                                              )
                                                            }
                                                          })
                                                        : _c("span", [
                                                            _vm._v("-")
                                                          ])
                                                    ])
                                                  ]
                                                )
                                              : _vm._e()
                                          ]
                                        }
                                      }
                                    ],
                                    null,
                                    false,
                                    1967185963
                                  )
                                }),
                                _vm._v(" "),
                                _c("div", { staticClass: "card-footer" }, [
                                  _vm.itemDataSaldoStat != ""
                                    ? _c(
                                        "div",
                                        { staticClass: "row pre-scrollable" },
                                        [
                                          _c(
                                            "div",
                                            { staticClass: "col-md-4 pt-2" },
                                            [
                                              _vm.itemDataSaldoStat ===
                                              "success"
                                                ? _c(
                                                    "div",
                                                    {
                                                      staticClass:
                                                        "d-none d-sm-block"
                                                    },
                                                    [
                                                      _vm._v(
                                                        "Menampilkan " +
                                                          _vm._s(
                                                            _vm.itemDataSaldo
                                                              .from
                                                          ) +
                                                          " -\n                        " +
                                                          _vm._s(
                                                            _vm.itemDataSaldo.to
                                                          ) +
                                                          " entri dari " +
                                                          _vm._s(
                                                            _vm.itemDataSaldo
                                                              .total
                                                          ) +
                                                          " entri\n                      "
                                                      )
                                                    ]
                                                  )
                                                : _vm._e(),
                                              _vm._v(" "),
                                              _vm.itemDataSaldoStat ===
                                              "success"
                                                ? _c(
                                                    "div",
                                                    {
                                                      staticClass:
                                                        "d-block d-sm-none text-center"
                                                    },
                                                    [
                                                      _vm._v(
                                                        "Menampilkan " +
                                                          _vm._s(
                                                            _vm.itemDataSaldo
                                                              .from
                                                          ) +
                                                          " -\n                        " +
                                                          _vm._s(
                                                            _vm.itemDataSaldo.to
                                                          ) +
                                                          " entri dari " +
                                                          _vm._s(
                                                            _vm.itemDataSaldo
                                                              .total
                                                          ) +
                                                          " entri\n                      "
                                                      )
                                                    ]
                                                  )
                                                : _c("div", [
                                                    _vm._v(
                                                      "Menampilkan\n                        "
                                                    ),
                                                    _c("i", {
                                                      staticClass:
                                                        "icon-spinner2 spinner"
                                                    }),
                                                    _vm._v(
                                                      " -\n                        "
                                                    ),
                                                    _c("i", {
                                                      staticClass:
                                                        "icon-spinner2 spinner"
                                                    }),
                                                    _vm._v(
                                                      " entri dari\n                        "
                                                    ),
                                                    _c("i", {
                                                      staticClass:
                                                        "icon-spinner2 spinner"
                                                    }),
                                                    _vm._v(
                                                      " entri\n                      "
                                                    )
                                                  ])
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "div",
                                            {
                                              staticClass:
                                                "col-md-8 pt-2 text-right d-none d-sm-block"
                                            },
                                            [
                                              _vm.itemDataSaldoStat ===
                                              "success"
                                                ? _c(
                                                    "div",
                                                    {
                                                      staticClass: "btn-group"
                                                    },
                                                    [
                                                      _c(
                                                        "button",
                                                        {
                                                          staticClass:
                                                            "btn btn-light",
                                                          class: {
                                                            disabled: !_vm
                                                              .itemDataSaldo
                                                              .prev_page_url
                                                          },
                                                          attrs: {
                                                            type: "button",
                                                            href: "#"
                                                          },
                                                          on: {
                                                            click: function(
                                                              $event
                                                            ) {
                                                              $event.preventDefault()
                                                              return _vm.goToPageSaldo(
                                                                1
                                                              )
                                                            }
                                                          }
                                                        },
                                                        [
                                                          _c("i", {
                                                            staticClass:
                                                              "icon-backward2"
                                                          })
                                                        ]
                                                      ),
                                                      _vm._v(" "),
                                                      _c(
                                                        "button",
                                                        {
                                                          staticClass:
                                                            "btn btn-light",
                                                          class: {
                                                            disabled: !_vm
                                                              .itemDataSaldo
                                                              .prev_page_url
                                                          },
                                                          attrs: {
                                                            type: "button",
                                                            href: "#"
                                                          },
                                                          on: {
                                                            click: function(
                                                              $event
                                                            ) {
                                                              $event.preventDefault()
                                                              return _vm.prevPageSaldo(
                                                                $event
                                                              )
                                                            }
                                                          }
                                                        },
                                                        [
                                                          _c("i", {
                                                            staticClass:
                                                              "icon-arrow-left5"
                                                          })
                                                        ]
                                                      ),
                                                      _vm._v(" "),
                                                      _vm._l(
                                                        _vm.pagesSaldo,
                                                        function(n, index) {
                                                          return _c(
                                                            "button",
                                                            {
                                                              key: index,
                                                              staticClass:
                                                                "btn",
                                                              class: {
                                                                "btn-primary":
                                                                  _vm.querySaldo
                                                                    .page == n,
                                                                "btn-light":
                                                                  _vm.querySaldo
                                                                    .page != n
                                                              },
                                                              attrs: {
                                                                type: "button",
                                                                href: "#"
                                                              },
                                                              on: {
                                                                click: function(
                                                                  $event
                                                                ) {
                                                                  $event.preventDefault()
                                                                  return _vm.goToPageSaldo(
                                                                    n
                                                                  )
                                                                }
                                                              }
                                                            },
                                                            [
                                                              _vm._v(
                                                                "\n                          " +
                                                                  _vm._s(n) +
                                                                  "\n                      "
                                                              )
                                                            ]
                                                          )
                                                        }
                                                      ),
                                                      _vm._v(" "),
                                                      _c(
                                                        "button",
                                                        {
                                                          staticClass:
                                                            "btn btn-light",
                                                          class: {
                                                            disabled: !_vm
                                                              .itemDataSaldo
                                                              .next_page_url
                                                          },
                                                          attrs: {
                                                            type: "button",
                                                            href: "#"
                                                          },
                                                          on: {
                                                            click: function(
                                                              $event
                                                            ) {
                                                              $event.preventDefault()
                                                              return _vm.nextPageSaldo(
                                                                $event
                                                              )
                                                            }
                                                          }
                                                        },
                                                        [
                                                          _c("i", {
                                                            staticClass:
                                                              "icon-arrow-right5"
                                                          })
                                                        ]
                                                      ),
                                                      _vm._v(" "),
                                                      _c(
                                                        "button",
                                                        {
                                                          staticClass:
                                                            "btn btn-light",
                                                          class: {
                                                            disabled: !_vm
                                                              .itemDataSaldo
                                                              .next_page_url
                                                          },
                                                          attrs: {
                                                            type: "button",
                                                            href: "#"
                                                          },
                                                          on: {
                                                            click: function(
                                                              $event
                                                            ) {
                                                              $event.preventDefault()
                                                              return _vm.goToPageSaldo(
                                                                _vm
                                                                  .itemDataSaldo
                                                                  .last_page
                                                              )
                                                            }
                                                          }
                                                        },
                                                        [
                                                          _c("i", {
                                                            staticClass:
                                                              "icon-forward3"
                                                          })
                                                        ]
                                                      )
                                                    ],
                                                    2
                                                  )
                                                : _c(
                                                    "div",
                                                    {
                                                      staticClass: "btn-group"
                                                    },
                                                    [
                                                      _c(
                                                        "button",
                                                        {
                                                          staticClass:
                                                            "btn btn-light disabled",
                                                          attrs: { href: "#" }
                                                        },
                                                        [
                                                          _c("i", {
                                                            staticClass:
                                                              "icon-backward2"
                                                          })
                                                        ]
                                                      ),
                                                      _vm._v(" "),
                                                      _c(
                                                        "button",
                                                        {
                                                          staticClass:
                                                            "btn btn-light disabled",
                                                          attrs: { href: "#" }
                                                        },
                                                        [
                                                          _c("i", {
                                                            staticClass:
                                                              "icon-arrow-left5"
                                                          })
                                                        ]
                                                      ),
                                                      _vm._v(" "),
                                                      _c(
                                                        "button",
                                                        {
                                                          staticClass:
                                                            "btn btn-light disabled",
                                                          attrs: { href: "#" }
                                                        },
                                                        [
                                                          _c("i", {
                                                            staticClass:
                                                              "icon-spinner2 spinner"
                                                          })
                                                        ]
                                                      ),
                                                      _vm._v(" "),
                                                      _c(
                                                        "button",
                                                        {
                                                          staticClass:
                                                            "btn btn-light disabled",
                                                          attrs: { href: "#" }
                                                        },
                                                        [
                                                          _c("i", {
                                                            staticClass:
                                                              "icon-arrow-right5"
                                                          })
                                                        ]
                                                      ),
                                                      _vm._v(" "),
                                                      _c(
                                                        "button",
                                                        {
                                                          staticClass:
                                                            "btn btn-light disabled",
                                                          attrs: { href: "#" }
                                                        },
                                                        [
                                                          _c("i", {
                                                            staticClass:
                                                              "icon-forward3"
                                                          })
                                                        ]
                                                      )
                                                    ]
                                                  )
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "div",
                                            {
                                              staticClass:
                                                "col-md-12 pt-2 text-center d-block d-sm-none"
                                            },
                                            [
                                              _vm.itemDataSaldoStat ===
                                              "success"
                                                ? _c(
                                                    "div",
                                                    {
                                                      staticClass: "btn-group"
                                                    },
                                                    _vm._l(
                                                      _vm.pagesSaldo,
                                                      function(n, index) {
                                                        return _c(
                                                          "button",
                                                          {
                                                            key: index,
                                                            staticClass: "btn",
                                                            class: {
                                                              "btn-primary":
                                                                _vm.querySaldo
                                                                  .page == n,
                                                              "btn-light":
                                                                _vm.querySaldo
                                                                  .page != n
                                                            },
                                                            attrs: {
                                                              type: "button",
                                                              href: "#"
                                                            },
                                                            on: {
                                                              click: function(
                                                                $event
                                                              ) {
                                                                $event.preventDefault()
                                                                return _vm.goToPageSaldo(
                                                                  n
                                                                )
                                                              }
                                                            }
                                                          },
                                                          [
                                                            _vm._v(
                                                              "\n                          " +
                                                                _vm._s(n) +
                                                                "\n                      "
                                                            )
                                                          ]
                                                        )
                                                      }
                                                    ),
                                                    0
                                                  )
                                                : _vm._e(),
                                              _vm._v(" "),
                                              _c("br"),
                                              _vm._v(" "),
                                              _vm.itemDataSaldoStat ===
                                              "success"
                                                ? _c(
                                                    "div",
                                                    {
                                                      staticClass:
                                                        "btn-group pt-2"
                                                    },
                                                    [
                                                      _c(
                                                        "button",
                                                        {
                                                          staticClass:
                                                            "btn btn-light",
                                                          class: {
                                                            disabled: !_vm
                                                              .itemDataSaldo
                                                              .prev_page_url
                                                          },
                                                          attrs: {
                                                            type: "button",
                                                            href: "#"
                                                          },
                                                          on: {
                                                            click: function(
                                                              $event
                                                            ) {
                                                              $event.preventDefault()
                                                              return _vm.goToPageSaldo(
                                                                1
                                                              )
                                                            }
                                                          }
                                                        },
                                                        [
                                                          _c("i", {
                                                            staticClass:
                                                              "icon-backward2"
                                                          })
                                                        ]
                                                      ),
                                                      _vm._v(" "),
                                                      _c(
                                                        "button",
                                                        {
                                                          staticClass:
                                                            "btn btn-light",
                                                          class: {
                                                            disabled: !_vm
                                                              .itemDataSaldo
                                                              .prev_page_url
                                                          },
                                                          attrs: {
                                                            type: "button",
                                                            href: "#"
                                                          },
                                                          on: {
                                                            click: function(
                                                              $event
                                                            ) {
                                                              $event.preventDefault()
                                                              return _vm.prevPageSaldo(
                                                                $event
                                                              )
                                                            }
                                                          }
                                                        },
                                                        [
                                                          _c("i", {
                                                            staticClass:
                                                              "icon-arrow-left5"
                                                          })
                                                        ]
                                                      ),
                                                      _vm._v(" "),
                                                      _c(
                                                        "button",
                                                        {
                                                          staticClass:
                                                            "btn btn-light",
                                                          class: {
                                                            disabled: !_vm
                                                              .itemDataSaldo
                                                              .next_page_url
                                                          },
                                                          attrs: {
                                                            type: "button",
                                                            href: "#"
                                                          },
                                                          on: {
                                                            click: function(
                                                              $event
                                                            ) {
                                                              $event.preventDefault()
                                                              return _vm.nextPageSaldo(
                                                                $event
                                                              )
                                                            }
                                                          }
                                                        },
                                                        [
                                                          _c("i", {
                                                            staticClass:
                                                              "icon-arrow-right5"
                                                          })
                                                        ]
                                                      ),
                                                      _vm._v(" "),
                                                      _c(
                                                        "button",
                                                        {
                                                          staticClass:
                                                            "btn btn-light",
                                                          class: {
                                                            disabled: !_vm
                                                              .itemDataSaldo
                                                              .next_page_url
                                                          },
                                                          attrs: {
                                                            type: "button",
                                                            href: "#"
                                                          },
                                                          on: {
                                                            click: function(
                                                              $event
                                                            ) {
                                                              $event.preventDefault()
                                                              return _vm.goToPageSaldo(
                                                                _vm
                                                                  .itemDataSaldo
                                                                  .last_page
                                                              )
                                                            }
                                                          }
                                                        },
                                                        [
                                                          _c("i", {
                                                            staticClass:
                                                              "icon-forward3"
                                                          })
                                                        ]
                                                      )
                                                    ]
                                                  )
                                                : _c(
                                                    "div",
                                                    {
                                                      staticClass: "btn-group"
                                                    },
                                                    [
                                                      _c(
                                                        "button",
                                                        {
                                                          staticClass:
                                                            "btn btn-light disabled",
                                                          attrs: { href: "#" }
                                                        },
                                                        [
                                                          _c("i", {
                                                            staticClass:
                                                              "icon-backward2"
                                                          })
                                                        ]
                                                      ),
                                                      _vm._v(" "),
                                                      _c(
                                                        "button",
                                                        {
                                                          staticClass:
                                                            "btn btn-light disabled",
                                                          attrs: { href: "#" }
                                                        },
                                                        [
                                                          _c("i", {
                                                            staticClass:
                                                              "icon-arrow-left5"
                                                          })
                                                        ]
                                                      ),
                                                      _vm._v(" "),
                                                      _c(
                                                        "button",
                                                        {
                                                          staticClass:
                                                            "btn btn-light disabled",
                                                          attrs: { href: "#" }
                                                        },
                                                        [
                                                          _c("i", {
                                                            staticClass:
                                                              "icon-spinner2 spinner"
                                                          })
                                                        ]
                                                      ),
                                                      _vm._v(" "),
                                                      _c(
                                                        "button",
                                                        {
                                                          staticClass:
                                                            "btn btn-light disabled",
                                                          attrs: { href: "#" }
                                                        },
                                                        [
                                                          _c("i", {
                                                            staticClass:
                                                              "icon-arrow-right5"
                                                          })
                                                        ]
                                                      ),
                                                      _vm._v(" "),
                                                      _c(
                                                        "button",
                                                        {
                                                          staticClass:
                                                            "btn btn-light disabled",
                                                          attrs: { href: "#" }
                                                        },
                                                        [
                                                          _c("i", {
                                                            staticClass:
                                                              "icon-forward3"
                                                          })
                                                        ]
                                                      )
                                                    ]
                                                  )
                                            ]
                                          )
                                        ]
                                      )
                                    : _vm._e()
                                ])
                              ],
                              1
                            )
                          : _vm._e()
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-md-12" }, [_c("hr")]),
                      _vm._v(" "),
                      _vm.tipe == "verifikasi" || _vm.tipe == "lihat"
                        ? [
                            _c("div", { staticClass: "col-md-12" }, [
                              _c("h5", [_vm._v("Informasi Pendukung:")])
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "col-md-4" }, [
                              _c(
                                "div",
                                { staticClass: "card card-body bg-blue-400" },
                                [
                                  _c("div", { staticClass: "media" }, [
                                    _c("div", { staticClass: "media-body" }, [
                                      _c("h3", { staticClass: "mb-0" }, [
                                        _vm._v(
                                          _vm._s(
                                            "Anggota CU " +
                                              _vm.selectedData.anggota_cu_cu.cu
                                                .name
                                          )
                                        )
                                      ]),
                                      _vm._v(" "),
                                      _c("span", [
                                        _vm._v(
                                          "\n                      " +
                                            _vm._s(
                                              "Nama: " +
                                                _vm.selectedData.anggota_cu.name
                                            ) +
                                            " \n                      "
                                        ),
                                        _c("br"),
                                        _vm._v(
                                          "\n                      " +
                                            _vm._s(
                                              "No. BA: " +
                                                _vm.selectedData.anggota_cu_cu
                                                  .no_ba
                                            ) +
                                            " \n                      "
                                        ),
                                        _c("br"),
                                        _vm._v(
                                          "\n                      " +
                                            _vm._s(
                                              "Lama Menjadi Anggota: " +
                                                _vm.selectedData.anggota_cu_cu
                                                  .lama_menjadi_anggota +
                                                " bulan"
                                            ) +
                                            " \n                    "
                                        )
                                      ])
                                    ])
                                  ])
                                ]
                              )
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "col-md-4" }, [
                              _c(
                                "div",
                                { staticClass: "card card-body bg-teal-400" },
                                [
                                  _c("div", { staticClass: "media" }, [
                                    _c("div", { staticClass: "media-body" }, [
                                      _c("h3", { staticClass: "mb-0" }, [
                                        _vm._v("Usia Masuk CU: "),
                                        _vm.selectedData.anggota_cu_cu
                                          .tanggal_masuk
                                          ? _c("span", {
                                              domProps: {
                                                innerHTML: _vm._s(
                                                  _vm.$options.filters.ageDiff(
                                                    _vm.selectedData
                                                      .anggota_cu_cu
                                                      .tanggal_masuk,
                                                    _vm.selectedData.anggota_cu
                                                      .tanggal_lahir
                                                  )
                                                )
                                              }
                                            })
                                          : _vm._e()
                                      ]),
                                      _vm._v(" "),
                                      _c("span", [
                                        _vm._v(
                                          "\n                      Tanggal Masuk CU: "
                                        ),
                                        _vm.selectedData.anggota_cu_cu
                                          .tanggal_masuk
                                          ? _c("span", {
                                              domProps: {
                                                innerHTML: _vm._s(
                                                  _vm.$options.filters.date(
                                                    _vm.selectedData
                                                      .anggota_cu_cu
                                                      .tanggal_masuk
                                                  )
                                                )
                                              }
                                            })
                                          : _vm._e()
                                      ])
                                    ])
                                  ])
                                ]
                              )
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "col-md-4" }, [
                              _c(
                                "div",
                                { staticClass: "card card-body bg-purple-400" },
                                [
                                  _c("div", { staticClass: "media" }, [
                                    _c("div", { staticClass: "media-body" }, [
                                      _vm.selectedData.tipe == "CACAT"
                                        ? _c("div", [
                                            _c("h3", { staticClass: "mb-0" }, [
                                              _vm._v("Usia Cacat: "),
                                              _vm.selectedData.anggota_cu
                                                ? _c("span", {
                                                    domProps: {
                                                      innerHTML: _vm._s(
                                                        _vm.$options.filters.ageDiff(
                                                          _vm.selectedData
                                                            .anggota_cu
                                                            .tanggal_cacat,
                                                          _vm.selectedData
                                                            .anggota_cu
                                                            .tanggal_lahir
                                                        )
                                                      )
                                                    }
                                                  })
                                                : _vm._e()
                                            ]),
                                            _vm._v(" "),
                                            _c("span", [
                                              _vm._v(
                                                "\n                        Tanggal Cacat: "
                                              ),
                                              _vm.selectedData.tanggal_mati
                                                ? _c("span", {
                                                    domProps: {
                                                      innerHTML: _vm._s(
                                                        _vm.$options.filters.date(
                                                          _vm.selectedData
                                                            .tanggal_mati
                                                        )
                                                      )
                                                    }
                                                  })
                                                : _vm._e()
                                            ])
                                          ])
                                        : _vm.selectedData.tipe == "MENINGGAL"
                                        ? _c("div", [
                                            _c("h3", { staticClass: "mb-0" }, [
                                              _vm._v("Usia Meninggal: "),
                                              _vm.selectedData.anggota_cu_cu
                                                ? _c("span", {
                                                    domProps: {
                                                      innerHTML: _vm._s(
                                                        _vm.$options.filters.ageDiff(
                                                          _vm.selectedData
                                                            .tanggal_mati,
                                                          _vm.selectedData
                                                            .anggota_cu
                                                            .tanggal_lahir
                                                        )
                                                      )
                                                    }
                                                  })
                                                : _vm._e()
                                            ]),
                                            _vm._v(" "),
                                            _c("span", [
                                              _vm._v(
                                                "\n                        Tanggal Meninggal: "
                                              ),
                                              _vm.selectedData.tanggal_mati
                                                ? _c("span", {
                                                    domProps: {
                                                      innerHTML: _vm._s(
                                                        _vm.$options.filters.date(
                                                          _vm.selectedData
                                                            .tanggal_mati
                                                        )
                                                      )
                                                    }
                                                  })
                                                : _vm._e()
                                            ])
                                          ])
                                        : _vm._e()
                                    ])
                                  ])
                                ]
                              )
                            ])
                          ]
                        : [
                            _c("div", { staticClass: "col-md-3" }, [
                              _c("h5", [_vm._v("Informasi Pendukung:")]),
                              _vm._v(" "),
                              _c(
                                "div",
                                { staticClass: "card card-body bg-blue-400" },
                                [
                                  _c("div", { staticClass: "media" }, [
                                    _c("div", { staticClass: "media-body" }, [
                                      _c("h3", { staticClass: "mb-0" }, [
                                        _vm._v(
                                          _vm._s(
                                            "Anggota CU " +
                                              _vm.selectedData.anggota_cu_cu.cu
                                                .name
                                          )
                                        )
                                      ]),
                                      _vm._v(" "),
                                      _c("span", [
                                        _vm._v(
                                          "\n                      " +
                                            _vm._s(
                                              "Nama: " +
                                                _vm.selectedData.anggota_cu.name
                                            ) +
                                            " \n                      "
                                        ),
                                        _c("br"),
                                        _vm._v(
                                          "\n                      " +
                                            _vm._s(
                                              "No. BA: " +
                                                _vm.selectedData.anggota_cu_cu
                                                  .no_ba
                                            ) +
                                            " \n                      "
                                        ),
                                        _c("br"),
                                        _vm._v(
                                          "\n                      " +
                                            _vm._s(
                                              "Lama Menjadi Anggota: " +
                                                _vm.selectedData.anggota_cu_cu
                                                  .lama_menjadi_anggota +
                                                " bulan"
                                            ) +
                                            " \n                    "
                                        )
                                      ])
                                    ])
                                  ])
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                { staticClass: "card card-body bg-teal-400" },
                                [
                                  _c("div", { staticClass: "media" }, [
                                    _c("div", { staticClass: "media-body" }, [
                                      _c("h3", { staticClass: "mb-0" }, [
                                        _vm._v("Usia Masuk CU: "),
                                        _vm.selectedData.anggota_cu_cu
                                          .tanggal_masuk
                                          ? _c("span", {
                                              domProps: {
                                                innerHTML: _vm._s(
                                                  _vm.$options.filters.ageDiff(
                                                    _vm.selectedData
                                                      .anggota_cu_cu
                                                      .tanggal_masuk,
                                                    _vm.selectedData.anggota_cu
                                                      .tanggal_lahir
                                                  )
                                                )
                                              }
                                            })
                                          : _vm._e()
                                      ]),
                                      _vm._v(" "),
                                      _c("span", [
                                        _vm._v(
                                          "\n                      Tanggal Masuk CU: "
                                        ),
                                        _vm.selectedData.anggota_cu_cu
                                          .tanggal_masuk
                                          ? _c("span", {
                                              domProps: {
                                                innerHTML: _vm._s(
                                                  _vm.$options.filters.date(
                                                    _vm.selectedData
                                                      .anggota_cu_cu
                                                      .tanggal_masuk
                                                  )
                                                )
                                              }
                                            })
                                          : _vm._e()
                                      ])
                                    ])
                                  ])
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                { staticClass: "card card-body bg-purple-400" },
                                [
                                  _c("div", { staticClass: "media" }, [
                                    _c("div", { staticClass: "media-body" }, [
                                      _vm.selectedData.tipe == "CACAT"
                                        ? _c("div", [
                                            _c("h3", { staticClass: "mb-0" }, [
                                              _vm._v("Usia Cacat: "),
                                              _vm.selectedData.anggota_cu
                                                ? _c("span", {
                                                    domProps: {
                                                      innerHTML: _vm._s(
                                                        _vm.$options.filters.ageDiff(
                                                          _vm.selectedData
                                                            .anggota_cu
                                                            .tanggal_cacat,
                                                          _vm.selectedData
                                                            .anggota_cu
                                                            .tanggal_lahir
                                                        )
                                                      )
                                                    }
                                                  })
                                                : _vm._e()
                                            ]),
                                            _vm._v(" "),
                                            _c("span", [
                                              _vm._v(
                                                "\n                        Tanggal Cacat: "
                                              ),
                                              _vm.selectedData.anggota_cu
                                                .tanggal_cacat
                                                ? _c("span", {
                                                    domProps: {
                                                      innerHTML: _vm._s(
                                                        _vm.$options.filters.date(
                                                          _vm.selectedData
                                                            .anggota_cu
                                                            .tanggal_cacat
                                                        )
                                                      )
                                                    }
                                                  })
                                                : _vm._e()
                                            ])
                                          ])
                                        : _vm.selectedData.tipe == "MENINGGAL"
                                        ? _c("div", [
                                            _c("h3", { staticClass: "mb-0" }, [
                                              _vm._v("Usia Meninggal: "),
                                              _vm.selectedData.anggota_cu_cu
                                                ? _c("span", {
                                                    domProps: {
                                                      innerHTML: _vm._s(
                                                        _vm.$options.filters.ageDiff(
                                                          _vm.selectedData
                                                            .anggota_cu
                                                            .tanggal_meninggal,
                                                          _vm.selectedData
                                                            .anggota_cu
                                                            .tanggal_lahir
                                                        )
                                                      )
                                                    }
                                                  })
                                                : _vm._e()
                                            ]),
                                            _vm._v(" "),
                                            _c("span", [
                                              _vm._v(
                                                "\n                        Tanggal Meninggal: "
                                              ),
                                              _vm.selectedData.anggota_cu
                                                .tanggal_meninggal
                                                ? _c("span", {
                                                    domProps: {
                                                      innerHTML: _vm._s(
                                                        _vm.$options.filters.date(
                                                          _vm.selectedData
                                                            .anggota_cu
                                                            .tanggal_meninggal
                                                        )
                                                      )
                                                    }
                                                  })
                                                : _vm._e()
                                            ])
                                          ])
                                        : _vm._e()
                                    ])
                                  ])
                                ]
                              )
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "col-md-9" }, [
                              _c("div", { staticClass: "row" }, [
                                _vm.tipe == "analisis"
                                  ? _c("div", { staticClass: "col-md-12" }, [
                                      _c("div", { staticClass: "form-group" }, [
                                        _c("h5", [_vm._v("Status Klaim:")]),
                                        _vm._v(" "),
                                        _c(
                                          "select",
                                          {
                                            directives: [
                                              {
                                                name: "model",
                                                rawName: "v-model",
                                                value: _vm.formStatus.status,
                                                expression: "formStatus.status"
                                              }
                                            ],
                                            staticClass: "form-control",
                                            attrs: {
                                              name: "status",
                                              "data-width": "100%"
                                            },
                                            on: {
                                              change: function($event) {
                                                var $$selectedVal = Array.prototype.filter
                                                  .call(
                                                    $event.target.options,
                                                    function(o) {
                                                      return o.selected
                                                    }
                                                  )
                                                  .map(function(o) {
                                                    var val =
                                                      "_value" in o
                                                        ? o._value
                                                        : o.value
                                                    return val
                                                  })
                                                _vm.$set(
                                                  _vm.formStatus,
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
                                              {
                                                attrs: {
                                                  disabled: "",
                                                  value: ""
                                                }
                                              },
                                              [
                                                _vm._v(
                                                  "Silahkan pilih status klaim"
                                                )
                                              ]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "option",
                                              { attrs: { value: "1" } },
                                              [_vm._v("Menunggu")]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "option",
                                              { attrs: { value: "2" } },
                                              [_vm._v("Dokumen Tidak Lengkap")]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "option",
                                              { attrs: { value: "3" } },
                                              [_vm._v("Ditolak")]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "option",
                                              { attrs: { value: "31" } },
                                              [
                                                _vm._v(
                                                  "Ditolak (Salah Memilih / Tidak Meninggal atau Cacat)"
                                                )
                                              ]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "option",
                                              { attrs: { value: "4" } },
                                              [_vm._v("Disetujui")]
                                            )
                                          ]
                                        )
                                      ])
                                    ])
                                  : _vm._e(),
                                _vm._v(" "),
                                _vm.formStatus.status == "4" ||
                                _vm.tipe == "selesai"
                                  ? _c("div", { staticClass: "col-md-12" }, [
                                      _c(
                                        "div",
                                        {
                                          staticClass: "form-group",
                                          class: {
                                            "has-error": _vm.errors.has(
                                              "formStatus.tanggal_pencairan"
                                            )
                                          }
                                        },
                                        [
                                          _c(
                                            "h5",
                                            {
                                              class: {
                                                "text-danger": _vm.errors.has(
                                                  "formStatus.tanggal_pencairan"
                                                )
                                              }
                                            },
                                            [
                                              _vm.errors.has(
                                                "formStatus.tanggal_pencairan"
                                              )
                                                ? _c("i", {
                                                    staticClass: "icon-cross2"
                                                  })
                                                : _vm._e(),
                                              _vm._v(
                                                "\n                      Tgl. Pencairan:"
                                              )
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c("date-picker", {
                                            directives: [
                                              {
                                                name: "show",
                                                rawName: "v-show",
                                                value: _vm.tipe != "selesai",
                                                expression: "tipe != 'selesai'"
                                              }
                                            ],
                                            attrs: {
                                              defaultDate:
                                                _vm.formStatus.tanggal_pencairan
                                            },
                                            on: {
                                              dateSelected: function($event) {
                                                _vm.formStatus.tanggal_pencairan = $event
                                              }
                                            }
                                          }),
                                          _vm._v(" "),
                                          _c("input", {
                                            directives: [
                                              {
                                                name: "model",
                                                rawName: "v-model",
                                                value:
                                                  _vm.formStatus
                                                    .tanggal_pencairan,
                                                expression:
                                                  "formStatus.tanggal_pencairan"
                                              },
                                              {
                                                name: "show",
                                                rawName: "v-show",
                                                value: _vm.tipe == _vm.selesai,
                                                expression: "tipe == selesai"
                                              },
                                              {
                                                name: "validate",
                                                rawName: "v-validate",
                                                value: "required",
                                                expression: "'required'"
                                              }
                                            ],
                                            attrs: {
                                              readonly: _vm.tipe == "selesai",
                                              "data-vv-as": "Tgl. pencairan"
                                            },
                                            domProps: {
                                              value:
                                                _vm.formStatus.tanggal_pencairan
                                            },
                                            on: {
                                              input: function($event) {
                                                if ($event.target.composing) {
                                                  return
                                                }
                                                _vm.$set(
                                                  _vm.formStatus,
                                                  "tanggal_pencairan",
                                                  $event.target.value
                                                )
                                              }
                                            }
                                          }),
                                          _vm._v(" "),
                                          _vm.errors.has(
                                            "formStatus.tanggal_pencairan"
                                          )
                                            ? _c(
                                                "small",
                                                {
                                                  staticClass:
                                                    "text-muted text-danger"
                                                },
                                                [
                                                  _c("i", {
                                                    staticClass:
                                                      "icon-arrow-small-right"
                                                  }),
                                                  _vm._v(
                                                    " " +
                                                      _vm._s(
                                                        _vm.errors.first(
                                                          "formStatus.tanggal_pencairan"
                                                        )
                                                      ) +
                                                      "\n                    "
                                                  )
                                                ]
                                              )
                                            : _c(
                                                "small",
                                                { staticClass: "text-muted" },
                                                [_vm._v(" ")]
                                              )
                                        ],
                                        1
                                      )
                                    ])
                                  : _vm._e(),
                                _vm._v(" "),
                                (_vm.formStatus.status == "4" &&
                                  _vm.selectedData.tipe != "cacat") ||
                                _vm.tipe == "selesai"
                                  ? _c("div", { staticClass: "col-md-6" }, [
                                      _c(
                                        "div",
                                        {
                                          staticClass: "form-group",
                                          class: {
                                            "has-error": _vm.errors.has(
                                              "formStatus.tunas_disetujui"
                                            )
                                          }
                                        },
                                        [
                                          _c(
                                            "h5",
                                            {
                                              class: {
                                                "text-danger": _vm.errors.has(
                                                  "formStatus.tunas_disetujui"
                                                )
                                              }
                                            },
                                            [
                                              _vm.errors.has(
                                                "formStatus.tunas_disetujui"
                                              )
                                                ? _c("i", {
                                                    staticClass: "icon-cross2"
                                                  })
                                                : _vm._e(),
                                              _vm._v(
                                                " Nilai pengajuan klaim TUNAS yang disetujui"
                                              )
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "div",
                                            {
                                              staticClass: "card card-body",
                                              class: {
                                                "bg-blue-400":
                                                  _vm.selisihTunas == 0,
                                                "bg-danger-400":
                                                  _vm.selisihTunas < 0,
                                                "bg-brown-400":
                                                  _vm.selisihTunas > 0
                                              }
                                            },
                                            [
                                              _c(
                                                "div",
                                                { staticClass: "media" },
                                                [
                                                  _c(
                                                    "div",
                                                    {
                                                      staticClass: "media-body"
                                                    },
                                                    [
                                                      _c(
                                                        "h3",
                                                        { staticClass: "mb-0" },
                                                        [
                                                          _vm.selisihTunas > 0
                                                            ? _c("i", {
                                                                staticClass:
                                                                  "icon-plus3"
                                                              })
                                                            : _vm._e(),
                                                          _vm._v(" "),
                                                          _c("check-value", {
                                                            attrs: {
                                                              value:
                                                                _vm.selisihTunas,
                                                              valueType:
                                                                "currency"
                                                            }
                                                          })
                                                        ],
                                                        1
                                                      ),
                                                      _vm._v(" "),
                                                      _c(
                                                        "span",
                                                        {
                                                          staticClass:
                                                            "text-uppercase font-size-xs"
                                                        },
                                                        [
                                                          _vm._v(
                                                            "Selisih Tunas yang di klaim dengan yang disetujui"
                                                          )
                                                        ]
                                                      )
                                                    ]
                                                  )
                                                ]
                                              )
                                            ]
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
                                              name: "tunas_disetujui",
                                              options: _vm.cleaveOption.numeric,
                                              readonly: _vm.tipe == "selesai",
                                              placeholder:
                                                "Silahkan masukkan jumlah nilai pengajuan klaim TUNAS yang disetujui",
                                              "data-vv-as":
                                                "Nilai pengajuan klaim TUNAS yang disetujui"
                                            },
                                            model: {
                                              value:
                                                _vm.formStatus.tunas_disetujui,
                                              callback: function($$v) {
                                                _vm.$set(
                                                  _vm.formStatus,
                                                  "tunas_disetujui",
                                                  $$v
                                                )
                                              },
                                              expression:
                                                "formStatus.tunas_disetujui"
                                            }
                                          }),
                                          _vm._v(" "),
                                          _vm.errors.has(
                                            "formStatus.tunas_disetujui"
                                          )
                                            ? _c(
                                                "small",
                                                {
                                                  staticClass:
                                                    "text-muted text-danger"
                                                },
                                                [
                                                  _c("i", {
                                                    staticClass:
                                                      "icon-arrow-small-right"
                                                  }),
                                                  _vm._v(
                                                    " " +
                                                      _vm._s(
                                                        _vm.errors.first(
                                                          "formStatus.tunas_disetujui"
                                                        )
                                                      ) +
                                                      "\n                    "
                                                  )
                                                ]
                                              )
                                            : _c(
                                                "small",
                                                { staticClass: "text-muted" },
                                                [_vm._v(" ")]
                                              )
                                        ],
                                        1
                                      )
                                    ])
                                  : _vm._e(),
                                _vm._v(" "),
                                _vm.formStatus.status == "4" ||
                                _vm.tipe == "selesai"
                                  ? _c("div", { staticClass: "col-md-6" }, [
                                      _c(
                                        "div",
                                        {
                                          staticClass: "form-group",
                                          class: {
                                            "has-error": _vm.errors.has(
                                              "formStatus.lintang_disetujui"
                                            )
                                          }
                                        },
                                        [
                                          _c(
                                            "h5",
                                            {
                                              class: {
                                                "text-danger": _vm.errors.has(
                                                  "formStatus.lintang_disetujui"
                                                )
                                              }
                                            },
                                            [
                                              _vm.errors.has(
                                                "formStatus.lintang_disetujui"
                                              )
                                                ? _c("i", {
                                                    staticClass: "icon-cross2"
                                                  })
                                                : _vm._e(),
                                              _vm._v(
                                                "Nilai pengajuan klaim LINTANG yang disetujui"
                                              )
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "div",
                                            {
                                              staticClass: "card card-body",
                                              class: {
                                                "bg-blue-400":
                                                  _vm.selisihLintang == 0,
                                                "bg-danger-400":
                                                  _vm.selisihLintang < 0,
                                                "bg-brown-400":
                                                  _vm.selisihLintang > 0
                                              }
                                            },
                                            [
                                              _c(
                                                "div",
                                                { staticClass: "media" },
                                                [
                                                  _c(
                                                    "div",
                                                    {
                                                      staticClass: "media-body"
                                                    },
                                                    [
                                                      _c(
                                                        "h3",
                                                        { staticClass: "mb-0" },
                                                        [
                                                          _vm.selisihLintang > 0
                                                            ? _c("i", {
                                                                staticClass:
                                                                  "icon-plus3"
                                                              })
                                                            : _vm._e(),
                                                          _vm._v(" "),
                                                          _c("check-value", {
                                                            attrs: {
                                                              value:
                                                                _vm.selisihLintang,
                                                              valueType:
                                                                "currency"
                                                            }
                                                          })
                                                        ],
                                                        1
                                                      ),
                                                      _vm._v(" "),
                                                      _c(
                                                        "span",
                                                        {
                                                          staticClass:
                                                            "text-uppercase font-size-xs"
                                                        },
                                                        [
                                                          _vm._v(
                                                            "Selisih Lintang yang di klaim dengan yang disetujui"
                                                          )
                                                        ]
                                                      )
                                                    ]
                                                  )
                                                ]
                                              )
                                            ]
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
                                              name: "lintang_disetujui",
                                              options: _vm.cleaveOption.numeric,
                                              readonly: _vm.tipe == "selesai",
                                              placeholder:
                                                "Silahkan masukkan jumlah nilai pengajuan klaim LINTANG yang disetujui",
                                              "data-vv-as":
                                                "Nilai pengajuan klaim LINTANG yang disetujui"
                                            },
                                            model: {
                                              value:
                                                _vm.formStatus
                                                  .lintang_disetujui,
                                              callback: function($$v) {
                                                _vm.$set(
                                                  _vm.formStatus,
                                                  "lintang_disetujui",
                                                  $$v
                                                )
                                              },
                                              expression:
                                                "formStatus.lintang_disetujui"
                                            }
                                          }),
                                          _vm._v(" "),
                                          _vm.errors.has(
                                            "formStatus.lintang_disetujui"
                                          )
                                            ? _c(
                                                "small",
                                                {
                                                  staticClass:
                                                    "text-muted text-danger"
                                                },
                                                [
                                                  _c("i", {
                                                    staticClass:
                                                      "icon-arrow-small-right"
                                                  }),
                                                  _vm._v(
                                                    " " +
                                                      _vm._s(
                                                        _vm.errors.first(
                                                          "formStatus.lintang_disetujui"
                                                        )
                                                      ) +
                                                      "\n                    "
                                                  )
                                                ]
                                              )
                                            : _c(
                                                "small",
                                                { staticClass: "text-muted" },
                                                [_vm._v(" ")]
                                              )
                                        ],
                                        1
                                      )
                                    ])
                                  : _vm._e(),
                                _vm._v(" "),
                                _vm.formStatus.status != 0 &&
                                _vm.formStatus.status != 31
                                  ? _c("div", { staticClass: "col-md-12" }, [
                                      _c("div", { staticClass: "form-group" }, [
                                        _c("h5", [
                                          _vm._v(
                                            "\n                      Keterangan:\n                    "
                                          )
                                        ]),
                                        _vm._v(" "),
                                        _c("textarea", {
                                          directives: [
                                            {
                                              name: "model",
                                              rawName: "v-model",
                                              value:
                                                _vm.formStatus.keterangan_klaim,
                                              expression:
                                                "formStatus.keterangan_klaim"
                                            }
                                          ],
                                          staticClass: "form-control",
                                          attrs: {
                                            rows: "3",
                                            type: "text",
                                            name: "keterangan_klaim",
                                            readonly: _vm.tipe == "selesai",
                                            placeholder:
                                              "Silahkan masukkan keterangan "
                                          },
                                          domProps: {
                                            value:
                                              _vm.formStatus.keterangan_klaim
                                          },
                                          on: {
                                            input: function($event) {
                                              if ($event.target.composing) {
                                                return
                                              }
                                              _vm.$set(
                                                _vm.formStatus,
                                                "keterangan_klaim",
                                                $event.target.value
                                              )
                                            }
                                          }
                                        })
                                      ])
                                    ])
                                  : _vm._e(),
                                _vm._v(" "),
                                _vm.formStatus.status != 0
                                  ? _c("div", { staticClass: "col-md-6" }, [
                                      _c("div", { staticClass: "form-group" }, [
                                        _c("h5", [
                                          _vm._v(
                                            "\n                      Nomor Surat:\n                    "
                                          )
                                        ]),
                                        _vm._v(" "),
                                        _vm.currentUser.id_cu == 0
                                          ? _c("input", {
                                              directives: [
                                                {
                                                  name: "model",
                                                  rawName: "v-model",
                                                  value:
                                                    _vm.formStatus.surat_nomor,
                                                  expression:
                                                    "formStatus.surat_nomor"
                                                }
                                              ],
                                              staticClass: "form-control",
                                              attrs: {
                                                type: "text",
                                                name: "surat_nomor",
                                                placeholder:
                                                  "Silahkan masukkan nomor surat"
                                              },
                                              domProps: {
                                                value:
                                                  _vm.formStatus.surat_nomor
                                              },
                                              on: {
                                                input: function($event) {
                                                  if ($event.target.composing) {
                                                    return
                                                  }
                                                  _vm.$set(
                                                    _vm.formStatus,
                                                    "surat_nomor",
                                                    $event.target.value
                                                  )
                                                }
                                              }
                                            })
                                          : _c("input", {
                                              directives: [
                                                {
                                                  name: "model",
                                                  rawName: "v-model",
                                                  value:
                                                    _vm.formStatus.surat_nomor,
                                                  expression:
                                                    "formStatus.surat_nomor"
                                                }
                                              ],
                                              staticClass: "form-control",
                                              attrs: {
                                                type: "text",
                                                name: "surat_nomor",
                                                placeholder:
                                                  "Silahkan masukkan nomor surat",
                                                readonly: ""
                                              },
                                              domProps: {
                                                value:
                                                  _vm.formStatus.surat_nomor
                                              },
                                              on: {
                                                input: function($event) {
                                                  if ($event.target.composing) {
                                                    return
                                                  }
                                                  _vm.$set(
                                                    _vm.formStatus,
                                                    "surat_nomor",
                                                    $event.target.value
                                                  )
                                                }
                                              }
                                            })
                                      ])
                                    ])
                                  : _vm._e(),
                                _vm._v(" "),
                                _vm.formStatus.status != 0
                                  ? _c("div", { staticClass: "col-md-6" }, [
                                      _c(
                                        "div",
                                        { staticClass: "form-group" },
                                        [
                                          _c("h5", [
                                            _vm._v(
                                              "\n                      Tgl. Surat:"
                                            )
                                          ]),
                                          _vm._v(" "),
                                          _vm.currentUser.id_cu == 0
                                            ? _c("date-picker", {
                                                attrs: {
                                                  defaultDate:
                                                    _vm.formStatus.surat_tanggal
                                                },
                                                on: {
                                                  dateSelected: function(
                                                    $event
                                                  ) {
                                                    _vm.formStatus.surat_tanggal = $event
                                                  }
                                                }
                                              })
                                            : _c("input", {
                                                directives: [
                                                  {
                                                    name: "model",
                                                    rawName: "v-model",
                                                    value:
                                                      _vm.formStatus
                                                        .surat_tanggal,
                                                    expression:
                                                      "formStatus.surat_tanggal"
                                                  }
                                                ],
                                                staticClass: "form-control",
                                                attrs: {
                                                  type: "text",
                                                  name: "surat_tanggal",
                                                  placeholder:
                                                    "Silahkan masukkan tanggal surat",
                                                  readonly: ""
                                                },
                                                domProps: {
                                                  value:
                                                    _vm.formStatus.surat_tanggal
                                                },
                                                on: {
                                                  input: function($event) {
                                                    if (
                                                      $event.target.composing
                                                    ) {
                                                      return
                                                    }
                                                    _vm.$set(
                                                      _vm.formStatus,
                                                      "surat_tanggal",
                                                      $event.target.value
                                                    )
                                                  }
                                                }
                                              })
                                        ],
                                        1
                                      )
                                    ])
                                  : _vm._e()
                              ])
                            ])
                          ]
                    ],
                    2
                  ),
                  _vm._v(" "),
                  _vm.tipe == "verifikasi"
                    ? _c("div", [
                        _c(
                          "div",
                          { staticClass: "alert bg-info alert-styled-left" },
                          [
                            _c("h6", [
                              _vm._v(
                                "Dengan menekan tombol verifikasi dibawah maka anda telah melakukan pemeriksaan dan menyetujui pengajuan klaim jalinan atas nama "
                              ),
                              _c("b", [
                                _c("u", [
                                  _vm._v(
                                    _vm._s(_vm.selectedData.anggota_cu.name)
                                  )
                                ])
                              ]),
                              _vm._v(
                                " dan segala informasi yang ada dan dikirmkan adalah benar sesuai dengan peraturan."
                              )
                            ])
                          ]
                        )
                      ])
                    : _vm.tipe == "selesai"
                    ? _c("div", [
                        _c(
                          "div",
                          { staticClass: "alert bg-info alert-styled-left" },
                          [
                            _c("h6", [
                              _vm._v(
                                "Dengan menekan tombol selesai dibawah maka anda telah melakukan penyerahan klaim jalinan atas nama "
                              ),
                              _c("b", [
                                _c("u", [
                                  _vm._v(
                                    _vm._s(_vm.selectedData.anggota_cu.name)
                                  )
                                ])
                              ]),
                              _vm._v(
                                " kepada ahli waris atau yang diwakilkan dan segala informasi yang ada dan dikirmkan adalah benar sesuai dengan peraturan."
                              )
                            ])
                          ]
                        )
                      ])
                    : _vm.tipe == "lihat"
                    ? _c("span")
                    : _c("div", [
                        _c(
                          "div",
                          { staticClass: "alert bg-info alert-styled-left" },
                          [
                            _c("h6", [
                              _vm._v(
                                "Pastikan data yang dimasukkan sudah benar sebelum menyimpan."
                              )
                            ])
                          ]
                        )
                      ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "text-center d-none d-md-block" }, [
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-light",
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
                    _vm.tipe != "lihat"
                      ? _c(
                          "button",
                          {
                            staticClass: "btn btn-primary",
                            attrs: { type: "submit" }
                          },
                          [
                            _vm.tipe == "selesai"
                              ? _c("span", [
                                  _vm.formStatus.status == 5
                                    ? _c("span", [
                                        _c("i", {
                                          staticClass: "icon-checkmark4"
                                        }),
                                        _vm._v(" Selesai\n              ")
                                      ])
                                    : _c("span", [
                                        _c("i", {
                                          staticClass: "icon-blocked"
                                        }),
                                        _vm._v(" Batal Selesai\n              ")
                                      ])
                                ])
                              : _vm.tipe == "verifikasi"
                              ? _c("span", [
                                  _c("i", { staticClass: "icon-file-check" }),
                                  _vm._v(" Verifikasi\n            ")
                                ])
                              : _c("span", [
                                  _c("i", { staticClass: "icon-floppy-disk" }),
                                  _vm._v(" Simpan\n            ")
                                ])
                          ]
                        )
                      : _vm._e()
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "d-block d-md-none" }, [
                    _vm.tipe != "lihat"
                      ? _c(
                          "button",
                          {
                            staticClass: "btn btn-primary btn-block pb-2",
                            attrs: { type: "submit" }
                          },
                          [
                            _vm.tipe == "selesai"
                              ? _c("span", [
                                  _vm.formStatus.status == 4
                                    ? _c("span", [
                                        _c("i", {
                                          staticClass: "icon-checkmark4"
                                        }),
                                        _vm._v(" Selesai\n              ")
                                      ])
                                    : _c("span", [
                                        _c("i", {
                                          staticClass: "icon-blocked"
                                        }),
                                        _vm._v(" Batal Selesai\n              ")
                                      ])
                                ])
                              : _vm.tipe == "verifikasi"
                              ? _c("span", [
                                  _c("i", { staticClass: "icon-file-check" }),
                                  _vm._v(" Verifikasi\n            ")
                                ])
                              : _c("span", [
                                  _c("i", { staticClass: "icon-floppy-disk" }),
                                  _vm._v(" Simpan\n            ")
                                ])
                          ]
                        )
                      : _vm._e(),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-light btn-block pb-2",
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
            ]
          )
        ]
      ),
      _vm._v(" "),
      _c(
        "transition",
        { attrs: { "enter-active-class": "animated fadeIn", mode: "out-in" } },
        [
          _vm.isVerifikator
            ? _c(
                "div",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: _vm.tabName == "verifikator",
                      expression: "tabName == 'verifikator'"
                    }
                  ]
                },
                [
                  _c("div", { staticClass: "row" }, [
                    _c(
                      "div",
                      { staticClass: "col-md-4" },
                      [
                        _c("verifikator", {
                          attrs: {
                            isSingle: true,
                            title: "Verifikator Pengurus",
                            itemData: _vm.modelVeriPengurus,
                            itemDataStat: _vm.modelVeriStat
                          }
                        }),
                        _vm._v(" "),
                        _c("verifikator", {
                          attrs: {
                            isSingle: false,
                            title: "Verifikator yang dipilih",
                            itemData: _vm.modelVeriPilihPengurus,
                            itemDataStat: _vm.modelVeriPilihPengurusStat
                          }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "col-md-4" },
                      [
                        _c("verifikator", {
                          attrs: {
                            isSingle: true,
                            title: "Verifikator Pengawas",
                            itemData: _vm.modelVeriPengawas,
                            itemDataStat: _vm.modelVeriStat
                          }
                        }),
                        _vm._v(" "),
                        _c("verifikator", {
                          attrs: {
                            isSingle: false,
                            title: "Verifikator yang dipilih",
                            itemData: _vm.modelVeriPilihPengawas,
                            itemDataStat: _vm.modelVeriPilihPengawasStat
                          }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "col-md-4" },
                      [
                        _c("verifikator", {
                          attrs: {
                            isSingle: true,
                            title: "Verifikator Manajemen",
                            itemData: _vm.modelVeriManajemen,
                            itemDataStat: _vm.modelVeriStat
                          }
                        }),
                        _vm._v(" "),
                        _c("verifikator", {
                          attrs: {
                            isSingle: false,
                            title: "Verifikator yang dipilih",
                            itemData: _vm.modelVeriPilihManajemen,
                            itemDataStat: _vm.modelVeriPilihManajemenStat
                          }
                        })
                      ],
                      1
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "text-center d-none d-md-block" }, [
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-light",
                        on: {
                          click: function($event) {
                            $event.preventDefault()
                            return _vm.tutup($event)
                          }
                        }
                      },
                      [_c("i", { staticClass: "icon-cross" }), _vm._v(" Tutup")]
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "d-block d-md-none" }, [
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-light btn-block pb-2",
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
                ]
              )
            : _vm._e()
        ]
      ),
      _vm._v(" "),
      _c(
        "transition",
        { attrs: { "enter-active-class": "animated fadeIn", mode: "out-in" } },
        [
          _vm.isDokumen
            ? _c(
                "div",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: _vm.tabName == "dokumen",
                      expression: "tabName == 'dokumen'"
                    }
                  ]
                },
                [
                  _c("div", { staticClass: "nav-tabs-responsive mb-3" }, [
                    _c(
                      "ul",
                      { staticClass: "nav nav-tabs nav-tabs-solid bg-light" },
                      [
                        _c(
                          "li",
                          {
                            directives: [
                              {
                                name: "show",
                                rawName: "v-show",
                                value: _vm.selected.dokumen_meninggal,
                                expression: "selected.dokumen_meninggal"
                              }
                            ],
                            staticClass: "nav-item"
                          },
                          [
                            _c(
                              "a",
                              {
                                staticClass: "nav-link",
                                class: {
                                  active: _vm.tabNameDokumen == "meninggal"
                                },
                                attrs: { href: "#" },
                                on: {
                                  click: function($event) {
                                    $event.preventDefault()
                                    return _vm.changeTabDokumen("meninggal")
                                  }
                                }
                              },
                              [
                                _c("i", { staticClass: "icon-person mr-2" }),
                                _vm._v(
                                  " \n                Keterangan Meninggal Dunia\n              "
                                )
                              ]
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "li",
                          {
                            directives: [
                              {
                                name: "show",
                                rawName: "v-show",
                                value: _vm.selected.dokumen_ktp,
                                expression: "selected.dokumen_ktp"
                              }
                            ],
                            staticClass: "nav-item"
                          },
                          [
                            _c(
                              "a",
                              {
                                staticClass: "nav-link",
                                class: { active: _vm.tabNameDokumen == "ktp" },
                                attrs: { href: "#" },
                                on: {
                                  click: function($event) {
                                    $event.preventDefault()
                                    return _vm.changeTabDokumen("ktp")
                                  }
                                }
                              },
                              [
                                _c("i", { staticClass: "icon-vcard mr-2" }),
                                _vm._v(
                                  " \n                Identitas Diri \n              "
                                )
                              ]
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "li",
                          {
                            directives: [
                              {
                                name: "show",
                                rawName: "v-show",
                                value: _vm.selected.spma_1,
                                expression: "selected.spma_1"
                              }
                            ],
                            staticClass: "nav-item"
                          },
                          [
                            _c(
                              "a",
                              {
                                staticClass: "nav-link",
                                class: {
                                  active: _vm.tabNameDokumen == "spma_1"
                                },
                                attrs: { href: "#" },
                                on: {
                                  click: function($event) {
                                    $event.preventDefault()
                                    return _vm.changeTabDokumen("spma_1")
                                  }
                                }
                              },
                              [
                                _c("i", { staticClass: "icon-magazine mr-2" }),
                                _vm._v(
                                  " \n                Surat Permohonan Jadi Anggota 1\n              "
                                )
                              ]
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "li",
                          {
                            directives: [
                              {
                                name: "show",
                                rawName: "v-show",
                                value: _vm.selected.spma_2,
                                expression: "selected.spma_2"
                              }
                            ],
                            staticClass: "nav-item"
                          },
                          [
                            _c(
                              "a",
                              {
                                staticClass: "nav-link",
                                class: {
                                  active: _vm.tabNameDokumen == "spma_2"
                                },
                                attrs: { href: "#" },
                                on: {
                                  click: function($event) {
                                    $event.preventDefault()
                                    return _vm.changeTabDokumen("spma_2")
                                  }
                                }
                              },
                              [
                                _c("i", { staticClass: "icon-magazine mr-2" }),
                                _vm._v(
                                  " \n                Surat Permohonan Jadi Anggota 2\n              "
                                )
                              ]
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "li",
                          {
                            directives: [
                              {
                                name: "show",
                                rawName: "v-show",
                                value: _vm.selected.buku_simpanan_1,
                                expression: "selected.buku_simpanan_1"
                              }
                            ],
                            staticClass: "nav-item"
                          },
                          [
                            _c(
                              "a",
                              {
                                staticClass: "nav-link",
                                class: {
                                  active:
                                    _vm.tabNameDokumen == "buku_simpanan_1"
                                },
                                attrs: { href: "#" },
                                on: {
                                  click: function($event) {
                                    $event.preventDefault()
                                    return _vm.changeTabDokumen(
                                      "buku_simpanan_1"
                                    )
                                  }
                                }
                              },
                              [
                                _c("i", {
                                  staticClass: "icon-credit-card mr-2"
                                }),
                                _vm._v(
                                  " \n                Buku Simpanan 1\n              "
                                )
                              ]
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "li",
                          {
                            directives: [
                              {
                                name: "show",
                                rawName: "v-show",
                                value: _vm.selected.buku_simpanan_2,
                                expression: "selected.buku_simpanan_2"
                              }
                            ],
                            staticClass: "nav-item"
                          },
                          [
                            _c(
                              "a",
                              {
                                staticClass: "nav-link",
                                class: {
                                  active:
                                    _vm.tabNameDokumen == "buku_simpanan_2"
                                },
                                attrs: { href: "#" },
                                on: {
                                  click: function($event) {
                                    $event.preventDefault()
                                    return _vm.changeTabDokumen(
                                      "buku_simpanan_2"
                                    )
                                  }
                                }
                              },
                              [
                                _c("i", {
                                  staticClass: "icon-credit-card mr-2"
                                }),
                                _vm._v(
                                  " \n                Buku Simpanan 2\n              "
                                )
                              ]
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "li",
                          {
                            directives: [
                              {
                                name: "show",
                                rawName: "v-show",
                                value: _vm.selected.buku_simpanan_3,
                                expression: "selected.buku_simpanan_3"
                              }
                            ],
                            staticClass: "nav-item"
                          },
                          [
                            _c(
                              "a",
                              {
                                staticClass: "nav-link",
                                class: {
                                  active:
                                    _vm.tabNameDokumen == "buku_simpanan_3"
                                },
                                attrs: { href: "#" },
                                on: {
                                  click: function($event) {
                                    $event.preventDefault()
                                    return _vm.changeTabDokumen(
                                      "buku_simpanan_3"
                                    )
                                  }
                                }
                              },
                              [
                                _c("i", {
                                  staticClass: "icon-credit-card mr-2"
                                }),
                                _vm._v(
                                  " \n                Buku Simpanan 3\n              "
                                )
                              ]
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "li",
                          {
                            directives: [
                              {
                                name: "show",
                                rawName: "v-show",
                                value: _vm.selected.buku_simpanan_4,
                                expression: "selected.buku_simpanan_4"
                              }
                            ],
                            staticClass: "nav-item"
                          },
                          [
                            _c(
                              "a",
                              {
                                staticClass: "nav-link",
                                class: {
                                  active:
                                    _vm.tabNameDokumen == "buku_simpanan_4"
                                },
                                attrs: { href: "#" },
                                on: {
                                  click: function($event) {
                                    $event.preventDefault()
                                    return _vm.changeTabDokumen(
                                      "buku_simpanan_4"
                                    )
                                  }
                                }
                              },
                              [
                                _c("i", {
                                  staticClass: "icon-credit-card mr-2"
                                }),
                                _vm._v(
                                  " \n                Buku Simpanan 4\n              "
                                )
                              ]
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "li",
                          {
                            directives: [
                              {
                                name: "show",
                                rawName: "v-show",
                                value: _vm.selected.buku_simpanan_5,
                                expression: "selected.buku_simpanan_5"
                              }
                            ],
                            staticClass: "nav-item"
                          },
                          [
                            _c(
                              "a",
                              {
                                staticClass: "nav-link",
                                class: {
                                  active:
                                    _vm.tabNameDokumen == "buku_simpanan_5"
                                },
                                attrs: { href: "#" },
                                on: {
                                  click: function($event) {
                                    $event.preventDefault()
                                    return _vm.changeTabDokumen(
                                      "buku_simpanan_5"
                                    )
                                  }
                                }
                              },
                              [
                                _c("i", {
                                  staticClass: "icon-credit-card mr-2"
                                }),
                                _vm._v(
                                  " \n                Buku Simpanan 5\n              "
                                )
                              ]
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "li",
                          {
                            directives: [
                              {
                                name: "show",
                                rawName: "v-show",
                                value: _vm.selected.buku_pinjaman_1,
                                expression: "selected.buku_pinjaman_1"
                              }
                            ],
                            staticClass: "nav-item"
                          },
                          [
                            _c(
                              "a",
                              {
                                staticClass: "nav-link",
                                class: {
                                  active:
                                    _vm.tabNameDokumen == "buku_pinjaman_1"
                                },
                                attrs: { href: "#" },
                                on: {
                                  click: function($event) {
                                    $event.preventDefault()
                                    return _vm.changeTabDokumen(
                                      "buku_pinjaman_1"
                                    )
                                  }
                                }
                              },
                              [
                                _c("i", {
                                  staticClass: "icon-credit-card2 mr-2"
                                }),
                                _vm._v(
                                  " \n                Buku Pinjaman 1\n              "
                                )
                              ]
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "li",
                          {
                            directives: [
                              {
                                name: "show",
                                rawName: "v-show",
                                value: _vm.selected.buku_pinjaman_2,
                                expression: "selected.buku_pinjaman_2"
                              }
                            ],
                            staticClass: "nav-item"
                          },
                          [
                            _c(
                              "a",
                              {
                                staticClass: "nav-link",
                                class: {
                                  active:
                                    _vm.tabNameDokumen == "buku_pinjaman_2"
                                },
                                attrs: { href: "#" },
                                on: {
                                  click: function($event) {
                                    $event.preventDefault()
                                    return _vm.changeTabDokumen(
                                      "buku_pinjaman_2"
                                    )
                                  }
                                }
                              },
                              [
                                _c("i", {
                                  staticClass: "icon-credit-card2 mr-2"
                                }),
                                _vm._v(
                                  " \n                Buku Pinjaman 2\n              "
                                )
                              ]
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "li",
                          {
                            directives: [
                              {
                                name: "show",
                                rawName: "v-show",
                                value: _vm.selected.buku_pinjaman_3,
                                expression: "selected.buku_pinjaman_3"
                              }
                            ],
                            staticClass: "nav-item"
                          },
                          [
                            _c(
                              "a",
                              {
                                staticClass: "nav-link",
                                class: {
                                  active:
                                    _vm.tabNameDokumen == "buku_pinjaman_3"
                                },
                                attrs: { href: "#" },
                                on: {
                                  click: function($event) {
                                    $event.preventDefault()
                                    return _vm.changeTabDokumen(
                                      "buku_pinjaman_3"
                                    )
                                  }
                                }
                              },
                              [
                                _c("i", {
                                  staticClass: "icon-credit-card2 mr-2"
                                }),
                                _vm._v(
                                  " \n                Buku Pinjaman 3\n              "
                                )
                              ]
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "li",
                          {
                            directives: [
                              {
                                name: "show",
                                rawName: "v-show",
                                value: _vm.selected.dokumen_pinjaman_1,
                                expression: "selected.dokumen_pinjaman_1"
                              }
                            ],
                            staticClass: "nav-item"
                          },
                          [
                            _c(
                              "a",
                              {
                                staticClass: "nav-link",
                                class: {
                                  active: _vm.tabNameDokumen == "pinjaman_1"
                                },
                                attrs: { href: "#" },
                                on: {
                                  click: function($event) {
                                    $event.preventDefault()
                                    return _vm.changeTabDokumen("pinjaman_1")
                                  }
                                }
                              },
                              [
                                _c("i", {
                                  staticClass: "icon-clipboard3 mr-2"
                                }),
                                _vm._v(
                                  "\n                Pinjaman 1\n              "
                                )
                              ]
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "li",
                          {
                            directives: [
                              {
                                name: "show",
                                rawName: "v-show",
                                value: _vm.selected.dokumen_pinjaman_2,
                                expression: "selected.dokumen_pinjaman_2"
                              }
                            ],
                            staticClass: "nav-item"
                          },
                          [
                            _c(
                              "a",
                              {
                                staticClass: "nav-link",
                                class: {
                                  active: _vm.tabNameDokumen == "pinjaman_2"
                                },
                                attrs: { href: "#" },
                                on: {
                                  click: function($event) {
                                    $event.preventDefault()
                                    return _vm.changeTabDokumen("pinjaman_2")
                                  }
                                }
                              },
                              [
                                _c("i", {
                                  staticClass: "icon-clipboard3 mr-2"
                                }),
                                _vm._v(
                                  "\n                Pinjaman 2\n              "
                                )
                              ]
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "li",
                          {
                            directives: [
                              {
                                name: "show",
                                rawName: "v-show",
                                value: _vm.selected.dokumen_pinjaman_3,
                                expression: "selected.dokumen_pinjaman_3"
                              }
                            ],
                            staticClass: "nav-item"
                          },
                          [
                            _c(
                              "a",
                              {
                                staticClass: "nav-link",
                                class: {
                                  active: _vm.tabNameDokumen == "pinjaman_3"
                                },
                                attrs: { href: "#" },
                                on: {
                                  click: function($event) {
                                    $event.preventDefault()
                                    return _vm.changeTabDokumen("pinjaman_3")
                                  }
                                }
                              },
                              [
                                _c("i", {
                                  staticClass: "icon-clipboard3 mr-2"
                                }),
                                _vm._v(
                                  "\n                Pinjaman 3\n              "
                                )
                              ]
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "li",
                          {
                            directives: [
                              {
                                name: "show",
                                rawName: "v-show",
                                value: _vm.selected.dokumen_pinjaman_4,
                                expression: "selected.dokumen_pinjaman_4"
                              }
                            ],
                            staticClass: "nav-item"
                          },
                          [
                            _c(
                              "a",
                              {
                                staticClass: "nav-link",
                                class: {
                                  active: _vm.tabNameDokumen == "pinjaman_4"
                                },
                                attrs: { href: "#" },
                                on: {
                                  click: function($event) {
                                    $event.preventDefault()
                                    return _vm.changeTabDokumen("pinjaman_4")
                                  }
                                }
                              },
                              [
                                _c("i", {
                                  staticClass: "icon-clipboard3 mr-2"
                                }),
                                _vm._v(
                                  "\n                Pinjaman 4\n              "
                                )
                              ]
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "li",
                          {
                            directives: [
                              {
                                name: "show",
                                rawName: "v-show",
                                value: _vm.selected.dokumen_pinjaman_5,
                                expression: "selected.dokumen_pinjaman_5"
                              }
                            ],
                            staticClass: "nav-item"
                          },
                          [
                            _c(
                              "a",
                              {
                                staticClass: "nav-link",
                                class: {
                                  active: _vm.tabNameDokumen == "pinjaman_5"
                                },
                                attrs: { href: "#" },
                                on: {
                                  click: function($event) {
                                    $event.preventDefault()
                                    return _vm.changeTabDokumen("pinjaman_5")
                                  }
                                }
                              },
                              [
                                _c("i", {
                                  staticClass: "icon-clipboard3 mr-2"
                                }),
                                _vm._v(
                                  "\n                Pinjaman 5\n              "
                                )
                              ]
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "li",
                          {
                            directives: [
                              {
                                name: "show",
                                rawName: "v-show",
                                value: _vm.selected.dokumen_pinjaman_6,
                                expression: "selected.dokumen_pinjaman_6"
                              }
                            ],
                            staticClass: "nav-item"
                          },
                          [
                            _c(
                              "a",
                              {
                                staticClass: "nav-link",
                                class: {
                                  active: _vm.tabNameDokumen == "pinjaman_6"
                                },
                                attrs: { href: "#" },
                                on: {
                                  click: function($event) {
                                    $event.preventDefault()
                                    return _vm.changeTabDokumen("pinjaman_6")
                                  }
                                }
                              },
                              [
                                _c("i", {
                                  staticClass: "icon-clipboard3 mr-2"
                                }),
                                _vm._v(
                                  "\n                Pinjaman 6\n              "
                                )
                              ]
                            )
                          ]
                        )
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c(
                    "transition",
                    {
                      attrs: {
                        "enter-active-class": "animated fadeIn",
                        mode: "out-in"
                      }
                    },
                    [
                      _c(
                        "div",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: _vm.tabNameDokumen == "",
                              expression: "tabNameDokumen == ''"
                            }
                          ]
                        },
                        [
                          _c("div", { staticClass: "card card-body" }, [
                            _c("h5", [
                              _vm._v(
                                "Silahkan memilih dokumen yang ingin ditampilkan dengan menekan tombol diatas. Jika tidak terdapat tombol maka berarti klaim ini tidak memiliki dokumen yang bisa dilihat."
                              )
                            ])
                          ])
                        ]
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "transition",
                    {
                      attrs: {
                        "enter-active-class": "animated fadeIn",
                        mode: "out-in"
                      }
                    },
                    [
                      _c(
                        "div",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: _vm.tabNameDokumen == "meninggal",
                              expression: "tabNameDokumen == 'meninggal'"
                            }
                          ]
                        },
                        [
                          _c("dokumen", {
                            attrs: {
                              image: _vm.selected.dokumen_meninggal,
                              name: "dokumen_meninggal"
                            },
                            on: { tutup: _vm.tutup }
                          })
                        ],
                        1
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "transition",
                    {
                      attrs: {
                        "enter-active-class": "animated fadeIn",
                        mode: "out-in"
                      }
                    },
                    [
                      _c(
                        "div",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: _vm.tabNameDokumen == "ktp",
                              expression: "tabNameDokumen == 'ktp'"
                            }
                          ]
                        },
                        [
                          _c("dokumen", {
                            attrs: {
                              image: _vm.selected.dokumen_ktp,
                              name: "dokumen_ktp"
                            },
                            on: { tutup: _vm.tutup }
                          })
                        ],
                        1
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "transition",
                    {
                      attrs: {
                        "enter-active-class": "animated fadeIn",
                        mode: "out-in"
                      }
                    },
                    [
                      _c(
                        "div",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: _vm.tabNameDokumen == "spma_1",
                              expression: "tabNameDokumen == 'spma_1'"
                            }
                          ]
                        },
                        [
                          _c("dokumen", {
                            attrs: {
                              image: _vm.selected.spma_1,
                              name: "spma_1"
                            },
                            on: { tutup: _vm.tutup }
                          })
                        ],
                        1
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "transition",
                    {
                      attrs: {
                        "enter-active-class": "animated fadeIn",
                        mode: "out-in"
                      }
                    },
                    [
                      _c(
                        "div",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: _vm.tabNameDokumen == "spma_2",
                              expression: "tabNameDokumen == 'spma_2'"
                            }
                          ]
                        },
                        [
                          _c("dokumen", {
                            attrs: {
                              image: _vm.selected.spma_2,
                              name: "spma_2"
                            },
                            on: { tutup: _vm.tutup }
                          })
                        ],
                        1
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "transition",
                    {
                      attrs: {
                        "enter-active-class": "animated fadeIn",
                        mode: "out-in"
                      }
                    },
                    [
                      _c(
                        "div",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: _vm.tabNameDokumen == "buku_simpanan_1",
                              expression: "tabNameDokumen == 'buku_simpanan_1'"
                            }
                          ]
                        },
                        [
                          _c("dokumen", {
                            attrs: {
                              image: _vm.selected.buku_simpanan_1,
                              name: "buku_simpanan_1"
                            },
                            on: { tutup: _vm.tutup }
                          })
                        ],
                        1
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "transition",
                    {
                      attrs: {
                        "enter-active-class": "animated fadeIn",
                        mode: "out-in"
                      }
                    },
                    [
                      _c(
                        "div",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: _vm.tabNameDokumen == "buku_simpanan_2",
                              expression: "tabNameDokumen == 'buku_simpanan_2'"
                            }
                          ]
                        },
                        [
                          _c("dokumen", {
                            attrs: {
                              image: _vm.selected.buku_simpanan_2,
                              name: "buku_simpanan_2"
                            },
                            on: { tutup: _vm.tutup }
                          })
                        ],
                        1
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "transition",
                    {
                      attrs: {
                        "enter-active-class": "animated fadeIn",
                        mode: "out-in"
                      }
                    },
                    [
                      _c(
                        "div",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: _vm.tabNameDokumen == "buku_simpanan_3",
                              expression: "tabNameDokumen == 'buku_simpanan_3'"
                            }
                          ]
                        },
                        [
                          _c("dokumen", {
                            attrs: {
                              image: _vm.selected.buku_simpanan_3,
                              name: "buku_simpanan_3"
                            },
                            on: { tutup: _vm.tutup }
                          })
                        ],
                        1
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "transition",
                    {
                      attrs: {
                        "enter-active-class": "animated fadeIn",
                        mode: "out-in"
                      }
                    },
                    [
                      _c(
                        "div",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: _vm.tabNameDokumen == "buku_simpanan_4",
                              expression: "tabNameDokumen == 'buku_simpanan_4'"
                            }
                          ]
                        },
                        [
                          _c("dokumen", {
                            attrs: {
                              image: _vm.selected.buku_simpanan_4,
                              name: "buku_simpanan_4"
                            },
                            on: { tutup: _vm.tutup }
                          })
                        ],
                        1
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "transition",
                    {
                      attrs: {
                        "enter-active-class": "animated fadeIn",
                        mode: "out-in"
                      }
                    },
                    [
                      _c(
                        "div",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: _vm.tabNameDokumen == "buku_simpanan_5",
                              expression: "tabNameDokumen == 'buku_simpanan_5'"
                            }
                          ]
                        },
                        [
                          _c("dokumen", {
                            attrs: {
                              image: _vm.selected.buku_simpanan_5,
                              name: "buku_simpanan_5"
                            },
                            on: { tutup: _vm.tutup }
                          })
                        ],
                        1
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "transition",
                    {
                      attrs: {
                        "enter-active-class": "animated fadeIn",
                        mode: "out-in"
                      }
                    },
                    [
                      _c(
                        "div",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: _vm.tabNameDokumen == "buku_pinjaman_1",
                              expression: "tabNameDokumen == 'buku_pinjaman_1'"
                            }
                          ]
                        },
                        [
                          _c("dokumen", {
                            attrs: {
                              image: _vm.selected.buku_pinjaman_1,
                              name: "buku_pinjaman_1"
                            },
                            on: { tutup: _vm.tutup }
                          })
                        ],
                        1
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "transition",
                    {
                      attrs: {
                        "enter-active-class": "animated fadeIn",
                        mode: "out-in"
                      }
                    },
                    [
                      _c(
                        "div",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: _vm.tabNameDokumen == "buku_pinjaman_2",
                              expression: "tabNameDokumen == 'buku_pinjaman_2'"
                            }
                          ]
                        },
                        [
                          _c("dokumen", {
                            attrs: {
                              image: _vm.selected.buku_pinjaman_2,
                              name: "buku_pinjaman_2"
                            },
                            on: { tutup: _vm.tutup }
                          })
                        ],
                        1
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "transition",
                    {
                      attrs: {
                        "enter-active-class": "animated fadeIn",
                        mode: "out-in"
                      }
                    },
                    [
                      _c(
                        "div",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: _vm.tabNameDokumen == "buku_pinjaman_3",
                              expression: "tabNameDokumen == 'buku_pinjaman_3'"
                            }
                          ]
                        },
                        [
                          _c("dokumen", {
                            attrs: {
                              image: _vm.selected.buku_pinjaman_3,
                              name: "buku_pinjaman_3"
                            },
                            on: { tutup: _vm.tutup }
                          })
                        ],
                        1
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "transition",
                    {
                      attrs: {
                        "enter-active-class": "animated fadeIn",
                        mode: "out-in"
                      }
                    },
                    [
                      _c(
                        "div",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: _vm.tabNameDokumen == "pinjaman_1",
                              expression: "tabNameDokumen == 'pinjaman_1'"
                            }
                          ]
                        },
                        [
                          _c("dokumen", {
                            attrs: {
                              image: _vm.selected.dokumen_pinjaman_1,
                              name: "dokumen_pinjaman_1"
                            },
                            on: { tutup: _vm.tutup }
                          })
                        ],
                        1
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "transition",
                    {
                      attrs: {
                        "enter-active-class": "animated fadeIn",
                        mode: "out-in"
                      }
                    },
                    [
                      _c(
                        "div",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: _vm.tabNameDokumen == "pinjaman_2",
                              expression: "tabNameDokumen == 'pinjaman_2'"
                            }
                          ]
                        },
                        [
                          _c("dokumen", {
                            attrs: {
                              image: _vm.selected.dokumen_pinjaman_2,
                              name: "dokumen_pinjaman_2"
                            },
                            on: { tutup: _vm.tutup }
                          })
                        ],
                        1
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "transition",
                    {
                      attrs: {
                        "enter-active-class": "animated fadeIn",
                        mode: "out-in"
                      }
                    },
                    [
                      _c(
                        "div",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: _vm.tabNameDokumen == "pinjaman_3",
                              expression: "tabNameDokumen == 'pinjaman_3'"
                            }
                          ]
                        },
                        [
                          _c("dokumen", {
                            attrs: {
                              image: _vm.selected.dokumen_pinjaman_3,
                              name: "dokumen_pinjaman_3"
                            },
                            on: { tutup: _vm.tutup }
                          })
                        ],
                        1
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "transition",
                    {
                      attrs: {
                        "enter-active-class": "animated fadeIn",
                        mode: "out-in"
                      }
                    },
                    [
                      _c(
                        "div",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: _vm.tabNameDokumen == "pinjaman_4",
                              expression: "tabNameDokumen == 'pinjaman_4'"
                            }
                          ]
                        },
                        [
                          _c("dokumen", {
                            attrs: {
                              image: _vm.selected.dokumen_pinjaman_4,
                              name: "dokumen_pinjaman_4"
                            },
                            on: { tutup: _vm.tutup }
                          })
                        ],
                        1
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "transition",
                    {
                      attrs: {
                        "enter-active-class": "animated fadeIn",
                        mode: "out-in"
                      }
                    },
                    [
                      _c(
                        "div",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: _vm.tabNameDokumen == "pinjaman_5",
                              expression: "tabNameDokumen == 'pinjaman_5'"
                            }
                          ]
                        },
                        [
                          _c("dokumen", {
                            attrs: {
                              image: _vm.selected.dokumen_pinjaman_5,
                              name: "dokumen_pinjaman_5"
                            },
                            on: { tutup: _vm.tutup }
                          })
                        ],
                        1
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "transition",
                    {
                      attrs: {
                        "enter-active-class": "animated fadeIn",
                        mode: "out-in"
                      }
                    },
                    [
                      _c(
                        "div",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: _vm.tabNameDokumen == "pinjaman_6",
                              expression: "tabNameDokumen == 'pinjaman_6'"
                            }
                          ]
                        },
                        [
                          _c("dokumen", {
                            attrs: {
                              image: _vm.selected.dokumen_pinjaman_6,
                              name: "dokumen_pinjaman_6"
                            },
                            on: { tutup: _vm.tutup }
                          })
                        ],
                        1
                      )
                    ]
                  )
                ],
                1
              )
            : _vm._e()
        ]
      ),
      _vm._v(" "),
      _c(
        "transition",
        { attrs: { "enter-active-class": "animated fadeIn", mode: "out-in" } },
        [
          _vm.isHistory
            ? _c(
                "div",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: _vm.tabName == "history",
                      expression: "tabName == 'history'"
                    }
                  ]
                },
                [
                  _c("riwayat-klaim", {
                    attrs: {
                      itemData: _vm.history,
                      itemDataStat: _vm.historyStat
                    }
                  })
                ],
                1
              )
            : _vm._e()
        ]
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/jalinanKlaim/riwayatKlaim.vue?vue&type=template&id=865fc870&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/views/jalinanKlaim/riwayatKlaim.vue?vue&type=template&id=865fc870& ***!
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
  return _c("div", [
    _vm.itemDataStat == "success"
      ? _c("div", [
          _vm.itemData.length > 0
            ? _c(
                "div",
                _vm._l(_vm.history, function(history, index) {
                  return _c(
                    "div",
                    {
                      key: index,
                      staticClass: "card border-left-primary rounded-left-0"
                    },
                    [
                      _c(
                        "div",
                        {
                          staticClass:
                            "card-header bg-white header-elements-sm-inline"
                        },
                        [
                          _c("h6", { staticClass: "card-title" }, [
                            _vm._v("\n\t\t\t\t\t\t \n\t\t\t\t\t")
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "header-elements" }, [
                            _c("ul", { staticClass: "list-inline mb-0" }, [
                              _c("li", { staticClass: "list-inline-item" }, [
                                _c("i", { staticClass: "icon-calendar2" }),
                                _vm._v(" "),
                                _c("span", {
                                  domProps: {
                                    innerHTML: _vm._s(
                                      _vm.$options.filters.date(index)
                                    )
                                  }
                                })
                              ]),
                              _vm._v(" "),
                              _c("li", { staticClass: "list-inline-item" }, [
                                _c("i"),
                                _c("i", { staticClass: "icon-alarm" }),
                                _vm._v(" "),
                                _c("span", {
                                  domProps: {
                                    innerHTML: _vm._s(
                                      _vm.$options.filters.time(index)
                                    )
                                  }
                                })
                              ])
                            ])
                          ])
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "card-body" },
                        _vm._l(history, function(rev, index) {
                          return _c(
                            "div",
                            { key: index, staticClass: "card card-body" },
                            [
                              _c("div", { staticClass: "media" }, [
                                _c(
                                  "div",
                                  { staticClass: "mr-3 position-relative" },
                                  [
                                    rev.user.gambar
                                      ? _c("img", {
                                          staticClass: "rounded-circle",
                                          attrs: {
                                            src:
                                              "/images/user/" +
                                              rev.user.gambar +
                                              ".jpg",
                                            width: "36",
                                            height: "36",
                                            alt: "user image"
                                          }
                                        })
                                      : _c("img", {
                                          staticClass: "rounded-circle",
                                          attrs: {
                                            src: "/images/no_image_man.jpg",
                                            width: "36",
                                            height: "36",
                                            alt: "user image"
                                          }
                                        })
                                  ]
                                ),
                                _vm._v(" "),
                                _c("div", { staticClass: "media-body" }, [
                                  _c("div", { staticClass: "media-title" }, [
                                    _c("a", { attrs: { href: "#" } }, [
                                      _c(
                                        "span",
                                        { staticClass: "font-weight-semibold" },
                                        [_vm._v(_vm._s(rev.user.username))]
                                      )
                                    ])
                                  ]),
                                  _vm._v(" "),
                                  _c(
                                    "span",
                                    [
                                      _vm._v(
                                        "Telah mengubah \n\t\t\t\t\t\t\t\t\t"
                                      ),
                                      _c("mark", [_vm._v(_vm._s(rev.key))]),
                                      _vm._v(
                                        "\n\t\t\t\t\t\t\t\t\tdari\n\t\t\t\t\t\t\t\t\t"
                                      ),
                                      rev.key == "status_klaim"
                                        ? [
                                            _c("mark", [
                                              _vm._v(
                                                _vm._s(
                                                  _vm._f("statusKlaimJalinan")(
                                                    rev.old_value
                                                  )
                                                )
                                              )
                                            ]),
                                            _vm._v(
                                              "\n\t\t\t\t\t\t\t\t\t\tmenjadi \n\t\t\t\t\t\t\t\t\t\t"
                                            ),
                                            _c("mark", [
                                              _vm._v(
                                                _vm._s(
                                                  _vm._f("statusKlaimJalinan")(
                                                    rev.new_value
                                                  )
                                                )
                                              )
                                            ])
                                          ]
                                        : [
                                            _c("mark", [
                                              _vm._v(_vm._s(rev.old_value))
                                            ]),
                                            _vm._v(
                                              "\n\t\t\t\t\t\t\t\t\t\tmenjadi \n\t\t\t\t\t\t\t\t\t\t"
                                            ),
                                            _c("mark", [
                                              _vm._v(_vm._s(rev.new_value))
                                            ])
                                          ]
                                    ],
                                    2
                                  )
                                ])
                              ])
                            ]
                          )
                        }),
                        0
                      )
                    ]
                  )
                }),
                0
              )
            : _c("div", [_vm._m(0)])
        ])
      : _vm._e(),
    _vm._v(" "),
    _vm.itemDataStat == "loading" ? _c("div", [_vm._m(1)]) : _vm._e()
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card" }, [
      _c("div", { staticClass: "card-body" }, [
        _c("h3", [_vm._v("Belum terdapat riwayat klaim apapun...")])
      ])
    ])
  },
  function() {
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
              staticStyle: { width: "100%" }
            },
            [_c("span", { staticClass: "sr-only" }, [_vm._v("100% Complete")])]
          )
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/jalinanKlaim/surat.vue?vue&type=template&id=4bdc7d78&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/views/jalinanKlaim/surat.vue?vue&type=template&id=4bdc7d78& ***!
  \***********************************************************************************************************************************************************************************************************************/
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
    _c("div", { staticClass: "card card-body" }, [
      _c("div", { attrs: { id: "printable" } }, [
        _c(
          "div",
          { staticClass: "row", staticStyle: { "font-size": "18px" } },
          [
            _c("div", { staticClass: "col-12" }, [
              _c("img", {
                staticClass: "img-fluid wmin-sm",
                attrs: { src: "/files/header.jpg" }
              })
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-12" }, [
              _c(
                "div",
                { staticClass: "row justify-content-between ml-3 mr-3" },
                [
                  _c("div", { staticClass: "col-7" }, [
                    _c("dl", { staticClass: "row mt-4" }, [
                      _vm.selectedItem.surat_nomor
                        ? _c("dt", { staticClass: "col-sm-2 mb-0" }, [
                            _vm._v("Nomor")
                          ])
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.selectedItem.surat_nomor
                        ? _c("dd", { staticClass: "col-sm-10 mb-0" }, [
                            _vm._v(": " + _vm._s(_vm.selectedItem.surat_nomor))
                          ])
                        : _vm._e(),
                      _vm._v(" "),
                      _c("dt", { staticClass: "col-sm-2" }, [_vm._v("Hal")]),
                      _vm._v(" "),
                      _c("dd", { staticClass: "col-sm-10" }, [
                        _vm._v(": "),
                        _vm.tipe == "cair"
                          ? _c("span", [_vm._v("Pencairan")])
                          : _vm.tipe == "kurang"
                          ? _c("span", [_vm._v("Kekurangan Berkas")])
                          : _vm.tipe == "tolak"
                          ? _c("span", [_vm._v("Penolakan")])
                          : _vm._e(),
                        _vm._v(" \n                  Klaim JALINAN")
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-5 text-right" }, [
                    _c("ul", { staticClass: "list list-unstyled mb-0" }, [
                      _vm.tipe == "cair"
                        ? _c("li", [
                            _c("small", [_vm._v("FM-JLN-18/Rev00/02.01.2019")])
                          ])
                        : _vm.tipe == "kurang"
                        ? _c("li", [
                            _c("small", [_vm._v("FM-JLN-02/Rev00/02.01.2019")])
                          ])
                        : _vm.tipe == "tolak"
                        ? _c("li", [
                            _c("small", [_vm._v("FM-JLN-01/Rev00/02.01.2019")])
                          ])
                        : _vm._e(),
                      _vm._v(" "),
                      _c("li", {
                        staticClass: "mt-0",
                        domProps: {
                          innerHTML: _vm._s(
                            _vm.$options.filters.dateMonth(
                              this.selectedItem.surat_tanggal
                            )
                          )
                        }
                      })
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-12 mb-4" }),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-12" }, [
                    _c("ul", { staticClass: "list list-unstyled mb-0" }, [
                      _c("li", [
                        _vm._v(
                          "Yth. General Manager / Manager " +
                            _vm._s(
                              _vm.selectedItem.anggota_cu_cu
                                ? "CU " + _vm.selectedItem.anggota_cu_cu.cu.name
                                : ""
                            )
                        )
                      ]),
                      _vm._v(" "),
                      _c("li", [_vm._v("u.p. Bagian JALINAN")]),
                      _vm._v(" "),
                      _c("li", [
                        _vm._v(
                          "\n                  " +
                            _vm._s(
                              _vm._f("capitalize")(
                                _vm.modelProvinces.name + ","
                              )
                            ) +
                            " \n                  " +
                            _vm._s(
                              _vm._f("capitalize")(
                                _vm.modelRegencies.name + ","
                              )
                            ) +
                            " \n                  " +
                            _vm._s(
                              _vm._f("capitalize")(
                                _vm.modelDistricts.name + ","
                              )
                            ) +
                            "  \n                  " +
                            _vm._s(_vm._f("capitalize")(_vm.modelVillages.name))
                        )
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _vm._m(0),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-12 mt-3 mb-2" }, [
                    _c(
                      "p",
                      {
                        staticStyle: {
                          "text-indent": "30px",
                          "font-size": "18px"
                        }
                      },
                      [
                        _vm._v(
                          "Kami mengucapkan terima kasih atas kerjasama dan kepercayaannya telah menjadi anggota PUSKOPCUINA terutama dalam kegiatan pengembangan JALINAN semoga kerjasama ini semakin terjalin dengan baik dimasa yang akan datang"
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _vm.tipe == "cair"
                      ? _c(
                          "p",
                          {
                            staticStyle: {
                              "text-indent": "30px",
                              "font-size": "18px"
                            }
                          },
                          [
                            _vm._v(
                              "Melalui surat ini kami sampaikan bahwa klaim JALINAN Anggota CU Primer dibawah ini telah disetujui. Uang santunan tersebut telah dibukukan pada rekening SIKODIT tanggal "
                            ),
                            _c("span", {
                              domProps: {
                                innerHTML: _vm._s(
                                  _vm.$options.filters.dateMonth(
                                    this.selectedItem.tanggal_pencairan
                                  )
                                )
                              }
                            }),
                            _vm._v(
                              " Adapun daftar klaim tersebut diatas sebagai berikut :"
                            )
                          ]
                        )
                      : _vm.tipe == "kurang"
                      ? _c(
                          "p",
                          {
                            staticStyle: {
                              "text-indent": "30px",
                              "font-size": "18px"
                            }
                          },
                          [
                            _vm._v(
                              "Berdasarkan analisis terhadap klaim JALINAN atas nama almarhum/almarhumah dibawah ini, maka kami masih memerlukan beberapa hal untuk dilengkapi oleh CU:"
                            )
                          ]
                        )
                      : _vm.tipe == "tolak"
                      ? _c(
                          "p",
                          {
                            staticStyle: {
                              "text-indent": "30px",
                              "font-size": "18px"
                            }
                          },
                          [
                            _vm._v(
                              "Kami telah melakukan analisis terhadap klaim JALINAN atas nama almarhum/almarhumah dibawah ini, dan kami menyatakan menolak permohonan klaim yang dimaksud karena alasan sebagai berikut:"
                            )
                          ]
                        )
                      : _vm._e(),
                    _vm._v(" "),
                    _vm.tipe == "cair"
                      ? _c("div", { staticClass: "table-responsive" }, [
                          _c(
                            "table",
                            { staticClass: "table table-bordered table-sm" },
                            [
                              _vm._m(1),
                              _vm._v(" "),
                              _c("tbody", [
                                _c("tr", [
                                  _c(
                                    "td",
                                    {
                                      staticStyle: { border: "1px solid black" }
                                    },
                                    [
                                      _vm._v(
                                        _vm._s(
                                          _vm.selectedItem.anggota_cu
                                            ? _vm.selectedItem.anggota_cu.name
                                            : ""
                                        )
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "td",
                                    {
                                      staticClass: "text-right",
                                      staticStyle: { border: "1px solid black" }
                                    },
                                    [
                                      _vm._v(
                                        _vm._s(
                                          _vm.selectedItem.anggota_cu_cu
                                            ? _vm.selectedItem.anggota_cu_cu
                                                .no_ba
                                            : ""
                                        )
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "td",
                                    {
                                      staticClass: "text-right",
                                      staticStyle: { border: "1px solid black" }
                                    },
                                    [
                                      _c("check-value", {
                                        attrs: {
                                          value:
                                            _vm.selectedItem.tunas_disetujui,
                                          valueType: "currency"
                                        }
                                      })
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "td",
                                    {
                                      staticClass: "text-right",
                                      staticStyle: { border: "1px solid black" }
                                    },
                                    [
                                      _c("check-value", {
                                        attrs: {
                                          value:
                                            _vm.selectedItem.lintang_disetujui,
                                          valueType: "currency"
                                        }
                                      })
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "td",
                                    {
                                      staticClass: "text-right",
                                      staticStyle: { border: "1px solid black" }
                                    },
                                    [
                                      _c("check-value", {
                                        attrs: {
                                          value:
                                            _vm.selectedItem.tunas_disetujui +
                                            _vm.selectedItem.lintang_disetujui,
                                          valueType: "currency"
                                        }
                                      })
                                    ],
                                    1
                                  )
                                ])
                              ])
                            ]
                          )
                        ])
                      : _vm.tipe == "kurang"
                      ? _c("div", { staticClass: "table-responsive" }, [
                          _c(
                            "table",
                            { staticClass: "table table-bordered table-sm" },
                            [
                              _vm._m(2),
                              _vm._v(" "),
                              _c("tbody", [
                                _c("tr", [
                                  _c(
                                    "td",
                                    {
                                      staticStyle: { border: "1px solid black" }
                                    },
                                    [
                                      _vm._v(
                                        _vm._s(
                                          _vm.selectedItem.anggota_cu
                                            ? _vm.selectedItem.anggota_cu.name
                                            : ""
                                        )
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "td",
                                    {
                                      staticClass: "text-right",
                                      staticStyle: { border: "1px solid black" }
                                    },
                                    [
                                      _vm._v(
                                        _vm._s(
                                          _vm.selectedItem.anggota_cu_cu
                                            ? _vm.selectedItem.anggota_cu_cu
                                                .no_ba
                                            : ""
                                        )
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "td",
                                    {
                                      staticStyle: { border: "1px solid black" }
                                    },
                                    [
                                      _vm._v(
                                        _vm._s(
                                          _vm.selectedItem.keterangan_klaim
                                        )
                                      )
                                    ]
                                  )
                                ])
                              ])
                            ]
                          )
                        ])
                      : _vm.tipe == "tolak"
                      ? _c("div", { staticClass: "table-responsive" }, [
                          _c(
                            "table",
                            { staticClass: "table table-bordered table-sm" },
                            [
                              _vm._m(3),
                              _vm._v(" "),
                              _c("tbody", [
                                _c("tr", [
                                  _c(
                                    "td",
                                    {
                                      staticStyle: { border: "1px solid black" }
                                    },
                                    [
                                      _vm._v(
                                        _vm._s(
                                          _vm.selectedItem.anggota_cu
                                            ? _vm.selectedItem.anggota_cu.name
                                            : ""
                                        )
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "td",
                                    {
                                      staticClass: "text-right",
                                      staticStyle: { border: "1px solid black" }
                                    },
                                    [
                                      _vm._v(
                                        _vm._s(
                                          _vm.selectedItem.anggota_cu_cu
                                            ? _vm.selectedItem.anggota_cu_cu
                                                .no_ba
                                            : ""
                                        )
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "td",
                                    {
                                      staticClass: "text-center",
                                      staticStyle: { border: "1px solid black" }
                                    },
                                    [
                                      _vm._v(
                                        "\n                        " +
                                          _vm._s(
                                            _vm.selectedItem.tunas_diajukan
                                              ? "TUNAS"
                                              : ""
                                          ) +
                                          "\n                        " +
                                          _vm._s(
                                            _vm.selectedItem.tunas_diajukan &&
                                              _vm.selectedItem.lintang_diajukan
                                              ? " dan "
                                              : ""
                                          ) +
                                          "\n                        " +
                                          _vm._s(
                                            _vm.selectedItem.lintang_diajukan
                                              ? "LINTANG"
                                              : ""
                                          ) +
                                          "\n                      "
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "td",
                                    {
                                      staticStyle: { border: "1px solid black" }
                                    },
                                    [
                                      _vm._v(
                                        _vm._s(
                                          _vm.selectedItem.keterangan_klaim
                                        )
                                      )
                                    ]
                                  )
                                ])
                              ])
                            ]
                          )
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    _vm.tipe == "cair"
                      ? _c(
                          "p",
                          {
                            staticClass: "mt-2",
                            staticStyle: {
                              "text-indent": "30px",
                              "font-size": "18px"
                            }
                          },
                          [_vm._v(_vm._s(_vm.selectedItem.keterangan_klaim))]
                        )
                      : _vm.tipe == "kurang"
                      ? _c(
                          "p",
                          {
                            staticClass: "mt-2",
                            staticStyle: {
                              "text-indent": "30px",
                              "font-size": "18px"
                            }
                          },
                          [
                            _vm._v(
                              "Mengacu pada ketentuan JALINAN Bab V pasal 20, maka berkas tersebut harus sudah kami terima 45 hari setelah surat pemberitahuan ini kami keluarkan"
                            )
                          ]
                        )
                      : _vm._e(),
                    _vm._v(" "),
                    _c(
                      "p",
                      {
                        staticClass: "mt-2",
                        staticStyle: {
                          "text-indent": "30px",
                          "font-size": "18px"
                        }
                      },
                      [
                        _vm._v(
                          "Demikian surat ini disampaikan, atas perhatian dan kerjasama yang terjalin selama ini, kami ucapkan terima kasih"
                        )
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-6 text-right" }, [
                    _vm._v("\n               \n            ")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-6 text-right" }, [
                    _vm._m(4),
                    _vm._v(" "),
                    _c("img", {
                      staticClass: "img-fluid wmin-sm",
                      attrs: { src: "/files/ttdErowin.png", width: "200" }
                    }),
                    _vm._v(" "),
                    _vm._m(5)
                  ])
                ]
              )
            ])
          ]
        )
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "text-center d-none d-md-block" }, [
      _c(
        "button",
        {
          staticClass: "btn btn-light",
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
          attrs: { type: "button" },
          on: {
            click: function($event) {
              $event.preventDefault()
              return _vm.print()
            }
          }
        },
        [_c("i", { staticClass: "icon-printer" }), _vm._v(" Print")]
      )
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "d-block d-md-none" }, [
      _c(
        "button",
        {
          staticClass: "btn btn-primary btn-block pb-2",
          attrs: { type: "button" },
          on: {
            click: function($event) {
              $event.preventDefault()
              return _vm.print()
            }
          }
        },
        [_c("i", { staticClass: "icon-printer" }), _vm._v(" Print")]
      ),
      _vm._v(" "),
      _c(
        "button",
        {
          staticClass: "btn btn-light btn-block pb-2",
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
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-12 mt-3" }, [
      _c("ul", { staticClass: "list list-unstyled mb-0" }, [
        _c("li", [_vm._v("Dengan hormat,")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c(
          "th",
          {
            staticClass: "text-center",
            staticStyle: {
              "vertical-align": "middle",
              border: "1px solid black"
            },
            attrs: { rowspan: "2" }
          },
          [_vm._v("NAMA")]
        ),
        _vm._v(" "),
        _c(
          "th",
          {
            staticClass: "text-center",
            staticStyle: {
              "vertical-align": "middle",
              border: "1px solid black"
            },
            attrs: { rowspan: "2" }
          },
          [_vm._v("NO. BA")]
        ),
        _vm._v(" "),
        _c(
          "th",
          {
            staticClass: "text-center",
            staticStyle: { border: "1px solid black" },
            attrs: { colspan: "3" }
          },
          [_vm._v("PENCAIRAN")]
        )
      ]),
      _vm._v(" "),
      _c("tr", [
        _c(
          "th",
          {
            staticClass: "text-center",
            staticStyle: { border: "1px solid black" }
          },
          [_vm._v("TUNAS")]
        ),
        _vm._v(" "),
        _c(
          "th",
          {
            staticClass: "text-center",
            staticStyle: { border: "1px solid black" }
          },
          [_vm._v("LINTANG")]
        ),
        _vm._v(" "),
        _c(
          "th",
          {
            staticClass: "text-center",
            staticStyle: { border: "1px solid black" }
          },
          [_vm._v("JUMLAH")]
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c(
          "th",
          {
            staticClass: "text-center",
            staticStyle: { border: "1px solid black" }
          },
          [_vm._v("NAMA")]
        ),
        _vm._v(" "),
        _c(
          "th",
          {
            staticClass: "text-center",
            staticStyle: { border: "1px solid black" }
          },
          [_vm._v("NO. BA")]
        ),
        _vm._v(" "),
        _c(
          "th",
          {
            staticClass: "text-center",
            staticStyle: { border: "1px solid black" }
          },
          [_vm._v("KETERANGAN")]
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c(
          "th",
          {
            staticClass: "text-center",
            staticStyle: { border: "1px solid black" }
          },
          [_vm._v("NAMA")]
        ),
        _vm._v(" "),
        _c(
          "th",
          {
            staticClass: "text-center",
            staticStyle: { border: "1px solid black" }
          },
          [_vm._v("NO. BA")]
        ),
        _vm._v(" "),
        _c(
          "th",
          {
            staticClass: "text-center",
            staticStyle: { border: "1px solid black" }
          },
          [_vm._v("KLAIM")]
        ),
        _vm._v(" "),
        _c(
          "th",
          {
            staticClass: "text-center",
            staticStyle: { border: "1px solid black" }
          },
          [_vm._v("KETERANGAN")]
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("ul", { staticClass: "list list-unstyled mb-0" }, [
      _c("li", [_vm._v("Mengetahui")]),
      _vm._v(" "),
      _c("li", [_vm._v("General Manager,")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("ul", { staticClass: "list list-unstyled mb-0" }, [
      _c("li", [_c("b", [_vm._v("Erowin, S. Hut.")])]),
      _vm._v(" "),
      _c("li", [_vm._v("Nim.19781217 200408 1 011")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/jalinanKlaim/table.vue?vue&type=template&id=144ce90f&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/views/jalinanKlaim/table.vue?vue&type=template&id=144ce90f& ***!
  \***********************************************************************************************************************************************************************************************************************/
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
      _c(
        "data-viewer",
        {
          attrs: {
            title: _vm.title,
            columnData: _vm.columnData,
            itemData: _vm.itemData,
            query: _vm.query,
            itemDataStat: _vm.itemDataStat,
            excelDownloadUrl: _vm.excelDownloadUrl
          },
          on: { fetch: _vm.fetch },
          scopedSlots: _vm._u([
            {
              key: "item-desktop",
              fn: function(props) {
                return [
                  _c(
                    "tr",
                    {
                      staticClass: "text-nowrap",
                      class: {
                        "bg-info": _vm.selectedItem.id === props.item.id
                      },
                      on: {
                        click: function($event) {
                          return _vm.selectedRow(props.item)
                        }
                      }
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
                            )
                          ])
                        : _vm._e(),
                      _vm._v(" "),
                      !_vm.columnData[1].hide && !_vm.columnData[1].disable
                        ? _c(
                            "td",
                            [
                              props.item.id_koreksi
                                ? _c(
                                    "label",
                                    { staticClass: "badge badge-warning ml-1" },
                                    [_vm._v("KOREKSI")]
                                  )
                                : _vm._e(),
                              _vm._v(" "),
                              _c("check-value", {
                                attrs: { value: props.item.keterangan_klaim }
                              })
                            ],
                            1
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      !_vm.columnData[2].hide
                        ? _c(
                            "td",
                            [
                              props.item.anggota_cu
                                ? _c("check-value", {
                                    attrs: { value: props.item.anggota_cu.nik }
                                  })
                                : _c("span", [_vm._v("-")])
                            ],
                            1
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      !_vm.columnData[3].hide
                        ? _c(
                            "td",
                            [
                              props.item.anggota_cu_cu
                                ? _c("check-value", {
                                    attrs: {
                                      value: props.item.anggota_cu_cu.no_ba
                                    }
                                  })
                                : _c("span", [_vm._v("-")])
                            ],
                            1
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      !_vm.columnData[4].hide && !_vm.columnData[4].disable
                        ? _c(
                            "td",
                            [
                              props.item.anggota_cu_cu &&
                              props.item.anggota_cu_cu.cu
                                ? _c("check-value", {
                                    attrs: {
                                      value: props.item.anggota_cu_cu.cu.name
                                    }
                                  })
                                : _c("span", [_vm._v("-")])
                            ],
                            1
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      !_vm.columnData[5].hide && !_vm.columnData[5].disable
                        ? _c(
                            "td",
                            [
                              props.item.anggota_cu_cu &&
                              props.item.anggota_cu_cu.tp
                                ? _c("check-value", {
                                    attrs: {
                                      value: props.item.anggota_cu_cu.tp.name
                                    }
                                  })
                                : _c("span", [_vm._v("-")])
                            ],
                            1
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      !_vm.columnData[6].hide
                        ? _c(
                            "td",
                            [
                              props.item.anggota_cu
                                ? _c("check-value", {
                                    attrs: { value: props.item.anggota_cu.name }
                                  })
                                : _c("span", [_vm._v("-")])
                            ],
                            1
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      !_vm.columnData[7].hide
                        ? _c("td", [
                            _c(
                              "label",
                              { staticClass: "badge badge-warning ml-1" },
                              [
                                _c("check-value", {
                                  attrs: { value: props.item.tipe }
                                })
                              ],
                              1
                            )
                          ])
                        : _vm._e(),
                      _vm._v(" "),
                      !_vm.columnData[8].hide
                        ? _c(
                            "td",
                            [
                              _c("check-value", {
                                attrs: { value: props.item.kategori_penyakit }
                              })
                            ],
                            1
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      !_vm.columnData[9].hide && !_vm.columnData[9].disable
                        ? _c("td", [
                            _c("span", {
                              domProps: {
                                innerHTML: _vm._s(
                                  _vm.$options.filters.checkStatus(
                                    props.item.verifikasi_pengurus
                                  )
                                )
                              }
                            })
                          ])
                        : _vm._e(),
                      _vm._v(" "),
                      !_vm.columnData[10].hide && !_vm.columnData[10].disable
                        ? _c("td", [
                            _c("span", {
                              domProps: {
                                innerHTML: _vm._s(
                                  _vm.$options.filters.checkStatus(
                                    props.item.verifikasi_pengawas
                                  )
                                )
                              }
                            })
                          ])
                        : _vm._e(),
                      _vm._v(" "),
                      !_vm.columnData[11].hide && !_vm.columnData[11].disable
                        ? _c("td", [
                            _c("span", {
                              domProps: {
                                innerHTML: _vm._s(
                                  _vm.$options.filters.checkStatus(
                                    props.item.verifikasi_manajemen
                                  )
                                )
                              }
                            })
                          ])
                        : _vm._e(),
                      _vm._v(" "),
                      !_vm.columnData[12].hide
                        ? _c(
                            "td",
                            [
                              _c("check-value", {
                                attrs: { value: props.item.keterangan_mati }
                              })
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
                                  value: props.item.tunas_diajukan,
                                  valueType: "currency"
                                }
                              })
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
                                  value: props.item.lintang_diajukan,
                                  valueType: "currency"
                                }
                              })
                            ],
                            1
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      !_vm.columnData[15].hide && !_vm.columnData[15].disable
                        ? _c(
                            "td",
                            [
                              _c("check-value", {
                                attrs: {
                                  value: props.item.tunas_disetujui,
                                  valueType: "currency"
                                }
                              })
                            ],
                            1
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      !_vm.columnData[16].hide && !_vm.columnData[16].disable
                        ? _c(
                            "td",
                            [
                              _c("check-value", {
                                attrs: {
                                  value: props.item.lintang_disetujui,
                                  valueType: "currency"
                                }
                              })
                            ],
                            1
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      !_vm.columnData[17].hide
                        ? _c("td", {
                            staticClass: "text-nowrap",
                            domProps: {
                              innerHTML: _vm._s(
                                _vm.$options.filters.date(
                                  props.item.tanggal_mati
                                )
                              )
                            }
                          })
                        : _vm._e(),
                      _vm._v(" "),
                      !_vm.columnData[18].hide
                        ? _c("td", {
                            staticClass: "text-nowrap",
                            domProps: {
                              innerHTML: _vm._s(
                                _vm.$options.filters.date(
                                  props.item.anggota_cu
                                    ? props.item.anggota_cu.tanggal_lahir
                                    : ""
                                )
                              )
                            }
                          })
                        : _vm._e(),
                      _vm._v(" "),
                      !_vm.columnData[19].hide
                        ? _c("td", {
                            staticClass: "text-nowrap",
                            domProps: {
                              innerHTML: _vm._s(
                                _vm.$options.filters.date(
                                  props.item.anggota_cu_cu
                                    ? props.item.anggota_cu_cu.tanggal_masuk
                                    : ""
                                )
                              )
                            }
                          })
                        : _vm._e(),
                      _vm._v(" "),
                      !_vm.columnData[20].hide && !_vm.columnData[20].disable
                        ? _c("td", {
                            staticClass: "text-nowrap",
                            domProps: {
                              innerHTML: _vm._s(
                                _vm.$options.filters.date(
                                  props.item.tanggal_pencairan
                                )
                              )
                            }
                          })
                        : _vm._e(),
                      _vm._v(" "),
                      !_vm.columnData[21].hide
                        ? _c(
                            "td",
                            { staticClass: "text-nowrap" },
                            [
                              props.item.anggota_cu
                                ? _c("check-value", {
                                    attrs: {
                                      value:
                                        props.item.anggota_cu.usia_meninggal
                                    }
                                  })
                                : _c("span", [_vm._v("-")])
                            ],
                            1
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      !_vm.columnData[22].hide
                        ? _c(
                            "td",
                            { staticClass: "text-nowrap" },
                            [
                              props.item.anggota_cu
                                ? _c("check-value", {
                                    attrs: {
                                      value: props.item.anggota_cu.usia_cacat
                                    }
                                  })
                                : _c("span", [_vm._v("-")])
                            ],
                            1
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      !_vm.columnData[23].hide
                        ? _c(
                            "td",
                            { staticClass: "text-nowrap" },
                            [
                              props.item.anggota_cu_cu
                                ? _c("check-value", {
                                    attrs: {
                                      value:
                                        props.item.anggota_cu_cu
                                          .lama_menjadi_anggota
                                    }
                                  })
                                : _c("span", [_vm._v("-")])
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
                                attrs: { value: props.item.keterangan }
                              })
                            ],
                            1
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      !_vm.columnData[25].hide
                        ? _c(
                            "td",
                            [
                              props.item.anggota_cu
                                ? _c("check-value", {
                                    attrs: {
                                      value: props.item.anggota_cu.kelamin
                                    }
                                  })
                                : _vm._e()
                            ],
                            1
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      !_vm.columnData[26].hide
                        ? _c(
                            "td",
                            [
                              props.item.anggota_cu
                                ? _c("check-value", {
                                    attrs: {
                                      value: props.item.anggota_cu.ahli_waris
                                    }
                                  })
                                : _vm._e()
                            ],
                            1
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      !_vm.columnData[27].hide
                        ? _c(
                            "td",
                            [
                              props.item.anggota_cu &&
                              props.item.anggota_cu.provinces
                                ? _c("check-value", {
                                    attrs: {
                                      value:
                                        props.item.anggota_cu.provinces.name
                                    }
                                  })
                                : _c("span", [_vm._v("-")])
                            ],
                            1
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      !_vm.columnData[28].hide
                        ? _c(
                            "td",
                            [
                              props.item.anggota_cu
                                ? _c("check-value", {
                                    attrs: {
                                      value: props.item.anggota_cu.alamat
                                    }
                                  })
                                : _vm._e()
                            ],
                            1
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      !_vm.columnData[29].hide
                        ? _c(
                            "td",
                            [
                              props.item.anggota_cu
                                ? _c("check-value", {
                                    attrs: { value: props.item.anggota_cu.hp }
                                  })
                                : _vm._e()
                            ],
                            1
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      !_vm.columnData[30].hide
                        ? _c("td", {
                            staticClass: "text-nowrap",
                            domProps: {
                              innerHTML: _vm._s(
                                _vm.$options.filters.dateTime(
                                  props.item.created_at
                                )
                              )
                            }
                          })
                        : _vm._e(),
                      _vm._v(" "),
                      !_vm.columnData[31].hide
                        ? _c("td", [
                            props.item.created_at !== props.item.updated_at
                              ? _c("span", {
                                  domProps: {
                                    innerHTML: _vm._s(
                                      _vm.$options.filters.dateTime(
                                        props.item.updated_at
                                      )
                                    )
                                  }
                                })
                              : _c("span", [_vm._v("-")])
                          ])
                        : _vm._e()
                    ]
                  )
                ]
              }
            }
          ])
        },
        [
          !_vm.isSimple
            ? _c(
                "template",
                { slot: "button-desktop" },
                [
                  _vm.currentUser.can &&
                  _vm.currentUser.can["create_jalinan_klaim"] &&
                  _vm.status == 0
                    ? _c(
                        "router-link",
                        {
                          staticClass: "btn btn-light btn-icon mb-1",
                          attrs: { to: { name: _vm.kelas + "Create" } }
                        },
                        [
                          _c("i", { staticClass: "icon-plus3" }),
                          _vm._v(" Tambah\n        ")
                        ]
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.currentUser.can &&
                  _vm.currentUser.can["update_jalinan_klaim"] &&
                  _vm.status == 0
                    ? _c(
                        "button",
                        {
                          staticClass: "btn btn-light btn-icon mb-1",
                          attrs: { disabled: !_vm.selectedItem.anggota_cu },
                          on: {
                            click: function($event) {
                              $event.preventDefault()
                              return _vm.ubahData(
                                _vm.selectedItem.anggota_cu.nik,
                                _vm.selectedItem.anggota_cu_cu_id,
                                _vm.selectedItem.tipe
                              )
                            }
                          }
                        },
                        [
                          _c("i", { staticClass: "icon-pencil5" }),
                          _vm._v(" Ubah Klaim\n        ")
                        ]
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.currentUser.id_cu == 0 &&
                  _vm.currentUser.can &&
                  _vm.currentUser.can["update_jalinan_klaim"] &&
                  _vm.currentUser.can["update_anggota_cu"] &&
                  _vm.status != 5 &&
                  _vm.status != 6 &&
                  _vm.status != 7
                    ? _c(
                        "button",
                        {
                          staticClass: "btn btn-light btn-icon mb-1",
                          attrs: { disabled: !_vm.selectedItem.id },
                          on: {
                            click: function($event) {
                              $event.preventDefault()
                              return _vm.ubahDataAnggota(
                                _vm.selectedItem.anggota_cu_id,
                                "identitas"
                              )
                            }
                          }
                        },
                        [
                          _c("i", { staticClass: "icon-pencil5" }),
                          _vm._v(" Ubah Identitas\n        ")
                        ]
                      )
                    : _vm.currentUser.id_cu != 0 &&
                      _vm.currentUser.can &&
                      _vm.currentUser.can["update_jalinan_klaim"] &&
                      _vm.currentUser.can["update_anggota_cu"] &&
                      _vm.status == ""
                    ? _c(
                        "button",
                        {
                          staticClass: "btn btn-light btn-icon mb-1",
                          attrs: { disabled: !_vm.selectedItem.id },
                          on: {
                            click: function($event) {
                              $event.preventDefault()
                              return _vm.ubahDataAnggota(
                                _vm.selectedItem.anggota_cu_id,
                                "identitas"
                              )
                            }
                          }
                        },
                        [
                          _c("i", { staticClass: "icon-pencil5" }),
                          _vm._v(" Ubah Identitas\n        ")
                        ]
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.currentUser.id_cu == 0 &&
                  _vm.currentUser.can &&
                  _vm.currentUser.can["update_jalinan_klaim"] &&
                  _vm.status != 5 &&
                  _vm.status != 6 &&
                  _vm.status != 7
                    ? _c(
                        "button",
                        {
                          staticClass: "btn btn-light btn-icon mb-1",
                          attrs: { disabled: !_vm.selectedItem.id },
                          on: {
                            click: function($event) {
                              $event.preventDefault()
                              return _vm.ubahDataAnggota(
                                _vm.selectedItem.anggota_cu_id,
                                "produk"
                              )
                            }
                          }
                        },
                        [
                          _c("i", { staticClass: "icon-pencil5" }),
                          _vm._v(" Ubah Produk\n        ")
                        ]
                      )
                    : _vm.currentUser.id_cu != 0 &&
                      _vm.currentUser.can &&
                      _vm.currentUser.can["update_jalinan_klaim"] &&
                      _vm.status == ""
                    ? _c(
                        "button",
                        {
                          staticClass: "btn btn-light btn-icon mb-1",
                          attrs: { disabled: !_vm.selectedItem.id },
                          on: {
                            click: function($event) {
                              $event.preventDefault()
                              return _vm.ubahDataAnggota(
                                _vm.selectedItem.anggota_cu_id,
                                "produk"
                              )
                            }
                          }
                        },
                        [
                          _c("i", { staticClass: "icon-pencil5" }),
                          _vm._v(" Ubah Produk\n        ")
                        ]
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-light btn-icon mb-1",
                      attrs: { disabled: !_vm.selectedItem.id },
                      on: {
                        click: function($event) {
                          $event.preventDefault()
                          return _vm.modalOpen("lihat")
                        }
                      }
                    },
                    [
                      _c("i", { staticClass: "icon-file-eye" }),
                      _vm._v(" Lihat Klaim\n        ")
                    ]
                  ),
                  _vm._v(" "),
                  _vm.currentUser.can &&
                  _vm.currentUser.can["update_jalinan_klaim"] &&
                  _vm.status != 0 &&
                  _vm.status != 3 &&
                  _vm.status != 7
                    ? _c(
                        "button",
                        {
                          staticClass: "btn btn-light btn-icon mb-1",
                          attrs: { disabled: !_vm.selectedItem.anggota_cu },
                          on: {
                            click: function($event) {
                              $event.preventDefault()
                              return _vm.koreksiData(
                                _vm.selectedItem.anggota_cu.nik,
                                _vm.selectedItem.anggota_cu_cu_id,
                                _vm.selectedItem.tipe
                              )
                            }
                          }
                        },
                        [
                          _c("i", { staticClass: "icon-paint-format" }),
                          _vm._v(" Koreksi\n        ")
                        ]
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.currentUser.id_cu == 0 &&
                  _vm.currentUser.can &&
                  _vm.currentUser.can["update_jalinan_klaim"] &&
                  _vm.status != "" &&
                  _vm.status != 5 &&
                  _vm.status != 6 &&
                  _vm.status != 7
                    ? _c(
                        "button",
                        {
                          staticClass: "btn btn-light btn-icon mb-1",
                          attrs: { disabled: !_vm.selectedItem.id },
                          on: {
                            click: function($event) {
                              $event.preventDefault()
                              return _vm.modalOpen("analisis")
                            }
                          }
                        },
                        [
                          _c("i", { staticClass: "icon-loop4" }),
                          _vm._v(" Analisis Klaim\n        ")
                        ]
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.currentUser.can &&
                  _vm.currentUser.can["update_jalinan_klaim"] &&
                  _vm.status == 7
                    ? _c(
                        "button",
                        {
                          staticClass: "btn btn-light btn-icon mb-1",
                          attrs: { disabled: !_vm.selectedItem.anggota_cu },
                          on: {
                            click: function($event) {
                              $event.preventDefault()
                              return _vm.modalOpen("periksa_koreksi")
                            }
                          }
                        },
                        [
                          _c("i", { staticClass: "icon-paint-format" }),
                          _vm._v(" Periksa Koreksi\n        ")
                        ]
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.status != "" && (_vm.status == 5 || _vm.status == 6)
                    ? _c(
                        "button",
                        {
                          staticClass: "btn btn-light btn-icon mb-1",
                          attrs: { disabled: !_vm.selectedItem.id },
                          on: {
                            click: function($event) {
                              $event.preventDefault()
                              return _vm.modalOpen("surat_cair")
                            }
                          }
                        },
                        [
                          _c("i", { staticClass: "icon-envelop2" }),
                          _vm._v(" Surat Pencairan\n        ")
                        ]
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.status != "" && _vm.status == 3
                    ? _c(
                        "button",
                        {
                          staticClass: "btn btn-light btn-icon mb-1",
                          attrs: { disabled: !_vm.selectedItem.id },
                          on: {
                            click: function($event) {
                              $event.preventDefault()
                              return _vm.modalOpen("surat_tolak")
                            }
                          }
                        },
                        [
                          _c("i", { staticClass: "icon-envelop2" }),
                          _vm._v(" Surat Penolakan\n        ")
                        ]
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.status != "" && _vm.status == 2
                    ? _c(
                        "button",
                        {
                          staticClass: "btn btn-light btn-icon mb-1",
                          attrs: { disabled: !_vm.selectedItem.id },
                          on: {
                            click: function($event) {
                              $event.preventDefault()
                              return _vm.modalOpen("surat_kurang")
                            }
                          }
                        },
                        [
                          _c("i", { staticClass: "icon-envelop2" }),
                          _vm._v(" Surat Dokumen Tidak Lengkap\n        ")
                        ]
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.currentUser.id_cu != 0 &&
                  _vm.currentUser.can &&
                  _vm.currentUser.can["update_jalinan_klaim"] &&
                  (_vm.status == 5 || _vm.status == 6)
                    ? _c(
                        "button",
                        {
                          staticClass: "btn btn-light btn-icon mb-1",
                          attrs: { disabled: !_vm.selectedItem.id },
                          on: {
                            click: function($event) {
                              $event.preventDefault()
                              return _vm.modalOpen("selesai")
                            }
                          }
                        },
                        [
                          _vm.status == "5"
                            ? _c("span", [
                                _c("i", { staticClass: "icon-checkmark4" }),
                                _vm._v(" Selesai Klaim\n          ")
                              ])
                            : _c("span", [
                                _c("i", { staticClass: "icon-blocked" }),
                                _vm._v(" Batal Selesai Klaim\n          ")
                              ])
                        ]
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.currentUser.can &&
                  (_vm.currentUser.can["verifikasi_pengurus_jalinan_klaim"] ||
                    _vm.currentUser.can["verifikasi_pengawas_jalinan_klaim"] ||
                    _vm.currentUser.can[
                      "verifikasi_manajemen_jalinan_klaim"
                    ]) &&
                  _vm.status == ""
                    ? _c("span", [
                        !_vm.selectedItem.id
                          ? _c(
                              "button",
                              {
                                staticClass: "btn btn-light btn-icon mb-1",
                                attrs: { disabled: "" }
                              },
                              [
                                _c("i", { staticClass: "icon-file-check" }),
                                _vm._v(" Verifikasi\n          ")
                              ]
                            )
                          : _vm.selectedItem.verifikasi_pengurus ==
                              _vm.currentUser.id ||
                            _vm.selectedItem.verifikasi_pengawas ==
                              _vm.currentUser.id ||
                            _vm.selectedItem.verifikasi_manajemen ==
                              _vm.currentUser.id
                          ? _c(
                              "button",
                              {
                                staticClass: "btn btn-light btn-icon mb-1",
                                attrs: { disabled: "" }
                              },
                              [
                                _c("i", { staticClass: "icon-file-check" }),
                                _vm._v(" Verifikasi\n          ")
                              ]
                            )
                          : _c(
                              "button",
                              {
                                staticClass: "btn btn-light btn-icon mb-1",
                                on: {
                                  click: function($event) {
                                    $event.preventDefault()
                                    return _vm.modalOpen("verifikasi")
                                  }
                                }
                              },
                              [
                                _c("i", { staticClass: "icon-file-check" }),
                                _vm._v(" Verifikasi\n          ")
                              ]
                            )
                      ])
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.currentUser.can &&
                  _vm.currentUser.can["destroy_jalinan_klaim"] &&
                  _vm.status == 0
                    ? _c(
                        "button",
                        {
                          staticClass: "btn btn-light btn-icon mb-1",
                          attrs: { disabled: !_vm.selectedItem.id },
                          on: {
                            click: function($event) {
                              $event.preventDefault()
                              return _vm.modalOpen("hapus")
                            }
                          }
                        },
                        [
                          _c("i", { staticClass: "icon-bin2" }),
                          _vm._v(" Hapus\n        ")
                        ]
                      )
                    : _vm._e()
                ],
                1
              )
            : _vm._e(),
          _vm._v(" "),
          !_vm.isSimple
            ? _c(
                "template",
                { slot: "button-mobile" },
                [
                  _vm.currentUser.can &&
                  _vm.currentUser.can["create_jalinan_klaim"] &&
                  _vm.status == 0
                    ? _c(
                        "router-link",
                        {
                          staticClass: "btn btn-light btn-icon btn-block pb-1",
                          attrs: { to: { name: _vm.kelas + "Create" } }
                        },
                        [
                          _c("i", { staticClass: "icon-plus3" }),
                          _vm._v(" Tambah\n        ")
                        ]
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.currentUser.can &&
                  _vm.currentUser.can["update_jalinan_klaim"] &&
                  _vm.status == 0
                    ? _c(
                        "button",
                        {
                          staticClass: "btn btn-light btn-icon btn-block pb-1",
                          attrs: { disabled: !_vm.selectedItem.anggota_cu },
                          on: {
                            click: function($event) {
                              $event.preventDefault()
                              return _vm.ubahData(
                                _vm.selectedItem.anggota_cu.nik,
                                _vm.selectedItem.anggota_cu_cu_id,
                                _vm.selectedItem.tipe
                              )
                            }
                          }
                        },
                        [
                          _c("i", { staticClass: "icon-pencil5" }),
                          _vm._v(" Ubah Klaim\n        ")
                        ]
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.currentUser.id_cu == 0 &&
                  _vm.currentUser.can &&
                  _vm.currentUser.can["update_jalinan_klaim"] &&
                  _vm.currentUser.can["update_anggota_cu"] &&
                  _vm.status != 5 &&
                  _vm.status != 6 &&
                  _vm.status != 7
                    ? _c(
                        "button",
                        {
                          staticClass: "btn btn-light btn-icon btn-block pb-1",
                          attrs: { disabled: !_vm.selectedItem.id },
                          on: {
                            click: function($event) {
                              $event.preventDefault()
                              return _vm.ubahDataAnggota(
                                _vm.selectedItem.id,
                                "identitas"
                              )
                            }
                          }
                        },
                        [
                          _c("i", { staticClass: "icon-pencil5" }),
                          _vm._v(" Ubah Identitas\n        ")
                        ]
                      )
                    : _vm.currentUser.id_cu != 0 &&
                      _vm.currentUser.can &&
                      _vm.currentUser.can["update_jalinan_klaim"] &&
                      _vm.currentUser.can["update_anggota_cu"] &&
                      _vm.status == ""
                    ? _c(
                        "button",
                        {
                          staticClass: "btn btn-light btn-icon btn-block pb-1",
                          attrs: { disabled: !_vm.selectedItem.id },
                          on: {
                            click: function($event) {
                              $event.preventDefault()
                              return _vm.ubahDataAnggota(
                                _vm.selectedItem.id,
                                "identitas"
                              )
                            }
                          }
                        },
                        [
                          _c("i", { staticClass: "icon-pencil5" }),
                          _vm._v(" Ubah Identitas\n        ")
                        ]
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.currentUser.id_cu == 0 &&
                  _vm.currentUser.can &&
                  _vm.currentUser.can["update_jalinan_klaim"] &&
                  _vm.currentUser.can["update_anggota_cu"] &&
                  _vm.status != 5 &&
                  _vm.status != 6 &&
                  _vm.status != 7
                    ? _c(
                        "button",
                        {
                          staticClass: "btn btn-light btn-icon btn-block pb-1",
                          attrs: { disabled: !_vm.selectedItem.id },
                          on: {
                            click: function($event) {
                              $event.preventDefault()
                              return _vm.ubahDataAnggota(
                                _vm.selectedItem.id,
                                "produk"
                              )
                            }
                          }
                        },
                        [
                          _c("i", { staticClass: "icon-pencil5" }),
                          _vm._v(" Ubah Produk\n        ")
                        ]
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.currentUser.id_cu == 0 &&
                  _vm.currentUser.can &&
                  _vm.currentUser.can["update_jalinan_klaim"] &&
                  _vm.currentUser.can["update_anggota_cu"] &&
                  _vm.status == ""
                    ? _c(
                        "button",
                        {
                          staticClass: "btn btn-light btn-icon btn-block pb-1",
                          attrs: { disabled: !_vm.selectedItem.id },
                          on: {
                            click: function($event) {
                              $event.preventDefault()
                              return _vm.ubahDataAnggota(
                                _vm.selectedItem.id,
                                "produk"
                              )
                            }
                          }
                        },
                        [
                          _c("i", { staticClass: "icon-pencil5" }),
                          _vm._v(" Ubah Produk\n        ")
                        ]
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-light btn-icon btn-block pb-1",
                      attrs: { disabled: !_vm.selectedItem.id },
                      on: {
                        click: function($event) {
                          $event.preventDefault()
                          return _vm.modalOpen("lihat")
                        }
                      }
                    },
                    [
                      _c("i", { staticClass: "icon-file-eye" }),
                      _vm._v(" Lihat\n        ")
                    ]
                  ),
                  _vm._v(" "),
                  _vm.currentUser.can &&
                  _vm.currentUser.can["update_jalinan_klaim"] &&
                  _vm.status != 0 &&
                  _vm.status != 3 &&
                  _vm.status != 7
                    ? _c(
                        "button",
                        {
                          staticClass: "btn btn-light btn-icon btn-block pb-1",
                          attrs: { disabled: !_vm.selectedItem.anggota_cu },
                          on: {
                            click: function($event) {
                              $event.preventDefault()
                              return _vm.koreksiData(
                                _vm.selectedItem.anggota_cu.nik,
                                _vm.selectedItem.anggota_cu_cu_id,
                                _vm.selectedItem.tipe
                              )
                            }
                          }
                        },
                        [
                          _c("i", { staticClass: "icon-paint-format" }),
                          _vm._v(" Koreksi\n        ")
                        ]
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.currentUser.id_cu == 0 &&
                  _vm.currentUser.can &&
                  _vm.currentUser.can["update_jalinan_klaim"] &&
                  _vm.status != "" &&
                  _vm.status != 5 &&
                  _vm.status != 6 &&
                  _vm.status != 7
                    ? _c(
                        "button",
                        {
                          staticClass: "btn btn-light btn-icon btn-block pb-1",
                          attrs: { disabled: !_vm.selectedItem.id },
                          on: {
                            click: function($event) {
                              $event.preventDefault()
                              return _vm.modalOpen("analisis")
                            }
                          }
                        },
                        [
                          _c("i", { staticClass: "icon-loop4" }),
                          _vm._v(" Analisis Klaim\n        ")
                        ]
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.currentUser.can &&
                  _vm.currentUser.can["update_jalinan_klaim"] &&
                  _vm.status == 7
                    ? _c(
                        "button",
                        {
                          staticClass: "btn btn-light btn-icon btn-block pb-1",
                          attrs: { disabled: !_vm.selectedItem.anggota_cu },
                          on: {
                            click: function($event) {
                              $event.preventDefault()
                              return _vm.modalOpen("periksa_koreksi")
                            }
                          }
                        },
                        [
                          _c("i", { staticClass: "icon-paint-format" }),
                          _vm._v(" Periksa Koreksi\n        ")
                        ]
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.status != "" && (_vm.status == 5 || _vm.status == 6)
                    ? _c(
                        "button",
                        {
                          staticClass: "btn btn-light btn-icon btn-block pb-1",
                          attrs: { disabled: !_vm.selectedItem.id },
                          on: {
                            click: function($event) {
                              $event.preventDefault()
                              return _vm.modalOpen("surat_cair")
                            }
                          }
                        },
                        [
                          _c("i", { staticClass: "icon-envelop2" }),
                          _vm._v(" Surat Pencairan\n        ")
                        ]
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.status != "" && _vm.status == 3
                    ? _c(
                        "button",
                        {
                          staticClass: "btn btn-light btn-icon btn-block pb-1",
                          attrs: { disabled: !_vm.selectedItem.id },
                          on: {
                            click: function($event) {
                              $event.preventDefault()
                              return _vm.modalOpen("surat_tolak")
                            }
                          }
                        },
                        [
                          _c("i", { staticClass: "icon-envelop2" }),
                          _vm._v(" Surat Penolakan\n        ")
                        ]
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.status != "" && _vm.status == 2
                    ? _c(
                        "button",
                        {
                          staticClass: "btn btn-light btn-icon btn-block pb-1",
                          attrs: { disabled: !_vm.selectedItem.id },
                          on: {
                            click: function($event) {
                              $event.preventDefault()
                              return _vm.modalOpen("surat_kurang")
                            }
                          }
                        },
                        [
                          _c("i", { staticClass: "icon-envelop2" }),
                          _vm._v(" Surat Dokumen Tidak Lengkap\n        ")
                        ]
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.currentUser.id_cu != 0 &&
                  _vm.currentUser.can &&
                  _vm.currentUser.can["update_jalinan_klaim"] &&
                  (_vm.status == 5 || _vm.status == 6)
                    ? _c(
                        "button",
                        {
                          staticClass: "btn btn-light btn-icon btn-block pb-1",
                          attrs: { disabled: !_vm.selectedItem.id },
                          on: {
                            click: function($event) {
                              $event.preventDefault()
                              return _vm.modalOpen("selesai")
                            }
                          }
                        },
                        [
                          _vm.status == "5"
                            ? _c("span", [
                                _c("i", { staticClass: "icon-checkmark4" }),
                                _vm._v(" Selesai Klaim\n          ")
                              ])
                            : _c("span", [
                                _c("i", { staticClass: "icon-blocked" }),
                                _vm._v(" Batal Selesai Klaim\n          ")
                              ])
                        ]
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.currentUser.can &&
                  (_vm.currentUser.can["verifikasi_pengurus_jalinan_klaim"] ||
                    _vm.currentUser.can["verifikasi_pengawas_jalinan_klaim"] ||
                    _vm.currentUser.can[
                      "verifikasi_manajemen_jalinan_klaim"
                    ]) &&
                  _vm.status == ""
                    ? _c("span", [
                        !_vm.selectedItem.id
                          ? _c(
                              "button",
                              {
                                staticClass:
                                  "btn btn-light btn-icon btn-block pb-1",
                                attrs: { disabled: "" }
                              },
                              [
                                _c("i", { staticClass: "icon-file-check" }),
                                _vm._v(" Verifikasi\n          ")
                              ]
                            )
                          : _vm.selectedItem.verifikasi_pengurus ==
                              _vm.currentUser.id ||
                            _vm.selectedItem.verifikasi_pengawas ==
                              _vm.currentUser.id ||
                            _vm.selectedItem.verifikasi_manajemen ==
                              _vm.currentUser.id
                          ? _c(
                              "button",
                              {
                                staticClass:
                                  "btn btn-light btn-icon btn-block pb-1",
                                attrs: { disabled: "" }
                              },
                              [
                                _c("i", { staticClass: "icon-file-check" }),
                                _vm._v(" Verifikasi\n          ")
                              ]
                            )
                          : _c(
                              "button",
                              {
                                staticClass:
                                  "btn btn-light btn-icon btn-block pb-1",
                                on: {
                                  click: function($event) {
                                    $event.preventDefault()
                                    return _vm.modalOpen("verifikasi")
                                  }
                                }
                              },
                              [
                                _c("i", { staticClass: "icon-file-check" }),
                                _vm._v(" Verifikasi\n          ")
                              ]
                            )
                      ])
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.currentUser.can &&
                  _vm.currentUser.can["destroy_jalinan_klaim"] &&
                  _vm.status == 0
                    ? _c(
                        "button",
                        {
                          staticClass: "btn btn-light btn-icon btn-block pb-1",
                          attrs: { disabled: !_vm.selectedItem.id },
                          on: {
                            click: function($event) {
                              $event.preventDefault()
                              return _vm.modalOpen("hapus")
                            }
                          }
                        },
                        [
                          _c("i", { staticClass: "icon-bin2" }),
                          _vm._v(" Hapus\n        ")
                        ]
                      )
                    : _vm._e()
                ],
                1
              )
            : _vm._e()
        ],
        2
      ),
      _vm._v(" "),
      !_vm.isSimple
        ? _c(
            "app-modal",
            {
              attrs: {
                show: _vm.modalShow,
                state: _vm.modalState,
                title: _vm.modalTitle,
                size: _vm.modalSize,
                button: _vm.modalButton,
                content: _vm.modalContent,
                color: _vm.modalColor
              },
              on: {
                tutup: _vm.modalTutup,
                confirmOk: _vm.modalConfirmOk,
                successOk: _vm.modalTutup,
                failOk: _vm.modalTutup,
                backgroundClick: _vm.modalTutup
              }
            },
            [
              _c("template", { slot: "modal-title" }, [
                _vm._v("\n\t\t\t\t" + _vm._s(_vm.modalTitle) + "\n\t\t\t")
              ]),
              _vm._v(" "),
              _c(
                "template",
                { slot: "modal-body1" },
                [
                  _c("form-status", {
                    attrs: {
                      kelas: _vm.kelas,
                      selected: _vm.selectedItem,
                      tipe: _vm.state
                    },
                    on: { tutup: _vm.modalTutup }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "template",
                { slot: "modal-body2" },
                [
                  _c("surat", {
                    attrs: {
                      selectedItem: _vm.selectedItem,
                      tipe: _vm.tipeSurat
                    },
                    on: { tutup: _vm.modalTutup }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "template",
                { slot: "modal-body3" },
                [
                  _c("form-periksa-koreksi", {
                    attrs: { kelas: _vm.kelas, selected: _vm.selectedItem },
                    on: { tutup: _vm.modalTutup }
                  })
                ],
                1
              )
            ],
            2
          )
        : _vm._e()
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/jalinanKlaim/verifikator.vue?vue&type=template&id=c0e1ba0e&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/views/jalinanKlaim/verifikator.vue?vue&type=template&id=c0e1ba0e& ***!
  \*****************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "card" }, [
    _c("div", { staticClass: "card-header bg-white" }, [
      _c("h5", { staticClass: "mb-1" }, [_vm._v(_vm._s(_vm.title))])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "card-body" }, [
      _vm.itemDataStat != "success"
        ? _c("div", { staticClass: "progress" }, [_vm._m(0)])
        : _c(
            "span",
            [
              _vm.isSingle
                ? _c("div", { staticClass: "media mt-0 mb-3" }, [
                    _c("div", { staticClass: "mr-3 mb-2 mb-0" }, [
                      _c("div", { staticClass: "card-img-actions" }, [
                        _vm.itemData.aktivis && _vm.itemData.aktivis.gambar
                          ? _c("img", {
                              staticClass: "img-fluid img-preview img-rounded",
                              attrs: {
                                src:
                                  "/images/aktivis/" +
                                  _vm.itemData.aktivis.gambar +
                                  "n.jpg"
                              }
                            })
                          : _c("img", {
                              staticClass: "img-fluid img-preview img-rounded",
                              attrs: { src: "/images/no_image_man.jpg" }
                            })
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "media-body" }, [
                      _c("b", [_vm._v("Nama:")]),
                      _vm._v(
                        "\n          " +
                          _vm._s(
                            _vm.itemData.aktivis
                              ? _vm.itemData.aktivis.name
                              : "-"
                          ) +
                          "\n          "
                      ),
                      _c("br"),
                      _vm._v(" "),
                      _c("b", [_vm._v("Username:")]),
                      _vm._v(
                        "\n          " +
                          _vm._s(_vm.itemData.username) +
                          "\n          "
                      ),
                      _c("br"),
                      _vm._v(" "),
                      _c("b", [_vm._v("Tingkat:")]),
                      _vm._v(
                        "\n          " +
                          _vm._s(
                            _vm.itemData.aktivis &&
                              _vm.itemData.aktivis.pekerjaan_aktif
                              ? _vm.$options.filters.checkTingkatAktivis(
                                  _vm.itemData.aktivis.pekerjaan_aktif.tingkat
                                )
                              : ""
                          ) +
                          "\n          "
                      ),
                      _c("br"),
                      _vm._v(" "),
                      _c("b", [_vm._v("Jabatan:")]),
                      _vm._v(
                        "\n          " +
                          _vm._s(
                            _vm.itemData.aktivis &&
                              _vm.itemData.aktivis.pekerjaan_aktif
                              ? _vm.itemData.aktivis.pekerjaan_aktif.name
                              : ""
                          ) +
                          "\n          "
                      ),
                      _c("br")
                    ])
                  ])
                : _vm._l(_vm.itemData, function(vr) {
                    return _c("div", { staticClass: "media mt-0 mb-3" }, [
                      _c("div", { staticClass: "mr-3 mb-2 mb-0" }, [
                        _c("div", { staticClass: "card-img-actions" }, [
                          vr.aktivis && vr.aktivis.gambar
                            ? _c("img", {
                                staticClass:
                                  "img-fluid img-preview img-rounded",
                                attrs: {
                                  src:
                                    "/images/aktivis/" +
                                    vr.aktivis.gambar +
                                    "n.jpg"
                                }
                              })
                            : _c("img", {
                                staticClass:
                                  "img-fluid img-preview img-rounded",
                                attrs: { src: "/images/no_image_man.jpg" }
                              })
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "media-body" }, [
                        _c("b", [_vm._v("Nama:")]),
                        _vm._v(
                          "\n          " +
                            _vm._s(vr.aktivis ? vr.aktivis.name : "-") +
                            "\n          "
                        ),
                        _c("br"),
                        _vm._v(" "),
                        _c("b", [_vm._v("Username:")]),
                        _vm._v(
                          "\n          " + _vm._s(vr.username) + "\n          "
                        ),
                        _c("br"),
                        _vm._v(" "),
                        _c("b", [_vm._v("Tingkat:")]),
                        _vm._v(
                          "\n          " +
                            _vm._s(
                              vr.aktivis && vr.aktivis.pekerjaan_aktif
                                ? _vm.$options.filters.checkTingkatAktivis(
                                    vr.aktivis.pekerjaan_aktif.tingkat
                                  )
                                : ""
                            ) +
                            "\n          "
                        ),
                        _c("br"),
                        _vm._v(" "),
                        _c("b", [_vm._v("Jabatan:")]),
                        _vm._v(
                          "\n          " +
                            _vm._s(
                              vr.aktivis && vr.aktivis.pekerjaan_aktif
                                ? vr.aktivis.pekerjaan_aktif.name
                                : ""
                            ) +
                            "\n          "
                        ),
                        _c("br")
                      ])
                    ])
                  })
            ],
            2
          )
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass:
          "progress-bar progress-bar-info progress-bar-striped progress-bar-animated",
        staticStyle: { width: "100%" }
      },
      [_c("span", { staticClass: "sr-only" }, [_vm._v("100% Complete")])]
    )
  }
]
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

/***/ "./resources/assets/js/components/identitasAnggotaCu.vue":
/*!***************************************************************!*\
  !*** ./resources/assets/js/components/identitasAnggotaCu.vue ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _identitasAnggotaCu_vue_vue_type_template_id_eac68d6a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./identitasAnggotaCu.vue?vue&type=template&id=eac68d6a& */ "./resources/assets/js/components/identitasAnggotaCu.vue?vue&type=template&id=eac68d6a&");
/* harmony import */ var _identitasAnggotaCu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./identitasAnggotaCu.vue?vue&type=script&lang=js& */ "./resources/assets/js/components/identitasAnggotaCu.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _identitasAnggotaCu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _identitasAnggotaCu_vue_vue_type_template_id_eac68d6a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _identitasAnggotaCu_vue_vue_type_template_id_eac68d6a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/components/identitasAnggotaCu.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/identitasAnggotaCu.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/assets/js/components/identitasAnggotaCu.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_identitasAnggotaCu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./identitasAnggotaCu.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/identitasAnggotaCu.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_identitasAnggotaCu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/identitasAnggotaCu.vue?vue&type=template&id=eac68d6a&":
/*!**********************************************************************************************!*\
  !*** ./resources/assets/js/components/identitasAnggotaCu.vue?vue&type=template&id=eac68d6a& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_identitasAnggotaCu_vue_vue_type_template_id_eac68d6a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./identitasAnggotaCu.vue?vue&type=template&id=eac68d6a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/identitasAnggotaCu.vue?vue&type=template&id=eac68d6a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_identitasAnggotaCu_vue_vue_type_template_id_eac68d6a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_identitasAnggotaCu_vue_vue_type_template_id_eac68d6a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/assets/js/views/jalinanKlaim/dokumen.vue":
/*!************************************************************!*\
  !*** ./resources/assets/js/views/jalinanKlaim/dokumen.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dokumen_vue_vue_type_template_id_243e1002___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dokumen.vue?vue&type=template&id=243e1002& */ "./resources/assets/js/views/jalinanKlaim/dokumen.vue?vue&type=template&id=243e1002&");
/* harmony import */ var _dokumen_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dokumen.vue?vue&type=script&lang=js& */ "./resources/assets/js/views/jalinanKlaim/dokumen.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _dokumen_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _dokumen_vue_vue_type_template_id_243e1002___WEBPACK_IMPORTED_MODULE_0__["render"],
  _dokumen_vue_vue_type_template_id_243e1002___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/views/jalinanKlaim/dokumen.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/views/jalinanKlaim/dokumen.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/assets/js/views/jalinanKlaim/dokumen.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_dokumen_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./dokumen.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/jalinanKlaim/dokumen.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_dokumen_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/views/jalinanKlaim/dokumen.vue?vue&type=template&id=243e1002&":
/*!*******************************************************************************************!*\
  !*** ./resources/assets/js/views/jalinanKlaim/dokumen.vue?vue&type=template&id=243e1002& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_dokumen_vue_vue_type_template_id_243e1002___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./dokumen.vue?vue&type=template&id=243e1002& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/jalinanKlaim/dokumen.vue?vue&type=template&id=243e1002&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_dokumen_vue_vue_type_template_id_243e1002___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_dokumen_vue_vue_type_template_id_243e1002___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/assets/js/views/jalinanKlaim/formPeriksaKoreksi.vue":
/*!***********************************************************************!*\
  !*** ./resources/assets/js/views/jalinanKlaim/formPeriksaKoreksi.vue ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _formPeriksaKoreksi_vue_vue_type_template_id_425d80b0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./formPeriksaKoreksi.vue?vue&type=template&id=425d80b0& */ "./resources/assets/js/views/jalinanKlaim/formPeriksaKoreksi.vue?vue&type=template&id=425d80b0&");
/* harmony import */ var _formPeriksaKoreksi_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./formPeriksaKoreksi.vue?vue&type=script&lang=js& */ "./resources/assets/js/views/jalinanKlaim/formPeriksaKoreksi.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _formPeriksaKoreksi_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _formPeriksaKoreksi_vue_vue_type_template_id_425d80b0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _formPeriksaKoreksi_vue_vue_type_template_id_425d80b0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/views/jalinanKlaim/formPeriksaKoreksi.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/views/jalinanKlaim/formPeriksaKoreksi.vue?vue&type=script&lang=js&":
/*!************************************************************************************************!*\
  !*** ./resources/assets/js/views/jalinanKlaim/formPeriksaKoreksi.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_formPeriksaKoreksi_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./formPeriksaKoreksi.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/jalinanKlaim/formPeriksaKoreksi.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_formPeriksaKoreksi_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/views/jalinanKlaim/formPeriksaKoreksi.vue?vue&type=template&id=425d80b0&":
/*!******************************************************************************************************!*\
  !*** ./resources/assets/js/views/jalinanKlaim/formPeriksaKoreksi.vue?vue&type=template&id=425d80b0& ***!
  \******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_formPeriksaKoreksi_vue_vue_type_template_id_425d80b0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./formPeriksaKoreksi.vue?vue&type=template&id=425d80b0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/jalinanKlaim/formPeriksaKoreksi.vue?vue&type=template&id=425d80b0&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_formPeriksaKoreksi_vue_vue_type_template_id_425d80b0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_formPeriksaKoreksi_vue_vue_type_template_id_425d80b0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/assets/js/views/jalinanKlaim/formStatus.vue":
/*!***************************************************************!*\
  !*** ./resources/assets/js/views/jalinanKlaim/formStatus.vue ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _formStatus_vue_vue_type_template_id_1837e536___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./formStatus.vue?vue&type=template&id=1837e536& */ "./resources/assets/js/views/jalinanKlaim/formStatus.vue?vue&type=template&id=1837e536&");
/* harmony import */ var _formStatus_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./formStatus.vue?vue&type=script&lang=js& */ "./resources/assets/js/views/jalinanKlaim/formStatus.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _formStatus_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _formStatus_vue_vue_type_template_id_1837e536___WEBPACK_IMPORTED_MODULE_0__["render"],
  _formStatus_vue_vue_type_template_id_1837e536___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/views/jalinanKlaim/formStatus.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/views/jalinanKlaim/formStatus.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/assets/js/views/jalinanKlaim/formStatus.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_formStatus_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./formStatus.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/jalinanKlaim/formStatus.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_formStatus_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/views/jalinanKlaim/formStatus.vue?vue&type=template&id=1837e536&":
/*!**********************************************************************************************!*\
  !*** ./resources/assets/js/views/jalinanKlaim/formStatus.vue?vue&type=template&id=1837e536& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_formStatus_vue_vue_type_template_id_1837e536___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./formStatus.vue?vue&type=template&id=1837e536& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/jalinanKlaim/formStatus.vue?vue&type=template&id=1837e536&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_formStatus_vue_vue_type_template_id_1837e536___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_formStatus_vue_vue_type_template_id_1837e536___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/assets/js/views/jalinanKlaim/riwayatKlaim.vue":
/*!*****************************************************************!*\
  !*** ./resources/assets/js/views/jalinanKlaim/riwayatKlaim.vue ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _riwayatKlaim_vue_vue_type_template_id_865fc870___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./riwayatKlaim.vue?vue&type=template&id=865fc870& */ "./resources/assets/js/views/jalinanKlaim/riwayatKlaim.vue?vue&type=template&id=865fc870&");
/* harmony import */ var _riwayatKlaim_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./riwayatKlaim.vue?vue&type=script&lang=js& */ "./resources/assets/js/views/jalinanKlaim/riwayatKlaim.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _riwayatKlaim_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _riwayatKlaim_vue_vue_type_template_id_865fc870___WEBPACK_IMPORTED_MODULE_0__["render"],
  _riwayatKlaim_vue_vue_type_template_id_865fc870___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/views/jalinanKlaim/riwayatKlaim.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/views/jalinanKlaim/riwayatKlaim.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** ./resources/assets/js/views/jalinanKlaim/riwayatKlaim.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_riwayatKlaim_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./riwayatKlaim.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/jalinanKlaim/riwayatKlaim.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_riwayatKlaim_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/views/jalinanKlaim/riwayatKlaim.vue?vue&type=template&id=865fc870&":
/*!************************************************************************************************!*\
  !*** ./resources/assets/js/views/jalinanKlaim/riwayatKlaim.vue?vue&type=template&id=865fc870& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_riwayatKlaim_vue_vue_type_template_id_865fc870___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./riwayatKlaim.vue?vue&type=template&id=865fc870& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/jalinanKlaim/riwayatKlaim.vue?vue&type=template&id=865fc870&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_riwayatKlaim_vue_vue_type_template_id_865fc870___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_riwayatKlaim_vue_vue_type_template_id_865fc870___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/assets/js/views/jalinanKlaim/surat.vue":
/*!**********************************************************!*\
  !*** ./resources/assets/js/views/jalinanKlaim/surat.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _surat_vue_vue_type_template_id_4bdc7d78___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./surat.vue?vue&type=template&id=4bdc7d78& */ "./resources/assets/js/views/jalinanKlaim/surat.vue?vue&type=template&id=4bdc7d78&");
/* harmony import */ var _surat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./surat.vue?vue&type=script&lang=js& */ "./resources/assets/js/views/jalinanKlaim/surat.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _surat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _surat_vue_vue_type_template_id_4bdc7d78___WEBPACK_IMPORTED_MODULE_0__["render"],
  _surat_vue_vue_type_template_id_4bdc7d78___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/views/jalinanKlaim/surat.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/views/jalinanKlaim/surat.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/assets/js/views/jalinanKlaim/surat.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_surat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./surat.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/jalinanKlaim/surat.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_surat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/views/jalinanKlaim/surat.vue?vue&type=template&id=4bdc7d78&":
/*!*****************************************************************************************!*\
  !*** ./resources/assets/js/views/jalinanKlaim/surat.vue?vue&type=template&id=4bdc7d78& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_surat_vue_vue_type_template_id_4bdc7d78___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./surat.vue?vue&type=template&id=4bdc7d78& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/jalinanKlaim/surat.vue?vue&type=template&id=4bdc7d78&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_surat_vue_vue_type_template_id_4bdc7d78___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_surat_vue_vue_type_template_id_4bdc7d78___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/assets/js/views/jalinanKlaim/table.vue":
/*!**********************************************************!*\
  !*** ./resources/assets/js/views/jalinanKlaim/table.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _table_vue_vue_type_template_id_144ce90f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./table.vue?vue&type=template&id=144ce90f& */ "./resources/assets/js/views/jalinanKlaim/table.vue?vue&type=template&id=144ce90f&");
/* harmony import */ var _table_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./table.vue?vue&type=script&lang=js& */ "./resources/assets/js/views/jalinanKlaim/table.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _table_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _table_vue_vue_type_template_id_144ce90f___WEBPACK_IMPORTED_MODULE_0__["render"],
  _table_vue_vue_type_template_id_144ce90f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/views/jalinanKlaim/table.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/views/jalinanKlaim/table.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/assets/js/views/jalinanKlaim/table.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_table_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./table.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/jalinanKlaim/table.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_table_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/views/jalinanKlaim/table.vue?vue&type=template&id=144ce90f&":
/*!*****************************************************************************************!*\
  !*** ./resources/assets/js/views/jalinanKlaim/table.vue?vue&type=template&id=144ce90f& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_table_vue_vue_type_template_id_144ce90f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./table.vue?vue&type=template&id=144ce90f& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/jalinanKlaim/table.vue?vue&type=template&id=144ce90f&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_table_vue_vue_type_template_id_144ce90f___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_table_vue_vue_type_template_id_144ce90f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/assets/js/views/jalinanKlaim/verifikator.vue":
/*!****************************************************************!*\
  !*** ./resources/assets/js/views/jalinanKlaim/verifikator.vue ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _verifikator_vue_vue_type_template_id_c0e1ba0e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./verifikator.vue?vue&type=template&id=c0e1ba0e& */ "./resources/assets/js/views/jalinanKlaim/verifikator.vue?vue&type=template&id=c0e1ba0e&");
/* harmony import */ var _verifikator_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./verifikator.vue?vue&type=script&lang=js& */ "./resources/assets/js/views/jalinanKlaim/verifikator.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _verifikator_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _verifikator_vue_vue_type_template_id_c0e1ba0e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _verifikator_vue_vue_type_template_id_c0e1ba0e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/views/jalinanKlaim/verifikator.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/views/jalinanKlaim/verifikator.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./resources/assets/js/views/jalinanKlaim/verifikator.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_verifikator_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./verifikator.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/jalinanKlaim/verifikator.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_verifikator_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/views/jalinanKlaim/verifikator.vue?vue&type=template&id=c0e1ba0e&":
/*!***********************************************************************************************!*\
  !*** ./resources/assets/js/views/jalinanKlaim/verifikator.vue?vue&type=template&id=c0e1ba0e& ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_verifikator_vue_vue_type_template_id_c0e1ba0e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./verifikator.vue?vue&type=template&id=c0e1ba0e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/jalinanKlaim/verifikator.vue?vue&type=template&id=c0e1ba0e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_verifikator_vue_vue_type_template_id_c0e1ba0e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_verifikator_vue_vue_type_template_id_c0e1ba0e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);