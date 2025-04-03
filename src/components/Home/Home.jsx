import Expertise from "../Expertise/Expertise";
import HeroSection from "../HeroSection/HeroSection";
import Resume from "../Resume/Resume";
import Portfolio from "../Portfolio/Portfolio";
import Clients from "../Clients/Clients";
import Pricing from "../Pricing/Pricing";
import Blogs from "../Blogs/Blogs";
import Contact from "../Contact/Contact";

function Home() {
    return (
        <div>
            <HeroSection />
            <Expertise />
            <Portfolio />
            <Resume />
            <Clients />
            <Pricing />
            <Blogs />
            <Contact />
        </div>
    );
}

export default Home;