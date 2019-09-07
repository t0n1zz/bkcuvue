<template>
	<div>
		<!-- message -->
		<message v-if="errors.any('formStatus') && submited" :title="'Oops, terjadi kesalahan'" :errorItem="errors.items">
		</message>

		<form @submit.prevent="save" data-vv-scope="formStatus">

      <div class="row">
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
                      <span v-html="$options.filters.statusJalinan(selectedData.tipe)"></span>
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
                  </ul>
                  <ul class="list list-unstyled mb-0">
                    <li>
                      <b>Nilai pengajuan klaim TUNAS:</b> <br/>
                      <check-value :value="selectedData.tunas_diajukan" valueType="currency"></check-value> 
                    </li>
                    <li>
                      <b>Nilai pengajuan klaim LINTANG:</b> <br/>
                      <check-value :value="selectedData.tunas_lintang" valueType="currency"></check-value> 
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
     
      <!-- status -->
      <div class="form-group">

        <!-- title -->
        <h5>Status Klaim:</h5>

        <!-- select -->
        <select name="status" data-width="100%" class="form-control" v-model="formStatus.status">
          <option disabled value="">Silahkan pilih status klaim</option>
          <option value="0">Menunggu</option>
          <option value="1">Dicairkan</option>
          <option value="2">Ditolak</option>
          <option value="3">Tidak Sesuai</option>
        </select>

      </div>

      <div class="row" v-if="formStatus.status == '1'">
        <!-- TUNAS -->
        <div class="col-md-6">
          <div class="form-group" :class="{'has-error' : errors.has('formStatus.tunas_disetujui')}">

            <!-- title -->
            <h5 :class="{ 'text-danger' : errors.has('formStatus.tunas_disetujui')}">
          <i class="icon-cross2" v-if="errors.has('formStatus.tunas_disetujui')"></i> Nilai pengajuan klaim TUNAS yang disetujui</h5>

            <!-- text -->
            <cleave 
              name="tunas_disetujui"
              v-model="formStatus.tunas_disetujui" 
              class="form-control" 
              :options="cleaveOption.numeric"
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
        <div class="col-md-6">
          <div class="form-group" :class="{'has-error' : errors.has('formStatus.lintang_disetujui')}">

            <!-- title -->
            <h5 :class="{ 'text-danger' : errors.has('formStatus.lintang_disetujui')}">
          <i class="icon-cross2" v-if="errors.has('formStatus.lintang_disetujui')"></i>Nilai pengajuan klaim LINTANG yang disetujui</h5>

            <!-- text -->
            <cleave 
              name="lintang_disetujui"
              v-model="formStatus.lintang_disetujui" 
              class="form-control" 
              :options="cleaveOption.numeric"
              placeholder="Silahkan masukkan jumlah nilai pengajuan klaim LINTANG yang disetujui"
              v-validate="'required'" data-vv-as="Nilai pengajuan klaim LINTANG yang disetujui"></cleave>

            <!-- error message -->
            <small class="text-muted text-danger" v-if="errors.has('formStatus.lintang_disetujui')">
              <i class="icon-arrow-small-right"></i> {{ errors.first('formStatus.lintang_disetujui') }}
            </small>
            <small class="text-muted" v-else>&nbsp;</small>		
          </div>
        </div>
      </div>

      <!-- keterangan batal -->
      <div class="form-group" :class="{'has-error' : errors.has('formStatus.keterangan_klaim')}" v-if="formStatus.status != 0">

        <!-- title -->
        <h5 :class="{ 'text-danger' : errors.has('formStatus.keterangan_klaim')}">
          <i class="icon-cross2" v-if="errors.has('formStatus.keterangan_klaim')"></i>Keterangan:
        </h5>

        <!-- textarea -->
        <textarea rows="5" type="text" name="keterangan_klaim" class="form-control" placeholder="Silahkan masukkan keterangan " v-validate="'required|min:5'" data-vv-as="Keterangan" v-model="formStatus.keterangan_klaim"></textarea>

        <!-- error message -->
        <small class="text-muted text-danger" v-if="errors.has('formStatus.keterangan_klaim')">
          <i class="icon-arrow-small-right"></i> {{ errors.first('formStatus.keterangan_klaim') }}
        </small>
        <small class="text-muted" v-else>&nbsp;
        </small>
      </div>

      <!-- divider -->
      <hr>
      
      <!-- tombol desktop-->
      <div class="text-center d-none d-md-block">
        <button class="btn btn-light" @click.prevent="tutup">
          <i class="icon-cross"></i> Tutup</button>

        <button type="submit" class="btn btn-primary">
          <i class="icon-floppy-disk"></i> Simpan</button>
      </div>  

      <!-- tombol mobile-->
      <div class="d-block d-md-none">
        <button class="btn btn-light btn-block pb-2" @click.prevent="tutup">
          <i class="icon-cross"></i> Tutup</button>

        <button type="submit" class="btn btn-primary btn-block pb-2">
          <i class="icon-floppy-disk"></i> Simpan</button>
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

	export default {
		props: ['kelas','selected'],
		components: {
			formInfo,
      message,
      identitas,
      checkValue,
      Cleave, 
		},
		data() {
			return {
        title: '',
        selectedData: {},
				formStatus: {
					status: '',
          keterangan_klaim: '',
          tunas_disetujui: '',
          lintang_disetujui: '',
        },
        cleaveOption: {
          numeric: {
            numeral: true,
            numeralThousandsGroupStyle: 'thousand',
            numeralDecimalScale: 2,
            numeralDecimalMark: ',',
            delimiter: '.'
          }
				},
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
		},
		watch: {
		},
		methods: {
      save(){
        if(this.formStatus != '1'){
          this.tunas_disetujui = '';
          this.lintang_disetujui = '';
        }

        if(this.formStatus != '2' && this.formStatus != '3'){
          this.keterangan_klaim = '';
        }

				this.$validator.validateAll('formStatus').then((result) => {
          if (result) {
            this.$store.dispatch(this.kelas + '/updateStatus', [this.selected.id, this.formStatus]);
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
		}
	}
</script>