import LaporanCuAPI from '../../api/laporanCu.js';
import LaporanCuDraftAPI from '../../api/laporanCuDraft.js';
import LaporanTpAPI from '../../api/laporanTp.js';
import LaporanTpDraftAPI from '../../api/laporanTpDraft.js';

export const laporanCu = {
  namespaced: true,

  // state
  state: {
    data: {}, //single data
    dataS: [], //collection
    history: [],
    grafik: [],
    grafikPearls: [],
    pearls: [],
    periode: [],
    columnData: [
      {//0
        title: "No.",
      },
      {//1
        title: "Nama CU",
        name: "cu.name",
        excelName: "cu_name",
        tipe: "string",
        sort: true,
        hide: false,
        disable: false,
        isChart: false,
        filter: true,
      },
      {//2
        title: "Nama TP/KP",
        name: "tp.name",
        excelName: "tp_name",
        tipe: "string",
        sort: true,
        hide: false,
        disable: false,
        isChart: false,
        filter: true,
      },
      {//3
        title: "No. BA",
        name: "laporan_cu.no_ba",
        excelName: "no_ba",
        tipe: "numeric",
        sort: true,
        hide: false,
        disable: false,
        isChart: false,
        filter: true
      },
      {//4
        title: "Provinsi",
        name: "provinces.name",
        excelName: "provinces_name",
        tipe: "string",
        sort: true,
        hide: false,
        disable: false,
        isChart: false,
        filter: true
      },
      {//5
        title: "Periode",
        name: "periode",
        tipe: "string",
        sort: true,
        hide: false,
        disable: false,
        isChart: false,
        filter: true,
      },
      {//6
        title: "Jmlh. TP/KP",
        name: "tp",
        tipe: "numeric",
        sort: true,
        hide: false,
        disable: false,
        isChart: false,
        filter: true
      },
      {//7
        title: "Lelaki Biasa",
        name: "l_biasa",
        tipe: "numeric",
        sort: true,
        hide: false,
        disable: false,
        isChart: true,
        isChartSelect: false,
        filter: true
      },
      {//8
        title: "Lelaki L.Biasa",
        name: "l_lbiasa",
        tipe: "numeric",
        sort: true,
        hide: false,
        disable: false,
        isChart: true, 
        isChartSelect: false,
        filter: true
      },
      {//9
        title: "Perempuan Biasa",
        name: "p_biasa",
        tipe: "numeric",
        sort: true,
        hide: false,
        disable: false,
        isChart: true,
        isChartSelect: false,
        filter: true
      },
      {//10
        title: "Perempuan L.Biasa",
        name: "p_lbiasa",
        tipe: "numeric",
        sort: true,
        hide: false,
        disable: false,
        isChart: true,
        isChartSelect: false,
        filter: true
      },
      {//11
        title: "Total Anggota",
        name: "total_anggota",
        tipe: "numeric",
        sort: true,
        hide: false,
        disable: false,
        isChart: true,
        isChartSelect: true
      },
      {//12
        title: "Total Anggota Lalu",
        name: "total_anggota_lalu",
        tipe: "numeric",
        sort: true,
        hide: false,
        disable: false,
        isChart: true,
        isChartSelect: false,
        filter: true
      },
      {//13
        title: "Aset",
        name: "aset",
        tipe: "numeric",
        sort: true,
        hide: false,
        disable: false,
        isChart: true,
        isChartSelect: false,
        filter: true,
        filterDefault: true
      },
      {//14
        title: "Aset Lalu",
        name: "aset_lalu",
        tipe: "numeric",
        sort: true,
        hide: false,
        disable: false,
        isChart: true,
        isChartSelect: false,
        filter: true
      },
      {//15
        title: "Aset Masalah",
        name: "aset_masalah",
        tipe: "numeric",
        sort: true,
        hide: false,
        disable: false,
        isChart: true,
        isChartSelect: false,
        filter: true
      },
      {//16
        title: "Aset Tdk Menghasilkan",
        name: "aset_tidak_menghasilkan",
        tipe: "numeric",
        sort: true,
        hide: false,
        disable: false,
        isChart: true,
        isChartSelect: false,
        filter: true
      },
      {//17
        title: "Aset Likuid Tdk Menghasilkan",
        name: "aset_likuid_tidak_menghasilkan",
        tipe: "numeric",
        sort: true,
        hide: false,
        disable: false,
        isChart: true,
        isChartSelect: false,
        filter: true
      },
      {//18
        title: "Aktiva Lancar",
        name: "aktiva_lancar",
        tipe: "numeric",
        sort: true,
        hide: false,
        disable: false,
        isChart: true,
        isChartSelect: false,
        filter: true
      },
      {//19
        title: "Simp. Saham",
        name: "simpanan_saham",
        tipe: "numeric",
        sort: true,
        hide: false,
        disable: false,
        isChart: true,
        isChartSelect: false,
        filter: true
      },
      {//20
        title: "Simp. Saham Lalu",
        name: "simpanan_saham_lalu",
        tipe: "numeric",
        sort: true,
        hide: false,
        disable: false,
        isChart: true,
        isChartSelect: false,
        filter: true
      },
      {//21
        title: "Simp. Saham Des",
        name: "simpanan_saham_des",
        tipe: "numeric",
        sort: true,
        hide: false,
        disable: false,
        isChart: true,
        isChartSelect: false,
        filter: true
      },
      {//22
        title: "Simp. Nonsaham Unggulan",
        name: "nonsaham_unggulan",
        tipe: "numeric",
        sort: true,
        hide: false,
        disable: false,
        isChart: true,
        isChartSelect: false,
        filter: true
      },
      {//23
        title: "Simp. Nonsaham Harian",
        name: "nonsaham_harian",
        tipe: "numeric",
        sort: true,
        hide: false,
        disable: false,
        isChart: true,
        isChartSelect: false,
        filter: true
      },
      {//24
        title: "Hutang SPD",
        name: "hutang_spd",
        tipe: "numeric",
        sort: true,
        hide: false,
        disable: false,
        isChart: true,
        isChartSelect: false,
        filter: true
      },
      {//25
        title: "Hutang Tdk Berbiaya",
        name: "hutang_tidak_berbiaya_30hari",
        tipe: "numeric",
        sort: true,
        hide: false,
        disable: false,
        isChart: true,
        isChartSelect: false,
        filter: true
      },
      {//26
        title: "Total Hutang Pihak Ke-3",
        name: "total_hutang_pihak3",
        tipe: "numeric",
        sort: true,
        hide: false,
        disable: false,
        isChart: true,
        isChartSelect: false,
        filter: true
      },
      {//27
        title: "Piutang Beredar",
        name: "piutang_beredar",
        tipe: "numeric",
        sort: true,
        hide: false,
        disable: false,
        isChart: true,
        isChartSelect: false,
        filter: true
      },
      {//28
        title: "Piutang Bersih",
        name: "piutang_bersih",
        tipe: "numeric",
        sort: true,
        hide: false,
        disable: false,
        isChart: true,
        isChartSelect: false
      },
      {//29
        title: "Piutang Anggota",
        name: "piutang_anggota",
        tipe: "numeric",
        sort: true,
        hide: false,
        disable: false,
        isChart: true,
        isChartSelect: false,
        filter: true
      },
      {//30
        title: "Piutang Lalai 1-12 Bulan",
        name: "piutang_lalai_1bulan",
        tipe: "numeric",
        sort: true,
        hide: false,
        disable: false,
        isChart: true,
        isChartSelect: false,
        filter: true
      },
      {//31
        title: "Piutang Lalai > 12 Bulan",
        name: "piutang_lalai_12bulan",
        tipe: "numeric",
        sort: true,
        hide: false,
        disable: false,
        isChart: true,
        isChartSelect: false,
        filter: true
      },
      {//32
        title: "Rasio Piutang Beredar",
        name: "rasio_beredar",
        tipe: "numeric",
        sort: true,
        hide: false,
        disable: false,
        isChart: true,
        isChartSelect: false
      },
      {//33
        title: "Rasio Piutang Lalai",
        name: "rasio_lalai",
        tipe: "numeric",
        sort: true,
        hide: false,
        disable: false,
        isChart: true,
        isChartSelect: false
      },
      {//34
        title: "DCR",
        name: "dcr",
        tipe: "numeric",
        sort: true,
        hide: false,
        disable: false,
        isChart: true,
        isChartSelect: false,
        filter: true
      },
      {//35
        title: "DCU",
        name: "dcu",
        tipe: "numeric",
        sort: true,
        hide: false,
        disable: false,
        isChart: true,
        isChartSelect: false,
        filter: true
      },
      {//36
        title: "Iuran Gedung",
        name: "iuran_gedung",
        tipe: "numeric",
        sort: true,
        hide: false,
        disable: false,
        isChart: true,
        isChartSelect: false,
        filter: true
      },
      {//37
        title: "Donasi",
        name: "donasi",
        tipe: "numeric",
        sort: true,
        hide: false,
        disable: false,
        isChart: true,
        isChartSelect: false,
        filter: true
      },
      {//38
        title: "BJS Saham",
        name: "bjs_saham",
        tipe: "numeric",
        sort: true,
        hide: false,
        disable: false,
        isChart: true,
        isChartSelect: false,
        filter: true
      },
      {//39
        title: "Beban Penyisihan DCR",
        name: "beban_penyisihan_dcr",
        tipe: "numeric",
        sort: true,
        hide: false,
        disable: false,
        isChart: true,
        isChartSelect: false,
        filter: true
      },
      {//40
        title: "Investasi Likuid",
        name: "investasi_likuid",
        tipe: "numeric",
        sort: true,
        hide: false,
        disable: false,
        isChart: true,
        isChartSelect: false,
        filter: true
      },
      {//41
        title: "Total Pendapatan",
        name: "total_pendapatan",
        tipe: "numeric",
        sort: true,
        hide: false,
        disable: false,
        isChart: true,
        isChartSelect: false,
        filter: true
      },
      {//42
        title: "Total Biaya",
        name: "total_biaya",
        tipe: "numeric",
        sort: true,
        hide: false,
        disable: false,
        isChart: true,
        isChartSelect: false,
        filter: true
      },
      {//43
        title: "SHU",
        name: "shu",
        tipe: "numeric",
        sort: true,
        hide: false,
        disable: false,
        isChart: true,
        isChartSelect: false,
        filter: true
      },
      {//44
        title: "SHU Lalu",
        name: "shu_lalu",
        tipe: "numeric",
        sort: true,
        hide: false,
        disable: false,
        isChart: true,
        isChartSelect: false,
        filter: true
      },
      {//45
        title: "Rata-rata Aset",
        name: "rata_aset",
        tipe: "numeric",
        sort: true,
        hide: false,
        disable: false,
        isChart: true,
        isChartSelect: false,
        filter: true
      },
      {//46
        title: "Laju Inflasi",
        name: "laju_inflasi",
        tipe: "numeric",
        sort: true,
        hide: false,
        disable: false,
        isChart: true,
        isChartSelect: false,
        filter: true
      },
      {//47
        title: "Harga Pasar",
        name: "harga_pasar",
        tipe: "numeric",
        sort: true,
        hide: false,
        disable: false,
        isChart: true,
        isChartSelect: false,
        filter: true
      },
      {//48
        title: "Tgl. Buat",
        name: "created_at",
        tipe: "datetime",
        sort: true,
        hide: false,
        disable: false,
        isChart: false,
        filter: true
      },
      {//49
        title: "Tgl. Ubah",
        name: "updated_at",
        tipe: "datetime",
        sort: true,
        hide: false,
        disable: false,
        isChart: false,
        filter: true
      },
    ],
    columnDataPearls: [
      {//0
        title: "No.",
        name: "No.",
      },
      {//1
        title: "CU",
        name: "cu.name",
        excelName: "cu_name",
        tipe: "string",
        sort: true,
        hide: false,
        disable: false,
        isChart: false,
        filter: true,
        filterDefault: true
      },
      {//2
        title: "TP",
        name: "tp.name",
        excelName: "tp_name",
        tipe: "string",
        sort: true,
        hide: false,
        disable: false,
        isChart: false,
        filter: true,
        filterDefault: false
      },
      {//3
        title: "No. BA",
        name: "laporan_cu.no_ba",
        excelName: "no_ba",
        tipe: "numeric",
        sort: true,
        hide: false,
        disable: false,
        isChart: false,
        filter: true,
      },
      {//4
        title: "Provinsi",
        name: "provinces.name",
        excelName: "provinces_name",
        tipe: "string",
        sort: true,
        hide: false,
        disable: false,
        isChart: false
      },
      {//5
        title: "Periode",
        name: "periode",
        tipe: "datetime",
        sort: true,
        hide: false,
        disable: false,
        isChart: false,
        filter: true,
        filterDefault: false
      },
      {//6
        title: "Jmlh TP/KP",
        name: "tp",
        tipe: "string",
        sort: true,
        hide: false,
        disable: false,
        isChart: false,
        filter: true,
      },
      {//7
        title: "Ideal",
        name: "tot_ideal",
        tipe: "numeric",
        sort: false,
        hide: false,
        disable: false,
        isChart: false,
        filter: false,
        filterDefault: false
      },
      {//8
        title: "P1 (= 100%)",
        name: "p1",
        tipe: "numeric",
        sort: true,
        hide: false,
        disable: false,
        filter: true,
        isChart: true,
      },
      {//9
        title: "P2 (> 35%)",
        name: "p2",
        tipe: "numeric",
        sort: true,
        hide: false,
        disable: false,
        filter: true,
        isChart: true,
      },
      {//10
        title: "E1 (70% - 80%)",
        name: "e1",
        tipe: "numeric",
        sort: true,
        hide: false,
        disable: false,
        filter: true,
        isChart: true,
      },
      {//11
        title: "E5 (70% - 80%)",
        name: "e5",
        tipe: "numeric",
        sort: true,
        hide: false,
        disable: false,
        filter: true,
        isChart: true,
      },
      {//12
        title: "E6 (<= 5%)",
        name: "e6",
        tipe: "numeric",
        sort: true,
        hide: false,
        disable: false,
        filter: true,
        isChart: true,
      },
      {//13
        title: "E7 (10% - 20%)",
        name: "e7",
        tipe: "numeric",
        sort: true,
        hide: false,
        disable: false,
        filter: true,
        isChart: true,
      },
      {//14
        title: "E9 (>= 10%)",
        name: "e9",
        tipe: "numeric",
        sort: true,
        hide: false,
        disable: false,
        filter: true,
        isChart: true,
      },
      {//15
        title: "A1 (<= 5%)",
        name: "a1",
        tipe: "numeric",
        sort: true,
        hide: false,
        disable: false,
        filter: true,
        isChart: true,
      },
      {//16
        title: "A2 (< 5%)",
        name: "a2",
        tipe: "numeric",
        sort: true,
        hide: false,
        disable: false,
        filter: true,
        isChart: true,
      },
      {//17
        title: "R7 (= harga pasar)",
        name: "r7_1",
        tipe: "numeric",
        sort: true,
        hide: false,
        disable: false,
        filter: true,
        isChart: true,
      },
      {//18
        title: "R9 (<= 5%)",
        name: "r9",
        tipe: "numeric",
        sort: true,
        hide: false,
        disable: false,
        filter: true,
        isChart: true,
      },
      {//19
        title: "L1 (15% - 20%)",
        name: "l1",
        tipe: "numeric",
        sort: true,
        hide: false,
        disable: false,
        filter: true,
        isChart: true,
      },
      {//20
        title: "L2 (15% - 20%)",
        name: "l2",
        tipe: "numeric",
        sort: true,
        hide: false,
        disable: false,
        filter: true,
        isChart: true,
      },
      {//21
        title: "S10 (> 12%)",
        name: "s10",
        tipe: "numeric",
        sort: true,
        hide: false,
        disable: false,
        filter: true,
        isChart: true,
      },
      {//22
        title: "S11 (> 10% + Laju Inflasi)",
        name: "s11",
        tipe: "numeric",
        sort: true,
        hide: false,
        disable: false,
        filter: true,
        isChart: true,
      },
      {//23
        title: "Harga Pasar",
        name: "harga_pasar",
        tipe: "numeric",
        sort: true,
        hide: false,
        disable: false,
        filter: true,
      },
      {//24
        title: "Laju Inflasi",
        name: "laju_inflasi",
        tipe: "numeric",
        sort: true,
        hide: false,
        disable: false,
        filter: true,
      },
      {//25
        title: "Tgl. Buat",
        name: "created_at",
        tipe: "datetime",
        sort: true,
        hide: false,
        disable: false,
        isChart: false,
        filter: true,
      },
      {//26
        title: "Tgl. Ubah",
        name: "updated_at",
        tipe: "datetime",
        sort: true,
        hide: false,
        disable: false,
        isChart: false,
        filter: true,
      }
    ],
    dataStat: '',
    dataStatS: '',
    grafikStat:'',
    grafikPearlsStat:'',
    pearlsStat:'',
    periodeStat: '',
    update: [], //update data
    updateStat: '',
    rules: [], //laravel rules
    options: [], //laravel options
  },

  // getters
  getters: {
    data: state => state.data,
    dataS: state => state.dataS,
    history: state => state.history,
    grafik: state => state.grafik,
    grafikPearls: state => state.grafikPearls,
    pearls: state => state.pearls,
    periode: state => state.periode,
    columnData: state => state.columnData,
    columnDataPearls: state => state.columnDataPearls,
    dataStat: state => state.dataStat,
    dataStatS: state => state.dataStatS,
    pearlsStat: state => state.pearlsStat,
    grafikStat: state => state.grafikStat,
    grafikPearlsStat: state => state.grafikPearlsStat,
    periodeStat: state => state.periodeStat,
    idCU: state => state.idCU,
    update: state => state.update,
    updateStat: state => state.updateStat,
    rules: state => state.rules,
    options: state => state.options,
  },

  actions: {
    //load collection with params
    index( { commit }, p ){
      commit('setDataStatS', 'loading');
      
      LaporanCuAPI.index( p )
        .then( function( response ){
          commit('setDataS', response.data.model );
          commit('setDataStatS', 'success');
        })
        .catch( error => {
          commit('setDataS', error.response);
          commit('setDataStatS', 'fail');
        });
    },

    indexTotal( { commit } ){
      commit('setDataStatS', 'loading');
      
      LaporanCuAPI.indexTotal()
        .then( function( response ){
          commit('setData', response.data.model );
          commit('setDataStat', 'success');
        })
        .catch( error => {
          commit('setData', error.response);
          commit('setDataStat', 'fail');
        });
    },

    //gerakan
    indexGerakan( { commit }, p ){
      commit('setDataStatS', 'loading');
      
      LaporanCuAPI.indexGerakan( p )
        .then( function( response ){
          commit('setDataS', response.data.model );
          commit('setDataStatS', 'success');
        })
        .catch( error => {
          commit('setDataS', error.response);
          commit('setDataStatS', 'fail');
        });
    },

    // load by cu
    indexCu( { commit }, [p, id] ){
      commit('setDataStatS', 'loading');
      
      LaporanCuAPI.indexCu( p, id )
        .then( function( response ){
          commit('setDataS', response.data.model);
          commit('setDataStatS', 'success');
        })
        .catch( error => {
          commit('setDataS', error.response);
          commit('setDataStatS', 'fail');
        });
    },

    // load cu draft
    indexCuDraft( { commit }, id ){
      commit('setDataStatS', 'loading');
      
      LaporanCuDraftAPI.index( id )
        .then( function( response ){
          commit('setDataS', response.data.model);
          commit('setDataStatS', 'success');
        })
        .catch( error => {
          commit('setDataS', error.response);
          commit('setDataStatS', 'fail');
        });
    },

    indexTpDraft( { commit }, id ){
      commit('setDataStatS', 'loading');
      
      LaporanTpDraftAPI.index( id )
        .then( function( response ){
          commit('setDataS', response.data.model);
          commit('setDataStatS', 'success');
        })
        .catch( error => {
          commit('setDataS', error.response);
          commit('setDataStatS', 'fail');
        });
    },


    // load by tp
    indexTpPeriode( { commit }, [p, id, periode] ){
      commit('setDataStatS', 'loading');
      
      LaporanTpAPI.indexPeriode( p, id, periode )
        .then( function( response ){
          commit('setDataS', response.data.model);
          commit('setDataStatS', 'success');
        })
        .catch( error => {
          commit('setDataS', error.response);
          commit('setDataStatS', 'fail');
        });
    },

    indexTp( { commit }, [p, id] ){
      commit('setDataStatS', 'loading');
      
      LaporanTpAPI.indexTp( p, id )
        .then( function( response ){
          commit('setDataS', response.data.model);
          commit('setDataStatS', 'success');
        })
        .catch( error => {
          commit('setDataS', error.response);
          commit('setDataStatS', 'fail');
        });
    },
    

    // load by periode
    indexPeriode( { commit }, [p, periode] ){
      commit('setDataStatS', 'loading');
      
      LaporanCuAPI.indexPeriode( p, periode )
        .then( function( response ){
          commit('setDataS', response.data.model);
          commit('setDataStatS', 'success');
        })
        .catch( error => {
          commit('setDataS', error.response);
          commit('setDataStatS', 'fail');
        });
    },

    //load collection with params
    indexPearls( { commit }, p ){
      commit('setPearlsStat', 'loading');
      
      LaporanCuAPI.indexPearls( p )
        .then( function( response ){
          commit('setPearls', response.data.model );
          commit('setPearlsStat', 'success');
        })
        .catch( error => {
          commit('setPearls', error.response);
          commit('setPearlsStat', 'fail');
        });
    },

    // load by cu
    indexPearlsCu( { commit }, [p, id] ){
      commit('setPearlsStat', 'loading');
      
      LaporanCuAPI.indexPearlsCu( p, id )
        .then( function( response ){
          commit('setPearls', response.data.model);
          commit('setPearlsStat', 'success');
        })
        .catch( error => {
          commit('setPearls', error.response);
          commit('setPearlsStat', 'fail');
        });
    },

    // load by tp
    indexPearlsTp( { commit }, [p, id] ){
      commit('setPearlsStat', 'loading');
      
      LaporanTpAPI.indexPearlsTp( p, id )
        .then( function( response ){
          commit('setPearls', response.data.model);
          commit('setPearlsStat', 'success');
        })
        .catch( error => {
          commit('setPearls', error.response);
          commit('setPearlsStat', 'fail');
        });
    },
    indexPearlsTpPeriode( { commit }, [p, id, periode] ){
      commit('setPearlsStat', 'loading');
      
      LaporanTpAPI.indexPearlsPeriode( p, id, periode )
        .then( function( response ){
          commit('setPearls', response.data.model);
          commit('setPearlsStat', 'success');
        })
        .catch( error => {
          commit('setPearls', error.response);
          commit('setPearlsStat', 'fail');
        });
    },

    // load by periode
    indexPearlsPeriode( { commit }, [p, periode] ){
      commit('setPearlsStat', 'loading');
      
      LaporanCuAPI.indexPearlsPeriode( p, periode )
        .then( function( response ){
          commit('setPearls', response.data.model);
          commit('setPearlsStat', 'success');
        })
        .catch( error => {
          commit('setPearls', error.response);
          commit('setPearlsStat', 'fail');
        });
    },
    
    // load collection of periode
    getPeriode( {commit} ){
      commit('setPeriodeStat', 'loading');
      
      LaporanCuAPI.getPeriode()
        .then( function( response ){
          commit('setPeriode', response.data.model);
          commit('setPeriodeStat', 'success');
        })
        .catch(error => {
          commit('setPeriode', error.response);
          commit('setPeriodeStat', 'fail');
        });
    },

    // load collection of periode
    getPeriodeCu( {commit}, id ){
      commit('setPeriodeStat', 'loading');
      
      LaporanCuAPI.getPeriodeCu( id )
        .then( function( response ){
          commit('setPeriode', response.data.model);
          commit('setPeriodeStat', 'success');
        })
        .catch(error => {
          commit('setPeriode', error.response);
          commit('setPeriodeStat', 'fail');
        });
    },


    // load by periode
    grafikGerakan( { commit }, p ){
      commit('setGrafikStat', 'loading');
      
      LaporanCuAPI.indexGerakan( p )
        .then( function( response ){
          commit('setGrafik', response.data.model);
          commit('setGrafikStat', 'success');
        })
        .catch( error => {
          commit('setGrafik', error.response);
          commit('setGrafikStat', 'fail');
        });
    },

    // load by periode
    grafikPeriode( { commit }, [p, periode] ){
      commit('setGrafikStat', 'loading');
      
      LaporanCuAPI.indexPeriode( p, periode )
        .then( function( response ){
          commit('setGrafik', response.data.model);
          commit('setGrafikStat', 'success');
        })
        .catch( error => {
          commit('setGrafik', error.response);
          commit('setGrafikStat', 'fail');
        });
    },

    // load by cu
    grafikCu( { commit }, [p, id] ){
      commit('setGrafikStat', 'loading');
      
      LaporanCuAPI.indexCu( p, id )
        .then( function( response ){
          commit('setGrafik', response.data.model);
          commit('setGrafikStat', 'success');
        })
        .catch( error => {
          commit('setGrafik', error.response);
          commit('setGrafikStat', 'fail');
        });
    },

    grafikTpPeriode( { commit }, [p, id, periode] ){
      commit('setGrafikStat', 'loading');
      
      LaporanTpAPI.indexPeriode( p, id, periode )
        .then( function( response ){
          commit('setGrafik', response.data.model);
          commit('setGrafikStat', 'success');
        })
        .catch( error => {
          commit('setGrafik', error.response);
          commit('setGrafikStat', 'fail');
        });
    },

    // load by tp
    grafikTp( { commit }, [p, id] ){
      commit('setGrafikStat', 'loading');
      
      LaporanTpAPI.indexTp( p, id )
        .then( function( response ){
          commit('setGrafik', response.data.model);
          commit('setGrafikStat', 'success');
        })
        .catch( error => {
          commit('setGrafik', error.response);
          commit('setGrafikStat', 'fail');
        });
    },

    // load by periode
    grafikPearlsPeriode( { commit }, [p, periode] ){
      commit('setGrafikPearlsStat', 'loading');
      
      LaporanCuAPI.indexPearlsPeriode( p, periode )
        .then( function( response ){
          commit('setGrafikPearls', response.data.model);
          commit('setGrafikPearlsStat', 'success');
        })
        .catch( error => {
          commit('setGrafikPearls', error.response);
          commit('setGrafikPearlsStat', 'fail');
        });
    },

    // load by cu
    grafikPearlsCu( { commit }, [p, id] ){
      commit('setGrafikPearlsStat', 'loading');
      
      LaporanCuAPI.indexPearlsCu( p, id )
        .then( function( response ){
          commit('setGrafikPearls', response.data.model);
          commit('setGrafikPearlsStat', 'success');
        })
        .catch( error => {
          commit('setGrafikPearls', error.response);
          commit('setGrafikPearlsStat', 'fail');
        });
    },

    grafikPearlsTpPeriode( { commit }, [p, id, periode] ){
      commit('setGrafikPearlsStat', 'loading');
      
      LaporanTpAPI.indexPearlsPeriode( p, id, periode )
        .then( function( response ){
          commit('setGrafikPearls', response.data.model);
          commit('setGrafikPearlsStat', 'success');
        })
        .catch( error => {
          commit('setGrafikPearls', error.response);
          commit('setGrafikPearlsStat', 'fail');
        });
    },

    // load by tp
    grafikPearlsTp( { commit }, [p, id] ){
      commit('setGrafikPearlsStat', 'loading');
      
      LaporanTpAPI.indexPearlsTp( p, id )
        .then( function( response ){
          commit('setGrafikPearls', response.data.model);
          commit('setGrafikPearlsStat', 'success');
        })
        .catch( error => {
          commit('setGrafikPearls', error.response);
          commit('setGrafikPearlsStat', 'fail');
        });
    },

    create( {commit} ){
      commit('setDataStat', 'loading');
      
      LaporanCuAPI.create()
        .then( function( response ){
          commit('setData', response.data.form);
          commit('setRules', response.data.rules);
          commit('setOptions', response.data.options)
          commit('setDataStat', 'success');
        })
        .catch(error => {
          commit('setData', error.response);
          commit('setRules', []);
          commit('setOptions', [])
          commit('setDataStat', 'fail');
        });
    },

    // detail
    detail( {commit}, id ){
      commit('setDataStat', 'loading');
      
      LaporanCuAPI.detail( id )
        .then( function( response ){
          commit('setData', response.data.model);
          commit('setHistory', response.data.history);
          commit('setDataStat', 'success');
        })
        .catch(error => {
          commit('setData', error.response);
          commit('setHistory', '');
          commit('setDataStat', 'fail');
        });
    },
    detailPearls( {commit}, id ){
      commit('setPearlsStat', 'loading');
      
      LaporanCuAPI.detailPearls( id )
        .then( function( response ){
          commit('setPearls', response.data.model);
          commit('setPearlsStat', 'success');
        })
        .catch(error => {
          commit('setPearls', error.response);
          commit('setPearlsStat', 'fail');
        });
    },
    detailTp( {commit}, id ){
      commit('setDataStat', 'loading');
      
      LaporanTpAPI.detail( id )
        .then( function( response ){
          commit('setData', response.data.model);
          commit('setHistory', response.data.history);
          commit('setDataStat', 'success');
        })
        .catch( error => {
          commit('setData', error.response);
          commit('setHistory', '');
          commit('setDataStat', 'fail');
        });
    },
    detailPearlsTp( {commit}, id ){
      commit('setPearlsStat', 'loading');
      
      LaporanTpAPI.detailPearls( id )
        .then( function( response ){
          commit('setPearls', response.data.model);
          commit('setPearlsStat', 'success');
        })
        .catch(error => {
          commit('setPearls', error.response);
          commit('setPearlsStat', 'fail');
        });
    },

    //store data
    store( {commit, state, dispatch}, form ){
      commit('setUpdateStat', 'loading');

      LaporanCuAPI.store( form )
        .then( function( response ){
          if(response.data.saved){
            commit('setUpdateStat', 'success');
          }else{
            commit('setUpdateStat', 'fail');
          }
          commit('setUpdate', response.data);
        })
        .catch(error => {
          commit('setUpdate', error.response);   
          commit('setUpdateStat', 'fail');
        });
    },
    storeTp( {commit, state, dispatch}, form ){
      commit('setUpdateStat', 'loading');

      LaporanTpAPI.store( form )
        .then( function( response ){
          if(response.data.saved){
            commit('setUpdateStat', 'success');
          }else{
            commit('setUpdateStat', 'fail');
          }
          commit('setUpdate', response.data);
        })
        .catch(error => {
          commit('setUpdate', error.response);   
          commit('setUpdateStat', 'fail');
        });
    },
    storeDraft( {commit, state, dispatch}, id ){
      commit('setUpdateStat', 'loading');

      LaporanCuDraftAPI.store( id )
        .then( function( response ){
          if(response.data.saved){
            commit('setUpdateStat', 'success');
          }else{
            commit('setUpdateStat', 'fail');
          }
          commit('setUpdate', response.data);
        })
        .catch(error => {
          commit('setUpdate', error.response);   
          commit('setUpdateStat', 'fail');
        });
    },
    storeDraftAll( {commit, state, dispatch} ){
      commit('setUpdateStat', 'loading');

      LaporanCuDraftAPI.storeAll()
        .then( function( response ){
          if(response.data.saved){
            commit('setUpdateStat', 'success');
          }else{
            commit('setUpdateStat', 'fail');
          }
          commit('setUpdate', response.data);
        })
        .catch(error => {
          commit('setUpdate', error.response);   
          commit('setUpdateStat', 'fail');
        });
    },
    storeTpDraft( {commit, state, dispatch}, id ){
      commit('setUpdateStat', 'loading');

      LaporanTpDraftAPI.store( id )
        .then( function( response ){
          if(response.data.saved){
            commit('setUpdateStat', 'success');
          }else{
            commit('setUpdateStat', 'fail');
          }
          commit('setUpdate', response.data);
        })
        .catch(error => {
          commit('setUpdate', error.response);   
          commit('setUpdateStat', 'fail');
        });
    },
    storeTpDraftAll( {commit, state, dispatch} ){
      commit('setUpdateStat', 'loading');

      LaporanTpDraftAPI.storeAll()
        .then( function( response ){
          if(response.data.saved){
            commit('setUpdateStat', 'success');
          }else{
            commit('setUpdateStat', 'fail');
          }
          commit('setUpdate', response.data);
        })
        .catch(error => {
          commit('setUpdate', error.response);   
          commit('setUpdateStat', 'fail');
        });
    },


    // edit page
    edit( {commit}, id ){
      commit('setDataStat', 'loading');
      
      LaporanCuAPI.edit( id )
        .then( function( response ){
          commit('setData', response.data.form);
          commit('setRules', response.data.rules);
          commit('setOptions', response.data.options)
          commit('setDataStat', 'success');
        })
        .catch(error => {
          commit('setData', error.response);
          commit('setRules', []);
          commit('setOptions', [])
          commit('setDataStat', 'fail');
        });
    },
    //edit tp
    editTp( {commit}, id ){
      commit('setDataStat', 'loading');
      
      LaporanTpAPI.edit( id )
        .then( function( response ){
          commit('setData', response.data.form);
          commit('setRules', response.data.rules);
          commit('setOptions', response.data.options)
          commit('setDataStat', 'success');
        })
        .catch(error => {
          commit('setData', error.response);
          commit('setRules', []);
          commit('setOptions', [])
          commit('setDataStat', 'fail');
        });
    },
    editDraft( {commit}, id ){
      commit('setDataStat', 'loading');
      
      LaporanCuDraftAPI.edit( id )
        .then( function( response ){
          commit('setData', response.data.form);
          commit('setRules', response.data.rules);
          commit('setOptions', response.data.options)
          commit('setDataStat', 'success');
        })
        .catch(error => {
          commit('setData', error.response);
          commit('setRules', []);
          commit('setOptions', [])
          commit('setDataStat', 'fail');
        });
    },
    editTpDraft( {commit}, id ){
      commit('setDataStat', 'loading');
      
      LaporanTpDraftAPI.edit( id )
        .then( function( response ){
          commit('setData', response.data.form);
          commit('setRules', response.data.rules);
          commit('setOptions', response.data.options)
          commit('setDataStat', 'success');
        })
        .catch(error => {
          commit('setData', error.response);
          commit('setRules', []);
          commit('setOptions', [])
          commit('setDataStat', 'fail');
        });
    },

    // update data
    update( {commit, state, dispatch}, [id, form] ){
      commit('setUpdateStat', 'loading');

      LaporanCuAPI.update( id, form )
        .then( function( response ){
          if(response.data.saved){
            commit('setUpdateStat', 'success');
          }else{
            commit('setUpdateStat', 'fail');
          }
          commit('setUpdate', response.data);
        })
        .catch(error => {
          commit('setUpdate', error.response);   
          commit('setUpdateStat', 'fail');
        });
    },
    updateTp( {commit, state, dispatch}, [id, form] ){
      commit('setUpdateStat', 'loading');

      LaporanTpAPI.update( id, form )
        .then( function( response ){
          if(response.data.saved){
            commit('setUpdateStat', 'success');
          }else{
            commit('setUpdateStat', 'fail');
          }
          commit('setUpdate', response.data);
        })
        .catch(error => {
          commit('setUpdate', error.response);   
          commit('setUpdateStat', 'fail');
        });
    },
    updateDraft( {commit, state, dispatch}, [id, form] ){
      commit('setUpdateStat', 'loading');

      LaporanCuDraftAPI.update( id, form )
        .then( function( response ){
          if(response.data.saved){
            commit('setUpdate', response.data);
            commit('setUpdateStat', 'success');
          }else{
            commit('setUpdateStat', 'fail');
          }
        })
        .catch(error => {
          commit('setUpdate', error.response);   
          commit('setUpdateStat', 'fail');
        });
    },
    updateTpDraft( {commit, state, dispatch}, [id, form] ){
      commit('setUpdateStat', 'loading');

      LaporanTpDraftAPI.update( id, form )
        .then( function( response ){
          if(response.data.saved){
            commit('setUpdate', response.data);
            commit('setUpdateStat', 'success');
          }else{
            commit('setUpdateStat', 'fail');
          }
        })
        .catch(error => {
          commit('setUpdate', error.response);   
          commit('setUpdateStat', 'fail');
        });
    },

    // destroy data
    destroy( {commit, state, dispatch}, id ){
      commit('setUpdateStat', 'loading');

      LaporanCuAPI.destroy( id )
        .then( function( response ){
          if(response.data.deleted){
            commit('setUpdate', response.data);
            commit('setUpdateStat', 'success');
          }else{
            commit('setUpdateStat', 'fail');
          }
        })
        .catch(error => {
          commit('setUpdate', error.response);         
          commit('setUpdateStat', 'fail');
        });
    },
    destroyTp( {commit, state, dispatch}, id ){
      commit('setUpdateStat', 'loading');

      LaporanTpAPI.destroy( id )
        .then( function( response ){
          if(response.data.deleted){
            commit('setUpdate', response.data);
            commit('setUpdateStat', 'success');
          }else{
            commit('setUpdateStat', 'fail');
          }
        })
        .catch(error => {
          commit('setUpdate', error.response);         
          commit('setUpdateStat', 'fail');
        });
    },
    destroyDraft( {commit, state, dispatch}, id ){
      commit('setUpdateStat', 'loading');

      LaporanCuDraftAPI.destroy( id )
        .then( function( response ){
          if(response.data.deleted){
            commit('setUpdate', response.data);
            commit('setUpdateStat', 'success');
          }else{
            commit('setUpdateStat', 'fail');
          }
        })
        .catch(error => {
          commit('setUpdate', error.response);         
          commit('setUpdateStat', 'fail');
        });
    },
    destroyDraftAll( {commit, state, dispatch} ){
      commit('setUpdateStat', 'loading');

      LaporanCuDraftAPI.destroyAll()
        .then( function( response ){
          if(response.data.deleted){
            commit('setUpdate', response.data);
            commit('setUpdateStat', 'success');
          }else{
            commit('setUpdateStat', 'fail');
          }
        })
        .catch(error => {
          commit('setUpdate', error.response);         
          commit('setUpdateStat', 'fail');
        });
    },
    destroyTpDraft( {commit, state, dispatch}, id ){
      commit('setUpdateStat', 'loading');

      LaporanTpDraftAPI.destroy( id )
        .then( function( response ){
          if(response.data.deleted){
            commit('setUpdate', response.data);
            commit('setUpdateStat', 'success');
          }else{
            commit('setUpdateStat', 'fail');
          }
        })
        .catch(error => {
          commit('setUpdate', error.response);         
          commit('setUpdateStat', 'fail');
        });
    },
    destroyTpDraftAll( {commit, state, dispatch} ){
      commit('setUpdateStat', 'loading');

      LaporanTpDraftAPI.destroyAll()
        .then( function( response ){
          if(response.data.deleted){
            commit('setUpdate', response.data);
            commit('setUpdateStat', 'success');
          }else{
            commit('setUpdateStat', 'fail');
          }
        })
        .catch(error => {
          commit('setUpdate', error.response);         
          commit('setUpdateStat', 'fail');
        });
    },

    uploadExcel( {commit, state, dispatch}, form ){
      commit('setUpdateStat', 'loading');

      LaporanCuAPI.uploadExcel( form )
        .then( function( response ){
          if(response.data.saved){
            commit('setUpdate', response.data);
            commit('setUpdateStat', 'success');
          }else{
            commit('setUpdateStat', 'fail');
          }
        })
        .catch(error => {
          commit('setUpdate', error.response);   
          commit('setUpdateStat', 'fail');
        });
    },

    uploadExcelAll( {commit, state, dispatch}, form ){
      commit('setUpdateStat', 'loading');

      LaporanCuAPI.uploadExcelAll( form )
        .then( function( response ){
          if(response.data.saved){
            commit('setUpdate', response.data);
            commit('setUpdateStat', 'success');
          }else{
            commit('setUpdateStat', 'fail');
          }
        })
        .catch(error => {
          commit('setUpdate', error.response);   
          commit('setUpdateStat', 'fail');
        });
    },

    uploadExcelTp( {commit, state, dispatch}, form ){
      commit('setUpdateStat', 'loading');

      LaporanTpAPI.uploadExcel( form )
        .then( function( response ){
          if(response.data.saved){
            commit('setUpdate', response.data);
            commit('setUpdateStat', 'success');
          }else{
            commit('setUpdateStat', 'fail');
          }
        })
        .catch(error => {
          commit('setUpdate', error.response);   
          commit('setUpdateStat', 'fail');
        });
    },
    uploadExcelTpAll( {commit, state, dispatch}, form ){
      commit('setUpdateStat', 'loading');

      LaporanTpAPI.uploadExcelAll( form )
        .then( function( response ){
          if(response.data.saved){
            commit('setUpdate', response.data);
            commit('setUpdateStat', 'success');
          }else{
            commit('setUpdateStat', 'fail');
          }
        })
        .catch(error => {
          commit('setUpdate', error.response);   
          commit('setUpdateStat', 'fail');
        });
    },

    addColumnData( {commit}, data){
      commit('setColumnData', data);
    },

    addColumnDataPearls( {commit}, data){
      commit('setColumnDataPearls', data);
    },

    // reset
    resetUpdateStat( {commit} ){
      commit('setUpdateStat', '');
    },
    resetData( {commit} ){
      commit('setData', '');
      commit('setDataStat', '');
    },
    resetDataS( {commit} ){
      commit('setDataS', '');
      commit('setDataStatS', '');
    },
    
  },

  // mutations
  mutations: {
    setData ( state, data ){
      state.data = data;
    },
    setDataS ( state, data ){
      state.dataS = data;
    },
    setHistory ( state, data ){
      state.history = data;
    },
    setGrafik( state, data ){
      state.grafik = data;
    },
    setGrafikPearls( state, data ){
      state.grafikPearls = data;
    },
    setPearls( state, data ){
      state.pearls = data;
    },
    setPeriode( state, data ){
      state.periode = data;
    },
    setColumnData(state, data){
      state.columnData = data;
    },
    setColumnDataPearls(state, data){
      state.columnDataPearls = data;
    },
    setDataStat( state, status ){
      state.dataStat = status;
    },
    setDataStatS( state, status ){
      state.dataStatS = status;
    },
    setPearlsStat( state, status ){
      state.pearlsStat = status;
    },
    setGrafikStat( state, status ){
      state.grafikStat = status;
    },
    setGrafikPearlsStat( state, status ){
      state.grafikPearlsStat = status;
    },
    setPeriodeStat( state, status ){
      state.periodeStat = status;
    },
    setIdCU ( state, id ){
      state.idCU = id;
    },
    setUpdate ( state, data ){
      state.update = data;
    },
    setUpdateStat( state,status ){
      state.updateStat = status;
    },
    setRules( state, rules ){
      state.rules = rules;
    },
    setOptions( state, options ){
      state.options = options;
    }
  }
}