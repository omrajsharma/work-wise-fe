import React from 'react'
import Logo from '../../assets/owl-transparent.png'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header>
      <div className="header-container">
        <div className="header-left">
          <Link to='/' className="header-brand">
            <img src={Logo} alt="" />
            <h2>Work Wise</h2>
          </Link>
        </div>
        <div className="header-right">
          <div className="header-login">
            <Link to='/login'>Login</Link>
            <Link to='/register'>Register</Link>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
