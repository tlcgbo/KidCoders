import React, { useState } from 'react'
import './LogIn.css'
import { useLocation, useNavigate } from 'react-router-dom'
import userSignUp from '../Auth/userSignUp'

const SignUp = ({toggleform}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errorMessage, setErrorMessage] = useState(null)
    const navigate = useNavigate()
    const location = useLocation()

    const from = location.state?.from?.pathname || './Project'

    const {error, signUp} = userSignUp()

    const handleSignOut = async(e) => {
      e.preventDefault()
      await signUp(email, password)

      if(!error) {
        navigate(from, {replace : true})
        setEmail("")
        setPassword("")
        return
      } else {
        setErrorMessage(error)
      }
    } 
  return (
    <div className='div-form'>
        <h2>Create an account</h2>
        <form onSubmit={handleSignOut} className='login-form' action="">
            <input type="email" name='email' placeholder='Enter email address' value={email} onChange={(e) => setEmail(e.target.value)} />
            <br />
            <input type="password" name='password' placeholder='Enter password' value={password} onChange={(e) => setPassword(e.target.value)} />
            <br />
            {error && <p>{errorMessage}</p>}
            <br />
            <button type='submit'>Sign Up</button>
        </form>

        <p>Have an account?</p>
        <button onClick={toggleform}>Log In</button>
    </div>
  )
}

export default SignUp