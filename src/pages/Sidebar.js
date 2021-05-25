import React, { Component } from "react"
import routes from "../route";
import "./common.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Redirect,
  Link,
  withRouter,
} from "react-router-dom"
export default class Sidebar extends Component {
  render() {
    return  <div className='sidebar'>
              {/* <ul> */}
            {routes.map((val,index)=>{
                return(
                <div key={index}>
                <Link to={val.path} className='sidebarItem'>
                  <i className={val.icon}></i><span className='sidebarItemName'>{val.authName}</span></Link>
                </div>
                )
            })
          }
          {/* </ul> */}
    </div>
    
  }
}