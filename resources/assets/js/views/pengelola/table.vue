<template>
	<div>

		<!-- main panel -->
		<data-viewer :title="title" :source="source" :columnData="columnData" :toolbarButton="4" :itemData="itemData" :itemDataStat="itemDataStat" 
		:params="params"
		@fetch="fetch">

			<!-- desktop -->
			<!-- button desktop -->
			<template slot="button-desktop">

				<!-- tambah -->
				<div class="btn-group pb-5" v-if="profile.can && profile.can['create_' + kelas]">
					<router-link :to="{ name: kelas + 'Create'}" class="btn btn-default btn-icon" v-tooltip:top="'Tambah ' +  title">
						<i class="icon-plus3"></i> Tambah 
					</router-link>
				</div>

				<!-- ubah-->
				<div class="btn-group pb-5" v-if="profile.can && profile.can['update_' + kelas]">
					<button @click.prevent="ubahData(selectedItem.id)" class="btn btn-default btn-icon" v-tooltip:top="'Ubah ' + title" :disabled="!selectedItem.id">
						<i class="icon-pencil5"></i> Ubah
					</button>
				</div>

				<!-- hapus -->
				<div class="btn-group pb-5" v-if="profile.can && profile.can['destroy_' + kelas]">
					<button @click.prevent="modalConfirmOpen('hapus')" class="btn btn-default btn-icon" v-tooltip:top="'Hapus ' + title"  :disabled="!selectedItem.id">
						<i class="icon-bin2"></i> Hapus
					</button>
				</div>
			</template>

			<!-- button context -->
			<template slot="button-context">
				<!-- title -->
				<li class="text-center pb-5 pt-5 bg-primary" v-if="selectedItem.name"><b class="text-size-large">{{ this.columnData[1].title }}</b></li>
				<li class="text-center pb-5 pt-5 bg-warning" v-else><b class="text-size-large">Tidak ada data yang terpilih</b></li>
				<li><hr class="no-margin-bottom no-margin-top"/></li>

				<!-- selected content -->
				<li class="text-center pb-10 pt-10 pl-5 pr-5" v-if="selectedItem.name">
					<span class="text-size-large">{{selectedItem.name}}</span></li>
				<li><hr class="no-margin-top no-margin-bottom"/></li>

				<!-- update -->
				<li v-if="profile.can && profile.can['update_' + kelas]">
					<div class="pl-5 pr-5 pb-5 pt-10">
						<button @click.prevent="ubahData(selectedItem.id)" class="btn btn-default btn-icon btn-block" v-tooltip:top="'Ubah ' + title" :disabled="!selectedItem.id">
							<i class="icon-pencil5"></i> Ubah
						</button>
					</div>
				</li>

				<!-- destroy -->
				<li v-if="profile.can && profile.can['destroy_' + kelas]">
					<div class="pl-5 pr-5 pb-5">
						<button @click.prevent="modalConfirmOpen('hapus')" class="btn btn-default btn-icon btn-block" v-tooltip:top="'Hapus ' + title"  :disabled="!selectedItem.id">
							<i class="icon-bin2"></i> Hapus
						</button>
					</div>
				</li>

			</template>

			<!-- item desktop -->
			<template slot="item-desktop" slot-scope="props">
				<tr :class="{ 'info': selectedItem.id === props.item.id }" class="text-nowrap" @click="selectedRow(props.item)">
					<td v-if="!columnData[0].hide">
						{{ props.index + 1 + (+itemData.current_page-1) * +itemData.per_page + '.'}}
					</td>
					<td v-if="!columnData[1].hide">
						<img :src="'/images/' + kelas + '/' + props.item.gambar + 'n.jpg'" class="img-rounded img-responsive img-sm" v-if="props.item.gambar">
						<img :src="'/images/no_image.jpg'" class="img-rounded img-responsive img-sm" v-else>
					</td>
					<td v-if="!columnData[2].hide">
						<check-value :value="props.item.name"></check-value>
					</td>
					<td v-if="!columnData[3].hide">
						<check-value :value="props.item.nim"></check-value>
					</td>
					<td v-if="!columnData[4].hide">
						<check-value :value="props.item.nik"></check-value>
					</td>
					<td v-if="!columnData[5].hide && !columnData[5].disable">
						<check-value :value="props.item.pekerjaan_aktif.cu.name" v-if="props.item.pekerjaan_aktif"></check-value>
						<span v-else>{{columnData[5].groupNoKey}}</span>
					</td>
					<td v-if="!columnData[6].hide">
						<check-value :value="props.item.pekerjaan_aktif.tingkat"></check-value>
					</td>
					<td v-if="!columnData[7].hide">
						<check-value :value="props.item.pekerjaan_aktif.name"></check-value>
					</td>
					<td v-if="!columnData[8].hide">
						<check-value :value="props.item.pendidikan_tertinggi.tingkat"></check-value>
					</td>
					<td v-if="!columnData[9].hide">
						<check-value :value="props.item.pendidikan_tertinggi.name"></check-value>
					</td>
					<td v-if="!columnData[10].hide">
						<check-value :value="props.item.email"></check-value>
					</td>
					<td v-if="!columnData[11].hide">
						<check-value :value="props.item.hp"></check-value>
					</td>
					<td v-if="!columnData[12].hide">
						<check-value :value="props.item.kontak"></check-value>
					</td>
					<td v-if="!columnData[13].hide">
						<check-value :value="props.item.kelamin"></check-value>
					</td>
					<td v-if="!columnData[14].hide">
						<check-value :value="props.item.darah"></check-value>
					</td>
					<td v-if="!columnData[15].hide">
						<check-value :value="props.item.tinggi"></check-value>
					</td>
					<td v-if="!columnData[16].hide">
						<check-value :value="props.item.berat"></check-value>
					</td>
					<td v-if="!columnData[17].hide">
						<check-value :value="props.item.agama"></check-value>
					</td>
					<td v-if="!columnData[18].hide">
						<check-value :value="props.item.status"></check-value>
					</td>
					<td v-if="!columnData[19].hide" v-html="$options.filters.date(props.item.tanggal_lahir)">
					</td>
					<td v-if="!columnData[20].hide">
						<check-value :value="props.item.tempat_lahir"></check-value>
					</td>
					<td v-if="!columnData[21].hide">
						<check-value :value="props.item.alamat"></check-value>
					</td>
					<td v-if="!columnData[22].hide" v-html="$options.filters.dateTime(props.item.created_at)" class="text-nowrap"></td>
					<td v-if="!columnData[23].hide">
						<span v-if="props.item.created_at !== props.item.updated_at" v-html="$options.filters.dateTime(props.item.updated_at)"></span>
						<span v-else>-</span>
					</td>
				</tr>
			</template>

			<!-- mobile -->
			<!-- button mobile -->
			<template slot="button-mobile" class="hidden-print" v-if="profile.can && profile.can['create_' + kelas]">
				<!-- tambah -->
				<router-link :to="{ name: kelas + 'Create'}" class="btn btn-default btn-icon btn-block">
					<i class="icon-plus3"></i> Tambah
				</router-link>
			</template>
	
			<!-- item mobile -->
			<template slot="item-mobile" slot-scope="props">
				<div class="panel panel-flat visible-xs">
					<table class="table table-striped">
						<tbody>
							<tr v-if="!columnData[0].hide">
								<td colspan="2" class="text-center bg-primary-300"><b>{{ props.index + 1 + (+itemData.current_page-1) * +itemData.per_page}}</b></td>
							</tr>
							<tr v-if="!columnData[1].hide">
								<td colspan="2">
									<img :src="'/images/' + kelas + '/' + props.item.gambar + 'n.jpg'" class="img-rounded img-responsive center-block" v-if="props.item.gambar">
									<img :src="'/images/no_image.jpg'" class="img-rounded img-responsive center-block" v-else>
								</td>
							</tr>
							<tr v-if="!columnData[2].hide">
								<td><b>{{columnData[2].title}}</b></td>
								<td><check-value :value="props.item.name" :isTrim="false" :frontText="': '"></check-value></td>
							</tr>
							<tr v-if="!columnData[3].hide">
								<td><b>{{columnData[3].title}}</b></td>
								<td><check-value :value="props.item.nim" :isTrim="false" :frontText="': '"></check-value></td>
							</tr>
							<tr v-if="!columnData[4].hide">
								<td><b>{{columnData[4].title}}</b></td>
								<td><check-value :value="props.item.nik" :isTrim="false" :frontText="': '"></check-value></td>
							</tr>
							<tr v-if="!columnData[5].hide">
								<td><b>{{columnData[5].title}}</b></td>
								<td>
									<check-value :value="props.item.pekerjaan_aktif.cu.name" :isTrim="false" :frontText="': '" v-if="props.item.pekerjaan_aktif"></check-value>
									<span v-else>: {{columnData[5].groupNoKey}}</span>	
								</td>
							</tr>
							<tr v-if="!columnData[6].hide">
								<td><b>{{columnData[6].title}}</b></td>
								<td>
									<check-value :value="props.item.pekerjaan_aktif.tingkat" :isTrim="false" :frontText="': '" v-if="props.item.pekerjaan_aktif"></check-value>
									<span v-else>: {{columnData[6].groupNoKey}}</span>	
								</td>
							</tr>
							<tr v-if="!columnData[7].hide">
								<td><b>{{columnData[7].title}}</b></td>
								<td>
									<check-value :value="props.item.pekerjaan_aktif.name" :isTrim="false" :frontText="': '" v-if="props.item.pekerjaan_aktif.name"></check-value>
									<span v-else>: {{columnData[7].groupNoKey}}</span>	
								</td>
							</tr>
							<tr v-if="!columnData[8].hide" class="collapse" :class="'collap'+props.item.id">
								<td><b>{{columnData[8].title}}</b></td>
								<td>
									<check-value :value="props.item.pendidikan_tertinggi.tingkat" :isTrim="false" :frontText="': '" v-if="props.item.pendidikan_tertinggi"></check-value>
									<span v-else>: {{columnData[8].groupNoKey}}</span>	
								</td>
							</tr>
							<tr v-if="!columnData[9].hide" class="collapse" :class="'collap'+props.item.id">
								<td><b>{{columnData[9].title}}</b></td>
								<td>
									<check-value :value="props.item.pendidikan_tertinggi.name" :isTrim="false" :frontText="': '" v-if="props.item.pendidikan_tertinggi"></check-value>
									<span v-else>: {{columnData[9].groupNoKey}}</span>	
								</td>
							</tr>
							<tr v-if="!columnData[10].hide" class="collapse" :class="'collap'+props.item.id">
								<td><b>{{columnData[10].title}}</b></td>
								<td><check-value :value="props.item.email" :isTrim="false" :frontText="': '"></check-value></td>
							</tr>
							<tr v-if="!columnData[11].hide" class="collapse" :class="'collap'+props.item.id">
								<td><b>{{columnData[11].title}}</b></td>
								<td><check-value :value="props.item.hp" :isTrim="false" :frontText="': '"></check-value></td>
							</tr>
							<tr v-if="!columnData[12].hide" class="collapse" :class="'collap'+props.item.id">
								<td><b>{{columnData[12].title}}</b></td>
								<td><check-value :value="props.item.kontak" :isTrim="false" :frontText="': '"></check-value></td>
							</tr>
							<tr v-if="!columnData[13].hide" class="collapse" :class="'collap'+props.item.id">
								<td><b>{{columnData[13].title}}</b></td>
								<td><check-value :value="props.item.kelamin" :isTrim="false" :frontText="': '"></check-value></td>
							</tr>
							<tr v-if="!columnData[14].hide" class="collapse" :class="'collap'+props.item.id">
								<td><b>{{columnData[14].title}}</b></td>
								<td><check-value :value="props.item.darah" :isTrim="false" :frontText="': '"></check-value></td>
							</tr>
							<tr v-if="!columnData[15].hide" class="collapse" :class="'collap'+props.item.id">
								<td><b>{{columnData[15].title}}</b></td>
								<td><check-value :value="props.item.tinggi" :isTrim="false" :frontText="': '"></check-value></td>
							</tr>
							<tr v-if="!columnData[16].hide" class="collapse" :class="'collap'+props.item.id">
								<td><b>{{columnData[16].title}}</b></td>
								<td><check-value :value="props.item.berat" :isTrim="false" :frontText="': '"></check-value></td>
							</tr>
							<tr v-if="!columnData[17].hide" class="collapse" :class="'collap'+props.item.id">
								<td><b>{{columnData[17].title}}</b></td>
								<td><check-value :value="props.item.agama" :isTrim="false" :frontText="': '"></check-value></td>
							</tr>
							<tr v-if="!columnData[18].hide" class="collapse" :class="'collap'+props.item.id">
								<td><b>{{columnData[18].title}}</b></td>
								<td><check-value :value="props.item.status" :isTrim="false" :frontText="': '"></check-value></td>
							</tr>
							<tr v-if="!columnData[19].hide" class="collapse" :class="'collap'+props.item.id">
								<td><b>{{columnData[19].title}}</b></td>
								<td>
									: <span v-html="$options.filters.date(props.item.tanggal_lahir)"></span>
								</td>
							</tr>
							<tr v-if="!columnData[20].hide" class="collapse" :class="'collap'+props.item.id">
								<td><b>{{columnData[20].title}}</b></td>
								<td><check-value :value="props.item.tempat_lahir" :isTrim="false" :frontText="': '"></check-value></td>
							</tr>
							<tr v-if="!columnData[21].hide" class="collapse" :class="'collap'+props.item.id">
								<td><b>{{columnData[21].title}}</b></td>
								<td><check-value :value="props.item.alamat" :isTrim="false" :frontText="': '"></check-value></td>
							</tr>
							<tr v-if="!columnData[22].hide" class="collapse" :class="'collap'+props.item.id">
								<td><b>{{columnData[22].title}}</b></td>
								<td>
									: <span v-html="$options.filters.dateTime(props.item.created_at)"></span>
								</td>
							</tr>
							<tr v-if="!columnData[23].hide" class="collapse" :class="'collap'+props.item.id">
								<td><b>{{columnData[23].title}}</b></td>
								<td>
									: <span v-if="props.item.created_at !== props.item.updated_at" v-html="$options.filters.dateTime(props.item.updated_at)"></span>
									<span v-else>-</span> 
								</td>
							</tr>
							<tr>
								<td colspan="2">
									<collapse-button :id="props.item.id"></collapse-button>
								</td>
							</tr>
						</tbody>
					</table>
					<div class="panel-footer hidden-print">
						<div class="text-center button-toolbar">
							
							<!-- update -->
							<div class="pt-10 pb-10 pl-15 pr-15" v-if="profile.can && profile.can['update_' + kelas]">
								<button @click.prevent="ubahData(props.item.id)" class="btn btn-default btn-icon btn-block">
									<i class="icon-pencil5"></i> Ubah
								</button>
							</div>
							
							<!-- destroy -->
							<div class="pb-10 pl-15 pr-15" v-if="profile.can && profile.can['destroy_' + kelas]">
								<button @click.prevent="modalConfirmOpen('hapus',true,props.item)" class="btn btn-default btn-icon btn-block">
									<i class="icon-bin2"></i> <span>Hapus</span>
								</button>
							</div>

							<!-- lihat artikel -->
							<div class="pb-10 pl-15 pr-15" v-if="profile.can && profile.can['index artikel']">
								<button @click.prevent="lihatArtikel(props.item.id)" class="btn btn-default btn-icon btn-block" :disabled="selectedItem.has_artikel_count === 0">
									<i class="icon-file-eye"></i> Lihat artikel 
								</button>
							</div>

						</div>
					</div>
				</div>
			</template>

		</data-viewer>
					
		<!-- modal -->
		<app-modal :show="modalShow" :state="modalState" :title="modalTitle" :button="modalButton" :content="modalContent" @tutup="modalTutup" @confirmOk="modalConfirmOk" @successOk="modalTutup" @failOk="modalTutup" @backgroundClick="modalTutup">
		</app-modal>

	</div>
