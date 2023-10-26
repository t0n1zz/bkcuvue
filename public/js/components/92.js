(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[92],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/presensi/formPelanggaranSeragam.vue?vue&type=script&lang=js":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/views/presensi/formPelanggaranSeragam.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _components_pageHeader_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/pageHeader.vue */ "./resources/assets/js/components/pageHeader.vue");
/* harmony import */ var _components_message_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/message.vue */ "./resources/assets/js/components/message.vue");
/* harmony import */ var _components_selectCuTp_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/selectCuTp.vue */ "./resources/assets/js/components/selectCuTp.vue");
/* harmony import */ var _components_datePicker_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/datePicker.vue */ "./resources/assets/js/components/datePicker.vue");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }





/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    pageHeader: _components_pageHeader_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    message: _components_message_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    selectData: _components_selectCuTp_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    datePicker: _components_datePicker_vue__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  props: ['id', 'tipe'],
  data: function data() {
    return {
      title: 'Absen',
      kelas: 'absen',
      titleDesc: 'Mengelola QR Absen',
      titleIcon: 'icon-collaboration',
      selectCuPath: 'kelolaqr',
      tabName: 'aktif',
      kuliah: [],
      aktiv: '',
      tanggal: '',
      atribut: []
    };
  },
  created: function created() {
    if (this.tipe == 'seragamEdit') {
      this.$store.dispatch('presensi/edit', ['seragam', this.id]);
    } else {
      this.$store.dispatch('presensi/create', 'seragam');
    }
  },
  watch: {
    itemDataStat: function itemDataStat(value) {
      if (this.tipe == 'seragamEdit') {
        var a = '';
        this.atribut = [];
        for (var index = 0; index < this.form.seragam.length; index++) {
          a = {
            id: this.form.seragam[index].id,
            name: this.form.seragam[index].name
          };
          this.atribut.push(a);
        }
      }
    }
  },
  methods: {
    storeKuliah: function storeKuliah() {
      this.form.id_user = this.aktiv.id;
      this.form.id_aktivis = this.aktiv.id_aktivis;
      this.form.id_cu = this.aktiv.id_cu;
      if (this.id) {
        this.form.id_absen = this.id;
      }
      this.form.seragamName = [];
      if (this.form.seragam_kerja) {
        this.form.id_seragam_kerja = this.form.seragam_kerja.id;
      } else {
        this.form.id_seragam_kerja = null;
      }
      this.form.seragam = [];
      for (var index = 0; index < this.atribut.length; index++) {
        this.form.seragam.push(this.atribut[index].id);
        if (index == this.atribut.length - 1) {
          this.form.seragamName = this.form.seragamName + this.atribut[index].name;
        } else {
          this.form.seragamName = this.form.seragamName + this.atribut[index].name + "," + " ";
        }
      }
      this.$store.dispatch('presensi/storePelanggaranSeragam', this.form);
    },
    batal: function batal() {
      this.$emit('tutup');
    }
  },
  computed: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('auth', {
    currentUser: 'currentUser'
  })), Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('presensi', {
    itemData: 'userS',
    itemDataStat: 'dataStat',
    form: 'form'
  }))
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/presensi/tablePresensiAll.vue?vue&type=script&lang=js":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/views/presensi/tablePresensiAll.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _components_dataviewer2_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/dataviewer2.vue */ "./resources/assets/js/components/dataviewer2.vue");
/* harmony import */ var _components_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/modal */ "./resources/assets/js/components/modal.vue");
/* harmony import */ var _components_checkValue_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/checkValue.vue */ "./resources/assets/js/components/checkValue.vue");
/* harmony import */ var _formQR_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./formQR.vue */ "./resources/assets/js/views/presensi/formQR.vue");
/* harmony import */ var _select_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./select.vue */ "./resources/assets/js/views/presensi/select.vue");
/* harmony import */ var _formKuliah_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./formKuliah.vue */ "./resources/assets/js/views/presensi/formKuliah.vue");
/* harmony import */ var _formIzin_vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./formIzin.vue */ "./resources/assets/js/views/presensi/formIzin.vue");
/* harmony import */ var _uploadExcel_vue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./uploadExcel.vue */ "./resources/assets/js/views/presensi/uploadExcel.vue");
/* harmony import */ var _formPelanggaranSeragam_vue__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./formPelanggaranSeragam.vue */ "./resources/assets/js/views/presensi/formPelanggaranSeragam.vue");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/dist/FileSaver.min.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _formCuti_vue__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./formCuti.vue */ "./resources/assets/js/views/presensi/formCuti.vue");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }












