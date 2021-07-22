<template>
    <div id="app">
        <p v-for="item of list" :key="item">第{{item}}条</p>
    </div>
</template>
<script>
export default {
    name: 'App',
    data() {
        return {
            list: [1, 2, 3, 4, 5]
        }
    },
    mounted() {

    }
}
</script>

<style>

</style>
