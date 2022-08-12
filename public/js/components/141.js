(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[141],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/jalinanLaporan/usia.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/views/jalinanLaporan/usia.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************/
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
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

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
      titleDesc: 'Mengelola Bantuan Solidaritas Jalinan Berdasarkan Usia',
      titleIcon: 'icon-archive',
      kelas: 'jalinanKlaim',
      isShowDetail: false,
      url: 'indexLaporanUsia',
      status: ''
    };
  },
  created: function created() {
    this.checkUser('laporan_jalinan_klaim');
    this.status = this.$route.params.status;
  },
  watch: {
    '$route': function $route(to, from) {
      // check current page meta
      this.status = this.$route.params.status;
    }
  },
  methods: {
    fetch: function fetch(awal, akhir, cu, status, dari, ke) {
      this.$router.push({
        name: 'jalinanLaporanKlaimUsiaTanggal',
        params: {
          awal: awal,
          akhir: akhir,
          status: status,
          cu: cu,
          jenis: 'usia',
          dari: dari,
          ke: ke
        }
      });
    },
    cari: function cari(awal, akhir, cu, status) {
      this.fetch(awal, akhir, cu, status, 'semua', 'semua', 'semua');
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
      var _dari = '';
      var _ke = '';

      if (value == '0 s.d. 1 tahun') {
        _dari = 1;
        _ke = 0;
      } else if (value == '> 1 s.d. 10 tahun') {
        _dari = 10;
        _ke = 1;
      } else if (value == '> 10 s.d. 20 tahun') {
        _dari = 20;
        _ke = 10;
      } else if (value == '> 20 s.d. 30 tahun') {
        _dari = 30;
        _ke = 20;
      } else if (value == '> 30 s.d. 40 tahun') {
        _dari = 40;
        _ke = 30;
      } else if (value == '> 40 s.d. 50 tahun') {
        _dari = 50;
        _ke = 40;
      } else if (value == '> 50 s.d. 60 tahun') {
        _dari = 60;
        _ke = 50;
      } else if (value == '> 60 s.d. 70 tahun') {
        _dari = 70;
        _ke = 60;
      } else if (value == '> 70 tahun') {
        _dari = 300;
        _ke = 70;
      } else {
        _dari = 'semua';
        _ke = 'semua';
      }

      this.fetch(this.$route.params.awal, this.$route.params.akhir, this.$route.params.cu, this.$route.params.status, _dari, _ke);
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/jalinanLaporan/usia.vue?vue&type=template&id=0b159cbe&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/views/jalinanLaporan/usia.vue?vue&type=template&id=0b159cbe& ***!
  \************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
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
        },
      }),
      _vm._v(" "),
      _c("div", { staticClass: "page-container" }, [
        _c("div", { staticClass: "page-content" }, [
          _c("div", { staticClass: "content-wrapper" }, [
            _c(
              "div",
              { staticClass: "content" },
              [
                _vm.itemDataStat === "fail"
                  ? _c("message", {
                      attrs: {
                        title: "Oops terjadi kesalahan:",
                        errorData: _vm.itemData,
                      },
                    })
                  : _vm._e(),
                _vm._v(" "),
                _c("select-data", {
                  attrs: { isCu: false },
                  on: { cari: _vm.cari },
                }),
                _vm._v(" "),
                _vm.$route.meta.mode == "laporan"
                  ? _c(
                      "div",
                      [
                        _c("table-kelompok", {
                          attrs: {
                            title: "Bantuan Solidaritas Per Usia",
                            itemData: _vm.itemData,
                            itemDataStat: _vm.itemDataStat,
                            url: _vm.url,
                            isCu: false,
                          },
                          on: {
                            bukaData: _vm.bukaData,
                            lihatSemua: _vm.bukaData,
                          },
                        }),
                        _vm._v(" "),
                        _c("hr"),
                        _vm._v(" "),
                        _c(
                          "button",
                          {
                            staticClass: "btn btn-light btn-block",
                            attrs: { type: "button" },
                            on: {
                              click: function ($event) {
                                $event.preventDefault()
                                return _vm.showDetail.apply(null, arguments)
                              },
                            },
                          },
                          [
                            !_vm.isShowDetail
                              ? _c("span", [
                                  _c("i", { staticClass: "icon-eye" }),
                                  _vm._v(
                                    " Buka semua data bantuan solidaritas Jalinan"
                                  ),
                                ])
                              : _c("span", [
                                  _c("i", { staticClass: "icon-eye-blocked" }),
                                  _vm._v(
                                    " Tutup data bantuan solidaritas Jalinan"
                                  ),
                                ]),
                          ]
                        ),
                        _vm._v(" "),
                        _c("hr"),
                        _vm._v(" "),
                        _vm.isShowDetail
                          ? _c(
                              "div",
                              [
                                _vm.status == "1"
                                  ? _c("table-data", {
                                      attrs: {
                                        title:
                                          "Bantuan Solidaritas Jalinan Menunggu",
                                        kelas: _vm.kelas,
                                        itemData: _vm.itemDataKlaim1,
                                        itemDataStat: _vm.itemDataStatKlaim1,
                                        status: "1",
                                        isSimple: true,
                                      },
                                    })
                                  : _vm._e(),
                                _vm._v(" "),
                                _vm.status == "2"
                                  ? _c("table-data", {
                                      attrs: {
                                        title:
                                          "Bantuan Solidaritas Jalinan Dokumen Tidak Lengkap",
                                        kelas: _vm.kelas,
                                        itemData: _vm.itemDataKlaim2,
                                        itemDataStat: _vm.itemDataStatKlaim2,
                                        status: "2",
                                        isSimple: true,
                                      },
                                    })
                                  : _vm._e(),
                                _vm._v(" "),
                                _vm.status == "3"
                                  ? _c("table-data", {
                                      attrs: {
                                        title:
                                          "Bantuan Solidaritas Jalinan Ditolak",
                                        kelas: _vm.kelas,
                                        itemData: _vm.itemDataKlaim3,
                                        itemDataStat: _vm.itemDataStatKlaim3,
                                        status: "3",
                                        isSimple: true,
                                      },
                                    })
                                  : _vm._e(),
                                _vm._v(" "),
                                _vm.status == "4"
                                  ? _c("table-data", {
                                      attrs: {
                                        title:
                                          "Bantuan Solidaritas Jalinan Disetujui",
                                        kelas: _vm.kelas,
                                        itemData: _vm.itemDataKlaim4,
                                        itemDataStat: _vm.itemDataStatKlaim4,
                                        status: "4",
                                        isSimple: true,
                                      },
                                    })
                                  : _vm._e(),
                                _vm._v(" "),
                                _vm.status == "5"
                                  ? _c("table-data", {
                                      attrs: {
                                        title:
                                          "Bantuan Solidaritas Jalinan Dicairkan",
                                        kelas: _vm.kelas,
                                        itemData: _vm.itemDataKlaim5,
                                        itemDataStat: _vm.itemDataStatKlaim5,
                                        status: "5",
                                        isSimple: true,
                                      },
                                    })
                                  : _vm._e(),
                                _vm._v(" "),
                                _vm.status == "6"
                                  ? _c("table-data", {
                                      attrs: {
                                        title:
                                          "Bantuan Solidaritas Jalinan Selesai",
                                        kelas: _vm.kelas,
                                        itemData: _vm.itemDataKlaim6,
                                        itemDataStat: _vm.itemDataStatKlaim6,
                                        status: "6",
                                        isSimple: true,
                                      },
                                    })
                                  : _vm._e(),
                              ],
                              1
                            )
                          : _vm._e(),
                      ],
                      1
                    )
                  : _vm._e(),
              ],
              1
            ),
          ]),
        ]),
      ]),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/assets/js/views/jalinanLaporan/usia.vue":
