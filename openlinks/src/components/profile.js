import React from 'react'
import './profile.css'
import { useSelector } from 'react-redux'

const Profile = () => {

    const userData = useSelector(state => state.user.user); // when you need data from the store always make sure to call useSelector
    // and console.log the return value to know whether you're bringing in the right data in

    // I updated the code in the login.js by adding the dispatch() inside a condition. Please let's be doing it that way so that we're
    // certain dispatch is called when required or a certain condition is met. Noticed it gave an error after inputing wrong credentials in
    // login form.

    console.log(userData);


    return (
        <div className='profile_container'>
            <h1 className='header'>My profile</h1>
            <h2 className='header'>Edit your profile</h2>
            <div className='form_container'>
                <form className='profile_form'>
                    <div>
                        <p>Place image here</p>
                    </div>
                    <div className='form_group'>
                        <label htmlFor='file'>Avatar <span>*</span></label>
                        <div>
                            <input className='file_input' accept='.jpeg, .jpg, .png, .webp' type='file' id='file' />
                            <p className='input_help'>Please upload a <strong>square-shaped</strong> picture. Max 2MB. Formats allowed: <span className='file_format'>jpg</span>, <span className='file_format'>jpeg</span>, <span className='file_format'>png</span> and <span className='file_format'>webp</span></p>
                        </div>
                    </div>
                    <hr />
                    <div className='profile_information'>
                        <div className='form_group'>
                            <label htmlFor='name'>First name</label>
                            <div className="input_div">
                                <input
                                    type='text'
                                    name='name'
                                    id='name'
                                    aria-label='Name'
                                    disabled
                                />
                            </div>
                        </div>
                        <div className='form_group'>
                            <label htmlFor='name'>Last name</label>
                            <div className="input_div">
                                <input
                                    type='text'
                                    name='name'
                                    id='name'
                                    aria-label='Name'
                                    disabled
                                />
                            </div>
                        </div>
                        <div className='form_group'>
                            <label htmlFor='email'>Email</label>
                            <div className="input_div">
                                <input
                                    type='email'
                                    name='email'
                                    id='email'
                                    aria-label='Email'
                                    disabled
                                />
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className='delivery_information'>
                        <h2 className='header'>Delivery information</h2>
                        <div className='form_group'>
                            <label htmlFor='name'>Apartment</label>
                            <div className="input_div">
                                <input
                                    type='text'
                                    name='name'
                                    id='name'
                                    aria-label='Name'
                                    required
                                />
                            </div>
                        </div>
                        <div className='form_group'>
                            <label htmlFor='name'>Street</label>
                            <div className="input_div">
                                <input
                                    type='text'
                                    name='name'
                                    id='name'
                                    aria-label='Name'
                                    required
                                />
                            </div>
                        </div>
                        <div className='form_group'>
                            <label htmlFor='name'>City</label>
                            <div className="input_div">
                                <input
                                    type='text'
                                    name='name'
                                    id='name'
                                    aria-label='Name'
                                    required
                                />
                            </div>
                        </div>
                        <div className='form_group'>
                            <label htmlFor='name'>Zip</label>
                            <div className="input_div">
                                <input
                                    type='text'
                                    name='name'
                                    id='name'
                                    aria-label='Name'
                                    required
                                />
                            </div>
                        </div>
                        <div className='form_group'>
                            <label htmlFor='name'>Country</label>
                            <div className="input_div">
                                <input
                                    type='text'
                                    name='name'
                                    id='name'
                                    aria-label='Name'
                                    required
                                />
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className='button'>
                        <button>Save my information</button>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default Profile