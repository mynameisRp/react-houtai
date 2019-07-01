import Loadable from "react-loadable"
import Loading from "common/loading"


export const LoginPage = Loadable({
    loader: () => import("views/login"),
    loading: Loading
})