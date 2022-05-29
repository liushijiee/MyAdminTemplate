<template>
  <div class='father'>
    <!-- <el-radio-group v-model="isCollapse" style="margin-bottom: 20px">
          <el-radio-button :label="false">展开</el-radio-button>
          <el-radio-button :label="true">收起</el-radio-button>
        </el-radio-group> -->
    <!-- <div class='title' ><h3>{{this.isCollapse?'后台':'通用后台管理系统'}}</h3></div> -->
    <el-menu
      default-active="/home"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      :collapse="isCollapse"
    >
    <div class='title' ><h3>{{this.isCollapse?'后台':'通用后台管理系统'}}</h3></div>
      <el-menu-item :index="item.path" v-for="(item) in noChildren" :key='item.path' @click="clickMenu(item)">
        <i :class="`el-icon-${item.icon}`"></i>
        <span slot="title">{{item.label}}</span>
      </el-menu-item>
      <el-submenu index=11 v-for="item in hasChildren" :key="item.path">
        <template slot="title">
          <i :class="`el-icon-${item.icon}`"></i>
          <span slot="title">{{item.label}}</span>
        </template>
        <el-menu-item-group v-for="item2 in item.children" :key="item2.path">
          <el-menu-item :index="item2.path">{{item2.label}}</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {
  mounted() {
    this.$bus.$on('changeMenu',(isShow)=>{
      console.log(isShow)
      this.isCollapse=isShow
    })
  },
  data() {
    return {
      isCollapse: false,
      
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    clickMenu(item){
        this.$router.push({
            path: item.path
        })
    }
  },
  computed:{
      noChildren(){
          return this.menu.filter(item=>!item.children)
      },
      hasChildren(){
          return this.menu.filter(item=>item.children)
      },
      menu(){
        //console.log(this.$store.state.menu.menuList)
        return this.$store.state.menu.menuList
      }
  },
  created() {
    this.$store.dispatch('getMenuList')
    
  },
};
</script>

<style>
.father {
    height: 100vh;
}
.el-menu {
    height: 100%;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
.title{
    display: flex;
    align-items: center;
    justify-content: center;
    height: 6vh;
    margin: 20px 0;
    
}


</style>