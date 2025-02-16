import { useState } from "react";
import Biography from "./Biography";
import Education from "./Education";
import Skills from "./Skills";
import Experience from "./Experience";

function Resume() {
    const [activeTab, setActiveTab] = useState(1);

    const resumeTabs = [
        { id: 0, label: "Biography", content: <Biography /> },
        { id: 1, label: "Education", content: <Education /> },
        { id: 2, label: "Skills", content: <Skills /> },
        { id: 3, label: "Experience", content: <Experience /> },
    ];

    return (
        <div className="flex flex-col items-center gap-10 p-5 sm:p-10">
            <div className="text-center">
                <span className="uppercase bg-gradient-text text-transparent bg-clip-text font-bold">2+ years of experience</span>
                <h1 className="capitalize text-5xl font-bold mt-2 font-playfair">my resume</h1>
            </div>
            <div className="w-full mx-auto">
                {/* Tab Navigation */}
                <div className="flex flex-wrap gap-5">
                    {resumeTabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`px-4 py-2 text-base md:text-lg font-bold uppercase rounded transition-all duration-500 ease-in-out ${activeTab === tab.id
                                ? "shadow-custom text-[#ff6600]"
                                : "hover:shadow-custom hover:text-[#ff6600]"
                                }`}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>

                {/* Tab Content */}
                <div className="mt-5 shadow-custom p-10">
                    {resumeTabs.find((tab) => tab.id === activeTab)?.content}
                </div>
            </div>
        </div>
    );
}

export default Resume;