<template>
  <div>
    <div class="nav-tabs-responsive mb-3">
      <ul class="nav nav-tabs nav-tabs-solid bg-teal-400">

        <!-- grafik cu -->
        <li class="nav-item">
          <a href="#" class="nav-link" :class="{'active' : tabGrafikName == 'grafikCu'}" @click.prevent="changeGrafikTab('grafikCu')" v-if="id_cu != 0"><i class="icon-stats-dots mr-2"></i> Grafik Perkembangan CU</a>
        </li>

        <!-- grafik pearls -->
        <li class="nav-item">
          <a href="#" class="nav-link" :class="{'active' : tabGrafikName == 'grafikPearls'}" @click.prevent="changeGrafikTab('grafikPearls')" v-if="id_cu != 0"><i class="icon-stats-dots mr-2"></i> Grafik Perkembangan P.E.A.R.L.S. CU</a>
        </li>

        <!-- grafik perkembangan -->
        <li class="nav-item">
          <a href="#" class="nav-link" :class="{'active' : tabGrafikName == 'grafikGerakan'}" @click.prevent="changeGrafikTab('grafikGerakan')" v-if="id_cu == 0"><i class="icon-stats-dots mr-2"></i> Grafik Statistik Gerakan</a>
        </li>

      </ul>
    </div>

    <!-- grafik cu -->
    <transition enter-active-class="animated fadeIn" mode="out-in">
      <div v-show="tabGrafikName == 'grafikCu'" v-if="id_cu != 0">
        <infografis-cu
          :title="'Laporan Perkembangan CU'"
          :kelas="'laporanCu'"
          :columnData="columnData"></infografis-cu>
      </div>
    </transition>

    <!-- grafik pearls -->
    <transition enter-active-class="animated fadeIn" mode="out-in">
      <div v-show="tabGrafikName == 'grafikPearls'" v-if="isGrafikPearls && id_cu != 0">
        <infografis-pearls
          :title="'Laporan Perkembangan P.E.A.R.L.S. CU'"
          :kelas="'laporanCu'"
          :columnData="columnDataPearls"></infografis-pearls>
      </div>
    </transition>

    <!-- grafik gerakan -->
    <transition enter-active-class="animated fadeIn" mode="out-in">
      <div v-show="tabGrafikName == 'grafikGerakan'" v-if="isGrafikGerakan && id_cu == 0">
        <infografis-gerakan
          :title="'Laporan Perkembangan Gerakan'"
          :kelas="'laporanGerakan'"
          :columnData="columnData"></infografis-gerakan>
      </div>
    </transition>
  </div>
</template>

<script type="text/javascript">
	import infografisCu from "../laporanCu/infografis.vue";
	import infografisPearls from "../laporanCu/infografisPearls.vue";
	import infografisGerakan from "../laporanGerakan/infografis.vue";

	export default{
    props: ['id_cu','columnData','columnDataPearls'],
		components: {
			infografisCu,
			infografisPearls,
			infografisGerakan
		},
		data(){
			return{
				tabGrafikName: 'grafikCu',
				isGrafikPearls: false,
				isGrafikGerakan: false,
			}
		},
		created(){
      if(this.id_cu == 0){
        this.changeGrafikTab('grafikGerakan');
      }
		},
		methods:{
			changeGrafikTab(value) {
				this.tabGrafikName = value;
				if (value == 'grafikGerakan' && !this.isGrafikGerakan) {
					this.isGrafikGerakan = true
				}
				if (value == 'grafikPearls' && !this.isGrafikPearls) {
					this.isGrafikPearls = true
				}
			},
		},
	}
</script>
