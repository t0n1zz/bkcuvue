<template>
  <div>
    <!-- header -->
		<page-header :title="title" :titleDesc="titleDesc" :titleIcon="titleIcon" :level="2" :level2Title="level2Title"
		:level2Route="kelas" @level2Back="back()"></page-header>

    <div class="page-content pt-0">
			<div class="content-wrapper">
				<div class="content">

          <!-- cari data -->
          <div class="card card-body">	
        
            <!-- punya NIK -->
            <div class="row">
              <div class="col-12">
                <h6>
                  Silahkan masukkan No. KTP / Nomor Induk Kependudukan (NIK)*
                  <br/>
                  <span class="badge bg-danger-400 align-self-center ml-auto">*pastikan nomor yang dimasukan adalah nomor yang valid!</span> 
                </h6>
              </div>
              <div class="col-12">
                <!-- text -->
                <cleave 
                  name="nik"
                  v-model="nik" 
                  class="form-control" 
                  :options="cleaveOption.number16"
                  placeholder="Silahkan masukkan no. KTP / Nomor Induk Kependudukan (NIK)" :disabled="isNew"></cleave>
        
                <small class="text-muted text-danger" v-if="isDigit">
                  Maaf, No. KTP anda tidak valid, wajib 16 digit.
                </small>  
              </div>
            </div>  
        
            <div class="row pt-2">
              <div class="col-md-7 col-lg-9 pb-2 d-none d-sm-block">
                 <button class="btn btn-primary" @click.prevent="cariData"  :disabled="nik == ''"><i class="icon-search4"></i> Cari</button>
                <button class="btn btn-warning" @click.prevent="resetData" v-if="itemDataStat != ''"><i class="icon-reset"></i> Reset pencarian</button>
              </div>
        
              <div class="col-md-12 d-block d-sm-none">
                 <button class="btn btn-primary btn-block mb-1" @click.prevent="cariData"  :disabled="nik == ''"><i class="icon-search4"></i> Cari</button>
        
                 <button class="btn btn-warning btn-block mb-1" @click.prevent="resetData" v-if="itemDataStat != ''"><i class="icon-reset"></i> Reset pencarian</button>
              </div>  
        
            </div>
        
            <!-- loading -->
            <div class="row" v-if="itemDataStat == 'loading'">
              <div class="col-12" >
                <hr/>
                <div class="progress">
                  <div class="progress-bar progress-bar-info progress-bar-striped progress-bar-animated" style="width: 100%">
                    <span class="sr-only">100% Complete</span>
                  </div>
                </div>
              </div>
            </div>

            
          </div>
          
          <!-- data exist -->
          <div v-if="itemDataStat == 'success'">

            <!-- identitas -->
            <div class="card">
              <div class="card-header bg-white">
                <h5 class="card-title">Identitas</h5>
              </div>
              <div class="card-body">
                <div class="media flex-column flex-sm-row mt-0 mb-3">
                  <div class="mr-sm-3 mb-2 mb-sm-0">
                    <div class="card-img-actions">
                        <img :src="'/images/anggotaCu/' + itemData.gambar + '.jpg'" class="img-fluid img-preview rounded" v-if="itemData.gambar" >
                        <img :src="'/images/no_image.jpg'" class="img-fluid img-preview rounded" v-else>
                    </div>
                  </div>

                  <div class="media-body">
                    <div class="row">
                      <div class="col-sm-6">
                        <ul class="list list-unstyled mb-0">
                          <li><b>No. KTP:</b> {{itemData.nik}}</li>
                          <li><b>Nama:</b> {{itemData.name}}</li>
                          <li><b>Gender:</b> {{itemData.kelamin}}</li>
                          <li><b>Agama:</b> {{itemData.agama}}</li>
                          <li v-if="itemData.tanggal_meninggal == null"><b>Usia:</b> <span v-if="itemData.tanggal_lahir" v-html="$options.filters.age(itemData.tanggal_lahir)"></span></li>
                          <li v-else><b>Usia Saat Meninggal:</b> <span v-if="itemData.tanggal_lahir" v-html="$options.filters.ageDiff(itemData.tanggal_meninggal, itemData.tanggal_lahir)"></span></li>
                          <li><b>Status:</b> {{ itemData.status}}</li>
                        </ul>
                      </div>
                      <div class="col-sm-6">
                        <ul class="list list-unstyled mb-0">
                          <li><b>Provinsi:</b> {{ itemData.provinces ? itemData.provinces.name : ''}}</li>
                          <li><b>Kabupaten:</b> {{ itemData.regencies ? itemData.regencies.name : ''}}</li>
                          <li><b>Kecamatan:</b> {{ itemData.districts ? itemData.districts.name : ''}}</li>
                          <li><b>Kelurahan:</b> {{ itemData.villages ? itemData.villages.name : ''}}</li>
                          <li><b>Alamat:</b> {{ itemData.alamat}}</li>
                        </ul>
                      </div>
                    </div>
                    
                  </div>
                </div>
              </div>
            </div>

            <!-- keanggotaan cu -->
            <div class="card">
              <div class="card-header bg-white">
                <h5 class="card-title">CU</h5>
              </div>

              <data-table :items="itemDataCu" :columnData="columnDataCu" :itemDataStat="itemDataCuStat">
                <template slot="item-desktop" slot-scope="props">
                  <tr class="text-nowrap">
                    <td>{{ props.index + 1 }}</td>
                    <td>
                      <span v-if="props.item.escete == 1"><span class="badge bg-blue-400 align-self-center ml-auto" v-tooltip="'Data anggota berasal dari data ESCETE'">Terintegrasi</span></span>
                      <span v-else>
                        <span class="badge bg-brown-400 align-self-center ml-auto" v-tooltip="'Data anggota berasal dari input manual di simo'">Manual</span>
                      </span>
                    </td>
                    <td>
                      <check-value :value="props.item.cu.name" v-if="props.item.cu"></check-value>
                      <span v-else>-</span>
                    </td>
                    <td>
                      <check-value :value="props.item.tp.name" v-if="props.item.tp"></check-value>
                      <span v-else>-</span>
                    </td>
                    <td><check-value :value="props.item.no_ba"></check-value></td>
                    <td><check-value :value="props.item.keterangan_masuk"></check-value></td>
                    <td v-html="$options.filters.date(props.item.tanggal_masuk)" class="text-nowrap"></td>
                    <td><check-value :value="props.item.keterangan_keluar"></check-value></td>
                    <td class="text-nowrap">
                      <span v-if="props.item.tanggal_keluar" v-html="$options.filters.dateTime(props.item.tanggal_keluar)"></span>
						          <span v-else>-</span>
                    </td>
                  </tr>
                </template>	
              </data-table>
            </div>

            <!-- produk cu -->
            <div class="card">
              <div class="card-header bg-white">
                <h5 class="card-title">Produk</h5>
              </div>

              <data-table :items="itemDataProduk" :columnData="columnDataProduk" :itemDataStat="itemDataProdukStat">
                <template slot="item-desktop" slot-scope="props">
                  <tr class="text-nowrap">
                    <td>{{ props.index + 1 }}</td>
                    <td>
                      <check-value :value="props.item.cu.name" v-if="props.item.cu"></check-value>
                      <span v-else>-</span>
                    </td>
                    <td><check-value :value="props.item.name"></check-value></td>
                    <td><check-value :value="props.item.tipe"></check-value></td>
                    <td><check-value :value="props.item.pivot.dpd"></check-value></td>
                    <td><check-value :value="props.item.pivot.kolekbi"></check-value></td>
                    <td class="text-nowrap">
                      <span v-if="props.item.pivot.tanggal" v-html="$options.filters.date(props.item.pivot.tanggal)"></span>
						          <span v-else>-</span>
                    </td>
                  </tr>
                </template>	
              </data-table>
            </div>

          </div>

          <div v-else-if="itemDataStat == 'fail'">
            <div class="alert bg-danger text-white alert-styled-left ">
              <span class="font-weight-semibold" >Data tidak ditemukan</span>
            </div>
          </div>

        </div>
      </div>
    </div>

  </div>
