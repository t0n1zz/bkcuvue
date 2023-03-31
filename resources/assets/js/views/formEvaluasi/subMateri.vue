<template>
	<div>
		<!-- page-header -->
		<page-header :title="title" :titleDesc="titleDesc" :titleIcon="titleIcon" :level="level" :level2Title="level2Title"
			:level2Route="kelas" @level2Back="back()"></page-header>
		<!-- content -->
		<div class="page-content pt-0">
			<div class="content-wrapper">
				<div class="content">
					<!-- message -->
					<message v-if="errors.any('form') && submited" :title="'Oops terjadi kesalahan'"
						:errorItem="errors.items">
					</message>
					<!-- main panel -->
					<form @submit.prevent="save" enctype="multipart/form-data" data-vv-scope="form">
						<!-- informasi umum -->
						<div class="card">
							<div class="card-body">
								<div class="row">
									<!-- name -->
									<div class="col-md-12">
										<div class="form-group" :class="{ 'has-error': errors.has('form.name') }">
											<!-- title -->
											<h5 :class="{ 'text-danger': errors.has('form.name') }">
												<i class="icon-cross2" v-if="errors.has('form.name')"></i> Nama:
												<wajib-badge></wajib-badge>
											</h5>
											<!-- text -->
											<input type="text" name="name" class="form-control"
												placeholder="Silahkan masukkan nama form evaluasi"
												v-validate="'required|min:5'" data-vv-as="Name" v-model="form.name">
											<!-- error message -->
											<small class="text-muted text-danger" v-if="errors.has('form.name')">
												<i class="icon-arrow-small-right"></i> {{ errors.first('form.name') }}
											</small>
											<small class="text-muted" v-else>&nbsp;</small>
										</div>
									</div>
									<!-- komponen -->
									<div class="col-md-12">
										<div class="form-group" v-for="(kom, k) in komponen" :key="k">
											<h5 :class="{ 'text-danger': errors.has('form.komponen') }">
												<i class="icon-cross2" v-if="errors.has('form.komponen')"></i> Komponen
												Penilaian:
												<wajib-badge></wajib-badge>
											</h5>
											<input type="text" class="form-control"
												placeholder="Silahkan masukkan nama komponen" v-model="kom.komponen">
											<br />
											<span>
												<div class="form-group">
													<button @click="remove(k)" v-show="k || (!k && komponen.length > 1)"
														type="button" class="btn bg-warning-400 mb-1"><i
															class="icon-bin2"></i> Hapus</button>
												</div>
												<div class="form-group">
													<button @click="add(k)" v-show="k == komponen.length - 1" type="button"
														class="btn mb-1"><i class="icon-plus22"></i> Tambah</button>
												</div>
											</span>
										</div>
									</div>

									<!-- select -->
									<div class="col-md-12">
										<div class="form-group" v-for="(ko, k) in komponent" :key="k">
											<h5 :class="{ 'text-danger': errors.has('form.ko') }">
												<i class="icon-cross2" v-if="errors.has('form.subKomponen')"></i> Pilih
												Komponen:
												<wajib-badge></wajib-badge>
											</h5>
											<select class="form-control" name="select_komponen" v-model="ko.komponent"
												data-width="100%" v-validate="'required'" data-vv-as="Select Komponen">
												<option disabled value="">Silahkan pilih tipe tempat</option>
												<option v-for="(sub, s) in komponen" :key="s" :value="sub.komponen">{{
													sub.komponen }}</option>
											</select>
											<br />
											<br />
											<br />
										</div>
									</div>
								</div>
							</div>
						</div>
						<!-- form info -->
						<form-info></form-info>
						<br />
						<!-- form button -->
						<div class="card card-body">
							<form-button :cancelState="cancelState" :formValidation="'form'"
								@cancelClick="back"></form-button>
						</div>
					</form>
				</div>
			</div>
		</div>
		<!-- modal -->
		<app-modal :show="modalShow" :state="modalState" :title="modalTitle" :content="modalContent" :color="modalColor"
			@batal="modalTutup" @tutup="modalTutup" @successOk="modalTutup" @failOk="modalTutup"
			@backgroundClick="modalBackgroundClick">
		</app-modal>
	</div>
