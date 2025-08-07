(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[8],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/datatable.vue?vue&type=script&lang=js":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/datatable.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_cleave_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-cleave-component */ "./node_modules/vue-cleave-component/dist/vue-cleave.min.js");
/* harmony import */ var vue_cleave_component__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_cleave_component__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['columnData', 'itemDataStat', 'items'],
  components: {},
  data: function data() {
    return {};
  },
  methods: {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/identitas.vue?vue&type=script&lang=js":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/identitas.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['itemData']
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/datatable.vue?vue&type=template&id=80417746":
/*!************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/datatable.vue?vue&type=template&id=80417746 ***!
  \************************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "table-responsive table-scrollable",
    staticStyle: {
      "max-height": "33rem"
    }
  }, [_c("table", {
    staticClass: "table table-striped"
  }, [_c("thead", {
    staticClass: "bg-primary"
  }, [_c("tr", {
    staticClass: "text-nowrap"
  }, _vm._l(_vm.columnData, function (item, index) {
    return _c("th", {
      key: index
    }, [_c("span", {
      domProps: {
        innerHTML: _vm._s(item.title)
      }
    })]);
  }), 0)]), _vm._v(" "), _vm.itemDataStat === "loading" ? _c("tbody", [_c("tr", [_c("td", {
    attrs: {
      colspan: _vm.columnData.length
    }
  }, [_vm._m(0)])])]) : _vm.itemDataStat === "success" ? _c("tbody", [_vm._l(_vm.items, function (item, index) {
    return _vm._t("item-desktop", null, {
      item: item,
      index: index
    });
  }), _vm._v(" "), _vm.items && _vm.items.length == 0 ? _c("tr", [_c("td", {
    attrs: {
      colspan: _vm.columnData.length
    }
  }, [_vm._v("Belum terdapat data...")])]) : _vm._e()], 2) : _vm.itemDataStat === "fail" ? _c("tbody", [_c("tr", [_c("td", {
    attrs: {
      colspan: _vm.columnData.length
    }
  }, [_vm._v("\n\t\t\t\t\tOops.. Terjadi kesalahan, silahkan coba lagi.\n\t\t\t\t")])])]) : _c("tbody", [_c("tr", [_c("td", {
    attrs: {
      colspan: _vm.columnData.length
    }
  }, [_vm._v("-")])])])])]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "progress"
  }, [_c("div", {
    staticClass: "progress-bar progress-bar-info progress-bar-striped progress-bar-animated",
    staticStyle: {
      width: "100%"
    }
  }, [_c("span", {
    staticClass: "sr-only"
  }, [_vm._v("100% Complete")])])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/identitas.vue?vue&type=template&id=13112606":
/*!************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/identitas.vue?vue&type=template&id=13112606 ***!
  \************************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "media flex-column flex-sm-row mt-0 mb-3"
  }, [_c("div", {
    staticClass: "mr-sm-3 mb-2 mb-sm-0"
  }, [_c("div", {
    staticClass: "card-img-actions"
  }, [_vm.itemData.gambar ? _c("img", {
    staticClass: "img-fluid img-preview rounded",
    attrs: {
      src: "/images/aktivis/" + _vm.itemData.gambar + ".jpg"
    }
  }) : _c("img", {
    staticClass: "img-fluid img-preview rounded",
    attrs: {
      src: "/images/no_image.jpg"
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "media-body"
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-sm-4"
  }, [_c("ul", {
    staticClass: "list list-unstyled mb-0"
  }, [_c("li", [_c("b", [_vm._v("No. KTP:")]), _vm._v(" " + _vm._s(_vm.itemData.nik))]), _vm._v(" "), _c("li", [_c("b", [_vm._v("No. KK:")]), _vm._v(" " + _vm._s(_vm.itemData.kk))]), _vm._v(" "), _c("li", [_c("b", [_vm._v("Nama:")]), _vm._v(" " + _vm._s(_vm.itemData.name))]), _vm._v(" "), _c("li", [_c("b", [_vm._v("Suku:")]), _vm._v(" " + _vm._s(_vm.itemData.suku))]), _vm._v(" "), _c("li", [_c("b", [_vm._v("Gender:")]), _vm._v(" " + _vm._s(_vm.itemData.kelamin))]), _vm._v(" "), _c("li", [_c("b", [_vm._v("Tinggi:")]), _vm._v(" " + _vm._s(_vm.itemData.tinggi))]), _vm._v(" "), _c("li", [_c("b", [_vm._v("Agama:")]), _vm._v(" " + _vm._s(_vm.itemData.agama))]), _vm._v(" "), _c("li", [_c("b", [_vm._v("Gol. Darah:")]), _vm._v(" " + _vm._s(_vm.itemData.darah))]), _vm._v(" "), _vm.itemData.tanggal_meninggal == null ? _c("li", [_c("b", [_vm._v("Usia:")]), _vm._v(" "), _vm.itemData.tanggal_lahir ? _c("span", {
    domProps: {
      innerHTML: _vm._s(_vm.$options.filters.age(_vm.itemData.tanggal_lahir))
    }
  }) : _vm._e()]) : _c("li", [_c("b", [_vm._v("Usia Saat Meninggal:")]), _vm._v(" "), _vm.itemData.tanggal_lahir ? _c("span", {
    domProps: {
      innerHTML: _vm._s(_vm.$options.filters.ageDiff(_vm.itemData.tanggal_meninggal, _vm.itemData.tanggal_lahir))
    }
  }) : _vm._e()]), _vm._v(" "), _c("li", [_c("b", [_vm._v("Status:")]), _vm._v(" " + _vm._s(_vm.itemData.status))])])]), _vm._v(" "), _c("div", {
    staticClass: "col-sm-4"
  }, [_c("ul", {
    staticClass: "list list-unstyled mb-0"
  }, [_c("li", [_c("b", [_vm._v("Tgl. Lahir:")]), _vm._v(" "), _vm.itemData.tanggal_lahir ? _c("span", {
    domProps: {
      innerHTML: _vm._s(_vm.$options.filters.date(_vm.itemData.tanggal_lahir))
    }
  }) : _vm._e()]), _vm._v(" "), _c("li", [_c("b", [_vm._v("Tempat Lahir:")]), _vm._v(" " + _vm._s(_vm.itemData.tempat_lahir))]), _vm._v(" "), _c("li", [_c("b", [_vm._v("Nama Ibu:")]), _vm._v(" " + _vm._s(_vm.itemData.nama_ibu))]), _vm._v(" "), _c("li", [_c("b", [_vm._v("Lembaga:")]), _vm._v(" " + _vm._s(_vm.itemData.lembaga))]), _vm._v(" "), _c("li", [_c("b", [_vm._v("Jabatan:")]), _vm._v(" " + _vm._s(_vm.$options.filters.checkTingkatAktivis(_vm.itemData.jabatan)))]), _vm._v(" "), _c("li", [_c("b", [_vm._v("Pekerjaan:")]), _vm._v(" " + _vm._s(_vm.itemData.pekerjaan))]), _vm._v(" "), _c("li", [_c("b", [_vm._v("Pendidikan:")]), _vm._v(" " + _vm._s(_vm.itemData.pendidikan))]), _vm._v(" "), _c("li", [_c("b", [_vm._v("Email:")]), _vm._v(" " + _vm._s(_vm.itemData.email))]), _vm._v(" "), _c("li", [_c("b", [_vm._v("No. Hp:")]), _vm._v(" " + _vm._s(_vm.itemData.hp))]), _vm._v(" "), _c("li", [_c("b", [_vm._v("Kontak Lainnya:")]), _vm._v(" " + _vm._s(_vm.itemData.kontak))])])]), _vm._v(" "), _c("div", {
    staticClass: "col-sm-4"
  }, [_c("ul", {
    staticClass: "list list-unstyled mb-0"
  }, [_vm.itemData.anggota_cu_cu ? _c("li", [_c("b", [_vm._v("Asal TP/KP:")]), _vm._v(" " + _vm._s(_vm.itemData.anggota_cu_cu[0].tp ? _vm.itemData.anggota_cu_cu[0].tp.name : ""))]) : _vm._e(), _vm._v(" "), _c("li", [_c("b", [_vm._v("Provinsi:")]), _vm._v(" " + _vm._s(_vm.itemData.provinces ? _vm.itemData.provinces.name : ""))]), _vm._v(" "), _c("li", [_c("b", [_vm._v("Kabupaten:")]), _vm._v(" " + _vm._s(_vm.itemData.regencies ? _vm.itemData.regencies.name : ""))]), _vm._v(" "), _c("li", [_c("b", [_vm._v("Kecamatan:")]), _vm._v(" " + _vm._s(_vm.itemData.districts ? _vm.itemData.districts.name : ""))]), _vm._v(" "), _c("li", [_c("b", [_vm._v("Kelurahan:")]), _vm._v(" " + _vm._s(_vm.itemData.villages ? _vm.itemData.villages.name : ""))]), _vm._v(" "), _c("li", [_c("b", [_vm._v("Alamat:")]), _vm._v(" " + _vm._s(_vm.itemData.alamat))])])])])])]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./resources/assets/js/components/datatable.vue":
/*!******************************************************!*\
  !*** ./resources/assets/js/components/datatable.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _datatable_vue_vue_type_template_id_80417746__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./datatable.vue?vue&type=template&id=80417746 */ "./resources/assets/js/components/datatable.vue?vue&type=template&id=80417746");
/* harmony import */ var _datatable_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./datatable.vue?vue&type=script&lang=js */ "./resources/assets/js/components/datatable.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _datatable_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _datatable_vue_vue_type_template_id_80417746__WEBPACK_IMPORTED_MODULE_0__["render"],
  _datatable_vue_vue_type_template_id_80417746__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/components/datatable.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/datatable.vue?vue&type=script&lang=js":
/*!******************************************************************************!*\
  !*** ./resources/assets/js/components/datatable.vue?vue&type=script&lang=js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_datatable_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./datatable.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/datatable.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_datatable_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/datatable.vue?vue&type=template&id=80417746":
/*!************************************************************************************!*\
  !*** ./resources/assets/js/components/datatable.vue?vue&type=template&id=80417746 ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_datatable_vue_vue_type_template_id_80417746__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../node_modules/vue-loader/lib??vue-loader-options!./datatable.vue?vue&type=template&id=80417746 */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/datatable.vue?vue&type=template&id=80417746");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_datatable_vue_vue_type_template_id_80417746__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_datatable_vue_vue_type_template_id_80417746__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/assets/js/components/identitas.vue":
/*!******************************************************!*\
  !*** ./resources/assets/js/components/identitas.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _identitas_vue_vue_type_template_id_13112606__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./identitas.vue?vue&type=template&id=13112606 */ "./resources/assets/js/components/identitas.vue?vue&type=template&id=13112606");
/* harmony import */ var _identitas_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./identitas.vue?vue&type=script&lang=js */ "./resources/assets/js/components/identitas.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _identitas_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _identitas_vue_vue_type_template_id_13112606__WEBPACK_IMPORTED_MODULE_0__["render"],
  _identitas_vue_vue_type_template_id_13112606__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/components/identitas.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/identitas.vue?vue&type=script&lang=js":
/*!******************************************************************************!*\
  !*** ./resources/assets/js/components/identitas.vue?vue&type=script&lang=js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_identitas_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./identitas.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/identitas.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_identitas_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/identitas.vue?vue&type=template&id=13112606":
/*!************************************************************************************!*\
  !*** ./resources/assets/js/components/identitas.vue?vue&type=template&id=13112606 ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_identitas_vue_vue_type_template_id_13112606__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../node_modules/vue-loader/lib??vue-loader-options!./identitas.vue?vue&type=template&id=13112606 */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/identitas.vue?vue&type=template&id=13112606");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_identitas_vue_vue_type_template_id_13112606__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_identitas_vue_vue_type_template_id_13112606__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);