(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[131],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/checkValue.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/checkValue.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_truncate_collapsed__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-truncate-collapsed */ "./node_modules/vue-truncate-collapsed/dist/vue-truncate-collapsed.es.js");
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal */ "./resources/assets/js/components/modal.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    truncate: vue_truncate_collapsed__WEBPACK_IMPORTED_MODULE_0__["default"],
    appModal: _modal__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  props: {
    value: {
      "default": ''
    },
    frontText: {
      "default": ''
    },
    trimLength: {
      "default": 50
    },
    valueType: {
      "default": 'trim'
    },
    empty: {
      "default": '-'
    }
  },
  data: function data() {
    return {
      modalShow: false,
      modalState: '',
      modalTitle: '',
      modalContent: '',
      modalButton: ''
    };
  },
  methods: {
    modalOpen: function modalOpen() {
      this.modalShow = true;
      this.modalState = 'content-tutup';
      this.modalContent = this.value;
      this.modalButton = 'Tutup';
    },
    modalTutup: function modalTutup() {
      this.modalShow = false;
    },
    strip: function strip(html) {
      var tmp = document.createElement("DIV");
      tmp.innerHTML = html;
      return tmp.textContent || tmp.innerText || "";
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/voting/pilih.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/views/voting/pilih.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _components_message_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/message.vue */ "./resources/assets/js/components/message.vue");
/* harmony import */ var _components_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/modal */ "./resources/assets/js/components/modal.vue");
/* harmony import */ var _components_checkValue_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/checkValue.vue */ "./resources/assets/js/components/checkValue.vue");
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    message: _components_message_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    appModal: _components_modal__WEBPACK_IMPORTED_MODULE_2__["default"],
    checkValue: _components_checkValue_vue__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  data: function data() {
    return {
      title: 'Voting',
      titleDesc: 'Silahkan memilih',
      kelas: 'voting',
      titleIcon: 'icon-point-up',
      formPilihan: {
        voting_id: '',
        voting_pilihan_id: '',
        name: ''
      },
      selectedItem: {},
      modalShow: false,
      modalState: '',
      modalTitle: '',
      modalColor: '',
      modalContent: '',
      modalButton: ''
    };
  },
  created: function created() {
    this.fetch();
  },
  watch: {
    // check route changes
    $route: function $route(to, from) {
      this.fetch();
    },
    itemDataStat: function itemDataStat(value) {
      if (value == "success") {
        if (this.form) {
          this.title = this.itemData.name;
        }
      }
    },
    formStat: function formStat(value) {
      if (value == "success") {
        if (this.itemData.lihat_hasil == 1) {
          if (this.form.voting_pilihan_id != null) {
            this.fetchSuara();
          }
        }
      }
    },
    updateStat: function updateStat(value) {
      this.modalState = value;
      this.modalButton = 'Ok';

      if (value === "success") {
        this.modalTitle = this.updateMessage.message;
        this.modalContent = '';
        this.fetch();
      } else if (value === "fail") {
        this.modalContent = this.updateMessage;
      } else {
        this.modalContent = '';
      }
    }
  },
  methods: {
    fetch: function fetch() {
      this.$store.dispatch(this.kelas + '/indexPilihan', this.$route.params.name);
    },
    fetchSuara: function fetchSuara() {
      this.$store.dispatch(this.kelas + '/indexSuara', this.itemData.id);
    },
    modalConfirmOpen: function modalConfirmOpen(state) {
      this.modalShow = true;
      this.modalState = 'normal1';
      this.modalColor = 'bg-primary';
      this.formPilihan.voting_pilihan_id = state.id;
      this.formPilihan.voting_id = this.itemData.id;
      this.formPilihan.name = this.form.name;
      this.selectedItem = state;
      this.modalTitle = 'Pilih ' + state.name + ' ?';
    },
    modalTutup: function modalTutup() {
      this.modalShow = false;
      this.$store.dispatch(this.kelas + '/resetUpdateStat');
    },
    modalConfirmOk: function modalConfirmOk() {
      this.formPilihan.tanggapan = this.itemData.tanggapan;
      this.$store.dispatch(this.kelas + '/storePilihan', this.formPilihan);
    }
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('voting', {
    form: 'data',
    formStat: 'dataStat',
    itemData: 'dataS',
    itemDataStat: 'dataStatS',
    itemData2: 'dataS2',
    itemDataStat2: 'dataStatS2',
    updateMessage: 'update',
    updateStat: 'updateStat'
  }))
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/checkValue.vue?vue&type=template&id=56ee5620&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/checkValue.vue?vue&type=template&id=56ee5620& ***!
  \********************************************************************************************************************************************************************************************************************/
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
    { staticStyle: { display: "inline-block" } },
    [
      _vm.value
        ? _c("span", { staticStyle: { display: "inline-block" } }, [
            _vm.valueType == "trim"
              ? _c(
                  "span",
                  { staticStyle: { display: "inline-block" } },
                  [
                    _c("truncate", {
                      staticStyle: { display: "inline-block" },
                      attrs: {
                        "action-class": "badge bg-blue",
                        clamp: "selengkapnya >",
                        length: _vm.trimLength,
                        less: "< kembali",
                        text: _vm.frontText + " " + _vm.value,
                      },
                    }),
                  ],
                  1
                )
              : _vm.valueType == "modal"
              ? _c("span", { staticStyle: { display: "inline-block" } }, [
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-light",
                      on: {
                        click: function ($event) {
                          $event.preventDefault()
                          return _vm.modalOpen()
                        },
                      },
                    },
                    [_vm._v("\n          Lihat\n      ")]
                  ),
                ])
              : _vm.valueType == "currency"
              ? _c("span", { staticStyle: { display: "inline-block" } }, [
                  _vm._v(
                    _vm._s(_vm.frontText) +
                      " " +
                      _vm._s(
                        _vm._f("currency")(_vm.value, "", 0, {
                          thousandsSeparator: ".",
                        })
                      )
                  ),
                ])
              : _vm.valueType == "percentage"
              ? _c("span", { staticStyle: { display: "inline-block" } }, [
                  _vm._v(
                    _vm._s(_vm.frontText) +
                      " " +
                      _vm._s(_vm._f("percentage")(_vm.value, 2))
                  ),
                ])
              : _vm.valueType == "decimal"
              ? _c("span", { staticStyle: { display: "inline-block" } }, [
                  _vm._v(
                    _vm._s(_vm.frontText) +
                      " " +
                      _vm._s(_vm._f("round")(_vm.value, 2))
                  ),
                ])
              : _c("span", { staticStyle: { display: "inline-block" } }, [
                  _c("b", [_vm._v(_vm._s(_vm.frontText))]),
                  _vm._v(" " + _vm._s(_vm.value)),
                ]),
          ])
        : _c("span", { staticStyle: { display: "inline-block" } }, [
            _vm._v(_vm._s(_vm.frontText) + " " + _vm._s(_vm.empty)),
          ]),
      _vm._v(" "),
      _c("app-modal", {
        attrs: {
          show: _vm.modalShow,
          state: _vm.modalState,
          title: _vm.modalTitle,
          button: _vm.modalButton,
          content: _vm.modalContent,
        },
        on: { tutup: _vm.modalTutup, backgroundClick: _vm.modalTutup },
      }),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/voting/pilih.vue?vue&type=template&id=5667113d&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/views/voting/pilih.vue?vue&type=template&id=5667113d& ***!
  \*****************************************************************************************************************************************************************************************************************/
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
      _c(
        "div",
        { staticClass: "navbar navbar-expand-lg navbar-dark bg-indigo" },
        [
          _vm._m(0),
          _vm._v(" "),
          _c("div", [
            _c("span", { staticClass: "navbar-text ml-lg-3 mr-lg-auto" }, [
              _c("span", { staticClass: "badge bg-success-400" }, [
                _vm._v("PUSKOPCUINA - \n\t\t\t\t\t"),
                _vm.itemData.cu
                  ? _c("span", [
                      _vm._v(
                        "\n\t\t\t\t\t\t- " +
                          _vm._s(_vm.itemData.cu.name) +
                          "\n\t\t\t\t\t"
                      ),
                    ])
                  : _vm._e(),
              ]),
            ]),
          ]),
        ]
      ),
      _vm._v(" "),
      _c("div", [
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
                    _vm._v(_vm._s(_vm.itemData.name)),
                  ]),
                  _vm._v(" "),
                  _c("small", { staticClass: "d-block text-muted" }, [
                    _vm._v("Selamat datang "),
                    _c("i", [_vm._v(_vm._s(_vm.form.name) + " ")]),
                  ]),
                ]),
              ]),
            ]
          ),
        ]),
      ]),
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
                      errorData: _vm.itemData,
                    },
                  })
                : _vm._e(),
              _vm._v(" "),
              _vm.itemDataStat == "success"
                ? _c("div", [
                    _vm.form
                      ? _c("div", [
                          _vm.itemData.keterangan
                            ? _c("div", { staticClass: "card card-body" }, [
                                _c("span", {
                                  domProps: {
                                    innerHTML: _vm._s(_vm.itemData.keterangan),
                                  },
                                }),
                              ])
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.form.voting_pilihan_id == null
                            ? _c("div", [
                                _c(
                                  "div",
                                  { staticClass: "row" },
                                  _vm._l(
                                    _vm.itemData.pilihan,
                                    function (item, index) {
                                      return _c(
                                        "div",
                                        {
                                          key: index,
                                          staticClass: "col-md-12 mb-2",
                                        },
                                        [
                                          _c(
                                            "button",
                                            {
                                              staticClass:
                                                "btn btn-light btn-block",
                                              on: {
                                                click: function ($event) {
                                                  $event.preventDefault()
                                                  return _vm.modalConfirmOpen(
                                                    item
                                                  )
                                                },
                                              },
                                            },
                                            [
                                              _c(
                                                "h5",
                                                { staticClass: "card-title" },
                                                [_vm._v(_vm._s(item.name))]
                                              ),
                                            ]
                                          ),
                                        ]
                                      )
                                    }
                                  ),
                                  0
                                ),
                              ])
                            : _vm.form.voting_pilihan_id != null
                            ? _c("div", [
                                _vm._m(1),
                                _vm._v(" "),
                                _c("div", { staticClass: "card " }, [
                                  _vm._m(2),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "card-body" }, [
                                    _c(
                                      "div",
                                      { staticClass: "card border-primary" },
                                      [
                                        _c(
                                          "div",
                                          {
                                            staticClass:
                                              "card-header bg-primary",
                                          },
                                          [
                                            _c(
                                              "h5",
                                              { staticClass: "card-title" },
                                              [
                                                _vm._v(
                                                  _vm._s(_vm.form.pilihan.name)
                                                ),
                                              ]
                                            ),
                                          ]
                                        ),
                                      ]
                                    ),
                                  ]),
                                ]),
                                _vm._v(" "),
                                _vm.form.tanggapan.length > 0
                                  ? _c("div", { staticClass: "card" }, [
                                      _vm._m(3),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        { staticClass: "card-body" },
                                        _vm._l(
                                          _vm.form.tanggapan,
                                          function (item, index) {
                                            return _c("div", { key: index }, [
                                              _c("h5", [
                                                _vm._v(
                                                  _vm._s(item.tanggapan.name)
                                                ),
                                              ]),
                                              _vm._v(" "),
                                              _c(
                                                "div",
                                                {
                                                  staticClass: "card card-body",
                                                },
                                                [
                                                  _c("span", {
                                                    domProps: {
                                                      innerHTML: _vm._s(
                                                        item.keterangan
                                                      ),
                                                    },
                                                  }),
                                                ]
                                              ),
                                            ])
                                          }
                                        ),
                                        0
                                      ),
                                    ])
                                  : _vm._e(),
                                _vm._v(" "),
                                _vm.itemData.lihat_hasil == 1
                                  ? _c("div", { staticClass: "card" }, [
                                      _vm._m(4),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        { staticClass: "card-body" },
                                        _vm._l(
                                          _vm.itemData2,
                                          function (p, index) {
                                            return _c("div", { key: index }, [
                                              _c(
                                                "div",
                                                {
                                                  staticClass: "card card-body",
                                                },
                                                [
                                                  _c(
                                                    "div",
                                                    { staticClass: "row" },
                                                    [
                                                      _c(
                                                        "div",
                                                        {
                                                          staticClass:
                                                            "col-sm-3 mb-1 mt-1",
                                                        },
                                                        [
                                                          _c("b", [
                                                            _vm._v(
                                                              _vm._s(p.name)
                                                            ),
                                                          ]),
                                                        ]
                                                      ),
                                                      _vm._v(" "),
                                                      _c(
                                                        "div",
                                                        {
                                                          staticClass:
                                                            "col-sm-8 mb-1 mt-1",
                                                        },
                                                        [
                                                          _c(
                                                            "div",
                                                            {
                                                              staticClass:
                                                                "progress",
                                                            },
                                                            [
                                                              _c(
                                                                "div",
                                                                {
                                                                  staticClass:
                                                                    "progress-bar-striped bg-success",
                                                                  style: {
                                                                    width:
                                                                      Math.round(
                                                                        (p.skor /
                                                                          _vm
                                                                            .itemData
                                                                            .suara) *
                                                                          100
                                                                      ) + "%",
                                                                  },
                                                                },
                                                                [
                                                                  _c(
                                                                    "span",
                                                                    {
                                                                      staticClass:
                                                                        "text-default font-size-lg",
                                                                    },
                                                                    [
                                                                      _vm._v(
                                                                        "\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t \n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t"
                                                                      ),
                                                                      _c("b", [
                                                                        _vm._v(
                                                                          _vm._s(
                                                                            Math.round(
                                                                              (p.skor /
                                                                                _vm
                                                                                  .itemData
                                                                                  .suara) *
                                                                                100
                                                                            ) +
                                                                              "%"
                                                                          )
                                                                        ),
                                                                      ]),
                                                                      _vm._v(
                                                                        "\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t          \n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t"
                                                                      ),
                                                                    ]
                                                                  ),
                                                                ]
                                                              ),
                                                            ]
                                                          ),
                                                        ]
                                                      ),
                                                      _vm._v(" "),
                                                      _c(
                                                        "div",
                                                        {
                                                          staticClass:
                                                            "col-sm-1 mb-1 mt-1",
                                                        },
                                                        [
                                                          _vm._v(
                                                            "\n\t\t\t\t\t\t\t\t\t\t\t\t\t" +
                                                              _vm._s(p.skor) +
                                                              " / " +
                                                              _vm._s(
                                                                _vm.itemData
                                                                  .suara
                                                              ) +
                                                              "\n\t\t\t\t\t\t\t\t\t\t\t\t"
                                                          ),
                                                        ]
                                                      ),
                                                    ]
                                                  ),
                                                ]
                                              ),
                                            ])
                                          }
                                        ),
                                        0
                                      ),
                                    ])
                                  : _vm._e(),
                              ])
                            : _vm._e(),
                        ])
                      : _c("div", [_vm._m(5)]),
                  ])
                : _vm.itemDataStat == "loading"
                ? _c("div", [_vm._m(6)])
                : _c("div", [_vm._m(7)]),
            ],
            1
          ),
        ]),
      ]),
      _vm._v(" "),
      _c(
        "app-modal",
        {
          attrs: {
            show: _vm.modalShow,
            state: _vm.modalState,
            title: _vm.modalTitle,
            size: "modal-lg",
            color: _vm.modalColor,
            button: _vm.modalButton,
            content: _vm.modalContent,
          },
          on: {
            tutup: _vm.modalTutup,
            confirmOk: _vm.modalConfirmOk,
            successOk: _vm.modalTutup,
            failOk: _vm.modalTutup,
            backgroundClick: _vm.modalTutup,
          },
        },
        [
          _c("template", { slot: "modal-title" }, [
            _vm._v("\n\t\t\t" + _vm._s(_vm.modalTitle) + "\n\t\t"),
          ]),
          _vm._v(" "),
          _c("template", { slot: "modal-body1" }, [
            _c("div", { staticClass: "card" }, [
              _c("div", { staticClass: "card-header bg-white" }, [
                _c("h5", { staticClass: "card-title" }, [
                  _vm._v(_vm._s(_vm.title)),
                ]),
              ]),
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "card" }, [
              _c("div", { staticClass: "card-header bg-success" }, [
                _c("b", [_vm._v("PILIHAN ANDA ADALAH")]),
                _vm._v(" "),
                _c("h5", { staticClass: "card-title" }, [
                  _vm._v(_vm._s(_vm.selectedItem.name)),
                ]),
              ]),
            ]),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "card card-body" },
              _vm._l(_vm.itemData.tanggapan, function (item, index) {
                return _c(
                  "div",
                  { key: index, staticClass: "form-group mb-0" },
                  [
                    _c("h5", [_vm._v(_vm._s(item.name) + ":")]),
                    _vm._v(" "),
                    _c("textarea", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: item.keterangan,
                          expression: "item.keterangan",
                        },
                      ],
                      staticClass: "form-control",
                      attrs: { rows: "4" },
                      domProps: { value: item.keterangan },
                      on: {
                        input: function ($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(item, "keterangan", $event.target.value)
                        },
                      },
                    }),
                    _vm._v(" "),
                    _c("small", { staticClass: "text-muted" }, [_vm._v(" ")]),
                  ]
                )
              }),
              0
            ),
            _vm._v(" "),
            _c("div", [
              _c("div", { staticClass: "alert bg-warning alert-styled-left" }, [
                _c("h6", [
                  _vm._v(
                    "Pastikan anda memilih dengan benar, anda tidak bisa melakukan voting ulang lagi apabila salah memilih."
                  ),
                ]),
              ]),
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "text-center d-none d-md-block" }, [
              _c(
                "button",
                {
                  staticClass: "btn btn-light",
                  on: {
                    click: function ($event) {
                      $event.preventDefault()
                      return _vm.modalTutup.apply(null, arguments)
                    },
                  },
                },
                [_c("i", { staticClass: "icon-cross" }), _vm._v(" Tutup")]
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "btn btn-primary",
                  on: {
                    click: function ($event) {
                      $event.preventDefault()
                      return _vm.modalConfirmOk.apply(null, arguments)
                    },
                  },
                },
                [_c("i", { staticClass: "icon-check" }), _vm._v(" Pilih")]
              ),
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "d-block d-md-none" }, [
              _c(
                "button",
                {
                  staticClass: "btn btn-primary btn-block pb-2",
                  on: {
                    click: function ($event) {
                      $event.preventDefault()
                      return _vm.modalConfirmOk.apply(null, arguments)
                    },
                  },
                },
                [_c("i", { staticClass: "icon-check" }), _vm._v(" Pilih")]
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "btn btn-light btn-block pb-2",
                  on: {
                    click: function ($event) {
                      $event.preventDefault()
                      return _vm.modalTutup.apply(null, arguments)
                    },
                  },
                },
                [_c("i", { staticClass: "icon-cross" }), _vm._v(" Tutup")]
              ),
            ]),
          ]),
        ],
        2
      ),
    ],
    1
  )
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "navbar-brand wmin-0 mr-0" }, [
      _c("a", { staticClass: "d-inline-block", attrs: { href: "#" } }, [
        _c("img", { attrs: { src: "/images/simo.png" } }),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card bg-success text-white card-body" }, [
      _c("h3", [
        _c("i", { staticClass: "icon-check" }),
        _vm._v(" Terima Kasih Sudah Melakukan Voting"),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header bg-white" }, [
      _c("h5", { staticClass: "card-title" }, [_vm._v("Pilihan Anda Adalah")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header bg-white" }, [
      _c("h5", { staticClass: "card-title" }, [
        _vm._v("Tanggapan Anda Adalah"),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "card-header bg-white header-elements-inline" },
      [_c("h5", { staticClass: "card-title" }, [_vm._v("Perolehan Skor")])]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card card-body" }, [
      _c("h5", [
        _c("b", [_vm._v("Selamat Datang!")]),
        _vm._v(" "),
        _c("br"),
        _vm._v(" Saat ini masih belum terdapat voting"),
      ]),
    ])
  },
  function () {
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
              staticStyle: { width: "100%" },
            },
            [_c("span", { staticClass: "sr-only" }, [_vm._v("100% Complete")])]
          ),
        ]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card" }, [
      _c("div", { staticClass: "card-body" }, [
        _c("h3", [_vm._v("Oops terjadi kesalahan")]),
      ]),
    ])
  },
]
render._withStripped = true



