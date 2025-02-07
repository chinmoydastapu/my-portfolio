import SideNav from "../components/SideNav/SideNav";
import Home from "../components/Home/Home";

function MainLayout () {
    return (
        <div className="flex font-roboto">
            <SideNav />
            <Home />
        </div>
    );
}

export default MainLayout;