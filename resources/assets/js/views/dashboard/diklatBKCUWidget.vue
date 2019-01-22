<template>
  <div class="card">

		<!-- title -->
		<div class="card-header bg-blue-400 text-white header-elements-inline">
			<h5 class="card-title"><i class="icon-graduation2 mr-2"></i> Diklat BKCU</h5>
			<div class="header-elements">
				<div class="list-icons">
					<a class="list-icons-item" data-action="collapse"></a>
				</div>
			</div>
		</div>

		<!-- nav -->
		<div class="nav-tabs-responsive bg-light border-top">
			<ul class="nav nav-tabs nav-tabs-bottom flex-nowrap mb-0">
				<li class="nav-item"><a href="#" class="nav-link text-nowrap" :class="{'active': tabName == 'baru'}" @click.prevent="changeTab('baru')"><i class="icon-new mr-2"></i>
						Terbaru <span class="badge bg-blue-400 align-self-center ml-2" v-if="countBaru > 0">{{ countBaru }}</span></a></li>
				<li class="nav-item"><a href="#" class="nav-link text-nowrap" :class="{'active': tabName == 'mulai'}" @click.prevent="changeTab('mulai')"><i class="icon-feed mr-2"></i>
						Waktu Mulai Terdekat <span class="badge bg-blue-400 align-self-center ml-2" v-if="countMulai > 0">{{ countMulai }}</span></a></li>
				<li class="nav-item"><a href="#" class="nav-link text-nowrap" :class="{'active': tabName == 'buka'}" @click.prevent="changeTab('buka')"><i class="icon-user-plus mr-2"></i>
						Status Pendaftaran Terbuka <span class="badge bg-blue-400 align-self-center ml-2" v-if="countBuka > 0">{{ countBuka }}</span></a></li>		
				<li class="nav-item"><a href="#" class="nav-link text-nowrap" :class="{'active': tabName == 'jalan'}" @click.prevent="changeTab('jalan')"><i class="icon-play3 mr-2"></i>
						Status Berjalan <span class="badge bg-blue-400 align-self-center ml-2" v-if="countJalan > 0">{{ countJalan }}</span></a></li>		
			</ul>
		</div>

		<!-- baru -->
		<transition enter-active-class="animated fadeIn" mode="out-in">
			<div v-show="tabName == 'baru'">
				<div class="card-body pb-0">
					<!-- button desktop -->
					<div class="col-md-8 col-lg-10 pb-2 d-none d-sm-block">
						<button @click.prevent="detail(selectedItemBaru.id)" class="btn btn-light mb-1"  :disabled="!selectedItemBaru.id">
							<i class="icon-stack2"></i> Detail
						</button>
					</div>
					<!-- button mobile -->
					<div class="col-md-12 pb-2 d-block d-sm-none">
						<button @click.prevent="detail(selectedItemBaru.id)" class="btn btn-light btn-block mb-1"  :disabled="!selectedItemBaru.id">
							<i class="icon-stack2"></i> Detail
						</button>
					</div>
				</div>
				<div class="table-responsive">
					<table class="table table-striped">
						<thead class="bg-blue-400">
							<tr class="text-nowarp">
								<th>Status</th>
								<th>Kode</th>
								<th>Nama</th>
								<th>Kabupaten/Kota</th>
								<th>Tempat</th>
								<th>Tgl. Mulai</th>
								<th>Sasaran</th>
							</tr>
						</thead>
						<tbody v-if="itemBaruStat === 'success'">
							<tr v-for="item in itemBaru" :class="{ 'bg-info': selectedItemBaru.id === item.id }" class="text-nowrap" @click="selectedRowBaru(item)">
								<td>
									<span v-html="$options.filters.statusDiklat(item.status)" @click.prevent="modalKeteranganBatalOpen(item.keteranganBatal)" v-if="item.status == '6'" style="cursor:pointer;"></span>
									<span v-html="$options.filters.statusDiklat(item.status)" v-else></span>
								</td>
								<td>
									<check-value :value="item.kode_diklat"></check-value>
								</td>
								<td>
									<check-value :value="item.name"></check-value>
								</td>
								<td>
									<check-value :value="item.regencies.name" v-if="item.regencies"></check-value>
									<span v-else>-</span>	
								</td>
								<td>
									<check-value :value="item.tempat.name" v-if="item.tempat"></check-value>
									<span v-else>Belum ditentukan tempat</span>	
								</td>
								<td v-html="$options.filters.date(item.mulai)"></td>
								<td class="text-warp">
									<span v-if="item.sasaran">
										<label v-for="sasaran in item.sasaran" class="badge badge-primary ml-1">
											{{ sasaran.name }}
										</label>
									</span>
								</td>
							</tr>
							<tr v-if="itemBaru.length == 0">
								<td :colspan="7">Tidak terdapat data diklat</td>
							</tr>
						</tbody>
						<tbody v-else-if="itemBaruStat === 'loading'">
							<tr>
								<td :colspan="7"><div class="progress">
                  <div class="progress-bar progress-bar-info progress-bar-striped progress-bar-animated" style="width: 100%">
                    <span class="sr-only">100% Complete</span>
                  </div>
                </div></td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</transition>

		<!-- mulai -->
		<transition enter-active-class="animated fadeIn" mode="out-in">
			<div v-show="tabName == 'mulai'" v-if="isMulai">
				<div class="card-body pb-0">
					<!-- button desktop -->
					<div class="col-md-8 col-lg-10 pb-2 d-none d-sm-block">
						<button @click.prevent="detail(selectedItemMulai.id)" class="btn btn-light mb-1"  :disabled="!selectedItemMulai.id">
							<i class="icon-stack2"></i> Detail
						</button>
					</div>
					<!-- button mobile -->
					<div class="col-md-12 pb-2 d-block d-sm-none">
						<button @click.prevent="detail(selectedItemMulai.id)" class="btn btn-light btn-block mb-1"  :disabled="!selectedItemMulai.id">
							<i class="icon-stack2"></i> Detail
						</button>
					</div>
				</div>
				<div class="table-responsive">
					<table class="table table-striped">
						<thead class="bg-blue-400">
							<tr class="text-nowarp">
								<th>Status</th>
								<th>Kode</th>
								<th>Nama</th>
								<th>Kabupaten/Kota</th>
								<th>Tempat</th>
								<th>Tgl. Mulai</th>
								<th>Sasaran</th>
							</tr>
						</thead>
						<tbody v-if="itemMulaiStat === 'success'">
							<tr v-for="item in itemMulai" :class="{ 'bg-info': selectedItemMulai.id === item.id }" class="text-nowrap" @click="selectedRowMulai(item)">
								<td>
									<span v-html="$options.filters.statusDiklat(item.status)" @click.prevent="modalKeteranganBatalOpen(item.keteranganBatal)" v-if="item.status == '6'" style="cursor:pointer;"></span>
									<span v-html="$options.filters.statusDiklat(item.status)" v-else></span>
								</td>
								<td>
									<check-value :value="item.kode_diklat"></check-value>
								</td>
								<td>
									<check-value :value="item.name"></check-value>
								</td>
								<td>
									<check-value :value="item.regencies.name" v-if="item.regencies"></check-value>
									<span v-else>-</span>	
								</td>
								<td>
									<check-value :value="item.tempat.name" v-if="item.tempat"></check-value>
									<span v-else>Belum ditentukan tempat</span>	
								</td>
								<td v-html="$options.filters.date(item.mulai)"></td>
								<td class="text-warp">
									<span v-if="item.sasaran">
										<label v-for="sasaran in item.sasaran" class="badge badge-primary ml-1">
											{{ sasaran.name }}
										</label>
									</span>
								</td>
							</tr>
							<tr v-if="itemMulai.length == 0">
								<td :colspan="7">Tidak terdapat data diklat</td>
							</tr>
						</tbody>
						<tbody v-else-if="itemMulaiStat === 'loading'">
							<tr>
								<td :colspan="7"><div class="progress">
                  <div class="progress-bar progress-bar-info progress-bar-striped progress-bar-animated" style="width: 100%">
                    <span class="sr-only">100% Complete</span>
                  </div>
                </div></td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</transition>

		<!-- buka -->
		<transition enter-active-class="animated fadeIn" mode="out-in">
			<div v-show="tabName == 'buka'" v-if="isBuka">
				<div class="card-body pb-0">
					<!-- button desktop -->
					<div class="col-md-8 col-lg-10 pb-2 d-none d-sm-block">
						<button @click.prevent="detail(selectedItemBuka.id)" class="btn btn-light mb-1"  :disabled="!selectedItemBuka.id">
							<i class="icon-stack2"></i> Detail
						</button>
					</div>
					<!-- button mobile -->
					<div class="col-md-12 pb-2 d-block d-sm-none">
						<button @click.prevent="detail(selectedItemBuka.id)" class="btn btn-light btn-block mb-1"  :disabled="!selectedItemBuka.id">
							<i class="icon-stack2"></i> Detail
						</button>
					</div>
				</div>
				<div class="table-responsive">
					<table class="table table-striped">
						<thead class="bg-blue-400">
							<tr class="text-nowarp">
								<th>Kode</th>
								<th>Nama</th>
								<th>Kabupaten/Kota</th>
								<th>Tempat</th>
								<th>Tgl. Mulai</th>
								<th>Sasaran</th>
							</tr>
						</thead>
						<tbody v-if="itemBukaStat === 'success'">
							<tr v-for="item in itemBuka" :class="{ 'bg-info': selectedItemBuka.id === item.id }" class="text-nowrap" @click="selectedRowBuka(item)">
								<td>
									<check-value :value="item.kode_diklat"></check-value>
								</td>
								<td>
									<check-value :value="item.name"></check-value>
								</td>
								<td>
									<check-value :value="item.regencies.name" v-if="item.regencies"></check-value>
									<span v-else>-</span>	
								</td>
								<td>
									<check-value :value="item.tempat.name" v-if="item.tempat"></check-value>
									<span v-else>Belum ditentukan tempat</span>	
								</td>
								<td v-html="$options.filters.date(item.mulai)"></td>
								<td class="text-warp">
									<span v-if="item.sasaran">
										<label v-for="sasaran in item.sasaran" class="badge badge-primary ml-1">
											{{ sasaran.name }}
										</label>
									</span>
								</td>
							</tr>
							<tr  v-if="itemBuka.length == 0">
								<td :colspan="6">Tidak terdapat data diklat</td>
							</tr>
						</tbody>
						<tbody v-else-if="itemBukaStat === 'loading'">
							<tr>
								<td :colspan="6"><div class="progress">
                  <div class="progress-bar progress-bar-info progress-bar-striped progress-bar-animated" style="width: 100%">
                    <span class="sr-only">100% Complete</span>
                  </div>
                </div></td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</transition>

		<!-- jalan -->
		<transition enter-active-class="animated fadeIn" mode="out-in">
			<div v-show="tabName == 'jalan'" v-if="isJalan">
				<div class="card-body pb-0">
					<!-- button desktop -->
					<div class="col-md-8 col-lg-10 pb-2 d-none d-sm-block">
						<button @click.prevent="detail(selectedItemJalan.id)" class="btn btn-light mb-1"  :disabled="!selectedItemJalan.id">
							<i class="icon-stack2"></i> Detail
						</button>
					</div>
					<!-- button mobile -->
					<div class="col-md-12 pb-2 d-block d-sm-none">
						<button @click.prevent="detail(selectedItemJalan.id)" class="btn btn-light btn-block mb-1"  :disabled="!selectedItemJalan.id">
							<i class="icon-stack2"></i> Detail
						</button>
					</div>
				</div>
				<div class="table-responsive">
					<table class="table table-striped">
						<thead class="bg-blue-400">
							<tr class="text-nowarp">
								<th>Kode</th>
								<th>Nama</th>
								<th>Kabupaten/Kota</th>
								<th>Tempat</th>
								<th>Tgl. Mulai</th>
								<th>Sasaran</th>
							</tr>
						</thead>
						<tbody v-if="itemJalanStat === 'success'">
							<tr v-for="item in itemJalan" :class="{ 'bg-info': selectedItemJalan.id === item.id }" class="text-nowrap" @click="selectedRowJalan(item)">
								<td>
									<check-value :value="item.kode_diklat"></check-value>
								</td>
								<td>
									<check-value :value="item.name"></check-value>
								</td>
								<td>
									<check-value :value="item.regencies.name" v-if="item.regencies"></check-value>
									<span v-else>-</span>	
								</td>
								<td>
									<check-value :value="item.tempat.name" v-if="item.tempat"></check-value>
									<span v-else>Belum ditentukan tempat</span>	
								</td>
								<td v-html="$options.filters.date(item.mulai)"></td>
								<td class="text-warp">
									<span v-if="item.sasaran">
										<label v-for="sasaran in item.sasaran" class="badge badge-primary ml-1">
											{{ sasaran.name }}
										</label>
									</span>
								</td>
							</tr>
							<tr v-if="itemJalan.length == 0">
								<td :colspan="6">Tidak terdapat data diklat</td>
							</tr>
						</tbody>
						<tbody v-else-if="itemJalanStat === 'loading'">
							<tr>
								<td :colspan="6"><div class="progress">
                  <div class="progress-bar progress-bar-info progress-bar-striped progress-bar-animated" style="width: 100%">
                    <span class="sr-only">100% Complete</span>
                  </div>
                </div></td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</transition>
		
  </div>
