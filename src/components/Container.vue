<template>
  <div class="hello">
    <el-container>
      <el-aside >
        <Menu />
      </el-aside>
      <el-container>
        <el-header>
          <Header />
        </el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Menu from "./Menu.vue";
import Header from "./Header.vue";
export default {
  name: "Container",
  
  components:{
    Menu,
    Header
  }
  
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less' scoped>
@import "../styles/reset.css";

.el-container {
  height: 100vh;
}
.el-header {
  // background-color: pink;
  border-bottom: 1px solid rgb(184, 182, 182);
}
.el-aside {
  width: auto !important;
  // background-color: beige;
}

.el-main {
  // background-color: green;
}
</style>
