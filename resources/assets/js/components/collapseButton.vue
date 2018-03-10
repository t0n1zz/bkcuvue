<template>
    <div>
      <button class="btn btn-link btn-block" data-toggle="collapse" :data-target="'.collap'+id" @click="btnClick">
        <span v-if="clicked">
          <i class="icon-arrow-up12"></i> Kembali <i class="icon-arrow-up12"></i>
        </span>
        <span v-else>
           <i class="icon-arrow-down12"></i> Selengkapnya <i class="icon-arrow-down12"></i>
        </span>
      </button>
    </div>
</template>

<script type="text/javascript">
    export default {
        props: {
            id: {
                default: ''
            }
        },
        data() {
          return{
            clicked: false,
          }
        },
        methods: {
          btnClick(){
            if(this.clicked){
              this.clicked = false;
            }else{
              this.clicked = true;
            }
          }
        }
    }
</script>