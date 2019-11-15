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
                eventBus: new Vue()
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
        mounted() {
            this.$children.forEach((vm)=>{
                if (vm.$options.name === 'GuLuTabsHead') {
                    vm.$children.forEach((item)=>{
                        if(item.$options.name === 'GuLuTabsItem' && item.name === this.selected){
                            this.eventBus.$emit('update:selected', this.selected, item)
                        }
                    })
                }
            })
        }
    }
</script>
<style scoped lang="scss">
    .tabs{

    }
</style>