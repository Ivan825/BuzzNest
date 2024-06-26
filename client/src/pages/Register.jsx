import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { CustomButton, Loading, TextInput } from "../components";
import { logobee } from "../assets";
import { apiRequest } from "../utils";

const Register = () => {
  const [errMsg, setErrMsg] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      const res= await apiRequest({
        url:'https://buzznest-3.onrender.com/auth/register',
        data:data,
        method:'POST'
      });
     
      if(res?.status=== "failed"){
        setErrMsg(res);
      } else{
        setErrMsg(res);
        setTimeout(()=>{
          window.location.replace("/login");
        },5000);
      }
      setIsSubmitting(false);
    } catch (error) {
      console.log(error);
      setIsSubmitting(false);
    }
  };

  
  return (
    <div className='anibag w-full h-[100vh] flex items-center justify-center p-6'>
      <div className='w-full md:w-2/3 h-fit lg:h-full 2xl:h-5/6 py-8 lg:py-0 flex flex-row-reverse bg-primary rounded-xl overflow-hidden shadow-xl font-poiret'>
        {/* LEFT */}
        <div className='w-full lg:w-1/2 h-full p-10 2xl:px-20 flex flex-col justify-center '>
          <div className='w-full flex gap-2 items-center mb-6'>
            <span className='text-4xl text-grell font-semibold font-lobster' >
              Buzz Nest
            </span>
          </div>

          <p className='text-ascent-1 text-2xl font-semibold'>
            Create your account
          </p>

          <form
            className='py-8 flex flex-col gap-5'
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className='w-full flex flex-col lg:flex-row gap-1 md:gap-2'>
              <TextInput
                name='firstName'
                label='First Name'
                placeholder='First Name'
                type='text'
                styles='w-full border-grell'
                register={register("firstName", {
                  required: "First Name is required!",
                })}
                error={errors.firstName ? errors.firstName?.message : ""}
              />

              <TextInput
                label='Last Name'
                placeholder='Last Name'
                type='lastName'
                styles='w-full border-grell'
                register={register("lastName", {
                  required: "Last Name do no match",
                })}
                error={errors.lastName ? errors.lastName?.message : ""}
              />
            </div>

            <TextInput
              name='email'
              placeholder='email@example.com'
              label='Email Address'
              type='email'
              register={register("email", {
                required: "Email Address is required",
              })}
              styles='w-full border-grell'
              error={errors.email ? errors.email.message : ""}
            />

            <div className='w-full flex flex-col lg:flex-row gap-1 md:gap-2'>
              <TextInput
                name='password'
                label='Password'
                placeholder='Password'
                type='password'
                styles='w-full border-grell text-md'
                register={register("password", {
                  required: "Password is required!",
                })}
                error={errors.password ? errors.password?.message : ""}
              />

              <TextInput
                label='Confirm Password'
                placeholder='Password'
                type='password'
                styles='w-full border-grell'
                register={register("cPassword", {
                  validate: (value) => {
                    const { password } = getValues();

                    if (password != value) {
                      return "Passwords do no match";
                    }
                  },
                })}
                error={
                  errors.cPassword && errors.cPassword.type === "validate"
                    ? errors.cPassword?.message
                    : ""
                }
              />
            </div>

            {errMsg?.message && (
              <span
                className={`text-sm ${
                  errMsg?.status == "failed"
                    ? "text-[#f64949fe]"
                    : "text-[#2ba150fe]"
                } mt-0.5`}
              >
                {errMsg?.message}
              </span>
            )}

            {isSubmitting ? (
              <Loading />
            ) : (
              <CustomButton
                type='submit'
                containerStyles={`inline-flex justify-center rounded-md bg-grell px-8 py-3 text-md font-medium text-black outline-none`}
                title='Create Account'
              />
            )}
          </form>

          <p className='text-ascent-2 text-md text-center'>
            Already has an account?{" "}
            <Link
              to='/login'
              className='text-grell font-semibold ml-2 cursor-pointer'
            >
              Login
            </Link>
          </p>
        </div>
        {/* RIGHT */}
        <div className='hidden w-1/2 h-full lg:flex flex-col items-center justify-center bg-grell'>
        <div className='relative w-full flex items-center justify-center font'>
            <img
              src={logobee}
              alt='Bg Image'
              className='w-50 2xl:w-64 h-48 2xl:h-64  object-cover hover:scale-125 duration-500'
            />
          </div>

          <div className='mt-16 text-center '>
            <p className='text-black text-2xl font-bold font-lobster '>
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
  );
};

export default Register; 
