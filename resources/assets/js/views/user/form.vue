<template>
	<div>
		<!-- page header -->
		<page-header :title="title" :titleDesc="titleDesc" :titleIcon="titleIcon" :level="2" :level2Title="level2Title" @level2Back="back()"></page-header>

		<!-- content -->
		<div class="page-content pt-0">
			<div class="content-wrapper">
				<div class="content">

					<!-- message -->
					<message v-if="errors.any('form') && submited" :title="'Oops, terjadi kesalahan'" :errorItem="errors.items">
					</message>

					<!-- main panel -->
					<form @submit.prevent="save" enctype="multipart/form-data" data-vv-scope="form">
						<div class="card">
							<div class="card-body">
								
								<div class="row">

									<!-- username -->
									<div class="col-md-6">
										<div class="form-group" :class="{'has-error' : errors.has('form.username')}">

											<!-- title -->
											<h5 :class="{ 'text-danger' : errors.has('form.username')}">
												<i class="icon-cross2" v-if="errors.has('form.username')"></i>
												Username: <wajib-badge></wajib-badge> <small><i>format: namapanggilan-namacu</i></small> 
											</h5>

											<!-- text -->
											<input type="text" name="username" class="form-control" placeholder="Silahkan masukkan username" v-validate="'required|min:5'" data-vv-as='Username' v-model="form.username">

											<!-- error message -->
											<small class="text-muted text-danger" v-if="errors.has('form.username')">
												<i class="icon-arrow-small-right"></i> {{ errors.first('form.username') }}
											</small>
											<small class="text-muted" v-else>&nbsp;
											</small>
										</div>
									</div>

									<!-- password -->
									<div class="col-md-6">
										<div class="form-group" :class="{'has-error' : errors.has('form.password')}">

											<!-- title -->
											<h5 :class="{ 'text-danger' : errors.has('form.password')}">
												<i class="icon-cross2" v-if="errors.has('form.password')"></i>
												Password: <wajib-badge></wajib-badge>
											</h5>

											<!-- text -->
											<input type="password" name="password" ref="password" class="form-control" placeholder="Silahkan masukkan password" v-validate="'required|min:5'" v-model="form.password">

											<!-- error message -->
											<small class="text-muted text-danger" v-if="errors.has('form.password')">
												<i class="icon-arrow-small-right"></i> {{ errors.first('form.password') }}
											</small>
											<small class="text-muted" v-else>&nbsp;
											</small>
										</div>
									</div>

									<!-- password konfirmasi -->
									<div class="col-md-6">
										<div class="form-group" :class="{'has-error' : errors.has('form.passwordConfirm')}">

											<!-- title -->
											<h5 :class="{ 'text-danger' : errors.has('form.passwordConfirm')}">
												<i class="icon-cross2" v-if="errors.has('form.passwordConfirm')"></i>
												Konfirmasi Password: <wajib-badge></wajib-badge>
											</h5>

											<!-- text -->
											<input type="password" name="passwordConfirm" class="form-control" placeholder="Silahkan masukkan password konfirmasi" v-validate="'required|confirmed:password'" data-vv-as="password" v-model="form.passwordConfirm">

											<!-- error message -->
											<small class="text-muted text-danger" v-if="errors.has('form.passwordConfirm')">
												<i class="icon-arrow-small-right"></i> {{ errors.first('form.passwordConfirm') }}
											</small>
											<small class="text-muted" v-else>&nbsp;</small>
										</div>
									</div>

									<!-- select CU -->
									<div class="col-md-12" v-if="currentUser.id_cu == 0">
										<div class="form-group">

											<!-- title -->
											<h5>Tipe:</h5>

											<!-- select -->
											<select name="cu" data-width="100%" class="form-control" v-model="form.id_cu" @change="changeCU($event.target.value)">
												<option disabled value="">Silahkan pilih CU</option>
												<option value="0">Puskopdit BKCU Kalimantan</option>
												<option v-for="cu in modelCu" :value="cu.id">{{cu.name}}</option>
											</select>

										</div>
									</div>

									<!-- aktivis -->
									<div class="col-md-12" v-if="form.id_cu != '' && formStat == 'success'">
										<h5>Data Aktivis User:</h5>

										<identitas v-if="form.id_aktivis != ''" :itemData="form.aktivis" @deleteSelected="deleteSelected"></identitas>

										<!-- peserta -->
										<data-viewer :title="'Aktivis'" :columnData="columnData" :itemData="itemData" :query="query" :itemDataStat="itemDataStat" @fetch="fetchAktivis" :isDasar="'true'" :isNoButtonRow="'true'" v-else>

											<!-- item  -->
											<template slot="item-desktop" slot-scope="props">
												<tr class="text-nowrap cursor-pointer" @click="selectedRow(props.item)">
													<td>
														{{ props.index + 1 + (+itemData.current_page-1) * +itemData.per_page + '.'}}
													</td>
													<td>
														<img :src="'/images/aktivis/' + props.item.gambar + 'n.jpg'" class="img-rounded img-fluid wmin-sm" v-if="props.item.gambar">
														<img :src="'/images/no_image.jpg'" class="img-rounded img-fluid wmin-sm" v-else>
													</td>
													<td>
														<check-value :value="props.item.name"></check-value>
													</td>
													<td>
														<check-value :value="props.item.kelamin"></check-value>
													</td>
													<td v-if="!columnData[4].disable">
														<span v-if="props.item.pekerjaan_aktif && props.item.pekerjaan_aktif.tipe == 1">
															<check-value :value="props.item.pekerjaan_aktif.cu.name" v-if="props.item.pekerjaan_aktif.cu"></check-value>
															<span v-else>-</span>
														</span>
														<span v-else-if="props.item.pekerjaan_aktif && props.item.pekerjaan_aktif.tipe == 2">
															<check-value :value="props.item.pekerjaan_aktif.lembaga_lain.name" v-if="props.item.pekerjaan_aktif.lembaga_lain"></check-value>
															<span v-else>-</span>
														</span>
														<span v-else-if="props.item.pekerjaan_aktif && props.item.pekerjaan_aktif.tipe == 3">
															Puskopdit BKCU Kalimantan
														</span>
														<span v-else>-</span>
													</td>
													<td  v-html="$options.filters.checkTingkatAktivis(props.item.pekerjaan_aktif.tingkat)">
													</td>
													<td>
														<check-value :value="props.item.pekerjaan_aktif.name" v-if="props.item.pekerjaan_aktif"></check-value>
														<span v-else>-</span>
													</td>
													<td>
														<check-value :value="props.item.pendidikan_tertinggi.tingkat" v-if="props.item.pendidikan_tertinggi"></check-value>
														<span v-else>-</span>
													</td>
													<td>
														<check-value :value="props.item.pendidikan_tertinggi.name" v-if="props.item.pendidikan_tertinggi"></check-value>
														<span v-else>-</span>
													</td>
													<td v-html="$options.filters.date(props.item.tanggal_lahir)">
													</td>
													<td>
														<check-value :value="props.item.tempat_lahir"></check-value>
													</td>
													<td>
														<check-value :value="props.item.tinggi"></check-value>
													</td>
													<td>
														<check-value :value="props.item.agama"></check-value>
													</td>
													<td>
														<check-value :value="props.item.status"></check-value>
													</td>
												</tr>
											</template>

										</data-viewer>
									</div>

									<!-- hak-akses -->
									<div class="col-md-12" v-if="form.id_aktivis != '' && formStat == 'success'">
										<br/>
										<!-- title -->
										<h5>Hak Akses:</h5>

										<hak-akses :tipeUser="roleTipe" @hakForm="hakForm"></hak-akses>
									</div>
								</div>

							</div>
						</div>

						<!-- form info -->
						<form-info></form-info>	

						<!-- form button -->
						<div class="card card-body">
							<form-button
								:cancelState="'methods'"
								:formValidation="'form'"
								@cancelClick="back"></form-button>
						</div>

					</form>

				</div>
			</div>
		</div>

		<!-- modal -->
		<app-modal :show="modalShow" :state="modalState" :title="modalTitle" :content="modalContent" :color="modalColor" @batal="modalTutup" @tutup="modalTutup" @successOk="modalTutup" @failOk="modalTutup"  @backgroundClick="modalBackgroundClick">

		</app-modal>

	</div>
