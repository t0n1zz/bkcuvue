(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[156],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/jalinanLaporan/penyebab.vue?vue&type=script&lang=js":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/views/jalinanLaporan/penyebab.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _components_pageHeader_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/pageHeader.vue */ "./resources/assets/js/components/pageHeader.vue");
/* harmony import */ var _components_message_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/message.vue */ "./resources/assets/js/components/message.vue");
/* harmony import */ var _selectKelompok_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./selectKelompok.vue */ "./resources/assets/js/views/jalinanLaporan/selectKelompok.vue");
/* harmony import */ var _jalinanKlaim_table_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../jalinanKlaim/table.vue */ "./resources/assets/js/views/jalinanKlaim/table.vue");
/* harmony import */ var _tableKelompok__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tableKelompok */ "./resources/assets/js/views/jalinanLaporan/tableKelompok.vue");
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
    selectData: _selectKelompok_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    tableData: _jalinanKlaim_table_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
    tableKelompok: _tableKelompok__WEBPACK_IMPORTED_MODULE_5__["default"]
  },
  data: function data() {
    return {
      title: 'Laporan Bantuan Solidaritas Jalinan',
      titleDesc: 'Mengelola Bantuan Solidaritas Jalinan Berdasarkan Penyebab',
      titleIcon: 'icon-archive',
      kelas: 'jalinanKlaim',
      isShowDetail: false,
      url: 'indexLaporanPenyebab',
      status: ''
    };
  },
  created: function created() {
    this.checkUser('laporan_jalinan_klaim');
    // this.status = this.$route.params.status;s
  },

  watch: {
    '$route': function $route(to, from) {
      // check current page meta
      this.status = this.$route.params.status;
    }
  },
  methods: {
    fetch: function fetch(awal, akhir, cu, status, kategori) {
      this.$router.push({
        name: 'jalinanLaporanKlaimPenyebabTanggal',
        params: {
          awal: awal,
          akhir: akhir,
          status: status,
          cu: cu,
          jenis: 'penyebab',
          kategori: kategori
        }
      });
    },
    cari: function cari(awal, akhir, cu, status) {
      this.fetch(awal, akhir, cu, status, 'semua');
      this.isShowDetail = false;
    },
    checkUser: function checkUser(permission) {
      if (this.currentUser) {
        if (!this.currentUser.can || !this.currentUser.can[permission]) {
          this.$router.push('/notFound');
        }
      }
    },
    bukaData: function bukaData(value) {
      this.fetch(this.$route.params.awal, this.$route.params.akhir, this.$route.params.cu, this.$route.params.status, value);
      this.isShowDetail = true;
    },
    showDetail: function showDetail() {
      this.isShowDetail = !this.isShowDetail;
    }
  },
  computed: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('auth', {
    currentUser: 'currentUser'
  })), Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('jalinanKlaim', {
    itemData: 'dataS',
    itemDataStat: 'dataStatS',
    itemDataKlaim1: 'dataS1',
    itemDataStatKlaim1: 'dataStatS1',
    itemDataKlaim2: 'dataS2',
    itemDataStatKlaim2: 'dataStatS2',
    itemDataKlaim3: 'dataS3',
    itemDataStatKlaim3: 'dataStatS3',
    itemDataKlaim4: 'dataS4',
    itemDataStatKlaim4: 'dataStatS4',
    itemDataKlaim5: 'dataS5',
    itemDataStatKlaim5: 'dataStatS5',
    itemDataKlaim6: 'dataS6',
    itemDataStatKlaim6: 'dataStatS6',
    itemDataKlaim7: 'dataS7',
    itemDataStatKlaim7: 'dataStatS7'
  }))
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/jalinanLaporan/penyebab.vue?vue&type=template&id=f127a6f4":
/*!*********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/views/jalinanLaporan/penyebab.vue?vue&type=template&id=f127a6f4 ***!
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
    staticClass: "page-container"
  }, [_c("div", {
    staticClass: "page-content"
  }, [_c("div", {
    staticClass: "content-wrapper"
  }, [_c("div", {
    staticClass: "content"
  }, [_vm.itemDataStat === "fail" ? _c("message", {
    attrs: {
      title: "Oops terjadi kesalahan:",
      errorData: _vm.itemData
    }
  }) : _vm._e(), _vm._v(" "), _c("select-data", {
    attrs: {
      isCu: false
    },
    on: {
      cari: _vm.cari
    }
  }), _vm._v(" "), _vm.$route.meta.mode == "laporan" ? _c("div", [_c("table-kelompok", {
    attrs: {
      title: "Bantuan Solidaritas Per Penyebab",
      itemData: _vm.itemData,
      itemDataStat: _vm.itemDataStat,
      url: _vm.url,
      isCu: false
    },
    on: {
      bukaData: _vm.bukaData,
      lihatSemua: _vm.bukaData
    }
  }), _vm._v(" "), _c("hr"), _vm._v(" "), _c("button", {
    staticClass: "btn btn-light btn-block",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.showDetail.apply(null, arguments);
      }
    }
  }, [!_vm.isShowDetail ? _c("span", [_c("i", {
    staticClass: "icon-eye"
  }), _vm._v(" Buka semua data bantuan solidaritas Jalinan")]) : _c("span", [_c("i", {
    staticClass: "icon-eye-blocked"
  }), _vm._v(" Tutup data bantuan solidaritas Jalinan")])]), _vm._v(" "), _c("hr"), _vm._v(" "), _vm.isShowDetail ? _c("div", [_vm.status == "1" ? _c("table-data", {
    attrs: {
      title: "Bantuan Solidaritas Jalinan Menunggu",
      kelas: _vm.kelas,
      itemData: _vm.itemDataKlaim1,
      itemDataStat: _vm.itemDataStatKlaim1,
      status: "1",
      isSimple: true
    }
  }) : _vm._e(), _vm._v(" "), _vm.status == "2" ? _c("table-data", {
    attrs: {
      title: "Bantuan Solidaritas Jalinan Dokumen Tidak Lengkap",
      kelas: _vm.kelas,
      itemData: _vm.itemDataKlaim2,
      itemDataStat: _vm.itemDataStatKlaim2,
      status: "2",
      isSimple: true
    }
  }) : _vm._e(), _vm._v(" "), _vm.status == "3" ? _c("table-data", {
    attrs: {
      title: "Bantuan Solidaritas Jalinan Ditolak",
      kelas: _vm.kelas,
      itemData: _vm.itemDataKlaim3,
      itemDataStat: _vm.itemDataStatKlaim3,
      status: "3",
      isSimple: true
    }
  }) : _vm._e(), _vm._v(" "), _vm.status == "4" ? _c("table-data", {
    attrs: {
      title: "Bantuan Solidaritas Jalinan Disetujui",
      kelas: _vm.kelas,
      itemData: _vm.itemDataKlaim4,
      itemDataStat: _vm.itemDataStatKlaim4,
      status: "4",
      isSimple: true
    }
  }) : _vm._e(), _vm._v(" "), _vm.status == "5" ? _c("table-data", {
    attrs: {
      title: "Bantuan Solidaritas Jalinan Dicairkan",
      kelas: _vm.kelas,
      itemData: _vm.itemDataKlaim5,
      itemDataStat: _vm.itemDataStatKlaim5,
      status: "5",
      isSimple: true
    }
  }) : _vm._e(), _vm._v(" "), _vm.status == "6" ? _c("table-data", {
    attrs: {
      title: "Bantuan Solidaritas Jalinan Selesai",
      kelas: _vm.kelas,
      itemData: _vm.itemDataKlaim6,
      itemDataStat: _vm.itemDataStatKlaim6,
      status: "6",
      isSimple: true
    }
  }) : _vm._e()], 1) : _vm._e()], 1) : _vm._e()], 1)])])])], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./resources/assets/js/views/jalinanLaporan/penyebab.vue":
/*!***************************************************************!*\
  !*** ./resources/assets/js/views/jalinanLaporan/penyebab.vue ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _penyebab_vue_vue_type_template_id_f127a6f4__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./penyebab.vue?vue&type=template&id=f127a6f4 */ "./resources/assets/js/views/jalinanLaporan/penyebab.vue?vue&type=template&id=f127a6f4");
