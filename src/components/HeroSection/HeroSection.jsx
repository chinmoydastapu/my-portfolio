import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { HiOutlineDocumentArrowDown } from "react-icons/hi2";

function HeroSection() {
    const words = ["<Problem Solver />", "<Creative Thinker />", "<React Enthusiast />", "<Freelancer />", "<TailwindCSS Expert />", "<Frontend Developer />", "<MERN Stack Developer />"];
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % words.length);
        }, 3000);

        return () => clearInterval(interval);
    }, [words.length]);

    return (
        <div className="font-playfair h-screen flex flex-col justify-center items-center gap-10">
            <div className="text-center">
                <p className="text-6xl md:text-9xl font-bold">CHINMOY</p>
                <p className="text-6xl md:text-9xl font-bold">DAS</p>
            </div>
            <div className="text-center">
                <span className="text-lg md:text-xl">I am a</span>
                <h3 className="text-lg md:text-4xl overflow-hidden">
                    <motion.span
                        key={words[index]}
                        initial={{ x: 300, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: -300, opacity: 0 }}
                        transition={{ duration: 1 }}
                        className="text-orange-400 inline-block font-bold bg-gradient-text text-transparent bg-clip-text italic"
                    >
                        {words[index]}
                    </motion.span>
                </h3>
            </div>
            <button className="px-5 py-3 rounded bg-[#1b1e22] uppercase font-semibold shadow-custom cursor-pointer transition-all duration-300 ease-in-out hover:-translate-y-1 hover:bg-[#16181c] hover:text-orange-400 flex items-center gap-2"><HiOutlineDocumentArrowDown className="w-6 h-6" /><span>download my resume</span></button>
        </div>
    );
}

export default HeroSection;