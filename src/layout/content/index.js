import React,{Fragment} from "react"
import {Route, Redirect} from "react-router-dom"
import {pageRoute} from "routers"

export default ()=>{
    return (
       <Fragment>
            {
                pageRoute[0].children.map((item, index) => (
                    <Route path={item.pathname} key={index} exact component={item.component}/>
                ))
            }
            <Redirect from="/admin/**" to="/admin/home" />
       </Fragment>
    )
}