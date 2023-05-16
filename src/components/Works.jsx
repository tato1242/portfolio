import React from 'react';
import capture from '../assets/Capture.PNG';
import capture2 from '../assets/Capture2.PNG';
import capture4 from '../assets/Capture3.PNG';
import capture3 from '../assets/Capture4.PNG';

const Works = () => {
  return (
    <div name='work' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8 w-full flex justify-center items-center flex-col'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-cyan-500'>
            Work
          </p>
          <p className='py-6 text-2xl'>Check out some of my most recent work</p>
        </div>
{/* Container */}
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
            {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${capture})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col'>
              <span className=' text-lg font-bold text-white tracking-wider'>
              food order app  react (Practice)
              </span>

            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${capture2})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col'>
              <span className=' text-lg font-bold text-white tracking-wider'>
                TODO APP
              </span>
              <p className='text-center'>built with React and CSS</p>
              
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${capture3})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col'>
              <span className=' text-lg font-bold text-white tracking-wider'>
                Novelty Calendar
              </span>
              <p className='text-center'>built with Typescript React and tailwind</p>

            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${capture4})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col'>
              <span className=' text-lg font-bold text-white tracking-wider'>
              Novelty Calendar
              </span>
              <p className='text-center'>built with Typescript React and tailwind</p>

            </div>
          </div>
          
          
        </div>
      </div>
    </div>
  );
};
export default Works;