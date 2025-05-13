const planningIcon = 'https://res.cloudinary.com/devw55qwa/image/upload/v1739880428/Frame_24_i7yghl.png';
const designIcon = 'https://res.cloudinary.com/devw55qwa/image/upload/v1739880438/Frame_25_qim21i.png';
const buildIcon = 'https://res.cloudinary.com/devw55qwa/image/upload/v1739880432/Frame_26_mgtlf3.png';
const testingIcon = 'https://res.cloudinary.com/devw55qwa/image/upload/v1739880423/Frame_27_xygmde.png';


const Process = () => {
    return (
        <div className="min-h-screen bg-black text-white">
            <div className="max-w-7xl min-h-screen mx-auto px-6 flex flex-col justify-evenly items-center">
                <div className=" flex flex-col items-center justify-center !dm-sans-font md:mt-0 mt-[2vh]">
                    <h1 className="md:text-8xl text-[8vh] md:font-bold text-[#FF926A] opacity-20 md:translate-y-0 ">Work Flow</h1>
                    <h2 className="md:text-6xl  text-[6vh] md:font-medium text-[#FE5416] md:-translate-y-9 -translate-y-[7vh]">Process</h2>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 md:gap-12 gap-6">
                    <div className="text-center">
                        <div className=" mx-auto md:mb-6 flex items-center justify-center">
                            <img src={planningIcon} alt="" className="md:h-48" />
                        </div>
                        <h3 className="text-[3.5vh] md:font-bold mb-4 dm-sans-font">Planning</h3>
                        <p className="text-gray-400 md:text-[2.5vh] noto-sans-font">Understanding your goals, audience, and needs.</p>
                    </div>

                    <div className="text-center">
                        <div className=" mx-auto md:mb-6 flex items-center justify-center mb-3">
                            <img src={designIcon} alt="" className="md:h-48" />
                        </div>
                        <h3 className="text-[3.5vh] md:font-bold mb-4 dm-sans-font">Design</h3>
                        <p className="text-gray-400 md:text-[2.5vh] noto-sans-font">Creating intuitive, visually appealing interfaces.</p>
                    </div>

                    <div className="text-center">
                        <div className="mx-auto md:mb-6 flex items-center justify-center">
                            <img src={buildIcon} alt="" className="md:h-48" />
                        </div>
                        <h3 className="text-[3.5vh] md:font-bold mb-4 dm-sans-font">Build</h3>
                        <p className="text-gray-400 md:text-[2.5vh] noto-sans-font">Developing strong, high-performance solutions with clean code.</p>
                    </div>

                    <div className="text-center">
                        <div className="mx-auto md:mb-6 flex items-center justify-center">
                            <img src={testingIcon} alt="" className="md:h-48" />
                        </div>
                        <h3 className="text-[3.5vh] md:font-bold mb-4 dm-sans-font">Testing</h3>
                        <p className="text-gray-400 md:text-[2.5vh] noto-sans-font">Providing smooth functionality, speed, and security.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Process;