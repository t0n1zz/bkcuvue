<template>
  <div>
    <!-- message -->
    <message
      v-if="errors.any('formStatus') && submited"
      :title="'Oops, terjadi kesalahan'"
      :errorItem="errors.items"
    >
    </message>

    <form @submit.prevent="save" data-vv-scope="formStatus">
      <h5>Selamat Datang di {{ item.name }}</h5>
      <div class="card card-body">
        Disini anda dapat mengakses materi untuk kegiatan ini serta anda dapat
        melakukan interaksi terhadap kegiatan ini seperti memberikan keputusan
        (apabila diminta), mengajukan pertanyaan dan mengerjakan tugas (apabila
        diminta).
      </div>

      <div class="card">
        <div class="card-header bg-light">
          Sebelum memulai mari pastikan bahwa data dibawah adalah benar data
          anda:
        </div>
        <div class="card-body">
          <div class="media mt-0 mb-0">
            <div class="mr-3 mb-2 mb-0">
              <div class="card-img-actions">
                <img
                  :src="
                    '/images/aktivis/' + currentUser.aktivis.gambar + 'n.jpg'
                  "
                  class="img-fluid img-preview img-rounded"
                  v-if="currentUser.aktivis && currentUser.aktivis.gambar"
                />
                <img
                  :src="'/images/no_image_man.jpg'"
                  class="img-fluid img-preview img-rounded"
                  v-else
                />
              </div>
            </div>
            <div class="media-body">
              <b>Nama:</b>
              {{ currentUser.aktivis ? currentUser.aktivis.name : "-" }}
              <br />
              <b>Tingkat:</b>
              {{
                currentUser.aktivis && currentUser.aktivis.pekerjaan_aktif
                  ? $options.filters.checkTingkatAktivis(
                      currentUser.aktivis.pekerjaan_aktif.tingkat
                    )
                  : ""
              }}
              <br />
              <b>Jabatan:</b>
              {{
                currentUser.aktivis && currentUser.aktivis.pekerjaan_aktif
                  ? currentUser.aktivis.pekerjaan_aktif.name
                  : ""
              }}
              <br />
              <b>Dari:</b>
              {{
                currentUser && currentUser.id_cu != 0
                  ? currentUser.cu.name
                  : "Puskocuina"
              }}
              <br />
            </div>
          </div>
        </div>
      </div>

      <checkbox
        :form="formStatus.status"
        :title="
          'Dengan ini saya setuju mengikuti ' +
          item.name +
          ' dan dianggap hadir dan terlibat didalam pelaksanaan kegiatan'
        "
        @check="
          formStatus.status != 0
            ? (formStatus.status = 0)
            : (formStatus.status = 1)
        "
      ></checkbox>
      <!-- divider -->
      <hr />

      <!-- tombol desktop-->
      <div class="text-center d-none d-md-block">
        <button class="btn btn-light" @click.prevent="tutup">
          <i class="icon-arrow-left13"></i> Kembali
        </button>

        <button
          type="submit"
          class="btn btn-primary"
          :disabled="formStatus.status == 0"
        >
          <i class="icon-arrow-right14"></i> Masuk
        </button>
      </div>

      <!-- tombol mobile-->
      <div class="d-block d-md-none">
        <button
          type="submit"
          class="btn btn-primary btn-block pb-2"
          :disabled="formStatus.status == 0"
        >
          <i class="icon-arrow-right14"></i> Masuk
        </button>

        <button class="btn btn-light btn-block pb-2" @click.prevent="tutup">
          <i class="icon-arror-left13"></i> Kembali
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import message from "../../components/message.vue";
import formInfo from "../../components/formInfo.vue";
import checkbox from "../../components/checkbox.vue";

export default {
  props: ["kelas", "item", "state"],
  components: {
    formInfo,
    message,
    checkbox,
  },
  data() {
    return {
      title: "",
      formStatus: {
        status: 0,
      },
      submited: false,
    };
  },
  created() {},
  watch: {},
  methods: {
    save() {
      this.$validator.validateAll("formStatus").then((result) => {
        if (this.state == "pesertaTerdaftar") {
          this.$store.dispatch(this.kelas + "/updatePesertaHadir", [
            this.item.id,
            this.currentUser.id_aktivis,
          ]);
        } else {
          this.$store.dispatch(this.kelas + "/updatePanitiaHadir", [
            this.item.id,
            this.currentUser.id_aktivis,
          ]);
        }
      });
    },
    tutup() {
      this.$router.push({ name: "dashboard" });
    },
  },
  computed: {
    ...mapGetters("auth", {
      currentUser: "currentUser",
    }),
  },
};
</script>