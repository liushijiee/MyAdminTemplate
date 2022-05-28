<template>
  <header>
    <div class="l-content">
      <el-button plain icon="el-icon-menu" size="mini"></el-button>
      <h3 style="color: black;margin-left:10px">首页</h3>
    </div>
    <div class="r-content">
      <el-dropdown trigger="click" size="mini">
        <div>
          <el-avatar
            src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
          ></el-avatar>
        </div>
        <el-dropdown-menu slot="dropdown">
        <el-dropdown-item >个人中心</el-dropdown-item>
        <el-dropdown-item >退出</el-dropdown-item>
       
      </el-dropdown-menu>
    </el-dropdown>
      </el-dropdown>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      
    };
  },
};
</script>

<style>
.l-content {
    display: flex;
    align-items: center;
}
header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
</style>