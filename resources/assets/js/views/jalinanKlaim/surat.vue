<template>
<div>

  <!-- surat -->
  <div class="card card-body">
    <div id="printable">
      <div class="row" style="font-size: 18px;">
        <div class="col-12"><img :src="'/files/header.jpg'" class="img-fluid wmin-sm" /></div>
        <div class="col-12">
          <div class="row justify-content-between ml-3 mr-3">
            <div class="col-7">
              <dl class="row">
                <dt class="col-sm-2 mb-0" v-if="selectedItem.surat_nomor">Nomor</dt>
                <dd class="col-sm-10 mb-0" v-if="selectedItem.surat_nomor">: {{ selectedItem.surat_nomor }}</dd>

                <dt class="col-sm-2">Hal</dt>
                <dd class="col-sm-10">: <span v-if="tipe == 'cair'">Pencairan</span> 
                  <span v-else-if="tipe == 'kurang'">Kekurangan Berkas</span> 
                  <span v-else-if="tipe == 'tolak'">Penolakan</span> 
                  Klaim JALINAN</dd>
              </dl>
            </div>
            <div class="col-5 text-right">
              <ul class="list list-unstyled mb-0">
                <li>FM-JLN-18/Rev00/02.01.2019</li>
                <li class="mt-0" v-html="$options.filters.dateMonth(this.selectedItem.surat_tanggal)"></li>
              </ul>
            </div>
            <div class="col-12 mb-4"></div>
            <div class="col-12">
              <ul class="list list-unstyled mb-0">
                <li>Yth. General Manager / Manager {{ selectedItem.anggota_cu_cu ? 'CU ' + selectedItem.anggota_cu_cu.cu.name : '' }}</li>
                <li>u.p. Bagian JALINAN</li>
                <li>
                  {{ modelProvinces.name + ',' | capitalize }} 
                  {{ modelRegencies.name + ',' | capitalize }} 
                  {{ modelDistricts.name + ',' | capitalize }}  
                  {{ modelVillages.name | capitalize }}</li>
              </ul>
            </div>
            <div class="col-12 mt-3">
              <ul class="list list-unstyled mb-0">
                <li>Dengan hormat,</li>
              </ul>
            </div>
            <div class="col-12 mt-3 mb-2">

              <p style="text-indent: 30px; font-size: 18px;">Kami mengucapkan terima kasih atas kerjasama dan kepercayaannya telah menjadi anggota Puskopdit BKCU Kalimantan terutama dalam kegiatan pengembangan JALINAN semoga kerjasama ini semakin terjalin dengan baik dimasa yang akan datang</p>

              <p style="text-indent: 30px; font-size: 18px;" v-if="tipe == 'cair'">Melalui surat ini kami sampaikan bahwa klaim JALINAN Anggota CU Primer dibawah ini telah disetujui. Uang santunan tersebut telah dibukukan pada rekening SIKODIT tanggal <span v-html="$options.filters.dateMonth(this.selectedItem.tanggal_pencairan)"></span> Adapun daftar klaim tersebut diatas sebagai berikut :</p>

              <p style="text-indent: 30px; font-size: 18px;" v-else-if="tipe == 'kurang'">Berdasarkan analisis terhadap klaim JALINAN atas nama almarhum/almarhumah dibawah ini, maka kami masih memerlukan beberapa hal untuk dilengkapi oleh CU:</p>

              <p style="text-indent: 30px; font-size: 18px;" v-else-if="tipe == 'tolak'">Kami telah melakukan analisis terhadap klaim JALINAN atas nama almarhum/almarhumah dibawah ini, dan kami menyatakan menolak permohonan klaim yang dimaksud karena alasan sebagai berikut:</p>

              <div class="table-responsive" v-if="tipe == 'cair'">
                <table class="table table-bordered table-sm">
                  <thead>
                    <tr>
                      <th rowspan="2" class="text-center" style="vertical-align: middle; border: 1px solid black;">NAMA</th>
                      <th rowspan="2" class="text-center" style="vertical-align: middle; border: 1px solid black;">NO. BA</th>
                      <th colspan="3" class="text-center" style="border: 1px solid black;">PENCAIRAN</th>
                    </tr>
                    <tr>
                      <th class="text-center" style="border: 1px solid black;">TUNAS</th>
                      <th class="text-center" style="border: 1px solid black;">LINTANG</th>
                      <th class="text-center" style="border: 1px solid black;">JUMLAH</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td style="border: 1px solid black;">{{ selectedItem.anggota_cu ? selectedItem.anggota_cu.name : '' }}</td>
                      <td class="text-right" style="border: 1px solid black;">{{ selectedItem.anggota_cu_cu ? selectedItem.anggota_cu_cu.no_ba : '' }}</td>
                      <td class="text-right" style="border: 1px solid black;">
                        <check-value :value="selectedItem.tunas_disetujui" valueType="currency"></check-value>
                      </td>
                      <td class="text-right" style="border: 1px solid black;">
                        <check-value :value="selectedItem.lintang_disetujui" valueType="currency"></check-value>
                      </td>
                      <td class="text-right" style="border: 1px solid black;">
                        <check-value :value="(selectedItem.tunas_disetujui + selectedItem.lintang_disetujui)" valueType="currency"></check-value></td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div class="table-responsive" v-else-if="tipe == 'kurang'">
                <table class="table table-bordered table-sm">
                  <thead>
                    <tr>
                      <th class="text-center" style="border: 1px solid black;">NAMA</th>
                      <th class="text-center" style="border: 1px solid black;">NO. BA</th>
                      <th class="text-center" style="border: 1px solid black;">KETERANGAN</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td style="border: 1px solid black;">{{ selectedItem.anggota_cu ? selectedItem.anggota_cu.name : '' }}</td>
                      <td class="text-right" style="border: 1px solid black;">{{ selectedItem.anggota_cu_cu ? selectedItem.anggota_cu_cu.no_ba : '' }}</td>
                      <td style="border: 1px solid black;">{{ selectedItem.keterangan_klaim }}</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div class="table-responsive" v-else-if="tipe == 'tolak'">
                <table class="table table-bordered table-sm">
                  <thead>
                    <tr>
                      <th class="text-center" style="border: 1px solid black;">NAMA</th>
                      <th class="text-center" style="border: 1px solid black;">NO. BA</th>
                      <th class="text-center" style="border: 1px solid black;">KLAIM</th>
                      <th class="text-center" style="border: 1px solid black;">KETERANGAN</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td style="border: 1px solid black;">{{ selectedItem.anggota_cu ? selectedItem.anggota_cu.name : '' }}</td>
                      <td class="text-right" style="border: 1px solid black;">{{ selectedItem.anggota_cu_cu ? selectedItem.anggota_cu_cu.no_ba : '' }}</td>
                      <td class="text-center" style="border: 1px solid black;">
                        {{ selectedItem.tunas_diajukan ? 'TUNAS' : '' }}
                        {{ selectedItem.tunas_diajukan &&  selectedItem.lintang_diajukan? ' dan ' : '' }}
                        {{ selectedItem.lintang_diajukan ? 'LINTANG' : '' }}
                      </td>
                      <td style="border: 1px solid black;">{{ selectedItem.keterangan_klaim }}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <p class="mt-2" style="text-indent: 30px; font-size: 18px;" v-if="tipe == 'cair'">{{ selectedItem.keterangan_klaim }}</p>
              <p class="mt-2" style="text-indent: 30px; font-size: 18px;" v-else-if="tipe == 'kurang'">Mengacu pada ketentuan JALINAN Bab V pasal 20, maka berkas tersebut harus sudah kami terima 45 hari setelah surat pemberitahuan ini kami keluarkan</p>

              <p class="mt-2" style="text-indent: 30px; font-size: 18px;">Demikian surat ini disampaikan, atas perhatian dan kerjasama yang terjalin selama ini, kami ucapkan terima kasih</p>
            </div>
            <div class="col-6">
              <ul class="list list-unstyled mb-0">
                <li>Mengetahui</li>
                <li>General Manager,</li>
              </ul>

              <img :src="'/files/ttdErowin.png'" class="img-fluid wmin-sm" />

              <ul class="list list-unstyled mb-0">
                <li><b>Erowin, S. Hut.</b></li>
                <li>Nim.19781217 200408 1 011</li>
              </ul>
            </div>
            <div class="col-6 text-right">
              <ul class="list list-unstyled mb-0">
                <li>&nbsp;</li>
                <li>Manajer Pelayanan Keuangan,</li>
              </ul>

              <img :src="'/files/ttdKus.png'" class="img-fluid wmin-sm" />

              <ul class="list list-unstyled mb-0">
                <li><b>Dominikus Dakota H., S.Hut</b></li>
                <li>Nim.19790521 200408 1 010</li>
              </ul>
            </div>
          </div>
        </div>
        <!-- <div class="col-12 mt-3"><img :src="'/files/footer.jpg'" class="img-fluid wmin-sm" /></div> -->
      </div>
    </div>
  </div>

  <!-- tombol desktop-->
  <div class="text-center d-none d-md-block">
    <button class="btn btn-light" @click.prevent="tutup">
      <i class="icon-cross"></i> Tutup</button>

    <button type="button" class="btn btn-primary" @click.prevent="print()">
      <i class="icon-printer"></i> Print</button>
  </div>  

  <!-- tombol mobile-->
  <div class="d-block d-md-none">
    <button type="button" class="btn btn-primary btn-block pb-2" @click.prevent="print()">
      <i class="icon-printer"></i> Print</button>
      
    <button class="btn btn-light btn-block pb-2" @click.prevent="tutup">
      <i class="icon-cross"></i> Tutup</button>
  </div> 
  
