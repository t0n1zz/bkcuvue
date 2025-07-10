<template>
	<div>
		<form enctype="multipart/form-data">
      <!-- nama -->
			<div class="form-group">
				<div class="row">
					<table class="table table-bordered">
						<thead class="thead-light">
							<tr>
							<th>Nama</th>
							<th>Nomor Sertifikat</th>
							</tr>
						</thead>
						<tbody v-if="this.mode == 'panitia'">
							<tr v-for="(panitia, index) in itemPanitia" :key="index">
							<td>{{ panitia.name }}</td>
							<td>{{ panitia.sertifikat_nomor }}</td>
							</tr>
						</tbody>
						<tbody v-else>
							<tr v-for="(peserta, index) in pesertaList" :key="index">
							<td>{{ peserta.nama_sertifikat }}</td>
							<td>{{ peserta.sertifikat_nomor}}</td>
							</tr>
						</tbody>
					</table>
				</div>
				
			</div>

      <!-- divider -->
      <hr>
      
      <!-- tombol desktop-->
      <div class="text-center d-none d-md-block">
        <button class="btn btn-light" @click.prevent="tutup">
          <i class="icon-cross"></i> Tutup</button>
      </div>  

      <!-- tombol mobile-->
      <div class="d-block d-md-none">
        <button class="btn btn-light btn-block pb-2" @click.prevent="tutup">
          <i class="icon-cross"></i> Tutup</button>
      </div> 
    </form>	

	</div>
</template>

<script>
	import { mapGetters } from 'vuex';
	import _ from 'lodash';
	import message from "../../components/message.vue";
	import formButton from "../../components/formButton.vue";
	import appModal from '../../components/modal';
	import { update } from 'lodash';
	export default {
		props: ['item','mode','kelas','itemDataPanitia'],
		components: {
			appModal,
			message,
			formButton,
			
	},
	data() {
	return {
		pesertaList: [],
		queryPesertaTerdaftar: {
				order_column: "created_at",
				order_direction: "asc",
				filter_match: "and",
				limit: 1000,
				page: 1
		},
		itemPanitia: []
		}
	},
	created() {
		this.fetch(this.queryPesertaTerdaftar);	
	},
	watch: {
		itemDataPanitia: {
			immediate: true,
			handler(val) {
				if (Array.isArray(val)) {
					this.itemPanitia = _.cloneDeep(val).map(panitia => {
						const panitiaBaru = { ...panitia };panitiaBaru.sertifikat_nomor = panitia.isGetSertifikat == 0
							? '-'
							: panitia.nomor || '-';

						return panitiaBaru;
					});
				}
			}
		},
		'itemDataPesertaTerdaftar.data': {
			immediate: true,
			handler(val) {
				if (Array.isArray(val)) {
					this.pesertaList = val.map(peserta => {
						const sertifikatNomor = peserta?.isGetSertifikat === 0
							? '-'
							: peserta?.sertifikat_generate?.nomor || '-';

						return {
							...peserta,
							sertifikat_nomor: sertifikatNomor,
							nama_sertifikat: peserta?.name_sertifikat || '-'
						};
					});
				}
			}
		}
	},
	methods: {
		fetch(params) {
			this.$store.dispatch(this.kelas + '/indexPeserta', [params, this.item.id]);			
		},
			modalBackgroundClick(){
				if(this.modalState === 'success'){
					this.modalTutup;
				}else if(this.modalState === 'loading'){
					// do nothing
				}else{
					this.modalShow = false
				}
			},
			tutup() {
				this.localMode = ''; 
				this.$emit('tutup');
			},
			
		},
		computed: {
			...mapGetters('auth', {
				currentUser: 'currentUser'
			}),
			...mapGetters('kegiatan',{
				rules: 'rules',
				options: 'options',
				
			}),
			...mapGetters('kegiatanBKCU', {
				itemDataPesertaTerdaftar: 'dataS',
				itemDataPesertaTerdaftarStat: 'dataStatS'
			}),
		}
	}
</script>