<template>
  <div class='father'>
    <!-- <el-radio-group v-model="isCollapse" style="margin-bottom: 20px">
          <el-radio-button :label="false">展开</el-radio-button>
          <el-radio-button :label="true">收起</el-radio-button>
        </el-radio-group> -->
    <div class='title'><h3>通用后台管理系统</h3></div>
    <el-menu
      default-active="1"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      :collapse="isCollapse"
    >
      <el-menu-item :index="item.path" v-for="(item) in noChildren" :key='item.path' @click="clickMenu(item)">
        <i :class="`el-icon-${item.icon}`"></i>
        <span slot="title">{{item.label}}</span>
      </el-menu-item>
      <el-submenu :index="item.path" v-for="item in hasChildren" :key="item.path">
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
  data() {
    return {
      isCollapse: false,
      menu:[
          {
              path: '/home',
              name: 'home',
              label: '首页',
              icon: 's-home',
              url: 'Home/Home'
          },
          {
              path: '/mall',
              name: 'mall',
              label: '商品管理',
              icon: 'video-play',
              url: 'MallManage/MallManage'
          },
          {
              path:'/user',
              name:'user',
              label:'用户管理',
              icon:'user',
              url:'UserManage/UserManage'

          },
          {
              label:'其他',
              icon:'location',
              children:[
                  {
                      path:'/page1',
                      name:'page1',
                      label:'页面1',
                      icon:'setting',
                      url:'Other/PageOne'
                  },
                  {
                      path:'/page2',
                      name:'page2',
                      label:'页面2',
                      icon:'setting',
                      url:'Other/PageTwo'
                  }
              ]
          }
      ]
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
      }
  }
};
</script>

<style>
.father {
    height: 94vh;
}
.el-menu {
    height: calc(100% - 40px);
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