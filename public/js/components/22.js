(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[22],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/presensi/formQR.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/views/presensi/formQR.vue?vue&type=script&lang=js& ***!
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
  data: function data() {
    return {
      value: 'KANTOR',
      options: ['Kegiatan', 'Masuk Kantor'],
      tp_id: '',
      valueJenis: 'TETAP',
      tipe_cu: 0,
      jam_masuk: '00',
      isChecked: false,
      menit_masuk: '00',
      jam_pulang: '00',
      menit_pulang: '00',
      jenis: '',
      jam: ['00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23'],
      menit: ['00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59', '60']
    };
  },
  props: {
    qr: [],
    mode: ''
  },
  created: function created() {
    if (this.currentUser.id_cu != 0) {
      this.fetchTp(this.currentUser.id_cu);
    }
    if (this.mode == 'edit') {
      this.$store.dispatch('presensi/edit', ['qr', this.qr]);
      if (this.qr) {
        if (this.qr.id_cu == 0) {
          this.tipe_cu = 0;
        } else {
          this.tipe_cu = 1;
        }
      }
    } else {
      this.$store.dispatch('presensi/createFormQR');
    }
  },
  watch: {
    dataStat: function dataStat(value) {
      if (value == 'success') {
        if (this.form.id_kegiatan != 0) {
          this.value = '';
        }
        if (this.form.jam_pulang != null) {
          this.isChecked = true;
          this.jam_pulang = this.form.jam_pulang.slice(0, 2);
          this.menit_pulang = this.form.jam_pulang.slice(3, 5);
        } else {
          this.form.isPulang = false;
        }
        this.jam_masuk = this.form.jam_masuk.slice(0, 2);
        this.menit_masuk = this.form.jam_masuk.slice(3, 5);
        this.tipe_cu = this.form.id_cu;
      }
    }
  },
  methods: {
    handle: function handle() {
      this.isChecked;
    },
    tutup: function tutup() {
      this.$emit('tutup');
    },
    check: function check() {
      if (this.value == 'DIKLAT' || this.value == 'PERTEMUAN') {
        this.$store.dispatch('presensi/getKegiatan', [this.cu_id, this.value]);
      }
    },
    changeCu: function changeCu(id) {
      var cu;
      if (id != 0) {
        cu = _.find(this.modelCU, function (o) {
          return o.id == id;
        });
      }
      this.fetchTp(cu.id);
    },
    changeTp: function changeTp(id) {
      var tp;
      if (id != 0) {
        this.id_cu = this.currentUser.id_cu;
        tp = _.find(this.modelTp, function (o) {
          return o.id == id;
        });
      }
    },
    fetchTp: function fetchTp(value) {
      this.$store.dispatch('tp/getCu', value);
    },
    storeQR: function storeQR() {
      var _this = this;
      var wktmasuk = this.jam_masuk.concat(':', this.menit_masuk);
      var wktpulang = this.jam_pulang.concat(':', this.menit_pulang);
      var a = this.kegiatan.find(function (item) {
        return item.id === _this.form.id_kegiatan;
      });
      if (this.value == 'KANTOR') {
        this.form.id_kegiatan = 0;
        this.form.kegiatan_name = 'Kantor';
      } else {
        if (this.mode == 'edit') {} else {
          this.form.kegiatan_name = a.name;
        }
      }
      if (this.currentUser.id_cu != 0) {
        this.form.id_cu = this.currentUser.id_cu;
      }
      if (this.tipe_cu == 0) {
        this.form.id_cu = 0;
      }
      this.form.jam_masuk = wktmasuk;
      this.form.jam_pulang = wktpulang;
      this.form.status = 'tidak aktif';
      this.form.kode_qr = Date.now();
      if (!this.isChecked) {
        this.form.jam_pulang = null;
      }
      if (this.mode == 'create') {
        this.form.isPulang = this.isChecked;
        this.$store.dispatch('presensi/storeQR', this.form);
      } else {
        this.$store.dispatch('presensi/updateQR', [this.form.id, this.form]);
      }
    }
  },
  computed: _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('auth', {
    currentUser: 'currentUser'
  })), Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('cu', {
    modelCU: 'headerDataS',
    modelCUStat: 'headerDataStatS',
    updateMessage: 'update',
    updateStat: 'updateStat'
  })), Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('tp', {
    modelTp: 'dataS',
    modelTpStat: 'dataStatS'
  })), Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('presensi', {
    kegiatan: 'list_kegiatan',
    form: 'qrForm',
    dataStat: 'dataStat',
    pesan: 'message',
    qrstat: 'QRStat'
  }))
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/presensi/formQR.vue?vue&type=template&id=552f16a2&":
/*!**************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/views/presensi/formQR.vue?vue&type=template&id=552f16a2& ***!
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
  return _c("div", [_c("form", {
    attrs: {
      "data-vv-scope": "formAbsen"
    },
    on: {
      submit: function submit($event) {
        $event.preventDefault();
        return _vm.storeQR();
      }
    }
  }, [_c("div", {
    staticClass: "col-md-12"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_vm.currentUser.id_cu === 0 && _vm.mode == "create" ? _c("div", [_c("div", {
    staticClass: "form-group"
  }, [_c("h5", [_vm._v("\n                            CU:\n                        ")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.tipe_cu,
      expression: "tipe_cu"
    }, {
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }],
    staticClass: "form-control",
    attrs: {
      name: "tipe_cu",
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
        _vm.tipe_cu = $event.target.multiple ? $$selectedVal : $$selectedVal[0];
      }, function ($event) {
        return _vm.changeCu($event.target.value);
      }]
    }
  }, [_c("option", {
    attrs: {
      value: "0"
    }
  }, [_vm._v("PUSKOPCUINA")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "1"
    }
  }, [_vm._v("CU PRIMER")])])]), _vm._v(" "), _vm.tipe_cu == 1 ? _c("div", {
    staticClass: "form-group"
  }, [_c("h5", [_vm._v("\n                            CU:\n                        ")]), _vm._v(" "), _c("select", {
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
      name: "cu_id",
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
        return _vm.changeCu($event.target.value);
      }]
    }
  }, [_c("option", {
    attrs: {
      disabled: "",
      value: "0"
    }
  }, [_vm.modelCUStat === "loading" ? _c("span", [_vm._v("Mohon tunggu...")]) : _c("span", [_vm._v("Silahkan pilih CU")])]), _vm._v(" "), _vm._l(_vm.modelCU, function (cu, index) {
    return _c("option", {
      key: index,
      domProps: {
        value: cu.id
      }
    }, [_vm._v(_vm._s(cu.name))]);
  })], 2)]) : _vm._e()]) : _vm._e(), _vm._v(" "), _vm.mode == "edit" ? _c("div", [_c("h5", [_vm._v("\n                        KEGIATAN: " + _vm._s(this.form.kegiatan_name.toUpperCase()) + "\n                    ")])]) : _vm._e(), _vm._v(" "), _vm.tipe_cu == 1 ? _c("div", {
    staticClass: "form-group"
  }, [_c("h6", [_vm._v("\n                        TP/KP:\n                    ")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.id_tp,
      expression: "form.id_tp"
    }, {
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }],
    staticClass: "form-control",
    attrs: {
      name: "id_tp",
      "data-width": "100%",
      "data-vv-as": "TP/KP"
    },
    on: {
      change: [function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.form, "id_tp", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }, function ($event) {
        return _vm.changeTp($event.target.value);
      }]
    }
  }, [_vm._m(0), _vm._v(" "), _vm._l(_vm.modelTp, function (tp, index) {
    return _c("option", {
      key: index,
      domProps: {
        value: tp.id
      }
    }, [_vm._v(_vm._s(tp.name))]);
  })], 2)]) : _vm._e(), _vm._v(" "), _vm.mode == "create" ? _c("div", [_c("h5", [_vm._v("Jenis :")]), _vm._v(" "), _c("div", {
    staticClass: "text-center"
  }, [_c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.value,
      expression: "value"
    }],
    staticClass: "form-control",
    attrs: {
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
        _vm.value = $event.target.multiple ? $$selectedVal : $$selectedVal[0];
      }, function ($event) {
        return _vm.check();
      }]
    }
  }, [_c("option", {
    attrs: {
      disabled: "true",
      value: ""
    }
  }, [_vm._v("PILIH JENIS ABSEN")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "KANTOR"
    }
  }, [_vm._v("KANTOR")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "DIKLAT"
    }
  }, [_vm._v("DIKLAT")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "PERTEMUAN"
    }
  }, [_vm._v("PERTEMUAN")])])])]) : _vm._e(), _vm._v(" "), _vm.value == "DIKLAT" ? _c("div", [_c("h5", [_vm._v("Diklat :")]), _vm._v(" "), _c("div", {
    staticClass: "text-center"
  }, [_c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.id_kegiatan,
      expression: "form.id_kegiatan"
    }],
    staticClass: "form-control",
    attrs: {
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
        _vm.$set(_vm.form, "id_kegiatan", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c("option", {
    attrs: {
      disabled: "true",
      value: ""
    }
  }, [_vm._v("PILIH DIKLAT")]), _vm._v(" "), _vm._l(_vm.kegiatan, function (kegiatan, index) {
    return _c("option", {
      key: index,
      domProps: {
        value: kegiatan.id
      }
    }, [_vm._v(_vm._s(kegiatan.name) + " || " + _vm._s(_vm.$options.filters.date(kegiatan.mulai)))]);
  })], 2)])]) : _vm._e(), _vm._v(" "), _vm.value == "PERTEMUAN" ? _c("div", [_c("h5", [_vm._v("PETEMUAN :")]), _vm._v(" "), _c("div", {
    staticClass: "text-center"
  }, [_c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.id_kegiatan,
      expression: "form.id_kegiatan"
    }],
    staticClass: "form-control",
    attrs: {
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
        _vm.$set(_vm.form, "id_kegiatan", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }, function ($event) {
        return _vm.getName();
      }]
    }
  }, [_c("option", {
    attrs: {
      disabled: "true",
      value: ""
    }
  }, [_vm._v("PILIH PERTEMUAN")]), _vm._v(" "), _vm._l(_vm.kegiatan, function (kegiatan, index) {
    return _c("option", {
      key: index,
      domProps: {
        value: kegiatan.id
      }
    }, [_vm._v(_vm._s(kegiatan.name))]);
  })], 2)])]) : _vm._e(), _vm._v(" "), _c("div", [_c("h5", [_vm._v("JAM MASUK :")]), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-md-3"
  }, [_c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.jam_masuk,
      expression: "jam_masuk"
    }],
    staticClass: "form-control",
    attrs: {
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
        _vm.jam_masuk = $event.target.multiple ? $$selectedVal : $$selectedVal[0];
      }
    }
  }, _vm._l(_vm.jam, function (jam, index) {
    return _c("option", {
      key: index,
      domProps: {
        value: jam
      }
    }, [_vm._v(_vm._s(jam))]);
  }), 0)]), _vm._v(" "), _c("div", {
    staticClass: "col-md-3"
  }, [_c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.menit_masuk,
      expression: "menit_masuk"
    }],
    staticClass: "form-control",
    attrs: {
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
        _vm.menit_masuk = $event.target.multiple ? $$selectedVal : $$selectedVal[0];
      }
    }
  }, _vm._l(_vm.menit, function (menit, index) {
    return _c("option", {
      key: index,
      domProps: {
        value: menit
      }
    }, [_vm._v(_vm._s(menit))]);
  }), 0)])])]), _vm._v(" "), _vm.value != "KANTOR" || _vm.mode == "edit" && _vm.value != "KANTOR" ? _c("div", {
    staticStyle: {
      "margin-top": "10px"
    }
  }, [_c("label", [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.isChecked,
      expression: "isChecked"
    }],
    attrs: {
      type: "checkbox"
    },
    domProps: {
      checked: Array.isArray(_vm.isChecked) ? _vm._i(_vm.isChecked, null) > -1 : _vm.isChecked
    },
    on: {
      change: [function ($event) {
        var $$a = _vm.isChecked,
          $$el = $event.target,
          $$c = $$el.checked ? true : false;
        if (Array.isArray($$a)) {
          var $$v = null,
            $$i = _vm._i($$a, $$v);
          if ($$el.checked) {
            $$i < 0 && (_vm.isChecked = $$a.concat([$$v]));
          } else {
            $$i > -1 && (_vm.isChecked = $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
          }
        } else {
          _vm.isChecked = $$c;
        }
      }, _vm.handle]
    }
  }), _vm._v("\n                        Gunakan Presensi Pulang?\n                    ")])]) : _vm._e(), _vm._v(" "), _vm.isChecked ? _c("div", [_c("h5", [_vm._v("JAM PULANG :")]), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-md-3"
  }, [_c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.jam_pulang,
      expression: "jam_pulang"
    }],
    staticClass: "form-control",
    attrs: {
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
        _vm.jam_pulang = $event.target.multiple ? $$selectedVal : $$selectedVal[0];
      }
    }
  }, _vm._l(_vm.jam, function (jam, index) {
    return _c("option", {
      key: index,
      domProps: {
        value: jam
      }
    }, [_vm._v(_vm._s(jam))]);
  }), 0)]), _vm._v(" "), _c("div", {
    staticClass: "col-md-3"
  }, [_c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.menit_pulang,
      expression: "menit_pulang"
    }],
    staticClass: "form-control",
    attrs: {
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
        _vm.menit_pulang = $event.target.multiple ? $$selectedVal : $$selectedVal[0];
      }
    }
  }, _vm._l(_vm.menit, function (menit, index) {
    return _c("option", {
      key: index,
      domProps: {
        value: menit
      }
    }, [_vm._v(_vm._s(menit))]);
  }), 0)])])]) : _vm._e(), _vm._v(" "), _c("div", [_c("h5", [_vm._v("Jenis QR :")]), _vm._v(" "), _c("div", {
    staticClass: "text-center"
  }, [_c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.jenis,
      expression: "form.jenis"
    }],
    staticClass: "form-control",
    attrs: {
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
        _vm.$set(_vm.form, "jenis", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c("option", {
    attrs: {
      disabled: "true",
      value: ""
    }
  }, [_vm._v("PILIH JENIS QR")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "TETAP"
    }
  }, [_vm._v("TETAP")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "BERUBAH PERHARI"
    }
  }, [_vm._v("BERUBAH PERHARI")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "BERUBAH SETELAH SCAN"
    }
  }, [_vm._v("BERUBAH SETELAH SCAN")])])])])]), _vm._v(" "), _c("div", {
    staticClass: "text-center"
  }, [_c("button", {
    staticClass: "btn btn-light",
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.tutup.apply(null, arguments);
      }
    }
  }, [_c("i", {
    staticClass: "icon-cross"
  }), _vm._v("Tutup")]), _vm._v(" "), _vm._m(1)])])])]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("option", {
    attrs: {
      disabled: "",
      value: ""
    }
  }, [_c("span", [_vm._v("Silahkan pilih TP/KP")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("button", {
    staticClass: "btn btn-primary",
    attrs: {
      type: "submit"
    }
  }, [_c("i", {
    staticClass: "icon-floppy-disk"
  }), _vm._v("Simpan")]);
}];
render._withStripped = true;


/***/ }),

