<template>
	<div>

		<!-- main panel -->
		<data-viewer v-bind="dataviewer" @fetch="fetch">

			<!-- desktop -->
			<!-- button desktop -->
			<template slot="button-desktop">

				<!-- tambah -->
				<div class="btn-group pb-1 pr-1" v-if="profile.can && profile.can['create_' + kelas]">
					<router-link :to="{ name: kelas + 'Create'}" class="btn btn-light btn-icon" v-tooltip:top="'Tambah ' +  title">
						<i class="icon-plus3"></i> Tambah 
					</router-link>
				</div>

				<!-- ubah-->
				<div class="btn-group pb-1 pr-1 " v-if="profile.can && profile.can['update_' + kelas]">
					<button @click.prevent="ubahData(selectedItem.id)" class="btn btn-light btn-icon" v-tooltip:top="'Ubah ' + title" :disabled="!selectedItem.id">
						<i class="icon-pencil5"></i> Ubah
					</button>
				</div>

				<!-- hapus -->
				<div class="btn-group pb-1 pr-1" v-if="profile.can && profile.can['destroy_' + kelas]">
					<button @click.prevent="modalConfirmOpen('hapus')" class="btn btn-light btn-icon" v-tooltip:top="'Hapus ' + title"  :disabled="!selectedItem.id">
						<i class="icon-bin2"></i> Hapus
					</button>
				</div>

				<!-- lihat tpcu -->
				<div class="btn-group pb-1" v-if="profile.can && profile.can['index_tpCu']">
					<button @click.prevent="lihatTpCu(selectedItem.id)" class="btn btn-light btn-icon" v-tooltip:top="'Lihat TP/KP'" :disabled="!selectedItem.id || selectedItem.has_tp_cu_count === 0">
						<i class="icon-file-eye"></i> Lihat TP/KP 
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

				<!-- lihat tpcu -->
				<li v-if="profile.can && profile.can['index_tp_cu']">
					<div class="pl-5 pr-5 pb-5">
						<button @click.prevent="lihatTpCu(selectedItem.id)" class="btn btn-default btn-icon btn-block" v-tooltip:top="'Lihat TP/KP'" :disabled="selectedItem.has_tp_cu_count === 0">
							<i class="icon-file-eye"></i> Lihat TP/KP 
						</button>
					</div>
				</li>
			</template>

			<!-- item desktop -->
			<template slot="item-desktop" slot-scope="props">
				<tr :class="{ 'info': selectedItem.id === props.item.id }" class="text-nowrap" @click="selectedRow(props.item)">
					<td>
						{{ props.index + 1 + (+itemData.current_page-1) * +itemData.per_page + '.'}}
					</td>
					<td v-if="!dataviewer.columnData[1].hide">
						<img :src="'/images/' + kelas + '/' + props.item.gambar + 'n.jpg'" class="img-rounded  img-fluid wmin-sm" v-if="props.item.gambar">
						<img :src="'/images/no_image.jpg'" class="img-rounded img-fluid wmin-sm" v-else>
					</td>
					<td v-if="!dataviewer.columnData[2].hide">
						<check-value :value="props.item.name"></check-value>
					</td>
					<td v-if="!dataviewer.columnData[3].hide">
						<check-value :value="props.item.no_ba"></check-value>
					</td>
					<td v-if="!dataviewer.columnData[4].hide">
						<check-value :value="props.item.has_tp_count"></check-value>
					</td>
					<td v-if="!dataviewer.columnData[5].hide">
						<check-value :value="props.item.badan_hukum"></check-value>
					</td>
					<td v-if="!dataviewer.columnData[6].hide && !dataviewer.columnData[6].disable">
						<check-value :value="props.item.provinces.name" v-if="props.item.provinces"></check-value>
						<span v-else>: {{dataviewer.columnData[6].groupNoKey}}</span>	
					</td>
					<td v-if="!dataviewer.columnData[7].hide && !dataviewer.columnData[7].disable">
						<check-value :value="props.item.regencies.name" v-if="props.item.regencies"></check-value>
						<span v-else>: {{dataviewer.columnData[7].groupNoKey}}</span>	
					</td>
					<td v-if="!dataviewer.columnData[8].hide && !dataviewer.columnData[8].disable">
						<check-value :value="props.item.districts.name" v-if="props.item.districts"></check-value>
						<span v-else>: {{dataviewer.columnData[8].groupNoKey}}</span>	
					</td>
					<td v-if="!dataviewer.columnData[9].hide && !dataviewer.columnData[9].disable">
						<check-value :value="props.item.villages.name" v-if="props.item.villages"></check-value>
						<span v-else>: {{dataviewer.columnData[9].groupNoKey}}</span>	
					</td>
					<td v-if="!dataviewer.columnData[10].hide">
						<check-value :value="props.item.alamat"></check-value>
					</td>
					<td v-if="!dataviewer.columnData[11].hide">
						<check-value :value="props.item.app"></check-value>
					</td>
					<td v-if="!dataviewer.columnData[12].hide" v-html="$options.filters.date(props.item.ultah)"></td>
					<td v-if="!dataviewer.columnData[13].hide" v-html="$options.filters.date(props.item.bergabung)"></td>
					<td v-if="!dataviewer.columnData[14].hide">
						<check-value :value="props.item.website"></check-value>
					</td>
					<td v-if="!dataviewer.columnData[15].hide">
						<check-value :value="props.item.email"></check-value>
					</td>
					<td v-if="!dataviewer.columnData[16].hide">
						<check-value :value="props.item.telp"></check-value>
					</td>
					<td v-if="!dataviewer.columnData[17].hide">
						<check-value :value="props.item.hp"></check-value>
					</td>
					<td v-if="!dataviewer.columnData[18].hide">
						<check-value :value="props.item.pos"></check-value>
					</td>
					<td v-if="!dataviewer.columnData[19].hide" v-html="$options.filters.dateTime(props.item.created_at)"  class="text-nowrap"></td>
					<td v-if="!dataviewer.columnData[20].hide">
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
	import _ from 'lodash';
	import { mapGetters } from 'vuex';
	import corefunc from '../../assets/core/app.js';
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
		props:['title','kelas'],
		data() {
			return {
				dataviewer: {
					title: this.title,
					itemData: this.itemData,
					itemDataStat: this.itemDataStat,
					columnData: [
						{
							title: 'No.',
							name: 'No.',
							tipe: 'string',
							sort: false,
							hide: false,
							disable: false
						},
						{
							title: 'Foto',
							name: 'gambar',
							tipe: 'string',
							sort: false,
							hide: false,
							disable: false
						},
						{
							title: 'Nama',
							name: 'name',
							tipe: 'string',
							sort: true,
							hide: false,
							disable: false,
							filter: true,
						},
						{
							title: 'No. BA',
							name: 'no_ba',
							tipe: 'string',
							sort: true,
							hide: false,
							disable: false,
							filter: true,
						},
						{
							title: 'TP/KP',
							name: 'has_tp_cu_count',
							groupKey: 'has_tp_cu_count',
							groupNoKey: '0',
							tipe: 'string',
							sort: true,
							hide: false,
							disable: false
						},
						{
							title: 'Badan Hukum',
							name: 'badan_hukum',
							tipe: 'string',
							sort: false,
							hide: false,
							disable: false
						},
						{
							title: 'Provinsi',
							name: 'provinces.name',
							groupKey: 'provinces.name',
							groupNoKey: '-',
							tipe: 'string',
							sort: true,
							hide: false,
							disable: false,
							filter: true,
							filterKey: 'provinces.name',
							filterType: 'string'
						},
						{
							title: 'Kabupaten/Kota',
							name: 'regencies_name',
							groupKey: 'regencies.name',
							groupNoKey: '-',
							tipe: 'string',
							sort: true,
							hide: false,
							disable: false,
							filter: true,
							filterKey: 'regencies.name',
							filterType: 'string'
						},
						{
							title: 'Kecamatan',
							name: 'districts_name',
							groupKey: 'districts.name',
							groupNoKey: '-',
							tipe: 'string',
							sort: true,
							hide: false,
							disable: false,
							filter: true,
							filterKey: 'districts.name',
							filterType: 'string'
						},
						{
							title: 'Kelurahan',
							name: 'villages_name',
							groupKey: 'villages.name',
							groupNoKey: '-',
							tipe: 'string',
							sort: true,
							hide: false,
							disable: false,
							filter: true,
							filterKey: 'villages.name',
							filterType: 'string'
						},
						{
							title: 'Alamat',
							name: 'alamat',
							tipe: 'string',
							sort: false,
							hide: false,
							disable: false,
							filter: true,
							filterType: 'string'
						},
						{
							title: 'Aplikasi',
							name: 'app',
							tipe: 'string',
							sort: true,
							hide: false,
							disable: false,
							filter: true,
							filterType: 'string'
						},
						{
							title: 'Tgl. Berdiri',
							name: 'ultah',
							tipe: 'string',
							sort: true,
							hide: false,
							disable: false,
							filter: true,
							filterType: 'date'
						},
						{
							title: 'Tgl. Bergabung',
							name: 'bergabung',
							tipe: 'string',
							sort: true,
							hide: false,
							disable: false,
							filter: true,
							filterType: 'date'
						},
						{
							title: 'Website',
							name: 'website',
							tipe: 'string',
							sort: false,
							hide: false,
							disable: false,
							filter: true,
							filterType: 'string'
						},
						{
							title: 'E-mail',
							name: 'email',
							tipe: 'string',
							sort: false,
							hide: false,
							disable: false,
							filter: true,
							filterType: 'string'
						},
						{
							title: 'No. Telp',
							name: 'telp',
							tipe: 'string',
							sort: false,
							hide: false,
							disable: false,
							filter: true,
							filterType: 'string'
						},
						{
							title: 'No. Hp',
							name: 'hp',
							tipe: 'string',
							sort: false,
							hide: false,
							disable: false,
							filter: true,
							filterType: 'string'
						},
						{
							title: 'Kode Pos',
							name: 'pos',
							tipe: 'string',
							sort: false,
							hide: false,
							disable: false,
							filter: true,
							filterType: 'string'
						},
						{
							title: 'Tgl. / Waktu Buat',
							name: 'created_at',
							sort: true,
							hide: false,
							disable: false,
							filter: true,
							filterType: 'datetime'
						},
						{
							title: 'Tgl. / Waktu Ubah',
							name: 'updated_at',
							sort: true,
							hide: false,
							disable: false,
							filter: true,
							filterType: 'datetime'
						}

					],
					
				},
				selectedItem: [],
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
			itemDataStat(value){
				this.dataviewer.itemDataStat = value;
        if(value == 'success'){
					this.dataviewer.itemData = this.itemData;
        }
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
				this.$store.dispatch(this.kelas + '/index', params);
			},
			selectedRow(item){
				this.selectedItem = item;
			},
			ubahData(id) {
				this.$router.push({name: this.kelas + 'Edit', params: { id: id }});
			},
			lihatTpCu(id_cu){
				this.$router.push({name: 'tpCu', params: { cu: id_cu }});
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
			...mapGetters('cu',{
				itemData: 'dataS',
				itemDataStat: 'dataStatS',
				updateMessage: 'update',
				updateStat: 'updateStat'
			}),
			...mapGetters('user',{
				profile: 'profile',
				profileStat: 'profileStat'
			})
		}
	}
</script>