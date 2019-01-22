<template>
  <div class="card">

		<!-- title -->
		<div class="card-header bg-blue-800 text-white header-elements-inline">
			<h5 class="card-title"><i class="icon-reading mr-2"></i> Peserta Diklat BKCU</h5>
			<div class="header-elements">
				<div class="list-icons">
					<a class="list-icons-item" data-action="collapse"></a>
				</div>
			</div>
		</div>

		<!-- nav -->
		<div class="nav-tabs-responsive bg-light border-top">
			<ul class="nav nav-tabs nav-tabs-bottom flex-nowrap mb-0">
				<li class="nav-item"><a href="#" class="nav-link text-nowrap" :class="{'active': tabName == 'daftar'}" @click.prevent="changeTab('daftar')"><i class="icon-stack-check mr-2"></i>
						Terdaftar <span class="badge bg-blue-400 align-self-center ml-2" v-if="countDaftar > 0">{{ countDaftar }}</span></a></li>
				<li class="nav-item"><a href="#" class="nav-link text-nowrap" :class="{'active': tabName == 'ikut'}" @click.prevent="changeTab('ikut')"><i class="icon-stack-play mr-2"></i>
						Sedang Mengikuti <span class="badge bg-blue-400 align-self-center ml-2" v-if="countIkut > 0">{{ countIkut }}</span></a></li>	
				<li class="nav-item"><a href="#" class="nav-link text-nowrap" :class="{'active': tabName == 'batal'}" @click.prevent="changeTab('batal')"><i class="icon-stack-cancel mr-2"></i>
						Batal <span class="badge bg-blue-400 align-self-center ml-2" v-if="countBatal > 0">{{ countBatal }}</span></a></li>	
			</ul>
		</div>

		<!-- daftar -->
		<transition enter-active-class="animated fadeIn" mode="out-in">
			<div v-show="tabName == 'daftar'">
				<div class="card-body">
					<ul class="media-list" v-if="itemDaftarStat === 'success'">
						<li class="media cursor-pointer" v-for="item in itemDaftar" @click.prevent="detail(item.kegiatan.id)">
							<div class="mr-3 position-relative">
								<img :src="'/images/aktivis/' + item.aktivis.gambar + 'n.jpg'" class="rounded-circle" v-if="item.aktivis.gambar" width="36" jeight="36">
								<img :src="'/images/no_image_man.jpg'" class="rounded-circle" width="36" height="36" v-else>
							</div>

							<div class="media-body">
								<div class="d-flex justify-content-between">
									<a href="#" v-if="item.aktivis">{{ item.aktivis.name }} {{ currentUser.id_cu == 0 ? ' - CU ' + item.aktivis.pekerjaan_aktif.cu.name : '' }}</a>
									<span class="font-size-sm text-muted">{{ item.created_at | relativeHour }}</span>
								</div>
								Terdaftar di diklat {{ item.kegiatan ? item.kegiatan.name : '' }}
							</div>
						</li>
						<li v-if="itemDaftar.length == 0">Tidak terdapat data peserta</li>
					</ul>
					<div class="progress" v-else-if="itemDaftarStat === 'loading'">
						<div class="progress-bar progress-bar-info progress-bar-striped progress-bar-animated" style="width: 100%">
							<span class="sr-only">100% Complete</span>
						</div>
					</div>
				</div>
			</div>
		</transition>

		<!-- ikut -->
		<transition enter-active-class="animated fadeIn" mode="out-in">
			<div v-show="tabName == 'ikut'">
				<div class="card-body">
					<ul class="media-list" v-if="itemIkutStat === 'success'">
						<li class="media cursor-pointer" v-for="item in itemIkut" @click.prevent="detail(item.kegiatan.id)">
							<div class="mr-3 position-relative">
								<img :src="'/images/aktivis/' + item.aktivis.gambar + 'n.jpg'" class="rounded-circle" v-if="item.aktivis.gambar" width="36" jeight="36">
								<img :src="'/images/no_image_man.jpg'" class="rounded-circle" width="36" height="36" v-else>
							</div>

							<div class="media-body">
								<div class="d-flex justify-content-between">
									<a href="#" v-if="item.aktivis">{{ item.aktivis.name }} {{ currentUser.id_cu == 0 ? ' - CU ' + item.aktivis.pekerjaan_aktif.cu.name : '' }}</a>
									<span class="font-size-sm text-muted">{{ item.created_at | relativeHour }}</span>
								</div>
								Sedang mengikuti diklat {{ item.kegiatan ? item.kegiatan.name : '' }}
							</div>
						</li>
						<li v-if="itemIkut.length == 0">Tidak terdapat data peserta</li>
					</ul>
					<div class="progress" v-else-if="itemIkutStat === 'loading'">
						<div class="progress-bar progress-bar-info progress-bar-striped progress-bar-animated" style="width: 100%">
							<span class="sr-only">100% Complete</span>
						</div>
					</div>
				</div>
			</div>
		</transition>
		
		<!-- batal -->
		<transition enter-active-class="animated fadeIn" mode="out-in">
			<div v-show="tabName == 'batal'">
				<div class="card-body">
					<ul class="media-list" v-if="itemBatalStat === 'success'">
						<li class="media cursor-pointer" v-for="item in itemBatal" @click.prevent="detail(item.kegiatan.id)">
							<div class="mr-3 position-relative">
								<img :src="'/images/aktivis/' + item.aktivis.gambar + 'n.jpg'" class="rounded-circle" v-if="item.aktivis.gambar" width="36" jeight="36">
								<img :src="'/images/no_image_man.jpg'" class="rounded-circle" width="36" height="36" v-else>
							</div>

							<div class="media-body">
								<div class="d-flex justify-content-between">
									<a href="#" v-if="item.aktivis">{{ item.aktivis.name }} {{ currentUser.id_cu == 0 ? ' - CU ' + item.aktivis.pekerjaan_aktif.cu.name : '' }}</a>
									<span class="font-size-sm text-muted">{{ item.created_at | relativeHour }}</span>
								</div>
								Batal mengikuti diklat {{ item.kegiatan ? item.kegiatan.name : '' }}
							</div>
						</li>
						<li v-if="itemBatal.length == 0">Tidak terdapat data peserta</li>
					</ul>
					<div class="progress" v-else-if="itemBatalStat === 'loading'">
						<div class="progress-bar progress-bar-info progress-bar-striped progress-bar-animated" style="width: 100%">
							<span class="sr-only">100% Complete</span>
						</div>
					</div>
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
				tabName: 'daftar',
				isIkut: false,
				itemDaftar: [],
				itemIkut: [],
				itemBatal: [],
				countDaftar: '',
				countIkut: '',
				countBatal: '',
				itemDaftarStat: '',
				itemIkutStat: '',
				itemBatalStat: '',
			}
		},
		created(){
			this.fetchDaftar();
		},
		methods:{
			fetchDaftar(){
				this.itemDaftarStat = 'loading';

				DIKLATBKCUAPI.indexPesertaTerdaftar( this.currentUser.id_cu )
        .then((response) => {
					this.itemDaftar = response.data.model;
					this.countDaftar = response.data.model.length;
					this.countIkut = response.data.countIkut;
					this.countBatal = response.data.countBatal;
          this.itemDaftarStat = 'success';
        })
        .catch((error) => {
					this.itemDaftar = error.response;
          this.itemDaftarStat = 'fail';
				});
			},
			fetchIkut(){
				this.itemIkutStat = 'loading';

				DIKLATBKCUAPI.indexPesertaBerjalan( this.currentUser.id_cu )
        .then((response) => {
          this.itemIkut = response.data.model;
          this.itemIkutStat = 'success';
        })
        .catch((error) => {
					this.itemIkut = error.response;
          this.itemIkutStat = 'fail';
				});
			},
			fetchBatal(){
				this.itemBatalStat = 'loading';

				DIKLATBKCUAPI.indexPesertaBatal( this.currentUser.id_cu )
        .then((response) => {
          this.itemBatal = response.data.model;
          this.itemBatalStat = 'success';
        })
        .catch((error) => {
					this.itemBatal = error.response;
          this.itemBatalStat = 'fail';
				});
			},
			changeTab(value){
				this.tabName = value;
				this.selectedItemDaftar = [];
				this.selectedItemIkut = [];

				if(value == 'ikut' && !this.isIkut){
					this.isIkut = true;
					this.fetchIkut();
				}else if(value == 'batal' && !this.isBatal){
					this.isBatal = true;
					this.fetchBatal();
				}
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