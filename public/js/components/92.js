(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[92],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/monitoring/index.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/views/monitoring/index.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _components_pageHeader_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/pageHeader.vue */ "./resources/assets/js/components/pageHeader.vue");
/* harmony import */ var _components_message_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/message.vue */ "./resources/assets/js/components/message.vue");
/* harmony import */ var _components_selectCuTp_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/selectCuTp.vue */ "./resources/assets/js/components/selectCuTp.vue");
/* harmony import */ var _table_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./table.vue */ "./resources/assets/js/views/monitoring/table.vue");
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





/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    pageHeader: _components_pageHeader_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    message: _components_message_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    selectData: _components_selectCuTp_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    tableData: _table_vue__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  data: function data() {
    return {
      title: 'Monitoring',
      kelas: 'monitoring',
      titleDesc: 'Mengelola data monitoring',
      titleIcon: 'icon-collaboration',
      selectCuPath: 'monitoringCu'
    };
  },
  created: function created() {
    this.checkUser('index_monitoring', this.$route.params.cu);
  },
  methods: {
    checkUser: function checkUser(permission, id_cu) {
      if (this.currentUser) {
        if (!this.currentUser.can || !this.currentUser.can[permission]) {
          this.$router.push('/notFound');
        }

        if (!id_cu || this.currentUser.id_cu) {
          if (this.currentUser.id_cu != 0 && this.currentUser.id_cu != id_cu) {
            this.$router.push('/notFound');
          }
        }
      }
    }
  },
  computed: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('auth', {
    currentUser: 'currentUser'
  })), Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('artikel', {
    itemData: 'dataS',
    itemDataStat: 'dataStatS'
  }))
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/monitoring/table.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/views/monitoring/table.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _components_dataviewer2_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/dataviewer2.vue */ "./resources/assets/js/components/dataviewer2.vue");
/* harmony import */ var _components_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/modal */ "./resources/assets/js/components/modal.vue");
/* harmony import */ var _components_checkValue_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/checkValue.vue */ "./resources/assets/js/components/checkValue.vue");
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    DataViewer: _components_dataviewer2_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    appModal: _components_modal__WEBPACK_IMPORTED_MODULE_2__["default"],
    checkValue: _components_checkValue_vue__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  props: ['title', 'kelas'],
  data: function data() {
    return {
      selectedItem: [],
      query: {
        order_column: "perspektif",
        order_direction: "desc",
        filter_match: "and",
        limit: 10,
        page: 1
      },
      excelDownloadUrl: '',
      columnData: [{
        title: 'No.',
        name: 'No.'
      }, {
        title: 'Status',
        name: 'status',
        hide: false
      }, {
        title: 'Rekomendasi',
        name: 'monitoring_rekom_count',
        sort: false,
        hide: false,
        disable: false,
        filter: false
      }, {
        title: 'Tercapai',
        name: 'monitoring_rekom_ok_count',
        sort: false,
        hide: false,
        disable: false,
        filter: false
      }, {
        title: 'Keputusan',
        name: 'monitoring_pencapaian_count',
        sort: false,
        hide: false,
        disable: false,
        filter: false
      }, {
        title: 'Temuan',
        name: 'name',
        tipe: 'string',
        sort: true,
        hide: false,
        disable: false,
        filter: true,
        filterDefault: true
      }, {
        title: 'CU',
        name: 'cu.name',
        sort: false,
        hide: false,
        disable: false,
        filter: true
      }, {
        title: 'TP',
        name: 'tp.name',
        sort: false,
        hide: false,
        disable: false,
        filter: true
      }, {
        title: 'Jenis',
        name: 'jenis',
        sort: true,
        hide: false,
        disable: false,
        filter: true
      }, {
        title: 'Perspektif',
        name: 'perspektif',
        sort: true,
        hide: false,
        disable: false,
        filter: true
      }, {
        title: 'PIC CU',
        name: 'aktivis_cu.name',
        sort: false,
        hide: false,
        disable: false,
        filter: true
      }, {
        title: 'PIC BKCU',
        name: 'aktivis_bkcu.name',
        sort: false,
        hide: false,
        disable: false,
        filter: true
      }, {
        title: 'Tgl. Monitoring',
        name: 'tanggal',
        tipe: 'date',
        sort: true,
        hide: false,
        disable: false,
        filter: true
      }, {
        title: 'Tgl. / Waktu Buat',
        name: 'created_at',
        tipe: 'datetime',
        sort: true,
        hide: false,
        disable: false,
        filter: true
      }, {
        title: 'Tgl. / Waktu Ubah',
        name: 'updated_at',
        tipe: 'datetime',
        sort: true,
        hide: false,
        disable: false,
        filter: true
      }],
      state: '',
      modalShow: false,
      modalState: '',
      modalTitle: '',
      modalContent: '',
      modalButton: ''
    };
  },
  created: function created() {
    this.fetch(this.query);
  },
  watch: {
    // check route changes
    '$route': function $route(to, from) {
      this.fetch(this.query);
    },
    // when updating data
    updateStat: function updateStat(value) {
      this.modalState = value;
      this.modalButton = 'Ok';

      if (value == "success") {
        this.modalTitle = this.updateMessage.message;
        this.modalContent = '';
        this.fetch();
      } else if (value == "fail") {
        this.modalContent = this.updateMessage;
      } else {
        this.modalContent = '';
      }
    }
  },
  methods: {
    fetch: function fetch(params) {
      if (this.$route.params.cu == 'semua') {
        this.disableColumnCu(false);
        this.$store.dispatch(this.kelas + '/index', params);
        this.excelDownloadUrl = this.kelas;
      } else {
        this.disableColumnCu(true);
        this.$store.dispatch(this.kelas + '/indexCu', [params, this.$route.params.cu, this.$route.params.tp]);
        this.excelDownloadUrl = this.kelas + '/indexCu/' + this.$route.params.cu + '/' + this.$route.params.tp;
      }
    },
    disableColumnCu: function disableColumnCu(status) {
      this.columnData[6].disable = status;
    },
    selectedRow: function selectedRow(item) {
      this.selectedItem = item;
    },
    goTo: function goTo(id, tipe) {
      if (tipe == 'edit') {
        this.$router.push({
          name: this.kelas + 'Edit',
          params: {
            id: id
          }
        });
      } else {
        this.$router.push({
          name: this.kelas + 'Detail',
          params: {
            id: id
          }
        });
      }
    },
    modalConfirmOpen: function modalConfirmOpen(state, isMobile, itemMobile) {
      this.modalShow = true;
      this.modalState = 'confirm-tutup';
      this.state = state;

      if (isMobile) {
        this.selectedItem = itemMobile;
      }

      if (state == 'hapus') {
        this.modalTitle = 'Hapus ' + this.title + ' ' + this.selectedItem.name + ' ?';
        this.modalButton = 'Iya, Hapus';
      }
    },
    modalTutup: function modalTutup() {
      this.modalShow = false;
      this.$store.dispatch(this.kelas + '/resetUpdateStat');
    },
    modalConfirmOk: function modalConfirmOk() {
      if (this.state == 'hapus') {
        this.$store.dispatch(this.kelas + '/destroy', this.selectedItem.id);
      } else if (this.state == "updateTerbitkan") {
        this.$store.dispatch(this.kelas + '/updateTerbitkan', this.selectedItem.id);
      } else if (this.state == "updateUtamakan") {
        this.$store.dispatch(this.kelas + '/updateUtamakan', this.selectedItem.id);
      }
    }
  },
  computed: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('auth', {
    currentUser: 'currentUser'
  })), Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('monitoring', {
    itemData: 'dataS',
    itemDataStat: 'dataStatS',
    updateMessage: 'update',
    updateStat: 'updateStat'
  }))
});

