import React from 'react'
import { FaPhoneAlt } from 'react-icons/fa'
import { GoMail } from 'react-icons/go'

const Contact = () => {
  return (
    <div id='contact' className='pt-32 container'>
      <div className='grid md:grid-cols-2 gap-10'>
        <div className='space-y-8'>
          <h2 className='text-5xl'  data-aos="fade-up"
     data-aos-duration="3000">Work With Me</h2>
          <p className='text-gray-400 text-[18px] pt-2 text-justify'  data-aos="fade-up"
     data-aos-duration="3000">
            Whether you have a project in mind, a question, or just want to connect, feel free to reach out! 
            I’m always open to discussing new opportunities, collaborations, or anything tech-related. You can 
            contact me via email or through my social media profiles. Let’s build something great together! 🚀
          </p> 
          <div className='flex gap-3 items-center'  data-aos="fade-up"
     data-aos-duration="3000">
            <GoMail size={30}/> nahyanaze@gamil.com
          </div>
          <div className='flex gap-3 items-center'  data-aos="fade-up"
     data-aos-duration="3000">
            <FaPhoneAlt size={30}  data-aos="fade-up"
     data-aos-duration="3000"/> +92 0300-890-2308
          </div>
          
        </div> 
        <div className='space-y-8'>
            <div className='flex flex-col gap-1 mt-1'>
                <label htmlFor='name'  data-aos="fade-up"
     data-aos-duration="3000">Name </label>
                <input type='text' className='h-[40px] bg-transparent border bg-[#005F5F] ' id='name'  data-aos="fade-up"
     data-aos-duration="3000"/>
            </div>
            <div className='flex flex-col gap-1'  data-aos="fade-up"
     data-aos-duration="3000" >
                <label htmlFor='email'>Email </label>
                <input type='text' className='h-[40px] bg-transparent border bg-[#005F5F] ' id='email'/>
            </div>
            <div className='flex flex-col gap-1'  data-aos="fade-up"
     data-aos-duration="3000">
                <label htmlFor='msg'>Message </label>
                <textarea className=' bg-transparent border bg-[#005F5F] ' id='msg' rows={3}></textarea>
               
            </div>
            <button className='bg-[#005F5F] p-2 px-6'  data-aos="fade-up"
     data-aos-duration="3000">Send</button>
        </div>
      </div> 
    </div>
  )
}

export default Contact
