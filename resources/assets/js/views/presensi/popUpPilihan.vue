<template>
    <div class="col-md-12">
        <div class=" text-center">
            <button class="btn btn-primary" style="width: 100%;" @click.prevent="kirim('IZIN KELUAR')">
                Izin Keluar Kantor</button>
        </div>  
        <div class="text-center">
            <button class="btn btn-primary" style="width: 100%;margin-top: 20px;" @click.prevent="kirim('PULANG AWAL')">
                Pulang Awal</button>
        </div>
        <div class="text-center">
                <button class="btn btn-warning" style="width: 100%;margin-top: 20px;" @click.prevent="batal">
                    Batal</button>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        kirim (value) { 
             this.$emit("kirim", value)
        },
        batal () {
            this.$emit('tutup');
        }
    }
}

</script>