</template>

<script type="text/javascript">
	import { mapGetters } from 'vuex';
	import checkValue from '../../components/checkValue.vue';
	import DIKLATBKCUAPI from '../../api/diklatBKCU.js';
  
	export default{
		components: {
			checkValue
		},
		data(){
			return{
				kelas: 'diklatBKCU',
				selectedItemBaru: [],
				selectedItemMulai: [],
				selectedItemBuka: [],
				selectedItemJalan: [],
				tabName: 'baru',
				isMulai: false,
				isBuka: false,
				isJalan: false,
				itemBaru: [],
				itemMulai: [],
				itemBuka: [],
				itemJalan: [],
				countBaru: '',
				countMulai: '',
				countBuka: '',
				countJalan: '',
				itemBaruStat: '',
				itemMulaiStat: '',
				itemBukaStat: '',
				itemJalanStat: '',
			}
		},
		created(){
			this.fetchBaru();
		},
		methods:{
			fetchBaru(){
				this.itemBaruStat = 'loading';

				DIKLATBKCUAPI.indexBaru()
        .then((response) => {
					this.itemBaru = response.data.model;
					this.countBaru = response.data.model.length;
					this.countMulai = response.data.countMulai;
					this.countBuka = response.data.countBuka;
					this.countJalan = response.data.countJalan;
          this.itemBaruStat = 'success';
        })
        .catch((error) => {
					this.itemBaru = error.response;
          this.itemBaruStat = 'fail';
				});
			},
			fetchMulai(){
				this.itemMulaiStat = 'loading';

				DIKLATBKCUAPI.indexMulai()
        .then((response) => {
          this.itemMulai = response.data.model;
          this.itemMulaiStat = 'success';
        })
        .catch((error) => {
					this.itemMulai = error.response;
          this.itemMulaiStat = 'fail';
				});
			},
			fetchBuka(){
				this.itemBukaStat = 'loading';

				DIKLATBKCUAPI.indexBuka()
        .then((response) => {
          this.itemBuka = response.data.model;
          this.itemBukaStat = 'success';
        })
        .catch((error) => {
					this.itemBuka = error.response;
          this.itemBukaStat = 'fail';
				});
			},
			fetchJalan(){
				this.itemJalanStat = 'loading';

				DIKLATBKCUAPI.indexJalan()
        .then((response) => {
          this.itemJalan = response.data.model;
          this.itemJalanStat = 'success';
        })
        .catch((error) => {
					this.itemJalan = error.response;
          this.itemJalanStat = 'fail';
				});
			},
			changeTab(value){
				this.tabName = value;
				this.selectedItemBaru = [];
				this.selectedItemMulai = [];
				this.selectedItemBuka = [];
				this.selectedItemJalan = [];

				if(value == 'mulai' && !this.isMulai){
					this.isMulai = true;
					this.fetchMulai();
				}else if(value == 'buka' && !this.isBuka){
					this.isBuka = true;
					this.fetchBuka();
				}else if(value == 'jalan' && !this.isJalan){
					this.isJalan = true;
					this.fetchJalan();
				}
			},
			selectedRowBaru(item){
				this.selectedItemBaru = item;
			},
			selectedRowMulai(item){
				this.selectedItemMulai = item;
			},
			selectedRowBuka(item){
				this.selectedItemBuka = item;
			},
			selectedRowJalan(item){
				this.selectedItemJalan = item;
			},
			detail(id) {
				this.$router.push({name: this.kelas + 'Detail', params: { id: id }});
			},
		},
		computed: {
			...mapGetters('auth',{
				currentUser: 'currentUser'
			}),
		}
	}
</script>