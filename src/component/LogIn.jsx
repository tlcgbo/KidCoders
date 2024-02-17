import React, { useState } from 'react'
import './LogIn.css'
import userLogIn from '../Auth/userLogIn'
import { useLocation, useNavigate } from 'react-router-dom'

const LogIn = ({toggleform}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errorMessage, setErrorMessage] = useState(null)

    const navigate = useNavigate()
    const location = useLocation()

    const from = location.state?.from?.pathname || '/Project'

    const {error, login} = userLogIn()

    const handleLogIn = async(e) => {
      e.preventDefault()
      await login(email, password)
      if(!error) {
        navigate(from, {replace: true})
        setEmail("")
        setPassword("")
        return
      } else{
          setErrorMessage(error)
      }
    }
  return (
    <div className='div-form'>
        <h2>Login to your account</h2>
        <form onSubmit={handleLogIn} className='login-form' action="">
            <input type="email" name='email' placeholder='Enter email address' value={email} onChange={(e) => setEmail(e.target.value)} />
            <br />
            <input type="password" name='password' placeholder='Enter password' value={password} onChange={(e) => setPassword(e.target.value)} />
            <br />
            {error && <p>{errorMessage}</p>}
            <button type='submit'>Log In</button>
        </form>

        <p>Have no account?</p>
        <button onClick={toggleform}>Sign Up</button>
    </div>
  )
}

export default LogIn