<template>
    <transition 
        enter-active-class="animated shake"
    >
       <div class="alert bg-danger" :class="type" v-show="show">
            <button type="button" class="close" data-dismiss="alert">
                <span>&times;</span><span class="sr-only">Tutup</span>
            </button>
            <slot></slot>
        </div> 
    </transition>
</template>

<script type="text/javascript">
export default {
    props: {
        show: {
            default: true
        },
        type: {
            default: ''
        }
    }
}
</script>
