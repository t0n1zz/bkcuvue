<template>
	<div>
    <data-table :items="itemData" :columnData="columnDataPanitia" :itemDataStat="itemDataStat">
      <template slot="item-desktop" slot-scope="props">
        <tr :class="{ 'bg-info': selectedItem.id === props.item.id }" class="text-nowrap" @click="selectedRow(props.item)" v-if="props.item">
          <td>{{ props.index + 1 }}</td>
          <td>{{ props.item.name }}</td>
          <td>
            <span v-if="props.item.tipe == 1"><span v-if="props.item.cu">{{ props.item.cu.name }}</span></span>
            <span v-else-if="props.item.tipe == 2">{{ props.item.lembaga_lain }}</span>
            <span v-else>Puskopdit BKCU Kalimantan</span>
          </td>
          <td>{{ props.item.peran }}</td>
          <td>{{ props.item.keterangan }}</td>
        </tr>
      </template>	
    </data-table>
	</div>
</template>

<script>
	import { mapGetters } from 'vuex';
	import Cleave from 'vue-cleave-component';

	export default {
		props:['form'],
		components: {
			Cleave
		},
		data() {
			return {
			}
		},
		methods: {
		},
		computed: {
			...mapGetters('aktivis',{
				itemData: 'dataS',
				itemDataStat: 'dataStatS'
			})
		}
	}
</script>