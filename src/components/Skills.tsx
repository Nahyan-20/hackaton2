import React from 'react'

const Skills = () => {
  return (
    <div id='skills' className='container pt-32'>
        <div className=' grid md:grid-cols-2 gap-20 items-center'>
        <div>
            <h2 className= 'text-4xl md:text-5xl '  data-aos="fade-up"
     data-aos-duration="3000">My Development Stack</h2>
            <p className='text-gray-400 pt-2 text-justify'  data-aos="fade-up"
     data-aos-duration="3000">I have a strong foundation in computer languages and artificial intelligence, enabling me to develop efficient and intelligent solutions. My expertise includes programming languages like JavaScript, TypeScript, Python, and C++, which I use for building scalable applications. In the field of Artificial Intelligence, I work with machine learning algorithms, data processing, and AI frameworks to create smart systems that analyze data and automate tasks. With a passion for technology, I continuously explore new advancements to enhance my skills and build innovative solutions.</p>
        </div>
        <div>
            <div className='grid grid-cols-2 text-[#005F5F] text-3xl  sm:text-4xl '>
                <div className='space-y-2'>
                  <h2  data-aos="fade-up"
     data-aos-duration="3000">Next.js</h2>
                  <h2  data-aos="fade-up"
     data-aos-duration="3000">React.js</h2>
                  <h2  data-aos="fade-up"
     data-aos-duration="3000">Python</h2>
                </div>
                <div className='space-y-2'>
                  <h2  data-aos="fade-up"
     data-aos-duration="3000">Typescript</h2>
                  <h2  data-aos="fade-up"
     data-aos-duration="3000">Tailwind</h2>
                  <h2  data-aos="fade-up"
     data-aos-duration="3000">C++</h2>
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Skills