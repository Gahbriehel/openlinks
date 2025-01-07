import React, { useState } from 'react'
import './signup.css'

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
    }

    return (
        <div className='signup_container'>
            <h2>Sign Up</h2>
            <div className='signup_form'>
                <form onSubmit={handleSubmit}>
                    <h1>Sign up</h1>
                    <br />
                    <label htmlFor='fullname'>Full Name <span>*</span></label>
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
                    <label htmlFor='subject'>Password <span>*</span></label>
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
                    <label htmlFor='message'>Phone number <span>*</span></label>
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
                </form>
            </div>
        </div>
    )
}

export default Signup