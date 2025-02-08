import Expertise from "../Expertise/Expertise";
import HeroSection from "../HeroSection/HeroSection";

function Home () {
    return (
        <div className="bg-[#32363b] grow">
            <HeroSection />
            <Expertise />
        </div>
    );
}

export default Home;