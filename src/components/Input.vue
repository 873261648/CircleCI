<template>
    <input type="text" v-bind="$attrs">
    <teleport to="body">
        <p>teleport组件</p>
        <p>Teleport 提供了一种干净的方法，允许我们控制在 DOM 中哪个父节点下渲染了 HTML，而不必求助于全局状态或将其拆分为两个组件。</p>
    </teleport>
</template>

<script>
export default {
    name: "Input",
    props: {
        placeholder: {
            type: String,
            default: ''
        }
    },
    emits: ['input', 'click', 'accept'],
    setup(props,context){
        console.log(props,context)
    }
}
</script>

<style scoped>

</style>