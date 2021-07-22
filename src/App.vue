<template>
    <div id="app">
        <p v-for="item of list" :key="item" :ref="handleItem">第{{ item }}条</p>
    </div>
</template>
<script>
export default {
    name: 'App',
    data() {
        return {
            list: [1, 2, 3, 4, 5],
            itemRefs: []
        }
    },
    mounted() {
        console.log(this.itemRefs)
    },
    methods: {
        handleItem(el) {
            this.itemRefs.push(el);
            return el
        }
    },
    updated() {
    }
}
</script>

<style>

</style>
