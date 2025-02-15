"use client";

import About from "@/components/About";
import Contact from "@/components/Contact";
import Hero from "@/components/hero";
import NavBar from "@/components/navBar";
import Projects from "@/components/projects";
import Skills from "@/components/Skills";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-back",
      duration: 1200,
      delay: 100,
      mirror: true,
      anchorPlacement: "bottom-bottom",
      offset: 160,
    });
    AOS.refresh(); // animations will work only when refreshed
  }, []);

  return (
    <main className="">
      <Hero />
      <Projects />
      <Skills />
      <Contact />
      <About />
    </main>
  );
}
