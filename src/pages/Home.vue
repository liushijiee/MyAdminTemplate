<template>
  <div>
    <el-row :gutter="10">
      <el-col :span="8" style="magin-top: 20px">
        <el-card shadow="hover" class="user">
          <div class="head" >
            <div>
              <el-avatar class="avatar"
                src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
              ></el-avatar>
            </div>
            <div class="userInfo">
              <p>admin</p>
              <p>超级管理员</p>
            </div>
          </div>
          <div class="foot" style="margin:10px 0 0 20px;font-size: 10px">
            <p>上次登陆时间：<span class="info">2021-7-9</span></p>
            <p>上次登陆地点：<span class="info">武汉</span></p>
          </div>
        </el-card>
        <el-card style="margin-top: 20px;height:400px" shadow="hover">
          <el-table
            :data="tableData"
            style="width: 100%">
            <el-table-column 
              prop="name"
              label="品牌"
              width="width">
            </el-table-column>
            <el-table-column 
              prop="todayBuy"
              label="今日购买"
              width="width">
            </el-table-column>
            <el-table-column 
              prop="monthBuy"
              label="本月购买"
              width="width">
            </el-table-column>
            <el-table-column 
              prop="totalBuy"
              label="总购买"
              width="width">
            </el-table-column>
          </el-table>
        </el-card>
      </el-col>
      <el-col :span="16" >
        <el-card style="height:280px">
          
        </el-card>
        <div class="rightBottom" style="margin-top:50px">
          <el-card style="height:260px;flex:1">
            
          </el-card>
          <el-card style="height:260px;flex:1">
            
          </el-card>
        </div>
      </el-col>
    </el-row>
    
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      tableData:[
        {
          name: 'oppo',
          todayBuy: 100,
          monthBuy: 300,
          totalBuy: 800,
        },
        {
          name: 'vivo',
          todayBuy: 100,
          monthBuy: 300,
          totalBuy: 800,
        },
        {
          name: '苹果',
          todayBuy: 100,
          monthBuy: 300,
          totalBuy: 800,
        },
        {
          name: '小米',
          todayBuy: 100,
          monthBuy: 300,
          totalBuy: 800,
        },
        {
          name: '三星',
          todayBuy: 100,
          monthBuy: 300,
          totalBuy: 800,
        },
        {
          name: '魅族',
          todayBuy: 100,
          monthBuy: 300,
          totalBuy: 800,
        },
      ]
    };
  },
};
</script>

<style>
.head {
  border-bottom: 1px solid rgb(178, 173, 173);
  display: flex;
}
.user {
  height: 200px;
}
.avatar {
  width: 120px;
  height: 120px;
}
.userInfo {
  margin-left: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.info {
  margin-left: 50px;
}
.rightBottom {
  display: flex;
}
</style>