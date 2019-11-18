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
        name: 'GuLuButton',
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
    $font-size: 14px;
    $button-height: 32px;
    $button-bg: white;
    $button-active-bg: #eee;
    $border-radius: 4px;
    $color: #333;
    $border-color: #999;
    $border-color-hover: #666;
    @keyframes spin { 0% { transform: rotate(0deg);} 100% { transform: rotate(360deg);} }
    .loading{ animation: spin 2s infinite linear;}
    .g-button {font-size: $font-size;height: $button-height;padding: 0 1em;
        border-radius: $border-radius;border: 1px solid $border-color;
        background: $button-bg;display: inline-flex;justify-content: center;align-items: center;
        vertical-align: middle;//解决对不齐的css问题
        &:hover {border-color: $border-color-hover; }
        &:active { background: $button-active-bg; }
        &:focus { outline: none; }
        > .content{ order: 2;}
        > .icon{ order: 1;margin-right: .1em;margin-left: 0;}
        &.icon-right{
            > .content{ order: 1; }
            > .icon{ order: 2;margin-left: .1em;margin-right: 0; }
        }
    }

</style>