import React from 'react';
import { useEffect, useRef } from "react";
import Typed from "typed.js";
import { HiArrowNarrowRight } from 'react-icons/hi';
import me from '../assets/mozezz.png';
import { Link } from "react-scroll"; 

const Home = () => {

   // Create Ref element.
   const el = useRef(null);

   useEffect(() => {
     const typed = new Typed(el.current, {
       strings: ["I am  a Java Developer", "I am a Delphi Developer", "I am a React Developer", "I am a Front End Developer"], // Strings to display
       // Speed settings, try diffrent values untill you get good results
       startDelay: 300,
       typeSpeed: 120,
       backSpeed: 100,
       backDelay: 100,
       loop: true,
      showCursor: true
     });
 
     // Destropying
     return () => {
       typed.destroy();
     };
   }, []);

  return (
    <div
    name="home"
    className="h-screen w-full bg-[#121e30]"
  >
    <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
      <div className="flex flex-col justify-center h-full">
        <h2 className="text-4xl sm:text-4xl font-bold text-white"> 
          <span ref={el}></span>
        </h2>
        
        <p className="text-gray-500 py-4 max-w-md">
           I have 2 years of experience in developing backend systems.
          Currently, I love to work on web application using technologies like
          React, Tailwind, Next.js and Mongodb.
        </p>
        <div>
          <Link data-test="About-button"
            to="about"
            smooth
            duration={500}
            className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
          >
            About Me
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight size={25} className="ml-3" />
            </span>
          </Link>
        </div>
      </div>
      <div>
        <img
          src={me}  
          alt="my profile"
          className="rounded-2xl mx-auto w-2/3 md:w-full"
        />
      </div>
    </div>
  </div>
  );
};
export default Home;