import React from 'react';
import "../styles/slider.css"
import { useNavigate } from 'react-router-dom';

const images = [
    "https://res.cloudinary.com/devw55qwa/image/upload/v1740651038/IMG_2655_cabx29.jpg",
    "https://res.cloudinary.com/devw55qwa/image/upload/v1740651140/IMG_2730_1_bqfjij.jpg",
    "https://res.cloudinary.com/devw55qwa/image/upload/v1740652467/IMG_20250227_160355_gq4l04.jpg",
    "https://res.cloudinary.com/devw55qwa/image/upload/v1740652151/IMG_20250227_112818_yzmkj4.jpg",
    "https://res.cloudinary.com/devw55qwa/image/upload/v1740652178/IMG_20250227_113155_1_zvm6n2.jpg",
    "https://res.cloudinary.com/devw55qwa/image/upload/v1740654677/IMG_2589_oxnzvw.jpg",

    "https://res.cloudinary.com/devw55qwa/image/upload/v1740651038/IMG_2655_cabx29.jpg",
    "https://res.cloudinary.com/devw55qwa/image/upload/v1740651140/IMG_2730_1_bqfjij.jpg",
    "https://res.cloudinary.com/devw55qwa/image/upload/v1740652467/IMG_20250227_160355_gq4l04.jpg",
    "https://res.cloudinary.com/devw55qwa/image/upload/v1740652151/IMG_20250227_112818_yzmkj4.jpg",
    "https://res.cloudinary.com/devw55qwa/image/upload/v1740652178/IMG_20250227_113155_1_zvm6n2.jpg",
    "https://res.cloudinary.com/devw55qwa/image/upload/v1740654677/IMG_2589_oxnzvw.jpg",
];

function Carousel() {
    const navigate = useNavigate();

    const goToTeamSection = () => {
        navigate("/about#team"); // Redirects to About page and scrolls to #team

    };
    return (
        <div className="min-h-screen bg-black flex flex-col items-center justify-between py-16 relative overflow-hidden">

            {/* Title section */}
            <div className=" flex flex-col items-center justify-center !dm-sans-font">
                <h1 className="md:text-8xl text-[8vh] md:font-bold text-[#FF926A] opacity-20 md:translate-y-0 ">Team</h1>
                <h2 className="md:text-6xl  text-[6vh] md:font-medium text-[#FE5416] md:-translate-y-9 -translate-y-[7vh]">Team</h2>
            </div>

            {/* Carousel container */}
            <div className="slider">
                <div className="slide-track">
                    {images.map((src, index) => (
                        <div className="slide" key={index}>
                            <img src={src} alt={`slide-${index}`} />
                        </div>
                    ))}
                </div>
            </div>

            {/* Button section */}
            <div className="mt-16 flex md:justify-end w-full md:pr-20 no-splash noto-sans-font justify-center">
                <button onClick={goToTeamSection} className="md:text-lg bg-white text-black px-6 py-2 rounded-full   bg-gradient-to-r hover:from-[#ff8a00] hover:to-[#ff4d00] hover:text-white transition-colors shadow-md">
                    Meet the Team
                </button>
            </div>


        </div>
    );
}

export default Carousel;