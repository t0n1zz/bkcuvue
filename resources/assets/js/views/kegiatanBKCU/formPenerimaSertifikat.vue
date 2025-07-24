<template>
	<div>
		<!-- peserta -->
		<form v-if="this.tipePenerima == 'peserta'" @submit.prevent="save" data-vv-scope="formPenerimaSertifikat">
			
			<!-- message -->
			<message v-if="message.show" @close="messageClose" :title="'Oops terjadi kesalahan'"
				:errorData="message.content" :showDebug="false">
			</message>
			<div>
			
			<data-viewer :title="'penerima sertifikat'" :columnData="columnPeserta" :itemData="itemPeserta" :query="queryPeserta"
				:itemDataStat="itemPesertaStat" @fetch="fetchPeserta" :isDasar="'true'" :isNoButtonRow="'true'"
				>

				<!-- item  -->
				<template slot="item-desktop" slot-scope="props">
					<tr class="text-nowrap cursor-pointer">
						<td>
							{{ props.index + 1 }}
						</td>
						<td @click="modalOpen('image', props.item)" class="cursor-pointer">
							<!-- if aktivis -->
							<template v-if="props.item.aktivis">
								<img :src="'/images/aktivis/' + props.item.aktivis.gambar + 'n.jpg'" width="35px"
									class="img-rounded img-fluid wmin-sm" v-if="props.item.aktivis.gambar">
								<img :src="'/images/no_image_man.jpg'" width="35px" class="img-rounded img-fluid wmin-sm"
									v-else>
							</template>
							<!-- if mitra orang -->
							<template v-else-if="props.item.mitra_orang">
								<img :src="'/images/mitra_orang/' + props.item.mitra_orang.gambar + 'n.jpg'" width="35px"
									class="img-rounded img-fluid wmin-sm" v-if="props.item.mitra_orang.gambar">
								<img :src="'/images/no_image_man.jpg'" width="35px" class="img-rounded img-fluid wmin-sm"
									v-else>
							</template>
							<img :src="'/images/no_image_man.jpg'" width="35px" class="img-rounded img-fluid wmin-sm" v-else>
						</td>
						<td>
							<check-value :value="props.item.name_sertifikat"></check-value>
						</td>
						<td>
							<input type="checkbox" @change="toggleSelection(props.item)" :checked="isSelected(props.item)" />
						</td>
					</tr>
				</template>
			</data-viewer>

			<!-- Tombol Select All -->
			<div class="mb-3 text-right">
					<button type="button" @click="selectAll" class="btn btn-primary">Pilih Semua</button>
					<button type="button" @click="unselectAll" class="btn btn-danger">Batalkan Pilihan</button>
			</div>

			<hr>
			<!-- tombol desktop-->
			<div class="text-center d-none d-md-block">
				<button type="button" class="btn btn-light" @click.prevent="tutup">
					<i class="icon-cross"></i> Tutup</button>

				<button type="submit" class="btn btn-primary"
					:disabled="selectedItems.length === 0">
					<i class="icon-floppy-disk"></i> Simpan</button>
			</div>

			<!-- tombol mobile-->
			<div class="d-block d-md-none">
				<button type="submit" class="btn btn-primary btn-block pb-2"
					:disabled="selectedItems.length === 0">
					<i class="icon-floppy-disk"></i> Simpan</button>

				<button type="button" class="btn btn-light btn-block pb-2" @click.prevent="tutup">
					<i class="icon-cross"></i> Tutup</button>
			</div>
			</div>
		</form>

		<!-- panitia dan fasilitator -->
		<form v-if="this.tipePenerima == 'fasilitator'"  @submit.prevent="save" data-vv-scope="formPenerimaSertifikat">
			
			<!-- message -->
			<message v-if="message.show" @close="messageClose" :title="'Oops terjadi kesalahan'"
				:errorData="message.content" :showDebug="false">
			</message>
			<div>
				<div>
					<data-table :items="itemDataPanitia" :columnData="columnDataPanitia" :itemDataStat="itemDataPanitiaStat">
						<template slot="item-desktop" slot-scope="props">
						<tr v-if="props.item">
							<td>{{ props.index + 1 }}</td>
							<td>
							<template v-if="props.item.asal == 'dalam'">
								<img :src="'/images/aktivis/' + props.item.aktivis_gambar + 'n.jpg'" width="35px" class="img-rounded img-fluid wmin-sm" v-if="props.item.gambar">
								<img :src="'/images/no_image_man.jpg'" width="35px" class="img-rounded img-fluid wmin-sm" v-else>
							</template>
							<template v-else-if="props.item.asal == 'luar'">
								<img :src="'/images/mitra_orang/' + props.item.mitra_orang_gambar + 'n.jpg'" width="35px" class="img-rounded img-fluid wmin-sm" v-if="props.item.gambar">
								<img :src="'/images/no_image_man.jpg'" width="35px" class="img-rounded img-fluid wmin-sm" v-else>
							</template>
							<template v-else-if="props.item.asal == 'luar lembaga'">
								<img :src="'/images/mitra_lembaga/' + props.item.mitra_lembaga_gambar + 'n.jpg'" width="35px" class="img-rounded img-fluid wmin-sm" v-if="props.item.gambar">
								<img :src="'/images/no_image_man.jpg'" width="35px" class="img-rounded img-fluid wmin-sm" v-else>
							</template>
							</td>
							<td>
							<template v-if="props.item.asal == 'dalam'">
								<check-value :value="props.item.aktivis_name"></check-value>
							</template>
							<template v-if="props.item.asal == 'luar'">
								<check-value :value="props.item.mitra_orang_name"></check-value>
							</template>
							<template v-if="props.item.asal == 'luar lembaga'">
								<check-value :value="props.item.mitra_lembaga_name"></check-value>
							</template>
							</td>
							<td>
							<check-value :value="props.item.asal"></check-value>
							</td>
							<td>
							<check-value :value="props.item.peran"></check-value>
							</td>
							<td>
							<template v-if="props.item.asal == 'dalam'">
								<check-value :value="props.item.aktivis_email"></check-value>
							</template>
							<template v-if="props.item.asal == 'luar'">
								<check-value :value="props.item.mitra_orang_email"></check-value>
							</template>
							<template v-if="props.item.asal == 'luar lembaga'">
								<check-value :value="props.item.mitra_lembaga_email"></check-value>
							</template>
							</td>
							<td>
							<template v-if="props.item.asal == 'dalam'">
								<check-value :value="props.item.aktivis_hp"></check-value>
							</template>
							<template v-if="props.item.asal == 'luar'">
								<check-value :value="props.item.mitra_orang_hp"></check-value>
							</template>
							<template v-if="props.item.asal == 'luar lembaga'">
								<check-value :value="props.item.mitra_lembaga_hp"></check-value>
							</template>
							</td>
							<td>
							<input type="checkbox" @change="toggleSelection(props.item)" :checked="isSelected(props.item)" />
							</td>
						</tr>
						</template>
					</data-table>
				</div>

			<!-- Tombol Select All -->
			<div class="mb-3 text-right">
					<button type="button" @click="selectAll" class="btn btn-primary">Pilih Semua</button>
					<button type="button" @click="unselectAll" class="btn btn-danger">Batalkan Pilihan</button>
			</div>

			<hr>
			<!-- tombol desktop-->
			<div class="text-center d-none d-md-block">
				<button type="button" class="btn btn-light" @click.prevent="tutup">
					<i class="icon-cross"></i> Tutup</button>

				<button type="submit" class="btn btn-primary"
					:disabled="formPenerimaSertifikat.aktivis_id == '' && formPenerimaSertifikat.mitra_orang_id == ''">
					<i class="icon-floppy-disk"></i> Simpan</button>
			</div>

			<!-- tombol mobile-->
			<div class="d-block d-md-none">
				<button type="submit" class="btn btn-primary btn-block pb-2"
					:disabled="formPenerimaSertifikat.aktivis_id == '' && formPenerimaSertifikat.mitra_orang_id == ''">
					<i class="icon-floppy-disk"></i> Simpan</button>

				<button type="button" class="btn btn-light btn-block pb-2" @click.prevent="tutup">
					<i class="icon-cross"></i> Tutup</button>
			</div>
			</div>
		</form>
	</div>
