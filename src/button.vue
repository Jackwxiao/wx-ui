<template>
        <button class="g-button" :class="{[`icon-${iconPosition}`]: true}"
            @click="$emit('click')">
            <g-icon class="icon" v-if="icon && !loading" :name="icon"></g-icon>
            <g-icon name="loading" v-if="loading" class="loading icon"></g-icon>
            <div class="content">
                <slot></slot>
            </div>
<!--            slot内不能加class-->
        </button>
</template>

<script>
    import Icon from './icon'
    export default {
        components:{
            'g-icon': Icon
        },
        //props: ['icon', 'iconPosition']
        props:{
            icon: {},
            iconPosition:{
                type: String,
                default: 'left',
                validator(value){
                    return !(value !== 'left' && value !== 'right');//simple
                }
            },
            loading: {
                type: Boolean,
                default: false
            }
        }
    }
</script>

<style lang="scss">
    @keyframes spin { 0% { transform: rotate(0deg);} 100% { transform: rotate(360deg);} }
    .loading{ animation: spin 2s infinite linear;}
    .g-button {font-size: var(--font-size);height: var(--button-height);padding: 0 1em;
        border-radius: var(--border-radius);border: 1px solid var(--border-color);
        background: var(--button-bg);display: inline-flex;justify-content: center;align-items: center;
        vertical-align: middle;//解决对不齐的css问题
        &:hover {border-color: var(--border-color-hover); }
        &:active { background: var(--button-active-bg); }
        &:focus { outline: none; }
        > .content{ order: 2;}
        > .icon{ order: 1;margin-right: .1em;margin-left: 0;}
        &.icon-right{
            > .content{ order: 1; }
            > .icon{ order: 2;margin-left: .1em;margin-right: 0; }
        }
    }

</style>