/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    DataViewer: _components_dataviewer2_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    appModal: _components_modal__WEBPACK_IMPORTED_MODULE_2__["default"],
    checkValue: _components_checkValue_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    formAbsen: _formQR_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
    Select: _select_vue__WEBPACK_IMPORTED_MODULE_5__["default"],
    Kuliah: _formKuliah_vue__WEBPACK_IMPORTED_MODULE_6__["default"],
    formPelanggaranSeragam: _formPelanggaranSeragam_vue__WEBPACK_IMPORTED_MODULE_9__["default"],
    uploadExcel: _uploadExcel_vue__WEBPACK_IMPORTED_MODULE_8__["default"],
    Izin: _formIzin_vue__WEBPACK_IMPORTED_MODULE_7__["default"],
    FileSaver: file_saver__WEBPACK_IMPORTED_MODULE_10___default.a,
    Cuti: _formCuti_vue__WEBPACK_IMPORTED_MODULE_11__["default"]
  },
  props: ['title', 'kelas'],
  data: function data() {
    var _ref;
    return _ref = {
      selectedItem: [],
      query: {
        order_column: "tanggal",
        order_direction: "desc",
        filter_match: "and",
        limit: 10,
        page: 1
      },
      tabName: 'info',
      columnData: [{
        title: 'No.',
        name: 'No.'
      }, {
        title: 'Tanggal',
        name: 'tanggal',
        sort: true,
        hide: false,
        tipe: 'string',
        filter: true
      }, {
        title: 'Nama',
        name: 'aktivis.name',
        sort: true,
        hide: false,
        tipe: 'string',
        filter: true,
        filterDefault: true
      }, {
        title: 'Seragam',
        name: 'seragam_kerja.seragam_name',
        sort: false,
        hide: true,
        tipe: "string"
      }, {
        title: 'Kegiatan',
        name: 'kegiatan',
        sort: true,
        hide: true,
        tipe: 'string'
      }, {
        title: 'Jenis',
        name: 'jenis',
        sort: true,
        hide: false,
        tipe: 'string'
      }, {
        title: 'Alasan',
        name: 'alasan',
        sort: false,
        hide: false,
        tipe: "string"
      }, {
        title: 'Lama(Menit)',
        name: 'lama',
        sort: false,
        hide: false,
        tipe: "string"
      }, {
        title: 'Jam Masuk',
        name: 'jam_masuk',
        sort: false,
        hide: true,
        tipe: "string"
      }, {
        title: 'Jam Pulang',
        name: 'jam_pulang',
        sort: false,
        hide: true,
        tipe: "string"
      }, {
        title: 'Tanggal Mulai',
        name: 'tanggal_mulai',
        sort: true,
        filter: true,
        hide: true,
        tipe: 'string'
      }, {
        title: 'Tanggal Masuk',
        name: 'tanggal_selesai',
        sort: true,
        hide: true,
        filter: true,
        tipe: 'string'
      }, {
        title: 'Lama (Hari)',
        name: 'lama',
        sort: true,
        hide: true,
        tipe: 'string'
      }, {
        title: 'Alasan Penolakan',
        name: 'alasan_penolakan',
        sort: false,
        hide: true,
        tipe: "string"
      }, {
        title: 'Status Persetujuan',
        name: 'status_persetujuan',
        sort: false,
        hide: true,
        tipe: "string"
      }, {
        title: 'Tgl. / Waktu Buat',
        name: 'created_at',
        tipe: 'datetime',
        sort: true,
        hide: false
      }, {
        title: 'Tgl. / Waktu Ubah',
        name: 'updated_at',
        tipe: 'datetime',
        sort: true,
        hide: false
      }],
      state: '',
      modalShow: false,
      modalState: '',
      modalTitle: '',
      modalContent: '',
      modalButton: '',
      // kelas: 'absen',
      modalSize: '',
      modalColor: '',
      tahun: '',
      bulan: '',
      jenis: '',
      alasan: '',
      today: ''
    }, _defineProperty(_ref, "tabName", 'keterlambatan'), _defineProperty(_ref, "tipe", ''), _defineProperty(_ref, "flag", false), _defineProperty(_ref, "laporan", false), _defineProperty(_ref, "tahun", '2023'), _ref;
  },
  created: function created() {
    this.checkUser('personalia_akses', this.$route.params.cu);
    this.fetch(this.query);
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    this.today = yyyy + '-' + mm + '-' + dd;
    this.$store.dispatch('presensi/getUsers', this.currentUser.id_cu);
  },
  watch: {
    // check route changes
    '$route': function $route(to, from) {
      this.fetch(this.query);
    },
    // when updating data
    updateStat: function updateStat(value) {
      this.modalState = value;
      this.modalButton = 'Ok';
      if (value == "success") {
        this.modalTitle = this.updateMessage;
        this.modalContent = '';
        this.fetch();
      } else if (value == "fail") {
        this.modalContent = this.updateMessage;
      } else {
        this.modalContent = '';
      }
    },
    qrstat: function qrstat(value) {
      this.modalState = value;
      this.modalButton = 'Ok';
      if (value == "success") {
        this.modalTitle = this.pesan;
        this.modalContent = '';
        this.fetch();
      } else if (value == "fail") {
        this.modalContent = this.pesan;
      } else {
        this.modalContent = '';
      }
    }
  },
  methods: {
    downloadLaporan: function downloadLaporan(tipe) {
      var _this = this;
      this.modalShow = true;
      this.modalState = 'loading';
      axios.post('/api/downloadLaporanPresensi', {
        tipe: tipe,
        periode: this.tahun
      }, {
        responseType: 'blob'
      }).then(function (response) {
        var name = '';
        if (tipe == 1) {
          name = 'Laporan Konsolidasi Bulanan';
        } else {
          name = 'Form Kehadiran Kerja Manajemen Konsolidasi';
        }
        file_saver__WEBPACK_IMPORTED_MODULE_10___default.a.saveAs(response.data, name + '.xlsx');
        _this.modalState = 'success';
        _this.modalTitle = 'Berhasil Di Download';
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
    changeTab: function changeTab(value) {
      this.selectedItem = [];
      if (value == 'keterlambatan' || value == 'keluarjamkantor') {
        this.query2();
        this.columnData[1].hide = false;
        this.columnData[3].hide = true;
        this.columnData[4].hide = true;
        this.columnData[5].hide = false;
        this.columnData[6].hide = false;
        this.columnData[7].hide = false;
        this.columnData[8].hide = true;
        this.columnData[9].hide = true;
        this.columnData[10].hide = true;
        this.columnData[11].hide = true;
        this.columnData[12].hide = true;
        this.columnData[13].hide = true;
        this.columnData[14].hide = true;
      } else if (value == 'pulangawal') {
        this.query2();
        this.columnData[1].hide = false;
        this.columnData[3].hide = true;
        this.columnData[4].hide = true;
        this.columnData[5].hide = false;
        this.columnData[6].hide = false;
        this.columnData[7].hide = true;
        this.columnData[8].hide = true;
        this.columnData[9].hide = false;
        this.columnData[10].hide = true;
        this.columnData[11].hide = true;
        this.columnData[12].hide = true;
        this.columnData[13].hide = true;
        this.columnData[14].hide = true;
      } else if (value == 'kegiatan') {
        this.query2();
        this.columnData[1].hide = false;
        this.columnData[3].hide = true;
        this.columnData[4].hide = false;
        this.columnData[5].hide = true;
        this.columnData[6].hide = true;
        this.columnData[7].hide = true;
        this.columnData[8].hide = false;
        this.columnData[9].hide = false;
        this.columnData[10].hide = true;
        this.columnData[11].hide = true;
        this.columnData[12].hide = true;
        this.columnData[13].hide = true;
        this.columnData[14].hide = true;
      } else if (value == 'masukkantor') {
        this.query2();
        this.columnData[1].hide = false;
        this.columnData[3].hide = true;
        this.columnData[4].hide = true;
        this.columnData[5].hide = true;
        this.columnData[6].hide = true;
        this.columnData[7].hide = true;
        this.columnData[8].hide = false;
        this.columnData[9].hide = false;
        this.columnData[10].hide = true;
        this.columnData[11].hide = true;
        this.columnData[12].hide = true;
        this.columnData[13].hide = true;
        this.columnData[14].hide = true;
      } else if (value == 'kuliah' || value == 'off' || value == 'alpha') {
        this.query2();
        this.columnData[1].hide = false;
        this.columnData[3].hide = true;
        this.columnData[4].hide = true;
        this.columnData[5].hide = true;
        this.columnData[6].hide = true;
        this.columnData[7].hide = true;
        this.columnData[8].hide = true;
        this.columnData[9].hide = true;
        this.columnData[10].hide = true;
        this.columnData[11].hide = true;
        this.columnData[12].hide = true;
        this.columnData[13].hide = true;
        this.columnData[14].hide = true;
      } else if (value == 'seragam') {
        this.query2();
        this.columnData[1].hide = false;
        this.columnData[3].hide = false;
        this.columnData[4].hide = true;
        this.columnData[5].hide = true;
        this.columnData[6].hide = true;
        this.columnData[7].hide = true;
        this.columnData[8].hide = true;
        this.columnData[9].hide = true;
        this.columnData[10].hide = true;
        this.columnData[11].hide = true;
        this.columnData[12].hide = true;
        this.columnData[13].hide = true;
        this.columnData[14].hide = true;
      } else if (value == 'izin' || value == 'sakit') {
        this.query1();
        this.columnData[1].hide = true;
        this.columnData[3].hide = true;
        this.columnData[4].hide = true;
        this.columnData[5].hide = true;
        this.columnData[6].hide = false;
        this.columnData[7].hide = true;
        this.columnData[8].hide = true;
        this.columnData[9].hide = true;
        this.columnData[10].hide = false;
        this.columnData[11].hide = false;
        this.columnData[12].hide = false;
        this.columnData[13].hide = true;
        this.columnData[14].hide = true;
      } else if (value == 'cuti') {
        this.query2();
        this.columnData[1].hide = false;
        this.columnData[3].hide = true;
        this.columnData[4].hide = true;
        this.columnData[5].hide = true;
        this.columnData[6].hide = false;
        this.columnData[7].hide = true;
        this.columnData[8].hide = true;
        this.columnData[9].hide = true;
        this.columnData[10].hide = false;
        this.columnData[11].hide = false;
        this.columnData[12].hide = false;
        this.columnData[13].hide = false;
        this.columnData[14].hide = false;
      }
      this.tabName = value;
      this.$store.dispatch('presensi/indexPresensi', [this.query, this.tahun, this.bulan, this.tabName, 'semua']);
    },
    fetch: function fetch(p) {
      this.tahun = this.$route.params.tahun;
      this.bulan = this.$route.params.bulan;
      this.$store.dispatch('presensi/indexPresensi', [p, this.tahun, this.bulan, this.tabName, 'semua']);
    },
    selectedRow: function selectedRow(item) {
      this.selectedItem = item;
    },
    query1: function query1() {
      this.query = {
        order_column: "tanggal_mulai",
        order_direction: "desc",
        filter_match: "and",
        limit: 10,
        page: 1
      };
    },
    query2: function query2() {
      this.query = {
        order_column: "tanggal",
        order_direction: "desc",
        filter_match: "and",
        limit: 10,
        page: 1
      };
    },
    modalConfirmOpen: function modalConfirmOpen(state) {
      this.modalShow = true;
      this.modalState = 'confirm-tutup';
      this.state = state;
      if (state == 'hapus') {
        this.modalTitle = 'Hapus Data?';
        this.modalButton = 'Iya, Hapus';
      }
    },
    modalOpen: function modalOpen(state) {
      if (state == 'terlambat' || state == 'pulangawal' || state == 'keluarkantor' || state == 'laporan') {
        if (state == 'laporan') {
          this.laporan = true;
          this.modalTitle = 'Download Laporan Presensi';
        } else {
          this.laporan = false;
          this.modalTitle = 'Tambah ';
        }
        this.alasan = this.selectedItem.alasan;
        this.jenis = this.selectedItem.jenis;
        this.modalShow = true;
        this.modalSize = '';
        this.isDisableTable = true;
        this.modalState = 'normal1';
        this.modalColor = 'bg-primary';
        this.modalSize = 'modal-md';
        this.formModalMode = 'create';
      } else if (state == 'kuliah' || state == 'off2') {
        this.alasan = this.selectedItem.alasan;
        this.jenis = this.selectedItem.jenis;
        this.modalShow = true;
        this.modalSize = '';
        this.isDisableTable = true;
        this.modalState = 'normal2';
        this.modalColor = 'bg-primary';
        if (state == 'kuliah') {
          this.modalTitle = 'Tambah Aktivis Kuliah';
        } else {
          this.modalTitle = 'Tambah Aktivis Off Bergilir';
        }
        this.modalSize = 'modal-md';
        this.formModalMode = 'create';
      } else if (state == 'seragam' || state == 'seragamEdit') {
        this.tipe = state;
        this.modalShow = true;
        this.modalSize = '';
        this.isDisableTable = true;
        this.modalState = 'normal3';
        this.modalColor = 'bg-primary';
        this.modalTitle = 'Pelanggaran Seragam dan Atribut Kerja';
        this.modalSize = 'modal-md';
        this.formModalMode = 'create';
      } else if (state == 'off') {
        this.modalShow = true;
        this.modalSize = '';
        this.isDisableTable = true;
        this.modalState = 'normal4';
        this.modalColor = 'bg-primary';
        this.modalTitle = 'Upload Data Off Bergilir';
        this.modalSize = 'modal-md';
        this.formModalMode = 'create';
      } else if (state == 'izin' || state == 'sakit' || state == 'izinEdit' || state == 'sakitEdit' || state == 'kegiatan') {
        if (state == 'izinEdit' || state == 'sakitEdit') {
          this.flag = true;
        } else {
          this.flag = false;
        }
        this.modalShow = true;
        this.modalSize = '';
        this.isDisableTable = true;
        this.modalState = 'normal4';
        this.modalColor = 'bg-primary';
        if (state == 'kegiatan') {
          this.modalTitle = 'Kegiatan Kantor';
        } else {
          this.modalTitle = 'Izin/Sakit';
        }
        this.modalSize = 'modal-md';
        this.formModalMode = 'create';
      } else if (state == 'cutiEdit') {
        this.mode = state;
        this.modalShow = true;
        this.modalSize = '';
        this.isDisableTable = true;
        this.modalState = 'normal3';
        this.modalColor = 'bg-primary';
        this.modalTitle = 'Cuti';
        this.modalSize = 'modal-md';
        this.formModalMode = 'create';
      }
    },
    modalTutup: function modalTutup() {
      this.modalShow = false;
    },
    updateAlasan: function updateAlasan() {
      this.formUpdate.id = this.selectedItem.id;
      this.formUpdate.alasan = this.alasan;
      this.formUpdate.jenis = this.jenis;
      this.$store.dispatch('presensi/updateAlasan', [this.formUpdate, this.tabName]);
    },
    modalConfirmOk: function modalConfirmOk() {
      if (this.state == 'hapus') {
        if (this.tabName == 'seragam') {
          this.$store.dispatch('presensi/destroy', [this.selectedItem.seragam_kerja.id, this.tabName]);
        } else {
          this.$store.dispatch('presensi/destroy', [this.selectedItem.id, this.tabName]);
        }
      }
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
  computed: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('auth', {
    currentUser: 'currentUser'
  })), Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('presensi', {
    itemData: 'terlambatS',
    itemDataStat: 'terlambatStat',
    updateMessage: 'updateMessage',
    updateStat: 'updateStat',
    qrstat: 'qrStat',
    pesan: 'message',
    statS: 'dataStatS',
    formUpdate: 'formUpdateAlasan'
  }))
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/presensi/uploadExcel.vue?vue&type=script&lang=js":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/views/presensi/uploadExcel.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _components_pageHeader_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/pageHeader.vue */ "./resources/assets/js/components/pageHeader.vue");
/* harmony import */ var _components_message_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/message.vue */ "./resources/assets/js/components/message.vue");
/* harmony import */ var _components_selectCuTp_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/selectCuTp.vue */ "./resources/assets/js/components/selectCuTp.vue");
/* harmony import */ var _components_datePicker_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/datePicker.vue */ "./resources/assets/js/components/datePicker.vue");
/* harmony import */ var _helpers_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../helpers/form */ "./resources/assets/js/helpers/form.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/dist/FileSaver.min.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_6__);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }







