import Vue from 'vue';
import Vuex from 'vuex';

import { auth } from './modules/auth';
import { user } from './modules/user';
import { role } from './modules/role';
import { global } from './modules/global';
import { artikel } from './modules/artikel';
import { artikelKategori } from './modules/artikelKategori';
import { artikelPenulis } from './modules/artikelPenulis';
import { artikelSimo } from './modules/artikelSimo';
import { pengumuman } from './modules/pengumuman';
import { cu } from './modules/cu';
import { tp } from './modules/tp';
import { pus } from './modules/pus';
import { pekerjaan } from './modules/pekerjaan';
import { suku } from './modules/suku';
import { provinces } from './modules/provinces';
import { regencies } from './modules/regencies';
import { districts } from './modules/districts';
import { villages } from './modules/villages';
import { laporanCu } from './modules/laporanCu';
import { laporanCuDiskusi } from './modules/laporanCuDiskusi';
import { laporanTp } from './modules/laporanTp';
import { coa } from './modules/coa';
import { aktivis } from './modules/aktivis';
import { asetTetap } from './modules/asetTetap';
import { asetTetapGolongan } from './modules/asetTetapGolongan';
import { asetTetapKelompok } from './modules/asetTetapKelompok';
import { asetTetapJenis } from './modules/asetTetapJenis';
import { asetTetapLokasi } from './modules/asetTetapLokasi';
import { surat } from './modules/surat';
import { suratKategori } from './modules/suratKategori';
import { suratKode } from './modules/suratKode';
import { suratMasuk } from './modules/suratMasuk';
import { dokumen } from './modules/dokumen';
import { dokumenKategori } from './modules/dokumenKategori';
import { assesmentAccess } from './modules/assesmentAccess';
import { monitoring } from './modules/monitoring';
import { monitoringPencapaian } from './modules/monitoringPencapaian';
import { mitraOrang } from './modules/mitraOrang';
import { mitraLembaga } from './modules/mitraLembaga';
import { anggotaCu } from './modules/anggotaCu';
import { jalinanKlaim } from './modules/jalinanKlaim';
import { jalinanIuran } from './modules/jalinanIuran';
import { produkCu } from './modules/produkCu';
import { kegiatanBKCU } from './modules/kegiatanBKCU';
import { sertifikatKegiatan } from './modules/sertifikatKegiatan';
import { kodeKegiatan } from './modules/kodeKegiatan';
import { tempat } from './modules/tempat';
import { pemilihan } from './modules/pemilihan';
import { voting } from './modules/voting';
import { notification } from './modules/notification';
import { saran } from './modules/saran';
import { errorLog } from './modules/errorLog';
import { anggotaCuImportEscete } from './modules/anggotaCuImportEscete';
import { fileUpload } from './modules/fileUpload';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        global,
        auth,
        user,
        role,
        artikel,
        artikelKategori,
        artikelPenulis,
        artikelSimo,
        pengumuman,
        cu,
        tp,
        pus,
        pekerjaan,
        suku,
        provinces,
        regencies,
        districts,
        villages,
        laporanCu,
        laporanCuDiskusi,
        laporanTp,
        coa,
        aktivis,
        asetTetap,
        asetTetapGolongan,
        asetTetapKelompok,
        asetTetapJenis,
        asetTetapLokasi,
        surat,
        suratKategori,
        suratKode,
        suratMasuk,
        dokumen,
        dokumenKategori,
        assesmentAccess,
        monitoring,
        monitoringPencapaian,
        mitraOrang,
        mitraLembaga,
        anggotaCu,
        jalinanKlaim,
        jalinanIuran,
        produkCu,
        kegiatanBKCU,
        sertifikatKegiatan,
        kodeKegiatan,
        tempat,
        pemilihan,
        voting,
        notification,
        saran,
        errorLog,
        anggotaCuImportEscete,
        fileUpload
    }
});