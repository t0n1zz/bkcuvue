(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[148],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/presensi/halamanPresensiInputKode.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/views/presensi/halamanPresensiInputKode.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _components_pageHeader_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/pageHeader.vue */ "./resources/assets/js/components/pageHeader.vue");
/* harmony import */ var _components_message_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/message.vue */ "./resources/assets/js/components/message.vue");
/* harmony import */ var _components_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/modal */ "./resources/assets/js/components/modal.vue");
/* harmony import */ var _formAlasan_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./formAlasan.vue */ "./resources/assets/js/views/presensi/formAlasan.vue");
/* harmony import */ var vue_cleave_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vue-cleave-component */ "./node_modules/vue-cleave-component/dist/vue-cleave.min.js");
/* harmony import */ var vue_cleave_component__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(vue_cleave_component__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _popUpPilihan_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./popUpPilihan.vue */ "./resources/assets/js/views/presensi/popUpPilihan.vue");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }







/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    pageHeader: _components_pageHeader_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    message: _components_message_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    appModal: _components_modal__WEBPACK_IMPORTED_MODULE_3__["default"],
    formAlasan: _formAlasan_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
    Cleave: vue_cleave_component__WEBPACK_IMPORTED_MODULE_5___default.a,
    popUpPilihan: _popUpPilihan_vue__WEBPACK_IMPORTED_MODULE_6__["default"]
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
      kode: '',
      judul: '',
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
        this.modalTitle = 'Terlambat';
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
      // this.$store.dispatch(this.kelas + '/resetUpdateStat');
    },
    modalConfirmOk: function modalConfirmOk() {
      if (this.modalTitle == 'ABSEN PULANG?') {
        this.myFunction();
      } else if (this.modalTitle == 'ISI PRESENSI SELESAI IZIN KELUAR KANTOR?') {
        this.$store.dispatch('presensi/storeSelesaiIzin', this.currentUser.id);
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
    },
    showPosition: function showPosition(position) {
      this.lat = position.coords.latitude;
      this.lon = position.coords.longitude;
      if (this.lat && this.lon) {
        this.permission = true;
        this.form.id_qr = null;
        this.form.name = this.currentUser.aktivis.name;
        this.form.id_user = this.currentUser.id;
        this.form.id_aktivis = this.currentUser.aktivis.id;
        this.form.id_cu = this.currentUser.id_cu;
      } else {
        this.permission = false;
      }
    },
    storeAbsen: function storeAbsen() {
      this.form.kode = this.kode;
      this.$store.dispatch('presensi/storePresensi', [this.form, this.lat, this.lon]);
    }
  },
  computed: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('auth', {
    currentUser: 'currentUser'
  })), Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('presensi', {
    itemData: 'dataS',
    itemDataStat: 'dataStatS',
    pesan: 'message',
    absenStat: 'absenStat',
    statAbsen: 'status',
    form: 'data',
    konfirmasi: 'confirm_pulang'
  }))
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/presensi/halamanPresensiInputKode.vue?vue&type=template&id=9ed862de&":
/*!********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/views/presensi/halamanPresensiInputKode.vue?vue&type=template&id=9ed862de& ***!
  \********************************************************************************************************************************************************************************************************************************************************************/
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
  }, [_vm._v("TIDAK DAPAT MEMBACA LOKASI")]), _vm._v(" "), _vm._m(0)]) : _c("div", [_c("cleave", {
    staticClass: "form-control",
    attrs: {
      name: "kode",
      options: _vm.cleaveOption.number16,
      placeholder: "Silahkan masukkan kode absen"
    },
    model: {
      value: _vm.kode,
      callback: function callback($$v) {
        _vm.kode = $$v;
      },
      expression: "kode"
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "d-none d-sm-block"
  }, [_c("button", {
    staticClass: "btn btn-primary",
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.storeAbsen();
      }
    }
  }, [_vm._v(" Absen")])])], 1), _vm._v(" "), _c("div", {
    staticClass: "text-center",
    staticStyle: {
      "font-weight": "bolder",
      "font-size": "50px"
    }
  }, [_vm._v(" \n                    " + _vm._s(_vm.pesan) + "\n                ")])])])]), _vm._v(" "), _c("app-modal", {
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
  }, [_vm._v("\n    \t\t\t" + _vm._s(_vm.modalTitle) + "\n    \t\t")]), _vm._v(" "), _c("template", {
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

/***/ "./resources/assets/js/views/presensi/halamanPresensiInputKode.vue":
/*!*************************************************************************!*\
  !*** ./resources/assets/js/views/presensi/halamanPresensiInputKode.vue ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _halamanPresensiInputKode_vue_vue_type_template_id_9ed862de___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./halamanPresensiInputKode.vue?vue&type=template&id=9ed862de& */ "./resources/assets/js/views/presensi/halamanPresensiInputKode.vue?vue&type=template&id=9ed862de&");
/* harmony import */ var _halamanPresensiInputKode_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./halamanPresensiInputKode.vue?vue&type=script&lang=js& */ "./resources/assets/js/views/presensi/halamanPresensiInputKode.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _halamanPresensiInputKode_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _halamanPresensiInputKode_vue_vue_type_template_id_9ed862de___WEBPACK_IMPORTED_MODULE_0__["render"],
  _halamanPresensiInputKode_vue_vue_type_template_id_9ed862de___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/views/presensi/halamanPresensiInputKode.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/views/presensi/halamanPresensiInputKode.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************!*\
  !*** ./resources/assets/js/views/presensi/halamanPresensiInputKode.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_halamanPresensiInputKode_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./halamanPresensiInputKode.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/presensi/halamanPresensiInputKode.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_halamanPresensiInputKode_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/views/presensi/halamanPresensiInputKode.vue?vue&type=template&id=9ed862de&":
/*!********************************************************************************************************!*\
  !*** ./resources/assets/js/views/presensi/halamanPresensiInputKode.vue?vue&type=template&id=9ed862de& ***!
  \********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_halamanPresensiInputKode_vue_vue_type_template_id_9ed862de___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../node_modules/vue-loader/lib??vue-loader-options!./halamanPresensiInputKode.vue?vue&type=template&id=9ed862de& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/presensi/halamanPresensiInputKode.vue?vue&type=template&id=9ed862de&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_halamanPresensiInputKode_vue_vue_type_template_id_9ed862de___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_halamanPresensiInputKode_vue_vue_type_template_id_9ed862de___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);