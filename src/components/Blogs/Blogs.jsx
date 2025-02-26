import BlogCard from "../Cards/BlogCard";

function Blogs() {
    const blogs = [
        {
            id: 1,
            title: "Getting Started with MERN Stack: A Beginner’s Guide",
            slug: "getting-started-mern-stack",
            author: "Chinmoy",
            date: "25-02-2025",
            category: "Web Development",
            tags: ["MERN", "React", "Node.js", "MongoDB", "Express.js"],
            image: "https://www.freecodecamp.org/news/content/images/2024/01/Copy-of-mern-stack-hotel-booking-website--1-.png",
            excerpt: "A step-by-step guide to building your first MERN stack application from scratch.",
            content: "The MERN stack consists of MongoDB, Express.js, React, and Node.js. It is used to build full-stack web applications. MongoDB is a NoSQL database, Express.js is a lightweight web framework for Node.js, React is used for building user interfaces, and Node.js is a JavaScript runtime for executing server-side code. This guide will help you set up a MERN project, create a backend API with Express, and connect it to a React frontend."
        },
        {
            id: 2,
            title: "Pagination in React with react-paginate",
            slug: "pagination-in-react",
            author: "Chinmoy",
            date: "20-02-2025",
            category: "Frontend",
            tags: ["React", "Pagination", "react-paginate", "UI/UX"],
            image: "https://i.ytimg.com/vi/Y48V8gNUvew/hqdefault.jpg",
            excerpt: "Learn how to implement efficient client-side pagination in React using the react-paginate library.",
            content: "Pagination is essential when handling large data sets in web applications. The react-paginate library allows developers to create interactive pagination components easily. By setting up state management and updating the displayed data on page changes, pagination improves user experience and optimizes performance."
        },
        {
            id: 3,
            title: "State Management in React: Context API vs Redux",
            slug: "react-state-management",
            author: "Chinmoy",
            date: "18-02-2025",
            category: "React.js",
            tags: ["React", "State Management", "Redux", "Context API"],
            image: "/images/react-state.jpg",
            excerpt: "Should you use Context API or Redux for state management? Let’s break it down!",
            content: "React provides different ways to manage state, including Context API and Redux. Context API is a built-in feature in React that allows global state management without external libraries. It is suitable for small to medium applications. Redux, on the other hand, is a third-party library that manages state centrally, making it ideal for large-scale applications where state updates need to be predictable and efficient."
        },
        {
            id: 4,
            title: "Building a REST API with Node.js and Express",
            slug: "rest-api-node-express",
            author: "Chinmoy",
            date: "15-02-2025",
            category: "Backend",
            tags: ["Node.js", "Express.js", "API", "Backend"],
            image: "/images/rest-api-node.jpg",
            excerpt: "Learn how to create a RESTful API using Node.js and Express from scratch.",
            content: "A REST API allows applications to communicate over HTTP. Node.js and Express.js make it easy to build efficient and scalable APIs. Express provides middleware functions for handling requests and responses, while MongoDB can be integrated for database storage. REST APIs typically include endpoints for creating, reading, updating, and deleting data."
        },
        {
            id: 5,
            title: "Introduction to TailwindCSS: Faster Styling for Developers",
            slug: "introduction-tailwindcss",
            author: "Chinmoy",
            date: "10-02-2025",
            category: "CSS Frameworks",
            tags: ["TailwindCSS", "CSS", "Frontend", "UI/UX"],
            image: "/images/tailwind-intro.jpg",
            excerpt: "TailwindCSS allows developers to create stunning UI components quickly and efficiently.",
            content: "TailwindCSS is a utility-first CSS framework that simplifies the styling process by providing pre-defined classes. Unlike traditional CSS frameworks, TailwindCSS enables faster development by eliminating the need to write custom CSS. It is highly customizable, and its component-based approach makes UI development efficient and maintainable."
        },
        {
            id: 6,
            title: "Integrating Axios in React for API Calls",
            slug: "axios-in-react",
            author: "Chinmoy",
            date: "02-05-2025",
            category: "React.js",
            tags: ["React", "Axios", "API", "Frontend"],
            image: "/images/axios-react.jpg",
            excerpt: "Learn how to fetch and post data in React applications using Axios.",
            content: "Axios is a promise-based HTTP client for making API requests in React applications. It simplifies sending GET, POST, PUT, and DELETE requests to backend services. Axios also provides features like request cancellation, automatic JSON conversion, and error handling, making it a preferred choice over the built-in fetch API."
        },
        {
            id: 7,
            title: "Understanding MongoDB: NoSQL Database Explained",
            slug: "mongodb-nosql-database",
            author: "Chinmoy",
            date: "02-01-2025",
            category: "Databases",
            tags: ["MongoDB", "NoSQL", "Database", "Backend"],
            image: "/images/mongodb-guide.jpg",
            excerpt: "MongoDB is a popular NoSQL database that offers flexibility and scalability for modern applications.",
            content: "MongoDB is a document-based NoSQL database that stores data in a flexible JSON-like format. Unlike traditional SQL databases, it does not require a fixed schema, making it ideal for applications with evolving data structures. MongoDB supports high scalability and efficient querying, making it popular for modern web applications."
        },
        {
            id: 8,
            title: "Deploying React Apps on Vercel: A Complete Guide",
            slug: "deploy-react-vercel",
            author: "Chinmoy",
            date: "01-28-2025",
            category: "Deployment",
            tags: ["React", "Vercel", "Deployment", "CI/CD"],
            image: "/images/react-vercel-deploy.jpg",
            excerpt: "A step-by-step guide to deploying your React project on Vercel for free.",
            content: "Vercel is a cloud platform for hosting frontend applications with automatic deployments. It integrates well with GitHub and provides continuous deployment for React applications. With features like serverless functions and easy domain management, Vercel is a great choice for deploying React projects effortlessly."
        },
        {
            id: 9,
            title: "Getting Started with Next.js for Server-Side Rendering",
            slug: "getting-started-nextjs",
            author: "Chinmoy",
            date: "01-20-2025",
            category: "Full-Stack Development",
            tags: ["Next.js", "React", "SSR", "SEO"],
            image: "/images/nextjs-guide.jpg",
            excerpt: "Next.js enhances React with server-side rendering and better SEO optimization.",
            content: "Next.js is a React framework that supports server-side rendering (SSR) and static site generation (SSG). It improves performance by reducing the amount of JavaScript needed for rendering pages. Next.js also provides built-in routing, API handling, and enhanced SEO capabilities, making it a preferred choice for modern web applications."
        },
        {
            id: 10,
            title: "Building an Authentication System in MERN Stack",
            slug: "mern-authentication-system",
            author: "Chinmoy",
            date: "01-15-2025",
            category: "Full-Stack Development",
            tags: ["MERN", "Authentication", "JWT", "Node.js"],
            image: "https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fzmbxs27vp8lip5321f0d.jpg",
            excerpt: "Learn how to implement user authentication in a MERN stack application using JWT.",
            content: "Authentication is a crucial part of web applications. In a MERN stack app, user authentication is typically implemented using JSON Web Tokens (JWT). The backend validates user credentials, generates a token, and sends it to the frontend. The frontend stores the token and includes it in API requests to authorize users securely."
        }
    ];

    return (
        <div id="blogs" className="flex flex-col items-center gap-10 p-5 sm:p-10">
            <div className="text-center">
                <span className="uppercase bg-gradient-text text-transparent bg-clip-text font-bold">contents i have written</span>
                <h1 className="capitalize text-5xl font-bold mt-2 font-playfair">my blogs</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {blogs.slice(0, 2).map((blog, idx) => <BlogCard key={idx} data={blog} />)}
            </div>
        </div>
    );
}

export default Blogs;