/***/ "./resources/assets/js/views/presensi/formQR.vue":
/*!*******************************************************!*\
  !*** ./resources/assets/js/views/presensi/formQR.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _formQR_vue_vue_type_template_id_552f16a2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./formQR.vue?vue&type=template&id=552f16a2& */ "./resources/assets/js/views/presensi/formQR.vue?vue&type=template&id=552f16a2&");
/* harmony import */ var _formQR_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./formQR.vue?vue&type=script&lang=js& */ "./resources/assets/js/views/presensi/formQR.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _formQR_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _formQR_vue_vue_type_template_id_552f16a2___WEBPACK_IMPORTED_MODULE_0__["render"],
  _formQR_vue_vue_type_template_id_552f16a2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/views/presensi/formQR.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/views/presensi/formQR.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/assets/js/views/presensi/formQR.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_formQR_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./formQR.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/presensi/formQR.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_formQR_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/views/presensi/formQR.vue?vue&type=template&id=552f16a2&":
/*!**************************************************************************************!*\
  !*** ./resources/assets/js/views/presensi/formQR.vue?vue&type=template&id=552f16a2& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_formQR_vue_vue_type_template_id_552f16a2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../node_modules/vue-loader/lib??vue-loader-options!./formQR.vue?vue&type=template&id=552f16a2& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/presensi/formQR.vue?vue&type=template&id=552f16a2&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_formQR_vue_vue_type_template_id_552f16a2___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_formQR_vue_vue_type_template_id_552f16a2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);