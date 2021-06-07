(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[139],{

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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/cu/index.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/views/cu/index.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _components_pageHeader_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/pageHeader.vue */ "./resources/assets/js/components/pageHeader.vue");
/* harmony import */ var _table_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./table.vue */ "./resources/assets/js/views/cu/table.vue");
/* harmony import */ var _tableDeleted_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tableDeleted.vue */ "./resources/assets/js/views/cu/tableDeleted.vue");
/* harmony import */ var _components_message_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/message.vue */ "./resources/assets/js/components/message.vue");
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





/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    pageHeader: _components_pageHeader_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    tableData: _table_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    tableDataDeleted: _tableDeleted_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    message: _components_message_vue__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  data: function data() {
    return {
      title: 'CU',
      kelas: 'cu',
      titleDesc: 'Mengelola data CU',
      titleIcon: 'icon-office',
      tabName: 'table',
      isTableDeleted: false
    };
  },
  methods: {
    changeTab: function changeTab(value) {
      this.tabName = value;

      if (value == 'tableDeleted' && !this.isTableDeleted) {
        this.isTableDeleted = true;
      }
    }
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('cu', {
    itemData: 'dataS',
    itemDataStat: 'dataStatS',
    itemDataDeleted: 'dataDeletedS',
    itemDataDeletedStat: 'dataDeletedStatS'
  }))
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/cu/table.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/views/cu/table.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _components_dataviewer2_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/dataviewer2.vue */ "./resources/assets/js/components/dataviewer2.vue");
/* harmony import */ var _components_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/modal */ "./resources/assets/js/components/modal.vue");
/* harmony import */ var _components_collapseButton_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/collapseButton.vue */ "./resources/assets/js/components/collapseButton.vue");
/* harmony import */ var _components_checkValue_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/checkValue.vue */ "./resources/assets/js/components/checkValue.vue");
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






