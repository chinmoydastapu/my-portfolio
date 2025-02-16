import {motion} from 'framer-motion';

function HorizontalSkillBar ({ name, level, color }) {
    return (
        <div className="mb-6">
            {/* Skill Name */}
            <div className="flex justify-between items-center mb-2">
                <span className="text-lg font-semibold">{name}</span>
                <span className="text-sm font-semibold">{level}%</span>
            </div>

            {/* Progress Bar */}
            <div className="w-full bg-gray-800 rounded-full h-3 relative">
                <motion.div
                    initial={{ width: "0%" }}
                    animate={{ width: `${level}%` }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                    className={`h-full rounded-full bg-gradient-to-r ${color} shadow-lg `}
                ></motion.div>

                {/* Neon Glow Effect */}
                <div className="absolute top-0 left-0 h-full w-full rounded-full blur-sm opacity-50 bg-gradient-to-r from-gray-700 to-transparent"></div>
            </div>
        </div>
    );
}

export default HorizontalSkillBar;