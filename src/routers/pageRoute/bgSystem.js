import Loadable from "react-loadable"
import Loading from "common/loading"


export const Admin = Loadable({
    loader: () => import("views/mymgm"),
    loading: Loading
})

export const Home = Loadable({
    loader: ()=> import("layout/content/home"),
    loading: Loading
})

export const ItemsCode = Loadable({
    loader: () => import("layout/content/itemsCode"),
    loading: Loading
})

export const ItemsAdmin = Loadable({
    loader: () => import("layout/content/itemsAdmin"),
    loading: Loading
})
