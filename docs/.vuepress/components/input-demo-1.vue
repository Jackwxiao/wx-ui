<template>
    <div style="padding-top: 16px;">
        <h2>简单用法</h2>
        <p>
            <strong>预览</strong>
        </p>
        <g-input value="hello word"></g-input>
        <g-input value="disabled" disabled></g-input>
        <g-input value="readonly" readonly></g-input>
        <p>
            <strong>代码</strong>
        </p>
        <pre><code>{{content}}</code></pre>
    </div>
</template>
<script>
    import GInput from '../../../src/input'

    export default {
        components: {GInput},
        data () {
            return {
                selected: '1',
                content:`
<g-input></g-input>
<g-input value="hello word"></g-input>
<g-input value="disabled" disabled></g-input>
<g-input value="readonly" readonly></g-input>
      `.replace(/^ {8}/gm, '').trim()
            }
        }
    }
</script>