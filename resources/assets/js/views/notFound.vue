<template>
	<div>
		<!-- page container -->
		<div class="page-container">
			<div class="page-content">
				<div class="content-wrapper">
					
					<!-- error title -->
					<div class="text-center content-group">
						<h1 class="error-title">404</h1>
						<h5>Oops, terjadi kesalahan. Halaman tidak ditemukan!</h5>
					</div>

					<!-- error content -->
					<div class="row">
					<div class="col-lg-4 col-lg-offset-4 col-sm-6 col-sm-offset-3">

							<div class="row">
								<div class="col-sm-12">
									<router-link :to="{ name: 'dashboard' }" class="btn btn-primary btn-block content-group" exact>
										<i class="icon-circle-left2 position-left"></i> ke dashboard
									</router-link>
								</div>
							</div>

					</div>
				</div>

				</div>
			</div>
		</div>
		<!-- page container -->
	</div>
</template>