/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    pageHeader: _components_pageHeader_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    message: _components_message_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    selectData: _components_selectCuTp_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    datePicker: _components_datePicker_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
    FileSaver: file_saver__WEBPACK_IMPORTED_MODULE_6___default.a
  },
  data: function data() {
    return {};
  },
  created: function created() {},
  methods: {
    storeFile: function storeFile() {
      var formData = Object(_helpers_form__WEBPACK_IMPORTED_MODULE_5__["toMulipartedForm"])(this.form, this.$route.meta.mode);
      this.$store.dispatch('presensi/uploadOffBergilir', ['off', formData]);
    },
    batal: function batal() {
      this.$emit('tutup');
    },
    upload: function upload(event) {
      this.form.file = null;
      this.form.file = event.files[0];
    },
    download: function download() {
      var _this = this;
      axios.post('/api/downloadTemplate', {
        id_cu: this.currentUser.id_cu
      }, {
        responseType: 'blob'
      }).then(function (response) {
        file_saver__WEBPACK_IMPORTED_MODULE_6___default.a.saveAs(response.data, 'Template Upload Data Off Bergilir.xlsx');
        _this.modalState = 'success';
        _this.modalTitle = 'Berhasil Di Download';
      });
    }
  },
  computed: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('auth', {
    currentUser: 'currentUser'
  })), Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('presensi', {
    itemData: 'userS',
    itemDataStat: 'dataStatS',
    form: 'formFile'
  }))
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/presensi/formPelanggaranSeragam.vue?vue&type=template&id=a240031e":
/*!*****************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/views/presensi/formPelanggaranSeragam.vue?vue&type=template&id=a240031e ***!
  \*****************************************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "col-md-12"
  }, [_vm.tipe == "seragam" ? _c("h5", [_vm._v("Pilih Aktivis :")]) : _vm._e(), _vm._v(" "), _vm.tipe == "seragam" ? _c("div", [_c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.aktiv,
      expression: "aktiv"
    }],
    staticClass: "form-control",
    attrs: {
      "data-width": "100%"
    },
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.aktiv = $event.target.multiple ? $$selectedVal : $$selectedVal[0];
      }
    }
  }, [_c("option", {
    attrs: {
      disabled: "true",
      value: ""
    }
  }, [_vm._v("PILIH AKTIVIS")]), _vm._v(" "), _vm._l(_vm.itemData, function (user, index) {
    return _c("option", {
      key: index,
      domProps: {
        value: {
          id: user.id,
          name: user.name,
          gambar: user.gambar,
          id_cu: user.id_cu,
          id_aktivis: user.id_aktivis
        }
      }
    }, [_vm._v(_vm._s(user.name))]);
  })], 2)]) : _vm._e(), _vm._v(" "), _vm.tipe == "seragam" ? _c("div", {
    staticStyle: {
      "margin-top": "10px"
    }
  }, [_c("h5", [_vm._v("Tanggal :")]), _vm._v(" "), _c("date-picker", {
    attrs: {
      defaultDate: _vm.tanggal
    },
    on: {
      dateSelected: function dateSelected($event) {
        _vm.tanggal = $event;
      }
    }
  })], 1) : _vm._e(), _vm._v(" "), _vm.tipe == "seragam" ? _c("div", {
    staticClass: "text-center",
    staticStyle: {
      "margin-top": "10px"
    }
  }, [_vm.aktiv.gambar ? _c("img", {
    staticClass: "img-rounded img-fluid wmin-sm",
    attrs: {
      src: "/images/" + "aktivis" + "/" + _vm.aktiv.gambar + "n.jpg"
    }
  }) : _c("img", {
    staticClass: "img-rounded img-fluid wmin-sm",
    attrs: {
      src: "/images/no_image_man.jpg"
    }
  }), _vm._v(" "), _c("h2", [_vm._v(_vm._s(_vm.aktiv.name))])]) : _vm._e(), _vm._v(" "), _vm.tipe == "seragamEdit" ? _c("h1", [_vm._v(_vm._s(_vm.form.name))]) : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "col-md-9",
    staticStyle: {
      "margin-top": "10px"
    }
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("h5", [_vm._v("Pilih Atribut Yang Dilanggar: ")]), _vm._v(" "), _c("div", {
    staticClass: "form-check form-check-inline"
  }, [_c("label", {
    staticClass: "form-check-label"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.atribut,
      expression: "atribut"
    }],
    staticClass: "form-check-input",
    attrs: {
      type: "checkbox"
    },
    domProps: {
      value: {
        id: 1,
        name: "PAKAIAN"
      },
      checked: Array.isArray(_vm.atribut) ? _vm._i(_vm.atribut, {
        id: 1,
        name: "PAKAIAN"
      }) > -1 : _vm.atribut
    },
    on: {
      change: function change($event) {
        var $$a = _vm.atribut,
          $$el = $event.target,
          $$c = $$el.checked ? true : false;
        if (Array.isArray($$a)) {
          var $$v = {
              id: 1,
              name: "PAKAIAN"
            },
            $$i = _vm._i($$a, $$v);
          if ($$el.checked) {
            $$i < 0 && (_vm.atribut = $$a.concat([$$v]));
          } else {
            $$i > -1 && (_vm.atribut = $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
          }
        } else {
          _vm.atribut = $$c;
        }
      }
    }
  }), _vm._v("\n                    PAKAIAN\n                ")])]), _vm._v(" "), _c("div", {
    staticClass: "form-check form-check-inline"
  }, [_c("label", {
    staticClass: "form-check-label"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.atribut,
      expression: "atribut"
    }],
    staticClass: "form-check-input",
    attrs: {
      type: "checkbox"
    },
    domProps: {
      value: {
        id: 2,
        name: "SEPATU"
      },
      checked: Array.isArray(_vm.atribut) ? _vm._i(_vm.atribut, {
        id: 2,
        name: "SEPATU"
      }) > -1 : _vm.atribut
    },
    on: {
      change: function change($event) {
        var $$a = _vm.atribut,
          $$el = $event.target,
          $$c = $$el.checked ? true : false;
        if (Array.isArray($$a)) {
          var $$v = {
              id: 2,
              name: "SEPATU"
            },
            $$i = _vm._i($$a, $$v);
          if ($$el.checked) {
            $$i < 0 && (_vm.atribut = $$a.concat([$$v]));
          } else {
            $$i > -1 && (_vm.atribut = $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
          }
        } else {
          _vm.atribut = $$c;
        }
      }
    }
  }), _vm._v("\n                    SEPATU\n                ")])]), _vm._v(" "), _c("div", {
    staticClass: "form-check form-check-inline"
  }, [_c("label", {
    staticClass: "form-check-label"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.atribut,
      expression: "atribut"
    }],
    staticClass: "form-check-input",
    attrs: {
      type: "checkbox"
    },
    domProps: {
      value: {
        id: 3,
        name: "NAME TAG"
      },
      checked: Array.isArray(_vm.atribut) ? _vm._i(_vm.atribut, {
        id: 3,
        name: "NAME TAG"
      }) > -1 : _vm.atribut
    },
    on: {
      change: function change($event) {
        var $$a = _vm.atribut,
          $$el = $event.target,
          $$c = $$el.checked ? true : false;
        if (Array.isArray($$a)) {
          var $$v = {
              id: 3,
              name: "NAME TAG"
            },
            $$i = _vm._i($$a, $$v);
          if ($$el.checked) {
            $$i < 0 && (_vm.atribut = $$a.concat([$$v]));
          } else {
            $$i > -1 && (_vm.atribut = $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
          }
        } else {
          _vm.atribut = $$c;
        }
      }
    }
  }), _vm._v("\n                    NAME TAG\n                ")])]), _vm._v(" "), _c("div", {
    staticClass: "form-check form-check-inline"
  }, [_c("label", {
    staticClass: "form-check-label"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.atribut,
      expression: "atribut"
    }],
    staticClass: "form-check-input",
    attrs: {
      type: "checkbox"
    },
    domProps: {
      value: {
        id: 4,
        name: "IKAT PINGGANG"
      },
      checked: Array.isArray(_vm.atribut) ? _vm._i(_vm.atribut, {
        id: 4,
        name: "IKAT PINGGANG"
      }) > -1 : _vm.atribut
    },
    on: {
      change: function change($event) {
        var $$a = _vm.atribut,
          $$el = $event.target,
          $$c = $$el.checked ? true : false;
        if (Array.isArray($$a)) {
          var $$v = {
              id: 4,
              name: "IKAT PINGGANG"
            },
            $$i = _vm._i($$a, $$v);
          if ($$el.checked) {
            $$i < 0 && (_vm.atribut = $$a.concat([$$v]));
          } else {
            $$i > -1 && (_vm.atribut = $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
          }
        } else {
          _vm.atribut = $$c;
        }
      }
    }
  }), _vm._v("\n                    IKAT PINGGANG\n                ")])])])]), _vm._v(" "), _c("div", {
    staticClass: "text-center",
    staticStyle: {
      "margin-top": "10px"
    }
  }, [_c("button", {
    staticClass: "btn btn-warning",
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.batal.apply(null, arguments);
      }
    }
  }, [_c("i", {
    staticClass: "icon-x"
  }), _vm._v("Batal")]), _vm._v(" "), _c("button", {
    staticClass: "btn btn-primary",
    attrs: {
      disabled: _vm.atribut.length <= 0 || !_vm.aktiv && _vm.form.length <= 0,
      type: "submit",
      value: "submit"
    },
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.storeKuliah.apply(null, arguments);
      }
    }
  }, [_c("i", {
    staticClass: "icon-floppy-disk"
  }), _vm._v("Simpan")])])]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/presensi/tablePresensiAll.vue?vue&type=template&id=119152fe":
/*!***********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/views/presensi/tablePresensiAll.vue?vue&type=template&id=119152fe ***!
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
  return _c("div", [_c("Select", {
    attrs: {
      kelas: "semua"
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "card"
  }, [_c("div", {
    staticClass: "nav-tabs-responsive"
  }, [_c("ul", {
    staticClass: "nav nav-tabs nav-tabs-solid bg-light"
  }, [_c("li", {
    staticClass: "nav-item"
  }, [_c("a", {
    staticClass: "nav-link",
    "class": {
      active: _vm.tabName == "keterlambatan"
    },
    attrs: {
      href: "#"
    },
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.changeTab("keterlambatan");
      }
    }
  }, [_vm._v("\n\t\t\t\t\t\tKETERLAMBATAN\n\t\t\t\t\t")])]), _vm._v(" "), _c("li", {
    staticClass: "nav-item"
  }, [_c("a", {
    staticClass: "nav-link",
    "class": {
      active: _vm.tabName == "pulangawal"
    },
    attrs: {
      href: "#"
    },
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.changeTab("pulangawal");
      }
    }
  }, [_vm._v("\n\t\t\t\t\t\tPULANG AWAL\n\t\t\t\t\t")])]), _vm._v(" "), _c("li", {
    staticClass: "nav-item"
  }, [_c("a", {
    staticClass: "nav-link",
    "class": {
      active: _vm.tabName == "keluarjamkantor"
    },
    attrs: {
      href: "#"
    },
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.changeTab("keluarjamkantor");
      }
    }
  }, [_vm._v("\n\t\t\t\t\t\tKELUAR JAM KANTOR\n\t\t\t\t\t")])]), _vm._v(" "), _c("li", {
    staticClass: "nav-item"
  }, [_c("a", {
    staticClass: "nav-link",
    "class": {
      active: _vm.tabName == "kegiatan"
    },
    attrs: {
      href: "#"
    },
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.changeTab("kegiatan");
      }
    }
  }, [_vm._v("\n\t\t\t\t\t\tKEGIATAN\n\t\t\t\t\t")])]), _vm._v(" "), _c("li", {
    staticClass: "nav-item"
  }, [_c("a", {
    staticClass: "nav-link",
    "class": {
      active: _vm.tabName == "masukkantor"
    },
    attrs: {
      href: "#"
    },
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.changeTab("masukkantor");
      }
    }
  }, [_vm._v("\n\t\t\t\t\t\tMASUK KANTOR\n\t\t\t\t\t")])]), _vm._v(" "), _c("li", {
    staticClass: "nav-item"
  }, [_c("a", {
    staticClass: "nav-link",
    "class": {
      active: _vm.tabName == "alpha"
    },
    attrs: {
      href: "#"
    },
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.changeTab("alpha");
      }
    }
  }, [_vm._v("\n\t\t\t\t\t\tALPHA\n\t\t\t\t\t")])]), _vm._v(" "), _c("li", {
    staticClass: "nav-item"
  }, [_c("a", {
    staticClass: "nav-link",
    "class": {
      active: _vm.tabName == "kuliah"
    },
    attrs: {
      href: "#"
    },
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.changeTab("kuliah");
      }
    }
  }, [_vm._v("\n\t\t\t\t\t\tKULIAH\n\t\t\t\t\t")])]), _vm._v(" "), _c("li", {
    staticClass: "nav-item"
  }, [_c("a", {
    staticClass: "nav-link",
    "class": {
      active: _vm.tabName == "off"
    },
    attrs: {
      href: "#"
    },
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.changeTab("off");
      }
    }
  }, [_vm._v("\n\t\t\t\t\t\tOFF BERGILIR\n\t\t\t\t\t")])]), _vm._v(" "), _c("li", {
    staticClass: "nav-item"
  }, [_c("a", {
    staticClass: "nav-link",
    "class": {
      active: _vm.tabName == "izin"
    },
    attrs: {
      href: "#"
    },
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.changeTab("izin");
      }
    }
  }, [_vm._v("\n\t\t\t\t\t\tIZIN\n\t\t\t\t\t")])]), _vm._v(" "), _c("li", {
    staticClass: "nav-item"
  }, [_c("a", {
    staticClass: "nav-link",
    "class": {
      active: _vm.tabName == "sakit"
    },
    attrs: {
      href: "#"
    },
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.changeTab("sakit");
      }
    }
  }, [_vm._v("\n\t\t\t\t\t\tSAKIT\n\t\t\t\t\t")])]), _vm._v(" "), _c("li", {
    staticClass: "nav-item"
  }, [_c("a", {
    staticClass: "nav-link",
    "class": {
      active: _vm.tabName == "cuti"
    },
    attrs: {
      href: "#"
    },
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.changeTab("cuti");
      }
    }
  }, [_vm._v("\n\t\t\t\t\t\tCUTI\n\t\t\t\t\t")])]), _vm._v(" "), _c("li", {
    staticClass: "nav-item"
  }, [_c("a", {
    staticClass: "nav-link",
    "class": {
      active: _vm.tabName == "seragam"
    },
    attrs: {
      href: "#"
    },
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.changeTab("seragam");
      }
    }
  }, [_vm._v("\n\t\t\t\t\t\tSERAGAM KERJA\n\t\t\t\t\t")])])])])]), _vm._v(" "), _c("data-viewer", {
    attrs: {
      title: _vm.title,
      columnData: _vm.columnData,
      itemData: _vm.itemData,
      query: _vm.query,
      itemDataStat: _vm.itemDataStat,
      isNoKolom: true,
      isNoExcel: true
    },
    on: {
      fetch: _vm.fetch
    },
    scopedSlots: _vm._u([{
      key: "item-desktop",
      fn: function fn(props) {
        return [_c("tr", {
          staticClass: "text-nowrap",
          "class": {
            "bg-info": _vm.selectedItem.id == props.item.id
          },
          on: {
            click: function click($event) {
              return _vm.selectedRow(props.item);
            }
          }
        }, [!_vm.columnData[0].hide ? _c("td", [_vm._v("\n\t\t\t\t\t" + _vm._s(props.index + 1 + (+_vm.itemData.current_page - 1) * +_vm.itemData.per_page + ".") + "\n\t\t\t\t")]) : _vm._e(), _vm._v(" "), !_vm.columnData[1].hide ? _c("td", [_c("check-value", {
          attrs: {
            value: _vm.$options.filters.date(props.item.tanggal)
          }
        })], 1) : _vm._e(), _vm._v(" "), !_vm.columnData[2].hide ? _c("td", [_c("check-value", {
          attrs: {
            value: props.item.aktivis.name
          }
        })], 1) : _vm._e(), _vm._v(" "), !_vm.columnData[3].hide && props.item.seragam_kerja ? _c("td", [_c("check-value", {
          attrs: {
            value: props.item.seragam_kerja.seragam_name
          }
        })], 1) : !_vm.columnData[3].hide && !props.item.seragam_kerja ? _c("td", [_c("check-value", {
          attrs: {
            value: "-"
          }
        })], 1) : _vm._e(), _vm._v(" "), !_vm.columnData[4].hide && props.item.kegiatan ? _c("td", [_c("check-value", {
          attrs: {
            value: props.item.kegiatan.name
          }
        })], 1) : !_vm.columnData[4].hide && !props.item.kegiatan ? _c("td", [_c("check-value", {
          attrs: {
            value: props.item.kegiatan_name
          }
        })], 1) : _vm._e(), _vm._v(" "), !_vm.columnData[5].hide ? _c("td", [_c("check-value", {
          attrs: {
            value: props.item.jenis
          }
        })], 1) : _vm._e(), _vm._v(" "), !_vm.columnData[6].hide ? _c("td", [_c("check-value", {
          attrs: {
            value: props.item.alasan
          }
        })], 1) : _vm._e(), _vm._v(" "), !_vm.columnData[7].hide ? _c("td", [_c("check-value", {
          attrs: {
            value: props.item.lama
          }
        })], 1) : _vm._e(), _vm._v(" "), !_vm.columnData[8].hide && _vm.tabName == "kegiatan" ? _c("td", [_c("check-value", {
          attrs: {
            value: "-"
          }
        })], 1) : !_vm.columnData[8].hide ? _c("td", [_c("check-value", {
          attrs: {
            value: props.item.jam_masuk
          }
        })], 1) : _vm._e(), _vm._v(" "), !_vm.columnData[9].hide ? _c("td", [_c("check-value", {
          attrs: {
            value: props.item.jam_pulang
          }
        })], 1) : _vm._e(), _vm._v(" "), !_vm.columnData[10].hide ? _c("td", [_c("check-value", {
          attrs: {
            value: _vm.$options.filters.date(props.item.tanggal_mulai)
          }
        })], 1) : _vm._e(), _vm._v(" "), !_vm.columnData[11].hide && props.item.tanggal_selesai ? _c("td", [_c("check-value", {
          attrs: {
            value: _vm.$options.filters.date(props.item.tanggal_selesai)
          }
        })], 1) : _vm._e(), _vm._v(" "), !_vm.columnData[11].hide && !props.item.tanggal_selesai ? _c("td", [_c("check-value", {
          attrs: {
            value: "-"
          }
        })], 1) : _vm._e(), _vm._v(" "), !_vm.columnData[12].hide ? _c("td", [_c("check-value", {
          attrs: {
            value: props.item.lama
          }
        })], 1) : _vm._e(), _vm._v(" "), !_vm.columnData[13].hide ? _c("td", [_c("check-value", {
          attrs: {
            value: props.item.alasan_penolakan
          }
        })], 1) : _vm._e(), _vm._v(" "), !_vm.columnData[14].hide && !props.item.tanggal_acc1 ? _c("td", [_c("check-value", {
          attrs: {
            value: "Menunggu Persetujuan Atasan"
          }
        })], 1) : !_vm.columnData[14].hide && !props.item.tanggal_acc2 && props.item.tanggal_acc1 ? _c("td", [_c("check-value", {
          attrs: {
            value: "Menunggu Persetujuan Personalia"
          }
        })], 1) : !_vm.columnData[14].hide && props.item.tanggal_acc2 && props.item.tanggal_acc1 && !props.item.alasan_penolakan ? _c("td", [_c("check-value", {
          attrs: {
            value: "Cuti Disetujui"
          }
        })], 1) : !_vm.columnData[14].hide && props.item.tanggal_acc2 && props.item.tanggal_acc1 && props.item.alasan_penolakan ? _c("td", [_c("check-value", {
          attrs: {
            value: "Cuti Ditolak"
          }
        })], 1) : _vm._e(), _vm._v(" "), !_vm.columnData[15].hide ? _c("td", {
          domProps: {
            innerHTML: _vm._s(_vm.$options.filters.dateTime(props.item.created_at))
          }
        }) : _vm._e(), _vm._v(" "), !_vm.columnData[16].hide ? _c("td", [props.item.created_at !== props.item.updated_at ? _c("span", {
          domProps: {
            innerHTML: _vm._s(_vm.$options.filters.dateTime(props.item.updated_at))
          }
        }) : _c("span", [_vm._v("-")])]) : _vm._e()])];
      }
    }])
  }, [_c("template", {
    slot: "button-desktop"
  }, [_vm.tabName == "keterlambatan" ? _c("button", {
    staticClass: "btn btn-light mb-1",
    attrs: {
      disabled: _vm.today != _vm.selectedItem.tanggal
    },
    on: {
      click: function click($event) {
        return _vm.modalOpen("terlambat");
      }
    }
  }, [_c("i", {
    staticClass: "icon-pencil5"
  }), _vm._v("Ubah\n\t\t\t")]) : _vm._e(), _vm._v(" "), _vm.tabName == "pulangawal" ? _c("button", {
    staticClass: "btn btn-light mb-1",
    attrs: {
      disabled: _vm.selectedItem == "" || _vm.today != _vm.selectedItem.tanggal
    },
    on: {
      click: function click($event) {
        return _vm.modalOpen("pulangawal");
      }
    }
  }, [_c("i", {
    staticClass: "icon-pencil5"
  }), _vm._v("\n\t\t\t\tUbah\n\t\t\t")]) : _vm._e(), _vm._v(" "), _vm.tabName == "keluarjamkantor" ? _c("button", {
    staticClass: "btn btn-light mb-1",
    attrs: {
      disabled: _vm.selectedItem == "" || _vm.today != _vm.selectedItem.tanggal
    },
    on: {
      click: function click($event) {
        return _vm.modalOpen("keluarkantor");
      }
    }
  }, [_c("i", {
    staticClass: "icon-pencil5"
  }), _vm._v("\n\t\t\t\tUbah\n\t\t\t")]) : _vm._e(), _vm._v(" "), _vm.tabName == "izin" ? _c("button", {
    staticClass: "btn btn-light mb-1",
    on: {
      click: function click($event) {
        return _vm.modalOpen("izin");
      }
    }
  }, [_c("i", {
    staticClass: "icon-plus3"
  }), _vm._v("Tambah\n\t\t\t")]) : _vm._e(), _vm._v(" "), _vm.tabName == "kegiatan" ? _c("button", {
    staticClass: "btn btn-light mb-1",
    on: {
      click: function click($event) {
        return _vm.modalOpen("kegiatan");
      }
    }
  }, [_c("i", {
    staticClass: "icon-plus3"
  }), _vm._v("Tambah\n\t\t\t")]) : _vm._e(), _vm._v(" "), _vm.tabName == "sakit" ? _c("button", {
    staticClass: "btn btn-light mb-1",
    on: {
      click: function click($event) {
        return _vm.modalOpen("sakit");
      }
    }
  }, [_c("i", {
    staticClass: "icon-plus3"
  }), _vm._v("Tambah\n\t\t\t")]) : _vm._e(), _vm._v(" "), _vm.tabName == "izin" ? _c("button", {
    staticClass: "btn btn-light mb-1",
    attrs: {
      disabled: _vm.selectedItem == ""
    },
    on: {
      click: function click($event) {
        return _vm.modalOpen("izinEdit");
      }
    }
  }, [_c("i", {
    staticClass: "icon-pencil5"
  }), _vm._v("Ubah\n\t\t\t")]) : _vm._e(), _vm._v(" "), _vm.tabName == "sakit" ? _c("button", {
    staticClass: "btn btn-light mb-1",
    attrs: {
      disabled: _vm.selectedItem == ""
    },
    on: {
      click: function click($event) {
        return _vm.modalOpen("sakitEdit");
      }
    }
  }, [_c("i", {
    staticClass: "icon-pencil5"
  }), _vm._v("Ubah\n\t\t\t")]) : _vm._e(), _vm._v(" "), _vm.tabName == "cuti" ? _c("button", {
    staticClass: "btn btn-light mb-1",
    attrs: {
      disabled: _vm.selectedItem == ""
    },
    on: {
      click: function click($event) {
        return _vm.modalOpen("cutiEdit");
      }
    }
  }, [_c("i", {
    staticClass: "icon-pencil5"
  }), _vm._v("Ubah\n\t\t\t")]) : _vm._e(), _vm._v(" "), _vm.tabName == "kuliah" ? _c("button", {
    staticClass: "btn btn-light mb-1",
    on: {
      click: function click($event) {
        return _vm.modalOpen("kuliah");
      }
    }
  }, [_c("i", {
    staticClass: "icon-plus3"
  }), _vm._v("Tambah\n\t\t\t")]) : _vm._e(), _vm._v(" "), _vm.tabName == "seragam" ? _c("button", {
    staticClass: "btn btn-light mb-1",
    on: {
      click: function click($event) {
        return _vm.modalOpen("seragam");
      }
    }
  }, [_c("i", {
    staticClass: "icon-plus3"
  }), _vm._v("Tambah\n\t\t\t")]) : _vm._e(), _vm._v(" "), _vm.tabName == "seragam" ? _c("button", {
    staticClass: "btn btn-light mb-1",
    attrs: {
      disabled: _vm.selectedItem == ""
    },
    on: {
      click: function click($event) {
        return _vm.modalOpen("seragamEdit");
      }
    }
  }, [_c("i", {
    staticClass: "icon-pencil5"
  }), _vm._v("\n\t\t\t\tUbah\n\t\t\t")]) : _vm._e(), _vm._v(" "), _vm.tabName == "off" ? _c("button", {
    staticClass: "btn btn-light mb-1",
    on: {
      click: function click($event) {
        return _vm.modalOpen("off2");
      }
    }
  }, [_c("i", {
    staticClass: "icon-plus3"
  }), _vm._v("Tambah\n\t\t\t")]) : _vm._e(), _vm._v(" "), _vm.tabName != "masukkantor" ? _c("button", {
    staticClass: "btn btn-light mb-1",
    attrs: {
      disabled: _vm.selectedItem == ""
    },
    on: {
      click: function click($event) {
        return _vm.modalConfirmOpen("hapus");
      }
    }
  }, [_c("i", {
    staticClass: "icon-bin2"
  }), _vm._v("Hapus\n\t\t\t")]) : _vm._e(), _vm._v(" "), _vm.tabName == "off" ? _c("button", {
    staticClass: "btn btn-light mb-1",
    on: {
      click: function click($event) {
        return _vm.modalOpen("off");
      }
    }
  }, [_c("i", {
    staticClass: "icon-upload"
  }), _vm._v("Upload\n\t\t\t")]) : _vm._e(), _vm._v(" "), _c("button", {
    staticClass: "btn btn-light mb-1",
    on: {
      click: function click($event) {
        return _vm.modalOpen("laporan");
      }
    }
  }, [_c("i", {
    staticClass: "icon-download"
  }), _vm._v("Download Laporan\n\t\t\t")])]), _vm._v(" "), _c("template", {
    slot: "button-mobile"
  }, [_vm.tabName == "keterlambatan" ? _c("button", {
    staticClass: "btn btn-light btn-block mb-1",
    attrs: {
      disabled: _vm.today != _vm.selectedItem.tanggal
    },
    on: {
      click: function click($event) {
        return _vm.modalOpen("terlambat");
      }
    }
  }, [_c("i", {
    staticClass: "icon-pencil5"
  }), _vm._v("Ubah\n\t\t\t")]) : _vm._e(), _vm._v(" "), _vm.tabName == "pulangawal" ? _c("button", {
    staticClass: "btn btn-light btn-block mb-1",
    attrs: {
      disabled: _vm.selectedItem == "" || _vm.today != _vm.selectedItem.tanggal
    },
    on: {
      click: function click($event) {
        return _vm.modalOpen("pulangawal");
      }
    }
  }, [_c("i", {
    staticClass: "icon-pencil5"
  }), _vm._v("\n\t\t\t\tUbah Alasan\n\t\t\t")]) : _vm._e(), _vm._v(" "), _vm.tabName == "keluarjamkantor" ? _c("button", {
    staticClass: "btn btn-light btn-block mb-1",
    attrs: {
      disabled: _vm.selectedItem == "" || _vm.today != _vm.selectedItem.tanggal
    },
    on: {
      click: function click($event) {
        return _vm.modalOpen("keluarkantor");
      }
    }
  }, [_c("i", {
    staticClass: "icon-pencil5"
  }), _vm._v("\n\t\t\t\tUbah\n\t\t\t")]) : _vm._e(), _vm._v(" "), _vm.tabName == "izin" ? _c("button", {
    staticClass: "btn btn-light btn-block mb-1",
    on: {
      click: function click($event) {
        return _vm.modalOpen("izin");
      }
    }
  }, [_c("i", {
    staticClass: "icon-plus3"
  }), _vm._v("Tambah\n\t\t\t")]) : _vm._e(), _vm._v(" "), _vm.tabName == "kegiatan" ? _c("button", {
    staticClass: "btn btn-light btn-block mb-1",
    on: {
      click: function click($event) {
        return _vm.modalOpen("kegiatan");
      }
    }
  }, [_c("i", {
    staticClass: "icon-plus3"
  }), _vm._v("Tambah\n\t\t\t")]) : _vm._e(), _vm._v(" "), _vm.tabName == "sakit" ? _c("button", {
    staticClass: "btn btn-light btn-block mb-1",
    on: {
      click: function click($event) {
        return _vm.modalOpen("sakit");
      }
    }
  }, [_c("i", {
    staticClass: "icon-plus3"
  }), _vm._v("Tambah\n\t\t\t")]) : _vm._e(), _vm._v(" "), _vm.tabName == "izin" ? _c("button", {
    staticClass: "btn btn-light btn-block mb-1",
    attrs: {
      disabled: _vm.selectedItem == ""
    },
    on: {
      click: function click($event) {
        return _vm.modalOpen("izinEdit");
      }
    }
  }, [_c("i", {
    staticClass: "icon-pencil5"
  }), _vm._v("Ubah\n\t\t\t")]) : _vm._e(), _vm._v(" "), _vm.tabName == "sakit" ? _c("button", {
    staticClass: "btn btn-light btn-block mb-1",
    attrs: {
      disabled: _vm.selectedItem == ""
    },
    on: {
      click: function click($event) {
        return _vm.modalOpen("sakitEdit");
      }
    }
  }, [_c("i", {
    staticClass: "icon-pencil5"
  }), _vm._v("Ubah\n\t\t\t")]) : _vm._e(), _vm._v(" "), _vm.tabName == "cuti" ? _c("button", {
    staticClass: "btn btn-light btn-block mb-1",
    on: {
      click: function click($event) {
        return _vm.modalOpen("cutiEdit");
      }
    }
  }, [_c("i", {
    staticClass: "icon-pencil5"
  }), _vm._v("Ubah\n\t\t\t")]) : _vm._e(), _vm._v(" "), _vm.tabName == "kuliah" ? _c("button", {
    staticClass: "btn btn-light btn-block mb-1",
    on: {
      click: function click($event) {
        return _vm.modalOpen("kuliah");
      }
    }
  }, [_c("i", {
    staticClass: "icon-plus3"
  }), _vm._v("Tambah\n\t\t\t")]) : _vm._e(), _vm._v(" "), _vm.tabName == "seragam" ? _c("button", {
    staticClass: "btn btn-light btn-block mb-1",
    on: {
      click: function click($event) {
        return _vm.modalOpen("seragam");
      }
    }
  }, [_c("i", {
    staticClass: "icon-plus3"
  }), _vm._v("Tambah\n\t\t\t")]) : _vm._e(), _vm._v(" "), _vm.tabName == "seragam" ? _c("button", {
    staticClass: "btn btn-light btn-block mb-1",
    attrs: {
      disabled: _vm.selectedItem == ""
    },
    on: {
      click: function click($event) {
        return _vm.modalOpen("seragamEdit");
      }
    }
  }, [_c("i", {
    staticClass: "icon-pencil5"
  }), _vm._v("\n\t\t\t\tUbah\n\t\t\t")]) : _vm._e(), _vm._v(" "), _vm.tabName == "off" ? _c("button", {
    staticClass: "btn btn-light btn-block mb-1",
    on: {
      click: function click($event) {
        return _vm.modalOpen("off2");
      }
    }
  }, [_c("i", {
    staticClass: "icon-plus3"
  }), _vm._v("Tambah\n\t\t\t")]) : _vm._e(), _vm._v(" "), _vm.tabName != "masukkantor" ? _c("button", {
    staticClass: "btn btn-light btn-block mb-1",
    attrs: {
      disabled: _vm.selectedItem == ""
    },
    on: {
      click: function click($event) {
        return _vm.modalConfirmOpen("hapus");
      }
    }
  }, [_c("i", {
    staticClass: "icon-bin2"
  }), _vm._v("Hapus\n\t\t\t")]) : _vm._e(), _vm._v(" "), _vm.tabName == "off" ? _c("button", {
    staticClass: "btn btn-light btn-block mb-1",
    on: {
      click: function click($event) {
        return _vm.modalOpen("off");
      }
    }
  }, [_c("i", {
    staticClass: "icon-upload"
  }), _vm._v("Upload Data\n\t\t\t")]) : _vm._e(), _vm._v(" "), _c("button", {
    staticClass: "btn btn-light btn-block mb-1",
    on: {
      click: function click($event) {
        return _vm.modalOpen("laporan");
      }
    }
  }, [_c("i", {
    staticClass: "icon-download"
  }), _vm._v("Download Laporan\n\t\t\t")])])], 2), _vm._v(" "), _c("app-modal", {
    attrs: {
      show: _vm.modalShow,
      state: _vm.modalState,
      title: _vm.modalTitle,
      content: _vm.modalContent,
      size: _vm.modalSize,
      color: _vm.modalColor
    },
    on: {
      batal: _vm.modalTutup,
      tutup: _vm.modalTutup,
      confirmOk: _vm.modalConfirmOk,
      successOk: _vm.modalTutup,
      failOk: _vm.modalTutup,
      backgroundClick: _vm.modalBackgroundClick
    }
  }, [_c("template", {
    slot: "modal-title"
  }, [_vm._v("\n\t\t\t" + _vm._s(_vm.modalTitle) + "\n\t\t")]), _vm._v(" "), _c("template", {
    slot: "modal-body1"
  }, [this.laporan == false ? _c("div", {
    staticClass: "col-md-12"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("div", [_c("h5", [_vm._v("Tanggal Keterlambatan : " + _vm._s(_vm.$options.filters.date(this.selectedItem.tanggal)))]), _vm._v(" "), _c("h5", [_vm._v("Jenis :")]), _vm._v(" "), _c("div", {
    staticClass: "text-center"
  }, [_c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.jenis,
      expression: "jenis"
    }],
    staticClass: "form-control",
    attrs: {
      "data-width": "100%"
    },
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.jenis = $event.target.multiple ? $$selectedVal : $$selectedVal[0];
      }
    }
  }, [_c("option", {
    attrs: {
      disabled: "true",
      value: ""
    }
  }, [_vm._v("PILIH JENIS ALASAN")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "PRIBADI"
    }
  }, [_vm._v("PRIBADI")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "URUSAN KANTOR"
    }
  }, [_vm._v("URUSAN KANTOR")])])])]), _vm._v(" "), _c("div", [_c("h5", [_vm._v("Alasan :")]), _vm._v(" "), _c("div", {}, [_c("textarea", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.alasan,
      expression: "alasan"
    }],
    attrs: {
      name: "",
      rows: "10"
    },
    domProps: {
      value: _vm.alasan
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.alasan = $event.target.value;
      }
    }
  })])])]), _vm._v(" "), _c("div", {
    staticClass: "text-center"
  }, [_c("button", {
    staticClass: "btn btn-warning",
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.modalTutup.apply(null, arguments);
      }
    }
  }, [_c("i", {}), _vm._v("Kembali")]), _vm._v(" "), _c("button", {
    staticClass: "btn btn-primary",
    attrs: {
      disabled: _vm.alasan == "",
      type: "submit",
      value: "submit"
    },
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.updateAlasan();
      }
    }
  }, [_c("i", {
    staticClass: "icon-floppy-disk"
  }), _vm._v("Simpan")])])]) : _c("div", [_c("div", {
    staticClass: "text-center col-md-12"
  }, [_c("h5", [_vm._v("Pilih Periode :")]), _vm._v(" "), _c("div", {
    staticClass: "text-center",
    staticStyle: {
      "margin-bottom": "20px"
    }
  }, [_c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.tahun,
      expression: "tahun"
    }],
    staticClass: "form-control",
    attrs: {
      "data-width": "100%"
    },
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.tahun = $event.target.multiple ? $$selectedVal : $$selectedVal[0];
      }
    }
  }, [_c("option", {
    attrs: {
      value: "2023"
    }
  }, [_vm._v("2023")])])]), _vm._v(" "), _c("button", {
    staticClass: "btn btn-primary btn-block",
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.downloadLaporan(1);
      }
    }
  }, [_c("i", {}), _vm._v("Konsolidasi Bulanan")]), _c("br"), _vm._v(" "), _c("button", {
    staticClass: "btn btn-primary btn-block",
    attrs: {
      disabled: _vm.alasan == "",
      type: "submit",
      value: "submit"
    },
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.downloadLaporan(2);
      }
    }
  }, [_vm._v("\n\t\t\t\t\t\tForm Kehadiran Kerja Manajemen Konsolidasi")]), _vm._v(" "), _c("button", {
    staticClass: "btn btn-warning btn-block",
    attrs: {
      type: "submit",
      value: "submit"
    },
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.modalTutup.apply(null, arguments);
      }
    }
  }, [_vm._v("\n\t\t\t\t\t\tBatal")])])])]), _vm._v(" "), _c("template", {
    slot: "modal-body2"
  }, [_c("div", [_c("Kuliah", {
    attrs: {
      tipe: _vm.tabName
    },
    on: {
      tutup: _vm.modalTutup
    }
  })], 1)]), _vm._v(" "), _c("template", {
    slot: "modal-body3"
  }, [_vm.tabName != "cuti" ? _c("div", [_c("form-pelanggaran-seragam", {
    attrs: {
      id: _vm.selectedItem.id,
      tipe: _vm.tipe
    },
    on: {
      tutup: _vm.modalTutup
    }
  })], 1) : _c("div", [_c("Cuti", {
    attrs: {
      dataCuti: _vm.selectedItem.id,
      tipe: "cutiEdit",
      page: "semua"
    },
    on: {
      tutup: _vm.modalTutup
    }
  })], 1)]), _vm._v(" "), _c("template", {
    slot: "modal-body4"
  }, [_vm.tabName == "off" ? _c("div", [_c("upload-excel", {
    on: {
      tutup: _vm.modalTutup
    }
  })], 1) : _vm.tabName == "izin" || _vm.tabName == "sakit" || _vm.tabName == "kegiatan" ? _c("div", [_c("izin", {
    attrs: {
      tipe: _vm.tabName,
      kelas: "semua",
      editData: _vm.selectedItem.id,
      editFlag: _vm.flag
    },
    on: {
      tutup: _vm.modalTutup
    }
  })], 1) : _vm._e()])], 2)], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/presensi/uploadExcel.vue?vue&type=template&id=8f00696e":
/*!******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/views/presensi/uploadExcel.vue?vue&type=template&id=8f00696e ***!
  \******************************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "col-md-12"
  }, [_c("h5", [_vm._v("Pilih File :")]), _vm._v(" "), _c("input", {
    ref: "file",
    staticClass: "form-control",
    attrs: {
      type: "file",
      accept: ".csv,.xlsx,.xls",
      name: "file"
    },
    on: {
      change: function change($event) {
        return _vm.upload($event.target);
      }
    }
  }), _vm._v(" "), _c("a", {
    attrs: {
      href: "#"
    },
    on: {
      click: _vm.download
    }
  }, [_vm._v("Download Template Upload Data Off Bergilir")]), _c("br"), _vm._v(" "), _c("div", {
    staticClass: "text-center",
    staticStyle: {
      "margin-top": "10px"
    }
  }, [_c("button", {
    staticClass: "btn btn-warning",
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.batal.apply(null, arguments);
      }
    }
  }, [_c("i", {
    staticClass: "icon-x"
  }), _vm._v("Batal")]), _vm._v(" "), _c("button", {
    staticClass: "btn btn-primary",
    attrs: {
      disabled: !_vm.form.file,
      type: "submit",
      value: "submit"
    },
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.storeFile.apply(null, arguments);
      }
    }
  }, [_c("i", {
    staticClass: "icon-floppy-disk"
  }), _vm._v("Upload")])])]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/presensi/tablePresensiAll.vue?vue&type=style&index=0&id=119152fe&lang=css":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/views/presensi/tablePresensiAll.vue?vue&type=style&index=0&id=119152fe&lang=css ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\ntextarea {\r\n\theight: 100%;\r\n\twidth: 100%;\r\n\t/* Safari/Chrome, other WebKit */\r\n\t/* Firefox, other Gecko */\r\n\tbox-sizing: border-box;\r\n\t/* Opera/IE 8+ */\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/presensi/tablePresensiAll.vue?vue&type=style&index=0&id=119152fe&lang=css":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/views/presensi/tablePresensiAll.vue?vue&type=style&index=0&id=119152fe&lang=css ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./tablePresensiAll.vue?vue&type=style&index=0&id=119152fe&lang=css */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/presensi/tablePresensiAll.vue?vue&type=style&index=0&id=119152fe&lang=css");

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

