import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import ButtonGroup from './button-group'
import Input from './input'

Vue.component('g-button', Button)
Vue.component( 'g-icon', Icon)
Vue.component( 'g-button-group', ButtonGroup)
Vue.component('g-input', Input)

new Vue({
    el: '#app',
    data: {
        loading1: false,
        loading2: false,
        loading3: false
    }
})


import chai from 'chai'
import spies from 'chai-spies'
chai.use(spies)
const expect = chai.expect

try{
    // 单元测试

    {
        const Constructor = Vue.extend(Button)
        const vm = new Constructor({
            propsData: {
                icon: 'settings'
            }
        })
        vm.$mount()
        let useElement = vm.$el.querySelector('use')
        expect(useElement.getAttribute('xlink:href')).to.equal('#i-settings')
        vm.$el.remove()
        vm.$destroy()
    }
    {
        const Constructor = Vue.extend(Button)
        const vm = new Constructor({
            propsData: {
                icon: 'settings',
                loading: true
            }
        })
        vm.$mount()
        let useElement = vm.$el.querySelector('use')
        expect(useElement.getAttribute('xlink:href')).to.equal('#i-loading')
        vm.$el.remove()
        vm.$destroy()
    }
    {
        const div = document.createElement('div')
        document.body.appendChild(div)
        const Constructor = Vue.extend(Button)
        const vm = new Constructor({
            propsData: {
                icon: 'settings'
            }
        })
        vm.$mount(div)
        let svg = vm.$el.querySelector('svg')
        let {order} = window.getComputedStyle(svg)
        expect(order).to.equal('1')
        vm.$el.remove()
        vm.$destroy()
    }
    {
        const div = document.createElement('div')
        document.body.appendChild(div)
        const Constructor = Vue.extend(Button)
        const vm = new Constructor({
            propsData: {
                icon: 'settings',
                iconPosition: 'right'
            }
        })
        vm.$mount(div)
        let svg = vm.$el.querySelector('svg')
        let {order} = window.getComputedStyle(svg)
        expect(order).to.equal('2')
        vm.$el.remove()
        vm.$destroy()
    }
    {
        // mock
        const Constructor = Vue.extend(Button)
        const vm = new Constructor({
            propsData: {
                icon: 'settings'
            }
        })
        vm.$mount()
        let spy = chai.spy(function(){});
        vm.$on('click',spy)
        // 期望这个函数被执行
        let button = vm.$el
        button.click()
        expect(spy).to.have.been.called()
    }
} catch (error) {
    window.errors = [error]
} finally {
    window.errors && window.errors.forEach((error)=>{
        console.log(error.message)
    })
}

