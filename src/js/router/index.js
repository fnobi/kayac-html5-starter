import Vue from 'vue';
import Router from 'vue-router';
import Top from '@/components/page/Top.vue';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'top',
            component: Top,
        },
    ],
    scrollBehavior(to, from, savedPosition) {
        return savedPosition || { x: 0, y: 0 };
    },
});
