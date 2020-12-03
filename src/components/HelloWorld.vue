<template>
    <ul>
        <li v-for="item of list" :key="item" v-text="item"></li>
    </ul>
    <ul>
        <li v-for="item of evenList" :key="item" v-text="item"></li>
    </ul>
    <button @click="add">add</button>
    <div id="box"></div>
    <teleport to="#box">
        <button>teleport</button>
    </teleport>
    <event @focusss="fucusss"/>
</template>

<script>
import {ref, onMounted, watch, computed} from 'vue';
import Event from "./event.vue";

export default {
    components: {Event},
    props: {
        msg: {
            type: String,
            default: ""
        }
    },
    setup(props) {
        let list = ref([]);

        const getList = () => {
            list.value = [1, 2, 3, 4, 5, 6];
        }
        const add = () => {
            list.push('4')
        }

        watch(list, (newVal, oldVal) => {
            console.log(`list发生变化，新数据为${newVal},旧数据为${oldVal}`)
        })
        var evenList = computed(() => {
            return list.value.filter((item, index) => {
                if (index % 2 === 0) {
                    return item
                }
            })
        })

        onMounted(getList)
        return {list, add,evenList}
    },
    methods:{
        fucusss(...data){
            console.log(data)
        }
    }
}
</script>