import About from "../components/AboutPage"
import Carousel from "../components/Carousel"
import HeroSection from "../components/HeroSection"
import Peak from "../components/Peak"
import Process from "../components/Process"
import ServicesPage from "./services"
import '../styles/about.css'
import Services from "../components/ServicePage"
import NavBar from "../components/NavBar"
import Footer from "../components/footer"



const HomePage = () => {

  return (
    <div className="max-w-[100vw] min-w-[100vw] overflow-hidden ">
      <HeroSection />
      <About />
      <Services />
      <Process />
      <Carousel />
      <Peak />
      <Footer/>
    </div>

  )
}

export default HomePage