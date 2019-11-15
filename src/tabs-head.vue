<template>
    <div class="tabs-head">
        <slot></slot>
        <div class="line" ref="line"></div>
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
            this.eventBus.$on('update:selected',(item,vm)=>{
                console.log(item)
            })
        },
        props:{

        },

    }
</script>
<style scoped lang="scss">
    $tab-height: 40px;
    $blue: blue;
    .tabs-head{
        position: relative;
        display: flex;
        height: $tab-height;
        justify-content: flex-start;
        > .line{
            position: absolute;
            bottom: 0;
            border-bottom: 10px solid $blue;
            width: 100px;
        }
        > .action-wrapper{
            margin-left: auto;
        }
    }
</style>