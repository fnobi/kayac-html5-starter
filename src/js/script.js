import Vue from 'vue';
import App from '@/components/App.vue';
import router from '@/router';

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    // store,
    components: { App },
    template: '<App/>',
});
