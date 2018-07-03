<template>
	<div>
		<!-- table desktop -->
		<div class="table-responsive">
			<table class="table">
				<thead class="bg-primary">
					<tr class="text-nowarp">
						<th v-for="item in columnData">
							<span v-html="item.title"></span>  
						</th>
					</tr>
				</thead>

				<!-- loading -->
				<tbody v-if="itemDataStat === 'loading'">
					<tr>
						<td :colspan="columnData.length">
							<div class="progress">
								<div class="progress-bar progress-bar-info progress-bar-striped active" style="width: 100%">
									<span class="sr-only">100% Complete</span>
								</div>
							</div>
						</td>
					</tr>
				</tbody>

				<!-- success -->
				<tbody v-else-if="itemDataStat === 'success'">
					<slot name="item-desktop" v-for="(item,index) in items" :item="item" :index="index"></slot>
				</tbody>

				<!-- error -->
				<tbody v-else-if="itemDataStat === 'fail'">
					<tr>
						<td :colspan="columnData.length">
							Oops.. Terjadi kesalahan, silahkan coba lagi.
						</td>
					</tr>
				</tbody>

			</table>
		</div>

		<!-- table context menu -->
		<context-menu ref="menu">
			<!-- slot button -->
			<slot name="button-context"></slot>
		</context-menu>

	</div>
</template>

<script>
	import { mapGetters } from 'vuex';
	import Cleave from 'vue-cleave-component';
	import contextMenu from 'vue-context-menu';

	export default {
		props:['columnData','itemDataStat','items'],
		components: {
			contextMenu
		},
		data() {
			return {
			}
		},
		methods: {
		},
		computed: {
			...mapGetters('user',{
				profile: 'profile',
				profileStat: 'profileStat'
			}),
		}
	}
</script>