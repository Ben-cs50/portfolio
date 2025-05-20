import React from "react";

const About = () => { 
  return (
    <div
      name="about"
      id="about"
      className="w-full h-screen bg-[#0a192f] text-gray-300"
    >
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className=" py-16 rounded-md bg-cyan-800 flex flex-col justify-center items-center w-4/6">
          <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8 mb-4">
            <div className="sm:text-right pb-8 pl-4">
              <p data-test="About-form" className="text-4xl font-bold inline border-b-4 border-cyan-500">
                About
              </p>
            </div>
            <div></div>
          </div>
          <div  className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
            <div data-test="About-intro" className="sm:text-right text-4xl font-bold">
                <h1 data-test="About-header">About</h1>
              <p>
                Hi. I'm Moses Orucho, nice to meet you. Please take a
                look around.
              </p>
            </div>
            <div> data-test="developer-bio"
              <p>
                Experienced backend developer with expertise in Java, Python, Django, and Delphi.
                Currently exploring front-end development with a keen interest in React, Node.js, and Tailwind CSS. 
                Dedicated to crafting efficient solutions and delivering exceptional user experiences. 
                Let's collaborate and build something extraordinary together.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;