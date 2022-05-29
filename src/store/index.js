import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import menu from './menu'
// import search from './search';
// import detail from './detail';
// import shopcart from "./shopcart";
// import user from "./user/"
// import trade from "./trade";


export default new Vuex.Store({
    modules:{
        menu
        // home,
        // search,
        // detail,
        // shopcart,
        // user,
        // trade
    }
})