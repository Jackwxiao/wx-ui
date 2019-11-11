<template>
    <div class="row" :style="rowStyle" :class="rowClass">
        <slot></slot>
    </div>
</template>
<script>
    export default {
        name: 'GuLuRow',
        props:{
            gutter: {
                type:[Number,String]
            }
        },
        computed:{
          rowStyle(){
              let {gutter} = this
              return{
                  marginLeft: -gutter/2+'px',
                  marginRight: -gutter/2+'px'
              }
          },
            rowClass(){
              let {align} = this
                return[align && `align-${align}`]
            }
        },
        mounted: function () {
            this.$children.forEach((vm) => {
                vm.gutter = this.gutter
            })
        }
    }
</script>
<style lang="scss" scoped>
    .row{display: flex;
        &align-right {
            justify-content: flex-start;
        }
        &align-left {
            justify-content: flex-end;
        }
        &slign-center{
            justify-content: center;
        }
    }


</style>