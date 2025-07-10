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
							<th>Keterangan</th>
							<th>Nomor Sertifikat</th>
							</tr>
						</thead>
						<tbody>
							<tr v-for="(item, index) in selected.has_nomor" :key="index">
							<td>{{ item.peserta_non_aktivis.nama }}</td>
							<td>{{ item.peserta_non_aktivis.keterangan }}</td>
							<td>{{ item.nomor }}</td>
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
	export default {
		props: ['selected'],
		components: {
			appModal,
			message,
			formButton,
			
		},
		methods: {
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
			...mapGetters('sertifikatKegiatan',{
				rules: 'rules',
				options: 'options',
				
			})
		}
	}
</script>