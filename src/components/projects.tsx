import React from 'react'
import Heading from './heading'
import Card from './card'

const data = [
    {
        id: 0,
        title: "Countdown Timer",
        des: "A customizable countdown timer that allows users to set a time and receive an alert when it ends.",
        img: "/pg.jpg",
        tags: ["TypeScript", "React", "Next.js", "HTML", "CSS"]
    },
    {
        id: 1,
        title: "Weather App",
        des: "A simple weather application that fetches real-time weather data using an API and displays temperature, humidity, and forecast.",
        img: "/pg.jpg",
        tags: ["JavaScript", "HTML", "CSS"]
    },
    {
        id: 2,
        title: "Task Manager",
        des: "A to-do list web app where users can add, edit, delete, and mark tasks as completed.",
        img: "/pg.jpg",
        tags: ["TypeScript", "React", "Next.js", "CSS"]
    },
    {
        id: 3,
        title: "Portfolio Website",
        des: "A personal portfolio showcasing skills, projects, and contact information with a responsive design.",
        img: "/pg.jpg",
        tags: ["HTML", "CSS", "TypeScript", "Next.js"]
    },
    {
        id: 4,
        title: "Static Resume Builder",
        des: "A resume builder where users can input their details, and it generates a well-structured resume.",
        img: "/pg.jpg",
        tags: ["HTML", "CSS", "TypeScript"]
    },
    {
        id: 5,
        title: "Expense Tracker",
        des: "A web app to track daily expenses, categorize spending, and generate basic reports.",
        img: "/pg.jpg",
        tags: ["TypeScript", "React", "Next.js", "CSS"]
    },
]

const Projects = () => {
  return (
    <div id='projects' className='container pt-32'>
        <Heading title='My Projects' />
        <div className='grid gap-10 md:grid-cols-2 lg:grid-cols-3 place-items-center'>
            {data.map((el) => (
                <div key={el.id}>
                    <Card 
                        title={el.title}
                        des={el.des}
                        img={el.img}
                        tags={el.tags}
                    />
                </div>
            ))}
        </div>
    </div>
  )
}

export default Projects
