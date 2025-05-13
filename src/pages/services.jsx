import React from 'react'
import ServiceCards from '../components/ServiceCards'


const ServicesPage = () => {
  return (
    <div>
      <div className="min-h-[80vh] bg-black flex items-center justify-center p-4 noto-sans-font">
        <div className="max-w-4xl  min-h-[80vh] text-center flex flex-col justify-evenly">
          {/* Large "We Serve" Background Text */}
          <div className="text-center mt-[10vh]">
            {/* “We Serve” in subdued text, “Services” layered in orange */}
            <h2 className=" text-4xl md:text-5xl   flex flex-col dm-sans-font">
              <span className="md:font-bold md:text-8xl text-[#FF926A] opacity-20 text-[8vh]">We Serve</span>
              <span className=" text-[#FE5416] md:-translate-y-9 -translate-y-[2vh] md:font-semibold">
                Services
              </span>
            </h2>
          </div>


          {/* Services Content */}
          <div className="">

            <p className="text-white text-[2vh] md:leading-relaxed max-w-3xl">
              At Zenith Studio, we design cutting-edge, custom-coded websites that redefine digital
              perfection. Our team has expertise in website development, UI/UX design, and easeful
              website remodeling, so your brand shines with elegance and accuracy. Each project is
              designed painstakingly, each line of code is intentional—because your online image is worth
              nothing but flawlessness. Let's create something sublime.
            </p>
          </div>
        </div>
      </div>
      <div>
      <ServiceCards />
      </div>
    </div>
  )
}

export default ServicesPage