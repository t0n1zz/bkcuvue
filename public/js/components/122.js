(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[122],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/pageHeader.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/pageHeader.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/sistem/notification.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/views/sistem/notification.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _components_pageHeader_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/pageHeader.vue */ "./resources/assets/js/components/pageHeader.vue");
/* harmony import */ var _components_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/modal */ "./resources/assets/js/components/modal.vue");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }





/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    pageHeader: _components_pageHeader_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    appModal: _components_modal__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  data: function data() {
    return {
      title: 'Notifikasi',
      kelas: 'notification',
      titleDesc: 'Melihat semua notifikasi',
      titleIcon: 'icon-bell2',
      state: '',
      modalShow: false,
      modalState: '',
      modalTitle: '',
      modalSize: '',
      modalColor: '',
      modalButton: '',
      modalContent: '',
      tabName: 'semua'
    };
  },
  created: function created() {
    this.fetch();
  },
  watch: {
    '$route': function $route(to, from) {
      // check current page meta
      this.fetch();
    },
    // when updating data
    markNotifStat: function markNotifStat(value) {
      this.modalState = value;
      this.modalButton = 'Ok';
      if (value === "success") {
        this.modalTitle = "Notifikasi berhasil ditandai";
        this.modalContent = '';
        this.fetch();
      }
    }
  },
  methods: {
    fetch: function fetch() {
      this.$store.dispatch(this.kelas + '/getAll');
    },
    goToPage: function goToPage(notif) {
      if (notif.data.tipe == 'laporanCu') {
        this.$router.push({
          name: 'laporanCuDetail',
          params: {
            id: notif.data.url
          }
        });
      } else if (notif.data.tipe == 'laporanTp') {
        this.$router.push({
          name: 'laporanTpDetail',
          params: {
            id: notif.data.url
          }
        });
      } else if (notif.data.tipe == 'diklatBKCU') {
        this.$router.push({
          name: 'diklatBKCUDetail',
          params: {
            id: notif.data.url
          }
        });
      } else if (notif.data.tipe == 'pertemuanBKCU') {
        this.$router.push({
          name: 'pertemuanBKCUDetail',
          params: {
            id: notif.data.url
          }
        });
      }
      this.$store.dispatch('notification/markRead', notif.id);
    },
    changeTab: function changeTab(value) {
      this.tabName = value;
    },
    modalConfirmOpen: function modalConfirmOpen(state, isMobile, itemMobile) {
      this.modalShow = true;
      this.modalState = 'confirm-tutup';
      this.state = state;
      if (isMobile) {
        this.selectedItem = itemMobile;
      }
      if (state == 'tandai') {
        this.modalTitle = 'Tandai semua ' + this.title + ' sudah dibaca?';
        this.modalButton = 'Iya, Tandai semua';
      }
    },
    modalConfirmOk: function modalConfirmOk() {
      // execute destroy
      if (this.state == 'tandai') {
        this.$store.dispatch(this.kelas + '/markAllRead');
      }
    },
    modalTutup: function modalTutup() {
      this.modalShow = false;
    }
  },
  computed: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_2__["mapGetters"])('auth', {
    currentUser: 'currentUser'
  })), Object(vuex__WEBPACK_IMPORTED_MODULE_2__["mapGetters"])('notification', {
    notification: 'dataS',
    notifStat: 'dataStatS',
    unreadNotification: 'unreadNotification',
    markNotifStat: 'markNotifStat'
  }))
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/pageHeader.vue?vue&type=template&id=0af8ed53&":
/*!**************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/pageHeader.vue?vue&type=template&id=0af8ed53& ***!
  \**************************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "page-header"
  }, [_c("div", {
    staticClass: "page-header-content header-elements-md-inline"
  }, [_c("div", {
    staticClass: "page-title d-flex"
  }, [_c("h4", [_c("i", {
    staticClass: "mr-2",
    "class": _vm.titleIcon
  }), _vm._v(" "), _c("span", {
    staticClass: "font-weight-semibold"
  }, [_vm._v(_vm._s(_vm.title))]), _vm._v(" "), _c("small", {
    staticClass: "d-block text-muted"
  }, [_vm._v(_vm._s(_vm.titleDesc))])])]), _vm._v(" "), _c("div", {
    staticClass: "header-elements d-none py-0 mb-3 mb-md-0"
  }, [_vm.level === 1 ? _c("div", {
    staticClass: "breadcrumb"
  }, [_c("router-link", {
    staticClass: "breadcrumb-item",
    attrs: {
      to: {
        name: "dashboard"
      }
    }
  }, [_c("i", {
    staticClass: "icon-home4"
  }), _vm._v("  Dashboard ")]), _vm._v(" "), _c("span", {
    staticClass: "breadcrumb-item active"
  }, [_vm._v(_vm._s(_vm.title))])], 1) : _vm._e(), _vm._v(" "), _vm.level === 2 ? _c("div", {
    staticClass: "breadcrumb"
  }, [_c("router-link", {
    staticClass: "breadcrumb-item",
    attrs: {
      to: {
        name: "dashboard"
      }
    }
  }, [_c("i", {
    staticClass: "icon-home4"
  }), _vm._v(" Dashboard ")]), _vm._v(" "), _c("a", {
    staticClass: "breadcrumb-item",
    attrs: {
      href: "#"
    },
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.level2Back();
      }
    }
  }, [_vm._v(_vm._s(_vm.level2Title))]), _vm._v(" "), _c("span", {
    staticClass: "breadcrumb-item active"
  }, [_vm._v(_vm._s(_vm.title))])], 1) : _vm._e(), _vm._v(" "), _vm.level === 3 ? _c("div", {
    staticClass: "breadcrumb"
  }, [_vm._t("breadcrumb")], 2) : _vm._e()])])])]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/sistem/notification.vue?vue&type=template&id=6c10fef8&":
/*!******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/views/sistem/notification.vue?vue&type=template&id=6c10fef8& ***!
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
  return _c("div", [_c("page-header", {
    attrs: {
      title: _vm.title,
      titleDesc: _vm.titleDesc,
      titleIcon: _vm.titleIcon
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "page-container"
  }, [_c("div", {
    staticClass: "page-content"
  }, [_c("div", {
    staticClass: "content-wrapper"
  }, [_c("div", {
    staticClass: "card card-body d-print-none"
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-sm-10 d-none d-sm-block"
  }, [_c("button", {
    staticClass: "btn btn-light btn-icon",
    attrs: {
      type: "button",
      disabled: _vm.markNotifStat === "loading" || _vm.unreadNotification == 0
    },
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.modalConfirmOpen("tandai");
      }
    }
  }, [_c("i", {
    staticClass: "icon-checkbox-checked"
  }), _vm._v(" Tandai sudah baca semua\n\t\t\t\t\t\t\t\t")])]), _vm._v(" "), _c("div", {
    staticClass: "col-sm-2 text-right d-none d-sm-block"
  }, [_c("button", {
    staticClass: "btn btn-light btn-icon",
    attrs: {
      type: "button",
      disabled: _vm.notifStat == "loading"
    },
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.fetch();
      }
    }
  }, [_c("i", {
    staticClass: "icon-sync",
    "class": {
      spinner: _vm.notifStat === "loading"
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "col-sm-12 d-block d-sm-none"
  }, [_c("button", {
    staticClass: "btn btn-light btn-icon btn-block mb-1",
    attrs: {
      type: "button",
      disabled: _vm.markNotifStat === "loading" || _vm.unreadNotification == 0
    },
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.modalConfirmOpen("tandai");
      }
    }
  }, [_c("i", {
    staticClass: "icon-checkbox-checked"
  }), _vm._v(" Tandai sudah baca semua\n\t\t\t\t\t\t\t\t")]), _vm._v(" "), _c("button", {
    staticClass: "btn btn-light btn-icon btn-block mb-1",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.fetch();
      }
    }
  }, [_c("i", {
    staticClass: "icon-sync",
    "class": {
      spinner: _vm.notifStat === "loading"
    }
  }), _vm._v(" Reload\n\t\t\t\t\t\t\t\t")])])])]), _vm._v(" "), _vm._m(0), _vm._v(" "), _vm.notifStat == "loading" ? _c("div", [_vm._m(1)]) : _c("div", [_vm.notification && _vm.notification.length > 0 ? _c("div", [_c("div", {
    staticClass: "nav-tabs-responsive mb-3"
  }, [_c("ul", {
    staticClass: "nav nav-tabs nav-tabs-solid bg-light"
  }, [_c("li", {
    staticClass: "nav-item"
  }, [_c("a", {
    staticClass: "nav-link",
    "class": {
      active: _vm.tabName == "semua"
    },
    attrs: {
      href: "#"
    },
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.changeTab("semua");
      }
    }
  }, [_c("i", {
    staticClass: "icon-table2 mr-2"
  }), _vm._v(" Semua")])]), _vm._v(" "), _c("li", {
    staticClass: "nav-item"
  }, [_c("a", {
    staticClass: "nav-link",
    "class": {
      active: _vm.tabName == "laporanCu"
    },
    attrs: {
      href: "#"
    },
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.changeTab("laporanCu");
      }
    }
  }, [_c("i", {
    staticClass: "icon-stats-bars2 mr-2"
  }), _vm._v(" Laporan CU")])]), _vm._v(" "), _c("li", {
    staticClass: "nav-item"
  }, [_c("a", {
    staticClass: "nav-link",
    "class": {
      active: _vm.tabName == "diklatBKCU"
    },
    attrs: {
      href: "#"
    },
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.changeTab("diklatBKCU");
      }
    }
  }, [_c("i", {
    staticClass: "icon-graduation2 mr-2"
  }), _vm._v(" Diklat BKCU")])]), _vm._v(" "), _c("li", {
    staticClass: "nav-item"
  }, [_c("a", {
    staticClass: "nav-link",
    "class": {
      active: _vm.tabName == "pertemuanBKCU"
    },
    attrs: {
      href: "#"
    },
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.changeTab("pertemuanBKCU");
      }
    }
  }, [_c("i", {
    staticClass: "icon-ungroup mr-2"
  }), _vm._v(" Pertemuan BKCU")])]), _vm._v(" "), _c("li", {
    staticClass: "nav-item"
  }, [_c("a", {
    staticClass: "nav-link",
    "class": {
      active: _vm.tabName == "selfAssesment"
    },
    attrs: {
      href: "#"
    },
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.changeTab("selfAssesment");
      }
    }
  }, [_c("i", {
    staticClass: "icon-reading mr-2"
  }), _vm._v(" Self Assesment ACCESS")])]), _vm._v(" "), _c("li", {
    staticClass: "nav-item"
  }, [_c("a", {
    staticClass: "nav-link",
    "class": {
      active: _vm.tabName == "monitoring"
    },
    attrs: {
      href: "#"
    },
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.changeTab("monitoring");
      }
    }
  }, [_c("i", {
    staticClass: "icon-collaboration mr-2"
  }), _vm._v(" Monitoring")])]), _vm._v(" "), _c("li", {
    staticClass: "nav-item"
  }, [_c("a", {
    staticClass: "nav-link",
    "class": {
      active: _vm.tabName == "klaimJALINAN"
    },
    attrs: {
      href: "#"
    },
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.changeTab("klaimJALINAN");
      }
    }
  }, [_c("i", {
    staticClass: "icon-accessibility2 mr-2"
  }), _vm._v(" Bantuan Solidaritas Jalinan")])])])]), _vm._v(" "), _c("transition", {
    attrs: {
      "enter-active-class": "animated fadeIn",
      mode: "out-in"
    }
  }, [_c("div", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.tabName == "semua",
      expression: "tabName == 'semua'"
    }],
    staticClass: "row"
  }, _vm._l(_vm.notification, function (notif, index) {
    return _c("div", {
      key: index,
      staticClass: "col-md-6"
    }, [_c("div", {
      staticClass: "card",
      "class": {
        "text-muted": notif.read_at != null
      },
      staticStyle: {
        cursor: "pointer"
      },
      on: {
        click: function click($event) {
          $event.preventDefault();
          return _vm.goToPage(notif);
        }
      }
    }, [_c("div", {
      staticClass: "card-header bg-white header-elements-inline"
    }, [_c("span", {
      staticClass: "card-title"
    }, [notif.data.tipe == "laporanCu" || notif.data.tipe == "laporanTp" ? _c("span", [_c("i", {
      staticClass: "icon-stats-bars2"
    }), _vm._v(" Laporan Statistik CU")]) : notif.data.tipe == "diklatBKCU" ? _c("span", [_c("i", {
      staticClass: "icon-graduation2"
    }), _vm._v(" Diklat BKCU")]) : notif.data.tipe == "pertemuanBKCU" ? _c("span", [_c("i", {
      staticClass: "icon-ungroup"
    }), _vm._v(" Pertemuan BKCU")]) : notif.data.tipe == "selfAssesment" ? _c("span", [_c("i", {
      staticClass: "icon-reading"
    }), _vm._v(" Self Assesment ACCESS")]) : notif.data.tipe == "monitoring" ? _c("span", [_c("i", {
      staticClass: "icon-collaboration"
    }), _vm._v(" Monitoring")]) : notif.data.tipe == "klaimJALINAN" ? _c("span", [_c("i", {
      staticClass: "icon-accessibility2"
    }), _vm._v(" Bantuan Solidaritas Jalinan")]) : _c("span", [_c("i", {
      staticClass: "icon-bubble-notification"
    }), _vm._v(" Notifikasi")])]), _vm._v(" "), _c("div", {
      staticClass: "header-elements"
    }, [_vm._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\t" + _vm._s(_vm._f("relativeHour")(notif.created_at)) + "\n\t\t\t\t\t\t\t\t\t\t\t\t")])]), _vm._v(" "), _c("div", {
      staticClass: "card-body"
    }, [_vm._v("\n\t\t\t\t\t\t\t\t\t\t\t\t" + _vm._s(notif.data.message) + "\n\t\t\t\t\t\t\t\t\t\t\t")])])]);
  }), 0)]), _vm._v(" "), _c("transition", {
    attrs: {
      "enter-active-class": "animated fadeIn",
      mode: "out-in"
    }
  }, [_c("div", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.tabName == "laporanCu",
      expression: "tabName == 'laporanCu'"
    }]
  }, _vm._l(_vm.notification, function (notif, index) {
    return _c("div", {
      key: index
    }, [notif.data.tipe == "laporanCu" ? _c("div", {
      staticClass: "card",
      "class": {
        "text-muted": notif.read_at != null
      },
      staticStyle: {
        cursor: "pointer"
      },
      on: {
        click: function click($event) {
          $event.preventDefault();
          return _vm.goToPage(notif);
        }
      }
    }, [_c("div", {
      staticClass: "card-header bg-white header-elements-inline"
    }, [_c("span", {
      staticClass: "card-title"
    }, [_c("i", {
      staticClass: "icon-stats-bars2"
    }), _vm._v(" Laporan Statistik CU\n\t\t\t\t\t\t\t\t\t\t\t\t")]), _vm._v(" "), _c("div", {
      staticClass: "header-elements"
    }, [_vm._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\t" + _vm._s(_vm._f("relativeHour")(notif.created_at)) + "\n\t\t\t\t\t\t\t\t\t\t\t\t")])]), _vm._v(" "), _c("div", {
      staticClass: "card-body"
    }, [_vm._v("\n\t\t\t\t\t\t\t\t\t\t\t\t" + _vm._s(notif.data.message) + "\n\t\t\t\t\t\t\t\t\t\t\t")])]) : _vm._e()]);
  }), 0)]), _vm._v(" "), _c("transition", {
    attrs: {
      "enter-active-class": "animated fadeIn",
      mode: "out-in"
    }
  }, [_c("div", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.tabName == "diklatBKCU",
      expression: "tabName == 'diklatBKCU'"
    }]
  }, _vm._l(_vm.notification, function (notif, index) {
    return _c("div", {
      key: index
    }, [notif.data.tipe == "diklatBKCU" ? _c("div", {
      staticClass: "card",
      "class": {
        "text-muted": notif.read_at != null
      },
      staticStyle: {
        cursor: "pointer"
      },
      on: {
        click: function click($event) {
          $event.preventDefault();
          return _vm.goToPage(notif);
        }
      }
    }, [_c("div", {
      staticClass: "card-header bg-white header-elements-inline"
    }, [_c("span", {
      staticClass: "card-title"
    }, [_c("i", {
      staticClass: "icon-graduation2"
    }), _vm._v(" Diklat BKCU\n\t\t\t\t\t\t\t\t\t\t\t\t")]), _vm._v(" "), _c("div", {
      staticClass: "header-elements"
    }, [_vm._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\t" + _vm._s(_vm._f("relativeHour")(notif.created_at)) + "\n\t\t\t\t\t\t\t\t\t\t\t\t")])]), _vm._v(" "), _c("div", {
      staticClass: "card-body"
    }, [_vm._v("\n\t\t\t\t\t\t\t\t\t\t\t\t" + _vm._s(notif.data.message) + "\n\t\t\t\t\t\t\t\t\t\t\t")])]) : _vm._e()]);
  }), 0)]), _vm._v(" "), _c("transition", {
    attrs: {
      "enter-active-class": "animated fadeIn",
      mode: "out-in"
    }
  }, [_c("div", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.tabName == "pertemuanBKCU",
      expression: "tabName == 'pertemuanBKCU'"
    }]
  }, _vm._l(_vm.notification, function (notif, index) {
    return _c("div", {
      key: index
    }, [notif.data.tipe == "pertemuanBKCU" ? _c("div", {
      staticClass: "card",
      "class": {
        "text-muted": notif.read_at != null
      },
      staticStyle: {
        cursor: "pointer"
      },
      on: {
        click: function click($event) {
          $event.preventDefault();
          return _vm.goToPage(notif);
        }
      }
    }, [_c("div", {
      staticClass: "card-header bg-white header-elements-inline"
    }, [_c("span", {
      staticClass: "card-title"
    }, [_c("i", {
      staticClass: "icon-ungroup2"
    }), _vm._v(" Pertemuan BKCU\n\t\t\t\t\t\t\t\t\t\t\t\t")]), _vm._v(" "), _c("div", {
      staticClass: "header-elements"
    }, [_vm._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\t" + _vm._s(_vm._f("relativeHour")(notif.created_at)) + "\n\t\t\t\t\t\t\t\t\t\t\t\t")])]), _vm._v(" "), _c("div", {
      staticClass: "card-body"
    }, [_vm._v("\n\t\t\t\t\t\t\t\t\t\t\t\t" + _vm._s(notif.data.message) + "\n\t\t\t\t\t\t\t\t\t\t\t")])]) : _vm._e()]);
  }), 0)]), _vm._v(" "), _c("transition", {
    attrs: {
      "enter-active-class": "animated fadeIn",
      mode: "out-in"
    }
  }, [_c("div", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.tabName == "selfAssesment",
      expression: "tabName == 'selfAssesment'"
    }]
  }, _vm._l(_vm.notification, function (notif, index) {
    return _c("div", {
      key: index
    }, [notif.data.tipe == "selfAssesment" ? _c("div", {
      staticClass: "card",
      "class": {
        "text-muted": notif.read_at != null
      },
      staticStyle: {
        cursor: "pointer"
      },
      on: {
        click: function click($event) {
          $event.preventDefault();
          return _vm.goToPage(notif);
        }
      }
    }, [_c("div", {
      staticClass: "card-header bg-white header-elements-inline"
    }, [_c("span", {
      staticClass: "card-title"
    }, [_c("i", {
      staticClass: "icon-reading"
    }), _vm._v(" Self Assesment ACCESS\n\t\t\t\t\t\t\t\t\t\t\t\t")]), _vm._v(" "), _c("div", {
      staticClass: "header-elements"
    }, [_vm._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\t" + _vm._s(_vm._f("relativeHour")(notif.created_at)) + "\n\t\t\t\t\t\t\t\t\t\t\t\t")])]), _vm._v(" "), _c("div", {
      staticClass: "card-body"
    }, [_vm._v("\n\t\t\t\t\t\t\t\t\t\t\t\t" + _vm._s(notif.data.message) + "\n\t\t\t\t\t\t\t\t\t\t\t")])]) : _vm._e()]);
  }), 0)]), _vm._v(" "), _c("transition", {
    attrs: {
      "enter-active-class": "animated fadeIn",
      mode: "out-in"
    }
  }, [_c("div", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.tabName == "monitoring",
      expression: "tabName == 'monitoring'"
    }]
  }, _vm._l(_vm.notification, function (notif, index) {
    return _c("div", {
      key: index
    }, [notif.data.tipe == "monitoring" ? _c("div", {
      staticClass: "card",
      "class": {
        "text-muted": notif.read_at != null
      },
      staticStyle: {
        cursor: "pointer"
      },
      on: {
        click: function click($event) {
          $event.preventDefault();
          return _vm.goToPage(notif);
        }
      }
    }, [_c("div", {
      staticClass: "card-header bg-white header-elements-inline"
    }, [_c("span", {
      staticClass: "card-title"
    }, [_c("i", {
      staticClass: "icon-collaboration"
    }), _vm._v(" Monitoring\n\t\t\t\t\t\t\t\t\t\t\t\t")]), _vm._v(" "), _c("div", {
      staticClass: "header-elements"
    }, [_vm._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\t" + _vm._s(_vm._f("relativeHour")(notif.created_at)) + "\n\t\t\t\t\t\t\t\t\t\t\t\t")])]), _vm._v(" "), _c("div", {
      staticClass: "card-body"
    }, [_vm._v("\n\t\t\t\t\t\t\t\t\t\t\t\t" + _vm._s(notif.data.message) + "\n\t\t\t\t\t\t\t\t\t\t\t")])]) : _vm._e()]);
  }), 0)]), _vm._v(" "), _c("transition", {
    attrs: {
      "enter-active-class": "animated fadeIn",
      mode: "out-in"
    }
  }, [_c("div", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.tabName == "klaimJALINAN",
      expression: "tabName == 'klaimJALINAN'"
    }]
  }, _vm._l(_vm.notification, function (notif, index) {
    return _c("div", {
      key: index
    }, [notif.data.tipe == "klaimJALINAN" ? _c("div", {
      staticClass: "card",
      "class": {
        "text-muted": notif.read_at != null
      },
      staticStyle: {
        cursor: "pointer"
      },
      on: {
        click: function click($event) {
          $event.preventDefault();
          return _vm.goToPage(notif);
        }
      }
    }, [_c("div", {
      staticClass: "card-header bg-white header-elements-inline"
    }, [_c("span", {
      staticClass: "card-title"
    }, [_c("i", {
      staticClass: "icon-accessibility2"
    }), _vm._v(" Bantuan Solidaritas Jalinan\n\t\t\t\t\t\t\t\t\t\t\t\t")]), _vm._v(" "), _c("div", {
      staticClass: "header-elements"
    }, [_vm._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\t" + _vm._s(_vm._f("relativeHour")(notif.created_at)) + "\n\t\t\t\t\t\t\t\t\t\t\t\t")])]), _vm._v(" "), _c("div", {
      staticClass: "card-body"
    }, [_vm._v("\n\t\t\t\t\t\t\t\t\t\t\t\t" + _vm._s(notif.data.message) + "\n\t\t\t\t\t\t\t\t\t\t\t")])]) : _vm._e()]);
  }), 0)])], 1) : _c("div", [_vm._m(2)])])])])]), _vm._v(" "), _c("app-modal", {
    attrs: {
      show: _vm.modalShow,
      state: _vm.modalState,
      title: _vm.modalTitle,
      size: _vm.modalSize,
      color: _vm.modalColor,
      button: _vm.modalButton,
      content: _vm.modalContent
    },
    on: {
      confirmOk: _vm.modalConfirmOk,
      tutup: _vm.modalTutup,
      successOk: _vm.modalTutup,
      failOk: _vm.modalTutup,
      backgroundClick: _vm.modalTutup
    }
  }, [_c("template", {
    slot: "modal-title"
  }, [_vm._v(_vm._s(_vm.modalTitle))]), _vm._v(" "), _c("template", {
    slot: "modal-body1"
  })], 2)], 1);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "alert bg-info text-white alert-styled-left"
  }, [_c("span", {
    staticClass: "font-weight-semibold"
  }, [_vm._v("Notifikasi yang ditampilkan adalah notifikasi selama 3 bulan terakhir.\n\t\t\t\t\t\t")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "card"
  }, [_c("div", {
    staticClass: "card-body"
  }, [_c("h4", [_vm._v("Mohon tunggu...")]), _vm._v(" "), _c("div", {
    staticClass: "progress"
  }, [_c("div", {
    staticClass: "progress-bar progress-bar-info progress-bar-striped progress-bar-animated",
    staticStyle: {
      width: "100%"
    }
  }, [_c("span", {
    staticClass: "sr-only"
  }, [_vm._v("100% Complete")])])])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "card"
  }, [_c("div", {
    staticClass: "card-body"
  }, [_c("h3", [_vm._v("Belum terdapat notifikasi apapun...")])])]);
}];
render._withStripped = true;


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
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_pageHeader_vue_vue_type_template_id_0af8ed53___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../node_modules/vue-loader/lib??vue-loader-options!./pageHeader.vue?vue&type=template&id=0af8ed53& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/pageHeader.vue?vue&type=template&id=0af8ed53&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_pageHeader_vue_vue_type_template_id_0af8ed53___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_pageHeader_vue_vue_type_template_id_0af8ed53___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/assets/js/views/sistem/notification.vue":
/*!***********************************************************!*\
  !*** ./resources/assets/js/views/sistem/notification.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _notification_vue_vue_type_template_id_6c10fef8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./notification.vue?vue&type=template&id=6c10fef8& */ "./resources/assets/js/views/sistem/notification.vue?vue&type=template&id=6c10fef8&");
/* harmony import */ var _notification_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./notification.vue?vue&type=script&lang=js& */ "./resources/assets/js/views/sistem/notification.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _notification_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _notification_vue_vue_type_template_id_6c10fef8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _notification_vue_vue_type_template_id_6c10fef8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/views/sistem/notification.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/views/sistem/notification.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/assets/js/views/sistem/notification.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_notification_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./notification.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/sistem/notification.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_notification_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/views/sistem/notification.vue?vue&type=template&id=6c10fef8&":
/*!******************************************************************************************!*\
  !*** ./resources/assets/js/views/sistem/notification.vue?vue&type=template&id=6c10fef8& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_notification_vue_vue_type_template_id_6c10fef8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../node_modules/vue-loader/lib??vue-loader-options!./notification.vue?vue&type=template&id=6c10fef8& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/sistem/notification.vue?vue&type=template&id=6c10fef8&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_notification_vue_vue_type_template_id_6c10fef8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_notification_vue_vue_type_template_id_6c10fef8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);