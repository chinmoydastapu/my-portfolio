import { IoArrowBackCircleSharp } from "react-icons/io5";
import PortfolioCard from "../Cards/PortfolioCard";
import Heading from "../Home/Heading";
import portfolioList from "./portfolioList";
import { Link } from "react-router-dom";
import { useState } from "react";

function PortfolioPage() {
    const [activeTab, setActiveTab] = useState("All");
    const portfolioProjects = portfolioList;
    const categories = ["All", "React.js", "Next.js", "Firebase", "JWT", "MongoDB", "MySQL", "PHP", "Redux", "Node.js", "Express.js", "Sanity CMS", "OpenAI API", "Vue.js"];

    const filteredProjects = activeTab === "All" ? portfolioProjects : portfolioProjects.filter(project => project.techStack.includes(activeTab));
    
    return (
        <div id="portfolio" className="relative flex flex-col items-center p-2 sm:p-10 pt-8 sm:pt-0">
            <Link to='/' className="absolute top-5 sm:top-10 left-2 sm:left-10 px-5 py-3 rounded bg-[#1b1e22] uppercase font-semibold shadow-custom cursor-pointer transition-all duration-300 ease-in-out hover:-translate-y-1 hover:bg-[#16181c] hover:text-[#ff6600] flex items-center gap-2">
                <IoArrowBackCircleSharp className="h-6 w-6" /> <span className="hidden lg:inline">Go Back</span>
            </Link>
            <Heading data={{ shortText: 'visit my works', title: 'my portfolio' }} />
            <div className="w-full overflow-x-auto whitespace-nowrap mt-10 scrollbar-hide">
                <div className="flex w-max">
                    {categories.map((category, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveTab(category)}
                            className={`h-full px-4 py-2 text-base font-bold uppercase shadow-inside transition-colors duration-500 ${activeTab === category ? "text-[#ff6600]" : "hover:text-[#ff6600]"}`}
                        >
                            {category}
                        </button>
                    ))}
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 p-5 w-full shadow-inside">
                {filteredProjects.map(project => (
                    <PortfolioCard key={project.id} data={project} />
                ))}
            </div>
        </div>
    );
}

export default PortfolioPage;