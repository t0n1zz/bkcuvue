<template>
	<div>
		<!-- header -->
		<page-header :title="title" :titleDesc="titleDesc" :titleIcon="titleIcon" :level="2" :level2Title="level2Title" :level2Route="kelas" @level2Back="back()"></page-header>

		<!-- content -->
		<div class="page-content pt-0">
			<div class="content-wrapper">
				<div class="content">

					<!-- check nik -->
					<div v-if="$route.meta.mode == 'create'">
						<!-- cari data -->
						<cari-data :itemDataStat="itemDataStat" :isBack="true" @cariData="cariData" @resetData="resetData" @back="back"></cari-data>

						<!-- data not exist -->
						<div class="alert bg-success text-white alert-styled-left " v-if="itemDataStat == 'fail'">
							<span class="font-weight-semibold">
								No. KTP tidak terdaftar di SIMO, maka silahkan menambahkan data aktivis baru.
							</span>
						</div>

						<form-create v-if="itemDataStat == 'fail'" :nik="nik" :mode="'create_new'"></form-create>

						<!-- data exist -->
						<div v-if="itemDataStat == 'success'">

							<div class="alert bg-danger text-white alert-styled-left">
								<span class="font-weight-semibold">No. KTP sudah terdaftar di SIMO, maka silahkan melakukan pengubahan. Apabila anda ingin menambahkan pekerjaannya di CU anda maka silahkan ke bagian riwayat pekerjaan untuk menambahkan pekerjaannya.
								</span>
							</div>

						</div>

						<form-create v-if="itemDataStat == 'success'" :mode="'create_old'"></form-create>

					</div>

					<!-- edit -->
					<form-create v-if="$route.meta.mode == 'edit'" :mode="'edit'"></form-create>

					<!-- createedit -->
					<form-create v-if="$route.meta.mode == 'createEdit'" :mode="'createEdit'"></form-create>

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
	import cariData from "../../components/cariData.vue";
	
	export default {
		components: {
			pageHeader,
			formCreate,
			cariData,
			Cleave,
		},
		data() {
			return {
				title: '',
				titleDesc: '',
				titleIcon: '',
				kelas: 'aktivis',
				level2Title: 'Aktivis CU',
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
			this.resetData();
			if(this.$route.meta.mode === 'edit'){
				this.title = 'Ubah Identitas ' + this.level2Title;
				this.titleDesc = 'Mengubah Identitas ' + this.level2Title;
				this.titleIcon = 'icon-pencil5';
			}else{
				this.title = 'Tambah ' + this.level2Title;
				this.titleDesc = 'Menambah ' + this.level2Title;
				this.titleIcon = 'icon-plus3';
			}
		},
		methods: {
			cariData(nik){
				this.nik = nik;
				this.$store.dispatch(this.kelas + '/cariData', nik);
			},
			resetData(){
				this.$store.commit(this.kelas + '/setData',{});
				this.$store.commit(this.kelas + '/setDataStat','');
			},
			back(){
				this.$router.push({name: this.kelas + 'Cu', params:{cu: this.currentUser.id_cu, tingkat: 'semua'}});
			},
		},
		computed: {
			...mapGetters('auth',{
				currentUser: 'currentUser'
			}),
			...mapGetters('aktivis', {
				itemData: 'data',
				itemDataStat: 'dataStat'
			}),
		}
	}
</script>