import React, { useState } from 'react'
import { TextInput,Loading,CustomButton } from '../components';
import {useForm} from 'react-hook-form';
import {Link} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import { logobee, } from '../assets';
import { apiRequest } from '../utils';
import { UserLogin } from '../redux/userSlice';



function Login() {
  const {register,handleSubmit,formState:{errors }}= useForm( {mode: 'onChange'});
  const [errMsg,setErrMsg]= useState('');
  const [isSubmitting, setIsSubmitting]= useState(false);
  const dispatch= useDispatch();
  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      const res= await apiRequest({
        url: 'http://localhost:8800/auth/login',
        data: data,
        method: 'POST',
      });
      if(res?.status==="failed"){
        setErrMsg(res);
      } else{
        setErrMsg("");
        const newData= {token: res?.token, ...res?.user};
        localStorage.setItem("token",JSON.stringify(newData.token));
        dispatch(UserLogin(newData));
        window.location.replace("/");
      }
      setIsSubmitting(false);
    } catch (error) {
      console.log(error);
      setIsSubmitting(false);
    }
  };
  return (
    <div className='anibag w-full h-[100vh] flex items-center justify-center p-6 '>
      <div className='w-full md:w-2/3 h-fit lg:h-full 2xl:h-5/6 py-8 lg:py-0 flex bg-primary rounded-xl overflow-hidden shadow-xl font-poiret'>
        {/* Left */}
        <div className='w-full lg:w=1/2 h-full p-10 2xl:px-20 flex flex-col justify-center'>
          <div className='w-full flex gap-2 items-center mb-6'>
            
            <span className='text-4xl text-yellow font-semibold font-lobster' >BuzzNest</span>
          </div>
          <p className='text-ascent-1 text-xl font-semibold'>
            Log in to your account
          </p>
          <span className='text-md mt-2 text-ascent-2'>Welcome back</span>
          <form className='py-8 flex flex-col gap-5'onSubmit={handleSubmit(onSubmit)} >
            <TextInput name='email'
              placeholder='email@example.com'
              label='Email Address'
              type='email'
              register={register("email", {
                required: "Email Address is required",
              })}
              styles='w-full rounded-full border-yellow'
              error={errors.email? errors.email.message:""}
              ></TextInput>
               <TextInput
              name='password'
              label='Password'
              placeholder='Password'
              type='password'
              styles='w-full rounded-full border-yellow'
              labelStyle='ml-2'
              register={register("password", {
                required: "Password is required!",
              })}
              error={errors.password ? errors.password?.message : ""}
            />
            <Link to='/reset-password'className='text-md text-right text-yellow font-semibold ' >forgot password</Link>
            {
              errMsg?.message &&(
                <span className={`text-sm ${
                  errMsg?.status == "failed"
                    ? "text-[#f64949fe]"
                    : "text-[#2ba150fe]"
                } mt-0.5`}>
                  {errMsg?.message}
                </span>
              )
            }
            {
              isSubmitting? <Loading /> :<CustomButton type='submit'
              containerStyles={`inline-flex justify-center rounded-md bg-yellow px-8 py-3 text-sm font-medium text-black outline-none`}
              title='Login' />
            }
          </form>
          <p className='text-ascent-2 text-md text-center'>
            Don't have an account?
            <Link
              to='/register'
              className='text-yellow font-semibold ml-2 cursor-pointer '
            >
              Create Account
            </Link>
          </p>
        </div>
        {/* Right */}
        <div className='hidden w-1/2 h-full lg:flex flex-col items-center justify-center bg-yellow'>
          <div className='relative w-full flex items-center justify-center'>
            <img
              src={logobee}
              alt='Bg Image'
              className='w-50 2xl:w-64 h-48 2xl:h-64  object-cover hover:scale-125 duration-500'
            />
          </div>

          <div className='mt-16 text-center'>
            <p className='text-black text-4xl font-bold font-lobster  '>
              BuzzNest
            </p>
            <div className=' text-black text-2xl  font-bold font-poiret'>
              Ignite your social world
            </div>
            <span className=' text-black text-2xl font-bold font-poiret'>
              one buzz at a time
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login