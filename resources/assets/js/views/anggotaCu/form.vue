<template>
	<div>
		<!-- header -->
		<page-header :title="title" :titleDesc="titleDesc" :titleIcon="titleIcon" :level="2" :level2Title="level2Title"
		 :level2Route="kelas" @level2Back="back()"></page-header>

		<!-- content -->
		<div class="page-content pt-0">
			<div class="content-wrapper">
				<div class="content">

					<!-- create -->
					<div v-if="$route.meta.mode == 'create'">

						<!-- cari data -->
						<cari-data :itemDataStat="itemDataStat" :isBack="true" @cariData="cariData" @resetData="resetData" @back="back"></cari-data>

						<!-- data not exist -->
						<div class="alert bg-success text-white alert-styled-left " v-if="itemDataStat == 'fail'">
							<span class="font-weight-semibold">NIK tidak terdaftar di SIMO, maka silahkan menambahkan data anggota CU baru.
							</span>
						</div>

						<form-create v-if="itemDataStat == 'fail'" :nik="nik" :mode="'create_new'"></form-create>

						<!-- data exist -->
						<div v-if="itemDataStat == 'success'">
							
							<div class="alert bg-danger text-white alert-styled-left " v-if="itemData.status_jalinan == 1 ||itemData.status_jalinan == 2">
								<span class="font-weight-semibold" >Anggota ini sudah dinyatakan <b v-html="$options.filters.statusJalinan(itemData.status_jalinan)"></b>, maka tidak bisa dilakukan penambahan, pengubahan dan penghapusan data produk.
								</span>
							</div>

							<div class="alert bg-warning text-white alert-styled-left" v-else>
								<span class="font-weight-semibold">NIK sudah terdaftar di SIMO. Apabila ingin menambahkan anggota tersebut menjadi anggota cu maka silahkan tambahkan no. ba dan tgl. jadi anggota. 
								</span>
							</div>
						</div>

						<form-create v-if="itemDataStat == 'success'" :mode="'create_old'"></form-create>
						
					</div>

					<!-- edit -->
					<form-create v-if="$route.meta.mode == 'edit'" :mode="'edit'"></form-create>

				</div>
			</div>
		</div>

	</div>
</template>

<script>
	import {mapGetters} from 'vuex';
	import pageHeader from "../../components/pageHeader.vue";
	import appModal from '../../components/modal';
	import anggotaCuAPI from '../../api/anggotaCu.js';
	import Cleave from 'vue-cleave-component';
	import formCreate from "./create.vue";
	import cariData from "../../components/cariData.vue";

	export default {
		components: {
			pageHeader,
			appModal,
			formCreate,
			Cleave,
			cariData
		},
		data() {
			return {
				title: '',
				titleDesc: '',
				titleIcon: '',
				kelas: 'anggotaCu',
				level2Title: 'Anggota CU',
				nik: '',
				isEdit: false,
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
		created() {
			this.resetData();

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
			cariData(nik){
				this.nik = nik;
				this.$store.dispatch(this.kelas + '/cariData', nik);
			},
			showUbahData(){
				this.isEdit = true;
			},
			hideUbahData(){
				this.isEdit = false;
			},
			resetData(){
				this.$store.commit(this.kelas + '/setData',{});
				this.$store.commit(this.kelas + '/setDataStat','');
			},
			back(){
				if(this.currentUser.id_cu == 0){
					this.$router.push({name: this.kelas + 'Cu', params:{cu: 'semua'}});
				}else{
					this.$router.push({name: this.kelas + 'Cu', params:{cu: this.currentUser.id_cu}});
				}
			},
		},
		computed: {
			...mapGetters('auth', {
				currentUser: 'currentUser'
			}),
			...mapGetters('anggotaCu', {
				itemData: 'data',
				itemDataStat: 'dataStat'
			}),
		}
	}
</script>