/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    DataViewer: _components_dataviewer2_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    appModal: _components_modal__WEBPACK_IMPORTED_MODULE_3__["default"],
    collapseButton: _components_collapseButton_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
    checkValue: _components_checkValue_vue__WEBPACK_IMPORTED_MODULE_5__["default"]
  },
  props: ["title", "kelas"],
  data: function data() {
    return {
      selectedItem: [],
      query: {
        order_column: "no_ba",
        order_direction: "asc",
        filter_match: "and",
        limit: 10,
        page: 1
      },
      excelDownloadUrl: '',
      columnData: [{
        title: "No.",
        name: "No."
      }, {
        title: "Foto",
        name: "gambar",
        hide: false
      }, {
        title: "Nama",
        name: "name",
        tipe: "string",
        sort: true,
        hide: false,
        disable: false,
        filter: true,
        filterDefault: true
      }, {
        title: "Nama Legal",
        name: "name_legal",
        tipe: "string",
        sort: true,
        hide: false,
        disable: false,
        filter: true,
        filterDefault: true
      }, {
        title: "No. BA",
        name: "no_ba",
        tipe: "numeric",
        sort: true,
        hide: false,
        disable: false,
        filter: true
      }, {
        title: "Jmlh TP/KP",
        name: "has_tp_count",
        tipe: "numeric",
        sort: true,
        hide: false,
        disable: false,
        filter: true
      }, {
        title: "Jmlh Manajemen",
        name: "has_manajemen_count",
        tipe: "numeric",
        sort: true,
        hide: false,
        disable: false,
        filter: true
      }, {
        title: "Jmlh Pengurus",
        name: "has_pengurus_count",
        tipe: "numeric",
        sort: true,
        hide: false,
        disable: false,
        filter: true
      }, {
        title: "Jmlh Pengawas",
        name: "has_pengawas_count",
        tipe: "numeric",
        sort: true,
        hide: false,
        disable: false,
        filter: true
      }, {
        title: "Jmlh Komite",
        name: "has_komite_count",
        tipe: "numeric",
        sort: true,
        hide: false,
        disable: false,
        filter: true
      }, {
        title: "Jmlh Penasihat",
        name: "has_penasihat_count",
        tipe: "numeric",
        sort: true,
        hide: false,
        disable: false,
        filter: true
      }, {
        title: "Jmlh Kolektor",
        name: "has_kolektor_count",
        tipe: "numeric",
        sort: true,
        hide: false,
        disable: false,
        filter: true
      }, {
        title: "Jmlh Kelompok Inti",
        name: "has_kelompok_inti_count",
        tipe: "numeric",
        sort: true,
        hide: false,
        disable: false,
        filter: true
      }, {
        title: "Jmlh Senior Manajer",
        name: "has_senior_manajer_count",
        tipe: "numeric",
        sort: true,
        hide: false,
        disable: false,
        filter: true
      }, {
        title: "Jmlh Manajer",
        name: "has_manajer_count",
        tipe: "numeric",
        sort: true,
        hide: false,
        disable: false,
        filter: true
      }, {
        title: "Jmlh Supervisor",
        name: "has_supervisor_count",
        tipe: "numeric",
        sort: true,
        hide: false,
        disable: false,
        filter: true
      }, {
        title: "Jmlh Staf",
        name: "has_staf_count",
        tipe: "numeric",
        sort: true,
        hide: false,
        disable: false,
        filter: true
      }, {
        title: "Jmlh Kontrak",
        name: "has_kontrak_count",
        tipe: "numeric",
        sort: true,
        hide: false,
        disable: false,
        filter: true
      }, {
        title: "Jmlh Aktivis Tidak Aktif",
        name: "has_aktivis_tidak_aktif_count",
        tipe: "numeric",
        sort: true,
        hide: false,
        disable: false,
        filter: true
      }, {
        title: "Jmlh Simpanan",
        name: "has_simpanan_count",
        tipe: "numeric",
        sort: true,
        hide: false,
        disable: false,
        filter: true
      }, {
        title: "Jmlh Pinjaman",
        name: "has_pinjaman_count",
        tipe: "numeric",
        sort: true,
        hide: false,
        disable: false,
        filter: true
      }, {
        title: "Jmlh Simpanan JALINAN",
        name: "has_simpanan_jalinan_count",
        tipe: "numeric",
        sort: true,
        hide: false,
        disable: false,
        filter: true
      }, {
        title: "Jmlh Pinjaman JALINAN",
        name: "has_pinjaman_jalinan_count",
        tipe: "numeric",
        sort: true,
        hide: false,
        disable: false,
        filter: true
      }, {
        title: "Jmlh User SIMO",
        name: "has_user_count",
        tipe: "numeric",
        sort: true,
        hide: false,
        disable: false,
        filter: true
      }, {
        title: "Jmlh Artikel",
        name: "has_artikel_count",
        tipe: "numeric",
        sort: true,
        hide: false,
        disable: false,
        filter: true
      }, {
        title: "Jmlh Anggota CU",
        name: "has_anggota_cu_count",
        tipe: "numeric",
        sort: true,
        hide: false,
        disable: false,
        filter: true
      }, {
        title: "Badan Hukum",
        name: "badan_hukum",
        tipe: "string",
        sort: true,
        hide: false,
        disable: false,
        filter: true
      }, {
        title: "NPWP",
        name: "npwp",
        tipe: "string",
        sort: true,
        hide: false,
        disable: false,
        filter: true
      }, {
        title: "NIK",
        name: "nik",
        tipe: "string",
        sort: true,
        hide: false,
        disable: false,
        filter: true
      }, {
        title: "SITU",
        name: "situ",
        tipe: "string",
        sort: true,
        hide: false,
        disable: false,
        filter: true
      }, {
        title: "SIUSP",
        name: "siusp",
        tipe: "string",
        sort: true,
        hide: false,
        disable: false,
        filter: true
      }, {
        title: "Izin Operasional",
        name: "izin_operasional",
        tipe: "string",
        sort: true,
        hide: false,
        disable: false,
        filter: true
      }, {
        title: "Provinsi",
        name: "provinces.name",
        tipe: "string",
        sort: false,
        hide: false,
        disable: false,
        filter: true
      }, {
        title: "Kabupaten/Kota",
        name: "regencies.name",
        tipe: "string",
        sort: false,
        hide: false,
        disable: false,
        filter: true
      }, {
        title: "Kecamatan",
        name: "districts.name",
        tipe: "string",
        sort: false,
        hide: false,
        disable: false,
        filter: true
      }, {
        title: "Kelurahan",
        name: "villages.name",
        tipe: "string",
        sort: false,
        hide: false,
        disable: false,
        filter: true
      }, {
        title: "Alamat",
        name: "alamat",
        tipe: "string",
        sort: false,
        hide: false,
        disable: false,
        filter: true
      }, {
        title: "Aplikasi",
        name: "app",
        tipe: "string",
        sort: true,
        hide: false,
        disable: false,
        filter: true
      }, {
        title: "Tgl. Berdiri",
        name: "ultah",
        tipe: "datetime",
        sort: true,
        hide: false,
        disable: false,
        filter: true
      }, {
        title: "Tgl. Bergabung",
        name: "bergabung",
        tipe: "datetime",
        sort: true,
        hide: false,
        disable: false,
        filter: true
      }, {
        title: "Website",
        name: "website",
        tipe: "string",
        sort: true,
        hide: false,
        disable: false,
        filter: true
      }, {
        title: "E-mail",
        name: "email",
        tipe: "string",
        sort: true,
        hide: false,
        disable: false,
        filter: true
      }, {
        title: "No. Telp",
        name: "telp",
        tipe: "string",
        sort: true,
        hide: false,
        disable: false,
        filter: true
      }, {
        title: "No. Hp",
        name: "hp",
        tipe: "string",
        sort: true,
        hide: false,
        disable: false,
        filter: true
      }, {
        title: "Kode Pos",
        name: "pos",
        tipe: "string",
        sort: true,
        hide: false,
        disable: false,
        filter: true
      }, {
        title: "Tgl. / Waktu Buat",
        name: "created_at",
        tipe: "datetime",
        sort: true,
        hide: false,
        disable: false,
        filter: true
      }, {
        title: "Tgl. / Waktu Ubah",
        name: "updated_at",
        tipe: "datetime",
        sort: true,
        hide: false,
        disable: false,
        filter: true
      }],
      state: '',
      modalShow: false,
      modalState: "",
      modalTitle: "",
      modalContent: "",
      modalButton: ""
    };
  },
  created: function created() {
    this.fetch(this.query);
  },
  watch: {
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
    }
  },
  methods: {
    fetch: function fetch(params) {
      this.$store.dispatch(this.kelas + "/index", params);
      this.excelDownloadUrl = this.kelas;
    },
    selectedRow: function selectedRow(item) {
      this.selectedItem = item;
    },
    ubahData: function ubahData(id) {
      this.$router.push({
        name: this.kelas + "Edit",
        params: {
          id: id
        }
      });
    },
    lihatTpCu: function lihatTpCu(id_cu) {
      this.$router.push({
        name: "tpCu",
        params: {
          cu: id_cu
        }
      });
    },
    modalConfirmOpen: function modalConfirmOpen(state, isMobile, itemMobile) {
      this.modalShow = true;
      this.modalState = "confirm-tutup";
      this.state = state;

      if (isMobile) {
        this.selectedItem = itemMobile;
      }

      if (state == "hapus") {
        this.modalTitle = "Hapus " + this.title + " " + this.selectedItem.name + " ini?";
        this.modalButton = "Iya, Hapus";
      }
    },
    modalTutup: function modalTutup() {
      this.modalShow = false;
      this.$store.dispatch(this.kelas + "/resetUpdateStat");
    },
    modalConfirmOk: function modalConfirmOk() {
      if (this.state == "hapus") {
        this.$store.dispatch(this.kelas + "/destroy", this.selectedItem.id);
      }
    }
  },
  computed: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapGetters"])("cu", {
    itemData: "dataS",
    itemDataStat: "dataStatS",
    updateMessage: "update",
    updateStat: "updateStat"
  })), Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapGetters"])("auth", {
    currentUser: "currentUser"
  }))
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/cu/tableDeleted.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/views/cu/tableDeleted.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _components_dataviewer2_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/dataviewer2.vue */ "./resources/assets/js/components/dataviewer2.vue");
/* harmony import */ var _components_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/modal */ "./resources/assets/js/components/modal.vue");
/* harmony import */ var _components_collapseButton_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/collapseButton.vue */ "./resources/assets/js/components/collapseButton.vue");
/* harmony import */ var _components_checkValue_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/checkValue.vue */ "./resources/assets/js/components/checkValue.vue");
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






