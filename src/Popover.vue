<template>
    <div class="popover" @click.stop="xxx">
        <div ref="contentWrapper" class="content-wrapper" v-if="visible">
            <slot name="content"></slot>
        </div>
        <span ref="triggerWrapper">
            <slot></slot>
        </span>

    </div>

</template>

<script>
    export default {
        name: "GuLuPopover",
        data(){
            return {visible: false}
        },
        mounted:{

        },
        methods:{
            xxx(){
                this.visible = !this.visible
                if (this.visible===true) {
                    this.$nextTick(()=>{
                        document.body.appendChild(this.$refs.contentWrapper)
                        let {width,height, top, left} = this.$refs.triggerWrapper.getBoundingClientRect()
                        this.$refs.contentWrapper.style.left = left + 'px'
                        this.$refs.contentWrapper.style.top = top + 'px'
                        let eventHandle = ()=>{
                            this.visible = false
                            document.removeEventListener('click', eventHandle)
                        }
                        document.addEventListener('click', eventHandle)
                    })
                }else{

                }
            }
        },


    }
</script>

<style scoped lang="scss">
    .popover{
        display: inline-block;
        vertical-align: top;
        position: relative;
    }
    .content-wrapper{
        position: absolute;
        border: 1px solid red;
        box-shadow: 0 0 3px rgba(0,0,0,0.5);
        transform: translateY(-100%);
    }
</style>