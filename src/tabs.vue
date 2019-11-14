<template>
    <div class="tabs">
        <slot></slot>
    </div>

</template>
<script>
    import Vue from 'vue'
    export default {
        name: 'GuLuTabs',
        data(){
            return {
                eventBus:new Vue()
            }
        },
        provide(){
            return {
              eventBus: this.eventBus
            }
        },
        props:{
            selected:{
                type: String,
                required: true
            },
            direction:{
                type: String,
                default: 'horizontal',
                validator(value){
                    return ['horizontal','vertical'].indexOf(value) >= 0
                }
            }
        },
        created() {

        }
    }
</script>
<style scoped lang="scss">
    .tabs{

    }
</style>