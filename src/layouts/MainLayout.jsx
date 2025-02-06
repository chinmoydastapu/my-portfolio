import { Outlet } from "react-router-dom";
import SideNav from "../components/SideNav/SideNav";

function MainLayout () {
    return (
        <div className="flex font-roboto">
            <SideNav />
            <Outlet />
        </div>
    );
}

export default MainLayout;