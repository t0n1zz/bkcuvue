<template>
	<div>

		<!-- message -->
		<message v-if="errors.any('formStatus') && submited" :title="'Oops, terjadi kesalahan'" :errorItem="errors.items">
		</message>

		<form @submit.prevent="save" data-vv-scope="formStatus">
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

        <!-- klaim -->
        <div class="col-md-6">
          <div class="card">
            <div class="card-header bg-white">
              <h5 class="card-title">Klaim JALINAN</h5>
            </div>
            <div class="card-body">
              <div class="row">
                <div class="col-sm-6">
                  <ul class="list list-unstyled mb-0">
                    <li>
                      <b>Jenis Klaim:</b> <br/>
                      <label class="badge badge-warning ml-1 font-size-lg">
                        <check-value :value="selectedData.tipe"></check-value>
                      </label>
                    </li>
                    <li>
                      <b>Kategori Penyakit/Penyebab:</b> <br/>
                      <check-value :value="selectedData.kategori_penyakit"></check-value>
                    </li>
                    <li>
                      <b>Keterangan Cacat/Meninggal:</b> <br/>
                      <check-value :value="selectedData.keterangan"></check-value> 
                     </li>
                  </ul>
                </div>
                <div class="col-sm-6">
                  <ul class="list list-unstyled mb-0">
                    <li>
                      <b>Tanggal Cacat/Meninggal:</b> <br/>
                      <span v-html="$options.filters.date(selectedData.tanggal_mati)"></span>
                    </li>
                    <li>
                      <b>Tanggal Buat / Pengajuan:</b> <br/>
                      <span v-html="$options.filters.dateTime(selectedData.created_at)"></span>
                    </li>
                    <li>
                      <b>Tanggal Ubah :</b> <br/>
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

        <!-- data cu -->
        <div class="col-md-3">

          <h5>Informasi Pendukung:</h5>
          <!-- cu -->
          <div class="card card-body bg-blue-400" >
            <div class="media">
              <div class="media-body">
                <h3 class="mb-0" >{{'Anggota CU ' + selectedData.anggota_cu_cu.cu.name}}</h3>
                <span>
                  {{ 'Nama: ' + selectedData.anggota_cu.name }} 
                  <br/>
                  {{ 'No. BA: ' + selectedData.anggota_cu_cu.no_ba }} 
                  <br/>
                  {{ 'Lama Menjadi Anggota: ' + selectedData.anggota_cu_cu.lama_menjadi_anggota  + ' bulan'}} 
                </span>
              </div>
            </div>
          </div> 

          <!-- usia -->
          <div class="card card-body bg-teal-400" >
            <div class="media">
              <div class="media-body">
                <h3 class="mb-0" >Usia Masuk CU: <span v-if="selectedData.anggota_cu_cu.tanggal_masuk" v-html="$options.filters.ageDiff(selectedData.anggota_cu_cu.tanggal_masuk,selectedData.anggota_cu.tanggal_lahir)"></span></h3>
                <span>
                  Tanggal Masuk CU: <span v-if="selectedData.anggota_cu_cu.tanggal_masuk" v-html="$options.filters.date(selectedData.anggota_cu_cu.tanggal_masuk)"></span> 
                </span>
                <div v-if="selectedData.tipe == 'cacat'">
                  <hr/>
                  <h3 class="mb-0" >Usia Cacat: <span v-if="selectedData.anggota_cu" v-html="$options.filters.ageDiff(selectedData.anggota_cu.tanggal_cacat,selectedData.anggota_cu.tanggal_lahir)"></span></h3>
                  <span>
                    Tanggal Cacat: <span v-if="selectedData.anggota_cu.tanggal_cacat" v-html="$options.filters.date(selectedData.anggota_cu.tanggal_cacat)"></span> 
                  </span>
                </div>
                <div v-else-if="selectedData.tipe == 'meninggal'">
                  <hr/>
                  <h3 class="mb-0" >Usia Meninggal: <span v-if="selectedData.anggota_cu_cu" v-html="$options.filters.ageDiff(selectedData.anggota_cu.tanggal_meninggal,selectedData.anggota_cu.tanggal_lahir)"></span></h3>
                  <span>
                    Tanggal Meninggal: <span v-if="selectedData.anggota_cu.tanggal_meninggal" v-html="$options.filters.date(selectedData.anggota_cu.tanggal_meninggal)"></span> 
                  </span>
                </div>
              </div>   
            </div>
          </div>

        </div>

        <!-- data produk -->
        <div class="col-md-9">
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

        <div class="col-md-12 row" v-if="tipe == 'analisis' || tipe == 'selesai'">
          <!-- veriifkasi pengurus -->
          <div class="col-md-4">
            <verifikator 
              :isSingle="true"
              :title="'Verifikator Pengurus'" 
              :itemData="selectedData.verifikasi_pengurus_data" 
              :itemDataStat="'success'"></verifikator>
            <verifikator 
              :isSingle="false"
              :title="'Verifikator yang dipilih'" 
              :itemData="modelPengurus" 
              :itemDataStat="modelPengurusStat"></verifikator>  
          </div>

          <!-- veriifkasi pengawas -->
          <div class="col-md-4">
            <verifikator 
              :isSingle="true"
              :title="'Verifikator Pengawas'" 
              :itemData="selectedData.verifikasi_pengawas_data" 
              :itemDataStat="'success'"></verifikator>
            <verifikator 
              :isSingle="false"
              :title="'Verifikator yang dipilih'" 
              :itemData="modelPengawas"
              :itemDataStat="modelPengawasStat"></verifikator>  
          </div>

          <!-- veriifkasi manajemen -->
          <div class="col-md-4">
            <verifikator 
              :isSingle="true"
              :title="'Verifikator Manajemen'" 
              :itemData="selectedData.verifikasi_manajemen_data" 
              :itemDataStat="'success'"></verifikator>
            <verifikator 
              :isSingle="false"
              :title="'Verifikator yang dipilih'" 
              :itemData="modelManajemen"
              :itemDataStat="modelManajemenStat"></verifikator>  
          </div>

        </div>
        
        <div class="col-md-12"><hr/></div>

        <!-- status -->
        <div class="col-md-12" v-if="tipe == 'analisis'">
          
          <div class="form-group">

            <!-- title -->
            <h5>Status Klaim:</h5>

            <!-- select -->
            <select name="status" data-width="100%" class="form-control" v-model="formStatus.status">
              <option disabled value="">Silahkan pilih status klaim</option>
              <option value="1">Menunggu</option>
              <option value="2">Dokumen Tidak Lengkap</option>
              <option value="3">Ditolak</option>
              <option value="4">Disetujui</option>
            </select>

          </div>
        </div>
        
        <!-- tanggal pencairan -->
        <div class="col-md-12" v-if="formStatus.status == '4' || tipe == 'selesai'">
          <div class="form-group" :class="{'has-error' : errors.has('formStatus.tanggal_pencairan')}">

            <!-- title -->
            <h6 :class="{ 'text-danger' : errors.has('formStatus.tanggal_pencairan')}">
              <i class="icon-cross2" v-if="errors.has('formStatus.tanggal_pencairan')"></i>
              Tgl. Pencairan: <info-icon :message="'Format: tahun-bulan-tanggal dalam angka. Contoh: 2019-01-23'"></info-icon></h6>

            <!-- input -->
            <cleave 
              name="tanggal_pencairan"
              v-model="formStatus.tanggal_pencairan" 
              class="form-control" 
              :raw="false" 
              :options="cleaveOption.date" 
              :readonly="tipe == 'selesai'"
              v-validate="'required'"
              data-vv-as="Tanggal Pencairan"
              placeholder="Silahkan masukkan tgl. pencairan"></cleave>

            <!-- error message -->
            <small class="text-muted text-danger" v-if="errors.has('formStatus.tanggal_pencairan')">
              <i class="icon-arrow-small-right"></i> {{ errors.first('formStatus.tanggal_pencairan') }}
            </small>
            <small class="text-muted" v-else>&nbsp;</small>	

          </div>
        </div>

        <!-- TUNAS -->
        <div class="col-md-6" v-if="(formStatus.status == '4' && selectedData.tipe != 'cacat') || tipe == 'selesai'">
        
          <div class="form-group" :class="{'has-error' : errors.has('formStatus.tunas_disetujui')}">

            <!-- title -->
            <h5 :class="{ 'text-danger' : errors.has('formStatus.tunas_disetujui')}">
          <i class="icon-cross2" v-if="errors.has('formStatus.tunas_disetujui')"></i> Nilai pengajuan klaim TUNAS yang disetujui</h5>

            <div class="card card-body" :class="{'bg-blue-400': selisihTunas == 0, 'bg-danger-400': selisihTunas < 0, 'bg-brown-400': selisihTunas > 0}">
              <div class="media">
                <div class="media-body">
                  <h3 class="mb-0">
                    <i v-if="selisihTunas > 0" class="icon-plus3"></i>
                    <check-value :value="selisihTunas" valueType="currency"></check-value> 	
                  </h3>
                  <span class="text-uppercase font-size-xs">Selisih Tunas yang di klaim dengan yang disetujui</span>
                </div>
              </div>
            </div>

            <!-- text -->
            <cleave 
              name="tunas_disetujui"
              v-model="formStatus.tunas_disetujui" 
              class="form-control" 
              :options="cleaveOption.numeric"
              :readonly="tipe == 'selesai'"
              placeholder="Silahkan masukkan jumlah nilai pengajuan klaim TUNAS yang disetujui"
              v-validate="'required'" data-vv-as="Nilai pengajuan klaim TUNAS yang disetujui"></cleave>

            <!-- error message -->
            <small class="text-muted text-danger" v-if="errors.has('formStatus.tunas_disetujui')">
              <i class="icon-arrow-small-right"></i> {{ errors.first('formStatus.tunas_disetujui') }}
            </small>
            <small class="text-muted" v-else>&nbsp;</small>	
          </div>
        </div>

        <!-- LINTANG -->
        <div class="col-md-6" v-if="formStatus.status == '4' || tipe == 'selesai'">
          

          <div class="form-group" :class="{'has-error' : errors.has('formStatus.lintang_disetujui')}">
            <!-- title -->
            <h5 :class="{ 'text-danger' : errors.has('formStatus.lintang_disetujui')}">
            <i class="icon-cross2" v-if="errors.has('formStatus.lintang_disetujui')"></i>Nilai pengajuan klaim LINTANG yang disetujui</h5>

            <div class="card card-body" :class="{'bg-blue-400': selisihLintang == 0, 'bg-danger-400': selisihLintang < 0, 'bg-brown-400': selisihLintang > 0}">
              <div class="media">
                <div class="media-body">
                  <h3 class="mb-0">
                     <i v-if="selisihLintang > 0" class="icon-plus3"></i>
                    <check-value :value="selisihLintang" valueType="currency"></check-value> 	
                  </h3>
                  <span class="text-uppercase font-size-xs">Selisih Lintang yang di klaim dengan yang disetujui</span>
                </div>
              </div>
            </div>

            <!-- text -->
            <cleave 
              name="lintang_disetujui"
              v-model="formStatus.lintang_disetujui" 
              class="form-control" 
              :options="cleaveOption.numeric"
              :readonly="tipe == 'selesai'"
              placeholder="Silahkan masukkan jumlah nilai pengajuan klaim LINTANG yang disetujui"
              v-validate="'required'" data-vv-as="Nilai pengajuan klaim LINTANG yang disetujui"></cleave>

            <!-- error message -->
            <small class="text-muted text-danger" v-if="errors.has('formStatus.lintang_disetujui')">
              <i class="icon-arrow-small-right"></i> {{ errors.first('formStatus.lintang_disetujui') }}
            </small>
            <small class="text-muted" v-else>&nbsp;</small>		
          </div>
        </div>

        <!-- keterangan -->
        <div class="col-md-12"  v-if="formStatus.status != 0"> 
          <div class="form-group">

            <!-- title -->
            <h5>
              Keterangan:
            </h5>

            <!-- textarea -->
            <textarea rows="3" 
            type="text" 
            name="keterangan_klaim" 
            class="form-control" 
            :readonly="tipe == 'selesai'"
            placeholder="Silahkan masukkan keterangan " v-model="formStatus.keterangan_klaim"></textarea>
          </div>

        </div>

      </div>
      
      <!-- info -->
      <div v-if="tipe == 'verifikasi'">
        <div class="alert bg-info alert-styled-left">
          <h6>Dengan menekan tombol verifikasi dibawah maka anda telah melakukan pemeriksaan dan menyetujui pengajuan klaim jalinan atas nama <b><u>{{ selectedData.anggota_cu.name }}</u></b> dan segala informasi yang ada dan dikirmkan adalah benar sesuai dengan peraturan.</h6>
        </div>
      </div>
      <div v-else-if="tipe == 'selesai'">
        <div class="alert bg-info alert-styled-left">
          <h6>Dengan menekan tombol selesai dibawah maka anda telah melakukan penyerahan klaim jalinan atas nama <b><u>{{ selectedData.anggota_cu.name }}</u></b> kepada ahli waris atau yang diwakilkan dan segala informasi yang ada dan dikirmkan adalah benar sesuai dengan peraturan.</h6>
        </div>
      </div>
      <div v-else>
        <div class="alert bg-info alert-styled-left">
          <h6>Pastikan data yang dimasukkan sudah benar sebelum menyimpan.</h6>
        </div>
      </div>


      <!-- tombol desktop-->
      <div class="text-center d-none d-md-block">
        <button class="btn btn-light" @click.prevent="tutup">
          <i class="icon-cross"></i> Tutup</button>

        <button type="submit" class="btn btn-primary">
          <span v-if="tipe == 'selesai'">
            <span v-if="formStatus.status == 4">
              <i class="icon-checkmark4"></i> Selesai
            </span>
            <span v-else>
              <i class="icon-blocked"></i> Batal Selesai
            </span>
          </span>
          <span v-else-if="tipe == 'verifikasi'">
            <i class="icon-file-check"></i> Verifikasi
          </span>
          <span v-else>
            <i class="icon-floppy-disk"></i> Simpan
          </span>
        </button>
      </div>  

      <!-- tombol mobile-->
      <div class="d-block d-md-none">
        <button type="submit" class="btn btn-primary btn-block pb-2">
          <span v-if="tipe == 'selesai'">
            <span v-if="formStatus.status == 4">
              <i class="icon-checkmark4"></i> Selesai
            </span>
            <span v-else>
              <i class="icon-blocked"></i> Batal Selesai
            </span>
          </span>
          <span v-else-if="tipe == 'verifikasi'">
            <i class="icon-file-check"></i> Verifikasi
          </span>
          <span v-else>
            <i class="icon-floppy-disk"></i> Simpan
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

	export default {
		props: ['kelas','selected','tipe'],
		components: {
			formInfo,
      message,
      identitas,
      checkValue,
      Cleave, 
      dataTable,
      infoIcon,
      verifikator
		},
		data() {
			return {
        title: '',
        selectedData: {},
				formStatus: {
          cu_id: '',
					status: '',
          keterangan_klaim: '',
          tunas_disetujui: '',
          lintang_disetujui: '',
          tanggal_pencairan: '',
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
			this.formStatus.status = this.selectedData.status_klaim;
			this.formStatus.keterangan_klaim = this.selectedData.keterangan_klaim;
			this.formStatus.tunas_disetujui = this.selectedData.tunas_disetujui;
      this.formStatus.lintang_disetujui = this.selectedData.lintang_disetujui;
      this.formStatus.tanggal_pencairan = this.selectedData.tanggal_pencairan;
      this.formStatus.cu_id = this.selectedData.anggota_cu_cu.cu_id;
      this.$store.dispatch('anggotaCu/indexProduk',[this.selectedData.anggota_cu_id, this.selectedData.anggota_cu_cu.cu_id]);
      this.$store.dispatch('user/indexCuPermission',this.selectedData.anggota_cu_cu.cu_id);
		},
		watch: {
		},
		methods: {
      selectedRow(item) {
        this.selectedItem = item;
      },
      save(){
        if(this.formStatus != '1'){
          this.tunas_disetujui = '';
          this.lintang_disetujui = '';
        }

        if(this.formStatus != '2' && this.formStatus != '3'){
          this.keterangan_klaim = '';
        }

        if(this.tipe == 'selesai'){
          this.$store.dispatch(this.kelas + "/updateSelesai", this.selected.id);
        }else if(this.tipe == 'verifikasi'){
          this.$store.dispatch(this.kelas + "/updateVerifikasi", [this.selected.id, this.currentUser]);
        }else{
          this.$validator.validateAll('formStatus').then((result) => {
            if (result) {
              this.$store.dispatch(this.kelas + '/updateStatus', [this.selected.id, this.formStatus]);
            }else{
              this.submited = true;
            }
          });
        }
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
				modelPengurus: "dataS1",
				modelPengawas: "dataS2",
				modelManajemen: "dataS3",
        modelPengurusStat: "dataStatS1",
        modelPengawasStat: "dataStatS2",
        modelManajemenStat: "dataStatS3",
      }),
      selisihTunas: function () {
        // `this` points to the vm instance
        return this.formStatus.tunas_disetujui - this.selectedData.tunas_diajukan
      },
      selisihLintang: function () {
        // `this` points to the vm instance
        return this.formStatus.lintang_disetujui - this.selectedData.lintang_diajukan
      },
      usiaMasukCU: function () {
        // `this` points to the vm instance
        return this.formStatus.lintang_disetujui - this.selectedData.lintang_diajukan
      }
		}
	}
</script>