</template>

<script>
	import { mapGetters } from 'vuex';
	import pageHeader from "../../components/pageHeader.vue";
	import appImageUpload from '../../components/ImageUpload.vue';
	import appModal from '../../components/modal';
	import hakAkses from "../../components/hakAkses.vue";
	import message from "../../components/message.vue";
	import formButton from "../../components/formButton.vue";
	import formInfo from "../../components/formInfo.vue";
	import wajibBadge from "../../components/wajibBadge.vue";
	import DataViewer from '../../components/dataviewer2.vue';
	import checkValue from '../../components/checkValue.vue';
	import identitas from './identitas.vue';

	export default {
		components: {
			pageHeader,
			appModal,
			appImageUpload,
			hakAkses,
			message,
			formButton,
			formInfo,
			wajibBadge,
			DataViewer,
			checkValue,
			identitas
		},
		data() {
			return {
				title: 'Tambah User',
				titleDesc: 'Menambah user baru',
				titleIcon: 'icon-plus3',
				level2Title: 'User',
				kelas: 'user',
				roleTipe:'',
				selectedItem: [],
				query: {
					order_column: "name",
					order_direction: "asc",
					filter_match: "and",
					limit: 10,
					page: 1
				},
				columnData: [
					{ title: 'No.' },
					{ title: 'Foto' },
					{
						title: 'Nama',
						name: 'name',
						tipe: 'string',
						sort: true,
						hide: false,
						disable: false,
						filter: true,
						filterDefault: true
					},
					{ title: 'Gender' },
					{ title: 'CU',disable: false },
					{ title: 'Tingkat' },
					{ title: 'Jabatan' },
					{ title: 'Pendidikan'},
					{ title: 'Jurusan' },
					{ title: 'Tgl. Lahir' },
					{ title: 'Tempat Lahir' },
					{ title: 'Tinggi' },
					{ title: 'Agama' },
					{ title: 'Status Pernikahan' },
				],
				modalShow: false,
				modalState: '',
				modalTitle: '',
				modalColor: '',
				modalContent: '',
				submited: false,
			}
		},
		beforeRouteEnter(to, from, next) {
			next(vm => vm.fetch());
		},
		created(){},
		watch: {
			formStat(value){
				if(value == 'success'){
					if(this.modelCuStat != 'success'){
						if(this.modelCuStat != 'success'){
							this.$store.dispatch('cu/getHeader');
						}
					}
				}
			},
			updateStat(value){
				this.modalShow = true;
				this.modalState = value;
				this.modalColor = '';

				if(value === "success"){
					this.modalTitle = this.updateResponse.message;
				}else{
					this.modalTitle = 'Oops terjadi kesalahan :(';
					this.modalContent = this.updateResponse;
				}
			},
    },
		methods: {
			fetch(){
				this.$store.dispatch(this.kelas + '/create');
			},
			fetchAktivis(params){
				this.$store.dispatch('aktivis/indexCu', [params,this.form.id_cu,'semua','aktif'])
				this.disableColumnCu(true);
			},
			changeCU(value){
				this.fetchAktivis(this.query);
			},
			disableColumnCu(value){
				this.columnData[4].disable = value;
			},
			selectedRow(item){
				this.selectedItem = item;
				this.form.id_aktivis = item.id;
				this.form.aktivis = item;
			},
			deleteSelected(){
				this.selectedItem = [];
				this.form.id_aktivis = '';
				this.form.aktivis = {};
			},
			hakForm(value){
				this.form.permission = value;
			},
			changeRole(id){
				this.$store.dispatch('loadRolePermission',id);
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
			},
			save() {
				if(this.currentUser.id_cu != 0){
					this.form.id_cu = this.currentUser.id_cu;
				}

				this.$validator.validateAll('form').then((result) => {
					if (result) {
						this.$store.dispatch(this.kelas + '/store', this.form);
						this.submited = false;
					}else{
						window.scrollTo(0, 0);
						this.submited = true;
					}
				});
			},
			back(){
				this.$router.push({name: this.kelas + 'Cu', params:{cu: this.currentUser.id_cu}});
			},
			modalTutup() {
				this.modalShow = false;

				if(this.updateStat == 'success'){
					this.back();
				}
			},
			modalBackgroundClick(){
				if(this.modalState === 'success'){
					this.modalTutup;
				}else if(this.modalState === 'loading'){
					// do nothing
				}else{
					this.modalShow = false
				}
			},
			processFile(event) {
				this.form.gambar = event.target.files[0]
			}
		},
		computed: {
			...mapGetters('auth',{
				currentUser: 'currentUser'
			}),
			...mapGetters('user',{
				form: 'data',
				formStat: 'dataStat',
				rules: 'rules',
				options: 'options',
				updateResponse: 'update',
				updateStat: 'updateStat'
			}),
			...mapGetters('aktivis',{
				itemData: 'dataS',
				itemDataStat: 'dataStatS'
			}),
			...mapGetters('cu',{
				modelCu: 'headerDataS',
				modelCuStat: 'headerDataStatS',
			})
		}
	}
</script>