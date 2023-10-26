(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[140],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/pemilihan/detail.vue?vue&type=script&lang=js":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/views/pemilihan/detail.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _components_pageHeader_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/pageHeader.vue */ "./resources/assets/js/components/pageHeader.vue");
/* harmony import */ var _components_message_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/message.vue */ "./resources/assets/js/components/message.vue");
/* harmony import */ var _components_datatable_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/datatable.vue */ "./resources/assets/js/components/datatable.vue");
/* harmony import */ var _helpers_pusherAuth_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../helpers/pusherAuth.js */ "./resources/assets/js/helpers/pusherAuth.js");
/* harmony import */ var vue_json_excel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vue-json-excel */ "./node_modules/vue-json-excel/dist/vue-json-excel.esm.js");
/* harmony import */ var _components_checkValue_vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/checkValue.vue */ "./resources/assets/js/components/checkValue.vue");
/* harmony import */ var _components_modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/modal */ "./resources/assets/js/components/modal.vue");
/* harmony import */ var laravel_echo__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! laravel-echo */ "./node_modules/laravel-echo/dist/echo.js");
/* harmony import */ var pusher_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! pusher-js */ "./node_modules/pusher-js/dist/web/pusher.js");
/* harmony import */ var pusher_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(pusher_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _components_dataviewer2_vue__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/dataviewer2.vue */ "./resources/assets/js/components/dataviewer2.vue");
/* harmony import */ var _voting_qrCode_vue__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../voting/qrCode.vue */ "./resources/assets/js/views/voting/qrCode.vue");
/* harmony import */ var _voting_qrCodeAll_vue__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../voting/qrCodeAll.vue */ "./resources/assets/js/views/voting/qrCodeAll.vue");
/* harmony import */ var _formKodeSuara_vue__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./formKodeSuara.vue */ "./resources/assets/js/views/pemilihan/formKodeSuara.vue");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }















