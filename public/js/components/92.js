(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[92],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/ImageUpload.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/ImageUpload.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  data: function data() {
    return {
      image: ''
    };
  },
  props: {
    image_loc: {
      type: [String],
      "default": ''
    },
    image_type: {
      type: [String],
      "default": '.jpg'
    },
    image_temp: {
      "default": ''
    },
    value: {
      type: [String, File],
      "default": 'no_image'
    }
  },
  methods: {
    upload: function upload(e) {
      var files = e.target.files || e.dataTransfer.files;
      if (!files.length) return;
      this.createImage(files[0]);
      this.$emit('input', files[0]);
    },
    createImage: function createImage(file) {
      var reader = new FileReader();
      var vm = this;

      reader.onload = function (e) {
        vm.image = e.target.result; // this.$emit('input', vm.image)
      };

      reader.readAsDataURL(file);
    },
    close: function close() {
      this.$emit('input', 'no_image');
      this.image = '/images/no_image.jpg';
      this.$refs.fileInput.value = '';
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/wajibBadge.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/wajibBadge.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    message: {
      "default": ''
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/surat/form.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/views/surat/form.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_pageHeader_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/pageHeader.vue */ "./resources/assets/js/components/pageHeader.vue");
/* harmony import */ var _helpers_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../helpers/form */ "./resources/assets/js/helpers/form.js");
/* harmony import */ var _components_ImageUpload_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/ImageUpload.vue */ "./resources/assets/js/components/ImageUpload.vue");
/* harmony import */ var _components_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/modal */ "./resources/assets/js/components/modal.vue");
/* harmony import */ var _components_message_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/message.vue */ "./resources/assets/js/components/message.vue");
/* harmony import */ var _components_formButton_vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/formButton.vue */ "./resources/assets/js/components/formButton.vue");
/* harmony import */ var _components_formInfo_vue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/formInfo.vue */ "./resources/assets/js/components/formInfo.vue");
/* harmony import */ var _components_wajibBadge_vue__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/wajibBadge.vue */ "./resources/assets/js/components/wajibBadge.vue");
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    pageHeader: _components_pageHeader_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    appModal: _components_modal__WEBPACK_IMPORTED_MODULE_5__["default"],
    appImageUpload: _components_ImageUpload_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
    message: _components_message_vue__WEBPACK_IMPORTED_MODULE_6__["default"],
    formButton: _components_formButton_vue__WEBPACK_IMPORTED_MODULE_7__["default"],
    formInfo: _components_formInfo_vue__WEBPACK_IMPORTED_MODULE_8__["default"],
    wajibBadge: _components_wajibBadge_vue__WEBPACK_IMPORTED_MODULE_9__["default"]
  },
  data: function data() {
    return {
      title: 'Tambah Surat',
      titleDesc: 'Menambah surat keluar baru',
      titleIcon: 'icon-plus3',
      level2Title: 'Surat',
      kelas: 'surat',
      id_cu: '',
      modalShow: false,
      modalState: '',
      modalTitle: '',
      modalColor: '',
      modalContent: '',
      submited: false,
      timerCount: 0,
      timerEnabled: false
    };
  },
  beforeRouteEnter: function beforeRouteEnter(to, from, next) {
    next(function (vm) {
      return vm.fetch();
    });
  },
  created: function created() {
    if (this.currentUser.id_cu === 0) {
      if (this.modelCuStat != 'success') {
        this.$store.dispatch('cu/getHeader');
      }
    }

    if (this.$route.meta.mode !== 'edit' && this.form.id_cu === undefined) {
      this.form.id_cu = this.currentUser.id_cu;
    }
  },
  watch: {
    formStat: function formStat(value) {
      if (value === "success") {
        if (this.$route.meta.mode !== 'edit') {
          this.form.id_cu = this.currentUser.id_cu;
        } else {
          this.checkUser('update_surat', this.form.id_cu);
        }
      }
    },
    itemDataStat: function itemDataStat(value) {
      if (value === "success") {
        this.timerCount = this.itemData.waktu;
        this.timerEnabled = true;
      }
    },
    timerCount: {
      handler: function handler(value) {
        var _this = this;

        if (value > 0 && this.timerEnabled) {
          setTimeout(function () {
            _this.timerCount--;
          }, 1000);
        }
      },
      immediate: true // This ensures the watcher is triggered upon creation

    },
    updateStat: function updateStat(value) {
      this.modalShow = true;
      this.modalState = value;
      this.modalColor = '';

      if (value === "success") {
        this.modalTitle = this.updateResponse.message;
      } else {
        this.modalTitle = 'Oops terjadi kesalahan :(';
        this.modalContent = this.updateResponse;
      }
    }
  },
  methods: {
    fetch: function fetch() {
      if (this.currentUser.id_cu === 0) {
        if (this.modelCuStat != 'success') {
          this.$store.dispatch('cu/getHeader');
        }
      }

      if (this.$route.meta.mode === 'edit') {
        this.$store.dispatch(this.kelas + '/edit', this.$route.params.id);
        this.title = 'Ubah Surat Keluar';
        this.titleDesc = 'Mengubah surat keluar';
        this.titleIcon = 'icon-pencil5';
      } else {
        this.title = 'Tambah Surat Keluar';
        this.titleDesc = 'Menambah surat keluar';
        this.titleIcon = 'icon-plus3';
        this.$store.dispatch(this.kelas + '/create');
        this.$store.dispatch('suratKode/get');
      }
    },
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
    },
    changeKode: function changeKode(value) {
      if (this.$route.meta.mode !== 'edit') {
        this.$store.dispatch(this.kelas + '/getKode', value);
      }
    },
    changeKategori: function changeKategori(value) {
      var _kategori = '';
      _kategori = lodash__WEBPACK_IMPORTED_MODULE_1___default.a.find(this.itemData.kategori, {
        'id': parseInt(value)
      });
      this.form.name = this.itemData.kode + '/' + _kategori.name + '/' + this.itemData.bulan + '/' + this.itemData.periode;
    },
    upload: function upload(e) {
      var files = e.target.files || e.dataTransfer.files;
      if (!files.length) return;
      this.form.content = files[0];
    },
    save: function save() {
      var _this2 = this;

      this.form.id_surat_kode = this.itemData.suratKode.id;
      this.form.kode = this.itemData.kode;
      this.form.periode = this.itemData.periode;
      this.form.bulan = this.itemData.bulan;
      this.form.tipe = this.itemData.suratKode.name;
      var formData = Object(_helpers_form__WEBPACK_IMPORTED_MODULE_3__["toMulipartedForm"])(this.form, this.$route.meta.mode);
      this.$validator.validateAll('form').then(function (result) {
        if (result) {
          if (_this2.$route.meta.mode === 'edit') {
            _this2.$store.dispatch(_this2.kelas + '/update', [_this2.$route.params.id, formData]);
          } else {
            _this2.$store.dispatch(_this2.kelas + '/store', formData);
          }

          _this2.submited = false;
        } else {
          window.scrollTo(0, 0);
          _this2.submited = true;
        }
      });
    },
    back: function back() {
      this.$router.push({
        name: this.kelas + 'Cu',
        params: {
          cu: this.currentUser.id_cu,
          tipe: 'semua',
          periode: this.momentYear()
        }
      });
    },
    modalTutup: function modalTutup() {
      if (this.updateStat === 'success') {
        this.back();
      }

      this.modalShow = false;
      this.submitedKategori = false;
      this.submitedPenulis = false;
    },
    modalBackgroundClick: function modalBackgroundClick() {
      if (this.modalState === 'success') {
        this.modalTutup;
      } else if (this.modalState === 'loading') {// do nothing
      } else {
        this.modalShow = false;
      }
    },
    processFile: function processFile(event) {
      this.form.gambar = event.target.files[0];
    },
    momentYear: function momentYear() {
      return moment().year();
    }
  },
  computed: _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('auth', {
    currentUser: 'currentUser'
  })), Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('surat', {
    form: 'data',
    formStat: 'dataStat',
    itemData: 'data2',
    itemDataStat: 'dataStat2',
    rules: 'rules',
    options: 'options',
    updateResponse: 'update',
    updateStat: 'updateStat'
  })), Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('suratKode', {
    modelKode: 'dataS',
    modelKodeStat: 'dataStatS'
  })), Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('cu', {
    modelCU: 'headerDataS',
    modelCUStat: 'headerDataStatS'
  }))
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/ImageUpload.vue?vue&type=template&id=319f68d5&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/ImageUpload.vue?vue&type=template&id=319f68d5& ***!
  \*********************************************************************************************************************************************************************************************************************/
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
  return _c("div", [
    _c("div", { staticClass: "card" }, [
      _c("div", { staticClass: "card-body text-center" }, [
        (_vm.image == "" && _vm.image_temp == "") ||
        (!_vm.image && !_vm.image_temp)
          ? _c("img", {
              staticStyle: { width: "15em" },
              attrs: { src: "/images/no_image.jpg" },
            })
          : _vm.image == "" && _vm.image_temp !== ""
          ? _c("img", {
              staticStyle: { width: "15em" },
              attrs: { src: _vm.image_loc + _vm.image_temp + _vm.image_type },
            })
          : _c("img", {
              staticStyle: { width: "15em" },
              attrs: { src: _vm.image },
            }),
      ]),
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-md-10" }, [
        _c("input", {
          ref: "fileInput",
          staticClass: "form-control",
          attrs: { type: "file", accept: ".jpg, .jpeg, .png" },
          on: { change: _vm.upload },
        }),
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-md-2" }, [
        _c(
          "button",
          {
            staticClass: "btn btn-light btn-block",
            attrs: { type: "button", disabled: _vm.image_temp === "" },
            on: {
              click: function ($event) {
                $event.preventDefault()
                return _vm.close()
              },
            },
          },
          [_c("i", { staticClass: "icon-cross" }), _vm._v(" Batal")]
        ),
      ]),
    ]),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/wajibBadge.vue?vue&type=template&id=2f7dfb81&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/wajibBadge.vue?vue&type=template&id=2f7dfb81& ***!
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
  return _vm._m(0)
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticStyle: { display: "inline-block" } }, [
      _c(
        "span",
        { staticClass: "badge bg-danger-400 align-self-center ml-auto" },
        [_vm._v("Wajib diisi")]
      ),
    ])
  },
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/surat/form.vue?vue&type=template&id=2d2b9ac3&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/views/surat/form.vue?vue&type=template&id=2d2b9ac3& ***!
  \***************************************************************************************************************************************************************************************************************/
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
          level: 2,
          level2Title: _vm.level2Title,
          level2Route: _vm.kelas,
        },
        on: {
          level2Back: function ($event) {
            return _vm.back()
          },
        },
      }),
      _vm._v(" "),
      _c("div", { staticClass: "page-content pt-0" }, [
        _c("div", { staticClass: "content-wrapper" }, [
          _c(
            "div",
            { staticClass: "content" },
            [
              _vm.errors.any("form") && _vm.submited
                ? _c("message", {
                    attrs: {
                      title: "Oops, terjadi kesalahan",
                      errorItem: _vm.errors.items,
                    },
                  })
                : _vm._e(),
              _vm._v(" "),
              _c(
                "form",
                {
                  attrs: {
                    enctype: "multipart/form-data",
                    "data-vv-scope": "form",
                  },
                  on: {
                    submit: function ($event) {
                      $event.preventDefault()
                      return _vm.save.apply(null, arguments)
                    },
                  },
                },
                [
                  _c("div", { staticClass: "card" }, [
                    _c("div", { staticClass: "card-body" }, [
                      _vm.$route.meta.mode !== "edit"
                        ? _c("div", { staticClass: "row" }, [
                            _c("div", { staticClass: "col-md-12" }, [
                              _c(
                                "div",
                                {
                                  staticClass: "form-group mb-0",
                                  class: {
                                    "has-error":
                                      _vm.errors.has("form.id_surat_kode"),
                                  },
                                },
                                [
                                  _c(
                                    "h5",
                                    {
                                      class: {
                                        "text-danger":
                                          _vm.errors.has("form.id_surat_kode"),
                                      },
                                    },
                                    [
                                      _vm.errors.has("form.id_surat_kode")
                                        ? _c("i", {
                                            staticClass: "icon-cross2",
                                          })
                                        : _vm._e(),
                                      _vm._v(
                                        "\n\t\t\t\t\t\t\t\t\t\t\tTipe Surat: "
                                      ),
                                      _c("wajib-badge"),
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "input-group" }, [
                                    _c(
                                      "select",
                                      {
                                        directives: [
                                          {
                                            name: "model",
                                            rawName: "v-model",
                                            value: _vm.form.id_surat_kode,
                                            expression: "form.id_surat_kode",
                                          },
                                          {
                                            name: "validate",
                                            rawName: "v-validate",
                                            value: "required",
                                            expression: "'required'",
                                          },
                                        ],
                                        staticClass: "form-control",
                                        attrs: {
                                          name: "id_surat_kode",
                                          "data-width": "100%",
                                          "data-vv-as": "Tipe",
                                        },
                                        on: {
                                          change: [
                                            function ($event) {
                                              var $$selectedVal =
                                                Array.prototype.filter
                                                  .call(
                                                    $event.target.options,
                                                    function (o) {
                                                      return o.selected
                                                    }
                                                  )
                                                  .map(function (o) {
                                                    var val =
                                                      "_value" in o
                                                        ? o._value
                                                        : o.value
                                                    return val
                                                  })
                                              _vm.$set(
                                                _vm.form,
                                                "id_surat_kode",
                                                $event.target.multiple
                                                  ? $$selectedVal
                                                  : $$selectedVal[0]
                                              )
                                            },
                                            function ($event) {
                                              return _vm.changeKode(
                                                $event.target.value
                                              )
                                            },
                                          ],
                                        },
                                      },
                                      [
                                        _c(
                                          "option",
                                          {
                                            attrs: { disabled: "", value: "" },
                                          },
                                          [
                                            _c("span", [
                                              _vm.formStat === "loading"
                                                ? _c("span", [
                                                    _vm._v("Mohon tunggu..."),
                                                  ])
                                                : _c("span", [
                                                    _vm._v(
                                                      "Silahkan pilih tipe surat"
                                                    ),
                                                  ]),
                                            ]),
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _vm._l(_vm.modelKode, function (kode) {
                                          return kode
                                            ? _c(
                                                "option",
                                                {
                                                  domProps: { value: kode.id },
                                                },
                                                [
                                                  _vm._v(
                                                    _vm._s(kode.name) +
                                                      " | " +
                                                      _vm._s(kode.periode)
                                                  ),
                                                ]
                                              )
                                            : _vm._e()
                                        }),
                                      ],
                                      2
                                    ),
                                  ]),
                                  _vm._v(" "),
                                  _vm.errors.has("form.id_surat_kode")
                                    ? _c(
                                        "small",
                                        {
                                          staticClass: "text-muted text-danger",
                                        },
                                        [
                                          _c("i", {
                                            staticClass:
                                              "icon-arrow-small-right",
                                          }),
                                          _vm._v(
                                            " " +
                                              _vm._s(
                                                _vm.errors.first(
                                                  "form.id_surat_kode"
                                                )
                                              ) +
                                              "\n\t\t\t\t\t\t\t\t\t\t"
                                          ),
                                        ]
                                      )
                                    : _c(
                                        "small",
                                        { staticClass: "text-muted" },
                                        [_vm._v(" ")]
                                      ),
                                ]
                              ),
                            ]),
                          ])
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.itemDataStat == "loading"
                        ? _c("div", [_vm._m(0)])
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.itemDataStat == "success"
                        ? _c("div", [
                            _vm.form.id_surat_kode != ""
                              ? _c("div", { staticClass: "row" }, [
                                  _vm.$route.meta.mode !== "edit"
                                    ? _c("div", { staticClass: "col-md-12" }, [
                                        _c("hr", { staticClass: "mt-0" }),
                                        _vm._v(" "),
                                        _c(
                                          "div",
                                          {
                                            staticClass:
                                              "alert bg-warning alert-styled-left",
                                          },
                                          [
                                            _c("h3", [
                                              _vm._v(
                                                "Sisa waktu: " +
                                                  _vm._s(_vm.timerCount) +
                                                  " detik"
                                              ),
                                            ]),
                                            _vm._v(" "),
                                            _c("h6", [
                                              _vm._v(
                                                "Perhatian nomor surat ini hanya tersedia untuk anda selama 30 menit (1800 detik) sejak anda melihat pesan ini, pastikan anda meminta nomor surat ketika surat sudah siap untuk di kirim."
                                              ),
                                            ]),
                                          ]
                                        ),
                                      ])
                                    : _vm._e(),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "col-md-12" }, [
                                    _c(
                                      "div",
                                      {
                                        staticClass:
                                          "card bg-primary text-white card-body",
                                      },
                                      [
                                        _c("h3", { staticClass: "mb-0" }, [
                                          _vm._v(
                                            "Nomor Surat: " +
                                              _vm._s(_vm.itemData.kode)
                                          ),
                                        ]),
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c("hr"),
                                  ]),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "col-md-12" }, [
                                    _c(
                                      "div",
                                      {
                                        staticClass: "form-group",
                                        class: {
                                          "has-error": _vm.errors.has(
                                            "form.id_surat_kategori"
                                          ),
                                        },
                                      },
                                      [
                                        _c(
                                          "h5",
                                          {
                                            class: {
                                              "text-danger": _vm.errors.has(
                                                "form.id_surat_kategori"
                                              ),
                                            },
                                          },
                                          [
                                            _vm.errors.has(
                                              "form.id_surat_kategori"
                                            )
                                              ? _c("i", {
                                                  staticClass: "icon-cross2",
                                                })
                                              : _vm._e(),
                                            _vm._v(
                                              "\n\t\t\t\t\t\t\t\t\t\t\t\tKategori: "
                                            ),
                                            _c("wajib-badge"),
                                          ],
                                          1
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "div",
                                          { staticClass: "input-group" },
                                          [
                                            _c(
                                              "select",
                                              {
                                                directives: [
                                                  {
                                                    name: "model",
                                                    rawName: "v-model",
                                                    value:
                                                      _vm.form
                                                        .id_surat_kategori,
                                                    expression:
                                                      "form.id_surat_kategori",
                                                  },
                                                  {
                                                    name: "validate",
                                                    rawName: "v-validate",
                                                    value: "required",
                                                    expression: "'required'",
                                                  },
                                                ],
                                                staticClass: "form-control",
                                                attrs: {
                                                  name: "id_surat_kategori",
                                                  "data-width": "100%",
                                                  "data-vv-as": "Kategori",
                                                },
                                                on: {
                                                  change: [
                                                    function ($event) {
                                                      var $$selectedVal =
                                                        Array.prototype.filter
                                                          .call(
                                                            $event.target
                                                              .options,
                                                            function (o) {
                                                              return o.selected
                                                            }
                                                          )
                                                          .map(function (o) {
                                                            var val =
                                                              "_value" in o
                                                                ? o._value
                                                                : o.value
                                                            return val
                                                          })
                                                      _vm.$set(
                                                        _vm.form,
                                                        "id_surat_kategori",
                                                        $event.target.multiple
                                                          ? $$selectedVal
                                                          : $$selectedVal[0]
                                                      )
                                                    },
                                                    function ($event) {
                                                      return _vm.changeKategori(
                                                        $event.target.value
                                                      )
                                                    },
                                                  ],
                                                },
                                              },
                                              [
                                                _c(
                                                  "option",
                                                  {
                                                    attrs: {
                                                      disabled: "",
                                                      value: "",
                                                    },
                                                  },
                                                  [
                                                    _c("span", [
                                                      _vm.formStat === "loading"
                                                        ? _c("span", [
                                                            _vm._v(
                                                              "Mohon tunggu..."
                                                            ),
                                                          ])
                                                        : _c("span", [
                                                            _vm._v(
                                                              "Silahkan pilih kategori"
                                                            ),
                                                          ]),
                                                    ]),
                                                  ]
                                                ),
                                                _vm._v(" "),
                                                _vm._l(
                                                  _vm.itemData.kategori,
                                                  function (kategori) {
                                                    return kategori
                                                      ? _c(
                                                          "option",
                                                          {
                                                            domProps: {
                                                              value:
                                                                kategori.id,
                                                            },
                                                          },
                                                          [
                                                            _vm._v(
                                                              _vm._s(
                                                                kategori.name
                                                              ) +
                                                                " | " +
                                                                _vm._s(
                                                                  kategori.deskripsi
                                                                )
                                                            ),
                                                          ]
                                                        )
                                                      : _vm._e()
                                                  }
                                                ),
                                              ],
                                              2
                                            ),
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _vm.errors.has("form.id_surat_kategori")
                                          ? _c(
                                              "small",
                                              {
                                                staticClass:
                                                  "text-muted text-danger",
                                              },
                                              [
                                                _c("i", {
                                                  staticClass:
                                                    "icon-arrow-small-right",
                                                }),
                                                _vm._v(
                                                  " " +
                                                    _vm._s(
                                                      _vm.errors.first(
                                                        "form.id_surat_kategori"
                                                      )
                                                    ) +
                                                    "\n\t\t\t\t\t\t\t\t\t\t\t"
                                                ),
                                              ]
                                            )
                                          : _c(
                                              "small",
                                              { staticClass: "text-muted" },
                                              [_vm._v(" ")]
                                            ),
                                      ]
                                    ),
                                  ]),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "col-md-12" }, [
                                    _c(
                                      "div",
                                      {
                                        staticClass: "form-group",
                                        class: {
                                          "has-error":
                                            _vm.errors.has("form.name"),
                                        },
                                      },
                                      [
                                        _c(
                                          "h5",
                                          {
                                            class: {
                                              "text-danger":
                                                _vm.errors.has("form.name"),
                                            },
                                          },
                                          [
                                            _vm.errors.has("form.name")
                                              ? _c("i", {
                                                  staticClass: "icon-cross2",
                                                })
                                              : _vm._e(),
                                            _vm._v(
                                              "\n\t\t\t\t\t\t\t\t\t\t\t\tKode: "
                                            ),
                                            _c("wajib-badge"),
                                          ],
                                          1
                                        ),
                                        _vm._v(" "),
                                        _c("input", {
                                          directives: [
                                            {
                                              name: "model",
                                              rawName: "v-model",
                                              value: _vm.form.name,
                                              expression: "form.name",
                                            },
                                          ],
                                          staticClass: "form-control",
                                          attrs: {
                                            type: "text",
                                            name: "name",
                                            placeholder:
                                              "Silahkan masukkan kode",
                                            "data-vv-as": "name",
                                          },
                                          domProps: { value: _vm.form.name },
                                          on: {
                                            input: function ($event) {
                                              if ($event.target.composing) {
                                                return
                                              }
                                              _vm.$set(
                                                _vm.form,
                                                "name",
                                                $event.target.value
                                              )
                                            },
                                          },
                                        }),
                                        _vm._v(" "),
                                        _vm.errors.has("form.name")
                                          ? _c(
                                              "small",
                                              {
                                                staticClass:
                                                  "text-muted text-danger",
                                              },
                                              [
                                                _c("i", {
                                                  staticClass:
                                                    "icon-arrow-small-right",
                                                }),
                                                _vm._v(
                                                  " " +
                                                    _vm._s(
                                                      _vm.errors.first(
                                                        "form.name"
                                                      )
                                                    ) +
                                                    "\n\t\t\t\t\t\t\t\t\t\t\t"
                                                ),
                                              ]
                                            )
                                          : _c(
                                              "small",
                                              { staticClass: "text-muted" },
                                              [_vm._v(" ")]
                                            ),
                                      ]
                                    ),
                                  ]),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "col-md-6" }, [
                                    _c(
                                      "div",
                                      {
                                        staticClass: "form-group",
                                        class: {
                                          "has-error":
                                            _vm.errors.has("form.hal"),
                                        },
                                      },
                                      [
                                        _c(
                                          "h5",
                                          {
                                            class: {
                                              "text-danger":
                                                _vm.errors.has("form.hal"),
                                            },
                                          },
                                          [
                                            _vm.errors.has("form.hal")
                                              ? _c("i", {
                                                  staticClass: "icon-cross2",
                                                })
                                              : _vm._e(),
                                            _vm._v(
                                              "\n\t\t\t\t\t\t\t\t\t\t\t\tHal: "
                                            ),
                                            _c("wajib-badge"),
                                          ],
                                          1
                                        ),
                                        _vm._v(" "),
                                        _c("input", {
                                          directives: [
                                            {
                                              name: "model",
                                              rawName: "v-model",
                                              value: _vm.form.hal,
                                              expression: "form.hal",
                                            },
                                          ],
                                          staticClass: "form-control",
                                          attrs: {
                                            type: "text",
                                            name: "hal",
                                            placeholder:
                                              "Silahkan masukkan hal",
                                            "data-vv-as": "hal",
                                          },
                                          domProps: { value: _vm.form.hal },
                                          on: {
                                            input: function ($event) {
                                              if ($event.target.composing) {
                                                return
                                              }
                                              _vm.$set(
                                                _vm.form,
                                                "hal",
                                                $event.target.value
                                              )
                                            },
                                          },
                                        }),
                                        _vm._v(" "),
                                        _vm.errors.has("form.hal")
                                          ? _c(
                                              "small",
                                              {
                                                staticClass:
                                                  "text-muted text-danger",
                                              },
                                              [
                                                _c("i", {
                                                  staticClass:
                                                    "icon-arrow-small-right",
                                                }),
                                                _vm._v(
                                                  " " +
                                                    _vm._s(
                                                      _vm.errors.first(
                                                        "form.hal"
                                                      )
                                                    ) +
                                                    "\n\t\t\t\t\t\t\t\t\t\t\t"
                                                ),
                                              ]
                                            )
                                          : _c(
                                              "small",
                                              { staticClass: "text-muted" },
                                              [_vm._v(" ")]
                                            ),
                                      ]
                                    ),
                                  ]),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "col-md-6" }, [
                                    _c(
                                      "div",
                                      {
                                        staticClass: "form-group",
                                        class: {
                                          "has-error":
                                            _vm.errors.has("form.perihal"),
                                        },
                                      },
                                      [
                                        _c(
                                          "h5",
                                          {
                                            class: {
                                              "text-danger":
                                                _vm.errors.has("form.perihal"),
                                            },
                                          },
                                          [
                                            _vm.errors.has("form.perihal")
                                              ? _c("i", {
                                                  staticClass: "icon-cross2",
                                                })
                                              : _vm._e(),
                                            _vm._v(
                                              "\n\t\t\t\t\t\t\t\t\t\t\t\tPerihal: "
                                            ),
                                            _c("wajib-badge"),
                                          ],
                                          1
                                        ),
                                        _vm._v(" "),
                                        _c("input", {
                                          directives: [
                                            {
                                              name: "model",
                                              rawName: "v-model",
                                              value: _vm.form.perihal,
                                              expression: "form.perihal",
                                            },
                                          ],
                                          staticClass: "form-control",
                                          attrs: {
                                            type: "text",
                                            name: "perihal",
                                            placeholder:
                                              "Silahkan masukkan perihal",
                                            "data-vv-as": "perihal",
                                          },
                                          domProps: { value: _vm.form.perihal },
                                          on: {
                                            input: function ($event) {
                                              if ($event.target.composing) {
                                                return
                                              }
                                              _vm.$set(
                                                _vm.form,
                                                "perihal",
                                                $event.target.value
                                              )
                                            },
                                          },
                                        }),
                                        _vm._v(" "),
                                        _vm.errors.has("form.perihal")
                                          ? _c(
                                              "small",
                                              {
                                                staticClass:
                                                  "text-muted text-danger",
                                              },
                                              [
                                                _c("i", {
                                                  staticClass:
                                                    "icon-arrow-small-right",
                                                }),
                                                _vm._v(
                                                  " " +
                                                    _vm._s(
                                                      _vm.errors.first(
                                                        "form.perihal"
                                                      )
                                                    ) +
                                                    "\n\t\t\t\t\t\t\t\t\t\t\t"
                                                ),
                                              ]
                                            )
                                          : _c(
                                              "small",
                                              { staticClass: "text-muted" },
                                              [_vm._v(" ")]
                                            ),
                                      ]
                                    ),
                                  ]),
                                  _vm._v(" "),
                                  _vm.$route.meta.mode != "edit"
                                    ? _c("div", { staticClass: "col-md-12" }, [
                                        _c(
                                          "div",
                                          {
                                            staticClass: "form-group",
                                            class: {
                                              "has-error":
                                                _vm.errors.has("form.format"),
                                            },
                                          },
                                          [
                                            _c(
                                              "h5",
                                              {
                                                class: {
                                                  "text-danger":
                                                    _vm.errors.has(
                                                      "form.format"
                                                    ),
                                                },
                                              },
                                              [
                                                _vm.errors.has("form.format")
                                                  ? _c("i", {
                                                      staticClass:
                                                        "icon-cross2",
                                                    })
                                                  : _vm._e(),
                                                _vm._v(
                                                  "\n\t\t\t\t\t\t\t\t\t\t\t\tPilih Format: "
                                                ),
                                                _c("wajib-badge"),
                                              ],
                                              1
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "select",
                                              {
                                                directives: [
                                                  {
                                                    name: "model",
                                                    rawName: "v-model",
                                                    value: _vm.form.format,
                                                    expression: "form.format",
                                                  },
                                                  {
                                                    name: "validate",
                                                    rawName: "v-validate",
                                                    value: "required",
                                                    expression: "'required'",
                                                  },
                                                ],
                                                staticClass: "form-control",
                                                attrs: {
                                                  name: "format",
                                                  "data-width": "100%",
                                                  "data-vv-as": "format",
                                                },
                                                on: {
                                                  change: function ($event) {
                                                    var $$selectedVal =
                                                      Array.prototype.filter
                                                        .call(
                                                          $event.target.options,
                                                          function (o) {
                                                            return o.selected
                                                          }
                                                        )
                                                        .map(function (o) {
                                                          var val =
                                                            "_value" in o
                                                              ? o._value
                                                              : o.value
                                                          return val
                                                        })
                                                    _vm.$set(
                                                      _vm.form,
                                                      "format",
                                                      $event.target.multiple
                                                        ? $$selectedVal
                                                        : $$selectedVal[0]
                                                    )
                                                  },
                                                },
                                              },
                                              [
                                                _c(
                                                  "option",
                                                  {
                                                    attrs: {
                                                      disabled: "",
                                                      value: "",
                                                    },
                                                  },
                                                  [
                                                    _vm._v(
                                                      "Silahkan pilih format"
                                                    ),
                                                  ]
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "option",
                                                  {
                                                    attrs: { value: "upload" },
                                                  },
                                                  [_vm._v("Upload")]
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "option",
                                                  { attrs: { value: "link" } },
                                                  [_vm._v("Link")]
                                                ),
                                              ]
                                            ),
                                            _vm._v(" "),
                                            _vm.errors.has("form.format")
                                              ? _c(
                                                  "small",
                                                  {
                                                    staticClass:
                                                      "text-muted text-danger",
                                                  },
                                                  [
                                                    _c("i", {
                                                      staticClass:
                                                        "icon-arrow-small-right",
                                                    }),
                                                    _vm._v(
                                                      " " +
                                                        _vm._s(
                                                          _vm.errors.first(
                                                            "form.format"
                                                          )
                                                        ) +
                                                        "\n\t\t\t\t\t\t\t\t\t\t\t"
                                                    ),
                                                  ]
                                                )
                                              : _c(
                                                  "small",
                                                  { staticClass: "text-muted" },
                                                  [_vm._v(" ")]
                                                ),
                                          ]
                                        ),
                                      ])
                                    : _vm._e(),
                                  _vm._v(" "),
                                  _vm.$route.meta.mode != "edit"
                                    ? _c("div", { staticClass: "col-md-12" }, [
                                        _vm.form.format == "upload"
                                          ? _c(
                                              "div",
                                              { staticClass: "form-group" },
                                              [
                                                _c(
                                                  "h5",
                                                  [
                                                    _vm._v(" Upload dokumen: "),
                                                    _c("wajib-badge"),
                                                  ],
                                                  1
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "div",
                                                  {
                                                    staticClass:
                                                      "card-card-body",
                                                  },
                                                  [
                                                    _c("input", {
                                                      ref: "fileInput",
                                                      staticClass:
                                                        "form-control",
                                                      attrs: {
                                                        type: "file",
                                                        accept:
                                                          "application/msword, application/vnd.ms-excel, application/vnd.ms-powerpoint,application/vnd.openxmlformats-officedocument.wordprocessingml.document, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.openxmlformats-officedocument.presentationml.slideshow, text/plain, application/pdf, image/*",
                                                      },
                                                      on: {
                                                        change: _vm.upload,
                                                      },
                                                    }),
                                                  ]
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "small",
                                                  { staticClass: "text-muted" },
                                                  [
                                                    _vm._v(
                                                      "File yang diterima adalah Word, Excel, Powerpoint, PDF dan gambar/foto"
                                                    ),
                                                  ]
                                                ),
                                              ]
                                            )
                                          : _vm.form.format == "link"
                                          ? _c(
                                              "div",
                                              { staticClass: "form-group" },
                                              [
                                                _c("h5", [
                                                  _vm._v("Link dokumen: "),
                                                ]),
                                                _vm._v(" "),
                                                _c("input", {
                                                  directives: [
                                                    {
                                                      name: "model",
                                                      rawName: "v-model",
                                                      value: _vm.form.link,
                                                      expression: "form.link",
                                                    },
                                                  ],
                                                  staticClass: "form-control",
                                                  attrs: {
                                                    type: "text",
                                                    name: "link",
                                                    placeholder:
                                                      "Silahkan masukkan link",
                                                  },
                                                  domProps: {
                                                    value: _vm.form.link,
                                                  },
                                                  on: {
                                                    input: function ($event) {
                                                      if (
                                                        $event.target.composing
                                                      ) {
                                                        return
                                                      }
                                                      _vm.$set(
                                                        _vm.form,
                                                        "link",
                                                        $event.target.value
                                                      )
                                                    },
                                                  },
                                                }),
                                                _vm._v(" "),
                                                _c(
                                                  "small",
                                                  { staticClass: "text-muted" },
                                                  [
                                                    _vm._v(
                                                      "Silahkan masukkan link ke dokumen"
                                                    ),
                                                  ]
                                                ),
                                              ]
                                            )
                                          : _vm._e(),
                                      ])
                                    : _vm._e(),
                                ])
                              : _vm._e(),
                          ])
                        : _vm._e(),
                    ]),
                  ]),
                  _vm._v(" "),
                  _vm.itemDataStat == "success"
                    ? _c("div", [
                        _vm.form.id_surat_kode != ""
                          ? _c(
                              "div",
                              [
                                _c("form-info"),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  { staticClass: "card card-body" },
                                  [
                                    _c("form-button", {
                                      attrs: {
                                        cancelState: "methods",
                                        formValidation: "form",
                                      },
                                      on: { cancelClick: _vm.back },
                                    }),
                                  ],
                                  1
                                ),
                              ],
                              1
                            )
                          : _vm._e(),
                      ])
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.form.id_surat_kode == ""
                    ? _c(
                        "div",
                        { staticClass: "card card-body" },
                        [
                          _c("form-button", {
                            attrs: {
                              cancelState: "methods",
                              isSingleButton: true,
                            },
                            on: { cancelClick: _vm.back },
                          }),
                        ],
                        1
                      )
                    : _vm._e(),
                ]
              ),
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
            content: _vm.modalContent,
            color: _vm.modalColor,
          },
          on: {
            batal: _vm.modalTutup,
            tutup: _vm.modalTutup,
            successOk: _vm.modalTutup,
            failOk: _vm.modalTutup,
            backgroundClick: _vm.modalBackgroundClick,
          },
        },
        [
          _c("template", { slot: "modal-title" }, [
            _vm._v("\n\t\t\t" + _vm._s(_vm.modalTitle) + "\n\t\t"),
          ]),
          _vm._v(" "),
          _c(
            "template",
            { slot: "modal-body2" },
            [
              _c("form-kategori", {
                attrs: { id_cu: _vm.id_cu },
                on: { cancelClick: _vm.modalTutup },
              }),
            ],
            1
          ),
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
]
render._withStripped = true



