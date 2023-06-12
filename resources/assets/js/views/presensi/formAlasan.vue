<template>
    <div>
        <form @submit.prevent="store()" data-vv-scope="form">
            <div class="col-md-12">
    			<div class="form-group">
                    <div>
                        <h5>Jenis :</h5>
                        <div class="text-center">
                            <select class="form-control" data-width="100%" v-model="form.jenis">
                                <option disabled="true" value="">PILIH JENIS ALASAN {{ title }}</option>
                                <option value="PRIBADI">PRIBADI</option>
        						<option value="URUSAN KANTOR">URUSAN KANTOR</option>
                            </select>
                        </div>
                    </div>
                    <div>
                        <h5>Alasan :</h5>
                        <div class="">
                            <textarea name="" v-model="form.alasan"  rows="10"></textarea>
                        </div>
                    </div>
                    <div v-if="flagJenis" style="color: red;">Jenis Alasan Belum Dipilih</div>
                    <div v-if="flagAlasan" style="color: red;">Alasan Belum Diisi</div>
                    <div v-if="title=='TERLAMBAT'">
                        <div style="color: red;">PASTIKAN ANDA MENGISI ALASAN KETERLAMBATAN, JIKA TIDAK MAKA AKAN DIANGGAP TERLAMBAT TANPA ALASAN,</div>
                        <div style="color: red;">ANDA DAPAT MENGISI ALASAN KETERLAMBATAN PADA MENU ORGANISASI ->ABSEN ->DAFTAR KETERLAMBATAN</div>
                    </div>
                    <div v-else-if="title=='PULANG AWAL'">
                        <div style="color: red;">PASTIKAN ANDA MENGISI ALASAN PULANG AWAL DENGAN JELAS, JIKA TIDAK MAKA AKAN DIANGGAP TANPA ALASAN</div>
                    </div>
    			</div>
                <div class="text-center">
                <button v-if="title!='TERLAMBAT'"  class="btn btn-warning" @click.prevent="kembali">
                    <i class=""></i>Kembali</button>
                    
                <button :disabled="form.alasan=='' || form.alasan.length <5" type="submit" value="submit" class="btn btn-primary">
                  <i class="icon-floppy-disk"></i>Simpan</button>

              </div>  
    		</div>
        </form>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default { 
    data() {
        return {
            value: 'Kegiatan',
            options: ['Kegiatan', 'Masuk Kantor'],
            tp_id: '',
            cu_id: '',
            flagJenis: false,
            flagAlasan: false
        }
    },

      props: {
        id_qr: {
            default: ''
        },
         title: {
            
        }
    },

    created() {
        this.$store.dispatch('presensi/createFormTerlambat');
       
    },

    methods: {
        tutup () {
            this.$emit('tutup');
        },

        store () { 

            this.form.id_user = this.currentUser.id
            this.form.id_absen = this.id_qr
            this.form.id_aktivis = this.currentUser.id_aktivis
            if (!this.form.alasan) {
                this.flagAlasan = true
            } else { 
                this.flagAlasan = false
            }
            if (!this.form.jenis) {
                this.flagJenis = true
            } else { 
                this.flagJenis = false
            }
            if (!this.flagAlasan && !this.flagJenis) { 
                this.$store.dispatch('presensi/storePresensiLain', [this.title, this.form]);
            }
            
        },

        kembali () {
            this.$emit("kembali")
        }
    },

    computed: {
        ...mapGetters('auth', {
            currentUser: 'currentUser'
        }),

        ...mapGetters('presensi', {
            form : 'terlambat'
        }),
    }
}
</script>

<style>
textarea{
    height: 100%;
    width: 100%;
   -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
    -moz-box-sizing: border-box;    /* Firefox, other Gecko */
    box-sizing: border-box;         /* Opera/IE 8+ */
}
</style>