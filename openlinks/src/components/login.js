import React from 'react'
import './login.css'
import './signup.css'
import { Link } from 'react-router-dom'

const Login = () => {
const handleChange = 'dummy'
const handleSubmit = 'dummy'
const signUpFormData = 'dummy'
  return (

    <div className='login_container'>
      <div className='signup_form'>
                <form onSubmit={handleSubmit}>
                    <h1>Log in</h1>
                    <br />
                    <label htmlFor='email'>Email <span>*</span></label>
                    <br />
                    <input
                        type='email'
                        name='email'
                        id='email'
                        value={signUpFormData.email}
                        onChange={handleChange}
                        aria-label='Email'
                        required
                    />
                    <br />
                    <label htmlFor='password'>Password <span>*</span></label>
                    <br />
                    <input
                        type='password'
                        name='password'
                        id='password'
                        value={signUpFormData.password}
                        onChange={handleChange}
                        aria-label='Password'
                        required
                    />
                    <br />
                    <button type='submit'>Sign up</button>
                    <p className='form_text'>By continuing, you agree to our <strong>Terms of Service</strong> and acknowledge that you have read our <strong>Privacy Policy</strong>.</p>
                </form>
                <p className='login_text'>Don't have an account? <span><Link className='login' to='/signup'>Sign up</Link></span></p>
            </div>
    </div>
  )
}

export default Login