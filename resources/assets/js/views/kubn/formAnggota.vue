<template>
	<div>
		<form @submit.prevent="save" data-vv-scope="formAnggota">

		<div class="card" v-if="formAnggota.anggota_cu_id">
			<div class="card-header bg-info text-white header-elements-inline">
				<h6 class="card-title"></h6>
				<div class="header-elements" v-if="mode != 'edit'">
					<button type="button" class="btn btn-danger" @click.prevent="deleteSelected"><i class="icon-cross2 mr-2"></i> Batal</button>
				</div>
			</div>
			<div class="card-body">
				<div class="media flex-column flex-sm-row mt-0">
					<div class="mr-sm-3 mb-2 mb-sm-0">
						<div class="card-img-actions">
								<img :src="'/images/anggotaCu/' + formAnggota.gambar + '.jpg'" class="img-fluid img-preview rounded" v-if="formAnggota.gambar" >
								<img :src="'/images/no_image.jpg'" class="img-fluid img-preview rounded" v-else>
						</div>
					</div>

					<div class="media-body">
						<ul class="list list-unstyled mb-0">
							<li><b>No. BA:</b> {{ formAnggota.no_ba }}</li>
							<li><b>Nama:</b> {{ formAnggota.name }}</li>
							<li><b>Gender:</b> {{ formAnggota.kelamin }}</li>
						</ul>
					</div>
				</div>
			</div>
		</div>

		<data-viewer :title="'Anggota'" :columnData="columnDataAnggota" :itemData="itemDataAnggota" :query="query" :itemDataStat="itemDataAnggotaStat" @fetch="fetch" :isDasar="'true'" :isNoButtonRow="'true'" v-if="formAnggota.anggota_cu_id == '' && mode == 'create'">

			<!-- item  -->
			<template slot="item-desktop" slot-scope="props">
				<tr :class="{ 'bg-info': selectedItem.id === props.item.id }" class="text-nowrap" @click="selectedRow(props.item)">
					<td>
						{{ props.index + 1 + (+itemDataAnggota.current_page-1) * +itemDataAnggota.per_page + '.'}}
					</td>
					<td>
						<img :src="'/images/' + kelas + '/' + props.item.gambar + 'n.jpg'" class="img-rounded img-fluid wmin-sm" v-if="props.item.gambar">
						<img :src="'/images/no_image.jpg'" class="img-rounded img-fluid wmin-sm" v-else>
					</td>
					<td>
						<check-value :value="props.item.no_ba"></check-value>
					</td>
					<td>
						<check-value :value="props.item.name"></check-value>
					</td>
					<td>
						<check-value :value="props.item.kelamin"></check-value>
					</td>
					<td v-html="$options.filters.date(props.item.tanggal_lahir)">
					</td>
					<td>
						<check-value :value="props.item.tempat_lahir"></check-value>
					</td>
					<td>
						<check-value :value="props.item.agama"></check-value>
					</td>
					<td>
						<check-value :value="props.item.status"></check-value>
					</td>
					<td>
						<check-value :value="props.item.alamat"></check-value>
					</td>
					<td>
						<check-value :value="props.item.email"></check-value>
					</td>
					<td>
						<check-value :value="props.item.hp"></check-value>
					</td>
				</tr>
			</template>

		</data-viewer>

		<!-- jabatan -->
		<div class="form-group" :class="{'has-error' : errors.has('formAnggota.jabatan')}">

			<!-- title -->
			<h5 :class="{ 'text-danger' : errors.has('formAnggota.jabatan')}">
				<i class="icon-cross2" v-if="errors.has('formAnggota.jabatan')"></i>
				Jabatan: <wajib-badge></wajib-badge>
			</h5>

			<input type="text" name="jabatan" class="form-control" placeholder="Silahkan masukkan jabatan" v-validate="'required'" data-vv-as="Jabatan" v-model="formAnggota.jabatan">

			<!-- error message -->
			<small class="text-muted text-danger" v-if="errors.has('formAnggota.jabatan')">
				<i class="icon-arrow-small-right"></i> {{ errors.first('formAnggota.jabatan') }}
			</small>
			<small class="text-muted" v-else>&nbsp;</small>
		</div>

		<!-- tanggal mulai -->
		<div class="form-group" :class="{'has-error' : errors.has('formAnggota.tanggal_mulai')}">

			<!-- title -->
			<h5 :class="{ 'text-danger' : errors.has('formAnggota.tanggal_mulai')}">
				<i class="icon-cross2" v-if="errors.has('formAnggota.tanggal_mulai')"></i>
				Tanggal Mulai: <wajib-badge></wajib-badge></h5>

			<!-- input -->
			<date-picker @dateSelected="formAnggota.tanggal_mulai = $event" :defaultDate="formAnggota.tanggal_mulai"></date-picker>	
			<input v-model="formAnggota.tanggal_mulai" name="tanggal_mulai" v-show="false" v-validate="'required'" data-vv-as="Tanggal mulai"/>

			<!-- error message -->
			<small class="text-muted text-danger" v-if="errors.has('formAnggota.tanggal_mulai')">
				<i class="icon-arrow-small-right"></i> {{ errors.first('formAnggota.tanggal_mulai') }}
			</small>
			<small class="text-muted" v-else>&nbsp;</small>
		</div>

		<!-- tanggal selesai -->
		<div class="form-group" :class="{'has-error' : errors.has('formAnggota.tanggal_selesai')}">

			<!-- title -->
			<h5 :class="{ 'text-danger' : errors.has('formAnggota.tanggal_selesai')}">
				<i class="icon-cross2" v-if="errors.has('formAnggota.tanggal_selesai')"></i>
				Tanggal Selesai: </h5>

			<!-- input -->
			<date-picker @dateSelected="formAnggota.tanggal_selesai = $event" :defaultDate="formAnggota.tanggal_selesai"></date-picker>	
			<input v-model="formAnggota.tanggal_selesai" name="tanggal_selesai" v-show="false" data-vv-as="Tanggal selesai"/>

			<!-- error message -->
			<small class="text-muted text-danger" v-if="errors.has('formAnggota.tanggal_selesai')">
				<i class="icon-arrow-small-right"></i> {{ errors.first('formAnggota.tanggal_selesai') }}
			</small>
			<small class="text-muted" v-else>&nbsp;</small>
		</div>

		<!-- keterangan -->
		<div class="form-group">

			<!-- title -->
			<h5>
				Keterangan:
			</h5>

			<!-- textarea -->
			<textarea rows="5" type="text" name="deskripsi" class="form-control" placeholder="Silahkan masukkan keterangan" v-model="formAnggota.deskripsi"></textarea>

		</div>

		<!-- message -->
		<message v-if="errors.any('formAnggota') && submited" :title="'Oops terjadi kesalahan'" :errorItem="errors.items">
		</message>
		<!-- divider -->
		<hr>
		
		<!-- tombol desktop-->
		<div class="text-center d-none d-md-block">
			<button type="button" class="btn btn-light" @click.prevent="tutup">
				<i class="icon-cross"></i> Tutup</button>

			<button type="submit" class="btn btn-primary" :disabled="formAnggota.anggota_cu_id == ''">
				<i class="icon-floppy-disk"></i> Simpan</button>
		</div>  

		<!-- tombol mobile-->
		<div class="d-block d-md-none">
			<button type="submit" class="btn btn-primary btn-block pb-2" :disabled="formAnggota.anggota_cu_id == ''">
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
	import DatePicker from "../../components/datePicker.vue";
	import wajibBadge from "../../components/wajibBadge.vue";

	export default {
		props: ['id_cu','id_tp','mode','selected'],
		components: {
			DataViewer,
			checkValue,
			message,
			DatePicker,
			wajibBadge
		},
		data() {
			return {
				title: '',
				kelas: 'anggotaCu',
				selectedItem: [],
				formAnggota:{
					anggota_cu_id: '',
					name: '',
					lembaga: '',
					tanggal_mulai: null,
					tanggal_selesai: null,
					gambar: '',
					peran: '',
					asal: '',
					deskripsi: ''
				},
				query: {
					order_column: "name",
					order_direction: "asc",
					filter_match: "and",
					limit: 5,
					page: 1
				},
				columnDataAnggota: [
					{ title: 'No.' },
					{ title: 'Foto' },
					{ title: 'No. BA' },
					{
						title: 'Nama',
						name: 'name',
						tipe: 'string',
						sort: true,
						hide: false,
						disable: false,
						filter: true,
						filterDefault: true
					},
					{ title: 'Gender' },
					{ title: 'Tgl. Lahir' },
					{ title: 'Tempat Lahir' },
					{ title: 'Agama' },
					{ title: 'Status' },
					{ title: 'Alamat' },
					{ title: 'Email' },
					{ title: 'Hp' },
				],
				submited: false,
			}
		},
		created(){
			this.fetch(this.query);

			if(this.mode == 'edit'){
				this.formAnggota = Object.assign({}, this.selected);
			}
		},
		methods: {
			fetch(params){
				this.$store.dispatch('anggotaCu/indexCu', [params,this.id_cu,this.id_tp]);
			},
			deleteSelected(){
				this.formAnggota.anggota_cu_id = '';
				this.selectedItem = '';
			},
			selectedRow(item){
				this.selectedItem = item;
				this.formAnggota.anggota_cu_id = item.id;
				this.formAnggota.name = item.name;
				this.formAnggota.gambar = item.gambar;
				this.formAnggota.no_ba = item.no_ba;
				this.formAnggota.kelamin = item.kelamin;
			},
			save(){
				this.$validator.validateAll('formAnggota').then((result) => {
					if (result) {
						if(this.mode == 'edit'){
							this.$emit('editAnggota',this.formAnggota);
						}else{
							this.$emit('createAnggota',this.formAnggota);
						}
						this.submited = false;
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
			...mapGetters('anggotaCu',{
				itemDataAnggota: 'dataS',
				itemDataAnggotaStat: 'dataStatS'
			}),
		}
	}
</script>