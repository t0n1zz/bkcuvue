<template>
	<div>

		<!-- main panel -->
		<data-viewer :title="title" :columnData="columnData" :itemData="itemData" :query="query" :itemDataStat="itemDataStat" :excelDownloadUrl="excelDownloadUrl" :isUploadExcel="false" @fetch="fetch">

			<!-- desktop -->
			<!-- button desktop -->
			<template slot="button-desktop">

				<!-- tambah -->
				<router-link :to="{ name: kelas + 'Create'}" class="btn btn-light mb-1" v-if="currentUser.can && currentUser.can['create_aset_tetap']">
					<i class="icon-plus3"></i> Tambah
				</router-link>

				<!-- ubah-->
				<button @click.prevent="ubahData(selectedItem.id)" class="btn btn-light mb-1" v-if="currentUser.can && currentUser.can['update_aset_tetap']" :disabled="!selectedItem.id">
					<i class="icon-pencil5"></i> Ubah
				</button>

				<button @click.prevent="modalOpen('lokasi')" class="btn btn-light mb-1" v-if="currentUser.can && currentUser.can['update_aset_tetap']" :disabled="!selectedItem.id">
					<i class="icon-pencil5"></i> Ubah Lokasi
				</button>

				<button @click.prevent="modalOpen('kondisi')" class="btn btn-light mb-1" v-if="currentUser.can && currentUser.can['update_aset_tetap']" :disabled="!selectedItem.id">
					<i class="icon-pencil5"></i> Ubah Kondisi
				</button>

				<!-- detail-->
				<button @click.prevent="modalOpen('detail')" class="btn btn-light mb-1" :disabled="!selectedItem.id">
					<i class="icon-stack2"></i> Detail
				</button>

				<!-- qr code -->
				<button @click.prevent="modalOpen('qrCode')" class="btn btn-light mb-1" :disabled="!selectedItem.id">
					<i class="icon-qrcode"></i> Buat QR Code
				</button>

				<button @click.prevent="modalOpen('qrCodeAll')" class="btn btn-light mb-1">
					<i class="icon-qrcode"></i> QR Code Pada Tabel
				</button>

				<!-- hapus -->
				<button @click.prevent="modalOpen('hapus')" class="btn btn-light mb-1" v-if="currentUser.can && currentUser.can['destroy_aset_tetap']" :disabled="!selectedItem.id">
					<i class="icon-bin2"></i> Hapus
				</button>

			</template>

			<!-- button mobile -->
			<template slot="button-mobile">

				<!-- tambah -->
				<router-link :to="{ name: kelas + 'Create'}" class="btn btn-light btn-block mb-1" v-if="currentUser.can && currentUser.can['create_aset_tetap']">
					<i class="icon-plus3"></i> Tambah
				</router-link>

				<!-- ubah-->
				<button @click.prevent="ubahData(selectedItem.id)" class="btn btn-light btn-block mb-1" v-if="currentUser.can && currentUser.can['update_aset_tetap']" :disabled="!selectedItem.id">
					<i class="icon-pencil5"></i> Ubah
				</button>

				<button @click.prevent="modalOpen('lokasi')" class="btn btn-light btn-block mb-1" v-if="currentUser.can && currentUser.can['update_aset_tetap']" :disabled="!selectedItem.id">
					<i class="icon-pencil5"></i> Ubah Lokasi
				</button>

				<button @click.prevent="modalOpen('kondisi')" class="btn btn-light btn-block mb-1" v-if="currentUser.can && currentUser.can['update_aset_tetap']" :disabled="!selectedItem.id">
					<i class="icon-pencil5"></i> Ubah Kondisi
				</button>
				
				<!-- detail -->
				<button @click.prevent="modalOpen('detail')" class="btn btn-light btn-block mb-1" :disabled="!selectedItem.id">
					<i class="icon-stack2"></i> Detail
				</button>

				<!-- qr code -->
				<button @click.prevent="modalOpen('qrCode')" class="btn btn-light btn-block mb-1" :disabled="!selectedItem.id">
					<i class="icon-qrcode"></i> Buat QR Code
				</button>

				<button @click.prevent="modalOpen('qrCodeAll')" class="btn btn-light btn-block mb-1">
					<i class="icon-qrcode"></i> QR Code Pada Tabel
				</button>

				<!-- hapus -->
				<button @click.prevent="modalOpen('hapus')" class="btn btn-light btn-block mb-1" v-if="currentUser.can && currentUser.can['destroy_aset_tetap']" :disabled="!selectedItem.id">
					<i class="icon-bin2"></i> Hapus
				</button>
				
			</template>

			<!-- item desktop -->
			<template slot="item-desktop" slot-scope="props">
				<tr :class="{ 'bg-info': selectedItem.id === props.item.id }" class="text-nowrap" @click="selectedRow(props.item)">
					<td v-if="!columnData[0].hide">
						{{ props.index + 1 + (+itemData.current_page-1) * +itemData.per_page + '.'}}
					</td>
					<td v-if="!columnData[1].hide">
						<img :src="'/images/asetTetap/' + props.item.gambar + 'n.jpg'" class="img-rounded img-fluid wmin-sm" v-if="props.item.gambar">
						<img :src="'/images/no_image.jpg'" class="img-rounded img-fluid wmin-sm" v-else>
					</td>
					<td v-if="!columnData[2].hide">
						<check-value :value="props.item.kode"></check-value>
					</td>
					<td v-if="!columnData[3].hide">
						<check-value :value="props.item.name"></check-value>
					</td>
					<td v-if="!columnData[4].hide">
						<check-value :value="props.item.golongan.name" v-if="props.item.golongan"></check-value>
					</td>
					<td v-if="!columnData[5].hide">
						<check-value :value="props.item.kelompok.name" v-if="props.item.kelompok"></check-value>
					</td>
					<td v-if="!columnData[6].hide">
						<check-value :value="props.item.jenis.name" v-if="props.item.jenis"></check-value>
					</td>
					<td v-if="!columnData[7].hide">
						<check-value :value="props.item.merk"></check-value>
					</td>
					<td v-if="!columnData[8].hide">
						<check-value :value="props.item.tipe"></check-value>
					</td>
					<td v-if="!columnData[9].hide">
						<check-value :value="props.item.lokasi.name" v-if="props.item.lokasi"></check-value>
					</td>
					<td v-if="!columnData[10].hide">
						<check-value :value="props.item.aktivis.name" v-if="props.item.aktivis"></check-value>
					</td>
					<td v-if="!columnData[11].hide" v-html="$options.filters.date(props.item.tanggal)">
					</td>
					<td v-if="!columnData[12].hide">
						<check-value :value="props.item.pembeli.name" v-if="props.item.pembeli"></check-value>
						<span v-else>Mitra</span>
					</td>
					<td v-if="!columnData[13].hide">
						<check-value :value="props.item.has_aset_count" valueType="currency"></check-value>
					</td>
					<td v-if="!columnData[14].hide">
						<check-value :value="props.item.harga" valueType="currency"></check-value>
					</td>
					<td v-if="!columnData[15].hide">
						<check-value :value="props.item.harga_sub" valueType="currency"></check-value>
					</td>
					<td v-if="!columnData[16].hide">
						<check-value :value="props.item.total_harga" valueType="currency"></check-value>
					</td>
					<td v-if="!columnData[17].hide">
						<check-value :value="props.item.kondisi"></check-value>
					</td>
					<td v-if="!columnData[18].hide" v-html="$options.filters.dateTime(props.item.created_at)"></td>
					<td v-if="!columnData[19].hide">
						<span v-if="props.item.created_at !== props.item.updated_at" v-html="$options.filters.dateTime(props.item.updated_at)"></span>
						<span v-else>-</span>
					</td>
				</tr>
			</template>

		</data-viewer>
					
		<!-- modal -->
		<app-modal :show="modalShow" :color="modalColor" :size="modalSize" :state="modalState" :title="modalTitle"  :content="modalContent" :button="modalButton" @tutup="modalTutup" @confirmOk="modalConfirmOk" @successOk="modalTutup" @failOk="modalTutup" @backgroundClick="modalTutup">

			<!-- title -->
			<template slot="modal-title">
				{{ modalTitle }}
			</template>

			<template slot="modal-body1">
        <form-lokasi :kelas="kelas" :selectedItem="selectedItem" @tutup="modalTutup" v-if="state == 'lokasi'"></form-lokasi>
        <form-kondisi :kelas="kelas" :selectedItem="selectedItem" @tutup="modalTutup" v-else-if="state == 'kondisi'"></form-kondisi>
        <formDetail :kelas="kelas" :selectedItem="selectedItem" :isModal="true" @tutup="modalTutup" v-else-if="state == 'detail'"></formDetail>
			</template>

			<template slot=modal-body2>
				<qr-code :selectedItem="selectedItem" @tutup="modalTutup"></qr-code>
			</template>

			<template slot=modal-body3>
				<qr-code-all :itemData="itemData" @tutup="modalTutup"></qr-code-all>
			</template>

		</app-modal>

	</div>
