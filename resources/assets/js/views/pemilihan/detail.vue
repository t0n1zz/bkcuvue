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
						<!-- informasi umum -->
						<div class="card">
							<div class="card-header bg-white">
								<h5 class="card-title">Info Pemilihan</h5>
							</div>
							<div class="card-body">
								<div class="row">
									<!-- nama -->
									<div class="col-md-12 form-group">
										<!-- title -->
										<h5>Nama:</h5>

										<!-- text -->
										<input type="text" name="name" class="form-control" v-model="form.name" disabled>
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

						<!-- calon -->
						<div class="card">
							<div class="card-header bg-white">
								<h5 class="card-title">Calon</h5>
							</div>

							<data-table :items="itemDataCalon" :columnData="columnDataCalon" :itemDataStat="itemDataCalonStat">
								<template slot="item-desktop" slot-scope="props">
									<tr class="text-nowrap" v-if="props.item">
										<td>{{ props.index + 1 }}</td>
										<td>
											<img :src="'/images/aktivis/' + props.item.gambar + 'n.jpg'" width="35px" class="img-rounded img-fluid wmin-sm" v-if="props.item.gambar">
											<img :src="'/images/no_image.jpg'" width="35px" class="img-rounded img-fluid wmin-sm" v-else>
										</td>
										<td>{{ props.item.name }}</td>
										<td>{{ props.item.tanggal_lahir }}</td>
										<td>{{ props.item.tempat_lahir }}</td>
										<td>{{ props.item.status }}</td>
										<td>{{ props.item.pendidikan }}</td>
									</tr>
								</template>	
							</data-table>

						</div>

						<!-- suara -->
						<div class="card">
							<div class="card-header bg-white">
								<h5 class="card-title">Suara</h5>
							</div>

							<data-table :items="itemDataSuara" :columnData="columnDataSuara" :itemDataStat="itemDataSuaraStat">
								<template slot="item-desktop" slot-scope="props">
									<tr class="text-nowrap" v-if="props.item">
										<td>{{ props.index + 1 }}</td>
										<td>{{ props.item.link }}</td>
										<td>
											<a class="btn btn-light mb-1" :href="props.item.link" target="_blank">
												<i class="icon-copy3"></i> Buka
											</a>	
										</td>
									</tr>
								</template>	
							</data-table>

						</div>

						<!-- skor -->
						<div class="card " v-if="form.calon">
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
								<div v-for="(p, index) in form.calon" :key="index">
									<div class="card card-body">
										<div class="row">
											<div class="col-sm-3 mb-1 mt-1">
												<b>{{ p.name }}</b>
											</div>
											<div class="col-sm-8 mb-1 mt-1">
												<div class="progress">
													<div class="progress-bar-striped bg-success" :style="{width: Math.round((p.pivot.skor / form.suara) * 100) + '%'}">
														<span class="text-default font-size-lg">
															&nbsp;
															<b>{{ Math.round((p.pivot.skor / form.suara) * 100) + '%' }}</b>
															&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; 
														</span>
													</div>
												</div>	
											</div>
											<div class="col-sm-1 mb-1 mt-1">
												{{ p.pivot.skor }} / {{ form.suara }}
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
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

	</div>
</template>

<script>
	import { mapGetters } from 'vuex';
	import pageHeader from "../../components/pageHeader.vue";
	import message from "../../components/message.vue";
	import dataTable from '../../components/datatable.vue';
	
	export default {
		components: {
			pageHeader,
			message,
			dataTable,
		},
		data() {
			return {
				title: 'Detail Pemilihan PUSKOPCUINA',
				titleDesc: 'Melihat detail data pemilihan PUSKOPCUINA',
				titleIcon: 'icon-quill4',
				level: 2,
				level2Title: 'Pemilihan',
				kelas: 'pemilihan',
				columnDataCalon:[
					{ title: 'No.' },
					{ title: 'Foto' },
					{ title: 'Nama' },
					{ title: 'Tanggal Lahir' },
					{ title: 'Tempat Lahir' },
					{ title: 'Status' },
					{ title: 'Pendidikan' },
				],
				itemDataCalon: [],
				itemDataCalonStat: 'success',
				columnDataSuara:[
					{ title: 'No.' },
					{ title: 'Link' },
					{ title: 'Buka' },
				],
				itemDataSuara: [],
				itemDataSuaraStat: 'success',
			}
		},
		created(){
			this.fetch();
		},
		watch: {
			// check route changes
			$route(to, from) {
				this.fetch();
			},
			formStat(value){
				if(value === "success"){	
					var valCalon;
					for (valCalon of this.form.calon) {
						let formData = {};
						formData.aktivis_id = valCalon.id;
						formData.name = valCalon.name;
						formData.gambar = valCalon.gambar;
						formData.tanggal_lahir = valCalon.tanggal_lahir;
						formData.tempat_lahir = valCalon.tempat_lahir;
						formData.status = valCalon.status;

						if(valCalon.pendidikan_tertinggi){
							formData.pendidikan = valCalon.pendidikan_tertinggi.tingkat + ' ' + valCalon.pendidikan_tertinggi.name
						}else{
							formData.pendidikan = "";
						}
					
						this.itemDataCalon.push(formData);
					}

					var valSuara;
					for (valSuara of this.form.has_suara) {
						let formData2 = {};
						formData2.link = window.location.origin + '/admins/pilih/' + valSuara.name;
					
						this.itemDataSuara.push(formData2);
					}
				}
			},
		},
		methods: {
			fetch(){
				this.$store.dispatch(this.kelas + '/edit', this.$route.params.id);
			},
			back(){
				this.$router.push({name: this.kelas });
			},
		},
		computed: {
			...mapGetters('pemilihan',{
				form: 'data',
				formStat: 'dataStat',
			}),
		}
	}
</script>