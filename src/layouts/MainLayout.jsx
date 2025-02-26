import Footer from "../components/Footer/Footer";
import SideNav from "../components/SideNav/SideNav";
import { Outlet } from "react-router-dom";

function MainLayout() {
    return (
        <div className="flex font-roboto ">
            <SideNav />
            <div className="bg-[#32363b] grow">
                <Outlet />
                <Footer />
            </div>
        </div>
    );
}

export default MainLayout;