</div>  
</template>

<script type="text/javascript">
  import { mapGetters } from "vuex";
  import checkValue from "../../components/checkValue.vue";
  export default {
    components: {
      checkValue,
    },
    props: ['selectedItem','tipe'],
    created(){
      this.$store.dispatch('provinces/edit',this.selectedItem.anggota_cu_cu.cu.id_provinces);
      this.$store.dispatch('regencies/edit',this.selectedItem.anggota_cu_cu.cu.id_regencies);
      this.$store.dispatch('districts/edit',this.selectedItem.anggota_cu_cu.cu.id_districts);
      this.$store.dispatch('villages/edit',this.selectedItem.anggota_cu_cu.cu.id_villages);
    },
    methods: {
      print(){
        this.$htmlToPaper('printable');
      },
      tutup(){
        this.$emit('tutup');
      },
    },
    filters: {
      capitalize: function (value){
        if (!value) return '';
        var splitValue = value.toLowerCase().split(' ');
        for (var i = 0; i < splitValue.length; i++) {
            splitValue[i] = splitValue[i].charAt(0).toUpperCase() + splitValue[i].substring(1);     
        }
        return splitValue.join(' '); 
      }
    },
    computed: {
      ...mapGetters('provinces',{
				modelProvinces: 'data',
				modelProvincesStat: 'dataStat'
			}),
			...mapGetters('regencies',{
				modelRegencies: 'data',
				modelRegenciesStat: 'dataStat'
			}),
			...mapGetters('districts',{
				modelDistricts: 'data',
				modelDistrictsStat: 'dataStat'
			}),
			...mapGetters('villages',{
				modelVillages: 'data',
				modelVillagesStat: 'dataStat'
			})
    }
  }
</script>