/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    pageHeader: _components_pageHeader_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    message: _components_message_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    dataTable: _components_datatable_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
    jsonExcel: vue_json_excel__WEBPACK_IMPORTED_MODULE_6__["default"],
    checkValue: _components_checkValue_vue__WEBPACK_IMPORTED_MODULE_7__["default"],
    appModal: _components_modal__WEBPACK_IMPORTED_MODULE_8__["default"],
    DataViewer: _components_dataviewer2_vue__WEBPACK_IMPORTED_MODULE_11__["default"],
    qrCode: _voting_qrCode_vue__WEBPACK_IMPORTED_MODULE_12__["default"],
    qrCodeAll: _voting_qrCodeAll_vue__WEBPACK_IMPORTED_MODULE_13__["default"],
    formKodeSuara: _formKodeSuara_vue__WEBPACK_IMPORTED_MODULE_14__["default"]
  },
  data: function data() {
    return {
      title: 'Detail Pemilihan',
      titleDesc: 'Melihat detail data pemilihan',
      titleIcon: 'icon-stack2',
      level: 2,
      level2Title: 'Pemilihan',
      kelas: 'pemilihan',
      tabName: 'info',
      query: {
        order_column: "name",
        order_direction: "asc",
        filter_match: "and",
        limit: 10,
        page: 1
      },
      excelDownloadUrl: '',
      excelUploads: [{
        enabled: true,
        url: 'pemilihan/uploadSuara/' + this.$route.params.id,
        format_url: 'formatPemilihanSuara.xlsx',
        button: 'Upload Kode Suara'
      }],
      columnDataCalon: [{
        title: 'No. Urut'
      }, {
        title: 'Foto'
      }, {
        title: 'Nama'
      }, {
        title: 'Tanggal Lahir'
      }, {
        title: 'Tempat Lahir'
      }, {
        title: 'Status'
      }, {
        title: 'Pendidikan'
      }],
      itemDataCalon: [],
      itemDataCalonStat: 'success',
      columnDataSuara: [{
        title: 'No.',
        name: 'No.'
      }, {
        title: 'Kode',
        name: 'name',
        tipe: 'string',
        sort: true,
        hide: false,
        disable: false,
        filter: true,
        filterDefault: true
      }, {
        title: 'Link',
        name: 'link',
        tipe: 'string',
        sort: true,
        hide: false,
        disable: false,
        filter: true
      }, {
        title: 'Memilih',
        name: 'pemilihan_calon_id',
        tipe: 'string',
        sort: false,
        hide: false,
        disable: false,
        filter: false
      }, {
        title: 'Akses',
        name: 'pemilihan_id',
        tipe: 'string',
        sort: false,
        hide: false,
        disable: false,
        filter: false
      }],
      selectedSuara: {},
      state: '',
      modalShow: false,
      modalState: '',
      modalColor: '',
      modalSize: '',
      modalTitle: '',
      modalContent: '',
      modalButton: '',
      formCalon: ''
    };
  },
  created: function created() {
    this.fetch();
  },
  mounted: function mounted() {
    var _this = this;
    Object(_helpers_pusherAuth_js__WEBPACK_IMPORTED_MODULE_5__["PusherAuth"])();
    window.Echo["private"]("pemilihan.channel." + this.$route.params.id).listen('PemilihanEvent', function (data) {
      var p;
      var _iterator = _createForOfIteratorHelper(_this.form.calon),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          p = _step.value;
          if (p.pivot.id == data.pemilihan_calon_id) {
            p.pivot.skor = data.skor;
            // this.form.suara_ok += 1;
            _this.formCalon = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.orderBy(_this.form.calon, 'pivot.skor', ['desc']);
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    });
  },
  watch: {
    // check route changes
    $route: function $route(to, from) {
      this.fetch();
    },
    formStat: function formStat(value) {
      if (value === "success") {
        this.form.link = window.location.origin + '/admins/pemilihan/input';
        var valCalon;
        this.itemDataCalon = [];
        var _iterator2 = _createForOfIteratorHelper(this.form.calon),
          _step2;
        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            valCalon = _step2.value;
            var formData = {};
            formData.aktivis_id = valCalon.id;
            formData.no_urut = valCalon.pivot.no_urut;
            formData.name = valCalon.name;
            formData.gambar = valCalon.gambar;
            formData.tanggal_lahir = valCalon.tanggal_lahir;
            formData.tempat_lahir = valCalon.tempat_lahir;
            formData.status = valCalon.status;
            if (valCalon.pendidikan_tertinggi) {
              formData.pendidikan = valCalon.pendidikan_tertinggi.tingkat + ' ' + valCalon.pendidikan_tertinggi.name;
            } else {
              formData.pendidikan = "";
            }
            this.itemDataCalon.push(formData);
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
        this.formCalon = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.orderBy(this.form.calon, 'pivot.skor', ['desc']);
      }
    },
    // when updating data
    updateStat: function updateStat(value) {
      this.modalState = value;
      this.modalButton = 'Ok';
      if (value == "success") {
        this.modalTitle = this.updateMessage.message;
        this.modalContent = '';
        if (this.tabName == 'suara') {
          this.fetchDataSuara(this.query);
        } else {
          this.fetch();
        }
      } else if (value == "fail") {
        this.modalContent = this.updateMessage;
      } else {
        this.modalContent = '';
      }
    }
  },
  methods: {
    fetch: function fetch() {
      this.$store.dispatch(this.kelas + '/edit', this.$route.params.id);
    },
    fetchDataSuara: function fetchDataSuara(params) {
      this.$store.dispatch(this.kelas + '/indexDataSuara', [params, this.$route.params.id]);
      this.excelDownloadUrl = this.kelas + '/indexDataSuara/' + this.$route.params.id;
    },
    back: function back() {
      this.$router.push({
        name: this.kelas,
        params: {
          cu: this.form.id_cu
        }
      });
    },
    changeTab: function changeTab(value) {
      this.tabName = value;
      if (value == 'info') {
        this.fetch();
      } else if (value == 'skor') {
        this.fetch();
      } else if (value == 'suara') {
        this.fetchDataSuara(this.query);
      }
    },
    selectedRow: function selectedRow(item) {
      this.selectedSuara = item;
    },
    modalOpen: function modalOpen(state) {
      this.modalShow = true;
      this.state = state;
      if (state == 'status') {
        this.modalState = 'confirm-tutup';
        if (this.form.status == 0) {
          this.modalTitle = 'Aktifkan ' + this.form.name + ' ?';
          this.modalButton = 'Iya, aktifkan';
        } else {
          this.modalTitle = 'Tidak aktifkan ' + this.form.name + ' ?';
          this.modalButton = 'Iya, tidak aktifkan';
        }
      } else if (state == 'qrCode') {
        this.modalTitle = 'QR Code untuk kode ' + this.selectedSuara.name;
        this.modalState = 'normal2';
        this.modalColor = 'bg-primary';
        this.modalSize = "";
      } else if (state == 'qrCodeAll') {
        this.modalTitle = 'QR Code pada tabel';
        this.modalState = 'normal2';
        this.modalColor = 'bg-primary';
        this.modalSize = "modal-full";
      } else if (state == 'qrCodeInput') {
        this.modalTitle = 'QR Code untuk kode ini';
        this.modalState = 'normal2';
        this.modalColor = 'bg-primary';
        this.modalSize = "";
        this.selectedSuara.link = this.form.link;
      } else if (state == 'tambah_suara') {
        this.modalTitle = 'Tambah Suara';
        this.modalState = 'normal3';
        this.modalColor = 'bg-primary';
        this.modalSize = "";
      } else if (state == 'ubah_suara') {
        this.modalTitle = 'Ubah suara dengan kode ' + this.selectedSuara.name;
        this.modalState = 'normal3';
        this.modalColor = 'bg-primary';
        this.modalSize = "";
      } else if (state == 'hapus_suara') {
        this.modalState = 'confirm-tutup';
        this.modalTitle = 'Hapus suara dengan kode ' + this.selectedSuara.name + ' ?';
        this.modalButton = 'Iya, Hapus';
      }
    },
    modalTutup: function modalTutup() {
      this.modalShow = false;
      this.$store.dispatch(this.kelas + '/resetUpdateStat');
    },
    modalConfirmOk: function modalConfirmOk() {
      if (this.state == "status") {
        this.$store.dispatch(this.kelas + '/updateStatus', [this.form.id, this.form.id_cu]);
      } else if (this.state == "hapus_suara") {
        this.$store.dispatch(this.kelas + '/destroySuara', this.selectedSuara.id);
      }
    }
  },
  computed: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapGetters"])('auth', {
    currentUser: 'currentUser'
  })), Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapGetters"])('pemilihan', {
    form: 'data',
    formStat: 'dataStat',
    itemDataSuara: 'dataS3',
    itemDataSuaraStat: 'dataStatS3',
    updateMessage: 'update',
    updateStat: 'updateStat'
  }))
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/pemilihan/formKodeSuara.vue?vue&type=script&lang=js":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/views/pemilihan/formKodeSuara.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _components_message_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/message.vue */ "./resources/assets/js/components/message.vue");
/* harmony import */ var _components_formInfo_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/formInfo.vue */ "./resources/assets/js/components/formInfo.vue");
/* harmony import */ var _components_wajibBadge_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/wajibBadge.vue */ "./resources/assets/js/components/wajibBadge.vue");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }




