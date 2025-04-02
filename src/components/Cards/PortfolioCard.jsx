import { useState } from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub, FaLink } from "react-icons/fa";

const PortfolioCard = ({ data }) => {
    const { image, name, techStack, liveDemo, github } = data;
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="relative overflow-hidden rounded cursor-pointer bg-[#212428]"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Thumbnail Image */}
            <motion.img
                src={image}
                alt={name}
                className="w-full h-64 object-cover transition-transform duration-500"
                animate={{ filter: isHovered ? "brightness(50%)" : "brightness(100%)" }}
                transition={{ duration: 0.5 }}
            />

            {/* Details Popup */}
            <motion.div
                className="absolute bottom-0 left-0 w-full p-5 shadow-custom bg-[#1b1e22]"
                initial={{ y: "100%" }}
                animate={{ y: isHovered ? 0 : "100%" }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
            >
                <h3 className="text-lg md:text-xl font-bold font-playfair hover:text-[#ff6600] transition-all duration-500">{name} <FaExternalLinkAlt className="inline-block ml-1" /></h3>
                <p className="text-sm md:text-base text-gray-400 mt-1">{techStack.join(", ")}</p>
            </motion.div>
            {/* Links */}
            <motion.div
                className="absolute top-0 right-[20px] flex justify-center gap-5"
                initial={{ opacity: 0 }}
                animate={{ opacity: isHovered ? 1 : 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}>
                <a href={github} target="_blank" rel="noopener noreferrer">
                    <FaGithub className="hover:text-[#ff6600] h-5 w-5 hover:scale-125 transition-transform duration-500" />
                </a>
                <a href={liveDemo} target="_blank" rel="noopener noreferrer">
                    <FaLink className="hover:text-[#ff6600] h-5 w-5 hover:scale-125 transition-transform duration-500" />
                </a>
            </motion.div>
        </div>
    );
};

export default PortfolioCard;