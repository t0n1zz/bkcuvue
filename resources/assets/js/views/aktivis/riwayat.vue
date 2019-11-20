<template>
	<div>

		<!-- header -->
		<page-header :title="title" :titleDesc="titleDesc" :titleIcon="titleIcon" :level="3">
			<template slot="breadcrumb">
				<router-link :to="{ name:'dashboard' }" class="breadcrumb-item"><i class="icon-home4"></i> Dashboard </router-link>

				<a href="#" @click.prevent="back()" class="breadcrumb-item">Aktivis</a>

				<!-- <a href="#" @click.prevent="kembali()" class="breadcrumb-item" v-if="$route.meta.mode == 'create'">Tambah Aktivis</a> -->

				<span class="breadcrumb-item active">{{ title }}</span>
			</template>	
		</page-header>

		<!-- content -->
		<div class="page-content pt-0">
			<div class="content-wrapper ">
				<div class="content">
					<riwayat-content :id_aktivis="$route.params.id" :id_cu="$route.params.cu"></riwayat-content>
				</div>
			</div>
		</div>

	</div>
</template>

<script>
	import { mapGetters } from 'vuex';
	import pageHeader from "../../components/pageHeader.vue";	
	import riwayatContent from "./riwayatContent.vue";	

	export default {
		components: {
			pageHeader,
			riwayatContent
		},
		data() {
			return {
				title: 'Riwayat',
				titleDesc: 'Menambah atau mengubah riwayat yang dimiliki aktivis',
				titleIcon: 'icon-list2',
				kelas: 'aktivis',
			}
		},
		methods: {
			back(){
				if(this.currentUser.id_cu != 0){
					this.$router.push({name: this.kelas + 'Cu', params:{cu: this.currentUser.id_cu,  tingkat: 'semua'}});
				}else{
					this.$router.push({name: this.kelas + 'Cu', params:{cu:'semua', tingkat: 'semua'}});
				}
			},
		},
		computed:{
			...mapGetters('auth',{
				currentUser: 'currentUser'
			}),
		},
	}
</script>