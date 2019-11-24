<template>
    <div style="padding-top: 16px;">
        <h2>基础按钮用法</h2>
        <p><strong>预览</strong></p>
        <g-button>默认按钮</g-button>
        <g-button icon="settings">设置按钮</g-button>
        <g-button :loading="true">加载中按钮</g-button>
        <g-button disabled>无法点击按钮</g-button>
        <p><strong>代码</strong></p>
        <pre><code>{{content}}</code></pre>
    </div>
</template>
<script>
    import GButton from '../../../src/button/button'

    export default {
        components: {GButton},
        data () {
            return {
                content:`<g-button>默认按钮</g-button>
<g-button icon="settings">设置按钮</g-button>
<g-buttone :loading="tru">加载中按钮</g-button>
<g-button disabled>无法点击按钮</g-button>
      `.replace(/^ {8}/gm, '').trim()
            }
        }
    }
</script>