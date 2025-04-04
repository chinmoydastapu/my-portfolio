import { Link } from "react-router-dom";
import BlogCard from "../Cards/BlogCard";
import Heading from "../Home/Heading";
import blogList from "./blogList";
import { IoArrowBackCircleSharp } from "react-icons/io5";

function BlogsPage() {
    const blogs = blogList;

    return (
        <div id="blogs" className="relative flex flex-col items-center gap-10 p-2 sm:p-10 pt-8 sm:pt-0">
            <Link to='/' className="absolute top-5 sm:top-10 left-2 sm:left-10 px-5 py-3 rounded bg-[#1b1e22] uppercase font-semibold shadow-custom cursor-pointer transition-all duration-300 ease-in-out hover:-translate-y-1 hover:bg-[#16181c] hover:text-[#ff6600] flex items-center gap-2">
                <IoArrowBackCircleSharp className="h-6 w-6" /> <span className="hidden lg:inline">Go Back</span>
            </Link>
            <Heading data={{shortText: 'contents i have written', title: 'my blogs'}} />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {blogs.map((blog, idx) => <BlogCard key={idx} data={blog} />)}
            </div>
        </div>
    );
}

export default BlogsPage;