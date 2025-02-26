import BlogCard from "../Cards/BlogCard";
import blogList from "./blogList";

function BlogsPage() {
    const blogs = blogList;

    return (
        <div id="blogs" className="flex flex-col items-center gap-10 p-5 sm:p-10">
            <div className="text-center">
                <span className="uppercase bg-gradient-text text-transparent bg-clip-text font-bold">contents i have written</span>
                <h1 className="capitalize text-5xl font-bold mt-2 font-playfair">my blogs</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {blogs.map((blog, idx) => <BlogCard key={idx} data={blog} />)}
            </div>
        </div>
    );
}

export default BlogsPage;