/***/ }),

/***/ "./resources/assets/js/components/checkValue.vue":
/*!*******************************************************!*\
  !*** ./resources/assets/js/components/checkValue.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _checkValue_vue_vue_type_template_id_56ee5620___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./checkValue.vue?vue&type=template&id=56ee5620& */ "./resources/assets/js/components/checkValue.vue?vue&type=template&id=56ee5620&");
/* harmony import */ var _checkValue_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./checkValue.vue?vue&type=script&lang=js& */ "./resources/assets/js/components/checkValue.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _checkValue_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _checkValue_vue_vue_type_template_id_56ee5620___WEBPACK_IMPORTED_MODULE_0__["render"],
  _checkValue_vue_vue_type_template_id_56ee5620___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/components/checkValue.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/checkValue.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/assets/js/components/checkValue.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_checkValue_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./checkValue.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/checkValue.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_checkValue_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/checkValue.vue?vue&type=template&id=56ee5620&":
/*!**************************************************************************************!*\
  !*** ./resources/assets/js/components/checkValue.vue?vue&type=template&id=56ee5620& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_checkValue_vue_vue_type_template_id_56ee5620___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./checkValue.vue?vue&type=template&id=56ee5620& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/checkValue.vue?vue&type=template&id=56ee5620&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_checkValue_vue_vue_type_template_id_56ee5620___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_checkValue_vue_vue_type_template_id_56ee5620___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/assets/js/views/voting/pilih.vue":
/*!****************************************************!*\
  !*** ./resources/assets/js/views/voting/pilih.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pilih_vue_vue_type_template_id_5667113d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pilih.vue?vue&type=template&id=5667113d& */ "./resources/assets/js/views/voting/pilih.vue?vue&type=template&id=5667113d&");
/* harmony import */ var _pilih_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pilih.vue?vue&type=script&lang=js& */ "./resources/assets/js/views/voting/pilih.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _pilih_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _pilih_vue_vue_type_template_id_5667113d___WEBPACK_IMPORTED_MODULE_0__["render"],
  _pilih_vue_vue_type_template_id_5667113d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/views/voting/pilih.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/views/voting/pilih.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/assets/js/views/voting/pilih.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_pilih_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./pilih.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/voting/pilih.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_pilih_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/views/voting/pilih.vue?vue&type=template&id=5667113d&":
/*!***********************************************************************************!*\
  !*** ./resources/assets/js/views/voting/pilih.vue?vue&type=template&id=5667113d& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_pilih_vue_vue_type_template_id_5667113d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./pilih.vue?vue&type=template&id=5667113d& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/voting/pilih.vue?vue&type=template&id=5667113d&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_pilih_vue_vue_type_template_id_5667113d___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_pilih_vue_vue_type_template_id_5667113d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);