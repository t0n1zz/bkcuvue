<template>
	<div>
		<!-- header -->
		<page-header :title="title" :titleDesc="titleDesc" :titleIcon="titleIcon"></page-header>

		<!-- content -->
<div class="page-content pt-0">
	<div class="content-warpper">
		<div class="content">

			<!-- main panel -->
			<form @submit.prevent="save" enctype="multipart/form-data" data-vv-scope="form">

				<!-- informasi umum -->
				<div class="card">
					<div class="card-header bg-white">
						<h5 class="card-title">1. Informasi Umum</h5>
					</div>
					<div class="card-body">
						<div class="row">

							<!-- foto -->
							<div class="col-md-12">
								<div class="form-group">

									<!-- title -->
									<h5>Foto TP/KP:</h5>

									<!-- imageupload -->
									<app-image-upload :image_loc="'/images/tp/'" :image_temp="form.gambar" v-model="form.gambar"></app-image-upload>
								</div>
							</div>

							<!-- CU -->
							<div class="col-md-4" v-if="profile.id_cu === 0">
								<div class="form-group" :class="{'has-error' : errors.has('form.id_cu')}">

									<!-- title -->
									<h5 :class="{ 'text-danger' : errors.has('form.id_cu')}">
										<i class="icon-cross2" v-if="errors.has('form.id_cu')"></i>
										CU:
									</h5>

									<!-- select -->
									<select class="form-control" name="id_cu" v-model="form.id_cu" data-width="100%" v-validate="'required'"
										data-vv-as="CU" :disabled="modelCU.length === 0">
										<option disabled value="0">Silahkan pilih CU</option>
										<option data-divider="true"></option>
										<option v-for="cu in modelCU" :value="cu.id">{{cu.name}}</option>
									</select>

									<!-- error message -->
									<small class="text-muted text-danger" v-if="errors.has('form.id_cu')">
										<i class="icon-arrow-small-right"></i> {{ errors.first('form.id_cu') }}
									</small>
									<small class="text-muted" v-else>&nbsp;</small>
								</div>
							</div>

							<!-- no_ba -->
							<div class="col-md-4">
								<div class="form-group" :class="{'has-error' : errors.has('form.no_tp')}">

									<!-- title -->
									<h5 :class="{ 'text-danger' : errors.has('form.no_tp')}">
										<i class="icon-cross2" v-if="errors.has('form.no_tp')"></i>
										No. TP/KP:</h5>

									<!-- text -->
									<cleave name="no_tp" v-model="form.no_tp" class="form-control" :options="cleaveOption.number3" placeholder="Silahkan masukkan no TP/KP."
										v-validate="'required'" data-vv-as="No. TP/KP"></cleave>


									<!-- error message -->
									<small class="text-muted text-danger" v-if="errors.has('form.no_tp')">
										<i class="icon-arrow-small-right"></i> {{ errors.first('form.no_tp') }}
									</small>
									<small class="text-muted" v-else>&nbsp;</small>
								</div>
							</div>

							<!-- name -->
							<div class="col-md-4">
								<div class="form-group" :class="{'has-error' : errors.has('form.name')}">

									<!-- title -->
									<h5 :class="{ 'text-danger' : errors.has('form.name')}">
										<i class="icon-cross2" v-if="errors.has('form.name')"></i>
										Nama:</h5>

									<!-- text -->
									<input type="text" name="name" class="form-control" placeholder="Silahkan masukkan nama TP/KP" v-validate="'required|min:5'"
										data-vv-as="Nama" v-model="form.name">

									<!-- error message -->
									<small class="text-muted text-danger" v-if="errors.has('form.name')">
										<i class="icon-arrow-small-right"></i> {{ errors.first('form.name') }}
									</small>
									<small class="text-muted" v-else>&nbsp;</small>
								</div>
							</div>

							<!-- ultah -->
							<div class="col-md-4">
								<div class="form-group" :class="{'has-error' : errors.has('form.ultah')}">

									<!-- title -->
									<h5 :class="{ 'text-danger' : errors.has('form.ultah')}">
										<i class="icon-cross2" v-if="errors.has('form.ultah')"></i>
										Tgl. Berdiri:</h5>

									<!-- input -->
									<cleave name="ultah" v-model="form.ultah" class="form-control" :raw="false" :options="cleaveOption.date"
										placeholder="Silahkan masukkan tgl. berdiri" v-validate="'required'" data-vv-as="Tgl. berdiri"></cleave>

									<!-- error message -->
									<small class="text-muted text-danger" v-if="errors.has('form.ultah')">
										<i class="icon-arrow-small-right"></i> {{ errors.first('form.ultah') }}
									</small>
									<small class="text-muted" v-else>&nbsp;</small>
								</div>
							</div>

						</div>
					</div>
				</div>

			</form>
		</div>
	</div>
</div>

		<!-- modal -->
		<app-modal :show="modalShow" :state="modalState" :title="modalTitle" :content="modalContent" :color="modalColor"
		 @batal="modalTutup" @tutup="modalTutup" @successOk="modalTutup" @failOk="modalTutup" @backgroundClick="modalBackgroundClick">
		</app-modal>

	</div>
</template>