/***/ "./resources/assets/js/views/presensi/formPelanggaranSeragam.vue":
/*!***********************************************************************!*\
  !*** ./resources/assets/js/views/presensi/formPelanggaranSeragam.vue ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _formPelanggaranSeragam_vue_vue_type_template_id_a240031e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./formPelanggaranSeragam.vue?vue&type=template&id=a240031e */ "./resources/assets/js/views/presensi/formPelanggaranSeragam.vue?vue&type=template&id=a240031e");
/* harmony import */ var _formPelanggaranSeragam_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./formPelanggaranSeragam.vue?vue&type=script&lang=js */ "./resources/assets/js/views/presensi/formPelanggaranSeragam.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _formPelanggaranSeragam_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _formPelanggaranSeragam_vue_vue_type_template_id_a240031e__WEBPACK_IMPORTED_MODULE_0__["render"],
  _formPelanggaranSeragam_vue_vue_type_template_id_a240031e__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/views/presensi/formPelanggaranSeragam.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/views/presensi/formPelanggaranSeragam.vue?vue&type=script&lang=js":
/*!***********************************************************************************************!*\
  !*** ./resources/assets/js/views/presensi/formPelanggaranSeragam.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_formPelanggaranSeragam_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./formPelanggaranSeragam.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/presensi/formPelanggaranSeragam.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_formPelanggaranSeragam_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/views/presensi/formPelanggaranSeragam.vue?vue&type=template&id=a240031e":
/*!*****************************************************************************************************!*\
  !*** ./resources/assets/js/views/presensi/formPelanggaranSeragam.vue?vue&type=template&id=a240031e ***!
  \*****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_formPelanggaranSeragam_vue_vue_type_template_id_a240031e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../node_modules/vue-loader/lib??vue-loader-options!./formPelanggaranSeragam.vue?vue&type=template&id=a240031e */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/presensi/formPelanggaranSeragam.vue?vue&type=template&id=a240031e");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_formPelanggaranSeragam_vue_vue_type_template_id_a240031e__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_formPelanggaranSeragam_vue_vue_type_template_id_a240031e__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/assets/js/views/presensi/tablePresensiAll.vue":
