import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 no-splash noto-sans-font md:flex md:justify-center  w-screen">
      <div className="w-[100vw] px-[5vw]">
        {/* Top Section with 4 "columns" (becomes 1 col on mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Logo + Contact Info */}
          <div className="flex flex-col items-center md:items-start">
            <Link to="/">
              <img
                className="md:h-20 mb-4"
                src="https://res.cloudinary.com/devw55qwa/image/upload/v1739528292/logo_dx8qir.png"
                alt="zenith logo"
              />
            </Link>
            <div className="text-base text-center md:text-left">
              <h3 className="mb-2 md:font-semibold">Contact Info</h3>
              <p>Email: business@zenithstudio.in</p>
            </div>
          </div>

          <div className='flex justify-evenly'>
            {/* Navigation Links */}
            <div className="flex flex-col items-center md:items-start">
              <ul className="leading-8 text-center md:text-left">
                <li>
                  <Link to="/" className="hover:text-[#FE5416]">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="hover:text-[#FE5416]">
                    About us
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="hover:text-[#FE5416]">
                    Services
                  </Link>
                </li>
                <li>
                  <Link to="#" className="hover:text-[#FE5416]">
                    Work
                  </Link>
                </li>
                <li>
                  <Link to="/blog" className="hover:text-[#FE5416]">
                    Blogs
                  </Link>
                </li>
              </ul>
            </div>

            {/* Social Links */}
            <div className="flex flex-col items-center md:items-start">
              <ul className="leading-8 text-center md:text-left">
                <li>
                  <a
                    href="https://www.linkedin.com/company/zenith-studio-in"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-[#FE5416]"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href="https://wa.me/919441878744"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-[#FE5416]"
                  >
                    WhatsApp
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/code_at_zenith/?hl=en"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-[#FE5416]"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/code_at_zenith/?hl=en"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-[#FE5416]"
                  >
                    X.Com
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/code_at_zenith/?hl=en"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-[#FE5416]"
                  >
                   Facebook
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {/* Address */}
          <div className="flex flex-col items-center md:items-end">
  <h3 className="text-4xl md:text-2xl mb-4 md:mr-64 dm-sans-font text-center md:text-left">
    Find us at
  </h3>
  <p className="text-base text-center md:text-left md:w-[25vw]">
    Plot #682, 5th floor, Babukhan Rasheed Plaza, Road No 36, Aditya
    Enclave, Venkatagiri, Jubilee Hills, Hyderabad, Telangana 500033
  </p>
  <iframe
  title="Zenith Studio Location"
  className="w-full md:w-[22vw] h-48 rounded-xl border-0 mt-4 md:mr-10"
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.017118850811!2d78.4010821!3d17.4366945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9145d8918209%3A0xe96031c98b92b704!2sRENT%20A%20DESK!5e0!3m2!1sen!2sin!4v1715530798000!5m2!1sen!2sin"
  allowFullScreen=""
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
/>

</div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white mt-8 pt-4 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-2 md:mb-0 text-left">
            © ZENITH Studio / All Rights Reserved.
          </div>
          <div className="flex space-x-4">
          <a href="/cookie" className="hover:text-[#FE5416]">
      Cookies
    </a>
    <a href="/privacy" className="hover:text-[#FE5416]">
      Privacy Policy
    </a>
    <a href="/terms" className="hover:text-[#FE5416]">
      Terms of service
    </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;