<template>
	<div>

		<!-- message -->
		<message v-if="errors.any('form') && submited" :title="'Oops, terjadi kesalahan'" :errorItem="errors.items">
		</message>

		<!-- main panel -->
		<form @submit.prevent="save" enctype="multipart/form-data" data-vv-scope="form">

			<!-- main form -->
			<div class="card">
				<div class="card-body">
					<div class="row">

						<!-- l_biasa -->
						<div class="col-md-4">
							<div class="form-group">

								<!-- title -->
								<h5>Lelaki Biasa</h5>

								<!-- text -->
								<cleave 
									v-model="form.l_biasa" 
									class="form-control" 
									:options="cleaveOption.numeric"
									placeholder="Silahkan masukkan jumlah lelaki biasa"></cleave>

								<!-- error message -->
								<small class="text-muted">&nbsp;</small>	
							</div>
						</div>

						<!-- l_lbiasa -->
						<div class="col-md-4">
							<div class="form-group">

								<!-- title -->
								<h5>Lelaki Luar Biasa</h5>

								<!-- text -->
								<cleave 
									v-model="form.l_lbiasa" 
									class="form-control" 
									:options="cleaveOption.numeric"
									placeholder="Silahkan masukkan jumlah lelaki luar biasa"></cleave>

								<!-- error message -->
								<small class="text-muted">&nbsp;</small>	
							</div>
						</div>

						<!-- p_biasa -->
						<div class="col-md-4">
							<div class="form-group">

								<!-- title -->
								<h5>Perempuan Biasa</h5>

								<!-- text -->
								<cleave 
									v-model="form.p_biasa" 
									class="form-control" 
									:options="cleaveOption.numeric"
									placeholder="Silahkan masukkan jumlah perempuan biasa"></cleave>

								<!-- error message -->
								<small class="text-muted">&nbsp;</small>	
							</div>
						</div>

						<!-- p_lbiasa -->
						<div class="col-md-4">
							<div class="form-group">

								<!-- title -->
								<h5>Perempuan Luar Biasa</h5>

								<!-- text -->
								<cleave 
									v-model="form.p_lbiasa" 
									class="form-control" 
									:options="cleaveOption.numeric"
									placeholder="Silahkan masukkan jumlah anggota perempuan luar biasa"></cleave>

								<!-- error message -->
								<small class="text-muted">&nbsp;</small>	
							</div>
						</div>

						<!-- total anggota lalu -->
						<div class="col-md-4">
							<div class="form-group">

								<!-- title -->
								<h5>Total Anggota Tahun Lalu <info-icon :message="'Anggota tahun lalu dari bulan yang sama dengan periode laporan ini.'"></info-icon></h5>

								<!-- text -->
								<cleave 
									v-model="form.total_anggota_lalu" 
									class="form-control" 
									:options="cleaveOption.numeric"
									placeholder="Silahkan masukkan total anggota tahun lalu"></cleave>

								<!-- error message -->
								<small class="text-muted">&nbsp;</small>	
							</div>
						</div>

						<!-- separator -->
						<div class="col-md-12"><hr></div>

						<!-- aset -->
						<div class="col-md-4">
							<div class="form-group">

								<!-- title -->
								<h5>Aset</h5>

								<!-- text -->
								<cleave 
									v-model="form.aset" 
									class="form-control" 
									:options="cleaveOption.numeric"
									placeholder="Silahkan masukkan jumlah aset"></cleave>

								<!-- error message -->
								<small class="text-muted">&nbsp;</small>	
							</div>
						</div>

						<!-- aset tahun lalu -->
						<div class="col-md-4">
							<div class="form-group">

								<!-- title -->
								<h5>Aset Tahun Lalu <info-icon :message="'Aset tahun lalu dari periode laporan ini.'"></info-icon></h5>

								<!-- text -->
								<cleave 
									v-model="form.aset_lalu" 
									class="form-control" 
									:options="cleaveOption.numeric"
									placeholder="Silahkan masukkan jumlah aset"></cleave>

								<!-- error message -->
								<small class="text-muted">&nbsp;</small>	
							</div>
						</div>

						<!-- aset masalah  -->
						<div class="col-md-4">
							<div class="form-group">

								<!-- title -->
								<h5>Aset Masalah <info-icon :message="'Aset masalah atau Aset dalam penyelesaian adalah sejumlah aset yang mengalami permasalahan dalam pengelolaannya dan berpotensi menjadi kerugian bagi lembaga. Misalnya: 1. selisih program simpanan dan pinjaman dengan laporan keuangan, atau 2. investasi yang tidak kembali pokoknya, atau 3. saldo piutang anggota yang tidak terselesaikan oleh klaim JALINAN karena tidak memenuhi syarat untuk dicairkan dan kondisi ekonomi ahli waris anggota yang bersangkutan dipastikan tidak mampu untuk mengembalikan pinjaman. Jumlah diatas akan tetap di akun Aset Dalam Penyelesaian selama belum ada keputusan pengurus CU untuk penyelesaiannya.'"></info-icon></h5>

								<!-- text -->
								<cleave 
									v-model="form.aset_masalah" 
									class="form-control" 
									:options="cleaveOption.numeric"
									placeholder="Silahkan masukkan jumlah aset masalah"></cleave>

								<!-- error message -->
								<small class="text-muted">&nbsp;</small>	
							</div>
						</div>

						<!-- aset tidak menghasilkan  -->
						<div class="col-md-4">
							<div class="form-group">

								<!-- title -->
								<h5>Aset Tidak Menghasilkan <info-icon :message="'Kas + Persedian + Pembayaran dimuka dan biaya dibayar dimuka + pendapatan yang masih harus diterima + nilai buku aset tetap+ aset lain-lain + jumlah rekening antar kantor TP (jika saldo debet) + tagihan nominal trf dari bank lain'"></info-icon></h5>

								<!-- text -->
								<cleave 
									v-model="form.aset_tidak_menghasilkan" 
									class="form-control" 
									:options="cleaveOption.numeric"
									placeholder="Silahkan masukkan jumlah aset tidak menghasilkan"></cleave>

								<!-- error message -->
								<small class="text-muted">&nbsp;</small>	
							</div>
						</div>

						<!-- aset likuid tidak menghasilkan  -->
						<div class="col-md-4">
							<div class="form-group">

								<!-- title -->
								<h5>Aset Likuid Tidak Menghasilkan <info-icon :message="'Aset Likuid Tidak Menghasilkan atau Investasi Likuid terdiri dari Tabungan, Giro Bank, Simpanan di Puskopdit BKCU Kalimantan dan Simpanan di lembaga lainnya'"></info-icon></h5>

								<!-- text -->
								<cleave 
									v-model="form.aset_likuid_tidak_menghasilkan" 
									class="form-control" 
									:options="cleaveOption.numeric"
									placeholder="Silahkan masukkan jumlah aset tidak menghasilkan"></cleave>

								<!-- error message -->
								<small class="text-muted">&nbsp;</small>	
							</div>
						</div>

						<!-- investasi likuid  -->
						<div class="col-md-4">
							<div class="form-group">

								<!-- title -->
								<h5>Investasi Likuid <info-icon :message="'Total tabungan, giro bank dan simpanan di PUSKOPCUINA + deposito bank + simpanan di lembaga lainnya'"></info-icon></h5>

								<!-- text -->
								<cleave 
									v-model="form.investasi_likuid" 
									class="form-control" 
									:options="cleaveOption.numeric"
									placeholder="Silahkan masukkan jumlah investasi likuid"></cleave>

								<!-- error message -->
								<small class="text-muted">&nbsp;</small>	
							</div>
						</div>

						<!-- aktiva lancar  -->
						<div class="col-md-4">
							<div class="form-group">

								<!-- title -->
								<h5>Aktiva Lancar <info-icon :message="'Aset Lancar'"></info-icon></h5>

								<!-- text -->
								<cleave 
									v-model="form.aktiva_lancar" 
									class="form-control" 
									:options="cleaveOption.numeric"
									placeholder="Silahkan masukkan jumlah aktiva lancar"></cleave>

								<!-- error message -->
								<small class="text-muted">&nbsp;</small>	
							</div>
						</div>

						<!-- separator -->
						<div class="col-md-12"><hr></div>

						<!-- simpanan saham  -->
						<div class="col-md-4">
							<div class="form-group">

								<!-- title -->
								<h5>Simp. Saham <info-icon :message="'Simpanan pokok dan simpanan wajib'"></info-icon></h5>

								<!-- text -->
								<cleave 
									v-model="form.simpanan_saham" 
									class="form-control" 
									:options="cleaveOption.numeric"
									placeholder="Silahkan masukkan jumlah simp. saham"></cleave>

								<!-- error message -->
								<small class="text-muted">&nbsp;</small>	
							</div>
						</div>

						<!-- simpanan non saham unggulan -->
						<div class="col-md-4">
							<div class="form-group">

								<!-- title -->
								<h5>Simp. Non Saham (Unggulan) <info-icon :message="'Jenis simpanan yang memiliki tujuan tertentu serta pada umumnya menjadi jaminan atas jenis pinjaman yang sejenis. Penarikannya hanya dapat dilakukan dalam jangka waktu tertentu menurut perjanjian antara anggota dan CU yang bersangkutan atau selama tidak menjadi jaminan atas pinjaman.'"></info-icon></h5>

								<!-- text -->
								<cleave 
									v-model="form.nonsaham_unggulan" 
									class="form-control" 
									:options="cleaveOption.numeric"
									placeholder="Silahkan masukkan jumlah simp. non saham (unggulan)"></cleave>

								<!-- error message -->
								<small class="text-muted">&nbsp;</small>	
							</div>
						</div>

						<!-- simpanan non saham unggulan -->
						<div class="col-md-4">
							<div class="form-group">

								<!-- title -->
								<h5>Simp. Non Saham (Harian & Deposito) <info-icon :message="'Seluruh simpanan non-saham (Harian & Deposito) kecuali simpanan unggulan.'"></info-icon></h5>

								<!-- text -->
								<cleave 
									v-model="form.nonsaham_harian" 
									class="form-control" 
									:options="cleaveOption.numeric"
									placeholder="Silahkan masukkan jumlah simp. non saham (harian & deposito)"></cleave>

								<!-- error message -->
								<small class="text-muted">&nbsp;</small>	
							</div>
						</div>

						<!-- simpanan saham tahun lalu -->
						<div class="col-md-4">
							<div class="form-group">

								<!-- title -->
								<h5>Simp. Saham Tahun Lalu <info-icon :message="'Simpanan saham tahun lalu dari bulan yang sama/bulan ini.'"></info-icon></h5>

								<!-- text -->
								<cleave 
									v-model="form.simpanan_saham_lalu" 
									class="form-control" 
									:options="cleaveOption.numeric"
									placeholder="Silahkan masukkan jumlah simp. saham tahun lalu"></cleave>

								<!-- error message -->
								<small class="text-muted">&nbsp;</small>	
							</div>
						</div>

						<!-- simpanan saham tahun lalu bulan desember -->
						<div class="col-md-4">
							<div class="form-group">

								<!-- title -->
								<h5>Simp. Saham Tahun Lalu Bulan Des <info-icon :message="'Simpanan saham bulan desember tahun lalu.'"></info-icon></h5>

								<!-- text -->
								<cleave 
									v-model="form.simpanan_saham_des" 
									class="form-control" 
									:options="cleaveOption.numeric"
									placeholder="Silahkan masukkan jumlah simp. saham tahun lalu bulan desember"></cleave>

								<!-- error message -->
								<small class="text-muted">&nbsp;</small>	
							</div>
						</div>

						<!-- separator -->
						<div class="col-md-12"><hr></div>

						<!-- hutang spd -->
						<div class="col-md-4">
							<div class="form-group">

								<!-- title -->
								<h5>Hutang SPD</h5>

								<!-- text -->
								<cleave 
									v-model="form.hutang_spd" 
									class="form-control" 
									:options="cleaveOption.numeric"
									placeholder="Silahkan masukkan jumlah hutang spd"></cleave>

								<!-- error message -->
								<small class="text-muted">&nbsp;</small>	
							</div>
						</div>

						<!-- total hutang pihak ke-3 -->
						<div class="col-md-4">
							<div class="form-group">

								<!-- title -->
								<h5>Total Hutang Pihak Ke-3 <info-icon :message="'Hutang di PUSKOPCUINA dan lembaga lain.'"></info-icon></h5>

								<!-- text -->
								<cleave 
									v-model="form.total_hutang_pihak3" 
									class="form-control" 
									:options="cleaveOption.numeric"
									placeholder="Silahkan masukkan total hutang pihak ke-3"></cleave>

								<!-- error message -->
								<small class="text-muted">&nbsp;</small>	
							</div>
						</div>

						<!-- hutang tidak berbiaya < 30 hari-->
						<div class="col-md-4">
							<div class="form-group">

								<!-- title -->
								<h5>Hutang Tidak Berbiaya &lt; 30 Hari <info-icon :message="'Utang pajak + dana titipan anggota + dana titipan IT + pembayaran diterima dimuka + biaya yang masih harus dibayar + jumlah rekening antar kantor TP (jika saldo kredit)'"></info-icon></h5>

								<!-- text -->
								<cleave 
									v-model="form.hutang_tidak_berbiaya_30hari" 
									class="form-control" 
									:options="cleaveOption.numeric"
									placeholder="Silahkan masukkan jumlah hutang tidak berbiaya < 30 hari"></cleave>

								<!-- error message -->
								<small class="text-muted">&nbsp;</small>	
							</div>
						</div>

						<!-- piutang beredar -->
						<div class="col-md-4">
							<div class="form-group">

								<!-- title -->
								<h5>Piutang Beredar </h5>

								<!-- text -->
								<cleave 
									v-model="form.piutang_beredar" 
									class="form-control" 
									:options="cleaveOption.numeric"
									placeholder="Silahkan masukkan jumlah piutang beredar"></cleave>

								<!-- error message -->
								<small class="text-muted">&nbsp;</small>	
							</div>
						</div>

						<!-- piutang lalai 1-12 bulan -->
						<div class="col-md-4">
							<div class="form-group">

								<!-- title -->
								<h5>Piutang Lalai 1-12 Bulan </h5>

								<!-- text -->
								<cleave 
									v-model="form.piutang_lalai_1bulan" 
									class="form-control" 
									:options="cleaveOption.numeric"
									placeholder="Silahkan masukkan jumlah piutang lalai 1-12 bulan"></cleave>

								<!-- error message -->
								<small class="text-muted">&nbsp;</small>	
							</div>
						</div>

						<!-- piutang beredar -->
						<div class="col-md-4">
							<div class="form-group">

								<!-- title -->
								<h5>Piutang Lalai &gt; 12 Bulan</h5>

								<!-- text -->
								<cleave 
									v-model="form.piutang_lalai_12bulan" 
									class="form-control" 
									:options="cleaveOption.numeric"
									placeholder="Silahkan masukkan jumlah piutang lalai &gt; 12 bulan"></cleave>

								<!-- error message -->
								<small class="text-muted">&nbsp;</small>	
							</div>
						</div>

						<!-- separator -->
						<div class="col-md-12"><hr></div>

						<!-- dcu -->
						<div class="col-md-4">
							<div class="form-group">

								<!-- title -->
								<h5>Cadangan Umum <info-icon :message="'Cadangan yang dibentuk dari penyisihan laba ditahan atau dari SHU bersih setelah dikurangi pajak, mendapat persetujuan rapat anggota tahunan atau rapat anggota lainnya sesuai dengan ketentuan pendirian atau anggaran dasar setiap CU.'"></info-icon></h5>

								<!-- text -->
								<cleave 
									v-model="form.dcu" 
									class="form-control" 
									:options="cleaveOption.numeric"
									placeholder="Silahkan masukkan jumlah cadangan umum"></cleave>

								<!-- error message -->
								<small class="text-muted">&nbsp;</small>	
							</div>
						</div>

						<!-- dcr -->
						<div class="col-md-4">
							<div class="form-group">

								<!-- title -->
								<h5>Cadangan Resiko <info-icon :message="'Cadangan yang dibentuk dengan upaya untuk meminimalkan resiko kerugian yang timbul dari kegiatan pemberian pinjaman kepada anggota akibat perubahan-perubahan tidak terduga dari nilai mata uang, kredit, komoditas, dan modal.'"></info-icon></h5>

								<!-- text -->
								<cleave 
									v-model="form.dcr" 
									class="form-control" 
									:options="cleaveOption.numeric"
									placeholder="Silahkan masukkan jumlah cadangan resiko"></cleave>

								<!-- error message -->
								<small class="text-muted">&nbsp;</small>	
							</div>
						</div>

						<!-- dana gedung -->
						<div class="col-md-4">
							<div class="form-group">

								<!-- title -->
								<h5>Dana Gedung <info-icon :message="'Dana untuk keperluan pembangunan gedung kantor yang harus dibayarkan anggota CU saat pertama kali menjadi anggota dan hanya dilakukan sekali selama menjadi anggota serta dalam jumlah yang sama sesuai ketentuan CU yang bersangkutan. Penggunaannya akan mengurangi Dana Gedung dan menambah nilai aset tetap gedung.'"></info-icon></h5>

								<!-- text -->
								<cleave 
									v-model="form.dana_gedung" 
									class="form-control" 
									:options="cleaveOption.numeric"
									placeholder="Silahkan masukkan jumlah dana gedung"></cleave>

								<!-- error message -->
								<small class="text-muted">&nbsp;</small>	
							</div>
						</div>

						<!-- donasi -->
						<div class="col-md-4">
							<div class="form-group">

								<!-- title -->
								<h5>Donasi <info-icon :message="'Mencatat pemberian yang bersifat secara fisik oleh perorangan atau badan hukum, pemberian ini mempunyai sifat sukarela dengan tanpa adanya imbalan bersifat keuntungan kepada orang lain. Jenisnya pemberian donasi dapat berupa uang atau barang yang dapat dinilai dalam bentuk uang.'"></info-icon></h5>

								<!-- text -->
								<cleave 
									v-model="form.donasi" 
									class="form-control" 
									:options="cleaveOption.numeric"
									placeholder="Silahkan masukkan jumlah donasi"></cleave>

								<!-- error message -->
								<small class="text-muted">&nbsp;</small>	
							</div>
						</div>

						<!-- beban peny. cadangan resiko -->
						<div class="col-md-4">
							<div class="form-group">

								<!-- title -->
								<h5>Beban Peny. Cadangan Resiko</h5>

								<!-- text -->
								<cleave 
									v-model="form.beban_penyisihan_dcr" 
									class="form-control" 
									:options="cleaveOption.numeric"
									placeholder="Silahkan masukkan jumlah beban peny. cadangan resiko"></cleave>

								<!-- error message -->
								<small class="text-muted">&nbsp;</small>	
							</div>
						</div>

						<!-- separator -->
						<div class="col-md-12"><hr></div>

						<!-- total pendapatan -->
						<div class="col-md-4">
							<div class="form-group">

								<!-- title -->
								<h5>Total pendapatan</h5>

								<!-- text -->
								<cleave 
									v-model="form.total_pendapatan" 
									class="form-control" 
									:options="cleaveOption.numeric"
									placeholder="Silahkan masukkan total pendapatan"></cleave>

								<!-- error message -->
								<small class="text-muted">&nbsp;</small>	
							</div>
						</div>

						<!-- total biaya -->
						<div class="col-md-4">
							<div class="form-group">

								<!-- title -->
								<h5>Total Biaya</h5>

								<!-- text -->
								<cleave 
									v-model="form.total_biaya" 
									class="form-control" 
									:options="cleaveOption.numeric"
									placeholder="Silahkan masukkan total biaya"></cleave>

								<!-- error message -->
								<small class="text-muted">&nbsp;</small>	
							</div>
						</div>

						<!-- shu -->
						<div class="col-md-4">
							<div class="form-group">

								<!-- title -->
								<h5>Sisa Hasil Usaha (SHU) <info-icon :message="'Sisa Hasil Usaha (SHU) atau SHU Tahun berjalan merupakan Jumlah pendapatan CU yang diperoleh dalam satu tahun buku dikurangi dengan biaya, penyusutan, dan kewajiban lain termasuk pajak dalam tahun buku yang bersangkutan.'"></info-icon></h5>

								<!-- text -->
								<cleave 
									v-model="form.shu" 
									class="form-control" 
									:options="cleaveOption.numeric"
									placeholder="Silahkan masukkan jumlah sisa hasil usaha (SHU)"></cleave>

								<!-- error message -->
								<small class="text-muted">&nbsp;</small>	
							</div>
						</div>

						<!-- shu lalu -->
						<div class="col-md-4">
							<div class="form-group">

								<!-- title -->
								<h5>Sisa Hasil Usaha (SHU) Tahun Lalu <info-icon :message="'Jumlah SHU yang tidak dibagi sebagai keputusan bersama dalam Rapat Anggota Tahunan, dan digunakan oleh CU sebagai cadangan biaya, tambahan modal agar kegiatan operasional perusahaan terjamin keberlangsungannya, biaya untuk mengembangkan perusahaan di masa depan,  atau bisa juga untuk membayar utang CU.'"></info-icon></h5>

								<!-- text -->
								<cleave 
									v-model="form.shu_lalu" 
									class="form-control" 
									:options="cleaveOption.numeric"
									placeholder="Silahkan masukkan jumlah sisa hasil usaha (SHU) tahun lalu"></cleave>

								<!-- error message -->
								<small class="text-muted">&nbsp;</small>	
							</div>
						</div>

						<!-- bjs saham -->
						<div class="col-md-4">
							<div class="form-group">

								<!-- title -->
								<h5>BJS Saham <info-icon :message="'Mencatat penyisihan dividen atas simpanan saham anggota setiap bulan dan akan dikeluarkan saat pembagian dividen akhir tahun.'"></info-icon></h5>

								<!-- text -->
								<cleave 
									v-model="form.bjs_saham" 
									class="form-control" 
									:options="cleaveOption.numeric"
									placeholder="Silahkan masukkan jumlah bsj saham"></cleave>

								<!-- error message -->
								<small class="text-muted">&nbsp;</small>	
							</div>
						</div>

						<!-- separator -->
						<div class="col-md-12"><hr></div>

						<!-- inflasi -->
						<div class="col-md-4">
							<div class="form-group">

								<!-- title -->
								<h5>Inflasi <info-icon :message="'Data tingkat inflasi dalam bulan berjalan sesuai data yang dirilis oleh Bank Indonesia'"></info-icon></h5>

								<!-- text -->
								<cleave 
									v-model="form.laju_inflasi" 
									class="form-control" 
									:options="cleaveOption.numeric2"
									placeholder="Silahkan masukkan jumlah inflasi"></cleave>

								<!-- error message -->
								<small class="text-muted">&nbsp;</small>	
							</div>
						</div>

						<!-- harga pasar -->
						<div class="col-md-4">
							<div class="form-group">

								<!-- title -->
								<h5>Harga Pasar <info-icon :message="'Data tingkat suku bunga dalam bulan berjalan sesuai data yang dirilis oleh Bank Indonesia ( suku bunga acuan atau suku bunga kebijakan baru yaitu BI-7 Day Reverse Repo Rate (BI7DRR)'"></info-icon></h5>

								<!-- text -->
								<cleave 
									v-model="form.harga_pasar" 
									class="form-control" 
									:options="cleaveOption.numeric2"
									placeholder="Silahkan masukkan harga pasar"></cleave>

								<!-- error message -->
								<small class="text-muted">&nbsp;</small>	
							</div>
						</div>

					</div>
				</div>
			</div>

			<!-- form info -->
			<form-info></form-info>	

			<!-- form button -->
			<div class="card card-body">
				<form-button
					:cancelState="'methods'"
					:formValidation="'form'"
					@cancelClick="back"></form-button>
			</div>

		</form>
					
		<!-- modal -->
		<app-modal :show="modalShow" :state="modalState" :title="modalTitle" :content="modalContent" :color="modalColor" @batal="modalTutup" @tutup="modalTutup" @successOk="modalTutup" @failOk="modalTutup"  @backgroundClick="modalBackgroundClick">
			
		</app-modal>

	</div>
