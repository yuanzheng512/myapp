import Vue from 'vue'
import VueRouter from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
Vue.use(VueRouter)

const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }
export default new VueRouter({
    routes: [{
            path: '/',
            name: 'HelloWorld',
            component: HelloWorld
        },
        {
            path: 'home',
            name: 'home',
            component: Foo
        },
        {
            path: 'about',
            name: 'about',
            component: Bar
        }
    ]
})