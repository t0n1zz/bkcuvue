<template>
	<div>
		<!-- Page header -->
		<page-header 
		:title="title" 
		:titleDesc="titleDesc" 
		:titleIcon="titleIcon"></page-header>
		
		<!-- page container -->
		<div class="page-content pt-0">
			<div class="content-wrapper">
				<div class="content">

					<div class="card card-body">	
						<div class="row">
							<div class="col-12">
								<h6>
									Silahkan masukkan Kode Aset
								</h6>
							</div>
							<div class="col-12 pb-2">
								<!-- text -->
								<cleave 
									name="kode"
									v-model="kode" 
									class="form-control" 
									:options="cleaveOption.number13"
									placeholder="Silahkan masukkan kode aset"></cleave>
							</div>

							<div class="col-md-7 col-lg-9 pb-2 d-none d-sm-block">
								<button class="btn btn-primary" @click.prevent="fetch"  :disabled="kode == ''"><i class="icon-search4"></i> Cari</button>
								<button class="btn btn-warning" @click.prevent="resetData" v-if="itemDataStat != ''"><i class="icon-reset"></i> Reset pencarian</button>
							</div>

							<div class="col-12 pb-2 d-block d-md-none">
								<button class="btn btn-primary btn-block" @click.prevent="fetch"  :disabled="kode == ''"><i class="icon-search4"></i> Cari</button>
								<button class="btn btn-warning btn-block mb-1" @click.prevent="resetData"><i class="icon-reset" v-if="itemDataStat != ''"></i> Reset pencarian</button>
							</div>

							<!-- loading -->
							<div class="col-12" v-if="itemDataStat == 'loading'">
								<hr/>
								<div class="progress">
									<div class="progress-bar progress-bar-info progress-bar-striped progress-bar-animated" style="width: 100%">
										<span class="sr-only">100% Complete</span>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div class="card card-body" v-if="itemDataStat == 'success' && itemData != null">
						<formDetail :kelas="kelas" :selectedItem="itemData" :selectedItemStat="itemDataStat" :isModal="false" ></formDetail>
					</div>

					<div class="alert bg-danger text-white alert-styled-left " v-if="itemData == null && kode != ''">
						<span class="font-weight-semibold" >Aset tidak ditemukan. Pastikan kode yang anda masukan benar
						</span>
					</div>

				</div>
			</div>
		</div>

	</div>
</template>

<script>
	import { mapGetters } from 'vuex';
	import pageHeader from "../../components/pageHeader.vue";
	import formDetail from "./formDetail.vue";
	import Cleave from 'vue-cleave-component';

	export default {
		components: {
			pageHeader,
			formDetail,
			Cleave,
		},
		data() {
			return {
				title: 'Aset Tetap',
				kelas: 'asetTetap',
				titleDesc: 'Pencarian data aset tetap',
				titleIcon: 'icon-drawer3',
				kode: '',
				cleaveOption: {
					number13: {
            numeral: true,
            numeralIntegerScale: 13,
            numeralDecimalScale: 0,
						stripLeadingZeroes: false,
						delimiter: ''
          }
				},
			}
		},
		created(){
			this.kode = this.$route.params.kode;
			this.fetch();
		},
		watch: {
      // check route changes
			'$route' (to, from){
				this.fetch();
      },
    },
		methods: {
			fetch(){
				this.$store.dispatch(this.kelas + '/get',this.kode);
			},
			resetData(){
				this.kode = '';
				this.$store.dispatch(this.kelas + '/resetData');
			}
		},
		computed: {
			...mapGetters('auth',{
				currentUser: 'currentUser'
			}),
			...mapGetters('asetTetap',{
				itemData: 'data',
				itemDataStat: 'dataStat',
			}),
		}
	}
</script>