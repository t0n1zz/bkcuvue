<template>
	<div>
		<!-- page-header -->
		<page-header :title="title" :titleDesc="titleDesc" :titleIcon="titleIcon" :level="level" :level2Title="level2Title" :level2Route="kelas" @level2Back="back()"></page-header>

		
		<!-- page container -->
		<div class="page-content pt-0">
			<div class="content-wrapper">
				<div class="content">

					<!-- message -->
					<message v-if="formStat === 'fail'" :title="'Oops terjadi kesalahan:'" :errorData="form">
					</message>

					<template v-if="formStat == 'success'">	
						<!-- navbar -->
						<div class="card">
							<div class="nav-tabs-responsive">
								<ul class="nav nav-tabs nav-tabs-solid  bg-light nav-justified mb-0">

									<li class="nav-item"><a href="#" class="nav-link" :class="{'active': tabName == 'info'}" @click.prevent="changeTab('info')"><i class="icon-menu7 mr-2"></i>
										Info
									</a></li>

									<li class="nav-item"><a href="#" class="nav-link" :class="{'active': tabName == 'skor'}" @click.prevent="changeTab('skor')"><i class="icon-equalizer mr-2"></i>
										Skor
									</a></li>
			
								</ul>
							</div>

						</div>

						<!-- info -->
						<transition enter-active-class="animated fadeIn" mode="out-in">
								<div v-show="tabName == 'info'">
									<!-- informasi umum -->
									<div class="card">
										<div class="card-header bg-white header-elements-inline">
											<h5 class="card-title">Voting | Status: <span v-html="$options.filters.checkStatus(form.status)"></span></h5>
											<div class="header-elements">
												<!-- status -->
												<button @click.prevent="modalOpen('status')" 	class="btn btn-light btn-icon mb-1 mr-1" v-if="currentUser.can && currentUser.can['update_voting']">
													<i class="icon-calendar5"></i> Status
												</button>
												<!-- reload -->
												<button type="button" class="btn btn-light btn-icon mb-1" @click.prevent="fetch()">
													<i class="icon-sync"></i>
												</button>
											</div>
										</div>
										<div class="card-body">
											<div class="row">
												<!-- nama -->
												<div class="col-md-6 form-group">
													<!-- title -->
													<h5>Nama:</h5>

													<!-- text -->
													<input type="text" name="name" class="form-control" v-model="form.name" disabled>
												</div>

												<!-- cu -->
												<div class="col-md-6 form-group" v-if="currentUser.id_cu == 0">
													<!-- title -->
													<h5>CU:</h5>

													<!-- text -->
													<input type="text" name="cu" class="form-control" v-model="form.cu.name" disabled v-if="form.cu">

													<input type="text" name="cu" class="form-control" value="PUSKOPCUINA" disabled v-else>
												</div>

												<!-- kegiatan -->
												<div class="col-md-6 form-group" v-if="form.id_kegiatan != 0">
													<!-- title -->
													<h5>Kegiatan:</h5>

													<!-- text -->
													<input type="text" name="name" class="form-control" v-model="form.kegiatan.name" disabled>
												</div>

												<div class="col-md-6 form-group" v-else>
													<!-- title -->
													<h5>Kegiatan:</h5>

													<!-- text -->
													<input type="text" name="name" class="form-control" v-model="form.name_kegiatan" disabled>
												</div>

												<!-- total suara -->
												<div class="col-md-6 form-group">
													<!-- title -->
													<h5>Total Suara:</h5>

													<!-- text -->
													<input type="text" name="suara" class="form-control" v-model="form.suara" disabled>
												</div>

												<!-- suara ok -->
												<div class="col-md-6 form-group">
													<!-- title -->
													<h5>Suara Masuk:</h5>

													<!-- text -->
													<input type="text" name="suara_ok" class="form-control" v-model="form.suara_ok" disabled>
												</div>

											</div>	
										</div>
									</div>

									<!-- pilihan -->
									
									<div class="card">
										<div class="card-header bg-white header-elements-inline">
											<h5 class="card-title">Pilihan</h5>
											<div class="header-elements">
											</div>
										</div>

										<data-table :items="form.pilihan" :columnData="columnDataPilihan" :itemDataStat="formStat">
											<template slot="item-desktop" slot-scope="props">
												<tr class="text-nowrap" v-if="props.item">
													<td>{{ props.index + 1 }}</td>
													<td>{{ props.item.name }}</td>
												</tr>
											</template>	
										</data-table>

									</div>

									<!-- suara -->
									<div class="card">
										<div class="card-header bg-white header-elements-inline">
											<h5 class="card-title">Suara</h5>
										<div class="header-elements">
												 <json-excel 
													class="btn bg-green-300 btn-icon mb-1"
													:data="excelSuara.data"
													:exportFields="excelSuara.fields" 
													:meta="excelSuara.meta" 
													:title="'Data Suara'" 
													:name="title + '.xls'"
													><i class="icon-file-excel"></i> Excel</json-excel>  
											</div>
										</div>

										<data-table :items="itemDataSuara" :columnData="columnDataSuara" :itemDataStat="itemDataSuaraStat">
											<template slot="item-desktop" slot-scope="props">
												<tr class="text-nowrap" v-if="props.item">
													<td>{{ props.index + 1 }}</td>
													<td>{{ props.item.link }}</td>
													<td>
														<span v-if="props.item.voting_pilihan_id" class="bg-orange-400 text-highlight"><i class="icon-check"></i></span>
														<span v-else class="bg-teal-300 text-highlight"><i class="icon-cross3"></i></span>
													</td>
													<td>
														<template v-if="currentUser.id_cu == 0">
															<button type="button" class="btn btn-light mb-1" @click.prevent="modalOpen('cu', props.item)" :disabled="form.suara_ok > 0">
																<i class="icon-rotate-ccw"></i> 
																<check-value :value="props.item.cu_name" v-if="props.item.cu_name"></check-value>
																<span v-else></span>
															</button>	
														</template>
														<span v-else></span>
													</td>
													<td>
														<a class="btn btn-light mb-1" :href="props.item.link" target="_blank">
															<i class="icon-copy3"></i> Buka
														</a>	
													</td>
												</tr>
											</template>	
										</data-table>

									</div>
								</div>
						</transition>	

						<!-- skor -->
						<transition enter-active-class="animated fadeIn" mode="out-in">
								<div v-show="tabName == 'skor'">
									<!-- skor -->
									<div class="card " v-if="form.pilihan">
										<div class="card-header bg-white header-elements-inline">
											<h5 class="card-title">Perolehan Skor</h5>
											<div class="header-elements">
												<span class="badge badge-success">
													Suara Masuk: {{ form.suara_ok }}
												</span> 
												&nbsp;
												<span class="badge badge-primary">
													Total Suara: {{ form.suara }}
												</span>
											</div>
										</div>
										<div class="card-body">
											<div v-for="(p, index) in formPilihan" :key="index">
												<div class="card card-body">
													<div class="row">
														<div class="col-sm-3 mb-1 mt-1">
															<b>{{ p.name }}</b>
														</div>
														<div class="col-sm-8 mb-1 mt-1">
															<div class="progress">
																<div class="progress-bar-striped bg-success" :style="{width: Math.round((p.skor / form.suara) * 100) + '%'}">
																	<span class="text-default font-size-lg">
																		&nbsp;
																		<b>{{ Math.round((p.skor / form.suara) * 100) + '%' }}</b>
																		&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; 
																	</span>
																</div>
															</div>	
														</div>
														<div class="col-sm-1 mb-1 mt-1">
															{{ p.skor }} / {{ form.suara }}
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
						</transition>
					</template>

					<div v-else-if="formStat == 'loading'">
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

				</div>
			</div>
		</div>

		<!-- modal -->
		<app-modal :show="modalShow" :state="modalState" :title="modalTitle" :button="modalButton" :content="modalContent" @tutup="modalTutup" @confirmOk="modalConfirmOk" @successOk="modalTutup" @failOk="modalTutup" @backgroundClick="modalTutup">
			
			<!-- title -->
			<template slot="modal-title">
				{{ modalTitle }}
			</template>

			<!-- form -->
			<template slot="modal-body1">
				<form-cu :kelas="kelas" :id="selectedSuara.id" :id_cu="selectedSuara.id_cu" 
				@tutup="modalTutup"></form-cu>
			</template>

		</app-modal>

	</div>
