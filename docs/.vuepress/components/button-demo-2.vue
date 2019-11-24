<template>
    <div style="padding-top: 16px;">
        <h2>组合按钮用法</h2>
        <p><strong>预览</strong></p>
        <g-button-group>
            <g-button>上一页</g-button>
            <g-button>...</g-button>
            <g-button>下一页</g-button>
        </g-button-group>
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
                content:`<g-button-group>
            <g-button>上一页</g-button>
            <g-button>...</g-button>
            <g-button>下一页</g-button>
</g-button-group>
      `.replace(/^ {8}/gm, '').trim()
            }
        }
    }
</script>