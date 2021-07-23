import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';


const app = createApp(App)

// 自定义指令
app.directive('highlight',{
    beforeMount(el,binding){
        // console.log(el,binding,vnode)
        el.style.background = binding.value
    }
})
app.provide('guide','Vue3 guide')

app.use(ElementPlus);
app.mount('#app');

