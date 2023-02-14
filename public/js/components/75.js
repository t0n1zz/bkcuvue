(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[75],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/ImageUpload.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/ImageUpload.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
    image_cloud: {
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
        vm.image = e.target.result;
        // this.$emit('input', vm.image)
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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/artikel/form.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/views/artikel/form.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _components_pageHeader_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/pageHeader.vue */ "./resources/assets/js/components/pageHeader.vue");
/* harmony import */ var _helpers_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../helpers/form */ "./resources/assets/js/helpers/form.js");
/* harmony import */ var _components_ImageUpload_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/ImageUpload.vue */ "./resources/assets/js/components/ImageUpload.vue");
/* harmony import */ var _components_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/modal */ "./resources/assets/js/components/modal.vue");
/* harmony import */ var _components_message_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/message.vue */ "./resources/assets/js/components/message.vue");
/* harmony import */ var _components_formButton_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/formButton.vue */ "./resources/assets/js/components/formButton.vue");
/* harmony import */ var _components_formInfo_vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/formInfo.vue */ "./resources/assets/js/components/formInfo.vue");
/* harmony import */ var _formKategori_vue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./formKategori.vue */ "./resources/assets/js/views/artikel/formKategori.vue");
/* harmony import */ var _formPenulis_vue__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./formPenulis.vue */ "./resources/assets/js/views/artikel/formPenulis.vue");
/* harmony import */ var _helpers_auth__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../helpers/auth */ "./resources/assets/js/helpers/auth.js");
/* harmony import */ var _helpers_url_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../helpers/url.js */ "./resources/assets/js/helpers/url.js");
/* harmony import */ var _components_wajibBadge_vue__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/wajibBadge.vue */ "./resources/assets/js/components/wajibBadge.vue");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }













/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    pageHeader: _components_pageHeader_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    appModal: _components_modal__WEBPACK_IMPORTED_MODULE_4__["default"],
    appImageUpload: _components_ImageUpload_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    message: _components_message_vue__WEBPACK_IMPORTED_MODULE_5__["default"],
    formButton: _components_formButton_vue__WEBPACK_IMPORTED_MODULE_6__["default"],
    formInfo: _components_formInfo_vue__WEBPACK_IMPORTED_MODULE_7__["default"],
    formKategori: _formKategori_vue__WEBPACK_IMPORTED_MODULE_8__["default"],
    formPenulis: _formPenulis_vue__WEBPACK_IMPORTED_MODULE_9__["default"],
    wajibBadge: _components_wajibBadge_vue__WEBPACK_IMPORTED_MODULE_12__["default"]
  },
  data: function data() {
    return {
      title: 'Tambah Artikel',
      titleDesc: 'Menambah artikel baru',
      titleIcon: 'icon-plus3',
      level2Title: 'Artikel',
      kelas: 'artikel',
      id_cu: '',
      utama: '',
      UploadAdapter: function UploadAdapter(loader) {
        var _this = this;
        this.loader = loader;
        this.upload = function () {
          var body = new FormData();
          var user = Object(_helpers_auth__WEBPACK_IMPORTED_MODULE_10__["getLocalUser"])();
          var token = user.token;
          body.append('gambar', _this.loader.file);
          return fetch(_helpers_url_js__WEBPACK_IMPORTED_MODULE_11__["url_config"].api_url + 'artikel/upload', {
            headers: {
              "Authorization": 'Bearer ' + token
            },
            body: body,
            method: 'POST'
          }).then(function (response) {
            return response.json();
          }).then(function (downloadUrl) {
            return {
              "default": downloadUrl
            };
          })["catch"](function (error) {
            console.log(error);
          });
        };
        this.abort = function () {
          console.log('Abort upload.');
        };
      },
      modalShow: false,
      modalState: '',
      modalTitle: '',
      modalColor: '',
      modalContent: '',
      submited: false,
      submitedKategori: false,
      submitedPenulis: false
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
      this.changeCU(this.currentUser.id_cu);
      f;
    }
  },
  watch: {
    formStat: function formStat(value) {
      if (value === "success") {
        if (this.$route.meta.mode !== 'edit') {
          this.form.id_cu = this.currentUser.id_cu;
        } else {
          this.checkUser('update_artikel', this.form.id_cu);
        }
        if (this.form.id_cu !== undefined) {
          this.changeCU(this.form.id_cu);
        }
      }
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
    },
    updateKategoriStat: function updateKategoriStat(value) {
      this.modalState = value;
      this.modalColor = '';
      if (value === "success") {
        this.modalTitle = this.updateKategoriResponse.message;
        this.$store.dispatch('artikelKategori/getCu', this.id_cu);
        this.form.id_artikel_kategori = this.updateKategoriResponse.id;
      } else {
        this.modalTitle = 'Oops terjadi kesalahan :(';
        this.modalContent = this.updateKategoriResponse.message;
      }
    },
    updatePenulisStat: function updatePenulisStat(value) {
      this.modalState = value;
      this.modalColor = '';
      if (value === "success") {
        this.modalTitle = this.updatePenulisResponse.message;
        this.$store.dispatch('artikelPenulis/getCu', this.id_cu);
        this.form.id_artikel_penulis = this.updatePenulisResponse.id;
      } else {
        this.modalTitle = 'Oops terjadi kesalahan :(';
        this.modalContent = this.updatePenulisResponse.message;
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
        this.title = 'Ubah Artikel';
        this.titleDesc = 'Mengubah artikel';
        this.titleIcon = 'icon-pencil5';
      } else {
        this.title = 'Tambah Artikel';
        this.titleDesc = 'Menambah artikel';
        this.titleIcon = 'icon-plus3';
        this.$store.dispatch(this.kelas + '/create');
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
    save: function save() {
      var _this2 = this;
      var formData = Object(_helpers_form__WEBPACK_IMPORTED_MODULE_2__["toMulipartedForm"])(this.form, this.$route.meta.mode);
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
    changeCU: function changeCU(id) {
      this.$store.dispatch('artikelPenulis/getCu', id);
      this.$store.dispatch('artikelKategori/getCu', id);
    },
    back: function back() {
      if (this.currentUser.id_cu == 0) {
        this.$router.push({
          name: this.kelas + 'Cu',
          params: {
            cu: 'semua'
          }
        });
      } else {
        this.$router.push({
          name: this.kelas + 'Cu',
          params: {
            cu: this.currentUser.id_cu
          }
        });
      }
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
      } else if (this.modalState === 'loading') {
        // do nothing
      } else {
        this.modalShow = false;
      }
    },
    modalOpen_Penulis: function modalOpen_Penulis() {
      this.id_cu = this.form.id_cu;
      this.modalShow = true;
      this.modalState = 'normal1';
      this.modalColor = 'bg-primary';
      this.modalTitle = 'Tambah penulis artikel';
    },
    modalOpen_Kategori: function modalOpen_Kategori() {
      this.id_cu = this.form.id_cu;
      this.modalShow = true;
      this.modalState = 'normal2';
      this.modalColor = 'bg-primary';
      this.modalTitle = 'Tambah kategori artikel';
    },
    processFile: function processFile(event) {
      this.form.gambar = event.target.files[0];
    }
  },
  computed: _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('auth', {
    currentUser: 'currentUser'
  })), Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('artikel', {
    form: 'data',
    formStat: 'dataStat',
    rules: 'rules',
    options: 'options',
    updateResponse: 'update',
    updateStat: 'updateStat'
  })), Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('cu', {
    modelCU: 'headerDataS',
    modelCUStat: 'headerDataStatS'
  })), Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('artikelKategori', {
    modelKategori: 'dataS',
    modelKategoriStat: 'dataStatS',
    updateKategoriResponse: 'update',
    updateKategoriStat: 'updateStat'
  })), Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('artikelPenulis', {
    modelPenulis: 'dataS',
    modelPenulisStat: 'dataStatS',
    updatePenulisResponse: 'update',
    updatePenulisStat: 'updateStat'
  }))
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/artikel/formKategori.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/views/artikel/formKategori.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_message_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/message.vue */ "./resources/assets/js/components/message.vue");
/* harmony import */ var _components_formButton_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/formButton.vue */ "./resources/assets/js/components/formButton.vue");
/* harmony import */ var _components_formInfo_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/formInfo.vue */ "./resources/assets/js/components/formInfo.vue");
/* harmony import */ var _components_wajibBadge_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/wajibBadge.vue */ "./resources/assets/js/components/wajibBadge.vue");




