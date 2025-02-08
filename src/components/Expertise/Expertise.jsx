import { HiOutlineCircleStack } from "react-icons/hi2";
import ExpertiseCard from "../Cards/ExpertiseCard";
import { FaCode } from "react-icons/fa6";
import { CgWebsite } from "react-icons/cg";

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
        <div className="flex flex-col items-center gap-10 p-5 sm:p-10">
            <div className="text-center">
                <span className="uppercase bg-gradient-text text-transparent bg-clip-text font-bold">my expertise</span>
                <h1 className="capitalize text-5xl font-bold mt-2 font-playfair">what i do</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
                {myExpertise.map((expertise, idx) => <ExpertiseCard key={idx} data={expertise} />)}
            </div>
        </div>
    );
}

export default Expertise;