<template>
	<div>
		<form @submit.prevent="save" data-vv-scope="formPeserta">

			<!-- message -->
			<message v-if="message.show" @close="messageClose" :title="'Oops terjadi kesalahan'"
				:errorData="message.content" :showDebug="false">
			</message>

			<!-- asal -->
			<div class="form-group" :class="{ 'has-error': errors.has('formPeserta.asal') }"
				v-if="mode == 'create' && currentUser.id_cu == 0 && formPeserta.aktivis_id == '' && formPeserta.mitra_orang_id == ''">

				<!-- title -->
				<h5 :class="{ 'text-danger': errors.has('formPeserta.asal') }">
					<i class="icon-cross2" v-if="errors.has('formPeserta.asal')"></i>
					Asal:
				</h5>

				<!-- select -->
				<select class="form-control" name="asal" v-model="formPeserta.asal" data-width="100%"
					v-validate="'required'" data-vv-as="asal" @change="changeAsal($event.target.value)">
					<option disabled value="">Silahkan pilih asal</option>
					<option value="dalam">Dalam gerakan</option>
					<option value="luar">Luar gerakan (Perseorangan)</option>
				</select>

				<!-- error message -->
				<small class="text-muted text-danger" v-if="errors.has('formPeserta.asal')">
					<i class="icon-arrow-small-right"></i> {{ errors.first('formPeserta.asal') }}
				</small>
				<small class="text-muted" v-else>&nbsp;</small>
			</div>

			<!-- asal dalam sasaran -->
			<div class="alert bg-warning text-white alert-styled-left" v-if="formPeserta.asal == 'dalam'">
				<span class="font-weight-semibold">Sasaran peserta untuk kegiatan ini adalah untuk tingkat:
					<br />
					<label v-for="(sasaran, index) in tingkat" :key="index" class="badge badge-primary ml-1">
						{{ sasaran.name }}
					</label>
				</span>
			</div>

			<!-- selected peserta -->
			<div class="card" v-if="formPeserta.aktivis_id || formPeserta.mitra_orang_id">
				<div class="card-header bg-info text-white header-elements-inline">
					<h6 class="card-title">{{ formPeserta.name_sertifikat }}</h6>
					<div class="header-elements">
						<button type="button" class="btn btn-danger" @click.prevent="deleteSelected"
							v-if="mode == 'create'"><i class="icon-cross2 mr-2"></i> Batal</button>
					</div>
				</div>
				<div class="card-body">
					<div class="media flex-column flex-sm-row mt-0 mb-3">
						<div class="mr-sm-3 mb-2 mb-sm-0">
							<div class="card-img-actions">
								<img :src="'/images/aktivis/' + formPeserta.gambar + '.jpg'"
									class="img-fluid img-preview rounded" v-if="formPeserta.gambar">
								<img :src="'/images/no_image.jpg'" class="img-fluid img-preview rounded" v-else>
							</div>
						</div>

						<div class="media-body">
							<div class="row">
								<div class="col-sm-6">
									<ul class="list list-unstyled mb-0">
										<li><b>Gender:</b> {{ formPeserta.kelamin }}</li>
										<li><b>Tempat Lahir:</b> {{ formPeserta.tempat_lahir }}</li>
										<li><b>Tgl. Lahir:</b> <span
												v-html="$options.filters.date(formPeserta.tanggal_lahir)"></span></li>
										<li><b>Status:</b> {{ formPeserta.status_pernikahan }}</li>
										<li><b>Tinggi:</b> {{ formPeserta.tinggi }}</li>
										<li><b>Agama:</b> {{ formPeserta.agama }}</li>
									</ul>
								</div>
								<div class="col-sm-6">
									<ul class="list list-unstyled mb-0">
										<li><b>Lembaga:</b> <br />{{ formPeserta.lembaga_name }}</li>
										<li><b>Jabatan:</b> <br />{{ formPeserta.pekerjaan_name }}</li>
										<li><b>Pendidikan:</b> <br />{{ formPeserta.pendidikan_name }}</li>
									</ul>
								</div>
							</div>

						</div>
					</div>
				</div>
			</div>

			<!-- asal dalam -->
			<data-viewer :title="'Aktivis'" :columnData="columnData" :itemData="itemData" :query="query"
				:itemDataStat="itemDataStat" @fetch="fetchAktivis" :isDasar="'true'" :isNoButtonRow="'true'"
				v-if="formPeserta.asal == 'dalam' && formPeserta.aktivis_id == '' && mode == 'create'">

				<!-- item  -->
				<template slot="item-desktop" slot-scope="props">
					<tr class="text-nowrap cursor-pointer" @click="selectedRow(props.item)">
						<td>
							{{ props.index + 1 + (+itemData.current_page - 1) * +itemData.per_page + '.' }}
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
						<td v-if="!columnData[4].disable">
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

			<!-- asal luar orang -->
			<data-viewer :title="'Mitra Perseorangan'" :columnData="columnDataLuar" :itemData="itemDataLuar" :query="query"
				:itemDataStat="itemDataLuarStat" @fetch="fetchMitra" :isDasar="'true'" :isNoButtonRow="'true'"
				v-if="formPeserta.asal == 'luar' && formPeserta.mitra_orang_id == '' && mode == 'create'">

				<!-- item  -->
				<template slot="item-desktop" slot-scope="props">
					<tr :class="{ 'bg-info': selectedItem.id === props.item.id }" class="text-nowrap cursor-pointer"
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
							<check-value :value="props.item.pekerjaan_tingkat"></check-value>
						</td>
						<td>
							<check-value :value="props.item.pekerjaan_name"></check-value>
						</td>
						<td>
							<check-value :value="props.item.pendidikan_tingkat"></check-value>
						</td>
						<td>
							<check-value :value="props.item.pendidikan_name"></check-value>
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

			<!-- form -->
			<div class="row" v-if="formPeserta.asal != ''">

				<!-- name nametag -->
				<div class="col-md-6" v-if="item.tipe_tempat !== 'ONLINE'">
					<div class="form-group" :class="{ 'has-error': errors.has('formPeserta.name_nametag') }">

						<!-- title -->
						<h5 :class="{ 'text-danger': errors.has('formPeserta.name_nametag') }">
							<i class="icon-cross2" v-if="errors.has('formPeserta.name_nametag')"></i>
							Nama di nametag: <wajib-badge></wajib-badge>
						</h5>

						<!-- text -->
						<input type="text" name="name_nametag" class="form-control"
							placeholder="Silahkan masukkan nama di nametag" v-validate="'required'"
							data-vv-as="Nama di nametag" v-model="formPeserta.name_nametag">

						<!-- error message -->
						<small class="text-muted text-danger" v-if="errors.has('formPeserta.name_nametag')">
							<i class="icon-arrow-small-right"></i> {{ errors.first('formPeserta.name_nametag') }}
						</small>
						<small class="text-muted" v-else>&nbsp;
						</small>
					</div>
				</div>

				<!-- name sertifikat -->
				<div :class="'col-md-6'">
					<div class="form-group" :class="{ 'has-error': errors.has('formPeserta.name_sertifikat') }">

						<!-- title -->
						<h5 :class="{ 'text-danger': errors.has('formPeserta.name_sertifikat') }">
							<i class="icon-cross2" v-if="errors.has('formPeserta.name_sertifikat')"></i>
							Nama di sertifikat: <wajib-badge></wajib-badge>
						</h5>

						<!-- text -->
						<input type="text" name="name_sertifikat" class="form-control"
							placeholder="Silahkan masukkan nama di sertifikat" v-validate="'required'"
							data-vv-as="Nama di sertifikat" v-model="formPeserta.name_sertifikat">

						<!-- error message -->
						<small class="text-muted text-danger" v-if="errors.has('formPeserta.name_sertifikat')">
							<i class="icon-arrow-small-right"></i> {{ errors.first('formPeserta.name_sertifikat') }}
						</small>
						<small class="text-muted" v-else>&nbsp;
						</small>
					</div>
				</div>

				<!-- tgl kedatangan -->
				<div class="col-md-6" v-if="item.tipe_tempat !== 'ONLINE'">
					<div class="form-group">

						<!-- title -->
						<h5>Tgl. Kedatangan:</h5>

						<!-- input -->
						<date-picker @dateSelected="formPeserta.datang = $event"
							:defaultDate="formPeserta.datang"></date-picker>

					</div>
				</div>

				<!-- tgl pulang -->
				<div class="col-md-6" v-if="item.tipe_tempat !== 'ONLINE'">
					<div class="form-group">

						<!-- title -->
						<h5>Tgl. Pulang:</h5>

						<!-- input -->
						<date-picker @dateSelected="formPeserta.pulang = $event"
							:defaultDate="formPeserta.pulang"></date-picker>

					</div>
				</div>

				<!-- upload button -->
				<div class="col-md-12" v-if="item.tipe_tempat !== 'ONLINE'">
					<div class="form-group">
						<!-- title -->
						<h5>Surat Tugas:</h5>

						<app-file-upload :file_temp="formPeserta.surat_tugas"
							v-model="formPeserta.surat_tugas"></app-file-upload>
					</div>
				</div>

				<!-- select -->
				<div class="col-md-6" v-if="item.tipe_tempat !== 'ONLINE'">
					<div class="form-group">
						<h5 :class="{ 'text-danger': errors.has('formPeserta.ukuran_baju') }">
							<i class="icon-cross2" v-if="errors.has('formPeserta.ukuran_baju')"></i>
							Ukuran Baju: 
						</h5>
						<select class="form-control" name="ukuran_baju" v-model="formPeserta.ukuran_baju" data-width="100%"
							 data-vv-as="ukuran_baju" @change="changeBaju($event.target.value)">
							<option disabled value="">Silahkan pilih ukuran baju</option>
							<option value="XS">XS - L(51 cm) P(72 cm)</option>
							<option value="S">S - L(53 cm) P(74 cm)</option>
							<option value="M">M - L(55 cm) P(76 cm)</option>
							<option value="L">L - L(57 cm) P(78 cm)</option>
							<option value="XL">XL - L(59 cm) P(80 cm)</option>
							<option value="XXL">XXL - L(61 cm) P(82 cm)</option>
						</select>
					</div>
				</div>

				<!-- select -->
				<div class="col-md-6" v-if="item.tipe_tempat !== 'ONLINE'">
					<div class="form-group">
						<h5>Status Kepesertaan:</h5>
						<select class="form-control" name="status_kepesertaan" v-model="formPeserta.status_kepesertaan"
							data-width="100%" data-vv-as="status_kepesertaan"
							@change="changeStatusKepesertaan($event.target.value)">
							<option disabled value="">Silahkan pilih status kepesertaan</option>
							<option value="Utusan CU Primer">Utusan CU Primer</option>
							<option value="Peninjau CU Primer">Peninjau CU Primer</option>
							<option value="Undangan">Undangan</option>
							<option value="Organizing Committee">Organizing Committee (OC)</option>
							<option value="Panitia Lokal">Panitia Lokal</option>
							<option value="Narasumber">Narasumber</option>
							<option value="PUSKOPCUINA">PUSKOPCUINA</option>
						</select>
					</div>
				</div>

				<!-- select -->

				<div class="col-md-6" v-if="item.tipe_tempat !== 'ONLINE'">
					<div class=" form-group">
						<h5>Penerimaan Vaksin:</h5>
						<select class="form-control" name="penerimaan_vaksin" v-model="formPeserta.penerimaan_vaksin"
							data-width="100%" data-vv-as="penerimaan_vaksin" @change="changeVaksin($event.target.value)">
							<option disabled value="">Silahkan pilih status penerimaan vaksin</option>
							<option value="vaksin Tahap 1">Vaksin Tahap 1</option>
							<option value="vaksin Tahap 2">Vaksin Tahap 2</option>
							<option value="vaksin Booster 1">Vaksin Booster 1</option>
							<option value="vaksin Booster 2">Vaksin Booster 2</option>
						</select>
					</div>
				</div>

				<div class="col-md-6" v-if="item.tipe_tempat !== 'ONLINE'">
					<div class="form-group">
						<!-- title -->
						<h5>Pilih Riwayat Penyakit:</h5>
						<select class="form-control" name="riwayat_penyakit" v-model="formPeserta.riwayat_penyakit"
							data-width="100%" data-vv-as="riwayat_penyakit">
							<option disabled value="">Silahkan pilih riwayat penyakit</option>
							<option value="Vertigo">Vertigo</option>
							<option value="Maag">Maag</option>
							<option value="Hipertensi">Hipertensi</option>
							<option value="Asma">Asma</option>
							<option value="Gangguan Pencernaan">Gangguan Pencernaan</option>
							<option value="Diabetes">Diabetes</option>
							<option value="Asam Urat">Asam Urat</option>
							<option value="lainnya">Lainnya (tulis di bagian keterangan)</option>
						</select>
					</div>
				</div>

				<div class="col-md-6" v-if="item.tipe_tempat !== 'ONLINE'">
					<div class="form-group">
						<h5>Apakah Merokok:</h5>
						<div class="form-check">
							<label class="form-check-label">
								<input type="radio" class="form-check-input" name="merokokYa" checked="" value="ya"
									v-model="formPeserta.merokok">
								Ya
							</label>
						</div>

						<div class="form-check">
							<label class="form-check-label">
								<input type="radio" class="form-check-input" name="merokokTidak" value="tidak"
									v-model="formPeserta.merokok">
								Tidak
							</label>
						</div>
					</div>
				</div>

				<!-- sakit jantung  -->
				<div class="col-md-6" v-if="item.tipe_tempat !== 'ONLINE'">
					<div class="form-group">
						<h5>Apakah Anda Mengidap Sakit Jantung:</h5>
						<div class="form-check">
							<label class="form-check-label">
								<input type="radio" class="form-check-input" name="jantungYa" checked="" value="ya"
									v-model="formPeserta.sakit_jantung">
								Ya
							</label>
						</div>

						<div class="form-check">
							<label class="form-check-label">
								<input type="radio" class="form-check-input" name="jantungTidak" value="tidak"
									v-model="formPeserta.sakit_jantung">
								Tidak
							</label>
						</div>
					</div>
				</div>



				<div class="col-md-12" v-if="item.tipe_tempat !== 'ONLINE'">
					<div class="form-group">

						<!-- title -->
						<h5>Alergi Makanan:</h5>
						<!-- text -->
						<input type="text" name="alergi_makanan" class="form-control"
							placeholder="Silahkan masukkan alergi makanan" v-model="formPeserta.alergi_makanan">
					</div>
				</div>

				<!-- keterangan -->
				<div class="col-md-12">
					<div class="form-group">

						<!-- title -->
						<h5>Keterangan:</h5>

						<!-- textarea -->
						<textarea rows="5" type="text" name="keterangan" class="form-control"
							placeholder="Silahkan masukkan keterangan" v-model="formPeserta.keterangan"></textarea>
					</div>
				</div>


			</div>

			<!-- divider -->
			<hr>

			<!-- tombol desktop-->
			<div class="text-center d-none d-md-block">
				<button type="button" class="btn btn-light" @click.prevent="tutup">
					<i class="icon-cross"></i> Tutup</button>

				<button type="submit" class="btn btn-primary"
					:disabled="formPeserta.aktivis_id == '' && formPeserta.mitra_orang_id == ''">
					<i class="icon-floppy-disk"></i> Simpan</button>
			</div>

			<!-- tombol mobile-->
			<div class="d-block d-md-none">
				<button type="submit" class="btn btn-primary btn-block pb-2"
					:disabled="formPeserta.aktivis_id == '' && formPeserta.mitra_orang_id == ''">
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
import infoIcon from "../../components/infoIcon.vue";
import checkValue from '../../components/checkValue.vue';
import DataViewer from '../../components/dataviewer2.vue';
import Message from "../../components/message.vue";
import DatePicker from "../../components/datePicker.vue";
import Cleave from 'vue-cleave-component';
import wajibBadge from "../../components/wajibBadge.vue";
import appFileUpload from '../../components/documentUpload.vue';
import { toMulipartedForm } from '../../helpers/form';
export default {
	props: ['mode', 'selected', 'item', 'tingkat'],
	components: {
		DataViewer,
		checkValue,
		Message,
		DatePicker,
		Cleave,
		infoIcon,
		wajibBadge,
		appFileUpload,
	},
	data() {
		return {
			title: '',
			kelas: 'aktivis',
			tingkatArray: [],
			tingkatName: [],
			formPeserta: {
				alergi_makanan: '',
				riwayat_penyakit: '',
				asal: '',
				ukuran_baju: '',
				surat_tugas: '',
				status_kepesertaan: '',
				penerimaan_vaksin: '',
				merokok: '',
				sakit_jantung: '',
				aktivis_id: '',
				mitra_orang_id: '',
				kegiatan_id: '',
				cu_id: '',
				keterangan: '',
				tingkat: '',
				name_nametag: '',
				name_sertifikat: '',
				datang: '',
				pulang: ''
			},
			selectedItem: [],
			query: {
				order_column: "name",
				order_direction: "asc",
				filter_match: "and",
				limit: 5,
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
				{ title: 'CU', disable: false },
				{ title: 'Tingkat' },
				{ title: 'Jabatan' },
				{ title: 'Pendidikan' },
				{ title: 'Jurusan' },
				{ title: 'Tgl. Lahir' },
				{ title: 'Tempat Lahir' },
				{ title: 'Tinggi' },
				{ title: 'Agama' },
				{ title: 'Status Pernikahan' },
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
				{ title: 'Tingkat Jabatan' },
				{ title: 'Jabatan' },
				{ title: 'Tingkat Pendidikan' },
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
			cleaveOption: {
				date: {
					date: true,
					datePattern: ['Y', 'm', 'd'],
					delimiter: '-'
				},
				year: {
					date: true,
					datePattern: ['Y'],
				},
			},
			message: {
				show: false,
				content: ''
			},

			submited: false,
		}
	},
	created() {
		var i;
		for (i = 0; i < this.tingkat.length; i++) {
			this.tingkatArray.push(this.tingkat[i].id);
		}
		for (i = 0; i < this.tingkat.length; i++) {
			this.tingkatName.push(this.tingkat[i].name);
		}

		if (this.mode == 'edit') {
			this.formPeserta = this.selected;

			if (this.selected.aktivis_id) {
				this.formPeserta.asal = 'dalam';
				this.formPeserta.gambar = this.selected.aktivis.gambar;
			} else if (this.selected.mitra_orang_id) {
				this.formPeserta.asal = 'luar';
				this.formPeserta.gambar = this.selected.mitra_orang.gambar;
			}

			this.formPeserta.kegiatan_name = this.item.name;
			this.formPeserta.kegiatan_tipe = this.item.tipe;
			this.formPeserta.status = this.selected.status;
		} else {
			if (this.currentUser.id_cu != 0) {
				this.changeAsal('dalam');
			}
		}
	},
	watch: {
	},
	methods: {
		fetchAktivis(params) {
			if (this.currentUser.id_cu == 0) {
				this.$store.dispatch('aktivis/indexTingkatArr', [params, this.item.id, JSON.stringify(this.tingkatArray)]);
				this.disableColumnCu(false);
			} else {
				this.$store.dispatch('aktivis/indexCuTingkatArr', [params, this.item.id, this.currentUser.id_cu, JSON.stringify(this.tingkatArray)])
				this.disableColumnCu(true);
			}
		},
		fetchMitra(params) {
			this.$store.dispatch('mitraOrang/indexPeserta', [params, this.item.id]);
		},
		changeAsal(asal) {
			if (asal == 'dalam') {
				this.fetchAktivis(this.query);
			} else if (asal == 'luar') {
				this.fetchMitra(this.query);
			}
			this.formPeserta.asal = asal;
			this.deleteSelected();
		},
		changeBaju(ukuran_baju) {
			this.formPeserta.ukuran_baju = ukuran_baju;
		},
		changeStatusKepesertaan(status_kepesertaan) {
			this.formPeserta.status_kepesertaan = status_kepesertaan;
		},
		changeVaksin(penerimaan_vaksin) {
			this.formPeserta.penerimaan_vaksin = penerimaan_vaksin;
		},
		disableColumnCu(value) {
			this.columnData[4].disable = value;
		},
		deleteSelected() {
			this.formPeserta.aktivis_id = '';
			this.formPeserta.name_nametag = '';
			this.formPeserta.name_sertifikat = '';
			this.formPeserta.datang = '';
			this.formPeserta.pulang = '';
			this.formPeserta.keterangan = '';
			this.selectedItem = [];
		},
		selectedRow(item) {
			this.selectedItem = item;

			this.formPeserta.name_sertifikat = item.name;
			this.formPeserta.kegiatan_id = this.item.id;
			this.formPeserta.status = this.item.status;
			this.formPeserta.kelamin = item.kelamin;
			this.formPeserta.agama = item.agama;
			this.formPeserta.tinggi = item.tinggi;
			this.formPeserta.tanggal_lahir = item.tanggal_lahir;
			this.formPeserta.tempat_lahir = item.tempat_lahir;
			this.formPeserta.gambar = item.gambar;
			this.formPeserta.kegiatan_name = this.item.name;
			this.formPeserta.kegiatan_tipe = this.item.tipe;

			if (this.formPeserta.asal == 'dalam') {
				this.formPeserta.aktivis_id = item.id;
				this.formPeserta.pekerjaan_tingkat = item.pekerjaan_aktif.tingkat;
				this.formPeserta.pekerjaan_name = item.pekerjaan_aktif.name;
				this.formPeserta.cu_id = item.pekerjaan_aktif.id_tempat;
				if (item.pendidikan_tertinggi) {
					this.formPeserta.pendidikan_tingkat = item.pendidikan_tertinggi.tingkat;
					this.formPeserta.pendidikan_name = item.pendidikan_tertinggi.name;
				}
				if (item.pekerjaan_aktif.tipe == 1) {
					this.formPeserta.lembaga_id = item.pekerjaan_aktif.cu.id;
					this.formPeserta.lembaga_name = item.pekerjaan_aktif.cu.name;
				} else if (item.pekerjaan_aktif.tipe == 2) {
					this.formPeserta.lembaga_name = item.pekerjaan_aktif.lembaga_lain.name;
				} else if (item.pekerjaan_aktif.tipe == 3) {
					this.formPeserta.lembaga_id = '0';
					this.formPeserta.lembaga_name = "PUSKOPCUINA";
				}
			} else if (this.formPeserta.asal == 'luar') {
				this.formPeserta.mitra_orang_id = item.id;
				this.formPeserta.lembaga_name = item.lembaga;
				this.formPeserta.jabatan = item.jabatan;
				this.formPeserta.pekerjaan_name = item.pekerjaan_name;
				this.formPeserta.pekerjaan_tingkat = item.pekerjaan_tingkat;
				this.formPeserta.pendidikan_name = item.pendidikan_name;
				this.formPeserta.pendidikan_tingkat = item.pendidikan_tingkat;
			}
		},
		save() {

			const formData = toMulipartedForm(this.formPeserta, this.$route.meta.mode);
			this.$validator.validateAll('formPeserta').then((result) => {
				if (result) {
					if (this.mode == 'edit') {
						this.$store.dispatch('kegiatanBKCU/updatePeserta', [this.formPeserta.id, formData]);
					} else {
						this.formPeserta.status = this.item.status;
						this.$store.dispatch('kegiatanBKCU/storePeserta', [this.item.tipe, this.item.id, formData]);
					}
				} else {
					this.submited = true;
				}
			});
		},
		messageClose() {
			this.message.show = false;
		},
		upload(e) {
			let files = e.target.files || e.dataTransfer.files;
			if (!files.length)
				return
			this.$emit('input', files[0]);
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
			checkPesertaData: 'data2',
			checkPesertaDataStat: 'dataStat2'
		}),
		...mapGetters('aktivis', {
			itemData: 'dataS',
			itemDataStat: 'dataStatS'
		}),
		...mapGetters('mitraOrang', {
			itemDataLuar: 'dataS',
			itemDataLuarStat: 'dataStatS'
		}),
	}
}
</script>