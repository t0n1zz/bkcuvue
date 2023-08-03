<template>
	<div>
		<form @submit.prevent="save" data-vv-scope="formPanitia">

			<!-- asal -->
			<div class="form-group" :class="{ 'has-error': errors.has('formPanitia.asal') }" v-if="mode == 'create'">

				<!-- title -->
				<h5 :class="{ 'text-danger': errors.has('formPanitia.asal') }">
					<i class="icon-cross2" v-if="errors.has('formPanitia.asal')"></i>
					Asal:
				</h5>

				<!-- select -->
				<select class="form-control" name="asal" v-model="formPanitia.asal" data-width="100%"
					@change="changeAsal($event.target.value)" v-validate="'required'" data-vv-as="asal">
					<option disabled value="">Silahkan pilih asal</option>
					<option value="dalam">Dalam gerakan</option>
					<option value="luar">Luar gerakan (Perseorangan)</option>
					<option value="luar lembaga">Luar gerakan (Lembaga)</option>
				</select>

				<!-- error message -->
				<small class="text-muted text-danger" v-if="errors.has('formPanitia.asal')">
					<i class="icon-arrow-small-right"></i> {{ errors.first('formPanitia.asal') }}
				</small>
				<small class="text-muted" v-else>&nbsp;</small>
			</div>

			<div class="card" v-if="formPanitia.aktivis_id">
				<div class="card-header bg-info text-white header-elements-inline">
					<h6 class="card-title"></h6>
					<div class="header-elements" v-if="mode != 'edit'">
						<button type="button" class="btn btn-danger" @click.prevent="deleteSelected"><i
								class="icon-cross2 mr-2"></i> Batal</button>
					</div>
				</div>
				<div class="card-body">
					<div class="media flex-column flex-sm-row mt-0">
						<div class="mr-sm-3 mb-2 mb-sm-0">
							<div class="card-img-actions" v-if="formPanitia.asal == 'dalam'">
								<img :src="'/images/aktivis/' + formPanitia.gambar + '.jpg'"
									class="img-fluid img-preview rounded" v-if="formPanitia.gambar">
								<img :src="'/images/no_image.jpg'" class="img-fluid img-preview rounded" v-else>
							</div>
							<div class="card-img-actions" v-if="formPanitia.asal == 'luar'">
								<img :src="'/images/mitra_orang/' + formPanitia.gambar + '.jpg'"
									class="img-fluid img-preview rounded" v-if="formPanitia.gambar">
								<img :src="'/images/no_image.jpg'" class="img-fluid img-preview rounded" v-else>
							</div>
							<div class="card-img-actions" v-if="formPanitia.asal == 'luar lembaga'">
								<img :src="'/images/mitra_lembaga/' + formPanitia.gambar + '.jpg'"
									class="img-fluid img-preview rounded" v-if="formPanitia.gambar">
								<img :src="'/images/no_image.jpg'" class="img-fluid img-preview rounded" v-else>
							</div>
						</div>

						<div class="media-body">
							<ul class="list list-unstyled mb-0">
								<li><b>Nama:</b> {{ formPanitia.name }}</li>
								<li><b>Lembaga:</b> {{ formPanitia.lembaga }}</li>
								<li><b>Email:</b> {{ formPanitia.email }}</li>
								<li><b>Hp:</b> {{ formPanitia.hp }}</li>
							</ul>
						</div>
					</div>
				</div>
			</div>

			<!-- if asal dalam -->
			<data-viewer :title="'Aktivis'" :columnData="columnDataDalam" :itemData="itemDataDalam" :query="query"
				:itemDataStat="itemDataDalamStat" @fetch="fetchDalam" :isDasar="'true'" :isNoButtonRow="'true'"
				v-if="formPanitia.asal == 'dalam' && formPanitia.aktivis_id == '' && mode == 'create'">

				<!-- item  -->
				<template slot="item-desktop" slot-scope="props">
					<tr :class="{ 'bg-info': selectedItem.id === props.item.id }" class="text-nowrap"
						@click="selectedRow(props.item)">
						<td>
							{{ props.index + 1 + (+itemDataDalam.current_page - 1) * +itemDataDalam.per_page + '.' }}
						</td>
						<td>
							<img :src="'/images/' + kelas + '/' + props.item.gambar + 'n.jpg'"
								class="img-rounded img-fluid wmin-sm" v-if="props.item.gambar">
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
								<check-value :value="props.item.pekerjaan_aktif.cu.name"
									v-if="props.item.pekerjaan_aktif.cu"></check-value>
								<span v-else>-</span>
							</span>
							<span v-else-if="props.item.pekerjaan_aktif && props.item.pekerjaan_aktif.tipe == 2">
								<check-value :value="props.item.pekerjaan_aktif.lembaga_lain.name"
									v-if="props.item.pekerjaan_aktif.lembaga_lain"></check-value>
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
							<check-value :value="props.item.pekerjaan_aktif.name"
								v-if="props.item.pekerjaan_aktif"></check-value>
							<span v-else>-</span>
						</td>
						<td>
							<check-value :value="props.item.pendidikan_tertinggi.tingkat"
								v-if="props.item.pendidikan_tertinggi"></check-value>
							<span v-else>-</span>
						</td>
						<td>
							<check-value :value="props.item.pendidikan_tertinggi.name"
								v-if="props.item.pendidikan_tertinggi"></check-value>
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

			<!-- if asal luar orang -->
			<data-viewer :title="'Mitra Perseorangan'" :columnData="columnDataLuar" :itemData="itemDataLuar" :query="query"
				:itemDataStat="itemDataLuarStat" @fetch="fetchLuar" :isDasar="'true'" :isNoButtonRow="'true'"
				v-if="formPanitia.asal == 'luar' && formPanitia.aktivis_id == '' && mode == 'create'">

				<!-- item  -->
				<template slot="item-desktop" slot-scope="props">
					<tr :class="{ 'bg-info': selectedItem.id === props.item.id }" class="text-nowrap"
						@click="selectedRow(props.item)">
						<td>
							{{ props.index + 1 + (+itemDataLuar.current_page - 1) * +itemDataLuar.per_page + '.' }}
						</td>
						<td>
							<img :src="'/images/mitra_orang/' + props.item.gambar + 'n.jpg'"
								class="img-rounded img-fluid wmin-sm" v-if="props.item.gambar">
							<img :src="'/images/no_image.jpg'" class="img-rounded img-fluid wmin-sm" v-else>
						</td>
						<td>
							<check-value :value="props.item.name"></check-value>
						</td>
						<td>
							<check-value :value="props.item.kelamin"></check-value>
						</td>
						<td>
							<check-value :value="props.item.lembaga"></check-value>
						</td>
						<td>
							<check-value :value="props.item.jabatan"></check-value>
						</td>
						<td>
							<check-value :value="props.item.pendidikan"></check-value>
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

			<!-- if asal luar lembaga -->
			<data-viewer :title="'Lembaga Mitra'" :columnData="columnDataLuarLembaga" :itemData="itemDataLuarLembaga"
				:query="query" :itemDataStat="itemDataLuarLembagaStat" @fetch="fetchLuarLembaga" :isDasar="'true'"
				:isNoButtonRow="'true'"
				v-if="formPanitia.asal == 'luar lembaga' && formPanitia.aktivis_id == '' && mode == 'create'">

				<!-- item  -->
				<template slot="item-desktop" slot-scope="props">
					<tr :class="{ 'bg-info': selectedItem.id === props.item.id }" class="text-nowrap"
						@click="selectedRow(props.item)">
						<td>
							{{ props.index + 1 + (+itemDataLuarLembaga.current_page - 1) * +itemDataLuarLembaga.per_page +
								'.' }}
						</td>
						<td>
							<img :src="'/images/mitra_orang/' + props.item.gambar + 'n.jpg'"
								class="img-rounded img-fluid wmin-sm" v-if="props.item.gambar">
							<img :src="'/images/no_image.jpg'" class="img-rounded img-fluid wmin-sm" v-else>
						</td>
						<td>
							<check-value :value="props.item.name"></check-value>
						</td>
						<td>
							<check-value :value="props.item.bidang"></check-value>
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
							<check-value :value="props.item.website"></check-value>
						</td>
						<td>
							<check-value :value="props.item.email"></check-value>
						</td>
						<td>
							<check-value :value="props.item.telp"></check-value>
						</td>
						<td>
							<check-value :value="props.item.hp"></check-value>
						</td>
					</tr>
				</template>

			</data-viewer>

			<!-- peran -->
			<div class="form-group" :class="{ 'has-error': errors.has('formPanitia.peran') }">

				<!-- title -->
				<h5 :class="{ 'text-danger': errors.has('formPanitia.peran') }">
					<i class="icon-cross2" v-if="errors.has('formPanitia.peran')"></i>
					Peran:
				</h5>

				<!-- select -->
				<select class="form-control" name="peran" v-model="formPanitia.peran" data-width="100%"
					v-validate="'required'" data-vv-as="Peran">
					<option disabled value="">Silahkan pilih peran</option>
					<option value="panitia">Panitia</option>
					<option value="fasilitator">Fasilitator</option>
				</select>

				<!-- error message -->
				<small class="text-muted text-danger" v-if="errors.has('formPanitia.peran')">
					<i class="icon-arrow-small-right"></i> {{ errors.first('formPanitia.peran') }}
				</small>
				<small class="text-muted" v-else>&nbsp;</small>
			</div>

			<!-- keterangan -->
			<div class="form-group">

				<!-- title -->
				<h5>
					Keterangan:
				</h5>

				<!-- textarea -->
				<textarea rows="5" type="text" name="keterangan" class="form-control"
					placeholder="Silahkan masukkan keterangan" v-model="formPanitia.keterangan"></textarea>

			</div>

			<!-- message -->
			<message v-if="errors.any('formPanitia') && submited" :title="'Oops terjadi kesalahan'"
				:errorItem="errors.items">
			</message>
			<!-- divider -->
			<hr>

			<!-- tombol desktop-->
			<div class="text-center d-none d-md-block">
				<button type="button" class="btn btn-light" @click.prevent="tutup">
					<i class="icon-cross"></i> Tutup</button>

				<button type="submit" class="btn btn-primary" :disabled="formPanitia.aktivis_id == ''">
					<i class="icon-floppy-disk"></i> Simpan</button>
			</div>

			<!-- tombol mobile-->
			<div class="d-block d-md-none">
				<button type="submit" class="btn btn-primary btn-block pb-2" :disabled="formPanitia.aktivis_id == ''">
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

