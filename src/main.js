
// 导入Vue
import Vue from "../node_modules/vue/dist/vue.js";
import 'element-ui/lib/theme-chalk/index.css';
import 'magic.css/dist/magic.css'
import App from './App.vue';
import ElementUI from '@/assests/js/element-config';
import routeConfig from '@/assests/js/vue-route-config'
import VueRouter from 'vue-router'

Vue.use(ElementUI)
Vue.use(VueRouter)

const router = new VueRouter({
    routes: routeConfig,
    mode: 'history'
});

const originalPush = VueRouter.prototype.push;

VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err);
}

new Vue({
    render: h => h(App),
    router
}).$mount('#app');


