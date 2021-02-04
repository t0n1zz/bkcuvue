(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[97],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/pageHeader.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/pageHeader.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
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

/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    title: {
      "default": ''
    },
    titleIcon: {
      "default": ''
    },
    titleDesc: {
      "default": ''
    },
    level: {
      "default": 1
    },
    level2Title: {
      "default": ''
    },
    level2Route: {
      "default": ''
    }
  },
  methods: {
    level2Back: function level2Back() {
      this.$emit('level2Back');
    },
    route1: function route1() {
      if (this.btn1RouteParams) {
        this.$router.push({
          name: this.btn1Route,
          params: {
            cu: this.btn1RouteParams
          }
        });
      } else {
        this.$router.push({
          name: this.btn1Route
        });
      }
    },
    route2: function route2() {
      if (this.btn2RouteParams) {
        this.$router.push({
          name: this.btn2Route,
          params: {
            cu: this.btn2RouteParams
          }
        });
      } else {
        this.$router.push({
          name: this.btn2Route
        });
      }
    },
    route3: function route3() {
      if (this.btn3RouteParams) {
        this.$router.push({
          name: this.btn3Route,
          params: {
            cu: this.btn3RouteParams
          }
        });
      } else {
        this.$router.push({
          name: this.btn3Route
        });
      }
    }
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('auth', {
    currentUser: 'currentUser'
  }))
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/sistem/changelog.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/views/sistem/changelog.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_pageHeader_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/pageHeader.vue */ "./resources/assets/js/components/pageHeader.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    pageHeader: _components_pageHeader_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      title: 'Changelog',
      titleDesc: 'Sejarah penambahan fitur dan perbaikan pada sistem',
      titleIcon: 'icon-list'
    };
  },
  created: function created() {
    window.scrollTo(0, 0);
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/pageHeader.vue?vue&type=template&id=0af8ed53&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/pageHeader.vue?vue&type=template&id=0af8ed53& ***!
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
  return _c("div", [
    _c("div", { staticClass: "page-header" }, [
      _c(
        "div",
        { staticClass: "page-header-content header-elements-md-inline" },
        [
          _c("div", { staticClass: "page-title d-flex" }, [
            _c("h4", [
              _c("i", { staticClass: "mr-2", class: _vm.titleIcon }),
              _vm._v(" "),
              _c("span", { staticClass: "font-weight-semibold" }, [
                _vm._v(_vm._s(_vm.title))
              ]),
              _vm._v(" "),
              _c("small", { staticClass: "d-block text-muted" }, [
                _vm._v(_vm._s(_vm.titleDesc))
              ])
            ])
          ]),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "header-elements d-none py-0 mb-3 mb-md-0" },
            [
              _vm.level === 1
                ? _c(
                    "div",
                    { staticClass: "breadcrumb" },
                    [
                      _c(
                        "router-link",
                        {
                          staticClass: "breadcrumb-item",
                          attrs: { to: { name: "dashboard" } }
                        },
                        [
                          _c("i", { staticClass: "icon-home4" }),
                          _vm._v("  Dashboard ")
                        ]
                      ),
                      _vm._v(" "),
                      _c("span", { staticClass: "breadcrumb-item active" }, [
                        _vm._v(_vm._s(_vm.title))
                      ])
                    ],
                    1
                  )
                : _vm._e(),
              _vm._v(" "),
              _vm.level === 2
                ? _c(
                    "div",
                    { staticClass: "breadcrumb" },
                    [
                      _c(
                        "router-link",
                        {
                          staticClass: "breadcrumb-item",
                          attrs: { to: { name: "dashboard" } }
                        },
                        [
                          _c("i", { staticClass: "icon-home4" }),
                          _vm._v(" Dashboard ")
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "a",
                        {
                          staticClass: "breadcrumb-item",
                          attrs: { href: "#" },
                          on: {
                            click: function($event) {
                              $event.preventDefault()
                              return _vm.level2Back()
                            }
                          }
                        },
                        [_vm._v(_vm._s(_vm.level2Title))]
                      ),
                      _vm._v(" "),
                      _c("span", { staticClass: "breadcrumb-item active" }, [
                        _vm._v(_vm._s(_vm.title))
                      ])
                    ],
                    1
                  )
                : _vm._e(),
              _vm._v(" "),
              _vm.level === 3
                ? _c(
                    "div",
                    { staticClass: "breadcrumb" },
                    [_vm._t("breadcrumb")],
                    2
                  )
                : _vm._e()
            ]
          )
        ]
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/sistem/changelog.vue?vue&type=template&id=1bfa1552&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/views/sistem/changelog.vue?vue&type=template&id=1bfa1552& ***!
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
      _c("page-header", {
        attrs: {
          title: _vm.title,
          titleDesc: _vm.titleDesc,
          titleIcon: _vm.titleIcon
        }
      }),
      _vm._v(" "),
      _vm._m(0)
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "page-content pt-0" }, [
      _c("div", { staticClass: "content-wrapper" }, [
        _c("div", { staticClass: "content" }, [
          _c(
            "div",
            {
              staticClass: "card-group-control card-group-control-right",
              attrs: { id: "accordion-control-right" }
            },
            [
              _c("div", { staticClass: "card" }, [
                _c("div", { staticClass: "card-header" }, [
                  _c("h5", { staticClass: "card-title" }, [
                    _c(
                      "a",
                      {
                        staticClass: "text-default",
                        attrs: { "data-toggle": "collapse", href: "#v337" }
                      },
                      [
                        _vm._v("Version 3.3.7"),
                        _c("small", { staticClass: "text-muted" }, [
                          _vm._v(" / 4 Februari 2021")
                        ])
                      ]
                    )
                  ])
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass: "collapse show",
                    attrs: {
                      id: "v337",
                      "data-parent": "#accordion-control-right"
                    }
                  },
                  [
                    _c("div", { staticClass: "card-body" }, [
                      _c("p", { staticClass: "mb-3" }, [
                        _vm._v(
                          "Update versi menawarkan perbaikan pada klaim JALINAN dan menawarkan fitur baru yaitu pemilihan pengurus dan pengawas\n                    "
                        ),
                        _c("br"),
                        _c("br"),
                        _vm._v(
                          "\n                    Berikut adalah rincian perubahan pada versi ini:"
                        )
                      ]),
                      _vm._v(" "),
                      _c("ul", { staticClass: "list" }, [
                        _c("li", [
                          _vm._v(
                            "Penambahan fitur untuk melakukan pemilihan untuk aktivis CU yang bisa digunakan untuk melaksanakan pemilihan online untuk pengurus dan pengawas"
                          )
                        ]),
                        _vm._v(" "),
                        _c("li", [
                          _vm._v(
                            "Penambahan fitur untuk melihat informasi klaim JALINAN secara detail bagi CU"
                          )
                        ]),
                        _vm._v(" "),
                        _c("li", [
                          _vm._v(
                            "Penambahan fitur pada lihat klaim dan analisis klaim untuk bagian dokumen hanya menampilkan dokumen yang dilampirkan/diupload saja. Apabila tidak ada dokumen maka tombol untuk melihat dokumen tersebut tidak muncul"
                          )
                        ]),
                        _vm._v(" "),
                        _c("li", [
                          _vm._v(
                            "Penambahan fitur pada analisis klaim yaitu melakukan penolakan klaim terhadap klaim yang salah pilih atau salah input dan berhasil masuk sampai ke bagian menunggu dari proses klaim JALINAN"
                          )
                        ]),
                        _vm._v(" "),
                        _c("li", [_vm._v("Perbaikan bug pada Klaim JALINAN")]),
                        _vm._v(" "),
                        _c("li", [_vm._v("Perbaikan bug pada hak akses")]),
                        _vm._v(" "),
                        _c("li", [
                          _vm._v("Perbaikan bug tampilan dibeberapa bagian")
                        ])
                      ])
                    ])
                  ]
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "card" }, [
                _c("div", { staticClass: "card-header" }, [
                  _c("h5", { staticClass: "card-title" }, [
                    _c(
                      "a",
                      {
                        staticClass: "text-default collapsed",
                        attrs: { "data-toggle": "collapse", href: "#v336" }
                      },
                      [
                        _vm._v("Version 3.3.6"),
                        _c("small", { staticClass: "text-muted" }, [
                          _vm._v(" / 4 Januari 2021")
                        ])
                      ]
                    )
                  ])
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass: "collapse",
                    attrs: {
                      id: "v336",
                      "data-parent": "#accordion-control-right"
                    }
                  },
                  [
                    _c("div", { staticClass: "card-body" }, [
                      _c("p", { staticClass: "mb-3" }, [
                        _vm._v(
                          "Update versi menawarkan peningkatan performa, keamanan dan perbaikan bug\n                    "
                        ),
                        _c("br"),
                        _c("br"),
                        _vm._v(
                          "\n                    Berikut adalah rincian perubahan pada versi ini:"
                        )
                      ]),
                      _vm._v(" "),
                      _c("ul", { staticClass: "list" }, [
                        _c("li", [
                          _vm._v(
                            "Penambahan fitur untuk membuat QR Code secara banyak pada aset tetap"
                          )
                        ]),
                        _vm._v(" "),
                        _c("li", [
                          _vm._v(
                            "Pengoptimalisasian akses aplikasi menjadi lebih cepat khususnya dalam jaringan internet yang lambat"
                          )
                        ]),
                        _vm._v(" "),
                        _c("li", [
                          _vm._v(
                            "Peningkatan sistem keamanan terhadap serangan DDoS"
                          )
                        ]),
                        _vm._v(" "),
                        _c("li", [
                          _vm._v("Perbaikan pada pengubahan hak akses user")
                        ]),
                        _vm._v(" "),
                        _c("li", [
                          _vm._v("Perbaikan bug tampilan dibeberapa bagian")
                        ])
                      ])
                    ])
                  ]
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "card" }, [
                _c("div", { staticClass: "card-header" }, [
                  _c("h5", { staticClass: "card-title" }, [
                    _c(
                      "a",
                      {
                        staticClass: "text-default collapsed",
                        attrs: { "data-toggle": "collapse", href: "#v335" }
                      },
                      [
                        _vm._v("Version 3.3.5"),
                        _c("small", { staticClass: "text-muted" }, [
                          _vm._v(" / 24 Oktober 2020")
                        ])
                      ]
                    )
                  ])
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass: "collapse",
                    attrs: {
                      id: "v335",
                      "data-parent": "#accordion-control-right"
                    }
                  },
                  [
                    _c("div", { staticClass: "card-body" }, [
                      _c("p", { staticClass: "mb-3" }, [
                        _vm._v(
                          "Update versi menawarkan perbaikan dan peningkatan pada self assesment dan penambahan fitur untuk mengisi dan mengupload transaksi anggota CU\n                    "
                        ),
                        _c("br"),
                        _c("br"),
                        _vm._v(
                          "\n                    Berikut adalah rincian perubahan pada versi ini:"
                        )
                      ]),
                      _vm._v(" "),
                      _c("ul", { staticClass: "list" }, [
                        _c("li", [
                          _vm._v(
                            "Penambahan download excel untuk hasil self assesment untuk masing-masing perspektif"
                          )
                        ]),
                        _vm._v(" "),
                        _c("li", [
                          _vm._v(
                            "Peningkatan dan perbaikan pada update data secara real time untuk self assesment"
                          )
                        ]),
                        _vm._v(" "),
                        _c("li", [
                          _vm._v(
                            "Penambahan fitur upload excel transaksi simpanan dan pinjaman anggota CU"
                          )
                        ]),
                        _vm._v(" "),
                        _c("li", [
                          _vm._v(
                            "Penambahan fitur mengisi transaksi simpanan dan pinjaman anggota CU"
                          )
                        ]),
                        _vm._v(" "),
                        _c("li", [
                          _vm._v("Perbaikan bug tampilan dibeberapa bagian")
                        ])
                      ])
                    ])
                  ]
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "card" }, [
                _c("div", { staticClass: "card-header" }, [
                  _c("h5", { staticClass: "card-title" }, [
                    _c(
                      "a",
                      {
                        staticClass: "text-default collapsed",
                        attrs: { "data-toggle": "collapse", href: "#v334" }
                      },
                      [
                        _vm._v("Version 3.3.4"),
                        _c("small", { staticClass: "text-muted" }, [
                          _vm._v(" / 12 Oktober 2020")
                        ])
                      ]
                    )
                  ])
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass: "collapse",
                    attrs: {
                      id: "v334",
                      "data-parent": "#accordion-control-right"
                    }
                  },
                  [
                    _c("div", { staticClass: "card-body" }, [
                      _c("p", { staticClass: "mb-3" }, [
                        _vm._v(
                          "Update versi menawarkan penambahan pada bagian tata kelola\n                    "
                        ),
                        _c("br"),
                        _c("br"),
                        _vm._v(
                          "\n                    Berikut adalah rincian perubahan pada versi ini:"
                        )
                      ]),
                      _vm._v(" "),
                      _c("ul", { staticClass: "list" }, [
                        _c("li", [
                          _vm._v("Penambahan upload bukti pada monitoring")
                        ]),
                        _vm._v(" "),
                        _c("li", [
                          _vm._v(
                            "Penambahan fitur real time data update di monitoring dimana ketika dilakukan penambahan di salah satu perangkat, maka di perangkat lain otomatis akan muncul perubahannya"
                          )
                        ]),
                        _vm._v(" "),
                        _c("li", [
                          _vm._v(
                            "Penambahan tombol simpan draft untuk masing-masing perspektif pada seft assesment yang memungkinkan untuk melakukan penyimpanan di tiap bagian per perspektif"
                          )
                        ]),
                        _vm._v(" "),
                        _c("li", [
                          _vm._v(
                            "Peningkatan sistem upload anggota CU dengan excel"
                          )
                        ]),
                        _vm._v(" "),
                        _c("li", [
                          _vm._v("Perbaikan bug tampilan dibeberapa bagian")
                        ])
                      ])
                    ])
                  ]
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "card" }, [
                _c("div", { staticClass: "card-header" }, [
                  _c("h5", { staticClass: "card-title" }, [
                    _c(
                      "a",
                      {
                        staticClass: "text-default collapsed",
                        attrs: { "data-toggle": "collapse", href: "#v333" }
                      },
                      [
                        _vm._v("Version 3.3.3"),
                        _c("small", { staticClass: "text-muted" }, [
                          _vm._v(" / 18 September 2020")
                        ])
                      ]
                    )
                  ])
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass: "collapse",
                    attrs: {
                      id: "v333",
                      "data-parent": "#accordion-control-right"
                    }
                  },
                  [
                    _c("div", { staticClass: "card-body" }, [
                      _c("p", { staticClass: "mb-3" }, [
                        _vm._v(
                          "Update versi menawarkan perbaikan dan peningkatan pada klaim JALINAN, notifikasi, dan anggota CU\n                    "
                        ),
                        _c("br"),
                        _c("br"),
                        _vm._v(
                          "\n                    Berikut adalah rincian perubahan pada versi ini:"
                        )
                      ]),
                      _vm._v(" "),
                      _c("ul", { staticClass: "list" }, [
                        _c("li", [
                          _vm._v(
                            "Penambahan upload foto buku simpanan, buku pinjaman anggota CU, dan surat permohonan menjadi anggota yang akan melakukan Klaim JALINAN"
                          )
                        ]),
                        _vm._v(" "),
                        _c("li", [
                          _vm._v("Penambahan fitur untuk mutasi anggota CU")
                        ]),
                        _vm._v(" "),
                        _c("li", [
                          _vm._v(
                            "Peningkatan sistem notifikasi yang menampilkan notifikasi secara real time"
                          )
                        ]),
                        _vm._v(" "),
                        _c("li", [
                          _vm._v(
                            "Peningkatan sistem upload anggota CU dengan excel"
                          )
                        ]),
                        _vm._v(" "),
                        _c("li", [
                          _vm._v("Perbaikan bug pada notifikasi monitoring")
                        ])
                      ])
                    ])
                  ]
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "card" }, [
                _c("div", { staticClass: "card-header" }, [
                  _c("h5", { staticClass: "card-title" }, [
                    _c(
                      "a",
                      {
                        staticClass: "text-default collapsed",
                        attrs: { "data-toggle": "collapse", href: "#v332" }
                      },
                      [
                        _vm._v("Version 3.3.2"),
                        _c("small", { staticClass: "text-muted" }, [
                          _vm._v(" / 27 Agustus 2020")
                        ])
                      ]
                    )
                  ])
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass: "collapse",
                    attrs: {
                      id: "v332",
                      "data-parent": "#accordion-control-right"
                    }
                  },
                  [
                    _c("div", { staticClass: "card-body" }, [
                      _c("p", { staticClass: "mb-3" }, [
                        _vm._v(
                          "Update versi menawarkan peningkatan fungsi pemakaian pada beberapa bagian dan juga meningkatkan kecepatan dalam penyaluran update versi SIMO\n                    "
                        ),
                        _c("br"),
                        _c("br"),
                        _vm._v(
                          "\n                    Berikut adalah rincian perubahan pada versi ini:"
                        )
                      ]),
                      _vm._v(" "),
                      _c("ul", { staticClass: "list" }, [
                        _c("li", [
                          _vm._v(
                            "Peningkatan dalam kecepatan untuk menyalurkan update versi SIMO kepada para pengguna"
                          )
                        ]),
                        _vm._v(" "),
                        _c("li", [
                          _vm._v(
                            "Peningkatan pada fitur upload data anggota cu"
                          )
                        ]),
                        _vm._v(" "),
                        _c("li", [
                          _vm._v(
                            "Penambahan kategori pekerjaan di aktivis yaitu kolektor dan kelompok inti"
                          )
                        ]),
                        _vm._v(" "),
                        _c("li", [
                          _vm._v(
                            "Penambahan informasi mutasi transaksi untuk simpanan dan pinjaman anggota cu pada form analisa klaim JALINAN"
                          )
                        ]),
                        _vm._v(" "),
                        _c("li", [
                          _vm._v("Perubahan pada format surat untuk JALINAN")
                        ]),
                        _vm._v(" "),
                        _c("li", [
                          _vm._v(
                            "Perbaikan pada bagian self assesment agar ketika BKCU melakukan penilaian maka CU tidak dapat melakukan pengubahan data lagi"
                          )
                        ]),
                        _vm._v(" "),
                        _c("li", [_vm._v("Perbaikan bug pada beberapa tempat")])
                      ])
                    ])
                  ]
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "card" }, [
                _c("div", { staticClass: "card-header" }, [
                  _c("h5", { staticClass: "card-title" }, [
                    _c(
                      "a",
                      {
                        staticClass: "text-default collapsed",
                        attrs: { "data-toggle": "collapse", href: "#v331" }
                      },
                      [
                        _vm._v("Version 3.3.1"),
                        _c("small", { staticClass: "text-muted" }, [
                          _vm._v(" / 1 Juli 2020")
                        ])
                      ]
                    )
                  ])
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass: "collapse",
                    attrs: {
                      id: "v331",
                      "data-parent": "#accordion-control-right"
                    }
                  },
                  [
                    _c("div", { staticClass: "card-body" }, [
                      _c("p", { staticClass: "mb-3" }, [
                        _vm._v(
                          "Update versi ini fokus pada peningkatan pada pengelolaan data user dan peningkatan pada tampilan secara umum.\n                    "
                        ),
                        _c("br"),
                        _c("br"),
                        _vm._v(
                          "\n                    Berikut adalah rincian perubahan pada versi ini:"
                        )
                      ]),
                      _vm._v(" "),
                      _c("ul", { staticClass: "list" }, [
                        _c("li", [
                          _vm._v(
                            "Penambahan halaman activity log yang berguna untuk menampilkan aktivitas semua user"
                          )
                        ]),
                        _vm._v(" "),
                        _c("li", [
                          _vm._v(
                            "Peningkatan pada tampilan informasi aktivitas user"
                          )
                        ]),
                        _vm._v(" "),
                        _c("li", [
                          _vm._v(
                            "Peningkatan pada tampilan pemilihan hak akses user"
                          )
                        ]),
                        _vm._v(" "),
                        _c("li", [
                          _vm._v(
                            "Peningkatan pada pembuatan user dan pengubahan password yang mengharuskan password menggunakan password yang kuat"
                          )
                        ]),
                        _vm._v(" "),
                        _c("li", [
                          _vm._v("Peningkatan komponen dasar pada tampilan")
                        ]),
                        _vm._v(" "),
                        _c("li", [_vm._v("Perbaikan pada pemilihan tanggal")]),
                        _vm._v(" "),
                        _c("li", [_vm._v("Perbaikan bug pada beberapa tempat")])
                      ])
                    ])
                  ]
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "card" }, [
                _c("div", { staticClass: "card-header" }, [
                  _c("h5", { staticClass: "card-title" }, [
                    _c(
                      "a",
                      {
                        staticClass: "text-default collapsed",
                        attrs: {
                          "data-toggle": "collapse",
                          href: "#v330",
                          "aria-expanded": "false"
                        }
                      },
                      [
                        _vm._v("Version 3.3.0"),
                        _c("small", { staticClass: "text-muted" }, [
                          _vm._v(" /  19 Juni 2020")
                        ])
                      ]
                    )
                  ])
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass: "collapse",
                    attrs: {
                      id: "v330",
                      "data-parent": "#accordion-control-right"
                    }
                  },
                  [
                    _c("div", { staticClass: "card-body" }, [
                      _c("p", { staticClass: "mb-3" }, [
                        _vm._v(
                          "Update versi ini merupakan perbaikan beberapa hal pada bagian diklat BKCU dan pertemuan BKCU.\n                    "
                        ),
                        _c("br"),
                        _c("br"),
                        _vm._v(
                          "\n                    Berikut adalah rincian perubahan pada versi ini:"
                        )
                      ]),
                      _vm._v(" "),
                      _c("ul", { staticClass: "list" }, [
                        _c("li", [
                          _vm._v(
                            "Perbaikan bug tombol daftar peserta dibagian diklat dan pertemuan BKCU yang tidak muncul"
                          )
                        ]),
                        _vm._v(" "),
                        _c("li", [
                          _vm._v(
                            "Perbaikan bug tombol-tombol pada tabel peserta dibagian diklat dan pertemuan BKCU yang tidak muncul pada perangkat mobile"
                          )
                        ]),
                        _vm._v(" "),
                        _c("li", [
                          _vm._v(
                            "Menghilangkan pengisian nama pada nametag, tanggal datang dan tanggal pulang apabila diklat ataupun pertemuan bersifat online pada form pendaftaran peserta"
                          )
                        ]),
                        _vm._v(" "),
                        _c("li", [
                          _vm._v(
                            "Mengubah cara pengisian tanggal untuk semua form dari menulis manual sekarang selain menulis manual bisa juga memilih dari kalender yang akan muncul ketika di klik"
                          )
                        ]),
                        _vm._v(" "),
                        _c("li", [
                          _vm._v(
                            "Perbaikan bug tampilan pada form self assesment"
                          )
                        ])
                      ])
                    ])
                  ]
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "card" }, [
                _c("div", { staticClass: "card-header" }, [
                  _c("h5", { staticClass: "card-title" }, [
                    _c(
                      "a",
                      {
                        staticClass: "collapsed text-default",
                        attrs: { "data-toggle": "collapse", href: "#v329" }
                      },
                      [
                        _vm._v("Version 3.2.9"),
                        _c("small", { staticClass: "text-muted" }, [
                          _vm._v(" / 23 Mei 2020")
                        ])
                      ]
                    )
                  ])
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass: "collapse",
                    attrs: {
                      id: "v329",
                      "data-parent": "#accordion-control-right"
                    }
                  },
                  [
                    _c("div", { staticClass: "card-body" }, [
                      _c("p", { staticClass: "mb-3" }, [
                        _vm._v(
                          "Update versi ini memperkenalkan diklat BKCU Online, serta menambahkan fitur pada pertemuan BKCU dan memperbaiki bug pada bagian pengumuman\n                    "
                        ),
                        _c("br"),
                        _c("br"),
                        _vm._v(
                          "\n                    Berikut adalah rincian perubahan pada versi ini:"
                        )
                      ]),
                      _vm._v(" "),
                      _c("ul", { staticClass: "list" }, [
                        _c("li", [
                          _vm._v(
                            "Menambah fitur diklat online pada diklat BKCU"
                          )
                        ]),
                        _vm._v(" "),
                        _c("li", [
                          _vm._v(
                            "Menambah fitur pemberian dan pengumpulan tugas pada diklat BKCU dan pertemuan BKCU"
                          )
                        ]),
                        _vm._v(" "),
                        _c("li", [
                          _vm._v(
                            "Menambah fitur menandai pertanyaan sudah terjawab dan komentar pertanyaan menjadi jawaban pada diklat BKCU dan pertemuan BKCU"
                          )
                        ]),
                        _vm._v(" "),
                        _c("li", [
                          _vm._v(
                            "Perbaikan bug dan tampilan pada diklat BKCU dan pertemuan BKCU"
                          )
                        ]),
                        _vm._v(" "),
                        _c("li", [
                          _vm._v(
                            "Perbaikan pada bagian pengumuman untuk user BKCU"
                          )
                        ])
                      ])
                    ])
                  ]
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "card" }, [
                _c("div", { staticClass: "card-header" }, [
                  _c("h5", { staticClass: "card-title" }, [
                    _c(
                      "a",
                      {
                        staticClass: "collapsed text-default",
                        attrs: { "data-toggle": "collapse", href: "#v328" }
                      },
                      [
                        _vm._v("Version 3.2.8 "),
                        _c("small", { staticClass: "text-muted" }, [
                          _vm._v(" / 2 Mei 2020")
                        ])
                      ]
                    )
                  ])
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass: "collapse",
                    attrs: {
                      id: "v328",
                      "data-parent": "#accordion-control-right"
                    }
                  },
                  [
                    _c("div", { staticClass: "card-body" }, [
                      _c("p", { staticClass: "mb-3" }, [
                        _vm._v(
                          "Update versi ini memperkenalkan pertemuan BKCU yang dapat digunakan untuk mendata dan menyelenggarakan pertemuan baik itu offline maupun online serta beberapa perbaikan dan peningkatan pada diklat BKCU dan notifikasi\n                    "
                        ),
                        _c("br"),
                        _c("br"),
                        _vm._v(
                          "\n                    Berikut adalah rincian perubahan pada versi ini:"
                        )
                      ]),
                      _vm._v(" "),
                      _c("ul", { staticClass: "list" }, [
                        _c("li", [
                          _vm._v(
                            "Menambah pertemuan BKCU untuk mengelola semua pertemuan yang dilaksanakan BKCU"
                          )
                        ]),
                        _vm._v(" "),
                        _c("li", [
                          _vm._v(
                            "Menambah fitur untuk bisa melakukan dan mengikuti pertemuan BKCU secara online di dalam pertemuan online ini terdapat fitur distribusi materi, penerimaan tanggapan beserta komentar dan persetujuan, dan pendataan peserta"
                          )
                        ]),
                        _vm._v(" "),
                        _c("li", [
                          _vm._v(
                            "Menambah fitur untuk melakukan perhitungan jumlah CU yang mendaftar, jumlah cu yang hadir, dan jumlah tanggapan pada bagian Pertemuan BKCU"
                          )
                        ]),
                        _vm._v(" "),
                        _c("li", [
                          _vm._v(
                            "Meningkatkan pengalaman penggunaan notifikasi dan kecepatan akses notifikasi"
                          )
                        ]),
                        _vm._v(" "),
                        _c("li", [
                          _vm._v(
                            "Menambahkan dukungan notifikasi pada bagian monitoring"
                          )
                        ]),
                        _vm._v(" "),
                        _c("li", [
                          _vm._v(
                            "Menambahkan dukungan notifikasi pada bagian self assesment access"
                          )
                        ]),
                        _vm._v(" "),
                        _c("li", [
                          _vm._v(
                            "Menambahkan dukungan notifikasi pada bagian klaim JALINAN"
                          )
                        ]),
                        _vm._v(" "),
                        _c("li", [
                          _vm._v(
                            "Menambahkan dukungan notifikasi pada bagian pertemuan BKCU"
                          )
                        ]),
                        _vm._v(" "),
                        _c("li", [
                          _vm._v(
                            "Memperbaiki bug tampilan pada bagian Diklat BKCU"
                          )
                        ]),
                        _vm._v(" "),
                        _c("li", [
                          _vm._v(
                            "Memperbaiki bug pada saat mengubah data panitia/fasilitator pada bagian Diklat BKCU"
                          )
                        ]),
                        _vm._v(" "),
                        _c("li", [
                          _vm._v(
                            "Memperbaiki bug pada saat mengubah keanggota CU pada bagian Anggota CU"
                          )
                        ])
                      ])
                    ])
                  ]
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "card" }, [
                _c("div", { staticClass: "card-header" }, [
                  _c("h5", { staticClass: "card-title" }, [
                    _c(
                      "a",
                      {
                        staticClass: "collapsed text-default",
                        attrs: { "data-toggle": "collapse", href: "#v327" }
                      },
                      [
                        _vm._v("Version 3.2.7 "),
                        _c("small", { staticClass: "text-muted" }, [
                          _vm._v(" / 24 April 2020")
                        ])
                      ]
                    )
                  ])
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass: "collapse",
                    attrs: {
                      id: "v327",
                      "data-parent": "#accordion-control-right"
                    }
                  },
                  [
                    _c("div", { staticClass: "card-body" }, [
                      _c("p", { staticClass: "mb-3" }, [
                        _vm._v(
                          "Update versi ini memperkenalkan form monitoring cu dan perbaikan pada anggota CU\n                    "
                        ),
                        _c("br"),
                        _c("br"),
                        _vm._v(
                          "\n                    Berikut adalah rincian perubahan pada versi ini:"
                        )
                      ]),
                      _vm._v(" "),
                      _c("ul", { staticClass: "list" }, [
                        _c("li", [
                          _vm._v(
                            "Menambah form monitoring CU yang berguna untuk mendata kegiatan monitoring Puskopdit BKCU Kalimantan di CU"
                          )
                        ]),
                        _vm._v(" "),
                        _c("li", [
                          _vm._v(
                            "Menambah fitur untuk mengubah No. KTP / NIK data anggota CU"
                          )
                        ]),
                        _vm._v(" "),
                        _c("li", [
                          _vm._v(
                            "Memperbaiki bug pada menampilkan data keanggota CU di tabel Anggota CU"
                          )
                        ]),
                        _vm._v(" "),
                        _c("li", [
                          _vm._v(
                            "Memperbaiki bug pada penambahan data anggota apabila tidak memiliki No. KTP / NIK"
                          )
                        ]),
                        _vm._v(" "),
                        _c("li", [
                          _vm._v(
                            "Menambah validasi pada pembuatan username user simo yang melarang adanya username dengan spasi"
                          )
                        ])
                      ])
                    ])
                  ]
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "card" }, [
                _c("div", { staticClass: "card-header" }, [
                  _c("h5", { staticClass: "card-title" }, [
                    _c(
                      "a",
                      {
                        staticClass: "collapsed text-default",
                        attrs: { "data-toggle": "collapse", href: "#v326" }
                      },
                      [
                        _vm._v("Version 3.2.6 "),
                        _c("small", { staticClass: "text-muted" }, [
                          _vm._v(" / 5 April 2020")
                        ])
                      ]
                    )
                  ])
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass: "collapse",
                    attrs: {
                      id: "v326",
                      "data-parent": "#accordion-control-right"
                    }
                  },
                  [
                    _c("div", { staticClass: "card-body" }, [
                      _c("p", { staticClass: "mb-3" }, [
                        _vm._v(
                          "Update versi ini meningkatkan dan memperbaiki self assesment\n                    "
                        ),
                        _c("br"),
                        _c("br"),
                        _vm._v(
                          "\n                    Berikut adalah rincian perubahan pada versi ini:"
                        )
                      ]),
                      _vm._v(" "),
                      _c("ul", { staticClass: "list" }, [
                        _c("li", [
                          _vm._v(
                            "Menambahkan fitur simpan draft pada pengisian self assesment ACCESS"
                          )
                        ]),
                        _vm._v(" "),
                        _c("li", [
                          _vm._v(
                            "Menambahkan fitur simpan draft pada penilaian self assesment ACCESS"
                          )
                        ]),
                        _vm._v(" "),
                        _c("li", [
                          _vm._v(
                            "Menambahkan fitur pemeriksaan duplikasi data penilaian self assesment ACCESS"
                          )
                        ]),
                        _vm._v(" "),
                        _c("li", [
                          _vm._v(
                            "Memperbaiki bug tampilan pada form pengisian self assesment ACCESS"
                          )
                        ]),
                        _vm._v(" "),
                        _c("li", [
                          _vm._v(
                            "Memperbaiki bug tampilan pada perhitungan P.E.A.R.L.S"
                          )
                        ]),
                        _vm._v(" "),
                        _c("li", [
                          _vm._v(
                            "Memperbaiki bug tampilan pada halaman public website bagian slider berita utama"
                          )
                        ]),
                        _vm._v(" "),
                        _c("li", [
                          _vm._v(
                            "Memperbaiki bug hak akses pada menu aset tetap"
                          )
                        ])
                      ])
                    ])
                  ]
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "card" }, [
                _c("div", { staticClass: "card-header" }, [
                  _c("h5", { staticClass: "card-title" }, [
                    _c(
                      "a",
                      {
                        staticClass: "collapsed text-default",
                        attrs: { "data-toggle": "collapse", href: "#v325" }
                      },
                      [
                        _vm._v("Version 3.2.5 "),
                        _c("small", { staticClass: "text-muted" }, [
                          _vm._v(" / 17 Maret 2020")
                        ])
                      ]
                    )
                  ])
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass: "collapse",
                    attrs: {
                      id: "v325",
                      "data-parent": "#accordion-control-right"
                    }
                  },
                  [
                    _c("div", { staticClass: "card-body" }, [
                      _c("p", { staticClass: "mb-3" }, [
                        _vm._v(
                          "Update versi ini meningkatkan dan memperbaiki laporan klaim JALINAN\n                    "
                        ),
                        _c("br"),
                        _c("br"),
                        _vm._v(
                          "\n                    Berikut adalah rincian perubahan pada versi ini:"
                        )
                      ]),
                      _vm._v(" "),
                      _c("ul", { staticClass: "list" }, [
                        _c("li", [_vm._v("Memperbaiki laporan klaim JALINAN")]),
                        _vm._v(" "),
                        _c("li", [
                          _vm._v("Merubah penamaan menu laporan klaim JALINAN")
                        ]),
                        _vm._v(" "),
                        _c("li", [
                          _vm._v(
                            "Merubah cara pencarian laporan klaim JALINAN menjadi lebih mendetail dan fleksibel"
                          )
                        ]),
                        _vm._v(" "),
                        _c("li", [
                          _vm._v(
                            "Menambahkan fitur untuk mengubah identitas dan produk anggota CU yang mengajukan klaim JALINAN yang hanya bisa dilakukan oleh staf JALINAN Puskopdit BKCU Kalimantan guna memperbaiki kesalahan penginputan data anggota CU"
                          )
                        ]),
                        _vm._v(" "),
                        _c("li", [
                          _vm._v("Perbaikan bug pada perhitungan P.E.A.R.L.S.")
                        ]),
                        _vm._v(" "),
                        _c("li", [
                          _vm._v(
                            "Perbaikan bug pada tampilan peserta di Diklat BKCU"
                          )
                        ])
                      ])
                    ])
                  ]
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "card" }, [
                _c("div", { staticClass: "card-header" }, [
                  _c("h5", { staticClass: "card-title" }, [
                    _c(
                      "a",
                      {
                        staticClass: "collapsed text-default",
                        attrs: { "data-toggle": "collapse", href: "#v324" }
                      },
                      [
                        _vm._v("Version 3.2.4 "),
                        _c("small", { staticClass: "text-muted" }, [
                          _vm._v(" / 4 Maret 2020")
                        ])
                      ]
                    )
                  ])
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass: "collapse",
                    attrs: {
                      id: "v324",
                      "data-parent": "#accordion-control-right"
                    }
                  },
                  [
                    _c("div", { staticClass: "card-body" }, [
                      _c("p", { staticClass: "mb-3" }, [
                        _vm._v(
                          "Update versi ini merubah cara pengisian self assesment ACCESS Branding dan perubahan laporan pada Klaim JALINAN\n                    "
                        ),
                        _c("br"),
                        _c("br"),
                        _vm._v(
                          "\n                    Berikut adalah rincian perubahan pada versi ini:"
                        )
                      ]),
                      _vm._v(" "),
                      _c("ul", { staticClass: "list" }, [
                        _c("li", [
                          _vm._v(
                            "Merubah cara pengisian self assesment ACCESS Branding dimana pengisian periode harus sesuai dengan periode yang sudah ada pada laporan perkembangan CU"
                          )
                        ]),
                        _vm._v(" "),
                        _c("li", [
                          _vm._v(
                            "Menyambungkan data self assesment ACCESS Branding dengan laporan perkembangan CU untuk informasi PEARLS"
                          )
                        ]),
                        _vm._v(" "),
                        _c("li", [
                          _vm._v(
                            "Merubah laporan klaim JALINAN pencairan per-cu menjadi laporan klaim berdasarkan status yang akan menampilkan laporan klaim JALINAN sesuai dengan status klaim pada saat tersebut "
                          )
                        ]),
                        _vm._v(" "),
                        _c("li", [
                          _vm._v("Perbaikan bug pada penambahan klaim JALINAN")
                        ]),
                        _vm._v(" "),
                        _c("li", [
                          _vm._v("Perbaikan bug pada koreksi Klaim JALINAN")
                        ]),
                        _vm._v(" "),
                        _c("li", [
                          _vm._v(
                            "Perbaikan bug pada self assesment ACCESS Branding"
                          )
                        ]),
                        _vm._v(" "),
                        _c("li", [
                          _vm._v("Perbaikan bug pada indikator PEARLS di R7")
                        ]),
                        _vm._v(" "),
                        _c("li", [
                          _vm._v(
                            "Perbaikan bug pada tabel indikator PEARLS di dashboard"
                          )
                        ])
                      ])
                    ])
                  ]
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "card" }, [
                _c("div", { staticClass: "card-header" }, [
                  _c("h5", { staticClass: "card-title" }, [
                    _c(
                      "a",
                      {
                        staticClass: "collapsed text-default",
                        attrs: { "data-toggle": "collapse", href: "#v323" }
                      },
                      [
                        _vm._v("Version 3.2.3 "),
                        _c("small", { staticClass: "text-muted" }, [
                          _vm._v(" / 24 Februari 2020")
                        ])
                      ]
                    )
                  ])
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass: "collapse",
                    attrs: {
                      id: "v323",
                      "data-parent": "#accordion-control-right"
                    }
                  },
                  [
                    _c("div", { staticClass: "card-body" }, [
                      _c("p", { staticClass: "mb-3" }, [
                        _vm._v(
                          "Update versi ini menambahkan self assesment ACCESS Branding, catalog diklat di website publik BKCU Kalimantan dan koreksi klaim JALINAN\n                    "
                        ),
                        _c("br"),
                        _c("br"),
                        _vm._v(
                          "\n                    Berikut adalah rincian perubahan pada versi ini:"
                        )
                      ]),
                      _vm._v(" "),
                      _c("ul", { staticClass: "list" }, [
                        _c("li", [
                          _vm._v(
                            "Penambahan form pengisian self assesment ACCESS Branding untuk CU dan penilaian dari Puskopdit BKCU Kalimantan"
                          )
                        ]),
                        _vm._v(" "),
                        _c("li", [
                          _vm._v("Penambahan fitur koreksi untuk Klaim JALINAN")
                        ]),
                        _vm._v(" "),
                        _c("li", [
                          _vm._v(
                            "Penambahan catalog diklat di website publik BKCU Kalimantan"
                          )
                        ]),
                        _vm._v(" "),
                        _c("li", [
                          _vm._v(
                            "Penambahan fitur untuk memasukkan foto utama pada masing-masing diklat"
                          )
                        ]),
                        _vm._v(" "),
                        _c("li", [
                          _vm._v("Merubah menu Keuangan menjadi Tata Kelola")
                        ]),
                        _vm._v(" "),
                        _c("li", [
                          _vm._v(
                            "Perbaikan bug masih bisa menghapus data anggota yang sudah klaim JALINAN"
                          )
                        ]),
                        _vm._v(" "),
                        _c("li", [
                          _vm._v(
                            "Perbaikan bug pada riwayat profil user yang tidak bisa diubah"
                          )
                        ]),
                        _vm._v(" "),
                        _c("li", [
                          _vm._v(
                            "Perbaikan bug peserta yang sama bisa mendaftar 2 kali pada diklat BKCU"
                          )
                        ])
                      ])
                    ])
                  ]
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "card" }, [
                _c("div", { staticClass: "card-header" }, [
                  _c("h5", { staticClass: "card-title" }, [
                    _c(
                      "a",
                      {
                        staticClass: "collapsed text-default",
                        attrs: { "data-toggle": "collapse", href: "#v322" }
                      },
                      [
                        _vm._v("Version 3.2.2 "),
                        _c("small", { staticClass: "text-muted" }, [
                          _vm._v(" / 19 Desember 2019")
                        ])
                      ]
                    )
                  ])
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass: "collapse",
                    attrs: {
                      id: "v322",
                      "data-parent": "#accordion-control-right"
                    }
                  },
                  [
                    _c("div", { staticClass: "card-body" }, [
                      _c("p", { staticClass: "mb-3" }, [
                        _vm._v(
                          "Update versi ini menambah surat pada Klaim JALINAN, upload dokumen pada Klaim JALINAN, QR Code pada Aset Tetap dan perbaikan beberapa bug.\n                    "
                        ),
                        _c("br"),
                        _c("br"),
                        _vm._v(
                          "\n                    Berikut adalah rincian perubahan pada versi ini:"
                        )
                      ]),
                      _vm._v(" "),
                      _c("ul", { staticClass: "list" }, [
                        _c("li", [
                          _vm._v(
                            "Penambahan upload dokumen untuk memenuhi kebutuhan pengajuan Klaim JALINAN"
                          )
                        ]),
                        _vm._v(" "),
                        _c("li", [
                          _vm._v(
                            "Penambahan pemilahan data klaim berdasarkan TP"
                          )
                        ]),
                        _vm._v(" "),
                        _c("li", [
                          _vm._v(
                            "Penambahan surat pada bagian Klaim JALINAN yang terdiri dari surat dokument tidak lengkap, surat penolakan klaim dan surat pencairan klaim"
                          )
                        ]),
                        _vm._v(" "),
                        _c("li", [
                          _vm._v(
                            "Penambahan informasi nomor surat dan tanggal surat untuk surat pada bagian Klaim JALINAN"
                          )
                        ]),
                        _vm._v(" "),
                        _c("li", [
                          _vm._v(
                            "Penambahan fitur ketika logout otomatis maka akan kembali ke halaman terakhir yang dibuka sebelum."
                          )
                        ]),
                        _vm._v(" "),
                        _c("li", [
                          _vm._v(
                            "Penambahan fitur membuat QR Code untuk aset tetap."
                          )
                        ]),
                        _vm._v(" "),
                        _c("li", [
                          _vm._v(
                            "Perbaikan bug pada mengajukan klaim melalui menu anggota CU"
                          )
                        ]),
                        _vm._v(" "),
                        _c("li", [
                          _vm._v("Perbaikan bug error navigasi pada anggota CU")
                        ]),
                        _vm._v(" "),
                        _c("li", [
                          _vm._v("Perbaikan bug pada import anggota CU")
                        ]),
                        _vm._v(" "),
                        _c("li", [
                          _vm._v(
                            "Perbaikan bug pada laporan Klaim JALINAN terkait jumlah anggota pada jenis kelamin Laki-laki"
                          )
                        ]),
                        _vm._v(" "),
                        _c("li", [
                          _vm._v(
                            "Perbaikan bug pada tombol penyelesaian klaim pada Klaim JALINAN"
                          )
                        ])
                      ])
                    ])
                  ]
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "card" }, [
                _c("div", { staticClass: "card-header" }, [
                  _c("h5", { staticClass: "card-title" }, [
                    _c(
                      "a",
                      {
                        staticClass: "collapsed text-default",
                        attrs: { "data-toggle": "collapse", href: "#v321" }
                      },
                      [
                        _vm._v("Version 3.2.1 "),
                        _c("small", { staticClass: "text-muted" }, [
                          _vm._v(" / 3 Desember 2019")
                        ])
                      ]
                    )
                  ])
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass: "collapse",
                    attrs: {
                      id: "v321",
                      "data-parent": "#accordion-control-right"
                    }
                  },
                  [
                    _c("div", { staticClass: "card-body" }, [
                      _c("p", { staticClass: "mb-3" }, [
                        _vm._v(
                          "Update versi ini memperbaiki beberapa bug tampilan data\n                    "
                        ),
                        _c("br"),
                        _c("br"),
                        _vm._v(
                          "\n                    Berikut adalah rincian perubahan pada versi ini:"
                        )
                      ]),
                      _vm._v(" "),
                      _c("ul", { staticClass: "list" }, [
                        _c("li", [
                          _vm._v(
                            "Perbaikan bug pada menampilkan data detail laporan CU untuk akun aset bermasalah"
                          )
                        ]),
                        _vm._v(" "),
                        _c("li", [
                          _vm._v("Perbaikan bug pada menampilkan data anggota")
                        ]),
                        _vm._v(" "),
                        _c("li", [
                          _vm._v(
                            "Perbaikan bug pada menampilkan data pembeli dan penanggungjawab di aset tetap"
                          )
                        ]),
                        _vm._v(" "),
                        _c("li", [
                          _vm._v(
                            "Perbaikan bug pada menampilkan data panitia dalam gerakan untuk diklat"
                          )
                        ])
                      ])
                    ])
                  ]
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "card" }, [
                _c("div", { staticClass: "card-header" }, [
                  _c("h5", { staticClass: "card-title" }, [
                    _c(
                      "a",
                      {
                        staticClass: "collapsed text-default",
                        attrs: { "data-toggle": "collapse", href: "#v320" }
                      },
                      [
                        _vm._v("Version 3.2.0 "),
                        _c("small", { staticClass: "text-muted" }, [
                          _vm._v(" / 1 Desember 2019")
                        ])
                      ]
                    )
                  ])
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass: "collapse",
                    attrs: {
                      id: "v320",
                      "data-parent": "#accordion-control-right"
                    }
                  },
                  [
                    _c("div", { staticClass: "card-body" }, [
                      _c("p", { staticClass: "mb-3" }, [
                        _vm._v(
                          "Update versi ini menambah beberapa fitur baru serta melakukan perbaikan bug, error dan peningkatan performa.\n                    "
                        ),
                        _c("br"),
                        _c("br"),
                        _vm._v(
                          "\n                    Berikut adalah rincian perubahan pada versi ini:"
                        )
                      ]),
                      _vm._v(" "),
                      _c("ul", { staticClass: "list" }, [
                        _c("li", [
                          _vm._v(
                            "Menambah fitur auto reload file terbaru dari server apabila terdapat update dan menambahkan tombol hard reload apabila fitur auto reload gagal berfungsi."
                          )
                        ]),
                        _vm._v(" "),
                        _c("li", [
                          _vm._v(
                            "Menambah fitur untuk membuatkan NIK sementara kepada anggota CU yang tidak bisa ditemukan/punya NIK lagi agar tetap bisa menginput data untuk anggota CU dan klaim JALINAN"
                          )
                        ]),
                        _vm._v(" "),
                        _c("li", [
                          _vm._v(
                            "Menambah informasi jumlah aktivis pertingkatan (manajemen, pengurus, dsb) pada bagian CU"
                          )
                        ]),
                        _vm._v(" "),
                        _c("li", [
                          _vm._v(
                            "Menambah tombol refresh pada bagian notifikasi untuk mendapatkan notifikasi terbaru sesuai keinginan"
                          )
                        ]),
                        _vm._v(" "),
                        _c("li", [
                          _vm._v(
                            "Mengubah cara mengambil data notifikasi dari setiap perpindahan halaman menjadi setiap 15 menit"
                          )
                        ]),
                        _vm._v(" "),
                        _c("li", [
                          _vm._v(
                            "Menambah fitur di profile masing-masing user untuk bisa mengubah data identitas dan riwayat sendiri"
                          )
                        ]),
                        _vm._v(" "),
                        _c("li", [
                          _vm._v(
                            "Menambah informasi no. KK, nama ibu, suku, dan pekerjaan pada form anggota CU"
                          )
                        ]),
                        _vm._v(" "),
                        _c("li", [
                          _vm._v(
                            "Mengubah tampilan informasi verifikator klaim JALINAN "
                          )
                        ]),
                        _vm._v(" "),
                        _c("li", [
                          _vm._v(
                            "Optimalisasi pengambilan data klaim JALINAN dan data anggota CU ke server menjadi lebih ringkas dan cepat "
                          )
                        ]),
                        _vm._v(" "),
                        _c("li", [
                          _vm._v(
                            "Meningkatkan cara pengisian pekerjaan aktivis menjadi lebih mudah dimengerti"
                          )
                        ]),
                        _vm._v(" "),
                        _c("li", [
                          _vm._v(
                            "Memindahkan menu untuk tabel draft hasil upload excel untuk anggota CU, laporan statistik CU, dan laporan statistik TP ke halaman masing-masing bagian terkait"
                          )
                        ]),
                        _vm._v(" "),
                        _c("li", [
                          _vm._v(
                            "Perbaikan bug pada saat menampilkan aktivis yang aktif dan tidak aktif"
                          )
                        ]),
                        _vm._v(" "),
                        _c("li", [
                          _vm._v("Perbaikan bug pada tombol anggota keluar")
                        ]),
                        _vm._v(" "),
                        _c("li", [
                          _vm._v(
                            "Perbaikan bug download excel semua data anggota CU tidak memunculkan sesuai CU tapi semua CU"
                          )
                        ]),
                        _vm._v(" "),
                        _c("li", [
                          _vm._v(
                            "Perbaikan bug download excel anggota CU kolom No. BA dan tanggal jadi anggota"
                          )
                        ]),
                        _vm._v(" "),
                        _c("li", [
                          _vm._v(
                            "Perbaikan bug download excel anggota CU dan aktivis kolom No. KTP digit terakhir hilang"
                          )
                        ]),
                        _vm._v(" "),
                        _c("li", [
                          _vm._v(
                            "Perbaikan bug tampilan persentase laju inflasi dan harga pasar"
                          )
                        ]),
                        _vm._v(" "),
                        _c("li", [
                          _vm._v(
                            "Perbaikan bug pada saat menambah diskusi untuk laporan TP"
                          )
                        ]),
                        _vm._v(" "),
                        _c("li", [
                          _vm._v(
                            "Perbaikan bug pada saat membuka dialog box dan menekan tombol back di browser maka tidak bisa scroll halamannya"
                          )
                        ]),
                        _vm._v(" "),
                        _c("li", [
                          _vm._v(
                            "Perbaikan bug pada penambahan kode jenis aset tetap dan kelompok aset tetap"
                          )
                        ]),
                        _vm._v(" "),
                        _c("li", [
                          _vm._v(
                            "Perbaikan bug pada searching di detail diklat BKCU"
                          )
                        ]),
                        _vm._v(" "),
                        _c("li", [
                          _vm._v(
                            "Perbaikan bug user tidak otomatis terkirim ke halaman login"
                          )
                        ]),
                        _vm._v(" "),
                        _c("li", [_vm._v("Perbaikan bug gambar user error")])
                      ])
                    ])
                  ]
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "card" }, [
                _c("div", { staticClass: "card-header" }, [
                  _c("h5", { staticClass: "card-title" }, [
                    _c(
                      "a",
                      {
                        staticClass: "collapsed text-default",
                        attrs: { "data-toggle": "collapse", href: "#v319" }
                      },
                      [
                        _vm._v("Version 3.1.9 "),
                        _c("small", { staticClass: "text-muted" }, [
                          _vm._v(" / 26 Oktober 2019")
                        ])
                      ]
                    )
                  ])
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass: "collapse",
                    attrs: {
                      id: "v319",
                      "data-parent": "#accordion-control-right"
                    }
                  },
                  [
                    _c("div", { staticClass: "card-body" }, [
                      _c("p", { staticClass: "mb-3" }, [
                        _vm._v(
                          "Update versi ini fokus pada perbaikan di bagian anggota CU, user, aktivis dan klaim jalinan\n                    "
                        ),
                        _c("br"),
                        _c("br"),
                        _vm._v(
                          "\n                    Berikut adalah rincian perubahan pada versi ini:"
                        )
                      ]),
                      _vm._v(" "),
                      _c("ul", { staticClass: "list" }, [
                        _c("li", [
                          _vm._v(
                            "Menambah fitur migrasi data anggota CU dari sistem lain melalui excel"
                          )
                        ]),
                        _vm._v(" "),
                        _c("li", [
                          _vm._v(
                            "Menambah informasi tanggal target dan tujuan pada produk anggota CU"
                          )
                        ]),
                        _vm._v(" "),
                        _c("li", [
                          _vm._v(
                            "Perbaikan pada menampilkan data anggota CU di bagian sudah keluar dan sudah meninggal"
                          )
                        ]),
                        _vm._v(" "),
                        _c("li", [
                          _vm._v(
                            "Perubahan pada bagian input No. BA yang hanya memperbolehkan menginput angka saja"
                          )
                        ]),
                        _vm._v(" "),
                        _c("li", [
                          _vm._v("Perbaikan foto user yang tidak muncul")
                        ]),
                        _vm._v(" "),
                        _c("li", [
                          _vm._v(
                            "Perbaikan bug tampilan pada informasi jabatan, pendidikan dan organisasi pada bagian aktivis"
                          )
                        ]),
                        _vm._v(" "),
                        _c("li", [
                          _vm._v(
                            "Perbaikan bug mengubah identitas pada anggota CU yang sudah keluar dan meninggal"
                          )
                        ])
                      ])
                    ])
                  ]
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "card" }, [
                _c("div", { staticClass: "card-header" }, [
                  _c("h5", { staticClass: "card-title" }, [
                    _c(
                      "a",
                      {
                        staticClass: "collapsed text-default",
                        attrs: { "data-toggle": "collapse", href: "#v318" }
                      },
                      [
                        _vm._v("Version 3.1.8 "),
                        _c("small", { staticClass: "text-muted" }, [
                          _vm._v(" / 18 Oktober 2019")
                        ])
                      ]
                    )
                  ])
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass: "collapse",
                    attrs: {
                      id: "v318",
                      "data-parent": "#accordion-control-right"
                    }
                  },
                  [
                    _c("div", { staticClass: "card-body" }, [
                      _c("p", { staticClass: "mb-3" }, [
                        _vm._v(
                          "Update versi ini fokus pada perbaikan di bagian aktivis, penambahan tampilan pada form analisis klaim JALINAN, perubahan tampilan pada daftar produk dan pelayanan CU dan perubahan pada informasi user\n                    "
                        ),
                        _c("br"),
                        _c("br"),
                        _vm._v(
                          "\n                    Berikut adalah rincian perubahan pada versi ini:"
                        )
                      ]),
                      _vm._v(" "),
                      _c("ul", { staticClass: "list" }, [
                        _c("li", [
                          _vm._v(
                            "Penambahan informasi user yang melakukan verifikasi pada masing-masing klaim JALINAN pada form analisis klaim JALINAN"
                          )
                        ]),
                        _vm._v(" "),
                        _c("li", [
                          _vm._v(
                            "Perubahan tampilan daftar produk dan pelayanan CU menjadi lebih ringkas"
                          )
                        ]),
                        _vm._v(" "),
                        _c("li", [
                          _vm._v(
                            "Perubahan user yang sudah menngikuti data aktivis yang tersambung pada masing-masing user"
                          )
                        ]),
                        _vm._v(" "),
                        _c("li", [
                          _vm._v(
                            "Perbaikan bug informasi TP pada aktivis tidak muncul ketika menginput data aktivis"
                          )
                        ]),
                        _vm._v(" "),
                        _c("li", [
                          _vm._v(
                            "Perbaikan pada informasi TP ketika melakukan export excel data CU"
                          )
                        ])
                      ])
                    ])
                  ]
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "card" }, [
                _c("div", { staticClass: "card-header" }, [
                  _c("h5", { staticClass: "card-title" }, [
                    _c(
                      "a",
                      {
                        staticClass: "collapsed text-default",
                        attrs: { "data-toggle": "collapse", href: "#v317" }
                      },
                      [
                        _vm._v("Version 3.1.7 "),
                        _c("small", { staticClass: "text-muted" }, [
                          _vm._v(" / 16 Oktober 2019")
                        ])
                      ]
                    )
                  ])
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass: "collapse",
                    attrs: {
                      id: "v317",
                      "data-parent": "#accordion-control-right"
                    }
                  },
                  [
                    _c("div", { staticClass: "card-body" }, [
                      _c("p", { staticClass: "mb-3" }, [
                        _vm._v(
                          "Update versi ini fokus pada penambahan dan perbaikan pada bagian anggota CU, Klaim JALINAN dan penambahan fitur baru untuk pengelolaan aset tetap lembaga, mengabungkan informasi data aktivis dengan user.\n                    "
                        ),
                        _c("br"),
                        _c("br"),
                        _vm._v(
                          "\n                    Berikut adalah rincian perubahan pada versi ini:"
                        )
                      ]),
                      _vm._v(" "),
                      _c("ul", { staticClass: "list" }, [
                        _c("li", [
                          _vm._v(
                            "Penambahan fitur verifikasi pengajuan Klaim JALINAN oleh pengurus, pengawas dan manajemen"
                          )
                        ]),
                        _vm._v(" "),
                        _c("li", [
                          _vm._v("Penambahan fitur data aktivis pada user")
                        ]),
                        _vm._v(" "),
                        _c("li", [
                          _vm._v(
                            "Penambahan informasi asal TP/KP pada Anggota CU dan Klaim JALINAN"
                          )
                        ]),
                        _vm._v(" "),
                        _c("li", [
                          _vm._v(
                            "Penambahan pengelolaan aset tetap untuk lembaga"
                          )
                        ]),
                        _vm._v(" "),
                        _c("li", [
                          _vm._v("Perbaikan bug tampilan pada Klaim JALINAN")
                        ]),
                        _vm._v(" "),
                        _c("li", [_vm._v("Perbaikan bug tampilan pada User")]),
                        _vm._v(" "),
                        _c("li", [
                          _vm._v("Perbaikan bug tampilan pada Anggota CU")
                        ])
                      ])
                    ])
                  ]
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "card" }, [
                _c("div", { staticClass: "card-header" }, [
                  _c("h5", { staticClass: "card-title" }, [
                    _c(
                      "a",
                      {
                        staticClass: "collapsed text-default",
                        attrs: { "data-toggle": "collapse", href: "#v316" }
                      },
                      [
                        _vm._v("Version 3.1.6 "),
                        _c("small", { staticClass: "text-muted" }, [
                          _vm._v(" / 28 September 2019")
                        ])
                      ]
                    )
                  ])
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass: "collapse",
                    attrs: {
                      id: "v316",
                      "data-parent": "#accordion-control-right"
                    }
                  },
                  [
                    _c("div", { staticClass: "card-body" }, [
                      _c("p", { staticClass: "mb-3" }, [
                        _vm._v(
                          "Update versi ini fokus pada penambahan dan perbaikan pada bagian anggota CU dan Klaim JALINAN.\n                    "
                        ),
                        _c("br"),
                        _c("br"),
                        _vm._v(
                          "\n                    Berikut adalah rincian perubahan pada versi ini:"
                        )
                      ]),
                      _vm._v(" "),
                      _c("ul", { staticClass: "list" }, [
                        _c("li", [
                          _vm._v(
                            "Penambahan informasi usia dan nama pada panel analisa klaim"
                          )
                        ]),
                        _vm._v(" "),
                        _c("li", [
                          _vm._v(
                            "Penambahan informasi klaim pada panel selesai klaim"
                          )
                        ]),
                        _vm._v(" "),
                        _c("li", [
                          _vm._v(
                            "Penambahan kategori anggota CU yang meninggal"
                          )
                        ]),
                        _vm._v(" "),
                        _c("li", [
                          _vm._v(
                            "Perbaikan pada form penambahan klaim JALINAN yang tidak menampilkan data produk dengan benar"
                          )
                        ]),
                        _vm._v(" "),
                        _c("li", [
                          _vm._v(
                            "Menggabungkan menu tambah pada masing-masing bagian menjadi 1 sub-menu"
                          )
                        ]),
                        _vm._v(" "),
                        _c("li", [
                          _vm._v(
                            "Penambahan waktu time-out aplikasi menjadi 12 jam"
                          )
                        ]),
                        _vm._v(" "),
                        _c("li", [
                          _vm._v("Pengubahan tampilan form pada profil user")
                        ])
                      ])
                    ])
                  ]
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "card" }, [
                _c("div", { staticClass: "card-header" }, [
                  _c("h5", { staticClass: "card-title" }, [
                    _c(
                      "a",
                      {
                        staticClass: "collapsed text-default",
                        attrs: { "data-toggle": "collapse", href: "#v315" }
                      },
                      [
                        _vm._v("Version 3.1.5 "),
                        _c("small", { staticClass: "text-muted" }, [
                          _vm._v(" / 23 September 2019")
                        ])
                      ]
                    )
                  ])
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass: "collapse",
                    attrs: {
                      id: "v315",
                      "data-parent": "#accordion-control-right"
                    }
                  },
                  [
                    _c("div", { staticClass: "card-body" }, [
                      _c("p", { staticClass: "mb-3" }, [
                        _vm._v(
                          "Update versi ini fokus pada perbaikan beberapa bug\n                    "
                        ),
                        _c("br"),
                        _c("br"),
                        _vm._v(
                          "\n                    Berikut adalah rincian perubahan pada versi ini:"
                        )
                      ]),
                      _vm._v(" "),
                      _c("ul", { staticClass: "list" }, [
                        _c("li", [
                          _vm._v(
                            "Perbaikan informasi data produk pada saat menambah klaim JALINAN"
                          )
                        ]),
                        _vm._v(" "),
                        _c("li", [
                          _vm._v(
                            "Perbaikan informasi jabatan pada identitas anggota CU"
                          )
                        ]),
                        _vm._v(" "),
                        _c("li", [
                          _vm._v(
                            "Perbaikan input tanggal yang menyebabkan format tanggal salah"
                          )
                        ]),
                        _vm._v(" "),
                        _c("li", [
                          _vm._v(
                            "Menambah fitur untuk mengeluarkan anggota / mendata anggota keluar"
                          )
                        ]),
                        _vm._v(" "),
                        _c("li", [
                          _vm._v(
                            "Menambah pemberitahuan apabila versi SIMO yang dijalankan di CLIENT tidak sesuai dengan versi yang ada di SERVER agar segera melakukan Hard Reload agar mendapatkan versi terbaru"
                          )
                        ]),
                        _vm._v(" "),
                        _c("li", [
                          _vm._v(
                            "Menambah informasi error menjadi lebih mudah untuk dimengerti"
                          )
                        ])
                      ])
                    ])
                  ]
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "card" }, [
                _c("div", { staticClass: "card-header" }, [
                  _c("h5", { staticClass: "card-title" }, [
                    _c(
                      "a",
                      {
                        staticClass: "collapsed text-default",
                        attrs: { "data-toggle": "collapse", href: "#v314" }
                      },
                      [
                        _vm._v("Version 3.1.4 "),
                        _c("small", { staticClass: "text-muted" }, [
                          _vm._v(" / 19 September 2019")
                        ])
                      ]
                    )
                  ])
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass: "collapse",
                    attrs: {
                      id: "v314",
                      "data-parent": "#accordion-control-right"
                    }
                  },
                  [
                    _c("div", { staticClass: "card-body" }, [
                      _c("p", { staticClass: "mb-3" }, [
                        _vm._v(
                          "Update versi ini fokus pada fitur klaim JALINAN\n                    "
                        ),
                        _c("br"),
                        _c("br"),
                        _vm._v(
                          "\n                    Berikut adalah rincian perubahan pada versi ini:"
                        )
                      ]),
                      _vm._v(" "),
                      _c("ul", { staticClass: "list" }, [
                        _c("li", [
                          _vm._v(
                            "Peningkatan pengalaman penambahan data klaim JALINAN"
                          )
                        ]),
                        _vm._v(" "),
                        _c("li", [
                          _vm._v("Menambah fitur analisa klaim JALINAN")
                        ]),
                        _vm._v(" "),
                        _c("li", [
                          _vm._v("Menambah fitur pencairan klaim JALINAN")
                        ]),
                        _vm._v(" "),
                        _c("li", [
                          _vm._v("Menambah laporan pencairan klaim JALINAN")
                        ]),
                        _vm._v(" "),
                        _c("li", [
                          _vm._v(
                            "Menambah laporan klaim JALINAN berdasarkan penyebab"
                          )
                        ]),
                        _vm._v(" "),
                        _c("li", [
                          _vm._v(
                            "Menambah laporan klaim JALINAN berdasarkan usia"
                          )
                        ]),
                        _vm._v(" "),
                        _c("li", [
                          _vm._v(
                            "Menambah laporan klaim JALINAN berdasarkan lama menjadi anggota"
                          )
                        ]),
                        _vm._v(" "),
                        _c("li", [
                          _vm._v(
                            "Memperbaiki beberapa bug pada proses klaim JALINAN"
                          )
                        ]),
                        _vm._v(" "),
                        _c("li", [
                          _vm._v(
                            "Menambah bagian berita dan ucapan ulang tahun CU pada halaman Dashboard"
                          )
                        ]),
                        _vm._v(" "),
                        _c("li", [
                          _vm._v(
                            "Memperbaiki bug data aktivis tidak muncul pada saat mendaftar diklat"
                          )
                        ])
                      ])
                    ])
                  ]
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "card" }, [
                _c("div", { staticClass: "card-header" }, [
                  _c("h5", { staticClass: "card-title" }, [
                    _c(
                      "a",
                      {
                        staticClass: "collapsed text-default",
                        attrs: { "data-toggle": "collapse", href: "#v313" }
                      },
                      [
                        _vm._v("Version 3.1.3 "),
                        _c("small", { staticClass: "text-muted" }, [
                          _vm._v(" / 6 September 2019")
                        ])
                      ]
                    )
                  ])
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass: "collapse",
                    attrs: {
                      id: "v313",
                      "data-parent": "#accordion-control-right"
                    }
                  },
                  [
                    _c("div", { staticClass: "card-body" }, [
                      _c("p", { staticClass: "mb-3" }, [
                        _vm._v(
                          "Update versi ini fokus pada peningkatan pada data aktivis, anggota CU dan klaim JALINAN\n                    "
                        ),
                        _c("br"),
                        _c("br"),
                        _vm._v(
                          "\n                    Berikut adalah rincian perubahan pada versi ini:"
                        )
                      ]),
                      _vm._v(" "),
                      _c("ul", { staticClass: "list" }, [
                        _c("li", [
                          _vm._v(
                            "Peningkatan pengalaman penambahan data aktivis"
                          )
                        ]),
                        _vm._v(" "),
                        _c("li", [
                          _vm._v(
                            "Penambahan bagian aktivis tidak aktif/bekerja yang mengakomodir informasi aktivis yang sudah mengundurkan diri, berhenti, pensiun dan meninggal"
                          )
                        ]),
                        _vm._v(" "),
                        _c("li", [
                          _vm._v(
                            "Penambahan riwayat diklat secara input manual dan pada data aktivis"
                          )
                        ]),
                        _vm._v(" "),
                        _c("li", [
                          _vm._v(
                            "Riwayat diklat terkoneksi dengan data diklat pada SIMO (khusus untuk aktivis yang mendaftar diklat di SIMO)"
                          )
                        ]),
                        _vm._v(" "),
                        _c("li", [
                          _vm._v("Memunculkan foto anggota CU pada tabel")
                        ]),
                        _vm._v(" "),
                        _c("li", [
                          _vm._v(
                            "Memperbaiki beberapa bug pada proses klaim JALINAN"
                          )
                        ])
                      ])
                    ])
                  ]
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "card" }, [
                _c("div", { staticClass: "card-header" }, [
                  _c("h5", { staticClass: "card-title" }, [
                    _c(
                      "a",
                      {
                        staticClass: "collapsed text-default",
                        attrs: { "data-toggle": "collapse", href: "#v312" }
                      },
                      [
                        _vm._v("Version 3.1.2 "),
                        _c("small", { staticClass: "text-muted" }, [
                          _vm._v(" / 24 Agustus 2019")
                        ])
                      ]
                    )
                  ])
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass: "collapse",
                    attrs: {
                      id: "v312",
                      "data-parent": "#accordion-control-right"
                    }
                  },
                  [
                    _c("div", { staticClass: "card-body" }, [
                      _c("p", { staticClass: "mb-3" }, [
                        _vm._v(
                          "Update versi ini lebih kepada perbaikan bug-bug yang ada pada fitur-fitur yang sudah ada serta peningkatan pengalaman penoperasian pada beberapa bagian.\n                    "
                        ),
                        _c("br"),
                        _c("br"),
                        _vm._v(
                          "\n                    Berikut adalah rincian perubahan pada versi ini:"
                        )
                      ]),
                      _vm._v(" "),
                      _c("ul", { staticClass: "list" }, [
                        _c("li", [
                          _vm._v(
                            "Perbaikan bug di penambahan anggota CU dan produk anggota CU "
                          )
                        ]),
                        _vm._v(" "),
                        _c("li", [
                          _vm._v("Perbaikan bug di penambahan klaim JALINAN ")
                        ]),
                        _vm._v(" "),
                        _c("li", [
                          _vm._v(
                            "Perbaikan bug di penambahan data aktivis baru "
                          )
                        ]),
                        _vm._v(" "),
                        _c("li", [
                          _vm._v(
                            "Perbaikan bug di pengubahan data panitia/fasilitator pada bagian diklat "
                          )
                        ]),
                        _vm._v(" "),
                        _c("li", [
                          _vm._v(
                            "Perbaikan bug di isi kolom laporan PEARLS yang tidak sesuai dengan judul kolom "
                          )
                        ]),
                        _vm._v(" "),
                        _c("li", [
                          _vm._v(
                            "Perbaikan bug pada perhitungan jumlah anggota perorang dalam gerakan yang disajikan di halaman publik website BKCU Kalimantan "
                          )
                        ]),
                        _vm._v(" "),
                        _c("li", [
                          _vm._v(
                            "Mengubah cara penyajian informasi error kepada user yang lebih mudah dimengerti "
                          )
                        ])
                      ])
                    ])
                  ]
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "card" }, [
                _c("div", { staticClass: "card-header" }, [
                  _c("h5", { staticClass: "card-title" }, [
                    _c(
                      "a",
                      {
                        staticClass: "collapsed text-default",
                        attrs: { "data-toggle": "collapse", href: "#v311" }
                      },
                      [
                        _vm._v("Version 3.1.1 "),
                        _c("small", { staticClass: "text-muted" }, [
                          _vm._v(" / 16 Juli 2019")
                        ])
                      ]
                    )
                  ])
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass: "collapse",
                    attrs: {
                      id: "v311",
                      "data-parent": "#accordion-control-right"
                    }
                  },
                  [
                    _c("div", { staticClass: "card-body" }, [
                      _c("p", { staticClass: "mb-3" }, [
                        _vm._v(
                          "Perbaikan bug pada perhitungan laporan PEARLS dan penambahan field baru untuk mitra\n                    "
                        ),
                        _c("br"),
                        _c("br"),
                        _vm._v(
                          "\n                    Berikut adalah rincian perubahan pada versi ini:"
                        )
                      ]),
                      _vm._v(" "),
                      _c("ul", { staticClass: "list" }, [
                        _c("li", [
                          _vm._v(
                            "Perbaikan bug dana gedung yang tidak muncul di pengubahan data PEARLS utk E9"
                          )
                        ]),
                        _vm._v(" "),
                        _c("li", [
                          _vm._v(
                            "Perbaikan bug pada saat menambahkan laporan TP"
                          )
                        ]),
                        _vm._v(" "),
                        _c("li", [
                          _vm._v(
                            "Penambahan field bidang untuk mitra perseorangan dan lembaga"
                          )
                        ])
                      ])
                    ])
                  ]
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "card" }, [
                _c("div", { staticClass: "card-header" }, [
                  _c("h5", { staticClass: "card-title" }, [
                    _c(
                      "a",
                      {
                        staticClass: "collapsed text-default",
                        attrs: { "data-toggle": "collapse", href: "#v310" }
                      },
                      [
                        _vm._v("Version 3.1.0 "),
                        _c("small", { staticClass: "text-muted" }, [
                          _vm._v(" / 26 April 2019")
                        ])
                      ]
                    )
                  ])
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass: "collapse",
                    attrs: {
                      id: "v310",
                      "data-parent": "#accordion-control-right"
                    }
                  },
                  [
                    _c("div", { staticClass: "card-body" }, [
                      _c("p", { staticClass: "mb-3" }, [
                        _vm._v(
                          "Mengenalkan fitur pengelolaan data anggota CU perorangan yang memungkinkan gerakan Puskopdit BKCU Kalimantan untuk memiliki data secara mendetail anggota CU Perorangan yang akan memudahkan dalam mengetahui persebaran anggota, perilaku anggota dan menjadi database anggota terbesar dalam gerakan. \n                    "
                        ),
                        _c("br"),
                        _c("br"),
                        _vm._v(
                          " \n                    Pada versi ini juga terdapat integrasi dengan JALINAN untuk proses klaim dengan data anggota CU perorangan dan data produk CU yang diperkenalkan pada versi sebelumnya. Dengan begitu klaim JALINAN diharapkan akan lebih akurat. Dan terdapat pondasi dasar untuk integrasi perhitungan iuran JALINAN.\n                    "
                        ),
                        _c("br"),
                        _c("br"),
                        _vm._v(
                          "\n                    Berikut adalah rincian perubahan pada versi ini:"
                        )
                      ]),
                      _vm._v(" "),
                      _c("ul", { staticClass: "list" }, [
                        _c("li", [
                          _vm._v(
                            "Penambahan fitur mengelola data anggota CU perorangan yang terdiri dari identitas, simpanan dan pinjaman yang terintegrasi dengan fitur data produk CU"
                          )
                        ]),
                        _vm._v(" "),
                        _c("li", [
                          _vm._v(
                            "Penambahan fitur proses klaim JALINAN yang terintegrasi dengan data anggota CU Perorangan"
                          )
                        ]),
                        _vm._v(" "),
                        _c("li", [
                          _vm._v(
                            "Perbaikan pada dashboard dalam penyajian data"
                          )
                        ]),
                        _vm._v(" "),
                        _c("li", [
                          _vm._v(
                            "Perbaikan bug dan peningkatan performa keseluruhan aplikasi"
                          )
                        ])
                      ])
                    ])
                  ]
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "card" }, [
                _c("div", { staticClass: "card-header" }, [
                  _c("h5", { staticClass: "card-title" }, [
                    _c(
                      "a",
                      {
                        staticClass: "collapsed text-default",
                        attrs: { "data-toggle": "collapse", href: "#v309" }
                      },
                      [
                        _vm._v("Version 3.0.9 "),
                        _c("small", { staticClass: "text-muted" }, [
                          _vm._v(" / 20 Februari 2019")
                        ])
                      ]
                    )
                  ])
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass: "collapse",
                    attrs: {
                      id: "v309",
                      "data-parent": "#accordion-control-right"
                    }
                  },
                  [
                    _c("div", { staticClass: "card-body" }, [
                      _c("p", { staticClass: "mb-3" }, [
                        _vm._v(
                          "Update versi ini berfokus pada perbaikan di beberapa bagian dan penambahan fitur pelaporan error/\n                    "
                        ),
                        _c("br"),
                        _c("br"),
                        _vm._v(
                          "\n                    Berikut adalah rincian perubahan pada versi ini:"
                        )
                      ]),
                      _vm._v(" "),
                      _c("ul", { staticClass: "list" }, [
                        _c("li", [
                          _vm._v(
                            "Penambahan fitur rekam semua error yang terjadi pada sistem agar memudahkan pengembang untuk melakukan troubleshooting dan perbaikan bug pada error yang terjadi"
                          )
                        ]),
                        _vm._v(" "),
                        _c("li", [
                          _vm._v(
                            "Perbaikan penampilan data produk dan pelayanan CU"
                          )
                        ]),
                        _vm._v(" "),
                        _c("li", [
                          _vm._v(
                            "Perbaikan pada dashboard dalam penyajian data"
                          )
                        ]),
                        _vm._v(" "),
                        _c("li", [_vm._v("Perbaikan pada redirect login user")])
                      ])
                    ])
                  ]
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "card" }, [
                _c("div", { staticClass: "card-header" }, [
                  _c("h5", { staticClass: "card-title" }, [
                    _c(
                      "a",
                      {
                        staticClass: "collapsed text-default",
                        attrs: { "data-toggle": "collapse", href: "#v308" }
                      },
                      [
                        _vm._v("Version 3.0.8 "),
                        _c("small", { staticClass: "text-muted" }, [
                          _vm._v(" / 8 Februari 2019")
                        ])
                      ]
                    )
                  ])
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass: "collapse",
                    attrs: {
                      id: "v308",
                      "data-parent": "#accordion-control-right"
                    }
                  },
                  [
                    _c("div", { staticClass: "card-body" }, [
                      _c("p", { staticClass: "mb-3" }, [
                        _vm._v(
                          "Update versi ini berfokus pada perbaikan data aktivis dan penambahan fitur pada aktivis\n                    "
                        ),
                        _c("br"),
                        _c("br"),
                        _vm._v(
                          "\n                    Berikut adalah rincian perubahan pada versi ini:"
                        )
                      ]),
                      _vm._v(" "),
                      _c("ul", { staticClass: "list" }, [
                        _c("li", [
                          _vm._v(
                            "Pengubahan cara menambah data aktivis, dimana pengguna mesti mengisikan dan melakukan pencarian berdasarkan no. KTP (NIK) untuk memastikan apakah aktivis tersebut sudah ada di dalam SIMO, jika ada maka pengguna tinggal melakukan pengubahan data sedangkan apabila data NIK aktivis tidak ada di dalam SIMO maka pengguna bisa langsung menambahkan data aktivis baru"
                          )
                        ]),
                        _vm._v(" "),
                        _c("li", [
                          _vm._v(
                            "Perbaikan pada perhitungan data aktivis di dashboard"
                          )
                        ]),
                        _vm._v(" "),
                        _c("li", [
                          _vm._v(
                            "Perbaikan pada download semua data di excel untuk aktivis"
                          )
                        ])
                      ])
                    ])
                  ]
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "card" }, [
                _c("div", { staticClass: "card-header" }, [
                  _c("h5", { staticClass: "card-title" }, [
                    _c(
                      "a",
                      {
                        staticClass: "collapsed text-default",
                        attrs: { "data-toggle": "collapse", href: "#v307" }
                      },
                      [
                        _vm._v("Version 3.0.7 "),
                        _c("small", { staticClass: "text-muted" }, [
                          _vm._v(" / 29 Januari 2019")
                        ])
                      ]
                    )
                  ])
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass: "collapse",
                    attrs: {
                      id: "v307",
                      "data-parent": "#accordion-control-right"
                    }
                  },
                  [
                    _c("div", { staticClass: "card-body" }, [
                      _c("p", { staticClass: "mb-3" }, [
                        _vm._v(
                          "Update versi ini berfokus pada perbaikan artikel, aktivis dan peningkatan pada diklat BKCU.\n                    "
                        ),
                        _c("br"),
                        _c("br"),
                        _vm._v(
                          "\n                    Berikut adalah rincian perubahan pada versi ini:"
                        )
                      ]),
                      _vm._v(" "),
                      _c("ul", { staticClass: "list" }, [
                        _c("li", [
                          _vm._v(
                            "Perbaikan pada halaman aktivis dalam menampilkan data aktivis yang tanggal selesai sudah melewati tanggal hari ini tapi statusnya masih bekerja"
                          )
                        ]),
                        _vm._v(" "),
                        _c("li", [_vm._v("Perbaikan pada pengubahan artikel")]),
                        _vm._v(" "),
                        _c("li", [
                          _vm._v(
                            "Perbaikan untuk menampilkan artikel pada halaman website publik CU"
                          )
                        ]),
                        _vm._v(" "),
                        _c("li", [
                          _vm._v("Perbaikan untuk notifikasi pada diklat BKCU")
                        ]),
                        _vm._v(" "),
                        _c("li", [
                          _vm._v(
                            "Peningkatan tampilan pada halaman detail Diklat BKCU"
                          )
                        ]),
                        _vm._v(" "),
                        _c("li", [
                          _vm._v(
                            "Peningkatan tampilan pada pencarian data untuk semua halaman yang memiliki fitur pencarian data"
                          )
                        ])
                      ])
                    ])
                  ]
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "card" }, [
                _c("div", { staticClass: "card-header" }, [
                  _c("h5", { staticClass: "card-title" }, [
                    _c(
                      "a",
                      {
                        staticClass: "collapsed text-default",
                        attrs: { "data-toggle": "collapse", href: "#v306" }
                      },
                      [
                        _vm._v("Version 3.0.6 "),
                        _c("small", { staticClass: "text-muted" }, [
                          _vm._v(" / 25 Januari 2019")
                        ])
                      ]
                    )
                  ])
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass: "collapse",
                    attrs: {
                      id: "v306",
                      "data-parent": "#accordion-control-right"
                    }
                  },
                  [
                    _c("div", { staticClass: "card-body" }, [
                      _c("p", { staticClass: "mb-3" }, [
                        _vm._v(
                          "Update versi ini berfokus pada perbaikan pada halaman produk CU dan perbaikan pada halaman diklat BKCU.\n                    "
                        ),
                        _c("br"),
                        _c("br"),
                        _vm._v(
                          "\n                    Berikut adalah rincian perubahan pada versi ini:"
                        )
                      ]),
                      _vm._v(" "),
                      _c("ul", { staticClass: "list" }, [
                        _c("li", [_vm._v("Penambahan field tipe produk CU")]),
                        _vm._v(" "),
                        _c("li", [
                          _vm._v(
                            "Perubahan tampilan daftar produk CU pada halaman Produk CU dari tabel menjadi card yang memudahkan dalam melihat informasi terkait produk CU"
                          )
                        ]),
                        _vm._v(" "),
                        _c("li", [
                          _vm._v(
                            "Perubahan tampilan daftar diklat pada halaman Diklat BKCU dari tabel menjadi card yang memudahkan dalam melihat informasi terkait diklat yang tersedia"
                          )
                        ]),
                        _vm._v(" "),
                        _c("li", [
                          _vm._v(
                            "Perbaikan widget Diklat BKCU pada halaman dashboard"
                          )
                        ]),
                        _vm._v(" "),
                        _c("li", [
                          _vm._v(
                            "Perbaikan widget peserta Diklat BKCU pada halaman dashboard"
                          )
                        ]),
                        _vm._v(" "),
                        _c("li", [
                          _vm._v(
                            "Perbaikan widget aktivitas perubahan data organisasi pada halaman dashboard"
                          )
                        ]),
                        _vm._v(" "),
                        _c("li", [_vm._v("Perbaikan bug modal logout")])
                      ])
                    ])
                  ]
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "card" }, [
                _c("div", { staticClass: "card-header" }, [
                  _c("h5", { staticClass: "card-title" }, [
                    _c(
                      "a",
                      {
                        staticClass: "collapsed text-default",
                        attrs: { "data-toggle": "collapse", href: "#v305" }
                      },
                      [
                        _vm._v("Version 3.0.5 "),
                        _c("small", { staticClass: "text-muted" }, [
                          _vm._v(" / 22 Januari 2019")
                        ])
                      ]
                    )
                  ])
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass: "collapse",
                    attrs: {
                      id: "v305",
                      "data-parent": "#accordion-control-right"
                    }
                  },
                  [
                    _c("div", { staticClass: "card-body" }, [
                      _c("p", { staticClass: "mb-3" }, [
                        _vm._v(
                          "Update versi ini berfokus pada perbaikan untuk proses penambahan dan pendaftaran Diklat BKCU, profile user dan penambahan widget untuk halaman dashboard.\n                    "
                        ),
                        _c("br"),
                        _c("br"),
                        _vm._v(
                          "\n                    Berikut adalah rincian perubahan pada versi ini:"
                        )
                      ]),
                      _vm._v(" "),
                      _c("ul", { staticClass: "list" }, [
                        _c("li", [
                          _vm._v(
                            "Penambahan visualisasi pada penambahan panitia Diklat BKCU"
                          )
                        ]),
                        _vm._v(" "),
                        _c("li", [
                          _vm._v(
                            "Penambahan visualisasi pada penambahan peserta Diklat BKCU"
                          )
                        ]),
                        _vm._v(" "),
                        _c("li", [
                          _vm._v(
                            "Perbaikan bug untuk penambahan peserta Diklat BKCU"
                          )
                        ]),
                        _vm._v(" "),
                        _c("li", [
                          _vm._v(
                            "Penambahan fitur untuk melihat aktivitas masing-masing user"
                          )
                        ]),
                        _vm._v(" "),
                        _c("li", [
                          _vm._v(
                            "Penambahan fitur untuk mengubah nama dan email masing-masing user"
                          )
                        ]),
                        _vm._v(" "),
                        _c("li", [
                          _vm._v("Perbaikan bug pada ubah password di profile")
                        ]),
                        _vm._v(" "),
                        _c("li", [
                          _vm._v(
                            "Penambahan widget navigasi halaman pada halaman dashboard"
                          )
                        ]),
                        _vm._v(" "),
                        _c("li", [
                          _vm._v(
                            "Penambahan widget Diklat BKCU pada halaman dashboard"
                          )
                        ]),
                        _vm._v(" "),
                        _c("li", [
                          _vm._v(
                            "Penambahan widget peserta Diklat BKCU pada halaman dashboard"
                          )
                        ]),
                        _vm._v(" "),
                        _c("li", [
                          _vm._v(
                            "Penambahan widget aktivitas perubahan data organisasi pada halaman dashboard"
                          )
                        ]),
                        _vm._v(" "),
                        _c("li", [
                          _vm._v(
                            "Penambahan widget jumlah data organisasi pada halaman dashboard"
                          )
                        ]),
                        _vm._v(" "),
                        _c("li", [
                          _vm._v(
                            "Perbaikan bug pada penampilan informasi error pada modal"
                          )
                        ])
                      ])
                    ])
                  ]
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "card" }, [
                _c("div", { staticClass: "card-header" }, [
                  _c("h5", { staticClass: "card-title" }, [
                    _c(
                      "a",
                      {
                        staticClass: "collapsed text-default",
                        attrs: { "data-toggle": "collapse", href: "#v304" }
                      },
                      [
                        _vm._v("Version 3.0.4 "),
                        _c("small", { staticClass: "text-muted" }, [
                          _vm._v(" / 13 Januari 2019")
                        ])
                      ]
                    )
                  ])
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass: "collapse",
                    attrs: {
                      id: "v304",
                      "data-parent": "#accordion-control-right"
                    }
                  },
                  [
                    _c("div", { staticClass: "card-body" }, [
                      _c("p", { staticClass: "mb-3" }, [
                        _vm._v(
                          "Update untuk versi ini berfokus pada penyelesaian/perbaikan pada fitur diklat BKCU dan pendaftaran peserta diklat BKCU, perbaikan pada laporan gerakan dan laporan statistik CU, peningkatan kecepatan dan keamanan dengan menggunakan layanan dari pihak ketiga, dan perbaikan serta peningkatan sistem secara keseluruhan agar pengalaman pengoperasian lebih konsisten, cepat dan menyenangkan.\n                    "
                        ),
                        _c("br"),
                        _c("br"),
                        _vm._v(
                          "\n                    Berikut adalah rincian perubahan pada versi ini:"
                        )
                      ]),
                      _vm._v(" "),
                      _c("ul", { staticClass: "list" }, [
                        _c("li", [
                          _vm._v(
                            "Perbaikan bug pada fitur data panitia dan fasilitator pada saat menambah Diklat BKCU"
                          )
                        ]),
                        _vm._v(" "),
                        _c("li", [
                          _vm._v(
                            "Perbaikan bug pada fitur daftar Diklat BKCU pada halaman Detail Diklat BKCU"
                          )
                        ]),
                        _vm._v(" "),
                        _c("li", [
                          _vm._v("Perbaikan perhitungan laporan gerakan")
                        ]),
                        _vm._v(" "),
                        _c("li", [
                          _vm._v(
                            "Pengubahan format dan jenis informasi yang ditampilkan pada halaman laporan gerakan"
                          )
                        ]),
                        _vm._v(" "),
                        _c("li", [
                          _vm._v(
                            "Perbaikan bug pada laporan CU ketika menambah data"
                          )
                        ]),
                        _vm._v(" "),
                        _c("li", [
                          _vm._v(
                            "Perbaikan bug pada perhitungan P.E.A.R.L.S. CU"
                          )
                        ]),
                        _vm._v(" "),
                        _c("li", [
                          _vm._v(
                            "Pengubahan tampilan dalam pencarian data CU agak lebih mudah dipahami."
                          )
                        ]),
                        _vm._v(" "),
                        _c("li", [
                          _vm._v(
                            "Peningkatan waktu idle pada user yang terlogin di SIMO dari awalnya kurang dari 1 jam menjadi 3 jam"
                          )
                        ]),
                        _vm._v(" "),
                        _c("li", [
                          _vm._v(
                            "Peningkatan keamanan dan kecepatan transfer data dengan menggunakan CDN dari cloudflare yang menyediakan peningkatan kecepatan loading halaman dan data, perlindungan dari serangan DDos, bots jahat dan intrusi-intrusi jahat lainnya, menambahkan satu lapisan perlindungan tambahan dengan menggunakan DNS cloudflare yang terenkripsi. Keterangan lebih lanjut mengenai cloudflare bisa dilihat "
                          ),
                          _c(
                            "a",
                            {
                              attrs: {
                                href:
                                  "https://www.cloudflare.com/learning/what-is-cloudflare/",
                                target: "_blank"
                              }
                            },
                            [_vm._v("di website cloudflare")]
                          )
                        ])
                      ])
                    ])
                  ]
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "card" }, [
                _c("div", { staticClass: "card-header" }, [
                  _c("h5", { staticClass: "card-title" }, [
                    _c(
                      "a",
                      {
                        staticClass: "collapsed text-default",
                        attrs: { "data-toggle": "collapse", href: "#v303" }
                      },
                      [
                        _vm._v("Version 3.0.3 "),
                        _c("small", { staticClass: "text-muted" }, [
                          _vm._v(" / 9 Januari 2019")
                        ])
                      ]
                    )
                  ])
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass: "collapse",
                    attrs: {
                      id: "v303",
                      "data-parent": "#accordion-control-right"
                    }
                  },
                  [
                    _c("div", { staticClass: "card-body" }, [
                      _c("p", { staticClass: "mb-3" }, [
                        _vm._v(
                          "Update untuk versi ini lebih pada perbaikan bug dan error yang ditemukan pada versi sebelumnya ketika sudah live di server production. Selain itu juga penambahan beberapa fitur yang belum sempat terimplementasikan pada versi sebelumnya\n                    "
                        ),
                        _c("br"),
                        _c("br"),
                        _vm._v(
                          "\n                    Berikut adalah rincian perubahan pada versi ini:"
                        )
                      ]),
                      _vm._v(" "),
                      _c("ul", { staticClass: "list" }, [
                        _c("li", [
                          _vm._v(
                            "Penambahan fitur data panitia dan fasilitator pada saat menambah Diklat BKCU"
                          )
                        ]),
                        _vm._v(" "),
                        _c("li", [
                          _vm._v(
                            "Penambahan fitur daftar Diklat BKCU pada halaman Detail Diklat BKCU"
                          )
                        ]),
                        _vm._v(" "),
                        _c("li", [_vm._v("Perbaikan bug pada download excel")]),
                        _vm._v(" "),
                        _c("li", [
                          _vm._v("Perbaikan bug pada form laporan CU")
                        ]),
                        _vm._v(" "),
                        _c("li", [
                          _vm._v("Perbaikan bug pada form P.E.A.R.L.S. CU")
                        ]),
                        _vm._v(" "),
                        _c("li", [
                          _vm._v("Perbaikan bug pada notifikasi laporan")
                        ]),
                        _vm._v(" "),
                        _c("li", [
                          _vm._v(
                            "Perbaikan bug pada upload gambar Penulis Artikel dan Tp"
                          )
                        ])
                      ])
                    ])
                  ]
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "card" }, [
                _c("div", { staticClass: "card-header" }, [
                  _c("h5", { staticClass: "card-title" }, [
                    _c(
                      "a",
                      {
                        staticClass: "collapsed text-default",
                        attrs: { "data-toggle": "collapse", href: "#v302" }
                      },
                      [
                        _vm._v("Version 3.0.2 "),
                        _c("small", { staticClass: "text-muted" }, [
                          _vm._v(" / 4 Januari 2019")
                        ])
                      ]
                    )
                  ])
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass: "collapse",
                    attrs: {
                      id: "v302",
                      "data-parent": "#accordion-control-right"
                    }
                  },
                  [
                    _c("div", { staticClass: "card-body" }, [
                      _c("p", { staticClass: "mb-3" }, [
                        _vm._v(
                          "Update untuk versi ini lebih pada perbaikan bug dan error yang ditemukan pada versi sebelumnya ketika sudah live di server production. Selain itu juga penambahan beberapa fitur yang belum sempat terimplementasikan pada versi sebelumnya\n                    "
                        ),
                        _c("br"),
                        _c("br"),
                        _vm._v(
                          "\n                    Berikut adalah rincian perubahan pada versi ini:"
                        )
                      ]),
                      _vm._v(" "),
                      _c("ul", { staticClass: "list" }, [
                        _c("li", [
                          _vm._v(
                            "Penambahan cara menambah hak akses dan peran untuk hak akses user"
                          )
                        ]),
                        _vm._v(" "),
                        _c("li", [
                          _vm._v(
                            "Perbaikan bug tambah dan ubah data untuk pengumuman"
                          )
                        ]),
                        _vm._v(" "),
                        _c("li", [
                          _vm._v(
                            "Perbaikan bug dalam mengambil list CU untuk masing-masing halaman"
                          )
                        ]),
                        _vm._v(" "),
                        _c("li", [
                          _vm._v("Perbaikan bug pada detail laporan CU")
                        ])
                      ])
                    ])
                  ]
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "card" }, [
                _c("div", { staticClass: "card-header" }, [
                  _c("h5", { staticClass: "card-title" }, [
                    _c(
                      "a",
                      {
                        staticClass: "collapsed text-default",
                        attrs: { "data-toggle": "collapse", href: "#v301" }
                      },
                      [
                        _vm._v("Version 3.0.1 "),
                        _c("small", { staticClass: "text-muted" }, [
                          _vm._v(" / 31 Desember 2018")
                        ])
                      ]
                    )
                  ])
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass: "collapse",
                    attrs: {
                      id: "v301",
                      "data-parent": "#accordion-control-right"
                    }
                  },
                  [
                    _c("div", { staticClass: "card-body" }, [
                      _c("p", { staticClass: "mb-3" }, [
                        _vm._v(
                          "Update untuk versi ini lebih pada perbaikan bug dan error yang ditemukan pada versi sebelumnya ketika sudah live di server production. Selain itu juga penambahan beberapa fitur yang belum sempat terimplementasikan pada versi sebelumnya\n                    "
                        ),
                        _c("br"),
                        _c("br"),
                        _vm._v(
                          "\n                    Berikut adalah rincian perubahan pada versi ini:"
                        )
                      ]),
                      _vm._v(" "),
                      _c("ul", { staticClass: "list" }, [
                        _c("li", [
                          _vm._v(
                            'Perbaikan bug subdomain dan domain ketika menambahkan "www" didepan alamat website'
                          )
                        ]),
                        _vm._v(" "),
                        _c("li", [
                          _vm._v(
                            "Penambahan fitur untuk menuliskan saran terhadap aplikasi ini"
                          )
                        ]),
                        _vm._v(" "),
                        _c("li", [
                          _vm._v(
                            "Penambahan fitur mengelola pengumuman untuk masing-masing CU yang akan otomatis muncul di website publik di subdomain masing-masing CU"
                          )
                        ]),
                        _vm._v(" "),
                        _c("li", [
                          _vm._v(
                            "Perbaikan bug hak akses user yang selalu menampilkan hak akses untuk CU dan tidak bisa untuk BKCU"
                          )
                        ]),
                        _vm._v(" "),
                        _c("li", [
                          _vm._v(
                            "Optimalisasi aplikasi dengan mengurangi beberapa panggilan data ke server yang redundan"
                          )
                        ])
                      ])
                    ])
                  ]
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "card" }, [
                _c("div", { staticClass: "card-header" }, [
                  _c("h5", { staticClass: "card-title" }, [
                    _c(
                      "a",
                      {
                        staticClass: "collapsed text-default",
                        attrs: { "data-toggle": "collapse", href: "#v300" }
                      },
                      [
                        _vm._v("Version 3.0.0 "),
                        _c("small", { staticClass: "text-muted" }, [
                          _vm._v(" / 27 Desember 2018")
                        ])
                      ]
                    )
                  ])
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass: "collapse",
                    attrs: {
                      id: "v300",
                      "data-parent": "#accordion-control-right"
                    }
                  },
                  [
                    _c("div", { staticClass: "card-body" }, [
                      _c("p", { staticClass: "mb-3" }, [
                        _vm._v(
                          "Pada versi ini SIMO yang berbasis sepenuhnya PHP dengan framework laravel telah berubah menjadi Single Page Application (SPA) berbasis javascript dengan framework Vue.js yang menawarkan pengalaman interaksi desktop pada browser.\n                    "
                        ),
                        _c("br"),
                        _c("br"),
                        _vm._v(
                          "\n                    Tampilan keseluruhan pada SIMO juga telah berubah. Menawarkan tampilan yang terinspirasi dari Material design dan Cupertino design yang menghasilkan sebuah aplikasi berbasis web yang interaktif dan menarik\n                    "
                        ),
                        _c("br"),
                        _c("br"),
                        _vm._v(
                          "\n                    Pengolahan data juga telah berubah untuk menyesuaikan dengan transaksi data berbasis API yang menawarkan kecepatan dan reliabilitas serta kemudahan untuk pengembangan lebih lanjut.\n                    "
                        ),
                        _c("br"),
                        _c("br"),
                        _vm._v(
                          "\n                    Berikut adalah rincian perubahan pada versi ini:"
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "row mb-3" }, [
                        _c("div", { staticClass: "col-sm-6" }, [
                          _c("ul", { staticClass: "list" }, [
                            _c("li", [
                              _vm._v(
                                "Frontend PHP menjadi Javascript Single Page Application dari Vue.js yang menawarkan:\n                            "
                              ),
                              _c("ul", [
                                _c("li", [
                                  _vm._v("Transaksi data berbasis API")
                                ]),
                                _vm._v(" "),
                                _c("li", [_vm._v("Keamanan dengan JWT Auth")]),
                                _vm._v(" "),
                                _c("li", [
                                  _vm._v(
                                    "Kecepatan pengoperasian karena hanya 1 kali saja loading asset aplikasi, sisanya adalah loading data dari server"
                                  )
                                ]),
                                _vm._v(" "),
                                _c("li", [
                                  _vm._v(
                                    "Peningkatan interaksi dan animasi pada pengoperasian"
                                  )
                                ])
                              ])
                            ]),
                            _vm._v(" "),
                            _c("li", [
                              _vm._v(
                                "Penambahan fitur publikasi website bagi CU, dimana masing-masing user CU telah diberikan halaman website tersendiri yang berisi informasi standar sebuah website perusahaan dan dapat dioleh sendiri dengan fitur:\n                            "
                              ),
                              _c("ul", [
                                _c("li", [
                                  _vm._v(
                                    "Memiliki subdomain khusus untuk masing-masing CU"
                                  )
                                ]),
                                _vm._v(" "),
                                _c("li", [_vm._v("Menambah artikel")]),
                                _vm._v(" "),
                                _c("li", [
                                  _vm._v("Menambah data produk dan pelayanan")
                                ]),
                                _vm._v(" "),
                                _c("li", [
                                  _vm._v(
                                    "Menambah informasi lembaga seperti misi, visi, nilai-nilai, sejarah dan slogan"
                                  )
                                ])
                              ])
                            ])
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-sm-6" }, [
                          _c("ul", { staticClass: "list" }, [
                            _c("li", [
                              _vm._v(
                                "Penambahan input data pada laporan sampai dengan laporan per TP/KP dari masing-masing CU yang otomatis akan dikonsolidasikan"
                              )
                            ]),
                            _vm._v(" "),
                            _c("li", [
                              _vm._v(
                                "Penambahan 2 indikator baru pada perhitungan P.E.A.R.L.S"
                              )
                            ]),
                            _vm._v(" "),
                            _c("li", [
                              _vm._v(
                                "Penambahan visualisasi dan analisis data pada laporan keuangan di detail laporan"
                              )
                            ]),
                            _vm._v(" "),
                            _c("li", [
                              _vm._v(
                                "Penambahan upload excel pada laporan Cu dan Laporan Tp"
                              )
                            ]),
                            _vm._v(" "),
                            _c("li", [
                              _vm._v(
                                "Penambahan fitur filter data yang mampu mendukung pencarian secara lebih mendetail"
                              )
                            ]),
                            _vm._v(" "),
                            _c("li", [
                              _vm._v(
                                "Penambahaan fitur manajemen user kepada masing-masing CU"
                              )
                            ]),
                            _vm._v(" "),
                            _c("li", [
                              _vm._v(
                                "Penambahan field-field baru untuk informasi CU seperti npwp, situ, siusp, izin operasional dan lainnya"
                              )
                            ]),
                            _vm._v(" "),
                            _c("li", [
                              _vm._v("Perbaikan bug dan peningkatan performa")
                            ])
                          ])
                        ])
                      ])
                    ])
                  ]
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "card" }, [
                _c("div", { staticClass: "card-header" }, [
                  _c("h5", { staticClass: "card-title" }, [
                    _c(
                      "a",
                      {
                        staticClass: "collapsed text-default",
                        attrs: { "data-toggle": "collapse", href: "#v213" }
                      },
                      [
                        _vm._v("Version 2.1.3 "),
                        _c("small", { staticClass: "text-muted" }, [
                          _vm._v(" / 20 April 2017")
                        ])
                      ]
                    )
                  ])
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass: "collapse",
                    attrs: {
                      id: "v213",
                      "data-parent": "#accordion-control-right"
                    }
                  },
                  [
                    _c("div", { staticClass: "card-body" }, [
                      _c("p", { staticClass: "mb-3" }, [
                        _vm._v("Pada versi ini "),
                        _c("b", [_vm._v("AdminBKCU")]),
                        _vm._v(" berubah nama menjadi "),
                        _c("b", [_vm._v("SIMO")]),
                        _vm._v(" yang merupakan singkatan dari "),
                        _c("b", [_vm._v("S")]),
                        _vm._v("istem "),
                        _c("b", [_vm._v("I")]),
                        _vm._v("nformasi "),
                        _c("b", [_vm._v("M")]),
                        _vm._v("anajemen "),
                        _c("b", [_vm._v("O")]),
                        _vm._v(
                          "rganisasi. Pemilihan nama ini adalah didasarkan dari fitur yang ditawarkan oleh aplikasi ini yaitu memanajemen informasi dari organisasi (bukan bidang organisasi, melainkan organisasi dalam artian Puskopdit BKCU Kalimantan dan CU Primer anggota).\n                    "
                        ),
                        _c("br"),
                        _c("br"),
                        _vm._v(
                          "\n                    Dalam versi ini terdapat 2 bagian baru yang ditambahkan di aplikasi ini yaitu bagian "
                        ),
                        _c("b", [_vm._v("Diklat")]),
                        _vm._v(" dan bagian "),
                        _c("b", [_vm._v("Staf")]),
                        _vm._v(
                          ". Kedua bagian tersebut merupakan pengembangan dari bagian "
                        ),
                        _c("b", [_vm._v("Kegiatan")]),
                        _vm._v(" yang sekarang menjadi "),
                        _c("b", [_vm._v("Diklat")]),
                        _vm._v(
                          " dengan penambahan fitur informasi yang lebih mendetail serta fitur pendaftaran peserta. Kemudian bagian "
                        ),
                        _c("b", [_vm._v("Staf")]),
                        _vm._v(
                          " juga ditambahkan beberapa fitur agak dapat saling berinteraksi dengan bagian "
                        ),
                        _c("b", [_vm._v("Diklat")]),
                        _vm._v(", karena peserta adalah berasal dari bagian "),
                        _c("b", [_vm._v("Staf")]),
                        _vm._v(" "),
                        _c("br"),
                        _c("br"),
                        _vm._v(
                          "\n                    Selain itu juga terdapat banyak penambahan serta perbaikan pada aplikasi yang memberikan peningkatan performa, stabilitas, serta pengalaman menggunakan aplikasi ini.\n                    "
                        ),
                        _c("br"),
                        _c("br"),
                        _vm._v(
                          "\n                    Berikut adalah rincian perubahan pada versi ini:"
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "row mb-3" }, [
                        _c("div", { staticClass: "col-sm-6" }, [
                          _c("ul", { staticClass: "list" }, [
                            _c("li", [
                              _vm._v("AdminBKCU berubah nama menjadi SIMO")
                            ]),
                            _vm._v(" "),
                            _c("li", [
                              _vm._v(
                                "Penambahan bagian Diklat yang berfungsi:\n                              "
                              ),
                              _c("ul", [
                                _c("li", [
                                  _vm._v(
                                    "Data diklat yang dilaksanakan oleh Puskopdit BKCU Kalimantan"
                                  )
                                ]),
                                _vm._v(" "),
                                _c("li", [
                                  _vm._v(
                                    "Daftar diklat yang bisa dilakukan langsung melalui program oleh CU Primer anggota"
                                  )
                                ]),
                                _vm._v(" "),
                                _c("li", [
                                  _vm._v("Data tempat dilaksanakan diklat")
                                ]),
                                _vm._v(" "),
                                _c("li", [
                                  _vm._v(
                                    "Penambahan widget kegiatan terdekat, kegiatan berjalan dan kalender pada dashboard"
                                  )
                                ])
                              ])
                            ]),
                            _vm._v(" "),
                            _c("li", [
                              _vm._v(
                                "Penambahan bagian Staf yang berfungsi:\n                              "
                              ),
                              _c("ul", [
                                _c("li", [
                                  _vm._v(
                                    "Data staf dalam gerakan Puskopdit BKCU Kalimantan"
                                  )
                                ]),
                                _vm._v(" "),
                                _c("li", [
                                  _vm._v(
                                    "Komunikasi data antara bagian Staf dengan bagian Diklat"
                                  )
                                ])
                              ])
                            ])
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-sm-6" }, [
                          _c("ul", { staticClass: "list" }, [
                            _c("li", [
                              _vm._v(
                                "Perubahan navigasi website dimana panel navigasi yang versi sebelumnya berada di tepi kiri menjadi berada di atas"
                              )
                            ]),
                            _vm._v(" "),
                            _c("li", [
                              _vm._v(
                                "Pengubahan semua tabel kecuali tabel bagian laporan CU menjadi tabel yang responsive/mobile friendly"
                              )
                            ]),
                            _vm._v(" "),
                            _c("li", [
                              _vm._v(
                                "Penambahan bagian Panduan untuk memberikan petunjuk pengoperasian aplikasi ini"
                              )
                            ]),
                            _vm._v(" "),
                            _c("li", [
                              _vm._v("Perbaikan rumusan laporan P.E.A.R.L.S.")
                            ]),
                            _vm._v(" "),
                            _c("li", [
                              _vm._v("Perbaikan integrasi plugin upload foto")
                            ]),
                            _vm._v(" "),
                            _c("li", [
                              _vm._v("Perbaikan bug dan peningkatan performa")
                            ])
                          ])
                        ])
                      ])
                    ])
                  ]
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "card" }, [
                _c("div", { staticClass: "card-header" }, [
                  _c("h5", { staticClass: "card-title" }, [
                    _c(
                      "a",
                      {
                        staticClass: "collapsed text-default",
                        attrs: { "data-toggle": "collapse", href: "#v212" }
                      },
                      [
                        _vm._v("Version 2.1.2 "),
                        _c("small", { staticClass: "text-muted" }, [
                          _vm._v(" / 11 Maret 2017")
                        ])
                      ]
                    )
                  ])
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass: "collapse",
                    attrs: {
                      id: "v212",
                      "data-parent": "#accordion-control-right"
                    }
                  },
                  [
                    _c("div", { staticClass: "card-body" }, [
                      _c("p", { staticClass: "mb-3" }, [
                        _vm._v(
                          "Penambahan fitur bagian laporan P.E.A.R.L.S Berikut adalah rincian perubahan pada versi ini"
                        )
                      ]),
                      _vm._v(" "),
                      _c("ul", { staticClass: "list" }, [
                        _c("li", [
                          _vm._v("Upgrade template AdminLte ke versi 2.3.12")
                        ]),
                        _vm._v(" "),
                        _c("li", [
                          _vm._v("Perubahan model navigasi panel samping")
                        ]),
                        _vm._v(" "),
                        _c("li", [
                          _vm._v(
                            "Penambahan plugin Mathjax untuk menampilkan kalkulasi perhitungan"
                          )
                        ]),
                        _vm._v(" "),
                        _c("li", [
                          _vm._v(
                            "Penambahan fitur melihat detail perhitungan laporan P.E.A.R.L.S"
                          )
                        ]),
                        _vm._v(" "),
                        _c("li", [
                          _vm._v(
                            "Perbaikan rumus perhitungan laporan P.E.A.R.L.S"
                          )
                        ]),
                        _vm._v(" "),
                        _c("li", [
                          _vm._v("Perbaikan bug dan peningkatan performa")
                        ])
                      ])
                    ])
                  ]
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "card" }, [
                _c("div", { staticClass: "card-header" }, [
                  _c("h5", { staticClass: "card-title" }, [
                    _c(
                      "a",
                      {
                        staticClass: "collapsed text-default",
                        attrs: { "data-toggle": "collapse", href: "#v211" }
                      },
                      [
                        _vm._v("Version 2.1.1 "),
                        _c("small", { staticClass: "text-muted" }, [
                          _vm._v(" / 14 Februari 2017")
                        ])
                      ]
                    )
                  ])
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass: "collapse",
                    attrs: {
                      id: "v211",
                      "data-parent": "#accordion-control-right"
                    }
                  },
                  [
                    _c("div", { staticClass: "card-body" }, [
                      _c("p", { staticClass: "mb-3" }, [
                        _vm._v(
                          "Penambahan fitur bagian laporan CU serta fitur diskusi pada laporan CU Berikut adalah rincian perubahan pada versi ini:"
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "row mb-3" }, [
                        _c("div", { staticClass: "col-sm-4" }, [
                          _c("ul", { staticClass: "list" }, [
                            _c("li", [
                              _vm._v(
                                "Upgrade laravel versi 5.2 ke versi 5.3 yang menawarkan:\n                              "
                              ),
                              _c("ul", [
                                _c("li", [_vm._v("Support Vue.js")]),
                                _vm._v(" "),
                                _c("li", [_vm._v("Fitur sistem notifikasi")]),
                                _vm._v(" "),
                                _c("li", [
                                  _vm._v(
                                    "Penyederhanaan struktur folder project"
                                  )
                                ]),
                                _vm._v(" "),
                                _c("li", [
                                  _vm._v(
                                    "Pembagian rute akses website menjadi dua yaitu untuk akses ke web dan akses melalui aplikasi selain web (API)"
                                  )
                                ])
                              ])
                            ]),
                            _vm._v(" "),
                            _c("li", [
                              _vm._v(
                                "Penambahan bagian laporan CU yang berfungsi:\n                              "
                              ),
                              _c("ul", [
                                _c("li", [
                                  _vm._v(
                                    "Menampung dan mengolah data laporan keuangan CU menjadi laporan perkembangan CU serta analisis P.E.A.R.L.S"
                                  )
                                ]),
                                _vm._v(" "),
                                _c("li", [
                                  _vm._v(
                                    "Menampilkan laporan CU dalam tabel interaktif serta grafik"
                                  )
                                ]),
                                _vm._v(" "),
                                _c("li", [
                                  _vm._v(
                                    "Input data laporan melalui upload excel "
                                  ),
                                  _c(
                                    "small",
                                    { staticClass: "label bg-yellow" },
                                    [_vm._v("beta")]
                                  )
                                ])
                              ])
                            ])
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-sm-4" }, [
                          _c("ul", { staticClass: "list" }, [
                            _c("li", [
                              _vm._v(
                                "Penambahan bagian laporan CU yang berfungsi:\n                              "
                              ),
                              _c("ul", [
                                _c("li", [
                                  _vm._v(
                                    "Menampilkan pertumbuhan perakun perperiode pada masing-masing laporan"
                                  )
                                ]),
                                _vm._v(" "),
                                _c("li", [
                                  _vm._v(
                                    "Menampilkan panel overview kondisi CU berdasarkan laporan terbaru"
                                  )
                                ]),
                                _vm._v(" "),
                                _c("li", [
                                  _vm._v(
                                    "Penambahan fitur pada input data laporan melalui upload excel "
                                  ),
                                  _c(
                                    "small",
                                    { staticClass: "label bg-yellow" },
                                    [_vm._v("beta 2")]
                                  )
                                ])
                              ])
                            ]),
                            _vm._v(" "),
                            _c("li", [
                              _vm._v(
                                "Penambahan fitur sistem notifikasi yang berfungsi:\n                              "
                              ),
                              _c("ul", [
                                _c("li", [
                                  _vm._v(
                                    "Memberikan pemberitahuan mengenai laporan CU yang masuk, diubah, dan dihapus"
                                  )
                                ]),
                                _vm._v(" "),
                                _c("li", [
                                  _vm._v(
                                    "Memberikan pemberitahuan mengenai diskusi laporan CU yang masuk, diubah, dan dihapus"
                                  )
                                ])
                              ])
                            ])
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-sm-4" }, [
                          _c("ul", { staticClass: "list" }, [
                            _c("li", [
                              _vm._v(
                                "Penambahan bagian diskusi laporan CU yang berfungsi:\n                              "
                              ),
                              _c("ul", [
                                _c("li", [
                                  _vm._v(
                                    "Memberikan masukkan kepada CU bahwa laporan telah diterima/diperiksa"
                                  )
                                ]),
                                _vm._v(" "),
                                _c("li", [
                                  _vm._v(
                                    "Memberikan masukkan/pertanyaan terhadap laporan CU yang telah diterima/diperiksa"
                                  )
                                ])
                              ])
                            ]),
                            _vm._v(" "),
                            _c("li", [
                              _vm._v(
                                "Penambahan bagian revisi laporan CU yang berfungsi Menampilkan data apa saja yang telah diubah"
                              )
                            ]),
                            _vm._v(" "),
                            _c("li", [
                              _vm._v(
                                "Penambahan fitur mengubah foto profil admin pada bagian admin"
                              )
                            ]),
                            _vm._v(" "),
                            _c("li", [
                              _vm._v("Perbaikan bug dan peningkatan performa")
                            ])
                          ])
                        ])
                      ])
                    ])
                  ]
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "card" }, [
                _c("div", { staticClass: "card-header" }, [
                  _c("h5", { staticClass: "card-title" }, [
                    _c(
                      "a",
                      {
                        staticClass: "collapsed text-default",
                        attrs: { "data-toggle": "collapse", href: "#v210" }
                      },
                      [
                        _vm._v("Version 2.1.0 "),
                        _c("small", { staticClass: "text-muted" }, [
                          _vm._v(" / 9 Desember 2016")
                        ])
                      ]
                    )
                  ])
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass: "collapse",
                    attrs: {
                      id: "v210",
                      "data-parent": "#accordion-control-right"
                    }
                  },
                  [
                    _c("div", { staticClass: "card-body" }, [
                      _c("p", { staticClass: "mb-3" }, [
                        _vm._v(
                          "Penambahan fitur bagian laporan CU yang berfungsi untuk menampilkan perkembangan Credit Union diserta dengan perhitungan analisis P.E.A.R.L.S serta upgrade sistem utama aplikasi dari versi 4.2 ke versi 5.2 dan peningkatan fitur-fitur pada plugin yang dipakai. Berikut adalah rincian perubahan pada versi ini:"
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "row mb-3" }, [
                        _c("div", { staticClass: "col-sm-4" }, [
                          _c("ul", { staticClass: "list" }, [
                            _c("li", [
                              _vm._v(
                                "Upgrade laravel versi 4.2 ke versi 5.2 yang menawarkan:\n                              "
                              ),
                              _c("ul", [
                                _c("li", [_vm._v("Support PHP 7")]),
                                _vm._v(" "),
                                _c("li", [
                                  _vm._v(
                                    'Peningkatan keamanan dengan "middleware"'
                                  )
                                ]),
                                _vm._v(" "),
                                _c("li", [
                                  _vm._v("Peningkatan eksekusi kode program")
                                ]),
                                _vm._v(" "),
                                _c("li", [
                                  _vm._v(
                                    "Penambahan dukungan terhadap plugin-plugin"
                                  )
                                ]),
                                _vm._v(" "),
                                _c("li", [
                                  _vm._v(
                                    "Proteksi semua input terhadap serangan SQL injection"
                                  )
                                ])
                              ])
                            ]),
                            _vm._v(" "),
                            _c("li", [
                              _vm._v(
                                "Penambahan bagian laporan CU yang berfungsi:\n                              "
                              ),
                              _c("ul", [
                                _c("li", [
                                  _vm._v(
                                    "Menampung dan mengolah data laporan keuangan CU menjadi laporan perkembangan CU serta analisis P.E.A.R.L.S"
                                  )
                                ]),
                                _vm._v(" "),
                                _c("li", [
                                  _vm._v(
                                    "Menampilkan laporan CU dalam tabel interaktif serta grafik"
                                  )
                                ]),
                                _vm._v(" "),
                                _c("li", [
                                  _vm._v(
                                    "Input data laporan melalui upload excel "
                                  ),
                                  _c(
                                    "small",
                                    { staticClass: "label bg-yellow" },
                                    [_vm._v("beta")]
                                  )
                                ])
                              ])
                            ])
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-sm-4" }, [
                          _c("ul", { staticClass: "list" }, [
                            _c("li", [
                              _vm._v(
                                "Penambahan bagian TP CU untuk mendata informasi TP tiap CU secara lebih mendetail"
                              )
                            ]),
                            _vm._v(" "),
                            _c("li", [
                              _vm._v(
                                "Penambahan bagian admin untuk CU yang memungkinkan staf CU untuk:\n                              "
                              ),
                              _c("ul", [
                                _c("li", [
                                  _vm._v("Mengisi / mengubah profil dari CU")
                                ]),
                                _vm._v(" "),
                                _c("li", [
                                  _vm._v(
                                    "Menambah, mengubah dan menghapus data TP di CU"
                                  )
                                ]),
                                _vm._v(" "),
                                _c("li", [
                                  _vm._v(
                                    "Menambah, mengubah dan menghapus laporan CU"
                                  )
                                ])
                              ])
                            ]),
                            _vm._v(" "),
                            _c("li", [
                              _vm._v(
                                "Penambahan fitur dan perubahan penggunaan pada Datatable"
                              )
                            ]),
                            _vm._v(" "),
                            _c("li", [
                              _vm._v(
                                "Penambahan fitur text editor untuk bagian artikel"
                              )
                            ]),
                            _vm._v(" "),
                            _c("li", [
                              _vm._v("Penambahan fitur pada bagian admin")
                            ]),
                            _vm._v(" "),
                            _c("li", [
                              _vm._v("Pengubahan struktur navigasi sidebar")
                            ])
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-sm-4" }, [
                          _c("ul", { staticClass: "list" }, [
                            _c("li", [
                              _vm._v(
                                "Penambahan fitur validator untuk validasi input"
                              )
                            ]),
                            _vm._v(" "),
                            _c("li", [
                              _vm._v(
                                "Penggunaan input mask untuk pengisian tanggal serta pengisian angka"
                              )
                            ]),
                            _vm._v(" "),
                            _c("li", [
                              _vm._v(
                                "Penggunaan pace untuk animasi loading resource dan request ajax"
                              )
                            ]),
                            _vm._v(" "),
                            _c("li", [
                              _vm._v(
                                "Penggantian Plugin ACL entrust dengan kodeine untuk integrasi lebih lanjut dengan laravel ACL"
                              )
                            ]),
                            _vm._v(" "),
                            _c("li", [
                              _vm._v(
                                "Menghapus plugin flickering untuk akses ke flickr"
                              )
                            ]),
                            _vm._v(" "),
                            _c("li", [
                              _vm._v("Perbaikan bug dan peningkatan performa")
                            ])
                          ])
                        ])
                      ])
                    ])
                  ]
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "card" }, [
                _c("div", { staticClass: "card-header" }, [
                  _c("h5", { staticClass: "card-title" }, [
                    _c(
                      "a",
                      {
                        staticClass: "collapsed text-default",
                        attrs: { "data-toggle": "collapse", href: "#v201" }
                      },
                      [
                        _vm._v("Version 2.0.1 "),
                        _c("small", { staticClass: "text-muted" }, [
                          _vm._v(" / 2 Januari 2016")
                        ])
                      ]
                    )
                  ])
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass: "collapse",
                    attrs: {
                      id: "v201",
                      "data-parent": "#accordion-control-right"
                    }
                  },
                  [
                    _c("div", { staticClass: "card-body" }, [
                      _c("p", { staticClass: "mb-3" }, [
                        _vm._v(
                          "Pengubahan penggunaan rich text editor dari CKeditor menjadi Summernote. Berikut adalah rincian perubahan pada versi ini:"
                        )
                      ]),
                      _vm._v(" "),
                      _c("ul", [
                        _c("li", [
                          _vm._v("Penggantian CKeditor menjadi Summernote")
                        ]),
                        _vm._v(" "),
                        _c("li", [
                          _vm._v(
                            "Pengubahan cara penanganan gambar pada Summernote"
                          )
                        ]),
                        _vm._v(" "),
                        _c("li", [
                          _vm._v(
                            "Peningkatan penanganan upload gambar dengan metode baru yang diperkenalkan\n                        pada versi Intervention Image v2.x"
                          )
                        ]),
                        _vm._v(" "),
                        _c("li", [_vm._v("Penambahan halaman version")]),
                        _vm._v(" "),
                        _c("li", [
                          _vm._v("Perbaikan bug dan peningkatan performa")
                        ])
                      ])
                    ])
                  ]
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "card" }, [
                _c("div", { staticClass: "card-header" }, [
                  _c("h5", { staticClass: "card-title" }, [
                    _c(
                      "a",
                      {
                        staticClass: "collapsed text-default",
                        attrs: { "data-toggle": "collapse", href: "#v200" }
                      },
                      [
                        _vm._v("Version 2.0.0 "),
                        _c("small", { staticClass: "text-muted" }, [
                          _vm._v(" / 31 Desember 2015")
                        ])
                      ]
                    )
                  ])
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass: "collapse",
                    attrs: {
                      id: "v200",
                      "data-parent": "#accordion-control-right"
                    }
                  },
                  [
                    _c("div", { staticClass: "card-body" }, [
                      _c("p", { staticClass: "mb-3" }, [
                        _vm._v(
                          "Rombak ulang keseluruhan tampilan admin menjadi lebih mudah di operasikan, lebih "
                        ),
                        _c("i", [_vm._v("responsive/mobile friendly")]),
                        _vm._v(
                          " dan pengubahan code php pada controller dan model untuk peningkatan performa dan konsistensi pada tiap pengoperasian. Berikut adalah rincian perubahan pada versi ini:"
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "row mb-3" }, [
                        _c("div", { staticClass: "col-sm-6" }, [
                          _c("ul", { staticClass: "list" }, [
                            _c("li", [
                              _vm._v(
                                "Pengalaman penggunaan dengan desain yang lebih modern dan responsive"
                              )
                            ]),
                            _vm._v(" "),
                            _c("li", [
                              _vm._v("Sidebar yang fleksibel dan responsive")
                            ]),
                            _vm._v(" "),
                            _c("li", [_vm._v("Upgrade bootstrap v3.3.2")]),
                            _vm._v(" "),
                            _c("li", [_vm._v("Upgrade font-awesome v4.5.0")]),
                            _vm._v(" "),
                            _c("li", [_vm._v("Upgrade Datatables v1.10.10")]),
                            _vm._v(" "),
                            _c("li", [
                              _vm._v("Upgrade Image Intervention v2.x")
                            ]),
                            _vm._v(" "),
                            _c("li", [_vm._v("Upgrade Jquery v2.1.3 ")]),
                            _vm._v(" "),
                            _c("li", [
                              _vm._v(
                                "Penambahan fitur pada semua tabel di halaman kelola yaitu\n                              "
                              ),
                              _c("ul", [
                                _c("li", [
                                  _vm._v(
                                    "Tabel menjadi responsive dan dapat menyesuaikan di hampir semua ukuran layar.\n                                      maka apabila layar terlalu kecil untuk kolom, kolom otomatis akan disembunyikan dan\n                                      akan muncul tombol untuk menampilkan kolom yang telah di sembunyikan tersebut"
                                  )
                                ]),
                                _vm._v(" "),
                                _c("li", [
                                  _vm._v(
                                    "Warp text pada masing-masing cell di kolom untuk pemanfaatan ruang kosong pada cell"
                                  )
                                ]),
                                _vm._v(" "),
                                _c("li", [
                                  _vm._v(
                                    "Colum priority pada kolom hapus,ubah dan detail membuat kolom tersebut tidak akan\n                                      tersembunyi apabila ukuran layar terlalu kecil untuk semua tabel"
                                  )
                                ]),
                                _vm._v(" "),
                                _c("li", [
                                  _vm._v(
                                    "Pengubahan cara berinteraksi pada tiap tabel agar lebih konsisten"
                                  )
                                ])
                              ])
                            ]),
                            _vm._v(" "),
                            _c("li", [
                              _vm._v(
                                "Peningkatan cara mengangani error dan penyampaian informasi error yang lebih informatif dan akurat"
                              )
                            ]),
                            _vm._v(" "),
                            _c("li", [
                              _vm._v("Peningkatan penanganan upload gambar")
                            ]),
                            _vm._v(" "),
                            _c("li", [
                              _vm._v(
                                "Penambahan halaman detail staf untuk pemberian informasi lengkap mengenai staf"
                              )
                            ])
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-sm-6" }, [
                          _c("ul", { staticClass: "list" }, [
                            _c("li", [
                              _vm._v(
                                "Penambahan fitur pada semua form di halaman tambah dan ubah yaitu\n                              "
                              ),
                              _c("ul", [
                                _c("li", [
                                  _vm._v(
                                    "Peningkatan desain yang lebih modern dan lebih jelas fungsinya"
                                  )
                                ]),
                                _vm._v(" "),
                                _c("li", [
                                  _vm._v(
                                    "Penggunaan input mask pada pengisian tanggal untuk mempermudah pengisian tanggal"
                                  )
                                ]),
                                _vm._v(" "),
                                _c("li", [
                                  _vm._v(
                                    "Peningkatan pada CKeditor dengan menambahkan fitur responsive pada gambar"
                                  )
                                ]),
                                _vm._v(" "),
                                _c("li", [
                                  _vm._v(
                                    "Penggunaan laravel validation pada input text untuk menginformasikan bagian yang bermasalah"
                                  )
                                ]),
                                _vm._v(" "),
                                _c("li", [
                                  _vm._v(
                                    "Peningkatan visualisasi dan informasi yang disampaikan pada bagian pemberitahuan setelah melakukan penyimpanan atau pengubahan data"
                                  )
                                ])
                              ])
                            ]),
                            _vm._v(" "),
                            _c("li", [
                              _vm._v(
                                "Peningkatan halaman admin (kelola admin,tambah admin, ubah admin) yaitu\n                              "
                              ),
                              _c("ul", [
                                _c("li", [
                                  _vm._v("Pengubahan cara mengubah password")
                                ]),
                                _vm._v(" "),
                                _c("li", [
                                  _vm._v(
                                    "Penambahan tipe admin untuk membedakan admin BKCU dan admin CU Primer"
                                  )
                                ]),
                                _vm._v(" "),
                                _c("li", [
                                  _vm._v(
                                    "Menyatukan tipe admin CU Primer dengan data CU Primer yang dipilih"
                                  )
                                ])
                              ])
                            ]),
                            _vm._v(" "),
                            _c("li", [
                              _vm._v(
                                "Perbaikan error routing pada beberapa halaman"
                              )
                            ]),
                            _vm._v(" "),
                            _c("li", [
                              _vm._v("Perbaikan error pada controller")
                            ]),
                            _vm._v(" "),
                            _c("li", [_vm._v("Perbaikan error pada model")])
                          ])
                        ])
                      ]),
                      _vm._v(" "),
                      _c("hr"),
                      _vm._v(" "),
                      _c("p", { staticClass: "mb-3" }, [
                        _vm._v(
                          "Rombak ulang seluruh halaman pada website publik dengan tampilan yang lebih bersih, modern,\n                    responsive/mobile friendly dan visualisasi yang lebih bai k. Pada update kali ini semua\n                    bagian pada halaman telah di desain ulang menyesuaikan tema halaman dengan warna dasar putih\n                    dan biru serta background yang dapat disesuaikan dengan keadaan/event yang sedang berlangsung.\n                    Serta penambahan halaman CU untuk melakukan pengubahan dan penambahan data pada data CU Primer.\n                    Berikut adalah rincian perubahan pada versi ini:"
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "row mb-3" }, [
                        _c("div", { staticClass: "col-sm-6" }, [
                          _c("ul", { staticClass: "list" }, [
                            _c("li", [
                              _vm._v(
                                "Penambahan plugin javascript yaitu:\n                              "
                              ),
                              _c("ul", [
                                _c("li", [_vm._v("jquery.fitvids")]),
                                _vm._v(" "),
                                _c("li", [_vm._v("nivo-lightbox")]),
                                _vm._v(" "),
                                _c("li", [_vm._v("jquery.isotope")]),
                                _vm._v(" "),
                                _c("li", [_vm._v("jquery.appear")]),
                                _vm._v(" "),
                                _c("li", [_vm._v("count.to")]),
                                _vm._v(" "),
                                _c("li", [_vm._v("jquery.textillate")]),
                                _vm._v(" "),
                                _c("li", [_vm._v("jquery.lettering")]),
                                _vm._v(" "),
                                _c("li", [_vm._v("jquery.easypiechart")]),
                                _vm._v(" "),
                                _c("li", [_vm._v("jquery.nicescroll")]),
                                _vm._v(" "),
                                _c("li", [_vm._v("jquery.parallax")]),
                                _vm._v(" "),
                                _c("li", [_vm._v("jquery.slicknav")])
                              ])
                            ]),
                            _vm._v(" "),
                            _c("li", [_vm._v("Upgrade bootstrap v3.3.2")]),
                            _vm._v(" "),
                            _c("li", [_vm._v("Upgrade font-awesome v4.5.0")]),
                            _vm._v(" "),
                            _c("li", [_vm._v("Upgrade Jquery v2.1.4")]),
                            _vm._v(" "),
                            _c("li", [_vm._v("Upgrade plugin google maps")]),
                            _vm._v(" "),
                            _c("li", [
                              _vm._v(
                                "Penghapusan plugin social network sharing"
                              )
                            ])
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-sm-6" }, [
                          _c("ul", { staticClass: "list" }, [
                            _c("li", [
                              _vm._v(
                                "Pengubahan fitur sharing social network, tidak bergantung pada plugin lagi tapi\n                          dibangun 1-1 sesuai guidelines dari sharing API masing-masing social network"
                              )
                            ]),
                            _vm._v(" "),
                            _c("li", [
                              _vm._v(
                                "Penambahan animasi melalui css pada beberapa komponen halaman"
                              )
                            ]),
                            _vm._v(" "),
                            _c("li", [
                              _vm._v(
                                "Peningkatan carousel pada halaman utama untuk artikel pilihan menjadi lebih elegan\n                              dan informatif"
                              )
                            ]),
                            _vm._v(" "),
                            _c("li", [
                              _vm._v(
                                "Peningkatan zoom foto/gambar di seluruh halaman dengan menggunakan lightbox"
                              )
                            ]),
                            _vm._v(" "),
                            _c("li", [
                              _vm._v(
                                "Peningkatan menu yang lebih responsive dengan tampilan yang lebih rapi dan bersih"
                              )
                            ]),
                            _vm._v(" "),
                            _c("li", [
                              _vm._v(
                                "Peningkatan pengalaman membaca artikel dengan tulisan serta layout yang lebih nyaman di mata"
                              )
                            ]),
                            _vm._v(" "),
                            _c("li", [
                              _vm._v(
                                "Peningkatan pengalaman berinteraksi dan konsistensi desain secara keseluruhan pada semua halaman."
                              )
                            ])
                          ])
                        ])
                      ])
                    ])
                  ]
                )
              ])
            ]
          )
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/assets/js/components/pageHeader.vue":
/*!*******************************************************!*\
  !*** ./resources/assets/js/components/pageHeader.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pageHeader_vue_vue_type_template_id_0af8ed53___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pageHeader.vue?vue&type=template&id=0af8ed53& */ "./resources/assets/js/components/pageHeader.vue?vue&type=template&id=0af8ed53&");
/* harmony import */ var _pageHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pageHeader.vue?vue&type=script&lang=js& */ "./resources/assets/js/components/pageHeader.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _pageHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _pageHeader_vue_vue_type_template_id_0af8ed53___WEBPACK_IMPORTED_MODULE_0__["render"],
  _pageHeader_vue_vue_type_template_id_0af8ed53___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/components/pageHeader.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/pageHeader.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/assets/js/components/pageHeader.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_pageHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./pageHeader.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/pageHeader.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_pageHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/pageHeader.vue?vue&type=template&id=0af8ed53&":
/*!**************************************************************************************!*\
  !*** ./resources/assets/js/components/pageHeader.vue?vue&type=template&id=0af8ed53& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_pageHeader_vue_vue_type_template_id_0af8ed53___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./pageHeader.vue?vue&type=template&id=0af8ed53& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/pageHeader.vue?vue&type=template&id=0af8ed53&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_pageHeader_vue_vue_type_template_id_0af8ed53___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_pageHeader_vue_vue_type_template_id_0af8ed53___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/assets/js/views/sistem/changelog.vue":
/*!********************************************************!*\
  !*** ./resources/assets/js/views/sistem/changelog.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _changelog_vue_vue_type_template_id_1bfa1552___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./changelog.vue?vue&type=template&id=1bfa1552& */ "./resources/assets/js/views/sistem/changelog.vue?vue&type=template&id=1bfa1552&");
/* harmony import */ var _changelog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./changelog.vue?vue&type=script&lang=js& */ "./resources/assets/js/views/sistem/changelog.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _changelog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _changelog_vue_vue_type_template_id_1bfa1552___WEBPACK_IMPORTED_MODULE_0__["render"],
  _changelog_vue_vue_type_template_id_1bfa1552___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/views/sistem/changelog.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/views/sistem/changelog.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/assets/js/views/sistem/changelog.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_changelog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./changelog.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/sistem/changelog.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_changelog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/views/sistem/changelog.vue?vue&type=template&id=1bfa1552&":
/*!***************************************************************************************!*\
  !*** ./resources/assets/js/views/sistem/changelog.vue?vue&type=template&id=1bfa1552& ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_changelog_vue_vue_type_template_id_1bfa1552___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./changelog.vue?vue&type=template&id=1bfa1552& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/sistem/changelog.vue?vue&type=template&id=1bfa1552&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_changelog_vue_vue_type_template_id_1bfa1552___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_changelog_vue_vue_type_template_id_1bfa1552___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);