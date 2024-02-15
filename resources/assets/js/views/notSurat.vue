<template>
	<div>
		<!-- page container -->
			<div class="page-content">
				<div class="content-wrapper">
					
					<div class="content d-flex justify-content-center align-items-center">
						<div class="flex-fill">

							<!-- error title -->
							<div class="text-center mb-3">
								<h1 class="error-title">NOMOR SURAT BELUM DIATUR</h1>
								<h5>Silahkan Hubungi Pihak Yang Memiliki Akses</h5>
							</div>

							<!-- error content -->
							<div class="row">
								<div class="col-xl-4 offset-xl-4 col-md-8 offset-md-2">
									<router-link :to="{ name: 'dashboard' }" class="btn btn-primary btn-block">
										<i class="icon-screen3"></i> kembali ke halaman dashboard
									</router-link>
								</div>
								<div class="col-12">
									<br/><br/>
								</div>
							</div>
						</div>

					</div>
				</div>
			</div>
		<!-- page container -->
	</div>
</template>