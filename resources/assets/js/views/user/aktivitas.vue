<template>
	<div>
		<!-- Page header -->
		<page-header :title="title" :titleDesc="titleDesc" :titleIcon="titleIcon" :level="2" :level2Title="level2Title" @level2Back="back()"></page-header>
		
		<!-- page container -->
		<div class="page-content pt-0">
			<div class="content-wrapper">
				<div class="content">

					<!-- message -->
					<message v-if="activityStat === 'fail'" :title="'Oops terjadi kesalahan:'" :errorData="activity">
					</message>

					<!-- message -->
					<message v-if="itemDataStat === 'fail'" :title="'Oops terjadi kesalahan:'" :errorData="itemData">
					</message>
					
					<div class="card" v-if="itemDataStat == 'success'">
						<div class="card-body">
							<div class="media flex-column flex-sm-row mt-0 mb-3">
								<div class="mr-sm-3 mb-2 mb-sm-0">
									<img :src="'/images/aktivis/' + itemData.aktivis.gambar + '.jpg'" class="img-fluid img-preview rounded" v-if="itemData.aktivis && itemData.aktivis.gambar" >
									<img :src="'/images/no_image_man.jpg'" class="img-fluid img-preview rounded" v-else>
								</div>

								<div class="media-body">
									<div class="row">
										<div class="col-sm-6">
											<ul class="list list-unstyled mb-0">
												<li><b>Username:</b> {{ itemData.username }}</li>
												<li><b>Nama:</b> {{ itemData.aktivis? itemData.aktivis.name : '-' }}</li>
												<li><b>Email:</b> {{ itemData.aktivis? itemData.aktivis.email : '-' }}</li>
												<li><b>CU:</b> {{ itemData.cu ? itemData.cu.name : 'Puskopdit BKCU Kalimantan' }}</li>
												<li><b>Tingkat:</b> 
													<span v-if="itemData.aktivis && itemData.aktivis.pekerjaan_aktif" v-html="$options.filters.checkTingkatAktivis(itemData.aktivis.pekerjaan_aktif.tingkat)"></span>
													<span v-else>-</span>
												</li>
												<li><b>Jabatan:</b>
													<check-value :value="itemData.aktivis.pekerjaan_aktif.name" v-if="itemData.aktivis && itemData.aktivis.pekerjaan_aktif"></check-value>
													<span v-else>-</span>
												</li>
											</ul>
										</div>
										<div class="col-sm-6">
											<ul class="list list-unstyled mb-0">
												<li><b>Status:</b> 
													<span v-if="itemData.status > 0"> Aktif</span>
													<span v-else> Tidak Aktif</span>
												</li>
												<li><b>Login:</b> <span v-html="$options.filters.dateTime(itemData.login)"></span></li>
												<li><b>Tgl. Buat:</b> <span v-html="$options.filters.dateTime(itemData.created_at)"></span></li>
												<li><b>Tgl. Ubah:</b> <span v-html="$options.filters.dateTime(itemData.updated_at)"></span></li>
											</ul>
										</div>
									</div>
									
								</div>

							</div>
						</div>
					</div>

					<div v-else-if="itemDataStat == 'loading'">
						<div class="card">
							<div class="card-body">
								<h4>Mohon tunggu...</h4>
								<div class="progress">
									<div class="progress-bar progress-bar-info progress-bar-striped progress-bar-animated" style="width: 100%">
										<span class="sr-only">100% Complete</span>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div v-else>
						<div class="card">
							<div class="card-body">
								<h3>Oops terjadi kesalahan</h3>
							</div>
						</div>
					</div>

					<aktivitas :activity="activity" :activityStat="activityStat" @fetchAktivitas="fetchAktivitas"></aktivitas>				

				</div>
			</div>
		</div>
		

	</div>
</template>

<script>
	import { mapGetters } from 'vuex';
	import pageHeader from "../../components/pageHeader.vue";
	import message from "../../components/message.vue";
	import aktivitas from "./_component/aktivitas";
	import checkValue from '../../components/checkValue.vue';
	
	export default {
		name: 'UserIndex',
		components: {
			pageHeader,
			message,
			aktivitas,
			checkValue
		},
		data() {
			return {
				title: 'Aktivitas User',
				kelas: 'user',
				level2Title: 'User',
				titleDesc: 'Melihat aktivitas user',
				titleIcon: 'icon-eye2',
			}
		},
		beforeRouteEnter(to, from, next) {
			next(vm => vm.fetch());
		},
		watch: {
			itemDataStat(value){
				if(value === "success"){
					this.fetchAktivitas(1);
				}
			},
    },
		methods: {
			fetch(){
				this.$store.dispatch(this.kelas + '/edit',this.$route.params.id);	
			},
			fetchAktivitas(value){
				this.$store.dispatch(this.kelas + '/getActivity', [value, this.itemData.id]);
			},
			back(){
				if(this.itemData.id_cu){
					this.$router.push({name: this.kelas + 'Cu', params:{cu: this.itemData.id_cu}});
				}else{
					this.$router.push({name: this.kelas + 'Cu', params:{cu: this.currentUser.id_cu}});
				}
			},
		},
		computed:{
			...mapGetters('auth',{
				currentUser: 'currentUser'
			}),
			...mapGetters('user',{
				itemDataStat: 'dataStat',
				activity: 'dataS',
				activityStat: 'dataStatS',
			}),
		},
	}
</script>