</template>

<script>
	import { mapGetters } from 'vuex';
	import DataViewer from '../../components/dataviewer2.vue';
	import appModal from '../../components/modal';
	import checkValue from '../../components/checkValue.vue';
	import formLokasi from "./formLokasi.vue";
	import formKondisi from "./formKondisi.vue";
	import formDetail from "./formDetail.vue";
	import qrCode from './qrCode.vue';
	import qrCodeAll from './qrCodeAll.vue';

	export default {
		components: {
			DataViewer,
			appModal,
			checkValue,
			formLokasi,
			formKondisi,
			formDetail,
			qrCode,
			qrCodeAll,
		},
		props:['title','kelas'],
		data() {
			return {
				selectedItem: [],
				tabName: 'qrBig',
				query: {
					order_column: "name",
					order_direction: "asc",
					filter_match: "and",
					limit: 10,
					page: 1
				},
				excelDownloadUrl: '',
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
						hide: false,
					},
					{
						title: 'Kode',
						name: 'kode',
						tipe: 'string',
						sort: false,
						hide: false,
						disable: false,
						filter: true,
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
						title: 'Golongan',
						name: 'golongan.name',
						tipe: 'string',
						sort: true,
						hide: false,
						disable: false,
						filter: true,
					},
					{
						title: 'Kelompok',
						name: 'kelompok.name',
						tipe: 'string',
						sort: false,
						hide: false,
						disable: false,
						filter: true,
					},
					{
						title: 'Jenis',
						name: 'jenis.name',
						tipe: 'string',
						sort: true,
						hide: false,
						disable: false,
						filter: true,
					},
					{
						title: 'Merk',
						name: 'merk',
						tipe: 'string',
						sort: true,
						hide: false,
						disable: false,
						filter: true,
					},
					{
						title: 'Tipe',
						name: 'tipe',
						tipe: 'string',
						sort: true,
						hide: false,
						disable: false,
						filter: true,
					},
					{
						title: 'Lokasi',
						name: 'lokasi.name',
						tipe: 'string',
						sort: true,
						hide: false,
						disable: false,
						filter: true,
					},		
					{
						title: 'Penanggungjawab',
						name: 'aktivis.name',
						tipe: 'string',
						sort: false,
						hide: false,
						disable: false,
						filter: true,
					},
					{
						title: 'Tgl. Beli',
						name: 'tanggal',
						tipe: 'datetime',
						sort: true,
						hide: false,
						disable: false,
						filter: true,
					},
					{
						title: 'Pembeli',
						name: 'pembeli.name',
						tipe: 'string',
						sort: false,
						hide: false,
						disable: false,
						filter: true,
					},
					{
						title: 'Sub',
						name: 'has_aset_count',
						tipe: 'numeric',
						sort: true,
						hide: false,
						disable: false,
						filter: true,
					},
					{
						title: 'Harga Induk',
						name: 'harga',
						tipe: 'numeric',
						sort: true,
						hide: false,
						disable: false,
						filter: true,
					},
					{
						title: 'Harga Sub',
						name: 'harga_sub',
						tipe: 'numeric',
						sort: true,
						hide: false,
						disable: false,
						filter: true,
					},
					{
						title: 'Total Harga',
						name: 'total_harga',
						tipe: 'numeric',
						sort: true,
						hide: false,
						disable: false,
						filter: true,
					},
					{
						title: 'Kondisi',
						name: 'kondisi',
						tipe: 'string',
						sort: true,
						hide: false,
						disable: false,
						filter: true,
					},
					{
						title: 'Tgl. Buat',
						name: 'created_at',
						tipe: 'datetime',
						sort: true,
						hide: false,
						disable: false,
						filter: true,
					},
					{
						title: 'Tgl. Ubah',
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
				modalContent:'',
				modalButton: '',
				modalColor: '',
				modalSize:'',
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

			// when updating data
      updateStat(value) {
				this.modalState = value;
				this.modalButton = 'Ok';
				
				if(value === "success"){
					this.modalTitle = this.updateMessage.message;
					this.modalContent = '';
					this.fetch(this.query);
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
				this.excelDownloadUrl = this.kelas;
			},
			selectedRow(item){
				this.selectedItem = item;
			},
			ubahData(id, id_cu) {
				this.$router.push({name: this.kelas + 'Edit', params: { id: id }});
			},
			modalOpen(state, isMobile, itemMobile) {
				this.modalShow = true;
				this.state = state;

				if(isMobile){
					this.selectedItem = itemMobile;
				}

				if (state == 'hapus') {
					this.modalTitle = 'Hapus ' + this.title + ' ' + this.selectedItem.name + ' ?';
					this.modalState = "confirm-tutup";
					this.modalButton = 'Iya, Hapus';
					this.modalSize = "''";
				} else if (state == 'lokasi'){
					this.modalTitle = 'Ubah lokasi aset dengan nama ' + this.selectedItem.name + ' ?';
					this.modalState = 'normal1';
					this.modalColor = 'bg-primary';
					this.modalSize = "''";
				} else if (state == 'kondisi'){
					this.modalTitle = 'Ubah kondisi aset dengan nama ' + this.selectedItem.name + ' ?';
					this.modalState = 'normal1';
					this.modalColor = 'bg-primary';
					this.modalSize = "''";
				} else if (state == 'detail'){
					this.modalTitle = 'Detail aset dengan nama ' + this.selectedItem.name;
					this.modalState = 'normal1';
					this.modalColor = 'bg-primary';
					this.modalSize = "modal-lg";
				} else if (state == 'qrCode'){
					this.modalTitle = 'QR Code untuk aset dengan nama ' + this.selectedItem.name;
					this.modalState = 'normal2';
					this.modalColor = 'bg-primary';
					this.modalSize = "";
				} else if (state == 'qrCodeAll'){
					this.modalTitle = 'QR Code pada tabel';
					this.modalState = 'normal3';
					this.modalColor = 'bg-primary';
					this.modalSize = "modal-full";
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
			...mapGetters('asetTetap',{
				itemData: 'dataS',
				itemDataStat: 'dataStatS',
				updateMessage: 'update',
				updateStat: 'updateStat'
			}),
		}
	}
</script>