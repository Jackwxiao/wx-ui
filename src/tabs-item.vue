<template>
    <div class="tabs-item" @click="xxx" :class="classes">
        <slot></slot>
    </div>

</template>
<script>
    export default {
        name: 'GuLuItem',
        data(){
          return {
              active: false,
          }
        },
        inject:['eventBus'],
        created(){
            this.eventBus.$on('update:selected',(name)=>{
                this.active = name === this.name;
            })
        },
        props: {
            disabled: {
                type: Boolean,
                default: false
                },
            name: {
                type: String|Number,
                required: true
                }
            },
        methods: {
            xxx(){
                this.eventBus.$emit('update:selected', this.name)
            },
        },
        computed:{
            classes(){
                return{
                   active: this.active
                }
            }
        }
    }
</script>
<style scoped lang="scss">
    .tabs-item{
        flex-shrink: 0;
        padding: 0 2em;
        cursor: pointer;
        border: 1px solid green;
        height: 100%;
        display: flex;
        align-items: center;
        > .active{
            background: red;
        }
    }
</style>