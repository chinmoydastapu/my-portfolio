import { useState } from "react";
import Biography from "./Biography";
import Education from "./Education";
import Skills from "./Skills";
import Experience from "./Experience";
import Heading from "../Home/Heading";

function Resume() {
    const [activeTab, setActiveTab] = useState(1);

    const resumeTabs = [
        { id: 0, label: "Biography", content: <Biography /> },
        { id: 1, label: "Education", content: <Education /> },
        { id: 2, label: "Skills", content: <Skills /> },
        { id: 3, label: "Experience", content: <Experience /> },
    ];

    return (
        <div id="resume" className="flex flex-col items-center gap-10 p-2 sm:p-10 pt-8 sm:pt-0">
            <Heading data={{ shortText: '1+ years of experience', title: 'my resume' }} />
            <div className="w-full mx-auto">
                {/* Tab Navigation */}
                <div className="flex flex-col md:flex-row">
                    {resumeTabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`h-full p-4 text-base font-bold uppercase shadow-inside transition-colors duration-500 ${activeTab === tab.id
                                ? "text-[#ff6600]"
                                : "hover:text-[#ff6600]"
                                }`}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>

                {/* Tab Content */}
                <div className="shadow-inside p-10 text-sm md:text-base">
                    {resumeTabs.find((tab) => tab.id === activeTab)?.content}
                </div>
            </div>
        </div>
    );
}

export default Resume;