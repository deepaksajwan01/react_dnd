import React, { Component } from 'react'
import '../static/styles/header.css'

import logo from '../static/images/logo/ZEISS Logo.png'
import user from '../static/images/icons/user/user.svg'

export default class Header extends Component {
  render() {
    return (
      <div className="header-wrap">
        <div className="header-logo-wrap">
         <img src={logo} alt=""/>
         <p className="app-title">Research App <span className="current-component-title">Dashboard</span> </p>
        </div>
        <div className="user-icon-wrap">
         <img src={user} alt="user-icon"/>
        </div>
      </div>
    )
  }
}
