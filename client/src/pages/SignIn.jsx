import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {Alert, Button, Label, Spinner, TextInput} from 'flowbite-react';
import { useDispatch, useSelector } from 'react-redux';
import {signInStart, signInSuccess, signInFailure} from '../redux/user/userSlice.js'

export default function SignIn() {
  const [formData, setFormData] = useState({});
  // const [errorMessage, setErrorMessage] = useState(null);
  // const [loading, setLoading] = useState(false);  or
  const {loading, error: errorMessage} = useSelector(state => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    // console.log(e.target.value);
    setFormData({...formData, [e.target.id]:e.target.value.trim()});
  }
  // console.log(formData);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if(!formData.email || !formData.password){
      return dispatch(signInFailure("Please fill out all fields."));
    }
    try {
      // setLoading(true);
      // setErrorMessage(null); or
      dispatch(signInStart());
      const res = await fetch('/api/auth/signin', {
        method:'POST',
        headers: {'Content-type': 'application/json'},
        body: JSON.stringify(formData),
      })
      const data = await res.json();
      if(data.success === false){
        return dispatch(signInFailure(data.message));
      }
      // setLoading(false);
      if(res.ok){
        dispatch(signInSuccess(data));
        navigate('/');
      }
    } catch (error) {
      // setErrorMessage(error.message);
      // setLoading(false); or
      dispatch(signInFailure(error.message));
    }
  }

  return (
    <div className='min-h-screen mt-20'>
      <div className='flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5'>
        {/* left */}
        <div className='flex-1'>
          <Link to="/" className='text-4xl font-bold dark:text-white'>
              <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>Harish's</span>
              Blog
          </Link>
          <p className='text-sm mt-5'>
            This is demo field to be Sign-in by you with your email and password or with Google.
          </p>
        </div>
        {/* right */}
        <div className='flex-1'>
          <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
            <div>
              <Label value='Your Email'/>
              <TextInput type="email" placeholder="name@company.com" id='email'  onChange={handleChange}/>
            </div>
            <div>
              <Label value='Your Password'/>
              <TextInput type="password" placeholder="**********" id='password' onChange={handleChange} />
            </div>
            <Button gradientDuoTone="purpleToPink" type='submit' disabled={loading}>
              {loading ? (
                <>
                  <Spinner size='sm' />
                  <span className='pl-3'>Loading...</span>
                </>
              ):('Sign In')}
            </Button>
          </form>
          <div className='flex gap-2 text-sm mt-5'>
            <span>Don't have an account?</span>
            <Link to="/sign-up" className='text-blue-500'>
              Sign Up
            </Link>
          </div>
          {
            errorMessage && (
              <Alert className='mt-5' color='failure'>
                {errorMessage}
              </Alert>
            )
          }
        </div>
      </div>
    </div>
  )
}
