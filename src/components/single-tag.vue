<template>
    <div class="single-tag">
        <el-link type="info" :underline="false">
            <span v-bind:style="{color:tag.color,fontSize:tag.size + 'px'}">
                {{tag.name}}
            </span>
        </el-link>
    </div>
</template>
<script>

export default {
   props:['tag_info'],
   data() {
       return {
           tag: this.tag_info
       }
   },
   watch: {
       tag_info: {
           handler(newVal,old) {
               this.tag = newVal;
           },
           immediate:true
       }
   },
}
</script>
<style scoped>
.single-tag{
    display:inline;
    margin-right:5%;
}
</style>