<template>
    <div class="app">
        <p class="tips" v-highlight="'yellow'">请输入用户名</p>
        <Input/>
        <input class="input" placeholder="请输入用户名" v-model="val" @input="verifyUserName"/>
        <button @click="login">登录</button>
        <p>{{ upVal }}</p>
        <p>{{ book }}</p>
    </div>
</template>

<script>
import Input from "@/components/Input";
import {computed, onMounted, ref, watch, reactive,readonly} from 'vue';

export default {
    name: 'App',
    inject: {
        book: {
            from: 'guide'
        }
    },
    components: {Input},
    data() {
        return {}
    },
    methods: {
        handleKeyDown(e) {
            console.log(e)
        },
        login() {
        }
    },
    setup(props, context) {
        console.log(props, context)
        let val = ref('请输入用户名')
        let verifyUserName = () => {
            // console.log(val)
        }
        onMounted(() => {
            console.log('在setup中定义的mounted事件')
        })
        watch(val, (newVal) => {
            console.log(`在setup中监听val的变更，新的值为${newVal}`);
        })
        let upVal = computed(() => val.value.toLocaleUpperCase())

        const books = reactive({
            count:0
        })
        const copy = readonly(books);

        books.count = 10;
        console.log(books.count)
        console.log(copy.count)
        return {
            val,
            upVal,
            verifyUserName
        }
    }
}
</script>

<style>

</style>
