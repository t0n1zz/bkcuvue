(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[158],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/presensi/absenManajemen.vue?vue&type=script&lang=js":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/views/presensi/absenManajemen.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _components_pageHeader_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/pageHeader.vue */ "./resources/assets/js/components/pageHeader.vue");
/* harmony import */ var _components_message_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/message.vue */ "./resources/assets/js/components/message.vue");
/* harmony import */ var _components_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/modal */ "./resources/assets/js/components/modal.vue");
/* harmony import */ var _formAlasan_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./formAlasan.vue */ "./resources/assets/js/views/presensi/formAlasan.vue");
/* harmony import */ var _popUpPilihan_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./popUpPilihan.vue */ "./resources/assets/js/views/presensi/popUpPilihan.vue");
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
    appModal: _components_modal__WEBPACK_IMPORTED_MODULE_3__["default"],
    formAlasan: _formAlasan_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
    popUpPilihan: _popUpPilihan_vue__WEBPACK_IMPORTED_MODULE_5__["default"]
  },
  data: function data() {
    return {
      title: 'Absen',
      kelas: 'absen',
      titleIcon: 'icon-collaboration',
      permission: '',
      lat: '',
      lon: '',
      modalShow: false,
      modalState: '',
      modalTitle: '',
      modalColor: '',
      modalContent: '',
      modalSize: '',
      titleDesc: 'abcd',
      judul: ''
    };
  },
  created: function created() {
    this.myFunction();
  },
  watch: {
    absenStat: function absenStat(value) {
      this.modalShow = true;
      this.modalState = value;
      this.modalColor = '';
      var mess = this.pesan;
      if (value === "success") {
        this.modalTitle = mess;
      } else {
        this.modalTitle = 'Oops terjadi kesalahan :(';
        this.modalContent = this.pesan;
      }
    },
    statAbsen: function statAbsen(value) {
      if (value == 'terlambat') {
        this.judul = 'TERLAMBAT';
        this.modalShow = true;
        this.modalSize = '';
        this.modalState = 'normal1';
        this.modalColor = 'bg-primary';
        this.modalTitle = 'Alasan Terlambat';
        this.modalSize = 'modal-md';
        this.formModalMode = 'create';
      }
    },
    konfirmasi: function konfirmasi(value) {
      if (value == 'pulang awal') {
        this.modalShow = true;
        this.modalSize = '';
        this.modalState = 'normal2';
        this.modalColor = 'bg-primary';
        this.modalTitle = 'Silahkan Pilih';
        this.modalSize = 'modal-md';
        this.formModalMode = 'create';
      } else if (value == 'selesai izin') {
        this.modalState = 'confirm-tutup';
        this.modalColor = '';
        this.modalTitle = 'ISI PRESENSI SELESAI IZIN KELUAR KANTOR?';
        this.modalButton = 'IYA';
      }
    }
  },
  methods: {
    keperluan: function keperluan(value) {
      this.judul = value;
      this.modalShow = true;
      this.modalSize = '';
      this.modalState = 'normal1';
      this.modalColor = 'bg-primary';
      this.modalTitle = value;
      this.modalSize = 'modal-md';
      this.formModalMode = 'create';
    },
    kembali: function kembali() {
      // this.modalShow = true;
      this.modalSize = '';
      this.modalState = 'normal2';
      this.modalColor = 'bg-primary';
      this.modalTitle = 'Silahkan Pilih';
      this.modalSize = 'modal-md';
      this.formModalMode = 'create';
    },
    myFunction: function myFunction() {
      // Check if geolocation is supported by the browser
      if ("geolocation" in navigator) {
        // Check if geolocation permission is denied
        if (navigator.permissions && navigator.permissions.query) {
          navigator.permissions.query({
            name: "geolocation"
          }).then(function (permissionStatus) {
            if (permissionStatus.state === "denied") {
              // Prompt user to grant permission again
              navigator.permissions.request({
                name: "geolocation"
              }).then(function () {
                // Permission granted, do something
              });
            } else {
              // Permission already granted, do something
            }
          });
        } else {
          // Permission API not supported, do something
        }
      } else {
        // Geolocation not supported, do something
      }
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(this.showPosition);
      } else {
        this.error = "Geolocation is not supported.";
      }
    },
    modalTutup: function modalTutup() {
      this.modalShow = false;
    },
    modalConfirmOk: function modalConfirmOk() {
      if (this.modalTitle == 'ABSEN PULANG?') {
        this.myFunction();
      } else if (this.modalTitle == 'ISI PRESENSI SELESAI IZIN KELUAR KANTOR?') {
        this.$store.dispatch('presensi/storeSelesaiIzin', this.currentUser.id);
      }
    },
    modalBackgroundClick: function modalBackgroundClick() {},
    showPosition: function showPosition(position) {
      this.lat = position.coords.latitude;
      this.lon = position.coords.longitude;
      if (this.lat && this.lon) {
        this.permission = true;
        this.form.kode = this.$route.params.kode_absen;
        this.form.id_qr = this.$route.params.id_qr;
        this.form.id_user = this.currentUser.id;
        this.form.id_aktivis = this.currentUser.aktivis.id;
        this.form.name = this.currentUser.aktivis.name;
        this.form.id_cu = this.currentUser.id_cu;
        var lat = this.lat;
        var lon = this.lon;
        this.$store.dispatch('presensi/storePresensi', [this.form, lat, lon]);
      } else {
        this.permission = false;
      }
    },
    storeSelesaiIzin: function storeSelesaiIzin() {}
  },
  computed: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('auth', {
    currentUser: 'currentUser'
  })), Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('presensi', {
    itemData: 'dataS',
    itemDataStat: 'dataStatS',
    pesan: 'message',
    absenStat: 'absenStat',
    statAbsen: 'status',
    form: 'form',
    konfirmasi: 'confirm_pulang'
  }))
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/presensi/absenManajemen.vue?vue&type=template&id=6108c836":
/*!*********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/views/presensi/absenManajemen.vue?vue&type=template&id=6108c836 ***!
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
  return _c("div", [_c("page-header", {
    attrs: {
      title: _vm.title,
      titleDesc: _vm.titleDesc,
      titleIcon: _vm.titleIcon
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "page-content pt-0"
  }, [_c("div", {
    staticClass: "content-wrapper"
  }, [_c("div", {
    staticClass: "content"
  }, [_vm.permission == false ? _c("div", [_c("h1", {
    staticStyle: {
      "font-weight": "700"
    }
  }, [_vm._v("TIDAK DAPAT MEMBACA LOKASI")]), _vm._v(" "), _vm._m(0)]) : _vm._e(), _vm._v(" "), _vm.modalShow == false ? _c("div", {
    staticClass: "text-center",
    staticStyle: {
      "font-weight": "bolder",
      "font-size": "50px"
    }
  }, [_vm._v(" \n                    " + _vm._s(_vm.pesan) + "\n                ")]) : _vm._e()])])]), _vm._v(" "), _c("app-modal", {
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
  }, [_c("form-alasan", {
    attrs: {
      title: _vm.judul,
      id_qr: this.$route.params.id_qr
    },
    on: {
      tutup: _vm.modalTutup,
      kembali: _vm.kembali
    }
  })], 1), _vm._v(" "), _c("template", {
    slot: "modal-body2"
  }, [_c("pop-up-pilihan", {
    on: {
      tutup: _vm.modalTutup,
      kirim: _vm.keperluan
    }
  })], 1)], 2)], 1);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("ul", [_c("li", [_vm._v("Lakukan Reload/Refresh Halaman")]), _vm._v(" "), _c("li", [_vm._v("Kemudian Izinkan Permintaan Pembacaan Lokasi")]), _vm._v(" "), _c("li", [_vm._v("Jika Tidak muncul Permintaan Izin Pembacaan Lokasi, Clear Cache Browser Anda")]), _vm._v(" "), _c("li", [_vm._v("Kemudian Lakukan Login Ulang, dan Izinkan pembacaan Lokasi")])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./resources/assets/js/views/presensi/absenManajemen.vue":
/*!***************************************************************!*\
  !*** ./resources/assets/js/views/presensi/absenManajemen.vue ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _absenManajemen_vue_vue_type_template_id_6108c836__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./absenManajemen.vue?vue&type=template&id=6108c836 */ "./resources/assets/js/views/presensi/absenManajemen.vue?vue&type=template&id=6108c836");