/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    DataViewer: _components_dataviewer2_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    appModal: _components_modal__WEBPACK_IMPORTED_MODULE_3__["default"],
    collapseButton: _components_collapseButton_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
    checkValue: _components_checkValue_vue__WEBPACK_IMPORTED_MODULE_5__["default"]
  },
  props: ["title", "kelas"],
  data: function data() {
    return {
      selectedItem: [],
      query: {
        order_column: "no_ba",
        order_direction: "asc",
        filter_match: "and",
        limit: 10,
        page: 1
      },
      excelDownloadUrl: '',
      columnData: [{
        title: "No.",
        name: "No."
      }, {
        title: "Foto",
        name: "gambar",
        hide: false
      }, {
        title: "Nama",
        name: "name",
        tipe: "string",
        sort: true,
        hide: false,
        disable: false,
        filter: true,
        filterDefault: true
      }, {
        title: "Nama Legal",
        name: "name_legal",
        tipe: "string",
        sort: true,
        hide: false,
        disable: false,
        filter: true,
        filterDefault: true
      }, {
        title: "No. BA",
        name: "no_ba",
        tipe: "numeric",
        sort: true,
        hide: false,
        disable: false,
        filter: true
      }, {
        title: "Jmlh TP/KP",
        name: "has_tp_cu_count",
        tipe: "numeric",
        sort: true,
        hide: false,
        disable: false,
        filter: true
      }, {
        title: "Badan Hukum",
        name: "badan_hukum",
        tipe: "string",
        sort: true,
        hide: false,
        disable: false,
        filter: true
      }, {
        title: "NPWP",
        name: "npwp",
        tipe: "string",
        sort: true,
        hide: false,
        disable: false,
        filter: true
      }, {
        title: "NIK",
        name: "nik",
        tipe: "string",
        sort: true,
        hide: false,
        disable: false,
        filter: true
      }, {
        title: "SITU",
        name: "situ",
        tipe: "string",
        sort: true,
        hide: false,
        disable: false,
        filter: true
      }, {
        title: "SIUSP",
        name: "siusp",
        tipe: "string",
        sort: true,
        hide: false,
        disable: false,
        filter: true
      }, {
        title: "Izin Operasional",
        name: "izin_operasional",
        tipe: "string",
        sort: true,
        hide: false,
        disable: false,
        filter: true
      }, {
        title: "Provinsi",
        name: "provinces.name",
        tipe: "string",
        sort: false,
        hide: false,
        disable: false,
        filter: true
      }, {
        title: "Kabupaten/Kota",
        name: "regencies.name",
        tipe: "string",
        sort: false,
        hide: false,
        disable: false,
        filter: true
      }, {
        title: "Kecamatan",
        name: "districts.name",
        tipe: "string",
        sort: false,
        hide: false,
        disable: false,
        filter: true
      }, {
        title: "Kelurahan",
        name: "villages.name",
        tipe: "string",
        sort: false,
        hide: false,
        disable: false,
        filter: true
      }, {
        title: "Alamat",
        name: "alamat",
        tipe: "string",
        sort: false,
        hide: false,
        disable: false,
        filter: true
      }, {
        title: "Aplikasi",
        name: "app",
        tipe: "string",
        sort: true,
        hide: false,
        disable: false,
        filter: true
      }, {
        title: "Tgl. Berdiri",
        name: "ultah",
        tipe: "datetime",
        sort: true,
        hide: false,
        disable: false,
        filter: true
      }, {
        title: "Tgl. Bergabung",
        name: "bergabung",
        tipe: "datetime",
        sort: true,
        hide: false,
        disable: false,
        filter: true
      }, {
        title: "Website",
        name: "website",
        tipe: "string",
        sort: true,
        hide: false,
        disable: false,
        filter: true
      }, {
        title: "E-mail",
        name: "email",
        tipe: "string",
        sort: true,
        hide: false,
        disable: false,
        filter: true
      }, {
        title: "No. Telp",
        name: "telp",
        tipe: "string",
        sort: true,
        hide: false,
        disable: false,
        filter: true
      }, {
        title: "No. Hp",
        name: "hp",
        tipe: "string",
        sort: true,
        hide: false,
        disable: false,
        filter: true
      }, {
        title: "Kode Pos",
        name: "pos",
        tipe: "string",
        sort: true,
        hide: false,
        disable: false,
        filter: true
      }, {
        title: "Tgl. / Waktu Buat",
        name: "created_at",
        tipe: "datetime",
        sort: true,
        hide: false,
        disable: false,
        filter: true
      }, {
        title: "Tgl. / Waktu Ubah",
        name: "updated_at",
        tipe: "datetime",
        sort: true,
        hide: false,
        disable: false,
        filter: true
      }, {
        title: "Tgl. / Waktu Hapus",
        name: "deleted_at",
        tipe: "datetime",
        sort: true,
        hide: false,
        disable: false,
        filter: true
      }],
      state: '',
      modalShow: false,
      modalState: "",
      modalTitle: "",
      modalContent: "",
      modalButton: ""
    };
  },
  created: function created() {
    this.fetch(this.query);
  },
  watch: {
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
    }
  },
  methods: {
    fetch: function fetch(params) {
      this.$store.dispatch(this.kelas + "/indexDeleted", params);
      this.excelDownloadUrl = this.kelas;
    },
    selectedRow: function selectedRow(item) {
      this.selectedItem = item;
    },
    lihatTpCu: function lihatTpCu(id_cu) {
      this.$router.push({
        name: "tpCu",
        params: {
          cu: id_cu
        }
      });
    },
    modalConfirmOpen: function modalConfirmOpen(state, isMobile, itemMobile) {
      this.modalShow = true;
      this.modalState = "confirm-tutup";
      this.state = state;

      if (isMobile) {
        this.selectedItem = itemMobile;
      }

      if (state == "restore") {
        this.modalTitle = "Aktifkan kembali " + this.title + " " + this.selectedItem.name + " ini?";
        this.modalButton = "Iya, Aktifkan";
      }
    },
    modalTutup: function modalTutup() {
      this.modalShow = false;
      this.$store.dispatch(this.kelas + "/resetUpdateStat");
    },
    modalConfirmOk: function modalConfirmOk() {
      if (this.state == "restore") {
        this.$store.dispatch(this.kelas + "/restore", this.selectedItem.id);
      }
    }
  },
  computed: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapGetters"])("cu", {
    itemData: "dataDeletedS",
    itemDataStat: "dataDeletedStatS",
    updateMessage: "update",
    updateStat: "updateStat"
  })), Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapGetters"])("auth", {
    currentUser: "currentUser"
  }))
});

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
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else {}})(this,function(){"use strict";function b(a,b){return"undefined"==typeof b?b={autoBom:!1}:"object"!=typeof b&&(console.warn("Deprecated: Expected third argument to be a object"),b={autoBom:!b}),b.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(a.type)?new Blob(["\uFEFF",a],{type:a.type}):a}function c(b,c,d){var e=new XMLHttpRequest;e.open("GET",b),e.responseType="blob",e.onload=function(){a(e.response,c,d)},e.onerror=function(){console.error("could not download file")},e.send()}function d(a){var b=new XMLHttpRequest;b.open("HEAD",a,!1);try{b.send()}catch(a){}return 200<=b.status&&299>=b.status}function e(a){try{a.dispatchEvent(new MouseEvent("click"))}catch(c){var b=document.createEvent("MouseEvents");b.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),a.dispatchEvent(b)}}var f="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof global&&global.global===global?global:void 0,a=f.saveAs||("object"!=typeof window||window!==f?function(){}:"download"in HTMLAnchorElement.prototype?function(b,g,h){var i=f.URL||f.webkitURL,j=document.createElement("a");g=g||b.name||"download",j.download=g,j.rel="noopener","string"==typeof b?(j.href=b,j.origin===location.origin?e(j):d(j.href)?c(b,g,h):e(j,j.target="_blank")):(j.href=i.createObjectURL(b),setTimeout(function(){i.revokeObjectURL(j.href)},4E4),setTimeout(function(){e(j)},0))}:"msSaveOrOpenBlob"in navigator?function(f,g,h){if(g=g||f.name||"download","string"!=typeof f)navigator.msSaveOrOpenBlob(b(f,h),g);else if(d(f))c(f,g,h);else{var i=document.createElement("a");i.href=f,i.target="_blank",setTimeout(function(){e(i)})}}:function(a,b,d,e){if(e=e||open("","_blank"),e&&(e.document.title=e.document.body.innerText="downloading..."),"string"==typeof a)return c(a,b,d);var g="application/octet-stream"===a.type,h=/constructor/i.test(f.HTMLElement)||f.safari,i=/CriOS\/[\d]+/.test(navigator.userAgent);if((i||g&&h)&&"object"==typeof FileReader){var j=new FileReader;j.onloadend=function(){var a=j.result;a=i?a:a.replace(/^data:[^;]*;/,"data:attachment/file;"),e?e.location.href=a:location=a,e=null},j.readAsDataURL(a)}else{var k=f.URL||f.webkitURL,l=k.createObjectURL(a);e?e.location=l:location.href=l,e=null,setTimeout(function(){k.revokeObjectURL(l)},4E4)}});f.saveAs=a.saveAs=a, true&&(module.exports=a)});

//# sourceMappingURL=FileSaver.min.js.map
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/cu/index.vue?vue&type=template&id=6c5411b0&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/views/cu/index.vue?vue&type=template&id=6c5411b0& ***!
  \*************************************************************************************************************************************************************************************************************/
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
          titleIcon: _vm.titleIcon
        }
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
                      errorData: _vm.itemData
                    }
                  })
                : _vm._e(),
              _vm._v(" "),
              _vm.itemDataDeletedStat === "fail"
                ? _c("message", {
                    attrs: {
                      title: "Oops terjadi kesalahan:",
                      errorData: _vm.itemDataDeleted
                    }
                  })
                : _vm._e(),
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
                            click: function($event) {
                              $event.preventDefault()
                              return _vm.changeTab("table")
                            }
                          }
                        },
                        [
                          _c("i", { staticClass: "icon-table2 mr-2" }),
                          _vm._v(" CU Anggota")
                        ]
                      )
                    ]),
                    _vm._v(" "),
                    _c("li", { staticClass: "nav-item" }, [
                      _c(
                        "a",
                        {
                          staticClass: "nav-link",
                          class: { active: _vm.tabName == "tableDeleted" },
                          attrs: { href: "#" },
                          on: {
                            click: function($event) {
                              $event.preventDefault()
                              return _vm.changeTab("tableDeleted")
                            }
                          }
                        },
                        [
                          _c("i", { staticClass: "icon-table2 mr-2" }),
                          _vm._v(" CU Bukan Anggota Lagi")
                        ]
                      )
                    ])
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
                          value: _vm.tabName == "table",
                          expression: "tabName == 'table'"
                        }
                      ]
                    },
                    [
                      _c("table-data", {
                        attrs: { title: _vm.title, kelas: _vm.kelas }
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
                          value: _vm.tabName == "tableDeleted",
                          expression: "tabName == 'tableDeleted'"
                        }
                      ]
                    },
                    [
                      _c("table-data-deleted", {
                        attrs: { title: _vm.title, kelas: _vm.kelas }
                      })
                    ],
                    1
                  )
                ]
              )
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/cu/table.vue?vue&type=template&id=f91da7b8&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/views/cu/table.vue?vue&type=template&id=f91da7b8& ***!
  \*************************************************************************************************************************************************************************************************************/
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
            excelDownloadUrl: _vm.excelDownloadUrl,
            isUploadExcel: false
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
                      _c("td", [
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
                      ]),
                      _vm._v(" "),
                      !_vm.columnData[1].hide
                        ? _c("td", [
                            props.item.gambar
                              ? _c("img", {
                                  staticClass: "img-rounded img-fluid wmin-sm",
                                  attrs: {
                                    src:
                                      "/images/" +
                                      _vm.kelas +
                                      "/" +
                                      props.item.gambar +
                                      "n.jpg",
                                    width: "40"
                                  }
                                })
                              : _c("img", {
                                  staticClass: "img-rounded img-fluid wmin-sm",
                                  attrs: {
                                    src: "/images/no_image.jpg",
                                    width: "40"
                                  }
                                })
                          ])
                        : _vm._e(),
                      _vm._v(" "),
                      !_vm.columnData[2].hide
                        ? _c(
                            "td",
                            [
                              _c("check-value", {
                                attrs: { value: props.item.name }
                              })
                            ],
                            1
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      !_vm.columnData[3].hide
                        ? _c(
                            "td",
                            [
                              _c("check-value", {
                                attrs: { value: props.item.name_legal }
                              })
                            ],
                            1
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      !_vm.columnData[4].hide
                        ? _c(
                            "td",
                            [
                              _c("check-value", {
                                attrs: { value: props.item.no_ba }
                              })
                            ],
                            1
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      !_vm.columnData[5].hide
                        ? _c(
                            "td",
                            [
                              _c("check-value", {
                                attrs: { value: props.item.has_tp_count }
                              })
                            ],
                            1
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      !_vm.columnData[6].hide
                        ? _c(
                            "td",
                            [
                              _c("check-value", {
                                attrs: { value: props.item.has_manajemen_count }
                              })
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
                                attrs: { value: props.item.has_pengurus_count }
                              })
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
                                attrs: { value: props.item.has_pengawas_count }
                              })
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
                                attrs: { value: props.item.has_komite_count }
                              })
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
                                attrs: { value: props.item.has_penasihat_count }
                              })
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
                                attrs: { value: props.item.has_kolektor_count }
                              })
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
                                  value: props.item.has_kelompok_inti_count
                                }
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
                                  value: props.item.has_senior_manajer_count
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
                                attrs: { value: props.item.has_manajer_count }
                              })
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
                                  value: props.item.has_supervisor_count
                                }
                              })
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
                                attrs: { value: props.item.has_staf_count }
                              })
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
                                attrs: { value: props.item.has_kontrak_count }
                              })
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
                                  value:
                                    props.item.has_aktivis_tidak_aktif_count
                                }
                              })
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
                                attrs: { value: props.item.has_simpanan_count }
                              })
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
                                attrs: { value: props.item.has_pinjaman_count }
                              })
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
                                  value: props.item.has_simpanan_jalinan_count
                                }
                              })
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
                                  value: props.item.has_pinjaman_jalinan_count
                                }
                              })
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
                                attrs: { value: props.item.has_user_count }
                              })
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
                                attrs: { value: props.item.has_artikel_count }
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
                              _c("check-value", {
                                attrs: {
                                  value: props.item.has_anggota_cu_count
                                }
                              })
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
                                attrs: { value: props.item.badan_hukum }
                              })
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
                                attrs: { value: props.item.npwp }
                              })
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
                                attrs: { value: props.item.nik }
                              })
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
                                attrs: { value: props.item.situ }
                              })
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
                                attrs: { value: props.item.siusp }
                              })
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
                                attrs: { value: props.item.izin_operasional }
                              })
                            ],
                            1
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      !_vm.columnData[32].hide
                        ? _c(
                            "td",
                            [
                              props.item.provinces
                                ? _c("check-value", {
                                    attrs: { value: props.item.provinces.name }
                                  })
                                : _c("span", [_vm._v("-")])
                            ],
                            1
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      !_vm.columnData[33].hide
                        ? _c(
                            "td",
                            [
                              props.item.regencies
                                ? _c("check-value", {
                                    attrs: { value: props.item.regencies.name }
                                  })
                                : _c("span", [_vm._v("-")])
                            ],
                            1
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      !_vm.columnData[34].hide
                        ? _c(
                            "td",
                            [
                              props.item.districts
                                ? _c("check-value", {
                                    attrs: { value: props.item.districts.name }
                                  })
                                : _c("span", [_vm._v("-")])
                            ],
                            1
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      !_vm.columnData[35].hide
                        ? _c(
                            "td",
                            [
                              props.item.villages
                                ? _c("check-value", {
                                    attrs: { value: props.item.villages.name }
                                  })
                                : _c("span", [_vm._v("-")])
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
                                attrs: { value: props.item.alamat }
                              })
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
                                attrs: { value: props.item.app }
                              })
                            ],
                            1
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      !_vm.columnData[38].hide
                        ? _c("td", {
                            domProps: {
                              innerHTML: _vm._s(
                                _vm.$options.filters.date(props.item.ultah)
                              )
                            }
                          })
                        : _vm._e(),
                      _vm._v(" "),
                      !_vm.columnData[39].hide
                        ? _c("td", {
                            domProps: {
                              innerHTML: _vm._s(
                                _vm.$options.filters.date(props.item.bergabung)
                              )
                            }
                          })
                        : _vm._e(),
                      _vm._v(" "),
                      !_vm.columnData[40].hide
                        ? _c(
                            "td",
                            [
                              _c("check-value", {
                                attrs: { value: props.item.website }
                              })
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
                                attrs: { value: props.item.email }
                              })
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
                                attrs: { value: props.item.telp }
                              })
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
                                attrs: { value: props.item.hp }
                              })
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
                                attrs: { value: props.item.pos }
                              })
                            ],
                            1
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      !_vm.columnData[45].hide
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
                      !_vm.columnData[46].hide
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
          _c(
            "template",
            { slot: "button-desktop" },
            [
              _vm.currentUser.can && _vm.currentUser.can["create_" + _vm.kelas]
                ? _c(
                    "router-link",
                    {
                      staticClass: "btn btn-light btn-icon mb-1",
                      attrs: { to: { name: _vm.kelas + "Create" } }
                    },
                    [
                      _c("i", { staticClass: "icon-plus3" }),
                      _vm._v(" Tambah\n\t\t\t\t")
                    ]
                  )
                : _vm._e(),
              _vm._v(" "),
              _vm.currentUser.can && _vm.currentUser.can["update_" + _vm.kelas]
                ? _c(
                    "button",
                    {
                      staticClass: "btn btn-light btn-icon mb-1",
                      attrs: { disabled: !_vm.selectedItem.id },
                      on: {
                        click: function($event) {
                          $event.preventDefault()
                          return _vm.ubahData(_vm.selectedItem.id)
                        }
                      }
                    },
                    [
                      _c("i", { staticClass: "icon-pencil5" }),
                      _vm._v(" Ubah\n\t\t\t\t")
                    ]
                  )
                : _vm._e(),
              _vm._v(" "),
              _vm.currentUser.can && _vm.currentUser.can["destroy_" + _vm.kelas]
                ? _c(
                    "button",
                    {
                      staticClass: "btn btn-light btn-icon mb-1",
                      attrs: { disabled: !_vm.selectedItem.id },
                      on: {
                        click: function($event) {
                          $event.preventDefault()
                          return _vm.modalConfirmOpen("hapus")
                        }
                      }
                    },
                    [
                      _c("i", { staticClass: "icon-bin2" }),
                      _vm._v(" Hapus\n\t\t\t\t")
                    ]
                  )
                : _vm._e(),
              _vm._v(" "),
              _vm.currentUser.can && _vm.currentUser.can["index_tp"]
                ? _c(
                    "button",
                    {
                      staticClass: "btn btn-light btn-icon mb-1",
                      attrs: {
                        disabled:
                          !_vm.selectedItem.id ||
                          _vm.selectedItem.has_tp_cu_count === 0
                      },
                      on: {
                        click: function($event) {
                          $event.preventDefault()
                          return _vm.lihatTpCu(_vm.selectedItem.id)
                        }
                      }
                    },
                    [
                      _c("i", { staticClass: "icon-file-eye" }),
                      _vm._v(" Lihat TP/KP \n\t\t\t\t")
                    ]
                  )
                : _vm._e()
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "template",
            { slot: "button-mobile" },
            [
              _vm.currentUser.can && _vm.currentUser.can["create_" + _vm.kelas]
                ? _c(
                    "router-link",
                    {
                      staticClass: "btn btn-light btn-icon btn-block pb-1",
                      attrs: { to: { name: _vm.kelas + "Create" } }
                    },
                    [
                      _c("i", { staticClass: "icon-plus3" }),
                      _vm._v(" Tambah\n\t\t\t\t")
                    ]
                  )
                : _vm._e(),
              _vm._v(" "),
              _vm.currentUser.can && _vm.currentUser.can["update_" + _vm.kelas]
                ? _c(
                    "button",
                    {
                      staticClass: "btn btn-light btn-icon btn-block pb-1",
                      attrs: { disabled: !_vm.selectedItem.id },
                      on: {
                        click: function($event) {
                          $event.preventDefault()
                          return _vm.ubahData(_vm.selectedItem.id)
                        }
                      }
                    },
                    [
                      _c("i", { staticClass: "icon-pencil5" }),
                      _vm._v(" Ubah\n\t\t\t\t")
                    ]
                  )
                : _vm._e(),
              _vm._v(" "),
              _vm.currentUser.can && _vm.currentUser.can["destroy_" + _vm.kelas]
                ? _c(
                    "button",
                    {
                      staticClass: "btn btn-light btn-icon btn-block pb-1",
                      attrs: { disabled: !_vm.selectedItem.id },
                      on: {
                        click: function($event) {
                          $event.preventDefault()
                          return _vm.modalConfirmOpen("hapus")
                        }
                      }
                    },
                    [
                      _c("i", { staticClass: "icon-bin2" }),
                      _vm._v(" Hapus\n\t\t\t\t")
                    ]
                  )
                : _vm._e(),
              _vm._v(" "),
              _vm.currentUser.can && _vm.currentUser.can["index_tp"]
                ? _c(
                    "button",
                    {
                      staticClass: "btn btn-light btn-icon btn-block pb-1",
                      attrs: {
                        disabled:
                          !_vm.selectedItem.id ||
                          _vm.selectedItem.has_tp_cu_count === 0
                      },
                      on: {
                        click: function($event) {
                          $event.preventDefault()
                          return _vm.lihatTpCu(_vm.selectedItem.id)
                        }
                      }
                    },
                    [
                      _c("i", { staticClass: "icon-file-eye" }),
                      _vm._v(" Lihat TP/KP \n\t\t\t\t")
                    ]
                  )
                : _vm._e()
            ],
            1
          )
        ],
        2
      ),
      _vm._v(" "),
      _c("app-modal", {
        attrs: {
          show: _vm.modalShow,
          state: _vm.modalState,
          title: _vm.modalTitle,
          button: _vm.modalButton,
          content: _vm.modalContent
        },
        on: {
          tutup: _vm.modalTutup,
          confirmOk: _vm.modalConfirmOk,
          successOk: _vm.modalTutup,
          failOk: _vm.modalTutup,
          backgroundClick: _vm.modalTutup
        }
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/cu/tableDeleted.vue?vue&type=template&id=4172c705&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/views/cu/tableDeleted.vue?vue&type=template&id=4172c705& ***!
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
            isUploadExcel: false
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
                      _c("td", [
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
                      ]),
                      _vm._v(" "),
                      !_vm.columnData[1].hide
                        ? _c("td", [
                            props.item.gambar
                              ? _c("img", {
                                  staticClass: "img-rounded img-fluid wmin-sm",
                                  attrs: {
                                    src:
                                      "/images/" +
                                      _vm.kelas +
                                      "/" +
                                      props.item.gambar +
                                      "n.jpg",
                                    width: "40"
                                  }
                                })
                              : _c("img", {
                                  staticClass: "img-rounded img-fluid wmin-sm",
                                  attrs: {
                                    src: "/images/no_image.jpg",
                                    width: "40"
                                  }
                                })
                          ])
                        : _vm._e(),
                      _vm._v(" "),
                      !_vm.columnData[2].hide
                        ? _c(
                            "td",
                            [
                              _c("check-value", {
                                attrs: { value: props.item.name }
                              })
                            ],
                            1
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      !_vm.columnData[3].hide
                        ? _c(
                            "td",
                            [
                              _c("check-value", {
                                attrs: { value: props.item.name_legal }
                              })
                            ],
                            1
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      !_vm.columnData[4].hide
                        ? _c(
                            "td",
                            [
                              _c("check-value", {
                                attrs: { value: props.item.no_ba }
                              })
                            ],
                            1
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      !_vm.columnData[5].hide
                        ? _c(
                            "td",
                            [
                              _c("check-value", {
                                attrs: { value: props.item.has_tp_count }
                              })
                            ],
                            1
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      !_vm.columnData[6].hide
                        ? _c(
                            "td",
                            [
                              _c("check-value", {
                                attrs: { value: props.item.badan_hukum }
                              })
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
                                attrs: { value: props.item.npwp }
                              })
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
                                attrs: { value: props.item.nik }
                              })
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
                                attrs: { value: props.item.situ }
                              })
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
                                attrs: { value: props.item.siusp }
                              })
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
                                attrs: { value: props.item.izin_operasional }
                              })
                            ],
                            1
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      !_vm.columnData[12].hide && !_vm.columnData[12].disable
                        ? _c(
                            "td",
                            [
                              props.item.provinces
                                ? _c("check-value", {
                                    attrs: { value: props.item.provinces.name }
                                  })
                                : _c("span", [_vm._v("-")])
                            ],
                            1
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      !_vm.columnData[13].hide && !_vm.columnData[13].disable
                        ? _c(
                            "td",
                            [
                              props.item.regencies
                                ? _c("check-value", {
                                    attrs: { value: props.item.regencies.name }
                                  })
                                : _c("span", [_vm._v("-")])
                            ],
                            1
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      !_vm.columnData[14].hide && !_vm.columnData[14].disable
                        ? _c(
                            "td",
                            [
                              props.item.districts
                                ? _c("check-value", {
                                    attrs: { value: props.item.districts.name }
                                  })
                                : _c("span", [_vm._v("-")])
                            ],
                            1
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      !_vm.columnData[15].hide && !_vm.columnData[15].disable
                        ? _c(
                            "td",
                            [
                              props.item.villages
                                ? _c("check-value", {
                                    attrs: { value: props.item.villages.name }
                                  })
                                : _c("span", [_vm._v("-")])
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
                                attrs: { value: props.item.alamat }
                              })
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
                                attrs: { value: props.item.app }
                              })
                            ],
                            1
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      !_vm.columnData[18].hide
                        ? _c("td", {
                            domProps: {
                              innerHTML: _vm._s(
                                _vm.$options.filters.date(props.item.ultah)
                              )
                            }
                          })
                        : _vm._e(),
                      _vm._v(" "),
                      !_vm.columnData[19].hide
                        ? _c("td", {
                            domProps: {
                              innerHTML: _vm._s(
                                _vm.$options.filters.date(props.item.bergabung)
                              )
                            }
                          })
                        : _vm._e(),
                      _vm._v(" "),
                      !_vm.columnData[20].hide
                        ? _c(
                            "td",
                            [
                              _c("check-value", {
                                attrs: { value: props.item.website }
                              })
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
                                attrs: { value: props.item.email }
                              })
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
                                attrs: { value: props.item.telp }
                              })
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
                                attrs: { value: props.item.hp }
                              })
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
                                attrs: { value: props.item.pos }
                              })
                            ],
                            1
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      !_vm.columnData[25].hide
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
                      !_vm.columnData[26].hide
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
                        : _vm._e(),
                      _vm._v(" "),
                      !_vm.columnData[27].hide
                        ? _c("td", [
                            _c("span", {
                              domProps: {
                                innerHTML: _vm._s(
                                  _vm.$options.filters.dateTime(
                                    props.item.deleted_at
                                  )
                                )
                              }
                            })
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
          _c("template", { slot: "button-desktop" }, [
            _vm.currentUser.can && _vm.currentUser.can["update_" + _vm.kelas]
              ? _c(
                  "button",
                  {
                    staticClass: "btn btn-light btn-icon mb-1",
                    attrs: { disabled: !_vm.selectedItem.id },
                    on: {
                      click: function($event) {
                        $event.preventDefault()
                        return _vm.modalConfirmOpen("restore")
                      }
                    }
                  },
                  [
                    _c("i", { staticClass: "icon-checkbox-checked2" }),
                    _vm._v(" Aktifkan Kembali\n\t\t\t\t")
                  ]
                )
              : _vm._e(),
            _vm._v(" "),
            _vm.currentUser.can && _vm.currentUser.can["index_tp"]
              ? _c(
                  "button",
                  {
                    staticClass: "btn btn-light btn-icon mb-1",
                    attrs: {
                      disabled:
                        !_vm.selectedItem.id ||
                        _vm.selectedItem.has_tp_cu_count === 0
                    },
                    on: {
                      click: function($event) {
                        $event.preventDefault()
                        return _vm.lihatTpCu(_vm.selectedItem.id)
                      }
                    }
                  },
                  [
                    _c("i", { staticClass: "icon-file-eye" }),
                    _vm._v(" Lihat TP/KP \n\t\t\t\t")
                  ]
                )
              : _vm._e()
          ]),
          _vm._v(" "),
          _c("template", { slot: "button-mobile" }, [
            _vm.currentUser.can && _vm.currentUser.can["update_" + _vm.kelas]
              ? _c(
                  "button",
                  {
                    staticClass: "btn btn-light btn-icon btn-block pb-1",
                    attrs: { disabled: !_vm.selectedItem.id },
                    on: {
                      click: function($event) {
                        $event.preventDefault()
                        return _vm.modalConfirmOpen("restore")
                      }
                    }
                  },
                  [
                    _c("i", { staticClass: "icon-checkbox-checked2" }),
                    _vm._v(" Aktifkan Kembali\n\t\t\t\t")
                  ]
                )
              : _vm._e(),
            _vm._v(" "),
            _vm.currentUser.can && _vm.currentUser.can["index_tp"]
              ? _c(
                  "button",
                  {
                    staticClass: "btn btn-light btn-icon btn-block pb-1",
                    attrs: {
                      disabled:
                        !_vm.selectedItem.id ||
                        _vm.selectedItem.has_tp_cu_count === 0
                    },
                    on: {
                      click: function($event) {
                        $event.preventDefault()
                        return _vm.lihatTpCu(_vm.selectedItem.id)
                      }
                    }
                  },
                  [
                    _c("i", { staticClass: "icon-file-eye" }),
                    _vm._v(" Lihat TP/KP \n\t\t\t\t")
                  ]
                )
              : _vm._e()
          ])
        ],
        2
      ),
      _vm._v(" "),
      _c("app-modal", {
        attrs: {
          show: _vm.modalShow,
          state: _vm.modalState,
          title: _vm.modalTitle,
          button: _vm.modalButton,
          content: _vm.modalContent
        },
        on: {
          tutup: _vm.modalTutup,
          confirmOk: _vm.modalConfirmOk,
          successOk: _vm.modalTutup,
          failOk: _vm.modalTutup,
          backgroundClick: _vm.modalTutup
        }
      })
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