/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['kelas', 'id', 'id_cu', 'selectedItem', 'mode'],
  components: {
    formInfo: _components_formInfo_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    message: _components_message_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    wajibBadge: _components_wajibBadge_vue__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  data: function data() {
    return {
      form: {
        id: '',
        pemilihan_id: '',
        id_cu: '',
        name: ''
      },
      submited: false
    };
  },
  created: function created() {
    this.form.pemilihan_id = this.id;
    if (this.mode == 'edit') {
      this.form.id = this.selectedItem.id;
      this.form.id_cu = this.selectedItem.id_cu;
      this.form.name = this.selectedItem.name;
    }
    if (this.currentUser.id_cu === 0) {
      if (this.modelCuStat != 'success') {
        this.$store.dispatch('cu/getHeader');
      }
    }
  },
  watch: {},
  methods: {
    save: function save() {
      var _this = this;
      this.$validator.validateAll('form').then(function (result) {
        if (result) {
          if (_this.mode === 'edit') {
            _this.$store.dispatch(_this.kelas + '/updateSuara', [_this.form.id, _this.form]);
          } else {
            _this.$store.dispatch(_this.kelas + '/storeSuara', _this.form);
          }
          _this.submited = false;
        } else {
          window.scrollTo(0, 0);
          _this.submited = true;
        }
      });
    },
    tutup: function tutup() {
      this.$emit('tutup');
    }
  },
  computed: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('auth', {
    currentUser: 'currentUser'
  })), Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('cu', {
    modelCU: 'headerDataS',
    modelCUStat: 'headerDataStatS'
  }))
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/pemilihan/detail.vue?vue&type=template&id=4f15784c":
/*!**************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/views/pemilihan/detail.vue?vue&type=template&id=4f15784c ***!
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
      level: _vm.level,
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
  }, [_vm.formStat === "fail" ? _c("message", {
    attrs: {
      title: "Oops terjadi kesalahan:",
      errorData: _vm.form
    }
  }) : _vm._e(), _vm._v(" "), _vm.formStat == "success" ? [_c("div", {
    staticClass: "card"
  }, [_c("div", {
    staticClass: "nav-tabs-responsive"
  }, [_c("ul", {
    staticClass: "nav nav-tabs nav-tabs-solid bg-light nav-justified mb-0"
  }, [_c("li", {
    staticClass: "nav-item"
  }, [_c("a", {
    staticClass: "nav-link",
    "class": {
      active: _vm.tabName == "info"
    },
    attrs: {
      href: "#"
    },
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.changeTab("info");
      }
    }
  }, [_c("i", {
    staticClass: "icon-info22 mr-2"
  }), _vm._v("\n\t\t\t\t\t\t\t\t\tInfo\n\t\t\t\t\t\t\t\t")])]), _vm._v(" "), _c("li", {
    staticClass: "nav-item"
  }, [_c("a", {
    staticClass: "nav-link",
    "class": {
      active: _vm.tabName == "suara"
    },
    attrs: {
      href: "#"
    },
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.changeTab("suara");
      }
    }
  }, [_c("i", {
    staticClass: "icon-megaphone mr-2"
  }), _vm._v("\n\t\t\t\t\t\t\t\t\tSuara\n\t\t\t\t\t\t\t\t")])]), _vm._v(" "), _c("li", {
    staticClass: "nav-item"
  }, [_c("a", {
    staticClass: "nav-link",
    "class": {
      active: _vm.tabName == "skor"
    },
    attrs: {
      href: "#"
    },
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.changeTab("skor");
      }
    }
  }, [_c("i", {
    staticClass: "icon-equalizer mr-2"
  }), _vm._v("\n\t\t\t\t\t\t\t\t\tSkor\n\t\t\t\t\t\t\t\t")])])])])]), _vm._v(" "), _c("transition", {
    attrs: {
      "enter-active-class": "animated fadeIn",
      mode: "out-in"
    }
  }, [_c("div", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.tabName == "info",
      expression: "tabName == 'info'"
    }]
  }, [_c("div", {
    staticClass: "card"
  }, [_c("div", {
    staticClass: "card-header bg-white header-elements-inline"
  }, [_c("h5", {
    staticClass: "card-title"
  }, [_vm._v("Pemilihan | Status: "), _c("span", {
    domProps: {
      innerHTML: _vm._s(_vm.$options.filters.checkStatus(_vm.form.status))
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "header-elements"
  }, [_vm.currentUser.can && _vm.currentUser.can["update_pemilihan"] ? _c("button", {
    staticClass: "btn btn-light btn-icon mb-1 mr-1",
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.modalOpen("status");
      }
    }
  }, [_c("i", {
    staticClass: "icon-calendar5"
  }), _vm._v(" Status\n\t\t\t\t\t\t\t\t\t\t")]) : _vm._e(), _vm._v(" "), _c("button", {
    staticClass: "btn btn-light btn-icon mb-1",
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
    staticClass: "icon-sync"
  }), _vm._v(" Reload Data\n\t\t\t\t\t\t\t\t\t\t")])])]), _vm._v(" "), _c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-md-6 form-group"
  }, [_c("h5", [_vm._v("Nama:")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.name,
      expression: "form.name"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      name: "name",
      disabled: ""
    },
    domProps: {
      value: _vm.form.name
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "name", $event.target.value);
      }
    }
  })]), _vm._v(" "), _vm.currentUser.id_cu == 0 ? _c("div", {
    staticClass: "col-md-6 form-group"
  }, [_c("h5", [_vm._v("CU:")]), _vm._v(" "), _vm.form.cu ? _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.cu.name,
      expression: "form.cu.name"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      name: "cu",
      disabled: ""
    },
    domProps: {
      value: _vm.form.cu.name
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form.cu, "name", $event.target.value);
      }
    }
  }) : _c("input", {
    staticClass: "form-control",
    attrs: {
      type: "text",
      name: "cu",
      value: "PUSKOPCUINA",
      disabled: ""
    }
  })]) : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 form-group"
  }, [_c("h5", [_vm._v("Tingkat:")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.tingkat,
      expression: "form.tingkat"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      name: "tingkat",
      disabled: ""
    },
    domProps: {
      value: _vm.form.tingkat
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "tingkat", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 form-group"
  }, [_c("h5", [_vm._v("Total Suara:")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.suara,
      expression: "form.suara"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      name: "suara",
      disabled: ""
    },
    domProps: {
      value: _vm.form.suara
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "suara", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 form-group"
  }, [_c("h5", [_vm._v("Suara Masuk:")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.suara_ok,
      expression: "form.suara_ok"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      name: "suara_ok",
      disabled: ""
    },
    domProps: {
      value: _vm.form.suara_ok
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "suara_ok", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 form-group"
  }, [_c("h5", [_vm._v("Suara Akses:")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.suara_akses,
      expression: "form.suara_akses"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      name: "suara_akses",
      disabled: ""
    },
    domProps: {
      value: _vm.form.suara_akses
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "suara_akses", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("h5", [_vm._v("Pemilih Minimum:")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.pemilihan_min,
      expression: "form.pemilihan_min"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      name: "tingkat",
      disabled: ""
    },
    domProps: {
      value: _vm.form.pemilihan_min
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "pemilihan_min", $event.target.value);
      }
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("h5", [_vm._v("Pemilih Maximum:")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.pemilihan_max,
      expression: "form.pemilihan_max"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      name: "tingkat",
      disabled: ""
    },
    domProps: {
      value: _vm.form.pemilihan_max
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "pemilihan_max", $event.target.value);
      }
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-12"
  }, [_c("h5", [_vm._v("Link Suara Input:")]), _vm._v(" "), _c("div", {
    staticClass: "card card-body"
  }, [_c("p", [_vm._v("Silahkan menggunakan link ini dan memasukkan kode unik yang sudah dibuat ")]), _vm._v(" "), _c("hr", {
    staticClass: "mt-1 mb-1"
  }), _vm._v(" "), _c("a", {
    staticClass: "pointer",
    attrs: {
      href: _vm.form.link,
      target: "_blank"
    }
  }, [_c("check-value", {
    attrs: {
      value: _vm.form.link.substring(8),
      trimLength: 100
    }
  })], 1), _vm._v(" "), _c("button", {
    staticClass: "btn btn-light btn-block mb-1 mt-2",
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.modalOpen("qrCodeInput");
      }
    }
  }, [_c("i", {
    staticClass: "icon-qrcode"
  }), _vm._v(" Buat QR Code\n\t\t\t\t\t\t\t\t\t\t\t\t")])])])])])]), _vm._v(" "), _c("div", {
    staticClass: "card"
  }, [_c("div", {
    staticClass: "card-header bg-white header-elements-inline"
  }, [_c("h5", {
    staticClass: "card-title"
  }, [_vm._v("Calon")])]), _vm._v(" "), _c("data-table", {
    attrs: {
      items: _vm.itemDataCalon,
      columnData: _vm.columnDataCalon,
      itemDataStat: _vm.itemDataCalonStat
    },
    scopedSlots: _vm._u([{
      key: "item-desktop",
      fn: function fn(props) {
        return [props.item ? _c("tr", {
          staticClass: "text-nowrap"
        }, [_c("td", [_vm._v(_vm._s(props.item.no_urut))]), _vm._v(" "), _c("td", [props.item.gambar ? _c("img", {
          staticClass: "img-rounded img-fluid wmin-sm",
          attrs: {
            src: "/images/aktivis/" + props.item.gambar + "n.jpg",
            width: "35px"
          }
        }) : _c("img", {
          staticClass: "img-rounded img-fluid wmin-sm",
          attrs: {
            src: "/images/no_image.jpg",
            width: "35px"
          }
        })]), _vm._v(" "), _c("td", [_vm._v(_vm._s(props.item.name))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(props.item.tanggal_lahir))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(props.item.tempat_lahir))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(props.item.status))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(props.item.pendidikan))])]) : _vm._e()];
      }
    }], null, false, 1882918558)
  })], 1)])]), _vm._v(" "), _c("transition", {
    attrs: {
      "enter-active-class": "animated fadeIn",
      mode: "out-in"
    }
  }, [_c("div", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.tabName == "suara",
      expression: "tabName == 'suara'"
    }]
  }, [_c("div", {
    staticClass: "card card-body"
  }, [_c("p", [_vm._v("Silahkan menggunakan link ini dan memasukkan kode unik yang sudah dibuat dibawah ")]), _vm._v(" "), _c("hr", {
    staticClass: "mt-1 mb-1"
  }), _vm._v(" "), _c("a", {
    staticClass: "pointer",
    attrs: {
      href: _vm.form.link,
      target: "_blank"
    }
  }, [_c("check-value", {
    attrs: {
      value: _vm.form.link.substring(8),
      trimLength: 100
    }
  })], 1), _vm._v(" "), _c("button", {
    staticClass: "btn btn-light btn-block mb-1 mt-2",
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.modalOpen("qrCodeInput");
      }
    }
  }, [_c("i", {
    staticClass: "icon-qrcode"
  }), _vm._v(" Buat QR Code\n\t\t\t\t\t\t\t\t")])]), _vm._v(" "), _c("data-viewer", {
    attrs: {
      title: "Suara",
      columnData: _vm.columnDataSuara,
      itemData: _vm.itemDataSuara,
      query: _vm.query,
      itemDataStat: _vm.itemDataSuaraStat,
      excelDownloadUrl: _vm.excelDownloadUrl,
      excelUploads: _vm.excelUploads
    },
    on: {
      fetch: _vm.fetchDataSuara
    },
    scopedSlots: _vm._u([{
      key: "item-desktop",
      fn: function fn(props) {
        return [_c("tr", {
          staticClass: "text-nowrap",
          "class": {
            "bg-info": _vm.selectedSuara.id == props.item.id
          },
          on: {
            click: function click($event) {
              return _vm.selectedRow(props.item);
            }
          }
        }, [!_vm.columnDataSuara[0].hide ? _c("td", [_vm._v("\n\t\t\t\t\t\t\t\t\t\t\t" + _vm._s(props.index + 1 + (+_vm.itemDataSuara.current_page - 1) * +_vm.itemDataSuara.per_page + ".") + "\n\t\t\t\t\t\t\t\t\t\t")]) : _vm._e(), _vm._v(" "), !_vm.columnDataSuara[1].hide ? _c("td", [_c("check-value", {
          attrs: {
            value: props.item.name
          }
        })], 1) : _vm._e(), _vm._v(" "), !_vm.columnDataSuara[2].hide ? _c("td", [_c("a", {
          staticClass: "pointer",
          attrs: {
            href: props.item.link,
            target: "_blank"
          }
        }, [_c("check-value", {
          attrs: {
            value: props.item.link.substring(8),
            trimLength: 100
          }
        })], 1)]) : _vm._e(), _vm._v(" "), !_vm.columnDataSuara[3].hide ? _c("td", [props.item.pemilihan_calon_id ? _c("span", {
          staticClass: "bg-orange-400 text-highlight"
        }, [_c("i", {
          staticClass: "icon-check"
        })]) : _c("span", {
          staticClass: "bg-teal-300 text-highlight"
        }, [_c("i", {
          staticClass: "icon-cross3"
        })])]) : _vm._e(), _vm._v(" "), !_vm.columnDataSuara[4].hide ? _c("td", [props.item.akses && props.item.akses.id ? _c("span", {
          staticClass: "bg-orange-400 text-highlight"
        }, [_c("i", {
          staticClass: "icon-check"
        })]) : _c("span", {
          staticClass: "bg-teal-300 text-highlight"
        }, [_c("i", {
          staticClass: "icon-cross3"
        })])]) : _vm._e()])];
      }
    }], null, false, 1873918937)
  }, [_c("template", {
    slot: "button-desktop"
  }, [_vm.form.suara_tipe == 1 ? _c("button", {
    staticClass: "btn btn-light mb-1",
    attrs: {
      disabled: _vm.form.suara_ok > 0
    },
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.modalOpen("tambah_suara");
      }
    }
  }, [_c("i", {
    staticClass: "icon-pencil5"
  }), _vm._v(" Tambah Suara\n\t\t\t\t\t\t\t\t\t")]) : _vm._e(), _vm._v(" "), _vm.form.suara_tipe == 1 ? _c("button", {
    staticClass: "btn btn-light mb-1",
    attrs: {
      disabled: !_vm.selectedSuara.id || _vm.form.suara_ok > 0
    },
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.modalOpen("ubah_suara");
      }
    }
  }, [_c("i", {
    staticClass: "icon-pencil5"
  }), _vm._v(" Ubah Suara\n\t\t\t\t\t\t\t\t\t")]) : _vm._e(), _vm._v(" "), _vm.form.suara_tipe == 1 ? _c("button", {
    staticClass: "btn btn-light mb-1",
    attrs: {
      disabled: !_vm.selectedSuara.id || _vm.form.suara_ok > 0
    },
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.modalOpen("hapus_suara");
      }
    }
  }, [_c("i", {
    staticClass: "icon-pencil5"
  }), _vm._v(" Hapus Suara\n\t\t\t\t\t\t\t\t\t")]) : _vm._e(), _vm._v(" "), _c("button", {
    staticClass: "btn btn-light mb-1",
    attrs: {
      disabled: !_vm.selectedSuara.id
    },
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.modalOpen("qrCode");
      }
    }
  }, [_c("i", {
    staticClass: "icon-qrcode"
  }), _vm._v(" Buat QR Code\n\t\t\t\t\t\t\t\t\t")]), _vm._v(" "), _c("button", {
    staticClass: "btn btn-light mb-1",
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.modalOpen("qrCodeAll");
      }
    }
  }, [_c("i", {
    staticClass: "icon-qrcode"
  }), _vm._v(" QR Code Pada Tabel\n\t\t\t\t\t\t\t\t\t")])]), _vm._v(" "), _c("template", {
    slot: "button-mobile"
  }, [_vm.form.suara_tipe == 1 ? _c("button", {
    staticClass: "btn btn-light btn-block mb-1",
    attrs: {
      disabled: _vm.form.suara_ok > 0
    },
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.modalOpen("tambah_suara");
      }
    }
  }, [_c("i", {
    staticClass: "icon-pencil5"
  }), _vm._v(" Tambah Suara\n\t\t\t\t\t\t\t\t\t")]) : _vm._e(), _vm._v(" "), _vm.form.suara_tipe == 1 ? _c("button", {
    staticClass: "btn btn-light btn-block mb-1",
    attrs: {
      disabled: !_vm.selectedSuara.id || _vm.form.suara_ok > 0
    },
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.modalOpen("ubah_suara");
      }
    }
  }, [_c("i", {
    staticClass: "icon-pencil5"
  }), _vm._v(" Ubah Suara\n\t\t\t\t\t\t\t\t\t")]) : _vm._e(), _vm._v(" "), _vm.form.suara_tipe == 1 ? _c("button", {
    staticClass: "btn btn-light btn-block mb-1",
    attrs: {
      disabled: !_vm.selectedSuara.id || _vm.form.suara_ok > 0
    },
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.modalOpen("hapus_suara");
      }
    }
  }, [_c("i", {
    staticClass: "icon-pencil5"
  }), _vm._v(" Hapus Suara\n\t\t\t\t\t\t\t\t\t")]) : _vm._e(), _vm._v(" "), _c("button", {
    staticClass: "btn btn-light btn-block mb-1",
    attrs: {
      disabled: !_vm.selectedSuara.id
    },
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.modalOpen("qrCode");
      }
    }
  }, [_c("i", {
    staticClass: "icon-qrcode"
  }), _vm._v(" Buat QR Code\n\t\t\t\t\t\t\t\t\t")]), _vm._v(" "), _c("button", {
    staticClass: "btn btn-light btn-block mb-1",
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.modalOpen("qrCodeAll");
      }
    }
  }, [_c("i", {
    staticClass: "icon-qrcode"
  }), _vm._v(" QR Code Pada Tabel\n\t\t\t\t\t\t\t\t\t")])])], 2)], 1)]), _vm._v(" "), _c("transition", {
    attrs: {
      "enter-active-class": "animated fadeIn",
      mode: "out-in"
    }
  }, [_c("div", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.tabName == "skor",
      expression: "tabName == 'skor'"
    }]
  }, [_vm.form.calon ? _c("div", {
    staticClass: "card"
  }, [_c("div", {
    staticClass: "card-header bg-white header-elements-inline"
  }, [_c("h5", {
    staticClass: "card-title"
  }, [_vm._v("Perolehan Skor")]), _vm._v(" "), _c("div", {
    staticClass: "header-elements"
  }, [_c("button", {
    staticClass: "btn btn-light btn-icon mb-1",
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
    staticClass: "icon-sync"
  }), _vm._v(" Reload Data\n\t\t\t\t\t\t\t\t\t\t")])])]), _vm._v(" "), _c("div", {
    staticClass: "card-body"
  }, _vm._l(_vm.formCalon, function (p, index) {
    return _c("div", {
      key: index
    }, [_c("div", {
      staticClass: "card card-body"
    }, [_c("div", {
      staticClass: "row"
    }, [_c("div", {
      staticClass: "col-sm-3 mb-1 mt-1"
    }, [_c("div", {
      staticClass: "row"
    }, [_c("div", {
      staticClass: "col-4"
    }, [p.gambar ? _c("img", {
      staticClass: "img-rounded img-fluid wmin-sm",
      attrs: {
        src: "/images/aktivis/" + p.gambar + "n.jpg",
        width: "35px"
      }
    }) : _c("img", {
      staticClass: "img-rounded img-fluid wmin-sm",
      attrs: {
        src: "/images/no_image.jpg",
        width: "35px"
      }
    })]), _vm._v(" "), _c("div", {
      staticClass: "col-8"
    }, [p.pivot ? _c("span", {
      staticClass: "badge badge-success"
    }, [_vm._v("No. Urut " + _vm._s(p.pivot.no_urut))]) : _vm._e(), _vm._v(" "), _c("br"), _vm._v(" "), _c("b", [_vm._v(_vm._s(p.name))])])])]), _vm._v(" "), _c("div", {
      staticClass: "col-sm-8 mb-1 mt-1"
    }, [_c("div", {
      staticClass: "progress"
    }, [_c("div", {
      staticClass: "progress-bar-striped bg-success",
      style: {
        width: Math.round(p.pivot.skor / _vm.form.suara * 100) + "%"
      }
    }, [_c("span", {
      staticClass: "text-default font-size-lg"
    }, [_vm._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t \n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t"), _c("b", [_vm._v(_vm._s(Math.round(p.pivot.skor / _vm.form.suara * 100) + "%"))]), _vm._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t          \n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t")])])])]), _vm._v(" "), _c("div", {
      staticClass: "col-sm-1 mb-1 mt-1"
    }, [_c("b", [_vm._v(_vm._s(p.pivot.skor) + " / " + _vm._s(_vm.form.suara))])])])])]);
  }), 0)]) : _vm._e()])])] : _vm.formStat == "loading" ? _c("div", [_vm._m(0)]) : _c("div", [_vm._m(1)])], 2)])]), _vm._v(" "), _c("app-modal", {
    attrs: {
      show: _vm.modalShow,
      state: _vm.modalState,
      size: _vm.modalSize,
      color: _vm.modalColor,
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
  }, [_c("template", {
    slot: "modal-title"
  }, [_vm._v("\n\t\t\t" + _vm._s(_vm.modalTitle) + "\n\t\t")]), _vm._v(" "), _c("template", {
    slot: "modal-body1"
  }), _vm._v(" "), _c("template", {
    slot: "modal-body2"
  }, [_vm.state == "qrCode" || _vm.state == "qrCodeInput" ? _c("qr-code", {
    attrs: {
      selectedItem: _vm.selectedSuara,
      title: _vm.form.name
    },
    on: {
      tutup: _vm.modalTutup
    }
  }) : _vm._e(), _vm._v(" "), _vm.state == "qrCodeAll" ? _c("qr-code-all", {
    attrs: {
      itemData: _vm.itemDataSuara,
      title: _vm.form.name
    },
    on: {
      tutup: _vm.modalTutup
    }
  }) : _vm._e()], 1), _vm._v(" "), _c("template", {
    slot: "modal-body3"
  }, [_vm.state == "tambah_suara" ? _c("form-kode-suara", {
    attrs: {
      kelas: _vm.kelas,
      id: _vm.form.id,
      id_cu: _vm.form.id_cu,
      mode: "store"
    },
    on: {
      tutup: _vm.modalTutup
    }
  }) : _vm._e(), _vm._v(" "), _vm.state == "ubah_suara" ? _c("form-kode-suara", {
    attrs: {
      kelas: _vm.kelas,
      id: _vm.form.id,
      id_cu: _vm.form.id_cu,
      selectedItem: _vm.selectedSuara,
      mode: "edit"
    },
    on: {
      tutup: _vm.modalTutup
    }
  }) : _vm._e()], 1)], 2)], 1);
};
var staticRenderFns = [function () {
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
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "card"
  }, [_c("div", {
    staticClass: "card-body"
  }, [_c("h3", [_vm._v("Oops terjadi kesalahan")])])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/pemilihan/formKodeSuara.vue?vue&type=template&id=2a27d33a":
/*!*********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/views/pemilihan/formKodeSuara.vue?vue&type=template&id=2a27d33a ***!
  \*********************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", [_vm.errors.any("form") && _vm.submited ? _c("message", {
    attrs: {
      title: "Oops, terjadi kesalahan",
      errorItem: _vm.errors.items
    }
  }) : _vm._e(), _vm._v(" "), _c("form", {
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
    staticClass: "form-group",
    "class": {
      "has-error": _vm.errors.has("form.name")
    }
  }, [_c("h5", {
    "class": {
      "text-danger": _vm.errors.has("form.name")
    }
  }, [_vm.errors.has("form.name") ? _c("i", {
    staticClass: "icon-cross2"
  }) : _vm._e(), _vm._v("\n\t\t\t\t\tNama: "), _c("wajib-badge")], 1), _vm._v(" "), _c("input", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }, {
      name: "model",
      rawName: "v-model",
      value: _vm.form.name,
      expression: "form.name"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      name: "name",
      placeholder: "Silahkan masukkan kode",
      "data-vv-as": "Kode"
    },
    domProps: {
      value: _vm.form.name
    },
    on: {
      keydown: function keydown($event) {
        if (!$event.type.indexOf("key") && _vm._k($event.keyCode, "space", 32, $event.key, [" ", "Spacebar"])) return null;
        $event.preventDefault();
      },
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "name", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm.errors.has("form.name") ? _c("small", {
    staticClass: "text-muted text-danger"
  }, [_c("i", {
    staticClass: "icon-arrow-small-right"
  }), _vm._v(" " + _vm._s(_vm.errors.first("form.name")) + "\n\t\t\t\t")]) : _c("small", {
    staticClass: "text-muted"
  }, [_vm._v(" ")])]), _vm._v(" "), _c("hr"), _vm._v(" "), _c("div", {
    staticClass: "text-center d-none d-md-block"
  }, [_c("button", {
    staticClass: "btn btn-light",
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.tutup.apply(null, arguments);
      }
    }
  }, [_c("i", {
    staticClass: "icon-cross"
  }), _vm._v(" Tutup")]), _vm._v(" "), _c("button", {
    staticClass: "btn btn-primary",
    attrs: {
      type: "submit",
      disabled: _vm.errors.any("form")
    }
  }, [_c("i", {
    staticClass: "icon-floppy-disk"
  }), _vm._v(" Simpan")])]), _vm._v(" "), _c("div", {
    staticClass: "d-block d-md-none"
  }, [_c("button", {
    staticClass: "btn btn-primary btn-block pb-2",
    attrs: {
      type: "submit",
      disabled: _vm.errors.any("form")
    }
  }, [_c("i", {
    staticClass: "icon-floppy-disk"
  }), _vm._v(" Simpan")]), _vm._v(" "), _c("button", {
    staticClass: "btn btn-light btn-block pb-2",
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.tutup.apply(null, arguments);
      }
    }
  }, [_c("i", {
    staticClass: "icon-cross"
  }), _vm._v(" Tutup")])])])], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./resources/assets/js/views/pemilihan/detail.vue":
/*!********************************************************!*\
  !*** ./resources/assets/js/views/pemilihan/detail.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _detail_vue_vue_type_template_id_4f15784c__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./detail.vue?vue&type=template&id=4f15784c */ "./resources/assets/js/views/pemilihan/detail.vue?vue&type=template&id=4f15784c");
