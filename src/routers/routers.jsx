import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../components/Home/Home";
import BlogsPage from "../components/Blogs/BlogsPage";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/home',
                element: <Home />
            },
            {
                path: '/blogs',
                element: <BlogsPage />
            }
        ]
    },
    {
        path: '*',
        element: <div>You have come to the wrong page</div>
    }
])

export default router;