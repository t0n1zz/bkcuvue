<template>
	<div class="table-responsive table-scrollable" style="max-height: 33rem;" >
		<table class="table table-striped">
			<thead class="bg-primary">
				<tr class="text-nowrap">
					<th v-for="(item, index) in columnData" :key="index">
						<span v-html="item.title"></span>  
					</th>
				</tr>
			</thead>

			<!-- loading -->
			<tbody v-if="itemDataStat === 'loading'">
				<tr>
					<td :colspan="columnData.length">
						<div class="progress">
							<div class="progress-bar progress-bar-info progress-bar-striped progress-bar-animated" style="width: 100%">
								<span class="sr-only">100% Complete</span>
							</div>
						</div>
					</td>
				</tr>
			</tbody>

			<!-- success -->
			<tbody v-else-if="itemDataStat === 'success'"> 
				<slot name="item-desktop" v-for="(item,index) in items" :item="item" :index="index"></slot>
				<tr v-if="items && items.length == 0">
					<td :colspan="columnData.length">Belum terdapat data...</td>
				</tr>
			</tbody>

			<!-- error -->
			<tbody v-else-if="itemDataStat === 'fail'">
				<tr>
					<td :colspan="columnData.length">
						Oops.. Terjadi kesalahan, silahkan coba lagi.
					</td>
				</tr>
			</tbody>

			<!-- error -->
			<tbody v-else>
				<tr>
					<td :colspan="columnData.length">-</td>
				</tr>
			</tbody>

		</table>
	</div>
</template>

<script>
	import Cleave from 'vue-cleave-component';

	export default {
		props:['columnData','itemDataStat','items'],
		components: {
		},
		data() {
			return {
			}
		},
		methods: {
		}
	}
</script>