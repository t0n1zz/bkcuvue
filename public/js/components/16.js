(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[16],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/laporanCu/formKatex.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/views/laporanCu/formKatex.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var vue_cleave_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-cleave-component */ "./node_modules/vue-cleave-component/dist/vue-cleave.min.js");
/* harmony import */ var vue_cleave_component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_cleave_component__WEBPACK_IMPORTED_MODULE_1__);
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    Cleave: vue_cleave_component__WEBPACK_IMPORTED_MODULE_1___default.a
  },
  props: ['modalKatex', 'kelas'],
  data: function data() {
    return {
      cleaveOption: {
        numeric: {
          numeral: true,
          numeralThousandsGroupStyle: 'thousand',
          numeralDecimalScale: 2,
          numeralDecimalMark: ',',
          delimiter: '.'
        }
      },
      form: {}
    };
  },
  created: function created() {},
  methods: {
    save: function save() {
      this.form = _.chain(this.modalKatex.form).keyBy('key').mapValues('value').value();
      this.form.periode = this.modalKatex.periode;

      if (this.modalKatex.id_tp) {
        this.form.id_tp = this.modalKatex.id_tp;
        this.form.no_tp = this.modalKatex.no_tp;
        this.form.id_cu = this.modalKatex.id_cu;
        this.form.no_ba = this.modalKatex.no_ba;
        this.$store.dispatch('laporanTp/update', [this.modalKatex.id, this.form]);
      } else {
        this.form.id_cu = this.modalKatex.id_cu;
        this.form.no_ba = this.modalKatex.no_ba;
        this.$store.dispatch('laporanCu/update', [this.modalKatex.id, this.form]);
      }
    },
    modalTutup: function modalTutup() {
      this.$emit('tutup');
    },
    formatPeriode: function formatPeriode(value) {
      return Vue.filter('dateMonth')(value);
    },
    formatCurrency: function formatCurrency(value) {
      return this.$options.filters.currency(value, '', 0, {
        thousandsSeparator: '.'
      });
    },
    formatPercentage: function formatPercentage(value) {
      return Vue.filter('percentage2')(value, 2);
    }
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('auth', {
    currentUser: 'currentUser'
  }))
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/laporanCu/formKatex.vue?vue&type=template&id=1b134710&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/views/laporanCu/formKatex.vue?vue&type=template&id=1b134710& ***!
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
      _c("h5", { staticClass: "text-semibold" }, [_vm._v("RUMUS")]),
      _vm._v(" "),
      _vm._l(_vm.modalKatex.katex1, function (katex) {
        return katex.content
          ? _c("div", [
              katex.title
                ? _c("p", [
                    _c("b", [_vm._v("Keterangan:")]),
                    _vm._v(" " + _vm._s(katex.title)),
                  ])
                : _vm._e(),
              _vm._v(" "),
              _c("div", { staticClass: "card " }, [
                _c(
                  "div",
                  { staticClass: "card-body text-center pre-scrollable" },
                  [
                    _c("div", {
                      directives: [
                        {
                          name: "katex",
                          rawName: "v-katex",
                          value: katex.content,
                          expression: "katex.content",
                        },
                      ],
                    }),
                  ]
                ),
              ]),
            ])
          : _vm._e()
      }),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "alert bg-info alert-styled-left mt-2 pt-1 pb-1" },
        [
          _vm._m(0),
          _vm._v(" "),
          _c("p", {
            domProps: { innerHTML: _vm._s(_vm.modalKatex.indikator) },
          }),
        ]
      ),
      _vm._v(" "),
      _c("hr"),
      _vm._v(" "),
      _c("h5", { staticClass: "text-semibold" }, [
        _vm._v("PERHITUNGAN "),
        _c("small", [_vm._v(_vm._s(_vm.modalKatex.section))]),
      ]),
      _vm._v(" "),
      _vm._l(_vm.modalKatex.katex2, function (katex) {
        return katex.content
          ? _c("div", [
              katex.title
                ? _c("p", [
                    _c("b", [_vm._v("Keterangan:")]),
                    _vm._v(" " + _vm._s(katex.title)),
                  ])
                : _vm._e(),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "well mb-2 pre-scrollable text-center" },
                [
                  _c("div", {
                    directives: [
                      {
                        name: "katex",
                        rawName: "v-katex",
                        value: katex.content,
                        expression: "katex.content",
                      },
                    ],
                  }),
                ]
              ),
            ])
          : _vm._e()
      }),
      _vm._v(" "),
      _c(
        "form",
        {
          attrs: { "data-vv-scope": "form" },
          on: {
            submit: function ($event) {
              $event.preventDefault()
              return _vm.save.apply(null, arguments)
            },
          },
        },
        [
          _vm.modalKatex.isUbah &&
          _vm.currentUser.can &&
          _vm.currentUser.can["update_laporan_cu"]
            ? _c("hr")
            : _vm._e(),
          _vm._v(" "),
          _vm.modalKatex.isUbah &&
          _vm.currentUser.can &&
          _vm.currentUser.can["update_laporan_cu"]
            ? _c(
                "div",
                { staticClass: "row" },
                _vm._l(_vm.modalKatex.form, function (form) {
                  return !form.hideForm && form.title
                    ? _c("div", { staticClass: "col-sm-6" }, [
                        _c(
                          "div",
                          { staticClass: "form-group" },
                          [
                            _c("h5", [_vm._v(_vm._s(form.title) + ":")]),
                            _vm._v(" "),
                            _c("cleave", {
                              staticClass: "form-control",
                              attrs: {
                                options: _vm.cleaveOption.numeric,
                                placeholder: "Silahkan masukkan " + form.title,
                              },
                              model: {
                                value: form.value,
                                callback: function ($$v) {
                                  _vm.$set(form, "value", $$v)
                                },
                                expression: "form.value",
                              },
                            }),
                          ],
                          1
                        ),
                      ])
                    : _vm._e()
                }),
                0
              )
            : _vm._e(),
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
                  click: function ($event) {
                    $event.preventDefault()
                    return _vm.modalTutup.apply(null, arguments)
                  },
                },
              },
              [_c("i", { staticClass: "icon-cross" }), _vm._v(" Tutup\n\t\t")]
            ),
            _vm._v(" "),
            !_vm.modalKatex.isUbah &&
            _vm.currentUser.can &&
            _vm.currentUser.can["update_laporan_cu"]
              ? _c(
                  "button",
                  {
                    staticClass: "btn btn-light",
                    attrs: { type: "button" },
                    on: {
                      click: function ($event) {
                        $event.preventDefault()
                        _vm.modalKatex.isUbah = true
                      },
                    },
                  },
                  [
                    _c("i", { staticClass: "icon-pencil5" }),
                    _vm._v(" Ubah\n\t\t"),
                  ]
                )
              : _vm._e(),
            _vm._v(" "),
            _vm.modalKatex.isUbah &&
            _vm.currentUser.can &&
            _vm.currentUser.can["update_laporan_cu"]
              ? _c(
                  "button",
                  {
                    staticClass: "btn btn-light",
                    attrs: { type: "button" },
                    on: {
                      click: function ($event) {
                        $event.preventDefault()
                        _vm.modalKatex.isUbah = false
                      },
                    },
                  },
                  [
                    _c("i", { staticClass: "icon-arrow-left13" }),
                    _vm._v(" Batal\n\t\t"),
                  ]
                )
              : _vm._e(),
            _vm._v(" "),
            _vm.modalKatex.isUbah
              ? _c(
                  "button",
                  { staticClass: "btn btn-primary", attrs: { type: "submit" } },
                  [
                    _c("i", { staticClass: "icon-floppy-disk" }),
                    _vm._v(" Simpan\n\t\t"),
                  ]
                )
              : _vm._e(),
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "d-block d-md-none" }, [
            _vm.modalKatex.isUbah &&
            _vm.currentUser.can &&
            _vm.currentUser.can["update_laporan_cu"]
              ? _c(
                  "button",
                  {
                    staticClass: "btn btn-primary btn-block",
                    attrs: { type: "submit" },
                  },
                  [
                    _c("i", { staticClass: "icon-floppy-disk" }),
                    _vm._v(" Simpan\n\t\t"),
                  ]
                )
              : _vm._e(),
            _vm._v(" "),
            _vm.modalKatex.isUbah &&
            _vm.currentUser.can &&
            _vm.currentUser.can["update_laporan_cu"]
              ? _c(
                  "button",
                  {
                    staticClass: "btn btn-light btn-block",
                    attrs: { type: "button" },
                    on: {
                      click: function ($event) {
                        $event.preventDefault()
                        _vm.modalKatex.isUbah = false
                      },
                    },
                  },
                  [
                    _c("i", { staticClass: "icon-arrow-left13" }),
                    _vm._v(" Batal\n\t\t"),
                  ]
                )
              : _vm._e(),
            _vm._v(" "),
            !_vm.modalKatex.isUbah &&
            _vm.currentUser.can &&
            _vm.currentUser.can["update_laporan_cu"]
              ? _c(
                  "button",
                  {
                    staticClass: "btn btn-light btn-block",
                    attrs: { type: "button" },
                    on: {
                      click: function ($event) {
                        $event.preventDefault()
                        _vm.modalKatex.isUbah = true
                      },
                    },
                  },
                  [
                    _c("i", { staticClass: "icon-pencil5" }),
                    _vm._v(" Ubah\n\t\t"),
                  ]
                )
              : _vm._e(),
            _vm._v(" "),
            _c(
              "button",
              {
                staticClass: "btn btn-light btn-block",
                attrs: { type: "button" },
                on: {
                  click: function ($event) {
                    $event.preventDefault()
                    return _vm.modalTutup.apply(null, arguments)
                  },
                },
              },
              [_c("i", { staticClass: "icon-cross" }), _vm._v(" Tutup\n\t\t")]
            ),
          ]),
        ]
      ),
    ],
    2
  )
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "mb-5 text-semibold" }, [
      _c("u", [_vm._v("Indikator:")]),
    ])
  },
]
render._withStripped = true



