<template>
	<div>

		<!-- header -->
		<page-header :title="title" :titleDesc="titleDesc" :titleIcon="titleIcon" :level="3">
			<template slot="breadcrumb">
				<router-link :to="{ name:'dashboard' }" class="breadcrumb-item"><i class="icon-home4"></i> Dashboard </router-link>
				<a href="#" @click.prevent="back()" class="breadcrumb-item">KUBN</a>
				<span class="breadcrumb-item active">{{ title }}</span>
			</template>	
		</page-header>

		<!-- content -->
		<div class="page-content pt-0">
			<div class="content-wrapper ">
				<div class="content">
					<!-- message -->
					<message v-if="itemDataStat === 'fail'" :title="'Oops terjadi kesalahan:'" :errorData="itemData">
					</message>

					<!-- informasi -->
					<div class="card">
						<div class="card-header bg-white">
							<h5 class="card-title">1. Informasi</h5>
						</div>
						<div class="card-body">
							<div class="row">

								<!-- gambar -->
								<div class="col-md-4">
									<div class="form-group">

										<!-- title -->
										<h5>Foto:</h5>

										<div class="card">
		
											<!-- image preview -->
											<div class="card-body text-center">
												<img :src="'/images/kubn/' + itemData.gambar + '.jpg'" class="img-fluid" v-if="itemData.gambar">
												<img :src="'/images/no_image.jpg'" class="img-fluid" v-else>
											</div>
										</div>

									</div>
								</div>

								<div class="col-md-8">
									<div class="row">

										<!-- name -->
										<div class="col-md-6">
											<div class="form-group">
												<!-- title -->
												<h5>Nama:</h5>
												<!-- text -->
												<input type="text" name="name" class="form-control" v-model="itemData.name" readonly>
											</div>
										</div>

										<!-- usaha -->
										<div class="col-md-6">
											<div class="form-group">
												<!-- title -->
												<h5>Usaha:</h5>
												<!-- text -->
												<input type="text" name="usaha" class="form-control" v-model="itemData.usaha.name" readonly v-if="itemData.usaha">
												<input type="text" name="usaha" class="form-control" readonly v-else>
											</div>
										</div>

										<!-- cu -->
										<div class="col-md-6">
											<div class="form-group">
												<!-- title -->
												<h5>CU:</h5>
												<!-- text -->
												<input type="text" name="cu" class="form-control" v-model="itemData.cu.name" readonly v-if="itemData.cu">
												<input type="text" name="cu" class="form-control" readonly v-else>
											</div>
										</div>

										<!-- tp -->
										<div class="col-md-6">
											<div class="form-group">
												<!-- title -->
												<h5>TP:</h5>
												<!-- text -->
												<input type="text" name="tp" class="form-control" v-model="itemData.tp.name" readonly v-if="itemData.tp">
												<input type="text" name="tp" class="form-control" readonly v-else>
											</div>
										</div>

										<!-- tanggal_berdiri -->
										<div class="col-md-6">
											<div class="form-group">
												<!-- title -->
												<h5>Tanggal Berdiri:</h5>
												<!-- text -->
												<input type="text" name="tanggal_berdiri" class="form-control" v-model="itemData.tanggal_berdiri" readonly>
											</div>
										</div>

										<!-- pinjaman -->
										<div class="col-md-6">
											<div class="form-group">
												<!-- title -->
												<h5>Pinjaman:</h5>
												<!-- text -->
												<cleave 
													v-model="itemData.jmlh_pinjaman" 
													class="form-control" 
													:options="cleaveOption.numeric"
													name="Pinjaman" 
													placeholder="Silahkan masukkan jumlah pinjaman"
													readonly></cleave>
											</div>
										</div>

										<!-- provinces -->
										<div class="col-md-6">
											<div class="form-group">
												<!-- title -->
												<h5>Provinsi:</h5>
												<!-- text -->
												<input type="text" name="provinces" class="form-control" v-model="itemData.provinces.name" readonly v-if="itemData.provinces">
												<input type="text" name="provinces" class="form-control" readonly v-else>
											</div>
										</div>

										<!-- regencies -->
										<div class="col-md-6">
											<div class="form-group">
												<!-- title -->
												<h5>Kabupaten:</h5>
												<!-- text -->
												<input type="text" name="regencies" class="form-control" v-model="itemData.regencies.name" readonly v-if="itemData.regencies">
												<input type="text" name="regencies" class="form-control" readonly v-else>
											</div>
										</div>

										<!-- districts -->
										<div class="col-md-6">
											<div class="form-group">
												<!-- title -->
												<h5>Kecamatan:</h5>
												<!-- text -->
												<input type="text" name="districts" class="form-control" v-model="itemData.districts.name" readonly v-if="itemData.districts">
												<input type="text" name="districts" class="form-control" readonly v-else>
											</div>
										</div>

										<!-- villages -->
										<div class="col-md-6">
											<div class="form-group">
												<!-- title -->
												<h5>Kelurahan:</h5>
												<!-- text -->
												<input type="text" name="villages" class="form-control" v-model="itemData.villages.name" readonly v-if="itemData.villages">
												<input type="text" name="villages" class="form-control" readonly v-else>
											</div>
										</div>

									</div>
								</div>

								
								<!-- keterangan -->
								<div class="col-md-12">
									<div class="form-group">

										<!-- title -->
										<h5>
											Keterangan:
										</h5>

										<!-- textarea -->
										<textarea rows="5" type="text" name="keterangan" class="form-control" placeholder="Silahkan masukkan keterangan" v-model="itemData.keterangan" readonly></textarea>

									</div>
								</div>

							</div>
						</div>
					</div>

					<div class="card">
						<div class="card-header bg-white">
							<h5 class="card-title">2. Anggota</h5>
						</div>
						<div class="card-body">
							<div class="row">
								<!-- tipe anggota -->
								<div class="col-md-12">
									<div class="form-group">
										<!-- title -->
										<h5>Tipe Anggota:</h5>
										<!-- text -->
										<input type="text" name="tipe_anggota" class="form-control" v-model="itemData.tipe_anggota" readonly>
									</div>
								</div>

								<div class="col-md-12" v-if="itemData.tipe_anggota == 'manual'">
									<div class="form-group">
										<!-- title -->
										<h5>Jmlh. Anggota:</h5>
										<!-- text -->
										<input type="text" name="jmlh_anggota" class="form-control" v-model="itemData.jmlh_anggota" readonly>
									</div>
								</div>
								
							</div>
						</div>

						<data-table :items="itemDataAnggota" :columnData="columnDataAnggota" :itemDataStat="itemDataStatAnggota" v-if="itemData.tipe_anggota == 'integrasi'">
							<template slot="item-desktop" slot-scope="props">
								<tr :class="{ 'bg-info': selectedItemAnggota.id == props.item.id }" class="text-nowrap" @click="selectedRowAnggota(props.item)" v-if="props.item">
									<td>{{ props.index + 1 }}</td>
									<td>
										<img :src="'/images/anggotaCu/' + props.item.gambar + 'n.jpg'" width="35px" class="img-rounded img-fluid wmin-sm" v-if="props.item.gambar">
										<img :src="'/images/no_image.jpg'" width="35px" class="img-rounded img-fluid wmin-sm" v-else>
									</td>
									<td>{{ props.item.anggota_cu ? props.item.anggota_cu.no_ba : '-' }}</td>
									<td>{{ props.item.anggota_cu ? props.item.anggota_cu.name : '-' }}</td>
									<td>{{ props.item.anggota_cu ? props.item.anggota_cu.kelamin : '-' }}</td>
									<td>{{ props.item.jabatan }}</td>
									<td>{{ props.item.tanggal_mulai }}</td>
									<td>{{ props.item.tanggal_selesai }}</td>
									<td>{{ props.item.deskripsi }}</td>
								</tr>
							</template>	
						</data-table>

					</div>

					<!-- diklat -->
					<div class="card">
						<div class="card-header bg-white">
							<h5 class="card-title">3. Diklat</h5>
						</div>

						<data-table :items="itemDataDiklat" :columnData="columnDataDiklat" :itemDataStat="itemDataStatDiklat">
							<template slot="item-desktop" slot-scope="props">
								<tr :class="{ 'bg-info': selectedItemDiklat.id == props.item.id }" class="text-nowrap" @click="selectedRowDiklat(props.item)" v-if="props.item">
									<td>{{ props.index + 1 }}</td>
									<td>{{ props.item.name }}</td>
									<td>{{ props.item.tanggal_mulai }}</td>
									<td>{{ props.item.tanggal_selesai }}</td>
									<td>{{ props.item.fasilitator }}</td>
									<td>{{ props.item.tempat }}</td>
									<td>{{ props.item.keterangan }}</td>
								</tr>
							</template>	
						</data-table>

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
	import Cleave from 'vue-cleave-component';
	import checkValue from '../../components/checkValue.vue';
	import dataTable from '../../components/datatable.vue';
	import appModal from '../../components/modal';

	export default {
		components: {
			pageHeader,
			message,
			Cleave,
			checkValue,
			dataTable,
			appModal
		},
		data() {
			return {
				title: 'Detail KUBn',
				titleDesc: 'Detail informasi KUBn',
				titleIcon: 'icon-users4',
				kelas: 'kubn',
				cleaveOption: {
          numeric: {
            numeral: true,
            numeralThousandsGroupStyle: 'thousand',
            numeralDecimalScale: 2,
            numeralDecimalMark: ',',
            delimiter: '.'
          }
				},
				selectedItemAnggota: {},
				selectedItemDiklat: {},
				formAnggota: {},
				formDiklat: {},
				columnDataAnggota:[
					{ title: 'No.' },
					{ title: 'Foto' },
					{ title: 'No. Ba' },
					{ title: 'Nama' },
					{ title: 'Gender' },
					{ title: 'Jabatan' },
					{ title: 'Tgl. Mulai' },
					{ title: 'Tgl. Selesai' },
					{ title: 'Keterangan' },
				],
				columnDataDiklat:[
					{ title: 'No.' },
					{ title: 'Nama Diklat' },
					{ title: 'Tgl. Mulai' },
					{ title: 'Tgl. Selesai' },
					{ title: 'Fasilitator' },
					{ title: 'Tempat' },
					{ title: 'Keterangan' },
				],
				cancelTitle: 'Tutup',
				cancelIcon: 'icon-cross',
				cancelState: 'methods',
				modalShow: false,
				modalState: '',
				modalTitle: '',
				modalColor: '',
				modalContent: '',
				modalSize: 'modal-lg',
				modalImageShow: false,
				modalImageContent: '',
				submited: false,
			}
		},
		beforeRouteEnter(to, from, next) {
			next(vm => vm.fetch());
		},
		methods: {
			fetch(){
				this.$store.dispatch(this.kelas + '/edit',this.$route.params.id);	
				this.$store.dispatch(this.kelas + '/indexAnggota',this.$route.params.id);	
				this.$store.dispatch(this.kelas + '/indexDiklat',this.$route.params.id);	
			},
			selectedRowAnggota(item){
				this.selectedItemAnggota = item;
			},
			selectedRowDiklat(item){
				this.selectedItemDiklat = item;
			},
			back(){
				if(this.currentUser.id_cu != 0){
					this.$router.push({name: this.kelas + 'Cu', params:{cu: this.currentUser.id_cu}});
				}else{
					this.$router.push({name: this.kelas + 'Cu', params:{cu:'semua'}});
				}
			},
		},
		computed:{
			...mapGetters('auth',{
				currentUser: 'currentUser'
			}),
			...mapGetters('kubn',{
				itemData: 'data',
				itemDataStat: 'dataStat',
				itemDataAnggota: 'dataS2',
				itemDataStatAnggota: 'dataStatS2',
				itemDataDiklat: 'dataS3',
				itemDataStatDiklat: 'dataStatS3',
				rules: 'rules',
				options: 'options',
				updateResponse: 'update',
				updateStat: 'updateStat'
			}),
		},
	}
</script>