</template>

<script>
import _ from 'lodash';
import { mapGetters } from 'vuex';
import infoIcon from "../../components/infoIcon.vue";
import checkValue from '../../components/checkValue.vue';
import Message from "../../components/message.vue";
import DatePicker from "../../components/datePicker.vue";
import wajibBadge from "../../components/wajibBadge.vue";
import dataTable from '../../components/datatable.vue';
import dataViewer from '../../components/dataviewer2.vue';
import { toMulipartedForm } from '../../helpers/form';
export default {
	props: ['kegiatan_id', 'tipePenerima'],
	components: {
		checkValue,
		Message,
		DatePicker,
		infoIcon,
		wajibBadge,
		dataTable,
		dataViewer,
	},
	data() {
		return {
			title: '',
			kelas: 'kegiatanBKCU',
			selectedItems: [],
			formPenerimaSertifikat: [],
			queryPeserta: {
				order_column: "created_at",
				order_direction: "asc",
				filter_match: "and",
				limit: 1000,
				page: 1
			},
			columnPeserta: [
				{
					title: 'No.',
				},
				{
					title: 'Foto',
					name: 'gambar',
					hide: false,
				},
				{
					title: 'Nama Di Sertifikat',
					name: 'name_sertifikat',
					tipe: 'string',
					sort: true,
					hide: false,
					disable: false,
					filter: true,
					filterDefault: true
				},
				{
					title: 'Mendapat Sertifikat ?',
					name: 'nomor_sertifikat',
					tipe: 'string',
				},
			],
			columnDataPanitia: [
					{ title: 'No.' },
					{ title: 'Foto' },
					{ title: 'Nama',
            			name: 'name',
						tipe: 'string',
						sort: true,
						hide: false,
						disable: false,
						filter: true,
						filterDefault: true
           },
					{ title: 'Asal' },
					{ title: 'Peran' },
					{ title: 'Email' },
					{ title: 'No. Hp' },
					{title: 'Mendapat Sertifikat ?'}
				],	
			message: {
				show: false,
				content: ''
			},
			submited: false,
		}
	},
	created() {
		this.fetchPeserta(this.queryPeserta);
		},
	watch: {
		itemPesertaStat(newVal) {
			if (newVal === 'success') {
				this.initializeSelection();
			}
		},
		itemStat(newVal) {
			if (newVal === 'success') {
				this.initializeSelection();
			}
		},
	},
	methods: {
		getAktivisId(item) {
			return item.aktivis_id || (item.mitra_orang && item.mitra_orang.id) || null;
		},

		initializeSelection() {
			if (this.tipePenerima === 'peserta') {
				if (this.itemPesertaStat === 'success' && this.itemPeserta.data) {
						this.selectedItems = this.itemPeserta.data
							.filter(item => item.isGetSertifikat === 1)
							.map(item => ({
								aktivis_id: this.getAktivisId(item),
								kegiatan_id: this.kegiatan_id,
								isGetSertifikat: 1,
								tipePenerima: this.tipePenerima,
								asal : this.asalPeserta(item)
							}));
				} 
			}
			else {
				if (this.itemStat === 'success') {
					this.selectedItems = this.itemDataPanitia
				.filter(itemSertifikat => itemSertifikat.isGetSertifikat === 1) // Hanya yang isGetSertifikat = 1 yang dipilih
				.map(itemSertifikat => ({
					aktivis_id: itemSertifikat.aktivis_id,
					kegiatan_id: this.kegiatan_id,
					isGetSertifikat: 1,
					tipePenerima: this.tipePenerima
				}));
				}
			}
		},
		// Toggle item selection
		toggleSelection(item) {
			const id = this.tipePenerima === 'peserta' ? this.getAktivisId(item) : item.aktivis_id;
			const index = this.selectedItems.findIndex(i => i.aktivis_id === id);

			if (index !== -1) {
				this.selectedItems.splice(index, 1);
			} else {
				const newItem = {
					aktivis_id: id,
					kegiatan_id: this.kegiatan_id,
					isGetSertifikat: 1,
					tipePenerima: this.tipePenerima,
				};
				if (this.tipePenerima === 'peserta') newItem.asal = this.asalPeserta(item);
				this.selectedItems.push(newItem);
			}
		},
		// Cek apakah item sudah terpilih
		isSelected(item) {
			if (this.tipePenerima === 'peserta') {
				return this.selectedItems.some(i => i.aktivis_id === this.getAktivisId(item));
			} else if (this.tipePenerima === 'fasilitator') {
				return this.selectedItems.some(i => i.aktivis_id === item.aktivis_id);
			}
			return false;
		},

		asalPeserta(item) {
			if (this.tipePenerima === 'peserta') {
				if (item.mitra_orang_id) {
					return 'luar';
				} else {
					return 'dalam';
				}
			}
		},

		// Pilih semua peserta
		selectAll() {
			if (this.tipePenerima === 'peserta') {
				this.selectedItems = this.itemPeserta.data.map(item => ({
				aktivis_id: this.getAktivisId(item),
				kegiatan_id: this.kegiatan_id,
				isGetSertifikat: 1,
				tipePenerima: this.tipePenerima,
				asal : this.asalPeserta(item)
				}));

			}
			else if(this.tipePenerima === 'fasilitator') {
				
				if (this.itemStat === 'success' && this.itemDataPanitia) {
					this.selectedItems = this.itemDataPanitia.map(item => ({
						aktivis_id: item.aktivis_id,
						kegiatan_id: this.kegiatan_id,
						isGetSertifikat: 1,
						tipePenerima: this.tipePenerima
					}));
				}
			}
		},

		// Hapus semua pilihan
		unselectAll() {
			this.selectedItems = [];
		},

		prepareFormData() {
			if(this.tipePenerima === 'peserta'){
				this.formPenerimaSertifikat = this.itemPeserta.data.map(item => ({
				aktivis_id: this.getAktivisId(item),
				kegiatan_id: this.kegiatan_id,
				isGetSertifikat: this.isSelected(item) ? 1 : 0,
				tipePenerima: this.tipePenerima,
				asal : this.asalPeserta(item)
			}));
			}else if(this.tipePenerima === 'fasilitator'){
			this.formPenerimaSertifikat = this.itemDataPanitia.map(item => ({
				aktivis_id: item.aktivis_id,
				kegiatan_id: this.kegiatan_id,
				isGetSertifikat: this.isSelected(item) ? 1 : 0, // Jika tidak dipilih, atur ke 0
				tipePenerima: this.tipePenerima
			}));
			}
		},

		fetchPeserta(params) {
			this.$store.dispatch(this.kelas+'/indexPeserta', [params, this.kegiatan_id]);
		},

		save() {
			this.prepareFormData();
			const formData = toMulipartedForm(this.formPenerimaSertifikat, this.$route.meta.mode);
			 this.$validator.validateAll('formPenerimaSertifikat').then((result) => {
			if (result) {
				this.$store.dispatch(this.kelas + '/penerimaSertifikat', formData)
				} else {
					this.submited = true;
				}
			 });
			},
		messageClose() {
			this.message.show = false;
		},
		close() {
			this.$emit('input');
			this.$refs.fileInput.value = '';
		},
		tutup() {
			this.$emit('tutup');
		}
	},
	computed: {
		...mapGetters('auth', {
			currentUser: 'currentUser'
		}),
		...mapGetters('kegiatanBKCU', {
			item: 'data',
			itemStat: 'dataStat',
			itemDataPanitia: 'dataPanitia',
			itemDataPanitiaStat: 'dataPanitiaStat',
			itemPeserta: 'dataS',
			itemPesertaStat: 'dataStatS',
		}),
	}
}
</script>