import React, { Fragment, Component } from "react"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Redirect,
  Link,
  withRouter,
} from "react-router-dom"
// 开始引入各种自定义的组件
import Index from "./pages/platform/index"
//404页面
import ErrorPage from "./pages/ErrorPage"
import Header from "./pages/Header"
import Sidebar from "./pages/Sidebar"
import Login from "./pages/login/index"
import routes from "./route";
import "./pages/common.css";


class BaseLayout extends Component {
  constructor(props) {
    super(props)
    }
    
    render(){
        return(
        <Fragment>
          
          <Header />
          <div className='warp'>
              <Sidebar />
              <div className='warpContent'>
              <Switch>
                {routes.map((route, key) => {
                  if (route.exact) {
                    return (
                      <Route
                        key={key}
                        exact
                        path={route.path}
                        component={(props) => {
                          return (
                            <route.component {...props} routes={route.routes} />
                          )
                        }}
                      >
                        {/* <route.component /> */}
                      </Route>
                    )
                  } else {
                    return (
                      <Route
                        key={key}
                        path={route.path}
                        component={(props) => {
                          return (
                            <route.component {...props} routes={route.routes} />
                          )
                        }}
                      >
                        {/* <route.component /> */}
                      </Route>
                    )
                  }
                })}
                <Route path="/">
                  <Index />
                </Route>
                <Route path="*">
                  <ErrorPage />
                </Route>
              </Switch>
            </div>
        </div>
        </Fragment>
        )
    }
    
}


class App extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
        <Router>
          <Switch>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/">
              <BaseLayout />
            </Route>
          </Switch>
        </Router>
    )
  }
}

export default App
