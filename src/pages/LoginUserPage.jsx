import React from 'react'
import { successAlert, errorAlert } from '../utils/alert';
import { UserContext } from '../context/UserContextProvider';
import { Navigate } from 'react-router-dom';

function LoginUserPage() {
  const {userInfo, setUserInfo} = React.useContext(UserContext);
  const [redirectToHome, setRedirectToHome] = React.useState(false);
  const username = React.useRef();
  const password = React.useRef();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const usernameVal = username.current.value;
    const passwordVal = password.current.value;

    const response = await fetch(`${import.meta.env.VITE_API_URL}/api/v1/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: usernameVal,
        password: passwordVal
      }),
      credentials: "include",
    })
    const data = await response.json();
    console.log(data);
    if (response.ok) {
      successAlert(data.success);
      setUserInfo(data.data);
      setRedirectToHome(true);
    } else {
      errorAlert(data.error);
    }
  }

  if (redirectToHome) {
    return <Navigate to='/' />
  }

  return (
    <div className="login">
      <div className="login-container">
        <div className="login-form">
          <h1>Login</h1>
          <form onSubmit={handleSubmit}>
            <input type="text" className='input-field' placeholder='User Name' ref={username} required/>
            <input type="password" className='input-field' placeholder='Password' ref={password} required/>
            <button>Sign Up</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default LoginUserPage
