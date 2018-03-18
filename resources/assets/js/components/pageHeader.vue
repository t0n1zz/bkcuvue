<template>
    <div>
        <div class="page-header">
			<div class="page-header-content">
				<div class="page-title">
					<h4>
						<i class="position-left" :class="titleIcon"></i>
						<span class="text-semibold">{{ title }}</span> - {{ titleDesc }}</h4>
					<ul class="breadcrumb breadcrumb-caret position-right hidden-print" v-if="level === 1">
						<router-link :to="{ name:'dashboard' }" tag="li">
							<a>Dashboard</a>
						</router-link>
						<li class="active">{{ title }}</li>
					</ul>
                    <ul class="breadcrumb breadcrumb-caret position-right" v-else-if="level === 2">
                        <router-link :to="{ name:'dashboard' }" tag="li">
                            <a>Dashboard</a>
                        </router-link>
                        <router-link :to="{ name: level2Route }" tag="li">
                            <a>{{ level2Title }}</a>
                        </router-link>
                        <li class="active">{{ title }}</li>
                    </ul>
				</div>
				<div class="heading-elements hidden-print">
					<div class="heading-btn-group">
						<router-link :to="{ name: btn1Route }" class="btn btn-link btn-icon btn-float has-text" v-if="btn1Route && profile.can && profile.can[btn1Can]">
							<i class="text-primary" :class="btn1Icon"></i> <span>{{btn1Title}}</span>
						</router-link>
                        <router-link :to="{ name: btn2Route }" class="btn btn-link btn-icon btn-float has-text" v-if="btn2Route && profile.can && profile.can[btn2Can]">
							<i class="text-primary" :class="btn2Icon"></i> <span>{{btn2Title}}</span>
						</router-link>
                        <router-link :to="{ name: btn3Route }" class="btn btn-link btn-icon btn-float has-text" v-if="btn3Route && profile.can && profile.can[btn3Can]">
							<i class="text-primary" :class="btn3Icon"></i> <span>{{btn3Title}}</span>
						</router-link>
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
        btn1Route: {
            default: ''
        },
        btn1Icon: {
            default: ''
        },
        btn1Title: {
            default: ''
        },
        btn1Can: {
            default: ''
        },
        btn2Route: {
            default: ''
        },
        btn2Icon: {
            default: ''
        },
        btn2Title: {
            default: ''
        },
        btn2Can: {
            default: ''
        },
        btn3Route: {
            default: ''
        },
        btn3Icon: {
            default: ''
        },
        btn3Title: {
            default: ''
        },
        btn3Can: {
            default: ''
        },
    },
    computed:{
        ...mapGetters('user',{
            profile: 'profile',
            profileStat: 'profileStat'
        }),
    }
}
</script>
