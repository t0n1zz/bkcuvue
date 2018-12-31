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

					<!-- message -->
					<message v-if="itemDataStat === 'fail'" :title="'Oops terjadi kesalahan:'" :errorData="itemData">
					</message>

					<message v-if="itemDataDeletedStat === 'fail'" :title="'Oops terjadi kesalahan:'" :errorData="itemDataDeleted">
					</message>

					<div class="nav-tabs-responsive mb-3">
						<ul class="nav nav-tabs nav-tabs-solid bg-light">
							<li class="nav-item">
								<a href="#" class="nav-link" :class="{'active' : tabName == 'table'}" @click.prevent="changeTab('table')"><i class="icon-table2 mr-2"></i> CU Anggota</a>
							</li>
							<li class="nav-item">
								<a href="#" class="nav-link" :class="{'active' : tabName == 'tableDeleted'}" @click.prevent="changeTab('tableDeleted')"><i class="icon-table2 mr-2"></i> CU Bukan Anggota Lagi</a>
							</li>
						</ul>
					</div>

					<!-- table data -->
					<transition enter-active-class="animated fadeIn" mode="out-in">
						<div v-show="tabName == 'table'">
							<table-data 
								:title="title" 
								:kelas="kelas"></table-data>
						</div>
					</transition>

					<transition enter-active-class="animated fadeIn" mode="out-in">
						<div v-show="tabName == 'tableDeleted'">
							<table-data-deleted 
								:title="title" 
								:kelas="kelas"></table-data-deleted>
						</div>
					</transition>
						
				</div>
			</div>
		</div>

	</div>
</template>

<script>
	import { mapGetters } from 'vuex';
	import pageHeader from "../../components/pageHeader.vue";
	import tableData from "./table.vue";
	import tableDataDeleted from "./tableDeleted.vue";
	import message from "../../components/message.vue";
	
	export default {
		components: {
			pageHeader,
			tableData,
			tableDataDeleted,
			message,
		},
		data() {
			return {
				title: 'CU',
				kelas: 'cu',
				titleDesc: 'Mengelola data CU',
				titleIcon: 'icon-office',
				tabName: 'table',
				isTableDeleted: false,
			}
		},
		methods:{
			changeTab(value) {
				this.tabName = value;
				if (value == 'tableDeleted' && !this.isTableDeleted) {
					this.isTableDeleted = true
				}
			}
		},
		computed: {
			...mapGetters('cu',{
				itemData: 'dataS',
				itemDataStat: 'dataStatS',
				itemDataDeleted: 'dataDeletedS',
				itemDataDeletedStat : 'dataDeletedStatS'
			}),
		}
	}
</script>