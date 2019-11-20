<template>
    <div class="sider" v-if="visible">
        <slot></slot>
        <button @click="visible=false">close</button>
    </div>

</template>
<script>
    export default {
        name: 'GuLuSider',
        data(){
            return{
                visible: true
            }
        }
    }
</script>
<style scoped lang="scss">
    .sider{
        position: relative;
        >button{
            position: absolute;
            top: 0;
            right: 0;
        }
    }
</style>