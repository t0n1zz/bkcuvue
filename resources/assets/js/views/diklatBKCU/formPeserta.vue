<template>
	<div>

		<div class="alert bg-info text-white alert-styled-left alert-dismissible">
			<span class="font-weight-semibold">Sasaran peserta untuk diklat ini adalah untuk tingkat: 
				<br/>
				<label v-for="sasaran in tingkat" class="badge badge-primary ml-1">
					{{ sasaran.name }}
				</label>
			</span>
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

		<!-- peserta -->
		<data-viewer :columnData="columnData" :itemData="itemData" :query="query" :itemDataStat="itemDataStat" @fetch="fetch" v-if="mode == 'create'">

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

		<!-- message -->
		<message v-if="message.show" :title="'Oops terjadi kesalahan'" :errorData="message.content" :showDebug="false">
		</message>

		<!-- divider -->
		<hr>
		
		<!-- tombol desktop-->
		<div class="text-center d-none d-md-block">
			<button class="btn btn-light" @click.prevent="tutup">
				<i class="icon-cross"></i> Tutup</button>

			<button class="btn btn-primary" @click.prevent="simpan" :disabled="form.aktivis_id == ''">
				<i class="icon-floppy-disk"></i> Simpan</button>
		</div>  

		<!-- tombol mobile-->
		<div class="d-block d-md-none">
			<button class="btn btn-primary btn-block pb-2" @click.prevent="simpan" :disabled="form.aktivis_id == ''">
				<i class="icon-floppy-disk"></i> Simpan</button>

			<button class="btn btn-light btn-block pb-2" @click.prevent="tutup">
				<i class="icon-cross"></i> Tutup</button>
			
		</div> 

	</div>
</template>

<script>
	import _ from 'lodash';
	import { mapGetters } from 'vuex';
	import checkValue from '../../components/checkValue.vue';
	import DataViewer from '../../components/dataviewerName.vue';
	import Message from "../../components/message.vue";

	export default {
		props: ['mode','selected','kegiatan_id','tingkat'],
		components: {
			DataViewer,
			checkValue,
			Message
		},
		data() {
			return {
				title: '',
				kelas: 'aktivis',
				selectedItem: [],
				tingkatArray: [],
				form:{
					aktivis_id: '',
					kegiatan_id: '',
					keterangan: '',
					tingkat: '',
				},
				query: {
					order_column: "name",
					order_direction: "asc",
					filter_match: "and",
					limit: 10,
					page: 1
				},
				message: {
					show: false,
					content: ''
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
			}else{
				var i;
				for(i = 0; i < this.tingkat.length; i++){
					this.tingkatArray.push(this.tingkat[i].id);
				}
			}
		},
		methods: {
			fetch(params){
				this.$store.dispatch('aktivis/index', [params,'semua']);
			},
			selectedRow(item){
				this.selectedItem = item;
				this.form.aktivis_id = item.id;
				this.form.kegiatan_id = this.kegiatan_id;
				this.form.tingkat = item.pekerjaan_aktif.tingkat;
			},
			simpan(){
				if(this.mode == 'edit'){
					this.$store.dispatch('diklatBKCU/updatePeserta', [this.form.id, this.form]);
				}else{
					if(this.tingkatArray.includes(this.form.tingkat)){
						this.$store.dispatch('diklatBKCU/storePeserta', [this.kegiatan_id, this.form]);
					}else{
						this.message.show = true;
						this.message.content = "Maaf peserta ini tidak memenuhi persyaratan sasaran peserta";
					}
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