/* harmony import */ var _absenManajemen_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./absenManajemen.vue?vue&type=script&lang=js */ "./resources/assets/js/views/presensi/absenManajemen.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _absenManajemen_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _absenManajemen_vue_vue_type_template_id_6108c836__WEBPACK_IMPORTED_MODULE_0__["render"],
  _absenManajemen_vue_vue_type_template_id_6108c836__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/views/presensi/absenManajemen.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/views/presensi/absenManajemen.vue?vue&type=script&lang=js":
/*!***************************************************************************************!*\
  !*** ./resources/assets/js/views/presensi/absenManajemen.vue?vue&type=script&lang=js ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_absenManajemen_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./absenManajemen.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/presensi/absenManajemen.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_absenManajemen_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/views/presensi/absenManajemen.vue?vue&type=template&id=6108c836":
/*!*********************************************************************************************!*\
  !*** ./resources/assets/js/views/presensi/absenManajemen.vue?vue&type=template&id=6108c836 ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_absenManajemen_vue_vue_type_template_id_6108c836__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../node_modules/vue-loader/lib??vue-loader-options!./absenManajemen.vue?vue&type=template&id=6108c836 */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/presensi/absenManajemen.vue?vue&type=template&id=6108c836");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_absenManajemen_vue_vue_type_template_id_6108c836__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_absenManajemen_vue_vue_type_template_id_6108c836__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);