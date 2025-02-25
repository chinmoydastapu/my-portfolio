import { HiOutlineDocumentArrowDown } from "react-icons/hi2";
import { Typewriter } from "react-simple-typewriter";

function HeroSection() {
    const words = ["<Problem Solver />", "<Creative Thinker />", "<React Enthusiast />", "<Freelancer />", "<TailwindCSS Expert />", "<Frontend Developer />", "<MERN Stack Developer />"];

    return (
        <div id="home" className="font-playfair h-screen flex flex-col justify-center items-center gap-10">
            <div className="text-center">
                <p className="text-6xl md:text-9xl font-bold">CHINMOY</p>
                <p className="text-6xl md:text-9xl font-bold">DAS</p>
            </div>
            <div className="text-center">
                <h3 className="text-lg md:text-4xl font-playfair italic font-semibold">
                    <span className="">I am a </span>
                    <span className="inline-block bg-clip-text text-transparent bg-gradient-text">
                        <Typewriter
                            words={words}
                            loop={true}
                            typeSpeed={20}
                            deleteSpeed={20}
                            delaySpeed={1500}
                        />
                    </span>
                </h3>
            </div>
            <button className="px-5 py-3 rounded bg-[#1b1e22] uppercase font-semibold shadow-custom cursor-pointer transition-all duration-300 ease-in-out hover:-translate-y-1 hover:bg-[#16181c] hover:text-[#ff6600] flex items-center gap-2"><HiOutlineDocumentArrowDown className="w-6 h-6" /><span>download my resume</span></button>
        </div>
    );
}

export default HeroSection;