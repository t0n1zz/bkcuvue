<template>
	<div>
		<!-- header -->
		<page-header :title="title" :titleDesc="titleDesc" :titleIcon="titleIcon" :level="2" :level2Title="level2Title" :level2Route="kelas" @level2Back="back()"></page-header>

		<!-- content -->
		<div class="page-content pt-0">
			<div class="content-wrapper">
				<div class="content">

					<!-- check nik -->
					<div class="card" v-if="$route.meta.mode == 'create'">
						<div class="card-body">	
							<div class="row">
								<div class="col-12">
									<h6>
										Silahkan masukkan NIK aktivis untuk memastikan apakah data aktivis dengan NIK tersebut sudah terdaftar di SIMO
									</h6>
								</div>
								<div class="col-12 pb-2">
									<!-- text -->
									<cleave 
										name="nik"
										v-model="nik" 
										class="form-control" 
										:options="cleaveOption.number16"
										placeholder="Silahkan masukkan no KTP"
										v-validate="'required'" data-vv-as="No. KTP" :disabled="isNew"></cleave>
								</div>

								<div class="col-4">
									<div class="row">
										<div class="col-6 pb-2">
											<button class="btn btn-primary btn-block" @click.prevent="cariData"  :disabled="nik == ''"><i class="icon-search4"></i> Cari</button>
										</div>
										<div class="col-6 pb-2" v-if="itemDataStat != ''">
											<button class="btn btn-warning btn-block" @click.prevent="resetData"><i class="icon-reset"></i> Reset pencarian</button>
										</div>
									</div>
									
								</div>

								<!-- loading -->
								<div class="col-12" v-if="itemDataStat == 'loading'">
									<hr/>
									<div class="progress">
										<div class="progress-bar progress-bar-info progress-bar-striped progress-bar-animated" style="width: 100%">
											<span class="sr-only">100% Complete</span>
										</div>
									</div>
								</div>
							</div>
						</div>

					</div>

					<!-- data exist -->
					<div class="alert bg-info text-white alert-styled-left alert-dismissible" v-if="Object.keys(itemData).length != 0">
						<span class="font-weight-semibold">NIK sudah terdaftar di SIMO, maka silahkan melakukan pengubahan. Apabila anda ingin menambahkan pekerjaannya di CU anda maka silahkan ke bagian riwayat pekerjaan untuk menambahkan pekerjaannya.
						</span>
					</div>

					<!-- data not exits -->
					<div class="alert bg-info text-white alert-styled-left alert-dismissible" v-if="itemDataStat == 'success' && Object.keys(itemData).length == 0">
						<span class="font-weight-semibold">NIK tidak terdaftar di SIMO, maka silahkan menambahkan data aktivis baru.
						</span>
					</div>

					<div v-if="$route.meta.mode == 'create'">
						<form-create v-if="isNew" :nik="nik"></form-create>
						<form-edit v-if="itemDataStat == 'success' && !isNew" :mode="'props'" :id_props="itemData.id"></form-edit>
					</div>
					
					<form-edit v-if="$route.meta.mode == 'edit'" :mode="'local'"></form-edit>

				</div>
			</div>
		</div>


	</div>
</template>

<script>
	import { mapGetters } from 'vuex';
	import pageHeader from "../../components/pageHeader.vue";
	import message from "../../components/message.vue";
	import aktivisAPI from '../../api/aktivis.js';
	import Cleave from 'vue-cleave-component';
	import formCreate from "./create.vue";	
	import formEdit from "./edit.vue";	
	
	export default {
		components: {
			pageHeader,
			formCreate,
			formEdit,
			Cleave,
		},
		data() {
			return {
				title: '',
				titleDesc: '',
				titleIcon: '',
				kelas: 'aktivis',
				level2Title: 'Aktivis CU',
				isNew: false,
				itemData: {},
				itemDataStat: '',
				nik: '',
				cleaveOption: {
          number16: {
            numeral: true,
            numeralIntegerScale: 16,
            numeralDecimalScale: 0,
						stripLeadingZeroes: false,
						delimiter: ''
					},
				},
			}
		},
		created(){
			if(this.$route.meta.mode === 'edit'){
				this.title = 'Ubah ' + this.level2Title;
				this.titleDesc = 'Mengubah ' + this.level2Title;
				this.titleIcon = 'icon-pencil5';
			}else{
				this.title = 'Tambah ' + this.level2Title;
				this.titleDesc = 'Menambah ' + this.level2Title;
				this.titleIcon = 'icon-plus3';
			}
		},
		methods: {
			cariData(){
				this.itemDataStat = 'loading';
				this.isNew = false;

				aktivisAPI.cariData(this.nik)
        .then((response) => {
					if(response.data.model){
						this.itemData = response.data.model;
					}else{
						this.itemData = {};
						this.isNew = true;
					}
					this.itemDataStat = 'success';
        })
        .catch((error) => {
					this.itemData = error.response;
          this.itemDataStat = 'fail';
				});
			},
			resetData(){
				this.nik = '';
				this.itemData = {};
				this.isNew = false;
				this.itemDataStat = '';
			},
			back(){
				this.$router.push({name: this.kelas + 'Cu', params:{cu: this.currentUser.id_cu, tingkat: 'semua'}});
			},
		},
		computed: {
			...mapGetters('auth',{
				currentUser: 'currentUser'
			}),
		}
	}
</script>