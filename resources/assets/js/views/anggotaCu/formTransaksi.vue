<template>
	<div>
		<form @submit.prevent="save" data-vv-scope="formProduk">

		<!-- message -->
		<message v-if="message.show" @close="messageClose" :title="'Oops terjadi kesalahan'" :errorData="message.content" :showDebug="false">
		</message>

		<!-- info -->
		<div class="card card-body text-center">
			<ul class="list-inline list-inline-consensed mb-0 font-size-lg">
				<li class="list-inline-item"><b>Nama Produk:</b> {{ selected.produk_cu ? selected.produk_cu.name : '-' }}</li>
				<li class="list-inline-item"><b>No. Rek:</b> {{ selected.no_rek }}</li>
				<li class="list-inline-item" v-if="tipeProduk == 'pinjaman'"><b>Lama Sisa Pinjaman:</b> {{ selected.lama_sisa_pinjaman }}</li>
			</ul>
		</div>

		<div class="row">
			<div class="col-sm-6">
				<div class="card card-body" >
					<div class="media">
						<div class="media-body">
							<h3 class="mb-0">
								<check-value :value="selected.saldo" valueType="currency"></check-value> 	
							</h3>
							<span class="text-uppercase font-size-xs">Saldo Awal</span>
						</div>
					</div>
				</div>
			</div>
			<div class="col-sm-6">
				<div class="card card-body" :class="{'bg-danger-400': saldoAkhir < 0}">
					<div class="media">
						<div class="media-body">
							<h3 class="mb-0">
								<check-value :value="saldoAkhir" valueType="currency"></check-value> 	
							</h3>
							<span class="text-uppercase font-size-xs">Saldo Akhir</span>
						</div>
					</div>
				</div>
			</div>
		</div>

		<!-- transaksi -->
		<div class="card card-body">

			<div class="row">

				<!-- jenis transaksi -->
				<div class="col-md-12" v-if="tipeProduk != 'pinjaman'">
					<div class="form-group" >

						<!-- title -->
						<h5>Tipe Transaksi:</h5>

						<!-- text -->
						<select name="status" data-width="100%" class="form-control" v-model="tipeTransaksi">
							<option disabled value="">Silahkan pilih tipe transaksi</option>
							<option value="setor">Setor</option>
							<option value="tarik">Tarik</option>
						</select>

					</div>
				</div>

				<!-- jenis transaksi -->
				<div class="col-md-12" v-if="tipeProduk == 'pinjaman'">
					<div class="form-group" >

						<!-- title -->
						<h5>Lama Sisa Pinjaman (Bulan):</h5>

						<!-- text -->
						<cleave 
							name="lama_sisa_pinjaman"
							v-model="formProduk.lama_sisa_pinjaman" 
							class="form-control" 
							:options="cleaveOption.number4"
							placeholder="Silahkan masukkan lama sisa pinjaman"
							v-validate="'required'" data-vv-as="Lama sisa pinjaman" ></cleave>

					</div>
				</div>

				<!-- saldo -->
				<div class="col-md-12">
					<div class="form-group" >

						<!-- title -->
						<h5>Nilai Transaksi:</h5>

						<!-- text -->
						<cleave 
							name="saldo"
							v-model="formProduk.transaksi" 
							class="form-control" 
							:options="cleaveOption.numeric"
							placeholder="Silahkan masukkan jumlah saldo"
							v-validate="'required'" data-vv-as="Saldo" ></cleave>

					</div>
				</div>

			</div>

			<!-- divider -->
			<hr>
			
			<!-- button -->
			<!-- tombol desktop-->
			<div class="text-center d-none d-md-block">
				<button type="button" class="btn btn-light" @click.prevent="tutup">
					<i class="icon-cross"></i> Tutup</button>

				<button type="submit" class="btn btn-primary">
					<i class="icon-floppy-disk"></i> Simpan</button>
			</div>  

			<!-- tombol mobile-->
			<div class="d-block d-md-none">
				<button type="submit" class="btn btn-primary btn-block pb-2">
					<i class="icon-floppy-disk"></i> Simpan</button>

				<button type="button" class="btn btn-light btn-block pb-2" @click.prevent="tutup">
					<i class="icon-cross"></i> Tutup</button>
			</div> 
		</div>

		<!-- transaksi -->
		<div class="card mb-0">
			<div class="card-header bg-white">
				<h5 class="card-title">Mutasi Transaksi</h5>
			</div>	

			<!-- table -->
			<data-table :items="itemDataSaldo.data" :columnData="columnDataSaldo" :itemDataStat="itemDataSaldoStat">
				<template slot="item-desktop" slot-scope="props">
					<tr :class="{ 'bg-info': selectedItem.id === props.item.id }" class="text-nowrap" @click="selectedRow(props.item)" v-if="props.item">
						<td>{{ props.index + 1 }}</td>
						<td>
							<check-value :value="props.item.saldo" valueType="currency"></check-value>
						</td>
						<td v-if="tipeProduk == 'pinjaman'">
							<check-value :value="props.item.lama_sisa_pinjaman"></check-value>
						</td>
						<td>
							<span v-if="props.item.tanggal" v-html="$options.filters.dateTime(props.item.created_at)"></span>
							<span v-else>-</span>
						</td>
					</tr>
				</template>	
			</data-table>

			<!-- pagination -->
			<div class="card-footer">
				<div class="row pre-scrollable" v-if="itemDataSaldoStat != ''">

					<!-- entri info -->
					<div class="col-md-4 pt-2">
							<!-- total entri note success-->
							<!-- desktop -->
							<div v-if="itemDataSaldoStat === 'success'" class="d-none d-sm-block">Menampilkan {{itemDataSaldo.from}} -
								{{itemDataSaldo.to}} entri dari {{itemDataSaldo.total}} entri
							</div>

							<!-- mobile -->
							<div v-if="itemDataSaldoStat === 'success'" class="d-block d-sm-none text-center">Menampilkan {{itemDataSaldo.from}} -
								{{itemDataSaldo.to}} entri dari {{itemDataSaldo.total}} entri
							</div>

							<!-- total entri note loading -->
							<div v-else>Menampilkan
								<i class="icon-spinner2 spinner"></i> -
								<i class="icon-spinner2 spinner"></i> entri dari
								<i class="icon-spinner2 spinner"></i> entri
							</div>

					</div>

					<!-- pagination -->
					<!-- desktop -->
					<div class="col-md-8 pt-2 text-right d-none d-sm-block">
						<!-- pagination success-->
						<div class="btn-group" v-if="itemDataSaldoStat === 'success'">
							<button type="button" href="#" class="btn btn-light" :class="{'disabled' : !itemDataSaldo.prev_page_url}" @click.prevent="goToPageSaldo(1)">
									<i class="icon-backward2"></i>
							</button>
							<button type="button" href="#" class="btn btn-light" :class="{'disabled' : !itemDataSaldo.prev_page_url}" @click.prevent="prevPageSaldo">
									<i class="icon-arrow-left5"></i>
							</button>
							<button type="button" href="#" class="btn" v-for="(n, index) in pagesSaldo" :key="index" :class="{'btn-primary' : querySaldo.page == n, 'btn-light' : querySaldo.page != n}"  @click.prevent="goToPageSaldo(n)">
									{{n}}
							</button>
							<button type="button" href="#" class="btn btn-light" :class="{'disabled' : !itemDataSaldo.next_page_url}" @click.prevent="nextPageSaldo">
									<i class="icon-arrow-right5"></i>
							</button>
							<button type="button" href="#" class="btn btn-light" :class="{'disabled' : !itemDataSaldo.next_page_url}" @click.prevent="goToPageSaldo(itemDataSaldo.last_page)">
									<i class="icon-forward3"></i>
							</button>
						</div>
						
						<!-- pagination loading-->
						<div class="btn-group" v-else>
							<button href="#" class="btn btn-light disabled">
									<i class="icon-backward2"></i>
							</button>
							<button href="#" class="btn btn-light disabled">
									<i class="icon-arrow-left5"></i>
							</button>
							<button href="#" class="btn btn-light disabled">
									<i class="icon-spinner2 spinner"></i>
							</button>
							<button href="#" class="btn btn-light disabled">
									<i class="icon-arrow-right5"></i>
							</button>
							<button href="#" class="btn btn-light disabled">
									<i class="icon-forward3"></i>
							</button>
							
						</div>
					</div>

					<!-- mobile -->
					<div class="col-md-12 pt-2 text-center d-block d-sm-none">

						<!-- pagination success-->
						<div class="btn-group" v-if="itemDataSaldoStat === 'success'">
							<button type="button" href="#" class="btn" v-for="(n, index) in pagesSaldo" :key="index" :class="{'btn-primary' : querySaldo.page == n, 'btn-light' : querySaldo.page != n}"  @click.prevent="goToPageSaldo(n)">
									{{n}}
							</button>
						</div>

						<br/>

						<div class="btn-group pt-2" v-if="itemDataSaldoStat === 'success'">
							<button type="button" href="#" class="btn btn-light" :class="{'disabled' : !itemDataSaldo.prev_page_url}" @click.prevent="goToPageSaldo(1)">
									<i class="icon-backward2"></i>
							</button>
							<button type="button" href="#" class="btn btn-light" :class="{'disabled' : !itemDataSaldo.prev_page_url}" @click.prevent="prevPageSaldo">
									<i class="icon-arrow-left5"></i>
							</button>
							<button type="button" href="#" class="btn btn-light" :class="{'disabled' : !itemDataSaldo.next_page_url}" @click.prevent="nextPageSaldo">
									<i class="icon-arrow-right5"></i>
							</button>
							<button type="button" href="#" class="btn btn-light" :class="{'disabled' : !itemDataSaldo.next_page_url}" @click.prevent="goToPageSaldo(itemDataSaldo.last_page)">
									<i class="icon-forward3"></i>
							</button>
						</div>
						
						<!-- pagination loading-->
						<div class="btn-group" v-else>
							<button href="#" class="btn btn-light disabled">
									<i class="icon-backward2"></i>
							</button>
							<button href="#" class="btn btn-light disabled">
									<i class="icon-arrow-left5"></i>
							</button>
							<button href="#" class="btn btn-light disabled">
									<i class="icon-spinner2 spinner"></i>
							</button>
							<button href="#" class="btn btn-light disabled">
									<i class="icon-arrow-right5"></i>
							</button>
							<button href="#" class="btn btn-light disabled">
									<i class="icon-forward3"></i>
							</button>
							
						</div>

					</div>

				</div>
			</div>

		</div>
		

		</form>

	</div>