export default {
	props: ['mode', 'selected'],
	components: {
		DataViewer,
		checkValue,
		message
	},
	data() {
		return {
			title: '',
			kelas: 'aktivis',
			selectedItem: [],
			formPanitia: {
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
				{ title: 'Pendidikan' },
				{ title: 'Jurusan' },
				{ title: 'Tgl. Lahir' },
				{ title: 'Tempat Lahir' },
				{ title: 'Agama' },
				{ title: 'Status' },
				{ title: 'Provinsi' },
				{ title: 'Kabupaten/Kota' },
				{ title: 'Kecamatan' },
				{ title: 'Kelurahan' },
				{ title: 'Alamat' },
				{ title: 'Email' },
				{ title: 'Hp' },
			],
			columnDataLuar: [
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
				{ title: 'Lembaga' },
				{ title: 'Jabatan' },
				{ title: 'Pendidikan' },
				{ title: 'Tgl. Lahir' },
				{ title: 'Tempat Lahir' },
				{ title: 'Agama' },
				{ title: 'Status' },
				{ title: 'Provinsi' },
				{ title: 'Kabupaten/Kota' },
				{ title: 'Kecamatan' },
				{ title: 'Kelurahan' },
				{ title: 'Alamat' },
				{ title: 'Email' },
				{ title: 'Hp' },
			],
			columnDataLuarLembaga: [
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
				{ title: 'Bidang' },
				{ title: 'Provinsi' },
				{ title: 'Kabupaten/Kota' },
				{ title: 'Kecamatan' },
				{ title: 'Kelurahan' },
				{ title: 'Alamat' },
				{ title: 'Website' },
				{ title: 'Email' },
				{ title: 'No. Telp' },
				{ title: 'Hp' },
			],
			submited: false,
		}
	},
	created() {
		if (this.mode == 'edit') {
			this.formPanitia = Object.assign({}, this.selected);
		}
	},
	methods: {
		changeAsal(value) {
			this.$store.commit('aktivis/setDataS', []);
			this.$store.commit('aktivis/setDataStatS', '');
			this.$store.commit('mitraOrang/setDataS', []);
			this.$store.commit('mitraOrang/setDataStatS', '');
			this.$store.commit('mitraLembaga/setDataS', []);
			this.$store.commit('mitraLembaga/setDataStatS', '');

			this.deleteSelected();

			if (value == 'luar') {
				this.fetchLuar(this.query);
			} else if (value == 'luar lembaga') {
				this.fetchLuarLembaga(this.query);
			} else if (value == 'dalam') {
				this.fetchDalam(this.query);
			}
		},
		fetchDalam(params) {
			this.$store.dispatch('aktivis/index', [params, 'semua', 'aktif']);
		},
		fetchLuar(params) {
			this.$store.dispatch('mitraOrang/index');
		},
		fetchLuarLembaga(params) {
			this.$store.dispatch('mitraLembaga/index');
		},
		deleteSelected() {
			this.formPanitia.aktivis_id = '';
			this.selectedItem = '';
		},
		selectedRow(item) {
			this.selectedItem = item;
			this.formPanitia.aktivis_id = item.id;
			this.formPanitia.name = item.name;
			this.formPanitia.gambar = item.gambar;
			this.formPanitia.email = item.email != '' ? item.email : '-';
			this.formPanitia.hp = item.hp != '' ? item.hp : '-';


			if (this.formPanitia.asal == 'dalam') {
				if (item.pekerjaan_aktif.tipe == 1) {
					this.formPanitia.lembaga = item.pekerjaan_aktif.cu.name
				} else if (item.pekerjaan_aktif.tipe == 2) {
					this.formPanitia.lembaga = item.pekerjaan_aktif.lembaga_lain.name
				} else if (item.pekerjaan_aktif.tipe == 3) {
					this.formPanitia.lembaga = "PUSKOPCUINA"
				}
			} else {
				this.formPanitia.lembaga = item.lembaga != '' ? item.lembaga : '-';
			}
		},
		save() {
			this.$validator.validateAll('formPanitia').then((result) => {
				if (result) {
					if (this.mode == 'edit') {
						this.$emit('editPanitia', this.formPanitia);
					} else {
						this.$emit('createPanitia', this.formPanitia);
					}
					this.submited = false;
				} else {
					this.submited = true;
				}
			});
		},
		tutup() {
			this.$emit('tutup');
		}
	},
	computed: {
		...mapGetters('auth', {
			currentUser: 'currentUser'
		}),
		...mapGetters('aktivis', {
			itemDataDalam: 'dataS',
			itemDataDalamStat: 'dataStatS'
		}),
		...mapGetters('mitraOrang', {
			itemDataLuar: 'dataS',
			itemDataLuarStat: 'dataStatS'
		}),
		...mapGetters('mitraLembaga', {
			itemDataLuarLembaga: 'dataS',
			itemDataLuarLembagaStat: 'dataStatS'
		})
	}
}
</script>