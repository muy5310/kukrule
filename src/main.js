import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import MainPage from './pages/MainPage.vue';
import CommentPage from './pages/CommentPage.vue';
import IntroPage from './pages/IntroPage.vue';
import PostPage from './pages/PostPage.vue';
Vue.config.productionTip = false

Vue.use(VueRouter);

// const routes = [{
//         path: '/',
//         component: MainPage
//     },
//     {
//         path: '/comment',
//         component: CommentPage
//     },
// ];

const router = new VueRouter({
    mode: 'history',
    routes: [{
            path: '/',
            component: MainPage
        },
        {
            path: '/comment',
            component: CommentPage
        },
        {
            path: '/intro',
            component: IntroPage
        },
        {
            path: '/post',
            component: PostPage
        }
    ]
});

new Vue({
    render: h => h(App),
    router
}).$mount('#app')