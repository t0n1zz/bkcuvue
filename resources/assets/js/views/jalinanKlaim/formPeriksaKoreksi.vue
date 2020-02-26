<template>
	<div>

    <form @submit.prevent="save" data-vv-scope="formKoreksi">
    <!-- message -->
    <message v-if="errors.any('formKoreksi') && submited" :title="'Oops, terjadi kesalahan'" :errorItem="errors.items">
    </message>

    <div class="row">

      <!-- identitas -->
      <div class="col-md-6">
        <div class="card">
          <div class="card-header bg-white">
            <h5 class="card-title">Identitas Anggota CU</h5>
          </div>
          <div class="card-body">
            <identitas :itemData="selectedData.anggota_cu"></identitas>
          </div>
        </div>
      </div>

      <!-- data produk -->
      <div class="col-md-6">
        <div class="card">
          <div class="card-header bg-white">
            <h5 class="card-title">Daftar Produk</h5>
          </div>
          <data-table :items="itemData" :columnData="columnData" :itemDataStat="itemDataStat">
            <template slot="item-desktop" slot-scope="props">
              <tr :class="{ 'bg-info': selectedItem.id === props.item.id }" class="text-nowrap" @click="selectedRow(props.item)" v-if="props.item">
                <td>{{ props.index + 1 }}</td>
                <td>
                  <check-value :value="props.item.no_rek"></check-value>
                </td>
                <td>
                  <check-value :value="props.item.produk_cu.name" v-if="props.item.produk_cu"></check-value>
                  <span v-else>-</span>
                </td>
                <td>
                  <check-value :value="props.item.produk_cu.tipe" v-if="props.item.produk_cu"></check-value>
                  <span v-else>-</span>
                </td>
                <td>
                  <check-value :value="props.item.saldo" valueType="currency"></check-value>
                </td>
                <td>
                  <check-value :value="props.item.lama_pinjaman"></check-value>
                </td>
                <td>
                  <span v-if="props.item.tanggal" v-html="$options.filters.date(props.item.tanggal)"></span>
                  <span v-else>-</span>
                </td>
                <td>
                  <span v-if="props.item.tanggal" v-html="$options.filters.ageDiff(props.item.tanggal,selectedData.anggota_cu.tanggal_lahir)">
                  </span>
                  <span v-else>-</span>
                </td>
              </tr>
            </template>	
          </data-table>
        </div>
      </div>

      <!-- klaim sebelumnya -->
      <div class="col-md-6" >
        <div class="card">
          <div class="card-header bg-white header-elements-inline">
            <h5 class="card-title">Klaim JALINAN</h5>
            <div class="header-elements">
              <span class="badge badge-info">DATA SEBELUMNYA</span>
            </div>
          </div>
          <div class="card-body">
            <div class="row" v-if="itemDataJalinanStat == 'success'">
              <div class="col-sm-6">
                <ul class="list list-unstyled mb-0">
                  <li>
                    <b>Jenis klaim:</b> <br/>
                    <label class="badge badge-warning ml-1 font-size-lg">
                      <check-value :value="itemDataJalinan.tipe"></check-value>
                    </label>
                  </li>
                  <li>
                    <b>Kategori penyakit/penyebab:</b> <br/>
                    <check-value :value="itemDataJalinan.kategori_penyakit"></check-value>
                  </li>
                  <li>
                    <b>Keterangan cacat/meninggal:</b> <br/>
                    <check-value :value="itemDataJalinan.keterangan"></check-value> 
                  </li>
                </ul>
              </div>
              <div class="col-sm-6">
                <ul class="list list-unstyled mb-0">
                  <li>
                    <b>Tanggal cacat/meninggal:</b> <br/>
                    <span v-html="$options.filters.date(itemDataJalinan.tanggal_mati)"></span>
                  </li>
                  <li>
                    <b>Tanggal buat/pengajuan:</b> <br/>
                    <span v-html="$options.filters.dateTime(itemDataJalinan.created_at)"></span>
                  </li>
                  <li>
                    <b>Tanggal ubah :</b> <br/>
                    <span v-html="$options.filters.dateTime(itemDataJalinan.updated_at)"></span>
                  </li>
                </ul>
              </div>

              <div class="col-sm-12">
                <hr/>
              </div>
              <!-- tunas -->
              <div class="col-sm-6" v-if="itemDataJalinan.tipe != 'cacat'">
                <div class="card card-body mb-1">
                  <div class="media">
                    <div class="media-body">
                      <h3 class="mb-0" ><check-value :value="itemDataJalinan.tunas_diajukan" valueType="currency"></check-value></h3>
                      <span class="text-uppercase">
                        nilai pengajuan klaim tunas
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <!-- lintang -->
              <div class="col-sm-6">
                <div class="card card-body mb-1">
                  <div class="media">
                    <div class="media-body">
                      <h3 class="mb-0" ><check-value :value="itemDataJalinan.lintang_diajukan" valueType="currency"></check-value></h3>
                      <span class="text-uppercase">
                        nilai pengajuan klaim lintang
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="progress" v-else-if="itemDataJalinanStat == 'loading'">
               <div
                class="progress-bar progress-bar-info progress-bar-striped progress-bar-animated"
                style="width: 100%"
              >
                <span class="sr-only">100% Complete</span>
              </div>
            </div>
            <div v-else>
              <p>Oops.. Terjadi kesalahan, silahkan coba lagi.</p>
            </div>
          </div>
        </div>
      </div>

      <!-- klaim koreksi -->
      <div class="col-md-6">
        <div class="card">
          <div class="card-header bg-white header-elements-inline">
            <h5 class="card-title">Klaim JALINAN</h5>
            <div class="header-elements">
              <span class="badge badge-danger">DATA KOREKSI</span>
            </div>
          </div>
          <div class="card-body">
            <div class="row">
              <div class="col-sm-6">
                <ul class="list list-unstyled mb-0">
                  <li>
                    <b>Jenis klaim:</b> <br/>
                    <label class="badge badge-warning ml-1 font-size-lg">
                      <check-value :value="selectedData.tipe"></check-value>
                    </label>
                  </li>
                  <li>
                    <b>Kategori penyakit/penyebab:</b> <br/>
                    <check-value :value="selectedData.kategori_penyakit"></check-value>
                  </li>
                  <li>
                    <b>Keterangan cacat/meninggal:</b> <br/>
                    <check-value :value="selectedData.keterangan"></check-value> 
                  </li>
                </ul>
              </div>
              <div class="col-sm-6">
                <ul class="list list-unstyled mb-0">
                  <li>
                    <b>Tanggal cacat/meninggal:</b> <br/>
                    <span v-html="$options.filters.date(selectedData.tanggal_mati)"></span>
                  </li>
                  <li>
                    <b>Tanggal buat/pengajuan:</b> <br/>
                    <span v-html="$options.filters.dateTime(selectedData.created_at)"></span>
                  </li>
                  <li>
                    <b>Tanggal ubah:</b> <br/>
                    <span v-html="$options.filters.dateTime(selectedData.updated_at)"></span>
                  </li>
                </ul>
              </div>

              <div class="col-sm-12">
                <hr/>
              </div>
              <!-- tunas -->
              <div class="col-sm-6" v-if="selectedData.tipe != 'cacat'">
                <div class="card card-body mb-1">
                  <div class="media">
                    <div class="media-body">
                      <h3 class="mb-0" ><check-value :value="selectedData.tunas_diajukan" valueType="currency"></check-value></h3>
                      <span class="text-uppercase">
                        nilai pengajuan klaim tunas
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <!-- lintang -->
              <div class="col-sm-6">
                <div class="card card-body mb-1">
                  <div class="media">
                    <div class="media-body">
                      <h3 class="mb-0" ><check-value :value="selectedData.lintang_diajukan" valueType="currency"></check-value></h3>
                      <span class="text-uppercase">
                        nilai pengajuan klaim lintang
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-md-12">
        <hr/>

        <h5>Data yang dikoreksi:</h5>

        <div class="card card-body" v-if="itemDataJalinan.tipe != selectedData.tipe">
          <span>
            Jenis klaim dari <mark><check-value :value="itemDataJalinan.tipe"></check-value></mark> menjadi <mark><check-value :value="selectedData.tipe"></check-value></mark>
          </span>
        </div>

        <div class="card card-body" v-if="itemDataJalinan.kategori_penyakit != selectedData.kategori_penyakit">
          <span>
            Kategori penyakit/penyebab dari <mark><check-value :value="itemDataJalinan.kategori_penyakit"></check-value></mark> menjadi <mark><check-value :value="selectedData.kategori_penyakit"></check-value></mark>
          </span>
        </div>

        <div class="card card-body" v-if="itemDataJalinan.keterangan != selectedData.keterangan">
          <span>
            Keterangan cacat/meninggal dari <mark><check-value :value="itemDataJalinan.keterangan"></check-value></mark> menjadi <mark><check-value :value="selectedData.keterangan"></check-value></mark>
          </span>
        </div>

        <div class="card card-body" v-if="itemDataJalinan.tanggal_mati != selectedData.tanggal_mati">
          <span>
            Tanggal cacat/meninggal dari <mark v-html="$options.filters.date(itemDataJalinan.tanggal_mati)"></mark> menjadi <mark v-html="$options.filters.date(selectedData.tanggal_mati)"></mark>
          </span>
        </div>

        <div class="card card-body" v-if="itemDataJalinan.tunas_diajukan != selectedData.tunas_diajukan">
          <span>
            Nilai pengajuan klaim tunas dari <mark><check-value :value="itemDataJalinan.tunas_diajukan" valueType="currency"></check-value></mark> menjadi <mark><check-value :value="selectedData.tunas_diajukan" valueType="currency"></check-value></mark>
          </span>
        </div>

        <div class="card card-body" v-if="itemDataJalinan.lintang_diajukan != selectedData.lintang_diajukan">
          <span>
            Nilai pengajuan klaim lintang dari <mark><check-value :value="itemDataJalinan.lintang_diajukan" valueType="currency"></check-value></mark> menjadi <mark><check-value :value="selectedData.lintang_diajukan" valueType="currency"></check-value></mark>
          </span>
        </div>

      </div>

    </div>

    <!-- info -->
    <div class="alert bg-info alert-styled-left">
      <h6>Pastikan data yang dimasukkan sudah benar sebelum menyimpan.</h6>
    </div>

    <!-- tombol desktop-->
    <div class="text-center d-none d-md-block">
      <button class="btn btn-light" @click.prevent="tutup">
        <i class="icon-cross"></i> Tutup</button>

      <button type="submit" class="btn btn-primary">
        <span>
          <i class="icon-paint-format"></i> Koreksi
        </span>
      </button>
    </div>  

    <!-- tombol mobile-->
    <div class="d-block d-md-none">
      <button type="submit" class="btn btn-primary btn-block pb-2">
        <span>
          <i class="icon-paint-format"></i> Koreksi
        </span>
      </button>

      <button class="btn btn-light btn-block pb-2" @click.prevent="tutup">
        <i class="icon-cross"></i> Tutup</button>
    </div> 

    </form>

	</div>
