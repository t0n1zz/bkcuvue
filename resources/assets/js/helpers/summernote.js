module.exports = {
    template: '<textarea :name="name"></textarea>',
    props: {
        model: {
            required: true,
        },
        name: {
            type: String,
            required: true,
        },
        config: {
            type: Object,
            default: {}
        },
        formStat:{
            default: ''
        }
    },
    mounted() {
        let vm = this;
        let config = this.config;
        config.callbacks = {
            onInit: function () {
                if(this.model == ''){
                    $(vm.$el).summernote("code",'');
                }else{
                    $(vm.$el).summernote("code",vm.model);
                }
            },
            onChange: function () {
                vm.$emit('change', $(vm.$el).summernote('code'));
            },
            onBlur: function () {
                vm.$emit('change', $(vm.$el).summernote('code'));
            }
        };
        $(vm.$el).summernote(config);
    },
    watch: {
        formStat(value){
            $(this.$el).summernote("code", this.model);
        } 
    }
}