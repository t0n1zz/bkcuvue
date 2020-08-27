<template>
	<div>
		<!-- header -->
		<page-header :title="title" :titleDesc="titleDesc" :titleIcon="titleIcon" :level="2" :level2Title="level2Title" :level2Route="kelas" @level2Back="back()"></page-header>

		<!-- content -->
		<div class="page-content pt-0">
			<div class="content-wrapper">
				<div class="content">
          <form-data :mode="'tambah'"></form-data>
				</div>
			</div>
		</div>

	</div>
</template>

<script>
	import { mapGetters } from 'vuex';
	import pageHeader from "../../components/pageHeader.vue";
	import formData from "./form.vue";

	export default {
		components: {
			pageHeader,
      formData,
		},
		data() {
			return {
				title: 'Tambah Kelompok Aset Tetap',
				titleDesc: 'Menambah kelompok aset tetap',
				titleIcon: 'icon-plus3',
        level2Title: 'Kelompok Aset Tetap',
        kelas: 'asetTetapKelompok'
			}
		},
		created(){},
		watch: {},
		methods: {
      back() {
				this.$router.push({name: this.kelas});
			},
    },
		computed: {
			...mapGetters('auth',{
				currentUser: 'currentUser'
			}),
		}
	}
</script>