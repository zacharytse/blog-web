<template>
    <div class="login">
        我是登录组件-{{ title }} - <button @click="foo">我是登录按钮</button>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                title: "login数据"
            }
        },
        methods:{
            foo(){
                alert(this.title);
            }
        }
    }
</script>
<style lang="scss" scoped>
    $color:pink;
    .login {
        height: 200px;
        width: 200px;
        margin: 0px auto;
        background-color: skyblue;
    }
</style>
