<template>
    <div>
        <!-- Page header -->
        <page-header :title="title" :titleDesc="titleDesc" :titleIcon="titleIcon"></page-header>

        <!-- page container -->
        <div class="page-content pt-0">
            <div class="content-wrapper">
                <div class="content">
                    <div v-if="permission==false">
                        <h1 style="font-weight: 700;">TIDAK DAPAT MEMBACA LOKASI</h1>
                        <ul>
                            <li>Lakukan Reload/Refresh Halaman</li>
                            <li>Kemudian Izinkan Permintaan Pembacaan Lokasi</li>
                            <li>Jika Tidak muncul Permintaan Izin Pembacaan Lokasi, Clear Cache Browser Anda</li>
                            <li>Kemudian Lakukan Login Ulang, dan Izinkan pembacaan Lokasi</li>
                        </ul>
                    </div>
                    <div v-if="modalShow==false" class="text-center" style="font-weight: bolder; font-size: 50px;"> 
                        {{ pesan }}
                    </div>
                </div>
            </div>
        </div>
    	<app-modal :show="modalShow" :state="modalState" :title="modalTitle" :content="modalContent" :size="modalSize" :color="modalColor"
    			 @batal="modalTutup" @tutup="modalTutup" @confirmOk="modalConfirmOk" @successOk="modalTutup" @failOk="modalTutup"
    			 @backgroundClick="modalBackgroundClick">
    		<template slot="modal-title">
    			{{ modalTitle }}
    		</template>
    		<template slot="modal-body1">
    			<form-alasan :title="judul" :id_qr="this.$route.params.id_qr" @tutup="modalTutup" @kembali="kembali"></form-alasan>
    		</template>
            <template slot="modal-body2">
                <pop-up-pilihan @kirim="keperluan"></pop-up-pilihan>
            </template>
    	</app-modal>
    </div>
    
</template>

<script>
import { mapGetters } from 'vuex';
import pageHeader from "../../components/pageHeader.vue";
import message from "../../components/message.vue";
import appModal from '../../components/modal';
import formAlasan from './formAlasan.vue';
import popUpPilihan from './popUpPilihan.vue';

export default {
    components: {
        pageHeader,
        message,
        appModal,
        formAlasan,
        popUpPilihan
    },
    data () {
        return {
            title: 'Absen',
            kelas: 'absen',
            titleIcon: 'icon-collaboration',
            permission: '',
            lat: '',
            lon: '',
            modalShow: false,
            modalState: '',
            modalTitle: '',
            modalColor: '',
            modalContent: '',
            modalSize: '',
            titleDesc: 'abcd',
            judul:''
        }
    },
    
    created () {
        this.myFunction()
    },

    watch: {
        absenStat (value) {
            this.modalShow = true;
            this.modalState = value;
            this.modalColor = '';
            let mess = this.pesan;
            if (value === "success") {
                this.modalTitle = mess;
            } else {
                this.modalTitle = 'Oops terjadi kesalahan :(';
                this.modalContent = this.pesan;
            }
        },

        statAbsen (value) { 
            if (value == 'terlambat') { 
                this.judul = 'TERLAMBAT'
                this.modalShow = true;
                this.modalSize = '';
                this.modalState = 'normal1';
                this.modalColor = 'bg-primary';
                this.modalTitle = 'Alasan Terlambat';
                this.modalSize = 'modal-md';
                this.formModalMode = 'create';
            }
        },

        konfirmasi (value) {
            if (value == 'pulang awal') {
                this.modalShow = true;
                this.modalSize = '';
                this.modalState = 'normal2';
                this.modalColor = 'bg-primary';
                this.modalTitle = 'Silahkan Pilih';
                this.modalSize = 'modal-md';
                this.formModalMode = 'create';
            } else if (value == 'selesai izin') { 
                this.modalState = 'confirm-tutup';
                this.modalColor = '';
                this.modalTitle = 'ISI PRESENSI SELESAI IZIN KELUAR KANTOR?';
                this.modalButton = 'IYA';
            }
        }
    },
    methods: {

        keperluan (value) {  
                this.judul = value
                this.modalShow = true;
                this.modalSize = '';
                this.modalState = 'normal1';
                this.modalColor = 'bg-primary';
                this.modalTitle = value;
                this.modalSize = 'modal-md';
                this.formModalMode = 'create';
        },

        kembali () { 
            // this.modalShow = true;
            this.modalSize = '';
            this.modalState = 'normal2';
            this.modalColor = 'bg-primary';
            this.modalTitle = 'Silahkan Pilih';
            this.modalSize = 'modal-md';
            this.formModalMode = 'create';
        },

        myFunction: function () {
            // Check if geolocation is supported by the browser
            if ("geolocation" in navigator) {
                // Check if geolocation permission is denied
                if (navigator.permissions && navigator.permissions.query) {
                    navigator.permissions.query({ name: "geolocation" }).then(function (permissionStatus) {
                        if (permissionStatus.state === "denied") {
                            // Prompt user to grant permission again
                            navigator.permissions.request({ name: "geolocation" }).then(function () {
                                // Permission granted, do something
                            });
                        } else {
                            // Permission already granted, do something
                        }
                    });
                } else {
                    // Permission API not supported, do something
                }
            } else {
                // Geolocation not supported, do something
            }

            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(this.showPosition);
            } else {
                this.error = "Geolocation is not supported.";
            }
        },

        modalTutup () {
            this.modalShow = false;
        },

        modalConfirmOk () {
            if (this.modalTitle == 'ABSEN PULANG?') {
                this.myFunction()
            } else if (this.modalTitle == 'ISI PRESENSI SELESAI IZIN KELUAR KANTOR?') { 
                 this.$store.dispatch('presensi/storeSelesaiIzin', this.currentUser.id);
            }
        },
        modalBackgroundClick () {
    
        },

        showPosition: function (position) {
            this.lat = position.coords.latitude;
            this.lon = position.coords.longitude;

            if (this.lat && this.lon) {
                this.permission = true;
                this.form.kode = this.$route.params.kode_absen
                this.form.id_qr = this.$route.params.id_qr
                this.form.id_user = this.currentUser.id
                this.form.id_aktivis = this.currentUser.aktivis.id
                this.form.name = this.currentUser.aktivis.name
                this.form.id_cu = this.currentUser.id_cu
                let lat = this.lat
                let lon = this.lon
                this.$store.dispatch('presensi/storePresensi', [this.form, lat, lon]);
            } else { 
                this.permission = false
            }
        },

        storeSelesaiIzin () {
            
        },
    },
    computed: {
        ...mapGetters('auth', {
            currentUser: 'currentUser'
        }),
        ...mapGetters('presensi', {
            itemData: 'dataS',
            itemDataStat: 'dataStatS',
            pesan: 'message',
            absenStat: 'absenStat',
            statAbsen: 'status',
            form: 'data',
            konfirmasi : 'confirm_pulang'
        })
    }
}
</script>