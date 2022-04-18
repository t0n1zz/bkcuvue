<template>
	<div>

		<!-- message -->
		<message v-if="itemDataStatPekerjaan === 'fail'" :title="'Oops terjadi kesalahan:'" :errorData="itemDataPekerjaan">
		</message>

		<div class="card">
			<div class="card-header bg-white">
				<h5 class="card-title">Identitas</h5>
			</div>
			<div class="card-body">
				<identitas :itemData="form"></identitas>
			</div>
		</div>

		<!-- pekerjaan -->
		<div class="card">
			<div class="card-header bg-white">
				<h5 class="card-title">Pekerjaan</h5>
			</div>
			<div class="card-body pb-2">
				<div class="row">

					<div class="col-md-12" v-if="mode == 'edit_profile'">

						<button class="btn btn-light mb-1" @click.prevent="create('pekerjaan')">
							<i class="icon-plus22"></i> Tambah
						</button>

						<button class="btn btn-light mb-1" @click.prevent="update('pekerjaan')"
						:disabled="!selectedItemPekerjaan.id">
							<i class="icon-pencil5"></i> Ubah
						</button>

						<button class="btn btn-light mb-1" @click="destroy('pekerjaan')" :disabled="!selectedItemPekerjaan.id">
							<i class="icon-bin2"></i> Hapus
						</button>

					</div>

					<div class="col-md-12" v-else-if="mode != 'edit_profile' && currentUser.can && currentUser.can['update_' + kelas]">

						<button class="btn btn-light mb-1" @click.prevent="create('pekerjaan')">
							<i class="icon-plus22"></i> Tambah
						</button>

						<button class="btn btn-light mb-1" @click.prevent="update('pekerjaan')"
						:disabled="!selectedItemPekerjaan.id">
							<i class="icon-pencil5"></i> Ubah
						</button>

						<button class="btn btn-light mb-1" @click="destroy('pekerjaan')" :disabled="!selectedItemPekerjaan.id">
							<i class="icon-bin2"></i> Hapus
						</button>

					</div>

				</div>		
			</div>

			<data-table :items="itemDataPekerjaan" :columnData="columnDataPekerjaan" :itemDataStat="itemDataStatPekerjaan">
				<template slot="item-desktop" slot-scope="props">
					<tr :class="{ 'bg-info': selectedItemPekerjaan.id === props.item.id }" class="text-nowrap" @click="selectedRowPekerjaan(props.item)" v-if="props.item">
						<td>{{ props.index + 1 }}</td>
						<td>
							<span class="badge bg-blue-400 align-self-center ml-auto" v-if="props.item.status == 1">PEKERJAAN SAAT INI</span>
							<span class="badge badge-flat border-grey-800 text-default ml-auto" v-else-if="props.item.status == 2">PEKERJAAN SEBELUMNYA</span>
							<span class="badge bg-danger-400 align-self-center ml-auto" v-else-if="props.item.status == 3">PEKERJAAN TERAKHIR</span>
							{{ props.item.name }} 
						</td>
						<td v-html="$options.filters.checkTingkatAktivis(props.item.tingkat)"></td>
						<td>
							<span v-if="props.item.tipe == 1">
								<span v-if="props.item.cu"> {{ props.item.cu.name }}</span>
								<span v-if="props.item.tp">| {{ props.item.tp.name }}</span>
							</span>
							<span v-else-if="props.item.tipe == 2">{{ props.item.lembaga_lain }}</span>
							<span v-else>PUSKOPCUINA</span>
						</td>
						<td v-html="$options.filters.date(props.item.mulai)"></td>
						<td>
							<span v-if="props.item.selesai">
								<span v-html="$options.filters.date(props.item.selesai)"></span>
							</span>
							<span v-else>-</span>
						</td>
						<td><check-value :value="props.item.keterangan_tidak_aktif"></check-value></td>
					</tr>
				</template>	
			</data-table>

		</div>

		<!-- separator -->
		<br/><hr/>
		<!-- separator -->

		<!-- pendidikan -->
		<div class="card">
			<div class="card-header bg-white">
				<h5 class="card-title">Pendidikan</h5>
			</div>
			<div class="card-body pb-2">
				<div class="row">

					<div class="col-md-12" v-if="mode == 'edit_profile'">

						<button class="btn btn-light mb-1" @click.prevent="create('pendidikan')">
							<i class="icon-plus22"></i> Tambah
						</button>

						<button class="btn btn-light mb-1" @click.prevent="update('pendidikan')"
						:disabled="!selectedItemPendidikan.id">
							<i class="icon-pencil5"></i> Ubah
						</button>

						<button class="btn btn-light mb-1" @click="destroy('pendidikan')" :disabled="!selectedItemPendidikan.id">
							<i class="icon-bin2"></i> Hapus
						</button>

					</div>

					<div class="col-md-12" v-else-if="mode != 'edit_profile' && currentUser.can && currentUser.can['update_' + kelas]">

						<button class="btn btn-light mb-1" @click.prevent="create('pendidikan')">
							<i class="icon-plus22"></i> Tambah
						</button>

						<button class="btn btn-light mb-1" @click.prevent="update('pendidikan')"
						:disabled="!selectedItemPendidikan.id">
							<i class="icon-pencil5"></i> Ubah
						</button>

						<button class="btn btn-light mb-1" @click="destroy('pendidikan')" :disabled="!selectedItemPendidikan.id">
							<i class="icon-bin2"></i> Hapus
						</button>

					</div>

				</div>		
			</div>

			<data-table :items="itemDataPendidikan" :columnData="columnDataPendidikan" :itemDataStat="itemDataStatPendidikan">
				<template slot="item-desktop" slot-scope="props">
					<tr :class="{ 'bg-info': selectedItemPendidikan.id === props.item.id }" class="text-nowrap" @click="selectedRowPendidikan(props.item)" v-if="props.item">
						<td>{{ props.index + 1 }}</td>
						<td><check-value :value="props.item.name"></check-value></td>
						<td><check-value :value="props.item.tingkat"></check-value></td>
						<td><check-value :value="props.item.tempat"></check-value></td>
						<td v-html="$options.filters.date(props.item.mulai)"></td>
						<td>
							<span v-if="props.item.selesai">
								<span v-html="$options.filters.date(props.item.selesai)"></span>
							</span>
							<span v-else>-</span>
						</td>
					</tr>
				</template>	
			</data-table>

		</div>

		<!-- separator -->
		<br/><hr/>
		<!-- separator -->

		<!-- organisasi -->
		<div class="card">
			<div class="card-header bg-white">
				<h5 class="card-title">Organisasi</h5>
			</div>
			<div class="card-body pb-2">
				<div class="row">

					<div class="col-md-12" v-if="mode == 'edit_profile'">

						<button class="btn btn-light mb-1" @click.prevent="create('organisasi')">
							<i class="icon-plus22"></i> Tambah
						</button>

						<button class="btn btn-light mb-1" @click.prevent="update('organisasi')"
						:disabled="!selectedItemOrganisasi.id">
							<i class="icon-pencil5"></i> Ubah
						</button>

						<button class="btn btn-light mb-1" @click="destroy('organisasi')" :disabled="!selectedItemOrganisasi.id">
							<i class="icon-bin2"></i> Hapus
						</button>

					</div>

					<div class="col-md-12" v-else-if="mode != 'edit_profile' && currentUser.can && currentUser.can['update_' + kelas]">

						<button class="btn btn-light mb-1" @click.prevent="create('organisasi')">
							<i class="icon-plus22"></i> Tambah
						</button>

						<button class="btn btn-light mb-1" @click.prevent="update('organisasi')"
						:disabled="!selectedItemOrganisasi.id">
							<i class="icon-pencil5"></i> Ubah
						</button>

						<button class="btn btn-light mb-1" @click="destroy('organisasi')" :disabled="!selectedItemOrganisasi.id">
							<i class="icon-bin2"></i> Hapus
						</button>

					</div>

				</div>		
			</div>

			<data-table :items="itemDataOrganisasi" :columnData="columnDataOrganisasi" :itemDataStat="itemDataStatOrganisasi">
				<template slot="item-desktop" slot-scope="props">
					<tr :class="{ 'bg-info': selectedItemOrganisasi.id === props.item.id }" class="text-nowrap" @click="selectedRowOrganisasi(props.item)" v-if="props.item">
						<td>{{ props.index + 1 }}</td>
						<td>
							<check-value :value="props.item.name"></check-value>
							<span class="badge bg-blue-400 align-self-center ml-auto" v-if="props.item.selesai == null || props.item.selesai > moment().format('YYYY-MM-DD')">MASIH AKTIF</span>
						</td>
						<td><check-value :value="props.item.jabatan"></check-value></td>
						<td><check-value :value="props.item.tempat"></check-value>{{ props.item.tempat }}</td>
						<td v-html="$options.filters.date(props.item.mulai)"></td>
						<td>
							<span v-if="props.item.selesai">
								<span v-html="$options.filters.date(props.item.selesai)"></span>
							</span>
							<span v-else>-</span>
						</td>
					</tr>
				</template>	
			</data-table>

		</div>

		<!-- separator -->
		<br/><hr/>
		<!-- separator -->

		<!-- diklat -->
		<div class="card">
			<div class="card-header bg-white">
				<h5 class="card-title">Diklat</h5>
			</div>
			<div class="card-body pb-2">
				<div class="row">

					<div class="col-md-12" v-if="mode == 'edit_profile'">

						<button class="btn btn-light mb-1" @click.prevent="create('diklat')">
							<i class="icon-plus22"></i> Tambah
						</button>

						<button class="btn btn-light mb-1" @click.prevent="update('diklat')"
						:disabled="!selectedItemDiklat.id || selectedItemDiklat.kegiatan_id != 0">
							<i class="icon-pencil5"></i> Ubah
						</button>

						<button class="btn btn-light mb-1" @click.prevent="update('diklat')"
						:disabled="!selectedItemDiklat.id || selectedItemDiklat.kegiatan_id != 0">
							<i class="icon-pencil5"></i> Lihat Diklat
						</button>

						<button class="btn btn-light mb-1" @click="destroy('diklat')" :disabled="!selectedItemDiklat.id || selectedItemDiklat.kegiatan_id != 0">
							<i class="icon-bin2"></i> Hapus
						</button>

					</div>

					<div class="col-md-12" v-else-if="mode != 'edit_profile' && currentUser.can && currentUser.can['update_' + kelas]">

						<button class="btn btn-light mb-1" @click.prevent="create('diklat')">
							<i class="icon-plus22"></i> Tambah
						</button>

						<button class="btn btn-light mb-1" @click.prevent="update('diklat')"
						:disabled="!selectedItemDiklat.id || selectedItemDiklat.kegiatan_id != 0">
							<i class="icon-pencil5"></i> Ubah
						</button>

						<button class="btn btn-light mb-1" @click.prevent="update('diklat')"
						:disabled="!selectedItemDiklat.id || selectedItemDiklat.kegiatan_id != 0">
							<i class="icon-pencil5"></i> Lihat Diklat
						</button>

						<button class="btn btn-light mb-1" @click="destroy('diklat')" :disabled="!selectedItemDiklat.id || selectedItemDiklat.kegiatan_id != 0">
							<i class="icon-bin2"></i> Hapus
						</button>

					</div>

				</div>		
			</div>

			<data-table :items="itemDataDiklat" :columnData="columnDataDiklat" :itemDataStat="itemDataStatDiklat">
				<template slot="item-desktop" slot-scope="props">
					<tr :class="{ 'bg-info': selectedItemDiklat.id === props.item.id }" class="text-nowrap" @click="selectedRowDiklat(props.item)" v-if="props.item">
						<td>{{ props.index + 1 }}</td>
						<td>
							<span v-if="props.item.kegiatan_id != 0">
								<span class="badge bg-blue-400 align-self-center ml-auto" v-tooltip="'Riwayat diklat ini berasal dari data diklat BKCU di SIMO yang terdaftar secara online, oleh karena itut tidak bisa di edit atau dihapus'">Terintegrasi</span>
							</span>
							<span v-else-if="props.item.kegiatan_id == 0">
								<span class="badge bg-brown-400 align-self-center ml-auto" v-tooltip="'Riwayat diklat ini berasal dari inputan manual dan tidak terhubung dengan data diklat BKCU di SIMO'">Manual</span>
							</span>
							<span v-else>-</span>
						</td>
						<td>
							<span v-if="props.item.kegiatan_id != 0">
								<span v-if="props.item.kegiatan">{{ props.item.kegiatan.name }}</span>
							</span>
							<span v-else-if="props.item.kegiatan_id == 0">
								{{ props.item.name }}
							</span>
							<span v-else>-</span>
						</td>
						<td>
							<span v-if="props.item.kegiatan_id != 0">
								<span v-if="props.item.kegiatan.provinces">{{ props.item.kegiatan.provinces.name }}</span>
							</span>
							<span v-else-if="props.item.kegiatan_id == 0">
								{{ props.item.tempat }}
							</span>
							<span v-else>-</span>
						</td>
						<td>
							<span v-if="props.item.kegiatan_id != 0">
								<span v-if="props.item.kegiatan.tipe == 'diklat_bkcu'">PUSKOPCUINA</span>
							</span>
							<span v-else-if="props.item.kegiatan_id == 0">
								{{ props.item.lembaga }}
							</span>
							<span v-else>-</span>
						</td>
						<td>
							<span v-if="props.item.kegiatan_id != 0">
								<span v-for="(panitiaD, index) in props.item.kegiatan.panitia_dalam" :key="index">
									<span v-if="panitiaD.pivot.peran == 'fasilitator'">{{ panitiaD.name + ', ' }}</span>
								</span>
								<span v-for="(panitiaL, index) in props.item.kegiatan.panitia_luar" :key="index">
									<span v-if="panitiaL.pivot.peran == 'fasilitator'">{{ panitiaL.name + ', ' }}</span>
								</span>
							</span>
							<span v-else-if="props.item.kegiatan_id == 0">
								{{ props.item.fasilitator }}
							</span>
							<span v-else>-</span>
						</td>
						<td>
							<span v-if="props.item.kegiatan_id != 0">
								<span v-html="$options.filters.date(props.item.kegiatan.mulai)" v-if="props.item.kegiatan"></span>
								<span v-else>-</span>
							</span>		
							<span v-else-if="props.item.kegiatan_id == 0">
								<span v-html="$options.filters.date(props.item.datang)" v-if="props.item.datang"></span>
								<span v-else>-</span>
							</span>
							<span v-else>-</span>
						</td>
						<td>
							<span v-if="props.item.kegiatan_id != 0">
								<span v-html="$options.filters.date(props.item.kegiatan.selesai)" v-if="props.item.kegiatan"></span>
								<span v-else>-</span>
							</span>		
							<span v-else-if="props.item.kegiatan_id == 0">
								<span v-html="$options.filters.date(props.item.pulang)" v-if="props.item.pulang"></span>
								<span v-else>-</span>
							</span>
							<span v-else>-</span>	
						</td>
					</tr>
				</template>	
			</data-table>
			
			<div class="row">
				<div class="col-sm-12">
					<hr/>
					<p class="text-muted pl-2 pr-2">* Tipe yang dimaksud disini adalah pembeda antara informasi riwayat diklat yang diinput. Tipe manual berarti riwayat diklat di input secara manual oleh pengguna, sedangkan tipe terintegrasi berarti diklat tersebut adalah diklat yg muncul karena sudah mendaftar diklat melalui SIMO</p>
				</div>
			</div>
			
		</div>

		<!-- keterangan -->
		<div class="card">
			<div class="card-header bg-white">
				<h5 class="card-title">Keterangan</h5>
			</div>
			<div class="card-body pb-2">
				<div class="row">

					<div class="col-md-12" v-if="mode == 'edit_profile'">

						<button class="btn btn-light mb-1" @click.prevent="create('keterangan')">
							<i class="icon-plus22"></i> Tambah
						</button>

						<button class="btn btn-light mb-1" @click.prevent="update('keterangan')"
						:disabled="!selectedItemKeterangan.id">
							<i class="icon-pencil5"></i> Ubah
						</button>

						<button class="btn btn-light mb-1" @click="destroy('keterangan')" :disabled="!selectedItemKeterangan.id">
							<i class="icon-bin2"></i> Hapus
						</button>

					</div>

					<div class="col-md-12" v-else-if="mode != 'edit_profile' && currentUser.can && currentUser.can['update_' + kelas]">

						<button class="btn btn-light mb-1" @click.prevent="create('keterangan')">
							<i class="icon-plus22"></i> Tambah
						</button>

						<button class="btn btn-light mb-1" @click.prevent="update('keterangan')"
						:disabled="!selectedItemKeterangan.id">
							<i class="icon-pencil5"></i> Ubah
						</button>

						<button class="btn btn-light mb-1" @click="destroy('keterangan')" :disabled="!selectedItemKeterangan.id">
							<i class="icon-bin2"></i> Hapus
						</button>

					</div>

				</div>		
			</div>

			<data-table :items="itemDataKeterangan" :columnData="columnDataKeterangan" :itemDataStat="itemDataStatKeterangan">
				<template slot="item-desktop" slot-scope="props">
					<tr :class="{ 'bg-info': selectedItemKeterangan.id === props.item.id }" class="text-nowrap" @click="selectedRowKeterangan(props.item)" v-if="props.item">
						<td>{{ props.index + 1 }}</td>
						<td><check-value :value="props.item.tipe"></check-value></td>
						<td><check-value :value="props.item.name"></check-value></td>
						<td><check-value :value="props.item.keterangan"></check-value></td>
						<td v-html="$options.filters.date(props.item.tanggal)"></td>
					</tr>
				</template>	
			</data-table>

		</div>

		<!-- form button -->
		<div class="card card-body" v-if="mode != 'edit_profile'">
			<form-button
				:cancelState="''"
				:formValidation="'form'"
				:confirmState="'methods'"
				@confirmClick="back()" v-if="currentUser.can && currentUser.can['update_' + kelas]"></form-button>
			<form-button
				:cancelState="'methods'"
				:isSingleButton="true"
				@cancelClick="back()" v-else></form-button>	
		</div>

		<!-- modal -->
		<app-modal :show="modalShow" :state="modalState" :title="modalTitle" :content="modalContent" :color="modalColor" @batal="modalTutup" @tutup="modalTutup" @confirmOk="modalConfirmOk" @successOk="modalTutup" @failOk="modalTutup"  @backgroundClick="modalTutup">
			 <template slot="modal-title">
				 {{ modalTitle }}
			 </template>

			 <template slot="modal-body1">
				 <!-- form pekerjaan -->
					<form-pekerjaan :selected="formModel" :formState="formState" :id_aktivis="id_aktivis" @tutup="modalTutup" v-if="formState == 'create pekerjaan' || formState == 'edit pekerjaan'"></form-pekerjaan>

					<!-- form pendidikan -->
					<form-pendidikan :selected="formModel" :formState="formState" :id_aktivis="id_aktivis" @tutup="modalTutup" v-if="formState == 'create pendidikan' || formState == 'edit pendidikan'"></form-pendidikan>

					<!-- form organisasi -->
					<form-organisasi :selected="formModel" :formState="formState" :id_aktivis="id_aktivis" @tutup="modalTutup" v-if="formState == 'create organisasi' || formState == 'edit organisasi'"></form-organisasi>

					<!-- form diklat -->
					<form-diklat :selected="formModel" :formState="formState" :id_aktivis="id_aktivis" @tutup="modalTutup" v-if="formState == 'create diklat' || formState == 'edit diklat'"></form-diklat>

					<!-- form keterangan -->
					<form-keterangan :selected="formModel" :formState="formState" :id_aktivis="id_aktivis" @tutup="modalTutup" v-if="formState == 'create keterangan' || formState == 'edit keterangan'"></form-keterangan>
			 </template>

		</app-modal>

	</div>
