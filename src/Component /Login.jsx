import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () =>{
    setIsSignInForm(!isSignInForm)
  };

  return (
    <div>
      <Header />
      <div className='absolute'>
        <img src='https://assets.nflxext.com/ffe/siteui/vlv3/655a9668-b002-4262-8afb-cf71e45d1956/5ff265b6-3037-44b2-b071-e81750b21783/IN-en-20240715-POP_SIGNUP_TWO_WEEKS-perspective_WEB_c6d6616f-4478-4ac2-bdac-f54b444771dd_large.jpg' alt='background Logo' />
      </div>
      <form className='w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-70 rounded-lg '>
        <h1 className='font-bold text-3xl '>{isSignInForm ? "Sign In" : "Sign Up"}</h1>
        {!isSignInForm && (
           <input type='text' placeholder='Enter Your Name' className='p-4 my-4 w-full bg-gray-700' />
        )}
        <input type='text' placeholder='Email Address' className='p-4 my-4 w-full bg-gray-700' />
        <input type='password' placeholder='Password' className='p-4 my-4 w-full bg-gray-700' />
        <button className='p-4 my-4 rounded-md bg-red-700 w-full '>{isSignInForm ? "Sign In" : "Sign Up"}</button>
        <p className='py-4 cursor-pointer' onClick={toggleSignInForm}>{isSignInForm ? "New to Netflix? Sign Up Now" : "Already registered? Sign In Now"}</p>
      </form>
    </div>
  )
}

export default Login 