/*!*****************************************************************!*\
  !*** ./resources/assets/js/views/presensi/tablePresensiAll.vue ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tablePresensiAll_vue_vue_type_template_id_119152fe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tablePresensiAll.vue?vue&type=template&id=119152fe */ "./resources/assets/js/views/presensi/tablePresensiAll.vue?vue&type=template&id=119152fe");
/* harmony import */ var _tablePresensiAll_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tablePresensiAll.vue?vue&type=script&lang=js */ "./resources/assets/js/views/presensi/tablePresensiAll.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _tablePresensiAll_vue_vue_type_style_index_0_id_119152fe_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tablePresensiAll.vue?vue&type=style&index=0&id=119152fe&lang=css */ "./resources/assets/js/views/presensi/tablePresensiAll.vue?vue&type=style&index=0&id=119152fe&lang=css");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _tablePresensiAll_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _tablePresensiAll_vue_vue_type_template_id_119152fe__WEBPACK_IMPORTED_MODULE_0__["render"],
  _tablePresensiAll_vue_vue_type_template_id_119152fe__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/views/presensi/tablePresensiAll.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/views/presensi/tablePresensiAll.vue?vue&type=script&lang=js":
/*!*****************************************************************************************!*\
  !*** ./resources/assets/js/views/presensi/tablePresensiAll.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_tablePresensiAll_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./tablePresensiAll.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/presensi/tablePresensiAll.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_tablePresensiAll_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/views/presensi/tablePresensiAll.vue?vue&type=style&index=0&id=119152fe&lang=css":
/*!*************************************************************************************************************!*\
  !*** ./resources/assets/js/views/presensi/tablePresensiAll.vue?vue&type=style&index=0&id=119152fe&lang=css ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_tablePresensiAll_vue_vue_type_style_index_0_id_119152fe_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./tablePresensiAll.vue?vue&type=style&index=0&id=119152fe&lang=css */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/presensi/tablePresensiAll.vue?vue&type=style&index=0&id=119152fe&lang=css");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_tablePresensiAll_vue_vue_type_style_index_0_id_119152fe_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_tablePresensiAll_vue_vue_type_style_index_0_id_119152fe_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_tablePresensiAll_vue_vue_type_style_index_0_id_119152fe_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_tablePresensiAll_vue_vue_type_style_index_0_id_119152fe_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/assets/js/views/presensi/tablePresensiAll.vue?vue&type=template&id=119152fe":
