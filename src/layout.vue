<template>
    <div class="layout" :class="layoutClass">
        <slot></slot>
    </div>

</template>
<script>
    export default {
        name: 'GuLuLayout',
        data(){
            return {
                layoutClass:{
                    hasSider: false
                }
            }
        },
        mounted() {
            this.$children.forEach((vm) => {
                if (vm.$options.name==='GuLuSider'){
                   this.layoutClass.hasSider = true
                }
            })
        }
    }
</script>
<style scoped lang="scss">
    .layout{
        flex-grow: 1;
        display: flex;
        flex-direction: column;
        &.hasSider{
            flex-direction: row;
        }
    }
</style>