</template>

<script>
	import _ from 'lodash';
	import { mapGetters } from 'vuex';
	import pageHeader from "../../components/pageHeader.vue";
	import message from "../../components/message.vue";
	import dataTable from '../../components/datatable.vue';
	import { PusherAuth } from '../../helpers/pusherAuth.js';
	import jsonExcel from 'vue-json-excel';
	import checkValue from '../../components/checkValue.vue';
	import appModal from '../../components/modal';
	import formCu from "./formCu.vue";
	import Echo from 'laravel-echo';
	import Pusher from "pusher-js";
	
	export default {
		components: {
			pageHeader,
			message,
			dataTable,
			jsonExcel,
			checkValue,
			formCu,
			appModal
		},
		data() {
			return {
				title: 'Detail voting',
				titleDesc: 'Melihat detail data voting',
				titleIcon: 'icon-stack2',
				level: 2,
				level2Title: 'Voting',
				kelas: 'voting',
				tabName: 'info',
				columnDataPilihan:[
					{ title: 'No.' },
					{ title: 'Nama' },
				],
				columnDataSuara:[
					{ title: 'No.' },
					{ title: 'Link' },
					{ title: 'Memilih' },
					{ title: 'CU' },
					{ title: 'Buka' },
				],
				selectedSuara: {},
				itemDataSuara: [],
				itemDataSuaraStat: 'success',
				excelSuara: {
          fields: {
						link: "link",
						cu: "cu_name",
						pilihan: "voting_pilihan_id"
					},
          data: [],
          meta: [
            [{
              "key": "charset",
              "value": "utf-8"
            }]
          ]
        },
				state: '',
				modalShow: false,
				modalState: '',
				modalColor: '',
				modalTitle: '',
				modalContent: '',
				modalButton: '',
				formPilihan: ''
			}
		},
		created(){
			this.fetch();
		},
		mounted(){
			PusherAuth();
			window.Echo.private(`voting.channel.` + this.$route.params.id)
			.listen('VotingEvent',(data) => {  
				var p;
				for (p of this.form.pilihan) {
					if(p.id == data.voting_pilihan_id){
						p.skor = data.skor;
						this.form.suara_ok += 1;
						this.formPilihan = _.orderBy(this.form.pilihan, 'skor' ,['desc']);
					}
				}
			});
		},
		watch: {
			// check route changes
			$route(to, from) {
				this.fetch();
			},
			formStat(value){
				if(value === "success"){	
					var valSuara;
					this.itemDataSuara = [];
					for (valSuara of this.form.has_suara) {
						let formData2 = {};
						formData2.link = window.location.origin + '/admins/voting/pilih/' + valSuara.name;
						formData2.voting_pilihan_id = valSuara.voting_pilihan_id;

						if(valSuara.cu){
							formData2.cu_name = valSuara.cu.name;
						}else{
							formData2.cu_name = "";
						}
						formData2.id_cu = valSuara.id_cu;
						formData2.id = valSuara.id;
					
						this.itemDataSuara.push(formData2);
					}
					this.excelSuara.data = this.itemDataSuara;
					this.formPilihan = _.orderBy(this.form.pilihan, 'skor' ,['desc']);
				}
			},
			// when updating data
      updateStat(value) {
				this.modalState = value;
				this.modalButton = 'Ok';
				
				if(value == "success"){
					this.modalTitle = this.updateMessage.message;
					this.modalContent = '';
					this.fetch();
				}else if(value == "fail"){
					this.modalContent = this.updateMessage;
				}else{
					this.modalContent = '';
				}
      }
		},
		methods: {
			fetch(){
				this.$store.dispatch(this.kelas + '/edit', this.$route.params.id);
			},
			back(){
				this.$router.push({name: this.kelas, params:{cu: this.form.id_cu}});
			},
			changeTab(value){
				this.tabName = value;
			},
			modalOpen(state, selectedItem) {
				this.modalShow = true;
				this.state = state;

				if (state == 'cu') {
					this.selectedSuara = selectedItem;
					this.modalState = 'normal1';
					this.modalTitle = 'Ubah CU untuk link ' + selectedItem.link + ' ini?';
					this.modalColor = 'bg-primary';
				}else if (state == 'status') {
					this.modalState = 'confirm-tutup'; 
					if (this.form.status == 0) {
						this.modalTitle = 'Aktifkan ' + this.form.name + ' ?';
						this.modalButton = 'Iya, aktifkan';
					} else {
						this.modalTitle = 'Tidak aktifkan ' + this.form.name + ' ?';
						this.modalButton = 'Iya, tidak aktifkan';
					}
				}
			},
			modalTutup() {
				this.modalShow = false;
				this.$store.dispatch(this.kelas + '/resetUpdateStat');
			},
			modalConfirmOk() {
				if (this.state == "status"){
					this.$store.dispatch(this.kelas + '/updateStatus', [this.form.id, this.form.id_cu]);
				}
			},
		},
		computed: {
			...mapGetters('auth',{
				currentUser: 'currentUser'
			}),
			...mapGetters('voting',{
				form: 'data',
				formStat: 'dataStat',
				updateMessage: 'update',
				updateStat: 'updateStat'
			}),
		}
	}
</script>