/***/ }),

/***/ "./resources/assets/js/views/laporanCu/formKatex.vue":
/*!***********************************************************!*\
  !*** ./resources/assets/js/views/laporanCu/formKatex.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _formKatex_vue_vue_type_template_id_1b134710___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./formKatex.vue?vue&type=template&id=1b134710& */ "./resources/assets/js/views/laporanCu/formKatex.vue?vue&type=template&id=1b134710&");
/* harmony import */ var _formKatex_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./formKatex.vue?vue&type=script&lang=js& */ "./resources/assets/js/views/laporanCu/formKatex.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _formKatex_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _formKatex_vue_vue_type_template_id_1b134710___WEBPACK_IMPORTED_MODULE_0__["render"],
  _formKatex_vue_vue_type_template_id_1b134710___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/views/laporanCu/formKatex.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/views/laporanCu/formKatex.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/assets/js/views/laporanCu/formKatex.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_formKatex_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./formKatex.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/laporanCu/formKatex.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_formKatex_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/views/laporanCu/formKatex.vue?vue&type=template&id=1b134710&":
/*!******************************************************************************************!*\
  !*** ./resources/assets/js/views/laporanCu/formKatex.vue?vue&type=template&id=1b134710& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_formKatex_vue_vue_type_template_id_1b134710___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./formKatex.vue?vue&type=template&id=1b134710& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/laporanCu/formKatex.vue?vue&type=template&id=1b134710&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_formKatex_vue_vue_type_template_id_1b134710___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_formKatex_vue_vue_type_template_id_1b134710___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);