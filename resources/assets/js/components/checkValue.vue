<template>
    <div style="display:inline">
      <span v-if="value" style="display:inline">
        <span v-if="valueType == 'trim'" style="display:inline">
          <truncate action-class="badge bg-blue" clamp="selengkapnya >" :length="trimLength" less="< kembali" :text="frontText + ' ' +value" style="display:inline;"></truncate>
        </span>
        <span v-else-if="valueType == 'modal'" style="display:inline">
          <button class="btn btn-light" @click.prevent="modalOpen()">
              Lihat
          </button>
        </span>
        <span v-else-if="valueType == 'currency'" style="display:inline">{{frontText}} {{ value | currency('',0,{ thousandsSeparator: '.'}) }}</span>
        <span v-else-if="valueType == 'percentage'" style="display:inline">{{frontText}} {{ value | percentage(2) }}</span>
        <span v-else style="display:inline">{{frontText}} {{value}}</span>
      </span>
      <span v-else style="display:inline">{{frontText}} {{empty}}</span>

      <!-- modal -->
      <app-modal :show="modalShow" :state="modalState" :title="modalTitle" :button="modalButton" :content="modalContent" @tutup="modalTutup" @backgroundClick="modalTutup">
      </app-modal>
      
    </div>
</template>

<script type="text/javascript">
  import truncate from 'vue-truncate-collapsed';
  import appModal from './modal';

  export default {
    components: {
      truncate,
      appModal,
		},
    props: {
      value: {
        default: ''
      },
      frontText:{
        default: ''
      },
      trimLength:{
        default: 50
      },
      valueType:{
        default: 'trim'
      },
      empty:{
        default: '-'
      }
    },
    data(){
      return {
        modalShow: false,
				modalState: '',
				modalTitle: '',
				modalContent: '',
				modalButton: '',
      }
    },
    methods: {
      modalOpen() {
        this.modalShow = true;
        this.modalState = 'content-tutup';
        this.modalContent = this.value;
				this.modalButton = 'Tutup';
      },
      modalTutup() {
				this.modalShow = false;
			},
      strip(html)
      {
        var tmp = document.createElement("DIV");
        tmp.innerHTML = html;
        return tmp.textContent || tmp.innerText || "";
      }
    }
  }
</script>