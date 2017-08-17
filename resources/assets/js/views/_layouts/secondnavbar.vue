<template>
<div class="navbar navbar-default" id="navbar-second">
	<ul class="nav navbar-nav no-border visible-xs-block">
		<li><a class="text-center collapsed" data-toggle="collapse" data-target="#navbar-second-toggle"><i class="icon-menu7"></i></a></li>
	</ul>

	<div class="navbar-collapse collapse" id="navbar-second-toggle">
		<ul class="nav navbar-nav">
			<li><router-link to="/"><i class="icon-display4 position-left"></i> Dashboard</router-link></li>

			<li class="dropdown">
				<a href="#" class="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown">
					<i class="icon-earth"></i> Website <span class="caret"></span>
				</a>
				<ul class="dropdown-menu width-200">
					<li><a href="layout_sidebar_sticky.html"><i class="icon-plus22"></i> Tambah Artikel</a></li>
					<li class="divider"></li>
					<li><router-link to="/artikel"><i class="icon-magazine"></i> Artikel</router-link></li>
				</ul>
			</li>
		</ul>
	</div>
</div>
</template>

<script type="text/javascript">
	export default{
		created(){
		},
		methods:{

		},
		data(){
			return{
			}
		}
	}
</script>