import React, { Component } from "react"
import "./common.css";
import logo from "../logo.svg";
export default class Header extends Component {
  render() {
    return <div className='header'>
              <div className='title'>CRUISE</div>
              <img src={logo} className='logo' alt='logo'></img>
            </div>
  }
}