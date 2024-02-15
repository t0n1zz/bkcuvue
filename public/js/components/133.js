(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[133],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/formInfo.vue?vue&type=script&lang=js":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/formInfo.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  props: []
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/user/form.vue?vue&type=script&lang=js":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/views/user/form.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _components_pageHeader_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/pageHeader.vue */ "./resources/assets/js/components/pageHeader.vue");
/* harmony import */ var _components_ImageUpload_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/ImageUpload.vue */ "./resources/assets/js/components/ImageUpload.vue");
/* harmony import */ var _components_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/modal */ "./resources/assets/js/components/modal.vue");
/* harmony import */ var _components_hakAkses_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/hakAkses.vue */ "./resources/assets/js/components/hakAkses.vue");
/* harmony import */ var _components_message_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/message.vue */ "./resources/assets/js/components/message.vue");
/* harmony import */ var _components_formButton_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/formButton.vue */ "./resources/assets/js/components/formButton.vue");
/* harmony import */ var _components_formInfo_vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/formInfo.vue */ "./resources/assets/js/components/formInfo.vue");
/* harmony import */ var _components_wajibBadge_vue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/wajibBadge.vue */ "./resources/assets/js/components/wajibBadge.vue");
/* harmony import */ var _components_dataviewer2_vue__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/dataviewer2.vue */ "./resources/assets/js/components/dataviewer2.vue");
/* harmony import */ var _components_checkValue_vue__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/checkValue.vue */ "./resources/assets/js/components/checkValue.vue");
/* harmony import */ var _identitas_vue__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./identitas.vue */ "./resources/assets/js/views/user/identitas.vue");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }












