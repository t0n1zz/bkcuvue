<template>
	<div>
		<form @submit.prevent="save">
			<template v-for="(materi, index) in itemNilai">
				<div class="form-group" :key="index">
					<h5>{{ materi.nama }}</h5>

					<input type="text" name="nilai" class="form-control" placeholder="Silahkan masukkan nilai" v-model="materi.jumlah_nilai">
				</div>
			</template>

		<hr>
		<!-- tombol desktop-->
		<div class="text-center d-none d-md-block">
			<button type="button" class="btn btn-light" @click.prevent="tutup">
				<i class="icon-cross"></i> Tutup</button>

			<button type="submit" class="btn btn-primary">
				<i class="icon-floppy-disk"></i> Simpan</button>
		</div>  

		<!-- tombol mobile-->
		<div class="d-block d-md-none">
			<button type="submit" class="btn btn-primary btn-block pb-2">
				<i class="icon-floppy-disk"></i> Simpan</button>

			<button type="button" class="btn btn-light btn-block pb-2" @click.prevent="tutup">
				<i class="icon-cross"></i> Tutup</button>
		</div>

		</form> 

	</div>
</template>

<script>
	import { mapGetters } from 'vuex';
	import checkValue from '../../components/checkValue.vue';
	import DataViewer from '../../components/dataviewer2.vue';
	import message from "../../components/message.vue";

	export default {
		props: ['selected'],
		components: {
			DataViewer,
			checkValue,
			message
		},
		data() {
			return {
				title: '',
				kelas: 'nilai',
				selectedItem: [],
				submited: false,
			}
		},
		created(){
			this.fetch();
		},
		methods: {
			fetch(){
				this.$store.dispatch('kegiatanBKCU/editNilai', [this.selected.id, this.selected.kegiatan_id]);
			},
			save(){
				this.$store.dispatch('kegiatanBKCU/saveNilai', [this.selected.id, this.itemNilai]);
			},
			tutup(){
				this.$emit('tutup');
			}
		},
		computed: {
			...mapGetters('auth',{
				currentUser: 'currentUser'
			}),
			...mapGetters('kegiatanBKCU', {
				itemNilai: 'data4',
				itemNilaiStat: 'dataStat4',
			}),
		}
	}
</script>