/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['id_cu'],
  components: {
    message: _components_message_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    formButton: _components_formButton_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    formInfo: _components_formInfo_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    wajibBadge: _components_wajibBadge_vue__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  data: function data() {
    return {
      kelas: 'artikelKategori',
      form: {
        id_cu: '',
        name: '',
        deskripsi: ''
      },
      submited: false,
      cancelTitle: 'Tutup',
      cancelIcon: 'icon-cross',
      cancelState: 'methods'
    };
  },
  methods: {
    save: function save() {
      var _this = this;
      this.form.id_cu = this.id_cu;
      this.$validator.validateAll('form').then(function (result) {
        if (result) {
          _this.$store.dispatch(_this.kelas + '/store', _this.form);
        } else {
          window.scrollTo(0, 0);
          _this.submited = true;
        }
      });
    },
    cancelClick: function cancelClick() {
      this.$emit('cancelClick');
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/artikel/formPenulis.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/views/artikel/formPenulis.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_ImageUpload_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/ImageUpload.vue */ "./resources/assets/js/components/ImageUpload.vue");
/* harmony import */ var _helpers_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helpers/form */ "./resources/assets/js/helpers/form.js");
/* harmony import */ var _components_message_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/message.vue */ "./resources/assets/js/components/message.vue");
/* harmony import */ var _components_formButton_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/formButton.vue */ "./resources/assets/js/components/formButton.vue");
/* harmony import */ var _components_formInfo_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/formInfo.vue */ "./resources/assets/js/components/formInfo.vue");
/* harmony import */ var _components_wajibBadge_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/wajibBadge.vue */ "./resources/assets/js/components/wajibBadge.vue");






