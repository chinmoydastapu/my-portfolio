import { Link } from "react-router-dom";
import PortfolioCard from "../Cards/PortfolioCard";
import Heading from "../Home/Heading";
import portfolioList from "./portfolioList";
import { FaArrowCircleRight } from "react-icons/fa";

function Portfolio() {
    const portfolioProjects = portfolioList;

    return (
        <div id="portfolio" className="flex flex-col items-center gap-10 p-5 sm:p-10">
            <Heading data={{ shortText: 'visit my works', title: 'my portfolio' }} />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full">
                {
                    portfolioProjects.slice(0, 4).map((project, idx) => <PortfolioCard key={idx} data={project} />)
                }
            </div>
            <Link to='/portfolio' className="px-5 py-3 rounded bg-[#1b1e22] uppercase font-semibold shadow-custom cursor-pointer transition-all duration-300 ease-in-out hover:-translate-y-1 hover:bg-[#16181c] hover:text-[#ff6600] flex items-center gap-2"><span>Explore More</span><FaArrowCircleRight className="w-6 h-6" /></Link>
        </div>
    );
}

export default Portfolio;