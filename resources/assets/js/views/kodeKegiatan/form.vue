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
									<!-- kode -->
									<div class="col-md-12">
										<div class="form-group" :class="{ 'has-error': errors.has('form.kode') }">

											<!-- title -->
											<h5 :class="{ 'text-danger': errors.has('form.kode') }">
												<i class="icon-cross2" v-if="errors.has('form.kode')"></i>
												Kode : <wajib-badge></wajib-badge>
											</h5>

											<!-- text -->
											<input type="text" name="kode" class="form-control"
												placeholder="Silahkan masukkan kode kegiatan" v-validate="'required|min:5'"
												data-vv-as="Kode Kegiatan" v-model="form.kode">

											<!-- error message -->
											<small class="text-muted text-danger" v-if="errors.has('form.kode')">
												<i class="icon-arrow-small-right"></i> {{ errors.first('form.kode') }}
											</small>
											<small class="text-muted" v-else>&nbsp;</small>
										</div>
									</div>

									<!-- name -->
									<div class="col-md-12">
										<div class="form-group" :class="{ 'has-error': errors.has('form.name') }">

											<!-- title -->
											<h5 :class="{ 'text-danger': errors.has('form.name') }">
												<i class="icon-cross2" v-if="errors.has('form.name')"></i>
												Nama: <wajib-badge></wajib-badge>
											</h5>

											<!-- text -->
											<input type="text" name="name" class="form-control"
												placeholder="Silahkan masukkan nama kegiatan" v-validate="'required|min:5'"
												data-vv-as="Name" v-model="form.name">

											<!-- error message -->
											<small class="text-muted text-danger" v-if="errors.has('form.name')">
												<i class="icon-arrow-small-right"></i> {{ errors.first('form.name') }}
											</small>
											<small class="text-muted" v-else>&nbsp;</small>
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
import { mapGetters } from 'vuex';
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
		wajibBadge,
	},
	data() {
		return {
			title: 'Tambah Kode Kegiatan',
			titleDesc: 'Menambah Kode Kegiatan',
			titleIcon: 'icon-plus3',
			level: 2,
			level2Title: 'Kode Kegiatan',
			kelas: 'kodeKegiatan',
			cancelState: 'methods',
			state: '',
			modalShow: false,
			modalState: '',
			modalTitle: '',
			modalColor: '',
			modalContent: '',
			modalSize: '',
			submited: false,
		}
	},
	beforeRouteEnter(to, from, next) {
		next(vm => vm.fetch());
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
		fetch() {
			if (this.$route.meta.mode == 'edit') {
				this.$store.dispatch(this.kelas + '/edit', this.$route.params.id);
				this.title = 'Ubah Kode Kegiatan';
				this.titleDesc = 'Mengubah kode kegiatan';
				this.titleIcon = 'icon-pencil5';
			} else {
				this.title = 'Tambah Kode Kegiatan';
				this.titleDesc = 'Menambah kode kegiatan';
				this.titleIcon = 'icon-plus3';
				this.$store.dispatch(this.kelas + '/create');
			}
		},
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
			this.$router.push({ name: this.kelas });
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
		...mapGetters('kodeKegiatan', {
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