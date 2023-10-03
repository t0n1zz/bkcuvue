(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[123],{

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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/strukturOrganisasi/form.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/views/strukturOrganisasi/form.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _components_pageHeader_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/pageHeader.vue */ "./resources/assets/js/components/pageHeader.vue");
/* harmony import */ var _components_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/modal */ "./resources/assets/js/components/modal.vue");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }



/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    pageHeader: _components_pageHeader_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    appModal: _components_modal__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      data: {
        divisions: '',
        deleted: '',
        deletedDiv: ''
      },
      deleted: [],
      deletedDiv: [],
      title: "Struktur Organisasi",
      kelas: "struktur",
      titleDesc: "Menginput Struktur Organisasi",
      titleIcon: "icon-collaboration",
      selectCuPath: "struktur",
      state: "",
      modalShow: false,
      modalState: "",
      modalTitle: "",
      modalContent: "",
      modalButton: "",
      modalSize: "",
      modalColor: "",
      flag: false
    };
  },
  created: function created() {
    this.$store.dispatch("struktur/indexAktivis", 0);
    this.$store.dispatch("struktur/index", 0);
  },
  watch: {
    // when updating data
    updateStat: function updateStat(value) {
      this.modalState = value;
      this.modalButton = "Ok";
      this.modalShow = true;
      if (value == "success") {
        this.modalTitle = this.update.message;
        this.modalContent = "";
        // this.fetch();
      } else if (value == "fail") {
        this.modalContent = this.update.message;
      } else {
        this.modalContent = "";
      }
    }
  },
  methods: {
    addDivision: function addDivision() {
      if (!this.$route.params.id) {
        this.divisions.push({
          divisi: "",
          manager: "",
          staff: []
        });
      } else {
        this.$store.dispatch("struktur/addDivision");
        this.flag = true;
      }
    },
    removeDivision: function removeDivision(divisionIndex) {
      if (!this.$route.params.id) {
        this.divisions.splice(divisionIndex, 1);
      } else {
        this.deletedDiv.push(this.divisions[divisionIndex]);
        var idx = divisionIndex;
        if (this.flag == false) {
          idx = divisionIndex - 1;
        }
        this.$store.commit("struktur/removeDivision", idx);
      }
    },
    addStaff: function addStaff(divisionIndex) {
      this.divisions[divisionIndex].staff.push({
        staf: ""
      });
    },
    removeStaff: function removeStaff(divisionIndex, staffIndex) {
      if (this.divisions[divisionIndex].staff[staffIndex].staf.id) {
        this.deleted.push({
          id_user_atasan: this.divisions[divisionIndex].manager.id,
          id_bidang: this.divisions[divisionIndex].divisi.id,
          id_user: this.divisions[divisionIndex].staff[staffIndex].staf.id
        });
      }
      this.divisions[divisionIndex].staff.splice(staffIndex, 1);
    },
    managerSelected: function managerSelected(managerId) {
      var manager = this.managers.find(function (manager) {
        return manager.id === managerId;
      });
      if (manager.tingkat == 5) {
        this.staffOptions = this.staffOption.filter(function (staff) {
          return staff.tingkat === 7 || staff.tingkat === 8 || staff.tingkat === 6;
        });
      } else {
        this.staffOptions = this.staffOption.filter(function (staff) {
          return staff.tingkat === 7 || staff.tingkat === 8;
        });
      }
    },
    saveOrganization: function saveOrganization() {
      this.data.divisions = this.divisions;
      this.data.deleted = this.deleted;
      this.data.deletedDiv = this.deletedDiv;
      this.$store.dispatch("struktur/store", [this.currentUser.id_cu, this.data]);
    },
    isDivisionSelected: function isDivisionSelected(divisionName, currentIndex) {
      if (!this.$route.params.id) {
        return this.divisions.some(function (division, index) {
          return index !== currentIndex && division.divisi.name === divisionName;
        });
      }
    },
    modalBackgroundClick: function modalBackgroundClick() {
      if (this.modalState === "success") {
        this.modalTutup;
      } else if (this.modalState === "loading") {
        // do nothing
      } else {
        this.modalShow = false;
      }
    },
    modalTutup: function modalTutup() {
      this.modalShow = false;
    },
    back: function back() {
      this.$router.go(-1);
    },
    modalConfirmOk: function modalConfirmOk() {
      this.$router.push('/struktur/' + this.currentUser.id_cu);
    }
  },
  computed: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])("auth", {
    currentUser: "currentUser"
  })), Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])("struktur", {
    managers: "managerS",
    staffOptions: "staffS",
    update: "update",
    updateStat: "updateStat",
    divisions: "dataS",
    divisionOptions: 'bidang'
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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/strukturOrganisasi/form.vue?vue&type=template&id=6dfe672c&":
/*!**********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/views/strukturOrganisasi/form.vue?vue&type=template&id=6dfe672c& ***!
  \**********************************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "organization-structure"
  }, [_c("page-header", {
    attrs: {
      title: _vm.title,
      titleDesc: _vm.titleDesc,
      titleIcon: _vm.titleIcon
    }
  }), _vm._v(" "), _c("link", {
    attrs: {
      rel: "stylesheet",
      href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
    }
  }), _vm._v(" "), _vm._l(_vm.divisions, function (division, divisionIndex) {
    return _c("div", {
      key: divisionIndex,
      staticClass: "division-card"
    }, [_c("div", {
      staticClass: "division-header"
    }, [_c("h4", [_vm._v(_vm._s(division.divisi.name))]), _vm._v(" "), _c("button", {
      staticClass: "close-button",
      on: {
        click: function click($event) {
          return _vm.removeDivision(divisionIndex);
        }
      }
    }, [_vm._v("\n        ×\n      ")])]), _vm._v(" "), _c("div", {
      staticClass: "division-content"
    }, [_c("div", {
      staticClass: "form-group"
    }, [_c("label", {
      attrs: {
        "for": "division"
      }
    }, [_vm._v("Bidang:")]), _vm._v(" "), _c("select", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: division.divisi,
        expression: "division.divisi"
      }],
      staticClass: "form-control",
      on: {
        change: function change($event) {
          var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
            return o.selected;
          }).map(function (o) {
            var val = "_value" in o ? o._value : o.value;
            return val;
          });
          _vm.$set(division, "divisi", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
        }
      }
    }, [_c("option", {
      attrs: {
        disabled: true
      },
      domProps: {
        value: {
          id: "",
          name: ""
        }
      }
    }, [_vm._v("\n            Pilih Bidang\n          ")]), _vm._v(" "), _vm._l(_vm.divisionOptions, function (divisionOption) {
      return _c("option", {
        attrs: {
          disabled: _vm.isDivisionSelected(divisionOption.name, divisionIndex)
        },
        domProps: {
          value: {
            id: divisionOption.id,
            name: divisionOption.name
          }
        }
      }, [_vm._v("\n            " + _vm._s(divisionOption.name) + "\n          ")]);
    })], 2)]), _vm._v(" "), _c("div", {
      staticClass: "form-group"
    }, [_c("label", {
      attrs: {
        "for": "manager"
      }
    }, [_vm._v("Manager/Kabag:")]), _vm._v(" "), _c("select", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: division.manager,
        expression: "division.manager"
      }],
      staticClass: "form-control",
      on: {
        change: [function ($event) {
          var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
            return o.selected;
          }).map(function (o) {
            var val = "_value" in o ? o._value : o.value;
            return val;
          });
          _vm.$set(division, "manager", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
        }, function ($event) {
          return _vm.managerSelected(division.manager.id);
        }]
      }
    }, [_c("option", {
      attrs: {
        disabled: true
      },
      domProps: {
        value: {}
      }
    }, [_vm._v("Pilih Manager Manager")]), _vm._v(" "), _vm._l(_vm.managers, function (manager) {
      return _c("option", {
        domProps: {
          value: {
            id: manager.id,
            id_aktivis: manager.id_aktivis,
            name: manager.name
          }
        }
      }, [_vm._v("\n            " + _vm._s(manager.name) + "\n          ")]);
    })], 2)]), _vm._v(" "), _c("div", {
      staticClass: "form-group"
    }, [_c("label", {
      attrs: {
        "for": "staff"
      }
    }, [_vm._v("Staff:")]), _vm._v(" "), _c("ul", {
      staticClass: "staff-list"
    }, _vm._l(division.staff, function (staff, staffIndex) {
      return _c("li", {
        key: staffIndex,
        staticClass: "staff-item"
      }, [_c("select", {
        directives: [{
          name: "model",
          rawName: "v-model",
          value: staff.staf,
          expression: "staff.staf"
        }],
        staticClass: "form-control",
        on: {
          change: function change($event) {
            var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
              return o.selected;
            }).map(function (o) {
              var val = "_value" in o ? o._value : o.value;
              return val;
            });
            _vm.$set(staff, "staf", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
          }
        }
      }, [_c("option", {
        attrs: {
          disabled: true,
          value: ""
        }
      }, [_vm._v("Pilih Staff")]), _vm._v(" "), _vm._l(_vm.staffOptions, function (staf) {
        return _c("option", {
          domProps: {
            value: {
              id: staf.id,
              id_aktivis: staf.id_aktivis,
              name: staf.name
            }
          }
        }, [_vm._v("\n                " + _vm._s(staf.name) + "\n              ")]);
      })], 2), _vm._v(" "), _c("button", {
        staticClass: "remove-staff-button",
        on: {
          click: function click($event) {
            return _vm.removeStaff(divisionIndex, staffIndex);
          }
        }
      }, [_vm._v("\n              ×\n            ")])]);
    }), 0), _vm._v(" "), _c("button", {
      staticClass: "btn btn-success",
      on: {
        click: function click($event) {
          return _vm.addStaff(divisionIndex);
        }
      }
    }, [_c("i", {
      staticClass: "fas fa-plus"
    }), _vm._v(" Tambah Staff\n        ")])])])]);
  }), _vm._v(" "), _c("button", {
    staticClass: "btn btn-success full-width-button center-button",
    on: {
      click: _vm.addDivision
    }
  }, [_c("i", {
    staticClass: "fas fa-plus"
  }), _vm._v("Tambah Bidang\n  ")]), _vm._v(" "), _c("ul", {
    staticClass: "organization-preview"
  }), _vm._v(" "), _c("button", {
    staticClass: "btn btn-primary full-width-button center-button",
    on: {
      click: _vm.saveOrganization
    }
  }, [_c("i", {
    staticClass: "fas fa-save"
  }), _vm._v(" Simpan\n    ")]), _vm._v(" "), _c("button", {
    staticClass: "btn btn-light full-width-button center-button",
    staticStyle: {
      "margin-top": "5px"
    },
    on: {
      click: _vm.back
    }
  }, [_c("i", {
    staticClass: "fas fa-back"
  }), _vm._v(" Kembali\n    ")]), _vm._v(" "), _c("app-modal", {
    attrs: {
      show: _vm.modalShow,
      state: _vm.modalState,
      title: _vm.modalTitle,
      content: _vm.modalContent,
      size: _vm.modalSize,
      color: _vm.modalColor
    },
    on: {
      batal: _vm.modalTutup,
      tutup: _vm.modalTutup,
      confirmOk: _vm.modalConfirmOk,
      successOk: _vm.modalConfirmOk,
      failOk: _vm.modalTutup,
      backgroundClick: _vm.modalBackgroundClick
    }
  })], 2);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/strukturOrganisasi/form.vue?vue&type=style&index=0&id=6dfe672c&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/views/strukturOrganisasi/form.vue?vue&type=style&index=0&id=6dfe672c&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.organization-structure {\r\n  font-family: Arial, sans-serif;\r\n  margin-left: 30px;\r\n  margin-right: 30px;\r\n  margin-bottom: 30px;\n}\n.division-header h4 {\r\n  padding: 10px;\r\n  margin: 0;\r\n  color: white;\n}\n.division-card {\r\n  padding: 10px;\r\n  border: 1px solid #ccc;\r\n  border-radius: 4px;\r\n  margin-bottom: 20px;\r\n  background-color: white;\n}\n.division-header {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  padding: 10px;\r\n  background-color: #3498db;\r\n  border-bottom: 1px solid #ccc;\n}\n.division-header h4 {\r\n  margin: 0;\n}\n.close-button {\r\n  background-color: transparent;\r\n  border: none;\r\n  cursor: pointer;\r\n  font-size: 18px;\r\n  padding: 0;\r\n  margin: 0;\r\n  color: #ffffff;\n}\n.division-content {\r\n  padding: 10px;\n}\n.form-group {\r\n  margin-bottom: 10px;\n}\n.staff-list {\r\n  list-style: none;\r\n  padding: 0;\r\n  margin-bottom: 10px;\n}\n.staff-item {\r\n  display: flex;\r\n  align-items: center;\r\n  margin-bottom: 5px;\n}\n.division-button,\r\n.save-button {\r\n  width: 100%;\n}\n.remove-staff-button {\r\n  background-color: transparent;\r\n  border: none;\r\n  cursor: pointer;\r\n  font-size: 30px;\r\n  padding: 0;\r\n  margin: 0;\r\n  color: rgb(0, 0, 0);\r\n  margin-left: 5px;\n}\n.btn {\r\n  margin-right: 5px;\n}\n.organization-preview hr {\r\n  margin: 10px 0;\n}\r\n\r\n/* Blueish color accent */\n.btn-primary {\r\n  background-color: #3498db;\r\n  color: #fff;\n}\n.close-button:hover,\r\n.remove-staff-button:hover {\r\n  color: #ff0000;\n}\n.btn-primary:hover {\r\n  color: #ffffff;\n}\n.organization-preview hr {\r\n  border-color: #888;\n}\n.full-width-button {\r\n  width: 100%;\n}\n.center-button {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  width: 100%;\r\n  margin: 0 auto;\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/strukturOrganisasi/form.vue?vue&type=style&index=0&id=6dfe672c&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/views/strukturOrganisasi/form.vue?vue&type=style&index=0&id=6dfe672c&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./form.vue?vue&type=style&index=0&id=6dfe672c&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/strukturOrganisasi/form.vue?vue&type=style&index=0&id=6dfe672c&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

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

/***/ "./resources/assets/js/views/strukturOrganisasi/form.vue":
/*!***************************************************************!*\
  !*** ./resources/assets/js/views/strukturOrganisasi/form.vue ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _form_vue_vue_type_template_id_6dfe672c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form.vue?vue&type=template&id=6dfe672c& */ "./resources/assets/js/views/strukturOrganisasi/form.vue?vue&type=template&id=6dfe672c&");
/* harmony import */ var _form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form.vue?vue&type=script&lang=js& */ "./resources/assets/js/views/strukturOrganisasi/form.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _form_vue_vue_type_style_index_0_id_6dfe672c_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./form.vue?vue&type=style&index=0&id=6dfe672c&lang=css& */ "./resources/assets/js/views/strukturOrganisasi/form.vue?vue&type=style&index=0&id=6dfe672c&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _form_vue_vue_type_template_id_6dfe672c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _form_vue_vue_type_template_id_6dfe672c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/views/strukturOrganisasi/form.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/views/strukturOrganisasi/form.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/assets/js/views/strukturOrganisasi/form.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./form.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/strukturOrganisasi/form.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/views/strukturOrganisasi/form.vue?vue&type=style&index=0&id=6dfe672c&lang=css&":
/*!************************************************************************************************************!*\
  !*** ./resources/assets/js/views/strukturOrganisasi/form.vue?vue&type=style&index=0&id=6dfe672c&lang=css& ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_style_index_0_id_6dfe672c_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./form.vue?vue&type=style&index=0&id=6dfe672c&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/strukturOrganisasi/form.vue?vue&type=style&index=0&id=6dfe672c&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_style_index_0_id_6dfe672c_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_style_index_0_id_6dfe672c_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_style_index_0_id_6dfe672c_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_style_index_0_id_6dfe672c_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/assets/js/views/strukturOrganisasi/form.vue?vue&type=template&id=6dfe672c&":
/*!**********************************************************************************************!*\
  !*** ./resources/assets/js/views/strukturOrganisasi/form.vue?vue&type=template&id=6dfe672c& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_template_id_6dfe672c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../node_modules/vue-loader/lib??vue-loader-options!./form.vue?vue&type=template&id=6dfe672c& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/strukturOrganisasi/form.vue?vue&type=template&id=6dfe672c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_template_id_6dfe672c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_template_id_6dfe672c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);