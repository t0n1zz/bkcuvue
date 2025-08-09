import Vue from 'vue';

// filters
Vue.filter('uppercase', function(value){
	return value.charAt(0).toUpperCase() + value.slice(1);
});
Vue.filter('dateTime', function(value){
	if(value){
			return window.moment(value).format('DD-MM-YYYY') + '&nbsp; | &nbsp;'  + moment(value).format('kk:mm:ss');
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
	} else if(value == 10) {
		return 'Kolektor';
	} else if(value == 11) {
		return 'Kelompok Inti';
	} else if(value == 12) {
		return 'Supporting Unit';
	} else if(value == 13) {
		return 'Vendor sMartCU';
	} else if(value == 14) {
		return 'Magang';
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
		return '<span class="badge bg-orange-400"> TERLAKSANA</span>';
	}else if(value == 6){
		return '<span class="badge badge-danger"> BATAL</span>';
	}
});
Vue.filter('statusPeserta', function(value){
	if(value == 1){
		return '<span class="badge badge-info">MENUNGGU</span>';
	}else if(value == 2){
		return '<span class="badge badge-warning">TERDAFTAR</span>';
	}else if(value == 3){
		return '<span class="badge badge-secondary">TERDAFTAR</span>';
	}else if(value == 4){
		return '<span class="badge badge-success">SEDANG MENGIKUTI</span>';
	}else if(value == 5){
		return '<span class="badge bg-orange-400">SELESAI</span>';
	}else if(value == 6){
		return '<span class="badge badge-danger">BATAL</span>';
	}else if(value == 7){
		return '<span class="badge badge-danger">DITOLAK</span>';
	}
});
Vue.filter('kegiatanTipe', function(value){
	if(value == 'diklat_bkcu'){
		return 'Diklat PUSKOPCUINA';
	}else if(value == 'pertemuan_bkcu'){
		return 'Pertemuan PUSKOPCUINA';
	}else if(value == 'diklat_bkcu_internal'){
		return 'Diklat Internal PUSKOPCUINA';
	}else if(value == 'pertemuan_bkcu_internal'){
		return 'Pertemuan Internal PUSKOPCUINA';
	}else if(value == 'pertemuan_cu_internal'){
		return 'Pertemuan Internal CU';
	}else if(value == 'diklat_cu_internal'){
		return 'Diklat Internal CU';
	}else if(value == 'pertemuan_eksternal'){
		return 'Pertemuan Eksternal';
	}else if(value == 'diklat_eksternal'){
		return 'Diklat Eksternal';
	}
});
Vue.filter('tipeRekom', function(value){
	if(value == 1){
		return 'Per-Lembaga';
	}else if(value == 2){
		return 'Per-Peserta';
	}else if(value == 3){
		return 'PUSKOPCUINA';
	}
});
Vue.filter('statusJalinan', function(value){
	if(value == 1){
		return '<span class="badge badge-warning">CACAT</span>';
	}else if(value == 2){
		return '<span class="badge badge-danger">MENINGGAL</span>';
	}
});
Vue.filter('statusKlaimJalinan', function(value){
	if (value == 1) {
			return 'menunggu';
	} else if(value == 2) {
			return 'dokumen tidak lengkap';
	}	else if(value == 3) {
			return 'ditolak';
	} else if(value == 4) {
		return 'disetujui';
	} else if(value == 5) {
		return 'dicairkan';
	} else if(value == 6) {
		return 'selesai';
	} else if(value == 7) {
		return 'koreksi';
	} else {
		return 'verifikasi';
	}
});
Vue.filter('tipeProdukCu', function(value){
	if(value == 'Simpanan Pokok'){
		return '<span class="badge badge-info">Simpanan Pokok</span>';
	}else if(value == 'Simpanan Wajib'){
		return '<span class="badge badge-warning">Simpanan Wajib</span>';
	}else if(value == 'Simpanan Non Saham'){
		return '<span class="badge badge-secondary">Simpanan Non Saham</span>';
	}else if(value == 'Pinjaman Kapitalisasi'){
		return '<span class="badge badge-success"> Pinjaman Kapitalisasi</span>';
	}else if(value == 'Pinjaman Umum'){
		return '<span class="badge badge-primary"> Pinjaman Umum</span>';
	}else if(value == 'Pinjaman Produktif'){
		return '<span class="badge badge-green"> Pinjaman Produktif</span>';
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
	return string.replace(/<(?:.|\n)*?>/gm, '').replace(/\&nbsp;/g, '').replace(/\&ldquo;/g, '').substring(0, 300) + '...';
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
Vue.filter('age', function(dateString) {
	var today = new Date();
	var birthDate = new Date(dateString);
	var age = today.getFullYear() - birthDate.getFullYear();
	var m = today.getMonth() - birthDate.getMonth();
	if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) 
	{
			age--;
	}
	return age + ' thn' +  Math.abs(m) + ' bln ';
});
Vue.filter('ageDiff', function(date1, date2) {
	var today = new Date(date1);
	var birthDate = new Date(date2);
	var age = today.getFullYear() - birthDate.getFullYear();
	var m = today.getMonth() - birthDate.getMonth();
	if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) 
	{
			age--;
	}
	return age + ' thn' +  Math.abs(m) + ' bln ';
});

Vue.filter('statusJalinan', function(value){
	if(value == 0){
		return 'menunggu';
	}else if(value == 1){
		return 'dokumen tidak lengkap';
	}else if(value == 2){
		return 'ditolak';
	}else if(value == 3){
		return 'disetujui';
	}else if(value == 4){
		return 'dicairkan';
	}else if(value == 5){
		return 'selesai';
	}
});