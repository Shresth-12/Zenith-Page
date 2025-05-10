import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../styles/navBar.css'



const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        // <div className='flex justify-center bg-black'>
        <nav className="no-splash noto-sans-font bg-transparent absolute z-40 min-w-[100vw] flex items-center justify-center min-h-24">
            <div className="  px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-center h-18">
                    {/* Logo */}
                    <Link className=" sm:left-12 left-0 absolute " to={'/'}>
                        <img src="https://res.cloudinary.com/devw55qwa/image/upload/v1739528292/logo_dx8qir.png" className='w-40' alt="" />
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center justify-center  bg-white px-5 py-2 rounded-3xl">
                        <div className="flex items-center space-x-8">
                            <Link to="/"  className="text-gray-800 hover:text-[#FE5416] text-sm">
                                Home
                            </Link>
                            <Link to="/about" className="text-gray-800 hover:text-[#FE5416] text-sm">
                                About us
                            </Link>
                            <Link to="/services" className="text-gray-800 hover:text-[#FE5416] text-sm">
                                Services
                            </Link>
                            <Link to="/blog" className="text-gray-800 hover:text-[#FE5416] text-sm">
                                Blogs
                            </Link>
                            <Link
                                to="/contact-us"
                                className=" px-4 py-2 rounded-full text-sm contact-us-btn hover:text-white bg-gradient-to-r hover:from-[#ff8a00] hover:to-[#ff4d00]  border-[#B8B8B8] border-[1px] "
                            >
                                Get a Quote
                            </Link>
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden h-10 absolute right-5" onClick={toggleMenu}>

                        <img className='h-full' src="https://res.cloudinary.com/devw55qwa/image/upload/v1740983211/hamburger_menu_ri6bqp.png" alt="" />

                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={`fixed inset-0 bg-black z-50 transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}
            >
                <div className="flex flex-col h-full">
                    {/* Mobile Menu Header */}
                    <div className="px-6 py-12 flex justify-between items-center h-18">
                        <Link className="sm:left-12 left-0 absolute" to={'/'}>
                            <img src="https://res.cloudinary.com/devw55qwa/image/upload/v1739528292/logo_dx8qir.png" className='w-40' alt="" />
                        </Link>
                        <div className="md:hidden h-10 absolute right-5" onClick={toggleMenu}>

                            <img className='h-full' src="https://res.cloudinary.com/devw55qwa/image/upload/v1740983211/cross_lkpktz.png" alt="" />

                        </div>
                    </div>

                    {/* Mobile Menu Links */}
                    <div className="flex flex-col px-6 py-8 space-y-6 flex-grow">
                        <Link to={'/'} onClick={toggleMenu} className="text-white text-xl font-medium">Home</Link>
                        <Link to={'/about'} onClick={toggleMenu} className="text-white text-xl font-medium">About us</Link>
                        <Link to={'/services'} onClick={toggleMenu} className="text-white text-xl font-medium">Services</Link>
                        <Link to={'/blog'} onClick={toggleMenu} className="text-white text-xl font-medium">Blogs</Link>
                    </div>

                    {/* Get a Quote Button */}
                    <div className="px-6 pb-8 w-[100vw] flex">
                        <Link to={'/contact-us'} onClick={toggleMenu} className="w-full flex justify-center bg-white text-black py-3 px-6 rounded-full font-medium">
                            Get a Quote
                        </Link>
                    </div>
                </div>
            </div>
        </nav>

        // </div>
    )
}

export default NavBar