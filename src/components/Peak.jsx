import { Link } from "react-router-dom"

const Peak = () => {
  return (
    <div className="min-h-[70vh] bg-black md:flex items-center md:px-16">
      <div className="md:max-w-[60vw] md:ml-[10vh] flex flex-col md:justify-center  items-center">
        <div className="flex items-start gap-4 flex-col md:max-w-[45vw] max-w-[90vw] md:mt-0 mt-[2vh]">
          <div className="flex-1 ">
            <h1 className="text-[9vh] md:font-semibold text-white leading-tight dm-sans-font">
              Let's take your business to its
              <span className="text-[#FF4D00]"> peak.</span>
            </h1>
          </div>
        </div>
        <div className=" md:absolute md:right-0 md:pr-20 md:mt-[14vh] no-splash noto-sans-font mt-[8vh]">
          <Link to="/contact-us" className="md:text-lg bg-white  text-black px-6 py-2 rounded-full bg-gradient-to-r hover:from-[#ff8a00] hover:to-[#ff4d00] hover:text-white ">
            Get a Quote
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Peak