/***/ }),

/***/ "./node_modules/file-saver/dist/FileSaver.min.js":
/*!*******************************************************!*\
  !*** ./node_modules/file-saver/dist/FileSaver.min.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function(a,b){if(true)!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (b),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else {}})(this,function(){"use strict";function b(a,b){return"undefined"==typeof b?b={autoBom:!1}:"object"!=typeof b&&(console.warn("Deprecated: Expected third argument to be a object"),b={autoBom:!b}),b.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(a.type)?new Blob(["\uFEFF",a],{type:a.type}):a}function c(b,c,d){var e=new XMLHttpRequest;e.open("GET",b),e.responseType="blob",e.onload=function(){a(e.response,c,d)},e.onerror=function(){console.error("could not download file")},e.send()}function d(a){var b=new XMLHttpRequest;b.open("HEAD",a,!1);try{b.send()}catch(a){}return 200<=b.status&&299>=b.status}function e(a){try{a.dispatchEvent(new MouseEvent("click"))}catch(c){var b=document.createEvent("MouseEvents");b.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),a.dispatchEvent(b)}}var f="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof global&&global.global===global?global:void 0,a=f.saveAs||("object"!=typeof window||window!==f?function(){}:"download"in HTMLAnchorElement.prototype?function(b,g,h){var i=f.URL||f.webkitURL,j=document.createElement("a");g=g||b.name||"download",j.download=g,j.rel="noopener","string"==typeof b?(j.href=b,j.origin===location.origin?e(j):d(j.href)?c(b,g,h):e(j,j.target="_blank")):(j.href=i.createObjectURL(b),setTimeout(function(){i.revokeObjectURL(j.href)},4E4),setTimeout(function(){e(j)},0))}:"msSaveOrOpenBlob"in navigator?function(f,g,h){if(g=g||f.name||"download","string"!=typeof f)navigator.msSaveOrOpenBlob(b(f,h),g);else if(d(f))c(f,g,h);else{var i=document.createElement("a");i.href=f,i.target="_blank",setTimeout(function(){e(i)})}}:function(a,b,d,e){if(e=e||open("","_blank"),e&&(e.document.title=e.document.body.innerText="downloading..."),"string"==typeof a)return c(a,b,d);var g="application/octet-stream"===a.type,h=/constructor/i.test(f.HTMLElement)||f.safari,i=/CriOS\/[\d]+/.test(navigator.userAgent);if((i||g&&h)&&"object"==typeof FileReader){var j=new FileReader;j.onloadend=function(){var a=j.result;a=i?a:a.replace(/^data:[^;]*;/,"data:attachment/file;"),e?e.location.href=a:location=a,e=null},j.readAsDataURL(a)}else{var k=f.URL||f.webkitURL,l=k.createObjectURL(a);e?e.location=l:location.href=l,e=null,setTimeout(function(){k.revokeObjectURL(l)},4E4)}});f.saveAs=a.saveAs=a, true&&(module.exports=a)});

//# sourceMappingURL=FileSaver.min.js.map
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/monitoring/index.vue?vue&type=template&id=4d04f07e&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/views/monitoring/index.vue?vue&type=template&id=4d04f07e& ***!
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
                      errorData: _vm.itemData
                    }
                  })
                : _vm._e(),
              _vm._v(" "),
              _c("select-data", {
                attrs: {
                  kelas: _vm.kelas,
                  path: _vm.selectCuPath,
                  isPus: false
                }
              }),
              _vm._v(" "),
              _c("table-data", {
                attrs: { title: _vm.title, kelas: _vm.kelas }
              })
            ],
            1
          )
        ])
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/monitoring/table.vue?vue&type=template&id=06a0257a&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/views/monitoring/table.vue?vue&type=template&id=06a0257a& ***!
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
      _c(
        "data-viewer",
        {
          attrs: {
            title: _vm.title,
            columnData: _vm.columnData,
            itemData: _vm.itemData,
            query: _vm.query,
            itemDataStat: _vm.itemDataStat,
            excelDownloadUrl: _vm.excelDownloadUrl
          },
          on: { fetch: _vm.fetch },
          scopedSlots: _vm._u([
            {
              key: "item-desktop",
              fn: function(props) {
                return [
                  _c(
                    "tr",
                    {
                      staticClass: "text-nowrap",
                      class: {
                        "bg-info": _vm.selectedItem.id == props.item.id
                      },
                      on: {
                        click: function($event) {
                          return _vm.selectedRow(props.item)
                        }
                      }
                    },
                    [
                      !_vm.columnData[0].hide
                        ? _c("td", [
                            _vm._v(
                              "\n\t\t\t\t\t" +
                                _vm._s(
                                  props.index +
                                    1 +
                                    (+_vm.itemData.current_page - 1) *
                                      +_vm.itemData.per_page +
                                    "."
                                ) +
                                "\n\t\t\t\t"
                            )
                          ])
                        : _vm._e(),
                      _vm._v(" "),
                      !_vm.columnData[1].hide
                        ? _c("td", [
                            _c("div", { staticClass: "progress" }, [
                              _c(
                                "div",
                                {
                                  staticClass: "progress-bar-striped bg-orange",
                                  style: {
                                    width:
                                      Math.round(
                                        (props.item.monitoring_rekom_ok_count /
                                          props.item.monitoring_rekom_count) *
                                          100
                                      ) + "%"
                                  }
                                },
                                [
                                  _c(
                                    "span",
                                    {
                                      staticClass: "text-default font-size-lg"
                                    },
                                    [
                                      _vm._v(
                                        "\n\t\t\t\t\t\t\t\t \n\t\t\t\t\t\t\t\t" +
                                          _vm._s(
                                            Math.round(
                                              (props.item
                                                .monitoring_rekom_ok_count /
                                                props.item
                                                  .monitoring_rekom_count) *
                                                100
                                            ) + "%"
                                          ) +
                                          "\n\t\t\t\t\t\t\t\t          \n\t\t\t\t\t\t\t"
                                      )
                                    ]
                                  )
                                ]
                              )
                            ])
                          ])
                        : _vm._e(),
                      _vm._v(" "),
                      !_vm.columnData[2].hide
                        ? _c(
                            "td",
                            [
                              _c("check-value", {
                                attrs: {
                                  value: props.item.monitoring_rekom_count
                                }
                              })
                            ],
                            1
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      !_vm.columnData[3].hide
                        ? _c(
                            "td",
                            [
                              _c("check-value", {
                                attrs: {
                                  value: props.item.monitoring_rekom_ok_count
                                }
                              })
                            ],
                            1
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      !_vm.columnData[4].hide
                        ? _c(
                            "td",
                            [
                              _c("check-value", {
                                attrs: {
                                  value: props.item.monitoring_pencapaian_count
                                }
                              })
                            ],
                            1
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      !_vm.columnData[5].hide
                        ? _c(
                            "td",
                            [
                              _c("check-value", {
                                attrs: { value: props.item.name }
                              })
                            ],
                            1
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      !_vm.columnData[6].hide && !_vm.columnData[6].disable
                        ? _c(
                            "td",
                            [
                              props.item.cu
                                ? _c("check-value", {
                                    attrs: { value: props.item.cu.name }
                                  })
                                : _c("span", [_vm._v("-")])
                            ],
                            1
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      !_vm.columnData[7].hide
                        ? _c(
                            "td",
                            [
                              props.item.tp
                                ? _c("check-value", {
                                    attrs: { value: props.item.tp.name }
                                  })
                                : props.item.id_tp == 0
                                ? _c("span", [_vm._v("Semua")])
                                : _c("span", [_vm._v("-")])
                            ],
                            1
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      !_vm.columnData[8].hide
                        ? _c("td", [
                            props.item.jenis == "MAYOR"
                              ? _c(
                                  "span",
                                  { staticClass: "badge badge-danger" },
                                  [_vm._v(_vm._s(props.item.jenis))]
                                )
                              : props.item.jenis == "MINOR"
                              ? _c(
                                  "span",
                                  { staticClass: "badge badge-success" },
                                  [_vm._v(_vm._s(props.item.jenis))]
                                )
                              : _vm._e()
                          ])
                        : _vm._e(),
                      _vm._v(" "),
                      !_vm.columnData[9].hide
                        ? _c(
                            "td",
                            [
                              _c("check-value", {
                                attrs: { value: props.item.perspektif }
                              })
                            ],
                            1
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      !_vm.columnData[10].hide
                        ? _c(
                            "td",
                            [
                              props.item.aktivis_cu
                                ? _c("check-value", {
                                    attrs: { value: props.item.aktivis_cu.name }
                                  })
                                : _c("span", [_vm._v("-")])
                            ],
                            1
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      !_vm.columnData[11].hide
                        ? _c(
                            "td",
                            [
                              props.item.aktivis_bkcu
                                ? _c("check-value", {
                                    attrs: {
                                      value: props.item.aktivis_bkcu.name
                                    }
                                  })
                                : _c("span", [_vm._v("-")])
                            ],
                            1
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      !_vm.columnData[12].hide
                        ? _c("td", {
                            domProps: {
                              innerHTML: _vm._s(
                                _vm.$options.filters.date(props.item.tanggal)
                              )
                            }
                          })
                        : _vm._e(),
                      _vm._v(" "),
                      !_vm.columnData[13].hide
                        ? _c("td", {
                            domProps: {
                              innerHTML: _vm._s(
                                _vm.$options.filters.dateTime(
                                  props.item.created_at
                                )
                              )
                            }
                          })
                        : _vm._e(),
                      _vm._v(" "),
                      !_vm.columnData[14].hide
                        ? _c("td", [
                            props.item.created_at !== props.item.updated_at
                              ? _c("span", {
                                  domProps: {
                                    innerHTML: _vm._s(
                                      _vm.$options.filters.dateTime(
                                        props.item.updated_at
                                      )
                                    )
                                  }
                                })
                              : _c("span", [_vm._v("-")])
                          ])
                        : _vm._e()
                    ]
                  )
                ]
              }
            }
          ])
        },
        [
          _c(
            "template",
            { slot: "button-desktop" },
            [
              _vm.currentUser.can &&
              _vm.currentUser.can["create_" + _vm.kelas] &&
              _vm.currentUser.id_cu == 0
                ? _c(
                    "router-link",
                    {
                      staticClass: "btn btn-light mb-1",
                      attrs: { to: { name: _vm.kelas + "Create" } }
                    },
                    [
                      _c("i", { staticClass: "icon-plus3" }),
                      _vm._v(" Tambah\n\t\t\t")
                    ]
                  )
                : _vm._e(),
              _vm._v(" "),
              _vm.currentUser.can &&
              _vm.currentUser.can["update_" + _vm.kelas] &&
              _vm.currentUser.id_cu == 0
                ? _c(
                    "button",
                    {
                      staticClass: "btn btn-light mb-1",
                      attrs: { disabled: !_vm.selectedItem.id },
                      on: {
                        click: function($event) {
                          $event.preventDefault()
                          return _vm.goTo(_vm.selectedItem.id, "edit")
                        }
                      }
                    },
                    [
                      _c("i", { staticClass: "icon-pencil5" }),
                      _vm._v(" Ubah\n\t\t\t")
                    ]
                  )
                : _vm._e(),
              _vm._v(" "),
              _vm.currentUser.can && _vm.currentUser.can["update_" + _vm.kelas]
                ? _c(
                    "button",
                    {
                      staticClass: "btn btn-light btn-icon mb-1",
                      attrs: { disabled: !_vm.selectedItem.id },
                      on: {
                        click: function($event) {
                          $event.preventDefault()
                          return _vm.goTo(_vm.selectedItem.id, "detail")
                        }
                      }
                    },
                    [
                      _c("i", { staticClass: "icon-stack2" }),
                      _vm._v(" Detail\n\t\t\t")
                    ]
                  )
                : _vm._e(),
              _vm._v(" "),
              _vm.currentUser.can &&
              _vm.currentUser.can["destroy_" + _vm.kelas] &&
              _vm.currentUser.id_cu == 0
                ? _c(
                    "button",
                    {
                      staticClass: "btn btn-light mb-1",
                      attrs: { disabled: !_vm.selectedItem.id },
                      on: {
                        click: function($event) {
                          $event.preventDefault()
                          return _vm.modalConfirmOpen("hapus")
                        }
                      }
                    },
                    [
                      _c("i", { staticClass: "icon-bin2" }),
                      _vm._v(" Hapus\n\t\t\t")
                    ]
                  )
                : _vm._e()
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "template",
            { slot: "button-mobile" },
            [
              _vm.currentUser.can &&
              _vm.currentUser.can["create_" + _vm.kelas] &&
              _vm.currentUser.id_cu == 0
                ? _c(
                    "router-link",
                    {
                      staticClass: "btn btn-light btn-block mb-1",
                      attrs: { to: { name: _vm.kelas + "Create" } }
                    },
                    [
                      _c("i", { staticClass: "icon-plus3" }),
                      _vm._v(" Tambah\n\t\t\t")
                    ]
                  )
                : _vm._e(),
              _vm._v(" "),
              _vm.currentUser.can &&
              _vm.currentUser.can["update_" + _vm.kelas] &&
              _vm.currentUser.id_cu == 0
                ? _c(
                    "button",
                    {
                      staticClass: "btn btn-light btn-block mb-1",
                      attrs: { disabled: !_vm.selectedItem.id },
                      on: {
                        click: function($event) {
                          $event.preventDefault()
                          return _vm.goTo(_vm.selectedItem.id, "edit")
                        }
                      }
                    },
                    [
                      _c("i", { staticClass: "icon-pencil5" }),
                      _vm._v(" Ubah\n\t\t\t")
                    ]
                  )
                : _vm._e(),
              _vm._v(" "),
              _vm.currentUser.can && _vm.currentUser.can["update_" + _vm.kelas]
                ? _c(
                    "button",
                    {
                      staticClass: "btn btn-light btn-icon btn-block mb-1",
                      attrs: { disabled: !_vm.selectedItem.id },
                      on: {
                        click: function($event) {
                          $event.preventDefault()
                          return _vm.goTo(_vm.selectedItem.id, "detail")
                        }
                      }
                    },
                    [
                      _c("i", { staticClass: "icon-stack2" }),
                      _vm._v(" Detail\n\t\t\t")
                    ]
                  )
                : _vm._e(),
              _vm._v(" "),
              _vm.currentUser.can &&
              _vm.currentUser.can["destroy_" + _vm.kelas] &&
              _vm.currentUser.id_cu == 0
                ? _c(
                    "button",
                    {
                      staticClass: "btn btn-light btn-block mb-1",
                      attrs: { disabled: !_vm.selectedItem.id },
                      on: {
                        click: function($event) {
                          $event.preventDefault()
                          return _vm.modalConfirmOpen("hapus")
                        }
                      }
                    },
                    [
                      _c("i", { staticClass: "icon-bin2" }),
                      _vm._v(" Hapus\n\t\t\t")
                    ]
                  )
                : _vm._e()
            ],
            1
          )
        ],
        2
      ),
      _vm._v(" "),
      _c("app-modal", {
        attrs: {
          show: _vm.modalShow,
          state: _vm.modalState,
          title: _vm.modalTitle,
          content: _vm.modalContent,
          button: _vm.modalButton
        },
        on: {
          tutup: _vm.modalTutup,
          confirmOk: _vm.modalConfirmOk,
          successOk: _vm.modalTutup,
          failOk: _vm.modalTutup,
          backgroundClick: _vm.modalTutup
        }
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/assets/js/views/monitoring/index.vue":
/*!********************************************************!*\
  !*** ./resources/assets/js/views/monitoring/index.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_4d04f07e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=4d04f07e& */ "./resources/assets/js/views/monitoring/index.vue?vue&type=template&id=4d04f07e&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/assets/js/views/monitoring/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_4d04f07e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_4d04f07e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/views/monitoring/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/views/monitoring/index.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/assets/js/views/monitoring/index.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/monitoring/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/views/monitoring/index.vue?vue&type=template&id=4d04f07e&":
