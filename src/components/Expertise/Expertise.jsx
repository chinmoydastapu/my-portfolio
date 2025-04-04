import { HiOutlineCircleStack } from "react-icons/hi2";
import ExpertiseCard from "../Cards/ExpertiseCard";
import { FaCode } from "react-icons/fa6";
import { CgWebsite } from "react-icons/cg";
import Heading from "../Home/Heading";

function Expertise() {
    const myExpertise = [
        {
            id: 1,
            icon: <HiOutlineCircleStack className="w-20 h-20" />,
            title: "MERN Stack Developer",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum consectetur, ipsum provident quos neque non, unde adipisci blanditiis dolor ab aut alias repellat nesciunt facilis quasi dicta expedita eveniet hic."
        },
        {
            id: 2,
            icon: <FaCode className="w-20 h-20" />,
            title: "Frontend Developer",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum consectetur, ipsum provident quos neque non, unde adipisci blanditiis dolor ab aut alias repellat nesciunt facilis quasi dicta expedita eveniet hic."
        },
        {
            id: 3,
            icon: <CgWebsite className="w-20 h-20" />,
            title: "Web Designer",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum consectetur, ipsum provident quos neque non, unde adipisci blanditiis dolor ab aut alias repellat nesciunt facilis quasi dicta expedita eveniet hic."
        },
    ];

    return (
        <div id="expertise" className="flex flex-col items-center gap-10 p-2 sm:p-10 pt-8 sm:pt-0">
            <Heading data={{shortText: 'what i do', title: 'my expertise'}} />
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
                {myExpertise.map((expertise, idx) => <ExpertiseCard key={idx} data={expertise} />)}
            </div>
        </div>
    );
}

export default Expertise;