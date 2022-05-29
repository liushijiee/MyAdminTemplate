import { reqMenuList } from "../../api"
// import {setToken} from '@/untils/token'
const state={
    // code:'',
    // token:localStorage.getItem('TOKEN'),
    // userInfo:{}
    menuList:[]
}
const mutations={
    GETMENULIST(state,info){
        state.menuList=info
    }
    // USERLOGOUT(state){
    //     state.userInfo={}
    //     state.token=''
    // }
}
const actions={
    // async getCode({commit},phone){
    //     let result =await reqGetCode(phone)
        
    //     if(result.code==200){
    //         commit('GETCODE',result.data)
    //         return Promise.resolve('成功')
    //     }
    // },
    async getMenuList({commit}){
        let result = await reqMenuList()
       //console.log(result)
        if(result.code==200){
           // console.log(result.data)
            commit('GETMENULIST',result.data)
        }
    }
    
}
const getters={}
export default{
    state,
    mutations,
    actions,
    getters,
}