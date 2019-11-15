<template>
    <div class="tabs-item" @click="onclick" :class="classes">
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
            onclick(){
                this.eventBus.$emit('update:selected', this.name, this)
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
    $blue: blue;
    .tabs-item{
        flex-shrink: 0;
        padding: 0 2em;
        cursor: pointer;
        height: 100%;
        display: flex;
        align-items: center;
        &.active{
            color: $blue;
            font-weight: bold;
        }
    }
</style>