</template>

<script>
	import _ from 'lodash';
	import { mapGetters } from 'vuex';
	import checkValue from '../../components/checkValue.vue';
	import Message from "../../components/message.vue";
	import Cleave from 'vue-cleave-component';
	import produkCuAPI from '../../api/produkCu.js';
	import infoIcon from "../../components/infoIcon.vue";
	import DatePicker from "../../components/datePicker.vue";
	import dataTable from '../../components/datatable.vue';

	export default {
		props: ['selected'],
		components: {
			checkValue,
			Message,
			Cleave,
			infoIcon,
			DatePicker,
			dataTable
		},
		data() {
			return {
				kelas: 'anggotaCu',
				tipeProduk: '',
				tipeTransaksi: '',
				formProduk:{
					id: '',
					saldo: '',
					transaksi:'',
					tanggal: '',
					tanggal_target: '',
					lama_pinjaman:'',
					lama_sisa_pinjaman:'',
					tujuan:'',
					produk_cu: {
						id: 0,
						name: ''
					},
				},
				cleaveOption: {
          numeric: {
            numeral: true,
            numeralThousandsGroupStyle: 'thousand',
            numeralDecimalScale: 2,
            numeralDecimalMark: ',',
            delimiter: '.'
					},
					number30: {
            numeral: true,
            numeralIntegerScale: 30,
            numeralDecimalScale: 0,
						stripLeadingZeroes: false,
						delimiter: ''
					},
					number4: {
            numeral: true,
            numeralIntegerScale: 4,
            numeralDecimalScale: 0,
            stripLeadingZeroes: false
          },
					date:{
            date: true,
            datePattern: ['Y','m','d'],
            delimiter: '-'
          },
				},
				selectedItem: {},
				pagesSaldo: [],
        querySaldo: {
          order_column: "created_at",
          order_direction: "desc",
          filter_match: "and",
          limit: 10,
          page: 1
        },
        columnDataSaldo:[],
				message: {
					show: false,
					content: ''
				},
				submited: false,
			}
		},
		created(){
			this.formProduk.id = this.selected.id;
			this.formProduk.no_rek = this.selected.no_rek;
			this.formProduk.saldo = this.selected.saldo;
			this.formProduk.tanggal = this.selected.tanggal;
			this.formProduk.tanggal_target = this.selected.tanggal_target;
			this.formProduk.lama_pinjaman = this.selected.lama_pinjaman;
			this.formProduk.tujuan = this.selected.tujuan;
			this.formProduk.produk_cu.id = this.selected.produk_cu.id;
			this.formProduk.produk_cu.name = this.selected.produk_cu.name;

			if(this.selected.produk_cu){
				if(this.selected.produk_cu.tipe == 'Simpanan Pokok' || this.selected.produk_cu.tipe == 'Simpanan Wajib' || this.selected.produk_cu.tipe == 'Simpanan Non Saham'){
					this.tipeProduk = 'simpanan';
					this.tipeTransaksi = 'setor';
					this.columnDataSaldo = [
						{ title: 'No.' },
						{ title: 'Nominal' },
						{ title: 'Tgl. Transaksi' },
					]
				}else{
					this.tipeProduk = 'pinjaman';
					this.tipeTransaksi = 'tarik';
					this.columnDataSaldo = [
						{ title: 'No.' },
						{ title: 'Nominal' },
						{ title: 'Bulan Angsuran' },
						{ title: 'Tgl. Transaksi' },
					]
				}
			}

			this.fetchProdukSaldo();
		},
		watch: {	},
		methods: {
			save(){
				this.formProduk.saldo = this.saldoAkhir;
				this.$validator.validateAll('formProduk').then((result) => {
					if (result) {
						this.$store.dispatch(this.kelas + '/updateProduk', [this.formProduk.id, this.formProduk]);
						this.submited = false;
					}else{
						this.submited = true;
					}	
				});	
			},
			fetchProdukSaldo(){
        this.$store.dispatch('anggotaCu/indexProdukSaldo',[this.querySaldo, this.selected.id]);
      },
      calculatePagination() {
        var i = 0;
        var startPage = 0;
        var endPage = 0;
        var diffPage = 0;

        startPage = this.querySaldo.page < 3 ? 1 : this.querySaldo.page - 1;
        endPage = 4 + startPage;
        endPage = this.itemDataSaldo.last_page < endPage ? this.itemDataSaldo.last_page : endPage;
        diffPage = startPage - endPage + 4;
        startPage -= startPage - diffPage > 0 ? diffPage : 0;
        this.pagesSaldo.length = 0;

        for (i = startPage; i <= endPage; i++) {
          this.pagesSaldo.push(i);
        }
      },
      prevPageSaldo() {
        if (this.itemDataSaldo.prev_page_url) {
          this.querySaldo.page = Number(this.querySaldo.page) - 1;
          this.fetchProdukSaldo();
        }
      },
      goToPageSaldo(value) {
        if (this.querySaldo.page != value) {
          this.querySaldo.page = value;
          this.fetchProdukSaldo();
        }
      },
      nextPageSaldo() {
        if (this.itemDataSaldo.next_page_url) {
          this.querySaldo.page = Number(this.querySaldo.page) + 1;
          this.fetchProdukSaldo();
        }
      },
			messageClose(){
				this.message.show = false;
			},
			tutup(){
				this.$emit('tutup');
			}
		},
		computed: {
			...mapGetters('auth',{
				currentUser: 'currentUser'
			}),
			...mapGetters('anggotaCu',{
				itemDataSaldo: 'dataProdukSaldo',
				itemDataSaldoStat: 'dataProdukSaldoStat',
			}),
			saldoAkhir: function () {
				// `this` points to the vm instance
				if(this.tipeTransaksi == 'setor'){
					return parseFloat(this.selected.saldo) + parseFloat(this.formProduk.transaksi);
				}else if(this.tipeTransaksi == 'tarik'){
					return this.selected.saldo - this.formProduk.transaksi;
				}
      },
		}
	}
</script>