/* harmony import */ var _detail_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./detail.vue?vue&type=script&lang=js */ "./resources/assets/js/views/pemilihan/detail.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _detail_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _detail_vue_vue_type_template_id_4f15784c__WEBPACK_IMPORTED_MODULE_0__["render"],
  _detail_vue_vue_type_template_id_4f15784c__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/views/pemilihan/detail.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/views/pemilihan/detail.vue?vue&type=script&lang=js":
/*!********************************************************************************!*\
  !*** ./resources/assets/js/views/pemilihan/detail.vue?vue&type=script&lang=js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_detail_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./detail.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/pemilihan/detail.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_detail_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/views/pemilihan/detail.vue?vue&type=template&id=4f15784c":
/*!**************************************************************************************!*\
  !*** ./resources/assets/js/views/pemilihan/detail.vue?vue&type=template&id=4f15784c ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_detail_vue_vue_type_template_id_4f15784c__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../node_modules/vue-loader/lib??vue-loader-options!./detail.vue?vue&type=template&id=4f15784c */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/pemilihan/detail.vue?vue&type=template&id=4f15784c");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_detail_vue_vue_type_template_id_4f15784c__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_detail_vue_vue_type_template_id_4f15784c__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/assets/js/views/pemilihan/formKodeSuara.vue":