</template>

<script>
import {
	mapGetters
} from 'vuex';
import _ from 'lodash';
import pageHeader from "../../components/pageHeader.vue";
import wajibBadge from "../../components/wajibBadge.vue";
import message from "../../components/message.vue";
import formButton from "../../components/formButton.vue";
import formInfo from "../../components/formInfo.vue";
import appModal from '../../components/modal';
export default {
	components: {
		pageHeader,
		appModal,
		message,
		formButton,
		formInfo,
		wajibBadge
	},
	data() {
		return {
			title: 'Tambah Form Evaluasi',
			titleDesc: 'Menambah Form Evaluasi',
			titleIcon: 'icon-plus3',
			level: 2,
			level2Title: 'Form Evaluasi',
			kelas: 'formEvaluasi',
			cancelState: 'methods',
			state: '',
			modalShow: false,
			modalState: '',
			modalTitle: '',
			modalColor: '',
			modalContent: '',
			modalSize: '',
			submited: false,
			komponent: [{
				kom: ''
			}],
			komponen: [{
				komponen: '',
				subKomponen: ''
			}],
			subKomponen: [{
				subKomponen: ''
			}],
		}
	},
	beforeRouteEnter(to, from, next) {
		next(vm => vm.fetch());
	},
	updated() {
		console.log(this.komponen);
	},
	watch: {
		updateStat(value) {
			this.modalShow = true;
			this.modalState = value;
			this.modalColor = '';
			if (value === "success") {
				this.modalTitle = this.updateResponse.message;
			} else {
				this.modalTitle = 'Oops terjadi kesalahan :(';
				this.modalContent = this.updateResponse;
			}
		},
	},
	methods: {
		add() {
			this.komponen.push({
				komponen: '',
				subKomponen: '',
			})
		},
		remove(index) {
			this.komponen.splice(index, 1)
		},
		addSub() {
			this.subKomponen.push({
				subKomponen: '',
			});
			this.komponent.push({
				kom: '',
			});
		},
		removeSub(index) {
			this.subKomponen.splice(index, 1);
			this.komponent.splice(index, 1)
		},
		// addCandidate() {
		// 	axios
		// 		.post('/candidates', {
		// 			my_prop_name: JSON.stringify(this.inputs)
		// 		})
		// 		.then(response => {})
		// 		.catch(error => {})
		// },
		fetch() {
			if (this.$route.meta.mode == 'edit') {
				this.$store.dispatch(this.kelas + '/edit', this.$route.params.id);
				this.title = 'Ubah Form Evaluasi';
				this.titleDesc = 'Mengubah Form Evaluasi';
				this.titleIcon = 'icon-file-text';
			} else {
				this.title = 'Tambah Form Evaluasi';
				this.titleDesc = 'Menambah Form Evaluasi';
				this.titleIcon = 'icon-plus3';
				this.$store.dispatch(this.kelas + '/create');
			}
		},
		addKomponent() { },
		save() {
			this.$validator.validateAll('form').then((result) => {
				if (result) {
					if (this.$route.meta.mode == 'edit') {
						this.$store.dispatch(this.kelas + '/update', [this.$route.params.id, this.form]);
					} else {
						this.$store.dispatch(this.kelas + '/store', this.form);
					}
					this.submited = false;
				} else {
					window.scrollTo(0, 0);
					this.submited = true;
				}
			});
		},
		back() {
			this.$router.push({
				name: this.kelas
			});
		},
		modalTutup() {
			if (this.updateStat === 'success') {
				this.back();
			}
			this.modalShow = false;
		},
		modalBackgroundClick() {
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
		...mapGetters('formEvaluasi', {
			form: 'data',
			formStat: 'dataStat',
			rules: 'rules',
			options: 'options',
			updateResponse: 'update',
			updateStat: 'updateStat'
		})
	}
}
</script>