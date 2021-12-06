<template>
	<div>
		<!-- message -->
		<message v-if="errors.any('formMateri') && submited" :title="'Oops, terjadi kesalahan'" :errorItem="errors.items">
		</message>
		<div class="row">
			<div class="col-sm-6">
				<button class="btn btn-light btn-block pb-2" @click.prevent="prev">
				<i class="icon-arrow-left13"></i></button>
			</div>
			<div class="col-sm-6">
				<button class="btn btn-light btn-block pb-2" @click.prevent="next">
				<i class="icon-arrow-right14"></i></button>
			</div>
			<div class="col-sm-12">
				<div class="card card-body text-center pb-1 pt-1 mb-2 mt-2">
					{{currentPage}} / {{pageCount}}
				</div>
			</div>
			<div class="col-sm-12">
				<pdf
					:src="'/files/pertemuan/' + this.selected.filename"
					@num-pages="pageCount = $event"
					@page-loaded="currentPage = $event"
					:page="page"
					style="border: 1px solid grey"
				></pdf>
			</div>
			<div class="col-sm-12">
				<div class="card card-body text-center pb-1 pt-1 mb-2 mt-2">
					{{currentPage}} / {{pageCount}}
				</div>
			</div>
			<div class="col-sm-6">
				<button class="btn btn-light btn-block pb-2" @click.prevent="prev">
				<i class="icon-arrow-left13"></i></button>
			</div>
			<div class="col-sm-6">
				<button class="btn btn-light btn-block pb-2" @click.prevent="next">
				<i class="icon-arrow-right14"></i></button>
			</div>
		</div>
		<!-- divider -->
    <hr>
      
		<!-- tombol desktop-->
		<div class="text-center d-none d-md-block">
			<button class="btn btn-light" @click.prevent="tutup">
				<i class="icon-cross"></i> Tutup</button>

			<button class="btn btn-warning" @click.prevent="downloadMateri">
				<i class="icon-file-download"></i> Unduh</button>
		</div>  

		<!-- tombol mobile-->
		<div class="d-block d-md-none">
			<button class="btn btn-warning btn-block pb-2" @click.prevent="downloadMateri">
				<i class="icon-file-download"></i> Unduh</button>

			<button class="btn btn-light btn-block pb-2" @click.prevent="tutup">
				<i class="icon-cross"></i> Tutup</button>
		</div> 

	</div>
</template>

<script>
	import { mapGetters } from 'vuex';
	import message from "../../components/message.vue";
	import FileSaver from 'file-saver';
	import pdf from 'vue-pdf';

	export default {
		props: ['selected'],
		components: {
			message,
			pdf,
		},
		data() {
			return {
				title: '',
				currentPage: 1,
				pageCount: 0,
				page: 1,
			}
		},
		created() {
		},
		watch: {
		},
		methods: {
			prev(){
				if(this.currentPage > 1){
					this.page--;
				}
			},
			next(){
				if(this.currentPage != this.pageCount){
					this.page++;
				}
			},
			downloadMateri(){
        axios.get('/api/download_folder/' + this.selected.filename + '/pertemuan', {
        responseType: 'blob'})
        .then(response => {
          FileSaver.saveAs(response.data, this.selected.filename)
        });
      },
			tutup() {
				this.$emit('tutup');
			}
		},
		computed: {
			...mapGetters('auth', {
				currentUser: 'currentUser'
			}),
		}
	}
</script>