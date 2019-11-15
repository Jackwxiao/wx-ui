<template>
    <div class="tabs-pane" :class="classes" v-if="active">
        <slot></slot>
    </div>

</template>
<script>
    export default {
        name: 'GuLuPane',
        props:{
            name: {
                type: String|Number,
                required: true
            }
        },
        data(){
            return{
                active: false,
            }
        },
        inject:['eventBus'],
        created(){
            this.eventBus.$on('update:selected', (name)=>{
                if (name===this.name){
                    this.active = true
                }else{
                    this.active = false
                }
            })
        },
        computed:{
            classes(){
                return{
                    active: this.active
                }
            }
        },

    }
</script>
<style scoped lang="scss">
    .tabs-pane{
        &.active {
            padding: 1em 0;
        }
    }
</style>