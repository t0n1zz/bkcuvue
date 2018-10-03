<template>
  <div class="card">
    <div class="card-header header-elements-inline">
      <h6 class="card-title"><i></i><i class="icon-table2 mr-2"></i> Tabel Perkembangan</h6>
    </div>

    <ul class="nav nav-tabs nav-tabs-solid nav-justified bg-indigo-400 border-x-0 border-bottom-0 border-top-indigo-300 mb-0">

      <!-- tabel gerakan -->
      <li class="nav-item">
        <a href="#" class="nav-link" :class="{'active' : tabTabelName == 'tabelGerakan'}" @click.prevent="changeTabelTab('tabelGerakan')" v-if="profile.id_cu == 0">Gerakan</a>
      </li>

      <!-- tabel cu -->
      <li class="nav-item">
        <a href="#" class="nav-link" :class="{'active' : tabTabelName == 'tabelCu'}" @click.prevent="changeTabelTab('tabelCu')" v-if="profile.id_cu != 0">CU</a>
      </li>

      <!-- tabel pearls -->
      <li class="nav-item">
        <a href="#" class="nav-link" :class="{'active' : tabTabelName == 'tabelPearls'}" @click.prevent="changeTabelTab('tabelPearls')" v-if="profile.id_cu != 0">P.E.A.R.L.S. CU</a>
      </li>

      <!-- tabel gerakan -->
      <li class="nav-item">
        <a href="#" class="nav-link" :class="{'active' : tabTabelName == 'tabelGerakan'}" @click.prevent="changeTabelTab('tabelGerakan')" v-if="profile.id_cu != 0">Gerakan</a>
      </li>

    </ul>

    <transition enter-active-class="animated fadeIn" mode="out-in">
      <div class="table-responsive table-scrollable" v-show="tabTabelName == 'tabelGerakan'" v-if="isTabelGerakan">
        <table class="table text-nowrap">
          <thead>
            <tr>
              <th class="w-100">Nama Akun</th>
              <th>Nilai</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="column in columnData" v-if="column.tipe && !column.disable">
              <td>{{column.title}}</td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    </transition>
    
  </div>
</template>

<script type="text/javascript">

  export default {
    props: ['profile','profileStat','columnData','columnDataPearls'],
    data(){
      return {
        tabTabelName: 'tabelCu',
        isTabelPearls: false,
				isTabelGerakan: false,
      }
    },
    created(){
      if(this.profileStat == 'success' && this.profile.id_cu == 0){
          this.changeTabelTab('tabelGerakan');
        }
		},
		watch: {
			profileStat(value){
				if(value == 'success'){
					if(this.profile.id_cu == 0){
            this.changeTabelTab('tabelGerakan');
					}
				}
			}
		},
		methods:{
			changeTabelTab(value) {
				this.tabTabelName = value;
				if (value == 'tabelGerakan' && !this.isTabelGerakan) {
					this.isTabelGerakan = true
				}
				if (value == 'tabelPearls' && !this.isTabelPearls) {
					this.isTabelPearls = true
				}
			},
		},
  }
</script>
