const expect = chai.expect;
import Vue from 'vue'
import Input from '../src/input'

Vue.config.productionTip = false
Vue.config.devtools = false


describe('Input', () => {
    it('存在', () => {
        expect(Input).to.be.exist
    })
    describe('props', () => {
        const Constructor = Vue.extend(Input)
        it('接收 value', () => {
            const vm = new Constructor({
                propsData: {
                    value: '1234'
                }
            }).$mount()
            const inputElement = vm.$el.querySelector('input')
            expect(inputElement.value).to.equal('1234')
            vm.$destroy()
        })
        it('接收 disabled', () => {
            const vm = new Constructor({
                propsData: {
                    disabled: true
                }
            }).$mount()
            const inputElement = vm.$el.querySelector('input')
            expect(inputElement.disabled).to.equal(true)
            vm.$destroy()
        })
        it('接收 readonly', () => {
            const vm = new Constructor({
                propsData: {
                    readonly: true
                }
            }).$mount()
            const inputElement = vm.$el.querySelector('input')
            expect(inputElement.readOnly).to.equal(true)
            vm.$destroy()
        })
        it('接收 error', () => {
            const vm = new Constructor({
                propsData: {
                    error: '错了'
                }
            }).$mount()
            const useElement = vm.$el.querySelector('use')
            expect(useElement.getAttribute('xlink:href')).to.equal('#i-error')
            const errorMessage = vm.$el.querySelector('.errorMessage')
            expect(errorMessage.innerHTML).to.equal('错了')
            vm.$destroy()
        })
    })
    describe('事件', () => {
        const Constructor = Vue.extend(Input)
        it('支持 change/input/focus/blur 事件', () => {
            ['change','input','focus','blur'].forEach((eventName)=>{
                let vm = new Constructor({}).$mount()
                const callback = sinon.fake()
                vm.$on(eventName,callback)
                //触发 input 的change 事件
                let event = new Event(eventName)
                let inputElement = vm.$el.querySelector('input')
                inputElement.dispatchEvent(event)
                expect(callback).to.have.been.calledWith(event)
                vm.$destroy()
            })
            })
    })
})