/* harmony import */ var _penyebab_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./penyebab.vue?vue&type=script&lang=js */ "./resources/assets/js/views/jalinanLaporan/penyebab.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _penyebab_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _penyebab_vue_vue_type_template_id_f127a6f4__WEBPACK_IMPORTED_MODULE_0__["render"],
  _penyebab_vue_vue_type_template_id_f127a6f4__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/views/jalinanLaporan/penyebab.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/views/jalinanLaporan/penyebab.vue?vue&type=script&lang=js":
/*!***************************************************************************************!*\
  !*** ./resources/assets/js/views/jalinanLaporan/penyebab.vue?vue&type=script&lang=js ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_penyebab_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./penyebab.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/jalinanLaporan/penyebab.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_penyebab_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/views/jalinanLaporan/penyebab.vue?vue&type=template&id=f127a6f4":
/*!*********************************************************************************************!*\
  !*** ./resources/assets/js/views/jalinanLaporan/penyebab.vue?vue&type=template&id=f127a6f4 ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_penyebab_vue_vue_type_template_id_f127a6f4__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../node_modules/vue-loader/lib??vue-loader-options!./penyebab.vue?vue&type=template&id=f127a6f4 */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/jalinanLaporan/penyebab.vue?vue&type=template&id=f127a6f4");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_penyebab_vue_vue_type_template_id_f127a6f4__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_penyebab_vue_vue_type_template_id_f127a6f4__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);