<template>
    <div class="tabs-head">
        <slot></slot>
        <div class="action-wrapper">
            <slot name="actions"></slot>
        </div>
    </div>

</template>
<script>
    export default {
        name: 'GuLuHead',
        inject:['eventBus'],
        created(){

        },
        props:{

        },

    }
</script>
<style scoped lang="scss">
    $tab-height: 40px;
    .tabs-head{
        display: flex;
        height: $tab-height;
        justify-content: flex-start;
        align-items: center;
        > .action-wrapper{
            margin-left: auto;
        }
    }
</style>