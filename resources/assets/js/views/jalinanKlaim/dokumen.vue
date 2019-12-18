<template>
<div>

  <!-- surat -->
  <div class="card card-body d-flex align-items-center">
    <div ref="printable" id="printable">
      <img :src="'/images/jalinan/' + image + '.jpg'"  class="img-fluid"/>
    </div>
  </div>

  <!-- tombol desktop-->
  <div class="text-center d-none d-md-block">
    <button class="btn btn-light" @click.prevent="tutup">
      <i class="icon-cross"></i> Tutup</button>
    <button type="button" class="btn btn-light" @click.prevent="download()">
      <i class="icon-file-download"></i> Download</button>
    <button type="button" class="btn btn-light" @click.prevent="print()">
      <i class="icon-printer"></i> Print</button>
  </div> 

  <!-- tombol mobile-->
  <div class="d-block d-md-none">
    <button type="button" class="btn btn-light btn-block pb-2" @click.prevent="print()">
      <i class="icon-printer"></i> Print</button>
    <button type="button" class="btn btn-light btn-block pb-2" @click.prevent="download()">
      <i class="icon-file-download"></i> Download</button>
    <button class="btn btn-light btn-block pb-2" @click.prevent="tutup">
      <i class="icon-cross"></i> Tutup</button>
  </div>  
  
</div>  
</template>

<script type="text/javascript">
  export default {
    props: ['image','name'],
    methods: {
      print(){
        this.$htmlToPaper('printable');
      },
      async download() {
				const options = {
					type: 'dataURL'
				}

				this.output = await this.$html2canvas(this.$refs.printable, options);
				FileSaver.saveAs(this.output, this.name);
      },
      tutup(){
				this.$emit('tutup');
			}
    },
  }
</script>