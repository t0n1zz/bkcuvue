<template>
	<div class="kesimpulan-card">
	  <h2>Kesimpulan</h2>
	  <div class="card-content">
		<div class="card-item">
		  <h3>Persentase Tercapai</h3>
		  <p>{{ presentaseTercapai }}%</p>
		</div>
		<div class="card-item">
		  <h3>Persentase Tidak Tercapai</h3>
		  <p>{{ presentaseTidakTercapai }}%</p>
		</div>
		<div :class="['card-item', kategoriPencapaianClass]">
		  <h3>Kategori Pencapaian</h3>
		  <p>{{ kategoriPencapaian }}</p>
		</div>
		<div class="card-item">
		  <h3>Jumlah Tercapai</h3>
		  <p>{{ jumlahTercapai }}</p>
		</div>
		<div class="card-item">
		  <h3>Jumlah Tidak Tercapai</h3>
		  <p>{{ jumlahTidakTercapai }}</p>
		</div>
		<div class="card-item">
		  <h3>Jumlah Rekomendasi</h3>
		  <p>{{ jumlahRekomendasi }}</p>
		</div>
	  </div>
	</div>
  </template>
  
  <script>
  export default {
	props:['jumlahRekomendasi',
	  'jumlahTercapai',
	  'jumlahTidakTercapai',
	  'presentaseTercapai',
	  'presentaseTidakTercapai',
	  'kategoriPencapaian'],
	data() {
	  return {
		
	  }
	},
	computed: {
	  kategoriPencapaianClass() {
		if (this.presentaseTercapai >= 0 && this.presentaseTercapai <= 20.99) {
		  return 'bg-red';
		} else if (this.presentaseTercapai >= 21 && this.presentaseTercapai <= 40.99) {
		  return 'bg-yellow';
		} else if (this.presentaseTercapai >= 41 && this.presentaseTercapai <= 60.99) {
		  return 'bg-orange';
		} else if (this.presentaseTercapai >= 61 && this.presentaseTercapai <= 80.99) {
		  return 'bg-green';
		} else if (this.presentaseTercapai >= 81 && this.presentaseTercapai <= 100) {
		  return 'bg-blue';
		}
		return '';
	  }
	}
  }
  </script>
  
  <style scoped>
  .kesimpulan-card {
	border: 1px solid #ccc;
	border-radius: 12px;
	padding: 24px;
	margin: 16px 0;
	width: 100%;
	box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
	background-color: #f9f9f9;
  }
  
  .kesimpulan-card h2 {
	text-align: center;
	margin-bottom: 24px;
	font-size: 1.8em;
	color: #333;
  }
  
  .card-content {
	display: flex;
	justify-content: space-around;
	flex-wrap: wrap;
  }
  
  .card-item {
	flex: 1 1 30%;
	margin: 12px;
	text-align: center;
	background-color: #fff;
	border-radius: 8px;
	padding: 16px;
	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
	transition: background-color 0.2s;
  }
  
  .card-item h3 {
	font-size: 1.2em;
	margin-bottom: 8px;
	
  }
  
  .card-item p {
	font-size: 1em;
	margin: 0;
	
  }
  
  /* Background colors for Kategori Pencapaian */
  .bg-red {
	background-color: red;
	color: white;
  }
  
  .bg-yellow {
	background-color: yellow;
	color: black;
  }
  
  .bg-orange {
	background-color: orange;
	color: white;
  }
  
  .bg-green {
	background-color: green;
	color: white;
  }
  
  .bg-blue {
	background-color: blue;
	color: white;
  }
  </style>
  