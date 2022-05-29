//引入mockjs模块
import Mock from 'mockjs'
//引入json文件
import menuList from './menuList.json'
import homeBuyList from './homeBuyList.json'

//mock数据：第一个参数请求地址，第二个参数请求数据
Mock.mock("/mock/menuList",{code:200,data:menuList});
Mock.mock("/mock/homeBuyList",{code:200,data:homeBuyList})
// Mock.mock("/mock/floor",{code:200,data:floor})