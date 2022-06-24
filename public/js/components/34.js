(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[34],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/hakAkses.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/hakAkses.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
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


/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['tipeUser', 'form', 'dataStat', 'isPeran'],
  data: function data() {
    return {
      isCheckAll: false,
      hakForm: [],
      hakAkses: [{
        name: 'Artikel',
        keterangan: 'Mengelola data artikel yang akan muncul pada halaman website',
        icon: 'icon-newspaper',
        secondRow: true,
        tipe: 'all',
        permission: [{
          name: 'Lihat',
          key: 'index_artikel',
          icon: 'icon-eye',
          tipe: 'all',
          value: false,
          group: 'Artikel'
        }, {
          name: 'Tambah',
          key: 'create_artikel',
          icon: 'icon-plus3',
          tipe: 'all',
          value: false,
          group: 'Artikel'
        }, {
          name: 'Ubah',
          key: 'update_artikel',
          icon: 'icon-pencil',
          tipe: 'all',
          value: false,
          group: 'Artikel'
        }, {
          name: 'Hapus',
          key: 'destroy_artikel',
          icon: 'icon-bin2',
          tipe: 'all',
          value: false,
          group: 'Artikel'
        }, {
          name: 'Terbitkan',
          key: 'terbitkan_artikel',
          icon: 'icon-file-upload',
          tipe: 'all',
          value: false,
          group: 'Artikel'
        }, {
          name: 'Utamakan',
          key: 'utamakan_artikel',
          icon: 'icon-pushpin',
          tipe: 'all',
          value: false,
          group: 'Artikel'
        }]
      }, {
        name: 'Artikel SIMO',
        keterangan: 'Mengelola data artikel yang muncul di dashboard SIMO',
        icon: 'icon-newspaper',
        secondRow: true,
        tipe: 'bkcu',
        permission: [{
          name: 'Tambah',
          key: 'create_artikel_simo',
          icon: 'icon-plus3',
          tipe: 'bkcu',
          value: false,
          group: 'Artikel SIMO'
        }, {
          name: 'Ubah',
          key: 'update_artikel_simo',
          icon: 'icon-pencil',
          tipe: 'bkcu',
          value: false,
          group: 'Artikel SIMO'
        }, {
          name: 'Hapus',
          key: 'destroy_artikel_simo',
          icon: 'icon-bin2',
          tipe: 'bkcu',
          value: false,
          group: 'Artikel SIMO'
        }]
      }, {
        name: 'Kategori Artikel',
        keterangan: 'Mengelola kategori pada artikel',
        icon: 'icon-grid6',
        secondRow: true,
        tipe: 'all',
        permission: [{
          name: 'Lihat',
          key: 'index_artikel_kategori',
          icon: 'icon-eye',
          tipe: 'all',
          value: false,
          group: 'Kategori Artikel'
        }, {
          name: 'Tambah',
          key: 'create_artikel_kategori',
          icon: 'icon-plus3',
          tipe: 'all',
          value: false,
          group: 'Kategori Artikel'
        }, {
          name: 'Ubah',
          key: 'update_artikel_kategori',
          icon: 'icon-pencil',
          tipe: 'all',
          value: false,
          group: 'Kategori Artikel'
        }, {
          name: 'Hapus',
          key: 'destroy_artikel_kategori',
          icon: 'icon-bin2',
          tipe: 'all',
          value: false,
          group: 'Kategori Artikel'
        }]
      }, {
        name: 'Penulis Artikel',
        keterangan: 'Mengelola data penulis untuk artikel',
        icon: 'icon-pencil6',
        secondRow: true,
        tipe: 'all',
        permission: [{
          name: 'Lihat',
          key: 'index_artikel_penulis',
          icon: 'icon-eye',
          tipe: 'all',
          value: false,
          group: 'Penulis Artikel'
        }, {
          name: 'Tambah',
          key: 'create_artikel_penulis',
          icon: 'icon-plus3',
          tipe: 'all',
          value: false,
          group: 'Penulis Artikel'
        }, {
          name: 'Ubah',
          key: 'update_artikel_penulis',
          icon: 'icon-pencil',
          tipe: 'all',
          value: false,
          group: 'Penulis Artikel'
        }, {
          name: 'Hapus',
          key: 'destroy_artikel_penulis',
          icon: 'icon-bin2',
          tipe: 'all',
          value: false,
          group: 'Penulis Artikel'
        }]
      }, {
        name: 'Pengumuman',
        keterangan: 'Mengelola data pengumuman yang akan muncul di website',
        icon: 'icon-megaphone',
        secondRow: true,
        tipe: 'all',
        permission: [{
          name: 'Lihat',
          key: 'index_pengumuman',
          icon: 'icon-eye',
          tipe: 'all',
          value: false,
          group: 'Pengumuman'
        }, {
          name: 'Tambah',
          key: 'create_pengumuman',
          icon: 'icon-plus3',
          tipe: 'all',
          value: false,
          group: 'Pengumuman'
        }, {
          name: 'Ubah',
          key: 'update_pengumuman',
          icon: 'icon-pencil',
          tipe: 'all',
          value: false,
          group: 'Pengumuman'
        }, {
          name: 'Hapus',
          key: 'destroy_pengumuman',
          icon: 'icon-bin2',
          tipe: 'all',
          value: false,
          group: 'Pengumuman'
        }]
      }, {
        name: 'Diklat BKCU',
        keterangan: 'Mengelola data diklat yang diselenggarakan oleh BKCU Kalimantan',
        icon: 'icon-graduation2',
        secondRow: true,
        tipe: 'all',
        permission: [{
          name: 'Lihat',
          key: 'index_diklat_bkcu',
          icon: 'icon-eye',
          tipe: 'bkcu',
          value: false,
          group: 'Diklat BKCU'
        }, {
          name: 'Tambah',
          key: 'create_diklat_bkcu',
          icon: 'icon-plus3',
          tipe: 'bkcu',
          value: false,
          group: 'Diklat BKCU'
        }, {
          name: 'Ubah',
          key: 'update_diklat_bkcu',
          icon: 'icon-pencil',
          tipe: 'bkcu',
          value: false,
          group: 'Diklat BKCU'
        }, {
          name: 'Hapus',
          key: 'destroy_diklat_bkcu',
          icon: 'icon-bin2',
          tipe: 'bkcu',
          value: false,
          group: 'Diklat BKCU'
        }, {
          name: 'Daftar',
          key: 'index_diklat_bkcu',
          icon: 'icon-plus3',
          tipe: 'cu',
          value: false,
          group: 'Diklat BKCU'
        }]
      }, {
        name: 'Pertemuan BKCU',
        keterangan: 'Mengelola data pertemuan yang diselenggarakan oleh BKCU Kalimantan',
        icon: 'icon-ungroup',
        secondRow: true,
        tipe: 'all',
        permission: [{
          name: 'Lihat',
          key: 'index_pertemuan_bkcu',
          icon: 'icon-eye',
          tipe: 'bkcu',
          value: false,
          group: 'Pertemuan BKCU'
        }, {
          name: 'Tambah',
          key: 'create_pertemuan_bkcu',
          icon: 'icon-plus3',
          tipe: 'bkcu',
          value: false,
          group: 'Pertemuan BKCU'
        }, {
          name: 'Ubah',
          key: 'update_pertemuan_bkcu',
          icon: 'icon-pencil',
          tipe: 'bkcu',
          value: false,
          group: 'Pertemuan BKCU'
        }, {
          name: 'Hapus',
          key: 'destroy_pertemuan_bkcu',
          icon: 'icon-bin2',
          tipe: 'bkcu',
          value: false,
          group: 'Pertemuan BKCU'
        }, {
          name: 'Daftar',
          key: 'index_pertemuan_bkcu',
          icon: 'icon-plus3',
          tipe: 'cu',
          value: false,
          group: 'Pertemuan BKCU'
        }]
      }, {
        name: 'Tempat',
        keterangan: 'Mengelola data tempat diklat dan pertemuan yang diselenggarakan oleh BKCU Kalimantan',
        icon: 'icon-location4',
        secondRow: true,
        tipe: 'bkcu',
        permission: [{
          name: 'Lihat',
          key: 'index_tempat',
          icon: 'icon-eye',
          tipe: 'all',
          value: false,
          group: 'Tempat'
        }, {
          name: 'Tambah',
          key: 'create_tempat',
          icon: 'icon-plus3',
          tipe: 'all',
          value: false,
          group: 'Tempat'
        }, {
          name: 'Ubah',
          key: 'update_tempat',
          icon: 'icon-pencil',
          tipe: 'all',
          value: false,
          group: 'Tempat'
        }, {
          name: 'Hapus',
          key: 'destroy_tempat',
          icon: 'icon-bin2',
          tipe: 'all',
          value: false,
          group: 'Tempat'
        }]
      }, {
        name: 'Voting',
        keterangan: 'Mengelola data untuk melakukan voting',
        icon: 'icon-point-up',
        secondRow: true,
        tipe: 'all',
        permission: [{
          name: 'Lihat',
          key: 'index_voting',
          icon: 'icon-eye',
          tipe: 'all',
          value: false,
          group: 'Voting'
        }, {
          name: 'Tambah',
          key: 'create_voting',
          icon: 'icon-plus3',
          tipe: 'all',
          value: false,
          group: 'Voting'
        }, {
          name: 'Ubah',
          key: 'update_voting',
          icon: 'icon-pencil',
          tipe: 'all',
          value: false,
          group: 'Voting'
        }, {
          name: 'Hapus',
          key: 'destroy_voting',
          icon: 'icon-bin2',
          tipe: 'all',
          value: false,
          group: 'Voting'
        }]
      }, {
        name: 'Pemilihan',
        keterangan: 'Mengelola data untuk melakukan pemilihan',
        icon: 'icon-quill4',
        secondRow: true,
        tipe: 'all',
        permission: [{
          name: 'Lihat',
          key: 'index_pemilihan',
          icon: 'icon-eye',
          tipe: 'all',
          value: false,
          group: 'Pemilihan'
        }, {
          name: 'Tambah',
          key: 'create_pemilihan',
          icon: 'icon-plus3',
          tipe: 'all',
          value: false,
          group: 'Pemilihan'
        }, {
          name: 'Ubah',
          key: 'update_pemilihan',
          icon: 'icon-pencil',
          tipe: 'all',
          value: false,
          group: 'Pemilihan'
        }, {
          name: 'Hapus',
          key: 'destroy_pemilihan',
          icon: 'icon-bin2',
          tipe: 'all',
          value: false,
          group: 'Pemilihan'
        }]
      }, {
        name: 'Anggota CU',
        keterangan: 'Mengelola data anggota per-CU',
        icon: 'icon-man-woman',
        secondRow: true,
        tipe: 'all',
        permission: [{
          name: 'Lihat',
          key: 'index_anggota_cu',
          icon: 'icon-eye',
          tipe: 'all',
          value: false,
          group: 'Anggota CU'
        }, {
          name: 'Tambah',
          key: 'create_anggota_cu',
          icon: 'icon-plus3',
          tipe: 'all',
          value: false,
          group: 'Anggota CU'
        }, {
          name: 'Ubah',
          key: 'update_anggota_cu',
          icon: 'icon-pencil',
          tipe: 'all',
          value: false,
          group: 'Anggota CU'
        }, {
          name: 'Hapus',
          key: 'destroy_anggota_cu',
          icon: 'icon-bin2',
          tipe: 'all',
          value: false,
          group: 'Anggota CU'
        }, {
          name: 'Upload',
          key: 'upload_anggota_cu',
          icon: 'icon-file-upload',
          tipe: 'all',
          value: false,
          group: 'Anggota CU'
        }]
      }, {
        name: 'Bantuan Solidaritas Jalinan',
        keterangan: 'Mengelola data pengajuan bantuan solidaritas Jalinan dan mengatur tingkat aktivis yang melakukan verifikasi dimana 1 user hanya boleh memiliki 1 hak akses verifikasi',
        icon: 'icon-accessibility2',
        secondRow: true,
        tipe: 'all',
        permission: [{
          name: 'Lihat',
          key: 'index_jalinan_klaim',
          icon: 'icon-eye',
          tipe: 'all',
          value: false,
          group: 'Bantuan Solidaritas Jalinan'
        }, {
          name: 'Tambah',
          key: 'create_jalinan_klaim',
          icon: 'icon-plus3',
          tipe: 'all',
          value: false,
          group: 'Bantuan Solidaritas Jalinan'
        }, {
          name: 'Ubah',
          key: 'update_jalinan_klaim',
          icon: 'icon-pencil',
          tipe: 'all',
          value: false,
          group: 'Bantuan Solidaritas Jalinan'
        }, {
          name: 'Hapus',
          key: 'destroy_jalinan_klaim',
          icon: 'icon-bin2',
          tipe: 'all',
          value: false,
          group: 'Bantuan Solidaritas Jalinan'
        }, {
          name: 'Pencairan',
          key: 'pencairan_jalinan_klaim',
          icon: 'icon-square-down',
          tipe: 'bkcu',
          value: false,
          group: 'Bantuan Solidaritas Jalinan'
        }, {
          name: 'Laporan',
          key: 'laporan_jalinan_klaim',
          icon: 'icon-archive',
          tipe: 'all',
          value: false,
          group: 'Bantuan Solidaritas Jalinan'
        }, {
          name: 'Verifikasi Pengurus',
          key: 'verifikasi_pengurus_jalinan_klaim',
          icon: 'icon-file-eye',
          tipe: 'bkcu approve',
          value: false,
          group: ''
        }, {
          name: 'Verifikasi Pengawas',
          key: 'verifikasi_pengawas_jalinan_klaim',
          icon: 'icon-file-eye',
          tipe: 'bkcu approve',
          value: false,
          group: ''
        }, {
          name: 'Verifikasi Manajemen',
          key: 'verifikasi_manajemen_jalinan_klaim',
          icon: 'icon-file-eye',
          tipe: 'bkcu approve',
          value: false,
          group: ''
        }]
      }, {
        name: 'Iuran Jalinan',
        keterangan: 'Mengelola data iuran Jalinan',
        icon: 'icon-clipboard6',
        secondRow: false,
        tipe: 'all',
        permission: [{
          name: 'Lihat',
          key: 'index_jalinan_iuran',
          icon: 'icon-eye',
          tipe: 'all',
          value: false,
          group: 'Iuran Jalinan'
        }, {
          name: 'Tambah',
          key: 'create_jalinan_iuran',
          icon: 'icon-plus3',
          tipe: 'all',
          value: false,
          group: 'Iuran Jalinan'
        }, {
          name: 'Ubah',
          key: 'update_jalinan_iuran',
          icon: 'icon-pencil',
          tipe: 'bkcu',
          value: false,
          group: 'Iuran Jalinan'
        }, {
          name: 'Hapus',
          key: 'destroy_jalinan_iuran',
          icon: 'icon-bin2',
          tipe: 'all',
          value: false,
          group: 'Iuran Jalinan'
        }]
      }, {
        name: 'CU',
        keterangan: 'Mengelola data profil CU yang juga akan muncul di website',
        icon: 'icon-office',
        secondRow: true,
        tipe: 'all',
        permission: [{
          name: 'Lihat',
          key: 'index_cu',
          icon: 'icon-eye',
          tipe: 'all',
          value: false,
          group: 'CU'
        }, {
          name: 'Tambah',
          key: 'create_cu',
          icon: 'icon-plus3',
          tipe: 'bkcu',
          value: false,
          group: 'CU'
        }, {
          name: 'Ubah',
          key: 'update_cu',
          icon: 'icon-pencil',
          tipe: 'all',
          value: false,
          group: 'CU'
        }, {
          name: 'Hapus',
          key: 'destroy_cu',
          icon: 'icon-bin2',
          tipe: 'bkcu',
          value: false,
          group: 'CU'
        }]
      }, {
        name: 'TP/KP',
        keterangan: 'Mengelola data profil TP/KP dari CU yang akan muncul di website',
        icon: 'icon-home9',
        secondRow: true,
        tipe: 'all',
        permission: [{
          name: 'Lihat',
          key: 'index_tp',
          icon: 'icon-eye',
          tipe: 'all',
          value: false,
          group: 'TP/KP'
        }, {
          name: 'Tambah',
          key: 'create_tp',
          icon: 'icon-plus3',
          tipe: 'all',
          value: false,
          group: 'TP/KP'
        }, {
          name: 'Ubah',
          key: 'update_tp',
          icon: 'icon-pencil',
          tipe: 'all',
          value: false,
          group: 'TP/KP'
        }, {
          name: 'Hapus',
          key: 'destroy_tp',
          icon: 'icon-bin2',
          tipe: 'all',
          value: false,
          group: 'TP/KP'
        }]
      }, {
        name: 'Produk dan Pelayanan',
        keterangan: 'Mengelola data produk dan pelayanan CU yang akan muncul di website',
        icon: 'icon-list3',
        secondRow: true,
        tipe: 'all',
        permission: [{
          name: 'Lihat',
          key: 'index_produk_cu',
          icon: 'icon-eye',
          tipe: 'all',
          value: false,
          group: 'Produk dan Pelayanan'
        }, {
          name: 'Tambah',
          key: 'create_produk_cu',
          icon: 'icon-plus3',
          tipe: 'all',
          value: false,
          group: 'Produk dan Pelayanan'
        }, {
          name: 'Ubah',
          key: 'update_produk_cu',
          icon: 'icon-pencil',
          tipe: 'all',
          value: false,
          group: 'Produk dan Pelayanan'
        }, {
          name: 'Hapus',
          key: 'destroy_produk_cu',
          icon: 'icon-bin2',
          tipe: 'all',
          value: false,
          group: 'Produk dan Pelayanan'
        }]
      }, {
        name: 'Aktivis CU',
        keterangan: 'Mengelola data aktivis CU yang terdiri dari pengurus, pengawas, komite, penasihat, dan manajemen',
        icon: 'icon-user-tie',
        secondRow: true,
        tipe: 'all',
        permission: [{
          name: 'Lihat',
          key: 'index_aktivis',
          icon: 'icon-eye',
          tipe: 'all',
          value: false,
          group: 'Aktivis CU'
        }, {
          name: 'Tambah',
          key: 'create_aktivis',
          icon: 'icon-plus3',
          tipe: 'all',
          value: false,
          group: 'Aktivis CU'
        }, {
          name: 'Ubah',
          key: 'update_aktivis',
          icon: 'icon-pencil',
          tipe: 'all',
          value: false,
          group: 'Aktivis CU'
        }, {
          name: 'Hapus',
          key: 'destroy_aktivis',
          icon: 'icon-bin2',
          tipe: 'all',
          value: false,
          group: 'Aktivis CU'
        }]
      }, {
        name: 'Surat Keluar',
        keterangan: 'Mengelola data surat keluar',
        icon: 'icon-mailbox',
        secondRow: true,
        tipe: 'all',
        permission: [{
          name: 'Lihat',
          key: 'index_surat',
          icon: 'icon-eye',
          tipe: 'all',
          value: false,
          group: 'Surat Keluar'
        }, {
          name: 'Tambah',
          key: 'create_surat',
          icon: 'icon-plus3',
          tipe: 'all',
          value: false,
          group: 'Surat Keluar'
        }, {
          name: 'Ubah',
          key: 'update_surat',
          icon: 'icon-pencil',
          tipe: 'all',
          value: false,
          group: 'Surat Keluar'
        }, {
          name: 'Hapus',
          key: 'destroy_surat',
          icon: 'icon-bin2',
          tipe: 'all',
          value: false,
          group: 'Surat Keluar'
        }]
      }, {
        name: 'Surat Masuk',
        keterangan: 'Mengelola data surat masuk',
        icon: 'icon-envelop2',
        secondRow: true,
        tipe: 'all',
        permission: [{
          name: 'Lihat',
          key: 'index_surat',
          icon: 'icon-eye',
          tipe: 'all',
          value: false,
          group: 'Surat Keluar'
        }, {
          name: 'Tambah',
          key: 'create_surat_masuk',
          icon: 'icon-plus3',
          tipe: 'all',
          value: false,
          group: 'Surat Masuk'
        }, {
          name: 'Ubah',
          key: 'update_surat_masuk',
          icon: 'icon-pencil',
          tipe: 'all',
          value: false,
          group: 'Surat Masuk'
        }, {
          name: 'Hapus',
          key: 'destroy_surat_masuk',
          icon: 'icon-bin2',
          tipe: 'all',
          value: false,
          group: 'Surat Masuk'
        }]
      }, {
        name: 'Dokumen',
        keterangan: 'Mengelola data dokumen',
        icon: 'icon-books',
        secondRow: true,
        tipe: 'all',
        permission: [{
          name: 'Tambah',
          key: 'create_dokumen',
          icon: 'icon-plus3',
          tipe: 'all',
          value: false,
          group: 'Dokumen'
        }, {
          name: 'Ubah',
          key: 'update_dokumen',
          icon: 'icon-pencil',
          tipe: 'all',
          value: false,
          group: 'Dokumen'
        }, {
          name: 'Hapus',
          key: 'destroy_dokumen',
          icon: 'icon-bin2',
          tipe: 'all',
          value: false,
          group: 'Dokumen'
        }]
      }, {
        name: 'Kategori Dokumen',
        keterangan: 'Mengelola kategori pada dokumen',
        icon: 'icon-grid6',
        secondRow: true,
        tipe: 'all',
        permission: [{
          name: 'Lihat',
          key: 'index_dokumen_kategori',
          icon: 'icon-eye',
          tipe: 'all',
          value: false,
          group: 'Kategori Dokumen'
        }, {
          name: 'Tambah',
          key: 'create_dokumen_kategori',
          icon: 'icon-plus3',
          tipe: 'all',
          value: false,
          group: 'Kategori Dokumen'
        }, {
          name: 'Ubah',
          key: 'update_dokumen_kategori',
          icon: 'icon-pencil',
          tipe: 'all',
          value: false,
          group: 'Kategori Dokumen'
        }, {
          name: 'Hapus',
          key: 'destroy_dokumen_kategori',
          icon: 'icon-bin2',
          tipe: 'all',
          value: false,
          group: 'Kategori Dokumen'
        }]
      }, {
        name: 'Aset Tetap',
        keterangan: 'Mengelola data aset tetap pada lembaga',
        icon: 'icon-drawer3',
        secondRow: true,
        tipe: 'bkcu',
        permission: [{
          name: 'Lihat',
          key: 'index_aset_tetap',
          icon: 'icon-eye',
          tipe: 'bkcu',
          value: false,
          group: 'Aset Tetap'
        }, {
          name: 'Tambah',
          key: 'create_aset_tetap',
          icon: 'icon-plus3',
          tipe: 'bkcu',
          value: false,
          group: 'Aset Tetap'
        }, {
          name: 'Ubah',
          key: 'update_aset_tetap',
          icon: 'icon-pencil',
          tipe: 'bkcu',
          value: false,
          group: 'Aset Tetap'
        }, {
          name: 'Hapus',
          key: 'destroy_aset_tetap',
          icon: 'icon-bin2',
          tipe: 'bkcu',
          value: false,
          group: 'Aset Tetap'
        }]
      }, {
        name: 'Jenis Aset Tetap',
        keterangan: 'Mengelola data jenis aset tetap',
        icon: 'icon-drawer3',
        secondRow: true,
        tipe: 'bkcu',
        permission: [{
          name: 'Lihat',
          key: 'index_aset_tetap_jenis',
          icon: 'icon-eye',
          tipe: 'bkcu',
          value: false,
          group: 'Jenis Aset Tetap'
        }, {
          name: 'Tambah',
          key: 'create_aset_tetap_jenis',
          icon: 'icon-plus3',
          tipe: 'bkcu',
          value: false,
          group: 'Jenis Aset Tetap'
        }, {
          name: 'Ubah',
          key: 'update_aset_tetap_jenis',
          icon: 'icon-pencil',
          tipe: 'bkcu',
          value: false,
          group: 'Jenis Aset Tetap'
        }, {
          name: 'Hapus',
          key: 'destroy_aset_tetap_jenis',
          icon: 'icon-bin2',
          tipe: 'bkcu',
          value: false,
          group: 'Jenis Aset Tetap'
        }]
      }, {
        name: 'Lokasi Aset Tetap',
        keterangan: 'Mengelola data lokasi aset tetap',
        icon: 'icon-drawer3',
        secondRow: true,
        tipe: 'bkcu',
        permission: [{
          name: 'Lihat',
          key: 'index_aset_tetap_lokasi',
          icon: 'icon-eye',
          tipe: 'bkcu',
          value: false,
          group: 'Lokasi Aset Tetap'
        }, {
          name: 'Tambah',
          key: 'create_aset_tetap_lokasi',
          icon: 'icon-plus3',
          tipe: 'bkcu',
          value: false,
          group: 'Lokasi Aset Tetap'
        }, {
          name: 'Ubah',
          key: 'update_aset_tetap_lokasi',
          icon: 'icon-pencil',
          tipe: 'bkcu',
          value: false,
          group: 'Lokasi Aset Tetap'
        }, {
          name: 'Hapus',
          key: 'destroy_aset_tetap_lokasi',
          icon: 'icon-bin2',
          tipe: 'bkcu',
          value: false,
          group: 'Lokasi Aset Tetap'
        }]
      }, {
        name: 'Assesment Access',
        keterangan: 'Mengelola data self assesment Access',
        icon: 'icon-reading',
        secondRow: true,
        tipe: 'all',
        permission: [{
          name: 'Lihat',
          key: 'index_assesment_access',
          icon: 'icon-eye',
          tipe: 'all',
          value: false,
          group: 'Assesment Access'
        }, {
          name: 'Tambah',
          key: 'create_assesment_access',
          icon: 'icon-plus3',
          tipe: 'all',
          value: false,
          group: 'Assesment Access'
        }, {
          name: 'Ubah',
          key: 'update_assesment_access',
          icon: 'icon-pencil',
          tipe: 'all',
          value: false,
          group: 'Assesment Access'
        }, {
          name: 'Hapus',
          key: 'destroy_assesment_access',
          icon: 'icon-bin2',
          tipe: 'all',
          value: false,
          group: 'Assesment Access'
        }]
      }, {
        name: 'Monitoring',
        keterangan: 'Mengelola data monitoring CU',
        icon: 'icon-collaboration',
        secondRow: true,
        tipe: 'all',
        permission: [{
          name: 'Lihat',
          key: 'index_monitoring',
          icon: 'icon-eye',
          tipe: 'all',
          value: false,
          group: 'Monitoring'
        }, {
          name: 'Tambah',
          key: 'create_monitoring',
          icon: 'icon-plus3',
          tipe: 'all',
          value: false,
          group: 'Monitoring'
        }, {
          name: 'Ubah',
          key: 'update_monitoring',
          icon: 'icon-pencil',
          tipe: 'all',
          value: false,
          group: 'Monitoring'
        }, {
          name: 'Hapus',
          key: 'destroy_monitoring',
          icon: 'icon-bin2',
          tipe: 'all',
          value: false,
          group: 'Monitoring'
        }]
      }, {
        name: 'Mitra Perseorangan',
        keterangan: 'Mengelola data mitra perseorangan yang dimiliki lembaga',
        icon: 'icon-briefcase',
        secondRow: true,
        tipe: 'bkcu',
        permission: [{
          name: 'Lihat',
          key: 'index_mitra_orang',
          icon: 'icon-eye',
          tipe: 'bkcu',
          value: false,
          group: 'Mitra Perseorangan'
        }, {
          name: 'Tambah',
          key: 'create_mitra_orang',
          icon: 'icon-plus3',
          tipe: 'bkcu',
          value: false,
          group: 'Mitra Perseorangan'
        }, {
          name: 'Ubah',
          key: 'update_mitra_orang',
          icon: 'icon-pencil',
          tipe: 'bkcu',
          value: false,
          group: 'Mitra Perseorangan'
        }, {
          name: 'Hapus',
          key: 'destroy_mitra_orang',
          icon: 'icon-bin2',
          tipe: 'bkcu',
          value: false,
          group: 'Mitra Perseorangan'
        }]
      }, {
        name: 'Lembaga Mitra',
        keterangan: 'Mengelola data lembaga mitra yang dimiliki lembaga',
        icon: 'icon-briefcase',
        secondRow: true,
        tipe: 'bkcu',
        permission: [{
          name: 'Lihat',
          key: 'index_mitra_lembaga',
          icon: 'icon-eye',
          tipe: 'bkcu',
          value: false,
          group: 'Lembaga Mitra'
        }, {
          name: 'Tambah',
          key: 'create_mitra_lembaga',
          icon: 'icon-plus3',
          tipe: 'bkcu',
          value: false,
          group: 'Lembaga Mitra'
        }, {
          name: 'Ubah',
          key: 'update_mitra_lembaga',
          icon: 'icon-pencil',
          tipe: 'bkcu',
          value: false,
          group: 'Lembaga Mitra'
        }, {
          name: 'Hapus',
          key: 'destroy_mitra_lembaga',
          icon: 'icon-bin2',
          tipe: 'bkcu',
          value: false,
          group: 'Lembaga Mitra'
        }]
      }, {
        name: 'Laporan CU',
        keterangan: 'Mengelola data statistik laporan CU yang merupakan konsolidasi dari laporan TP/KP',
        icon: 'icon-stats-growth',
        secondRow: true,
        tipe: 'all',
        permission: [{
          name: 'Lihat',
          key: 'index_laporan_cu',
          icon: 'icon-eye',
          tipe: 'all',
          value: false,
          group: 'Laporan CU'
        }, {
          name: 'Tambah',
          key: 'create_laporan_cu',
          icon: 'icon-plus3',
          tipe: 'all',
          value: false,
          group: 'Laporan CU'
        }, {
          name: 'Ubah',
          key: 'update_laporan_cu',
          icon: 'icon-pencil',
          tipe: 'all',
          value: false,
          group: 'Laporan CU'
        }, {
          name: 'Hapus',
          key: 'destroy_laporan_cu',
          icon: 'icon-bin2',
          tipe: 'all',
          value: false,
          group: 'Laporan CU'
        }, {
          name: 'Diskusi',
          key: 'diskusi_laporan_cu',
          icon: 'icon-bubble7',
          tipe: 'all',
          value: false,
          group: 'Laporan CU'
        }, {
          name: 'Upload',
          key: 'upload_laporan_cu',
          icon: 'icon-file-upload',
          tipe: 'all',
          value: false,
          group: 'Laporan CU'
        }]
      }, {
        name: 'Laporan TP/KP',
        keterangan: 'Mengelola data statistik laporan TP/KP',
        icon: 'icon-stats-growth',
        secondRow: true,
        tipe: 'all',
        permission: [{
          name: 'Lihat',
          key: 'index_laporan_tp',
          icon: 'icon-eye',
          tipe: 'all',
          value: false,
          group: 'Laporan TP/KP'
        }, {
          name: 'Tambah',
          key: 'create_laporan_tp',
          icon: 'icon-plus3',
          tipe: 'all',
          value: false,
          group: 'Laporan TP/KP'
        }, {
          name: 'Ubah',
          key: 'update_laporan_tp',
          icon: 'icon-pencil',
          tipe: 'all',
          value: false,
          group: 'Laporan TP/KP'
        }, {
          name: 'Hapus',
          key: 'destroy_laporan_tp',
          icon: 'icon-bin2',
          tipe: 'all',
          value: false,
          group: 'Laporan TP/KP'
        }, {
          name: 'Diskusi',
          key: 'diskusi_laporan_tp',
          icon: 'icon-bubble7',
          tipe: 'all',
          value: false,
          group: 'Laporan TP/KP'
        }, {
          name: 'Upload',
          key: 'upload_laporan_tp',
          icon: 'icon-file-upload',
          tipe: 'all',
          value: false,
          group: 'Laporan TP/KP'
        }]
      }, {
        name: 'CoA',
        keterangan: 'Mengelola data charts of accounts',
        icon: 'icon-notebook',
        secondRow: true,
        tipe: 'all',
        permission: [{
          name: 'Lihat',
          key: 'index_coa',
          icon: 'icon-eye',
          tipe: 'all',
          value: false,
          group: 'CoA'
        }, {
          name: 'Tambah',
          key: 'create_coa',
          icon: 'icon-plus3',
          tipe: 'bkcu',
          value: false,
          group: 'CoA'
        }, {
          name: 'Ubah',
          key: 'update_coa',
          icon: 'icon-pencil',
          tipe: 'bkcu',
          value: false,
          group: 'CoA'
        }, {
          name: 'Hapus',
          key: 'destroy_coa',
          icon: 'icon-bin2',
          tipe: 'bkcu',
          value: false,
          group: 'CoA'
        }]
      }, {
        name: 'User',
        keterangan: 'Mengelola data user pada SIMO',
        icon: 'icon-users',
        secondRow: true,
        tipe: 'all',
        permission: [{
          name: 'Lihat',
          key: 'index_user',
          icon: 'icon-eye',
          tipe: 'all',
          value: false,
          group: 'User'
        }, {
          name: 'Tambah',
          key: 'create_user',
          icon: 'icon-plus3',
          tipe: 'all',
          value: false,
          group: 'User'
        }, {
          name: 'Ubah',
          key: 'update_user',
          icon: 'icon-pencil',
          tipe: 'all',
          value: false,
          group: 'User'
        }, {
          name: 'Hapus',
          key: 'destroy_user',
          icon: 'icon-bin2',
          tipe: 'all',
          value: false,
          group: 'User'
        }, {
          name: 'Reset Password',
          key: 'reset_password',
          icon: 'icon-history',
          tipe: 'all',
          value: false,
          group: 'User'
        }, {
          name: 'Status',
          key: 'status_user',
          icon: 'icon-pushpin',
          tipe: 'all',
          value: false,
          group: 'User'
        }, {
          name: 'Hak Akses',
          key: 'hak_akses_user',
          icon: 'icon-key',
          tipe: 'all',
          value: false,
          group: 'User'
        }]
      }, {
        name: 'Saran',
        keterangan: 'Melihat saran yang diberikan user untuk SIMO',
        icon: 'icon-lifebuoy',
        secondRow: true,
        tipe: 'bkcu',
        permission: [{
          name: 'Lihat',
          key: 'index_saran',
          icon: 'icon-eye',
          tipe: 'bkcu',
          value: false,
          group: 'Saran'
        }, {
          name: 'Hapus',
          key: 'destroy_saran',
          icon: 'icon-bin2',
          tipe: 'bkcu',
          value: false,
          group: 'Saran'
        }]
      }, {
        name: 'System Log',
        keterangan: 'Melihat log sistem',
        icon: 'icon-cancel-square2',
        secondRow: true,
        tipe: 'bkcu',
        permission: [{
          name: 'Lihat',
          key: 'index_error_log',
          icon: 'icon-eye',
          tipe: 'bkcu',
          value: false,
          group: 'Saran'
        }, {
          name: 'Hapus',
          key: 'destroy_error_log',
          icon: 'icon-bin2',
          tipe: 'bkcu',
          value: false,
          group: 'Saran'
        }]
      }],
      selectPeran: '',
      peran: {
        penuhBKCU: ['index_artikel', 'create_artikel', 'update_artikel', 'destroy_artikel', 'terbitkan_artikel', 'utamakan_artikel', 'create_artikel_simo', 'update_artikel_simo', 'destroy_artikel_simo', 'index_user', 'create_user', 'update_user', 'destroy_user', 'reset_password', 'status_user', 'hak_akses_user', 'index_artikel_penulis', 'create_artikel_penulis', 'update_artikel_penulis', 'destroy_artikel_penulis', 'index_artikel_kategori', 'create_artikel_kategori', 'update_artikel_kategori', 'destroy_artikel_kategori', 'index_pengumuman', 'create_pengumuman', 'update_pengumuman', 'destroy_pengumuman', 'index_saran', 'destroy_saran', 'index_error_log', 'destroy_error_log', 'index_anggota_cu', 'create_anggota_cu', 'update_anggota_cu', 'destroy_anggota_cu', 'upload_anggota_cu', 'index_saldo', 'create_saldo', 'update_saldo', 'destroy_saldo', 'index_jalinan_klaim', 'create_jalinan_klaim', 'update_jalinan_klaim', 'destroy_jalinan_klaim', 'laporan_jalinan_klaim', 'pencairan_jalinan_klaim', 'index_jalinan_iuran', 'create_jalinan_iuran', 'update_jalinan_klaim', 'destroy_jalinan_iuran', 'index_cu', 'create_cu', 'update_cu', 'destroy_cu', 'index_tp', 'create_tp', 'update_tp', 'destroy_tp', 'index_aktivis', 'create_aktivis', 'update_aktivis', 'destroy_aktivis', 'index_surat', 'create_surat', 'update_surat', 'destroy_surat', 'index_surat_masuk', 'create_surat_masuk', 'update_surat_masuk', 'destroy_surat_masuk', 'index_dokumen', 'create_dokumen', 'update_dokumen', 'destroy_dokumen', 'index_dokumen_kategori', 'create_dokumen_kategori', 'update_dokumen_kategori', 'destroy_dokumen_kategori', 'index_aset_tetap', 'create_aset_tetap', 'update_aset_tetap', 'destroy_aset_tetap', 'index_aset_tetap_jenis', 'create_aset_tetap_jenis', 'update_aset_tetap_jenis', 'destroy_aset_tetap_jenis', 'index_aset_tetap_lokasi', 'create_aset_tetap_lokasi', 'update_aset_tetap_lokasi', 'destroy_aset_tetap_lokasi', 'index_assesment_access', 'create_assesment_access', 'update_assesment_access', 'destroy_assesment_access', 'index_monitoring', 'create_monitoring', 'update_monitoring', 'destroy_monitoring', 'index_mitra_orang', 'create_mitra_orang', 'update_mitra_orang', 'destroy_mitra_orang', 'index_mitra_lembaga', 'create_mitra_lembaga', 'update_mitra_lembaga', 'destroy_mitra_lembaga', 'index_produk_cu', 'create_produk_cu', 'update_produk_cu', 'destroy_produk_cu', 'index_diklat_bkcu', 'create_diklat_bkcu', 'update_diklat_bkcu', 'destroy_diklat_bkcu', 'index_pertemuan_bkcu', 'create_pertemuan_bkcu', 'update_pertemuan_bkcu', 'destroy_pertemuan_bkcu', 'index_tempat', 'create_tempat', 'update_tempat', 'destroy_tempat', 'index_pemilihan', 'create_pemilihan', 'update_pemilihan', 'destroy_pemilihan', 'index_voting', 'create_voting', 'update_voting', 'destroy_voting', 'index_laporan_cu', 'create_laporan_cu', 'update_laporan_cu', 'destroy_laporan_cu', 'upload_laporan_cu', 'diskusi_laporan_cu', 'index_laporan_tp', 'create_laporan_tp', 'update_laporan_tp', 'destroy_laporan_tp', 'upload_laporan_tp', 'diskusi_laporan_tp', 'index_coa', 'create_coa', 'update_coa', 'destroy_coa'],
        penuhCU: ['index_artikel', 'create_artikel', 'update_artikel', 'destroy_artikel', 'terbitkan_artikel', 'utamakan_artikel', 'index_user', 'create_user', 'update_user', 'destroy_user', 'reset_password', 'status_user', 'hak_akses_user', 'index_artikel_penulis', 'create_artikel_penulis', 'update_artikel_penulis', 'destroy_artikel_penulis', 'index_artikel_kategori', 'create_artikel_kategori', 'update_artikel_kategori', 'destroy_artikel_kategori', 'index_pengumuman', 'create_pengumuman', 'update_pengumuman', 'destroy_pengumuman', 'index_anggota_cu', 'create_anggota_cu', 'update_anggota_cu', 'destroy_anggota_cu', 'index_pemilihan', 'create_pemilihan', 'update_pemilihan', 'destroy_pemilihan', 'index_voting', 'create_voting', 'update_voting', 'destroy_voting', 'index_saldo', 'create_saldo', 'update_saldo', 'destroy_saldo', 'index_jalinan_klaim', 'create_jalinan_klaim', 'update_jalinan_klaim', 'destroy_jalinan_klaim', 'laporan_jalinan_klaim', 'index_jalinan_iuran', 'create_jalinan_iuran', 'destroy_jalinan_iuran', 'index_cu', 'update_cu', 'index_tp', 'create_tp', 'update_tp', 'destroy_tp', 'index_aktivis', 'create_aktivis', 'update_aktivis', 'destroy_aktivis', 'index_surat', 'create_surat', 'update_surat', 'destroy_surat', 'index_surat_masuk', 'create_surat_masuk', 'update_surat_masuk', 'destroy_surat_masuk', 'index_dokumen', 'create_dokumen', 'update_dokumen', 'destroy_dokumen', 'index_dokumen_kategori', 'create_dokumen_kategori', 'update_dokumen_kategori', 'destroy_dokumen_kategori', 'index_assesment_access', 'create_assesment_access', 'update_assesment_access', 'destroy_assesment_access', 'index_monitoring', 'create_monitoring', 'update_monitoring', 'destroy_monitoring', 'index_produk_cu', 'create_produk_cu', 'update_produk_cu', 'destroy_produk_cu', 'index_diklat_bkcu', 'index_pertemuan_bkcu', 'index_laporan_cu', 'create_laporan_cu', 'update_laporan_cu', 'destroy_laporan_cu', 'upload_laporan_cu', 'diskusi_laporan_cu', 'index_laporan_tp', 'create_laporan_tp', 'update_laporan_tp', 'destroy_laporan_tp', 'upload_laporan_tp', 'diskusi_laporan_tp', 'index_coa'],
        monitoring: ['index_artikel', 'index_user', 'index_artikel_penulis', 'index_artikel_kategori', 'index_pengumuman', 'index_pemilihan', 'index_voting', 'index_anggota_cu', 'index_saldo', 'index_jalinan_klaim', 'laporan_jalinan_klaim', 'index_jalinan_iuran', 'index_cu', 'index_tp', 'index_aktivis', 'index_surat', 'index_surat_keluar', 'index_dokumen', 'index_dokumen_kategori', 'index_produk_cu', 'index_diklat_bkcu', 'index_pertemuan_bkcu', 'index_tempat', 'index_laporan_cu', 'diskusi_laporan_cu', 'index_laporan_tp', 'diskusi_laporan_tp', 'index_assesment_access', 'index_monitoring', 'index_aset_tetap', 'index_aset_tetap_jenis', 'index_aset_tetap_lokasi', 'index_mitra_orang', 'index_mitra_lembaga', 'index_saran', 'index_coa'],
        tataKelola: ['index_laporan_cu', 'create_laporan_cu', 'update_laporan_cu', 'destroy_laporan_cu', 'upload_laporan_cu', 'diskusi_laporan_cu', 'index_laporan_tp', 'create_laporan_tp', 'update_laporan_tp', 'destroy_laporan_tp', 'upload_laporan_tp', 'diskusi_laporan_tp', 'index_assesment_access', 'create_assesment_access', 'update_assesment_access', 'destroy_assesment_access', 'index_monitoring', 'create_monitoring', 'update_monitoring', 'destroy_monitoring', 'index_coa', 'index_pemilihan', 'index_voting'],
        organisasiBKCU: ['index_tempat', 'create_tempat', 'update_tempat', 'destroy_tempat', 'index_anggota_cu', 'create_anggota_cu', 'update_anggota_cu', 'destroy_anggota_cu', 'upload_anggota_cu', 'index_cu', 'create_cu', 'update_cu', 'destroy_cu', 'index_tp', 'create_tp', 'update_tp', 'destroy_tp', 'index_aktivis', 'create_aktivis', 'update_aktivis', 'destroy_aktivis', 'index_pemilihan', 'create_pemilihan', 'update_pemilihan', 'destroy_pemilihan', 'index_surat', 'create_surat', 'update_surat', 'destroy_surat', 'index_surat_masuk', 'create_surat_masuk', 'update_surat_masuk', 'destroy_surat_masuk', 'index_dokumen', 'create_dokumen', 'update_dokumen', 'destroy_dokumen', 'index_dokumen_kategori', 'create_dokumen_kategori', 'update_dokumen_kategori', 'destroy_dokumen_kategori', 'index_aset_tetap', 'create_aset_tetap', 'update_aset_tetap', 'destroy_aset_tetap', 'index_aset_tetap_jenis', 'create_aset_tetap_jenis', 'update_aset_tetap_jenis', 'destroy_aset_tetap_jenis', 'index_aset_tetap_lokasi', 'create_aset_tetap_lokasi', 'update_aset_tetap_lokasi', 'destroy_aset_tetap_lokasi', 'index_mitra_orang', 'create_mitra_orang', 'update_mitra_orang', 'destroy_mitra_orang', 'index_mitra_lembaga', 'create_mitra_lembaga', 'update_mitra_lembaga', 'destroy_mitra_lembaga', 'index_produk_cu', 'create_produk_cu', 'update_produk_cu', 'destroy_produk_cu'],
        organisasiCU: ['index_anggota_cu', 'create_anggota_cu', 'update_anggota_cu', 'destroy_anggota_cu', 'index_cu', 'update_cu', 'index_tp', 'create_tp', 'update_tp', 'destroy_tp', 'index_anggota_cu', 'create_anggota_cu', 'update_anggota_cu', 'destroy_anggota_cu', 'index_pemilihan', 'create_pemilihan', 'update_pemilihan', 'destroy_pemilihan', 'index_aktivis', 'create_aktivis', 'update_aktivis', 'destroy_aktivis', 'index_surat', 'create_surat', 'update_surat', 'destroy_surat', 'index_surat_masuk', 'create_surat_masuk', 'update_surat_masuk', 'destroy_surat_masuk', 'index_dokumen', 'create_dokumen', 'update_dokumen', 'destroy_dokumen', 'index_dokumen_kategori', 'create_dokumen_kategori', 'update_dokumen_kategori', 'destroy_dokumen_kategori', 'index_produk_cu', 'create_produk_cu', 'update_produk_cu', 'destroy_produk_cu'],
        kegiatanBKCU: ['index_diklat_bkcu', 'create_diklat_bkcu', 'update_diklat_bkcu', 'destroy_diklat_bkcu', 'index_pertemuan_bkcu', 'create_pertemuan_bkcu', 'update_pertemuan_bkcu', 'destroy_pertemuan_bkcu', 'index_tempat', 'create_tempat', 'update_tempat', 'destroy_tempat', 'index_cu', 'index_tp', 'index_aktivis', 'create_aktivis', 'update_aktivis', 'destroy_aktivis', 'index_voting', 'create_voting', 'update_voting', 'destroy_voting', 'index_mitra_orang', 'create_mitra_orang', 'update_mitra_orang', 'destroy_mitra_orang', 'index_mitra_lembaga', 'create_mitra_lembaga', 'update_mitra_lembaga', 'destroy_mitra_lembaga'],
        kegiatanCU: ['index_diklat_bkcu', 'index_pertemuan_bkcu', 'index_voting', 'create_voting', 'update_voting', 'destroy_voting'],
        publikasi: ['index_artikel', 'create_artikel', 'update_artikel', 'destroy_artikel', 'terbitkan_artikel', 'utamakan_artikel', 'index_artikel_penulis', 'create_artikel_penulis', 'update_artikel_penulis', 'destroy_artikel_penulis', 'index_artikel_kategori', 'create_artikel_kategori', 'update_artikel_kategori', 'destroy_artikel_kategori', 'index_pengumuman', 'create_pengumuman', 'update_pengumuman', 'destroy_pengumuman'],
        jalinan: ['index_anggota_cu', 'index_produk_cu', 'index_jalinan_klaim', 'create_jalinan_klaim', 'update_jalinan_klaim', 'destroy_jalinan_klaim', 'laporan_jalinan_klaim', 'index_jalinan_iuran', 'create_jalinan_iuran', 'update_jalinan_iuran', 'destroy_jalinan_iuran']
      }
    };
  },
  watch: {
    dataStat: function dataStat(value) {
      if (value == 'success') {
        this.hakForm = this.form;
        this.checkPeran(this.hakForm);
      }
    }
  },
  methods: {
    emitData: function emitData(value) {
      this.$emit('hakForm', value);
      this.checkPeran(value);
    },
    checkChange: function checkChange(value) {
      this.checkChangeJALINAN(value);
      this.emitData(this.hakForm);
    },
    checkChangeJALINAN: function checkChangeJALINAN(value) {
      if (value == 'verifikasi_pengurus_jalinan_klaim') {
        this.hakForm = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.pull(this.hakForm, 'verifikasi_pengawas_jalinan_klaim', 'verifikasi_manajemen_jalinan_klaim');
      } else if (value == 'verifikasi_pengawas_jalinan_klaim') {
        this.hakForm = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.pull(this.hakForm, 'verifikasi_pengurus_jalinan_klaim', 'verifikasi_manajemen_jalinan_klaim');
      } else if (value == 'verifikasi_manajemen_jalinan_klaim') {
        this.hakForm = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.pull(this.hakForm, 'verifikasi_pengawas_jalinan_klaim', 'verifikasi_pengurus_jalinan_klaim');
      }
    },
    changePeran: function changePeran(value) {
      if (this.tipeUser == 'cu') {
        if (value == 'penuh') {
          this.hakForm = this.peran.penuhCU;
        } else if (value == 'organisasi') {
          this.hakForm = this.peran.organisasiCU;
        } else if (value == 'kegiatan') {
          this.hakForm = this.peran.kegiatanCU;
        }
      } else if (this.tipeUser == 'bkcu') {
        if (value == 'penuh') {
          this.hakForm = this.peran.penuhBKCU;
        } else if (value == 'organisasi') {
          this.hakForm = this.peran.organisasiBKCU;
        } else if (value == 'kegiatan') {
          this.hakForm = this.peran.kegiatanBKCU;
        }
      }

      if (value == 'monitoring') {
        this.hakForm = this.peran.monitoring;
      } else if (value == 'tataKelola') {
        this.hakForm = this.peran.tataKelola;
      } else if (value == 'publikasi') {
        this.hakForm = this.peran.publikasi;
      } else if (value == 'kosong') {
        this.hakForm = [];
      }

      this.emitData(this.hakForm);
    },
    checkPeran: function checkPeran(value) {
      if (this.tipeUser == 'cu') {
        if (lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isEqual(lodash__WEBPACK_IMPORTED_MODULE_0___default.a.sortBy(this.hakForm), lodash__WEBPACK_IMPORTED_MODULE_0___default.a.sortBy(this.peran.penuhCU))) {
          this.selectPeran = 'penuh';
        } else if (lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isEqual(lodash__WEBPACK_IMPORTED_MODULE_0___default.a.sortBy(this.hakForm), lodash__WEBPACK_IMPORTED_MODULE_0___default.a.sortBy(this.peran.organisasiCU))) {
          this.selectPeran = 'organisasi';
        } else if (lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isEqual(lodash__WEBPACK_IMPORTED_MODULE_0___default.a.sortBy(this.hakForm), lodash__WEBPACK_IMPORTED_MODULE_0___default.a.sortBy(this.peran.kegiatanCU))) {
          this.selectPeran = 'kegiatan';
        } else if (lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isEqual(lodash__WEBPACK_IMPORTED_MODULE_0___default.a.sortBy(this.hakForm), lodash__WEBPACK_IMPORTED_MODULE_0___default.a.sortBy(this.peran.monitoring))) {
          this.selectPeran = 'monitoring';
        } else if (lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isEqual(lodash__WEBPACK_IMPORTED_MODULE_0___default.a.sortBy(this.hakForm), lodash__WEBPACK_IMPORTED_MODULE_0___default.a.sortBy(this.peran.tataKelola))) {
          this.selectPeran = 'tataKelola';
        } else if (lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isEqual(lodash__WEBPACK_IMPORTED_MODULE_0___default.a.sortBy(this.hakForm), lodash__WEBPACK_IMPORTED_MODULE_0___default.a.sortBy(this.peran.publikasi))) {
          this.selectPeran = 'publikasi';
        } else if (this.hakForm.length < 1) {
          this.selectPeran = 'kosong';
        } else {
          this.selectPeran = 'custom';
        }
      } else if (this.tipeUser == 'bkcu') {
        if (lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isEqual(lodash__WEBPACK_IMPORTED_MODULE_0___default.a.sortBy(this.hakForm), lodash__WEBPACK_IMPORTED_MODULE_0___default.a.sortBy(this.peran.penuhBKCU))) {
          this.selectPeran = 'penuh';
        } else if (lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isEqual(lodash__WEBPACK_IMPORTED_MODULE_0___default.a.sortBy(this.hakForm), lodash__WEBPACK_IMPORTED_MODULE_0___default.a.sortBy(this.peran.organisasiBKCU))) {
          this.selectPeran = 'organisasi';
        } else if (lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isEqual(lodash__WEBPACK_IMPORTED_MODULE_0___default.a.sortBy(this.hakForm), lodash__WEBPACK_IMPORTED_MODULE_0___default.a.sortBy(this.peran.kegiatanBKCU))) {
          this.selectPeran = 'kegiatan';
        } else if (lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isEqual(lodash__WEBPACK_IMPORTED_MODULE_0___default.a.sortBy(this.hakForm), lodash__WEBPACK_IMPORTED_MODULE_0___default.a.sortBy(this.peran.monitoring))) {
          this.selectPeran = 'monitoring';
        } else if (lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isEqual(lodash__WEBPACK_IMPORTED_MODULE_0___default.a.sortBy(this.hakForm), lodash__WEBPACK_IMPORTED_MODULE_0___default.a.sortBy(this.peran.tataKelola))) {
          this.selectPeran = 'tataKelola';
        } else if (lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isEqual(lodash__WEBPACK_IMPORTED_MODULE_0___default.a.sortBy(this.hakForm), lodash__WEBPACK_IMPORTED_MODULE_0___default.a.sortBy(this.peran.publikasi))) {
          this.selectPeran = 'publikasi';
        } else if (this.hakForm.length < 1) {
          this.selectPeran = 'kosong';
        } else {
          this.selectPeran = 'custom';
        }
      }
    },
    checkGroup: function checkGroup(value) {
      for (var key in this.hakAkses) {
        for (var key2 in this.hakAkses[key].permission) {
          if (this.hakAkses[key].permission[key2].group == value) {
            if (!lodash__WEBPACK_IMPORTED_MODULE_0___default.a.includes(this.hakForm, this.hakAkses[key].permission[key2].key)) {
              if (this.hakAkses[key].permission[key2].tipe == 'all') {
                this.hakForm.push(this.hakAkses[key].permission[key2].key);
              } else {
                if (this.hakAkses[key].permission[key2].tipe == this.tipeUser) {
                  this.hakForm.push(this.hakAkses[key].permission[key2].key);
                }
              }
            }
          }
        }
      }

      this.emitData(this.hakForm);
    },
    unCheckGroup: function unCheckGroup(value) {
      for (var key in this.hakAkses) {
        for (var key2 in this.hakAkses[key].permission) {
          if (this.hakAkses[key].permission[key2].group == value) {
            if (this.hakAkses[key].permission[key2].tipe == 'all') {
              this.hakForm.splice(this.hakForm.indexOf(this.hakAkses[key].permission[key2].key), 1);
            } else {
              if (this.hakAkses[key].permission[key2].tipe == this.tipeUser) {
                this.hakForm.splice(this.hakForm.indexOf(this.hakAkses[key].permission[key2].key), 1);
              }
            }
          }
        }
      }

      this.emitData(this.hakForm);
    }
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapGetters"])('auth', {
    currentUser: 'currentUser'
  }))
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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/user/identitas.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/views/user/identitas.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  methods: {
    deleteSelected: function deleteSelected() {
      this.$emit('deleteSelected');
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/hakAkses.vue?vue&type=template&id=0bfeeb1c&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/hakAkses.vue?vue&type=template&id=0bfeeb1c& ***!
  \******************************************************************************************************************************************************************************************************************/
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
    _vm.dataStat == "success"
      ? _c(
          "div",
          { staticClass: "row" },
          [
            _vm.isPeran
              ? _c("div", { staticClass: "col-lg-12" }, [
                  _c("div", { staticClass: "form-group" }, [
                    _c("div", { staticClass: "input-group" }, [
                      _vm._m(0),
                      _vm._v(" "),
                      _c(
                        "select",
                        {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.selectPeran,
                              expression: "selectPeran",
                            },
                          ],
                          staticClass: "form-control",
                          attrs: { name: "peran", "data-width": "100%" },
                          on: {
                            change: [
                              function ($event) {
                                var $$selectedVal = Array.prototype.filter
                                  .call($event.target.options, function (o) {
                                    return o.selected
                                  })
                                  .map(function (o) {
                                    var val = "_value" in o ? o._value : o.value
                                    return val
                                  })
                                _vm.selectPeran = $event.target.multiple
                                  ? $$selectedVal
                                  : $$selectedVal[0]
                              },
                              function ($event) {
                                return _vm.changePeran($event.target.value)
                              },
                            ],
                          },
                        },
                        [
                          _c(
                            "option",
                            {
                              attrs: { disabled: "", value: "", selected: "" },
                            },
                            [_vm._v("Silahkan pilih peran user")]
                          ),
                          _vm._v(" "),
                          _c("option", { attrs: { value: "penuh" } }, [
                            _vm._v("Akses Penuh"),
                          ]),
                          _vm._v(" "),
                          _c("option", { attrs: { value: "monitoring" } }, [
                            _vm._v("Monitoring"),
                          ]),
                          _vm._v(" "),
                          _c("option", { attrs: { value: "tataKelola" } }, [
                            _vm._v("Tata Kelola"),
                          ]),
                          _vm._v(" "),
                          _c("option", { attrs: { value: "organisasi" } }, [
                            _vm._v("Organisasi"),
                          ]),
                          _vm._v(" "),
                          _c("option", { attrs: { value: "kegiatan" } }, [
                            _vm._v("Kegiatan"),
                          ]),
                          _vm._v(" "),
                          _c("option", { attrs: { value: "publikasi" } }, [
                            _vm._v("Publikasi"),
                          ]),
                          _vm._v(" "),
                          _c("option", { attrs: { value: "kosong" } }, [
                            _vm._v("kosong"),
                          ]),
                          _vm._v(" "),
                          _c("option", { attrs: { value: "custom" } }, [
                            _vm._v("Custom"),
                          ]),
                        ]
                      ),
                    ]),
                  ]),
                ])
              : _vm._e(),
            _vm._v(" "),
            _vm._l(_vm.hakAkses, function (akses) {
              return _vm.tipeUser === akses.tipe || akses.tipe === "all"
                ? _c("div", { staticClass: "col-lg-6 col-md-12" }, [
                    _c("div", { staticClass: "card" }, [
                      _c(
                        "div",
                        {
                          staticClass:
                            "card-header bg-white header-elements-inline",
                        },
                        [
                          _c("h6", { staticClass: "card-title" }, [
                            _c("i", { staticClass: "mr-1", class: akses.icon }),
                            _vm._v(" " + _vm._s(akses.name) + "\r\n\t\t\t\t\t"),
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "header-elements" }, [
                            _c("div", { staticClass: "list-icons" }, [
                              _c(
                                "a",
                                {
                                  staticClass: "list-icons-item",
                                  attrs: { href: "#" },
                                  on: {
                                    click: function ($event) {
                                      $event.preventDefault()
                                      return _vm.checkGroup(akses.name)
                                    },
                                  },
                                },
                                [
                                  _c("i", {
                                    staticClass: "icon-checkbox-checked2",
                                  }),
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "a",
                                {
                                  staticClass: "list-icons-item",
                                  attrs: { href: "#" },
                                  on: {
                                    click: function ($event) {
                                      $event.preventDefault()
                                      return _vm.unCheckGroup(akses.name)
                                    },
                                  },
                                },
                                [
                                  _c("i", {
                                    staticClass: "icon-checkbox-unchecked2",
                                  }),
                                ]
                              ),
                            ]),
                          ]),
                        ]
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "card-body" }, [
                        _c("span", [_vm._v(_vm._s(akses.keterangan))]),
                        _vm._v(" "),
                        _c("hr", { staticClass: "mt-1" }),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "row" },
                          _vm._l(akses.permission, function (permission) {
                            return _vm.tipeUser == permission.tipe ||
                              permission.tipe == "all" ||
                              permission.tipe == "bkcu approve"
                              ? _c("div", { staticClass: "col-sm-3 mb-2" }, [
                                  permission.tipe == "bkcu approve"
                                    ? _c("div", [
                                        _vm.currentUser.id_cu == 0
                                          ? _c(
                                              "div",
                                              { staticClass: "form-check" },
                                              [
                                                _c(
                                                  "label",
                                                  {
                                                    staticStyle: {
                                                      cursor: "pointer",
                                                    },
                                                  },
                                                  [
                                                    permission.type != "empty"
                                                      ? _c("input", {
                                                          directives: [
                                                            {
                                                              name: "model",
                                                              rawName:
                                                                "v-model",
                                                              value:
                                                                _vm.hakForm,
                                                              expression:
                                                                "hakForm",
                                                            },
                                                          ],
                                                          staticClass:
                                                            "form-check-input",
                                                          attrs: {
                                                            type: "checkbox",
                                                          },
                                                          domProps: {
                                                            value:
                                                              permission.key,
                                                            checked:
                                                              Array.isArray(
                                                                _vm.hakForm
                                                              )
                                                                ? _vm._i(
                                                                    _vm.hakForm,
                                                                    permission.key
                                                                  ) > -1
                                                                : _vm.hakForm,
                                                          },
                                                          on: {
                                                            change: [
                                                              function (
                                                                $event
                                                              ) {
                                                                var $$a =
                                                                    _vm.hakForm,
                                                                  $$el =
                                                                    $event.target,
                                                                  $$c =
                                                                    $$el.checked
                                                                      ? true
                                                                      : false
                                                                if (
                                                                  Array.isArray(
                                                                    $$a
                                                                  )
                                                                ) {
                                                                  var $$v =
                                                                      permission.key,
                                                                    $$i =
                                                                      _vm._i(
                                                                        $$a,
                                                                        $$v
                                                                      )
                                                                  if (
                                                                    $$el.checked
                                                                  ) {
                                                                    $$i < 0 &&
                                                                      (_vm.hakForm =
                                                                        $$a.concat(
                                                                          [$$v]
                                                                        ))
                                                                  } else {
                                                                    $$i > -1 &&
                                                                      (_vm.hakForm =
                                                                        $$a
                                                                          .slice(
                                                                            0,
                                                                            $$i
                                                                          )
                                                                          .concat(
                                                                            $$a.slice(
                                                                              $$i +
                                                                                1
                                                                            )
                                                                          ))
                                                                  }
                                                                } else {
                                                                  _vm.hakForm =
                                                                    $$c
                                                                }
                                                              },
                                                              function (
                                                                $event
                                                              ) {
                                                                return _vm.checkChange(
                                                                  $event.target
                                                                    .value
                                                                )
                                                              },
                                                            ],
                                                          },
                                                        })
                                                      : _vm._e(),
                                                    _vm._v(" "),
                                                    _c("i", {
                                                      class: permission.icon,
                                                    }),
                                                    _vm._v(
                                                      "   " +
                                                        _vm._s(
                                                          permission.name
                                                        ) +
                                                        "\r\n\t\t\t\t\t\t\t\t\t"
                                                    ),
                                                  ]
                                                ),
                                              ]
                                            )
                                          : _c(
                                              "div",
                                              { staticClass: "form-check" },
                                              [
                                                _c("label", [
                                                  permission.type != "empty"
                                                    ? _c("input", {
                                                        directives: [
                                                          {
                                                            name: "model",
                                                            rawName: "v-model",
                                                            value: _vm.hakForm,
                                                            expression:
                                                              "hakForm",
                                                          },
                                                        ],
                                                        staticClass:
                                                          "form-check-input",
                                                        attrs: {
                                                          type: "checkbox",
                                                          disabled: "",
                                                        },
                                                        domProps: {
                                                          value: permission.key,
                                                          checked:
                                                            Array.isArray(
                                                              _vm.hakForm
                                                            )
                                                              ? _vm._i(
                                                                  _vm.hakForm,
                                                                  permission.key
                                                                ) > -1
                                                              : _vm.hakForm,
                                                        },
                                                        on: {
                                                          change: function (
                                                            $event
                                                          ) {
                                                            var $$a =
                                                                _vm.hakForm,
                                                              $$el =
                                                                $event.target,
                                                              $$c = $$el.checked
                                                                ? true
                                                                : false
                                                            if (
                                                              Array.isArray($$a)
                                                            ) {
                                                              var $$v =
                                                                  permission.key,
                                                                $$i = _vm._i(
                                                                  $$a,
                                                                  $$v
                                                                )
                                                              if (
                                                                $$el.checked
                                                              ) {
                                                                $$i < 0 &&
                                                                  (_vm.hakForm =
                                                                    $$a.concat([
                                                                      $$v,
                                                                    ]))
                                                              } else {
                                                                $$i > -1 &&
                                                                  (_vm.hakForm =
                                                                    $$a
                                                                      .slice(
                                                                        0,
                                                                        $$i
                                                                      )
                                                                      .concat(
                                                                        $$a.slice(
                                                                          $$i +
                                                                            1
                                                                        )
                                                                      ))
                                                              }
                                                            } else {
                                                              _vm.hakForm = $$c
                                                            }
                                                          },
                                                        },
                                                      })
                                                    : _vm._e(),
                                                  _vm._v(" "),
                                                  _c("i", {
                                                    class: permission.icon,
                                                  }),
                                                  _vm._v(
                                                    "   " +
                                                      _vm._s(permission.name) +
                                                      "\r\n\t\t\t\t\t\t\t\t\t"
                                                  ),
                                                ]),
                                              ]
                                            ),
                                      ])
                                    : _c("div", { staticClass: "form-check" }, [
                                        _c(
                                          "label",
                                          {
                                            staticStyle: { cursor: "pointer" },
                                          },
                                          [
                                            permission.type != "empty"
                                              ? _c("input", {
                                                  directives: [
                                                    {
                                                      name: "model",
                                                      rawName: "v-model",
                                                      value: _vm.hakForm,
                                                      expression: "hakForm",
                                                    },
                                                  ],
                                                  staticClass:
                                                    "form-check-input",
                                                  attrs: { type: "checkbox" },
                                                  domProps: {
                                                    value: permission.key,
                                                    checked: Array.isArray(
                                                      _vm.hakForm
                                                    )
                                                      ? _vm._i(
                                                          _vm.hakForm,
                                                          permission.key
                                                        ) > -1
                                                      : _vm.hakForm,
                                                  },
                                                  on: {
                                                    change: [
                                                      function ($event) {
                                                        var $$a = _vm.hakForm,
                                                          $$el = $event.target,
                                                          $$c = $$el.checked
                                                            ? true
                                                            : false
                                                        if (
                                                          Array.isArray($$a)
                                                        ) {
                                                          var $$v =
                                                              permission.key,
                                                            $$i = _vm._i(
                                                              $$a,
                                                              $$v
                                                            )
                                                          if ($$el.checked) {
                                                            $$i < 0 &&
                                                              (_vm.hakForm =
                                                                $$a.concat([
                                                                  $$v,
                                                                ]))
                                                          } else {
                                                            $$i > -1 &&
                                                              (_vm.hakForm = $$a
                                                                .slice(0, $$i)
                                                                .concat(
                                                                  $$a.slice(
                                                                    $$i + 1
                                                                  )
                                                                ))
                                                          }
                                                        } else {
                                                          _vm.hakForm = $$c
                                                        }
                                                      },
                                                      function ($event) {
                                                        return _vm.checkChange(
                                                          $event.target.value
                                                        )
                                                      },
                                                    ],
                                                  },
                                                })
                                              : _vm._e(),
                                            _vm._v(" "),
                                            _c("i", { class: permission.icon }),
                                            _vm._v(
                                              "   " +
                                                _vm._s(permission.name) +
                                                "\r\n\t\t\t\t\t\t\t\t"
                                            ),
                                          ]
                                        ),
                                      ]),
                                ])
                              : _vm._e()
                          }),
                          0
                        ),
                      ]),
                    ]),
                  ])
                : _vm._e()
            }),
          ],
          2
        )
      : _vm.dataStat == "loading"
      ? _c("div", { staticClass: "row" }, [_vm._m(1)])
      : _c("div", { staticClass: "row" }, [_vm._m(2)]),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "input-group-prepend" }, [
      _c("span", { staticClass: "input-group-text" }, [_vm._v("Pilih Peran")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-12" }, [
      _c("div", { staticClass: "card" }, [
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
              [
                _c("span", { staticClass: "sr-only" }, [
                  _vm._v("100% Complete"),
                ]),
              ]
            ),
          ]),
        ]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-12" }, [
      _c("div", { staticClass: "card" }, [
        _c("div", { staticClass: "card-body" }, [
          _c("h4", [_vm._v("Oops terjadi kesalahan")]),
        ]),
      ]),
    ])
  },
]
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/user/identitas.vue?vue&type=template&id=7aa7633c&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/views/user/identitas.vue?vue&type=template&id=7aa7633c& ***!
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
  return _c("div", { staticClass: "card" }, [
    _c(
      "div",
      { staticClass: "card-header bg-info text-white header-elements-inline" },
      [
        _c("h6", { staticClass: "card-title" }, [
          _vm._v(_vm._s(_vm.itemData.name)),
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "header-elements" }, [
          _c(
            "button",
            {
              staticClass: "btn btn-danger",
              attrs: { type: "button" },
              on: {
                click: function ($event) {
                  $event.preventDefault()
                  return _vm.deleteSelected.apply(null, arguments)
                },
              },
            },
            [
              _c("i", { staticClass: "icon-cross2 mr-2" }),
              _vm._v(" Batal\n      "),
            ]
          ),
        ]),
      ]
    ),
    _vm._v(" "),
    _c("div", { staticClass: "card-body" }, [
      _c("div", { staticClass: "media flex-column flex-sm-row mt-0 mb-3" }, [
        _c("div", { staticClass: "mr-sm-3 mb-2 mb-sm-0" }, [
          _c("div", { staticClass: "card-img-actions" }, [
            _vm.itemData.gambar
              ? _c("img", {
                  staticClass: "img-fluid img-preview rounded",
                  attrs: {
                    src: "/images/aktivis/" + _vm.itemData.gambar + ".jpg",
                  },
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
            _c("div", { staticClass: "col-sm-6" }, [
              _c("ul", { staticClass: "list list-unstyled mb-0" }, [
                _c("li", [
                  _c("b", [_vm._v("Gender:")]),
                  _vm._v(
                    "\n                " +
                      _vm._s(_vm.itemData.kelamin) +
                      "\n              "
                  ),
                ]),
                _vm._v(" "),
                _c("li", [
                  _c("b", [_vm._v("Tempat Lahir:")]),
                  _vm._v(
                    "\n                " +
                      _vm._s(_vm.itemData.tempat_lahir) +
                      "\n              "
                  ),
                ]),
                _vm._v(" "),
                _c("li", [
                  _c("b", [_vm._v("Tgl. Lahir:")]),
                  _vm._v(" "),
                  _vm.itemData.tanggal_lahir
                    ? _c("span", {
                        domProps: {
                          innerHTML: _vm._s(
                            _vm.$options.filters.date(
                              _vm.itemData.tanggal_lahir
                            )
                          ),
                        },
                      })
                    : _c("span", [_vm._v("-")]),
                ]),
                _vm._v(" "),
                _c("li", [
                  _c("b", [_vm._v("Status:")]),
                  _vm._v(
                    "\n                " +
                      _vm._s(_vm.itemData.status) +
                      "\n              "
                  ),
                ]),
                _vm._v(" "),
                _c("li", [
                  _c("b", [_vm._v("Tinggi:")]),
                  _vm._v(
                    "\n                " +
                      _vm._s(_vm.itemData.tinggi) +
                      "\n              "
                  ),
                ]),
                _vm._v(" "),
                _c("li", [
                  _c("b", [_vm._v("Agama:")]),
                  _vm._v(
                    "\n                " +
                      _vm._s(_vm.itemData.agama) +
                      "\n              "
                  ),
                ]),
              ]),
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-sm-6" }, [
              _c("ul", { staticClass: "list list-unstyled mb-0" }, [
                _vm.itemData.pekerjaan_aktif &&
                _vm.itemData.pekerjaan_aktif.tipe == 1
                  ? _c("li", [
                      _c("b", [_vm._v("CU:")]),
                      _vm._v(
                        "\n                " +
                          _vm._s(_vm.itemData.pekerjaan_aktif.cu.name) +
                          "\n              "
                      ),
                    ])
                  : _vm.itemData.pekerjaan_aktif &&
                    _vm.itemData.pekerjaan_aktif.tipe == 2
                  ? _c("li", [
                      _c("b", [_vm._v("Lembaga:")]),
                      _vm._v(
                        "\n                " +
                          _vm._s(
                            _vm.itemData.pekerjaan_aktif.lembaga_lain.name
                          ) +
                          "\n              "
                      ),
                    ])
                  : _vm.itemData.pekerjaan_aktif &&
                    _vm.itemData.pekerjaan_aktif.tipe == 3
                  ? _c("li", [
                      _c("b", [_vm._v("Lembaga:")]),
                      _vm._v(" PUSKOPCUINA\n              "),
                    ])
                  : _vm._e(),
                _vm._v(" "),
                _c("li", [
                  _c("b", [_vm._v("Tingkat:")]),
                  _vm._v(
                    "\n                " +
                      _vm._s(
                        _vm.itemData.pekerjaan_aktif
                          ? _vm.$options.filters.checkTingkatAktivis(
                              _vm.itemData.pekerjaan_aktif.tingkat
                            )
                          : ""
                      ) +
                      "\n              "
                  ),
                ]),
                _vm._v(" "),
                _c("li", [
                  _c("b", [_vm._v("Jabatan:")]),
                  _vm._v(
                    "\n                " +
                      _vm._s(
                        _vm.itemData.pekerjaan_aktif
                          ? _vm.itemData.pekerjaan_aktif.name
                          : ""
                      ) +
                      "\n              "
                  ),
                ]),
                _vm._v(" "),
                _c("li", [
                  _c("b", [_vm._v("Pendidikan:")]),
                  _vm._v(
                    "\n                " +
                      _vm._s(
                        _vm.itemData.pendidikan_tertinggi
                          ? _vm.itemData.pendidikan_tertinggi.tingkat
                          :  true
                          ? _vm.itemData.pendidikan_tertinggi.name
                          : undefined
                      ) +
                      "\n              "
                  ),
                ]),
              ]),
            ]),
          ]),
        ]),
      ]),
    ]),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/assets/js/components/hakAkses.vue":
/*!*****************************************************!*\
  !*** ./resources/assets/js/components/hakAkses.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _hakAkses_vue_vue_type_template_id_0bfeeb1c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hakAkses.vue?vue&type=template&id=0bfeeb1c& */ "./resources/assets/js/components/hakAkses.vue?vue&type=template&id=0bfeeb1c&");
/* harmony import */ var _hakAkses_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hakAkses.vue?vue&type=script&lang=js& */ "./resources/assets/js/components/hakAkses.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _hakAkses_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _hakAkses_vue_vue_type_template_id_0bfeeb1c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _hakAkses_vue_vue_type_template_id_0bfeeb1c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/components/hakAkses.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/hakAkses.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/assets/js/components/hakAkses.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_hakAkses_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./hakAkses.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/hakAkses.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_hakAkses_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/hakAkses.vue?vue&type=template&id=0bfeeb1c&":
/*!************************************************************************************!*\
  !*** ./resources/assets/js/components/hakAkses.vue?vue&type=template&id=0bfeeb1c& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_hakAkses_vue_vue_type_template_id_0bfeeb1c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./hakAkses.vue?vue&type=template&id=0bfeeb1c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/hakAkses.vue?vue&type=template&id=0bfeeb1c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_hakAkses_vue_vue_type_template_id_0bfeeb1c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_hakAkses_vue_vue_type_template_id_0bfeeb1c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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

/***/ "./resources/assets/js/views/user/identitas.vue":
/*!******************************************************!*\
  !*** ./resources/assets/js/views/user/identitas.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _identitas_vue_vue_type_template_id_7aa7633c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./identitas.vue?vue&type=template&id=7aa7633c& */ "./resources/assets/js/views/user/identitas.vue?vue&type=template&id=7aa7633c&");
/* harmony import */ var _identitas_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./identitas.vue?vue&type=script&lang=js& */ "./resources/assets/js/views/user/identitas.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _identitas_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _identitas_vue_vue_type_template_id_7aa7633c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _identitas_vue_vue_type_template_id_7aa7633c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/views/user/identitas.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/views/user/identitas.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/assets/js/views/user/identitas.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_identitas_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./identitas.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/user/identitas.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_identitas_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/views/user/identitas.vue?vue&type=template&id=7aa7633c&":
/*!*************************************************************************************!*\
  !*** ./resources/assets/js/views/user/identitas.vue?vue&type=template&id=7aa7633c& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_identitas_vue_vue_type_template_id_7aa7633c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./identitas.vue?vue&type=template&id=7aa7633c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/user/identitas.vue?vue&type=template&id=7aa7633c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_identitas_vue_vue_type_template_id_7aa7633c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_identitas_vue_vue_type_template_id_7aa7633c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);