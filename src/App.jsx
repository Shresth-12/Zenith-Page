import link from './assets/link.png'
import logo from './assets/logo.png'
import screen from "./assets/screen.png"
import Footer from './components/footer'
function App() {

  return (
    <div className="bg-black w-full h-fit pb-10 overflow-hidden">
    <div className='flex justify-center md:flex md:justify-center'>
      <div className='text-[#FF926A] text-[69px] font-[500]  opacity-25 md:text-[120px] md:font-[800]'>
        Our Work
      </div>
      <div className="text-[#FE5416] md:text-[64px] absolute inset-0 flex items-center justify-center z-10  mb-[520px]  md:mb-[500px] md:font-[600] text-[40px] font-[500] ">
          Projects
        </div>
     </div>
    <div className="md:flex-row flex flex-col">
          <div className="md:pl-28 md:pt-36 pl-4 pt-20">
            <div className="text-white md:font-[400] md:text-[34px] flex md:gap-80 text-[20px] font-[700] gap-60">
              RaceCraft 
              <div className="relative group pt-2 cursor-pointer w-fit">
  <img src={link} alt="" className='md:w-[36px] md:h-[36px] w-[26px] h-[26px] '/>
  <div className="absolute left-[-250%] top-1/2 -translate-y-1/2 text-white bg-[#FE5416] text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
    Open Link
  </div>
</div>

            </div>
            <div className='bg-white w-fit h-fit text-black mt-4 md:px-2 rounded-2xl md:py-1 text-[12px] md:text-[16px] px-4'>
              Automobile
            </div>
            <div className="text-white md:font-[400] md:text-[16px] md:w-[550px] pt-6 w-[360px] text-[14px]">
            Racekraft is an innovative motorsport education platform dedicated to nurturing racing talent in India. It offers professional training, simulations, and expert mentorship to aspiring racers. The platform bridges the gap between passion and profession in the world of motorsports.
            </div>
            <div className='text-white font-[400] md:text-[20px] pt-5 text-[16px]'>
            Tools and Technologies
            </div>
            <div className='md:w-[550px] md:flex md:gap-3 md:flex-wrap pt-2 flex gap-2 flex-wrap w-[360px]'>
            <div className='bg-white md:w-fit md:h-fit md:text-[16px] text-black mt-4 md:px-2  md:py-1 rounded-2xl text-[12px] px-2 py-1'>
              HTML
            </div>
            <div className='bg-white md:w-fit md:h-fit md:text-[16px] text-black mt-4 md:px-2  md:py-1 rounded-2xl text-[12px] px-2 py-1'>
              React
            </div>
            <div className='bg-white md:w-fit md:h-fit md:text-[16px] text-black mt-4 md:px-2  md:py-1 rounded-2xl text-[12px] px-2 py-1'>
              Node Js
            </div>
            <div className='bg-white md:w-fit md:h-fit md:text-[16px] text-black mt-4 md:px-2  md:py-1 rounded-2xl text-[12px] px-2 py-1'>
              Tailwind CSS
            </div>
            <div className='bg-white md:w-fit md:h-fit md:text-[16px] text-black mt-4 md:px-2  md:py-1 rounded-2xl text-[12px] px-2 py-1'>
             Mongo DB
            </div>
            <div className='bg-white md:w-fit md:h-fit md:text-[16px] text-black mt-4 md:px-2  md:py-1 rounded-2xl text-[12px] px-2 py-1'>
             Figma
            </div>
            </div>
            <div className='text-white font-[400] md:text-[20px] pt-5 text-[16px]'>
            Services Provided
            </div>
            <div className='w-[550px] flex gap-3 flex-wrap pt-2'>
            <div className='bg-white md:w-fit md:h-fit md:text-[16px] text-black mt-4 md:px-2  md:py-1 rounded-2xl text-[12px] px-2 py-1'>
              UI/UX Design
            </div>
            <div className='bg-white md:w-fit md:h-fit md:text-[16px] text-black mt-4 md:px-2  md:py-1 rounded-2xl text-[12px] px-2 py-1'>
             Web Development
            </div>
            </div>
            <div className='pt-10 flex gap-8'>
              <img src={logo} alt=""  className='md:w-[100px] md:h-[100px] rounded-full w-[60px] h-[60px]'/>
              <div className='md:text-[20px] text-[16px] font-[400] text-white md:pt-4 pt-2'>
              Vamshi <br /> Founder & CEO
              </div>
            </div>
          </div>
          <div>
          </div>
          <div className='md:pt-32 md:pl-20 hidden md:block'>
          <img src={screen} alt="" />
          </div>
        </div>
        <Footer/>
    </div>
  )
}

export default App
