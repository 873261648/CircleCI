<template>
    <button @click="triggerEvent">
        触发事件
    </button>
</template>

<script>
export default {
    name: "event",
    emits: {
        focusss(...arg){
            console.log('事件触发验证成功',arg)
        }
    },
    methods:{
        triggerEvent(){
            this.$emit('focusss',{data:1})
        }
    }
}
</script>

<style scoped>

</style>