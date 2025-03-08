import header from "./components/header.vue";
import footer from "./components/footer.vue";
import login from "./views/login.vue";

// if error : change system.import() to import()
const dashboard = () => import("./views/dashboard.vue");
const notification = () => import("./views/sistem/notification.vue");
const changelog = () => import("./views/sistem/changelog.vue");
const saran = () => import("./views/saran/index.vue");
const errorLog = () => import("./views/errorLog/index.vue");
const activityLog = () => import("./views/user/indexAktivitas.vue");
const pengumuman = () => import("./views/pengumuman/index.vue");
const notFound = () => import("./views/notFound.vue");
const media = () => import("./views/media/index.vue");
const media_form = () => import("./views/media/form.vue");
const artikel = () => import("./views/artikel/index.vue");
const artikel_form = () => import("./views/artikel/form.vue");
const artikelPenulis = () => import("./views/artikelPenulis/index.vue");
const artikelPenulis_form = () => import("./views/artikelPenulis/form.vue");
const artikelKategori = () => import("./views/artikelKategori/index.vue");
const artikelKategori_form = () => import("./views/artikelKategori/form.vue");
const artikelSimo = () => import("./views/artikelSimo/index.vue");
const artikelSimo_form = () => import("./views/artikelSimo/form.vue");
const laporanCu = () => import("./views/laporanCu/index.vue");
const laporanCu_form = () => import("./views/laporanCu/form.vue");
const laporanCu_detail = () => import("./views/laporanCu/detail.vue");
const laporanCu_draft = () => import("./views/laporanCu/draft.vue");
const laporanTp_draft = () => import("./views/laporanCu/draftTp.vue");
const laporanGerakan = () => import("./views/laporanGerakan/index.vue");
const laporanGerakan_form = () => import("./views/laporanGerakan/form.vue");
const coa = () => import("./views/coa/index.vue");
const coa_form = () => import("./views/coa/form.vue");
const kegiatanBKCU = () => import("./views/kegiatanBKCU/index.vue");
const kegiatanBKCU_form = () => import("./views/kegiatanBKCU/form.vue");
const kegiatanBKCU_detail = () => import("./views/kegiatanBKCU/detail.vue");
const kegiatanPeserta = () => import("./views/kegiatanPeserta/index.vue");
const sertifikatKegiatan = () => import("./views/sertifikatKegiatan/index.vue");
const sertifikatKegiatan_form = () => import("./views/sertifikatKegiatan/form.vue");
const kodeKegiatan = () => import("./views/kodeKegiatan/index.vue");
const kodeKegiatan_form = () => import("./views/kodeKegiatan/form.vue");
const tempat = () => import("./views/tempat/index.vue");
const tempat_form = () => import("./views/tempat/form.vue");
const cu = () => import("./views/cu/index.vue");
const cu_form = () => import("./views/cu/form.vue");
const tp = () => import("./views/tp/index.vue");
const tp_form = () => import("./views/tp/form.vue");
const aktivis = () => import("./views/aktivis/index.vue");
const aktivis_form = () => import("./views/aktivis/form.vue");
const aktivis_riwayat = () => import("./views/aktivis/riwayat.vue");
const asetTetap = () => import("./views/asetTetap/index.vue");
const asetTetap_form = () => import("./views/asetTetap/form.vue");
const asetTetap_detail = () => import("./views/asetTetap/detail.vue");
const asetTetapJenis = () => import("./views/asetTetapJenis/index.vue");
const asetTetapJenis_form = () => import("./views/asetTetapJenis/create.vue");
const asetTetapKelompok = () => import("./views/asetTetapKelompok/index.vue");
const asetTetapKelompok_form = () => import("./views/asetTetapKelompok/create.vue");
const asetTetapGolongan = () => import("./views/asetTetapGolongan/index.vue");
const asetTetapGolongan_form = () => import("./views/asetTetapGolongan/create.vue");
const asetTetapLokasi = () => import("./views/asetTetapLokasi/index.vue");
const asetTetapLokasi_form = () => import("./views/asetTetapLokasi/create.vue");
const surat = () => import("./views/surat/index.vue");
const surat_form = () => import("./views/surat/form.vue");
const suratKategori = () => import("./views/suratKategori/index.vue");
const suratKategori_form = () => import("./views/suratKategori/form.vue");
const suratKode = () => import("./views/suratKode/index.vue");
const suratKode_form = () => import("./views/suratKode/form.vue");
const suratMasuk = () => import("./views/suratMasuk/index.vue");
const suratMasuk_form = () => import("./views/suratMasuk/form.vue");
const dokumen = () => import("./views/dokumen/index.vue");
const dokumen_form = () => import("./views/dokumen/form.vue");
const dokumenKategori = () => import("./views/dokumenKategori/index.vue");
const dokumenKategori_form = () => import("./views/dokumenKategori/form.vue");
const mitraOrang = () => import("./views/mitraOrang/index.vue");
const mitraOrang_form = () => import("./views/mitraOrang/form.vue");
const mitraLembaga = () => import("./views/mitraLembaga/index.vue");
const mitraLembaga_form = () => import("./views/mitraLembaga/form.vue");
const anggotaCu = () => import("./views/anggotaCu/index.vue");
const anggotaCu_informasi = () => import("./views/anggotaCu/informasi.vue");
const anggotaCu_form = () => import("./views/anggotaCu/form.vue");
const anggotaCu_produk = () => import("./views/anggotaCu/produk.vue");
const anggotaCuDraft = () => import("./views/anggotaCuDraft/index.vue");
const anggotaCuDraft_form = () => import("./views/anggotaCuDraft/form.vue");
const anggotaProdukCuDraft = () => import("./views/anggotaProdukCuDraft/index.vue");
const anggotaProdukCuDraft_form = () => import("./views/anggotaProdukCuDraft/form.vue");
const saldo = () => import("./views/saldo/index.vue");
const jalinanKlaim = () => import("./views/jalinanKlaim/index.vue");
const jalinanKlaim_form = () => import("./views/jalinanKlaim/form.vue");
const jalinanCair = () => import("./views/jalinanCair/index.vue");
const jalinanLaporan_KlaimCu = () => import("./views/jalinanLaporan/cu.vue");
const jalinanLaporan_KlaimPenyebab = () => import("./views/jalinanLaporan/penyebab.vue");
const jalinanLaporan_KlaimUsia = () => import("./views/jalinanLaporan/usia.vue");
const jalinanLaporan_KlaimLama = () => import("./views/jalinanLaporan/lama.vue");
const produkCu = () => import("./views/produkCu/index.vue");
const produkCu_form = () => import("./views/produkCu/form.vue");
const user = () => import("./views/user/index.vue");
const user_form = () => import("./views/user/form.vue");
const user_aktivitas = () => import("./views/user/aktivitas.vue");
const profile = () => import("./views/user/profile.vue");
const assesmentAccess = () => import("./views/assesmentAccess/index.vue");
const assesmentAccess_form = () => import("./views/assesmentAccess/form.vue");
const monitoring = () => import("./views/monitoring/index.vue");
const monitoring_form = () => import("./views/monitoring/form.vue");
const monitoring_detail = () => import("./views/monitoring/detail.vue");
const monitoring_konsolidasi = () => import("./views/monitoring/indexKonsolidasi.vue");
const pemilihan = () => import("./views/pemilihan/index.vue");
const pemilihan_form = () => import("./views/pemilihan/form.vue");
const pemilihan_detail = () => import("./views/pemilihan/detail.vue");
const pemilihan_pilih = () => import("./views/pemilihan/pilih.vue");
const pemilihan_input = () => import("./views/pemilihan/input.vue");
const voting = () => import("./views/voting/index.vue");
const voting_form = () => import("./views/voting/form.vue");
const voting_detail = () => import("./views/voting/detail.vue");
const voting_pilih = () => import("./views/voting/pilih.vue");
const voting_input = () => import("./views/voting/input.vue");
const jalinanIuran = () => import("./views/jalinanIuran/index.vue");
const jalinanIuran_form = () => import("./views/jalinanIuran/form.vue");
const jalinanIuran_detail = () => import("./views/jalinanIuran/detail.vue");
const dataAnggotaUpload = () => import("./views/sistem/dataAnggotaUpload.vue");
const kubn = () => import("./views/kubn/index.vue");
const kubn_form = () => import("./views/kubn/form.vue");
const kubn_detail = () => import("./views/kubn/detail.vue");
const kubnUsaha = () => import("./views/kubnUsaha/index.vue");
const kubnUsaha_form = () => import("./views/kubnUsaha/form.vue");
const kombas = () => import("./views/kombas/index.vue");
const kombas_form = () => import("./views/kombas/form.vue");
const enterpreneur = () => import("./views/enterpreneur/index.vue");
const enterpreneur_form = () => import("./views/enterpreneur/form.vue");
const umkm = () => import("./views/umkm/index.vue");
const umkm_form = () => import("./views/umkm/form.vue");
const keahlian = () => import("./views/keahlian/index.vue");
const keahlian_form = () => import("./views/keahlian/form.vue");
const jenisDiklat = () => import("./views/jenisDiklat/index.vue");
const jenisDiklat_form = () => import("./views/jenisDiklat/form.vue");
const mentor = () => import("./views/mentor/index.vue");
const mentor_form = () => import("./views/mentor/form.vue");
const fasilitator = () => import("./views/fasilitator/index.vue");
const fasilitator_form = () => import("./views/fasilitator/form.vue");
const assesmentCuleg = () => import("./views/assesmentCuleg/index.vue");
const assesmentCuleg_form = () => import("./views/assesmentCuleg/form.vue");

