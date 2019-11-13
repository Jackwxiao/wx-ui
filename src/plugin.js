import Toast from './toast'

export default {
    install(Vue,options){
        Vue.prototype.$toast = function (message) {
            //动态创建实例（组件）
            let Constructor = Vue.extend(Toast)
            let toast = new Constructor()
            toast.$slots.default = [message]
            toast.$mount()
            document.body.appendChild(toast.$el)
        }
    }
}