/***/ }),

/***/ "./resources/assets/js/components/ImageUpload.vue":
/*!********************************************************!*\
  !*** ./resources/assets/js/components/ImageUpload.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ImageUpload_vue_vue_type_template_id_319f68d5___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ImageUpload.vue?vue&type=template&id=319f68d5& */ "./resources/assets/js/components/ImageUpload.vue?vue&type=template&id=319f68d5&");
/* harmony import */ var _ImageUpload_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ImageUpload.vue?vue&type=script&lang=js& */ "./resources/assets/js/components/ImageUpload.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ImageUpload_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ImageUpload_vue_vue_type_template_id_319f68d5___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ImageUpload_vue_vue_type_template_id_319f68d5___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/components/ImageUpload.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/ImageUpload.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/assets/js/components/ImageUpload.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageUpload_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./ImageUpload.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/ImageUpload.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageUpload_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/ImageUpload.vue?vue&type=template&id=319f68d5&":
/*!***************************************************************************************!*\
  !*** ./resources/assets/js/components/ImageUpload.vue?vue&type=template&id=319f68d5& ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageUpload_vue_vue_type_template_id_319f68d5___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./ImageUpload.vue?vue&type=template&id=319f68d5& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/ImageUpload.vue?vue&type=template&id=319f68d5&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageUpload_vue_vue_type_template_id_319f68d5___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageUpload_vue_vue_type_template_id_319f68d5___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/assets/js/components/wajibBadge.vue":
/*!*******************************************************!*\
  !*** ./resources/assets/js/components/wajibBadge.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wajibBadge_vue_vue_type_template_id_2f7dfb81___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wajibBadge.vue?vue&type=template&id=2f7dfb81& */ "./resources/assets/js/components/wajibBadge.vue?vue&type=template&id=2f7dfb81&");