/*!***************************************************************!*\
  !*** ./resources/assets/js/views/pemilihan/formKodeSuara.vue ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _formKodeSuara_vue_vue_type_template_id_2a27d33a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./formKodeSuara.vue?vue&type=template&id=2a27d33a */ "./resources/assets/js/views/pemilihan/formKodeSuara.vue?vue&type=template&id=2a27d33a");
/* harmony import */ var _formKodeSuara_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./formKodeSuara.vue?vue&type=script&lang=js */ "./resources/assets/js/views/pemilihan/formKodeSuara.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _formKodeSuara_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _formKodeSuara_vue_vue_type_template_id_2a27d33a__WEBPACK_IMPORTED_MODULE_0__["render"],
  _formKodeSuara_vue_vue_type_template_id_2a27d33a__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/views/pemilihan/formKodeSuara.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/views/pemilihan/formKodeSuara.vue?vue&type=script&lang=js":
/*!***************************************************************************************!*\
  !*** ./resources/assets/js/views/pemilihan/formKodeSuara.vue?vue&type=script&lang=js ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_formKodeSuara_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./formKodeSuara.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/pemilihan/formKodeSuara.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_formKodeSuara_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/views/pemilihan/formKodeSuara.vue?vue&type=template&id=2a27d33a":
/*!*********************************************************************************************!*\
  !*** ./resources/assets/js/views/pemilihan/formKodeSuara.vue?vue&type=template&id=2a27d33a ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_formKodeSuara_vue_vue_type_template_id_2a27d33a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../node_modules/vue-loader/lib??vue-loader-options!./formKodeSuara.vue?vue&type=template&id=2a27d33a */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/pemilihan/formKodeSuara.vue?vue&type=template&id=2a27d33a");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_formKodeSuara_vue_vue_type_template_id_2a27d33a__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_formKodeSuara_vue_vue_type_template_id_2a27d33a__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);