<template>
	<div>
		
		<!-- main panel -->
		<form @submit.prevent="save" data-vv-scope="form" autocomplete="off">

			<!-- message -->
			<message v-if="errors.any('form') && submited" :title="'Oops, terjadi kesalahan'" :errorItem="errors.items">
			</message>

			<!-- main form -->

			<div class="row">

				<!-- data induk -->
				<div class="col-md-12">
					<div class="card" v-if="Object.keys(modelIndukSelect).length > 0">
						<div class="card-header bg-white">
							<h6 class="card-title">
								Induk
							</h6>
						</div>
						<div class="card-body">
							<div class="row">
								<div class="col-sm-6">
									<ul class="list list-unstyled mb-1">
										<li><b>No. Akun:</b> {{ this.modelIndukSelect.kode }}</li>
										<li><b>Nama:</b> {{ this.modelIndukSelect.name }}</li>
									</ul>	
								</div>
								<div class="col-sm-6">
									<ul class="list list-unstyled mb-1">
										<li><b>Tipe:</b> {{ this.modelIndukSelect.tipe }}</li>
										<li><b>Level:</b> {{ this.modelIndukSelect.level }}</li>
									</ul>	
								</div>
								<div class="col-sm-12">
									<b>Keterangan:</b> <br/>
									<span v-html="modelIndukSelect.keterangan"></span>
								</div>
							</div>
						</div>
					</div>
					<div class="card card-body" v-else>
						Tidak ada induk
					</div>
				</div>

				<div class="col-md-6">
					<div class="form-group" :class="{'has-error' : errors.has('form.kode')}">

						<!-- title -->
						<h5 :class="{ 'text-danger' : errors.has('form.kode')}">
							<i class="icon-cross2" v-if="errors.has('form.kode')"></i>
							No. Akun: <wajib-badge></wajib-badge>
						</h5>

						<!-- text -->
						<cleave 
							name="kode"
							v-model="form.kode" 
							class="form-control" 
							:options="cleaveOption.number30"
							placeholder="Silahkan masukkan no akun"
							v-validate="'required'" data-vv-as="No. Akun"
							@blur.native="filterInduk"></cleave>

						<!-- error message -->
						<small class="text-muted text-danger" v-if="errors.has('form.kode')">
							<i class="icon-arrow-small-right"></i> {{ errors.first('form.kode') }}
						</small>
						<small class="text-muted" v-else>&nbsp;
						</small>
					</div>
				</div>

				<!-- name -->
				<div class="col-md-6">
					<div class="form-group" :class="{'has-error' : errors.has('form.name')}">

						<!-- title -->
						<h5 :class="{ 'text-danger' : errors.has('form.name')}">
							<i class="icon-cross2" v-if="errors.has('form.name')"></i>
							Nama: <wajib-badge></wajib-badge></h5>

						<!-- text -->
						<input type="text" name="name" class="form-control" placeholder="Silahkan masukkan nama CoA" v-validate="'required'" data-vv-as="Nama" v-model="form.name">

						<!-- error message -->
						<small class="text-muted text-danger" v-if="errors.has('form.name')">
							<i class="icon-arrow-small-right"></i> {{ errors.first('form.name') }}
						</small>
						<small class="text-muted" v-else>&nbsp;</small>
					</div>
				</div>


				<!-- keterangan -->
				<div class="col-md-12">
					<div class="form-group">

						<!-- title -->
						<h5>
							Keterangan:
						</h5>

						<!-- textarea -->
						<textarea rows="5" type="text" name="keterangan" class="form-control" placeholder="Silahkan masukkan keterangan" v-model="form.keterangan"></textarea>

					</div>
				</div>

			</div>

			<!-- divider -->
			<hr>
			
			<!-- button -->
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
	import _ from 'lodash';
	import { mapGetters } from 'vuex';
	import message from "../../components/message.vue";
	import wajibBadge from "../../components/wajibBadge.vue";
	import Cleave from 'vue-cleave-component';

	export default {
		props: ['formState','selected'],
		components: {
			message,
			wajibBadge,
			Cleave,
		},
		data() {
			return {
				kelas: 'coa',
				kode: '',
				form: {
					id_induk: '',
					kode: '',
					name: '',
					tipe: '',
					level: '',
					keterangan: '',
				},
				formData : {},
				modelIndukSelect: {},
				cleaveOption: {
					number30: {
            numeral: true,
            numeralIntegerScale: 30,
            numeralDecimalScale: 0,
						stripLeadingZeroes: false,
						delimiter: ''
					},
				},
				message: {
					show: false,
					content: ''
				},
				submited: false,
			}
		},
		created(){
			this.$store.dispatch(this.kelas + '/get');		
		},
		watch: {
			modelIndukStat(value){
				if(value == 'success'){

					if(this.formState == 'edit'){
						this.form = this.selected;
						// this.kode = this.form.kode;
						this.filterInduk();
					}
				}
			},
			// kode(val){
				// this.form.kode = val;
				// this.filterInduk();
			// }
		},
		methods: {
			save() {
				this.$validator.validateAll('form').then((result) => {
					if (result) {
						if(this.formState == 'edit'){
							this.$store.dispatch(this.kelas + '/update', [this.selected.id, this.form]);
						}else{
							this.$store.dispatch(this.kelas + '/store', this.form);
						}
						this.submited = false;
					}else{
						this.submited = true;
					}
				});
			},
			filterInduk(){
				var kode = this.form.kode;
				// var arrayInduk = _.filter(this.modelInduk, function(obj){
				// 	return obj.kode.indexOf(kode) !== -1;
				// });
				var arrayInduk = _.filter(this.modelInduk, {kode: kode.slice(0, -1)});
				this.modelIndukSelect = arrayInduk.length > 0 ? arrayInduk[0] : {};
				this.form.id_induk = arrayInduk.length > 0 ? arrayInduk[0].id : 0;
			},
			tutup(){
				this.$emit('tutup');
			},
		},
		computed: {
			...mapGetters('auth',{
				currentUser: 'currentUser'
			}),
			...mapGetters('coa',{
				modelInduk: 'dataS2',
				modelIndukStat: 'dataStatS2',
			}),
		}
	}
</script>