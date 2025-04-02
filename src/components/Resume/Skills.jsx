import HorizontalSkillBar from "./HorizontalSkillBar";

function Skills() {
    const hardSkills = [
        { name: "JavaScript", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpuYdLEzBvwemix8pwsncUkLLOQqnByncadg&s" },
        { name: "React.js", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQptbbZnMwz8HTIVr27hg9ZhSzPmIc67mHsig&s" },
        { name: "Node.js", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJvCeq3uzcMcxdvC5F-gfZJpOaePBfpbcJpg&s" },
        { name: "Tailwind CSS", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSDKn3vA2YUbXzN0ZC3gALWJ08gJN-Drl15w&s" },
        { name: "Express.js", logo: "https://testrigor.com/wp-content/uploads/2023/02/express-logo_square.png" },
        { name: "Docker", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtQGzpuSOFxE_Ff7QQntIvueO1J1he0JsLTQ&s" },
        { name: "REST API", logo: "https://dfdmyvckxgqn5.cloudfront.net/_app/immutable/assets/building-elegant-rest-apis.d8f4cbc6.jpg" },
        { name: "Python", logo: "https://4kwallpapers.com/images/wallpapers/python-logo-dark-2048x2048-16094.png" },
        { name: "Git & GitHub", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXveT_wtxB2CwGBTsK_Fa5E87tp3n6CjxH5Q&s" },
        { name: "MongoDB", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTbIt_91Td_i7qFiC0vebjDJPPvYQ9SYGbdA&s" },
        { name: "Firebase", logo: "https://firebase.google.com/static/images/brand-guidelines/logo-logomark.png" },
        { name: "MySQL", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfDOJeTNGLnHgEwynN6PRxhJPFUKxWtZRloA&s" },
        { name: "Redux", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsVw6XrV_bi5-_sFIbvhYWJmoTkMJDPC0alw&s" },
        { name: "Canva", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFuVjFUXlbBHVGb_1mdmUdlo5H9Y1BhxN3-w&s" }
    ];

    const softSkills = [
        { name: "Problem Solving", level: 90, color: "from-yellow-400 to-orange-500" },
        { name: "Teamwork", level: 91, color: "from-blue-400 to-cyan-500" },
        { name: "Time Management", level: 96, color: "from-green-400 to-lime-500" },
        { name: "Communication", level: 95, color: "from-indigo-400 to-purple-500" },
        { name: "Adaptability", level: 98, color: "from-red-400 to-pink-500" },
        { name: "Critical Thinking", level: 89, color: "from-cyan-400 to-teal-500" },
        { name: "Leadership", level: 92, color: "from-orange-400 to-amber-500" },
        { name: "Attention to Detail", level: 87, color: "from-green-500 to-emerald-500" },
    ];

    return (
        <div className="mx-auto">
            <h2 className="text-2xl font-bold text-center mb-6 font-playfair">My Technical Skills</h2>
            <div className="flex flex-wrap justify-center items-center gap-5 w-full text-center">
                {hardSkills.map((skill, idx) => (
                    <div key={idx} className="w-20 h-20 shadow-custom">
                        <img className="w-full h-full" title={skill.name} src={skill.logo} alt={skill.name} />
                    </div>
                ))}
            </div>

            <h2 className="text-2xl font-bold text-center mt-10 mb-6 font-playfair">My Soft Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {softSkills.sort((a, b) => b.level - a.level).map((skill, idx) => (
                    <HorizontalSkillBar key={idx} {...skill} />
                ))}
            </div>
        </div>
    );
}

export default Skills;