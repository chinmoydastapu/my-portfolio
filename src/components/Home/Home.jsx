import { FaAnglesUp } from "react-icons/fa6";
import Expertise from "../Expertise/Expertise";
import HeroSection from "../HeroSection/HeroSection";
import Resume from "../Resume/Resume";
import { Link } from "react-scroll";
import { useEffect, useState } from "react";
import Portfolio from "../Portfolio/Portfolio";
import Clients from "../Clients/Clients";
import Pricing from "../Pricing/Pricing";
import Blogs from "../Blogs/Blogs";
import Contact from "../Contact/Contact";

function Home() {
    const [showUpButton, setShowUpButton] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > window.innerHeight * 0.5) {
                setShowUpButton(true);
            } else {
                setShowUpButton(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div>
            <HeroSection />
            <Expertise />
            <Portfolio />
            <Resume />
            <Clients />
            <Pricing />
            <Blogs />
            <Contact />

            {showUpButton && (
                <Link to="home" smooth={true} duration={1000} className="fixed right-10 bottom-10 px-5 py-3 rounded bg-[#1b1e22] uppercase font-semibold shadow-custom cursor-pointer transition-all duration-300 ease-in-out hover:-translate-y-1 hover:bg-[#16181c] hover:text-[#ff6600]">
                    <FaAnglesUp className="w-6 h-6" />
                </Link>
            )}
        </div>
    );
}

export default Home;