</template>

<script>
  import { mapGetters } from 'vuex';
  import Cleave from 'vue-cleave-component';
	import message from "../../components/message.vue";
  import formInfo from "../../components/formInfo.vue";
  import identitas from "../../components/identitas.vue";
  import checkValue from "../../components/checkValue.vue";
  import dataTable from '../../components/datatable.vue';
  import infoIcon from "../../components/infoIcon.vue";
  import verifikator from "./verifikator.vue";
  import dokumen from "./dokumen.vue";

	export default {
		props: ['kelas','selected'],
		components: {
			formInfo,
      message,
      identitas,
      checkValue,
      Cleave, 
      dataTable,
      infoIcon,
      verifikator,
      dokumen
		},
		data() {
			return {
        title: '',
        tabName: 'pengajuan',
        tabNameDokumen: 'meninggal',
        isVerifikator: false,
        isDokumen: false,
        selectedData: {},
        formKoreksi: {
          cu_id: '',
					status: '',
          keterangan_klaim: '',
          tunas_diajukan: '',
          tunas_disetujui: '',
          lintang_diajukan: '',
          lintang_disetujui: '',
          tanggal_pencairan: '',
          surat_tanggal: '',
          surat_nomor: ''
        },
        cleaveOption: {
          numeric: {
            numeral: true,
            numeralThousandsGroupStyle: 'thousand',
            numeralDecimalScale: 2,
            numeralDecimalMark: ',',
            delimiter: '.'
          },
          date:{
            date: true,
            datePattern: ['Y','m','d'],
            delimiter: '-'
					},
        },
        selectedItem: {},
        columnData:[
					{ title: 'No.' },
					{ title: 'No. Rek' },
					{ title: 'Nama' },
					{ title: 'Jenis' },
					{ title: 'Saldo Awal' },
					{ title: 'Lama Pinjaman (Bulan)' },
					{ title: 'Tgl. Buat' },
					{ title: 'Usia Saat Membuka' },
				],
        penjelasanStatus: '',
				submited: false,
			}
		},
		created() {
      this.selectedData = Object.assign({}, this.selected);
			this.formKoreksi.status = this.selectedData.status_klaim;
			this.formKoreksi.keterangan_klaim = this.selectedData.keterangan_klaim;
			this.formKoreksi.tunas_disetujui = this.selectedData.tunas_disetujui;
      this.formKoreksi.lintang_disetujui = this.selectedData.lintang_disetujui;
      this.formKoreksi.tanggal_pencairan = this.selectedData.tanggal_pencairan;
      this.formKoreksi.surat_tanggal = this.selectedData.surat_tanggal;
      this.formKoreksi.surat_nomor = this.selectedData.surat_nomor;
      this.formKoreksi.cu_id = this.selectedData.anggota_cu_cu.cu_id;

      this.$store.dispatch('anggotaCu/indexProduk',[this.selectedData.anggota_cu_id, this.selectedData.anggota_cu_cu.cu_id]);
      this.$store.dispatch(this.kelas + '/getKlaim',this.selectedData.id_koreksi); 
		},
		watch: {
		},
		methods: {
      selectedRow(item) {
        this.selectedItem = item;
      },
      changeTab(value) {
				this.tabName = value;
				if (value == 'verifikator' && !this.isVerifikator) {
          this.isVerifikator = true
          this.fetchVerifikator();
				}
				if (value == 'dokumen' && !this.isDokumen) {
          this.isDokumen = true
        }
      },
      changeTabDokumen(value) {
				this.tabNameDokumen = value;
      },
      fetchVerifikator(){
        // get verifikator yang dipilih
        this.$store.dispatch('user/indexCuPermission',this.selectedData.anggota_cu_cu.cu_id);

        // get verifikator
        this.$store.dispatch('jalinanKlaim/getVerifikator',[
          this.selectedData.verifikasi_pengurus,this.selectedData.verifikasi_pengawas,this.selectedData.verifikasi_manajemen
        ]);
      },
      save(){
        this.formKoreksi.status = 1;
        this.formKoreksi.tunas_diajukan = this.selectedData.tunas_diajukan - this.itemDataJalinan.tunas_diajukan;
        this.formKoreksi.lintang_diajukan = this.selectedData.lintang_diajukan - this.itemDataJalinan.lintang_diajukan;

        this.$validator.validateAll('formKoreksi').then((result) => {
          if (result) {
            this.$store.dispatch(this.kelas + '/updateStatus', [this.selected.id, this.formKoreksi]);
          }else{
            this.submited = true;
          }
        });
      },
			tutup() {
				this.$emit('tutup');
			}
		},
		computed: {
			...mapGetters('auth', {
				currentUser: 'currentUser'
      }),
      ...mapGetters('anggotaCu',{
				itemData: 'dataProduk',
				itemDataStat: 'dataProdukStat',
      }),
      ...mapGetters('user', {
				modelVeriPilihPengurus: "dataS1",
				modelVeriPilihPengawas: "dataS2",
				modelVeriPilihManajemen: "dataS3",
        modelVeriPilihPengurusStat: "dataStatS1",
        modelVeriPilihPengawasStat: "dataStatS2",
        modelVeriPilihManajemenStat: "dataStatS3",
      }),
      ...mapGetters('jalinanKlaim', {
        itemDataJalinan: 'data',
				itemDataJalinanStat: 'dataStat',
				modelVeriPengurus: "dataVeri1",
				modelVeriPengawas: "dataVeri2",
				modelVeriManajemen: "dataVeri3",
        modelVeriStat: "dataStatVeri",
      }),
      selisihTunas: function () {
        // `this` points to the vm instance
        return this.formKoreksi.tunas_disetujui - this.selectedData.tunas_diajukan
      },
      selisihLintang: function () {
        // `this` points to the vm instance
        return this.formKoreksi.lintang_disetujui - this.selectedData.lintang_diajukan
      },
      usiaMasukCU: function () {
        // `this` points to the vm instance
        return this.formKoreksi.lintang_disetujui - this.selectedData.lintang_diajukan
      }
		}
	}
</script>