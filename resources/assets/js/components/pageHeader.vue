<template>
	<div>
    <div class="page-header">
			<div class="page-header-content header-elements-md-inline">
				<div class="page-title d-flex">
					<h4>
						<i class="mr-2" :class="titleIcon"></i>
						<span class="font-weight-semibold">{{ title }}</span> <small class="d-block text-muted">{{ titleDesc }}</small>
					</h4>
				</div>

				<div class="header-elements d-none py-0 mb-3 mb-md-0">

					<!-- level 1  -->
					<div class="breadcrumb" v-if="level === 1">
						<router-link :to="{ name:'dashboard' }" class="breadcrumb-item"><i class="icon-home4"></i>  Dashboard </router-link>
						<span class="breadcrumb-item active">{{ title }}</span>
					</div>

					<!-- level 2 -->
					<div class="breadcrumb" v-if="level === 2">
						<router-link :to="{ name:'dashboard' }" class="breadcrumb-item"><i class="icon-home4"></i> Dashboard </router-link>
						<a href="#" class="breadcrumb-item" @click.prevent="level2Back()">{{ level2Title }}</a>
						<span class="breadcrumb-item active">{{ title }}</span>
					</div>

					<!-- level custom -->
					<div class="breadcrumb" v-if="level === 3">
						<slot name="breadcrumb"></slot>
					</div>	
				</div>
			</div>
		</div>
	</div>
</template>

<script type="text/javascript">
import { mapGetters } from 'vuex';
export default {
	props: {
			title: {
					default: ''
			},
			titleIcon: {
					default: ''
			},
			titleDesc: {
					default: ''
			},
			level: {
					default: 1
			},
			level2Title: {
					default: ''
			},
			level2Route: {
					default: ''
			},
	},
	methods:{
		level2Back(){
			this.$emit('level2Back');
		},
		route1(){
			if(this.btn1RouteParams){
				this.$router.push({name: this.btn1Route, params: { cu: this.btn1RouteParams }});
			}else{
				this.$router.push({name: this.btn1Route});
			}
		},
		route2(){
			if(this.btn2RouteParams){
				this.$router.push({name: this.btn2Route, params: { cu: this.btn2RouteParams }});
			}else{
				this.$router.push({name: this.btn2Route});
			}
		},
		route3(){
			if(this.btn3RouteParams){
				this.$router.push({name: this.btn3Route, params: { cu: this.btn3RouteParams }});
			}else{
				this.$router.push({name: this.btn3Route});
			}
		}
	},
	computed:{
		...mapGetters('auth',{
				currentUser: 'currentUser'
		}),
	}
}
</script>