/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['id_cu'],
  components: {
    appImageUpload: _components_ImageUpload_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    message: _components_message_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    formButton: _components_formButton_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    formInfo: _components_formInfo_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
    wajibBadge: _components_wajibBadge_vue__WEBPACK_IMPORTED_MODULE_5__["default"]
  },
  data: function data() {
    return {
      kelas: 'artikelPenulis',
      form: {
        id_cu: '',
        gambar: '',
        name: '',
        deskripsi: ''
      },
      submited: false,
      cancelTitle: 'Tutup',
      cancelIcon: 'icon-cross',
      cancelState: 'methods'
    };
  },
  methods: {
    save: function save() {
      var _this = this;
      this.form.id_cu = this.id_cu;
      this.$validator.validateAll('form').then(function (result) {
        if (result) {
          _this.$store.dispatch(_this.kelas + '/store', _this.form);
        } else {
          window.scrollTo(0, 0);
          _this.submited = true;
        }
      });
    },
    cancelClick: function cancelClick() {
      this.$emit('cancelClick');
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/ImageUpload.vue?vue&type=template&id=319f68d5&":
/*!***************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/ImageUpload.vue?vue&type=template&id=319f68d5& ***!
  \***************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", [_c("div", {
    staticClass: "card"
  }, [_c("div", {
    staticClass: "card-body text-center"
  }, [_vm.image == "" && _vm.image_temp == "" && _vm.image_cloud == "" || !_vm.image && !_vm.image_temp && !_vm.image_cloud ? _c("img", {
    staticStyle: {
      width: "15em"
    },
    attrs: {
      src: "/images/no_image.jpg"
    }
  }) : _vm.image == "" && _vm.image_temp !== "" && _vm.image_cloud === "" ? _c("img", {
    staticStyle: {
      width: "15em"
    },
    attrs: {
      src: _vm.image_loc + _vm.image_temp + _vm.image_type
    }
  }) : _vm.image === "" && _vm.image_cloud !== "" ? _c("img", {
    staticStyle: {
      width: "15em"
    },
    attrs: {
      src: "https://drive.google.com/uc?id=" + _vm.image_cloud + "&export=download"
    }
  }) : _c("img", {
    staticStyle: {
      width: "15em"
    },
    attrs: {
      src: _vm.image
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-md-10"
  }, [_c("input", {
    ref: "fileInput",
    staticClass: "form-control",
    attrs: {
      type: "file",
      accept: ".jpg, .jpeg, .png"
    },
    on: {
      change: _vm.upload
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-md-2"
  }, [_c("button", {
    staticClass: "btn btn-light btn-block",
    attrs: {
      type: "button",
      disabled: _vm.image_temp === ""
    },
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.close();
      }
    }
  }, [_c("i", {
    staticClass: "icon-cross"
  }), _vm._v(" Batal")])])])]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/artikel/form.vue?vue&type=template&id=ae166b0c&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/views/artikel/form.vue?vue&type=template&id=ae166b0c&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************/
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
      titleIcon: _vm.titleIcon,
      level: 2,
      level2Title: _vm.level2Title,
      level2Route: _vm.kelas
    },
    on: {
      level2Back: function level2Back($event) {
        return _vm.back();
      }
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "page-content pt-0"
  }, [_c("div", {
    staticClass: "content-wrapper"
  }, [_c("div", {
    staticClass: "content"
  }, [_vm.errors.any("form") && _vm.submited ? _c("message", {
    attrs: {
      title: "Oops, terjadi kesalahan",
      errorItem: _vm.errors.items
    }
  }) : _vm._e(), _vm._v(" "), _c("form", {
    attrs: {
      enctype: "multipart/form-data",
      "data-vv-scope": "form"
    },
    on: {
      submit: function submit($event) {
        $event.preventDefault();
        return _vm.save.apply(null, arguments);
      }
    }
  }, [_c("div", {
    staticClass: "card"
  }, [_c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-md-4"
  }, [_c("div", {
    staticClass: "form-group",
    "class": {
      "has-error": _vm.errors.has("form.name")
    }
  }, [_c("h5", {
    "class": {
      "text-danger": _vm.errors.has("form.name")
    }
  }, [_vm.errors.has("form.name") ? _c("i", {
    staticClass: "icon-cross2"
  }) : _vm._e(), _vm._v("\n\t\t\t\t\t\t\t\t\t\t\tJudul: "), _c("wajib-badge")], 1), _vm._v(" "), _c("input", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required|min:5",
      expression: "'required|min:5'"
    }, {
      name: "model",
      rawName: "v-model",
      value: _vm.form.name,
      expression: "form.name"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      name: "name",
      placeholder: "Silahkan masukkan judul artikel",
      "data-vv-as": "Judul"
    },
    domProps: {
      value: _vm.form.name
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "name", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm.errors.has("form.name") ? _c("small", {
    staticClass: "text-muted text-danger"
  }, [_c("i", {
    staticClass: "icon-arrow-small-right"
  }), _vm._v(" " + _vm._s(_vm.errors.first("form.name")) + "\n\t\t\t\t\t\t\t\t\t\t")]) : _c("small", {
    staticClass: "text-muted"
  }, [_vm._v(" ")])])]), _vm._v(" "), _vm.currentUser.id_cu === 0 ? _c("div", {
    staticClass: "col-md-4"
  }, [_c("div", {
    staticClass: "form-group",
    "class": {
      "has-error": _vm.errors.has("form.id_cu")
    }
  }, [_c("h5", {
    "class": {
      "text-danger": _vm.errors.has("form.id_cu")
    }
  }, [_vm.errors.has("form.id_cu") ? _c("i", {
    staticClass: "icon-cross2"
  }) : _vm._e(), _vm._v("\n\t\t\t\t\t\t\t\t\t\t\tCU: "), _c("wajib-badge")], 1), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.id_cu,
      expression: "form.id_cu"
    }, {
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }],
    staticClass: "form-control",
    attrs: {
      name: "id_cu",
      "data-width": "100%",
      "data-vv-as": "CU",
      disabled: _vm.modelCU.length === 0
    },
    on: {
      change: [function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.form, "id_cu", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }, function ($event) {
        return _vm.changeCU($event.target.value);
      }]
    }
  }, [_c("option", {
    attrs: {
      disabled: "",
      value: ""
    }
  }, [_vm.modelCUStat === "loading" ? _c("span", [_vm._v("Mohon tunggu...")]) : _c("span", [_vm._v("Silahkan pilih CU")])]), _vm._v(" "), _c("option", {
    attrs: {
      value: "0"
    }
  }, [_vm.currentUser.pus ? _c("span", [_vm._v(_vm._s(_vm.currentUser.pus.name))]) : _c("span", [_vm._v("PUSKOPCUINA")])]), _vm._v(" "), _vm._l(_vm.modelCU, function (cu, index) {
    return _c("option", {
      key: index,
      domProps: {
        value: cu.id
      }
    }, [_vm._v(_vm._s(cu.name))]);
  })], 2), _vm._v(" "), _vm.errors.has("form.id_cu") ? _c("small", {
    staticClass: "text-muted text-danger"
  }, [_c("i", {
    staticClass: "icon-arrow-small-right"
  }), _vm._v(" " + _vm._s(_vm.errors.first("form.id_cu")) + "\n\t\t\t\t\t\t\t\t\t\t")]) : _c("small", {
    staticClass: "text-muted"
  }, [_vm._v(" ")])])]) : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "col-md-4"
  }, [_c("div", {
    staticClass: "form-group",
    "class": {
      "has-error": _vm.errors.has("form.id_artikel_penulis")
    }
  }, [_c("h5", {
    "class": {
      "text-danger": _vm.errors.has("form.id_artikel_penulis")
    }
  }, [_vm.errors.has("form.id_artikel_penulis") ? _c("i", {
    staticClass: "icon-cross2"
  }) : _vm._e(), _vm._v("\n\t\t\t\t\t\t\t\t\t\t\tPenulis: "), _c("wajib-badge")], 1), _vm._v(" "), _c("div", {
    staticClass: "input-group"
  }, [_c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.id_artikel_penulis,
      expression: "form.id_artikel_penulis"
    }, {
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }],
    staticClass: "form-control",
    attrs: {
      name: "id_artikel_penulis",
      "data-width": "100%",
      "data-vv-as": "Penulis",
      disabled: _vm.modelPenulis.length === 0
    },
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.form, "id_artikel_penulis", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c("option", {
    attrs: {
      disabled: "",
      value: ""
    }
  }, [_vm.form.id_cu != 0 && _vm.modelPenulis.length == 0 ? _c("span", [_vm._v("Silahkan tambah penulis baru")]) : _vm.form.id_cu == "" && _vm.modelPenulis.length == 0 ? _c("span", [_vm._v("Silahkan pilih CU terlebih dahulu")]) : _c("span", [_vm.modelPenulisStat === "loading" ? _c("span", [_vm._v("Mohon tunggu...")]) : _c("span", [_vm._v("Silahkan pilih penulis")])])]), _vm._v(" "), _vm._l(_vm.modelPenulis, function (penulis) {
    return penulis ? _c("option", {
      domProps: {
        value: penulis.id
      }
    }, [_vm._v(_vm._s(penulis.name))]) : _vm._e();
  })], 2), _vm._v(" "), _c("div", {
    staticClass: "input-group-append"
  }, [_c("button", {
    staticClass: "btn btn-light",
    attrs: {
      type: "button",
      disabled: _vm.form.id_cu === ""
    },
    on: {
      click: _vm.modalOpen_Penulis
    }
  }, [_c("i", {
    staticClass: "icon-plus22"
  })])])]), _vm._v(" "), _vm.errors.has("form.id_artikel_penulis") ? _c("small", {
    staticClass: "text-muted text-danger"
  }, [_c("i", {
    staticClass: "icon-arrow-small-right"
  }), _vm._v(" " + _vm._s(_vm.errors.first("form.id_artikel_penulis")) + "\n\t\t\t\t\t\t\t\t\t\t")]) : _c("small", {
    staticClass: "text-muted"
  }, [_vm._v(" ")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-4"
  }, [_c("div", {
    staticClass: "form-group",
    "class": {
      "has-error": _vm.errors.has("form.id_artikel_kategori")
    }
  }, [_c("h5", {
    "class": {
      "text-danger": _vm.errors.has("form.id_artikel_kategori")
    }
  }, [_vm.errors.has("form.id_artikel_kategori") ? _c("i", {
    staticClass: "icon-cross2"
  }) : _vm._e(), _vm._v("\n\t\t\t\t\t\t\t\t\t\t\tKategori: "), _c("wajib-badge")], 1), _vm._v(" "), _c("div", {
    staticClass: "input-group"
  }, [_c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.id_artikel_kategori,
      expression: "form.id_artikel_kategori"
    }, {
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }],
    staticClass: "form-control",
    attrs: {
      name: "id_artikel_kategori",
      "data-width": "100%",
      disabled: _vm.modelKategori.length === 0,
      "data-vv-as": "Kategori"
    },
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.form, "id_artikel_kategori", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c("option", {
    attrs: {
      disabled: "",
      value: ""
    }
  }, [_vm.form.id_cu != 0 && _vm.modelKategori.length == 0 ? _c("span", [_vm._v("Silahkan tambah kategori baru")]) : _c("span", [_vm.modelKategoriStat === "loading" ? _c("span", [_vm._v("Mohon tunggu...")]) : _c("span", [_vm._v("Silahkan pilih kategori")])])]), _vm._v(" "), _vm._l(_vm.modelKategori, function (kategori) {
    return kategori ? _c("option", {
      domProps: {
        value: kategori.id
      }
    }, [_vm._v(_vm._s(kategori.name))]) : _vm._e();
  })], 2), _vm._v(" "), _c("div", {
    staticClass: "input-group-append"
  }, [_c("button", {
    staticClass: "btn btn-light",
    attrs: {
      type: "button",
      disabled: _vm.form.id_cu === ""
    },
    on: {
      click: _vm.modalOpen_Kategori
    }
  }, [_c("i", {
    staticClass: "icon-plus22"
  })])])]), _vm._v(" "), _vm.errors.has("form.id_artikel_kategori") ? _c("small", {
    staticClass: "text-muted text-danger"
  }, [_c("i", {
    staticClass: "icon-arrow-small-right"
  }), _vm._v(" " + _vm._s(_vm.errors.first("form.id_artikel_kategori")) + "\n\t\t\t\t\t\t\t\t\t\t")]) : _c("small", {
    staticClass: "text-muted"
  }, [_vm._v(" ")])])]), _vm._v(" "), _vm.currentUser.can && _vm.currentUser.can["terbitkan_" + _vm.kelas] ? _c("div", {
    staticClass: "col-md-4"
  }, [_c("div", {
    staticClass: "form-group",
    "class": {
      "has-error": _vm.errors.has("form.terbitkan")
    }
  }, [_c("h5", {
    "class": {
      "text-danger": _vm.errors.has("form.terbitkan")
    }
  }, [_vm.errors.has("form.terbitkan") ? _c("i", {
    staticClass: "icon-cross2"
  }) : _vm._e(), _vm._v("\n\t\t\t\t\t\t\t\t\t\t\tStatus Penerbitan:\n\t\t\t\t\t\t\t\t\t\t")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.terbitkan,
      expression: "form.terbitkan"
    }],
    staticClass: "form-control",
    attrs: {
      name: "terbitkan",
      "data-width": "100%"
    },
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.form, "terbitkan", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c("option", {
    attrs: {
      disabled: "",
      value: ""
    }
  }, [_vm._v("Silahkan pilih status penerbitan")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "1"
    }
  }, [_vm._v("Terbitkan artikel")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "0"
    }
  }, [_vm._v("Tidak Terbitkan artikel")])]), _vm._v(" "), _c("br"), _vm._v(" "), _vm.errors.has("form.terbitkan") ? _c("small", {
    staticClass: "text-muted text-danger"
  }, [_c("i", {
    staticClass: "icon-arrow-small-right"
  }), _vm._v(" " + _vm._s(_vm.errors.first("form.terbitkan")) + "\n\t\t\t\t\t\t\t\t\t\t")]) : _c("small", {
    staticClass: "text-muted"
  }, [_vm._v(" \n\t\t\t\t\t\t\t\t\t\t")])])]) : _vm._e(), _vm._v(" "), _vm.currentUser.can && _vm.currentUser.can["utamakan_" + _vm.kelas] ? _c("div", {
    staticClass: "col-md-4"
  }, [_c("div", {
    staticClass: "form-group",
    "class": {
      "has-error": _vm.errors.has("form.utamakan")
    }
  }, [_c("h5", {
    "class": {
      "text-danger": _vm.errors.has("form.utamakan")
    }
  }, [_vm.errors.has("form.utamakan") ? _c("i", {
    staticClass: "icon-cross2"
  }) : _vm._e(), _vm._v("\n\t\t\t\t\t\t\t\t\t\t\tUtamakan: "), _c("wajib-badge")], 1), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.utamakan,
      expression: "form.utamakan"
    }, {
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }],
    staticClass: "form-control",
    attrs: {
      name: "utamakan",
      "data-width": "100%",
      "data-vv-as": "utamakan"
    },
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.form, "utamakan", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c("option", {
    attrs: {
      disabled: "",
      value: ""
    }
  }, [_vm._v("Silahkan pilih tipe")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "1"
    }
  }, [_vm._v("Jadikan artikel utama")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "0"
    }
  }, [_vm._v("Tidak jadikan artikel utama")])]), _vm._v(" "), _c("br"), _vm._v(" "), _vm.errors.has("form.utamakan") ? _c("small", {
    staticClass: "text-muted text-danger"
  }, [_c("i", {
    staticClass: "icon-arrow-small-right"
  }), _vm._v(" " + _vm._s(_vm.errors.first("form.utamakan")) + "\n\t\t\t\t\t\t\t\t\t\t")]) : _c("small", {
    staticClass: "text-muted"
  }, [_vm._v(" \n\t\t\t\t\t\t\t\t\t\t")])])]) : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "col-md-12"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("h5", [_vm._v("Gambar Utama:")]), _vm._v(" "), _c("app-image-upload", {
    attrs: {
      image_loc: "/images/artikel/",
      image_temp: _vm.form.gambar,
      image_cloud: _vm.form.gambar_cloud
    },
    model: {
      value: _vm.form.gambar,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "gambar", $$v);
      },
      expression: "form.gambar"
    }
  })], 1)]), _vm._v(" "), _vm._m(0), _vm._v(" "), _c("div", {
    staticClass: "col-md-12"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("h5", [_vm._v("Isi Artikel:")]), _vm._v(" "), _c("ckeditor", {
    attrs: {
      type: "classic",
      "upload-adapter": _vm.UploadAdapter
    },
    model: {
      value: _vm.form.content,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "content", $$v);
      },
      expression: "form.content"
    }
  })], 1)])])])]), _vm._v(" "), _c("form-info"), _vm._v(" "), _c("div", {
    staticClass: "card card-body"
  }, [_c("form-button", {
    attrs: {
      cancelState: "methods",
      formValidation: "form"
    },
    on: {
      cancelClick: _vm.back
    }
  })], 1)], 1)], 1)])]), _vm._v(" "), _c("app-modal", {
    attrs: {
      show: _vm.modalShow,
      state: _vm.modalState,
      title: _vm.modalTitle,
      content: _vm.modalContent,
      color: _vm.modalColor
    },
    on: {
      batal: _vm.modalTutup,
      tutup: _vm.modalTutup,
      successOk: _vm.modalTutup,
      failOk: _vm.modalTutup,
      backgroundClick: _vm.modalBackgroundClick
    }
  }, [_c("template", {
    slot: "modal-title"
  }, [_vm._v("\n\t\t\t" + _vm._s(_vm.modalTitle) + "\n\t\t")]), _vm._v(" "), _c("template", {
    slot: "modal-body1"
  }, [_c("form-penulis", {
    attrs: {
      id_cu: _vm.id_cu
    },
    on: {
      cancelClick: _vm.modalTutup
    }
  })], 1), _vm._v(" "), _c("template", {
    slot: "modal-body2"
  }, [_c("form-kategori", {
    attrs: {
      id_cu: _vm.id_cu
    },
    on: {
      cancelClick: _vm.modalTutup
    }
  })], 1)], 2)], 1);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "col-md-12"
  }, [_c("br")]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/artikel/formKategori.vue?vue&type=template&id=550edd80&":
