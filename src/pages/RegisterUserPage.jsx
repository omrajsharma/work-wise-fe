import React from 'react'
import { successAlert, errorAlert } from '../utils/alert';

function RegisterUserPage() {
  const name = React.useRef();
  const phone = React.useRef();
  const email = React.useRef();
  const username = React.useRef();
  const password = React.useRef();

  const handleSubmit = async (ev) => {
    ev.preventDefault()

    const nameVal = name.current.value;
    const phoneVal = phone.current.value;
    const emailVal = email.current.value;
    const usernameVal = username.current.value;
    const passwordVal = password.current.value;

    const response = await fetch(`${import.meta.env.VITE_API_URL}/api/v1/auth/register`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: nameVal,
        phone: phoneVal,
        email: emailVal,
        username: usernameVal,
        password: passwordVal
      })
    })
    const data = await response.json();
    if(response.ok) {
      successAlert('User Created ✨');
    } else {
      errorAlert(data.error);
    }
  }

  return (
    <div className="register">
      <div className="register-container">
        <div className="register-form">
          <h1>Sign Up</h1>
          <form onSubmit={handleSubmit}>
            <input type="text" className='input-field' placeholder='Full Name' ref={name} required/>
            <input type="number" className='input-field' placeholder='Phone No.' ref={phone} required/>
            <input type="email" className='input-field' placeholder='Email' ref={email} required/>
            <input type="text" className='input-field' placeholder='User Name' ref={username} required/>
            <input type="password" className='input-field' placeholder='Password' ref={password} required/>
            <button>Sign Up</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default RegisterUserPage
