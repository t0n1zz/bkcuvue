<template>
	<div>
		<form @submit.prevent="save" data-vv-scope="formNilai">

		<!-- asal -->
		<div class="form-group" :class="{'has-error' : errors.has('formNilai.materi')}" v-if="mode == 'create'">

			<!-- title -->
			<h5 :class="{ 'text-danger' : errors.has('formNilai.materi')}">
				<i class="icon-cross2" v-if="errors.has('formNilai.materi')"></i>
				Pilih Materi:
			</h5>

			<!-- select -->
			<select class="form-control" name="materi" v-model="formNilai.materi"  data-vv-as="Materi"  @change="changeMateri($event.target.value)">
					<option disabled value="">
						<span v-if="itemDataListMateriNilaiStat === 'loading'">Mohon tunggu...</span>
						<span v-else>Silahkan pilih materi</span>
					</option>
					<option disabled value="">----------------</option>
					<option v-for="(materi, index) in itemDataListMateriNilai" :value="materi.id" :key="index">{{materi.nama}}</option>
				</select>

			<!-- error message -->
			<small class="text-muted text-danger" v-if="errors.has('formNilai.materi')">
				<i class="icon-arrow-small-right"></i> {{ errors.first('formNilai.materi') }}
			</small>
			<small class="text-muted" v-else>&nbsp;</small>
		</div>
        <div class="form-group" :class="{'has-error' : errors.has('formNilai.nilai')}" v-if="mode == 'create'">
        <!-- title -->
				<h5 :class="{ 'text-danger' : errors.has('formNilai.name')}">
					<i class="icon-cross2" v-if="errors.has('formNilai.nilai')"></i>
					Nilai :
				</h5>

				<!-- text -->
				<input type="text" name="nilai" class="form-control" placeholder="Silahkan masukkan nilai" v-validate="'required'" v-model="formNilai.nilai">

				<!-- error message -->
				<small class="text-muted text-danger" v-if="errors.has('formNilai.nilai')">
					<i class="icon-arrow-small-right"></i> {{ errors.first('formNilai.nilai') }}
				</small>
				<small class="text-muted" v-else>&nbsp;
				</small>
        </div>
		<hr>
		<div class="table-responsive">
			<table class="table">
				<thead>
					<tr class="bg-blue">
						<th>No</th>
						<th>Materi</th>
						<th>Nilai</th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="(nl,index) in this.itemNilai" :key="nl.id">
						<td>{{index+1}}</td>
						<td>{{nl.nama}}</td>
						<td>{{nl.nilai}}</td>
					</tr>
				</tbody>
			</table>
		</div>
        <hr>
		<!-- tombol desktop-->
		<div class="text-center d-none d-md-block">
			<button type="button" class="btn btn-light" @click.prevent="tutup">
				<i class="icon-cross"></i> Tutup</button>

			<button type="submit" class="btn btn-primary" :disabled="formNilai.aktivis_id == ''">
				<i class="icon-floppy-disk"></i> Simpan</button>
		</div>  

		<!-- tombol mobile-->
		<div class="d-block d-md-none">
			<button type="submit" class="btn btn-primary btn-block pb-2" :disabled="formNilai.aktivis_id == ''">
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
		props: ['mode','selected','kegiatan_id','kegiatan_tipe', 'aktivis_id'],
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
				formNilai:{
					materi: '',
					nilai: '',
				},
				submited: false,
			}
		},
		methods: {
            changeMateri(event){
				this.formNilai.materi_id = event;
			},
			save(){
				// const formData = toMulipartedForm(this.formNilai, this.mode);
				this.$validator.validateAll('formNilai').then((result) => {
					if (result) {
							this.$store.dispatch('kegiatanBKCU/storeNilai', [this.aktivis_id, this.kegiatan_id, this.formNilai.materi_id, this.formNilai]);
					this.$emit('modalTutup','tambahNilai');
					}else{
						this.submited = true;
					}	
				});
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
				itemDataListMateriNilai: 'dataNilai',
				itemDataListMateriNilaiStat: 'dataNilaiStat',
				itemNilai:'nilai',
				itemNilaiStat: 'nilaiStat',
				itemStat: 'dataStat',
				updateNilai: 'updateNilai',
				updateNilaiStat: 'updateNilaiStat'
			}),
		}
	}
</script>