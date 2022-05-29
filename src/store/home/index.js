import { reqHomeBuyList } from "../../api"

const state={
    // code:'',
    // token:localStorage.getItem('TOKEN'),
    // userInfo:{}
    homeBuyList:[]
}
const mutations={
    GETHOMEBUYLIST(state,info){
        state.homeBuyList=info
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
    async getHomeBuyList({commit}){
        let result = await reqHomeBuyList()
       //console.log(result)
        if(result.code==200){
           // console.log(result.data)
            commit('GETHOMEBUYLIST',result.data)
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