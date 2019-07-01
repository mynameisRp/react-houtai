import React from 'react';
import {HashRouter as Router,  Redirect, Switch, Route} from "react-router-dom"
import {basicRoute}   from "routers"
import Views from "./views"
import ForgetPassword from "components/login/bogeadmin"

class App extends React.Component{
  render(){
    return (
      <Router>
        <Switch>
          <Route path="/admin" render={()=>{
            return <Views/>
          }} />
          <Route path="/forgetPassword" component={ForgetPassword} />
            {
              basicRoute.map((item, index) => (
                <Route path={item.pathname} key={index} render={()=>{
                  return <item.component/>
                }} />
              ))
            }
          <Redirect from="/" to="/login" />
          <Redirect from="**" to="/404" />
        </Switch>
      </Router>
  );
  }
}


export default App;