</template>

<script>
	import { mapGetters } from 'vuex';
	import corefunc from '../../assets/core/app.js';
	import DataViewer from '../../components/dataviewer.vue';
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
		props:['title','kelas'],
		data() {
			return {
				source: '',
				selectedItem: [],
				params: {
          column: 'id',
          direction: 'desc',
          per_page: 10,
          page: 1,
          search_column: 'name',
          search_operator: 'like',
          search_query_1: '',
          search_query_2: ''
        },
				columnData: [
					{
						title: 'No.',
						key: 'No.',
						excelType: 'string',
						sort: false,
						hide: false,
						disable: false
					},
					{
						title: 'Foto',
						key: 'gambar',
						excelType: 'string',
						sort: false,
						hide: false,
						disable: false
					},
					{
						title: 'Nama',
						key: 'name',
						excelType: 'string',
						sort: true,
						hide: false,
						disable: false,
						filter: true,
						filterType: 'string'
					},
					{
						title: 'No. Manajemen',
						key: 'nim',
						excelType: 'string',
						sort: true,
						hide: false,
						disable: false,
						filter: true,
						filterType: 'number'
					},
					{
						title: 'No. KTP',
						key: 'nik',
						excelType: 'string',
						sort: true,
						hide: false,
						disable: false,
						filter: true,
						filterType: 'number'
					},
					{
						title: 'CU',
						key: '',
						excelType: 'string',
						sort: false, 
						hide: false,
						disable: false,
						filter: true,
						filterKey: 'pekerjaan_aktif.cu.name',
						filterType: 'string'
					},
					{
						title: 'Tingkat',
						key: '',
						excelType: 'string',
						sort: false,
						hide: false,
						disable: false,
						filter: true,
						filterKey: 'pekerjaan_aktif.tingkat',
						filterType: 'string'
					},
					{
						title: 'Jabatan',
						key: '',
						excelType: 'string',
						sort: false,
						hide: false,
						disable: false,
						filter: true,
						filterKey: 'pekerjaan_aktif.name',
						filterType: 'string'
					},
					{// TODO: fix
						title: 'Pendidikan',
						key: '',
						excelType: 'string',
						sort: false,
						hide: false,
						disable: false,
						filter: true,
						filterKey: 'pendidikan_tertinggi.tingkat',
						filterType: 'string'
					},
					{// TODO: fix
						title: 'Jurusan',
						key: '',
						excelType: 'string',
						sort: false,
						hide: false,
						disable: false,
						filter: true,
						filterKey: 'pendidikan_tertinggi.name',
						filterType: 'string'
					},
					{
						title: 'Email',
						key: 'email',
						excelType: 'string',
						sort: true,
						hide: false,
						disable: false,
						filter: true,
						filterType: 'string'
					},
					{
						title: 'Hp',
						key: 'hp',
						excelType: 'string',
						sort: true,
						hide: false,
						disable: false,
						filter: true,
						filterType: 'number'
					},
					{
						title: 'Kontak Lain',
						key: 'kontak',
						excelType: 'string',
						sort: false,
						hide: false,
						disable: false,
						filter: true,
						filterType: 'string'
					},
					{
						title: 'Gender',
						key: 'kelamin',
						excelType: 'string',
						sort: true,
						hide: false,
						disable: false,
						filter: true,
						filterType: 'string'
					},
					{
						title: 'Gol. Darah',
						key: 'darah',
						excelType: 'string',
						sort: true,
						hide: false,
						disable: false,
						filter: true,
						filterType: 'string'
					},
					{
						title: 'Tinggi',
						key: 'tinggi',
						excelType: 'string',
						sort: true,
						hide: false,
						disable: false,
						filter: true,
						filterType: 'number'
					},
					{
						title: 'Berat',
						key: 'berat',
						excelType: 'string',
						sort: true,
						hide: false,
						disable: false,
						filter: true,
						filterType: 'number'
					},
					{
						title: 'Agama',
						key: 'agama',
						excelType: 'string',
						sort: true,
						hide: false,
						disable: false,
						filter: true,
						filterType: 'string'
					},
					{
						title: 'Status',
						key: 'status',
						excelType: 'string',
						sort: true,
						hide: false,
						disable: false,
						filter: true,
						filterType: 'date'
					},
					{
						title: 'Tgl. Lahir',
						key: 'tanggal_lahir',
						excelType: 'string',
						sort: true,
						hide: false,
						disable: false,
						filter: true,
						filterType: 'date'
					},
					{
						title: 'Tempat. Lahir',
						key: 'tempat_lahir',
						excelType: 'string',
						sort: true,
						hide: false,
						disable: false,
						filter: true,
						filterType: 'date'
					},
					{
						title: 'Alamat',
						key: 'alamat',
						excelType: 'string',
						sort: false,
						hide: false,
						disable: false,
						filter: true,
						filterType: 'string'
					},
					{
						title: 'Tgl. / Waktu Buat',
						key: 'created_at',
						sort: true,
						hide: false,
						disable: false,
						filter: true,
						filterType: 'datetime'
					},
					{
						title: 'Tgl. / Waktu Ubah',
						key: 'updated_at',
						sort: true,
						hide: false,
						disable: false,
						filter: true,
						filterType: 'datetime'
					}
				],
				modalShow: false,
				modalState: '',
				modalTitle: '',
				modalContent: '',
				modalButton: ''
			}
		},
		created(){
			this.fetch();
		},
		watch: {
			// check route changes
			'$route' (to, from){
				this.fetch();
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
			fetch(){
				if(this.$route.params.cu == 'semua'){
					this.disableColumnCu(false);
					this.$store.dispatch(this.kelas + '/index', this.params);
				}else{
					this.disableColumnCu(true);
					this.$store.dispatch(this.kelas + '/indexCu', [this.params,this.$route.params.cu]);
				}
			},
			disableColumnCu(status){
				this.columnData[5].disable = status;
			},
			resetParams(){
				this.params.search_column = 'name';
				this.params.search_query_1 = '';

				this.extSearchColumn = 'name';
				this.extSearchQuery1 = '';
			},
			selectedRow(item){
				this.selectedItem = item;
			},
			ubahData(id) {
				this.$router.push({name: this.kelas + 'Edit', params: { id: id }});
			},
			modalConfirmOpen(source, isMobile, itemMobile) {
				this.modalShow = true;
				this.modalState = 'confirm-tutup';
				this.source = source;

				if(isMobile){
					this.selectedItem = itemMobile;
				}

				if (source == 'hapus') {
					this.modalTitle = 'Hapus ' + this.title + ' ' + this.selectedItem.name + ' ini?';
					this.modalButton = 'Iya, Hapus';
				}
			},
			modalTutup() {
				this.modalShow = false;
				this.$store.dispatch(this.kelas + '/resetUpdateStat');
			},
			modalConfirmOk() {
				if (this.source == 'hapus') {
					this.$store.dispatch(this.kelas + '/destroy', this.selectedItem.id);
				}
			}
		},
		computed: {
			...mapGetters('user',{
				profile: 'profile',
				profileStat: 'profileStat'
			}),
			...mapGetters('global',{
				idCu: 'idCu'
			}),
			...mapGetters('cu',{
				modelCu: 'dataS',
				modelCuStat: 'dataStatS',
			}),
			...mapGetters('pengelola',{
				itemData: 'dataS',
				itemDataStat: 'dataStatS',
				updateMessage: 'update',
				updateStat: 'updateStat'
			})
		}
	}
</script>