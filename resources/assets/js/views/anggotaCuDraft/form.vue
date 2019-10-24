<template>
	<div>
		<!-- header -->
		<page-header :title="title" :titleDesc="titleDesc" :titleIcon="titleIcon" :level="2" :level2Title="level2Title"
		 :level2Route="kelas" @level2Back="back()"></page-header>

		<!-- content -->
		<div class="page-content pt-0">
			<div class="content-wrapper">
				<div class="content">

					<!-- edit -->
					<form-edit :mode="'edit'"></form-edit>

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
	import formEdit from "./edit.vue";

	export default {
		components: {
			pageHeader,
			appModal,
			formEdit,
			Cleave,
		},
		data() {
			return {
				title: '',
				titleDesc: '',
				titleIcon: '',
				kelas: 'anggotaCuDraft',
				level2Title: 'Anggota CU Draft',
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