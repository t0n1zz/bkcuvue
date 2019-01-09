import Vue from 'vue';

// filters
Vue.filter('dateTime', function(value){
	if(value){
			return window.moment(value).format('DD-MM-YYYY') + '&nbsp; / &nbsp;'  + moment(value).format('kk:mm:ss');
	}else{
			return '-';
	}
});
Vue.filter('date', function(value){
	return window.moment(value).format('DD-MM-YYYY');
});
Vue.filter('time', function(value){
	return window.moment(value).format('kk:mm:ss');
});
Vue.filter('dateMonth', function(value){
	return window.moment(value).format('DD MMMM YYYY');
});
Vue.filter('month', function(value){
	return window.moment(value).format('MMMM');
});
Vue.filter('year', function(value){
	return window.moment(value).format('YYYY');
});
Vue.filter('relativeHour', function(value){
	return window.moment(value).fromNow();
});
Vue.filter('checkStatus', function(value){
	if (value > 0) {
			return '<span class="bg-orange-400 text-highlight"><i class="icon-check"></i></span>';
	} else {
			return '<span class="bg-teal-300 text-highlight"><i class="icon-cross3"></i></span>';
	}
});
Vue.filter('checkTingkatAktivis', function(value){
	if (value == 1) {
			return 'Pengurus';
	} else if(value == 2) {
			return 'Pengawas';
	}	else if(value == 3) {
			return 'Komite';
	} else if(value == 4) {
		return 'Penasihat';
	} else if(value == 5) {
		return 'Senior Manajer';
	} else if(value == 6) {
		return 'Manajer';
	} else if(value == 7) {
		return 'Supervisor';
	} else if(value == 8) {
		return 'Staf';
	} else if(value == 9) {
		return 'Kontrak';
	} else {
		return '-';
	}
});
Vue.filter('statusDiklat', function(value){
	if(value == 1){
		return '<span class="badge badge-info">MENUNGGU</span>';
	}else if(value == 2){
		return '<span class="badge badge-warning">PENDAFTARAN BUKA</span>';
	}else if(value == 3){
		return '<span class="badge badge-secondary">PENDAFTARAN TUTUP</span>';
	}else if(value == 4){
		return '<span class="badge badge-success"> BERJALAN</span>';
	}else if(value == 5){
		return '<span class="badge badge-primary"> TERLAKSANA</span>';
	}else if(value == 6){
		return '<span class="badge badge-danger"> BATAL</span>';
	}
});
Vue.filter('notificationIcon', function(value){
	if (value == 'Menambah laporancu' || value == 'Mengubah laporancu' || value == 'Menghapus laporancu') {
			return '<i class="icon-stats-bars2"></i>';
	} else if(value == 'Menambah diskusilaporan' || value == 'Menulis diskusilaporan' || value == 'Mengubah laporancu' || value == 'Menghapus laporancu') {
		return '<i class="icon-bubble2"></i>';
	}
});
Vue.filter('trimString', function(string){
	return string.replace(/<(?:.|\n)*?>/gm, '').replace(/\&nbsp;/g, '').replace(/\&ldquo;/g, '').substring(0, 150) +
				' [...]';
});
Vue.filter('percentage', function(value, decimals) {
	if(!value) {
			value = 0;
	}

	if(!decimals) {
			decimals = 0;
	}

	value = value * 100;
	value = Math.round(value * Math.pow(10, decimals)) / Math.pow(10, decimals);
	value = value + '%';
	return value;
});
Vue.filter('percentage2', function(value, decimals) {
	if(!value) {
			value = 0;
	}

	if(!decimals) {
			decimals = 0;
	}

	value = value * 100;
	value = Math.round(value * Math.pow(10, decimals)) / Math.pow(10, decimals);
	value = value;
	return value;
});
Vue.filter('round', function(value, decimals) {
	if(!value) {
		value = 0;
	}

	if(!decimals) {
		decimals = 0;
	}

	value = Math.round(value * Math.pow(10, decimals)) / Math.pow(10, decimals);
	return value;
});