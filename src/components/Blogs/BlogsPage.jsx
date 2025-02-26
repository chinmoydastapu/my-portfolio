import BlogCard from "../Cards/BlogCard";
import Heading from "../Home/Heading";
import blogList from "./blogList";

function BlogsPage() {
    const blogs = blogList;

    return (
        <div id="blogs" className="flex flex-col items-center gap-10 p-5 sm:p-10">
            <Heading data={{shortText: 'contents i have written', title: 'my blogs'}} />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {blogs.map((blog, idx) => <BlogCard key={idx} data={blog} />)}
            </div>
        </div>
    );
}

export default BlogsPage;