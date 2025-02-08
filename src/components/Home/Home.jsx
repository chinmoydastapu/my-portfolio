import Expertise from "../Expertise/Expertise";
import Footer from "../Footer/Footer";
import HeroSection from "../HeroSection/HeroSection";
import Resume from "../Resume/Resume";

function Home () {
    return (
        <div className="bg-[#32363b] grow">
            <HeroSection />
            <Expertise />
            <Resume />
            <Footer />
        </div>
    );
}

export default Home;