/*!***************************************************************************************!*\
  !*** ./resources/assets/js/views/monitoring/index.vue?vue&type=template&id=4d04f07e& ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_4d04f07e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=4d04f07e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/monitoring/index.vue?vue&type=template&id=4d04f07e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_4d04f07e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_4d04f07e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/assets/js/views/monitoring/table.vue":
/*!********************************************************!*\
  !*** ./resources/assets/js/views/monitoring/table.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _table_vue_vue_type_template_id_06a0257a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./table.vue?vue&type=template&id=06a0257a& */ "./resources/assets/js/views/monitoring/table.vue?vue&type=template&id=06a0257a&");
/* harmony import */ var _table_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./table.vue?vue&type=script&lang=js& */ "./resources/assets/js/views/monitoring/table.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _table_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _table_vue_vue_type_template_id_06a0257a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _table_vue_vue_type_template_id_06a0257a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/views/monitoring/table.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/views/monitoring/table.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/assets/js/views/monitoring/table.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_table_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./table.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/monitoring/table.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_table_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/views/monitoring/table.vue?vue&type=template&id=06a0257a&":
/*!***************************************************************************************!*\
  !*** ./resources/assets/js/views/monitoring/table.vue?vue&type=template&id=06a0257a& ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_table_vue_vue_type_template_id_06a0257a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./table.vue?vue&type=template&id=06a0257a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/monitoring/table.vue?vue&type=template&id=06a0257a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_table_vue_vue_type_template_id_06a0257a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_table_vue_vue_type_template_id_06a0257a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);