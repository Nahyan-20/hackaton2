import React from 'react'
import NavBar from './navBar'

const Hero = () => {
  return (
    <div className='min-h-screen  bg-no-repeat bg-left lg:bg-[15%]  bg-[url(/wd.png)]' id='hero'
      style={{backgroundSize: "35%"}} >
        <NavBar/>
        <div className='container grid lg:grid-cols-2 h-[calc(100vh-60px)]'>
          <div className='hidden lg:block'></div>
          <div className='text-[40px] sm:text-[50px] font-bold leading-tight flex justify-center items-center'>
            <div>
              <h3  data-aos="fade-up"
     data-aos-duration="3000"> Welcome To My Portfolio </h3>
              <h1 className='text-[30px] sm:text-[40px]' data-aos="fade-up"
     data-aos-duration="3000" >I'm Nahyan Laurent</h1>
              
            </div>
          </div>
        </div>
    </div>
  )
}

export default Hero