/*!*******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/views/artikel/formKategori.vue?vue&type=template&id=550edd80& ***!
  \*******************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", [_c("form", {
    attrs: {
      "data-vv-scope": "form"
    },
    on: {
      submit: function submit($event) {
        $event.preventDefault();
        return _vm.save.apply(null, arguments);
      }
    }
  }, [_vm.errors.any("form") && _vm.submited ? _c("message", {
    attrs: {
      title: "Oops terjadi kesalahan",
      errorItem: _vm.errors.items
    }
  }) : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "form-group",
    "class": {
      "has-error": _vm.errors.has("form.kategoriNama")
    }
  }, [_c("h5", {
    "class": {
      "text-danger": _vm.errors.has("form.name")
    }
  }, [_vm.errors.has("form.name") ? _c("i", {
    staticClass: "icon-cross2"
  }) : _vm._e(), _vm._v("\n\t\t\t\tNama: "), _c("wajib-badge")], 1), _vm._v(" "), _c("input", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }, {
      name: "model",
      rawName: "v-model",
      value: _vm.form.name,
      expression: "form.name"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      name: "name",
      placeholder: "Silahkan masukkan name kategori",
      "data-vv-as": "Nama"
    },
    domProps: {
      value: _vm.form.name
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "name", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm.errors.has("form.name") ? _c("small", {
    staticClass: "text-muted text-danger"
  }, [_c("i", {
    staticClass: "icon-arrow-small-right"
  }), _vm._v(" " + _vm._s(_vm.errors.first("form.name")) + "\n\t\t\t")]) : _c("small", {
    staticClass: "text-muted"
  }, [_vm._v(" \n\t\t\t")])]), _vm._v(" "), _c("div", {
    staticClass: "form-group"
  }, [_c("h5", [_vm._v("\n\t\t\t\tKeterangan:\n\t\t\t")]), _vm._v(" "), _c("textarea", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.deskripsi,
      expression: "form.deskripsi"
    }],
    staticClass: "form-control",
    attrs: {
      rows: "5",
      type: "text",
      name: "deskripsi",
      placeholder: "Silahkan masukkan keterangan kategori"
    },
    domProps: {
      value: _vm.form.deskripsi
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "deskripsi", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("hr"), _vm._v(" "), _c("form-button", {
    attrs: {
      cancelTitle: _vm.cancelTitle,
      cancelIcon: _vm.cancelIcon,
      cancelState: _vm.cancelState,
      formValidation: "form"
    },
    on: {
      cancelClick: _vm.cancelClick
    }
  })], 1)]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/artikel/formPenulis.vue?vue&type=template&id=53af71f0&":
/*!******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/views/artikel/formPenulis.vue?vue&type=template&id=53af71f0& ***!
  \******************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", [_c("form", {
    attrs: {
      enctype: "multipart/form-data",
      "data-vv-scope": "form"
    },
    on: {
      submit: function submit($event) {
        $event.preventDefault();
        return _vm.save.apply(null, arguments);
      }
    }
  }, [_vm.errors.any("form") && _vm.submited ? _c("message", {
    attrs: {
      title: "Oops terjadi kesalahan",
      errorItem: _vm.errors.items
    }
  }) : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "form-group"
  }, [_c("h5", [_vm._v("Foto:")]), _vm._v(" "), _c("app-image-upload", {
    attrs: {
      image_loc: "/images/artikel/"
    },
    model: {
      value: _vm.form.gambar,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "gambar", $$v);
      },
      expression: "form.gambar"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "form-group",
    "class": {
      "has-error": _vm.errors.has("form.name")
    }
  }, [_c("h5", {
    "class": {
      "text-danger": _vm.errors.has("form.name")
    }
  }, [_vm.errors.has("form.name") ? _c("i", {
    staticClass: "icon-cross2"
  }) : _vm._e(), _vm._v("\n\t\t\t\tNama: "), _c("wajib-badge")], 1), _vm._v(" "), _c("input", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }, {
      name: "model",
      rawName: "v-model",
      value: _vm.form.name,
      expression: "form.name"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      name: "name",
      placeholder: "Silahkan masukkan name kategori",
      "data-vv-as": "Nama"
    },
    domProps: {
      value: _vm.form.name
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "name", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm.errors.has("form.name") ? _c("small", {
    staticClass: "text-muted text-danger"
  }, [_c("i", {
    staticClass: "icon-arrow-small-right"
  }), _vm._v(" " + _vm._s(_vm.errors.first("form.name")) + "\n\t\t\t")]) : _c("small", {
    staticClass: "text-muted"
  }, [_vm._v(" \n\t\t\t")])]), _vm._v(" "), _c("div", {
    staticClass: "form-group"
  }, [_c("h5", [_vm._v("\n\t\t\t\tKeterangan:\n\t\t\t")]), _vm._v(" "), _c("textarea", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.deskripsi,
      expression: "form.deskripsi"
    }],
    staticClass: "form-control",
    attrs: {
      rows: "5",
      type: "text",
      name: "deskripsi",
      placeholder: "Silahkan masukkan keterangan kategori"
    },
    domProps: {
      value: _vm.form.deskripsi
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "deskripsi", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("hr"), _vm._v(" "), _c("form-button", {
    attrs: {
      cancelTitle: _vm.cancelTitle,
      cancelIcon: _vm.cancelIcon,
      cancelState: _vm.cancelState,
      formValidation: "form"
    },
    on: {
      cancelClick: _vm.cancelClick
    }
  })], 1)]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./public/css/admin/ckeditor-document-style.css?vue&type=style&index=0&id=ae166b0c&lang=css&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./public/css/admin/ckeditor-document-style.css?vue&type=style&index=0&id=ae166b0c&lang=css&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".document-editor[data-v-ae166b0c] {\r\n  border: 1px solid var(--ck-color-base-border);\r\n  border-radius: var(--ck-border-radius);\r\n\r\n  /* Set vertical boundaries for the document editor. */\r\n  max-height: 700px;\r\n\r\n  /* This element is a flex container for easier rendering. */\r\n  display: flex;\r\n  flex-flow: column nowrap;\n}\n.document-editor__toolbar[data-v-ae166b0c] {\r\n  /* Make sure the toolbar container is always above the editable. */\r\n  z-index: 1;\r\n\r\n  /* Create the illusion of the toolbar floating over the editable. */\r\n  box-shadow: 0 0 5px hsla( 0,0%,0%,.2 );\r\n\r\n  /* Use the CKEditor CSS variables to keep the UI consistent. */\r\n  border-bottom: 1px solid var(--ck-color-toolbar-border);\n}\r\n\r\n/* Adjust the look of the toolbar inside the container. */\n.document-editor__toolbar .ck-toolbar[data-v-ae166b0c] {\r\n  border: 0;\r\n  border-radius: 0;\n}\r\n\r\n/* Make the editable container look like the inside of a native word processor application. */\n.document-editor__editable-container[data-v-ae166b0c] {\r\n  padding: calc( 2 * var(--ck-spacing-large) );\r\n  background: var(--ck-color-base-foreground);\r\n\r\n  /* Make it possible to scroll the \"page\" of the edited content. */\r\n  overflow-y: scroll;\n}\n.document-editor__editable-container .ck-editor__editable[data-v-ae166b0c] {\r\n  /* Set the dimensions of the \"page\". */\r\n  width: 98%;\r\n  /* min-height: 21cm; */\r\n\r\n  /* Keep the \"page\" off the boundaries of the container. */\r\n  padding: 1cm 2cm 2cm;\r\n\r\n  border: 1px hsl( 0,0%,82.7% ) solid;\r\n  border-radius: var(--ck-border-radius);\r\n  background: white;\r\n\r\n  /* The \"page\" should cast a slight shadow (3D illusion). */\r\n  box-shadow: 0 0 5px hsla( 0,0%,0%,.1 );\r\n\r\n  /* Center the \"page\". */\r\n  margin: 0 auto;\n}\r\n\r\n/* Set the default font for the \"page\" of the content. */\n.document-editor .ck-content[data-v-ae166b0c],\r\n.document-editor .ck-heading-dropdown .ck-list .ck-button__label[data-v-ae166b0c] {\r\n  font: 16px/1.6 \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n}\r\n\r\n/* Adjust the headings dropdown to host some larger heading styles. */\n.document-editor .ck-heading-dropdown .ck-list .ck-button__label[data-v-ae166b0c] {\r\n  line-height: calc( 1.7 * var(--ck-line-height-base) * var(--ck-font-size-base) );\r\n  min-width: 6em;\n}\r\n\r\n/* Scale down all heading previews because they are way too big to be presented in the UI.\r\nPreserve the relative scale, though. */\n.document-editor .ck-heading-dropdown .ck-list .ck-button:not(.ck-heading_paragraph) .ck-button__label[data-v-ae166b0c] {\r\n  transform: scale(0.8);\r\n  transform-origin: left;\n}\r\n\r\n/* Set the styles for \"Heading 1\". */\n.document-editor .ck-content h2[data-v-ae166b0c],\r\n.document-editor .ck-heading-dropdown .ck-heading_heading1 .ck-button__label[data-v-ae166b0c] {\r\n  font-size: 2.18em;\r\n  font-weight: normal;\n}\n.document-editor .ck-content h2[data-v-ae166b0c] {\r\n  line-height: 1.37em;\r\n  padding-top: .342em;\r\n  margin-bottom: .142em;\n}\r\n\r\n/* Set the styles for \"Heading 2\". */\n.document-editor .ck-content h3[data-v-ae166b0c],\r\n.document-editor .ck-heading-dropdown .ck-heading_heading2 .ck-button__label[data-v-ae166b0c] {\r\n  font-size: 1.75em;\r\n  font-weight: normal;\r\n  color: hsl( 203, 100%, 50% );\n}\n.document-editor .ck-heading-dropdown .ck-heading_heading2.ck-on .ck-button__label[data-v-ae166b0c] {\r\n  color: var(--ck-color-list-button-on-text);\n}\r\n\r\n/* Set the styles for \"Heading 2\". */\n.document-editor .ck-content h3[data-v-ae166b0c] {\r\n  line-height: 1.86em;\r\n  padding-top: .171em;\r\n  margin-bottom: .357em;\n}\r\n\r\n/* Set the styles for \"Heading 3\". */\n.document-editor .ck-content h4[data-v-ae166b0c],\r\n.document-editor .ck-heading-dropdown .ck-heading_heading3 .ck-button__label[data-v-ae166b0c] {\r\n  font-size: 1.31em;\r\n  font-weight: bold;\n}\n.document-editor .ck-content h4[data-v-ae166b0c] {\r\n  line-height: 1.24em;\r\n  padding-top: .286em;\r\n  margin-bottom: .952em;\n}\r\n\r\n/* Set the styles for \"Paragraph\". */\n.document-editor .ck-content p[data-v-ae166b0c] {\r\n  font-size: 1em;\r\n  line-height: 1.63em;\r\n  padding-top: .5em;\r\n  margin-bottom: 1.13em;\n}\r\n\r\n/* Make the block quoted text serif with some additional spacing. */\n.document-editor .ck-content blockquote[data-v-ae166b0c] {\r\n  font-family: Georgia, serif;\r\n  margin-left: calc( 2 * var(--ck-spacing-large) );\r\n  margin-right: calc( 2 * var(--ck-spacing-large) );\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./public/css/admin/ckeditor-document-style.css?vue&type=style&index=0&id=ae166b0c&lang=css&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./public/css/admin/ckeditor-document-style.css?vue&type=style&index=0&id=ae166b0c&lang=css&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!./ckeditor-document-style.css?vue&type=style&index=0&id=ae166b0c&lang=css&scoped=true& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./public/css/admin/ckeditor-document-style.css?vue&type=style&index=0&id=ae166b0c&lang=css&scoped=true&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./public/css/admin/ckeditor-document-style.css?vue&type=style&index=0&id=ae166b0c&lang=css&scoped=true&":
/*!***************************************************************************************************************!*\
  !*** ./public/css/admin/ckeditor-document-style.css?vue&type=style&index=0&id=ae166b0c&lang=css&scoped=true& ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_ckeditor_document_style_css_vue_type_style_index_0_id_ae166b0c_lang_css_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!./ckeditor-document-style.css?vue&type=style&index=0&id=ae166b0c&lang=css&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./public/css/admin/ckeditor-document-style.css?vue&type=style&index=0&id=ae166b0c&lang=css&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_ckeditor_document_style_css_vue_type_style_index_0_id_ae166b0c_lang_css_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_ckeditor_document_style_css_vue_type_style_index_0_id_ae166b0c_lang_css_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_ckeditor_document_style_css_vue_type_style_index_0_id_ae166b0c_lang_css_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_ckeditor_document_style_css_vue_type_style_index_0_id_ae166b0c_lang_css_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


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
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageUpload_vue_vue_type_template_id_319f68d5___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../node_modules/vue-loader/lib??vue-loader-options!./ImageUpload.vue?vue&type=template&id=319f68d5& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/ImageUpload.vue?vue&type=template&id=319f68d5&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageUpload_vue_vue_type_template_id_319f68d5___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageUpload_vue_vue_type_template_id_319f68d5___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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

/***/ "./resources/assets/js/views/artikel/form.vue":
/*!****************************************************!*\
  !*** ./resources/assets/js/views/artikel/form.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _form_vue_vue_type_template_id_ae166b0c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form.vue?vue&type=template&id=ae166b0c&scoped=true& */ "./resources/assets/js/views/artikel/form.vue?vue&type=template&id=ae166b0c&scoped=true&");
