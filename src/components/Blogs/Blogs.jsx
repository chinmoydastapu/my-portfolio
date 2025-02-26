import { FaArrowCircleRight } from "react-icons/fa";
import BlogCard from "../Cards/BlogCard";
import { Link } from "react-router-dom";
import blogList from "./blogList";

function Blogs() {
    const blogs = blogList;
    
    return (
        <div id="blogs" className="flex flex-col items-center gap-10 p-5 sm:p-10">
            <div className="text-center">
                <span className="uppercase bg-gradient-text text-transparent bg-clip-text font-bold">contents i have written</span>
                <h1 className="capitalize text-5xl font-bold mt-2 font-playfair">my blogs</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {blogs.slice(0, 2).map((blog, idx) => <BlogCard key={idx} data={blog} />)}
            </div>
            <Link to='/blogs' className="px-5 py-3 rounded bg-[#1b1e22] uppercase font-semibold shadow-custom cursor-pointer transition-all duration-300 ease-in-out hover:-translate-y-1 hover:bg-[#16181c] hover:text-[#ff6600] flex items-center gap-2"><span>More Blogs</span><FaArrowCircleRight className="w-6 h-6" /></Link>
        </div>
    );
}

export default Blogs;