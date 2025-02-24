import { useState } from "react";

const Education = () => {
    const educationData = [
        {
            id: 1,
            degree: "B.Sc. - Computer Science and Engineering",
            institution: "Port City International University",
            year: "2020 - 2024",
            cgpa: "3.46/4.00",
            description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos sunt in vitae quae, enim labore debitis, quidem hic eaque ratione veritatis illum, omnis recusandae eligendi voluptatem atque iure cumque rerum.",
        },
        {
            id: 2,
            degree: "HSC - Higher Secondary Certificate",
            institution: "Satkania Government College",
            year: "2017 - 2019",
            cgpa: "4.00/5.00",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos nulla, autem praesentium modi alias iusto exercitationem sed illum consequatur sit labore odit voluptate quas ipsa nam ipsam assumenda repellat corrupti.",
        },
        {
            id: 3,
            degree: "SSC - Secondary School Certificate",
            institution: "South Kanchona N.A Chowdhury High School",
            year: "2015 - 2017",
            cgpa: "4.55/5.00",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim veritatis doloribus, officiis velit, magnam voluptatibus illo ipsa reprehenderit molestiae ducimus culpa unde, placeat quae. Non voluptas vitae consequuntur beatae doloremque?",
        },
        {
            id: 4,
            degree: "JSC - Junior School Certificate",
            institution: "South Kanchona N.A Chowdhury High School",
            year: "2012 - 2014",
            cgpa: "4.56/5.00",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti autem fugiat pariatur, ab voluptatum harum? Nisi obcaecati ea nihil, laborum eos quo, aperiam optio mollitia assumenda odio sed, expedita sapiente?",
        },
    ];

    const [hoveredIndex, setHoveredIndex] = useState(null);

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 cursor-default">
            {educationData.map((edu, idx) => (
                <div key={idx} className="relative flex gap-6" onMouseEnter={() => setHoveredIndex(idx)} 
                onMouseLeave={() => setHoveredIndex(null)}>
                    <div className={`border-l-2 absolute left-0 top-0 h-full border-[#212428] transition-colors duration-500`}></div>
                    <div className={`absolute -left-[11px] top-0 w-6 h-6 border-4 border-[#212428] rounded-full transition-colors duration-500 ${hoveredIndex === idx ? 'bg-[#ff6600]' : 'bg-[#32363b]'}`}></div>

                    <div className="ml-10 w-full">
                        <h3 className={`text-lg font-bold font-playfair transition-colors duration-500 ${hoveredIndex === idx && 'text-[#ff6600]'}`}>{edu.degree}</h3>
                        <p className={`text-sm font-semibold transition-colors duration-500 ${hoveredIndex !== idx && 'text-gray-400'}`}>{edu.institution}</p>
                        <span className="shadow-custom px-3 py-1 text-xs inline-block mt-2">
                            {edu.year}
                        </span>
                        <p className={`mt-3 transition-colors duration-500 ${hoveredIndex !== idx && 'text-gray-400'}`}>{edu.description}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Education;
