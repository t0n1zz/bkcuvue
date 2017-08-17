<template>
<div class="navbar navbar-inverse bg-primary">
	<div class="navbar-header">
		<a class="navbar-brand" href="index.html"><strong>SIMO</strong></a>

		<ul class="nav navbar-nav pull-right visible-xs-block">
			<li><a data-toggle="collapse" data-target="#navbar-mobile"><i class="icon-tree5"></i></a></li>
		</ul>
	</div>

	<div class="navbar-collapse collapse" id="navbar-mobile">
		<ul class="nav navbar-nav navbar-right">
			<li class="dropdown">
				<a href="#" class="dropdown-toggle" data-toggle="dropdown">
					<i class="icon-bell2"></i>
					<span class="visible-xs-inline-block position-right">Pemberitahuan</span>
					<span class="badge bg-warning-400">2</span>
				</a>
				
				<div class="dropdown-menu dropdown-content width-350">
					<div class="dropdown-content-heading">
						Messages
						<ul class="icons-list">
							<li><a href="#"><i class="icon-compose"></i></a></li>
						</ul>
					</div>

					<ul class="media-list dropdown-content-body">
						<li class="media">
							<div class="media-left">
								<img src="assets/images/placeholder.jpg" class="img-circle img-sm" alt="">
								<span class="badge bg-danger-400 media-badge">5</span>
							</div>

							<div class="media-body">
								<a href="#" class="media-heading">
									<span class="text-semibold">James Alexander</span>
									<span class="media-annotation pull-right">04:58</span>
								</a>

								<span class="text-muted">who knows, maybe that would be the best thing for me...</span>
							</div>
						</li>

						<li class="media">
							<div class="media-left">
								<img src="assets/images/placeholder.jpg" class="img-circle img-sm" alt="">
								<span class="badge bg-danger-400 media-badge">4</span>
							</div>

							<div class="media-body">
								<a href="#" class="media-heading">
									<span class="text-semibold">Margo Baker</span>
									<span class="media-annotation pull-right">12:16</span>
								</a>

								<span class="text-muted">That was something he was unable to do because...</span>
							</div>
						</li>

						<li class="media">
							<div class="media-left"><img src="assets/images/placeholder.jpg" class="img-circle img-sm" alt=""></div>
							<div class="media-body">
								<a href="#" class="media-heading">
									<span class="text-semibold">Jeremy Victorino</span>
									<span class="media-annotation pull-right">22:48</span>
								</a>

								<span class="text-muted">But that would be extremely strained and suspicious...</span>
							</div>
						</li>

						<li class="media">
							<div class="media-left"><img src="assets/images/placeholder.jpg" class="img-circle img-sm" alt=""></div>
							<div class="media-body">
								<a href="#" class="media-heading">
									<span class="text-semibold">Beatrix Diaz</span>
									<span class="media-annotation pull-right">Tue</span>
								</a>

								<span class="text-muted">What a strenuous career it is that I've chosen...</span>
							</div>
						</li>

						<li class="media">
							<div class="media-left"><img src="assets/images/placeholder.jpg" class="img-circle img-sm" alt=""></div>
							<div class="media-body">
								<a href="#" class="media-heading">
									<span class="text-semibold">Richard Vango</span>
									<span class="media-annotation pull-right">Mon</span>
								</a>
								
								<span class="text-muted">Other travelling salesmen live a life of luxury...</span>
							</div>
						</li>
					</ul>

					<div class="dropdown-content-footer">
						<a href="#" data-popup="tooltip" title="All messages"><i class="icon-menu display-block"></i></a>
					</div>
				</div>
			</li>
			<li class="dropdown dropdown-user">
				<a class="dropdown-toggle" data-toggle="dropdown">
					<img src="/images/no_image_man.jpg" alt="">
					<span>{{name}}</span>
					<i class="caret"></i>
				</a>

				<ul class="dropdown-menu dropdown-menu-right">
					<li><a href="#"><i class="icon-user-plus"></i> Profile</a></li>
					<li class="divider"></li>
					<li><a href="#" @click.prevent="logout"><i class="icon-switch2"></i> Logout</a></li>
				</ul>
			</li>
		</ul>
	</div>
</div>
</template>

<script type="text/javascript">
	export default{
		created(){
			this.getUser();
		},
		methods:{
			getUser(){
				axios.get('/api/profile').then(response => {
					this.name = response.data.name;
				})
			},
			logout(){
				axios.post('/logout').then(response => {
					location.reload();
				}).catch(error => {
					location.reload();
				});
			}
		},
		data(){
			return{
				name:''
			}
		}
	}
</script>