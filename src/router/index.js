import Vue from 'vue'
import VueRouter from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import User from '@/components/User'
Vue.use(VueRouter)

const Bar = { template: '<div>bar</div>' }
const UserDetail = { template: '<div>User Details</div>' }
export default new VueRouter({
    routes: [{
            path: '/',
            name: 'HelloWorld',
            component: HelloWorld,

        },
        {
            path: '*',
            redirect: '/'
        },
        {
            path: '/user',
            name: 'user',
            component: User,
            children: [
                { path: ':username', component: UserDetail }
            ]
        },
        {
            path: '/home',
            name: 'home',
            component: Home
        },
        {
            path: '/about',
            name: 'about',
            component: Bar
        }
    ]
})