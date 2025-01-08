import React, { useState } from 'react'
import './signup.css'
import { Link } from 'react-router-dom'

const Signup = () => {

    const [signUpFormData, setSignUpFormData] = useState({
        name: '',
        email: '',
        password: '',
        phone: ''
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setSignUpFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', signUpFormData);

        const url = 'https://open-link-backend.onrender.com/api/v1/users/register'
    }

    return (
        <div className='signup_container'>
            <div className='signup_form'>
                <form onSubmit={handleSubmit}>
                    <h1>Sign up</h1>
                    <br />
                    <label htmlFor='name'>Full Name <span>*</span></label>
                    <br />
                    <input
                        type='text'
                        name='name'
                        id='name'
                        value={signUpFormData.name}
                        onChange={handleChange}
                        aria-label='Name'
                        required
                    />
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
                    <label htmlFor='phone'>Phone number <span>*</span></label>
                    <br />
                    <input
                        type='text'
                        name='phone'
                        id='phone'
                        value={signUpFormData.phone}
                        onChange={handleChange}
                        aria-label='Phone'
                        required
                    />
                    <br />
                    <button type='submit'>Sign up</button>
                    <p className='form_text'>By continuing, you agree to our <strong>Terms of Service</strong> and acknowledge that you have read our <strong>Privacy Policy</strong>.</p>
                </form>
                <p className='login_text'>Already have an account? <span><Link className='login' to='/login'>Log in</Link></span></p>
            </div>
        </div>
    )
}

export default Signup