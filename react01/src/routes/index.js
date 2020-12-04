import Login from "../pages/login/Login";
import Product from "../pages/product/Prodoct"
import Main from "../pages/main/Main";
import Index from "../pages/admin/Index"
import PageNotFound from "../pages/PageNotFound";

export const mainRoutes=[
    {
        path:"/login",
        component:Login
    },
    {
        path:"/404",
        component:PageNotFound
    },
    {
        path:"/product",
        component:Product
    }
    ,
    {
        path:"/index",
        component:Index
    }
]


export const adminRouters=[
    {
        path:"/main",
        component:Main
    },
    {
        path:"/admin",
        component:Main
    }
]