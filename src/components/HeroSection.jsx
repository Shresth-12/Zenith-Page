import React, { useEffect, useState } from 'react';
import '../styles/heroSection.css'
import { ChevronDown } from 'lucide-react'

const HeroSection = () => {
  const scrollToNextSection = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };


  // useEffect(() => {
  //   setTimeout(() => {
  //     document.querySelectorAll('.glitch').forEach(el => {
  //       el.classList.remove('glitch');
  //     });
  //   }, 4000);
  // }, []);
  const [isJumping, setIsJumping] = useState(false);
  const [autoJump, setAutoJump] = useState(true);

  useEffect(() => {
    let jumpInterval = null;

    if (autoJump) {
      jumpInterval = window.setInterval(() => {
        setIsJumping(true);
        setTimeout(() => setIsJumping(false), 1000);
      }, 2000);
    }

    return () => {
      if (jumpInterval) clearInterval(jumpInterval);
    };
  }, [autoJump]);

  const handleJump = () => {
    if (!isJumping) {
      setIsJumping(true);
      setTimeout(() => setIsJumping(false), 1000);
    }
  };

  return (
    <div className="min-h-[100vh]  bg-black relative">
      <div className="max-w-full md:mx-auto  h-screen">
        <div className="flex flex-col md:flex-row md:items-center justify-between h-full md:pt-16">
          {/* Text Content */}
          <div className="w-full   text-white  z-10 min-h-full flex flex-col md:justify-center md:translate-y-0 translate-y-[25%] md:!leading-[1] relative md:left-20 left-5 ">
            {['CODE.', 'CREATE.', 'CONQUER!'].map((text, index) => (
              <h1
                key={index}
                className="md:!text-[18vh] !text-[8vh] md:font-semibold glitch dm-sans-font"
                data-text={text}
              >
                {text}
              </h1>
            ))}
          </div>

          {/* Planet Image */}
          <div className="absolute md:right-0 md:-top-3  transform md:translate-x-[45%] bottom-0 translate-y-[45%] md:translate-y-0">
            <img
              src="https://res.cloudinary.com/devw55qwa/image/upload/v1739537542/global_1_vvswi6.png"
              alt="Mars Planet"
              className='max-h-[100vh] rotate-planet-hs'
            />
          </div>
        </div>

        {/* Astro*/}
        <div className='md:hidden absolute bottom-[22vh] translate-x-[40%] w-full '>
          <div
            className={`relative z-20 transition-transform duration-1000 ease-in-out transform ${isJumping ? 'translate-y-[-50px]' : 'translate-y-0'
              }`}
            onClick={handleJump}
          >
            <div className="astronaut w-20 h-24 relative cursor-pointer">
              {/* Astronaut body */}
              <div className="relative">
                {/* Helmet */}
                <div className="w-12 h-12 bg-gray-200 rounded-full mx-auto relative overflow-hidden border-2 border-gray-300">
                  <div className="absolute w-10 h-6 bg-black top-2 rounded-t-full"></div>
                  <div className="absolute w-2 h-2 bg-blue-400 top-5 right-2 rounded-full animate-pulse"></div>
                </div>

                {/* Body */}
                <div className="w-14 h-16 bg-white rounded-lg mx-auto mt-[-5px] relative">
                  <div className="absolute w-10 h-4 bg-gray-300 top-1 left-2 rounded-md flex items-center justify-center">
                    <span className="text-[6px] font-bold text-gray-600">ISRO</span>
                  </div>

                  {/* Arms */}
                  <div className={`absolute w-4 h-10 bg-white rounded-full left-[-6px] top-3 transform origin-top ${isJumping ? 'rotate-[-20deg]' : 'rotate-[-5deg]'
                    } transition-transform duration-500`}></div>
                  <div className={`absolute w-4 h-10 bg-white rounded-full right-[-6px] top-3 transform origin-top ${isJumping ? 'rotate-[20deg]' : 'rotate-[5deg]'
                    } transition-transform duration-500`}></div>

                  {/* Legs */}
                  <div className={`absolute w-4 h-8 bg-white rounded-full left-1 bottom-[-5px] transform origin-top ${isJumping ? 'rotate-[-25deg]' : 'rotate-[5deg]'
                    } transition-transform duration-500`}></div>
                  <div className={`absolute w-4 h-8 bg-white rounded-full right-1 bottom-[-5px] transform origin-top ${isJumping ? 'rotate-[25deg]' : 'rotate-[-5deg]'
                    } transition-transform duration-500`}></div>
                </div>
              </div>

              {/* Shadow */}
              <div className={`absolute bottom-[-40px] left-1/2 transform -translate-x-1/2 w-12 h-2 bg-gray-800 rounded-full opacity-30 transition-all duration-1000 ${isJumping ? 'scale-50 opacity-10' : 'scale-100 opacity-30'
                }`}></div>
            </div>
          </div>
        </div>

        {/* Scroll Down Button */}
        <button
          onClick={scrollToNextSection}
          className="md:absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-white animate-bounce rounded-full z-10 no-splash hidden"
          aria-label="Scroll down"
        >
          <ChevronDown size={32} />
        </button>
      </div>
    </div>
  )
}

export default HeroSection