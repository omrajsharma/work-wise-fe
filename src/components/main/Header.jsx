import React from 'react'
import Logo from '../../assets/owl-transparent.png'
import { Link } from 'react-router-dom'
import { UserContext } from '../../context/UserContextProvider'

function Header() {
  const {userInfo, setUserInfo} = React.useContext(UserContext);

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
            { userInfo ?
              (<>
                <Link to='/create'>Post A Job</Link>
                <Link to='/logout'>Logout</Link>
              </>) 
              :(<>
                <Link to='/login'>Login</Link>
                <Link to='/register'>Register</Link>
              </>)
            }
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
