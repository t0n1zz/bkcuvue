<template>
	<div>

		<form @submit.prevent="save" data-vv-scope="formData">

		<div class="row">

			<!-- name card -->
			<div class="col-md-12" v-if="selected.name != null">
				<div class="card card-body text-center">
					<ul class="list-inline list-inline-consensed mb-0 font-size-lg">
						<li class="list-inline-item"><b>Username:</b> {{ selected.username }}</li>
						<li class="list-inline-item"><b>Nama:</b> {{ selected.name }}</li>
					</ul>
				</div>
			</div>

			<!-- select CU -->
			<div class="col-md-12" v-if="currentUser.id_cu == 0">
				<div class="form-group">

					<!-- title -->
					<h5>Tipe:</h5>

					<!-- select -->
					<select name="cu" data-width="100%" class="form-control" v-model="formData.id_cu" @change="changeCU($event.target.value)">
						<option disabled value="">Silahkan pilih CU</option>
						<option value="0">PUSKOPCUINA</option>
						<option v-for="cu in modelCU" :value="cu.id">{{cu.name}}</option>
					</select>

				</div>
			</div>
										
			<!-- aktivis -->
			<div class="col-md-12">

				<h5>Data Aktivis User:</h5>

				<!-- identitas -->
				<identitas :itemData="formData.aktivis" v-if="formData.id_aktivis != '' && formData.id_aktivis != null" @deleteSelected="deleteSelected"></identitas>

				<!-- data aktivis -->
				<data-viewer :title="'Aktivis'" :columnData="columnData" :itemData="itemData" :query="query" :itemDataStat="itemDataStat" @fetch="fetchAktivis" :isDasar="'true'" :isNoButtonRow="'true'" v-else>

					<!-- item  -->
					<template slot="item-desktop" slot-scope="props">
						<tr class="text-nowrap cursor-pointer" @click="selectedRow(props.item)">
							<td>
								{{ props.index + 1 + (+itemData.current_page-1) * +itemData.per_page + '.'}}
							</td>
							<td>
								<img :src="'/images/aktivis/' + props.item.gambar + 'n.jpg'" class="img-rounded img-fluid wmin-sm" v-if="props.item.gambar">
								<img :src="'/images/no_image.jpg'" class="img-rounded img-fluid wmin-sm" v-else>
							</td>
							<td>
								<check-value :value="props.item.name"></check-value>
							</td>
							<td>
								<check-value :value="props.item.kelamin"></check-value>
							</td>
							<td v-if="!columnData[4].disable">
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
							<td  v-html="$options.filters.checkTingkatAktivis(props.item.pekerjaan_aktif.tingkat)">
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
								<check-value :value="props.item.tinggi"></check-value>
							</td>
							<td>
								<check-value :value="props.item.agama"></check-value>
							</td>
							<td>
								<check-value :value="props.item.status"></check-value>
							</td>
						</tr>
					</template>

				</data-viewer>

			</div>

		</div>

		<!-- divider -->
		<hr>
		
		<!-- tombol desktop-->
		<div class="text-center d-none d-md-block">
			<button type="button" class="btn btn-light" @click.prevent="tutup">
				<i class="icon-cross"></i> Tutup</button>

			<button type="submit" class="btn btn-primary" :disabled="formData.cu_id == ''">
				<i class="icon-floppy-disk"></i> Simpan</button>
		</div>  

		<!-- tombol mobile-->
		<div class="d-block d-md-none">
			<button type="submit" class="btn btn-primary btn-block pb-2" :disabled="formData.cu_id == ''">
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
	import checkValue from '../../components/checkValue.vue';
	import Message from "../../components/message.vue";
	import Cleave from 'vue-cleave-component';
	import infoIcon from "../../components/infoIcon.vue";
	import wajibBadge from "../../components/wajibBadge.vue";
	import identitas from "./identitas.vue";
	import DataViewer from '../../components/dataviewer2.vue';

	export default {
		props: ['selected'],
		components: {
			checkValue,
			Message,
			Cleave,
			infoIcon,
			wajibBadge,
			identitas,
			DataViewer
		},
		data() {
			return {
				kelas: 'user',
				formData:{},
				selectedItem: [],
				query: {
					order_column: "name",
					order_direction: "asc",
					filter_match: "and",
					limit: 10,
					page: 1
				},
				columnData: [
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
					{ title: 'CU',disable: false },
					{ title: 'Tingkat' },
					{ title: 'Jabatan' },
					{ title: 'Pendidikan'},
					{ title: 'Jurusan' },
					{ title: 'Tgl. Lahir' },
					{ title: 'Tempat Lahir' },
					{ title: 'Tinggi' },
					{ title: 'Agama' },
					{ title: 'Status Pernikahan' },
				],
				cleaveOption: {
					date:{
            date: true,
            datePattern: ['Y','m','d'],
            delimiter: '-'
					},
          numeric: {
            numeral: true,
            numeralThousandsGroupStyle: 'thousand',
            numeralDecimalScale: 2,
            numeralDecimalMark: ',',
            delimiter: '.'
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
			if(this.modelCuStat != 'success'){
				this.$store.dispatch('cu/getHeader');
			}
			this.formData = Object.assign({}, this.selected);
			if(!this.formData.aktivis){
				this.fetchAktivis(this.query);
			}
		},
		watch: {},
		methods: {
			fetchAktivis(params){
				this.$store.dispatch('aktivis/indexCu', [params,this.formData.id_cu,'semua','aktif'])
				this.disableColumnCu(true);
			},
			changeCU(value){
				this.fetchAktivis(this.query);
			},
			disableColumnCu(value){
				this.columnData[4].disable = value;
			},
			selectedRow(item){
				this.selectedItem = item;
				this.formData.id_aktivis = item.id;
				this.formData.aktivis = item;
			},
			deleteSelected(){
				this.selectedItem = [];
				this.formData.id_aktivis = '';
				this.formData.aktivis = {};
				this.fetchAktivis(this.query);
			},
			save(){
				this.$validator.validateAll('formData').then((result) => {
					if (result) {
						this.$store.dispatch(this.kelas + '/update',[this.selected.id, this.formData]);
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
			...mapGetters('cu',{
				modelCU: 'headerDataS',
				modelCUStat: 'headerDataStatS',
				updateMessage: 'update',
				updateStat: 'updateStat'
			}),
			...mapGetters('aktivis',{
				itemData: 'dataS',
				itemDataStat: 'dataStatS'
			}),
		}
	}
</script>