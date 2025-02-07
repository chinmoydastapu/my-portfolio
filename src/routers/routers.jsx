import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />
    },
    {
        path: '*',
        element: <div>You have come to the wrong page</div>
    }
])

export default router;