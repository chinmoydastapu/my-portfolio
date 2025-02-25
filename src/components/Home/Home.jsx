import { FaAnglesUp } from "react-icons/fa6";
import Expertise from "../Expertise/Expertise";
import Footer from "../Footer/Footer";
import HeroSection from "../HeroSection/HeroSection";
import Resume from "../Resume/Resume";
import { Link } from "react-scroll";

function Home() {
    return (
        <div className="bg-[#32363b] grow">
            <HeroSection />
            <div className="relative">
                <Expertise />
                <Resume />
                <Footer />
                <Link to="home" smooth={true} spy={true} duration={1000} className="absolute right-10 bottom-10 px-5 py-3 rounded bg-[#1b1e22] uppercase font-semibold shadow-custom cursor-pointer transition-all duration-300 ease-in-out hover:-translate-y-1 hover:bg-[#16181c] hover:text-[#ff6600]"><FaAnglesUp className="w-6 h-6" /></Link>
            </div>
        </div>
    );
}

export default Home;