/***/ "./resources/assets/js/views/cu/index.vue":
/*!************************************************!*\
  !*** ./resources/assets/js/views/cu/index.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_6c5411b0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=6c5411b0& */ "./resources/assets/js/views/cu/index.vue?vue&type=template&id=6c5411b0&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/assets/js/views/cu/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_6c5411b0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_6c5411b0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/views/cu/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/views/cu/index.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/assets/js/views/cu/index.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/cu/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/views/cu/index.vue?vue&type=template&id=6c5411b0&":
/*!*******************************************************************************!*\
  !*** ./resources/assets/js/views/cu/index.vue?vue&type=template&id=6c5411b0& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_6c5411b0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=6c5411b0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/cu/index.vue?vue&type=template&id=6c5411b0&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_6c5411b0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_6c5411b0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/assets/js/views/cu/table.vue":
/*!************************************************!*\
  !*** ./resources/assets/js/views/cu/table.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _table_vue_vue_type_template_id_f91da7b8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./table.vue?vue&type=template&id=f91da7b8& */ "./resources/assets/js/views/cu/table.vue?vue&type=template&id=f91da7b8&");
/* harmony import */ var _table_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./table.vue?vue&type=script&lang=js& */ "./resources/assets/js/views/cu/table.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _table_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _table_vue_vue_type_template_id_f91da7b8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _table_vue_vue_type_template_id_f91da7b8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/views/cu/table.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/views/cu/table.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/assets/js/views/cu/table.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_table_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./table.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/cu/table.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_table_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/views/cu/table.vue?vue&type=template&id=f91da7b8&":
/*!*******************************************************************************!*\
  !*** ./resources/assets/js/views/cu/table.vue?vue&type=template&id=f91da7b8& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_table_vue_vue_type_template_id_f91da7b8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./table.vue?vue&type=template&id=f91da7b8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/cu/table.vue?vue&type=template&id=f91da7b8&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_table_vue_vue_type_template_id_f91da7b8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_table_vue_vue_type_template_id_f91da7b8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/assets/js/views/cu/tableDeleted.vue":
/*!*******************************************************!*\
  !*** ./resources/assets/js/views/cu/tableDeleted.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tableDeleted_vue_vue_type_template_id_4172c705___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tableDeleted.vue?vue&type=template&id=4172c705& */ "./resources/assets/js/views/cu/tableDeleted.vue?vue&type=template&id=4172c705&");
/* harmony import */ var _tableDeleted_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tableDeleted.vue?vue&type=script&lang=js& */ "./resources/assets/js/views/cu/tableDeleted.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _tableDeleted_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _tableDeleted_vue_vue_type_template_id_4172c705___WEBPACK_IMPORTED_MODULE_0__["render"],
  _tableDeleted_vue_vue_type_template_id_4172c705___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/views/cu/tableDeleted.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/views/cu/tableDeleted.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/assets/js/views/cu/tableDeleted.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_tableDeleted_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./tableDeleted.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/cu/tableDeleted.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_tableDeleted_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/views/cu/tableDeleted.vue?vue&type=template&id=4172c705&":
/*!**************************************************************************************!*\
  !*** ./resources/assets/js/views/cu/tableDeleted.vue?vue&type=template&id=4172c705& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_tableDeleted_vue_vue_type_template_id_4172c705___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./tableDeleted.vue?vue&type=template&id=4172c705& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/cu/tableDeleted.vue?vue&type=template&id=4172c705&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_tableDeleted_vue_vue_type_template_id_4172c705___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_tableDeleted_vue_vue_type_template_id_4172c705___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);