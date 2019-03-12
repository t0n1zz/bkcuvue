<template>
  <div class="card">

		<!-- title -->
		<div class="card-header bg-brown-400 text-white header-elements-inline">
			<h5 class="card-title"><i class="icon-copy3 mr-2"></i> Perubahan Data Organisasi</h5>
			<div class="header-elements">
				<div class="list-icons">
					<a class="list-icons-item" data-action="collapse"></a>
				</div>
			</div>
		</div>

		<!-- nav -->
		<div class="nav-tabs-responsive bg-light border-top">
			<ul class="nav nav-tabs nav-tabs-bottom flex-nowrap mb-0">

				<li class="nav-item" v-if="currentUser.can['index_cu']"><a href="#" class="nav-link text-nowrap" :class="{'active': tabName == 'cu'}" @click.prevent="changeTab('cu')"><i class="icon-office mr-2"></i>
					CU <span class="badge bg-blue-400 align-self-center ml-2" v-if="countCu > 0">{{ countCu }}</span></a></li>		

				<li class="nav-item" v-if="currentUser.can['index_tp']"><a href="#" class="nav-link text-nowrap" :class="{'active': tabName == 'tp'}" @click.prevent="changeTab('tp')"><i class="icon-home9 mr-2"></i>
					TP/KP <span class="badge bg-blue-400 align-self-center ml-2" v-if="countTp > 0">{{ countTp }}</span></a></li>	

				<li class="nav-item" v-if="currentUser.can['index_produk_cu']"><a href="#" class="nav-link text-nowrap" :class="{'active': tabName == 'produk_cu'}" @click.prevent="changeTab('produk_cu')"><i class="icon-list3 mr-2"></i>
					Produk & Pelayanan <span class="badge bg-blue-400 align-self-center ml-2" v-if="countProdukCu > 0">{{ countProdukCu }}</span></a></li>	

				<li class="nav-item" v-if="currentUser.can['index_aktivis']"><a href="#" class="nav-link text-nowrap" :class="{'active': tabName == 'aktivis'}" @click.prevent="changeTab('aktivis')"><i class="icon-user-tie mr-2"></i>
					Aktivis <span class="badge bg-blue-400 align-self-center ml-2" v-if="countAktivis > 0">{{ countAktivis }}</span></a></li>		

				<li class="nav-item" v-if="currentUser.can['index_mitra_orang']"><a href="#" class="nav-link text-nowrap" :class="{'active': tabName == 'mitra_orang'}" @click.prevent="changeTab('mitra_orang')"><i class="icon-briefcase mr-2"></i>
					Mitra Perseorangan <span class="badge bg-blue-400 align-self-center ml-2" v-if="countMitraOrang > 0">{{ countMitraOrang }}</span></a></li>		

				<li class="nav-item" v-if="currentUser.can['index_mitra_lembaga']"><a href="#" class="nav-link text-nowrap" :class="{'active': tabName == 'mitra_lembaga'}" @click.prevent="changeTab('mitra_lembaga')"><i class="icon-briefcase mr-2"></i>
					Lembaga Mitra <span class="badge bg-blue-400 align-self-center ml-2" v-if="countMitraLembaga > 0">{{ countMitraLembaga }}</span></a></li>	

			</ul>
		</div>

		<!-- cu -->
		<transition enter-active-class="animated fadeIn" mode="out-in">
			<div v-show="tabName == 'cu'">
				<div class="card-body pb-2">
					<div class="list-feed overflow-auto" style="max-height: 20rem;" v-if="itemCuStat === 'success'">
						<div class="list-feed-item cursor-pointer" v-for="item in itemCu" @click.prevent="detail('cu',item.revisionable_id)">
							<div class="text-muted" v-html="$options.filters.dateTime(item.created_at)"></div>
							{{ item.user.name }} mengubah <mark>{{ item.key }}</mark> CU {{ item.revisionable.name }} dari 
							<mark><check-value :value="item.old_value"></check-value></mark>
							menjadi 
							<mark><check-value :value="item.new_value"></check-value></mark>
						</div>
						<div v-if="itemCu.length == 0">Tidak terdapat data perubahan aktivitas</div>
					</div>
					<div class="progress" v-else-if="itemCuStat === 'loading'">
						<div class="progress-bar progress-bar-info progress-bar-striped progress-bar-animated" style="width: 100%">
							<span class="sr-only">100% Complete</span>
						</div>
					</div>
				</div>
			</div>
		</transition>

		<!-- tp -->
		<transition enter-active-class="animated fadeIn" mode="out-in">
			<div v-show="tabName == 'tp'">
				<div class="card-body pb-2">
					<div class="list-feed overflow-auto" style="max-height: 20rem;" v-if="itemTpStat === 'success'">
						<div class="list-feed-item cursor-pointer" v-for="item in itemTp" @click.prevent="detail('tp',item.revisionable_id)">
							<div class="text-muted" v-html="$options.filters.dateTime(item.created_at)"></div>
							{{ item.user.name }} mengubah <mark>{{ item.key }}</mark> CU {{ item.revisionable.name }} dari 
							<mark><check-value :value="item.old_value"></check-value></mark>
							menjadi 
							<mark><check-value :value="item.new_value"></check-value></mark>
						</div>
						<div v-if="itemTp.length == 0">Tidak terdapat data perubahan aktivitas</div>
					</div>
					<div class="progress" v-else-if="itemTpStat === 'loading'">
						<div class="progress-bar progress-bar-info progress-bar-striped progress-bar-animated" style="width: 100%">
							<span class="sr-only">100% Complete</span>
						</div>
					</div>
				</div>
			</div>
		</transition>

		<!-- produk_cu -->
		<transition enter-active-class="animated fadeIn" mode="out-in">
			<div v-show="tabName == 'produk_cu'">
				<div class="card-body pb-2">
					<div class="list-feed overflow-auto" style="max-height: 20rem;" v-if="itemProdukCuStat === 'success'">
						<div class="list-feed-item cursor-pointer" v-for="item in itemProdukCu" @click.prevent="detail('produk_cu',item.revisionable_id)">
							<div class="text-muted" v-html="$options.filters.dateTime(item.created_at)"></div>
							{{ item.user.name }} mengubah <mark>{{ item.key }}</mark> CU {{ item.revisionable.name }} dari 
							<mark><check-value :value="item.old_value"></check-value></mark>
							menjadi 
							<mark><check-value :value="item.new_value"></check-value></mark>
						</div>
						<div v-if="itemProdukCu.length == 0">Tidak terdapat data perubahan aktivitas</div>
					</div>
					<div class="progress" v-else-if="itemProdukCuStat === 'loading'">
						<div class="progress-bar progress-bar-info progress-bar-striped progress-bar-animated" style="width: 100%">
							<span class="sr-only">100% Complete</span>
						</div>
					</div>
				</div>
			</div>
		</transition>

		<!-- aktivis -->
		<transition enter-active-class="animated fadeIn" mode="out-in">
			<div v-show="tabName == 'aktivis'">
				<div class="card-body pb-2">
					<div class="list-feed overflow-auto" style="max-height: 20rem;" v-if="itemAktivisStat === 'success'">
						<div class="list-feed-item cursor-pointer" v-for="item in itemAktivis" @click.prevent="detail('aktivis',item.revisionable_id)">
							<div class="text-muted" v-html="$options.filters.dateTime(item.created_at)"></div>
							{{ item.user.name }} mengubah <mark>{{ item.key }}</mark> CU {{ item.revisionable.name }} dari 
							<mark><check-value :value="item.old_value"></check-value></mark>
							menjadi 
							<mark><check-value :value="item.new_value"></check-value></mark>
						</div>
						<div v-if="itemAktivis.length == 0">Tidak terdapat data perubahan aktivitas</div>
					</div>
					<div class="progress" v-else-if="itemAktivisStat === 'loading'">
						<div class="progress-bar progress-bar-info progress-bar-striped progress-bar-animated" style="width: 100%">
							<span class="sr-only">100% Complete</span>
						</div>
					</div>
				</div>
			</div>
		</transition>

		<!-- mitra_orang -->
		<transition enter-active-class="animated fadeIn" mode="out-in">
			<div v-show="tabName == 'mitra_orang'">
				<div class="card-body pb-2">
					<div class="list-feed overflow-auto" style="max-height: 20rem;" v-if="itemMitraOrangStat === 'success'">
						<div class="list-feed-item cursor-pointer" v-for="item in itemMitraOrang" @click.prevent="detail('mitra_orang',item.revisionable_id)">
							<div class="text-muted" v-html="$options.filters.dateTime(item.created_at)"></div>
							{{ item.user.name }} mengubah <mark>{{ item.key }}</mark> CU {{ item.revisionable.name }} dari 
							<mark><check-value :value="item.old_value"></check-value></mark>
							menjadi 
							<mark><check-value :value="item.new_value"></check-value></mark>
						</div>
						<div v-if="itemMitraOrang.length == 0">Tidak terdapat data perubahan aktivitas</div>
					</div>
					<div class="progress" v-else-if="itemMitraOrangStat === 'loading'">
						<div class="progress-bar progress-bar-info progress-bar-striped progress-bar-animated" style="width: 100%">
							<span class="sr-only">100% Complete</span>
						</div>
					</div>
				</div>
			</div>
		</transition>

		<!-- mitra_lembaga -->
		<transition enter-active-class="animated fadeIn" mode="out-in">
			<div v-show="tabName == 'mitra_lembaga'">
				<div class="card-body pb-2">
					<div class="list-feed overflow-auto" style="max-height: 20rem;" v-if="itemMitraLembagaStat === 'success'">
						<div class="list-feed-item cursor-pointer" v-for="item in itemMitraLembaga" @click.prevent="detail('mitra_lembaga',item.revisionable_id)">
							<div class="text-muted" v-html="$options.filters.dateTime(item.created_at)"></div>
							{{ item.user.name }} mengubah <mark>{{ item.key }}</mark> CU {{ item.revisionable.name }} dari 
							<mark><check-value :value="item.old_value"></check-value></mark>
							menjadi 
							<mark><check-value :value="item.new_value"></check-value></mark>
						</div>
						<div v-if="itemMitraLembaga.length == 0">Tidak terdapat data perubahan aktivitas</div>
					</div>
					<div class="progress" v-else-if="itemMitraLembagaStat === 'loading'">
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
	import CUAPI from '../../api/cu.js';
	import TPAPI from '../../api/tp.js';
	import ProdukCuAPI from '../../api/produkCu.js';
	import AktivisAPI from '../../api/aktivis.js';
	import MitraOrangAPI from '../../api/mitraOrang.js';
	import MitraLembagaAPI from '../../api/mitraLembaga.js';

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
				tabName: 'cu',
				isTp: false,
				isProdukCu: false,
				isAktivis: false,
				isMitraOrang: false,
				isMitraLembaga: false,
				itemCu: [],
				itemTp: [],
				itemProdukCu: [],
				itemAktivis: [],
				itemMitraOrang: [],
				itemMitraLembaga: [],
				countCu: '',
				countTp: '',
				countProdukCu: '',
				countAktivis: '',
				countMitraOrang: '',
				countMitraLembaga: '',
				itemCuStat: '',
				itemTpStat: '',
				itemProdukCuStat: '',
				itemAktivisStat: '',
				itemMitraOrangStat: '',
				itemMitraLembagaStat: '',
			}
		},
		created(){
			if(this.currentUser.can['index_cu']){
				this.tabName = 'cu';
				this.fetchCu();
			}else if(this.currentUser.can['index_tp']){
				this.tabName = 'tp';
				this.isTp = true;
				this.fetchTp();
			}else if(this.currentUser.can['index_produk_cu']){
				this.tabName = 'produk_cu';
				this.isProdukCu = true;
				this.fetchProdukCu();
			}else if(this.currentUser.can['index_aktivis']){
				this.tabName = 'aktivis';
				this.isAktivis = true;
				this.fetchAktivis();
			}else if(this.currentUser.can['index_mitra_orang']){
				this.tabName = 'mitra_orang';
				this.isMitraOrang = true;
				this.fetchMitraOrang();
			}else if(this.currentUser.can['index_mitra_lembaga']){
				this.tabName = 'mitra_lembaga';
				this.isMitraLembaga = true;
				this.fetchMitraLembaga();
			}
		},
		methods:{
			fetchCu(){
				this.itemCuStat = 'loading';

				CUAPI.history()
        .then((response) => {
					this.itemCu = response.data.model;
          this.itemCuStat = 'success';
        })
        .catch((error) => {
					this.itemCu = error.response;
          this.itemCuStat = 'fail';
				});
			},
			fetchTp(){
				this.itemTpStat = 'loading';

				TPAPI.history()
        .then((response) => {
					this.itemTp = response.data.model;
          this.itemTpStat = 'success';
        })
        .catch((error) => {
					this.itemTp = error.response;
          this.itemTpStat = 'fail';
				});
			},
			fetchProdukCu(){
				this.itemProdukCuStat = 'loading';

				ProdukCuAPI.history()
        .then((response) => {
					this.itemProdukCu = response.data.model;
          this.itemProdukCuStat = 'success';
        })
        .catch((error) => {
					this.itemProdukCu = error.response;
          this.itemProdukCuStat = 'fail';
				});
			},
			fetchAktivis(){
				this.itemAktivisStat = 'loading';

				AktivisAPI.history()
        .then((response) => {
					this.itemAktivis = response.data.model;
          this.itemAktivisStat = 'success';
        })
        .catch((error) => {
					this.itemAktivis = error.response;
          this.itemAktivisStat = 'fail';
				});
			},
			fetchMitraOrang(){
				this.itemMitraOrangStat = 'loading';

				MitraOrangAPI.history()
        .then((response) => {
					this.itemMitraOrang = response.data.model;
          this.itemMitraOrangStat = 'success';
        })
        .catch((error) => {
					this.itemMitraOrang = error.response;
          this.itemMitraOrangStat = 'fail';
				});
			},
			fetchMitraLembaga(){
				this.itemMitraLembagaStat = 'loading';

				MitraLembagaAPI.history()
        .then((response) => {
					this.itemMitraLembaga = response.data.model;
          this.itemMitraLembagaStat = 'success';
        })
        .catch((error) => {
					this.itemMitraLembaga = error.response;
          this.itemMitraLembagaStat = 'fail';
				});
			},
			changeTab(value){
				this.tabName = value;

				if(value == 'tp' && !this.isTp){
					this.isTp = true;
					this.fetchTp();
				}else if(value == 'produk_cu' && !this.isProdukCu){
					this.isProdukCu = true;
					this.fetchProdukCu();
				}else if(value == 'aktivis' && !this.isAktivis){
					this.isAktivis = true;
					this.fetchAktivis();
				}else if(value == 'mitra_orang' && !this.isMitraOrang){
					this.isMitraOrang = true;
					this.fetchMitraOrang();
				}else if(value == 'mitra_lembaga' && !this.isMitraLembaga){
					this.isMitraLembaga = true;
					this.fetchMitraLembaga();
				}
			},
			detail(value,id) {
				if(value == 'cu'){
					if(this.currentUser.can['update_cu']){
						this.$router.push({name: 'cuEdit', params: { id: id }});
					}
				}else if(value == 'tp'){
					if(this.currentUser.can['update_tp']){
						this.$router.push({name: 'tpEdit', params: { id: id }});
					}
				}else if(value == 'produkCu'){
					if(this.currentUser.can['update_produk_cu']){
						this.$router.push({name: 'produkCuEdit', params: { id: id }});
					}
				}else if(value == 'aktivis'){
					if(this.currentUser.can['update_aktivis']){
						this.$router.push({name: 'aktivisEdit', params: { id: id }});
					}
				}else if(value == 'mitra_orang'){
					if(this.currentUser.can['update_mitra_orang']){
						this.$router.push({name: 'mitraOrangEdit', params: { id: id }});
					}
				}else if(value == 'mitra_lembaga'){
					if(this.currentUser.can['update_mitra_lembaga']){
						this.$router.push({name: 'mitraLembagaEdit', params: { id: id }});
					}
				}
			},
		},
		computed: {
			...mapGetters('auth',{
				currentUser: 'currentUser'
			}),
		}
	}
</script>