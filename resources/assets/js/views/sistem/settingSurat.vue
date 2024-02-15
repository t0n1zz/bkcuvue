<template>
	<div>
		<!-- header -->
		<page-header :title="title" :titleDesc="titleDesc" :titleIcon="titleIcon" :level="2" :level2Title="level2Title"
			:level2Route="kelas" @level2Back="back()"></page-header>
		<form @submit.prevent="save" data-vv-scope="form">
			<div class="card">
				<div class="card-header bg-white">
					<h5 class="card-title">Pengaturan Kategori Surat SK</h5>
				</div>
				<div class="card-body">
					<h5>Pilih Kategori Surat Untuk SK Cuti :</h5>
					<div>
						<select class="form-control" v-model="form.cuti" data-width="100%">
							<option disabled="true" value="">PILIH KATEGORI SURAT</option>
							<option v-for="(kategori, index) in itemKategori" :value="kategori.id" :key="index">
								{{ kategori.deskripsi }} | {{ kategori.name }}</option>
						</select>
					</div>

					<h5 style="margin-top: 10px;">Pilih Kategori Surat Untuk SK MKG dan Golongan Ruang :</h5>
					<div>
						<select class="form-control" v-model="form.mkg" data-width="100%">
							<option disabled="true" value="">PILIH KATEGORI SURAT</option>
							<option v-for="(kategori, index) in itemKategori" :value="kategori.id" :key="index">{{
								kategori.deskripsi }} | {{ kategori.name }}</option>
						</select>
					</div>

					<h5 style="margin-top: 10px;">Pilih Kategori Surat Untuk SK Tunjangan Keluarga :</h5>
					<div>
						<select class="form-control" v-model="form.tunjangan" data-width="100%">
							<option disabled="true" value="">PILIH KATEGORI SURAT</option>
							<option v-for="(kategori, index) in itemKategori" :value="kategori.id" :key="index">{{
								kategori.deskripsi }} | {{ kategori.name }}</option>
						</select>
					</div>
					<!-- divider -->
					<hr>

					<!-- button -->
					<!-- tombol desktop-->
					<div class="text-center d-none d-md-block">

						<button type="submit" class="btn btn-primary">
							<i class="icon-floppy-disk"></i> Simpan</button>
					</div>

					<!-- tombol mobile-->
					<div class="d-block d-md-none">

						<button type="submit" class="btn btn-primary btn-block pb-2">
							<i class="icon-floppy-disk"></i> Simpan</button>
					</div>
				</div>
			</div>
		</form>
		<app-modal :show="modalShow" :state="modalState" :title="modalTitle" :content="modalContent" :size="modalSize"
	  			:color="modalColor" @batal="modalTutup" @tutup="modalTutup" @confirmOk="modalConfirmOk" @successOk="modalTutup"
	  			@failOk="modalTutup" @backgroundClick="modalBackgroundClick">
	    </app-modal>
	</div>
</template>

<script>
import { mapGetters } from 'vuex';
import Cleave from 'vue-cleave-component';
import DatePicker from "../../components/datePicker.vue";
import pageHeader from "../../components/pageHeader.vue";
import appModal from "../../components/modal";

export default {
	props: ['formState', 'selected', 'id_aktivis'],
	components: {
		Cleave,
		DatePicker,
		pageHeader,
		appModal
	},
	data () {
		return {
			title: 'Pengaturan',
			titleDesc: '',
			titleIcon: '',
			kelas: 'pengaturan',
			level2Title: 'Pengaturan',
			aktiv: '',
			keteranganBatal: "",
			state: "",
			modalShow: false,
			modalState: "",
			modalColor: "",
			modalTitle: "",
			modalContent: "",
			modalButton: "",
			modalSize: "",
			cleaveOption: {
				date: {
					date: true,
					datePattern: ['Y', 'm', 'd'],
					delimiter: '-'
				},
			}
		}
	},
	created () {
		this.checkUser()
		this.$store.dispatch('pengaturan/getKategori', this.currentUser.id_cu);
		this.$store.dispatch('pengaturan/index', this.currentUser.id_cu);
	},

	watch: {
		updateStat (value) {
			this.modalState = value;
			this.modalButton = "Ok";
			if (value === "success") {
				this.modalTitle = this.updateMessage.message;
				this.modalContent = "";
				this.selectedItem = []
			} else if (value === "fail") {
				this.modalContent = this.updateMessage;
			} else {
				this.modalContent = "";
			}
		},
	},

	methods: {
		checkUser () {
			if (this.currentUser.id_cu != this.$route.params.id_cu) {
				this.$router.push('/notFound');
			}
		},

		save () {
			this.modalState = 'loading'
			this.modalShow = true
			let formData = {};
			this.form.id_aktivis = this.aktiv.id_aktivis
			this.form.id_cu = this.aktiv.id_cu

			formData = this.form;
			this.$validator.validateAll('form').then((result) => {
				if (result) {

						this.$store.dispatch(this.kelas + '/store', [this.currentUser.id_cu, formData]);
						// this.$store.dispatch(this.kelas + '/update', [this.selected.id, formData]);
					this.submited = false;
				} else {
					this.submited = true;
				}
			});
		},
		tutup () {
			this.$emit('tutup');
		},

		modalConfirmOpen (state, isMobile, itemMobile) {
			this.modalShow = true;
			this.state = state;

			if (isMobile) {
				this.selectedItem = itemMobile;
			}

			if (state == "hapus") {
				this.modalState = "confirm-tutup";
				this.modalTitle =
					"Hapus " + this.title + " " + this.selectedItem.name + " ini?";
				this.modalButton = "Iya, Hapus";
				this.modalColor = "";
			} else if (state == "status") {
				this.modalState = "normal1";
				this.modalTitle =
					"Ubah status " + this.title + " " + this.selectedItem.name + " ini?";
				this.modalColor = "bg-primary";
			} else if (state == "keteranganBatal") {
				this.modalState = "normal2";
				this.modalTitle =
					"Keterangan pembatalan " + this.title + " " + this.selectedItem.name;
				this.modalColor = "bg-primary";
				this.keteranganBatal = this.selectedItem.keteranganBatal;
			} else if (state = 'Setujui') {
				this.modalState = "confirm-tutup";
				this.modalTitle = state + ' Perubahan Golongan Ruang/ Masa Kerja Golongan atas nama' + " " + this.selectedItem.aktivis.name + "?";
				this.modalButton = "Setujui";
				this.modalColor = "";
			}
		},


		modalTutup () {
			this.modalShow = false;
		},

		modalOpen (state) {

		},

		modalConfirmOk () {

		},
		modalBackgroundClick () {
			if (this.modalState === 'success') {
				this.modalTutup;
			} else if (this.modalState === 'loading') {
				// do nothing
			} else {
				this.modalShow = false
			}
		},
	},

	computed: {
		...mapGetters('auth', {
			currentUser: 'currentUser'
		}),

		...mapGetters("pengaturan", {
			form: 'data',
			itemData: "dataS",
			itemDataStat: 'dataStatS',
			updateMessage: "update",
			updateStat: "updateStat",
			itemKategori: "kategoriS"
		}),
	}
}
</script>