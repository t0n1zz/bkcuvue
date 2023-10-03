<template>
    <div>
        <!-- Page header -->
        <page-header :title="title" :titleDesc="titleDesc" :titleIcon="titleIcon"></page-header>

        <!-- page container -->
        <div class="page-content pt-0">
            <div class="content-wrapper">
                <div class="content">

                    <!-- table data -->
                     <template>
            					<div class="card">
            						<div class="nav-tabs-responsive">
            							<ul class="nav nav-tabs nav-tabs-bottom flex-nowrap mb-0">
            								<li class="nav-item"><a href="#" class="nav-link" :class="{ 'active': tabName == 'aktif' }" @click.prevent="changeTab('aktif')"><i class="icon-check mr-2"></i>
            											Aktif
            								</a></li>
            								<li class="nav-item"><a href="#" class="nav-link" :class="{ 'active': tabName == 'inaktif' }" @click.prevent="changeTab('inaktif')"><i class="icon-x mr-2"></i>
            											Tidak Aktif
            								</a></li>
            							</ul>
            						</div>
            					</div>
            		</template>
                    <table-qr-non-aktif v-if ="tabName=='inaktif'" :title="title" :kelas="kelas"></table-qr-non-aktif>
                    <table-qr-aktif  v-if="tabName == 'aktif'" :title="title" :kelas="'abcd'"></table-qr-aktif>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import pageHeader from "../../components/pageHeader.vue";
import message from "../../components/message.vue";
import selectData from "../../components/selectCuTp.vue";
import tableQrNonAktif from "./tableQrNonAktif.vue";
import tableQrAktif from "./tableQrAktif.vue";

export default {
    components: {
        pageHeader,
        message,
        selectData,
        tableQrNonAktif,
        tableQrAktif
    },
    data () {
        return {
            title: 'QR Presensi',
            kelas: 'qrpresensi',
            titleDesc: 'Mengelola QR Presensi',
            titleIcon: 'icon-collaboration',
            selectCuPath: 'kelolaqr',
            tabName:'aktif'
        }
    },
    created () {
        this.checkUser('index_qr', this.$route.params.cu);
        // this.checkUser('index_monitoring', this.$route.params.cu);
    },
    methods: {
        checkUser (permission, id_cu) {
            if (this.currentUser) {
                if (!this.currentUser.can || !this.currentUser.can[permission]) {
                    this.$router.push('/notFound');
                }
                if (!id_cu || this.currentUser.id_cu) {
                    if (this.currentUser.id_cu != 0 && this.currentUser.id_cu != id_cu) {
                        this.$router.push('/notFound');
                    }
                }
            }
        },
        changeTab (value) { 
            this.tabName = value
        }
    },
    
    computed: {
        ...mapGetters('auth', {
            currentUser: 'currentUser'
        }),
    }
}
</script>