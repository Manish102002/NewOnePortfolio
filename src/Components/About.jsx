import React from "react";
import { FaGithub } from "react-icons/fa";

const About = () => {
  return (
    <>
      <div className=" min-h-full overflow-x-hidden mt-10 mb-10">
        <p className=" font-[ranga] text-white lg:text-[4.4vw] md:text-[4.4vw] sm:text-[4.4vw] text-[6.4vw]  text-center lg:px-44 md:px-28 sm:px-20 px-3">
          Hi! <br /> I'm Manish, a frontend developer. I am an enthusiatic,
          self-motivated, reliable, responsible and hard working person. I am a
          mature team worker and adaptable to all challenging situations. I am
          able to work well both in a team enviroment as well as using own
          initiative.
        </p>
        <div className=" font-[gem] flex justify-center gap-9 my-10 text-white">
          <button className="px-8 py-2 bg-blue rounded-[50px] text-[1.5vw] font-bold ">
            <a href="https://www.instagram.com/manish_choudhary__x04" target="_blank" >Say Hi 👋🏻</a>
          </button>
          <button className=" flex  px-8 py-2 bg-red rounded-[50px] lg:text-[1.5vw] md:text-[1.5vw] sm:text-[1.5vw] text-[2vw] font-bold">
            <a href="https://github.com/Manish102002" target="_blank">
            <div className="flex justify-center items-center gap-3">
              <div>Watch my repo</div>
              <div><FaGithub /></div>
              </div>
            </a>
          </button>
        </div>
      </div>
    </>
  );
};

export default About;
