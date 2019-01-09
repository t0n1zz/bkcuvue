<template>
	<div>

		<form @submit.prevent="save" enctype="multipart/form-data" data-vv-scope="form">

						<!-- identitas -->
						<div class="card">
							<div class="card-header bg-white">
								<h5 class="card-title">1. Identitas</h5>
							</div>
							<div class="card-body">
									
								<form-identitas :form="form"></form-identitas>

							</div>
						</div>

						<!-- lokasi -->
						<div class="card">
							<div class="card-header bg-white">
								<h5 class="card-title">2. Alamat & Kontak</h5>
							</div>
							<div class="card-body">

								<form-lokasi :form="form"></form-lokasi>

							</div>
						</div>

						<!-- keluarga -->
						<div class="card" v-if="$route.meta.mode == 'create' && form.keluarga">
							<div class="card-header bg-white">
								<h5 class="card-title">3. Keluarga</h5>
							</div>
							<div class="card-body">
								<div class="row">

									<!-- ayah -->
									<div class="col-md-4">
										<div class="form-group" :class="{'has-error' : errors.has('form.keluarga.ayah')}">

											<!-- title -->
											<h6 :class="{ 'text-danger' : errors.has('form.keluarga.ayah')}">
												<i class="icon-cross2" v-if="errors.has('form.keluarga.ayah')"></i>
												Ayah:</h6>

											<!-- text -->
											<input type="text" name="ayah" class="form-control" placeholder="Silahkan masukkan nama ayah" v-validate="'required'" data-vv-as="Ayah" v-model="form.keluarga.ayah">

											<!-- error message -->
											<small class="text-muted text-danger" v-if="errors.has('form.keluarga.ayah')">
												<i class="icon-arrow-small-right"></i> {{ errors.first('form.keluarga.ayah') }}
											</small>
											<small class="text-muted" v-else>&nbsp;</small>
										</div>
									</div>

									<!-- ibu -->
									<div class="col-md-4">
										<div class="form-group" :class="{'has-error' : errors.has('form.keluarga.ibu')}">

											<!-- title -->
											<h6 :class="{ 'text-danger' : errors.has('form.keluarga.ibu')}">
												<i class="icon-cross2" v-if="errors.has('form.keluarga.ibu')"></i>
												Ibu:</h6>

											<!-- text -->
											<input type="text" name="ibu" class="form-control" placeholder="Silahkan masukkan nama ibu" v-validate="'required'" data-vv-as="Ibu" v-model="form.keluarga.ibu">

											<!-- error message -->
											<small class="text-muted text-danger" v-if="errors.has('form.keluarga.ibu')">
												<i class="icon-arrow-small-right"></i> {{ errors.first('form.keluarga.ibu') }}
											</small>
											<small class="text-muted" v-else>&nbsp;</small>
										</div>
									</div>

									<!-- pasangan -->
									<div class="col-md-4" v-if="form.status == 'Menikah' || form.status == 'Duda/Janda'">
										<div class="form-group" :class="{'has-error' : errors.has('form.keluarga.pasangan')}">

											<!-- title -->
											<h6 :class="{ 'text-danger' : errors.has('form.keluarga.pasangan')}">
												<i class="icon-cross2" v-if="errors.has('form.keluarga.pasangan')"></i>
												Pasangan:</h6>

											<!-- text -->
											<input type="text" name="pasangan" class="form-control" placeholder="Silahkan masukkan nama pasangan" v-validate="'required'" data-vv-as="Pasangan" v-model="form.keluarga.pasangan">

											<!-- error message -->
											<small class="text-muted text-danger" v-if="errors.has('form.keluarga.pasangan')">
												<i class="icon-arrow-small-right"></i> {{ errors.first('form.keluarga.pasangan') }}
											</small>
											<small class="text-muted" v-else>&nbsp;</small>
										</div>
									</div>
									
									<!-- anak -->
									<div class="col-md-4" v-if="form.status == 'Menikah' || form.status == 'Duda/Janda'" v-for="(anak,index) in formAnak">
										<div class="form-group">

											<!-- title -->
											<h6>Anak {{ index + 1}}:</h6>

											<div class="input-group">
												<!-- text -->
												<input type="text" name="anak" class="form-control" placeholder="Silahkan masukkan nama anak" v-model="anak.value">
												
												<div class="input-group-btn">
													<button class="btn btn-light" v-tooltip:top="'Hapus anak '" @click.prevent="removeAnak(index)">
														<i class="icon-cross"></i>
													</button>
												</div>
											</div>

											<small class="text-muted">&nbsp;</small>
										</div>
									</div>

									<!-- punya anak -->
									<div class="col-md-12" v-if="form.status == 'Menikah' || form.status == 'Duda/Janda'">
										<button class="btn btn-light btn-block" @click.prevent="addAnak()"><i class="icon-plus3"></i> 
											<span v-if="formAnak.length == 0">Punya Anak</span>
											<span v-else>Tambah Anak</span>
										</button>
									</div>
								</div>	
							</div>
						</div>
						
						<!-- anggota cu -->
						<div class="card" v-if="$route.meta.mode == 'create' && form.anggota_cu">
							<div class="card-header bg-white">
								<h5 class="card-title">4. Anggota CU</h5>
							</div>
							<div class="card-body">

									<form-anggota-cu :form="form" :modelCu="modelCu"></form-anggota-cu>

							</div>
						</div>


						<!-- pekerjaan -->
						<div class="card" v-if="$route.meta.mode == 'create' && form.pekerjaan">
							<div class="card-header bg-white">
								<h5 class="card-title">5. Jabatan </h5>
							</div>
							<div class="card-body">

									<form-pekerjaan :form="form" :modelCu="modelCu" :modelTp="modelTp"></form-pekerjaan>

							</div>
						</div>

						<!-- pendidikan -->
						<div class="card" v-if="$route.meta.mode == 'create' && form.pendidikan">
							<div class="card-header bg-white">
								<h5 class="card-title">6. Pendidikan</h5>
							</div>
							<div class="card-body">

									<form-pendidikan :form="form"></form-pendidikan>

							</div>
						</div>

						<!-- organisasi -->
						<div class="card" v-if="$route.meta.mode == 'create' && form.organisasi">
							<div class="card-header bg-white">
								<h5 class="card-title">7. Organisasi</h5>
							</div>
							<div class="card-body">

									<form-organisasi :form="form" :isAktif="true"></form-organisasi>

							</div>
						</div>

						<!-- form info -->
						<form-info></form-info>	
						<br/>

						<!-- form button -->
						<div class="card card-body">
							<form-button
								:cancelState="'methods'"
								:formValidation="'form'"
								@cancelClick="back"></form-button>
						</div>

					</form>
		<!-- divider -->
		<hr>
		
		<!-- tombol desktop-->
		<div class="text-center d-none d-md-block">
			<button class="btn btn-light" @click.prevent="tutup">
				<i class="icon-cross"></i> Tutup</button>

			<button class="btn btn-primary" @click.prevent="tambah" :disabled="form.aktivis_id == ''">
				<i class="icon-floppy-disk"></i> Simpan</button>
		</div>  

		<!-- tombol mobile-->
		<div class="d-block d-md-none">
			<button class="btn btn-light btn-block pb-2" @click.prevent="tutup">
				<i class="icon-cross"></i> Tutup</button>

			<button class="btn btn-primary btn-block pb-2" @click.prevent="tambah" :disabled="form.aktivis_id == ''">
				<i class="icon-floppy-disk"></i> Simpan</button>
		</div> 

	</div>
</template>

<script>
	import { mapGetters } from 'vuex';
	import checkValue from '../../components/checkValue.vue';
	import DataViewer from '../../components/dataviewerName.vue';

	export default {
		props: ['mode','selected'],
		components: {
			DataViewer,
			checkValue
		},
		data() {
			return {
				title: '',
				kelas: 'aktivis',
			}
		},
		created(){
			if(this.mode == 'edit'){
				this.form = this.selected;
			}
		},
		methods: {
			tambah(){
				if(this.mode == 'edit'){
					this.$emit('editPanitia',this.form);
				}else{
					this.$emit('addPanitia',this.form);
				}
			},
			tutup(){
				this.$emit('tutup');
			}
		},
		computed: {
			...mapGetters('auth',{
				currentUser: 'currentUser'
			}),
			...mapGetters('aktivis',{
				itemData: 'dataS',
				itemDataStat: 'dataStatS'
			})
		}
	}
</script>