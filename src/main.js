import { createApp, VueElement } from 'vue'
import vueConfig from '../vue.config'
import App from './App.vue'
import router from './router'
import store from './store'
import mitt from 'mitt'

//const bus = mitt();
//export default bus;

const app = createApp(App);
app.use(store).use(router).mount('#app');

// 事件总线
app.config.globalProperties.bus = new mitt();