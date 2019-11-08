<template>
        <button class="g-button" :class="{[`icon-${iconPosition}`]: true}">
            <svg v-if="icon" class="icon">
                <use :xlink:href=`#i-${icon}`></use>
            </svg>
            <div class="content"><slot></slot></div>
<!--            slot内不能加class-->
        </button>
</template>

<script>
    export default {
        //props: ['icon', 'iconPosition']
        props:{
            icon: {},
            iconPosition:{
                type: String,
                default: 'left'
            }
        }
    }
</script>

<style lang="scss">
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