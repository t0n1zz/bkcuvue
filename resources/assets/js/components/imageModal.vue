<template>

  <app-modal :show="modalShow" :state="modalState" :title="modalTitle" :content="modalContent" :color="modalColor" @batal="modalTutup" @tutup="modalTutup" @successOk="modalTutup" @failOk="modalTutup"  @backgroundClick="modalBackgroundClick">
	</app-modal>

</template>

<script>
  import appModal from '../../components/modal';

  export default {
    components: {
			appModal,
    },
    data() {
			return {
				modalShow: false,
				modalState: '',
				modalTitle: '',
				modalColor: '',
				modalContent: '',
			}
    },
    methods: {
      modalTutup() {
				this.modalShow = false;
			},
    }
  }
</script>
