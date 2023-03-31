<template>
	<div>
		<!-- header -->
		<page-header :title="title" :titleDesc="titleDesc" :titleIcon="titleIcon"></page-header>

		<div class="page-content pt-0">
			<div class="content-wrapper">
				<div class="content">
					<div class="row">

						<div class="col-sm-12">
							<singleFileUpload title="DATA_ANGGOTA" ref="formAnggota" @LoadingStat="setLoadingStat"
								@fileSelected="setFileCount" @fileBatal="remove('DATA_ANGGOTA')"></singleFileUpload>

							<singleFileUpload title="DATA_REKENING" ref="formRekening" @LoadingStat="setLoadingStat"
								@fileSelected="setFileCount" @fileBatal="remove('DATA_REKENING')"></singleFileUpload>

							<singleFileUpload title="DATA_PRODUK" ref="formProduk" @LoadingStat="setLoadingStat"
								@fileSelected="setFileCount" @fileBatal="remove('DATA_PRODUK')"></singleFileUpload>
						</div>

						<div class="col-sm-12">
							<div class="card card-body">
								<input :disabled="isLoading" type="button" value="Upload" @click.prevent="submit"
									class="btn btn-primary ">
							</div>
						</div>

						<div class="col-sm-12">
							<div class="card">
								<div class="card-header bg-white">
									<h5 class="card-title">List File</h5>
								</div>
								<div class="card-body">
									<div class="row">
										<div v-for="(file, index) in dataS" :key="index" class="col-md-4">
											<div class="card">
												<div class="card-body">
													<h5 class="card-title">{{ file.tipe }}</h5>
													<h5 class="card-title">{{ file.file_name }}</h5>
													<input type="button" value="HAPUS"
														v-on:click.prevent="setSelectedItem(file)"
														@click.prevent="modalOpen('hapus')" class="btn btn-danger ">
												</div>
											</div>
										</div>
										<div class="col-sm-12" v-if="dataS.length <= 0">File upload tidak ditemukan</div>
									</div>
								</div>
							</div>
						</div>

						<div class="col-sm-12">
							<div class="card card-body">
								<input v-if="currentUser.id_cu != 0" :disabled="dataS.length <= 0" type="button"
									value="Upload Ke Draft" @click.prevent="modalOpen('upload_draft')"
									class="btn btn-warning mb-2">

								<input v-if="currentUser.id_cu == 0" type="button" value="Upload Ke Draft"
									@click.prevent="modalOpen('upload_draft')" class="btn btn-warning mb-2">

								<input :disabled="!Draft" type="button" value="Simpan Draft"
									@click.prevent="modalOpen('simpan_draft')" class="btn btn-success mb-2">
							</div>
						</div>

					</div>
				</div>
			</div>
		</div>

		<!-- <div v-if="currentUser.id_cu==0" style="margin-left:10px;margin-bottom:10px" class="column col-md3">
				<div>
				<h5>Tipe Upload</h5>
			</div> -->
		<!-- <div>
				<input v-model="tipe" id="Single" type="radio" v-bind:value="'single'" name="tipe" checked>
				<label for="Single" style="font-size:20px">Single</label>
				<input v-model="tipe" id="Batch" type="radio" v-bind:value="'batch'" name="tipe" style="margin-left:10px;height:20;width:20px">
				<label for="Batch" style="font-size:20px">Batch</label>
			</div> -->
		<!-- <div v-if="tipe=='single' && currentUser.id_cu==0">
				<h5>Pilih CU</h5>
				<select class="form-control" name="id_provinces"  data-width="100%" style="width:300px" @change="onCuChange($event.target.value)">
					<option disabled value="">Silahkan pilih Provinsi</option>
					<option v-for="(cu, index) in modelCU" :value="cu.id" :key="index">{{cu.name}}</option>
				</select>
			</div> -->

		<!-- </div> -->

		<app-modal :show="modalShow" :state="modalState" :title="modalTitle" :content="modalContent" :size="modalSize"
			:color="modalColor" @batal="modalTutup" @tutup="modalTutup" @confirmOk="modalConfirmOk" @successOk="modalTutup"
			@failOk="modalTutup" @backgroundClick="modalBackgroundClick">

			<!-- title -->
			<template slot="modal-title">
				{{ modalTitle }}
			</template>

		</app-modal>
	</div>
</template>

<script>
import { mapGetters } from 'vuex';
import pageHeader from "../../components/pageHeader.vue";
import appModal from '../../components/modal';
import Cleave from 'vue-cleave-component';
import singleFileUpload from '../../components/singleFileUpload';

