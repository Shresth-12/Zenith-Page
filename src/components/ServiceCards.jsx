import React from 'react';
import { useInView } from 'react-intersection-observer';

const Card = ({ title, description, index }) => {
  const { ref, inView } = useInView({
    threshold: 0.6,
    triggerOnce: true,
  });

  return (
    <div
      ref={ref}
      className={`sticky mb-4 pt-20`}
      style={{ zIndex: index, top: index * 4 }}
    >
      <div className="w-full">
        <div
          className={`
            bg-black/80 md:backdrop-blur-md flex-col justify-around rounded-xl 
            transition-shadow duration-500 hover:shadow-[0_10px_40px_rgba(254,84,22,0.9)]
            md:p-8 md:py-20 p-[2vh] py-[8vh] mission-cards md:text-start text-center
            md:h-[40vh] h-[80vh] w-full flex items-center 
            ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}
            ${inView ? 'opacity-100 translate-y-0 blur-none' : 'opacity-0 translate-y-20 blur-sm'}
          `}
          style={{ boxShadow: '0 10px 30px rgba(254, 84, 22, 0.6)' }}
        >
          <div className='md:w-[50%] flex justify-center'>
            <h2 className="text-[5vh] md:font-semibold md:ml-4 text-white dm-sans-font">
              {title}
            </h2>
          </div>
          <div className='w-[100%]'>
            <p className={`text-white leading-relaxed noto-sans-font ${index % 2 === 0 ? '' : 'md:ml-4'}`}>
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const cards = [
  {
    title: "Custom Web Development",
    description: "Every brand has a unique story, and a cookie-cutter website won’t do it justice. Our custom web design and development services offer tailor-made digital solutions that align with your business goals. We build responsive, high-performance websites from scratch, incorporating intuitive UI/UX design, seamless navigation, and cutting-edge technology to create an immersive digital experience",
  },
  {
    title: "UI/UX Design",
    description: "At Zenith Studio, our UI/UX designers are masterminds who merge creativity and functionality to build smooth digital interactions. With deep insights into user psychology, interaction design, and aesthetics, they convert ideas into intuitive, aesthetically engaging interfaces. All design choices are driven by detailed research and a firm dedication to user satisfaction so that each interaction is as sleek as it is seamless.",
  },
  {
    title: "Landing Pages & Promo Sites",
    description: "First impressions matter, and our landing pages and promotional websites are designed to capture attention instantly. We create sleek, conversion-focused pages optimized for lead generation, product launches, and marketing campaigns. By blending compelling design with persuasive content, we ensure your audience takes action—whether it’s making a purchase, signing up, or exploring your brand further.",
  },
  {
    title: "Website Redesign & Rebuild ",
    description: "Is your website outdated or underperforming? Our website revamping and upgrade services breathe new life into existing platforms. Whether it’s a design overhaul, speed optimization, mobile responsiveness improvements, or enhanced security features, we ensure your website evolves with industry standards and user expectations. A refreshed website means improved SEO, better engagement, and increased conversions.",
  },
  {
    title: "UI/UX Consultation",
    description: "A website is more than just an online presence—it’s a strategic asset. Our consulting services help businesses define their digital roadmap, improve user experience, and optimize their online strategy. From competitor analysis to performance audits, we provide actionable insights that enhance your brand’s positioning and ensure long-term digital success.",
  },
  {
    title: "Ongoing Support & Maintenance",
    description: "Our Zenith Studio full stack developers are innovation architects, skilled in front-end elegance and back-end accuracy. With cross-technology expertise, they develop strong, scalable, and high-performance digital solutions that meet each client's specific requirements. From designing responsive interfaces to streamlining server-side logic, they deliver smooth functionality, security, and efficiency—bridging the divide between design and technology with precision and sophistication.",
  },
];

function ServiceCards() {
  return (
    <div className="min-h-screen bg-black">
      <div className="pt-16 pb-96 flex justify-center">
        <div className='relative md:w-[70vw] md:px-0 px-4'>
          {cards.map((card, index) => (
            <Card
              key={index}
              title={card.title}
              description={card.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ServiceCards;
