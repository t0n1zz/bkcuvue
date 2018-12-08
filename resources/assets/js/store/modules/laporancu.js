import laporanCuAPI from '../../api/laporanCu.js';
import laporanCuDraftAPI from '../../api/laporanCuDraft.js';
import laporanTpAPI from '../../api/laporanTp.js';
import laporanTpDraftAPI from '../../api/laporanTpDraft.js';

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
      {
        title: "No.",
        name: "No."
      },
      {
        title: "CU",
        name: "cu.name",
        tipe: "string",
        sort: true,
        hide: false,
        disable: false,
        isChart: false,
        filter: true,
      },
      {
        title: "TP",
        name: "tp.name",
        tipe: "string",
        sort: true,
        hide: false,
        disable: false,
        isChart: false,
        filter: true,
      },
      {
        title: "No. BA",
        name: "laporan_cu.no_ba",
        tipe: "numeric",
        sort: true,
        hide: false,
        disable: false,
        isChart: false,
        filter: true
      },
      {
        title: "Provinsi",
        name: "provinces.name",
        tipe: "string",
        sort: true,
        hide: false,
        disable: false,
        isChart: false,
        filter: true
      },
      {
        title: "Periode",
        name: "periode",
        tipe: "datetime",
        sort: true,
        hide: false,
        disable: false,
        isChart: false,
        filter: true,
      },
      {
        title: "Jmlh. Tp",
        name: "tp",
        tipe: "numeric",
        sort: true,
        hide: false,
        disable: false,
        isChart: false,
        filter: true
      },
      {
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
      {
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
      {
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
      {
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
      {
        title: "Total Anggota",
        name: "total_anggota",
        tipe: "numeric",
        sort: true,
        hide: false,
        disable: false,
        isChart: true,
        isChartSelect: true
      },
      {
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
      {
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
      {
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
      {
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
      {
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
      {
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
      {
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
      {
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
      {
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
      {
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
      {
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
      {
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
      {
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
      {
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
      {
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
      {
        title: "Piutang Bersih",
        name: "piutang_bersih",
        tipe: "numeric",
        sort: true,
        hide: false,
        disable: false,
        isChart: true,
        isChartSelect: false
      },
      {
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
      {
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
      {
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
      {
        title: "Rasio Piutang Beredar",
        name: "rasio_beredar",
        tipe: "numeric",
        sort: true,
        hide: false,
        disable: false,
        isChart: true,
        isChartSelect: false
      },
      {
        title: "Rasio Piutang Lalai",
        name: "rasio_lalai",
        tipe: "numeric",
        sort: true,
        hide: false,
        disable: false,
        isChart: true,
        isChartSelect: false
      },
      {
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
      {
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
      {
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
      {
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
      {
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
      {
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
      {
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
      {
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
      {
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
      {
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
      {
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
      {
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
      {
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
      {
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
      {
        title: "Tgl. Buat",
        name: "created_at",
        tipe: "datetime",
        sort: true,
        hide: false,
        disable: false,
        isChart: false,
        filter: true
      },
      {
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
      {
        title: "No.",
        name: "No.",
      },
      {
        title: "CU",
        name: "cu.name",
        tipe: "string",
        sort: true,
        hide: false,
        disable: false,
        isChart: false,
        filter: true,
        filterDefault: true
      },
      {
        title: "TP",
        name: "tp.name",
        tipe: "string",
        sort: true,
        hide: false,
        disable: false,
        isChart: false,
        filter: true,
        filterDefault: false
      },
      {
        title: "No. BA",
        name: "laporan_cu.no_ba",
        tipe: "numeric",
        sort: true,
        hide: false,
        disable: false,
        isChart: false,
        filter: true,
      },
      {
        title: "Provinsi",
        name: "provinces.name",
        tipe: "string",
        sort: true,
        hide: false,
        disable: false,
        isChart: false
      },
      {
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
      {
        title: "Jmlh Tp",
        name: "tp",
        tipe: "string",
        sort: true,
        hide: false,
        disable: false,
        isChart: false,
        filter: true,
      },
      {
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
      {
        title: "P1 (= 100%)",
        name: "p1",
        tipe: "numeric",
        sort: true,
        hide: false,
        disable: false,
        filter: true,
        isChart: true,
      },
      {
        title: "P2 (&gt; 100%)",
        name: "p2",
        tipe: "numeric",
        sort: true,
        hide: false,
        disable: false,
        filter: true,
        isChart: true,
      },
      {
        title: "E1 (70% - 80%)",
        name: "e1",
        tipe: "numeric",
        sort: true,
        hide: false,
        disable: false,
        filter: true,
        isChart: true,
      },
      {
        title: "E5 (70% - 80%)",
        name: "e5",
        tipe: "numeric",
        sort: true,
        hide: false,
        disable: false,
        filter: true,
        isChart: true,
      },
      {
        title: "E6 (&le; 5%)",
        name: "e6",
        tipe: "numeric",
        sort: true,
        hide: false,
        disable: false,
        filter: true,
        isChart: true,
      },
      {
        title: "E7 (10% - 20%)",
        name: "e7",
        tipe: "numeric",
        sort: true,
        hide: false,
        disable: false,
        filter: true,
        isChart: true,
      },
      {
        title: "E9 (&ge; 10%)",
        name: "e9",
        tipe: "numeric",
        sort: true,
        hide: false,
        disable: false,
        filter: true,
        isChart: true,
      },
      {
        title: "A1 (&le; 5%)",
        name: "a1",
        tipe: "numeric",
        sort: true,
        hide: false,
        disable: false,
        filter: true,
        isChart: true,
      },
      {
        title: "A2 (&lt; 5%)",
        name: "a2",
        tipe: "numeric",
        sort: true,
        hide: false,
        disable: false,
        filter: true,
        isChart: true,
      },
      {
        title: "R7 (= harga pasar)",
        name: "r7_1",
        tipe: "numeric",
        sort: true,
        hide: false,
        disable: false,
        filter: true,
        isChart: true,
      },
      {
        title: "R9 (= 5%)",
        name: "r9",
        tipe: "numeric",
        sort: true,
        hide: false,
        disable: false,
        filter: true,
        isChart: true,
      },
      {
        title: "L1 (15% - 20%)",
        name: "l1",
        tipe: "numeric",
        sort: true,
        hide: false,
        disable: false,
        filter: true,
        isChart: true,
      },
      {
        title: "L2 (15% - 20%)",
        name: "l2",
        tipe: "numeric",
        sort: true,
        hide: false,
        disable: false,
        filter: true,
        isChart: true,
      },
      {
        title: "S10 (&gt; 12%)",
        name: "s10",
        tipe: "numeric",
        sort: true,
        hide: false,
        disable: false,
        filter: true,
        isChart: true,
      },
      {
        title: "S11 (&gt; 10% + Laju Inflasi)",
        name: "s11",
        tipe: "numeric",
        sort: true,
        hide: false,
        disable: false,
        filter: true,
        isChart: true,
      },
      {
        title: "Harga Pasar",
        name: "harga_pasar",
        tipe: "numeric",
        sort: true,
        hide: false,
        disable: false,
        filter: true,
      },
      {
        title: "Laju Inflasi",
        name: "laju_inflasi",
        tipe: "numeric",
        sort: true,
        hide: false,
        disable: false,
        filter: true,
      },
      {
        title: "Tgl. Buat",
        name: "created_at",
        tipe: "datetime",
        sort: true,
        hide: false,
        disable: false,
        isChart: false,
        filter: true,
      },
      {
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
      
      laporanCuAPI.index( p )
        .then( function( response ){
          commit('setDataS', response.data.model );
          commit('setDataStatS', 'success');
        })
        .catch( error => {
          commit('setDataS', error.response);
          commit('setDataStatS', 'fail');
        });
    },

    //gerakan
    indexGerakan( { commit }, p ){
      commit('setDataStatS', 'loading');
      
      laporanCuAPI.indexGerakan( p )
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
      
      laporanCuAPI.indexCu( p, id )
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
      
      laporanCuDraftAPI.index( id )
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
      
      laporanTpDraftAPI.index( id )
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
      
      laporanTpAPI.indexPeriode( p, id, periode )
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
      
      laporanTpAPI.indexTp( p, id )
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
      
      laporanCuAPI.indexPeriode( p, periode )
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
      
      laporanCuAPI.indexPearls( p )
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
      
      laporanCuAPI.indexPearlsCu( p, id )
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
      
      laporanTpAPI.indexPearlsTp( p, id )
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
      
      laporanTpAPI.indexPearlsPeriode( p, id, periode )
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
      
      laporanCuAPI.indexPearlsPeriode( p, periode )
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
      
      laporanCuAPI.getPeriode()
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
      
      laporanCuAPI.getPeriodeCu( id )
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
      
      laporanCuAPI.indexGerakan( p )
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
      
      laporanCuAPI.indexPeriode( p, periode )
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
      
      laporanCuAPI.indexCu( p, id )
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
      
      laporanTpAPI.indexPeriode( p, id, periode )
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
      
      laporanTpAPI.indexTp( p, id )
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
      
      laporanCuAPI.indexPearlsPeriode( p, periode )
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
      
      laporanCuAPI.indexPearlsCu( p, id )
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
      
      laporanTpAPI.indexPearlsPeriode( p, id, periode )
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
      
      laporanTpAPI.indexPearlsTp( p, id )
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
      
      laporanCuAPI.create()
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
      
      laporanCuAPI.detail( id )
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
      
      laporanCuAPI.detailPearls( id )
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
      
      laporanTpAPI.detail( id )
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
      
      laporanTpAPI.detailPearls( id )
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

      laporanCuAPI.store( form )
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
    storeTp( {commit, state, dispatch}, form ){
      commit('setUpdateStat', 'loading');

      laporanTpAPI.store( form )
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
    storeDraft( {commit, state, dispatch}, id ){
      commit('setUpdateStat', 'loading');

      laporanCuDraftAPI.store( id )
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
    storeDraftAll( {commit, state, dispatch} ){
      commit('setUpdateStat', 'loading');

      laporanCuDraftAPI.storeAll()
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
    storeTpDraft( {commit, state, dispatch}, id ){
      commit('setUpdateStat', 'loading');

      laporanTpDraftAPI.store( id )
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
    storeTpDraftAll( {commit, state, dispatch} ){
      commit('setUpdateStat', 'loading');

      laporanTpDraftAPI.storeAll()
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


    // edit page
    edit( {commit}, id ){
      commit('setDataStat', 'loading');
      
      laporanCuAPI.edit( id )
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
      
      laporanTpAPI.edit( id )
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
      
      laporanCuDraftAPI.edit( id )
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
      
      laporanTpDraftAPI.edit( id )
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

      laporanCuAPI.update( id, form )
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
    updateTp( {commit, state, dispatch}, [id, form] ){
      commit('setUpdateStat', 'loading');

      laporanTpAPI.update( id, form )
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
    updateDraft( {commit, state, dispatch}, [id, form] ){
      commit('setUpdateStat', 'loading');

      laporanCuDraftAPI.update( id, form )
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

      laporanTpDraftAPI.update( id, form )
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

      laporanCuAPI.destroy( id )
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

      laporanTpAPI.destroy( id )
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

      laporanCuDraftAPI.destroy( id )
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

      laporanCuDraftAPI.destroyAll()
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

      laporanTpDraftAPI.destroy( id )
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

      laporanTpDraftAPI.destroyAll()
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

      laporanCuAPI.uploadExcel( form )
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

      laporanCuAPI.uploadExcelAll( form )
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

      laporanTpAPI.uploadExcel( form )
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

      laporanTpAPI.uploadExcelAll( form )
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