<template>
    <div>
        <qrcode-vue v-if="qrValue" :value="qrValue" :size="'480'" :renderAs="'svg'" level="M" class="mt-3 text"></qrcode-vue>
    </div>
</template>


<script>
import QrcodeVue from 'qrcode.vue';
import { PusherAuth } from '../helpers/pusherAuth.js';
import {mapGetters} from 'vuex';
export default {
    components: {
        QrcodeVue,
    },

    data () {
        return {
            qrValue: '',
            kode :'',
        }
    },

    props: {
        id_qr: {
            default: 0
        },

        id_kegiatan: {
            default:0
        },

        id_user: {
            default :0
        }
    },

    created () {
        this.$store.dispatch('presensi/indexQR', this.id_qr);
    },

    mounted () {
        PusherAuth();
        window.Echo.private(`presensi.channel.` + this.currentUser.id)
            .listen('PresensiEvent', (e) => {
                this.qrValue = ' https://puskopcuina.org/admins/presensiPage/' + e.kode + '/' + this.id_qr;
                this.$emit('qrChanged', e.kode)
            });
    },

    watch: {
        qrStat (value) {
            if (value == 'success') { 
                this.kode = this.qr.kode_qr
                this.qrValue = '  https://puskopcuina.org/admins/presensiPage/' + this.kode + '/' + this.id_qr
            }
            this.$emit('qrChanged', this.kode)
        }
    },

    computed: {
        ...mapGetters('auth', {
            currentUser: 'currentUser'
        }),
        ...mapGetters('presensi', {
            qr: 'qr',
            qrStat:'qrStat'
        }),
    },
}
</script>