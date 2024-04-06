import React from "react";
import { TbSocial } from "react-icons/tb";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import TextInput from "./TextInput";
import CustomButton from "./CustomButton";
import { useForm } from "react-hook-form";
import { BsMoon, BsSunFill } from "react-icons/bs";
import { IoMdNotificationsOutline } from "react-icons/io";
import { HiMiniQuestionMarkCircle } from "react-icons/hi2";
import { SetTheme } from "../redux/theme";
import { Logout } from "../redux/userSlice";
import { IoMdSearch } from "react-icons/io";
import { fetchPosts } from "../utils";

const TopBar = () => {
  const { theme } = useSelector((state) => state.theme);
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleTheme = () => {
    const themeValue = theme === "light" ? "dark" : "light";

    dispatch(SetTheme(themeValue));
  };

  const handleSearch = async (data) => { 
    await fetchPosts(user.token,dispatch,"",data);
  };

  return (
    <div className='topbar w-full flex items-center justify-between py-3 md:py-6 px-4 bg-primary  rounded-2xl '>
      <Link to='/' className='flex gap-2 items-center'>

        <span className='text-xl md:text-3xl text-yellow font-semibold font-lobster'>
          BuzzNest
        </span>
      </Link>

      <form
        className='hidden md:flex items-center justify-center'
        onSubmit={handleSubmit(handleSearch)}
      >
        <div className="flex items-center ">
          <TextInput
            placeholder='Search...'
            styles='w-[18rem] lg:w-[38rem] border-yellow rounded-l-full py-3  font-poiret'
            register={register("search")}
          />
          <CustomButton
            iconRight={<IoMdSearch  />}
            type='submit'
            containerStyles='bg-yellow  text-black px-6 <py-3></py-3> rounded-r-full h-12 '
          />
        </div>
      </form>



      {/* ICONS */}
      <div className='flex gap-4 items-center text-ascent-1 text-md md:text-xl'>
        <button onClick={() => handleTheme()}>
          {theme ? <BsMoon className="hover:scale-150 duration-300" /> : <BsSunFill />}
        </button>
        <div className='hidden lg:flex'>
          <Link to={'/About'} ><HiMiniQuestionMarkCircle className="hover:scale-150 duration-300" /></Link>
        </div>

        <div>
          <CustomButton
            onClick={() => dispatch(Logout())}
            title='Log Out'
            containerStyles='text-md text-ascent-1 px-4 md:px-6 py-1 md:py-2 border border-yellow rounded-full hover:scale-110 duration-300 font-poiret'
          />
        </div>
      </div>
    </div>
  );
};

export default TopBar;