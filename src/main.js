// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false
import '../bower_components/bootstrap/dist/css/bootstrap.min.css';
import loading from './components/loading'
Vue.use(loading);
/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    // render: h => h(App),
    template: '<App/>'
})