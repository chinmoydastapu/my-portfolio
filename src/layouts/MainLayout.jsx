import { useEffect, useState } from "react";
import Footer from "../components/Footer/Footer";
import SideNav from "../components/SideNav/SideNav";
import { Outlet } from "react-router-dom";
import { FaAnglesUp } from "react-icons/fa6";
import { Link } from "react-scroll";
import { FaChevronRight } from "react-icons/fa";

function MainLayout() {
    const [showUpButton, setShowUpButton] = useState(false);
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

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
        <div className="flex relative">
            {/* Menu button for small screens */}
            <button
                onClick={() => setIsDrawerOpen(true)}
                className={`fixed top-5 left-5 z-50 bg-[#212428] text-white p-3 rounded-md shadow-custom ${isDrawerOpen ? 'hidden' : 'block'} lg:hidden`}
            >
                <FaChevronRight className="w-6 h-6" />
            </button>

            <SideNav isDrawerOpen={isDrawerOpen} closeDrawer={() => setIsDrawerOpen(false)} />

            <div className="grow">
                <Outlet />
                <Footer />
            </div>

            {showUpButton && (
                <Link
                    to="home"
                    smooth={true}
                    duration={1000}
                    className="fixed right-10 bottom-10 px-5 py-3 rounded bg-[#1b1e22] uppercase font-semibold shadow-custom cursor-pointer transition-all duration-300 ease-in-out hover:-translate-y-1 hover:bg-[#16181c] hover:text-[#ff6600]"
                >
                    <FaAnglesUp className="w-6 h-6" />
                </Link>
            )}
        </div>
    );
}

export default MainLayout;
