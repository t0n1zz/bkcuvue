import laporanCuAPI from '../../api/laporanCu.js';
import laporanTpAPI from '../../api/laporanTp.js';

export const laporanCu = {
  namespaced: true,

  // state
  state: {
    data: {}, //single data
    dataS: [], //collection
    grafik: [],
    grafikPearls: [],
    pearls: [],
    periode: [],
    columnData: [
      {
        title: 'No.',
        key: 'No.',
        excelType: 'string',
        sort: false,
        hide: false,
        disable: false,
        isChart: false,
        columnGroup: 'all'
      },
      {
        title: 'CU',
        key: 'cu_name',
        excelType: 'string',
        sort: true,
        hide: false,
        disable: false,
        isChart: false,
        columnGroup: 'all',
        filter: true,
        filterType: 'string',
        filterKey: 'cu.name'
      },
      {
        title: 'TP',
        key: 'tp_name',
        excelType: 'string',
        sort: true,
        hide: false,
        disable: false,
        isChart: false,
        columnGroup: 'all',
        filter: true,
        filterType: 'string',
        filterKey: 'tp.name'
      },
      {
        title: 'No. BA',
        key: 'laporan_cu.no_ba',
        excelType: 'string',
        sort: true,
        hide: false,
        disable: false,
        isChart: false,
        columnGroup: 'all',
        filter: true,
        filterType: 'number',
        filterKey: 'cu.no_ba'
      },
      {
        title: 'Provinsi',
        key: 'provinces_name',
        groupKey: 'provinces_name',
        groupNoKey: '-',
        sort: true,
        hide: false,
        disable: false,
        isChart: false,
        columnGroup: 'all'
      },
      {
        title: 'Periode',
        key: 'periode',
        groupKey: 'periode',
        groupNoKey: '-',
        sort: true,
        hide: false,
        disable: false,
        isChart: false,
        columnGroup: 'all',
        filter: true,
        filterType: 'date',
      },
      {
        title: 'Tp',
        key: 'tp',
        sort: true,
        hide: false,
        disable: false,
        isChart: false,
        columnGroup: 'all',
        filter: true,
        filterType: 'number'
      },
      {
        title: 'Lelaki Biasa',
        key: 'l_biasa',
        excelType: 'number',
        sort: true,
        hide: false,
        disable: false,
        isChart: true,
        isChartSelect: false,
        columnGroup: 'anggota',
        filter: true,
        filterType: 'number'
      },
      {
        title: 'Lelaki L.Biasa',
        key: 'l_lbiasa',
        excelType: 'number',
        sort: true,
        hide: false,
        disable: false,
        isChart: true,
        isChartSelect: false,
        columnGroup: 'anggota',
        filter: true,
        filterType: 'number'
      },
      {
        title: 'Perempuan Biasa',
        key: 'p_biasa',
        excelType: 'number',
        sort: true,
        hide: false,
        disable: false,
        isChart: true,
        isChartSelect: false,
        columnGroup: 'anggota',
        filter: true,
        filterType: 'number'
      },
      {
        title: 'Perempuan L.Biasa',
        key: 'p_lbiasa',
        excelType: 'number',
        sort: true,
        hide: false,
        disable: false,
        isChart: true,
        isChartSelect: false,
        columnGroup: 'anggota',
        filter: true,
        filterType: 'number'
      },
      {
        title: 'Total Anggota',
        key: 'total_anggota',
        excelType: 'number',
        sort: true,
        hide: false,
        disable: false,
        isChart: true,
        isChartSelect: true,
        columnGroup: 'anggota'
      },
      {
        title: 'Total Anggota Lalu',
        key: 'total_anggota_lalu',
        excelType: 'number',
        sort: true,
        hide: false,
        disable: false,
        isChart: true,
        isChartSelect: false,
        columnGroup: 'anggota',
        filter: true,
        filterType: 'number'
      },
      {
        title: 'Aset',
        key: 'aset',
        excelType: 'number',
        sort: true,
        hide: false,
        disable: false,
        isChart: true,
        isChartSelect: false,
        columnGroup: 'aset',
        filter: true,
        filterType: 'number'
      },
      {
        title: 'Aset Lalu',
        key: 'aset_lalu',
        excelType: 'number',
        sort: true,
        hide: false,
        disable: false,
        isChart: true,
        isChartSelect: false,
        columnGroup: 'aset',
        filter: true,
        filterType: 'number'
      },
      {
        title: 'Aset Masalah',
        key: 'aset_masalah',
        excelType: 'number',
        sort: true,
        hide: false,
        disable: false,
        isChart: true,
        isChartSelect: false,
        columnGroup: 'aset',
        filter: true,
        filterType: 'number'
      },
      {
        title: 'Aset Tdk Menghasilkan',
        key: 'aset_tidak_menghasilkan',
        excelType: 'number',
        sort: true,
        hide: false,
        disable: false,
        isChart: true,
        isChartSelect: false,
        columnGroup: 'aset',
        filter: true,
        filterType: 'number'
      },
      {
        title: 'Aktiva Lancar',
        key: 'aktiva_lancar',
        excelType: 'number',
        sort: true,
        hide: false,
        disable: false,
        isChart: true,
        isChartSelect: false,
        filter: true,
        filterType: 'number'
      },
      {
        title: 'Simp. Saham',
        key: 'simpanan_saham',
        excelType: 'number',
        sort: true,
        hide: false,
        disable: false,
        isChart: true,
        isChartSelect: false,
        filter: true,
        filterType: 'number'
      },
      {
        title: 'Simp. Saham Lalu',
        key: 'simpanan_saham_lalu',
        excelType: 'number',
        sort: true,
        hide: false,
        disable: false,
        isChart: true,
        isChartSelect: false,
        filter: true,
        filterType: 'number'
      },
      {
        title: 'Simp. Saham Des',
        key: 'simpanan_saham_des',
        excelType: 'number',
        sort: true,
        hide: false,
        disable: false,
        isChart: true,
        isChartSelect: false,
        filter: true,
        filterType: 'number'
      },
      {
        title: 'Simp. Nonsaham Unggulan',
        key: 'nonsaham_unggulan',
        excelType: 'number',
        sort: true,
        hide: false,
        disable: false,
        isChart: true,
        isChartSelect: false,
        filter: true,
        filterType: 'number'
      },
      {
        title: 'Simp. Nonsaham Harian',
        key: 'nonsaham_harian',
        excelType: 'number',
        sort: true,
        hide: false,
        disable: false,
        isChart: true,
        isChartSelect: false,
        filter: true,
        filterType: 'number'
      },
      {
        title: 'Hutang SPD',
        key: 'hutang_spd',
        excelType: 'number',
        sort: true,
        hide: false,
        disable: false,
        isChart: true,
        isChartSelect: false,
        filter: true,
        filterType: 'number'
      },
      {
        title: 'Hutang Tdk Berbiaya',
        key: 'hutang_tidak_berbiaya_30hari',
        excelType: 'number',
        sort: true,
        hide: false,
        disable: false,
        isChart: true,
        isChartSelect: false,
        filter: true,
        filterType: 'number'
      },
      {
        title: 'Total Hutang Pihak Ke-3',
        key: 'total_hutang_pihak3',
        excelType: 'number',
        sort: true,
        hide: false,
        disable: false,
        isChart: true,
        isChartSelect: false,
        filter: true,
        filterType: 'number'
      },
      {
        title: 'Piutang Beredar',
        key: 'piutang_beredar',
        excelType: 'number',
        sort: true,
        hide: false,
        disable: false,
        isChart: true,
        isChartSelect: false,
        columnGroup: 'piutang',
        filter: true,
        filterType: 'number'
      },
      {
        title: 'Piutang Bersih',
        key: 'piutang_bersih',
        excelType: 'number',
        sort: true,
        hide: false,
        disable: false,
        isChart: true,
        isChartSelect: false,
        columnGroup: 'piutang'
      },
      {
        title: 'Piutang Anggota',
        key: 'piutang_anggota',
        excelType: 'number',
        sort: true,
        hide: false,
        disable: false,
        isChart: true,
        isChartSelect: false,
        columnGroup: 'piutang',
        filter: true,
        filterType: 'number'
      },
      {
        title: 'Piutang Lalai 1-12 Bulan',
        key: 'piutang_lalai_1bulan',
        excelType: 'number',
        sort: true,
        hide: false,
        disable: false,
        isChart: true,
        isChartSelect: false,
        columnGroup: 'piutang',
        filter: true,
        filterType: 'number'
      },
      {
        title: 'Piutang Lalai > 12 Bulan',
        key: 'piutang_lalai_12bulan',
        excelType: 'number',
        sort: true,
        hide: false,
        disable: false,
        isChart: true,
        isChartSelect: false,
        columnGroup: 'piutang',
        filter: true,
        filterType: 'number'
      },
      {
        title: 'Rasio Piutang Beredar',
        key: 'rasio_beredar',
        excelType: 'number',
        sort: true,
        hide: false,
        disable: false,
        isChart: true,
        isChartSelect: false,
        columnGroup: 'piutang'
      },
      {
        title: 'Rasio Piutang Lalai',
        key: 'rasio_lalai',
        excelType: 'number',
        sort: true,
        hide: false,
        disable: false,
        isChart: true,
        isChartSelect: false,
        columnGroup: 'piutang'
      },
      {
        title: 'DCR',
        key: 'dcr',
        excelType: 'number',
        sort: true,
        hide: false,
        disable: false,
        isChart: true,
        isChartSelect: false,
        filter: true,
        filterType: 'number'
      },
      {
        title: 'DCU',
        key: 'dcu',
        excelType: 'number',
        sort: true,
        hide: false,
        disable: false,
        isChart: true,
        isChartSelect: false,
        filter: true,
        filterType: 'number'
      },
      {
        title: 'Iuran Gedung',
        key: 'iuran_gedung',
        excelType: 'number',
        sort: true,
        hide: false,
        disable: false,
        isChart: true,
        isChartSelect: false,
        filter: true,
        filterType: 'number'
      },
      {
        title: 'Donasi',
        key: 'donasi',
        excelType: 'number',
        sort: true,
        hide: false,
        disable: false,
        isChart: true,
        isChartSelect: false,
        filter: true,
        filterType: 'number'
      },
      {
        title: 'BJS Saham',
        key: 'bjs_saham',
        excelType: 'number',
        sort: true,
        hide: false,
        disable: false,
        isChart: true,
        isChartSelect: false,
        filter: true,
        filterType: 'number'
      },
      {
        title: 'Beban Penyisihan DCR',
        key: 'beban_penyisihan_dcr',
        excelType: 'number',
        sort: true,
        hide: false,
        disable: false,
        isChart: true,
        isChartSelect: false,
        filter: true,
        filterType: 'number'
      },
      {
        title: 'Investasi Likuid',
        key: 'investasi_likuid',
        excelType: 'number',
        sort: true,
        hide: false,
        disable: false,
        isChart: true,
        isChartSelect: false,
        filter: true,
        filterType: 'number'
      },
      {
        title: 'Total Pendapatan',
        key: 'total_pendapatan',
        excelType: 'number',
        sort: true,
        hide: false,
        disable: false,
        isChart: true,
        isChartSelect: false,
        columnGroup: 'shu',
        filter: true,
        filterType: 'number'
      },
      {
        title: 'Total Biaya',
        key: 'total_biaya',
        excelType: 'number',
        sort: true,
        hide: false,
        disable: false,
        isChart: true,
        isChartSelect: false,
        columnGroup: 'shu',
        filter: true,
        filterType: 'number'
      },
      {
        title: 'SHU',
        key: 'shu',
        excelType: 'number',
        sort: true,
        hide: false,
        disable: false,
        isChart: true,
        isChartSelect: false,
        columnGroup: 'shu',
        filter: true,
        filterType: 'number'
      },
      {
        title: 'SHU Lalu',
        key: 'shu_lalu',
        excelType: 'number',
        sort: true,
        hide: false,
        disable: false,
        isChart: true,
        isChartSelect: false,
        columnGroup: 'shu',
        filter: true,
        filterType: 'number'
      },
      {
        title: 'Rata-rata Aset',
        key: 'rata_aset',
        excelType: 'number',
        sort: true,
        hide: false,
        disable: false,
        isChart: true,
        isChartSelect: false,
        columnGroup: 'aset',
        filter: true,
        filterType: 'number'
      },
      {
        title: 'Laju Inflasi',
        key: 'laju_inflasi',
        excelType: 'number',
        sort: true,
        hide: false,
        disable: false,
        isChart: true,
        isChartSelect: false,
        filter: true,
        filterType: 'number'
      },
      {
        title: 'Harga Pasar',
        key: 'harga_pasar',
        excelType: 'number',
        sort: true,
        hide: false,
        disable: false,
        isChart: true,
        isChartSelect: false,
        filter: true,
        filterType: 'number'
      },
      {
        title: 'Tgl. Buat',
        key: 'created_at',
        sort: true,
        hide: false,
        disable: false,
        isChart: false,
        columnGroup: 'all',
        filter: true,
        filterType: 'datetime'
      },
      {
        title: 'Tgl. Ubah',
        key: 'updated_at',
        sort: true,
        hide: false,
        disable: false,
        isChart: false,
        columnGroup: 'all',
        filter: true,
        filterType: 'datetime'
      }
    ],
    columnDataPearls: [
      {
        title: 'No.',
        key: 'No.',
        excelType: 'string',
        sort: false,
        hide: false,
        disable: false,
        isChart: false
      },
      {
        title: 'CU',
        key: 'cu_name',
        excelType: 'string',
        sort: true,
        hide: false,
        disable: false,
        isChart: false,
        filter: true,
        filterType: 'string',
        filterKey: 'cu.name'
      },
      {
        title: 'TP',
        key: 'tp_name',
        excelType: 'string',
        sort: true,
        hide: false,
        disable: false,
        isChart: false,
        filter: true,
        filterType: 'string',
        filterKey: 'tp.name'
      },
      {
        title: 'No. BA',
        key: 'laporan_cu.no_ba',
        excelType: 'string',
        sort: true,
        hide: false,
        disable: false,
        isChart: false,
        filter: true,
        filterType: 'number'
      },
      {
        title: 'Provinsi',
        key: 'provinces_name',
        groupKey: 'provinces_name',
        groupNoKey: '-',
        sort: true,
        hide: false,
        disable: false,
        isChart: false
      },
      {
        title: 'Periode',
        key: 'periode',
        groupKey: 'periode',
        groupNoKey: '-',
        sort: true,
        hide: false,
        disable: false,
        isChart: false,
        filter: true,
        filterType: 'date'
      },
      {
        title: 'Tp',
        key: 'tp',
        sort: true,
        hide: false,
        disable: false,
        isChart: false,
        columnGroup: 'all',
        filter: true,
        filterType: 'number'
      },
      {
        title: 'P1 (= 100%)',
        key: 'p1',
        excelType: 'number',
        sort: true,
        hide: false,
        disable: false,
        isChart: true,
        isChartSelect: false,
      },
      {
        title: 'P2 (&gt; 100%)',
        key: 'p2',
        excelType: 'number',
        sort: true,
        hide: false,
        disable: false,
        isChart: true,
        isChartSelect: false,
      },
      {
        title: 'E1 (70% - 80%)',
        key: 'e1',
        excelType: 'number',
        sort: true,
        hide: false,
        disable: false,
        isChart: true,
        isChartSelect: false,
      },
      {
        title: 'E5 (70% - 80%)',
        key: 'e5',
        excelType: 'number',
        sort: true,
        hide: false,
        disable: false,
        isChart: true,
        isChartSelect: false,
      },
      {
        title: 'E6 (&le; 5%)',
        key: 'e6',
        excelType: 'number',
        sort: true,
        hide: false,
        disable: false,
        isChart: true,
        isChartSelect: true,
      },
      {
        title: 'E9 (&ge; 10%)',
        key: 'e9',
        excelType: 'number',
        sort: true,
        hide: false,
        disable: false,
        isChart: true,
        isChartSelect: false,
      },
      {
        title: 'A1 (&le; 5%)',
        key: 'a1',
        excelType: 'number',
        sort: true,
        hide: false,
        disable: false,
        isChart: true,
        isChartSelect: false,
      },
      {
        title: 'A2 (&lt; 5%)',
        key: 'a2',
        excelType: 'number',
        sort: true,
        hide: false,
        disable: false,
        isChart: true,
        isChartSelect: false,
      },
      {
        title: 'R7 (= harga pasar)',
        key: 'r7',
        excelType: 'number',
        sort: true,
        hide: false,
        disable: false,
        isChart: true,
        isChartSelect: false,
      },
      {
        title: 'L1 (15% - 20%)',
        key: 'l1',
        excelType: 'number',
        sort: true,
        hide: false,
        disable: false,
        isChart: true,
        isChartSelect: false,
      },
      {
        title: 'S10 (&gt; 12%)',
        key: 's10',
        excelType: 'number',
        sort: true,
        hide: false,
        disable: false,
        isChart: true,
        isChartSelect: false,
      },
      {
        title: 'S11 (&gt; 10% + Laju Inflasi)',
        key: 's11',
        excelType: 'number',
        sort: true,
        hide: false,
        disable: false,
        isChart: true,
        isChartSelect: false,
      },
      {
        title: 'Harga Pasar',
        key: 'harga_pasar',
        excelType: 'number',
        sort: true,
        hide: false,
        disable: false,
        isChart: true,
        isChartSelect: false,
      },
      {
        title: 'Laju Inflasi',
        key: 'laju_inflasi',
        excelType: 'number',
        sort: true,
        hide: false,
        disable: false,
        isChart: true,
        isChartSelect: false,
      },
      {
        title: 'Tgl. Buat',
        key: 'created_at',
        sort: true,
        hide: false,
        disable: false,
        isChart: false,
        filter: true,
        filterType: 'datetime'
      },
      {
        title: 'Tgl. Ubah',
        key: 'updated_at',
        sort: true,
        hide: false,
        disable: false,
        isChart: false,
        filter: true,
        filterType: 'datetime'
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
    // edit page
    detail( {commit}, id ){
      commit('setDataStat', 'loading');
      
      laporanCuAPI.detail( id )
        .then( function( response ){
          commit('setData', response.data.model);
          commit('setDataStat', 'success');
        })
        .catch(error => {
          commit('setData', error.response);
          commit('setDataStat', 'fail');
        });
    },
    //edit tp
    detailTp( {commit}, id ){
      commit('setDataStat', 'loading');
      
      laporanTpAPI.detail( id )
        .then( function( response ){
          commit('setData', response.data.model);
          commit('setDataStat', 'success');
        })
        .catch(error => {
          commit('setData', error.response);
          commit('setDataStat', 'fail');
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

    // destroy data
    destroy( {commit, state, dispatch}, id ){
      commit('setUpdateStat', 'loading');

      laporanCuAPI.destroy( id )
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
    destroyTp( {commit, state, dispatch}, id ){
      commit('setUpdateStat', 'loading');

      laporanTpAPI.destroy( id )
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