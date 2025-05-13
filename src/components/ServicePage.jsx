import { useState } from 'react';

export default function Services() {
  // Desktop state (unchanged from your code)
  const [activeIndex, setActiveIndex] = useState(0);

  // Mobile: keep track of exactly one open item
  // Start with 0 so the first item is open
  const [openIndex, setOpenIndex] = useState(0);

  const services = [
    {
      title: 'Custom Web Development',
      description:
        'Develop scalable, secure, and high-performance web applications that are customized to suit your business requirements, providing hassle-free functionality and scalability.',
    },
    {
      title: 'UI/UX Design',
      description:
        'Design intuitive, interactive, and user-centric interfaces that create a better digital experience and boost user satisfaction.',
    },
    {
      title: 'Landing Page & Promo site',
      description:
        'Design high-converting, visually appealing landing pages and promo sites that stop traffic and improve conversions.',
    },
    {
      title: 'Web Redesign & Rebuild',
      description:
        'Revamp your current site with a fresh, responsive, and SEO-optimized design for improved performance and user experience.',
    },
    {
      title: 'UI/UX Consultation',
      description:
        'Get professional advice on usability, accessibility, and design flow to maximize the overall efficiency of your digital products.',
    },
    {
      title: 'Ongoing Support & Maintenance',
      description:
        'Get long-term stability and optimal performance with regular updates, security scans, and technical support.',
    },
  ];

  // Mobile accordion toggle
  // - If the same item is clicked again, close it by setting `openIndex` to null
  // - Otherwise, open the clicked item
  const handleAccordionToggle = (index) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <section className="bg-black text-white min-w-[100vw] min-h-[100vh] flex flex-col items-center">
      {/* --- Heading Section --- */}
      <div className="text-center mt-[10vh]">
        <div className="flex flex-col items-center justify-center !dm-sans-font">
          <h1 className="md:text-8xl text-[8vh] md:font-bold text-[#FF926A] opacity-20 md:translate-y-0">
            We Serve
          </h1>
          <h2 className="md:text-6xl text-[6vh] md:font-medium text-[#FE5416] md:-translate-y-9 -translate-y-[7vh]">
            Services
          </h2>
        </div>
      </div>

      {/* --- Desktop Layout (hidden on mobile) --- */}
      <div className="hidden md:flex flex-row gap-8 w-full justify-center mt-8">
        {/* --- Left Panel: Active Service Details --- */}
        <div className="flex-1 flex flex-col justify-center items-center max-w-[50vw]">
          <h3 className="text-4xl font-semibold dm-sans-font">
            {services[activeIndex].title}
          </h3>
          <p className="mt-12 text-center text-2xl px-14 noto-sans-font">
            {services[activeIndex].description}
          </p>
        </div>

        {/* --- Right Panel: Service List --- */}
        <div className="-rotate-90 min-w-[40vw] min-h-[50vh] flex flex-col justify-end dm-sans-font no-splash">
          {services.map((service, index) => (
            <div key={index}>
              <hr
                className={`w-[80%]  ${
                  activeIndex === index ? 'text-white' : 'opacity-[0.05] '
                }`}
              />
              <button
                onClick={() => setActiveIndex(index)}
                className={`w-full text-left leading-[3] text-4xl font-medium transition-colors duration-300 ${
                  activeIndex === index ? 'text-white' : 'text-gray-500'
                } hover:text-white`}
              >
                {index + 1}. {service.title}
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* --- Mobile Layout: Accordion (hidden on desktop) --- */}
      <div className="md:hidden w-full px-4 mt-8 no-splash">
        {services.map((service, index) => {
          const isOpen = openIndex === index;
          return (
            <div key={index} className="py-4">
              {/* Accordion header */}
              <button
                onClick={() => handleAccordionToggle(index)}
                className={`flex w-full justify-between items-center text-left focus:outline-none transition-colors duration-300 ${
                  isOpen ? 'text-white' : 'text-gray-500'
                }`}
              >
                <span className="text-xl font-medium">
                  {index + 1}. {service.title}
                </span>
                
              </button>

              {/* Accordion content */}
              {isOpen && (
                <p className="mt-3 pl-[5vw] text-gray-300">
                  {service.description}
                </p>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}