</template>

<script>
	import { mapGetters } from 'vuex';
	import _ from 'lodash';
	import infoIcon from "../../components/infoIcon.vue";
	import appModal from '../../components/modal';
	import message from "../../components/message.vue";
	import formButton from "../../components/formButton.vue";
	import formInfo from "../../components/formInfo.vue";
	import Cleave from 'vue-cleave-component';
	import wajibBadge from "../../components/wajibBadge.vue";
	import DatePicker from "../../components/datePicker.vue";

	export default {
		components: {
			message,
			formButton,
			formInfo,
			Cleave,
			infoIcon,
			wajibBadge,
			DatePicker,
			appModal
		},
		data() {
			return {
				kelas: 'laporanCu',
				idLaporanTp: '',
				isModelTp: false,
				modalShow: false,
				modalState: '',
				modalTitle: '',
				modalColor: '',
				modalContent: '',
				submited: false,
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
					numeric2: {
            numeral: true,
            numeralIntegerScale: 2,
            numeralDecimalScale: 2,
            numeralDecimalMark: ',',
            delimiter: '.'
          }
        },
			}
		},
		watch: {
			formStat(value){
				if(value === "success"){
					if(this.currentUser.id_cu != 0){
						this.form.id_cu = this.currentUser.id_cu;
					}
				}
			},
			updateStat(value){
				this.modalShow = true;
				this.modalState = value;
				this.modalColor = '';

				if(value === "success"){
					this.modalTitle = this.updateResponse.message;
				}else{
					this.modalTitle = 'Oops terjadi kesalahan :(';
					this.modalContent = this.updateResponse;
				}
			},
    },
		methods: {
			save() {
				this.$validator.validateAll('form').then((result) => {
					if (result) {
						if(this.$route.meta.mode === 'edit'){
							this.$store.dispatch(this.kelas + '/update', [this.$route.params.id, this.form]);
						}else if(this.$route.meta.mode === 'editTp'){
							this.$store.dispatch(this.kelas + '/updateTp', [this.$route.params.id, this.form]);
						}else if(this.$route.meta.mode === 'editDraft'){
							this.$store.dispatch(this.kelas + '/updateDraft', [this.$route.params.id, this.form]);
						}else if(this.$route.meta.mode === 'editTpDraft'){
							this.$store.dispatch(this.kelas + '/updateTpDraft', [this.$route.params.id, this.form]);
						}else{
							if(this.form.id_tp == 'konsolidasi'){
								this.$store.dispatch(this.kelas + '/store', this.form);
							}else{
								this.$store.dispatch(this.kelas + '/storeTp', this.form);
							}
						}
						this.submited = false;
					}else{
						window.scrollTo(0, 0);
						this.submited = true;
					}
				});
			},
			back(){
				this.$emit('back');
			},
			modalTutup() {
 				if(this.updateStat === 'success'){
					this.back();
				}

				this.modalShow = false;
				this.submitedKategori = false;
				this.submitedPenulis = false;
			},
			modalBackgroundClick(){
				if(this.modalState === 'success'){
					this.modalTutup;
				}else if(this.modalState === 'loading'){
					// do nothing
				}else{
					this.modalShow = false
				}
			},
		},
		computed: {
			...mapGetters('auth',{
				currentUser: 'currentUser'
			}),
			...mapGetters('laporanCu',{
				form: 'data',
				formStat: 'dataStat',
				rules: 'rules',
				options: 'options',
				updateResponse: 'update',
				updateStat: 'updateStat'
			}),
			...mapGetters('laporanTp',{
				listLaporanTpData: 'data2S',
				listLaporanTpDataStat: 'dataStat2S',
			}),
			...mapGetters('cu',{
				modelCU: 'headerDataS',
				modelCUStat: 'headerDataStatS',
			}),
			...mapGetters('tp',{
				modelTp: 'dataS',
				modelTpStat: 'dataStatS',
			}),
		}
	}
</script>