/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    pageHeader: _components_pageHeader_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    appModal: _components_modal__WEBPACK_IMPORTED_MODULE_3__["default"],
    appImageUpload: _components_ImageUpload_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    hakAkses: _components_hakAkses_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
    message: _components_message_vue__WEBPACK_IMPORTED_MODULE_5__["default"],
    formButton: _components_formButton_vue__WEBPACK_IMPORTED_MODULE_6__["default"],
    formInfo: _components_formInfo_vue__WEBPACK_IMPORTED_MODULE_7__["default"],
    wajibBadge: _components_wajibBadge_vue__WEBPACK_IMPORTED_MODULE_8__["default"],
    DataViewer: _components_dataviewer2_vue__WEBPACK_IMPORTED_MODULE_9__["default"],
    checkValue: _components_checkValue_vue__WEBPACK_IMPORTED_MODULE_10__["default"],
    identitas: _identitas_vue__WEBPACK_IMPORTED_MODULE_11__["default"]
  },
  data: function data() {
    return {
      title: 'Tambah User',
      titleDesc: 'Menambah user baru',
      titleIcon: 'icon-plus3',
      level2Title: 'User',
      kelas: 'user',
      tipeUser: '',
      selectedItem: [],
      query: {
        order_column: "name",
        order_direction: "asc",
        filter_match: "and",
        limit: 10,
        page: 1
      },
      columnData: [{
        title: 'No.'
      }, {
        title: 'Foto'
      }, {
        title: 'Nama',
        name: 'name',
        tipe: 'string',
        sort: true,
        hide: false,
        disable: false,
        filter: true,
        filterDefault: true
      }, {
        title: 'Gender'
      }, {
        title: 'CU',
        disable: false
      }, {
        title: 'Tingkat'
      }, {
        title: 'Jabatan'
      }, {
        title: 'Pendidikan'
      }, {
        title: 'Jurusan'
      }, {
        title: 'Tgl. Lahir'
      }, {
        title: 'Tempat Lahir'
      }, {
        title: 'Tinggi'
      }, {
        title: 'Agama'
      }, {
        title: 'Status Pernikahan'
      }],
      modalShow: false,
      modalState: '',
      modalTitle: '',
      modalColor: '',
      modalContent: '',
      submited: false
    };
  },
  beforeRouteEnter: function beforeRouteEnter(to, from, next) {
    next(function (vm) {
      return vm.fetch();
    });
  },
  created: function created() {},
  watch: {
    formStat: function formStat(value) {
      if (value == 'success') {
        if (this.currentUser.id_cu != 0) {
          this.form.id_cu = this.currentUser.id_cu;
          this.changeCU(this.currentUser.id_cu);
        } else {
          if (this.modelCuStat != 'success') {
            this.$store.dispatch('cu/getHeader');
          }
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
    }
  },
  methods: {
    fetch: function fetch() {
      this.$store.dispatch(this.kelas + '/create');
    },
    fetchAktivis: function fetchAktivis(params) {
      this.$store.dispatch('aktivis/indexCu', [params, this.form.id_cu, 'semua', 'aktif']);
      this.disableColumnCu(true);
    },
    changeCU: function changeCU(value) {
      this.fetchAktivis(this.query);
      if (value == 0) {
        this.tipeUser = 'bkcu';
      } else {
        this.tipeUser = 'cu';
      }
    },
    disableColumnCu: function disableColumnCu(value) {
      this.columnData[4].disable = value;
    },
    selectedRow: function selectedRow(item) {
      this.selectedItem = item;
      this.form.id_aktivis = item.id;
      this.form.aktivis = item;
    },
    deleteSelected: function deleteSelected() {
      this.selectedItem = [];
      this.form.id_aktivis = '';
      this.form.aktivis = {};
    },
    hakForm: function hakForm(value) {
      this.form.permission = value;
    },
    changeRole: function changeRole(id) {
      this.$store.dispatch('loadRolePermission', id);
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
      var _this = this;
      this.$validator.validateAll('form').then(function (result) {
        if (result) {
          _this.$store.dispatch(_this.kelas + '/store', _this.form);
          _this.submited = false;
        } else {
          window.scrollTo(0, 0);
          _this.submited = true;
        }
      });
    },
    back: function back() {
      this.$router.push({
        name: this.kelas + 'Cu',
        params: {
          cu: this.currentUser.id_cu
        }
      });
    },
    modalTutup: function modalTutup() {
      this.modalShow = false;
      if (this.updateStat == 'success') {
        this.back();
      }
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
    processFile: function processFile(event) {
      this.form.gambar = event.target.files[0];
    }
  },
  computed: _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('auth', {
    currentUser: 'currentUser'
  })), Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('user', {
    form: 'data',
    formStat: 'dataStat',
    rules: 'rules',
    options: 'options',
    updateResponse: 'update',
    updateStat: 'updateStat'
  })), Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('aktivis', {
    itemData: 'dataS',
    itemDataStat: 'dataStatS'
  })), Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('cu', {
    modelCu: 'headerDataS',
    modelCuStat: 'headerDataStatS'
  }))
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/formInfo.vue?vue&type=template&id=77f7efa9":
/*!***********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/formInfo.vue?vue&type=template&id=77f7efa9 ***!
  \***********************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _vm._m(0);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", [_c("div", {
    staticClass: "alert bg-info alert-styled-left"
  }, [_c("h6", [_vm._v("Pastikan data yang dimasukkan sudah benar sebelum menyimpan.")])])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/user/form.vue?vue&type=template&id=fadbbf36":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/views/user/form.vue?vue&type=template&id=fadbbf36 ***!
  \*******************************************************************************************************************************************************************************************************************************************/
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
      level2Title: _vm.level2Title
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
  }, [_vm._m(0), _vm._v(" "), _c("div", {
    staticClass: "col-md-12"
  }, [_c("div", {
    staticClass: "form-group",
    "class": {
      "has-error": _vm.errors.has("form.username")
    }
  }, [_c("h5", {
    "class": {
      "text-danger": _vm.errors.has("form.username")
    }
  }, [_vm.errors.has("form.username") ? _c("i", {
    staticClass: "icon-cross2"
  }) : _vm._e(), _vm._v("\n\t\t\t\t\t\t\t\t\t\t\tUsername: "), _c("wajib-badge"), _vm._v(" "), _c("br"), _vm._v(" "), _vm._m(1)], 1), _vm._v(" "), _c("input", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required|min:5|alpha_dash",
      expression: "'required|min:5|alpha_dash'"
    }, {
      name: "model",
      rawName: "v-model",
      value: _vm.form.username,
      expression: "form.username"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      name: "username",
      placeholder: "Silahkan masukkan username",
      "data-vv-as": "Username"
    },
    domProps: {
      value: _vm.form.username
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "username", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm.errors.has("form.username") ? _c("small", {
    staticClass: "text-muted text-danger"
  }, [_c("i", {
    staticClass: "icon-arrow-small-right"
  }), _vm._v(" " + _vm._s(_vm.errors.first("form.username")) + "\n\t\t\t\t\t\t\t\t\t\t")]) : _c("small", {
    staticClass: "text-muted"
  }, [_vm._v(" \n\t\t\t\t\t\t\t\t\t\t")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6"
  }, [_c("div", {
    staticClass: "form-group",
    "class": {
      "has-error": _vm.errors.has("form.password")
    }
  }, [_c("h5", {
    "class": {
      "text-danger": _vm.errors.has("form.password")
    }
  }, [_vm.errors.has("form.password") ? _c("i", {
    staticClass: "icon-cross2"
  }) : _vm._e(), _vm._v("\n\t\t\t\t\t\t\t\t\t\t\tPassword: "), _c("wajib-badge"), _vm._v(" "), _c("br"), _vm._v(" "), _vm._m(2)], 1), _vm._v(" "), _c("input", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required|min:8|verify_password",
      expression: "'required|min:8|verify_password'"
    }, {
      name: "model",
      rawName: "v-model",
      value: _vm.form.password,
      expression: "form.password"
    }],
    ref: "password",
    staticClass: "form-control",
    attrs: {
      type: "password",
      name: "password",
      placeholder: "Silahkan masukkan password"
    },
    domProps: {
      value: _vm.form.password
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "password", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm.errors.has("form.password") ? _c("small", {
    staticClass: "text-muted text-danger"
  }, [_c("i", {
    staticClass: "icon-arrow-small-right"
  }), _vm._v(" " + _vm._s(_vm.errors.first("form.password")) + "\n\t\t\t\t\t\t\t\t\t\t")]) : _c("small", {
    staticClass: "text-muted"
  }, [_vm._v(" \n\t\t\t\t\t\t\t\t\t\t")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6"
  }, [_c("div", {
    staticClass: "form-group",
    "class": {
      "has-error": _vm.errors.has("form.passwordConfirm")
    }
  }, [_c("h5", {
    "class": {
      "text-danger": _vm.errors.has("form.passwordConfirm")
    }
  }, [_vm.errors.has("form.passwordConfirm") ? _c("i", {
    staticClass: "icon-cross2"
  }) : _vm._e(), _vm._v("\n\t\t\t\t\t\t\t\t\t\t\tKonfirmasi Password: "), _c("wajib-badge"), _vm._v(" "), _c("br"), _vm._v(" "), _vm._m(3), _vm._v(" "), _c("br"), _c("br")], 1), _vm._v(" "), _c("input", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required|confirmed:password",
      expression: "'required|confirmed:password'"
    }, {
      name: "model",
      rawName: "v-model",
      value: _vm.form.passwordConfirm,
      expression: "form.passwordConfirm"
    }],
    staticClass: "form-control",
    attrs: {
      type: "password",
      name: "passwordConfirm",
      placeholder: "Silahkan masukkan password konfirmasi",
      "data-vv-as": "password"
    },
    domProps: {
      value: _vm.form.passwordConfirm
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "passwordConfirm", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm.errors.has("form.passwordConfirm") ? _c("small", {
    staticClass: "text-muted text-danger"
  }, [_c("i", {
    staticClass: "icon-arrow-small-right"
  }), _vm._v(" " + _vm._s(_vm.errors.first("form.passwordConfirm")) + "\n\t\t\t\t\t\t\t\t\t\t")]) : _c("small", {
    staticClass: "text-muted"
  }, [_vm._v(" ")])])]), _vm._v(" "), _vm.currentUser.id_cu == 0 ? _c("div", {
    staticClass: "col-md-12"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("h5", [_vm._v("Tipe: "), _c("wajib-badge")], 1), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.id_cu,
      expression: "form.id_cu"
    }],
    staticClass: "form-control",
    attrs: {
      name: "cu",
      "data-width": "100%"
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
  }, [_vm._v("Silahkan pilih CU")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "0"
    }
  }, [_vm._v("PUSKOPCUINA")]), _vm._v(" "), _vm._l(_vm.modelCu, function (cu, index) {
    return _c("option", {
      key: index,
      domProps: {
        value: cu.id
      }
    }, [_vm._v(_vm._s(cu.name))]);
  })], 2)])]) : _vm._e(), _vm._v(" "), _vm.form.id_cu != "" && _vm.formStat == "success" ? _c("div", {
    staticClass: "col-md-12"
  }, [_c("h5", [_vm._v("Data Aktivis User: "), _c("wajib-badge"), _vm._v(" "), _c("br"), _vm._v(" "), _vm._m(4)], 1), _vm._v(" "), _vm.form.id_aktivis != "" ? _c("identitas", {
    attrs: {
      itemData: _vm.form.aktivis
    },
    on: {
      deleteSelected: _vm.deleteSelected
    }
  }) : _c("data-viewer", {
    attrs: {
      title: "Aktivis",
      columnData: _vm.columnData,
      itemData: _vm.itemData,
      query: _vm.query,
      itemDataStat: _vm.itemDataStat,
      isDasar: "true",
      isNoButtonRow: "true"
    },
    on: {
      fetch: _vm.fetchAktivis
    },
    scopedSlots: _vm._u([{
      key: "item-desktop",
      fn: function fn(props) {
        return [_c("tr", {
          staticClass: "text-nowrap cursor-pointer",
          on: {
            click: function click($event) {
              return _vm.selectedRow(props.item);
            }
          }
        }, [_c("td", [_vm._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\t" + _vm._s(props.index + 1 + (+_vm.itemData.current_page - 1) * +_vm.itemData.per_page + ".") + "\n\t\t\t\t\t\t\t\t\t\t\t\t")]), _vm._v(" "), _c("td", [props.item.gambar ? _c("img", {
          staticClass: "img-rounded img-fluid wmin-sm",
          attrs: {
            src: "/images/aktivis/" + props.item.gambar + "n.jpg"
          }
        }) : _c("img", {
          staticClass: "img-rounded img-fluid wmin-sm",
          attrs: {
            src: "/images/no_image.jpg"
          }
        })]), _vm._v(" "), _c("td", [_c("check-value", {
          attrs: {
            value: props.item.name
          }
        })], 1), _vm._v(" "), _c("td", [_c("check-value", {
          attrs: {
            value: props.item.kelamin
          }
        })], 1), _vm._v(" "), !_vm.columnData[4].disable ? _c("td", [props.item.pekerjaan_aktif && props.item.pekerjaan_aktif.tipe == 1 ? _c("span", [props.item.pekerjaan_aktif.cu ? _c("check-value", {
          attrs: {
            value: props.item.pekerjaan_aktif.cu.name
          }
        }) : _c("span", [_vm._v("-")])], 1) : props.item.pekerjaan_aktif && props.item.pekerjaan_aktif.tipe == 2 ? _c("span", [props.item.pekerjaan_aktif.lembaga_lain ? _c("check-value", {
          attrs: {
            value: props.item.pekerjaan_aktif.lembaga_lain.name
          }
        }) : _c("span", [_vm._v("-")])], 1) : props.item.pekerjaan_aktif && props.item.pekerjaan_aktif.tipe == 3 ? _c("span", [_vm._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tPUSKOPCUINA\n\t\t\t\t\t\t\t\t\t\t\t\t\t")]) : _c("span", [_vm._v("-")])]) : _vm._e(), _vm._v(" "), _c("td", {
          domProps: {
            innerHTML: _vm._s(_vm.$options.filters.checkTingkatAktivis(props.item.pekerjaan_aktif.tingkat))
          }
        }), _vm._v(" "), _c("td", [props.item.pekerjaan_aktif ? _c("check-value", {
          attrs: {
            value: props.item.pekerjaan_aktif.name
          }
        }) : _c("span", [_vm._v("-")])], 1), _vm._v(" "), _c("td", [props.item.pendidikan_tertinggi ? _c("check-value", {
          attrs: {
            value: props.item.pendidikan_tertinggi.tingkat
          }
        }) : _c("span", [_vm._v("-")])], 1), _vm._v(" "), _c("td", [props.item.pendidikan_tertinggi ? _c("check-value", {
          attrs: {
            value: props.item.pendidikan_tertinggi.name
          }
        }) : _c("span", [_vm._v("-")])], 1), _vm._v(" "), _c("td", {
          domProps: {
            innerHTML: _vm._s(_vm.$options.filters.date(props.item.tanggal_lahir))
          }
        }), _vm._v(" "), _c("td", [_c("check-value", {
          attrs: {
            value: props.item.tempat_lahir
          }
        })], 1), _vm._v(" "), _c("td", [_c("check-value", {
          attrs: {
            value: props.item.tinggi
          }
        })], 1), _vm._v(" "), _c("td", [_c("check-value", {
          attrs: {
            value: props.item.agama
          }
        })], 1), _vm._v(" "), _c("td", [_c("check-value", {
          attrs: {
            value: props.item.status
          }
        })], 1)])];
      }
    }], null, false, 952953435)
  })], 1) : _vm._e(), _vm._v(" "), _vm.form.id_aktivis != "" && _vm.formStat == "success" ? _c("div", {
    staticClass: "col-md-12"
  }, [_c("br"), _vm._v(" "), _c("h5", [_vm._v("Hak Akses: "), _c("wajib-badge"), _vm._v(" "), _c("br"), _vm._v(" "), _vm._m(5)], 1), _vm._v(" "), _c("hak-akses", {
    attrs: {
      isPeran: true,
      tipeUser: _vm.tipeUser,
      dataStat: "success"
    },
    on: {
      hakForm: _vm.hakForm
    }
  })], 1) : _vm._e()])])]), _vm._v(" "), _c("form-info"), _vm._v(" "), _c("div", {
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
  })], 1);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "col-md-12"
  }, [_c("div", {
    staticClass: "alert alert-info alert-styled-left"
  }, [_c("span", {
    staticClass: "font-weight-semibold"
  }, [_vm._v("Informasi!")]), _vm._v(" Mari menggunakan password dengan tingkat keamanan yang lebih tinggi!! \n\t\t\t\t\t\t\t\t\t\t"), _c("br"), _vm._v("\n\t\t\t\t\t\t\t\t\t\tDimana password anda harus minimal terdiri dari 8 karakter yang mengandung minimal 1 huruf besar, 1 huruf kecil dan 1 angka. \n\t\t\t\t\t\t\t\t\t\t"), _c("br"), _vm._v("\n\t\t\t\t\t\t\t\t\t\tUsahakan password anda bukan dari tanggal lahir, alamat, nomor telepon/hp dan dari kata yang sering anda gunakan atau mudah diketahui oleh orang lain.\n\t\t\t\t\t\t\t\t\t")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("small", {
    staticClass: "text-muted"
  }, [_c("i", [_vm._v('format penulisan "namapanggilan-namasingkatancu" tanpa spasi. contoh: tony-cubcd')])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("small", {
    staticClass: "text-muted"
  }, [_c("i", [_vm._v("Minimal 8 karater yang mengandung minimal 1 huruf besar, 1 huruf kecil dan 1 angka")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("small", {
    staticClass: "text-muted"
  }, [_c("i", [_vm._v("Mengisi ulang password")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("small", {
    staticClass: "text-muted"
  }, [_c("i", [_vm._v("Silahkan memilih dari tabel dibawah data user ini terikat dengan data aktivis mana. untuk memilih dengan menekan nama di dalam tabel aktivis")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("small", {
    staticClass: "text-muted"
  }, [_c("i", [_vm._v("Silahkan memilih apa saja yang bisa dilakukan user.")])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./resources/assets/js/components/formInfo.vue":
/*!*****************************************************!*\
  !*** ./resources/assets/js/components/formInfo.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _formInfo_vue_vue_type_template_id_77f7efa9__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./formInfo.vue?vue&type=template&id=77f7efa9 */ "./resources/assets/js/components/formInfo.vue?vue&type=template&id=77f7efa9");
/* harmony import */ var _formInfo_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./formInfo.vue?vue&type=script&lang=js */ "./resources/assets/js/components/formInfo.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _formInfo_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _formInfo_vue_vue_type_template_id_77f7efa9__WEBPACK_IMPORTED_MODULE_0__["render"],
  _formInfo_vue_vue_type_template_id_77f7efa9__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/components/formInfo.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/formInfo.vue?vue&type=script&lang=js":
/*!*****************************************************************************!*\
  !*** ./resources/assets/js/components/formInfo.vue?vue&type=script&lang=js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_formInfo_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./formInfo.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/formInfo.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_formInfo_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/formInfo.vue?vue&type=template&id=77f7efa9":
/*!***********************************************************************************!*\
  !*** ./resources/assets/js/components/formInfo.vue?vue&type=template&id=77f7efa9 ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_formInfo_vue_vue_type_template_id_77f7efa9__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../node_modules/vue-loader/lib??vue-loader-options!./formInfo.vue?vue&type=template&id=77f7efa9 */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/formInfo.vue?vue&type=template&id=77f7efa9");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_formInfo_vue_vue_type_template_id_77f7efa9__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_formInfo_vue_vue_type_template_id_77f7efa9__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/assets/js/views/user/form.vue":
/*!*************************************************!*\
  !*** ./resources/assets/js/views/user/form.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _form_vue_vue_type_template_id_fadbbf36__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form.vue?vue&type=template&id=fadbbf36 */ "./resources/assets/js/views/user/form.vue?vue&type=template&id=fadbbf36");
/* harmony import */ var _form_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form.vue?vue&type=script&lang=js */ "./resources/assets/js/views/user/form.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _form_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _form_vue_vue_type_template_id_fadbbf36__WEBPACK_IMPORTED_MODULE_0__["render"],
  _form_vue_vue_type_template_id_fadbbf36__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/views/user/form.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/views/user/form.vue?vue&type=script&lang=js":
/*!*************************************************************************!*\
  !*** ./resources/assets/js/views/user/form.vue?vue&type=script&lang=js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./form.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/user/form.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/views/user/form.vue?vue&type=template&id=fadbbf36":
/*!*******************************************************************************!*\
  !*** ./resources/assets/js/views/user/form.vue?vue&type=template&id=fadbbf36 ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_template_id_fadbbf36__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../node_modules/vue-loader/lib??vue-loader-options!./form.vue?vue&type=template&id=fadbbf36 */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/user/form.vue?vue&type=template&id=fadbbf36");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_template_id_fadbbf36__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_template_id_fadbbf36__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);