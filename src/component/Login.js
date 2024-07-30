import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkValidate } from '../utils/validate';
import { auth } from '../utils/firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { LOGO } from '../utils/constant';


const Login = () => {
    const [isSignInForm, setIsSignInForem] = useState(true);
    const [errorMessage, setErrorMessage] = useState();

    const dispatch = useDispatch();

    const toggleInForm = () => {
        setIsSignInForem(!isSignInForm);
    }
    const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null);

    const handleBtnClick = () => {
        const emailValue = email.current ? email.current.value : "";
        const passwordValue = password.current ? password.current.value : "";
        const nameValue = name.current ? name.current.value : "";

        const message = checkValidate(emailValue, passwordValue);
        setErrorMessage(message);

        if (message) return;
        if (!isSignInForm) {
            createUserWithEmailAndPassword(auth, emailValue, passwordValue, nameValue)
                .then((userCredential) => {
                    // Signed up 
                    const user = userCredential.user;

                    updateProfile(user, {
                        displayName: nameValue,
                        photoURL: LOGO
                    }).then(() => {
                        const { uid, email, displayName, photoURL } = user;
                        console.log(uid);
                        dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }));
                    }).catch((error) => {
                        setErrorMessage(error.message)
                    });

                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode + " " + errorMessage)
                });
        }

        else {

            signInWithEmailAndPassword(auth, emailValue, passwordValue)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode + " " + errorMessage)
                });
        }

    }



    return (
        <>
            <Header />
            <div className='absolute'>
                <img src='https://assets.nflxext.com/ffe/siteui/vlv3/655a9668-b002-4262-8afb-cf71e45d1956/5ff265b6-3037-44b2-b071-e81750b21783/IN-en-20240715-POP_SIGNUP_TWO_WEEKS-perspective_WEB_c6d6616f-4478-4ac2-bdac-f54b444771dd_large.jpg' alt='Background' />
            </div>

            <div className='container mx-auto my-36 absolute'>
                <form onSubmit={(e) => e.preventDefault()} className='bg-black w-4/12 p-12 bg-opacity-80 rounded-sm mx-auto'>

                    <h1 className='text-3xl font-bold text-white mb-4'>{isSignInForm ? 'Sign In' : 'Sign Up'}</h1>
                    {!isSignInForm ? (<input ref={name} className='bg-gray-700 w-full px-4 py-3  mb-4 opacity-65 rounded-sm text-white placeholder-white' type='text' placeholder='Full Name' />)
                        : null

                    }
                    <input ref={email} className='bg-gray-700 w-full px-4 py-3  mb-4 opacity-65 rounded-sm placeholder-white text-white' type='text' placeholder='Email' />
                    <input ref={password} className='bg-gray-700 w-full px-4 py-3 mb-4 opacity-70 rounded-sm placeholder-white' type='password' placeholder='Password' />
                    <button onClick={handleBtnClick} className='bg-red-700 w-full px-4 py-2 mt-6 text-white rounded-sm'>{isSignInForm ? 'Sign In' : 'Sign Up'}</button>
                    {errorMessage && <p className='text-red-700 mt-2'>{errorMessage}</p>}
                    <p className='text-white mt-4 cursor-pointer' onClick={toggleInForm}>New to Netflix? Sign up now</p>
                </form>
            </div>
        </>
    )
}

export default Login
