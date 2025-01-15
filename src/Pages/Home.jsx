import React from 'react'
import { Typewriter } from 'react-simple-typewriter';
import Navbar from '../assets/Nav/Navbar'
import ResumeImage from '../assets/Images/Resume.jpg';
export default function Home() {
  return (
    <>
      <Navbar/>
      <div className="text-start text-2xl font-bold h-screen bg-slate-300 text-red-900 p-5">
        <Typewriter
          words={['Welcome to Resume Builder', 'Here You can create your resume for Free!!!']}
          loop={-1} // Number of loops
          cursor
          cursorStyle="|"
          typeSpeed={70} // Speed of typing
          deleteSpeed={50} // Speed of deleting
          delaySpeed={1000} // Delay between words
        />
      <div className='bg-slate-300'>
      <img src={ResumeImage} alt="Home page image" className='w-96 h-[50rem] rotate-[40deg] absolute right-64 top-40 overflow-x-hidden rounded-md bg-transparent' />
      </div>
      </div>
    </>
  )
}
