<template>
    <transition 
        enter-active-class="animated shake"
    >
       <div class="alert bg-danger" :class="{'bg-danger':isError, 'bg-primary':isSuccess, 'bg-yellow':isWarning}" v-show="show">
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
        isError: {
            default: false
        },
        isSuccess: {
            default: false
        },
        isWarning: {
            default: false
        }
    }
}
</script>
