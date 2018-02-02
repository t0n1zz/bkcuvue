<template>
    <transition enter-active-class="animated shake">
        <div class="alert " :class="className" v-show="show">
            <button type="button" class="close" data-dismiss="alert">
                <span>&times;</span>
                <span class="sr-only">Tutup</span>
            </button>
            <slot></slot>
        </div>
    </transition>
</template>

<script type="text/javascript">
    export default {
        props: {
            className: {
                default: 'bg-danger'
            },
            show: {
                default: true
            }
        }
    }
</script>