/* harmony import */ var _wajibBadge_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./wajibBadge.vue?vue&type=script&lang=js& */ "./resources/assets/js/components/wajibBadge.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _wajibBadge_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _wajibBadge_vue_vue_type_template_id_2f7dfb81___WEBPACK_IMPORTED_MODULE_0__["render"],
  _wajibBadge_vue_vue_type_template_id_2f7dfb81___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/components/wajibBadge.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/wajibBadge.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/assets/js/components/wajibBadge.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_wajibBadge_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./wajibBadge.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/wajibBadge.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_wajibBadge_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/wajibBadge.vue?vue&type=template&id=2f7dfb81&":
/*!**************************************************************************************!*\
  !*** ./resources/assets/js/components/wajibBadge.vue?vue&type=template&id=2f7dfb81& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_wajibBadge_vue_vue_type_template_id_2f7dfb81___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./wajibBadge.vue?vue&type=template&id=2f7dfb81& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/wajibBadge.vue?vue&type=template&id=2f7dfb81&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_wajibBadge_vue_vue_type_template_id_2f7dfb81___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_wajibBadge_vue_vue_type_template_id_2f7dfb81___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/assets/js/helpers/form.js":
/*!*********************************************!*\
  !*** ./resources/assets/js/helpers/form.js ***!
  \*********************************************/
