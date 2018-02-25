<template>
	<div>

		<!-- select role -->
		<div class="form-group">
			<select name="id_role"
			data-width="100%" class="bootstrap-select">
				<option disabled value="">Silahkan pilih peran user</option>
			</select>
		</div>

		<!-- hak akses -->
		<div class="table-responsive">
			<table class="table table-borderless table-framed">
				<tbody>
					<tr v-for="akses in hakakses">
						<td class="bg-primary"><i :class="akses.icon"></i> {{ akses.name }}</td>
						<td v-for="tipe in akses.tipe">
							<label class="checkbox-inline">
								<input type="checkbox"> 
								<i :class="tipe.icon"></i> {{ tipe.name }}
							</label>
						</td>
					</tr>
				</tbody>
			</table>
		</div>

	</div>
</template>

<script>
	export default {
		props: {
			dataPeran: {}
		},
		data() {
			return {
				hakakses: [
				 	{
						name: 'Artikel',
						icon: 'icon-newspaper',
						tipe:[
							{
								name: 'Lihat',
								icon: 'icon-eye',
								key: 'artikelIndex'
							},
							{
								name: 'Tambah',
								icon: 'icon-plus3',
								key: 'artikelCreate'
							},
							{
								name: 'Ubah',
								icon: 'icon-pencil',
								key: 'artikelUpdate'
							},
							{
								name: 'Hapus',
								icon: 'icon-bin2',
								key: 'artikelDestroy'
							}
						]
					}
				]
			}
		},
		methods: {
			backgroundClick() {
				this.$emit('backgroundClick');
			},
		}
	}
</script>