/*!***********************************************************************************************!*\
  !*** ./resources/assets/js/views/presensi/tablePresensiAll.vue?vue&type=template&id=119152fe ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_tablePresensiAll_vue_vue_type_template_id_119152fe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../node_modules/vue-loader/lib??vue-loader-options!./tablePresensiAll.vue?vue&type=template&id=119152fe */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/presensi/tablePresensiAll.vue?vue&type=template&id=119152fe");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_tablePresensiAll_vue_vue_type_template_id_119152fe__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_tablePresensiAll_vue_vue_type_template_id_119152fe__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/assets/js/views/presensi/uploadExcel.vue":
/*!************************************************************!*\
  !*** ./resources/assets/js/views/presensi/uploadExcel.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _uploadExcel_vue_vue_type_template_id_8f00696e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./uploadExcel.vue?vue&type=template&id=8f00696e */ "./resources/assets/js/views/presensi/uploadExcel.vue?vue&type=template&id=8f00696e");
/* harmony import */ var _uploadExcel_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./uploadExcel.vue?vue&type=script&lang=js */ "./resources/assets/js/views/presensi/uploadExcel.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _uploadExcel_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _uploadExcel_vue_vue_type_template_id_8f00696e__WEBPACK_IMPORTED_MODULE_0__["render"],
  _uploadExcel_vue_vue_type_template_id_8f00696e__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/views/presensi/uploadExcel.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/views/presensi/uploadExcel.vue?vue&type=script&lang=js":
/*!************************************************************************************!*\
  !*** ./resources/assets/js/views/presensi/uploadExcel.vue?vue&type=script&lang=js ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_uploadExcel_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./uploadExcel.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/presensi/uploadExcel.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_uploadExcel_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/views/presensi/uploadExcel.vue?vue&type=template&id=8f00696e":
/*!******************************************************************************************!*\
  !*** ./resources/assets/js/views/presensi/uploadExcel.vue?vue&type=template&id=8f00696e ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_uploadExcel_vue_vue_type_template_id_8f00696e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../node_modules/vue-loader/lib??vue-loader-options!./uploadExcel.vue?vue&type=template&id=8f00696e */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/presensi/uploadExcel.vue?vue&type=template&id=8f00696e");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_uploadExcel_vue_vue_type_template_id_8f00696e__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_uploadExcel_vue_vue_type_template_id_8f00696e__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);