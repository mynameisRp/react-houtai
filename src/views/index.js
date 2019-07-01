import React from "react"
import {HashRouter as Router,  Redirect, Switch, Route} from "react-router-dom"
import {pageRoute}   from "routers"

export default class Views extends React.Component{
    render(){
        return (
             <Router>
                <Switch>
                    {
                         pageRoute.map((item, index) => (
                            <Route path={item.pathname} key={index} component={item.component}/>
                        ))
                    }
                    <Redirect from="/admin/*" to="/admin"/>
                </Switch>
            </Router>
        )
    }
}