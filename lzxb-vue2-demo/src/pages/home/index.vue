<style lang="less" scoped>
</style>
<template>
  <div>
    <v-header title="首页">
      <router-link slot="left" to="/">首页</router-link>
      <router-link slot="right" to="/signout">退出</router-link>
    </v-header>
    <div style="padding: 50px;">{{user.name}}欢迎回家</div>
  </div>
</template>
<script>
/*
mapState是state的语法糖
一个组件需要获取多个状态时候，
将这些状态都声明为计算属性会有些重复和冗余。
为了解决这个问题，
我们可以使用 mapState 辅助函数帮助我们生成计算属性
*/
import { mapState } from "vuex";
export default {
  computed: mapState({ user: state => state.user })
};
</script>


