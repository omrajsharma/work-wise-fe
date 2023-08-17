import React, { useEffect } from 'react'
import Logo from '../../assets/owl-transparent.png'
import { Link } from 'react-router-dom'
import { UserContext } from '../../context/UserContextProvider'
import { successAlert } from '../../utils/alert'

function Header() {
  const {userInfo, setUserInfo} = React.useContext(UserContext);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/v1/auth/profile`, {
      credentials: 'include'
    })
    .then(response => response.json())
    .then(data => setUserInfo(data.data))
  }, [])

  const logout = async () => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/api/v1/auth/logout`, {
      credentials: 'include'
    })
    const data = await response.json();
    if (response.ok) {
      successAlert(data.success);
    }
    setUserInfo({});
  }

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
                <Link to='/create-job'>Post A Job</Link>
                <Link onClick={logout}>Logout</Link>
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
