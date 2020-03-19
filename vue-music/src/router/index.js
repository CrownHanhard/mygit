import Vue from "vue"
import VueRouter from "vue-router";
import rank from "../components/rank/rank";
import search from "../components/search/search";
import singer from "../components/singer/singer";
import recommend from "../components/recommend/recommend";
import SingerDetail from "../components/singer-detail/singer-detail"
import disc from "../components/disc/disc";
import TopList from "../components/top-list/top-list"

Vue.use(VueRouter);// 引入路由中间件

export default new VueRouter({
    routes: [{
        path: "/",
        redirect: "/recommend"
    },{
        path: "/rank",
        component:rank,
        children:[
            {
                path:":id",
                component:TopList
            }
        ]
    },{
        path: "/search",
        component:search
    },{
        path: "/singer",
        component:singer,
        children:[
            {
                path:":id",//利用动态的属性路由
                component:SingerDetail
            }
        ]
    },{
        path: "/recommend",
        component:recommend,
        children:[
            {
                path: ':id',
                component: disc
            }
        ]
    }]
})