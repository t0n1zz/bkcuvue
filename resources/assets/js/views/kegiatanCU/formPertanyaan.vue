<template>
  <div>
    <!-- message -->
    <message
      v-if="errors.any('formPertanyaan') && submited"
      :title="'Oops, terjadi kesalahan'"
      :errorItem="errors.items"
    >
    </message>

    <form @submit.prevent="save" data-vv-scope="formPertanyaan">
      <!-- keterangan -->
      <div class="form-group">
        <!-- title -->
        <h5>Pertanyaan:</h5>

        <!-- textarea -->
        <ckeditor
          type="classic"
          :config="ckeditorNoImageConfig"
          v-model="formPertanyaan.keterangan"
        ></ckeditor>
      </div>

      <!-- divider -->
      <hr />

      <!-- tombol desktop-->
      <div class="text-center d-none d-md-block">
        <button class="btn btn-light" @click.prevent="tutup">
          <i class="icon-cross"></i> Tutup
        </button>

        <button type="submit" class="btn btn-primary">
          <i class="icon-floppy-disk"></i> Simpan
        </button>
      </div>

      <!-- tombol mobile-->
      <div class="d-block d-md-none">
        <button type="submit" class="btn btn-primary btn-block pb-2">
          <i class="icon-floppy-disk"></i> Simpan
        </button>

        <button class="btn btn-light btn-block pb-2" @click.prevent="tutup">
          <i class="icon-cross"></i> Tutup
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import message from "../../components/message.vue";
import formInfo from "../../components/formInfo.vue";

export default {
  props: ["mode", "selected", "kegiatan_id"],
  components: {
    formInfo,
    message,
  },
  data() {
    return {
      title: "",
      formPertanyaan: {
        kegiatan_id: "",
        id_user: "",
        id_cu: "",
        keterangan: "",
      },
      ckeditorNoImageConfig: {
        toolbar: {
          items: [
            "heading",
            "|",
            "bold",
            "italic",
            "link",
            "bulletedList",
            "numberedList",
            "blockQuote",
            "insertTable",
            "mediaEmbed",
            "undo",
            "redo",
          ],
        },
        table: {
          contentToolbar: ["tableColumn", "tableRow", "mergeTableCells"],
        },
      },
      submited: false,
    };
  },
  created() {
    if (this.mode == "edit") {
      this.formPertanyaan = Object.assign({}, this.selected);
    }
  },
  watch: {},
  methods: {
    save() {
      this.$validator.validateAll("formPertanyaan").then((result) => {
        if (result) {
          if (this.mode == "edit") {
            this.formPertanyaan.id_user = this.currentUser.id;
            this.$store.dispatch("kegiatanCU/updatePertanyaan", [
              this.formPertanyaan.id,
              this.formPertanyaan,
            ]);
          } else {
            this.formPertanyaan.id_user = this.currentUser.id;
            this.formPertanyaan.id_cu = this.currentUser.id_cu;
            this.$store.dispatch("kegiatanCU/storePertanyaan", [
              this.kegiatan_id,
              this.formPertanyaan,
            ]);
          }
        } else {
          this.submited = true;
        }
      });
    },
    tutup() {
      this.$emit("tutup");
    },
  },
  computed: {
    ...mapGetters("auth", {
      currentUser: "currentUser",
    }),
  },
};
</script>