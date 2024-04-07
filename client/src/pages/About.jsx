import React from 'react'
import { logobee, } from '../assets';
import { kunal } from '../assets';
import { ivan } from '../assets';
import { nirbhay } from '../assets';

const About = () => {
    return (
        <div className='anibag w-full h-[100vh] flex items-center justify-center p-6 '>
          <div className='w-full md:w-2/3 h-fit lg:h-full 2xl:h-5/6 py-8 lg:py-0 flex bg-primary rounded-xl overflow-hidden shadow-xl font-poiret'>
            {/* Left */}
            <div className='w-full lg:w=1/2 h-full p-10 2xl:px-20 flex flex-col justify-center'>
              <div className='w-full flex gap-2 items-center mb-6'>
                
                <span className='text-5xl text-grell font-semibold' >Our Team</span>
              </div>
              <div className='w-full flex gap-2 items-center mb-6'>
                
              <p className='text-ascent-1 text-2xl font-semibold'> Kunal Mittal - Design/User Experience Curation </p>
              </div>
              <div className='w-full flex gap-2 items-center mb-6'>
                
              <p className='text-ascent-1  text-2xl font-semibold'> Ivan Bhargava - Front End / Deployment </p>
              </div>
              <div className='w-full flex gap-2 items-center mb-6'>
                
              <p className='text-ascent-1 text-2xl font-semibold'> Nirbhay Sharma - Back End / Version Control  </p>
              </div>
              <div className='w-full flex gap-3 justify-centre  mt-10 '>
                <img src={kunal} className=' w-1/3 h-5/6 rounded-xl hover:scale-125 duration-500' ></img>
                <img src={ivan} className='w-1/3 h-5/6 rounded-xl hover:scale-125 duration-500' ></img>
                <img src={nirbhay} className='w-1/3 h-5/6 rounded-xl hover:scale-125 duration-500' ></img>
              </div>
            </div>
            {/* Right */}
            <div className='hidden w-1/2 h-full lg:flex flex-col items-center justify-center bg-grell'>
              <div className='relative w-full flex items-center justify-center'>
                <img
                  src={logobee}
                  alt='Bg Image'
                  className='w-50 2xl:w-64 h-48 2xl:h-64  object-cover hover:scale-125 duration-500'
                />
              </div>
    
              <div className='mt-16 text-center'>
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
      )
}

export default About;