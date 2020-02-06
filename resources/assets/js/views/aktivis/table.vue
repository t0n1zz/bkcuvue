`<template>
	<div>

		<!-- main panel -->
		<data-viewer :title="title" :columnData="columnData" :itemData="itemData" :query="query" :itemDataStat="itemDataStat" :excelDownloadUrl="excelDownloadUrl" @fetch="fetch">

			<!-- desktop -->
			<!-- button desktop -->
			<template slot="button-desktop">

				<!-- tambah -->
				<router-link :to="{ name: kelas + 'Create'}" class="btn btn-light btn-icon mb-1" v-if="currentUser.can && currentUser.can['create_' + kelas]">
					<i class="icon-plus3"></i> Tambah
				</router-link>

				<!-- ubah identitas -->
				<button @click.prevent="ubah(selectedItem.id,'identitas')" class="btn btn-light btn-icon mb-1" v-if="currentUser.can && currentUser.can['update_' + kelas]" :disabled="!selectedItem.id">
					<i class="icon-pencil5"></i> Ubah Identitas
				</button>

				<!-- ubah riwayat -->
				<button @click.prevent="ubah(selectedItem.id,'riwayat')" class="btn btn-light btn-icon mb-1"  :disabled="!selectedItem.id">
					<span v-if="currentUser.can && currentUser.can['update_' + kelas]">
						<i class="icon-pencil5"></i> Ubah Riwayat
					</span>
					<span v-else>
						<i class="icon-profile"></i> Riwayat
					</span>	
				</button>

				<!-- hapus -->
				<button @click.prevent="modalConfirmOpen('hapus')" class="btn btn-light btn-icon mb-1" v-if="currentUser.can && currentUser.can['destroy_' + kelas]" :disabled="!selectedItem.id">
					<i class="icon-bin2"></i> Hapus
				</button>

			</template>

			<!-- button mobile -->
			<template slot="button-mobile">

				<!-- tambah -->
				<router-link :to="{ name: kelas + 'Create'}" class="btn btn-light btn-icon btn-block mb-1" v-if="currentUser.can && currentUser.can['create_' + kelas]">
					<i class="icon-plus3"></i> Tambah
				</router-link>

				<!-- ubah identitas -->
				<button @click.prevent="ubah(selectedItem.id,'identitas')" class="btn btn-light btn-icon btn-block mb-1" :disabled="!selectedItem.id">
					<span v-if="currentUser.can && currentUser.can['update_' + kelas]">
						<i class="icon-pencil5"></i> Ubah Riwayat
					</span>
					<span v-else>
						<i class="icon-profile"></i> Riwayat
					</span>	
				</button>

				<!-- ubah riwayat -->
				<button @click.prevent="ubah(selectedItem.id,'riwayat')" class="btn btn-light btn-icon btn-block mb-1" v-if="currentUser.can && currentUser.can['update_' + kelas]" :disabled="!selectedItem.id">
					<i class="icon-pencil5"></i> Ubah Riwayat
				</button>

				<!-- hapus -->
				<button @click.prevent="modalConfirmOpen('hapus')" class="btn btn-light btn-icon btn-block mb-1" v-if="currentUser.can && currentUser.can['destroy_' + kelas]" :disabled="!selectedItem.id">
					<i class="icon-bin2"></i> Hapus
				</button>

			</template>

			<!-- item  -->
			<template slot="item-desktop" slot-scope="props">
				<tr :class="{ 'bg-info': selectedItem.id === props.item.id }" class="text-nowrap" @click="selectedRow(props.item)">
					<td v-if="!columnData[0].hide">
						{{ props.index + 1 + (+itemData.current_page-1) * +itemData.per_page + '.'}}
					</td>
					<td v-if="!columnData[1].hide">
						<img :src="'/images/' + kelas + '/' + props.item.gambar + 'n.jpg'" class="img-rounded img-fluid wmin-sm" v-if="props.item.gambar">
						<img :src="'/images/no_image_man.jpg'" class="img-rounded img-fluid wmin-sm" v-else>
					</td>
					<td v-if="!columnData[2].hide">
						<check-value :value="props.item.name"></check-value>
					</td>
					<td v-if="!columnData[3].hide && !columnData[3].disable">
						<check-value :value="props.item.nim"></check-value>
					</td>
					<td v-if="!columnData[4].hide">
						<check-value :value="props.item.nim_cu"></check-value>
					</td>
					<td v-if="!columnData[5].hide">
						<check-value :value="props.item.nik"></check-value>
					</td>
					<td v-if="!columnData[6].hide">
						<check-value :value="props.item.npwp"></check-value>
					</td>
					<td v-if="!columnData[7].hide && !columnData[7].disable">
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
					<td v-if="!columnData[8].hide && !columnData[8].disable && props.item.pekerjaan_aktif.tingkat" v-html="$options.filters.checkTingkatAktivis(props.item.pekerjaan_aktif.tingkat)">
					</td>
					<td v-if="!columnData[9].hide && !columnData[9].disable">
						<check-value :value="props.item.pekerjaan_aktif.name" v-if="props.item.pekerjaan_aktif"></check-value>
						<span v-else>-</span>
					</td>
					<td v-if="!columnData[10].hide && !columnData[10].disable">
						<span v-if="props.item.pekerjaan_tidak_aktif && props.item.pekerjaan_tidak_aktif.tipe == 1">
							<check-value :value="props.item.pekerjaan_tidak_aktif.cu.name" v-if="props.item.pekerjaan_tidak_aktif.cu"></check-value>
							<span v-else>-</span>
						</span>
						<span v-else-if="props.item.pekerjaan_tidak_aktif && props.item.pekerjaan_tidak_aktif.tipe == 2">
							<check-value :value="props.item.pekerjaan_tidak_aktif.lembaga_lain.name" v-if="props.item.pekerjaan_tidak_aktif.lembaga_lain"></check-value>
							<span v-else>-</span>
						</span>
						<span v-else-if="props.item.pekerjaan_tidak_aktif && props.item.pekerjaan_tidak_aktif.tipe == 3">
							Puskopdit BKCU Kalimantan
						</span>
						<span v-else>-</span>
					</td>
					<td v-if="!columnData[11].hide && !columnData[11].disable">
					<check-value :value="props.item.pekerjaan_tidak_aktif.keterangan_tidak_aktif" v-if="props.item.pekerjaan_tidak_aktif"></check-value>
						<span v-else>-</span>
					</td>
					<td v-if="!columnData[12].hide && !columnData[12].disable" v-html="$options.filters.checkTingkatAktivis(props.item.pekerjaan_tidak_aktif.tingkat)"></td>
					<td v-if="!columnData[13].hide && !columnData[13].disable">
						<check-value :value="props.item.pekerjaan_tidak_aktif.name" v-if="props.item.pekerjaan_tidak_aktif"></check-value>
						<span v-else>-</span>
					</td>
					<td v-if="!columnData[14].hide">
					<check-value :value="props.item.pendidikan_tertinggi.tingkat" v-if="props.item.pendidikan_tertinggi"></check-value>
						<span v-else>-</span>
					</td>
					<td v-if="!columnData[15].hide">
						<check-value :value="props.item.pendidikan_tertinggi.name" v-if="props.item.pendidikan_tertinggi"></check-value>
						<span v-else>-</span>
					</td>
					<td v-if="!columnData[16].hide">
						<check-value :value="props.item.email"></check-value>
					</td>
					<td v-if="!columnData[17].hide">
						<check-value :value="props.item.hp"></check-value>
					</td>
					<td v-if="!columnData[18].hide">
						<check-value :value="props.item.kontak"></check-value>
					</td>
					<td v-if="!columnData[19].hide">
						<check-value :value="props.item.kelamin"></check-value>
					</td>
					<td v-if="!columnData[20].hide">
						<check-value :value="props.item.darah"></check-value>
					</td>
					<td v-if="!columnData[21].hide">
						<check-value :value="props.item.tinggi"></check-value>
					</td>
					<td v-if="!columnData[22].hide">
						<check-value :value="props.item.agama"></check-value>
					</td>
					<td v-if="!columnData[23].hide">
						<check-value :value="props.item.status"></check-value>
					</td>
					<td v-if="!columnData[24].hide" v-html="$options.filters.date(props.item.tanggal_lahir)">
					</td>
					<td v-if="!columnData[25].hide">
						<check-value :value="props.item.tempat_lahir"></check-value>
					</td>
					<td v-if="!columnData[26].hide && !columnData[26].disable">
						<check-value :value="props.item.provinces.name" v-if="props.item.provinces"></check-value>
						<span v-else>-</span>	
					</td>
					<td v-if="!columnData[27].hide && !columnData[27].disable">
						<check-value :value="props.item.regencies.name" v-if="props.item.regencies"></check-value>
						<span v-else>-</span>	
					</td>
					<td v-if="!columnData[28].hide && !columnData[28].disable">
						<check-value :value="props.item.districts.name" v-if="props.item.districts"></check-value>
						<span v-else>-</span>	
					</td>
					<td v-if="!columnData[29].hide && !columnData[29].disable">
						<check-value :value="props.item.villages.name" v-if="props.item.villages"></check-value>
						<span v-else>-</span>	
					</td>
					<td v-if="!columnData[30].hide">
						<check-value :value="props.item.alamat"></check-value>
					</td>
					<td v-if="!columnData[31].hide" v-html="$options.filters.dateTime(props.item.created_at)" class="text-nowrap"></td>
					<td v-if="!columnData[32].hide">
						<span v-if="props.item.created_at !== props.item.updated_at" v-html="$options.filters.dateTime(props.item.updated_at)"></span>
						<span v-else>-</span>
					</td>
				</tr>
			</template>

		</data-viewer>
					
		<!-- modal -->
		<app-modal :show="modalShow" :state="modalState" :title="modalTitle" :button="modalButton" :content="modalContent" @tutup="modalTutup" @confirmOk="modalConfirmOk" @successOk="modalTutup" @failOk="modalTutup" @backgroundClick="modalTutup">
		</app-modal>

	</div>
</template>

<script>
	import { mapGetters } from 'vuex';
	import DataViewer from '../../components/dataviewer2.vue';
	import appModal from '../../components/modal';
	import collapseButton from '../../components/collapseButton.vue';
	import checkValue from '../../components/checkValue.vue';

	export default {
		components: {
			DataViewer,
			appModal,
			collapseButton,
			checkValue
		},
		props:['title','kelas','status','itemData','itemDataStat'],
		data() {
			return {
				selectedItem: [],
				query: {
					order_column: "name",
					order_direction: "asc",
					filter_match: "and",
					limit: 10,
					page: 1
				},
				excelDownloadUrl:'',
				columnData: [
					{
						title: 'No.',
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
						title: 'NIM Sistem',
						name: 'nim',
						tipe: 'string',
						sort: true,
						hide: false,
						disable: true,
						filter: true,
					},
					{
						title: 'NIM Lembaga',
						name: 'nim_cu',
						tipe: 'string',
						sort: true,
						hide: false,
						disable: false,
						filter: true,
					},
					{
						title: 'No. KTP',
						name: 'nik',
						tipe: 'string',
						sort: true,
						hide: false,
						disable: false,
						filter: true,
					},
					{
						title: 'NPWP',
						name: 'npwp',
						tipe: 'string',
						sort: true,
						hide: false,
						disable: false,
						filter: true,
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
						title: 'CU',
						name: 'pekerjaan_tidak_aktif.cu.name',
						tipe: 'string',
						sort: false,
						hide: false,
						disable: false,
						filter: false,
					},
					{
						title: 'Keterangan Tidak Aktif',
						name: 'pekerjaan_tidak_aktif.keterangan_tidak_aktif',
						tipe: 'string',
						sort: false,
						hide: false,
						disable: false,
						filter: false,
					},
					{
						title: 'Tingkat Terakhir',
						name: 'pekerjaan_tidak_aktif.tingkat',
						tipe: 'string',
						sort: false,
						hide: false,
						disable: false,
						filter: false,
					},
					{
						title: 'Jabatan Terakhir',
						name: 'pekerjaan_tidak_aktif.name',
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
					{
						title: 'Email',
						name: 'email',
						tipe: 'string',
						sort: true,
						hide: false,
						disable: false,
						filter: true,
					},
					{
						title: 'Hp',
						name: 'hp',
						tipe: 'numeric',
						sort: true,
						hide: false,
						disable: false,
						filter: true,
					},
					{
						title: 'Kontak Lain',
						name: 'kontak',
						tipe: 'string',
						sort: false,
						hide: false,
						disable: false,
						filter: true,
					},
					{
						title: 'Gender',
						name: 'kelamin',
						tipe: 'string',
						sort: true,
						hide: false,
						disable: false,
						filter: true,
					},
					{
						title: 'Gol. Darah',
						name: 'darah',
						tipe: 'string',
						sort: true,
						hide: false,
						disable: false,
						filter: true,
					},
					{
						title: 'Tinggi',
						name: 'tinggi',
						tipe: 'numeric',
						sort: true,
						hide: false,
						disable: false,
						filter: true,
					},
					{
						title: 'Agama',
						name: 'agama',
						tipe: 'string',
						sort: true,
						hide: false,
						disable: false,
						filter: true,
					},
					{
						title: 'Status Pernikahan',
						name: 'status',
						tipe: 'string',
						sort: true,
						hide: false,
						disable: false,
						filter: true,
					},
					{
						title: 'Tgl. Lahir',
						name: 'tanggal_lahir',
						tipe: 'datetime',
						sort: true,
						hide: false,
						disable: false,
						filter: true,
					},
					{
						title: 'Tempat Lahir',
						name: 'tempat_lahir',
						tipe: 'string',
						sort: true,
						hide: false,
						disable: false,
						filter: true,
					},
					{
						title: 'Provinsi',
						name: 'provinces.name',
						tipe: 'string',
						sort: false,
						hide: false,
						disable: false,
						filter: true,
					},
					{
						title: 'Kabupaten',
						name: 'regencies.name',
						tipe: 'string',
						sort: false,
						hide: false,
						disable: false,
						filter: true,
					},
					{
						title: 'Kecamatan',
						name: 'districts.name',
						tipe: 'string',
						sort: false,
						hide: false,
						disable: false,
						filter: true,
					},
					{
						title: 'Kelurahan',
						name: 'villages.name',
						tipe: 'string',
						sort: false,
						hide: false,
						disable: false,
						filter: true,
					},
					{
						title: 'Alamat',
						name: 'alamat',
						tipe: 'string',
						sort: false,
						hide: false,
						disable: false,
						filter: true,
					},
					{
						title: 'Tgl. / Waktu Buat',
						name: 'created_at',
						tipe: 'datetime',
						sort: true,
						hide: false,
						disable: false,
						filter: true,
					},
					{
						title: 'Tgl. / Waktu Ubah',
						name: 'updated_at',
						tipe: 'datetime',
						sort: true,
						hide: false,
						disable: false,
						filter: true,
					}
				],
				state: '',
				modalShow: false,
				modalState: '',
				modalTitle: '',
				modalContent: '',
				modalButton: ''
			}
		},
		created(){
			this.fetch(this.query);
		},
		watch: {
			// check route changes
			'$route' (to, from){
				this.fetch(this.query);
			},

      updateStat(value) {
				this.modalState = value;
				this.modalButton = 'Ok';
				
				if(value === "success"){
					this.modalTitle = this.updateMessage.message;
					this.modalContent = '';
					this.fetch();
				}else if(value === "fail"){
					this.modalContent = this.updateMessage;
				}else{
					this.modalContent = '';
				}
      }
    },
		methods: {
			fetch(params){
				this.disableColumnStatus();

				if(this.$route.params.cu == 'semua'){
					this.disableColumnCu(false);
					this.$store.dispatch(this.kelas + '/index', [params, this.$route.params.tingkat, this.status]);
					this.excelDownloadUrl = this.kelas + '/index/' + this.$route.params.tingkat + '/' + this.status;
				}else{
					this.disableColumnCu(true);

					if(this.$route.params.tingkat != 'semua' && this.$route.params.tingkat != 'manajemen'){
						this.disableColumnTingkat(true);
					}else{
						this.disableColumnTingkat(false);
					}

					this.$store.dispatch(this.kelas + '/indexCu', [params,this.$route.params.cu, this.$route.params.tingkat, this.status]);
					this.excelDownloadUrl = this.kelas + '/indexCu/' + this.$route.params.cu + '/' + this.$route.params.tingkat + '/' + this.status;
				}
			},
			disableColumnCu(status){
				if(this.status == 'aktif'){
					this.columnData[7].disable = status;
				}else{
					this.columnData[10].disable = status;
				}
			},
			disableColumnTingkat(status){
				if(this.status == 'aktif'){
					this.columnData[8].disable = status;
				}else{
					this.columnData[11].disable = status;
				}
			},
			disableColumnStatus(){
				if(this.status == 'aktif'){
					this.columnData[7].disable = false;
					this.columnData[8].disable = false;
					this.columnData[9].disable = false;
					this.columnData[10].disable = true;
					this.columnData[11].disable = true;
					this.columnData[12].disable = true;
					this.columnData[13].disable = true;
				}else{
					this.columnData[7].disable = true;
					this.columnData[8].disable = true;
					this.columnData[9].disable = true;
					this.columnData[10].disable = false;
					this.columnData[11].disable = false;
					this.columnData[12].disable = false;
					this.columnData[13].disable = false;
				}
			},
			selectedRow(item){
				this.selectedItem = item;
			},
			ubah(id, type) {
				if(type == 'identitas'){
					this.$router.push({name: this.kelas + 'Edit', params: { id: id }});
				}else if(type == 'riwayat'){
					this.$router.push({name: this.kelas + 'RiwayatEdit', params: { id: id }});
				}
			},
			modalConfirmOpen(state, isMobile, itemMobile) {
				this.modalShow = true;
				this.modalState = 'confirm-tutup';
				this.state = state;

				if(isMobile){
					this.selectedItem = itemMobile;
				}

				if (state == 'hapus') {
					this.modalTitle = 'Hapus ' + this.title + ' ' + this.selectedItem.name + ' ini?';
					this.modalButton = 'Iya, Hapus';
				}
			},
			modalTutup() {
				this.modalShow = false;
				this.$store.dispatch(this.kelas + '/resetUpdateStat');
			},
			modalConfirmOk() {
				if (this.state == 'hapus') {
					this.$store.dispatch(this.kelas + '/destroy', this.selectedItem.id);
				}
			}
		},
		computed: {
			...mapGetters('auth',{
				currentUser: 'currentUser'
			}),
			...mapGetters('global',{
				idCu: 'idCu'
			}),
			...mapGetters('cu',{
				modelCu: 'dataS',
				modelCuStat: 'dataStatS',
			}),
			...mapGetters('aktivis',{
				updateMessage: 'update',
				updateStat: 'updateStat'
			})
		}
	}
</script>