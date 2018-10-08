<template>
  <div class="row">

    <!-- cu -->
    <div class="col-lg-3 col-md-3" v-if="currentUser.can && currentUser.can['index_cu']" @click.prevent="goTo(cuWidgetRoute)" :class="{'pointer': currentUser.id_cu == 0}">
      <count-widget :title="'CU dalam Gerakan'" :color="'bg-green-400'" :icon="'icon-office'" :count="cuCount"  ></count-widget>
    </div>

    <!-- tp -->
    <div class="col-lg-3 col-md-3 pointer" v-if="currentUser.can && currentUser.can['index_tp']" @click.prevent="goTo(tpWidgetRoute)">
      <count-widget :title="'TP'" :color="'bg-brown-400'" :icon="'icon-home9'" :count="tpCount" ></count-widget>
    </div>

    <!-- produkCu -->
    <div class="col-lg-3 col-md-3 pointer" v-if="currentUser.can && currentUser.can['index_produk_cu']" @click.prevent="goTo(produkCuWidgetRoute)">
      <count-widget :title="'Produk CU'" :color="'bg-warning-400'" :icon="'icon-list3'" :count="produkCuCount"></count-widget>
    </div>

    <!-- pengelola -->
    <div class="col-lg-3 col-md-3 pointer" v-if="currentUser.can && currentUser.can['index_pengelola']" @click.prevent="goTo(pengelolaWidgetRoute)">
      <count-widget :title="'Pengelola'" :color="'bg-indigo-400'" :icon="'icon-user-tie'" :count="pengelolaCount"></count-widget>
    </div>

    <!-- user -->
    <div class="col-lg-3 col-md-3 pointer" v-if="currentUser.can && currentUser.can['index_user']" @click.prevent="goTo(userWidgetRoute)">
      <count-widget :title="'User'" :color="'bg-danger-400'" :icon="'icon-user'" :count="userCount"></count-widget>
    </div>

  </div>
</template>

<script type="text/javascript">
	import { mapGetters } from 'vuex';
  import countWidget from './_component/countWidget.vue';
  
	export default{
		components: {
			countWidget
		},
		data(){
			return{
				cuWidgetRoute: {},
				tpWidgetRoute: {},
				produkCuWidgetRoute: {},
				pengelolaWidgetRoute: {},
				produkCuWidgetRoute: {},
				userWidgetRoute: {}
			}
		},
		created(){
			this.countWidget();
			this.countWidgetRoute();
		},
		methods:{
			countWidget(){
				if(this.currentUser.can && this.currentUser.can['index_cu']){
					this.$store.dispatch('cu/count');
				}

				if(this.currentUser.can && this.currentUser.can['index_tp']){
					this.$store.dispatch('tp/count');
				}
					
				if(this.currentUser.can && this.currentUser.can['index_pengelola']){
					this.$store.dispatch('pengelola/count');
				}

				if(this.currentUser.can && this.currentUser.can['index_produk_cu']){
					this.$store.dispatch('produkCu/count');
				}

				if(this.currentUser.can && this.currentUser.can['index_user']){
					this.$store.dispatch('user/count');
				}
			},
			countWidgetRoute(){
				if(this.currentUser.id_cu != 0){
					this.tpWidgetRoute = { name: 'tpCu', params:{cu: this.currentUser.id_cu} };
					this.produkCuWidgetRoute = { name: 'produkCuCu', params:{cu: this.currentUser.id_cu} };
					this.pengelolaWidgetRoute = { name: 'pengelolaCu', params:{cu: this.currentUser.id_cu} };
					this.userWidgetRoute = { name: 'userCu', params:{cu: this.currentUser.id_cu} };
				}else{
					this.cuWidgetRoute = { name: 'cu' };
					this.tpWidgetRoute = { name: 'tpCu', params:{cu:'semua'} };
					this.produkCuWidgetRoute = { name: 'produkCuCu', params:{cu:'semua'} };
					this.pengelolaWidgetRoute = { name: 'pengelolaCu', params:{cu:'semua'} };
					this.userWidgetRoute = { name: 'userCu', params:{cu:'semua'} };
				}
			},
			goTo(route){
				this.$router.push(route);
				console.log(route);
    	}	
		},
		computed: {
			...mapGetters('auth',{
				currentUser: 'currentUser'
			}),
			...mapGetters('artikel',{
				artikelCount: 'count',
				artikelCountStat: 'countStat'
			}),
			...mapGetters('cu',{
				cuCount: 'count',
				cuCountStat: 'countStat'
			}),
			...mapGetters('tp',{
				tpCount: 'count',
				tpCountStat: 'countStat'
			}),
			...mapGetters('pengelola',{
				pengelolaCount: 'count',
				pengelolaCountStat: 'countStat'
			}),
			...mapGetters('produkCu',{
				produkCuCount: 'count',
				produkCuCountStat: 'countStat'
			}),
			...mapGetters('user',{
				userCount: 'count',
				userCountStat: 'countStat'
			}),
		}
	}
</script>

<style scoped>
.pointer{
	cursor: pointer;
}
</style>
