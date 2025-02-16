import { motion } from 'framer-motion';

function CircleProgressBar({ name, level, color, stroke }) {
    return (
        <div className="flex flex-col items-center">
            <svg width="80" height="80" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="40" stroke="#1E293B" strokeWidth="8" fill="none" />
                <motion.circle
                    cx="50"
                    cy="50"
                    r="40"
                    stroke={stroke}
                    strokeWidth="8"
                    strokeDasharray="251"
                    strokeDashoffset="251"
                    fill="none"
                    initial={{ strokeDashoffset: 251 }}
                    animate={{ strokeDashoffset: 251 - (level / 100) * 251 }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                    strokeLinecap="round"
                />
                <text
                    x="50"
                    y="50"
                    textAnchor="middle"
                    alignmentBaseline="middle"
                    className="font-bold text-lg fill-current"
                    fontSize="14"
                >
                    {level}%
                </text>
            </svg>
            <p className={`mt-2 font-bold ${color}`}>{name}</p>
        </div>
    );
}

export default CircleProgressBar;