/*! exports provided: toMulipartedForm, objectToFormData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toMulipartedForm", function() { return toMulipartedForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "objectToFormData", function() { return objectToFormData; });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function toMulipartedForm(form, mode) {
  if (mode === 'edit' && typeof form.image === 'string') {
    var temp = JSON.parse(JSON.stringify(form));
    delete temp.image;
    return temp;
  } else {
    return objectToFormData(form);
  }
}
function objectToFormData(obj, form, namespace) {
  var fd = form || new FormData();
  var formKey;

  for (var property in obj) {
    if (obj.hasOwnProperty(property)) {
      if (namespace) {
        formKey = namespace + '[' + property + ']';
      } else {
        formKey = property;
      }

      if (obj[property] instanceof Array) {
        for (var i = 0; i < obj[property].length; i++) {
          objectToFormData(obj[property][i], fd, "".concat(property, "[").concat(i, "]"));
        }
      } else if (_typeof(obj[property]) === 'object' && !(obj[property] instanceof File)) {
        objectToFormData(obj[property], fd, property);
      } else {
        fd.append(formKey, obj[property]);
      }
    }
  }

  return fd;
}

/***/ }),

/***/ "./resources/assets/js/views/surat/form.vue":
/*!**************************************************!*\
  !*** ./resources/assets/js/views/surat/form.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _form_vue_vue_type_template_id_2d2b9ac3___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form.vue?vue&type=template&id=2d2b9ac3& */ "./resources/assets/js/views/surat/form.vue?vue&type=template&id=2d2b9ac3&");
/* harmony import */ var _form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form.vue?vue&type=script&lang=js& */ "./resources/assets/js/views/surat/form.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _form_vue_vue_type_template_id_2d2b9ac3___WEBPACK_IMPORTED_MODULE_0__["render"],
  _form_vue_vue_type_template_id_2d2b9ac3___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/views/surat/form.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/views/surat/form.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/assets/js/views/surat/form.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./form.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/surat/form.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/views/surat/form.vue?vue&type=template&id=2d2b9ac3&":
/*!*********************************************************************************!*\
  !*** ./resources/assets/js/views/surat/form.vue?vue&type=template&id=2d2b9ac3& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_template_id_2d2b9ac3___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./form.vue?vue&type=template&id=2d2b9ac3& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/surat/form.vue?vue&type=template&id=2d2b9ac3&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_template_id_2d2b9ac3___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_template_id_2d2b9ac3___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);