6204045305820001<template>
	<div>
		<form @submit.prevent="save" data-vv-scope="formCalon">

		<div class="card" v-if="formCalon.aktivis_id">
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
								<img :src="'/images/aktivis/' + formCalon.gambar + '.jpg'" class="img-fluid img-preview rounded" v-if="formCalon.gambar" >
								<img :src="'/images/no_image.jpg'" class="img-fluid img-preview rounded" v-else>
						</div>
					</div>

					<div class="media-body">
						<ul class="list list-unstyled mb-0">
							<li><b>Nama:</b> {{ formCalon.name }}</li>
							<li><b>Tanggal Lahir:</b> {{ formCalon.tanggal_lahir }}</li>
							<li><b>Tempat Lahir:</b> {{ formCalon.tempat_lahir }}</li>
							<li><b>Status:</b> {{ formCalon.status }}</li>
							<li><b>Pendidikan:</b> {{ formCalon.pendidikan }}</li>
						</ul>
					</div>
				</div>
			</div>
		</div>

		<!-- if asal dalam -->
		<data-viewer :title="'Aktivis'" :columnData="columnDataDalam" :itemData="itemDataDalam" :query="query" :itemDataStat="itemDataDalamStat" @fetch="fetchDalam" :isDasar="'true'" :isNoButtonRow="'true'" v-if="formCalon.aktivis_id == '' && mode == 'create'">

			<!-- item  -->
			<template slot="item-desktop" slot-scope="props">
				<tr :class="{ 'bg-info': selectedItem.id === props.item.id }" class="text-nowrap" @click="selectedRow(props.item)">
					<td>
						{{ props.index + 1 + (+itemDataDalam.current_page-1) * +itemDataDalam.per_page + '.'}}
					</td>
					<td>
						<img :src="'/images/' + kelas + '/' + props.item.gambar + 'n.jpg'" class="img-rounded img-fluid wmin-sm" v-if="props.item.gambar">
						<img :src="'/images/no_image.jpg'" class="img-rounded img-fluid wmin-sm" v-else>
					</td>
					<td>
						<check-value :value="props.item.name"></check-value>
					</td>
					<td>
						<check-value :value="props.item.kelamin"></check-value>
					</td>
					<td>
						<span v-if="props.item.pekerjaan_aktif && props.item.pekerjaan_aktif.tipe == 1">
							<check-value :value="props.item.pekerjaan_aktif.cu.name" v-if="props.item.pekerjaan_aktif.cu"></check-value>
							<span v-else>-</span>
						</span>
						<span v-else-if="props.item.pekerjaan_aktif && props.item.pekerjaan_aktif.tipe == 2">
							<check-value :value="props.item.pekerjaan_aktif.lembaga_lain.name" v-if="props.item.pekerjaan_aktif.lembaga_lain"></check-value>
							<span v-else>-</span>
						</span>
						<span v-else-if="props.item.pekerjaan_aktif && props.item.pekerjaan_aktif.tipe == 3">
							PUSKOPCUINA
						</span>
						<span v-else>-</span>
					</td>
					<td v-html="$options.filters.checkTingkatAktivis(props.item.pekerjaan_aktif.tingkat)">
					</td>
					<td>
						<check-value :value="props.item.pekerjaan_aktif.name" v-if="props.item.pekerjaan_aktif"></check-value>
						<span v-else>-</span>
					</td>
					<td>
						<check-value :value="props.item.pendidikan_tertinggi.tingkat" v-if="props.item.pendidikan_tertinggi"></check-value>
						<span v-else>-</span>
					</td>
					<td>
						<check-value :value="props.item.pendidikan_tertinggi.name" v-if="props.item.pendidikan_tertinggi"></check-value>
						<span v-else>-</span>
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
						<check-value :value="props.item.provinces.name" v-if="props.item.provinces"></check-value>
						<span v-else>-</span>	
					</td>
					<td>
						<check-value :value="props.item.regencies.name" v-if="props.item.regencies"></check-value>
						<span v-else>-</span>	
					</td>
					<td>
						<check-value :value="props.item.districts.name" v-if="props.item.districts"></check-value>
						<span v-else>-</span>	
					</td>
					<td>
						<check-value :value="props.item.villages.name" v-if="props.item.villages"></check-value>
						<span v-else>-</span>	
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

		<!-- message -->
		<message v-if="errors.any('formCalon') && submited" :title="'Oops terjadi kesalahan'" :errorItem="errors.items">
		</message>
		<!-- divider -->

		<!-- no urut -->
		<div class="form-group" :class="{'has-error' : errors.has('formCalon.no_urut')}">

			<!-- title -->
			<h5 :class="{ 'text-danger' : errors.has('formCalon.no_urut')}">
				<i class="icon-cross2" v-if="errors.has('formCalon.no_urut')"></i>
				No. Urut: <wajib-badge></wajib-badge></h5>

			<!-- input -->
			<cleave 
				name="no_urut"
				v-model="formCalon.no_urut" 
				class="form-control" 
				:raw="false" 
				:options="cleaveOption.number3" 
				placeholder="Silahkan masukkan no urut"
				v-validate="'required'" data-vv-as="No. Urut"></cleave>

			<!-- error message -->
			<small class="text-muted text-danger" v-if="errors.has('formCalon.no_urut')">
				<i class="icon-arrow-small-right"></i> {{ errors.first('formCalon.no_urut') }}
			</small>
			<small class="text-muted" v-else>&nbsp;</small>
		</div>

		<!-- CU -->
		<div class="form-group" :class="{'has-error' : errors.has('formCalon.pengusung_cu_id')}" v-if="this.currentUser.id_cu == 0">

			<!-- title -->
			<h5 :class="{ 'text-danger' : errors.has('formCalon.pengusung_cu_id')}">
				<i class="icon-cross2" v-if="errors.has('formCalon.pengusung_cu_id')"></i>
				CU Pengusung: <wajib-badge></wajib-badge>
			</h5>

			<!-- select -->
			<select class="form-control" name="pengusung_cu_id" v-model="formCalon.pengusung_cu_id" data-width="100%" data-vv-as="CU" :disabled="modelCU.length === 0">
				<option disabled value="">
					<span v-if="modelCUStat === 'loading'">Mohon tunggu...</span>
					<span v-else>Silahkan pilih CU</span>
				</option>
				<option v-for="(cu, index) in modelCU" :value="cu.id" :key="index">{{cu.name}}</option>
			</select>

			<!-- error message -->
			<small class="text-muted text-danger" v-if="errors.has('formCalon.pengusung_cu_id')">
				<i class="icon-arrow-small-right"></i> {{ errors.first('formCalon.pengusung_cu_id') }}
			</small>
			<small class="text-muted" v-else>&nbsp;</small>
		</div>

		<hr>
		
		<!-- tombol desktop-->
		<div class="text-center d-none d-md-block">
			<button type="button" class="btn btn-light" @click.prevent="tutup">
				<i class="icon-cross"></i> Tutup</button>

			<button type="submit" class="btn btn-primary" :disabled="formCalon.aktivis_id == ''">
				<i class="icon-floppy-disk"></i> Simpan</button>
		</div>  

		<!-- tombol mobile-->
		<div class="d-block d-md-none">
			<button type="submit" class="btn btn-primary btn-block pb-2" :disabled="formCalon.aktivis_id == ''">
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
	import Cleave from 'vue-cleave-component';
	import wajibBadge from "../../components/wajibBadge.vue";

	export default {
		props: ['mode','selected'],
		components: {
			DataViewer,
			checkValue,
			message,
			Cleave,
			wajibBadge
		},
		data() {
			return {
				title: '',
				kelas: 'aktivis',
				cleaveOption: {
					number3: {
            numeral: true,
            numeralIntegerScale: 3,
            numeralDecimalScale: 0,
            stripLeadingZeroes: false
          },
				},
				selectedItem: [],
				formCalon:{
					aktivis_id: '',
					pengusung_cu_id: '',
					name: '',
					gambar: '',
				},
				query: {
					order_column: "name",
					order_direction: "asc",
					filter_match: "and",
					limit: 5,
					page: 1
				},
				columnDataDalam: [
					{ title: 'No.' },
					{ title: 'Foto' },
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
					{ title: 'CU' },
					{ title: 'Tingkat' },
					{ title: 'Jabatan' },
					{ title: 'Pendidikan'},
					{ title: 'Jurusan' },
					{ title: 'Tgl. Lahir' },
					{ title: 'Tempat Lahir' },
					{ title: 'Agama' },
					{ title: 'Status' },
					{ title: 'Provinsi' },
					{ title: 'Kabupaten/Kota' },
					{ title: 'Kecamatan'},
					{ title: 'Kelurahan' },
					{ title: 'Alamat' },
					{ title: 'Email' },
					{ title: 'Hp' },
				],
				submited: false,
			}
		},
		created(){
			if(this.mode == 'edit'){
				this.formCalon = Object.assign({}, this.selected);
			}else{
				this.fetch();
			}
		},
		methods: {
			fetch(){
				this.$store.commit('aktivis/setDataS',[]);
				this.$store.commit('aktivis/setDataStatS','');

				this.deleteSelected();
				this.fetchDalam(this.query);
			},
			fetchDalam(params){
				if(this.currentUser.id_cu == 0){
					this.$store.dispatch('aktivis/index', [params,'semua','aktif']);
				}else{
					this.$store.dispatch('aktivis/indexCu', [params,this.currentUser.id_cu,'semua','aktif']);	
				}
			},
			deleteSelected(){
				this.formCalon.aktivis_id = '';
				this.selectedItem = '';
			},
			selectedRow(item){
				this.selectedItem = item;
				this.formCalon.aktivis_id = item.id;
				this.formCalon.name = item.name;
				this.formCalon.gambar = item.gambar;
				this.formCalon.status = item.status;
				this.formCalon.tanggal_lahir = item.tanggal_lahir != '' ? item.tanggal_lahir : '-';
				this.formCalon.tempat_lahir = item.tempat_lahir != '' ? item.tempat_lahir : '-';
				if(item.pendidikan_tertinggi){
					this.formCalon.pendidikan = item.pendidikan_tertinggi.tingkat + ' ' + item.pendidikan_tertinggi.name
				}
			},
			save(){
				if(this.currentUser.id_cu != 0){
					this.formCalon.pengusung_cu_id = this.currentUser.id_cu;
				}
				this.$validator.validateAll('formCalon').then((result) => {
					if (result) {
						if(this.mode == 'edit'){
							this.$emit('editCalon',this.formCalon);
						}else{
							this.$emit('createCalon',this.formCalon);
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
			...mapGetters('aktivis',{
				itemDataDalam: 'dataS',
				itemDataDalamStat: 'dataStatS'
			}),
			...mapGetters('cu',{
				modelCU: 'headerDataS',
				modelCUStat: 'headerDataStatS',
			}),
		}
	}
</script>