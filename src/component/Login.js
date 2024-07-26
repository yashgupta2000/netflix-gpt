import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
    const [isSignInForm, setIsSignInForem] = useState(true);
    const toggleInForm = () => {
        setIsSignInForem(!isSignInForm);
    }
    return (
        <>
            <Header />
            <div className='absolute'>
                <img src='https://assets.nflxext.com/ffe/siteui/vlv3/655a9668-b002-4262-8afb-cf71e45d1956/5ff265b6-3037-44b2-b071-e81750b21783/IN-en-20240715-POP_SIGNUP_TWO_WEEKS-perspective_WEB_c6d6616f-4478-4ac2-bdac-f54b444771dd_large.jpg' alt='Background' />
            </div>

            <div className='container mx-auto my-36 absolute'>
                <form className='bg-black w-4/12 p-12 bg-opacity-80 rounded-sm mx-auto'>

                    <h1 className='text-3xl font-bold text-white mb-4'>{isSignInForm ? 'Sign In' : 'Sign Up'}</h1>
                    {!isSignInForm ? (<input className='bg-gray-700 w-full px-4 py-3  mb-4 opacity-65 rounded-sm text-white placeholder-white' type='text' placeholder='Full Name' />)
                        : null

                    }
                    <input className='bg-gray-700 w-full px-4 py-3  mb-4 opacity-65 rounded-sm placeholder-white text-white' type='text' placeholder='Email' />
                    <input className='bg-gray-700 w-full px-4 py-3 mb-4 opacity-70 rounded-sm placeholder-white' type='password' placeholder='Password' />
                    <button className='bg-red-700 w-full px-4 py-2 mt-6 text-white rounded-sm'>{isSignInForm ? 'Sign In' : 'Sign Up'}</button>
                    <p className='text-white mt-4 cursor-pointer' onClick={toggleInForm}>New to Netflix? Sign up now</p>
                </form>
            </div>
        </>
    )
}

export default Login