</template>

<script type="text/javascript">
  import {mapGetters} from 'vuex';
	import pageHeader from "../../components/pageHeader.vue";
  import identitas from "../../components/identitas.vue";
  import dataTable from '../../components/datatable.vue';
  import checkValue from "../../components/checkValue.vue";
  import Cleave from 'vue-cleave-component';

  export default {
    components: {
      pageHeader,
      identitas,
      dataTable,
      checkValue,
			Cleave,
		},
    data(){
      return {
        title: 'Informasi Anggota CU',
				titleDesc: 'Mencari informasi anggota CU',
				titleIcon: 'icon-folder-search',
				kelas: 'anggotaCu',
				level2Title: 'Anggota CU',
        statusNIK: '',
        nik: '',
        isNew: false,
        isDigit: false,
        cleaveOption: {
					number16: {
            numeral: true,
            numeralIntegerScale: 16,
            numeralDecimalScale: 0,
						stripLeadingZeroes: false,
						delimiter: ''
          }
        },
				itemDataCu: [],
				itemDataCuStat: 'success',
				columnDataCu:[
					{ title: 'No.' },
					{ title: 'Jenis' },
					{ title: 'CU' },
					{ title: 'TP/KP' },
					{ title: 'No. BA' },
					{ title: 'Keterangan' },
					{ title: 'Tgl. Jadi Anggota' },
					{ title: 'Keterangan Keluar' },
					{ title: 'Tgl. Keluar Anggota' },
				],
        itemDataProduk: [],
				itemDataProdukStat: 'success',
				columnDataProduk:[
					{ title: 'No.' },
					{ title: 'CU' },
					{ title: 'Nama' },
					{ title: 'Tipe' },
					{ title: 'DPD' },
					{ title: 'Kolektibilitas' },
					{ title: 'Tgl. Buat' },
				],
      }
    },
    created(){
      this.checkUser('informasi_anggota_cu',this.$route.params.cu);
      this.resetData();
		},
    watch: {
      itemDataStat(value){
				if(value == 'success'){
					this.fetchCu();
				}
			},
    },
    methods: {
      cariData(){
        if(this.nik.length < 16){
          this.isDigit = true;
        }else{
          this.isNew = true;
          this.isDigit = false;
          this.$store.dispatch(this.kelas + '/cariDataInformasi', this.nik);
        }
      },
      fetchCu(){
        this.itemDataCu = [];
        this.itemDataProduk = [];
        var valData;
        var valDataProduk;

        if(this.itemData.anggota_cu_cu_informasi){
          for(valData of this.itemData.anggota_cu_cu_informasi){
            this.itemDataCu.push(valData);
          }
        }

        if(this.itemData.anggota_produk_cu_informasi){
          for(valDataProduk of this.itemData.anggota_produk_cu_informasi){
            this.itemDataProduk.push(valDataProduk);
          }
        }
			},
      resetData(){
        this.nik = '';
        this.isNew = false;
        this.$store.commit(this.kelas + '/setData',{});
				this.$store.commit(this.kelas + '/setDataStat','');
      },
      checkUser(permission,id_cu){
				if(this.currentUser){
					if(!this.currentUser.can || !this.currentUser.can[permission]){
						this.$router.push('/notFound');
					}
					if(!id_cu || this.currentUser.id_cu){
						if(this.currentUser.id_cu != 0 && this.currentUser.id_cu != id_cu){
							this.$router.push('/notFound');
						}
					}
				}
			}
    },
    computed: {
			...mapGetters('auth', {
				currentUser: 'currentUser'
			}),
			...mapGetters('anggotaCu', {
				itemData: 'data',
				itemDataStat: 'dataStat'
			}),
		}
  }
</script>