/*!***********************************************************!*\
  !*** ./resources/assets/js/views/jalinanLaporan/usia.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _usia_vue_vue_type_template_id_0b159cbe___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./usia.vue?vue&type=template&id=0b159cbe& */ "./resources/assets/js/views/jalinanLaporan/usia.vue?vue&type=template&id=0b159cbe&");
/* harmony import */ var _usia_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./usia.vue?vue&type=script&lang=js& */ "./resources/assets/js/views/jalinanLaporan/usia.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _usia_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _usia_vue_vue_type_template_id_0b159cbe___WEBPACK_IMPORTED_MODULE_0__["render"],
  _usia_vue_vue_type_template_id_0b159cbe___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/views/jalinanLaporan/usia.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/views/jalinanLaporan/usia.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/assets/js/views/jalinanLaporan/usia.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_usia_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./usia.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/jalinanLaporan/usia.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_usia_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/views/jalinanLaporan/usia.vue?vue&type=template&id=0b159cbe&":
/*!******************************************************************************************!*\
  !*** ./resources/assets/js/views/jalinanLaporan/usia.vue?vue&type=template&id=0b159cbe& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_usia_vue_vue_type_template_id_0b159cbe___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./usia.vue?vue&type=template&id=0b159cbe& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/jalinanLaporan/usia.vue?vue&type=template&id=0b159cbe&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_usia_vue_vue_type_template_id_0b159cbe___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_usia_vue_vue_type_template_id_0b159cbe___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);