import React from 'react';
import '../styles/about.css'

const About = () => {
  return (
    <div className="bg-black text-white max-w-[100vw] min-h-[50vh] flex justify-center items-center  relative">
      <div className="max-w-7xl  px-6 flex flex-col items-center justify-center">
        <div className=" flex flex-col items-center justify-center !dm-sans-font">
          <h1 className="md:text-8xl text-[8vh] md:font-bold text-[#FF926A] opacity-20 md:translate-y-0 ">About Us</h1>
          <h2 className="md:text-6xl  text-[6vh] md:font-medium text-[#FE5416] md:-translate-y-9 -translate-y-[7vh]">About</h2>
        </div>

        <div className="md:mt-24 max-w-4xl  text-center">
          <p className="md:text-xl text-[1.9vh] leading-relaxed text-gray-300 noto-sans-font">
            Where innovation meets design. At Zenith Studios, we specialize in creating custom websites
            and exceptional digital experiences that set your business apart. With a focus on cutting-edge
            technology, user centered design, and bespoke solutions, we help you unlock the true
            potential of your online presence.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;