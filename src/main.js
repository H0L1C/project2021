import { createApp } from 'vue'
import App from './App.vue'
import VueMq from "vue3-mq";
import VueLazyLoad from 'vue3-lazyload'

const app = createApp(App)
app.mount('#app')

let VueScrollTo = require('vue-scrollto');

app.use(VueMq, {
    breakpoints: {
        xs: 321,
        s: 416,
        m: 641,
        l: 960,
        xl: Infinity
    },
    defaultBreakpoint: 'l'
});

app.use(VueScrollTo, {
    container: "body",
    duration: 50,
    easing: "ease-in",
    offset: 0,
    force: true,
    cancelable: true,
    onStart: false,
    onDone: false,
    onCancel: false,
    x: false,
    y: true
})

app.use(VueLazyLoad, {
    preLoad: 1.3,
    attempt: 1,
    throttleWait: 50
});