<template>
    <div class="col-md-12">
        <h5>Pilih File :</h5>
        <input type="file" class="form-control" accept=".csv,.xlsx,.xls" ref="file" name="file"
            @change="upload($event.target)" />
            <a href="#" @click="download">Download Template Upload Data Off Bergilir</a><br>
        <div class="text-center" style="margin-top: 10px;">
            <button class="btn btn-warning" @click.prevent="batal">
                <i class="icon-x"></i>Batal</button>
            <button :disabled="!form.file" type="submit" value="submit" class="btn btn-primary" @click.prevent="storeFile">
                <i class="icon-floppy-disk"></i>Upload</button>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import pageHeader from "../../components/pageHeader.vue";
import message from "../../components/message.vue";
import selectData from "../../components/selectCuTp.vue";
import datePicker from '../../components/datePicker.vue';
import { toMulipartedForm } from '../../helpers/form';
import FileSaver from 'file-saver';


export default {
    components: {
        pageHeader,
        message,
        selectData,
        datePicker,
        FileSaver
    },
    data () {
        return {
        }
    },
    created () {

    },
    methods: {

        storeFile () {
            const formData = toMulipartedForm(this.form, this.$route.meta.mode);
            this.$store.dispatch('presensi/uploadOffBergilir', ['off', formData]);
        },

        batal () {
            this.$emit('tutup');
        },

        upload (event) {
            this.form.file = null
            this.form.file = event.files[0]
        },

        download () {
            axios.post('/api/downloadTemplate', { id_cu: this.currentUser.id_cu }, {
                responseType: 'blob'
            }).then((response) => {
                FileSaver.saveAs(response.data,'Template Upload Data Off Bergilir.xlsx')
                this.modalState = 'success';
                this.modalTitle = 'Berhasil Di Download'
            })
        }
    },

    computed: {
        ...mapGetters('auth', {
            currentUser: 'currentUser'
        }),
        ...mapGetters('presensi', {
            itemData: 'userS',
            itemDataStat: 'dataStatS',
            form: 'formFile'
        })
    }
}
</script>