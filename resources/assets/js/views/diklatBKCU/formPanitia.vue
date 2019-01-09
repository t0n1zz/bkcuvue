<template>
	<div>
		<!-- peran -->
		<div class="form-group" :class="{'has-error' : errors.has('form.peran')}">

			<!-- title -->
			<h5 :class="{ 'text-danger' : errors.has('form.peran')}">
				<i class="icon-cross2" v-if="errors.has('form.peran')"></i>
				Peran:
			</h5>

			<!-- select -->
			<select class="form-control" name="peran" v-model="form.peran" data-width="100%" v-validate="'required'" data-vv-as="Peran">
				<option disabled value="">Silahkan pilih peran</option>
				<option value="panitia">Panitia</option>
				<option value="fasilitator">Fasilitator</option>
			</select>

			<!-- error message -->
			<small class="text-muted text-danger" v-if="errors.has('form.peran')">
				<i class="icon-arrow-small-right"></i> {{ errors.first('form.peran') }}
			</small>
			<small class="text-muted" v-else>&nbsp;</small>
		</div>

		<!-- keterangan -->
		<div class="form-group" :class="{'has-error' : errors.has('form.keterangan')}">

			<!-- title -->
			<h5 :class="{ 'text-danger' : errors.has('form.keterangan')}">
				<i class="icon-cross2" v-if="errors.has('form.keterangan')"></i>
				Keterangan:
			</h5>

			<!-- textarea -->
			<textarea rows="5" type="text" name="keterangan" class="form-control" placeholder="Silahkan masukkan keterangan"
				v-validate="'required|min:5'" v-model="form.keterangan"></textarea>

			<!-- error message -->
			<small class="text-muted text-danger" v-if="errors.has('form.keterangan')">
				<i class="icon-arrow-small-right"></i> {{ errors.first('form.keterangan') }}
			</small>
			<small class="text-muted" v-else>&nbsp;
			</small>
		</div>

		<!-- asal -->
		<div class="form-group" :class="{'has-error' : errors.has('form.asal')}" v-if="mode == 'create'">

			<!-- title -->
			<h5 :class="{ 'text-danger' : errors.has('form.asal')}">
				<i class="icon-cross2" v-if="errors.has('form.asal')"></i>
				Asal:
			</h5>

			<!-- select -->
			<select class="form-control" name="asal" v-model="form.asal" data-width="100%" @change="changeAsal($event.target.value)" v-validate="'required'" data-vv-as="asal">
				<option disabled value="">Silahkan pilih asal</option>
				<option value="dalam">Dalam gerakan</option>
				<option value="luar">Luar gerakan</option>
			</select>

			<!-- error message -->
			<small class="text-muted text-danger" v-if="errors.has('form.asal')">
				<i class="icon-arrow-small-right"></i> {{ errors.first('form.asal') }}
			</small>
			<small class="text-muted" v-else>&nbsp;</small>
		</div>

		<!-- if asal dalam -->
		<data-viewer :columnData="columnData" :itemData="itemData" :query="query" :itemDataStat="itemDataStat" @fetch="fetchDalam" v-if="form.asal == 'dalam' && mode == 'create'">

			<!-- item  -->
			<template slot="item-desktop" slot-scope="props">
				<tr :class="{ 'bg-info': selectedItem.id === props.item.id }" class="text-nowrap" @click="selectedRow(props.item)">
					<td>
						{{ props.index + 1 + (+itemData.current_page-1) * +itemData.per_page + '.'}}
					</td>
					<td>
						<img :src="'/images/' + kelas + '/' + props.item.gambar + 'n.jpg'" class="img-rounded img-fluid wmin-sm" v-if="props.item.gambar">
						<img :src="'/images/no_image.jpg'" class="img-rounded img-fluid wmin-sm" v-else>
					</td>
					<td>
						<check-value :value="props.item.name"></check-value>
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
							Puskopdit BKCU Kalimantan
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
				</tr>
			</template>

		</data-viewer>

		<!-- if asal luar -->
		<data-viewer :columnData="columnData" :itemData="itemData" :query="query" :itemDataStat="itemDataStat" @fetch="fetchLuar" v-if="form.asal == 'luar' && mode == 'create'">

			<!-- item  -->
			<template slot="item-desktop" slot-scope="props">
				<tr :class="{ 'bg-info': selectedItem.id === props.item.id }" class="text-nowrap" @click="selectedRow(props.item)">
					<td v-if="!columnData[0].hide">
						{{ props.index + 1 + (+itemData.current_page-1) * +itemData.per_page + '.'}}
					</td>
					<td v-if="!columnData[1].hide">
						<img :src="'/images/' + kelas + '/' + props.item.gambar + 'n.jpg'" class="img-rounded img-fluid wmin-sm" v-if="props.item.gambar">
						<img :src="'/images/no_image.jpg'" class="img-rounded img-fluid wmin-sm" v-else>
					</td>
					<td v-if="!columnData[2].hide">
						<check-value :value="props.item.name"></check-value>
					</td>
					<td v-if="!columnData[3].hide && !columnData[3].disable">
						<check-value :value="props.item.pekerjaan_aktif.lembaga_lain.name" v-if="props.item.pekerjaan_aktif.lembaga_lain"></check-value>
						<span v-else>-</span>
					</td>
					<td v-if="!columnData[4].hide && !columnData[4].disable" v-html="$options.filters.checkTingkatAktivis(props.item.pekerjaan_aktif.tingkat)">
					</td>
					<td v-if="!columnData[5].hide">
						<check-value :value="props.item.pekerjaan_aktif.name" v-if="props.item.pekerjaan_aktif"></check-value>
						<span v-else>-</span>
					</td>
					<td v-if="!columnData[6].hide">
						<check-value :value="props.item.pendidikan_tertinggi.tingkat" v-if="props.item.pendidikan_tertinggi"></check-value>
						<span v-else>-</span>
					</td>
					<td v-if="!columnData[7].hide">
						<check-value :value="props.item.pendidikan_tertinggi.name" v-if="props.item.pendidikan_tertinggi"></check-value>
						<span v-else>-</span>
					</td>
				</tr>
			</template>

		</data-viewer>

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
				selectedItem: [],
				form:{
					aktivis_id: '',
					name: '',
					lembaga: '',
					gambar: '',
					peran: '',
					asal: '',
					keterangan: ''
				},
				query: {
					order_column: "name",
					order_direction: "asc",
					filter_match: "and",
					limit: 10,
					page: 1
				},
				columnData: [
					{
						title: 'No.',
						name: 'No.',
					},
					{
						title: 'Foto',
						name: 'gambar',
						hide: false,
					},
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
					{
						title: 'CU',
						name: 'pekerjaan_aktif.cu.name',
						tipe: 'string',
						sort: false, 
						hide: false,
						disable: false,
						filter: false,
					},
					{
						title: 'Tingkat',
						name: 'pekerjaan_aktif.tingkat',
						tipe: 'string',
						sort: false,
						hide: false,
						disable: false,
						filter: false,
					},
					{
						title: 'Jabatan',
						name: 'pekerjaan_aktif.name',
						tipe: 'string',
						sort: false,
						hide: false,
						disable: false,
						filter: false,
					},
					{
						title: 'Pendidikan',
						name: 'pendidikan_tertinggi.tingkat',
						tipe: 'string',
						sort: false,
						hide: false,
						disable: false,
						filter: false,
					},
					{
						title: 'Jurusan',
						name: 'pendidikan_tertinggi.name',
						tipe: 'string',
						sort: false,
						hide: false,
						disable: false,
						filter: false,
					},
				],
			}
		},
		created(){
			if(this.mode == 'edit'){
				this.form = this.selected;
			}
		},
		methods: {
			changeAsal(value){
				this.$store.commit('aktivis/setDataS',[]);
				this.$store.commit('aktivis/setDataStatS','');

				if(this.asal == 'luar'){
					this.fetchLuar(this.query);
				}
			},
			fetchDalam(params){
				this.$store.dispatch('aktivis/index', [params,'semua']);
			},
			fetchLuar(params){
				this.$store.dispatch('aktivis/indexLembaga');
			},
			selectedRow(item){
				this.selectedItem = item;
				this.form.aktivis_id = item.id;
				this.form.name = item.name;
				this.form.gambar = item.gambar;

				if(this.form.asal == 'dalam'){
					if(item.pekerjaan_aktif.tipe == 1){
						this.form.lembaga = item.pekerjaan_aktif.cu.name
					}else if(item.pekerjaan_aktif.tipe == 2){
						this.form.lembaga = item.pekerjaan_aktif.lembaga_lain.name
					}else if(item.pekerjaan_aktif.tipe == 3){
						this.form.lembaga = "Puskopdit BKCU Kalimantan"
					}
				}else{
					this.form.lembaga = item.pekerjaan_aktif.lembaga_lain.name
				}
				
			},
			tambah(){
				if(this.mode == 'edit'){
					this.$emit('editPanitia',this.form);
				}else{
					this.$emit('addPanitia',this.form);
				}
			},
			createAktivis(){

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