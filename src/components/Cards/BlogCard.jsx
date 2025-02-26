import { motion } from "framer-motion";
import { useState } from "react";

const BlogCard = ({ data }) => {
    const [isHovered, setIsHovered] = useState(false);

    const { image, title, category, date, excerpt, tags, author } = data;

    return (
        <div
            className="relative shadow-custom rounded overflow-hidden"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Blog Image */}
            <div className="overflow-hidden">
                <motion.img
                    src={image}
                    alt={title}
                    className="w-full h-60 object-cover transition-all ease-out duration-300"
                    animate={{ scale: isHovered ? 1.1 : 1 }}
                />
            </div>

            {/* Content */}
            <div className="p-6">
                <div className="flex items-center justify-between text-sm">
                    <span className="px-3 py-1 text-xs font-semibold rounded shadow-custom">
                        {category}
                    </span>
                    <span>{date}</span>
                </div>

                <h2 className={`mt-4 text-xl font-bold font-playfair transition-colors duration-500 ${isHovered && 'text-[#ff6600]'}`}>{title}</h2>
                <p className={`mt-2 text-sm transition-colors duration-500 ${!isHovered && 'text-gray-400'}`}>{excerpt}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-4">
                    {tags.map((tag, index) => (
                        <span
                            key={index}
                            className={`text-xs px-2 py-1 rounded shadow-custom transition-colors duration-500 ${!isHovered && 'text-gray-400'}`}
                        >
                            #{tag}
                        </span>
                    ))}
                </div>

                {/* Author & Read More */}
                <div className="flex items-center justify-between mt-6">
                    <p className="text-sm text-gray-400">By {author}</p>
                    <button className="px-4 py-2 text-sm font-semibold rounded shadow-custom transition-all duration-300 ease-in-out hover:-translate-y-1 hover:bg-[#16181c] hover:text-[#ff6600]">
                        Read More
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BlogCard;