export default {
	components: {
		pageHeader,
		appModal,
		Cleave,
		singleFileUpload
	},
	data() {
		return {
			// tipe:'single',
			// cekTipe:true,
			isLoading: true,
			selectedItem: null,
			title: 'Import ESCETE',
			titleDesc: 'Melakukan upload data CSV ESCETE',
			titleIcon: 'icon-file-upload2',
			kelas: 'testUpload',
			loadingCount: [],
			files: [],
			fileCounter: 0,
			modalShow: false,
			isDraft: false,
			//flag sesuaikan dengan jumlah file yang  mau diupload
			flagRekening: false,
			flagAnggota: false,
			flagProduk: false,
			modalState: '',
			modalTitle: '',
			modalColor: '',
			modalContent: '',
			modalSize: '',
		}
	},

	watch: {
		loadingCount: function () {

			if (this.loadingCount.length != 0) {
				if (this.loadingCount.length == this.fileCounter) {
					this.files = []
					this.loadingCount = []
					this.$store.dispatch('anggotaCuImportEscete/index', [this.currentUser.id_cu, this.currentUser.id]);
					this.$store.dispatch('fileUpload/index', [this.currentUser.id_cu, this.currentUser.id]);
				}
			}
		},

		uploadStat(value) {
			this.modalShow = true;
			this.modalState = value;
			this.modalColor = '';

			if (value == "success") {
				this.$store.dispatch('anggotaCuImportEscete/index', [this.currentUser.id_cu]);
				this.$store.dispatch('fileUpload/index', [this.currentUser.id_cu, this.currentUser.id]);
				this.modalTitle = this.uploadResponse.message;
			} else {
				this.modalTitle = 'Oops terjadi kesalahan :(';
				this.modalContent = this.uploadResponse;
			}
		},

		updateStat(value) {
			this.modalShow = true;
			this.modalState = value;
			this.modalColor = '';

			if (value == "success") {
				this.$store.dispatch('anggotaCuImportEscete/index', [this.currentUser.id_cu]);
				this.$store.dispatch('fileUpload/index', [this.currentUser.id_cu, this.currentUser.id]);
				this.modalTitle = this.updateResponse.message;
			} else {
				this.modalTitle = 'Oops terjadi kesalahan :(';
				this.modalContent = this.updateResponse;
			}
		},


		files: function () {
			if (this.files.length == 0) {
				this.isLoading = true
			}
		},

		tipe: function () {
			if (this.tipe == 'single') {
				this.cekTipe = true
			} else {
				this.cekTipe = false
			}
		}
	},

	created() {
		this.$store.dispatch('anggotaCuImportEscete/index', [this.currentUser.id_cu, this.currentUser.id]);
		this.$store.dispatch('fileUpload/index', [this.currentUser.id_cu, this.currentUser.id]);
	},


	methods: {
		modalOpen(state, isMobile, itemMobile) {
			this.modalShow = true;
			this.state = state;
			if (isMobile) {
				this.selectedItem = itemMobile;
			}

			if (state == 'hapus') {
				this.modalState = 'confirm-tutup';
				this.modalColor = '';
				this.modalTitle = 'Hapus file ' + this.selectedItem.file_name + '?';
				this.modalButton = 'Iya, Hapus';
			}

			if (state == 'upload_draft') {
				this.modalState = 'confirm-tutup';
				this.modalColor = '';
				this.modalTitle = 'Upload file ke draft?';
				this.modalButton = 'Upload';
			}

			if (state == 'simpan_draft') {
				this.modalState = 'confirm-tutup';
				this.modalColor = '';
				this.modalTitle = 'simpan draft?';
				this.modalButton = 'Upload';
			}
		},

		modalConfirmOk() {
			this.modalShow = false;
			if (this.state == 'hapus') {
				this.$store.dispatch('fileUpload/destroy', this.selectedItem.id);
			}

			if (this.state == 'upload_draft') {

				this.$store.dispatch('anggotaCuImportEscete/draft', [this.currentUser.id_cu, this.currentUser.id]);
			}

			if (this.state == 'simpan_draft') {
				this.$store.dispatch('anggotaCuImportEscete/simpanDraft', this.currentUser.id_cu);
			}

		},
		modalTutup() {

			// if(this.state == 'hapus'){
			this.modalShow = false
			// }
		},
		modalBackgroundClick() {
			if (this.modalState == 'success') {
				this.modalTutup;
			} else if (this.modalState == 'loading') {
				// do nothing
			} else {
				this.modalShow = false
			}
			this.isDisableTablePeserta = false;
		},
		submit() {
			this.loadingCount = []
			this.isLoading = true
			console.log('ya');
			if (this.flagProduk == true) {
				this.$refs.formProduk.submit()
			}
			if (this.flagAnggota == true) {
				this.$refs.formAnggota.submit()
			}
			if (this.flagRekening == true) {
				this.$refs.formRekening.submit()
			}
		},

		setLoadingStat(value) {
			this.loadingCount.push(value);
		},

		setFileCount(value) {
			this.isLoading = false
			//pengecekan if sesuaikan dengan jumlah file yang mau di upload
			if (this.flagAnggota == false && value.name == 'DATA_ANGGOTA') {
				this.flagAnggota = true
				this.fileCounter++
			} else if (this.flagRekening == false && value.name == 'DATA_REKENING') {
				this.flagRekening = true
				this.fileCounter++
			} else if (this.flagProduk == false && value.name == 'DATA_PRODUK') {
				this.flagProduk = true
				this.fileCounter++
			}
			let file = { 'name': value.name, 'file': value.file }
			this.files.push(file)
		},

		remove(value) {
			if (this.flagAnggota == true && value == 'DATA_ANGGOTA') {
				this.flagAnggota = false
				this.fileCounter--
			} else if (this.flagRekening == true && value == 'DATA_REKENING') {
				this.flagRekening = false
				this.fileCounter--
			} else if (this.flagProduk == true && value == 'DATA_PRODUK') {
				this.flagProduk = false
				this.fileCounter--
			}
			let i = this.files.map(item => item.name).indexOf(value)
			this.files.splice(i, 1)
		},

		setSelectedItem(file) {
			this.selectedItem = file;
		},


		SimpanDraft() {
			// console.log(this.currentUser.id_cu);

		},

		//  onCuChange(e){
		// 	console.log(e);
		// }
	},

	computed: {
		...mapGetters('auth', {
			currentUser: 'currentUser'
		}),
		...mapGetters('anggotaCuImportEscete', {
			uploadResponse: 'update',
			uploadStat: 'updateStat',
			Draft: 'isDraft'
		}),
		...mapGetters('fileUpload', {
			dataS: 'dataS',
			updateResponse: 'update',
			updateStat: 'updateStat'
		}),
		...mapGetters('cu', {
			modelCU: 'headerDataS',
			modelCUStat: 'headerDataStatS',
		}),
	},
}
</script>