const routes = [
  // login
  {
    path: "/login",
    name: "login",
    components: { default: login },
    meta: { notLoggedIn: true },
  },
  {
    path: "/login/redirect",
    name: "loginRedirect",
    components: { default: login },
    meta: { notLoggedIn: true },
  },

  // user
  {
    path: "/user/cu/:cu",
    name: "userCu",
    components: { default: user, header: header, footer: footer },
    meta: { requiresAuth: true, mode: "cu" },
  },
  {
    path: "/user/create",
    name: "userCreate",
    components: { default: user_form, header: header, footer: footer },
    meta: { requiresAuth: true },
  },
  {
    path: "/user/edit/:id",
    name: "userEdit",
    components: { default: user_form, header: header, footer: footer },
    meta: { requiresAuth: true, mode: "edit" },
  },
  {
    path: "/user/aktivitas/:id",
    name: "userAktivitas",
    components: { default: user_aktivitas, header: header, footer: footer },
    meta: { requiresAuth: true },
  },
  {
    path: "/profile/:id",
    name: "profile",
    components: { default: profile, header: header, footer: footer },
    meta: { requiresAuth: true },
  },

  // dashboard
  {
    path: "/",
    name: "dashboard",
    components: { default: dashboard, header: header, footer: footer },
    meta: { requiresAuth: true },
  },

  // notification center
  {
    path: "/notification",
    name: "notification",
    components: { default: notification, header: header, footer: footer },
    meta: { requiresAuth: true },
  },

  // changelog
  {
    path: "/changelog",
    name: "changelog",
    components: { default: changelog, header: header, footer: footer },
    meta: { requiresAuth: true },
  },

  // saran
  {
    path: "/saran",
    name: "saran",
    components: { default: saran, header: header, footer: footer },
    meta: { requiresAuth: true },
  },

  // errorLog
  {
    path: "/errorLog",
    name: "errorLog",
    components: { default: errorLog, header: header, footer: footer },
    meta: { requiresAuth: true },
  },

  // activityLog
  {
    path: "/activityLog",
    name: "activityLog",
    components: { default: activityLog, header: header, footer: footer },
    meta: { requiresAuth: true },
  },

  // pengumuman
  {
    path: "/pengumuman/cu/:cu",
    name: "pengumumanCu",
    components: { default: pengumuman, header: header, footer: footer },
    meta: { requiresAuth: true, mode: "cu" },
  },

  // not found
  {
    path: "/notFound",
    name: "notFound",
    components: { default: notFound, header: header, footer: footer },
    meta: { requiresAuth: true },
  },

  // media
  {
    path: "/media/cu/:cu",
    name: "mediaCu",
    components: { default: media, header: header, footer: footer },
    meta: { requiresAuth: true, mode: "cu" },
  },
  {
    path: "/media/create",
    name: "mediaCreate",
    components: {
      default: media_form,
      header: header,
      footer: footer,
    },
    meta: { requiresAuth: true },
  },
  {
    path: "/media/edit/:id",
    name: "mediaEdit",
    components: {
      default: media_form,
      header: header,
      footer: footer,
    },
    meta: { requiresAuth: true, mode: "edit" },
  },

  // artikel
  {
    path: "/artikel/cu/:cu",
    name: "artikelCu",
    components: { default: artikel, header: header, footer: footer },
    meta: { requiresAuth: true, mode: "cu" },
  },
  {
    path: "/artikel/cu/:cu/kategori/:kategori",
    name: "artikelFilterKategoriCu",
    components: { default: artikel, header: header, footer: footer },
    meta: { requiresAuth: true, mode: "kategori" },
  },
  {
    path: "/artikel/cu/:cu/penulis/:penulis/",
    name: "artikelFilterPenulisCu",
    components: { default: artikel, header: header, footer: footer },
    meta: { requiresAuth: true, mode: "penulis" },
  },
  {
    path: "/artikel/create",
    name: "artikelCreate",
    components: { default: artikel_form, header: header, footer: footer },
    meta: { requiresAuth: true },
  },
  {
    path: "/artikel/edit/:id",
    name: "artikelEdit",
    components: { default: artikel_form, header: header, footer: footer },
    meta: { requiresAuth: true, mode: "edit" },
  },

  // artikel kategori
  {
    path: "/artikelKategori/cu/:cu",
    name: "artikelKategoriCu",
    components: { default: artikelKategori, header: header, footer: footer },
    meta: { requiresAuth: true, mode: "cu" },
  },
  {
    path: "/artikelKategori/create",
    name: "artikelKategoriCreate",
    components: {
      default: artikelKategori_form,
      header: header,
      footer: footer,
    },
    meta: { requiresAuth: true },
  },
  {
    path: "/artikelKategori/edit/:id",
    name: "artikelKategoriEdit",
    components: {
      default: artikelKategori_form,
      header: header,
      footer: footer,
    },
    meta: { requiresAuth: true, mode: "edit" },
  },

  // artikel penulis
  {
    path: "/artikelPenulis/cu/:cu",
    name: "artikelPenulisCu",
    components: { default: artikelPenulis, header: header, footer: footer },
    meta: { requiresAuth: true, mode: "cu" },
  },
  {
    path: "/artikelPenulis/create",
    name: "artikelPenulisCreate",
    components: {
      default: artikelPenulis_form,
      header: header,
      footer: footer,
    },
    meta: { requiresAuth: true },
  },
  {
    path: "/artikelPenulis/edit/:id",
    name: "artikelPenulisEdit",
    components: {
      default: artikelPenulis_form,
      header: header,
      footer: footer,
    },
    meta: { requiresAuth: true, mode: "edit" },
  },

  // artikel simo
  {
    path: "/artikelSimo",
    name: "artikelSimo",
    components: { default: artikelSimo, header: header, footer: footer },
    meta: { requiresAuth: true },
  },
  {
    path: "/artikelSimo/create",
    name: "artikelSimoCreate",
    components: { default: artikelSimo_form, header: header, footer: footer },
    meta: { requiresAuth: true },
  },
  {
    path: "/artikelSimo/edit/:id",
    name: "artikelSimoEdit",
    components: { default: artikelSimo_form, header: header, footer: footer },
    meta: { requiresAuth: true, mode: "edit" },
  },

  // kegiatan bkcu
  {
    path: "/kegiatanBKCU/:tipe/periode/:periode",
    name: "kegiatanBKCU",
    components: { default: kegiatanBKCU, header: header, footer: footer },
    meta: { requiresAuth: true },
  },
  {
    path: "/kegiatanBKCU/jalan",
    name: "kegiatanBKCUJalan",
    components: { default: kegiatanBKCU, header: header, footer: footer },
    meta: { requiresAuth: true, mode: "jalan" },
  },
  {
    path: "/kegiatanBKCU/diikuti",
    name: "kegiatanBKCUDiikuti",
    components: { default: kegiatanBKCU, header: header, footer: footer },
    meta: { requiresAuth: true, mode: "diikuti" },
  },
  {
    path: "/kegiatanBKCU/create/:tipe",
    name: "kegiatanBKCUCreate",
    components: { default: kegiatanBKCU_form, header: header, footer: footer },
    meta: { requiresAuth: true },
  },
  {
    path: "/kegiatanBKCU/edit/:id",
    name: "kegiatanBKCUEdit",
    components: { default: kegiatanBKCU_form, header: header, footer: footer },
    meta: { requiresAuth: true, mode: "edit" },
  },
  {
    path: "/kegiatanBKCU/editDetail/:id",
    name: "kegiatanBKCUEditDetail",
    components: { default: kegiatanBKCU_form, header: header, footer: footer },
    meta: { requiresAuth: true, mode: "edit", isDetail: true },
  },
  {
    path: "/kegiatanBKCU/detail/:id",
    name: "kegiatanBKCUDetail",
    components: {
      default: kegiatanBKCU_detail,
      header: header,
      footer: footer,
    },
    meta: { requiresAuth: true },
  },

  // kegiatan peserta
  {
    path: "/kegiatanPeserta/indexSemuaPeserta/:tipe/cu/:cu",
    name: "kegiatanSemuaPeserta",
    components: { default: kegiatanPeserta, header: header, footer: footer },
    meta: { requiresAuth: true },
  },

  // kegiatan tempat
  {
    path: "/tempat",
    name: "tempat",
    components: { default: tempat, header: header, footer: footer },
    meta: { requiresAuth: true },
  },
  {
    path: "/tempat/create",
    name: "tempatCreate",
    components: { default: tempat_form, header: header, footer: footer },
  },
  {
    path: "/tempat/edit/:id",
    name: "tempatEdit",
    components: { default: tempat_form, header: header, footer: footer },
    meta: { requiresAuth: true, mode: "edit" },
  },

  // sertifikat kegiatan
  {
    path: "/sertifikatKegiatan",
    name: "sertifikatKegiatan",
    components: { default: sertifikatKegiatan, header: header, footer: footer },
    meta: { requiresAuth: true },
  },
  {
    path: "/sertifikatKegiatan/create",
    name: "sertifikatKegiatanCreate",
    components: {
      default: sertifikatKegiatan_form,
      header: header,
      footer: footer,
    },
    meta: { requiresAuth: true },
  },
  {
    path: "/sertifikatKegiatan/edit/:id",
    name: "sertifikatKegiatanEdit",
    components: {
      default: sertifikatKegiatan_form,
      header: header,
      footer: footer,
    },
    meta: { requiresAuth: true, mode: "edit" },
  },

  // kode kegiatan
  {
    path: "/kodeKegiatan",
    name: "kodeKegiatan",
    components: { default: kodeKegiatan, header: header, footer: footer },
    meta: { requiresAuth: true },
  },
  {
    path: "/kodeKegiatan/create",
    name: "kodeKegiatanCreate",
    components: { default: kodeKegiatan_form, header: header, footer: footer },
    meta: { requiresAuth: true },
  },
  {
    path: "/kodeKegiatan/edit/:id",
    name: "kodeKegiatanEdit",
    components: { default: kodeKegiatan_form, header: header, footer: footer },
    meta: { requiresAuth: true, mode: "edit" },
  },

  // cu
  {
    path: "/cu",
    name: "cu",
    components: { default: cu, header: header, footer: footer },
    meta: { requiresAuth: true },
  },
  {
    path: "/cu/create",
    name: "cuCreate",
    components: { default: cu_form, header: header, footer: footer },
    meta: { requiresAuth: true },
  },
  {
    path: "/cu/edit/:id",
    name: "cuEdit",
    components: { default: cu_form, header: header, footer: footer },
    meta: { requiresAuth: true, mode: "edit" },
  },
  {
    path: "/cu/profile/:id",
    name: "cuProfile",
    components: { default: cu_form, header: header, footer: footer },
    meta: { requiresAuth: true, mode: "profile" },
  },

  // tp cu
  {
    path: "/tp/cu/:cu",
    name: "tpCu",
    components: { default: tp, header: header, footer: footer },
    meta: { requiresAuth: true, mode: "cu" },
  },
  {
    path: "/tp/create",
    name: "tpCreate",
    components: { default: tp_form, header: header, footer: footer },
    meta: { requiresAuth: true },
  },
  {
    path: "/tp/edit/:id",
    name: "tpEdit",
    components: { default: tp_form, header: header, footer: footer },
    meta: { requiresAuth: true, mode: "edit" },
  },

  // produk cu
  {
    path: "/produkCu/cu/:cu",
    name: "produkCuCu",
    components: { default: produkCu, header: header, footer: footer },
    meta: { requiresAuth: true, mode: "cu" },
  },
  {
    path: "/produkCu/create",
    name: "produkCuCreate",
    components: { default: produkCu_form, header: header, footer: footer },
    meta: { requiresAuth: true },
  },
  {
    path: "/produkCu/edit/:id",
    name: "produkCuEdit",
    components: { default: produkCu_form, header: header, footer: footer },
    meta: { requiresAuth: true, mode: "edit" },
  },

  // aktivis cu
  {
    path: "/aktivis/cu/:cu/:tingkat",
    name: "aktivisCu",
    components: { default: aktivis, header: header, footer: footer },
    meta: { requiresAuth: true, mode: "cu" },
  },
  {
    path: "/aktivis/create",
    name: "aktivisCreate",
    components: { default: aktivis_form, header: header, footer: footer },
    meta: { requiresAuth: true, mode: "create" },
  },
  {
    path: "/aktivis/edit/:id",
    name: "aktivisEdit",
    components: { default: aktivis_form, header: header, footer: footer },
    meta: { requiresAuth: true, mode: "edit" },
  },
  {
    path: "/aktivis/riwayat/create/:id/cu/:cu",
    name: "aktivisRiwayatCreate",
    components: { default: aktivis_riwayat, header: header, footer: footer },
    meta: { requiresAuth: true, mode: "create" },
  },
  {
    path: "/aktivis/riwayat/edit/:id/cu/:cu",
    name: "aktivisRiwayatEdit",
    components: { default: aktivis_riwayat, header: header, footer: footer },
    meta: { requiresAuth: true, mode: "edit" },
  },

  // aset tetap
  {
    path: "/asetTetap",
    name: "asetTetap",
    components: { default: asetTetap, header: header, footer: footer },
    meta: { requiresAuth: true, mode: "cu" },
  },
  {
    path: "/asetTetap/detail/:kode",
    name: "asetTetapDetail",
    components: { default: asetTetap_detail },
    meta: { requiresAuth: false },
  },
  {
    path: "/asetTetap/create",
    name: "asetTetapCreate",
    components: { default: asetTetap_form, header: header, footer: footer },
    meta: { requiresAuth: true },
  },
  {
    path: "/asetTetap/edit/:id",
    name: "asetTetapEdit",
    components: { default: asetTetap_form, header: header, footer: footer },
    meta: { requiresAuth: true, mode: "edit" },
  },

  // aset tetap jenis
  {
    path: "/asetTetapJenis",
    name: "asetTetapJenis",
    components: { default: asetTetapJenis, header: header, footer: footer },
    meta: { requiresAuth: true, mode: "cu" },
  },
  {
    path: "/asetTetapJenis/create",
    name: "asetTetapJenisCreate",
    components: {
      default: asetTetapJenis_form,
      header: header,
      footer: footer,
    },
    meta: { requiresAuth: true },
  },

  // aset tetap kelompok
  {
    path: "/asetTetapKelompok",
    name: "asetTetapKelompok",
    components: { default: asetTetapKelompok, header: header, footer: footer },
    meta: { requiresAuth: true, mode: "cu" },
  },
  {
    path: "/asetTetapKelompok/create",
    name: "asetTetapKelompokCreate",
    components: {
      default: asetTetapKelompok_form,
      header: header,
      footer: footer,
    },
    meta: { requiresAuth: true },
  },

  // aset tetap golongan
  {
    path: "/asetTetapGolongan",
    name: "asetTetapGolongan",
    components: { default: asetTetapGolongan, header: header, footer: footer },
    meta: { requiresAuth: true, mode: "cu" },
  },
  {
    path: "/asetTetapGolongan/create",
    name: "asetTetapGolonganCreate",
    components: {
      default: asetTetapGolongan_form,
      header: header,
      footer: footer,
    },
    meta: { requiresAuth: true },
  },

  // aset tetap lokasi
  {
    path: "/asetTetapLokasi",
    name: "asetTetapLokasi",
    components: { default: asetTetapLokasi, header: header, footer: footer },
    meta: { requiresAuth: true, mode: "cu" },
  },
  {
    path: "/asetTetapLokasi/create",
    name: "asetTetapLokasiCreate",
    components: {
      default: asetTetapLokasi_form,
      header: header,
      footer: footer,
    },
    meta: { requiresAuth: true },
  },

  // surat
  {
    path: "/surat/cu/:cu/tipe/:tipe/periode/:periode",
    name: "suratCu",
    components: { default: surat, header: header, footer: footer },
    meta: { requiresAuth: true, mode: "cu" },
  },
  {
    path: "/surat/create",
    name: "suratCreate",
    components: { default: surat_form, header: header, footer: footer },
    meta: { requiresAuth: true },
  },
  {
    path: "/surat/edit/:id",
    name: "suratEdit",
    components: { default: surat_form, header: header, footer: footer },
    meta: { requiresAuth: true, mode: "edit" },
  },

  // surat kategori
  {
    path: "/suratKategori/cu/:cu",
    name: "suratKategoriCu",
    components: { default: suratKategori, header: header, footer: footer },
    meta: { requiresAuth: true, mode: "cu" },
  },
  {
    path: "/suratKategori/create",
    name: "suratKategoriCreate",
    components: { default: suratKategori_form, header: header, footer: footer },
    meta: { requiresAuth: true },
  },
  {
    path: "/suratKategori/edit/:id",
    name: "suratKategoriEdit",
    components: { default: suratKategori_form, header: header, footer: footer },
    meta: { requiresAuth: true, mode: "edit" },
  },

  // surat kode
  {
    path: "/suratKode/cu/:cu",
    name: "suratKodeCu",
    components: { default: suratKode, header: header, footer: footer },
    meta: { requiresAuth: true, mode: "cu" },
  },
  {
    path: "/suratKode/create",
    name: "suratKodeCreate",
    components: { default: suratKode_form, header: header, footer: footer },
    meta: { requiresAuth: true },
  },
  {
    path: "/suratKode/edit/:id",
    name: "suratKodeEdit",
    components: { default: suratKode_form, header: header, footer: footer },
    meta: { requiresAuth: true, mode: "edit" },
  },

  // surat masuk
  {
    path: "/suratMasuk/cu/:cu/:periode",
    name: "suratMasukCu",
    components: { default: suratMasuk, header: header, footer: footer },
    meta: { requiresAuth: true, mode: "cu" },
  },
  {
    path: "/suratMasuk/create",
    name: "suratMasukCreate",
    components: { default: suratMasuk_form, header: header, footer: footer },
    meta: { requiresAuth: true },
  },
  {
    path: "/suratMasuk/edit/:id",
    name: "suratMasukEdit",
    components: { default: suratMasuk_form, header: header, footer: footer },
    meta: { requiresAuth: true, mode: "edit" },
  },

  // dokumen
  {
    path: "/dokumen/gerakan/publik/:cu",
    name: "dokumenGerakanPublik",
    components: { default: dokumen, header: header, footer: footer },
    meta: { requiresAuth: true, mode: "gerakanPublik" },
  },
  {
    path: "/dokumen/cu/:cu",
    name: "dokumenCu",
    components: { default: dokumen, header: header, footer: footer },
    meta: { requiresAuth: true, mode: "cu" },
  },
  {
    path: "/dokumen/create",
    name: "dokumenCreate",
    components: { default: dokumen_form, header: header, footer: footer },
    meta: { requiresAuth: true },
  },
  {
    path: "/dokumen/edit/:id",
    name: "dokumenEdit",
    components: { default: dokumen_form, header: header, footer: footer },
    meta: { requiresAuth: true, mode: "edit" },
  },

  // dokumen kategori
  {
    path: "/dokumenKategori/cu/:cu",
    name: "dokumenKategoriCu",
    components: { default: dokumenKategori, header: header, footer: footer },
    meta: { requiresAuth: true, mode: "cu" },
  },
  {
    path: "/dokumenKategori/create",
    name: "dokumenKategoriCreate",
    components: {
      default: dokumenKategori_form,
      header: header,
      footer: footer,
    },
    meta: { requiresAuth: true },
  },
  {
    path: "/dokumenKategori/edit/:id",
    name: "dokumenKategoriEdit",
    components: {
      default: dokumenKategori_form,
      header: header,
      footer: footer,
    },
    meta: { requiresAuth: true, mode: "edit" },
  },

  // mitra perseorangan
  {
    path: "/mitraOrang",
    name: "mitraOrang",
    components: { default: mitraOrang, header: header, footer: footer },
    meta: { requiresAuth: true },
  },
  {
    path: "/mitraOrang/cu/:cu",
    name: "mitraOrangCu",
    components: { default: mitraOrang, header: header, footer: footer },
    meta: { requiresAuth: true, mode: "cu" },
  },
  {
    path: "/mitraOrang/create",
    name: "mitraOrangCreate",
    components: { default: mitraOrang_form, header: header, footer: footer },
    meta: { requiresAuth: true },
  },
  {
    path: "/mitraOrang/edit/:id",
    name: "mitraOrangEdit",
    components: { default: mitraOrang_form, header: header, footer: footer },
    meta: { requiresAuth: true, mode: "edit" },
  },

  // mitra lembaga
  {
    path: "/mitraLembaga",
    name: "mitraLembaga",
    components: { default: mitraLembaga, header: header, footer: footer },
    meta: { requiresAuth: true },
  },
  {
    path: "/mitraLembaga/cu/:cu",
    name: "mitraLembagaCu",
    components: { default: mitraLembaga, header: header, footer: footer },
    meta: { requiresAuth: true, mode: "cu" },
  },
  {
    path: "/mitraLembaga/create",
    name: "mitraLembagaCreate",
    components: { default: mitraLembaga_form, header: header, footer: footer },
    meta: { requiresAuth: true },
  },
  {
    path: "/mitraLembaga/edit/:id",
    name: "mitraLembagaEdit",
    components: { default: mitraLembaga_form, header: header, footer: footer },
    meta: { requiresAuth: true, mode: "edit" },
  },

  // anggota cu
  {
    path: "/anggotaCu/informasi",
    name: "anggotaCuInformasi",
    components: { default: anggotaCu_informasi, header: header, footer: footer },
    meta: { requiresAuth: true, mode: "cu" },
  },
  {
    path: "/anggotaCu/cu/:cu/:tp",
    name: "anggotaCuCu",
    components: { default: anggotaCu, header: header, footer: footer },
    meta: { requiresAuth: true, mode: "cu" },
  },
  {
    path: "/anggotaCu",
    name: "anggotaCu",
    components: { default: anggotaCu, header: header, footer: footer },
    meta: { requiresAuth: true },
  },
  {
    path: "/anggotaCu/create",
    name: "anggotaCuCreate",
    components: { default: anggotaCu_form, header: header, footer: footer },
    meta: { requiresAuth: true, mode: "create" },
  },
  {
    path: "/anggotaCu/create/:id",
    name: "anggotaCuCreateEdit",
    components: { default: anggotaCu_form, header: header, footer: footer },
    meta: { requiresAuth: true, mode: "createEdit" },
  },
  {
    path: "/anggotaCu/createjalinan/:nik/:statusNIK",
    name: "anggotaCuCreateJalinan",
    components: { default: anggotaCu_form, header: header, footer: footer },
    meta: { requiresAuth: true, mode: "createJalinan" },
  },
  {
    path: "/anggotaCu/createjalinan/:id",
    name: "anggotaCuCreateJalinanEdit",
    components: { default: anggotaCu_form, header: header, footer: footer },
    meta: { requiresAuth: true, mode: "createJalinanEdit" },
  },
  {
    path: "/anggotaCu/edit/:id",
    name: "anggotaCuEdit",
    components: { default: anggotaCu_form, header: header, footer: footer },
    meta: { requiresAuth: true, mode: "edit" },
  },
  {
    path: "/anggotaCu/produk/create/:id/cu/:cu",
    name: "anggotaCuProdukCreate",
    components: { default: anggotaCu_produk, header: header, footer: footer },
    meta: { requiresAuth: true, mode: "create" },
  },
  {
    path: "/anggotaCu/produk/create/:id/cu/:cu/jalinan",
    name: "anggotaCuProdukCreateJalinan",
    components: { default: anggotaCu_produk, header: header, footer: footer },
    meta: { requiresAuth: true, mode: "createJalinan" },
  },
  {
    path: "/anggotaCu/produk/edit/:id/cu/:cu",
    name: "anggotaCuProdukEdit",
    components: { default: anggotaCu_produk, header: header, footer: footer },
    meta: { requiresAuth: true, mode: "edit" },
  },
  {
    path: "/anggotaCu/edit/:id/jalinan",
    name: "anggotaCuEditJalinan",
    components: { default: anggotaCu_form, header: header, footer: footer },
    meta: { requiresAuth: true, mode: "editJalinan" },
  },
  {
    path: "/anggotaCu/produk/edit/:id/cu/:cu/jalinan",
    name: "anggotaCuProdukEditJalinan",
    components: { default: anggotaCu_produk, header: header, footer: footer },
    meta: { requiresAuth: true, mode: "editJalinan" },
  },

  // anggota cu draft
  {
    path: "/anggotaCuDraft/cu/:cu/:tp",
    name: "anggotaCuCuDraft",
    components: { default: anggotaCuDraft, header: header, footer: footer },
    meta: { requiresAuth: true, mode: "cu" },
  },
  {
    path: "/anggotaCuDraft/edit/:id",
    name: "anggotaCuDraftEdit",
    components: {
      default: anggotaCuDraft_form,
      header: header,
      footer: footer,
    },
    meta: { requiresAuth: true, mode: "edit" },
  },

  // anggota produk cu draft
  {
    path: "/anggotaProdukCuDraft/cu/:cu",
    name: "anggotaProdukCuDraft",
    components: {
      default: anggotaProdukCuDraft,
      header: header,
      footer: footer,
    },
    meta: { requiresAuth: true, mode: "cu" },
  },
  {
    path: "/anggotaProdukCuDraft/edit/:id",
    name: "anggotaProdukCuDraftEdit",
    components: {
      default: anggotaProdukCuDraft_form,
      header: header,
      footer: footer,
    },
    meta: { requiresAuth: true, mode: "edit" },
  },

  // saldo
  {
    path: "/saldo",
    name: "saldo",
    components: { default: saldo, header: header, footer: footer },
    meta: { requiresAuth: true },
  },

  // Jalinan
  {
    path: "/jalinan/klaim/cu/:cu/:tp",
    name: "jalinanKlaimCu",
    components: { default: jalinanKlaim, header: header, footer: footer },
    meta: { requiresAuth: true, mode: "cu" },
  },
  {
    path: "/jalinan/klaim/create",
    name: "jalinanKlaimCreate",
    components: { default: jalinanKlaim_form, header: header, footer: footer },
    meta: { requiresAuth: true, mode: "create" },
  },
  {
    path: "/jalinan/klaim/create/:nik",
    name: "jalinanKlaimCreateNik",
    components: { default: jalinanKlaim_form, header: header, footer: footer },
    meta: { requiresAuth: true, mode: "createNIK" },
  },
  {
    path: "/jalinan/klaim/createId/:id",
    name: "jalinanKlaimCreateId",
    components: { default: jalinanKlaim_form, header: header, footer: footer },
    meta: { requiresAuth: true, mode: "createId" },
  },
  {
    path: "/jalinan/klaim/create/nik/:nik",
    name: "jalinanKlaimCreateNIK",
    components: { default: jalinanKlaim_form, header: header, footer: footer },
    meta: { requiresAuth: true, mode: "createNIK" },
  },
  {
    path: "/jalinan/klaim/edit/:nik/cu/:cu/tipe/:tipe",
    name: "jalinanKlaimEdit",
    components: { default: jalinanKlaim_form, header: header, footer: footer },
    meta: { requiresAuth: true, mode: "edit" },
  },
  {
    path: "/jalinan/klaim/koreksi/:nik/cu/:cu/tipe/:tipe",
    name: "jalinanKlaimKoreksi",
    components: { default: jalinanKlaim_form, header: header, footer: footer },
    meta: { requiresAuth: true, mode: "koreksi" },
  },

  // Jalinan PENCAIRAN
  {
    path: "/jalinan/cair",
    name: "jalinanCair",
    components: { default: jalinanCair, header: header, footer: footer },
    meta: { requiresAuth: true },
  },
  {
    path: "/jalinan/cair/:awal/cu/:cu/:tp",
    name: "jalinanCairTanggal",
    components: { default: jalinanCair, header: header, footer: footer },
    meta: { requiresAuth: true, mode: "cair" },
  },

  // Jalinan LAPORAN
  {
    path: "/jalinan/laporan/klaim/jenis/cu",
    name: "jalinanLaporanKlaimCu",
    components: {
      default: jalinanLaporan_KlaimCu,
      header: header,
      footer: footer,
    },
    meta: { requiresAuth: true },
  },
  {
    path: "/jalinan/laporan/klaim/status/:status/cu/:cu/jenis/:jenis/:awal/:akhir",
    name: "jalinanLaporanKlaimCuTanggal",
    components: {
      default: jalinanLaporan_KlaimCu,
      header: header,
      footer: footer,
    },
    meta: { requiresAuth: true, mode: "laporan" },
  },
  {
    path: "/jalinan/laporan/klaim/jenis/penyebab",
    name: "jalinanLaporanKlaimPenyebab",
    components: {
      default: jalinanLaporan_KlaimPenyebab,
      header: header,
      footer: footer,
    },
    meta: { requiresAuth: true },
  },
  {
    path: "/jalinan/laporan/klaim/penyebab/status/:status/cu/:cu/jenis/:jenis/kategori/:kategori/:awal/:akhir",
    name: "jalinanLaporanKlaimPenyebabTanggal",
    components: {
      default: jalinanLaporan_KlaimPenyebab,
      header: header,
      footer: footer,
    },
    meta: { requiresAuth: true, mode: "laporan" },
  },
  {
    path: "/jalinan/laporan/klaim/jenis/usia",
    name: "jalinanLaporanKlaimUsia",
    components: {
      default: jalinanLaporan_KlaimUsia,
      header: header,
      footer: footer,
    },
    meta: { requiresAuth: true },
  },
  {
    path: "/jalinan/laporan/klaim/usia/status/:status/cu/:cu/jenis/:jenis/dari/:dari/ke/:ke/:awal/:akhir",
    name: "jalinanLaporanKlaimUsiaTanggal",
    components: {
      default: jalinanLaporan_KlaimUsia,
      header: header,
      footer: footer,
    },
    meta: { requiresAuth: true, mode: "laporan" },
  },
  {
    path: "/jalinan/laporan/klaim/jenis/lama",
    name: "jalinanLaporanKlaimLama",
    components: {
      default: jalinanLaporan_KlaimLama,
      header: header,
      footer: footer,
    },
    meta: { requiresAuth: true },
  },
  {
    path: "/jalinan/laporan/klaim/lama/status/:status/cu/:cu/jenis/:jenis/dari/:dari/ke/:ke/:awal/:akhir",
    name: "jalinanLaporanKlaimLamaTanggal",
    components: {
      default: jalinanLaporan_KlaimLama,
      header: header,
      footer: footer,
    },
    meta: { requiresAuth: true, mode: "laporan" },
  },

  // Jalinan iuran
  {
    path: "/jalinanIuran/cu/:cu",
    name: "jalinanIuranCu",
    components: { default: jalinanIuran, header: header, footer: footer },
    meta: { requiresAuth: true },
  },
  {
    path: "/jalinanIuran/create",
    name: "jalinanIuranCreate",
    components: { default: jalinanIuran_form, header: header, footer: footer },
    meta: { requiresAuth: true },
  },
  {
    path: "/jalinanIuran/detail/:id",
    name: "jalinanIuranDetail",
    components: {
      default: jalinanIuran_detail,
      header: header,
      footer: footer,
    },
    meta: { requiresAuth: true },
  },

  // assesment access
  {
    path: "/assesmentAccess/cu/:cu",
    name: "assesmentAccessCu",
    components: { default: assesmentAccess, header: header, footer: footer },
    meta: { requiresAuth: true, mode: "cu" },
  },
  {
    path: "/assesmentAccess/create",
    name: "assesmentAccessCreate",
    components: {
      default: assesmentAccess_form,
      header: header,
      footer: footer,
    },
    meta: { requiresAuth: true, mode: "create" },
  },
  {
    path: "/assesmentAccess/edit/:id",
    name: "assesmentAccessEdit",
    components: {
      default: assesmentAccess_form,
      header: header,
      footer: footer,
    },
    meta: { requiresAuth: true, mode: "edit" },
  },
  {
    path: "/assesmentAccess/penilaian/:id",
    name: "assesmentAccessPenilaian",
    components: {
      default: assesmentAccess_form,
      header: header,
      footer: footer,
    },
    meta: { requiresAuth: true, mode: "penilaianBkcu" },
  },
  {
    path: "/assesmentAccess/lihat/:id",
    name: "assesmentAccessLihat",
    components: {
      default: assesmentAccess_form,
      header: header,
      footer: footer,
    },
    meta: { requiresAuth: true, mode: "lihat" },
  },
  
  // assesment culeg
  {
    path: "/assesmentCuleg/cu/:cu",
    name: "assesmentCulegCu",
    components: { default: assesmentCuleg, header: header, footer: footer },
    meta: { requiresAuth: true, mode: "cu" },
  },
  {
    path: "/assesmentCuleg/create",
    name: "assesmentCulegCreate",
    components: {
      default: assesmentCuleg_form,
      header: header,
      footer: footer,
    },
    meta: { requiresAuth: true, mode: "create" },
  },
  {
    path: "/assesmentCuleg/edit/:id",
    name: "assesmentCulegEdit",
    components: {
      default: assesmentCuleg_form,
      header: header,
      footer: footer,
    },
    meta: { requiresAuth: true, mode: "edit" },
  },
  {
    path: "/assesmentCuleg/penilaian/:id",
    name: "assesmentCulegPenilaian",
    components: {
      default: assesmentCuleg_form,
      header: header,
      footer: footer,
    },
    meta: { requiresAuth: true, mode: "penilaianBkcu" },
  },
  {
    path: "/assesmentCuleg/lihat/:id",
    name: "assesmentCulegLihat",
    components: {
      default: assesmentCuleg_form,
      header: header,
      footer: footer,
    },
    meta: { requiresAuth: true, mode: "lihat" },
  },

  // monitoring
  {
    path: "/monitoring/cu/:cu/:tp",
    name: "monitoringCu",
    components: { default: monitoring, header: header, footer: footer },
    meta: { requiresAuth: true, mode: "cu" },
  },
  {
    path: "/monitoring/create",
    name: "monitoringCreate",
    components: { default: monitoring_form, header: header, footer: footer },
    meta: { requiresAuth: true, mode: "create" },
  },
  {
    path: "/monitoring/edit/:id",
    name: "monitoringEdit",
    components: { default: monitoring_form, header: header, footer: footer },
    meta: { requiresAuth: true, mode: "edit" },
  },
  {
    path: "/monitoring/detail/:id",
    name: "monitoringDetail",
    components: { default: monitoring_detail, header: header, footer: footer },
    meta: { requiresAuth: true },
  },
  {
    path: "/monitoring/indexKonsolidasi/:tahun/:bulan",
    name: "monitoringKonsolidasi",
    components: { default: monitoring_konsolidasi, header: header, footer: footer },
    meta: { requiresAuth: true },
  },

  // pemilihan
  {
    path: "/pemilihan/cu/:cu",
    name: "pemilihan",
    components: { default: pemilihan, header: header, footer: footer },
    meta: { requiresAuth: true },
  },
  {
    path: "/pemilihan/create",
    name: "pemilihanCreate",
    components: { default: pemilihan_form, header: header, footer: footer },
    meta: { requiresAuth: true },
  },
  {
    path: "/pemilihan/edit/:id",
    name: "pemilihanEdit",
    components: { default: pemilihan_form, header: header, footer: footer },
    meta: { requiresAuth: true, mode: "edit" },
  },
  {
    path: "/pemilihan/detail/:id",
    name: "pemilihanDetail",
    components: { default: pemilihan_detail, header: header, footer: footer },
    meta: { requiresAuth: true },
  },
  {
    path: "/pemilihan/pilih/:name",
    name: "pemilihanPilih",
    components: { default: pemilihan_pilih },
    meta: { requiresAuth: false },
  },
  {
    path: "/pemilihan/input",
    name: "pemilihanInput",
    components: { default: pemilihan_input },
    meta: { requiresAuth: false },
  },

  // voting
  {
    path: "/voting/cu/:cu",
    name: "voting",
    components: { default: voting, header: header, footer: footer },
    meta: { requiresAuth: true },
  },
  {
    path: "/voting/create",
    name: "votingCreate",
    components: { default: voting_form, header: header, footer: footer },
    meta: { requiresAuth: true },
  },
  {
    path: "/voting/edit/:id",
    name: "votingEdit",
    components: { default: voting_form, header: header, footer: footer },
    meta: { requiresAuth: true, mode: "edit" },
  },
  {
    path: "/voting/detail/:id",
    name: "votingDetail",
    components: { default: voting_detail, header: header, footer: footer },
    meta: { requiresAuth: true },
  },
  {
    path: "/voting/pilih/:name",
    name: "votingPilih",
    components: { default: voting_pilih },
    meta: { requiresAuth: false },
  },
  {
    path: "/voting/input",
    name: "votingInput",
    components: { default: voting_input },
    meta: { requiresAuth: false },
  },

  // laporan cu
  // bkcu default route
  {
    path: "/laporancu",
    name: "laporanCu",
    components: { default: laporanCu, header: header, footer: footer },
    meta: { requiresAuth: true },
  },
  // bkcu and periode route
  {
    path: "/laporancu/periode/:periode",
    name: "laporanCuPeriode",
    components: { default: laporanCu, header: header, footer: footer },
    meta: { requiresAuth: true, mode: "periode" },
  },
  // cu and tp route
  {
    path: "/laporancu/cu/:cu/tp/:tp",
    name: "laporanCuCu",
    components: { default: laporanCu, header: header, footer: footer },
    meta: { requiresAuth: true, mode: "cu" },
  },
  // cu and periode  route
  {
    path: "/laporancu/cu/:cu/periode/:periode",
    name: "laporanCuCuPeriode",
    components: { default: laporanCu, header: header, footer: footer },
    meta: { requiresAuth: true, mode: "cuPeriode" },
  },
  // detail cu and tp route
  {
    path: "/laporancu/detail/:id",
    name: "laporanCuDetail",
    components: { default: laporanCu_detail, header: header, footer: footer },
    meta: { requiresAuth: true, mode: "detail" },
  },
  {
    path: "/laporancu/detail/cu/:cu/periode/:periode",
    name: "laporanCuDetailPeriode",
    components: { default: laporanCu_detail, header: header, footer: footer },
    meta: { requiresAuth: true, mode: "detailPeriode" },
  },
  // detail cu and tp route
  {
    path: "/laporanTp/detail/:id",
    name: "laporanTpDetail",
    components: { default: laporanCu_detail, header: header, footer: footer },
    meta: { requiresAuth: true, mode: "detailTp" },
  },
  {
    path: "/laporanTp/detail/tp/:tp/periode/:periode",
    name: "laporanTpDetailPeriode",
    components: { default: laporanCu_detail, header: header, footer: footer },
    meta: { requiresAuth: true, mode: "detailTpPeriode" },
  },
  // create
  {
    path: "/laporancu/create",
    name: "laporanCuCreate",
    components: { default: laporanCu_form, header: header, footer: footer },
    meta: { requiresAuth: true },
  },
  // edit konsolidasi
  {
    path: "/laporancu/edit/:id",
    name: "laporanCuEdit",
    components: { default: laporanCu_form, header: header, footer: footer },
    meta: { requiresAuth: true, mode: "edit" },
  },
  // edit tp
  {
    path: "/laporantp/edit/:id",
    name: "laporanTpEdit",
    components: { default: laporanCu_form, header: header, footer: footer },
    meta: { requiresAuth: true, mode: "editTp" },
  },

  // laporan gerakan
  {
    path: "/laporanGerakan",
    name: "laporanGerakan",
    components: { default: laporanGerakan, header: header, footer: footer },
    meta: { requiresAuth: true },
  },
  {
    path: "/laporanGerakan/create",
    name: "laporanGerakanCreate",
    components: {
      default: laporanGerakan_form,
      header: header,
      footer: footer,
    },
    meta: { requiresAuth: true },
  },
  {
    path: "/laporanGerakan/edit/:id",
    name: "laporanGerakanEdit",
    components: {
      default: laporanGerakan_form,
      header: header,
      footer: footer,
    },
    meta: { requiresAuth: true, mode: "edit" },
  },

  // laporan draft
  {
    path: "/laporancu/draft",
    name: "laporanCuDraft",
    components: { default: laporanCu_draft, header: header, footer: footer },
    meta: { requiresAuth: true },
  },
  {
    path: "/laporantp/draft",
    name: "laporanTpDraft",
    components: { default: laporanTp_draft, header: header, footer: footer },
    meta: { requiresAuth: true },
  },
  // edit konsolidasi draft
  {
    path: "/laporancu/draft/edit/:id",
    name: "laporanCuEditDraft",
    components: { default: laporanCu_form, header: header, footer: footer },
    meta: { requiresAuth: true, mode: "editDraft" },
  },
  // edit tp draft
  {
    path: "/laporantp/draft/edit/:id",
    name: "laporanTpEditDraft",
    components: { default: laporanCu_form, header: header, footer: footer },
    meta: { requiresAuth: true, mode: "editDraftTp" },
  },

  // coa
  {
    path: "/coa",
    name: "coa",
    components: { default: coa, header: header, footer: footer },
    meta: { requiresAuth: true },
  },
  {
    path: "/coa/create",
    name: "coaCreate",
    components: { default: coa_form, header: header, footer: footer },
    meta: { requiresAuth: true },
  },
  {
    path: "/coa/edit/:id",
    name: "coaEdit",
    components: { default: coa_form, header: header, footer: footer },
    meta: { requiresAuth: true, mode: "edit" },
  },

  // file upload data anggota csv
  {
    path: "/anggotaCuImportEscete",
    name: "dataAnggotaUpload",
    components: { default: dataAnggotaUpload, header: header, footer: footer },
    meta: { requiresAuth: true },
  },

  // kubn
  {
    path: "/kubn/cu/:cu",
    name: "kubnCu",
    components: { default: kubn, header: header, footer: footer },
    meta: { requiresAuth: true, mode: "cu" },
  },
  {
    path: "/kubn/create",
    name: "kubnCreate",
    components: {
      default: kubn_form,
      header: header,
      footer: footer,
    },
    meta: { requiresAuth: true },
  },
  {
    path: "/kubn/edit/:id",
    name: "kubnEdit",
    components: {
      default: kubn_form,
      header: header,
      footer: footer,
    },
    meta: { requiresAuth: true, mode: "edit" },
  },
  {
    path: "/kubn/detail/:id",
    name: "kubnDetail",
    components: {
      default: kubn_detail,
      header: header,
      footer: footer,
    },
    meta: { requiresAuth: true },
  },
  // usaha
  {
    path: "/kubnUsaha",
    name: "kubnUsaha",
    components: { default: kubnUsaha, header: header, footer: footer },
    meta: { requiresAuth: true },
  },
  {
    path: "/kubnUsaha/create",
    name: "kubnUsahaCreate",
    components: {
      default: kubnUsaha_form,
      header: header,
      footer: footer,
    },
    meta: { requiresAuth: true },
  },
  {
    path: "/kubnUsaha/edit/:id",
    name: "kubnUsahaEdit",
    components: {
      default: kubnUsaha_form,
      header: header,
      footer: footer,
    },
    meta: { requiresAuth: true, mode: "edit" },
  },
   // keahlian
   {
    path: "/keahlian",
    name: "keahlian",
    components: { default: keahlian, header: header, footer: footer },
    meta: { requiresAuth: true },
  },
  {
    path: "/keahlian/create",
    name: "keahlianCreate",
    components: {
      default: keahlian_form,
      header: header,
      footer: footer,
    },
    meta: { requiresAuth: true },
  },
  {
    path: "/keahlian/edit/:id",
    name: "keahlianEdit",
    components: {
      default: keahlian_form,
      header: header,
      footer: footer,
    },
    meta: { requiresAuth: true, mode: "edit" },
  },
 // jenisDiklat
 {
    path: "/jenisDiklat",
    name: "jenisDiklat",
    components: { default: jenisDiklat, header: header, footer: footer },
    meta: { requiresAuth: true },
  },
  {
    path: "/jenisDiklat/create",
    name: "jenisDiklatCreate",
    components: {
      default: jenisDiklat_form,
      header: header,
      footer: footer,
    },
    meta: { requiresAuth: true },
  },
  {
    path: "/jenisDiklat/edit/:id",
    name: "jenisDiklatEdit",
    components: {
      default: jenisDiklat_form,
      header: header,
      footer: footer,
    },
    meta: { requiresAuth: true, mode: "edit" },
  },
  // kombas
  {
    path: "/kombas/tipe/:tipe",
    name: "kombasTipe",
    components: { default: kombas, header: header, footer: footer },
    meta: { requiresAuth: true, mode: "tipe" },
  },
  {
    path: "/kombas/:cu/:tipe",
    name: "kombasCu",
    components: { default: kombas, header: header, footer: footer },
    meta: { requiresAuth: true, mode: "cu" },
  },
  {
    path: "/kombas/create",
    name: "kombasCreate",
    components: {
      default: kombas_form,
      header: header,
      footer: footer,
    },
    meta: { requiresAuth: true },
  },
  {
    path: "/kombas/edit/:id",
    name: "kombasEdit",
    components: {
      default: kombas_form,
      header: header,
      footer: footer,
    },
    meta: { requiresAuth: true, mode: "edit" },
  },

  // enterpreneur
  {
    path: "/enterpreneur/cu/:cu",
    name: "enterpreneurCu",
    components: { default: enterpreneur, header: header, footer: footer },
    meta: { requiresAuth: true, mode: "cu" },
  },
  {
    path: "/enterpreneur/create",
    name: "enterpreneurCreate",
    components: {
      default: enterpreneur_form,
      header: header,
      footer: footer,
    },
    meta: { requiresAuth: true },
  },
  {
    path: "/enterpreneur/edit/:id",
    name: "enterpreneurEdit",
    components: {
      default: enterpreneur_form,
      header: header,
      footer: footer,
    },
    meta: { requiresAuth: true, mode: "edit" },
  },

  // umkm
  {
    path: "/umkm/cu/:cu",
    name: "umkmCu",
    components: { default: umkm, header: header, footer: footer },
    meta: { requiresAuth: true, mode: "cu" },
  },
  {
    path: "/umkm/create",
    name: "umkmCreate",
    components: {
      default: umkm_form,
      header: header,
      footer: footer,
    },
    meta: { requiresAuth: true },
  },
  {
    path: "/umkm/edit/:id",
    name: "umkmEdit",
    components: {
      default: umkm_form,
      header: header,
      footer: footer,
    },
    meta: { requiresAuth: true, mode: "edit" },
  },

  // mentor
  {
    path: "/mentor/cu/:cu",
    name: "mentorCu",
    components: { default: mentor, header: header, footer: footer },
    meta: { requiresAuth: true, mode: "cu" },
  },
  {
    path: "/mentor/create",
    name: "mentorCreate",
    components: {
      default: mentor_form,
      header: header,
      footer: footer,
    },
    meta: { requiresAuth: true },
  },
  {
    path: "/mentor/edit/:id",
    name: "mentorEdit",
    components: {
      default: mentor_form,
      header: header,
      footer: footer,
    },
    meta: { requiresAuth: true, mode: "edit" },
  },

  // fasilitator
  {
    path: "/fasilitator/cu/:cu",
    name: "fasilitatorCu",
    components: { default: fasilitator, header: header, footer: footer },
    meta: { requiresAuth: true, mode: "cu" },
  },
  {
    path: "/fasilitator/create",
    name: "fasilitatorCreate",
    components: {
      default: fasilitator_form,
      header: header,
      footer: footer,
    },
    meta: { requiresAuth: true },
  },
  {
    path: "/fasilitator/edit/:id",
    name: "fasilitatorEdit",
    components: {
      default: fasilitator_form,
      header: header,
      footer: footer,
    },
    meta: { requiresAuth: true, mode: "edit" },
  },
];

export default routes;
