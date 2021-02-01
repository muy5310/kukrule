import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import VueModal from 'vue-js-modal'

import { IntroPage, MainPage, CommentPage, PostPage, EditPage, LoginPage, SignupPage, MyInfoPage, Test } from './pages';
Vue.config.productionTip = false

Vue.use(VueRouter);
Vue.use(VueModal, { dynamic: true });
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
    mode: 'hash',
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
            path: '/login',
            component: LoginPage
        },
        {
            path: '/signup',
            component: SignupPage
        },
        {
            path: '/post',
            component: PostPage
        },
        {
            path: '/edit',
            component: EditPage
        },
        {
            path: '/myinfo',
            component: MyInfoPage
        },
        {
            path: '/test',
            component: Test
        }
    ]
});

new Vue({
    render: h => h(App),
    router
}).$mount('#app')