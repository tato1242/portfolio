import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import unnamed from '../assets/unnamed.jpg';
import { Link } from "react-scroll"; 


const Home = () => {
  return (
    <div
    name="home"
    className="h-screen w-full bg-[#0a192f]"
  >
    <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
      <div className="flex flex-col justify-center h-full">
        <h2 className="text-4xl sm:text-7xl font-bold text-white">
          I'm a Front-End Web Developer
        </h2>

        <div>
          <Link
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
        <br></br>
        <img
          src={unnamed}  
          alt="my profile"
          className="rounded-4xl mx-auto w-2/3 "
        />
      </div>
    </div>
  </div>
  );
};
export default Home;