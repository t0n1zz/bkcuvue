<template>
    <div>
      <button class="btn btn-link btn-block" data-toggle="collapse" :data-target="'.collap'+id" @click="btnClick">
        <i class="icon-arrow-down12" :class="{ 'rotate-180': clicked }"></i>
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