<script>
	import {
		mapGetters
	} from "vuex";
	import pageHeader from "../../components/pageHeader.vue";
	import {
		toMulipartedForm
	} from "../../helpers/form";
	import appImageUpload from "../../components/ImageUpload.vue";
	import appModal from "../../components/modal";
	import message from "../../components/message.vue";
	import formButton from "../../components/formButton.vue";
	import formInfo from "../../components/formInfo.vue";
	import Cleave from "vue-cleave-component";

	export default {
		components: {
			pageHeader,
			appModal,
			appImageUpload,
			message,
			formButton,
			formInfo,
			Cleave
		},
		data() {
			return {
				title: "",
				titleDesc: "",
				titleIcon: "",
				kelas: "tp",
				level2Title: "TP/KP",
				cleaveOption: {
					date: {
						date: true,
						datePattern: ["Y", "m", "d"],
						delimiter: "-"
					},
					number12: {
						numeral: true,
						numeralIntegerScale: 12,
						numeralDecimalScale: 0,
						stripLeadingZeroes: false,
						delimiter: ""
					},
					number3: {
						numeral: true,
						numeralIntegerScale: 3,
						numeralDecimalScale: 0,
						stripLeadingZeroes: false
					},
					numeric: {
						numeral: true,
						numeralThousandsGroupStyle: "thousand",
						numeralDecimalScale: 2,
						numeralDecimalMark: ",",
						delimiter: "."
					}
				},
				modalShow: false,
				modalState: "",
				modalTitle: "",
				modalColor: "",
				modalContent: "",
				submited: false
			};
		},
		beforeRouteEnter(to, from, next) {
			next(vm => vm.fetch());
		},
		watch: {
			profileStat(value) {
				//jika refresh halaman maka reload profile
				if (value === "success") {
					if (this.profile.id_cu === 0) {
						this.$store.dispatch("cu/getPus", this.profile.id_pus);
					}
					if (this.$route.meta.mode !== "edit" && this.form.id_cu == undefined) {
						this.form.id_cu = this.profile.id_cu;
					}

					// check permission
					if (this.$route.meta.mode === "edit") {
						if (!this.profile.can || !this.profile.can["update_" + this.kelas]) {
							this.$router.push({
								name: "notFound"
							});
						}
					} else {
						if (!this.profile.can || !this.profile.can["create_" + this.kelas]) {
							this.$router.push({
								name: "notFound"
							});
						}
					}
				}
			},
			formStat(value) {
				if (value === "success") {
					if (this.$route.meta.mode === "edit") {
						this.changeProvinces(this.form.id_provinces);
						this.changeRegencies(this.form.id_regencies);
						this.changeDistricts(this.form.id_districts);
					} else {
						this.form.id_cu = this.profile.id_cu;
					}
				}
			},
			updateStat(value) {
				this.modalShow = true;
				this.modalState = value;
				this.modalColor = "";

				if (value === "success") {
					this.modalTitle = this.updateResponse.message;
				} else {
					this.modalTitle = "Oops terjadi kesalahan :(";
					this.modalContent = this.updateResponse;
				}
			}
		},
		methods: {
			fetch() {
				if (this.$route.meta.mode === "edit") {
					this.$store.dispatch(this.kelas + "/edit", this.$route.params.id);
					this.title = "Ubah " + this.level2Title;
					this.titleDesc = "Mengubah " + this.level2Title;
					this.titleIcon = "icon-pencil5";
				} else {
					this.title = "Tambah " + this.level2Title;
					this.titleDesc = "Menambah " + this.level2Title;
					this.titleIcon = "icon-plus3";
					this.$store.dispatch(this.kelas + "/create");
				}

				this.$store.dispatch("provinces/get");
			},
			save() {
				const formData = toMulipartedForm(this.form, this.$route.meta.mode);
				this.$validator.validateAll("form").then(result => {
					if (result) {
						if (this.$route.meta.mode === "edit") {
							this.$store.dispatch(this.kelas + "/update", [
								this.$route.params.id,
								formData
							]);
						} else {
							this.$store.dispatch(this.kelas + "/store", formData);
						}
						this.submited = false;
					} else {
						window.scrollTo(0, 0);
						this.submited = true;
					}
				});
			},
			back() {
				if (this.$route.meta.mode === "edit" && this.profile.id_cu == 0) {
					this.$router.push({
						name: this.kelas + "Cu",
						params: {
							cu: this.form.id_cu
						}
					});
				} else {
					this.$router.push({
						name: this.kelas + "Cu",
						params: {
							cu: this.profile.id_cu
						}
					});
				}
			},
			changeProvinces(id) {
				this.$store.dispatch("regencies/getProvinces", id);
			},
			changeRegencies(id) {
				this.$store.dispatch("districts/getRegencies", id);
			},
			changeDistricts(id) {
				this.$store.dispatch("villages/getDistricts", id);
			},
			modalTutup() {
				if (this.updateStat === "success") {
					this.back();
				}

				this.modalShow = false;
				this.submitedKategori = false;
				this.submitedPenulis = false;
			},
			modalBackgroundClick() {
				if (this.modalState === "success") {
					this.modalTutup;
				} else if (this.modalState === "loading") {
					// do nothing
				} else {
					this.modalShow = false;
				}
			}
		},
		computed: {
			...mapGetters("user", {
				profile: "profile",
				profileStat: "profileStat"
			}),
			...mapGetters("tp", {
				form: "data",
				formStat: "dataStat",
				rules: "rules",
				options: "options",
				updateResponse: "update",
				updateStat: "updateStat"
			}),
			...mapGetters("cu", {
				modelCU: "dataS",
				modelCUStat: "dataStatS"
			}),
			...mapGetters("provinces", {
				modelProvinces: "dataS",
				modelProvincesStat: "dataStatS"
			}),
			...mapGetters("regencies", {
				modelRegencies: "dataS",
				modelRegenciesStat: "dataStatS"
			}),
			...mapGetters("districts", {
				modelDistricts: "dataS",
				modelDistrictsStat: "dataStatS"
			}),
			...mapGetters("villages", {
				modelVillages: "dataS",
				modelVillagesStat: "dataStatS"
			}),
			modelPus() {
				return this.$store.getters.getPusS;
			}
		}
	};
</script>