</template>

<script>
	import moment from 'moment';
	import { mapGetters } from 'vuex';
	import message from "../../components/message.vue";
	import dataTable from '../../components/datatable.vue';
	import appModal from '../../components/modal';
	import appImageUpload from '../../components/ImageUpload.vue';
	import formPekerjaan from "./formPekerjaan.vue";
	import formPendidikan from "./formPendidikan.vue";
	import formOrganisasi from "./formOrganisasi.vue";	
	import formKeterangan from "./formKeterangan.vue";	
	import formDiklat from "./formDiklat.vue";	
	import formButton from "../../components/formButton.vue";
	import formInfo from "../../components/formInfo.vue";
	import checkValue from '../../components/checkValue.vue';
	import identitas from "../../components/identitas2.vue";

	export default {
		props: ['id_aktivis','id_cu','mode'],
		components: {
			message,
			dataTable,
			appModal,
			appImageUpload,
			formInfo,
			formButton,
			formPekerjaan,
			formPendidikan,
			formOrganisasi,
			formKeterangan,
			formDiklat,
			checkValue,
			identitas
		},
		data() {
			return {
				kelas: 'aktivis',
				id_local: '',
				formState: '',
				formModel: [],
				selectedItemPekerjaan: {},
				selectedItemPendidikan: {},
				selectedItemOrganisasi: {},
				selectedItemKeterangan: {},
				selectedItemDiklat: {},
				formPekerjaan: {},
				formPendidikan: {},
				formOrganisasi: {},
				formDiklat: {},
				columnDataPekerjaan:[
					{ title: 'No.' },
					{ title: 'Nama' },
					{ title: 'Tingkat' },
					{ title: 'Tempat' },
					{ title: 'Mulai' },
					{ title: 'Selesai' },
					{ title: 'Keterangan tidak aktif' },
				],
				columnDataPendidikan:[
					{ title: 'No.' },
					{ title: 'Jurusan' },
					{ title: 'Tingkat' },
					{ title: 'Tempat' },
					{ title: 'Mulai' },
					{ title: 'Selesai' },
				],
				columnDataOrganisasi:[
					{ title: 'No.' },
					{ title: 'Nama' },
					{ title: 'Jabatan' },
					{ title: 'Tempat' },
					{ title: 'Mulai' },
					{ title: 'Selesai' },
				],
				columnDataDiklat:[
					{ title: 'No.' },
					{ title: 'Tipe*' },
					{ title: 'Nama' },
					{ title: 'Tempat' },
					{ title: 'Lembaga' },
					{ title: 'Fasilitator' },
					{ title: 'Mulai' },
					{ title: 'Selesai' },
				],
				columnDataKeterangan:[
					{ title: 'No.' },
					{ title: 'Tipe' },
					{ title: 'Nama' },
					{ title: 'Keterangan' },
					{ title: 'Tanggal' },
				],
				cancelTitle: 'Tutup',
				cancelIcon: 'icon-cross',
				cancelState: 'methods',
				modalShow: false,
				modalState: '',
				modalTitle: '',
				modalColor: '',
				modalContent: '',
				modalImageShow: false,
				modalImageContent: '',
				submited: false,
			}
		},
		created(){
			this.fetch();
		},
		watch: {
			updateStat(value){
				this.modalShow = true;
				this.modalState = value;
				this.modalColor = '';
				this.modalContent = '';

				if(value === "success"){
					this.modalTitle = this.updateResponse.message;

					if(this.formState == 'create pekerjaan' || this.formState == 'edit pekerjaan'){
						this.$store.dispatch(this.kelas + '/indexPekerjaan',[this.id_aktivis, this.id_cu]);
					}

					if(this.formState == 'create pendidikan' || this.formState == 'edit pendidikan'){
						this.$store.dispatch(this.kelas + '/indexPendidikan',[this.id_aktivis, this.id_cu]);
					}

					if(this.formState == 'create organisasi' || this.formState == 'edit organisasi'){
						this.$store.dispatch(this.kelas + '/indexOrganisasi',[this.id_aktivis, this.id_cu]);
					}

					if(this.formState == 'create diklat' || this.formState == 'edit diklat'){
						this.$store.dispatch(this.kelas + '/indexDiklat',[this.id_aktivis, this.id_cu]);
					}

					if(this.formState == 'create keterangan' || this.formState == 'edit keterangan'){
						this.$store.dispatch(this.kelas + '/indexKeterangan',[this.id_aktivis, this.id_cu]);
					}
				}else{
					this.modalTitle = 'Oops terjadi kesalahan :(';
					this.modalContent = this.updateResponse;
				}
			},
    },
		methods: {
			fetch(){
				this.$store.dispatch(this.kelas + '/edit',this.id_aktivis);
				this.$store.dispatch(this.kelas + '/indexPekerjaan',[this.id_aktivis, this.id_cu]);
				this.$store.dispatch(this.kelas + '/indexPendidikan',[this.id_aktivis, this.id_cu]);
				this.$store.dispatch(this.kelas + '/indexOrganisasi',[this.id_aktivis, this.id_cu]);
				this.$store.dispatch(this.kelas + '/indexDiklat',[this.id_aktivis, this.id_cu]);
				this.$store.dispatch(this.kelas + '/indexKeterangan',[this.id_aktivis, this.id_cu]);
			},
			back(){
				if(this.currentUser.id_cu != 0){
					this.$router.push({name: this.kelas + 'Cu', params:{cu: this.currentUser.id_cu,  tingkat: 'semua'}});
				}else{
					this.$router.push({name: this.kelas + 'Cu', params:{cu:'semua', tingkat: 'semua'}});
				}
			},
			// kembali(){
			// 	if(this.$route.meta.mode == 'create'){
			// 		this.$router.push({name: this.kelas + 'CreateEdit', params:{id: this.id_aktivis}});	
			// 	}else{
			// 		this.back();
			// 	}
			// },
			selectedRowPekerjaan(item){
				this.selectedItemPekerjaan = item;
			},
			selectedRowPendidikan(item){
				this.selectedItemPendidikan = item;
			},
			selectedRowOrganisasi(item){
				this.selectedItemOrganisasi = item;
			},
			selectedRowDiklat(item){
				this.selectedItemDiklat = item;
			},
			selectedRowKeterangan(item){
				this.selectedItemKeterangan = item;
			},
			create(value){
				this.modalShow = true;
				this.modalState = 'normal1';
				this.modalColor = 'bg-primary';
				this.modalTitle = 'Tambah ' + value;
				this.formState = 'create ' + value;
			},
			update(value){
				this.modalShow = true;
				this.modalState = 'normal1';
				this.modalColor = 'bg-primary';
				this.modalTitle = 'Ubah ' + value;
				this.formState = 'edit ' + value;

				if(value == 'pekerjaan'){
					this.formModel = Object.assign({}, this.selectedItemPekerjaan);
				}else if(value == 'pendidikan'){
					this.formModel = Object.assign({}, this.selectedItemPendidikan);
				}else if(value == 'organisasi'){
					this.formModel = Object.assign({}, this.selectedItemOrganisasi);
				}else if(value == 'diklat'){
					this.formModel = Object.assign({}, this.selectedItemDiklat);
				}else if(value == 'keterangan'){
					this.formModel = Object.assign({}, this.selectedItemKeterangan);
				}
			},		
			destroy(value){
				this.modalShow = true;
				this.modalState = 'confirm-tutup';
				this.modalColor = '';
				this.modalTitle = 'Hapus '+ value +' ini?';
				this.formState = value;
			},
			modalTutup() {
				this.modalShow = false;
			},
			modalConfirmOk() {
				if(this.formState == 'pekerjaan'){
					this.$store.dispatch(this.kelas + '/destroyPekerjaan', this.selectedItemPekerjaan.id);
				}else if(this.formState == 'pendidikan'){
					this.$store.dispatch(this.kelas + '/destroyPendidikan', this.selectedItemPendidikan.id);
				}else if(this.formState == 'organisasi'){
					this.$store.dispatch(this.kelas + '/destroyOrganisasi', this.selectedItemOrganisasi.id);
				}else if(this.formState == 'diklat'){
					this.$store.dispatch(this.kelas + '/destroyDiklat', this.selectedItemDiklat.id);
				}else if(this.formState == 'keterangan'){
					this.$store.dispatch(this.kelas + '/destroyKeterangan', this.selectedItemKeterangan.id);
				}
			},
			cancelClick(){
				this.modalShow = false;
			},
			moment: function () {
				return moment();
			},
		},
		computed:{
			...mapGetters('auth',{
				currentUser: 'currentUser'
			}),
			...mapGetters('aktivis',{
				form: 'data',
				formStat: 'dataStat',
				itemDataPekerjaan: 'dataS1',
				itemDataPendidikan: 'dataS2',
				itemDataOrganisasi: 'dataS3',
				itemDataDiklat: 'dataS4',
				itemDataKeterangan: 'dataS5',
				itemDataStatPekerjaan: 'dataStatS1',
				itemDataStatPendidikan: 'dataStatS2',
				itemDataStatOrganisasi: 'dataStatS3',
				itemDataStatDiklat: 'dataStatS4',
				itemDataStatKeterangan: 'dataStatS5',
				updateResponse: 'update',
				updateStat: 'updateStat'
			})
		},
	}
</script>