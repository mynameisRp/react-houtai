import {LoginPage} from "./basicRoute/loginPage"
import * as pageAll from "./pageRoute/bgSystem"

export const basicRoute = [
    {
        pathname: "/login",
        component: LoginPage
    }
]


export const pageRoute = [
    {
        pathname: "/admin",
        component: pageAll.Admin,
        children: [
            {
                title: "首页",
                pathname: "/admin/home",
                component: pageAll.Home
            },
            {
                title: "项目案例",
                pathname: "/admin/itemsCode",
                component: pageAll.ItemsCode
            },
            {   
                title: "项目管理",
                pathname: "/admin/itemsAdmin",
                component: pageAll.ItemsAdmin
            }
        ]
    }
]


    
