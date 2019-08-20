// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from './router'
import store from "./store";
import { fetch, get } from "./axios/api/api.js";
import loading from './components/loading'
Vue.use(loading);
Vue.prototype.fetch = fetch;
Vue.prototype.get = get;
Vue.use(ElementUI);
process.env.NODE_ENV == "development" && require('./mock/mock.js')
    /* eslint-disable no-new */
Vue.config.productionTip = false
new Vue({
    el: '#app',
    store,
    router,
    components: { App },
    // render: h => h(App),
    template: '<App/>'
})