<template>
	<div>
		<!-- first navbar -->
		<div class="navbar navbar-expand-lg navbar-dark bg-indigo">

			<div class="navbar-brand wmin-0 mr-0">
				<a href="#" class="d-inline-block">
					<img src="/images/simo.png">
				</a>
			</div>


			<div>
				<span class="navbar-text ml-lg-3 mr-lg-auto">
					<span class="badge bg-success-400">PUSKOPCUINA
					</span>
				</span>
			</div>

		</div>

		<!-- Page header -->
		<div>
			<div class="page-header">
				<div class="page-header-content header-elements-md-inline">
					<div class="page-title d-flex">
						<h4>
							<i class="mr-2" :class="titleIcon"></i>
							<span class="font-weight-semibold">{{ title }}</span>
							<small class="d-block text-muted">{{ titleDesc }}</small>
						</h4>
					</div>
				</div>
			</div>
		</div>

		<!-- page container -->
		<div class="page-content pt-0">
			<div class="content-wrapper">
				<div class="content">
					<form @submit.prevent="save" enctype="multipart/form-data" data-vv-scope="form">

						<div class="card card-body">
							<div class="row">
								<div class="col-md-12">
									<div class="form-group">
										<h5>Silahkan masukan kode voting</h5>
										<input type="text" name="kode" class="form-control"
											placeholder="Silahkan masukkan kode voting" v-validate="'required'"
											data-vv-as="kode" v-model="form.kode">
									</div>
								</div>
								<div class="col-md-12">
									<button type="submit" class="btn btn-primary btn-block pb-2"
										:disabled="errors.any('form')">
										<i :class="titleIcon"></i> Ok
									</button>
								</div>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>

	</div>
</template>

<script>
import { mapGetters } from 'vuex';
import message from "../../components/message.vue";
import appModal from '../../components/modal';
import checkValue from '../../components/checkValue.vue';

export default {
	components: {
		message,
		appModal,
		checkValue,
	},
	data() {
		return {
			title: 'Pemilihan',
			titleDesc: 'Silahkan memasukan kode pemilihan',
			kelas: 'pemilihan',
			titleIcon: 'icon-quill4',
			form: {
				kode: '',
			},
			selectedItem: {},
			modalShow: false,
			modalState: '',
			modalTitle: '',
			modalColor: '',
			modalContent: '',
			modalButton: ''
		}
	},
	created() {
	},
	watch: {
	},
	methods: {
		save() {
			window.location.href = window.location.origin + '/admins/pemilihan/pilih/' + this.form.kode;
		},
	},
	computed: {
		...mapGetters('voting', {
		}),
	}
}
</script>