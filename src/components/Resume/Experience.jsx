import { useState } from "react";

function Experience() {
    const experienceData = [
        {
            id: 1,
            company: "Upwork Inc. | Freelancer",
            position: "Frontend Web Developer",
            year: "Nov 2024 - Present",
            description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos sunt in vitae quae, enim labore debitis, quidem hic eaque ratione veritatis illum, omnis recusandae eligendi voluptatem atque iure cumque rerum.",
        },
    ];

    const [hoveredIndex, setHoveredIndex] = useState(null);

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 cursor-default">
            {experienceData.map((exp, idx) => (
                <div key={idx} className="relative flex gap-6" onMouseEnter={() => setHoveredIndex(idx)}
                    onMouseLeave={() => setHoveredIndex(null)}>
                    <div className={`border-l-2 absolute left-0 top-0 h-full border-[#212428] transition-colors duration-500`}></div>
                    <div className={`absolute -left-[11px] top-0 w-6 h-6 border-4 border-[#212428] rounded-full transition-colors duration-500 ${hoveredIndex === idx ? 'bg-[#ff6600]' : 'bg-[#32363b]'}`}></div>

                    <div className="ml-10 w-full">
                        <h3 className={`text-lg font-bold font-playfair transition-colors duration-500 ${hoveredIndex === idx && 'text-[#ff6600]'}`}>{exp.company}</h3>
                        <p className={`text-sm font-semibold transition-colors duration-500 ${hoveredIndex !== idx && 'text-gray-400'}`}>{exp.position}</p>
                        <span className="shadow-custom px-3 py-1 text-xs inline-block mt-2">
                            {exp.year}
                        </span>
                        <p className={`mt-3 transition-colors duration-500 ${hoveredIndex !== idx && 'text-gray-400'}`}>{exp.description}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Experience;