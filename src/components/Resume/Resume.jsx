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
        <div id="resume" className="flex flex-col items-center gap-10 p-5 sm:p-10">
            <Heading data={{shortText: '1+ years of experience', title: 'my resume'}} />
            <div className="w-full mx-auto">
                {/* Tab Navigation */}
                <div className="flex gap-5">
                    {resumeTabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`h-full px-4 py-2 text-base md:text-lg font-bold uppercase transition-colors duration-500 ${activeTab === tab.id
                                ? "border-b-2 border-b-[#ff6600] text-[#ff6600]"
                                : "hover:border-b-[#ff6600] hover:border-b-2 hover:text-[#ff6600]"
                                }`}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>

                {/* Tab Content */}
                <div className="shadow-custom p-10">
                    {resumeTabs.find((tab) => tab.id === activeTab)?.content}
                </div>
            </div>
        </div>
    );
}

export default Resume;