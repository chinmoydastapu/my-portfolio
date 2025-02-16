import CircleProgressBar from "./CircleProgressBar";
import HorizontalSkillBar from "./HorizontalSkillBar";

function Skills() {
    const hardSkills = [
        { name: "Problem Solving", level: 88, color: "text-[#FF4500] drop-shadow-[0_0_10px_#FF4500]", stroke: "#FF4500" }, // Deep Orange
        { name: "JavaScript", level: 90, color: "text-[#FFD700] drop-shadow-[0_0_10px_#FFD700]", stroke: "#FFD700" }, // Gold
        { name: "React.js", level: 85, color: "text-[#00D8FF] drop-shadow-[0_0_10px_#00D8FF]", stroke: "#00D8FF" }, // React Cyan
        { name: "Node.js", level: 80, color: "text-[#66FF66] drop-shadow-[0_0_10px_#66FF66]", stroke: "#66FF66" }, // Bright Green
        { name: "Tailwind CSS", level: 95, color: "text-[#6366F1] drop-shadow-[0_0_10px_#6366F1]", stroke: "#6366F1" }, // Indigo Glow
        { name: "Express.js", level: 80, color: "text-[#A3A3A3] drop-shadow-[0_0_10px_#A3A3A3]", stroke: "#A3A3A3" }, // Gray
        { name: "Docker", level: 72, color: "text-[#0DB7ED] drop-shadow-[0_0_10px_#0DB7ED]", stroke: "#0DB7ED" }, // Docker Blue
        { name: "REST API", level: 85, color: "text-[#E34C26] drop-shadow-[0_0_10px_#E34C26]", stroke: "#E34C26" }, // Orange-Red
        { name: "Python", level: 80, color: "text-[#FFD43B] drop-shadow-[0_0_10px_#FFD43B]", stroke: "#FFD43B" }, // Python Yellow
        { name: "Git & GitHub", level: 90, color: "text-[#F34F29] drop-shadow-[0_0_10px_#F34F29]", stroke: "#F34F29" }, // GitHub Red
        { name: "MongoDB", level: 78, color: "text-[#4DB33D] drop-shadow-[0_0_10px_#4DB33D]", stroke: "#4DB33D" }, // MongoDB Green
        { name: "Firebase", level: 75, color: "text-[#FFCA28] drop-shadow-[0_0_10px_#FFCA28]", stroke: "#FFCA28" }, // Firebase Yellow
        { name: "MySQL", level: 82, color: "text-[#00758F] drop-shadow-[0_0_10px_#00758F]", stroke: "#00758F" }, // MySQL Blue
        { name: "Redux", level: 75, color: "text-[#764ABC] drop-shadow-[0_0_10px_#764ABC]", stroke: "#764ABC" }, // Redux Purple
        { name: "Canva", level: 85, color: "text-[#F24E1E] drop-shadow-[0_0_10px_#F24E1E]", stroke: "#F24E1E" }, // Canva Red
    ];

    const softSkills = [
        { name: "Creativity", level: 90, color: "from-yellow-400 to-orange-500" },
        { name: "Teamwork", level: 85, color: "from-blue-400 to-cyan-500" },
        { name: "Time Management", level: 80, color: "from-green-400 to-lime-500" },
        { name: "Communication", level: 95, color: "from-indigo-400 to-purple-500" },
        { name: "Adaptability", level: 88, color: "from-red-400 to-pink-500" },
        { name: "Critical Thinking", level: 87, color: "from-cyan-400 to-teal-500" },
        { name: "Leadership", level: 85, color: "from-orange-400 to-amber-500" },
        { name: "Attention to Detail", level: 90, color: "from-green-500 to-emerald-500" },
    ];

    return (
        <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-center mb-6 font-playfair">My Technical Skills</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 justify-center">
                {hardSkills.map((skill, idx) => (
                    <CircleProgressBar key={idx} {...skill} />
                ))}
            </div>

            <h2 className="text-2xl font-bold text-center mt-10 mb-6 font-playfair">My Soft Skills</h2>
            {softSkills.map((skill, idx) => (
                <HorizontalSkillBar key={idx} {...skill} />
            ))}
        </div>
    );
}

export default Skills;