/* harmony import */ var _form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form.vue?vue&type=script&lang=js& */ "./resources/assets/js/views/artikel/form.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _public_css_admin_ckeditor_document_style_css_vue_type_style_index_0_id_ae166b0c_lang_css_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../public/css/admin/ckeditor-document-style.css?vue&type=style&index=0&id=ae166b0c&lang=css&scoped=true& */ "./public/css/admin/ckeditor-document-style.css?vue&type=style&index=0&id=ae166b0c&lang=css&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _form_vue_vue_type_template_id_ae166b0c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _form_vue_vue_type_template_id_ae166b0c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "ae166b0c",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/views/artikel/form.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/views/artikel/form.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/assets/js/views/artikel/form.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./form.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/artikel/form.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/views/artikel/form.vue?vue&type=template&id=ae166b0c&scoped=true&":
/*!***********************************************************************************************!*\
  !*** ./resources/assets/js/views/artikel/form.vue?vue&type=template&id=ae166b0c&scoped=true& ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_template_id_ae166b0c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../node_modules/vue-loader/lib??vue-loader-options!./form.vue?vue&type=template&id=ae166b0c&scoped=true& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/artikel/form.vue?vue&type=template&id=ae166b0c&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_template_id_ae166b0c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_template_id_ae166b0c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/assets/js/views/artikel/formKategori.vue":
/*!************************************************************!*\
  !*** ./resources/assets/js/views/artikel/formKategori.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _formKategori_vue_vue_type_template_id_550edd80___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./formKategori.vue?vue&type=template&id=550edd80& */ "./resources/assets/js/views/artikel/formKategori.vue?vue&type=template&id=550edd80&");
