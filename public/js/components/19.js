(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[19],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/asetTetap/card.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/views/asetTetap/card.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_checkValue_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/checkValue.vue */ "./resources/assets/js/components/checkValue.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  props: ["itemData"],
  components: {
    checkValue: _components_checkValue_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/asetTetap/card.vue?vue&type=template&id=d116afbe&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/views/asetTetap/card.vue?vue&type=template&id=d116afbe& ***!
  \*******************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "media flex-column flex-sm-row mt-0 mb-3" }, [
    _c("div", { staticClass: "mr-sm-3 mb-2 mb-sm-0" }, [
      _c("div", { staticClass: "card-img-actions" }, [
        _vm.itemData.gambar
          ? _c("img", {
              staticClass: "img-fluid img-preview rounded",
              attrs: {
                src: "/images/asetTetap/" + _vm.itemData.gambar + ".jpg",
              },
            })
          : _c("img", {
              staticClass: "img-fluid img-preview rounded",
              attrs: { src: "/images/no_image.jpg" },
            }),
      ]),
      _vm._v(" "),
      _vm._m(0),
      _vm._v(" "),
      _c("div", { staticClass: "card-img-actions" }, [
        _vm.itemData.nota
          ? _c("img", {
              staticClass: "img-fluid img-preview rounded",
              attrs: { src: "/images/asetTetap/" + _vm.itemData.nota + ".jpg" },
            })
          : _c("img", {
              staticClass: "img-fluid img-preview rounded",
              attrs: { src: "/images/no_image.jpg" },
            }),
      ]),
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "media-body" }, [
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-sm-4" }, [
          _c("ul", { staticClass: "list list-unstyled mb-0" }, [
            _c(
              "li",
              [
                _c("b", [_vm._v("Kode:")]),
                _vm._v(" "),
                _c("check-value", { attrs: { value: _vm.itemData.kode } }),
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "li",
              [
                _c("b", [_vm._v("Nama:")]),
                _vm._v(" "),
                _c("check-value", { attrs: { value: _vm.itemData.name } }),
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "li",
              [
                _c("b", [_vm._v("Jenis")]),
                _vm._v(" "),
                _vm.itemData.jenis
                  ? _c("check-value", {
                      attrs: { value: _vm.itemData.jenis.name },
                    })
                  : _c("span", [_vm._v("-")]),
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "li",
              [
                _c("b", [_vm._v("Merk:")]),
                _vm._v(" "),
                _c("check-value", { attrs: { value: _vm.itemData.merk } }),
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "li",
              [
                _c("b", [_vm._v("Tipe:")]),
                _vm._v(" "),
                _c("check-value", { attrs: { value: _vm.itemData.tipe } }),
              ],
              1
            ),
          ]),
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-sm-4" }, [
          _c("ul", { staticClass: "list list-unstyled mb-0" }, [
            _c(
              "li",
              [
                _c("b", [_vm._v("Lokasi:")]),
                _vm._v(" "),
                _vm.itemData.lokasi
                  ? _c("check-value", {
                      attrs: { value: _vm.itemData.lokasi.name },
                    })
                  : _c("span", [_vm._v("-")]),
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "li",
              [
                _c("b", [_vm._v("Penanggungjawab:")]),
                _vm._v(" "),
                _vm.itemData.aktivis
                  ? _c("check-value", {
                      attrs: { value: _vm.itemData.aktivis.name },
                    })
                  : _c("span", [_vm._v("-")]),
              ],
              1
            ),
            _vm._v(" "),
            _c("li", [
              _c("b", [_vm._v("Tgl. Beli:")]),
              _vm._v(" "),
              _c("span", {
                domProps: {
                  innerHTML: _vm._s(
                    _vm.$options.filters.date(_vm.itemData.tanggal)
                  ),
                },
              }),
            ]),
            _vm._v(" "),
            _c(
              "li",
              [
                _c("b", [_vm._v("Pembeli:")]),
                _vm._v(" "),
                _vm.itemData.pembeli
                  ? _c("check-value", {
                      attrs: { value: _vm.itemData.pembeli.name },
                    })
                  : _c("span", [_vm._v("-")]),
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "li",
              [
                _c("b", [_vm._v("Kondisi:")]),
                _vm._v(" "),
                _c("check-value", { attrs: { value: _vm.itemData.kondisi } }),
              ],
              1
            ),
          ]),
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-sm-4" }, [
          _c("ul", { staticClass: "list list-unstyled mb-0" }, [
            _c(
              "li",
              [
                _c("b", [_vm._v("Sub:")]),
                _vm._v(" "),
                _c("check-value", {
                  attrs: {
                    value: _vm.itemData.has_aset_count,
                    valueType: "currency",
                  },
                }),
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "li",
              [
                _c("b", [_vm._v("Harga Induk:")]),
                _vm._v(" "),
                _c("check-value", {
                  attrs: { value: _vm.itemData.harga, valueType: "currency" },
                }),
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "li",
              [
                _c("b", [_vm._v("Harga Sub:")]),
                _vm._v(" "),
                _c("check-value", {
                  attrs: {
                    value: _vm.itemData.harga_sub,
                    valueType: "currency",
                  },
                }),
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "li",
              [
                _c("b", [_vm._v("Total Harga:")]),
                _vm._v(" "),
                _c("check-value", {
                  attrs: {
                    value: _vm.itemData.total_harga,
                    valueType: "currency",
                  },
                }),
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "li",
              [
                _c("b", [_vm._v("Bulan Penyusutan:")]),
                _vm._v(" "),
                _c("check-value", {
                  attrs: {
                    value: _vm.itemData.bulan_penyusutan,
                    valueType: "currency",
                  },
                }),
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "li",
              [
                _c("b", [_vm._v("Sisa Bulan Penyusutan:")]),
                _vm._v(" "),
                _c("check-value", {
                  attrs: {
                    value: _vm.itemData.sisa_bulan_penyusutan,
                    valueType: "currency",
                  },
                }),
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "li",
              [
                _c("b", [_vm._v("Sisa Penyusutan:")]),
                _vm._v(" "),
                _c("check-value", {
                  attrs: {
                    value: _vm.itemData.sisa_penyusutan,
                    valueType: "currency",
                  },
                }),
              ],
              1
            ),
          ]),
        ]),
      ]),
    ]),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-16" }, [_c("hr")])
  },
]
render._withStripped = true



/***/ }),

/***/ "./resources/assets/js/views/asetTetap/card.vue":
/*!******************************************************!*\
  !*** ./resources/assets/js/views/asetTetap/card.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _card_vue_vue_type_template_id_d116afbe___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./card.vue?vue&type=template&id=d116afbe& */ "./resources/assets/js/views/asetTetap/card.vue?vue&type=template&id=d116afbe&");
/* harmony import */ var _card_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./card.vue?vue&type=script&lang=js& */ "./resources/assets/js/views/asetTetap/card.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _card_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _card_vue_vue_type_template_id_d116afbe___WEBPACK_IMPORTED_MODULE_0__["render"],
  _card_vue_vue_type_template_id_d116afbe___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/views/asetTetap/card.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/views/asetTetap/card.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/assets/js/views/asetTetap/card.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_card_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./card.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/asetTetap/card.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_card_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/views/asetTetap/card.vue?vue&type=template&id=d116afbe&":
/*!*************************************************************************************!*\
  !*** ./resources/assets/js/views/asetTetap/card.vue?vue&type=template&id=d116afbe& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_card_vue_vue_type_template_id_d116afbe___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./card.vue?vue&type=template&id=d116afbe& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/asetTetap/card.vue?vue&type=template&id=d116afbe&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_card_vue_vue_type_template_id_d116afbe___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_card_vue_vue_type_template_id_d116afbe___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);