<template>
    <div style="padding-top: 16px;">
        <h2>布局</h2>
        <p>
            <strong>预览</strong>
        </p>

        <g-layout style="color: white; overflow:hidden; margin-bottom:50px;">
            <g-sider style=" background:#F7DE1C; width:200px; color: #black;">
                sider
            </g-sider>
            <g-layout>
                <g-header style="height: 50px; background:#45B7B8;">
                    header
                </g-header>
                <g-content style="min-height: 100px; background:#706381;">
                    content
                </g-content>
                <g-footer style="height: 50px; background:#2C3848;">
                    footer
                </g-footer>
            </g-layout>
        </g-layout>
        <p>
            <strong>代码</strong>
        </p>
        <pre><code>{{content}}</code></pre>
    </div>
</template>
<style scoped>
    * {
        box-sizing: border-box;
    }
</style>
<script>
    import GLayout from '../../../src/layout/layout'
    import GHeader from '../../../src/layout/header'
    import GFooter from '../../../src/layout/footer'
    import GContent from '../../../src/layout/content'
    import GSider from '../../../src/layout/sider'

    export default {
        components: {GLayout, GHeader, GFooter, GContent, GSider},
        data () {
            return {
                content: `
          <g-layout style="color: white; overflow:hidden; margin-bottom:50px;">
            <g-sider style=" background:#F7DE1C; width:200px; color: black;">
              sider
            </g-sider>
            <g-layout>
              <g-header style="height: 50px; background:#45B7B8;">
                header
              </g-header>
              <g-content style="min-height: 100px; background:#706381;">
                content
              </g-content>
              <g-footer style="height: 50px; background:#2C3848;">
                footer
              </g-footer>
            </g-layout>
          </g-layout>
      `.replace(/^ {8}/gm, '').trim()
            }
        }
    }
</script>