/* harmony import */ var _formKategori_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./formKategori.vue?vue&type=script&lang=js& */ "./resources/assets/js/views/artikel/formKategori.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _formKategori_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _formKategori_vue_vue_type_template_id_550edd80___WEBPACK_IMPORTED_MODULE_0__["render"],
  _formKategori_vue_vue_type_template_id_550edd80___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/views/artikel/formKategori.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/views/artikel/formKategori.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/assets/js/views/artikel/formKategori.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_formKategori_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./formKategori.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/artikel/formKategori.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_formKategori_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/views/artikel/formKategori.vue?vue&type=template&id=550edd80&":
/*!*******************************************************************************************!*\
  !*** ./resources/assets/js/views/artikel/formKategori.vue?vue&type=template&id=550edd80& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_formKategori_vue_vue_type_template_id_550edd80___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../node_modules/vue-loader/lib??vue-loader-options!./formKategori.vue?vue&type=template&id=550edd80& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/artikel/formKategori.vue?vue&type=template&id=550edd80&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_formKategori_vue_vue_type_template_id_550edd80___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_formKategori_vue_vue_type_template_id_550edd80___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/assets/js/views/artikel/formPenulis.vue":
/*!***********************************************************!*\
  !*** ./resources/assets/js/views/artikel/formPenulis.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _formPenulis_vue_vue_type_template_id_53af71f0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./formPenulis.vue?vue&type=template&id=53af71f0& */ "./resources/assets/js/views/artikel/formPenulis.vue?vue&type=template&id=53af71f0&");
/* harmony import */ var _formPenulis_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./formPenulis.vue?vue&type=script&lang=js& */ "./resources/assets/js/views/artikel/formPenulis.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _formPenulis_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _formPenulis_vue_vue_type_template_id_53af71f0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _formPenulis_vue_vue_type_template_id_53af71f0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/views/artikel/formPenulis.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/views/artikel/formPenulis.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/assets/js/views/artikel/formPenulis.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_formPenulis_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./formPenulis.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/artikel/formPenulis.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_formPenulis_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/views/artikel/formPenulis.vue?vue&type=template&id=53af71f0&":
/*!******************************************************************************************!*\
  !*** ./resources/assets/js/views/artikel/formPenulis.vue?vue&type=template&id=53af71f0& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_formPenulis_vue_vue_type_template_id_53af71f0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../node_modules/vue-loader/lib??vue-loader-options!./formPenulis.vue?vue&type=template&id=53af71f0& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/artikel/formPenulis.vue?vue&type=template&id=53af71f0&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_formPenulis_vue_vue_type_template_id_53af71f0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_formPenulis_vue_vue_type_template_id_53af71f0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);